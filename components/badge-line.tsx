import { cn } from "@/lib/utils"

interface BadgeLineProps {
  className?: string
}

export function BadgeLine({ className }: BadgeLineProps) {
  return (
    <div className={cn(
      "hidden lg:flex items-center justify-center gap-6 text-sm text-white/60 font-light tracking-wide",
      className
    )}>
      <span className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
        NYC
      </span>
      <span className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
        Strategy-led
      </span>
      <span className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
        Fast turnaround
      </span>
    </div>
  )
}
