import type { Metadata, Viewport } from "next";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { LocaleProvider } from "@/components/LocaleProvider";
import { getLocale } from "@/lib/locale";
import "./globals.css";

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
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className="font-sans antialiased"
      >
        <LocaleProvider locale={locale}>
          {children}
        </LocaleProvider>
        <Analytics />
      </body>
    </html>
  );
}
