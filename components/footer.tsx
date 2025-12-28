"use client"

import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Help & Support", href: "#" },
  ]

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Mail, label: "Email", href: "#" },
  ]

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-foreground mb-2">BgEraser</h3>
            <p className="text-sm text-muted-foreground">
              Remove image backgrounds instantly with AI-powered technology
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="w-8 h-8 bg-muted hover:bg-accent/10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent transition-colors"
                title={social.label}
              >
                <social.icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} BgEraser. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
