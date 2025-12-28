"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ImageUploadSection({ onImageUpload }: { onImageUpload: (url: string) => void }) {
  const [isDragActive, setIsDragActive] = useState(false)
  const [imageUrl, setImageUrl] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragActive(e.type === "dragenter" || e.type === "dragover")
  }

  const handleFile = (file: File) => {
    if (file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const url = e.target?.result as string
        onImageUpload(url)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragActive(false)

    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFile(files[0])
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handlePasteUrl = () => {
    if (imageUrl.trim()) {
      onImageUpload(imageUrl)
    }
  }

  const exampleImages = [
    { label: "Example 1", url: "/diverse-person-portrait.png" },
    { label: "Example 2", url: "/diverse-products-still-life.png" },
    { label: "Example 3", url: "/vast-mountain-valley.png" },
  ]

  return (
    <div className="space-y-8 py-8">
      <div className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">Remove Image Backgrounds</h1>
        <p className="text-lg text-muted-foreground">
          Instantly remove backgrounds from your images with AI-powered technology
        </p>
      </div>

      <div className="space-y-4">
        {/* Drag and drop area */}
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-colors ${
            isDragActive ? "border-accent bg-accent/10" : "border-border hover:border-accent/50"
          }`}
        >
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileInput} className="hidden" />

          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
              <Upload className="w-8 h-8 text-accent" />
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground">Drag and drop your image</p>
              <p className="text-sm text-muted-foreground">or click to browse</p>
            </div>
            <Button onClick={() => fileInputRef.current?.click()} className="mt-2">
              Choose File
            </Button>
          </div>
        </div>

        {/* URL input */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Or paste image URL here..."
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="flex-1 px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            onKeyPress={(e) => e.key === "Enter" && handlePasteUrl()}
          />
          <Button onClick={handlePasteUrl} variant="outline">
            Paste URL
          </Button>
        </div>
      </div>

      {/* Example images */}
      <div className="space-y-3">
        <p className="text-sm text-muted-foreground text-center">Try with example images:</p>
        <div className="grid grid-cols-3 gap-3">
          {exampleImages.map((img) => (
            <button
              key={img.label}
              onClick={() => onImageUpload(img.url)}
              className="group relative overflow-hidden rounded-lg border border-border hover:border-accent transition-colors"
            >
              <img
                src={img.url || "/placeholder.svg"}
                alt={img.label}
                className="w-full h-24 object-cover group-hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <ImageIcon className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
