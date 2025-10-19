import Hero from "@/components/landing_page/Hero";
import TopBar from "@/components/landing_page/TopBar";
import Demo from "@/components/landing_page/Demo";

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Hero />
      <Demo />
    </div>
  );
}
