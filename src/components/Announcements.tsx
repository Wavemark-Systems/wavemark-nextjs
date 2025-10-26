"use client"

import { useLocale } from "@/components/LocaleProvider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Announcements() {
  const { t } = useLocale();
  
  return (
    <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8 sm:py-16 min-h-[calc(100vh-160px)]">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4 sm:mb-6 tracking-tight">
            {t.announcements}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed">
            {t.announcementsDesc}
          </p>
        </div>

        {/* Interactive Information Cards */}
        <div className="mb-8 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-normal text-black mb-6 sm:mb-8">
            Announcement Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Transportation Hub Card */}
            <div className="p-6">
              <h3 className="text-lg font-normal text-black mb-3">Transportation</h3>
              <p className="text-gray-600 text-sm">
                Clear announcements for train stations, airports, and bus terminals with professional audio quality.
              </p>
            </div>

            {/* Shopping Center Card */}
            <div className="p-6">
              <h3 className="text-lg font-normal text-black mb-3">Retail</h3>
              <p className="text-gray-600 text-sm">
                Automated announcements for shopping centers, stores, and retail environments.
              </p>
            </div>

            {/* Healthcare Card */}
            <div className="p-6">
              <h3 className="text-lg font-normal text-black mb-3">Healthcare</h3>
              <p className="text-gray-600 text-sm">
                Professional announcements for hospitals, clinics, and healthcare facilities.
              </p>
            </div>

            {/* Education Card */}
            <div className="p-6">
              <h3 className="text-lg font-normal text-black mb-3">Education</h3>
              <p className="text-gray-600 text-sm">
                School announcements, class schedules, and emergency notifications in Luxembourgish.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Interactive Tabs Section */}
          <section>
            <h2 className="text-xl sm:text-2xl font-normal text-black mb-6 sm:mb-8 border-b border-gray-200 pb-2">
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
                      <span className="text-gray-700">Clear, natural-sounding announcements</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-700">Real-time text-to-speech generation</span>
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
                      <span className="text-gray-700">Transportation hubs</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-700">Shopping centers</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-700">Government buildings</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-gray-700">Healthcare facilities</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-700">Educational institutions</span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="tech" className="mt-6">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-normal text-black mb-4">Audio Quality</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Clear, intelligible speech</li>
                        <li>• Consistent volume levels</li>
                        <li>• Professional audio standards</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-normal text-black mb-4">System Integration</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Real-time processing</li>
                        <li>• Scalable architecture</li>
                        <li>• API-based integration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* Interactive Stats Section */}
          <section className="bg-black text-white rounded-2xl p-6 sm:p-12">
            <h2 className="text-xl sm:text-2xl font-normal mb-6 sm:mb-8">
              Announcement Impact
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div>
                <div className="text-4xl font-normal mb-2">24/7</div>
                <div className="text-gray-300">Automated Operation</div>
              </div>
              <div>
                <div className="text-4xl font-normal mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Reliability</div>
              </div>
              <div>
                <div className="text-4xl font-normal mb-2">100%</div>
                <div className="text-gray-300">Luxembourgish Native</div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
