'use client';

import { useState, useRef } from "react";

interface Example {
  text: string;
  audioSrc: string;
}

const examples: Example[] = [
  {
    text: "D'nottär huet haut de mueren zwou venten an eng successioun ze traitéieren.",
    audioSrc: "/audio (1).wav"
  },
  {
    text: "De stiermer stoung eendeiteg am abseits.",
    audioSrc: "/audio (3).wav"
  },
  {
    text: "Meng bomi huet fréier alt emol en zigarillo gefëmmt.",
    audioSrc: "/audio (4).wav"
  }
];

export default function ExampleItem() {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 because we'll clone first/last
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentExample = examples[(currentIndex - 1 + examples.length) % examples.length];

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextExample = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
    
    setTimeout(() => {
      if (currentIndex + 1 > examples.length) {
        // Jump back to start without animation
        setCurrentIndex(1);
      }
      setIsAnimating(false);
    }, 300);
  };

  const prevExample = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
    
    setTimeout(() => {
      if (currentIndex - 1 <= 0) {
        // Jump to end without animation
        setCurrentIndex(examples.length);
      }
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="w-full border-2 border-black rounded-lg overflow-hidden bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
      {/* Header with title and navigation buttons */}
      <div className="flex justify-between items-center p-4 bg-white">
        <h3 className="text-lg sm:text-xl text-black">
          Beispill
        </h3>
        <div className="flex gap-2">
          <button
            onClick={prevExample}
            disabled={isAnimating}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors disabled:opacity-50"
            aria-label="Previous example"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextExample}
            disabled={isAnimating}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors disabled:opacity-50"
            aria-label="Next example"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content area */}
      <div className="p-6 sm:p-8 min-h-[120px] flex flex-col justify-center">
        {/* Text with sliding animation */}
        <div className="overflow-hidden relative">
          <div 
            className="flex"
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isAnimating ? 'transform 300ms ease-in-out' : 'none'
            }}
          >
            {/* Clone last item at the beginning */}
            <div className="w-full flex-shrink-0">
              <p className="text-lg sm:text-xl text-black">
                &ldquo;{examples[examples.length - 1].text}&rdquo;
              </p>
            </div>
            {/* Original items */}
            {examples.map((example, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <p className="text-lg sm:text-xl text-black">
                  &ldquo;{example.text}&rdquo;
                </p>
              </div>
            ))}
            {/* Clone first item at the end */}
            <div className="w-full flex-shrink-0">
              <p className="text-lg sm:text-xl text-black">
                &ldquo;{examples[0].text}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Audio Player */}
      <div className="border-t border-gray-200 bg-gray-50 p-4 sm:p-5">
        <audio 
          ref={audioRef} 
          src={currentExample.audioSrc}
          onEnded={() => setIsPlaying(false)}
          className="hidden" 
        />
        <div className="flex items-center gap-3 sm:gap-4">
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
            {[...Array(50)].map((_, i) => {
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
      </div>
    </div>
  );
}
