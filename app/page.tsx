import { Hero } from "@/components/hero"
import { ServiceTiles } from "@/components/service-tiles"
import { Suspense } from "react"
import dynamic from "next/dynamic"

const ProcessRail = dynamic(() => import("@/components/process-rail").then((mod) => ({ default: mod.ProcessRail })), {
  loading: () => <div className="h-96 animate-pulse bg-white/5" />,
})

const Testimonials = dynamic(() => import("@/components/testimonials").then((mod) => ({ default: mod.Testimonials })), {
  loading: () => <div className="h-96 animate-pulse bg-white/5" />,
})

const CTA = dynamic(() => import("@/components/cta").then((mod) => ({ default: mod.CTA })), {
  loading: () => <div className="h-64 animate-pulse bg-white/5" />,
})

export default function HomePage() {
  return (
    <div className="min-h-screen text-white">
      <Hero />
      <div className="relative">
        <ServiceTiles />
        <Suspense fallback={<div className="h-96 animate-pulse bg-white/5" />}>
          <ProcessRail />
        </Suspense>
        <Suspense fallback={<div className="h-96 animate-pulse bg-white/5" />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<div className="h-64 animate-pulse bg-white/5" />}>
          <CTA />
        </Suspense>
      </div>
    </div>
  )
}
