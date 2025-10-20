'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTTS } from "@/hooks/useTTS";

export default function Demo() {
  const [text, setText] = useState("Ech sinn haut moies fréi duerch d'Stad gaangen, wéi d'Sonn nach just iwwer d'Haiser gekuckt huet. Op der Avenue war et roueg; nëmme puer Leit hu sech e Kaffi geholl a si lues Richtung Büro getrëppelt. D'Geschäfter hunn ee nom aneren hir Still erausgestallt, an de Geroch vu frësche Croissanten ass duerch d'Loft gezunn");
  const { loading, error, playAudio, downloadAudio } = useTTS();

  const handlePlay = () => {
    playAudio(text);
  };

  const handleDownload = () => {
    downloadAudio(text, 'luxembourgish-audio.wav');
  };

  return (
    <div className="flex flex-col items-center px-8 py-16 max-w-6xl mx-auto w-full">
      <div className="w-full border-2 border-black rounded-lg overflow-hidden">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your Luxembourgish text here..."
          spellCheck={false}
          className="w-full h-96 p-6 text-black text-lg resize-none focus:outline-none border-0"
        />
        <div className="flex flex-col gap-2">
          {error && (
            <div className="px-4 py-2 bg-red-50 border-t border-red-200 text-red-600 text-sm">
              {error}
            </div>
          )}
          <div className="flex gap-4 p-4 border-t border-gray-100 bg-white justify-end">
            <Button 
              onClick={handlePlay}
              disabled={loading || !text.trim()}
              className="bg-black text-white border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:bg-black hover:text-white hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-150 rounded-md px-8 py-3 text-base font-normal flex items-center gap-2 h-[44px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Play
                </>
              )}
            </Button>
            <button 
              onClick={handleDownload}
              disabled={loading || !text.trim()}
              className="bg-black text-white border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:bg-black hover:text-white hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-150 rounded-md px-4 py-3 flex items-center justify-center h-[44px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
              aria-label="Download audio"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}