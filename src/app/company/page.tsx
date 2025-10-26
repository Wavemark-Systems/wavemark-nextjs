"use client"

import TopBar from "@/components/landing_page/TopBar"
import Footer from "@/components/landing_page/Footer"
import Company from "@/components/Company"

export default function CompanyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Company />
      <Footer />
    </div>
  )
}
