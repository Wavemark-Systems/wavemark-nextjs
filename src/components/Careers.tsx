"use client"

import { useLocale } from "@/components/LocaleProvider"

export default function Careers() {
  const { t } = useLocale();
  
  return (
    <div className="flex-1 px-4 sm:px-6 lg:px-8 py-16 min-h-[calc(100vh-160px)]">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-light text-black mb-6 tracking-tight text-center">
            {t.careers}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center">
            {t.careersSubtitle}
          </p>
        </div>

        {/* Development Notice */}
        <div className="mb-16">
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚧</span>
            </div>
            <h2 className="text-2xl font-medium text-black mb-4">
              Under Development
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              We&apos;re actively building our careers section. Stay tuned for exciting opportunities 
              to join our mission of advancing Luxembourgish text-to-speech technology.
            </p>
          </div>
        </div>

        {/* Placeholder Content */}
        <div className="space-y-16">
          {/* What We're Looking For */}
          <section>
            <h2 className="text-2xl font-medium text-black mb-8 border-b border-gray-200 pb-2 text-center">
              What We&apos;re Looking For
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Technical Roles</h3>
                <p className="text-gray-600 text-sm">
                  Software engineers, AI researchers, and technical specialists passionate about language technology.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Mission-Driven</h3>
                <p className="text-gray-600 text-sm">
                  Individuals who share our passion for preserving and promoting the Luxembourgish language.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="border-t border-gray-200 pt-12">
            <div className="text-center">
              <h2 className="text-2xl font-medium text-black mb-4">
                Interested in Joining Us?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              While we&apos;re building our careers section, feel free to reach out to us directly 
              to learn about current opportunities.
              </p>
              <a 
                href="mailto:vhenz@college.harvard.edu"
                className="inline-block px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-200 font-medium rounded-lg hover:scale-105 transform"
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
