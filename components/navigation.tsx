"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-white/5 rounded-none backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="chrome-text font-bold text-xl tracking-wider">TD STUDIOS</span>
          </Link>

          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
                onMouseLeave={() => item.dropdown && handleMouseLeave()}
              >
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={cn(
                        "text-sm font-light tracking-wide transition-all duration-200 hover:text-white relative flex items-center gap-1",
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
                      />
                    </button>

                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 pt-2 pb-2 -ml-4 pl-4 pr-4">
                        <div className="w-56 glass-card border border-white/10 rounded-lg shadow-xl bg-black/95 backdrop-blur-2xl">
                          <div className="py-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                onClick={() => setActiveDropdown(null)}
                                className={cn(
                                  "block px-4 py-3 text-sm font-light tracking-wide transition-colors hover:text-white hover:bg-white/5",
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
                    className={cn(
                      "text-sm font-light tracking-wide transition-all duration-200 hover:text-white relative",
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

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col items-center justify-center w-6 h-6 space-y-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "w-6 h-px bg-white/90 transition-all duration-200",
                isMenuOpen ? "rotate-45 translate-y-2.5" : "",
              )}
            />
            <span className={cn("w-6 h-px bg-white/90 transition-all duration-200", isMenuOpen ? "opacity-0" : "")} />
            <span
              className={cn(
                "w-6 h-px bg-white/90 transition-all duration-200",
                isMenuOpen ? "-rotate-45 -translate-y-2.5" : "",
              )}
            />
          </button>
        </div>

        <div
          className={cn(
            "md:hidden transition-all duration-200 absolute left-0 right-0 top-full",
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-xl" />
          <div className="relative glass-card border-t border-white/10 mx-6 mt-2 rounded-lg bg-black/60 backdrop-blur-xl">
            <div className="p-6 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={cn(
                          "flex items-center justify-between w-full text-lg font-light tracking-wide transition-colors hover:text-white py-2",
                          pathname.startsWith(item.href) ? "text-white border-l border-white/50 pl-4" : "text-white/80",
                        )}
                      >
                        {item.name}
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            activeDropdown === item.name ? "rotate-180" : "",
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-200",
                          activeDropdown === item.name ? "max-h-48 opacity-100" : "max-h-0 opacity-0",
                        )}
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
                              className={cn(
                                "block text-base font-light tracking-wide transition-colors hover:text-white py-2 pl-4",
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
                      className={cn(
                        "block text-lg font-light tracking-wide transition-colors hover:text-white py-2",
                        pathname === item.href ? "text-white border-l border-white/50 pl-4" : "text-white/80",
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
