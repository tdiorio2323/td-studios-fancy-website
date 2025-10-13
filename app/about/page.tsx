import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About TD STUDIOS — Luxury Design Studio in New York City",
  description:
    "Founded in NYC, TD STUDIOS represents the convergence of luxury design, strategic thinking, and technical excellence. Luxury through restraint. Strategy through precision.",
  openGraph: {
    title: "About TD STUDIOS",
    description: "Luxury through restraint. Strategy through precision. Creativity through excellence.",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/nyc-hero.jpg"
            alt="NYC Times Square at night"
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
            About Us
          </div>
          <h1 className="chrome-text text-6xl md:text-8xl font-bold mb-6 tracking-tight">TD STUDIOS</h1>
          <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto mb-8">
            Luxury through restraint. Strategy through precision. Creativity through excellence.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 chrome-text">Our Story</h2>
          </div>

          <div className="space-y-8 text-lg font-light leading-relaxed text-white/80">
            <p>
              Founded in the heart of New York City, TD STUDIOS represents the convergence of luxury design, strategic
              thinking, and technical excellence. We believe that exceptional digital experiences are born from the
              intersection of restraint and ambition.
            </p>
            <p>
              Our approach is rooted in the understanding that true luxury lies not in excess, but in precision. Every
              pixel, every interaction, every line of code is crafted with meticulous attention to detail and strategic
              purpose.
            </p>
            <p>
              We partner with ambitious brands and visionary leaders who understand that digital excellence is not just
              about aesthetics—it's about creating meaningful connections, driving measurable results, and building
              lasting competitive advantages.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 chrome-text">Our Values</h2>
            <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
              The principles that guide every decision, every design, and every line of code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center">
              <div className="text-4xl font-bold chrome-text mb-4">Luxury</div>
              <p className="text-white/70 font-light leading-relaxed">
                Excellence through restraint. We believe true luxury emerges from precision, not excess. Every element
                serves a purpose.
              </p>
            </div>
            <div className="glass-card p-8 text-center">
              <div className="text-4xl font-bold chrome-text mb-4">Strategy</div>
              <p className="text-white/70 font-light leading-relaxed">
                Data-driven decisions backed by deep market understanding. We align creative vision with business
                objectives.
              </p>
            </div>
            <div className="glass-card p-8 text-center">
              <div className="text-4xl font-bold chrome-text mb-4">Creativity</div>
              <p className="text-white/70 font-light leading-relaxed">
                Innovation within constraints. We push boundaries while maintaining the sophistication our clients
                expect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 chrome-text">Leadership</h2>
            <p className="text-xl text-white/70 font-light">
              Experienced professionals dedicated to delivering exceptional results.
            </p>
          </div>

          <div className="glass-card p-8 md:p-12 text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-white/20 to-white/5 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-white/40 text-sm font-light">Photo</span>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white/90">Creative Director</h3>
            <p className="text-white/60 mb-4">Founder & Principal</p>
            <p className="text-white/70 font-light leading-relaxed max-w-2xl mx-auto">
              With over a decade of experience crafting digital experiences for luxury brands, our leadership combines
              strategic vision with hands-on creative expertise. Based in NYC, serving clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 chrome-text">New York City</h2>
          <p className="text-xl text-white/70 font-light mb-8 max-w-2xl mx-auto">
            Headquartered in the creative capital of the world, serving ambitious brands globally. Our NYC perspective
            brings urban sophistication to every project.
          </p>
          <div className="glass-card p-8 inline-block">
            <div className="text-white/60 font-light">
              <div>Manhattan, New York</div>
              <div>Available worldwide</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 chrome-text">Let's Create Together</h2>
          <p className="text-xl text-white/70 font-light mb-8 max-w-2xl mx-auto">
            Ready to elevate your brand with a flagship digital experience? Let's discuss your vision.
          </p>
          <Button asChild className="primary-button px-8 py-4 text-base">
            <Link href="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
