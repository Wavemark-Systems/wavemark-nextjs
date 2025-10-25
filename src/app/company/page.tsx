import TopBar from "@/components/landing_page/TopBar"
import Footer from "@/components/landing_page/Footer"

export default function CompanyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12 min-h-[calc(100vh-160px)]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-normal text-black mb-6">
            Firma
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            Iwwer Neiom Systems
          </p>
          
          <div className="prose max-w-none">
            <p className="text-base text-black leading-relaxed mb-6">
              Neiom Systems ist ein innovatives Unternehmen, das sich auf die Entwicklung 
              fortschrittlicher Text-zu-Sprach-Technologien spezialisiert hat.
            </p>
            <p className="text-base text-black leading-relaxed">
              Unser Ziel ist es, hochwertige Sprachsynthese-Lösungen zu entwickeln, 
              die speziell für die luxemburgische Sprache optimiert sind.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
