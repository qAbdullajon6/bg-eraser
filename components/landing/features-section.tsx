import { Card } from "@/components/ui/card"

const features = [
  {
    title: "Stunning quality",
    description:
      "Professional-grade background removal that works with any image type. Perfect for e-commerce, marketing, and professional photos.",
    icon: "✨",
  },
  {
    title: "Transparent background",
    description:
      "Download as PNG with transparent background or generate a new one. Ideal for logos, product images, and graphics.",
    icon: "🎨",
  },
  {
    title: "New background generation",
    description:
      "Let AI generate a perfect background for you. Choose from presets or describe what you want to create.",
    icon: "🌟",
  },
  {
    title: "Magic Brush",
    description: "Fine-tune edges with AI-powered precision. Add or remove areas with just a brush stroke.",
    icon: "✏️",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">One tool, endless uses</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create stunning images with transparent or custom backgrounds.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
