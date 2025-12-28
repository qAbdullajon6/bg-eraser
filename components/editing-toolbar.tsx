"use client"

import { Wand2, Filter, Sparkles, Crop, RotateCcw, RotateCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EditingToolbarProps {
  onRemoveBackground: () => void
  onUndo: () => void
  onRedo: () => void
  onToggleFilters: () => void
  onToggleEffects: () => void
}

export default function EditingToolbar({
  onRemoveBackground,
  onUndo,
  onRedo,
  onToggleFilters,
  onToggleEffects,
}: EditingToolbarProps) {
  const tools = [
    {
      icon: Wand2,
      label: "Remove Background",
      action: onRemoveBackground,
      className: "bg-accent text-accent-foreground hover:bg-accent/90",
    },
    {
      icon: Filter,
      label: "Filters",
      action: onToggleFilters,
    },
    {
      icon: Sparkles,
      label: "Effects",
      action: onToggleEffects,
    },
    {
      icon: Crop,
      label: "Crop",
      action: () => console.log("Crop"),
    },
  ]

  return (
    <div className="bg-card border border-border rounded-lg p-3 flex items-center gap-2 overflow-x-auto">
      <div className="flex gap-2">
        {tools.map((tool) => (
          <Button
            key={tool.label}
            onClick={tool.action}
            variant="outline"
            size="sm"
            className={tool.className}
            title={tool.label}
          >
            <tool.icon className="w-4 h-4 mr-1" />
            <span className="hidden sm:inline">{tool.label}</span>
          </Button>
        ))}
      </div>

      <div className="flex-1" />

      <div className="flex gap-1 border-l border-border pl-2">
        <Button onClick={onUndo} variant="ghost" size="sm" title="Undo">
          <RotateCcw className="w-4 h-4" />
        </Button>
        <Button onClick={onRedo} variant="ghost" size="sm" title="Redo">
          <RotateCw className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
