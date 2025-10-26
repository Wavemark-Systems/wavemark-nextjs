"use client"

import { useLocale } from "@/components/LocaleProvider"

export default function Team() {
  const { t } = useLocale();
  
  return (
    <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8 sm:py-16 min-h-[calc(100vh-160px)]">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4 sm:mb-6 tracking-tight">
            Our Team
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed">
            Meet the co-founders behind Neiom Systems, passionate about preserving and promoting the Luxembourgish language through innovative technology.
          </p>
        </div>

        {/* Team Members */}
        <div className="space-y-16">
          {/* Co-founder 1 */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-normal text-black mb-4">CEO & Co-Founder</h2>
                <h3 className="text-xl font-normal text-black mb-4">Vivien Henz</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Vivien leads our technical development with expertise in machine learning design, 
                  tokenization, and data processing. His deep understanding of language technology 
                  drives our mission to create the most natural-sounding Luxembourgish text-to-speech system.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-gray-600">Machine Learning Design Specialist</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600">Tokenization & Data Processing Expert</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600">Language Technology Leader</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Photo Coming Soon</span>
                </div>
              </div>
            </div>
          </section>

          {/* Co-founder 2 */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center md:order-first">
                <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Photo Coming Soon</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-normal text-black mb-4">CMO, CFO & Co-Founder</h2>
                <h3 className="text-xl font-normal text-black mb-4">Mark McDonald</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Mark oversees our business strategy, financial operations, and marketing initiatives. 
                  His expertise in business development and linguistic model training ensures our 
                  technology solutions align with market needs while advancing Luxembourgish language preservation.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-gray-600">Business Strategy & Development</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600">Financial Operations & Marketing</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600">Linguistic Model Training Specialist</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <h2 className="text-2xl font-normal text-black mb-4">
              Interested in Joining Our Team?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We&apos;re always looking for passionate individuals who share our mission 
              of preserving and promoting the Luxembourgish language through technology.
            </p>
            <a 
              href="/contact"
              className="inline-block px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-200 font-normal rounded-lg hover:scale-105 transform"
            >
              Get in Touch
            </a>
          </section>
        </div>
      </div>
    </div>
  )
}
