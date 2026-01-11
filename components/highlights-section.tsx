import { Mountain, Sun, Landmark, Compass } from "lucide-react"

const highlights = [
  {
    icon: Mountain,
    title: "Himalayan Gateway",
    description: "Nestled in the Doon Valley at the foothills of the majestic Himalayas",
  },
  {
    icon: Sun,
    title: "Pleasant Climate",
    description: "Year-round moderate temperatures perfect for every kind of traveler",
  },
  {
    icon: Landmark,
    title: "Rich Heritage",
    description: "Colonial architecture, ancient temples, and cultural landmarks",
  },
  {
    icon: Compass,
    title: "Adventure Hub",
    description: "Gateway to Mussoorie, Rishikesh, and countless Himalayan treks",
  },
]

export function HighlightsSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Why Visit</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mt-3 mb-4 text-balance">
            The Charm of Dehradun
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="bg-card p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
