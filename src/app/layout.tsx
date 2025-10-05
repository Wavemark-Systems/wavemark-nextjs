import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "WaveMark",
  description: "A modern Next.js application with Tailwind CSS, shadcn/ui, and Suisse font",
  icons: {
    icon: "/ChatGPT Image Oct 4, 2025, 04_08_48 PM.png",
    shortcut: "/ChatGPT Image Oct 4, 2025, 04_08_48 PM.png",
    apple: "/ChatGPT Image Oct 4, 2025, 04_08_48 PM.png",
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
