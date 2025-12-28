"use client"

import { Download, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ExportSection() {
  const handleDownload = (format: "png" | "jpg") => {
    console.log(`Download as ${format.toUpperCase()}`)
  }

  return (
    <div className="bg-card border border-border rounded-lg p-4 space-y-3">
      <h3 className="font-semibold text-foreground">Export</h3>

      <div className="space-y-2">
        <Button onClick={() => handleDownload("png")} className="w-full">
          <Download className="w-4 h-4 mr-2" />
          Download PNG
        </Button>
        <Button onClick={() => handleDownload("jpg")} variant="outline" className="w-full">
          <Download className="w-4 h-4 mr-2" />
          Download JPG
        </Button>
      </div>

      <Button variant="outline" className="w-full bg-transparent">
        <Share2 className="w-4 h-4 mr-2" />
        Share
      </Button>
    </div>
  )
}
