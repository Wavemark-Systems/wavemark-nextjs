import TopBar from "@/components/landing_page/TopBar"
import Footer from "@/components/landing_page/Footer"

export default function AdvertisementsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12 min-h-[calc(100vh-160px)]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-normal text-black mb-6">
            Reklammen
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            Text-zu-Sprach Léisungen fir Reklamcampagnen
          </p>
          
          <div className="prose max-w-none">
            <p className="text-base text-black leading-relaxed">
              Entdecken Sie unsere maßgeschneiderten Text-zu-Sprach-Lösungen für Werbekampagnen. 
              Perfekt für Radio-Spots, Online-Werbung und Multimedia-Präsentationen.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
