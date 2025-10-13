import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/nyc-aerial-night-bw.jpg"
            alt="NYC aerial view at night in black and white"
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/td-studios-logo-8uiEdp2FCTu7lUV0ZXsNBNItemsJSg.png"
            alt="TD Studios Logo"
            width={800}
            height={200}
            className="w-[500px] md:w-[650px] lg:w-[800px] h-auto drop-shadow-2xl mb-8"
            priority
          />
          <div className="text-white/90 text-lg md:text-xl lg:text-2xl font-light tracking-[0.2em] uppercase">
            Luxury • Strategy • Creativity
          </div>
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
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500">
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
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500">
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
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500">
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
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500">
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
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500">
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
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500">
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
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with our expertise in design, development, and digital
              strategy.
            </p>
            <Button className="bg-white text-slate-900 hover:bg-white/90 px-8 py-3 text-lg font-medium transition-all duration-300">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold text-white mb-4">TD STUDIOS</div>
          <p className="text-white/60 mb-6">
            Strategy, design, development, and social programs for ambitious brands headquartered in New York City,
            serving teams worldwide.
          </p>
          <p className="text-white/40 text-sm">© 2025 TD Studios. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
