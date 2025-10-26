"use client"

import { useLocale } from "@/components/LocaleProvider"

export default function Careers() {
  const { t } = useLocale();
  
  return (
    <div className="flex-1 px-4 sm:px-6 lg:px-8 py-16 min-h-[calc(100vh-160px)]">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-light text-black mb-6 tracking-tight">
            {t.careers}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            {t.careersSubtitle}
          </p>
        </div>

        {/* Placeholder Content */}
        <div className="space-y-16">
          {/* Contact Section */}
          <section className="border-t border-gray-200 pt-12">
            <div>
              <h2 className="text-2xl font-normal text-black mb-4">
                Interested in Joining Us?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl">
              While we&apos;re building our careers section, feel free to reach out to us directly 
              to learn about current opportunities.
              </p>
              <a 
                href="/contact"
                className="inline-block px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-200 font-normal rounded-lg hover:scale-105 transform"
              >
                Contact Us
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
