import LoginForm from "@/components/login/LoginForm"
import SimpleTopBar from "@/components/SimpleTopBar"
import Footer from "@/components/landing_page/Footer"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SimpleTopBar />
      
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-normal text-black mb-2">
              Umellen
            </h1>
            <p className="text-base text-gray-600">
              Loggt Iech an fir op Är Kont z&apos;accesséieren
            </p>
          </div>
          
          <LoginForm />
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
