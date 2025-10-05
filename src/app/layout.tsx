import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wavemark",
  description: "watermarked ai generated speech",
  icons: {
    icon: "/wave_transparent.png",
    shortcut: "/wave_transparent.png",
    apple: "/wave_transparent.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-sans antialiased"
      >
        {children}
      </body>
    </html>
  );
}
