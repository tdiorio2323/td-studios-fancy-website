import SectionBackground from "@/components/section-background"
import GlassCard from "@/components/glass-card"
import PrimaryButton from "@/components/primary-button"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Application & Platform Engineering | TD Studios",
  description:
    "Strategy, engineering, and design collaborating to deliver performant digital products. Modern stack expertise with performance and accessibility by default.",
  keywords:
    "application engineering, platform engineering, React development, Next.js, TypeScript, full-stack development, API design, serverless architecture",
}

export default function DevPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/luxury-tech-workspace.jpg"
            alt="Luxury technology workspace"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="glass-card rounded-full px-4 py-2 inline-block mb-6">
            <span className="text-sm font-medium text-white/90">DEVELOPMENT</span>
          </div>
          <h1 className="chrome-text text-5xl md:text-7xl font-bold mb-6 text-balance">
            Application & Platform Engineering
          </h1>
          <p className="text-xl text-white/70 mb-8 max-w-2xl">
            Strategy, engineering, and design collaborating to deliver performant digital products.
          </p>
          <PrimaryButton className="px-8 py-4 text-lg font-medium">Book a build sprint</PrimaryButton>
        </div>
      </section>

      <SectionBackground src="/images/827a6d46-d4f2-4ea8-9cf2-e7eb451da03b.png" />

      <main className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Engineering Capabilities */}
        <section>
          <div className="text-center mb-12">
            <h2 className="chrome-text text-4xl font-bold mb-4">Engineering Capabilities</h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              Modern stack expertise with performance and accessibility by default.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white/90">Frontend</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                React, Next.js, TypeScript, and modern component libraries with server-side rendering and edge
                optimization.
              </p>
              <PrimaryButton>Start today</PrimaryButton>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white/90">Backend</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Node.js, FastAPI, PostgreSQL, and serverless architectures with API design and data modeling expertise.
              </p>
              <PrimaryButton>Start today</PrimaryButton>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white/90">Infrastructure</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Vercel, Supabase, Stripe integrations with CI/CD, monitoring, and automated deployment pipelines.
              </p>
              <PrimaryButton>Start today</PrimaryButton>
            </GlassCard>
          </div>
        </section>

        {/* Standards Section */}
        <section>
          <GlassCard className="p-12 text-center">
            <h3 className="chrome-text text-3xl font-bold mb-6">Standards</h3>
            <p className="text-white/70 text-lg mb-8 max-w-3xl mx-auto">
              Performance ≥90 Lighthouse scores, accessibility compliance, security best practices, and comprehensive
              testing coverage on every project.
            </p>
            <PrimaryButton className="px-8 py-4 text-lg font-medium">Start today</PrimaryButton>
          </GlassCard>
        </section>

        {/* Process Overview */}
        <section>
          <div className="text-center mb-12">
            <h2 className="chrome-text text-4xl font-bold mb-4">Development Process</h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              From discovery to deployment with team enablement and ongoing support.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <GlassCard className="p-8">
              <h3 className="text-xl font-bold mb-6 text-white/90">Discovery</h3>
              <div className="space-y-4 text-white/70">
                <div>• Architecture mapping & user flows</div>
                <div>• Proof-of-concept builds</div>
                <div>• Technical risk assessment</div>
                <div>• Team alignment workshops</div>
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-xl font-bold mb-6 text-white/90">Development</h3>
              <div className="space-y-4 text-white/70">
                <div>• TypeScript-first implementation</div>
                <div>• API design & data modeling</div>
                <div>• Automated testing & QA</div>
                <div>• Performance optimization</div>
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-xl font-bold mb-6 text-white/90">Deployment</h3>
              <div className="space-y-4 text-white/70">
                <div>• CI/CD pipeline setup</div>
                <div>• Monitoring & observability</div>
                <div>• Documentation & handoff</div>
                <div>• Team training & support</div>
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
