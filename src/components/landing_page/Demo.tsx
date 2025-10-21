'use client';

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTTS, MAX_TEXT_LENGTH } from "@/hooks/useTTS";
import { track } from '@vercel/analytics';

export default function Demo() {
  const [text, setText] = useState("");
  const { loading, error, generateSpeech, downloadAudio, audioURL } = useTTS();
  const [isPlaying, setIsPlaying] = useState(false);
  const [barCount, setBarCount] = useState(60);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Set bar count based on screen size


  useEffect(() => {
    const updateBarCount = () => {
      setBarCount(window.innerWidth < 640 ? 30 : 60);
    };
    
    updateBarCount();
    window.addEventListener('resize', updateBarCount);
    return () => window.removeEventListener('resize', updateBarCount);
  }, []);

  const handleGenerate = async () => {
    // Track audio generation event
    track('audio_generated', {
      text_length: text.length,
    });
    await generateSpeech(text);
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
        // Track audio playback event
        track('audio_played', {
          text_length: text.length,
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleDownload = () => {
    downloadAudio(text, 'luxembourgish-audio.wav');
  };

  // Update audio element when audioURL changes
  useEffect(() => {
    if (audioURL && audioRef.current) {
      audioRef.current.src = audioURL;
      audioRef.current.onended = () => setIsPlaying(false);
    }
  }, [audioURL]);

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-6xl mx-auto w-full">
      <div className="w-full border-2 border-black rounded-lg overflow-hidden">
        {/* GPU Quota Notice */}
        <div className="p-3 border-b border-red-200 bg-red-50/30">
          <p className="text-sm text-red-700 text-center">
            Due to higher demand than I expected, I've exceeded my free GPU quota for today. Please use the Download link above to access the model on HuggingFace, or check out the examples below.
          </p>
        </div>
        <div className="relative">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type or paste your Luxembourgish text here..."
            spellCheck={false}
            maxLength={MAX_TEXT_LENGTH}
            className="w-full h-64 sm:h-80 lg:h-96 p-4 sm:p-6 pb-8 text-black text-base sm:text-lg resize-none focus:outline-none border-0"
          />
          {/* Character Counter */}
          <div className="absolute bottom-2 right-2 px-2 py-1 bg-white/80 backdrop-blur-sm rounded">
            <span className={`text-xs sm:text-sm ${text.length > MAX_TEXT_LENGTH * 0.9 ? 'text-orange-600' : 'text-gray-500'}`}>
              {text.length} / {MAX_TEXT_LENGTH}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-0">
          {error && (
            <div className="px-4 py-2 bg-red-50 border-t border-red-200 text-red-600 text-xs sm:text-sm">
              {error}
            </div>
          )}
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 p-3 sm:p-4 border-t border-gray-100 bg-white">
            {/* Audio Player with Waveform */}
            {loading ? (
              <div className="flex-1 flex items-center gap-3 text-gray-600">
                <svg className="animate-spin h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Generating audio...</span>
                  <span className="text-xs text-red-600">May take 20-30 seconds due to high demand</span>
                </div>
              </div>
            ) : audioURL ? (
              <div className="flex-1 flex items-center gap-3 sm:gap-4">
                <audio ref={audioRef} className="hidden" />
                <button
                  onClick={handlePlayPause}
                  className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[1px] hover:translate-y-[1px]"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  )}
                </button>
                
                {/* Sound Wave Visualization */}
                <div className="flex-1 flex items-center gap-0.5 sm:gap-1 h-10 sm:h-12">
                  {[...Array(barCount)].map((_, i) => {
                    const height = Math.sin(i / 3) * 20 + 25 + Math.random() * 10;
                    return (
                      <div
                        key={i}
                        className={`flex-1 bg-black rounded-full transition-all duration-150 ${
                          isPlaying ? 'animate-pulse' : ''
                        }`}
                        style={{
                          height: `${height}%`,
                          animationDelay: `${i * 0.05}s`,
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="flex-1"></div>
            )}
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                onClick={handleGenerate}
                disabled={true}
                className="w-full sm:w-auto bg-black text-white border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:bg-black hover:text-white hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-150 rounded-md px-6 sm:px-8 py-3 text-sm sm:text-base font-normal flex items-center justify-center gap-2 h-[44px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                  <line x1="12" x2="12" y1="19" y2="22"/>
                </svg>
                Generate Audio
              </Button>
              <button 
                onClick={handleDownload}
                disabled={loading || !text.trim() || !audioURL}
                className="w-full sm:w-auto bg-black text-white border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:bg-black hover:text-white hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-150 rounded-md px-4 py-3 flex items-center justify-center gap-2 h-[44px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
                aria-label="Download audio"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span className="sm:hidden">Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}