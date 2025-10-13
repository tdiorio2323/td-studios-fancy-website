"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="chrome-text text-7xl font-bold mb-4">Error</h1>
          <h2 className="text-3xl md:text-4xl font-light mb-4">Something went wrong</h2>
          <p className="text-lg text-white/70 font-light mb-8 max-w-lg mx-auto">
            We encountered an unexpected error. Please try again or contact support if the problem persists.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => reset()}
            className="primary-button px-8 py-4 text-base"
          >
            Try Again
          </Button>
          <Button asChild className="primary-button px-8 py-4 text-base">
            <Link href="/">Return Home</Link>
          </Button>
        </div>

        <div className="mt-12 pt-12 border-t border-white/10">
          <p className="text-sm text-white/50 font-light">
            Need help?{" "}
            <Link href="/contact" className="text-white hover:text-white/80 transition-colors underline">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
