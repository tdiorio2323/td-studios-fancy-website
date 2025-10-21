import Image from "next/image"

interface SectionBackgroundProps {
  src: string
  alt?: string
}

export default function SectionBackground({ src, alt = "Background pattern" }: SectionBackgroundProps) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className="object-cover opacity-10"
        quality={75}
        priority={false}
      />
    </div>
  )
}
