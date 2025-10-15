"use client"

import { useState } from "react"
import { GlassCard } from "@/components/glass-card"

const testimonials = [
  {
    quote:
      "TD Studios delivered a flagship experience that elevated our entire brand perception. The attention to detail and performance optimization exceeded our expectations.",
    author: "Sarah Chen",
    company: "Meridian Capital",
    role: "Chief Marketing Officer",
  },
  {
    quote:
      "Working with TD Studios felt like having an extension of our internal team. Their strategic approach and execution quality are unmatched in the industry.",
    author: "Marcus Rodriguez",
    company: "Apex Ventures",
    role: "Creative Director",
  },
  {
    quote:
      "The monochrome aesthetic and liquid glass elements perfectly captured our luxury positioning. Our conversion rates increased 340% post-launch.",
    author: "Elena Vasquez",
    company: "Sterling & Associates",
    role: "Brand Director",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="chrome-text text-h2 font-bold mb-6 tracking-tight">Testimonials</h2>
          <p className="text-body-lg text-platinum/60 font-light">
            What our clients say about working with us
          </p>
        </div>

        <GlassCard className="p-8 md:p-10 text-center shadow-elev-2">
          <blockquote className="quote-mark text-body-lg text-platinum/90 mb-8 leading-relaxed font-light italic">
            {testimonials[activeIndex].quote}
          </blockquote>

          <div className="text-platinum/70">
            <div className="font-semibold text-platinum/90 mb-1">{testimonials[activeIndex].author}</div>
            <div className="text-sm">
              {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
            </div>
          </div>
        </GlassCard>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === activeIndex ? "bg-white/90" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
