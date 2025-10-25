"use client"

import TopBar from "@/components/landing_page/TopBar"
import Footer from "@/components/landing_page/Footer"
import { useLocale } from "@/components/LocaleProvider"

export default function AdvertisementsPage() {
  const { t } = useLocale();
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12 min-h-[calc(100vh-160px)]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-normal text-black mb-6">
            {t.advertisements}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            {t.advertisementsPageDesc}
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
