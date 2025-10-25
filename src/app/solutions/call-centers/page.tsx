import TopBar from "@/components/landing_page/TopBar"
import Footer from "@/components/landing_page/Footer"

export default function CallCentersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12 min-h-[calc(100vh-160px)]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-normal text-black mb-6">
            Call Centers
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            Stëmmenléisungen fir Clientsservice
          </p>
          
          <div className="prose max-w-none">
            <p className="text-base text-black leading-relaxed">
              Professionelle Text-zu-Sprach-Lösungen für Call Center und Kundenservice. 
              Verbessern Sie die Effizienz Ihrer Kundenkommunikation.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
