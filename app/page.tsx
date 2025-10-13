"use client"

import { useState, useEffect } from "react"
import { Hero } from "@/components/hero"
import { ServiceTiles } from "@/components/service-tiles"
import { ProcessRail } from "@/components/process-rail"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { LoadingScreen } from "@/components/loading-screen"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log("[v0] Loading timer started")
    const timer = setTimeout(() => {
      console.log("[v0] Loading timer completed, setting isLoading to false")
      setIsLoading(false)
    }, 1500) // Updated to 1.5 seconds to match loading screen completion

    return () => {
      console.log("[v0] Cleaning up timer")
      clearTimeout(timer)
    }
  }, [])

  console.log("[v0] HomePage render, isLoading:", isLoading)

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <ServiceTiles />
      <ProcessRail />
      <Testimonials />
      <CTA />
    </div>
  )
}
