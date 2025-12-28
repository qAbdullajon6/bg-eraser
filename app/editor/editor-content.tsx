"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import EditingToolbar from "@/components/editing-toolbar"
import PreviewArea from "@/components/preview-area"
import ExportSection from "@/components/export-section"
import FilterMenu from "@/components/filter-menu"
import EffectsMenu from "@/components/effects-menu"

export default function EditorContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const [currentImage, setCurrentImage] = useState<string | null>(null)
  const [zoom, setZoom] = useState(100)
  const [showFilters, setShowFilters] = useState(false)
  const [showEffects, setShowEffects] = useState(false)
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)

  useEffect(() => {
    const imageUrl = searchParams.get("image")
    if (imageUrl) {
      setCurrentImage(imageUrl)
      setHistory([imageUrl])
      setHistoryIndex(0)
    }
  }, [searchParams])

  const handleRemoveBackground = () => {
    console.log("[v0] Remove background requested")
    if (currentImage && canvasRef.current) {
      addToHistory(currentImage)
    }
  }

  const addToHistory = (image: string) => {
    const newHistory = history.slice(0, historyIndex + 1)
    newHistory.push(image)
    setHistory(newHistory)
    setHistoryIndex(newHistory.length - 1)
    setCurrentImage(image)
  }

  const handleUndo = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1
      setHistoryIndex(newIndex)
      setCurrentImage(history[newIndex])
    }
  }

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1
      setHistoryIndex(newIndex)
      setCurrentImage(history[newIndex])
    }
  }

  const handleZoomIn = () => {
    setZoom(Math.min(zoom + 10, 200))
  }

  const handleZoomOut = () => {
    setZoom(Math.max(zoom - 10, 50))
  }

  const handleToggleOriginal = () => {
    console.log("Compare with original")
  }

  if (!currentImage) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] gap-4">
        <p className="text-muted-foreground">No image loaded. Please upload an image first.</p>
        <Button onClick={() => router.push("/")}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center gap-4 mb-6">
        <Button onClick={() => router.push("/")} variant="outline" size="sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <h1 className="text-3xl font-bold">Image Editor</h1>
      </div>

      {/* Main editor layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main preview area */}
        <div className="lg:col-span-2 space-y-4">
          <PreviewArea
            image={currentImage}
            zoom={zoom}
            onZoomIn={handleZoomIn}
            onZoomOut={handleZoomOut}
            onToggleOriginal={handleToggleOriginal}
            canvasRef={canvasRef}
          />

          {/* Editing toolbar */}
          <EditingToolbar
            onRemoveBackground={handleRemoveBackground}
            onUndo={handleUndo}
            onRedo={handleRedo}
            onToggleFilters={() => setShowFilters(!showFilters)}
            onToggleEffects={() => setShowEffects(!showEffects)}
          />

          {/* Filters menu - shown/hidden based on state */}
          {showFilters && (
            <div className="border border-border rounded-lg p-4">
              <FilterMenu />
            </div>
          )}

          {/* Effects menu - shown/hidden based on state */}
          {showEffects && (
            <div className="border border-border rounded-lg p-4">
              <EffectsMenu />
            </div>
          )}
        </div>

        {/* Sidebar - export section */}
        <div className="space-y-4">
          <ExportSection />
        </div>
      </div>
    </div>
  )
}
