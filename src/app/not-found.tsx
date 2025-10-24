import Link from "next/link"
import SimpleTopBar from "@/components/SimpleTopBar"
import Footer from "@/components/landing_page/Footer"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <SimpleTopBar />
      
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-6xl sm:text-8xl font-light text-black mb-4">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-normal text-black mb-6">
            Säit net fonnt
          </h2>
          <Link 
            href="/"
            className="text-base font-normal text-black underline hover:no-underline transition-all"
          >
            Zréck op d'Haaptsäit
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
