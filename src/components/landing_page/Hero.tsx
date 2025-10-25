"use client"

import Link from "next/link";
import ExampleItem from "./Examples";
import { useLocale } from "@/components/LocaleProvider";

export default function Hero() {
  const { t } = useLocale();
  
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-3 sm:mb-4 text-black">
              {t.heroTitle}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-black leading-relaxed mb-4 sm:mb-6">
              {t.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="px-4 py-2 sm:px-6 sm:py-3 bg-black text-white border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-150 text-sm sm:text-base font-medium">
                {t.contact}
              </button>
              <Link 
                href="/login"
                className="px-4 py-2 sm:px-6 sm:py-3 bg-white text-black border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-150 text-sm sm:text-base font-medium text-center"
              >
                {t.login}
              </Link>
            </div>
          </div>
          
          {/* Right Column - Example Carousel */}
          <div className="mt-8 lg:mt-0">
            <ExampleItem />
          </div>
        </div>
      </div>
    </div>
  );
}
