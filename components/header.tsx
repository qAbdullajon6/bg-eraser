"use client"

import { Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ]

  return (
    <header className="border-b border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/60 rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">BE</span>
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:inline">BgEraser</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="hidden sm:flex bg-transparent">
              Log in
            </Button>
            <Button size="sm" className="hidden sm:flex">
              Sign up
            </Button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>

            <Button size="icon" variant="ghost" className="rounded-full">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 space-y-2 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
