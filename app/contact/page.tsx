"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GlassCard } from "@/components/glass-card"
import Image from "next/image"
import Head from "next/head"
import { useState } from "react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch("https://formspree.io/f/movkvrpz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setSubmitStatus("success")
        e.currentTarget.reset()
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <>
      <Head>
        <title>Contact Us — Start Your Project | TD STUDIOS</title>
        <meta name="description" content="Get in touch with TD STUDIOS for luxury web design, development, and social media services. Based in NYC, serving clients worldwide. Response within 24 hours." />
        <meta property="og:title" content="Contact TD STUDIOS — New York City" />
        <meta property="og:description" content="Ready to elevate your brand? Contact our team for premium design and development services." />
      </Head>
      <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/nyc-hero.jpg"
            alt="NYC luxury office space"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 mb-6 text-xs font-light tracking-widest uppercase border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
            Contact
          </div>
          <h1 className="chrome-text text-5xl md:text-7xl font-bold mb-6 tracking-tight">Get In Touch</h1>
          <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto mb-8">
            Ready to elevate your brand with premium design solutions? Let's discuss your project and bring your vision
            to life.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Email */}
              <GlassCard className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Email icon" role="img">
                      <title>Email</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light text-white">Email</h3>
                </div>
                <p className="text-white/80 mb-2 font-light">Tyler@tdstudiosny.com</p>
                <p className="text-white/60 text-sm">347-485-9935</p>
              </GlassCard>

              {/* Response Time */}
              <GlassCard className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Clock icon" role="img">
                      <title>Response Time</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light text-white">Response Time</h3>
                </div>
                <p className="text-white/80 mb-2 font-light">Within 24 hours</p>
                <p className="text-white/60 text-sm">Monday - Friday, 9AM - 6PM EST</p>
              </GlassCard>

              {/* Location */}
              <GlassCard className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Location icon" role="img">
                      <title>Location</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light text-white">Location</h3>
                </div>
                <p className="text-white/80 mb-2 font-light">New York City, NY</p>
                <p className="text-white/60 text-sm">Serving clients worldwide</p>
              </GlassCard>

              {/* Services Overview */}
              <div className="space-y-6">
                <h3 className="text-2xl font-light text-white">Our Services</h3>

                <GlassCard className="p-6">
                  <h4 className="text-lg font-light text-white mb-2">Website Design</h4>
                  <p className="text-white/70 text-sm font-light">
                    Luxury web experiences engineered for clarity and conversion.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h4 className="text-lg font-light text-white mb-2">Development</h4>
                  <p className="text-white/70 text-sm font-light">
                    Full-stack engineering and platform development for premium digital products.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h4 className="text-lg font-light text-white mb-2">Social Media Marketing</h4>
                  <p className="text-white/70 text-sm font-light">
                    Strategic content systems and campaign management for brand growth.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h4 className="text-lg font-light text-white mb-2">Graphic Design</h4>
                  <p className="text-white/70 text-sm font-light">
                    Visual identity systems and brand assets that communicate excellence.
                  </p>
                </GlassCard>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <GlassCard className="p-8">
                <h2 className="text-3xl font-light mb-8 text-white">Start Your Project</h2>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <p className="text-green-400 font-light">
                      Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-red-400 font-light">
                      Sorry, there was an error sending your message. Please try again or email us directly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-light text-white/80 mb-2">Full Name *</label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Your full name"
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 font-light"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-light text-white/80 mb-2">Email Address *</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 font-light"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-light text-white/80 mb-2">Company Name</label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your company name"
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 font-light"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-light text-white/80 mb-2">Phone Number</label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 font-light"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-light text-white/80 mb-2">Service Needed *</label>
                      <select
                        id="service"
                        name="service"
                        required
                        className="w-full bg-white/5 border border-white/20 text-white focus:border-white/40 font-light rounded-md px-3 py-2"
                      >
                        <option value="" disabled selected>Select a service</option>
                        <option value="website-design">Website Design</option>
                        <option value="development">Development</option>
                        <option value="social-media">Social Media Marketing</option>
                        <option value="design">Graphic Design</option>
                        <option value="multiple">Multiple Services</option>
                        <option value="consultation">Strategy Consultation</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-light text-white/80 mb-2">Project Budget</label>
                      <select
                        id="budget"
                        name="budget"
                        className="w-full bg-white/5 border border-white/20 text-white focus:border-white/40 font-light rounded-md px-3 py-2"
                      >
                        <option value="" disabled selected>Select budget range</option>
                        <option value="10k-25k">$10k - $25k</option>
                        <option value="25k-50k">$25k - $50k</option>
                        <option value="50k-100k">$50k - $100k</option>
                        <option value="100k+">$100k+</option>
                        <option value="discuss">Let's discuss</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-light text-white/80 mb-2">Project Timeline</label>
                    <select
                      id="timeline"
                      name="timeline"
                      className="w-full bg-white/5 border border-white/20 text-white focus:border-white/40 font-light rounded-md px-3 py-2"
                    >
                      <option value="" disabled selected>Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-2months">1-2 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6months+">6+ months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-light text-white/80 mb-2">Project Details *</label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      rows={6}
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 resize-none font-light"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full primary-button py-4 text-lg font-light disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-4 text-center chrome-text">Frequently Asked Questions</h2>
          <p className="text-white/70 text-center mb-12 font-light">
            Quick answers to common questions about our services
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard className="p-8">
              <h3 className="text-lg font-light mb-4 text-white">How long does a typical project take?</h3>
              <p className="text-white/70 text-sm font-light">
                Project timelines vary based on scope. Website designs typically take 2-4 weeks, while complete brand
                identities can take 4-6 weeks. We always provide detailed timelines during consultation.
              </p>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-lg font-light mb-4 text-white">Do you work with different industries?</h3>
              <p className="text-white/70 text-sm font-light">
                Absolutely. We collaborate with luxury brands, tech companies, and service businesses seeking premium,
                sophisticated solutions.
              </p>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-lg font-light mb-4 text-white">What deliverables do you provide?</h3>
              <p className="text-white/70 text-sm font-light">
                We provide all source files including design files, code repositories, brand guidelines, and asset
                libraries. You'll receive everything needed for implementation and future updates.
              </p>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-lg font-light mb-4 text-white">Do you offer ongoing support?</h3>
              <p className="text-white/70 text-sm font-light">
                Yes, we provide post-launch support and can establish ongoing partnerships for continuous optimization
                and growth initiatives.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h3 className="text-sm font-light text-white/60 mb-4 tracking-widest">TD STUDIOS</h3>
            <h4 className="chrome-text text-3xl md:text-4xl font-light mb-4">
              Let's build the next flagship experience.
            </h4>
            <p className="text-white/70 mb-8 font-light max-w-2xl mx-auto">
              Strategy, design, development, and social programs for ambitious brands
              <br />
              headquartered in New York City, serving teams worldwide.
            </p>
            <Button className="primary-button px-8 py-4 text-lg font-light">Start your project</Button>
          </div>
          <div className="text-center text-sm text-white/40 mt-12 font-light">
            © 2025 TD Studios. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}
