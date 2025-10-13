import { PrimaryButton } from "@/components/primary-button"

export function CTA() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="chrome-text text-[clamp(2.5rem,6vw,4rem)] font-bold mb-6 tracking-tight">
          Ready to Elevate Your Brand?
        </h2>
        <p className="text-white/60 text-[clamp(1rem,2vw,1.25rem)] font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          Let's create something extraordinary together. Contact us to discuss your premium design needs.
        </p>
        <PrimaryButton size="lg">Start Project</PrimaryButton>
      </div>
    </section>
  )
}
