"use client"

import Link from "next/link"
import { type ReactNode, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface PrimaryButtonProps {
  children: ReactNode
  href?: string
  className?: string
  size?: "sm" | "md" | "lg"
  onClick?: () => void
}

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
}

export const PrimaryButton = forwardRef<HTMLAnchorElement, PrimaryButtonProps>(
  ({ children, href = "/contact", className, size = "md", onClick }, ref) => {
    const baseClasses = "primary-button font-medium tracking-tight"
    const classes = cn(baseClasses, sizeClasses[size], className)

    if (onClick) {
      return (
        <button onClick={onClick} className={classes}>
          {children}
        </button>
      )
    }

    return (
      <Link ref={ref} href={href} className={classes}>
        {children}
      </Link>
    )
  },
)

PrimaryButton.displayName = "PrimaryButton"

export default PrimaryButton
