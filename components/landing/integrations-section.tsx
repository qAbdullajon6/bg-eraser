import { Card } from "@/components/ui/card"

const integrations = [
  { name: "Figma", logo: "🎨" },
  { name: "Photoshop", logo: "📷" },
  { name: "Zapier", logo: "⚙️" },
  { name: "Make", logo: "🔧" },
  { name: "Slack", logo: "💬" },
  { name: "Google Sheets", logo: "📊" },
]

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Boost your efficiency with automated background removal
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect BgEraser to your favorite tools and automate your workflow.
          </p>
        </div>

        {/* Integrations grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {integrations.map((integration) => (
            <Card
              key={integration.name}
              className="p-8 flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="text-5xl">{integration.logo}</div>
              <h3 className="font-semibold text-lg">{integration.name}</h3>
            </Card>
          ))}
        </div>

        {/* Mobile app note */}
        <div className="text-center p-6 bg-accent/10 rounded-lg border border-accent/20">
          <p className="text-sm text-muted-foreground mb-2">
            <span className="font-semibold">Mobile App available</span> for on-the-go editing on iOS and Android
          </p>
        </div>
      </div>
    </section>
  )
}
