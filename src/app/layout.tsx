import type { Metadata, Viewport } from "next";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { LocaleProvider } from "@/components/LocaleProvider";
import { getLocale } from "@/lib/locale";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "neiom",
  description: "Luxembourgish text-to-speech",
  icons: {
    icon: [
      { url: "/neiom-logo.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icon-192.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  
  return (
    <html lang={locale} className={inter.variable}>
      <body
        className={`${inter.className} antialiased`}
      >
        <LocaleProvider locale={locale}>
          {children}
        </LocaleProvider>
        <Analytics />
      </body>
    </html>
  );
}
