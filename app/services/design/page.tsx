import { GlassCard } from "@/components/glass-card"
import { PrimaryButton } from "@/components/primary-button"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Graphic Design & Visual Identity — Brand Systems | TD STUDIOS",
  description:
    "Sophisticated visual identity systems including logo design, brand guidelines, print collateral, and digital assets. Visual systems that scale across every touchpoint.",
  openGraph: {
    title: "Graphic Design & Visual Identity — TD STUDIOS",
    description: "Sophisticated visual systems that communicate your brand's essence through every touchpoint.",
  },
}

export default function DesignPage() {
  return (
    <main className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/luxury-graphic-design-studio-with-premium-branding.jpg"
            alt="Luxury graphic design studio workspace"
            fill
            className="object-cover"
            priority
            quality={85}
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs font-light tracking-wider text-white/80 mb-8">
            DESIGN
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 text-balance">
            Graphic Design & <span className="chrome-text">Visual Identity</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/70 mb-12 max-w-3xl mx-auto text-pretty">
            Sophisticated visual systems that communicate your brand's essence through every touchpoint.
          </p>
          <PrimaryButton>Start Your Brand Journey</PrimaryButton>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <GlassCard className="p-8">
              <h3 className="text-xl font-light mb-4">Brand Identity Systems</h3>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Complete visual identity development including logos, typography, color systems, and brand guidelines
                that establish lasting recognition.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Logo design & variations</li>
                <li>• Typography selection</li>
                <li>• Color palette development</li>
                <li>• Brand guidelines creation</li>
              </ul>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-xl font-light mb-4">Print & Collateral</h3>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Premium print materials that extend your brand presence into physical spaces with sophisticated design
                and attention to detail.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Business cards & stationery</li>
                <li>• Brochures & presentations</li>
                <li>• Packaging design</li>
                <li>• Environmental graphics</li>
              </ul>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-xl font-light mb-4">Digital Assets</h3>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Cohesive digital design systems that maintain brand consistency across all online platforms and
                touchpoints.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Social media templates</li>
                <li>• Email design systems</li>
                <li>• Presentation templates</li>
                <li>• Digital advertising assets</li>
              </ul>
            </GlassCard>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4">Visual systems that scale across every brand touchpoint</h2>
          </div>

          {/* Design Process */}
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-xl font-light mb-8">Design Philosophy</h3>
              <p className="text-white/70 font-light mb-8">
                We believe great design is invisible—it communicates effortlessly, builds trust instinctively, and
                creates emotional connections that drive business results.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="chrome-text text-lg">01</div>
                  <div>
                    <h4 className="font-light mb-2">Strategic Foundation</h4>
                    <p className="text-white/60 text-sm">Understanding your brand's core values and market position</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="chrome-text text-lg">02</div>
                  <div>
                    <h4 className="font-light mb-2">Visual Exploration</h4>
                    <p className="text-white/60 text-sm">Concept development and iterative design refinement</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="chrome-text text-lg">03</div>
                  <div>
                    <h4 className="font-light mb-2">System Creation</h4>
                    <p className="text-white/60 text-sm">Comprehensive guidelines and asset libraries</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-light mb-8">Design Capabilities</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  "Logo Design",
                  "Typography",
                  "Color Systems",
                  "Iconography",
                  "Packaging",
                  "Print Design",
                  "Digital Assets",
                  "Brand Guidelines",
                  "Presentations",
                  "Signage",
                  "Illustrations",
                  "Photography Direction",
                ].map((capability) => (
                  <div key={capability} className="glass-card p-4 text-center">
                    <div className="text-sm font-light text-white/80">{capability}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Design <span className="chrome-text">Portfolio</span>
            </h2>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
              A selection of recent brand identity and graphic design projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <GlassCard key={item} className="aspect-square overflow-hidden relative">
                <Image
                  src="/luxury-brand-design-portfolio-piece---item-.jpg"
                  alt={`Design portfolio piece ${item}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Guidelines Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-12">
            <h3 className="text-2xl font-light mb-4">Brand Guidelines & Asset Library</h3>
            <p className="text-white/70 font-light mb-8">
              Every project includes comprehensive brand guidelines and a complete asset library to ensure consistent
              application across all touchpoints.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-light mb-3">Visual Standards</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Logo usage guidelines</li>
                  <li>• Typography specifications</li>
                  <li>• Color palette with codes</li>
                  <li>• Spacing and layout rules</li>
                </ul>
              </div>
              <div>
                <h4 className="font-light mb-3">Asset Library</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Logo files (all formats)</li>
                  <li>• Template collections</li>
                  <li>• Icon libraries</li>
                  <li>• Photography guidelines</li>
                </ul>
              </div>
              <div>
                <h4 className="font-light mb-3">Application Examples</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Business card mockups</li>
                  <li>• Digital applications</li>
                  <li>• Signage examples</li>
                  <li>• Merchandise concepts</li>
                </ul>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Transform Your <span className="chrome-text">Visual Identity</span>
          </h2>
          <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto">
            Let's create a design system that elevates your brand and resonates with your audience.
          </p>
          <PrimaryButton>Start Your Project</PrimaryButton>
        </div>
      </section>
    </main>
  )
}
