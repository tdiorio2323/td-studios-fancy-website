import SectionBackground from "@/components/section-background"
import GlassCard from "@/components/glass-card"
import PrimaryButton from "@/components/primary-button"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Experiences That Convert | TD Studios",
  description:
    "Strategy, performance, and story-first content engineered for clarity and velocity. Premium web design and development for ambitious brands.",
  keywords:
    "web design, web development, SEO optimization, conversion optimization, user experience, digital strategy, brand websites, luxury web design",
}

export default function WebPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/luxury-modern-architecture-glass-building.jpg"
            alt="Luxury modern architecture"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="glass-card rounded-full px-4 py-2 inline-block mb-6">
            <span className="text-sm font-medium text-white/90">WEB</span>
          </div>
          <h1 className="chrome-text text-5xl md:text-7xl font-bold mb-6 text-balance">Web Experiences That Convert</h1>
          <p className="text-xl text-white/70 mb-8 max-w-2xl">
            Strategy, performance, and story-first content engineered for clarity and velocity.
          </p>
          <PrimaryButton className="px-8 py-4 text-lg font-medium">Start your project</PrimaryButton>
        </div>
      </section>

      <SectionBackground src="/images/827a6d46-d4f2-4ea8-9cf2-e7eb451da03b.png" />

      <main className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Services Grid */}
        <section>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white/90">Web Experience</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Story-driven sections, SEO-focused architecture, and instrumented funnels built for measurable wins.
              </p>
              <PrimaryButton>Start today</PrimaryButton>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white/90">Product & Platform</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Modular content models, CMS-ready components, and asset optimization that keeps teams shipping fast.
              </p>
              <PrimaryButton>Start today</PrimaryButton>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white/90">Social Programs</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Unified brand, docs, and support surfaces powered by design systems and enterprise-grade hosting.
              </p>
              <PrimaryButton>Start today</PrimaryButton>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white/90">Brand & Identity</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Complete visual identity systems with logo design, brand guidelines, and asset libraries.
              </p>
              <PrimaryButton>Start today</PrimaryButton>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white/90">Digital Assets</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                High-impact creative assets, photography direction, and content production workflows.
              </p>
              <PrimaryButton>Start today</PrimaryButton>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white/90">Partnerships</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Strategic collaborations, integration partnerships, and ecosystem development initiatives.
              </p>
              <PrimaryButton>Start today</PrimaryButton>
            </GlassCard>
          </div>
        </section>

        {/* Process Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="chrome-text text-4xl font-bold mb-4">Elite Process</h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              Everything tied to outcomes with dependable handoff and optimization roadmaps.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <GlassCard className="p-8">
              <h3 className="text-xl font-bold mb-6 text-white/90">Discovery</h3>
              <div className="space-y-4 text-white/70">
                <div>• Kickoff audit + technical mapping</div>
                <div>• Message architecture + content inventory</div>
                <div>• Wireframes with rapid prototype review</div>
                <div>• Analytics + measurement plan setup</div>
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-xl font-bold mb-6 text-white/90">Launch</h3>
              <div className="space-y-4 text-white/70">
                <div>• Component library + design tokens</div>
                <div>• CMS schema and publishing workflows</div>
                <div>• Performance + accessibility tuning</div>
                <div>• QA scripts and go-live checklist</div>
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-xl font-bold mb-6 text-white/90">Support</h3>
              <div className="space-y-4 text-white/70">
                <div>• Growth experiments + reporting cadence</div>
                <div>• Knowledge transfer sessions</div>
                <div>• Backlog grooming + roadmap templates</div>
                <div>• Optional retained iteration support</div>
              </div>
            </GlassCard>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h3 className="text-sm font-medium text-white/60 mb-4">TD STUDIOS</h3>
            <h4 className="chrome-text text-3xl font-bold mb-4">Let's build the next flagship experience.</h4>
            <p className="text-white/70 mb-8">
              Strategy, design, development, and social programs for ambitious brands
              <br />
              headquartered in New York City, serving teams worldwide.
            </p>
            <PrimaryButton className="px-8 py-4 text-lg font-medium">Start your project</PrimaryButton>
          </div>
          <div className="text-center text-sm text-white/40 mt-12">© 2025 TD Studios. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
