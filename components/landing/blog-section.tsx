import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const blogPosts = [
  {
    date: "Dec 20, 2024",
    title: "How to Create Perfect Product Photos for E-commerce",
    description: "Learn the best practices for photographing products and removing backgrounds like a pro.",
  },
  {
    date: "Dec 15, 2024",
    title: "The Future of AI in Image Editing",
    description: "Explore how artificial intelligence is revolutionizing the way we edit and create images.",
  },
  {
    date: "Dec 10, 2024",
    title: "BgEraser Now Supports Batch Processing",
    description: "Remove backgrounds from hundreds of images at once. Save time and scale your workflow.",
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Updates</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tips, tutorials, and product updates from the BgEraser team.
          </p>
        </div>

        {/* Blog grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.title} className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
              <p className="text-xs text-muted-foreground mb-3">{post.date}</p>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">{post.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{post.description}</p>
              <div className="inline-flex items-center text-accent text-sm font-medium group-hover:gap-2 transition-all">
                Read more
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
