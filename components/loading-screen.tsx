"use client"

import { useState, useEffect } from "react"

interface LoadingScreenProps {
  onLoadingComplete?: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => onLoadingComplete?.(), 500)
          return 100
        }
        return prev + 3.33 // Updated increment to complete progress bar in 1.5 seconds (1500ms / 50ms = 30 ticks, 100 / 30 = 3.33)
      })
    }, 50)

    return () => clearInterval(timer)
  }, [onLoadingComplete])

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="mb-12">
          <div className="chrome-text text-[clamp(3rem,8vw,6rem)] font-bold tracking-tighter">TD STUDIOS</div>
        </div>

        <div className="w-80 h-px bg-white/10 rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-gradient-to-r from-white/60 to-white/90 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-white/40 text-xs mt-6 font-light tracking-[0.2em] uppercase">Loading Experience</p>
      </div>
    </div>
  )
}

export default LoadingScreen
