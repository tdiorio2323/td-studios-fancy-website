import { GlassCard } from "@/components/glass-card"
import { PrimaryButton } from "@/components/primary-button"

const services = [
  {
    title: "Web Experience",
    description: "Marketing sites and product stories engineered for clarity and conversion.",
    href: "/services/web",
  },
  {
    title: "Product Platform",
    description: "Application architecture and feature delivery designed for scale.",
    href: "/services/product",
  },
  {
    title: "Brand Systems",
    description: "Visual identity and design systems crafted for enterprise standards.",
    href: "/services/brand",
  },
  {
    title: "Social Programs",
    description: "Editorial programming and community operations that sustain growth.",
    href: "/services/social",
  },
  {
    title: "Digital Assets",
    description: "Ready-to-use content packs and templates to accelerate launches.",
    href: "/services/assets",
  },
  {
    title: "Partnerships",
    description: "Referral alliances and white-label collaborations for agencies.",
    href: "/services/partnerships",
  },
]

export function ServiceTiles() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="chrome-text text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6 tracking-tight">Services</h2>
          <p className="text-white/60 text-[clamp(1rem,2vw,1.25rem)] font-light max-w-2xl mx-auto">
            Premium design solutions tailored for high-growth brands
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <GlassCard key={service.title} className="p-8 group" delay={index * 40}>
              <h3 className="text-xl font-semibold mb-4 text-white/90 tracking-tight">{service.title}</h3>
              <p className="text-white/60 mb-8 leading-relaxed font-light">{service.description}</p>
              <PrimaryButton href={service.href} size="sm">
                Learn More
              </PrimaryButton>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
