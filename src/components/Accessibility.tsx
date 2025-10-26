"use client"

import { useLocale } from "@/components/LocaleProvider"
import { useState } from "react"

export default function Accessibility() {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState('benefits');
  
  return (
    <div className="flex-1 px-4 sm:px-6 lg:px-8 py-16 min-h-[calc(100vh-160px)]">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-light text-black mb-6 tracking-tight">
            {t.accessibility}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            {t.accessibilityDesc}
          </p>
        </div>

        {/* Interactive Demo Section */}
        <div className="mb-16 bg-gray-50 rounded-2xl p-8 border border-gray-100">
          <h2 className="text-2xl font-medium text-black mb-6 text-center">
            Try Our Accessibility Demo
          </h2>
          <div className="max-w-2xl mx-auto">
            {/* Work in Progress Banner */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                  <span className="text-yellow-800 text-sm">⚠️</span>
                </div>
                <span className="text-yellow-800 font-medium">Work in Progress</span>
              </div>
              <p className="text-yellow-700 text-sm text-center mt-2">
                We&apos;re actively developing this feature. Stay tuned for updates!
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
              <textarea 
                placeholder="Type some Luxembourgish text here to see how it would sound..."
                className="w-full h-24 p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200"
                disabled
              />
            </div>
            <div className="flex justify-center space-x-4">
              <button className="px-6 py-3 bg-gray-400 text-white rounded-lg cursor-not-allowed font-medium" disabled>
                🔊 Play Audio
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-400 rounded-lg cursor-not-allowed font-medium" disabled>
                📥 Download
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Interactive Tabs Section */}
          <section>
            <h2 className="text-2xl font-medium text-black mb-8 border-b border-gray-200 pb-2">
              Features & Benefits
            </h2>
            
            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('benefits')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'benefits' 
                    ? 'bg-white text-black shadow-sm' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                Key Benefits
              </button>
              <button
                onClick={() => setActiveTab('users')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'users' 
                    ? 'bg-white text-black shadow-sm' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                Target Users
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
              {activeTab === 'benefits' && (
                <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
                  <div className="space-y-4">
                    <div className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                      <span className="text-black mr-3 mt-1">✓</span>
                      <span className="text-gray-700">WCAG compliance support</span>
                    </div>
                    <div className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                      <span className="text-black mr-3 mt-1">✓</span>
                      <span className="text-gray-700">Cost-effective audio generation</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                      <span className="text-black mr-3 mt-1">✓</span>
                      <span className="text-gray-700">Natural-sounding Luxembourgish voice</span>
                    </div>
                    <div className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                      <span className="text-black mr-3 mt-1">✓</span>
                      <span className="text-gray-700">Easy integration</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'users' && (
                <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
                  <div className="space-y-4">
                    <div className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                      <span className="text-black mr-3 mt-1">👁️</span>
                      <span className="text-gray-700">Visually impaired users</span>
                    </div>
                    <div className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                      <span className="text-black mr-3 mt-1">📖</span>
                      <span className="text-gray-700">Users with reading difficulties</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                      <span className="text-black mr-3 mt-1">🎓</span>
                      <span className="text-gray-700">Language learners</span>
                    </div>
                    <div className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                      <span className="text-black mr-3 mt-1">📱</span>
                      <span className="text-gray-700">Mobile users</span>
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
                      <h3 className="text-lg font-medium text-black mb-4">Integration</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• API-based integration</li>
                        <li>• Real-time processing</li>
                        <li>• Scalable architecture</li>
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
              Accessibility Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-gray-300">WCAG Compliance</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">2.5x</div>
                <div className="text-gray-300">Faster Content Access</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-gray-300">Luxembourgish Support</div>
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
                For more information about our accessibility solutions and how they can benefit your organization, 
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
