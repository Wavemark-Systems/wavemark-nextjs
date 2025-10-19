import TopBar from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <div className="flex flex-col items-center pt-24 px-8">
        <h1 className="text-6xl leading-tight mb-6 text-black whitespace-nowrap text-center">
          Text-to-Speech for Luxembourgish.
        </h1>
        <p className="text-xl text-black leading-relaxed mb-8 text-center max-w-3xl">
          Neiom is a TTS model that uses continuous learning to handle out of scope data. Vun Lëtzebuerger gebaut, fir Lëtzebuerger.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild className="bg-black text-white border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:bg-black hover:text-white hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-150 rounded-md px-8 py-6 text-lg font-normal">
            <a 
              href="/signup" 
              rel="noopener noreferrer"
            >
              Sign Up
            </a>
          </Button>
          <Button asChild className="bg-white text-black border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:bg-white hover:text-black hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-150 rounded-md px-8 py-6 text-lg font-normal">
            <a 
              href="/login" 
              rel="noopener noreferrer"
            >
              Log in
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
