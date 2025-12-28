"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export default function SubscribeSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail("")
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-6">
        {/* Background accent */}
        <div className="absolute right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

        {/* Content */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay updated</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get the latest features, tips, and updates delivered to your inbox.
          </p>

          {/* Subscribe form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background hover:border-accent/50 focus:border-accent focus:outline-none transition-colors"
              />
            </div>
            <Button type="submit" className="bg-accent hover:bg-accent/90 text-white px-8">
              {submitted ? "Subscribed!" : "Subscribe"}
            </Button>
          </form>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground">
            To learn more about how BgEraser handles your personal data, check our{" "}
            <a href="#" className="text-accent hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}