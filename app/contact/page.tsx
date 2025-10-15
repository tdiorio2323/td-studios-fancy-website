"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GlassCard } from "@/components/glass-card"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Toaster, toast } from "sonner"
import Link from "next/link"

const contactSchema = z.object({
  name: z.string().min(1, "Full Name is required."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service."),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, "Please provide more details about your project (at least 10 characters)."),
  honeypot: z.string().optional(),
})

type FormData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      timeline: "",
      message: "",
      honeypot: "",
    },
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Check honeypot field
    if (data.honeypot) {
      console.log("Honeypot triggered, likely a bot.")
      setSubmitStatus("success") // Pretend to succeed to bots
      setIsSubmitting(false)
      reset()
      toast.success("Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.")
      return
    }

    try {
      const formData = new FormData()
      for (const key in data) {
        if (key !== "honeypot") { // Exclude honeypot from actual submission
          formData.append(key, (data as any)[key])
        }
      }

      const response = await fetch("https://formspree.io/f/movkvrpz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setSubmitStatus("success")
        reset()
        toast.success("Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.")
      } else {
        setSubmitStatus("error")
        toast.error("Sorry, there was an error sending your message. Please try again or email us directly.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
      toast.error("Sorry, there was an error sending your message. Please try again or email us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Toaster richColors position="bottom-right" />
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
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAAABAAEDEQAqADmX/9k="
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 container-custom text-center">
            <div className="inline-block px-4 py-2 mb-6 text-xs font-light tracking-widest uppercase border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
              Contact
            </div>
            <h1 className="chrome-text text-6xl md:text-7xl font-bold mb-6 tracking-tight">Start Your Project</h1>
            <p className="text-xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto mb-8">
              Ready to elevate your brand with premium design solutions? Let's discuss your project and bring your vision
              to life.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 px-6">
          <div className="container-custom">
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
                    <h2 className="text-2xl font-light text-white">Email</h2>
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
                    <h2 className="text-2xl font-light text-white">Response Time</h2>
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
                    <h2 className="text-2xl font-light text-white">Location</h2>
                  </div>
                  <p className="text-white/80 mb-2 font-light">New York City, NY</p>
                  <p className="text-white/60 text-sm">Serving clients worldwide</p>
                </GlassCard>
              </div>

              {/* Contact Form */}
              <div>
                <GlassCard className="p-8">
                  <h2 className="text-2xl font-light mb-8 text-white">Start Your Project</h2>

                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-center">
                      <p className="text-green-400 font-light mb-4">
                        Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                      </p>
                      <Link href="/contact/book-call" className="primary-button px-6 py-3 text-base focus-ring">
                        Book a quick intro call
                      </Link>
                    </div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                    {/* Honeypot field - hidden from users */}
                    <input
                      type="text"
                      name="honeypot"
                      {...register("honeypot")}
                      className="hidden"
                      aria-hidden="true"
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-light text-white/80 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          {...register("name")}
                          placeholder="Your full name"
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 font-light focus-ring"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "name-error" : undefined}
                        />
                        {errors.name && (
                          <p id="name-error" className="text-red-400 text-sm mt-1" role="alert" data-testid="contact-error">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-light text-white/80 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          placeholder="your@email.com"
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 font-light focus-ring"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="text-red-400 text-sm mt-1" role="alert" data-testid="contact-error">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-light text-white/80 mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          {...register("company")}
                          placeholder="Your company name"
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 font-light focus-ring"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-light text-white/80 mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register("phone")}
                          placeholder="(555) 123-4567"
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 font-light focus-ring"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="service" className="block text-sm font-light text-white/80 mb-2">
                          Service Needed *
                        </label>
                        <select
                          id="service"
                          {...register("service")}
                          className="w-full bg-white/5 border border-white/20 text-white focus:border-white/40 font-light rounded-md px-3 py-2 focus-ring"
                          aria-invalid={!!errors.service}
                          aria-describedby={errors.service ? "service-error" : undefined}
                        >
                          <option value="" disabled>Select a service</option>
                          <option value="website-design">Website Design</option>
                          <option value="development">Development</option>
                          <option value="social-media">Social Media Marketing</option>
                          <option value="design">Graphic Design</option>
                          <option value="multiple">Multiple Services</option>
                          <option value="consultation">Strategy Consultation</option>
                        </select>
                        {errors.service && (
                          <p id="service-error" className="text-red-400 text-sm mt-1" role="alert" data-testid="contact-error">
                            {errors.service.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-light text-white/80 mb-2">
                          Project Budget
                        </label>
                        <select
                          id="budget"
                          {...register("budget")}
                          className="w-full bg-white/5 border border-white/20 text-white focus:border-white/40 font-light rounded-md px-3 py-2 focus-ring"
                        >
                          <option value="" disabled>Select budget range</option>
                          <option value="10k-25k">$10k - $25k</option>
                          <option value="25k-50k">$25k - $50k</option>
                          <option value="50k-100k">$50k - $100k</option>
                          <option value="100k+">$100k+</option>
                          <option value="discuss">Let's discuss</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-light text-white/80 mb-2">
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        {...register("timeline")}
                        className="w-full bg-white/5 border border-white/20 text-white focus:border-white/40 font-light rounded-md px-3 py-2 focus-ring"
                      >
                        <option value="" disabled>Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-2months">1-2 months</option>
                        <option value="3-6months">3-6 months</option>
                        <option value="6months+">6+ months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-light text-white/80 mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        rows={6}
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 resize-none font-light focus-ring"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="text-red-400 text-sm mt-1" role="alert" data-testid="contact-error">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full primary-button py-4 text-lg font-light disabled:opacity-50 disabled:cursor-not-allowed focus-ring"
                      data-testid="contact-submit"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}