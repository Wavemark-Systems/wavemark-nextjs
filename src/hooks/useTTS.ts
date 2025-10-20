import { useState, useRef } from 'react';
import { Client } from '@gradio/client';

export interface TTSResponse {
  data: Array<{
    url: string;
    name?: string;
    orig_name?: string;
    size?: number;
  }>;
}

// Rate limiting configuration
const MAX_REQUESTS_PER_MINUTE = 10;
const MAX_REQUESTS_PER_HOUR = 30;
const MINUTE_IN_MS = 60 * 1000;
const HOUR_IN_MS = 60 * 60 * 1000;
export const MAX_TEXT_LENGTH = 5000; // Maximum characters per request

export function useTTS() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  
  // Track request timestamps for rate limiting (persisted in localStorage)
  const requestTimestamps = useRef<number[]>([]);

  // Load timestamps from localStorage on initialization
  const loadTimestamps = (): number[] => {
    if (typeof window === 'undefined') return [];
    try {
      const stored = localStorage.getItem('tts_timestamps');
      if (stored) {
        const timestamps = JSON.parse(stored) as number[];
        const now = Date.now();
        // Only keep timestamps from the last hour
        return timestamps.filter(timestamp => now - timestamp < HOUR_IN_MS);
      }
    } catch {
      // Ignore errors
    }
    return [];
  };

  // Save timestamps to localStorage
  const saveTimestamps = (timestamps: number[]) => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem('tts_timestamps', JSON.stringify(timestamps));
    } catch {
      // Ignore errors
    }
  };

  const checkRateLimit = (): { allowed: boolean; message?: string } => {
    const now = Date.now();
    
    // Load existing timestamps from localStorage
    if (requestTimestamps.current.length === 0) {
      requestTimestamps.current = loadTimestamps();
    }
    
    // Remove timestamps older than 1 hour
    requestTimestamps.current = requestTimestamps.current.filter(
      timestamp => now - timestamp < HOUR_IN_MS
    );
    
    // Count requests in the last minute
    const recentRequests = requestTimestamps.current.filter(
      timestamp => now - timestamp < MINUTE_IN_MS
    );
    
    if (recentRequests.length >= MAX_REQUESTS_PER_MINUTE) {
      return {
        allowed: false,
        message: `Rate limit exceeded. Please wait a moment before trying again.`
      };
    }
    
    if (requestTimestamps.current.length >= MAX_REQUESTS_PER_HOUR) {
      return {
        allowed: false,
        message: `Hourly rate limit exceeded. Please try again later.`
      };
    }
    
    return { allowed: true };
  };

  const generateSpeech = async (text: string): Promise<string | null> => {
    if (!text.trim()) {
      setError('Please enter some text');
      return null;
    }

    // Check text length limit
    if (text.length > MAX_TEXT_LENGTH) {
      setError(`Text is too long. Maximum ${MAX_TEXT_LENGTH} characters allowed.`);
      return null;
    }

    // Check rate limit before making request
    const rateLimitCheck = checkRateLimit();
    if (!rateLimitCheck.allowed) {
      setError(rateLimitCheck.message || 'Rate limit exceeded');
      return null;
    }

    setLoading(true);
    setError(null);

    try {
      // Record this request timestamp
      const timestamp = Date.now();
      requestTimestamps.current.push(timestamp);
      saveTimestamps(requestTimestamps.current);
      
      // Connect to the Gradio space using the official client
      const client = await Client.connect("vivienhenz/luxembourgish-tts");
      
      // Use the generate_speech endpoint with all 5 parameters
      const job = client.submit("/generate_speech", [
        text,    // text input
        1024,    // max_new_tokens
        0.7,     // temperature
        0.95,    // top_p
        1.0      // repetition_penalty
      ]);
      
      // Iterate through the async generator
      for await (const message of job) {
        if (message.type === 'data') {
          const data = message.data as Array<{ url: string } | string>;
          const url = typeof data[0] === 'string' ? data[0] : data[0]?.url;
          
          if (url) {
            setAudioURL(url);
            setLoading(false);
            return url;
          }
        }
        
        if (message.type === 'status') {
          if (message.stage === 'error') {
            const errorMsg = typeof message.message === 'string' ? message.message : 'Generation failed';
            throw new Error(errorMsg);
          }
        }
      }
      
      throw new Error('No audio URL received');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to generate speech';
      setError(errorMessage);
      setLoading(false);
      return null;
    }
  };

  const playAudio = async (text: string) => {
    // Stop any currently playing audio
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    // If we already have the audio URL for this text, just play it
    // Otherwise, generate new speech
    let url = audioURL;
    if (!url || audio?.src !== audioURL) {
      url = await generateSpeech(text);
    }

    if (url) {
      const newAudio = new Audio(url);
      setAudio(newAudio);
      
      newAudio.play().catch(err => {
        setError('Failed to play audio: ' + err.message);
      });
    }
  };

  const downloadAudio = async (text: string, filename: string = 'luxembourgish-audio.wav') => {
    let url = audioURL;
    
    // Generate audio if we don't have it yet
    if (!url) {
      url = await generateSpeech(text);
    }

    if (url) {
      try {
        const response = await fetch(url);
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(downloadUrl);
      } catch (err) {
        setError('Failed to download audio: ' + (err instanceof Error ? err.message : 'Unknown error'));
      }
    }
  };

  const stopAudio = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  return {
    loading,
    error,
    audioURL,
    generateSpeech,
    playAudio,
    downloadAudio,
    stopAudio,
    isPlaying: audio && !audio.paused
  };
}

