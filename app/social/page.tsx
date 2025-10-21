import SectionBackground from "@/components/section-background"
import GlassCard from "@/components/glass-card"
import PrimaryButton from "@/components/primary-button"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Social Media Marketing & Content Strategy | TD Studios",
  description:
    "Story-driven content, community programming, and campaigns that keep your brand in the feed. Expert social media marketing for ambitious brands.",
  keywords:
    "social media marketing, content strategy, Instagram marketing, TikTok content, LinkedIn strategy, community management, influencer partnerships, UGC content",
}

export default function SocialPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/luxury-champagne-celebration-gold-aesthetic.jpg"
            alt="Luxury champagne celebration"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="glass-card rounded-full px-4 py-2 inline-block mb-6">
            <span className="text-sm font-medium text-white/90">SOCIAL</span>
          </div>
          <h1 className="chrome-text text-5xl md:text-7xl font-bold mb-6 text-balance">Social Media Marketing</h1>
          <p className="text-xl text-white/70 mb-8 max-w-2xl">
            Story-driven content, community programming, and campaigns that keep your brand in the feed.
          </p>
          <PrimaryButton className="px-8 py-4 text-lg font-medium">Schedule a content sprint</PrimaryButton>
        </div>
      </section>

      <SectionBackground src="/images/827a6d46-d4f2-4ea8-9cf2-e7eb451da03b.png" />

      <main className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Programs Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="chrome-text text-4xl font-bold mb-4">Programs</h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              Content engines shipping 120+ assets per quarter across seven platforms.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white/90">Content Systems</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Editorial calendars, asset production workflows, and brand voice alignment for consistent storytelling.
              </p>
              <PrimaryButton>Start today</PrimaryButton>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white/90">Growth Sprints</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Campaign kits built around seasonal pushes and product drops with launch-ready rollout guides.
              </p>
              <PrimaryButton>Start today</PrimaryButton>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white/90">UGC Production</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                User-generated content strategies, creator briefs, and community engagement programs.
              </p>
              <PrimaryButton>Start today</PrimaryButton>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white/90">Paid Social Ops</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Ad creative production, audience targeting, and performance optimization across all major platforms.
              </p>
              <PrimaryButton>Start today</PrimaryButton>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white/90">Analytics Decks</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Performance dashboards, KPI tracking, and actionable insights to keep learning cycles fast.
              </p>
              <PrimaryButton>Start today</PrimaryButton>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white/90">Creator Partnerships</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Talent sourcing, collaboration briefs, legal coordination, and asset handoff managed end-to-end.
              </p>
              <PrimaryButton>Start today</PrimaryButton>
            </GlassCard>
          </div>
        </section>

        {/* Process Overview */}
        <section>
          <div className="text-center mb-12">
            <h2 className="chrome-text text-4xl font-bold mb-4">Social Process</h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              From strategy to execution with performance tracking and optimization.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <GlassCard className="p-8">
              <h3 className="text-xl font-bold mb-6 text-white/90">Strategy</h3>
              <div className="space-y-4 text-white/70">
                <div>• Audience + tone workshops</div>
                <div>• Editorial calendar templates</div>
                <div>• Asset production workflow</div>
                <div>• Community management SOPs</div>
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-xl font-bold mb-6 text-white/90">Production</h3>
              <div className="space-y-4 text-white/70">
                <div>• Short-form video scripts</div>
                <div>• Carousel + story frameworks</div>
                <div>• Long-form + newsletter mix</div>
                <div>• Channel-specific repurposing</div>
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-xl font-bold mb-6 text-white/90">Analytics</h3>
              <div className="space-y-4 text-white/70">
                <div>• Weekly performance snapshots</div>
                <div>• Monthly KPI deep dives</div>
                <div>• Experiment backlog + insights</div>
                <div>• Attribution + funnel monitoring</div>
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
