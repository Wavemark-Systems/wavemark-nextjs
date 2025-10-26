"use client"

import { useLocale } from "@/components/LocaleProvider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Accessibility() {
  const { t } = useLocale();
  
  return (
    <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8 sm:py-16 min-h-[calc(100vh-160px)]">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4 sm:mb-6 tracking-tight">
            {t.accessibility}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed">
            {t.accessibilityDesc}
          </p>
        </div>

        {/* Interactive Demo Section */}
        <div className="mb-8 sm:mb-16 bg-gray-50 rounded-2xl p-4 sm:p-8 border border-gray-100">
          <h2 className="text-xl sm:text-2xl font-medium text-black mb-4 sm:mb-6 text-center">
            Try Our Accessibility Demo
          </h2>
          <div className="max-w-2xl mx-auto">
            {/* Work in Progress Banner */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center">
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
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <button className="px-6 py-3 bg-gray-400 text-white rounded-lg cursor-not-allowed font-medium" disabled>
                Play Audio
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-400 rounded-lg cursor-not-allowed font-medium" disabled>
                Download
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
            
            {/* Shadcn Tabs */}
            <Tabs defaultValue="benefits" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="benefits">Key Benefits</TabsTrigger>
                <TabsTrigger value="users">Target Users</TabsTrigger>
                <TabsTrigger value="tech">Technical Specs</TabsTrigger>
              </TabsList>

              <TabsContent value="benefits" className="mt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-gray-700">WCAG compliance support</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-700">Cost-effective audio generation</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-gray-700">Natural-sounding Luxembourgish voice</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-700">Easy integration</span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="users" className="mt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-gray-700">Visually impaired users</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-700">Users with reading difficulties</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-gray-700">Language learners</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-700">Mobile users</span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="tech" className="mt-6">
                <div className="bg-gray-50 p-8 rounded-lg">
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
              </TabsContent>
            </Tabs>
          </section>

          {/* Interactive Stats Section */}
          <section className="bg-black text-white rounded-2xl p-6 sm:p-12">
            <h2 className="text-xl sm:text-2xl font-medium mb-6 sm:mb-8 text-center">
              Accessibility Impact
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
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

        </div>
      </div>
    </div>
  )
}
