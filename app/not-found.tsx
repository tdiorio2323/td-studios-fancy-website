import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="chrome-text text-9xl font-bold mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl font-light mb-4">Page Not Found</h2>
          <p className="text-xl text-white/70 font-light mb-8 max-w-lg mx-auto">
            The page you're looking for doesn't exist or has been moved to a new location.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="primary-button px-8 py-4 text-base">
            <Link href="/">Return Home</Link>
          </Button>
          <Button asChild className="primary-button px-8 py-4 text-base">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        <div className="mt-12 pt-12 border-t border-white/10">
          <p className="text-sm text-white/50 font-light mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/services/website-design" className="text-white/70 hover:text-white transition-colors">
              Website Design
            </Link>
            <Link href="/services/development" className="text-white/70 hover:text-white transition-colors">
              Development
            </Link>
            <Link href="/services/social-media" className="text-white/70 hover:text-white transition-colors">
              Social Media
            </Link>
            <Link href="/work" className="text-white/70 hover:text-white transition-colors">
              Our Work
            </Link>
            <Link href="/about" className="text-white/70 hover:text-white transition-colors">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
