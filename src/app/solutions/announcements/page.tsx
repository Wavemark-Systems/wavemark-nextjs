"use client"

import TopBar from "@/components/landing_page/TopBar"
import Footer from "@/components/landing_page/Footer"
import Announcements from "@/components/Announcements"

export default function AnnouncementsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Announcements />
      <Footer />
    </div>
  )
}
