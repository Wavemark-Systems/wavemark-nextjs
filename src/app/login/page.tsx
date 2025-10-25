"use client"

import LoginForm from "@/components/login/LoginForm"
import SimpleTopBar from "@/components/SimpleTopBar"
import Footer from "@/components/landing_page/Footer"
import { useLocale } from "@/components/LocaleProvider"

export default function LoginPage() {
  const { t } = useLocale();
  return (
    <div className="min-h-screen flex flex-col">
      <SimpleTopBar />
      
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 min-h-[calc(100vh-160px)]">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-normal text-black mb-2">
              {t.login}
            </h1>
            <p className="text-base text-gray-600">
              {t.loginSubtitle}
            </p>
          </div>
          
          <LoginForm />
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
