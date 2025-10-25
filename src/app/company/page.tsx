"use client"

import TopBar from "@/components/landing_page/TopBar"
import Footer from "@/components/landing_page/Footer"
import { useLocale } from "@/components/LocaleProvider"

export default function CompanyPage() {
  const { t } = useLocale();
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12 min-h-[calc(100vh-160px)]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-normal text-black mb-6">
            {t.company}
          </h1>
          <div className="text-base sm:text-lg text-gray-600 mb-8 prose max-w-none">
            {t.companyPageDesc.split('\n').map((line, index) => {
              if (line.startsWith('**') && line.endsWith('**')) {
                return (
                  <h3 key={index} className="font-semibold text-lg mb-3 mt-6 text-black">
                    {line.replace(/\*\*/g, '')}
                  </h3>
                );
              } else if (line.startsWith('• ')) {
                return (
                  <div key={index} className="ml-4 mb-2">
                    <span className="text-black">•</span> {line.substring(2)}
                  </div>
                );
              } else if (line.trim() === '') {
                return <br key={index} />;
              } else {
                return (
                  <p key={index} className="mb-3">
                    {line}
                  </p>
                );
              }
            })}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
