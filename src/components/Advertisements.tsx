"use client"

import { useLocale } from "@/components/LocaleProvider"
import { useState } from "react"

export default function Advertisements() {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState('features');
  
  return (
    <div className="flex-1 px-4 sm:px-6 lg:px-8 py-16 min-h-[calc(100vh-160px)]">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-light text-black mb-6 tracking-tight">
            {t.advertisements}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            {t.advertisementsDesc}
          </p>
        </div>

        {/* Interactive Information Cards */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium text-black mb-8 text-center">
            Advertising Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Radio Advertising Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📻</span>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Radio Advertising</h3>
              </div>
              <p className="text-gray-600 text-sm text-center">
                Generate high-quality Luxembourgish audio for radio spots with natural pronunciation and professional sound quality.
              </p>
            </div>

            {/* Social Media Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Social Media</h3>
              </div>
              <p className="text-gray-600 text-sm text-center">
                Create engaging audio content for social media platforms with instant text-to-speech conversion.
              </p>
            </div>

            {/* Product Demo Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎬</span>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Product Demos</h3>
              </div>
              <p className="text-gray-600 text-sm text-center">
                Produce professional product demonstration audio with consistent voice characteristics and clear pronunciation.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Interactive Tabs Section */}
          <section>
            <h2 className="text-2xl font-medium text-black mb-8 border-b border-gray-200 pb-2">
              Features & Applications
            </h2>
            
            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('features')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'features' 
                    ? 'bg-white text-black shadow-sm' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                Key Features
              </button>
              <button
                onClick={() => setActiveTab('applications')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'applications' 
                    ? 'bg-white text-black shadow-sm' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                Applications
              </button>
              <button
                onClick={() => setActiveTab('tech')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'tech' 
                    ? 'bg-white text-black shadow-sm' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                Technical Specs
              </button>
            </div>

            {/* Tab Content */}
            <div className="min-h-[300px]">
              {activeTab === 'features' && (
                <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
                  <div className="space-y-4">
                    <div className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                      <span className="text-black mr-3 mt-1">🎯</span>
                      <span className="text-gray-700">Natural-sounding Luxembourgish voice</span>
                    </div>
                    <div className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                      <span className="text-black mr-3 mt-1">💰</span>
                      <span className="text-gray-700">Cost-effective audio production</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                      <span className="text-black mr-3 mt-1">⚡</span>
                      <span className="text-gray-700">Quick generation from text to audio</span>
                    </div>
                    <div className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                      <span className="text-black mr-3 mt-1">✨</span>
                      <span className="text-gray-700">High-quality output</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'applications' && (
                <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
                  <div className="space-y-4">
                    <div className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                      <span className="text-black mr-3 mt-1">📻</span>
                      <span className="text-gray-700">Radio advertising</span>
                    </div>
                    <div className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                      <span className="text-black mr-3 mt-1">📱</span>
                      <span className="text-gray-700">Social media content</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                      <span className="text-black mr-3 mt-1">🎓</span>
                      <span className="text-gray-700">E-learning materials</span>
                    </div>
                    <div className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                      <span className="text-black mr-3 mt-1">🛍️</span>
                      <span className="text-gray-700">Product descriptions</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'tech' && (
                <div className="bg-gray-50 p-8 rounded-lg animate-fadeIn">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-medium text-black mb-4">Voice Quality</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Natural-sounding Luxembourgish pronunciation</li>
                        <li>• High-quality audio output</li>
                        <li>• Consistent voice characteristics</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-black mb-4">Production</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Fast text-to-speech conversion</li>
                        <li>• Batch processing capabilities</li>
                        <li>• Multiple output formats</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Interactive Stats Section */}
          <section className="bg-black text-white rounded-2xl p-12">
            <h2 className="text-2xl font-medium mb-8 text-center">
              Advertising Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">70%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">3x</div>
                <div className="text-gray-300">Faster Production</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-gray-300">Luxembourgish Native</div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="border-t border-gray-200 pt-12">
            <div className="text-center">
              <h2 className="text-2xl font-medium text-black mb-4">
                Get Started
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                For more information about our advertising solutions and how they can enhance your campaigns, 
                please contact us.
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
