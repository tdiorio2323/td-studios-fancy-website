import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { clients } from '@/lib/clients-data'
import { ClientLogo } from '@/components/client-logo'
import { CaseStudyDetailContent } from '@/components/case-study-detail-content'
import { GlassCard } from '@/components/glass-card'
import { FrostedButton } from '@/components/frosted-button'
import { JsonLd } from '@/components/json-ld'

// Generate static params for all clients
export async function generateStaticParams() {
  return clients.map((client) => ({
    slug: client.slug,
  }))
}

// Generate metadata for each client page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const client = clients.find((c) => c.slug === params.slug)

  if (!client) {
    return {
      title: 'Client Not Found',
    }
  }

  return {
    title: `${client.name} Case Study | TD Studios`,
    description: client.description,
    openGraph: {
      title: `${client.name} Case Study | TD Studios`,
      description: client.description,
      images: client.heroImage ? [client.heroImage] : client.gallery.slice(0, 1),
    },
  }
}

export default function ClientPage({ params }: { params: { slug: string } }) {
  const client = clients.find((c) => c.slug === params.slug)

  if (!client) {
    notFound()
  }

  // Generate structured data for the case study
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${client.name} - ${client.industry}`,
    "description": client.description,
    "author": {
      "@type": "Organization",
      "name": "TD Studios"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TD Studios",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tdstudiosny.com/logo.png"
      }
    },
    "datePublished": `${client.year}-01-01`,
    "image": client.gallery[0],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://tdstudiosny.com/work/${client.slug}`
    }
  }

  return (
    <>
      <JsonLd data={caseStudySchema} />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={client.heroImage || client.gallery[0]}
              alt={`${client.name} hero image`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
            <Link
              href="/work"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors focus-ring rounded-md px-3 py-2"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>

            <div className="flex justify-center mb-6">
              <ClientLogo
                src={client.logo}
                alt={`${client.name} logo`}
                fallbackText={client.name}
                sizes="(max-width: 640px) 96px, 128px"
                containerClassName={`relative w-24 h-24 md:w-32 md:h-32 overflow-hidden ${client.logoBgColor || 'bg-neutral-900/80'} border border-white/20 rounded-2xl`}
                imageClassName={`object-contain p-4 ${client.logoInvert ? "invert" : ""}`}
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">{client.name}</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              {client.tagline || `${client.industry} • ${client.year}`}
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {client.services.map((service) => (
                <span
                  key={service}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Client Details */}
        <section className="relative py-16 px-6">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 max-w-6xl mx-auto">
            <CaseStudyDetailContent client={client} isModal={false} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 px-6">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <GlassCard className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready for Similar Results?
              </h2>
              <p className="text-white text-lg mb-8">
                Let's discuss how we can help transform your business like we did for {client.name}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FrostedButton href="/contact">Start Your Project</FrostedButton>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] bg-transparent backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 hover:bg-white/5 hover:border-white/30 hover:shadow-lg"
                >
                  View More Work
                </Link>
              </div>
            </GlassCard>
          </div>
        </section>
      </div>
    </>
  )
}
