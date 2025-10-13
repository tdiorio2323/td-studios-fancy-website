"use client"

import { type ReactNode, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(({ children, className, delay = 0 }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("glass-card", className)}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
})

GlassCard.displayName = "GlassCard"

export default GlassCard
