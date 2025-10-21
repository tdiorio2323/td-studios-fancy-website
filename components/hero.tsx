import { PrimaryButton } from "@/components/primary-button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/nyc-hero.jpg"
          alt="NYC Times Square at night with architectural lighting and urban energy"
          fill
          className="object-cover opacity-85"
          priority
        />
        {/* Reduced overlay opacity to let more of the background show through */}
        <div className="absolute inset-0 bg-black/15" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="chrome-text text-[clamp(4rem,14vw,12rem)] font-bold mb-6 tracking-tighter leading-none">
          TD STUDIOS
        </div>

        <div className="text-[clamp(1.25rem,3vw,2rem)] text-white/90 mb-12 tracking-widest font-light">
          LUXURY • STRATEGY • CREATIVITY
        </div>

        <PrimaryButton size="lg" className="text-lg font-medium">
          Start Project
        </PrimaryButton>
      </div>
    </section>
  )
}
