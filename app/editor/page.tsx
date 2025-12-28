import { Suspense } from "react"
import EditorContent from "./editor-content"
import Header from "@/components/header"

export default function EditorPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Suspense
        fallback={<div className="flex items-center justify-center min-h-[calc(100vh-80px)]">Loading editor...</div>}
      >
        <EditorContent />
      </Suspense>
    </div>
  )
}
