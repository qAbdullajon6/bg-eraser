"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { Upload } from "lucide-react"

export default function HeroSection() {
  const router = useRouter()

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string
        router.push(`/editor?image=${encodeURIComponent(imageUrl)}`)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
            Now with AI-powered magic brush
          </div>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
            Remove Image Background – 100% Automatically and Free
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            All-in-one AI background remover & generator. Perfect for professionals, businesses, and creators.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <label htmlFor="image-upload" className="block">
            <div className="relative border-2 border-dashed border-border rounded-xl p-12 hover:bg-secondary/50 transition-colors cursor-pointer">
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />
              </div>

              <div className="relative flex flex-col items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Upload className="w-6 h-6 text-accent" />
                </div>
                <div className="text-center">
                  <p className="text-base font-medium mb-1">Upload Image or drop a file, paste image or URL</p>
                  <p className="text-sm text-muted-foreground">Support for PNG, JPG, WebP and more</p>
                </div>
              </div>

              <input id="image-upload" type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            </div>
          </label>

          <p className="text-xs text-muted-foreground text-center mt-6">
            By uploading an image or URL you agree to our{" "}
            <a href="#" className="text-accent hover:underline">
              Terms of Service
            </a>
            . To learn more about how BgEraser handles your personal data, check our{" "}
            <a href="#" className="text-accent hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>

        <div className="mt-12 md:mt-16">
          <p className="text-sm text-muted-foreground text-center mb-6">Perfect for all types of images</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Products", "People", "Animals", "Cars", "Graphics"].map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-border hover:bg-secondary transition-colors text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}