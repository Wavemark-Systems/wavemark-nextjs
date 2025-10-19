'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Demo() {
  const [text, setText] = useState("Ech sinn haut moies fréi duerch d'Stad gaangen, wéi d'Sonn nach just iwwer d'Haiser gekuckt huet. Op der Avenue war et roueg; nëmme puer Leit hu sech e Kaffi geholl a si lues Richtung Büro getrëppelt. D'Geschäfter hunn ee nom aneren hir Still erausgestallt, an de Geroch vu frësche Croissanten ass duerch d'Loft gezunn");

  const handlePlay = () => {
    console.log("Playing audio for:", text);
  };

  const handleDownload = () => {
    console.log("Downloading audio");
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
        <div className="flex gap-4 p-4 border-t border-gray-100 bg-white justify-end">
          <Button 
            onClick={handlePlay}
            className="bg-black text-white border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:bg-black hover:text-white hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-150 rounded-md px-8 py-3 text-base font-normal flex items-center gap-2 h-[44px]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Play
          </Button>
          <button 
            onClick={handleDownload}
            className="bg-black text-white border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:bg-black hover:text-white hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-150 rounded-md px-4 py-3 flex items-center justify-center h-[44px]"
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
  );
}