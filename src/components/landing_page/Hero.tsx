import Link from "next/link";
import ExampleItem from "./Examples";

export default function Hero() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 sm:mb-6 text-black">
              Text-zu-Sprach fir Lëtzebuergesch.
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-black leading-relaxed mb-6 sm:mb-8">
              Neiom ass e modernen TTS Modell, deen speziell fir Lëtzebuerger Text an Audio gebaut gouf. Vun Lëtzebuerger gebaut, fir Lëtzebuerger.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-black text-white border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-150 text-sm sm:text-base font-medium">
                Kontakt
              </button>
              <Link 
                href="/login"
                className="px-6 py-3 bg-white text-black border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-150 text-sm sm:text-base font-medium"
              >
                Umellen
              </Link>
            </div>
          </div>
          
          {/* Right Column - Example Carousel */}
          <div>
            <ExampleItem />
          </div>
        </div>
      </div>
    </div>
  );
}
