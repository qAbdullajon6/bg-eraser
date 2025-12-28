"use client"

import Header from "@/components/landing/header"
import HeroSection from "@/components/landing/hero-section"
import FeaturesSection from "@/components/landing/features-section"
import UseCasesSection from "@/components/landing/use-cases-section"
import IntegrationsSection from "@/components/landing/integrations-section"
import TestimonialsSection from "@/components/landing/testimonials-section"
import BlogSection from "@/components/landing/blog-section"
import SubscribeSection from "@/components/landing/subscribe-section"
import Footer from "@/components/landing/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <UseCasesSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <BlogSection />
      <SubscribeSection />
      <Footer />
    </div>
  )
}
