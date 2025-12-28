"use client"

import { ZoomIn, ZoomOut, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { RefObject } from "react"

interface PreviewAreaProps {
  image: string | null
  zoom: number
  onZoomIn: () => void
  onZoomOut: () => void
  onToggleOriginal: () => void
  canvasRef: RefObject<HTMLCanvasElement>
}

export default function PreviewArea({
  image,
  zoom,
  onZoomIn,
  onZoomOut,
  onToggleOriginal,
  canvasRef,
}: PreviewAreaProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Preview container */}
      <div className="relative w-full aspect-video bg-muted/30 flex items-center justify-center overflow-auto">
        {image ? (
          <img
            src={image || "/placeholder.svg"}
            alt="Edited preview"
            style={{
              width: `${zoom}%`,
              height: "auto",
              maxHeight: "100%",
            }}
            className="object-contain"
          />
        ) : (
          <div className="text-muted-foreground">No image loaded</div>
        )}
        <canvas ref={canvasRef} className="hidden" />
      </div>

      {/* Controls */}
      <div className="border-t border-border p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button onClick={onZoomOut} variant="outline" size="sm">
            <ZoomOut className="w-4 h-4" />
          </Button>
          <span className="text-sm text-muted-foreground w-12 text-center">{zoom}%</span>
          <Button onClick={onZoomIn} variant="outline" size="sm">
            <ZoomIn className="w-4 h-4" />
          </Button>
        </div>

        <Button onClick={onToggleOriginal} variant="ghost" size="sm">
          <Eye className="w-4 h-4 mr-1" />
          <span className="hidden sm:inline">Compare</span>
        </Button>
      </div>
    </div>
  )
}
