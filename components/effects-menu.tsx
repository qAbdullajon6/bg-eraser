"use client"

interface Effect {
  name: string
  icon: string
}

export default function EffectsMenu() {
  const effects: Effect[] = [
    { name: "Shadow", icon: "🌑" },
    { name: "Glow", icon: "✨" },
    { name: "Blur", icon: "💨" },
    { name: "Sharpen", icon: "🔪" },
    { name: "Vignette", icon: "◯" },
    { name: "Vintage", icon: "📜" },
  ]

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <h3 className="font-semibold text-foreground mb-4">Effects</h3>
      <div className="grid grid-cols-3 gap-3">
        {effects.map((effect) => (
          <button
            key={effect.name}
            className="flex flex-col items-center gap-2 p-3 hover:bg-muted rounded-lg transition-colors group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-accent/30 to-accent/10 rounded-lg flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
              {effect.icon}
            </div>
            <span className="text-xs text-muted-foreground text-center">{effect.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
