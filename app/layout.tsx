import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { SkipToContent } from "@/components/skip-to-content"
import { StructuredData } from "@/components/structured-data"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "TD STUDIOS — Luxury Strategy Creativity",
  description:
    "Premium design solutions for high-growth brands. Strategy, design, development, and social programs headquartered in New York City.",
  generator: "TD STUDIOS",
  keywords: [
    "luxury design",
    "premium branding",
    "NYC design studio",
    "strategy",
    "creativity",
    "web design",
    "development",
    "social media marketing",
    "graphic design",
    "brand identity",
  ],
  authors: [{ name: "TD STUDIOS" }],
  creator: "TD STUDIOS",
  publisher: "TD STUDIOS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "TD STUDIOS — Luxury Strategy Creativity",
    description: "Premium design solutions for high-growth brands. Strategy, design, development, and social programs.",
    type: "website",
    locale: "en_US",
    siteName: "TD STUDIOS",
    url: "https://tdstudios.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "TD STUDIOS — Luxury Strategy Creativity",
    description: "Premium design solutions for high-growth brands",
    creator: "@tdstudios",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "verification_token",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans text-white antialiased`}>
        <SkipToContent />
        <StructuredData type="organization" />
        <Navigation />
        <main id="main-content" className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
