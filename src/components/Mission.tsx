"use client"

import { useLocale } from "@/components/LocaleProvider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Mission() {
  const { t } = useLocale();
  
  return (
    <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8 sm:py-16 min-h-[calc(100vh-160px)]">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4 sm:mb-6 tracking-tight">
            Our Mission
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed">
            {t.companySubtitle}
          </p>
        </div>

        {/* Interactive Information Cards */}
        <div className="mb-8 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-normal text-black mb-6 sm:mb-8">
            About Neiom Systems
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Mission Card */}
            <div className="p-6">
              <h3 className="text-lg font-normal text-black mb-3">Our Mission</h3>
              <p className="text-gray-600 text-sm">
                Make Luxembourgish content accessible through high-quality voice synthesis technology.
              </p>
            </div>

            {/* Technology Card */}
            <div className="p-6">
              <h3 className="text-lg font-normal text-black mb-3">Our Technology</h3>
              <p className="text-gray-600 text-sm">
                Advanced text-to-speech system designed specifically for the Luxembourgish language.
              </p>
            </div>

            {/* Impact Card */}
            <div className="p-6">
              <h3 className="text-lg font-normal text-black mb-3">Our Impact</h3>
              <p className="text-gray-600 text-sm">
                Preserving and promoting Luxembourgish language through innovative technology solutions.
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
            <Tabs defaultValue="mission" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="mission">Mission & Vision</TabsTrigger>
                <TabsTrigger value="technology">Technology</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
              </TabsList>

              <TabsContent value="mission" className="mt-6">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="space-y-6">
                    <h3 className="text-xl font-normal text-black mb-4">What We Do</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We create text-to-speech solutions that generate natural-sounding Luxembourgish audio, 
                      support accessibility for digital content, enable cost-effective audio production, 
                      and preserve the unique character of the Luxembourgish language.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-black rounded-full mr-3 mt-2"></div>
                          <span className="text-gray-700">Generate natural-sounding Luxembourgish audio</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-black rounded-full mr-3 mt-2"></div>
                          <span className="text-gray-700">Support accessibility for digital content</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-black rounded-full mr-3 mt-2"></div>
                          <span className="text-gray-700">Enable cost-effective audio production</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-black rounded-full mr-3 mt-2"></div>
                          <span className="text-gray-700">Preserve the unique character of Luxembourgish</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="technology" className="mt-6">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="space-y-6">
                    <h3 className="text-xl font-normal text-black mb-4">Our Technology</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our TTS system is designed specifically for Luxembourgish, capturing the language&apos;s 
                      unique pronunciation and intonation patterns to deliver the most natural-sounding 
                      voice synthesis available.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-normal text-black mb-3">Voice Quality</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Natural-sounding Luxembourgish pronunciation</li>
                          <li>• High-quality audio output</li>
                          <li>• Consistent voice characteristics</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-normal text-black mb-3">Technical Features</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Real-time text-to-speech conversion</li>
                          <li>• Scalable architecture</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="contact" className="mt-6">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="space-y-6">
                    <h3 className="text-xl font-normal text-black mb-4">Get in Touch</h3>
                    <p className="text-gray-700 leading-relaxed">
                      For more information about our technology and how it can benefit your organization, 
                      please don&apos;t hesitate to contact us.
                    </p>
                    <div>
                      <a 
                        href="/contact"
                        className="inline-block px-6 py-3 sm:px-8 sm:py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-200 font-normal rounded-lg hover:scale-105 transform"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* Interactive Stats Section */}
          <section className="bg-black text-white rounded-2xl p-6 sm:p-12">
            <h2 className="text-xl sm:text-2xl font-normal mb-6 sm:mb-8">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div>
                <div className="text-4xl font-normal mb-2">100%</div>
                <div className="text-gray-300">Luxembourgish Native</div>
              </div>
              <div>
                <div className="text-4xl font-normal mb-2">24/7</div>
                <div className="text-gray-300">Available</div>
              </div>
              <div>
                <div className="text-4xl font-normal mb-2">∞</div>
                <div className="text-gray-300">Possibilities</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
