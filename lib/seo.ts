import type { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  path?: string
  image?: string
  noIndex?: boolean
}

export function generateMetadata({
  title,
  description,
  path = '',
  image = '/og-default.jpg',
  noIndex = false,
}: SEOProps): Metadata {
  const fullTitle = path ? `${title} | TD STUDIOS` : title
  const url = `https://tdstudiosny.com${path}`

  return {
    title: fullTitle,
    description,
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: 'TD STUDIOS',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: '@tdstudiosny',
      site: '@tdstudiosny',
    },
    alternates: {
      canonical: url,
    },
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TD STUDIOS',
    alternateName: 'TD Studios',
    url: 'https://tdstudiosny.com',
    logo: 'https://tdstudiosny.com/td-studios-white-logo.png',
    description: 'Luxury websites and growth systems. NYC-based. Strategy-led. Full-stack execution.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Manhattan',
      addressRegion: 'NY',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'Tyler@tdstudiosny.com',
      telephone: '+1-347-485-9935',
      contactType: 'Customer Service',
      availableLanguage: 'English',
    },
    sameAs: [
      'https://instagram.com/tdstudiosny',
      'https://twitter.com/tdstudiosny',
    ],
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '40.7128',
        longitude: '-74.0060',
      },
      geoRadius: 'Global',
    },
    knowsAbout: [
      'Web Design',
      'Web Development',
      'Social Media Marketing',
      'Graphic Design',
      'Brand Identity',
      'UX Design',
      'Full-Stack Development',
      'Digital Strategy',
    ],
  }
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://tdstudiosny.com/#business',
    name: 'TD STUDIOS',
    description: 'Luxury websites and growth systems. NYC-based. Strategy-led. Full-stack execution.',
    url: 'https://tdstudiosny.com',
    telephone: '+1-347-485-9935',
    email: 'Tyler@tdstudiosny.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Manhattan',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10001',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.7128',
      longitude: '-74.0060',
    },
    openingHours: 'Mo-Fr 09:00-18:00',
    priceRange: '$$$',
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '40.7128',
        longitude: '-74.0060',
      },
      geoRadius: 'Global',
    },
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://tdstudiosny.com${item.url}`,
    })),
  }
}
