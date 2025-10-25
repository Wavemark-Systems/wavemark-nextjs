"use client"

import { useLocale } from "@/components/LocaleProvider"

export default function Careers() {
  const { t } = useLocale();
  
  return (
    <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12 min-h-[calc(100vh-160px)]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-normal text-black mb-6">
          {t.careers}
        </h1>
        <div className="text-base sm:text-lg text-black mb-8">
          {t.careersPageDesc}
        </div>
      </div>
    </div>
  )
}
