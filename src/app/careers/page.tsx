"use client"

import TopBar from "@/components/landing_page/TopBar"
import Footer from "@/components/landing_page/Footer"
import Careers from "@/components/Careers"

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Careers />
      <Footer />
    </div>
  )
}
