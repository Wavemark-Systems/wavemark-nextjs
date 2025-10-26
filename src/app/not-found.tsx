"use client"

import Link from "next/link"
import SimpleTopBar from "@/components/SimpleTopBar"
import Footer from "@/components/landing_page/Footer"
import { useLocale } from "@/components/LocaleProvider"

export default function NotFound() {
  const { t } = useLocale();
  return (
    <div className="min-h-screen flex flex-col">
      <SimpleTopBar />
      
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-160px)]">
        <div className="max-w-md mx-auto">
          <h1 className="text-6xl sm:text-8xl font-light text-black mb-4">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-normal text-black mb-6">
            {t.notFoundTitle}
          </h2>
          <Link 
            href="/"
            className="text-base font-normal text-black underline hover:no-underline transition-all"
          >
            {t.backToHome}
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
