import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SiteQuest - Scout, Share, and Discover the Perfect Campsite",
  description: "Find and share detailed campsite reviews with fellow RVers and outdoor enthusiasts. Know before you go with real scouting data.",
  openGraph: {
    title: "SiteQuest",
    description: "Scout, Share, and Discover the Perfect Campsite",
    siteName: "SiteQuest",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SiteQuest",
    description: "Scout, Share, and Discover the Perfect Campsite",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
