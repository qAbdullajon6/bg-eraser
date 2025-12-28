"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white font-bold">BE</div>
          <span className="hidden sm:inline">BgEraser</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm hover:text-accent transition-colors">
            Features
          </a>
          <a href="#use-cases" className="text-sm hover:text-accent transition-colors">
            Use Cases
          </a>
          <a href="#integrations" className="text-sm hover:text-accent transition-colors">
            Integrations
          </a>
          <a href="#blog" className="text-sm hover:text-accent transition-colors">
            Blog
          </a>
        </div>

        {/* Right side actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-sm">
            Log in
          </Button>
          <Button className="bg-accent hover:bg-accent/90 text-white text-sm">Try for free</Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border p-4 space-y-4">
          <a href="#features" className="block text-sm hover:text-accent transition-colors">
            Features
          </a>
          <a href="#use-cases" className="block text-sm hover:text-accent transition-colors">
            Use Cases
          </a>
          <a href="#integrations" className="block text-sm hover:text-accent transition-colors">
            Integrations
          </a>
          <a href="#blog" className="block text-sm hover:text-accent transition-colors">
            Blog
          </a>
          <div className="flex flex-col gap-2 pt-2">
            <Button variant="ghost" className="w-full text-sm">
              Log in
            </Button>
            <Button className="w-full bg-accent hover:bg-accent/90 text-white text-sm">Try for free</Button>
          </div>
        </div>
      )}
    </header>
  )
}