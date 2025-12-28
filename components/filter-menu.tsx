"use client"

interface Filter {
  name: string
  icon: string
  color: string
}

export default function FilterMenu() {
  const filters: Filter[] = [
    { name: "Brightness", icon: "☀️", color: "bg-yellow-200" },
    { name: "Contrast", icon: "◐", color: "bg-gray-400" },
    { name: "Saturation", icon: "🎨", color: "bg-purple-400" },
    { name: "Grayscale", icon: "⚪", color: "bg-gray-600" },
    { name: "Sepia", icon: "📷", color: "bg-amber-700" },
    { name: "Blur", icon: "💨", color: "bg-blue-300" },
  ]

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <h3 className="font-semibold text-foreground mb-4">Filters</h3>
      <div className="grid grid-cols-3 gap-3">
        {filters.map((filter) => (
          <button
            key={filter.name}
            className="flex flex-col items-center gap-2 p-3 hover:bg-muted rounded-lg transition-colors group"
          >
            <div
              className={`w-12 h-12 rounded-lg ${filter.color} flex items-center justify-center text-lg group-hover:scale-110 transition-transform`}
            >
              {filter.icon}
            </div>
            <span className="text-xs text-muted-foreground text-center">{filter.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
