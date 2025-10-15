"use client"

import { PrimaryButton } from "@/components/primary-button"
import Image from "next/image"
import Link from "next/link"

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
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="relative z-10 text-center container-custom">
        <div className="chrome-text text-h1 font-bold mb-6 tracking-tighter leading-none">
          TD STUDIOS
        </div>

        <h1 className="text-h2 text-white/90 mb-4 tracking-tight font-light" data-testid="hero-title">
          Luxury websites and growth systems for brands with taste.
        </h1>

        <p className="text-body-lg text-white/70 mb-12 tracking-wide font-light max-w-3xl mx-auto" data-testid="hero-subtitle">
          NYC-based. Strategy-led. Full-stack execution.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <PrimaryButton
            size="lg"
            className="text-lg font-medium focus-ring"
            href="/contact"
          >
            Bring Your Vision to Life
          </PrimaryButton>

          <Link
            href="/work"
            className="border border-white/20 bg-white/5 hover:bg-white/10 px-8 py-4 text-lg rounded-lg font-medium transition-all duration-200 focus-ring"
          >
            See Work
          </Link>
        </div>
      </div>
    </section>
  )
}
