"use client"

import { useLocale } from "@/components/LocaleProvider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Advertisements() {
  const { t } = useLocale();
  
  return (
    <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8 sm:py-16 min-h-[calc(100vh-160px)]">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4 sm:mb-6 tracking-tight">
            {t.advertisements}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed">
            {t.advertisementsDesc}
          </p>
        </div>

        {/* Interactive Information Cards */}
        <div className="mb-8 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-medium text-black mb-6 sm:mb-8 text-center">
            Advertising Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Radio Advertising Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-black mb-3">Radio Advertising</h3>
              <p className="text-gray-600 text-sm">
                Generate high-quality Luxembourgish audio for radio spots with natural pronunciation and professional sound quality.
              </p>
            </div>

            {/* Social Media Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-black mb-3">Social Media</h3>
              <p className="text-gray-600 text-sm">
                Create engaging audio content for social media platforms with instant text-to-speech conversion.
              </p>
            </div>

            {/* Product Demo Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-black mb-3">Product Demos</h3>
              <p className="text-gray-600 text-sm">
                Produce professional product demonstration audio with consistent voice characteristics and clear pronunciation.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Interactive Tabs Section */}
          <section>
            <h2 className="text-xl sm:text-2xl font-medium text-black mb-6 sm:mb-8 border-b border-gray-200 pb-2">
              Details
            </h2>
            
            {/* Shadcn Tabs */}
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="features">Key Features</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
                <TabsTrigger value="tech">Technical Specs</TabsTrigger>
              </TabsList>

              <TabsContent value="features" className="mt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-gray-700">Natural-sounding Luxembourgish voice</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-700">Cost-effective audio production</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-gray-700">Quick generation from text to audio</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-700">High-quality output</span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="applications" className="mt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-gray-700">Radio advertising</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-700">Social media content</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-gray-700">E-learning materials</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-700">Product descriptions</span>
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
                      <h3 className="text-lg font-medium text-black mb-4">Production</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Fast text-to-speech conversion</li>
                        <li>• Batch processing capabilities</li>
                        <li>• Multiple output formats</li>
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
              Advertising Impact
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
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

        </div>
      </div>
    </div>
  )
}
