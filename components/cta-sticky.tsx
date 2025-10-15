"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface CTAStickyProps {
  className?: string
}

export function CTASticky({ className }: CTAStickyProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 120)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className={cn(
      "fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-xl",
      "transform transition-all duration-300 ease-out",
      isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0",
      className
    )} data-testid="cta-sticky" role="region" aria-label="Sticky Call to Action">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="hidden md:block">
            <span className="text-sm text-white/80 font-light">
              Ready to elevate your brand?
            </span>
          </div>

          <Link
            href="/contact"
            className={cn(
              "primary-button px-6 py-2 text-sm font-medium",
              "focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
              "md:px-8 md:py-3 md:text-base"
            )}
            aria-label="Bring Your Vision to Life - Start Your Project"
            data-testid="cta-sticky-link"
          >
            <span className="md:hidden">Start Project</span>
            <span className="hidden md:inline">Bring Your Vision to Life</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
