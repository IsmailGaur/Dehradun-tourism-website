import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredPlaces = [
  {
    id: "robbers-cave",
    name: "Robber's Cave",
    category: "Nature",
    description: "A natural cave formation with a river flowing through it",
    image: "/robbers-cave-dehradun-river-rocks-natural-formatio.jpg",
  },
  {
    id: "sahastradhara",
    name: "Sahastradhara",
    category: "Nature",
    description: "Thousand-fold spring with medicinal sulphur waters",
    image: "/sahastradhara-dehradun-waterfalls-sulphur-springs.jpg",
  },
  {
    id: "tapkeshwar-temple",
    name: "Tapkeshwar Temple",
    category: "Religious",
    description: "Ancient cave temple dedicated to Lord Shiva",
    image: "/tapkeshwar-temple-dehradun-shiva-cave-temple.jpg",
  },
  {
    id: "forest-research-institute",
    name: "Forest Research Institute",
    category: "Heritage",
    description: "Colonial-era institute with stunning Greco-Roman architecture",
    image: "/forest-research-institute-dehradun-colonial-archit.jpg",
  },
]

export function FeaturedPlaces() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Destinations</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mt-3 mb-4 text-balance">
            Popular Attractions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From mystical caves to ancient temples, discover the diverse beauty that makes Dehradun a must-visit
            destination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPlaces.map((place) => (
            <Link
              key={place.id}
              href={`/places/${place.id}`}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-muted"
            >
              <Image
                src={place.image || "/placeholder.svg"}
                alt={place.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-card">
                <span className="text-xs tracking-wider uppercase text-card/80">{place.category}</span>
                <h3 className="text-xl font-serif font-bold mt-1">{place.name}</h3>
                <p className="text-sm text-card/80 mt-2 line-clamp-2">{place.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="/places">
              View All Places
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
