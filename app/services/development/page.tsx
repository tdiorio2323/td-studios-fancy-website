import { GlassCard } from "@/components/glass-card"
import { PrimaryButton } from "@/components/primary-button"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Development Services — Application & Platform Engineering | TD STUDIOS",
  description:
    "Full-stack development services with modern tech stack expertise. React, Next.js, TypeScript, and serverless architectures for performant digital products.",
  openGraph: {
    title: "Development Services — TD STUDIOS",
    description: "Strategy, engineering, and design collaborating to deliver performant digital products.",
  },
}

export default function DevelopmentPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/luxury-modern-tech-office-workspace-with-sleek-com.jpg"
            alt="Luxury modern tech office workspace"
            fill
            className="object-cover"
            priority
            quality={85}
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs font-light tracking-wider text-white/80 mb-8">
            DEVELOPMENT
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 text-balance">
            Application & Platform <span className="chrome-text">Engineering</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/70 mb-12 max-w-3xl mx-auto text-pretty">
            Strategy, engineering, and design collaborating to deliver performant digital products.
          </p>
          <PrimaryButton>Book a Build Sprint</PrimaryButton>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <GlassCard className="p-8">
              <h3 className="text-xl font-light mb-4">Product Discovery</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Rapid architecture mapping, user flows, and proof-of-concept builds to de-risk your roadmap and align
                teams quickly.
              </p>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-xl font-light mb-4">Full-stack Delivery</h3>
              <p className="text-white/70 font-light leading-relaxed">
                TypeScript-first stacks, API design, data architecture, automated QA, and CI/CD across web and mobile
                surfaces.
              </p>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-xl font-light mb-4">Growth & Iteration</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Analytics instrumentation, experiment support, and performance tuning to sustain shipping velocity
                post-launch.
              </p>
            </GlassCard>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4">
              Preferred engineering partner for premium consumer and B2B launches
            </h2>
          </div>

          {/* Tech Stack */}
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-xl font-light mb-8">Modern Stack Expertise</h3>
              <p className="text-white/70 font-light mb-8">
                React 18, Vite, Expo, Supabase, PostgreSQL, serverless edge, plus observability and error budgets by
                default.
              </p>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { name: "REACT", icon: "⚛️" },
                  { name: "NEXT.JS", icon: "▲" },
                  { name: "VITE", icon: "⚡" },
                  { name: "EXPO", icon: "📱" },
                  { name: "SUPABASE", icon: "🗄️" },
                  { name: "POSTGRES", icon: "🐘" },
                  { name: "EDGE", icon: "🌐" },
                  { name: "PERF", icon: "📊" },
                  { name: "RELIABILITY", icon: "🛡️" },
                ].map((tech) => (
                  <div key={tech.name} className="text-center p-4 glass-card">
                    <div className="text-2xl mb-2">{tech.icon}</div>
                    <div className="text-xs font-light text-white/60">{tech.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-light mb-8">Team Enablement</h3>
              <ul className="space-y-4 text-white/70">
                <li>• Documentation & onboarding playbooks</li>
                <li>• Internal tooling and automation support</li>
                <li>• Knowledge transfer workshops</li>
                <li>• Retained engineering advisory</li>
                <li>• QA and release playbooks</li>
                <li>• Design-to-dev bridges</li>
                <li>• Analytics & observability setup</li>
                <li>• Experiment & growth ops support</li>
                <li>• Change management coaching</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Sections */}
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-light mb-6">Delivery Rhythm</h3>
              <ul className="space-y-3 text-white/70">
                <li>• Sprint planning + backlog grooming</li>
                <li>• Design + engineering pairing sessions</li>
                <li>• Weekly stakeholder reviews</li>
                <li>• Retro + measurement cadence</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-light mb-6">Quality & Security</h3>
              <ul className="space-y-3 text-white/70">
                <li>• Automated QA suites + manual test plans</li>
                <li>• Accessibility + performance budgets</li>
                <li>• Security reviews + dependency scans</li>
                <li>• Launch runbooks with rollback paths</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-light mb-6">Documentation Bundle</h3>
              <ul className="space-y-3 text-white/70">
                <li>• Architecture diagrams</li>
                <li>• API + schema references</li>
                <li>• Component usage guides</li>
                <li>• Onboarding + support contact tree</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Placeholder */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-12 text-center">
            <h3 className="text-2xl font-light mb-4">Engineering Case Study Placeholder</h3>
            <p className="text-white/70 font-light mb-8">
              Swap in client logos, throughput metrics, or screenshots. Highlight latency improvements, revenue impact,
              or feature velocity gains from a recent engagement.
            </p>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-white/40 text-sm mb-1">Suggested content</div>
                <div className="text-white/60 text-xs">• Baseline vs. post-launch metrics</div>
              </div>
              <div>
                <div className="text-white/40 text-sm mb-1">• Tech stack overview</div>
                <div className="text-white/60 text-xs">• Team composition & timeline</div>
              </div>
              <div>
                <div className="text-white/40 text-sm mb-1">• Key lessons learned</div>
                <div className="text-white/60 text-xs">• Services + deliverables list</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Plan Your <span className="chrome-text">Release</span>
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
