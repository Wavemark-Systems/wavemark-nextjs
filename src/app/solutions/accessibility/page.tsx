"use client"

import TopBar from "@/components/landing_page/TopBar"
import Footer from "@/components/landing_page/Footer"
import Accessibility from "@/components/Accessibility"

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Accessibility />
      <Footer />
    </div>
  )
}
