import { GlassCard } from "@/components/glass-card"
import { PrimaryButton } from "@/components/primary-button"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Social Media Marketing — Content & Community Programs | TD STUDIOS",
  description:
    "Story-driven social media content, community programming, and campaigns. Content engines shipping 120+ assets per quarter across seven platforms.",
  openGraph: {
    title: "Social Media Marketing — TD STUDIOS",
    description: "Story-driven content, community programming, and campaigns that keep your brand in the feed.",
  },
}

export default function SocialMediaPage() {
  return (
    <main className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/luxury-social-media-workspace.jpg"
            alt="Luxury social media workspace"
            fill
            className="object-cover"
            priority
            quality={85}
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs font-light tracking-wider text-white/80 mb-8">
            SOCIAL
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 text-balance">
            Social Media <span className="chrome-text">Marketing</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/70 mb-12 max-w-3xl mx-auto text-pretty">
            Story-driven content, community programming, and campaigns that keep your brand in the feed.
          </p>
          <PrimaryButton>Schedule a Content Sprint</PrimaryButton>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <GlassCard className="p-8">
              <h3 className="text-xl font-light mb-4">Campaign Kits</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Launch-ready content systems built around seasonal pushes and product drops—calendars, assets, and
                rollout guides.
              </p>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-xl font-light mb-4">Always-on Presence</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Editorial storytelling, community engagement, and reporting delivered monthly with brand voice
                alignment.
              </p>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-xl font-light mb-4">Creator Collaborations</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Talent sourcing, briefs, legal, and asset handoff handled end-to-end for influencer and partner
                campaigns.
              </p>
            </GlassCard>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4">
              Content engines shipping 120+ assets per quarter across seven platforms
            </h2>
          </div>

          {/* Platform Expertise */}
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-xl font-light mb-8">Channel Expertise</h3>
              <p className="text-white/70 font-light mb-8">
                Short-form video, carousel storytelling, email handoffs, and executive thought leadership optimized per
                platform.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light mb-8">Signal Reporting</h3>
              <p className="text-white/70 font-light mb-8">
                Creative performance dashboards, KPI tracking, and next-step roadmaps to keep learning cycles fast.
              </p>
            </div>
          </div>

          {/* Process Breakdown */}
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-light mb-6">Program Blueprint</h3>
              <ul className="space-y-3 text-white/70">
                <li>• Audience + tone workshops</li>
                <li>• Editorial calendar templates</li>
                <li>• Asset production workflow</li>
                <li>• Community management SOPs</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-light mb-6">Content Engines</h3>
              <ul className="space-y-3 text-white/70">
                <li>• Short-form video scripts</li>
                <li>• Carousel + story frameworks</li>
                <li>• Long-form + newsletter mix</li>
                <li>• Channel-specific repurposing</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-light mb-6">Reporting Cadence</h3>
              <ul className="space-y-3 text-white/70">
                <li>• Weekly performance snapshots</li>
                <li>• Monthly KPI deep dives</li>
                <li>• Experiment backlog + insights</li>
                <li>• Attribution + funnel monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Highlight */}
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-12">
            <h3 className="text-2xl font-light mb-4">Campaign Highlight Placeholder</h3>
            <p className="text-white/70 font-light mb-8">
              Use this block for a social case study—include reach, engagement lift, follower growth, or sales impact
              once results are ready.
            </p>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-white/40 text-sm mb-1">Suggested content</div>
                <div className="text-white/60 text-xs">• Channels activated</div>
              </div>
              <div>
                <div className="text-white/40 text-sm mb-1">• Campaign objective</div>
                <div className="text-white/60 text-xs">• Key creative examples</div>
              </div>
              <div>
                <div className="text-white/40 text-sm mb-1">• Outcome metrics + testimonial</div>
                <div className="text-white/60 text-xs"></div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Build Your Social <span className="chrome-text">Engine</span>
          </h2>
          <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto">
            Strategy, design, development, and social programs for ambitious brands headquartered in New York City,
            serving teams worldwide.
          </p>
          <PrimaryButton>Start Your Project</PrimaryButton>
        </div>
      </section>
    </main>
  )
}
