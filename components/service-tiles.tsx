import { GlassCard } from "@/components/glass-card"
import { SectionCTA } from "@/components/section-cta"

const services = [
  {
    title: "Website Design & Build",
    description: "Luxury websites that convert visitors into customers.",
    outcomes: [
      "Increase conversion rates by 150%+",
      "Reduce bounce rate with premium UX",
      "Mobile-first responsive design"
    ],
    href: "/services/website-design",
  },
  {
    title: "Brand & Visual Systems",
    description: "Complete brand identity that communicates excellence.",
    outcomes: [
      "Memorable brand recognition",
      "Consistent visual language",
      "Premium brand guidelines"
    ],
    href: "/services/design",
  },
  {
    title: "Social Media Systems",
    description: "Strategic content that builds engaged communities.",
    outcomes: [
      "Grow followers by 300%+",
      "Increase engagement rates",
      "Build brand authority"
    ],
    href: "/services/social-media",
  },
  {
    title: "Full-Stack Engineering",
    description: "Custom platforms and applications that scale.",
    outcomes: [
      "Lightning-fast performance",
      "Scalable architecture",
      "Enterprise-grade security"
    ],
    href: "/services/development",
  },
]

export function ServiceTiles() {
  return (
    <section className="py-32 px-6">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="chrome-text text-h2 font-bold mb-6 tracking-tight">Services</h2>
          <p className="text-body-lg text-platinum/60 font-light max-w-2xl mx-auto">
            Premium design solutions tailored for high-growth brands
          </p>
        </div>

        <div className="soft-container grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {services.map((service, index) => (
            <GlassCard key={service.title} className="p-6 md:p-7 group shadow-elev-1 hover:shadow-elev-2 transition-all duration-200 will-change-transform hover:-translate-y-0.5" delay={index * 40}>
              <h3 className="text-xl font-semibold mb-4 text-platinum/90 tracking-tight">{service.title}</h3>
              <p className="text-platinum/60 mb-6 leading-relaxed font-light">{service.description}</p>

              <ul className="space-y-3 mb-8">
                {service.outcomes.map((outcome, idx) => (
                  <li key={idx} className="text-sm text-platinum/70 font-light flex items-start gap-3">
                    <div className="divider w-4 mt-2 flex-shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>

              <SectionCTA href={service.href} utmSource={`services-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                Learn More
              </SectionCTA>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
