export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TD STUDIOS",
    "alternateName": "TD Studios",
    "url": "https://tdstudios.com",
    "logo": "https://tdstudios.com/td-studios-white-logo.png",
    "description": "Premium design solutions for high-growth brands. Strategy, design, development, and social programs headquartered in New York City.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Manhattan",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "Tyler@tdstudiosny.com",
      "telephone": "+1-347-485-9935",
      "contactType": "Customer Service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://twitter.com/tdstudios"
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "40.7128",
        "longitude": "-74.0060"
      },
      "geoRadius": "Global"
    },
    "knowsAbout": [
      "Web Design",
      "Web Development",
      "Social Media Marketing",
      "Graphic Design",
      "Brand Identity",
      "UX Design",
      "Full-Stack Development",
      "Digital Strategy"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Website Design",
          "description": "Luxury web experiences engineered for clarity and conversion"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Development",
          "description": "Full-stack engineering and platform development for premium digital products"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Social Media Marketing",
          "description": "Strategic content systems and campaign management for brand growth"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Graphic Design",
          "description": "Visual identity systems and brand assets that communicate excellence"
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
