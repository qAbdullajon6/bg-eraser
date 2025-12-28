import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    title: "E-commerce Photographer",
    image: "SC",
    review:
      "BgEraser has cut my editing time in half. The quality is exceptional and the AI is incredibly accurate. Highly recommended!",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    title: "Marketing Director",
    image: "MJ",
    review:
      "We use BgEraser for all our product photography. It's fast, reliable, and the results are consistently professional.",
    rating: 5,
  },
  {
    name: "Alex Rivera",
    title: "Graphic Designer",
    image: "AR",
    review: "The integration with Figma is seamless. I can remove backgrounds without leaving my design environment.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by thousands</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our users have to say about BgEraser.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-6">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Review */}
              <p className="text-sm text-muted-foreground mb-4 italic">"{testimonial.review}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-semibold text-sm">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
