import { generateMetadata, generateBreadcrumbSchema } from "@/lib/seo"

export const metadata = generateMetadata({
  title: "Start Your Project",
  description: "Ready to elevate your brand? Contact TD STUDIOS for premium website design, development, and social media services. NYC-based.",
  path: "/contact",
})

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}
