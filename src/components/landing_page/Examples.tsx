'use client';

import { useState, useRef } from "react";

interface ExampleItemProps {
  text: string;
  audioSrc: string;
}

function ExampleItem({ text, audioSrc }: ExampleItemProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  return (
    <div className="w-full border-2 border-black rounded-lg overflow-hidden bg-white">
      <div className="p-4 sm:p-6">
        <p className="text-base sm:text-lg text-black">
          {text}
        </p>
      </div>
      
      {/* Audio Player */}
      <div className="border-t border-gray-200 bg-gray-50 p-3 sm:p-4">
        <audio 
          ref={audioRef} 
          src={audioSrc}
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

export default function Examples() {
  const examples = [
    {
      text: "D'nottär huet haut de mueren zwou venten an eng successioun ze traitéieren.",
      audioSrc: "/audio (1).wav"
    },
    {
      text: "De stiermer stoung eendeiteg am abseits.",
      audioSrc: "/audio (3).wav"
    },
    {
      text: "Moien, je m'apelle Vivien et j'habite en Amerique",
      audioSrc: "/luxembourgish-audio (2).wav"
    },
    {
      text: "Meng bomi huet fréier alt emol en zigarillo gefëmmt.",
      audioSrc: "/audio (4).wav"
    }
  ];

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-6xl mx-auto w-full">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-black mb-6 sm:mb-8 text-center">
        Examples
      </h2>
      
      <div className="w-full flex flex-col gap-4 sm:gap-6">
        {examples.map((example, index) => (
          <ExampleItem 
            key={index}
            text={example.text}
            audioSrc={example.audioSrc}
          />
        ))}
      </div>
    </div>
  );
}

