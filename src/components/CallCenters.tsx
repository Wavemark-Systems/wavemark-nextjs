"use client"

import { useLocale } from "@/components/LocaleProvider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CallCenters() {
  const { t } = useLocale();
  
  return (
    <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8 sm:py-16 min-h-[calc(100vh-160px)]">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4 sm:mb-6 tracking-tight">
            {t.callCenters}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed">
            {t.callCentersDesc}
          </p>
        </div>

        {/* Interactive Information Card */}
        <div className="mb-8 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-medium text-black mb-6 sm:mb-8 text-center">
            Call Center Solutions
          </h2>
          <div className="max-w-4xl mx-auto">
            {/* Customer Support Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-black mb-4">Customer Support</h3>
              </div>
              <p className="text-gray-600 text-lg mb-6 text-center max-w-3xl mx-auto">
                Transform your customer support with natural-sounding Luxembourgish voice responses. 
                Our advanced text-to-speech technology delivers instant, accurate responses to customer inquiries, 
                support requests, and general questions with professional voice quality and clear pronunciation.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-2">Instant</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-2">95%+</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Availability</div>
                </div>
              </div>
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
                      <span className="text-gray-700">Natural-sounding voice interactions</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-700">Quick response generation</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-gray-700">Cost-effective solution</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-700">Easy integration</span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="applications" className="mt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-gray-700">Customer support</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-700">Order processing</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-700">Appointment scheduling</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-gray-700">Technical support</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-700">Sales inquiries</span>
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
                        <li>• Professional voice characteristics</li>
                        <li>• Consistent audio quality</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-black mb-4">Integration</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Real-time voice synthesis</li>
                        <li>• API-based integration</li>
                        <li>• Scalable call center solutions</li>
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
              Call Center Impact
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50%</div>
                <div className="text-gray-300">Faster Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">85%</div>
                <div className="text-gray-300">Customer Satisfaction</div>
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
