import { SectionCTA } from "@/components/section-cta"

export function CTA() {
  return (
    <section className="py-32 px-6">
      <div className="container-custom text-center">
        <h2 className="chrome-text text-h2 font-bold mb-6 tracking-tight">
          Ready to Elevate Your Brand?
        </h2>
        <p className="text-body-lg text-white/60 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          Let's create something extraordinary together. Contact us to discuss your premium design needs.
        </p>
        <SectionCTA size="lg">Design Your Success</SectionCTA>
      </div>
    </section>
  )
}
