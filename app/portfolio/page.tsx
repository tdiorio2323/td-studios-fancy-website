import SectionBackground from "@/components/section-background"
import GlassCard from "@/components/glass-card"
import PrimaryButton from "@/components/primary-button"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio | TD Studios",
  description:
    "A curated selection of our most impactful work across web design, development, and social media marketing. View our portfolio of luxury digital experiences.",
  keywords:
    "portfolio, case studies, web design portfolio, development projects, social media campaigns, luxury digital work",
}

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/nyc-aerial-night-bw.jpg"
            alt="NYC aerial view at night"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="glass-card rounded-full px-4 py-2 inline-block mb-6">
            <span className="text-sm font-medium text-white/90">PORTFOLIO</span>
          </div>
          <h1 className="chrome-text text-5xl md:text-7xl font-bold mb-6 text-balance">Featured Work</h1>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            A curated selection of our most impactful projects across web, development, and social platforms.
          </p>
        </div>
      </section>

      <SectionBackground src="/luxury-marble-texture.jpg" />

      <main className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 space-y-24">
        {/* Featured Projects Grid */}
        <section>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <GlassCard className="group overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-sm text-white/80 mb-2 font-medium">E-COMMERCE PLATFORM</div>
                  <h3 className="text-2xl font-bold text-white">Luxury Retail Experience</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-white/70 mb-6 leading-relaxed">
                  Complete digital transformation with custom checkout flow and inventory management system.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">Next.js</span>
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">Stripe</span>
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">Supabase</span>
                </div>
                <PrimaryButton className="w-full">View Case Study</PrimaryButton>
              </div>
            </GlassCard>

            {/* Project 2 */}
            <GlassCard className="group overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-green-500/20 to-teal-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-sm text-white/80 mb-2 font-medium">SOCIAL CAMPAIGN</div>
                  <h3 className="text-2xl font-bold text-white">Brand Awareness Drive</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-white/70 mb-6 leading-relaxed">
                  Multi-platform social strategy resulting in 300% engagement increase and 2M+ impressions.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">Instagram</span>
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">TikTok</span>
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">Analytics</span>
                </div>
                <PrimaryButton className="w-full">View Case Study</PrimaryButton>
              </div>
            </GlassCard>

            {/* Project 3 */}
            <GlassCard className="group overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-red-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-sm text-white/80 mb-2 font-medium">WEB APPLICATION</div>
                  <h3 className="text-2xl font-bold text-white">SaaS Dashboard</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-white/70 mb-6 leading-relaxed">
                  Real-time analytics platform with advanced data visualization and comprehensive reporting.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">React</span>
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">D3.js</span>
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">PostgreSQL</span>
                </div>
                <PrimaryButton className="w-full">View Case Study</PrimaryButton>
              </div>
            </GlassCard>

            {/* Project 4 */}
            <GlassCard className="group overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-pink-500/20 to-purple-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-sm text-white/80 mb-2 font-medium">MOBILE APP</div>
                  <h3 className="text-2xl font-bold text-white">Fitness Tracking</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-white/70 mb-6 leading-relaxed">
                  Cross-platform mobile application with real-time health monitoring and social features.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">React Native</span>
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">HealthKit</span>
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">Firebase</span>
                </div>
                <PrimaryButton className="w-full">View Case Study</PrimaryButton>
              </div>
            </GlassCard>

            {/* Project 5 */}
            <GlassCard className="group overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-cyan-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-sm text-white/80 mb-2 font-medium">BRAND IDENTITY</div>
                  <h3 className="text-2xl font-bold text-white">Complete Rebrand</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-white/70 mb-6 leading-relaxed">
                  Full brand identity redesign including logo, website, and comprehensive marketing materials.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">Design</span>
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">Figma</span>
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">Print</span>
                </div>
                <PrimaryButton className="w-full">View Case Study</PrimaryButton>
              </div>
            </GlassCard>

            {/* Project 6 */}
            <GlassCard className="group overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-yellow-500/20 to-orange-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-sm text-white/80 mb-2 font-medium">API DEVELOPMENT</div>
                  <h3 className="text-2xl font-bold text-white">Microservices Architecture</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-white/70 mb-6 leading-relaxed">
                  Scalable backend infrastructure supporting millions of daily requests with 99.9% uptime.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">Node.js</span>
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">Docker</span>
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">AWS</span>
                </div>
                <PrimaryButton className="w-full">View Case Study</PrimaryButton>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <GlassCard className="p-12 text-center">
            <h2 className="chrome-text text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with our expertise in design, development, and digital
              strategy.
            </p>
            <PrimaryButton className="px-8 py-4 text-lg font-medium">Start Your Project</PrimaryButton>
          </GlassCard>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h3 className="text-sm font-medium text-white/60 mb-4">TD STUDIOS</h3>
            <p className="text-white/70 mb-4">
              Strategy, design, development, and social programs for ambitious brands
              <br />
              headquartered in New York City, serving teams worldwide.
            </p>
          </div>
          <div className="text-center text-sm text-white/40 mt-8">© 2025 TD Studios. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
