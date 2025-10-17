"use client"

import Image from "next/image"
import Link from "next/link"
import { ClientLogo } from "@/components/client-logo"
import { GlassCard } from "@/components/glass-card"
import { FrostedButton } from "@/components/frosted-button"
import { ArrowRight } from "lucide-react"
import { clients } from "@/lib/clients-data"

export default function PortfolioClientPage() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://i.imgur.com/a1bXC5y.png"
            alt="Portfolio Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 md:bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white">Client Success Stories</h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Discover how we've transformed brands and businesses through strategic design and development.
          </p>
        </div>
      </section>

      {/* Client Logo Grid */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Clients</h2>
            <p className="text-white text-lg">Click any logo to explore the project details and results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client) => (
              <Link key={client.id} href={`/work/${client.slug}`}>
                <GlassCard className="group cursor-pointer hover:bg-neutral-900/80 transition-all duration-300 p-8 text-center h-full">
                  <ClientLogo
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fallbackText={client.name}
                    sizes="96px"
                    containerClassName={`relative w-24 h-24 mx-auto mb-6 overflow-hidden ${client.logoBgColor || 'bg-neutral-900/80'} border border-white/20 rounded-full group-hover:bg-neutral-900/90 transition-colors`}
                    imageClassName={`${client.id === 'serious-inquiries-only' ? 'object-cover' : 'object-contain p-4'} ${client.logoInvert ? "invert" : ""}`}
                  />
                  <h3 className="text-xl font-semibold mb-2 text-white">{client.name}</h3>
                  <p className="text-white text-sm mb-4">{client.industry} • {client.year}</p>
                  {client.services.length > 0 && (
                    <div className="flex flex-wrap gap-2 justify-center">
                      {client.services.slice(0, 2).map((service) => (
                        <span
                          key={service}
                          className="px-3 py-1 bg-neutral-900/80 border border-white/20 rounded-full text-xs text-white"
                        >
                          {service}
                        </span>
                      ))}
                      {client.services.length > 2 && (
                        <span className="px-3 py-1 bg-neutral-900/80 border border-white/20 rounded-full text-xs text-white">
                          +{client.services.length - 2} more
                        </span>
                      )}
                    </div>
                  )}
                  <div className="mt-4 flex items-center justify-center text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    View Case Study <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 px-6">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2 text-white">{clients.length}+</div>
              <div className="text-white text-sm">Clients Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-white">50+</div>
              <div className="text-white text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-white">300%</div>
              <div className="text-white text-sm">Avg. Conversion Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-white">100%</div>
              <div className="text-white text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <GlassCard className="p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Join Our Success Stories?</h2>
            <p className="text-white text-lg mb-8">
              Let's create something extraordinary together. Contact us to discuss your vision and bring it to life.
            </p>
            <FrostedButton href="/contact">Start Your Project</FrostedButton>
          </GlassCard>
        </div>
      </section>
    </div>
  )
}
