import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Process — Five-Phase Framework for Digital Excellence | TD STUDIOS",
  description:
    "Precision methodology ensuring exceptional outcomes. Discovery, Strategy, Design, Development, and Launch phases for luxury digital experiences.",
  openGraph: {
    title: "Our Process — TD STUDIOS",
    description: "Five-phase framework ensuring precision delivery and exceptional outcomes.",
  },
}

export default function ProcessPage() {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/luxury-tech-workspace.jpg"
            alt="Luxury technology workspace"
            fill
            className="object-cover"
            style={{ filter: "brightness(0.3) contrast(1.3)" }}
            priority
            quality={85}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 mb-6 text-xs font-light tracking-widest uppercase border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
            Methodology
          </div>
          <h1 className="chrome-text text-6xl md:text-8xl font-bold mb-6 tracking-tight">Our Process</h1>
          <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto mb-8">
            Precision methodology that ensures exceptional outcomes. Every project follows our proven framework for
            luxury digital experiences.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 chrome-text">Five-Phase Framework</h2>
            <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
              Our methodology ensures precision delivery and exceptional outcomes through strategic alignment and
              meticulous execution.
            </p>
          </div>

          <div className="space-y-12">
            {/* Phase 1 */}
            <div className="glass-card p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="text-6xl font-bold chrome-text mb-4">01</div>
                  <div className="text-2xl font-bold text-white/90">Discovery</div>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-white/70 font-light leading-relaxed text-lg">
                    Strategic alignment and requirements gathering through stakeholder interviews, competitive analysis,
                    and technical specification development.
                  </p>
                </div>
                <div className="lg:col-span-4">
                  <div className="space-y-2 text-sm text-white/60">
                    <div>• Stakeholder workshops</div>
                    <div>• Market research & analysis</div>
                    <div>• Technical requirements</div>
                    <div>• Project roadmap creation</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="glass-card p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="text-6xl font-bold chrome-text mb-4">02</div>
                  <div className="text-2xl font-bold text-white/90">Strategy</div>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-white/70 font-light leading-relaxed text-lg">
                    Information architecture, user journeys, and technical specifications tailored to your objectives
                    and target audience.
                  </p>
                </div>
                <div className="lg:col-span-4">
                  <div className="space-y-2 text-sm text-white/60">
                    <div>• Information architecture</div>
                    <div>• User journey mapping</div>
                    <div>• Content strategy</div>
                    <div>• Technical specifications</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="glass-card p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="text-6xl font-bold chrome-text mb-4">03</div>
                  <div className="text-2xl font-bold text-white/90">Design</div>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-white/70 font-light leading-relaxed text-lg">
                    Visual systems, component libraries, and high-fidelity prototypes optimized for conversion and user
                    experience.
                  </p>
                </div>
                <div className="lg:col-span-4">
                  <div className="space-y-2 text-sm text-white/60">
                    <div>• Visual design systems</div>
                    <div>• Component libraries</div>
                    <div>• Interactive prototypes</div>
                    <div>• Conversion optimization</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="glass-card p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="text-6xl font-bold chrome-text mb-4">04</div>
                  <div className="text-2xl font-bold text-white/90">Development</div>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-white/70 font-light leading-relaxed text-lg">
                    Production-ready code with performance optimization, accessibility compliance, and comprehensive CMS
                    integration.
                  </p>
                </div>
                <div className="lg:col-span-4">
                  <div className="space-y-2 text-sm text-white/60">
                    <div>• Modern stack development</div>
                    <div>• Performance optimization</div>
                    <div>• Accessibility compliance</div>
                    <div>• CMS integration</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 5 */}
            <div className="glass-card p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="text-6xl font-bold chrome-text mb-4">05</div>
                  <div className="text-2xl font-bold text-white/90">Launch</div>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-white/70 font-light leading-relaxed text-lg">
                    Deployment, monitoring, and post-launch optimization with comprehensive documentation and training.
                  </p>
                </div>
                <div className="lg:col-span-4">
                  <div className="space-y-2 text-sm text-white/60">
                    <div>• Deployment & monitoring</div>
                    <div>• Performance tracking</div>
                    <div>• Documentation & training</div>
                    <div>• Ongoing optimization</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 chrome-text">Project Timeline</h2>
            <p className="text-xl text-white/70 font-light">
              Typical project phases and duration for flagship digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center glass-card p-6">
              <div className="text-3xl font-bold chrome-text mb-2">2-4</div>
              <div className="text-white/90 font-medium mb-2">Weeks</div>
              <div className="text-white/60 text-sm">Discovery & Strategy</div>
            </div>
            <div className="text-center glass-card p-6">
              <div className="text-3xl font-bold chrome-text mb-2">4-8</div>
              <div className="text-white/90 font-medium mb-2">Weeks</div>
              <div className="text-white/60 text-sm">Design & Development</div>
            </div>
            <div className="text-center glass-card p-6">
              <div className="text-3xl font-bold chrome-text mb-2">1-2</div>
              <div className="text-white/90 font-medium mb-2">Weeks</div>
              <div className="text-white/60 text-sm">Launch & Optimization</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 chrome-text">Ready to Begin?</h2>
          <p className="text-xl text-white/70 font-light mb-8 max-w-2xl mx-auto">
            Let's discuss your project and how our proven methodology can deliver exceptional results.
          </p>
          <Button asChild className="primary-button px-8 py-4 text-base">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
