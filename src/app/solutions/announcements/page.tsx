import SimpleTopBar from "@/components/SimpleTopBar"
import Footer from "@/components/landing_page/Footer"

export default function AnnouncementsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SimpleTopBar />
      
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-normal text-black mb-6">
            Ëffentlech Uweisungen
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            Automatiséiert ëffentlech Uweisingssystemer
          </p>
          
          <div className="prose max-w-none">
            <p className="text-base text-black leading-relaxed">
              Automatisierte öffentliche Durchsagen für Bahnhöfe, Flughäfen, 
              Einkaufszentren und andere öffentliche Bereiche.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
