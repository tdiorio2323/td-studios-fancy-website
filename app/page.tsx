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
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => {
      clearTimeout(timer)
    }
  }, [])

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
