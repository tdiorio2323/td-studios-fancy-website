import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio — Featured Projects & Case Studies | TD STUDIOS",
  description:
    "Explore our portfolio of luxury digital experiences including e-commerce platforms, brand identities, SaaS applications, and social media campaigns.",
  openGraph: {
    title: "Portfolio — TD STUDIOS",
    description: "Featured projects showcasing luxury design and development excellence.",
  },
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/nyc-aerial-night-bw.jpg"
            alt="NYC aerial view at night in black and white"
            fill
            className="object-cover"
            style={{ filter: "brightness(0.4) contrast(1.2)" }}
            priority
            quality={85}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 mb-6 text-xs font-light tracking-widest uppercase border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
            Portfolio
          </div>
          <h1 className="chrome-text text-6xl md:text-8xl font-bold mb-6 tracking-tight">Our Portfolio</h1>
          <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto mb-8">
            A curated selection of our most impactful work across web, development, and social platforms.
          </p>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              A curated selection of our most impactful work across web, development, and social platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="glass-card p-0 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-sm text-white/80 mb-1">E-commerce Platform</div>
                  <h3 className="text-xl font-bold text-white">Luxury Retail Experience</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-white/70 mb-4">
                  Complete digital transformation with custom checkout flow and inventory management.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">Next.js</span>
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">Stripe</span>
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">Supabase</span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="glass-card p-0 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-green-500/20 to-teal-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-sm text-white/80 mb-1">Social Campaign</div>
                  <h3 className="text-xl font-bold text-white">Brand Awareness Drive</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-white/70 mb-4">
                  Multi-platform social strategy resulting in 300% engagement increase.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">Instagram</span>
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">TikTok</span>
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">Analytics</span>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="glass-card p-0 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-red-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-sm text-white/80 mb-1">Web Application</div>
                  <h3 className="text-xl font-bold text-white">SaaS Dashboard</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-white/70 mb-4">
                  Real-time analytics platform with advanced data visualization and reporting.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">React</span>
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">D3.js</span>
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">PostgreSQL</span>
                </div>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="glass-card p-0 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-pink-500/20 to-purple-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-sm text-white/80 mb-1">Mobile App</div>
                  <h3 className="text-xl font-bold text-white">Fitness Tracking</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-white/70 mb-4">
                  Cross-platform mobile application with real-time health monitoring.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">React Native</span>
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">HealthKit</span>
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">Firebase</span>
                </div>
              </div>
            </div>

            {/* Project Card 5 */}
            <div className="glass-card p-0 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-cyan-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-sm text-white/80 mb-1">Brand Identity</div>
                  <h3 className="text-xl font-bold text-white">Complete Rebrand</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-white/70 mb-4">
                  Full brand identity redesign including logo, website, and marketing materials.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">Design</span>
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">Figma</span>
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">Print</span>
                </div>
              </div>
            </div>

            {/* Project Card 6 */}
            <div className="glass-card p-0 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-yellow-500/20 to-orange-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-sm text-white/80 mb-1">API Development</div>
                  <h3 className="text-xl font-bold text-white">Microservices Architecture</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-white/70 mb-4">
                  Scalable backend infrastructure supporting millions of daily requests.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">Node.js</span>
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">Docker</span>
                  <span className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full">AWS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 chrome-text">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/70 font-light mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with our expertise in design, development, and digital
            strategy.
          </p>
          <Button asChild className="primary-button px-8 py-4 text-base">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
