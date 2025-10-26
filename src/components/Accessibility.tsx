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

        {/* Main Content */}
        <div className="space-y-16">
          {/* EU Compliance Section */}
          <section className="mb-8 sm:mb-16">
            <h2 className="text-xl sm:text-2xl font-normal text-black mb-4 sm:mb-6">
              {t.euComplianceTitle}
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                {t.euComplianceDescription}{" "}
                <a 
                  href="https://eur-lex.europa.eu/eli/dir/2019/882/oj/eng" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 underline font-normal"
                >
                  {t.euDirectiveLink}
                </a>
                {t.euComplianceDescription2}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t.underServedLanguages}
              </p>
              <div className="mt-6">
                <h3 className="text-lg font-normal text-black mb-2">{t.keyBenefitsTitle}</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• {t.benefit1}</li>
                  <li>• {t.benefit2}</li>
                  <li>• {t.benefit3}</li>
                  <li>• {t.benefit4}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Interactive Tabs Section */}
          <section>
            <h2 className="text-2xl font-normal text-black mb-8 border-b border-gray-200 pb-2">
              Features & Benefits
            </h2>
            
            {/* Shadcn Tabs */}
            <Tabs defaultValue="benefits" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="benefits">{t.keyFeatures}</TabsTrigger>
                <TabsTrigger value="users">{t.targetUsers}</TabsTrigger>
                <TabsTrigger value="tech">{t.technicalSpecs}</TabsTrigger>
              </TabsList>

              <TabsContent value="benefits" className="mt-6">
                <div className="bg-gray-50 p-8 rounded-lg">
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
                </div>
              </TabsContent>

              <TabsContent value="users" className="mt-6">
                <div className="bg-gray-50 p-8 rounded-lg">
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
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="tech" className="mt-6">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-normal text-black mb-4">Voice Quality</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Natural-sounding Luxembourgish pronunciation</li>
                        <li>• High-quality audio output</li>
                        <li>• Consistent voice characteristics</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-normal text-black mb-4">Integration</h3>
                      <ul className="space-y-2 text-gray-700">
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
            <h2 className="text-xl sm:text-2xl font-normal mb-6 sm:mb-8">
              Accessibility Impact
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div>
                <div className="text-4xl font-normal mb-2">95%</div>
                <div className="text-gray-300">WCAG Compliance</div>
              </div>
              <div>
                <div className="text-4xl font-normal mb-2">2.5x</div>
                <div className="text-gray-300">Faster Content Access</div>
              </div>
              <div>
                <div className="text-4xl font-normal mb-2">100%</div>
                <div className="text-gray-300">Luxembourgish Support</div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
