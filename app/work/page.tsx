import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { generateMetadata, generateBreadcrumbSchema } from "@/lib/seo"

export const metadata = generateMetadata({
  title: "Selected Work",
  description: "Featured projects representing our commitment to luxury, strategy, and exceptional creativity. Flagship experiences for ambitious brands.",
  path: "/work",
})

export default function WorkPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Work", url: "/work" },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/nyc-hero.jpg"
              alt="NYC cityscape at night"
              fill
              className="object-cover"
              style={{ filter: "brightness(0.4) contrast(1.2)" }}
              priority
              quality={85}
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />

          <div className="relative z-10 container-custom text-center">
            <div className="inline-block px-4 py-2 mb-6 text-xs font-light tracking-widest uppercase border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
              Portfolio
            </div>
            <h1 className="chrome-text text-h1 font-bold mb-6 tracking-tight">Our Work</h1>
            <p className="text-body-lg text-white/80 font-light leading-relaxed max-w-3xl mx-auto mb-8">
              Flagship experiences for ambitious brands. Each project represents our commitment to luxury, strategy, and
              exceptional creativity.
            </p>
            <Button asChild className="primary-button px-8 py-4 text-base focus-ring">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-32 px-6">
          <div className="container-custom">
            <div className="text-center mb-20">
              <h2 className="chrome-text text-h2 font-bold mb-6 tracking-tight">Featured Projects</h2>
              <p className="text-body-lg text-white/60 font-light max-w-2xl mx-auto">
                Transformative digital experiences that drive results and elevate brands to new heights.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Project 1 */}
              <div className="glass-card p-8 group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-white/40 text-sm font-light">Project Preview</span>
                </div>
                <div className="mb-4">
                  <span className="text-xs font-light tracking-widest uppercase text-white/50">Luxury E-commerce</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white/90">Premium Fashion Platform</h3>
                <p className="text-white/70 font-light leading-relaxed mb-6">
                  Complete digital transformation for a luxury fashion house, featuring custom e-commerce platform, brand
                  identity, and social media strategy.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-white/70">Web Design</span>
                  <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-white/70">Development</span>
                  <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-white/70">Branding</span>
                </div>
              </div>

              {/* Project 2 */}
              <div className="glass-card p-8 group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-white/40 text-sm font-light">Project Preview</span>
                </div>
                <div className="mb-4">
                  <span className="text-xs font-light tracking-widest uppercase text-white/50">Tech Startup</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white/90">AI Platform Launch</h3>
                <p className="text-white/70 font-light leading-relaxed mb-6">
                  End-to-end product launch including platform development, brand strategy, and comprehensive marketing
                  campaign.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-white/70">Platform Engineering</span>
                  <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-white/70">Strategy</span>
                  <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-white/70">Social Media</span>
                </div>
              </div>
            </div>

            {/* Case Study Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold chrome-text mb-2">150%</div>
                <div className="text-white/70 font-light">Average conversion increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold chrome-text mb-2">$2.5M</div>
                <div className="text-white/70 font-light">Revenue generated for clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold chrome-text mb-2">25+</div>
                <div className="text-white/70 font-light">Flagship projects delivered</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 border-t border-white/10">
          <div className="container-custom text-center">
            <h2 className="chrome-text text-h2 font-bold mb-6 tracking-tight">Ready to Create Something Exceptional?</h2>
            <p className="text-body-lg text-white/60 font-light mb-8 max-w-2xl mx-auto">
              Let's discuss how we can elevate your brand with a flagship digital experience.
            </p>
            <Button asChild className="primary-button px-8 py-4 text-base focus-ring">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
