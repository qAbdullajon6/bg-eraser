import { Globe } from "lucide-react"

const footerLinks = {
  Features: ["All features", "API Documentation", "Integrations"],
  Company: ["About Us", "Careers", "Blog"],
  Legal: ["Terms of Service", "Privacy Policy", "Support"],
}

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Links grid */}
        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">© 2025 BgEraser. All rights reserved.</p>

          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
            <Globe className="w-4 h-4" />
            English
          </button>
        </div>
      </div>
    </footer>
  )
}
