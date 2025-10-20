import { useState } from 'react';

export interface TTSResponse {
  data: Array<{
    url: string;
    name?: string;
    orig_name?: string;
    size?: number;
  }>;
}

export function useTTS() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const generateSpeech = async (text: string): Promise<string | null> => {
    if (!text.trim()) {
      setError('Please enter some text');
      return null;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        'https://vivienhenz-luxembourgish-tts.hf.space/api/predict',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            data: [text]
          })
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: TTSResponse = await response.json();
      const url = result.data[0].url;
      
      setAudioURL(url);
      setLoading(false);
      
      return url;
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

