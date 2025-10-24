import Hero from "@/components/landing_page/Hero";
import TopBar from "@/components/landing_page/TopBar";
import Footer from "@/components/landing_page/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Hero />
      <Footer />
    </div>
  );
}
