"use client"

// Force rebuild - loading screen completely removed
import { Hero } from "@/components/hero"
import { ServiceTiles } from "@/components/service-tiles"
import { ProcessRail } from "@/components/process-rail"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { BadgeLine } from "@/components/badge-line"

export default function HomePage() {
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
