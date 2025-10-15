import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import CTASticky from "@/components/CTASticky"
import { VisuallyHidden } from "@/components/visually-hidden"
import { generateOrganizationSchema, generateLocalBusinessSchema } from "@/lib/seo"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: {
    template: "%s | TD STUDIOS",
    default: "TD STUDIOS — Luxury Websites & Growth Systems",
  },
  description:
    "Luxury websites and growth systems. NYC-based. Strategy-led. Full-stack execution.",
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
    "full-stack development",
    "digital strategy",
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
    title: "TD STUDIOS — Luxury Websites & Growth Systems",
    description: "Luxury websites and growth systems. NYC-based. Strategy-led. Full-stack execution.",
    type: "website",
    locale: "en_US",
    siteName: "TD STUDIOS",
    url: "https://tdstudiosny.com",
    images: [
      {
        url: "https://tdstudiosny.com/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "TD STUDIOS — Luxury Websites & Growth Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TD STUDIOS — Luxury Websites & Growth Systems",
    description: "Luxury websites and growth systems. NYC-based. Strategy-led. Full-stack execution.",
    images: ["https://tdstudiosny.com/og-default.jpg"],
    creator: "@tdstudiosny",
    site: "@tdstudiosny",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "verification_token",
  },
  alternates: {
    canonical: "https://tdstudiosny.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = generateOrganizationSchema()
  const localBusinessSchema = generateLocalBusinessSchema()

  return (
    <html lang="en" className="dark">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://formspree.io" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans bg-black text-white antialiased`}>
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-white text-black px-4 py-2 rounded-md font-medium"
        >
          Skip to main content
        </a>

        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          <CTASticky />
          <main id="main-content" className="pt-20">{children}</main>
        </Suspense>
      </body>
    </html>
  )
}
