"use client"

import { useLocale } from "@/components/LocaleProvider"

export default function Company() {
  const { t } = useLocale();
  
  return (
    <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8 sm:py-16 min-h-[calc(100vh-160px)]">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4 sm:mb-6 tracking-tight">
            {t.company}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed">
            {t.companySubtitle}
          </p>
        </div>

        {/* Quick Stats */}
        <div className="bg-black text-white rounded-2xl p-6 sm:p-12">
          <h2 className="text-xl sm:text-2xl font-normal mb-6 sm:mb-8 text-center">
            {t.atAGlance}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-4xl font-normal mb-2">100%</div>
              <div className="text-gray-300">{t.luxembourgishNative}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-normal mb-2">24/7</div>
              <div className="text-gray-300">{t.available}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-normal mb-2">∞</div>
              <div className="text-gray-300">{t.possibilities}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
