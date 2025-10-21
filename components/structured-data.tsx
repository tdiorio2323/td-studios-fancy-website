import Script from "next/script"

interface StructuredDataProps {
  type: "organization" | "service" | "breadcrumb"
  data?: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "TD STUDIOS",
          description: "Luxury digital experiences crafted with precision and strategy",
          url: "https://tdstudios.com",
          logo: "https://tdstudios.com/logo.png",
          address: {
            "@type": "PostalAddress",
            addressLocality: "New York",
            addressRegion: "NY",
            addressCountry: "US",
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Service",
            email: "hello@tdstudios.com",
          },
          sameAs: [
            "https://twitter.com/tdstudios",
            "https://linkedin.com/company/tdstudios",
            "https://instagram.com/tdstudios",
          ],
        }
      case "service":
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: data?.serviceType || "Digital Services",
          provider: {
            "@type": "Organization",
            name: "TD STUDIOS",
          },
          areaServed: "Worldwide",
          ...data,
        }
      case "breadcrumb":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: data?.items || [],
        }
      default:
        return null
    }
  }

  const structuredData = getStructuredData()

  if (!structuredData) return null

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
