"use client"

import TopBar from "@/components/landing_page/TopBar"
import Footer from "@/components/landing_page/Footer"
import CallCenters from "@/components/CallCenters"

export default function CallCentersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <CallCenters />
      <Footer />
    </div>
  )
}
