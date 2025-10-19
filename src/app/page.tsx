import TopBar from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <div className="flex">
        <div className="w-1/2 pl-16 pr-8" style={{ marginTop: '15vh' }}>
          <h1 className="text-6xl leading-tight mb-6 text-black">
            Text-to-Speech for Luxembourgish that actually works.
          </h1>
          <p className="text-xl text-black leading-relaxed mb-8">
            neiom is a state-of-the-art TTS model trained specifically for Luxembourgish. Natural-sounding speech synthesis that captures the nuances of the language.
          </p>
          <Button asChild className="bg-white text-black border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:bg-white hover:text-black hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-150 rounded-md px-8 py-6 text-lg font-normal">
            <a 
              href="#demo" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Try Demo
            </a>
          </Button>
        </div>
        <div className="w-1/2 pl-8 pr-16 flex items-center justify-center" style={{ marginTop: '15vh', height: '60vh' }}>
         
        </div>
      </div>
    </div>
  );
}
