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
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-0 border-b border-white/10 rounded-none backdrop-saturate-150 shadow-elev-1" role="navigation" aria-label="Main navigation">
      <div className="container-custom py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center focus-ring rounded-md">
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
                        "text-sm font-light tracking-wide transition-all duration-200 hover:text-platinum relative flex items-center gap-1 focus-ring rounded-md px-2 py-1 underline-offset-8 decoration-white/20 hover:decoration-white/40",
                        pathname.startsWith(item.href)
                          ? "text-platinum underline"
                          : "text-platinum/80 hover:text-platinum hover:underline",
                      )}
                      aria-expanded={activeDropdown === item.name}
                      aria-haspopup="true"
                      aria-label={`${item.name} menu`}
                      data-testid={`nav-${item.name.toLowerCase()}`}
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
                      <div className="absolute top-full left-0 mt-2 pt-2 pb-2 -ml-4 pl-4 pr-4">
                        <div className="w-56 glass border border-white/10 rounded-lg shadow-xl bg-black/95 backdrop-blur-2xl" role="menu" aria-label={`${item.name} submenu`}>
                          <div className="py-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                onClick={() => setActiveDropdown(null)}
                                className={cn(
                                  "block px-4 py-3 text-sm font-light tracking-wide transition-colors hover:text-white hover:bg-white/5 focus-ring rounded-md",
                                  pathname === dropdownItem.href ? "text-white bg-white/5" : "text-white",
                                )}
                                role="menuitem"
                                aria-current={pathname === dropdownItem.href ? "page" : undefined}
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
                      "text-sm font-light tracking-wide transition-all duration-200 hover:text-platinum relative focus-ring rounded-md px-2 py-1 underline-offset-8 decoration-white/20 hover:decoration-white/40",
                      pathname === item.href
                        ? "text-platinum underline"
                        : "text-platinum/80 hover:text-platinum hover:underline",
                    )}
                    aria-current={pathname === item.href ? "page" : undefined}
                    data-testid={`nav-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col items-center justify-center w-6 h-6 space-y-1.5 focus-ring rounded-md p-2"
            aria-label="Toggle menu"
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
            <span className={cn("w-6 h-px bg-white/90 transition-all duration-200", isMenuOpen ? "opacity-0" : "")} aria-hidden="true" />
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
          role="menu"
          aria-label="Mobile navigation menu"
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-xl" />
          <div className="relative glass border-t border-white/10 mx-6 mt-2 rounded-lg bg-black/60 backdrop-blur-xl">
            <div className="p-6 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={cn(
                          "flex items-center justify-between w-full text-lg font-light tracking-wide transition-colors hover:text-white py-2 focus-ring rounded-md px-2",
                          pathname.startsWith(item.href) ? "text-white border-l border-white/50 pl-4" : "text-white/80",
                        )}
                        aria-expanded={activeDropdown === item.name}
                        aria-haspopup="true"
                        aria-label={`${item.name} submenu`}
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
                              className={cn(
                                "block text-base font-light tracking-wide transition-colors hover:text-white py-2 pl-4 focus-ring rounded-md",
                                pathname === dropdownItem.href
                                  ? "text-white border-l border-white/50"
                                  : "text-white/70",
                              )}
                              role="menuitem"
                              aria-current={pathname === dropdownItem.href ? "page" : undefined}
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
                        "block text-lg font-light tracking-wide transition-colors hover:text-white py-2 focus-ring rounded-md px-2",
                        pathname === item.href ? "text-white border-l border-white/50 pl-4" : "text-white/80",
                      )}
                      role="menuitem"
                      aria-current={pathname === item.href ? "page" : undefined}
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
