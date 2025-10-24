import SimpleTopBar from "@/components/SimpleTopBar"
import Footer from "@/components/landing_page/Footer"

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SimpleTopBar />
      
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-normal text-black mb-6">
            Karriär
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            Kommt bei eis mat!
          </p>
          
          <div className="prose max-w-none">
            <p className="text-base text-black leading-relaxed mb-6">
              Werden Sie Teil unseres Teams und helfen Sie uns dabei, die Zukunft 
              der Sprachtechnologie zu gestalten.
            </p>
            <p className="text-base text-black leading-relaxed">
              Wir suchen talentierte Entwickler, Forscher und Sprachwissenschaftler, 
              die sich für innovative Technologien begeistern.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
