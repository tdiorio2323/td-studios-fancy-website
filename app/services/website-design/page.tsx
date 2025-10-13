import { GlassCard } from "@/components/glass-card"
import { PrimaryButton } from "@/components/primary-button"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Website Design — Luxury Digital Experiences | TD STUDIOS",
  description:
    "Premium website design combining aesthetic excellence with strategic functionality. Responsive, performance-optimized, and SEO-ready luxury web experiences.",
  openGraph: {
    title: "Website Design — TD STUDIOS",
    description: "Digital experiences that captivate. Luxury web design for memorable brand experiences.",
  },
}

export default function WebsiteDesignPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/modern-luxury-website-design-workspace-with-clean-.jpg"
            alt="Modern luxury website design workspace"
            fill
            className="object-cover"
            priority
            quality={85}
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs font-light tracking-wider text-white/80 mb-8">
            WEBSITE DESIGN
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 text-balance">
            Digital Experiences That <span className="chrome-text">Captivate</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/70 mb-12 max-w-3xl mx-auto text-pretty">
            Luxury web design that combines aesthetic excellence with strategic functionality to create memorable
            digital experiences.
          </p>
          <PrimaryButton>Start Your Project</PrimaryButton>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Premium <span className="chrome-text">Design Services</span>
            </h2>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
              Crafting digital experiences that reflect your brand's sophistication and drive meaningful engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard className="p-8">
              <h3 className="text-xl font-light mb-4">Luxury Brand Websites</h3>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Premium website designs that reflect your brand's sophistication and create lasting impressions with
                discerning audiences.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Custom visual identity integration</li>
                <li>• Premium typography and layouts</li>
                <li>• High-end photography direction</li>
                <li>• Sophisticated user interactions</li>
              </ul>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-xl font-light mb-4">E-commerce Excellence</h3>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Conversion-optimized online stores that provide seamless shopping experiences while maintaining luxury
                aesthetics.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Premium product showcasing</li>
                <li>• Streamlined checkout flows</li>
                <li>• Advanced filtering systems</li>
                <li>• Mobile-first design approach</li>
              </ul>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-xl font-light mb-4">Corporate Presence</h3>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Professional corporate websites that establish authority and communicate your company's values with
                clarity and elegance.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Executive leadership showcasing</li>
                <li>• Investor relations integration</li>
                <li>• Multi-language support</li>
                <li>• Accessibility compliance</li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              What Sets Us <span className="chrome-text">Apart</span>
            </h2>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
              Every website we create is a masterpiece of design and functionality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Responsive Design",
                desc: "Flawless experiences across all devices and screen sizes",
              },
              {
                title: "Performance Optimized",
                desc: "Lightning-fast loading times and smooth interactions",
              },
              {
                title: "SEO Foundation",
                desc: "Built-in search engine optimization for maximum visibility",
              },
              {
                title: "Content Management",
                desc: "Easy-to-use systems for effortless content updates",
              },
              {
                title: "Security First",
                desc: "Enterprise-grade security measures and SSL certificates",
              },
              {
                title: "Analytics Ready",
                desc: "Comprehensive tracking and performance monitoring setup",
              },
              {
                title: "Brand Consistency",
                desc: "Cohesive visual identity across all digital touchpoints",
              },
              {
                title: "Future-Proof",
                desc: "Scalable architecture that grows with your business",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white/10" />
                </div>
                <h3 className="text-lg font-light mb-3">{feature.title}</h3>
                <p className="text-white/60 font-light text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6">
        {" "}
        {/* reduced padding from py-24 to py-16 */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            {" "}
            {/* reduced margin from mb-16 to mb-12 */}
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Our Design <span className="chrome-text">Process</span>
            </h2>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
              Our methodology ensures precision delivery and exceptional outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {" "}
            {/* changed from grid-cols-4 to grid-cols-5 and reduced gap from gap-8 to gap-6 */}
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Strategic alignment and requirements gathering through stakeholder interviews and competitive analysis.",
              },
              {
                step: "02",
                title: "Strategy",
                desc: "Information architecture, user journeys, and technical specifications tailored to your objectives.",
              },
              {
                step: "03",
                title: "Design",
                desc: "Visual systems, component libraries, and high-fidelity prototypes optimized for conversion.",
              },
              {
                step: "04",
                title: "Development",
                desc: "Production-ready code with performance optimization, accessibility compliance, and CMS integration.",
              },
              {
                step: "05",
                title: "Launch",
                desc: "Deployment, monitoring, and post-launch optimization with comprehensive documentation and training.",
              },
            ].map((item) => (
              <GlassCard key={item.step} className="p-6 text-center">
                {" "}
                {/* wrapped each item in GlassCard component */}
                <div className="chrome-text text-3xl font-light mb-4">{item.step}</div>
                <h3 className="text-xl font-light mb-3">{item.title}</h3>
                <p className="text-white/60 font-light text-sm leading-relaxed">{item.desc}</p>{" "}
                {/* added leading-relaxed and expanded descriptions */}
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white/5">
        {" "}
        {/* reduced padding from py-24 to py-16 */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Recent <span className="chrome-text">Work</span>
            </h2>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
              A glimpse into our latest website design projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Luxury Fashion Brand", category: "E-commerce", image: "/luxury-fashion-website.png" },
              { title: "Tech Startup", category: "Corporate", image: "/modern-tech-startup-website.jpg" },
              { title: "Fine Dining Restaurant", category: "Hospitality", image: "/elegant-restaurant-website.png" },
            ].map((project, index) => (
              <GlassCard key={index} className="overflow-hidden group cursor-pointer">
                <div className="aspect-video bg-white/5 overflow-hidden relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs text-white/50 font-light tracking-wider mb-2">{project.category}</div>
                  <h3 className="text-lg font-light">{project.title}</h3>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Ready to Elevate Your <span className="chrome-text">Digital Presence</span>?
          </h2>
          <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto">
            Let's create a website that reflects your brand's excellence and drives meaningful results.
          </p>
          <PrimaryButton>Start Your Project</PrimaryButton>
        </div>
      </section>
    </main>
  )
}
