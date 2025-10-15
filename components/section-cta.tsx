import Link from "next/link"
import { cn } from "@/lib/utils"

interface SectionCTAProps {
  href?: string
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  utmSource?: string
}

export function SectionCTA({
  href = "/contact",
  children,
  className,
  variant = "primary",
  size = "md",
  utmSource
}: SectionCTAProps) {
  const finalHref = utmSource ? `${href}?src=${utmSource}` : href

  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"

  const variantClasses = {
    primary: "primary-button",
    secondary: "border border-white/20 bg-white/5 hover:bg-white/10 rounded-lg"
  }

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }

  return (
    <Link
      href={finalHref}
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      aria-label={`${children} - Start Your Project`}
    >
      {children}
    </Link>
  )
}
