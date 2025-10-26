"use client"

import TopBar from "@/components/landing_page/TopBar"
import Footer from "@/components/landing_page/Footer"
import Advertisements from "@/components/Advertisements"

export default function AdvertisementsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Advertisements />
      <Footer />
    </div>
  )
}
