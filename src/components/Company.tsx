"use client"

import { useLocale } from "@/components/LocaleProvider"
import { useState } from "react"

export default function Company() {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState('mission');
  
  return (
    <div className="flex-1 px-4 sm:px-6 lg:px-8 py-16 min-h-[calc(100vh-160px)]">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-light text-black mb-6 tracking-tight">
            {t.company}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            {t.companySubtitle}
          </p>
        </div>

        {/* Interactive Information Cards */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium text-black mb-8 text-center">
            About Neiom Systems
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Mission Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-sm text-center">
                Make Luxembourgish content accessible through high-quality voice synthesis technology.
              </p>
            </div>

            {/* Technology Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Our Technology</h3>
              </div>
              <p className="text-gray-600 text-sm text-center">
                Advanced text-to-speech system designed specifically for the Luxembourgish language.
              </p>
            </div>

            {/* Impact Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Our Impact</h3>
              </div>
              <p className="text-gray-600 text-sm text-center">
                Preserving and promoting Luxembourgish language through innovative technology solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Interactive Tabs Section */}
          <section>
            <h2 className="text-2xl font-medium text-black mb-8 border-b border-gray-200 pb-2">
              Company Information
            </h2>
            
            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('mission')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'mission' 
                    ? 'bg-white text-black shadow-sm' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                Mission & Vision
              </button>
              <button
                onClick={() => setActiveTab('technology')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'technology' 
                    ? 'bg-white text-black shadow-sm' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                Technology
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'contact' 
                    ? 'bg-white text-black shadow-sm' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                Contact
              </button>
            </div>

            {/* Tab Content */}
            <div className="min-h-[300px]">
              {activeTab === 'mission' && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="bg-gray-50 p-8 rounded-lg">
                    <h3 className="text-xl font-semibold text-black mb-4">What We Do</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      We create text-to-speech solutions that generate natural-sounding Luxembourgish audio, 
                      support accessibility for digital content, enable cost-effective audio production, 
                      and preserve the unique character of the Luxembourgish language.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <span className="text-black mr-3 mt-1">•</span>
                          <span className="text-gray-700">Generate natural-sounding Luxembourgish audio</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-black mr-3 mt-1">•</span>
                          <span className="text-gray-700">Support accessibility for digital content</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <span className="text-black mr-3 mt-1">•</span>
                          <span className="text-gray-700">Enable cost-effective audio production</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-black mr-3 mt-1">•</span>
                          <span className="text-gray-700">Preserve the unique character of Luxembourgish</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'technology' && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="bg-gray-50 p-8 rounded-lg">
                    <h3 className="text-xl font-semibold text-black mb-4">Our Technology</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Our TTS system is designed specifically for Luxembourgish, capturing the language&apos;s 
                      unique pronunciation and intonation patterns to deliver the most natural-sounding 
                      voice synthesis available.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-medium text-black mb-3">Voice Quality</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Natural-sounding Luxembourgish pronunciation</li>
                          <li>• High-quality audio output</li>
                          <li>• Consistent voice characteristics</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-black mb-3">Technical Features</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Real-time text-to-speech conversion</li>
                          <li>• API-based integration</li>
                          <li>• Scalable architecture</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'contact' && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="bg-gray-50 p-8 rounded-lg">
                    <h3 className="text-xl font-semibold text-black mb-4">Get in Touch</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      For more information about our technology and how it can benefit your organization, 
                      please don&apos;t hesitate to contact us.
                    </p>
                    <div className="text-center">
                      <a 
                        href="mailto:vhenz@college.harvard.edu"
                        className="inline-block px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-200 font-medium rounded-lg hover:scale-105 transform"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Interactive Stats Section */}
          <section className="bg-black text-white rounded-2xl p-12">
            <h2 className="text-2xl font-medium mb-8 text-center">
              Our Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-gray-300">Luxembourgish Native</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-gray-300">Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">∞</div>
                <div className="text-gray-300">Possibilities</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
