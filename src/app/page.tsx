import { headers } from "next/headers";

import Footer from "@/components/landing_page/Footer";
import Hero from "@/components/landing_page/Hero";
import TopBar from "@/components/landing_page/TopBar";
import Homepage from "@/components/(app)/Homepage";
import { getDevSession } from "@/lib/dev-session";

export default async function Home() {
  const timestamp = new Date().toISOString();
  console.log(`\n${"=".repeat(80)}`);
  console.log(`[${timestamp}] [Home] === HOME PAGE RENDER START ===`);
  
  console.log(`[${timestamp}] [Home] Getting headers...`);
  const headersList = await headers();
  
  const cookieHeader = headersList.get("cookie");
  console.log(`[${timestamp}] [Home] Cookie header received: ${cookieHeader ? cookieHeader.substring(0, 100) + '...' : 'null'}`);
  
  console.log(`[${timestamp}] [Home] Calling getDevSession...`);
  const session = await getDevSession(headersList);

  console.log(`[${timestamp}] [Home] Session check completed`);
  console.log(`[${timestamp}] [Home] Session exists: ${session ? 'YES' : 'NO'}`);
  if (session) {
    console.log(`[${timestamp}] [Home] Session user ID: ${session.user?.id}`);
    console.log(`[${timestamp}] [Home] Session user email: ${session.user?.email}`);
    console.log(`[${timestamp}] [Home] Session user name: ${session.user?.name}`);
    console.log(`[${timestamp}] [Home] ✅ Authenticated user detected, rendering Homepage component`);
    console.log(`[${timestamp}] [Home] === HOME PAGE RENDER END (AUTHENTICATED) ===\n`);
    return <Homepage />;
  }

  console.log(`[${timestamp}] [Home] ⚪ No session, rendering landing page for unauthenticated user`);
  console.log(`[${timestamp}] [Home] === HOME PAGE RENDER END (LANDING PAGE) ===\n`);
  return (
    <div className="min-h-screen">
      <TopBar />
      <Hero />
      <Footer />
    </div>
  );
}
