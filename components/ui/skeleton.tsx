import type React from "react"
import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-white/5 animate-pulse rounded-md backdrop-blur-sm border border-white/10", className)}
      {...props}
    />
  )
}

function ProjectCardSkeleton() {
  return (
    <div className="glass-card p-8">
      <Skeleton className="aspect-video rounded-lg mb-6" />
      <Skeleton className="h-4 w-32 mb-4" />
      <Skeleton className="h-8 w-3/4 mb-4" />
      <Skeleton className="h-20 w-full mb-6" />
      <div className="flex flex-wrap gap-2">
        <Skeleton className="h-6 w-24 rounded-full" />
        <Skeleton className="h-6 w-28 rounded-full" />
        <Skeleton className="h-6 w-20 rounded-full" />
      </div>
    </div>
  )
}

function PortfolioCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
      <Skeleton className="aspect-video" />
      <div className="p-6">
        <Skeleton className="h-16 w-full mb-4" />
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>
      </div>
    </div>
  )
}

function StatSkeleton() {
  return (
    <div className="text-center">
      <Skeleton className="h-12 w-32 mx-auto mb-2" />
      <Skeleton className="h-4 w-48 mx-auto" />
    </div>
  )
}

export { Skeleton, ProjectCardSkeleton, PortfolioCardSkeleton, StatSkeleton }
