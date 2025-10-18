"use client"

import { Hero } from "@/components/hero"
import { ServiceTiles } from "@/components/service-tiles"
import { ProcessRail } from "@/components/process-rail"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { LoadingScreen } from "@/components/loading-screen"
import { BadgeLine } from "@/components/badge-line"
import { SectionCTA } from "@/components/section-cta"
import { useLoadingScreen } from "@/hooks/useLoadingScreen"; // New import

export default function HomePage() {
  const isLoading = useLoadingScreen(1500); // Use the custom hook

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <BadgeLine className="mb-16" />
      <ServiceTiles />
      <ProcessRail />
      <Testimonials />
      <CTA />
    </div>
  )
}
