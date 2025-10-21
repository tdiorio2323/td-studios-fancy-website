"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

const ChevronDown = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
)

const InstagramIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const EmailIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const WhatsAppIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
)

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Website Design", href: "/services/website-design" },
      { name: "Development", href: "/services/development" },
      { name: "Social Media Marketing", href: "/services/social-media" },
      { name: "Design", href: "/services/design" },
    ],
  },
  { name: "Work", href: "/work" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleMouseEnter = (itemName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveDropdown(itemName)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150) // 150ms delay before closing
  }

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  const handleKeyDown = (e: React.KeyboardEvent, itemName: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      toggleDropdown(itemName)
    } else if (e.key === "Escape") {
      setActiveDropdown(null)
    }
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-white/5 rounded-none backdrop-blur-xl"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="TD Studios home">
            <span className="chrome-text font-bold text-xl tracking-wider">TD STUDIOS</span>
          </Link>

          <div className="hidden md:flex items-center space-x-12" role="menubar">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
                onMouseLeave={() => item.dropdown && handleMouseLeave()}
                role={item.dropdown ? "none" : undefined}
              >
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      onKeyDown={(e) => handleKeyDown(e, item.name)}
                      aria-expanded={activeDropdown === item.name}
                      aria-haspopup="true"
                      aria-label={`${item.name} menu`}
                      className={cn(
                        "text-sm font-light tracking-wide transition-all duration-200 hover:text-white relative flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1",
                        pathname.startsWith(item.href)
                          ? "text-white after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-px after:bg-gradient-to-r after:from-white/60 after:to-transparent"
                          : "text-white hover:text-white",
                      )}
                    >
                      {item.name}
                      <ChevronDown
                        className={cn(
                          "w-3 h-3 transition-transform duration-200",
                          activeDropdown === item.name ? "rotate-180" : "",
                        )}
                        aria-hidden="true"
                      />
                    </button>

                    {activeDropdown === item.name && (
                      <div
                        className="absolute top-full left-0 mt-2 pt-2 pb-2 -ml-4 pl-4 pr-4"
                        role="menu"
                        aria-label={`${item.name} submenu`}
                      >
                        <div className="w-56 glass-card border border-white/10 rounded-lg shadow-xl bg-black/95 backdrop-blur-2xl">
                          <div className="py-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                onClick={() => setActiveDropdown(null)}
                                role="menuitem"
                                className={cn(
                                  "block px-4 py-3 text-sm font-light tracking-wide transition-colors hover:text-white hover:bg-white/5 focus:outline-none focus:bg-white/10 focus:text-white rounded-md mx-2",
                                  pathname === dropdownItem.href ? "text-white bg-white/5" : "text-white",
                                )}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    role="menuitem"
                    className={cn(
                      "text-sm font-light tracking-wide transition-all duration-200 hover:text-white relative focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1",
                      pathname === item.href
                        ? "text-white after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-px after:bg-gradient-to-r after:from-white/60 after:to-transparent"
                        : "text-white hover:text-white",
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://instagram.com/tdstudiosco"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="text-white/70 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded p-2"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:Tyler@tdstudiosny.com"
              aria-label="Email us at Tyler@tdstudiosny.com"
              className="text-white/70 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded p-2"
            >
              <EmailIcon className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/13474859935"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp at 347-485-9935"
              className="text-white/70 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded p-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col items-center justify-center w-6 h-6 space-y-1.5 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded p-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={cn(
                "w-6 h-px bg-white/90 transition-all duration-200",
                isMenuOpen ? "rotate-45 translate-y-2.5" : "",
              )}
              aria-hidden="true"
            />
            <span
              className={cn("w-6 h-px bg-white/90 transition-all duration-200", isMenuOpen ? "opacity-0" : "")}
              aria-hidden="true"
            />
            <span
              className={cn(
                "w-6 h-px bg-white/90 transition-all duration-200",
                isMenuOpen ? "-rotate-45 -translate-y-2.5" : "",
              )}
              aria-hidden="true"
            />
          </button>
        </div>

        <div
          id="mobile-menu"
          className={cn(
            "md:hidden transition-all duration-200 absolute left-0 right-0 top-full",
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
          aria-hidden={!isMenuOpen}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-xl" />
          <nav
            className="relative glass-card border-t border-white/10 mx-6 mt-2 rounded-lg bg-black/60 backdrop-blur-xl"
            aria-label="Mobile navigation"
          >
            <div className="p-6 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        onKeyDown={(e) => handleKeyDown(e, item.name)}
                        aria-expanded={activeDropdown === item.name}
                        aria-haspopup="true"
                        className={cn(
                          "flex items-center justify-between w-full text-lg font-light tracking-wide transition-colors hover:text-white py-2 focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-2",
                          pathname.startsWith(item.href) ? "text-white border-l border-white/50 pl-4" : "text-white/80",
                        )}
                      >
                        {item.name}
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            activeDropdown === item.name ? "rotate-180" : "",
                          )}
                          aria-hidden="true"
                        />
                      </button>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-200",
                          activeDropdown === item.name ? "max-h-48 opacity-100" : "max-h-0 opacity-0",
                        )}
                        role="menu"
                        aria-label={`${item.name} submenu`}
                      >
                        <div className="ml-4 mt-2 space-y-2 pb-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={() => {
                                setIsMenuOpen(false)
                                setActiveDropdown(null)
                              }}
                              role="menuitem"
                              className={cn(
                                "block text-base font-light tracking-wide transition-colors hover:text-white py-2 pl-4 focus:outline-none focus:ring-2 focus:ring-white/50 rounded",
                                pathname === dropdownItem.href
                                  ? "text-white border-l border-white/50"
                                  : "text-white/70",
                              )}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      role="menuitem"
                      className={cn(
                        "block text-lg font-light tracking-wide transition-colors hover:text-white py-2 focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-2",
                        pathname === item.href ? "text-white border-l border-white/50 pl-4" : "text-white/80",
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="flex items-center justify-center gap-6 pt-4 border-t border-white/10 mt-4">
                <a
                  href="https://instagram.com/tdstudiosco"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="text-white/70 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 rounded p-2"
                >
                  <InstagramIcon className="w-6 h-6" />
                </a>
                <a
                  href="mailto:Tyler@tdstudiosny.com"
                  aria-label="Email us at Tyler@tdstudiosny.com"
                  className="text-white/70 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 rounded p-2"
                >
                  <EmailIcon className="w-6 h-6" />
                </a>
                <a
                  href="https://wa.me/13474859935"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact us on WhatsApp at 347-485-9935"
                  className="text-white/70 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 rounded p-2"
                >
                  <WhatsAppIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  )
}
