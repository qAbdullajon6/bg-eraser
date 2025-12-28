import { Card } from "@/components/ui/card"

const useCases = [
  { name: "Photographers", icon: "📷" },
  { name: "Marketing Teams", icon: "📢" },
  { name: "Developers", icon: "💻" },
  { name: "E-commerce", icon: "🛍️" },
  { name: "Media Production", icon: "🎬" },
  { name: "Car Dealerships", icon: "🚗" },
  { name: "Enterprise", icon: "🏢" },
]

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">For Individuals, Professionals & Businesses</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whatever your industry, BgEraser has the tools you need.
          </p>
        </div>

        {/* Use cases grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {useCases.map((useCase) => (
            <Card key={useCase.name} className="p-6 text-center hover:bg-secondary/50 transition-colors cursor-pointer">
              <div className="text-5xl mb-3">{useCase.icon}</div>
              <h3 className="font-semibold">{useCase.name}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}