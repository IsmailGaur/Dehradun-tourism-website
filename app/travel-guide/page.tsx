import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Plane,
  Train,
  Bus,
  Car,
  CloudSun,
  Thermometer,
  Droplets,
  Shirt,
  Shield,
  Phone,
  Map,
  Calendar,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const transportOptions = [
  {
    icon: Plane,
    title: "By Air",
    description: "Jolly Grant Airport (DED)",
    details:
      "Located 25 km from city center. Regular flights from Delhi, Mumbai, and other major cities. Taxis and buses available from airport.",
  },
  {
    icon: Train,
    title: "By Train",
    description: "Dehradun Railway Station",
    details:
      "Well-connected to Delhi, Mumbai, Kolkata, and other major cities. Shatabdi Express and Jan Shatabdi are popular options from Delhi.",
  },
  {
    icon: Bus,
    title: "By Bus",
    description: "ISBT Dehradun",
    details:
      "Regular bus services from Delhi (6-7 hours), Haridwar (1 hour), and other nearby cities. Both government and private operators available.",
  },
  {
    icon: Car,
    title: "By Road",
    description: "Via NH7 & NH72",
    details:
      "Well-maintained highways connect Dehradun to Delhi (250 km), Chandigarh (170 km), and Haridwar (55 km). Scenic drive through Mussoorie ghat.",
  },
]

const seasons = [
  {
    name: "Summer",
    months: "March - June",
    temp: "20°C - 36°C",
    description: "Pleasant weather, ideal for sightseeing. Popular tourist season.",
    icon: Thermometer,
  },
  {
    name: "Monsoon",
    months: "July - September",
    temp: "18°C - 30°C",
    description: "Heavy rainfall, lush greenery. Some attractions may be inaccessible.",
    icon: Droplets,
  },
  {
    name: "Winter",
    months: "October - February",
    temp: "5°C - 20°C",
    description: "Cool and foggy mornings. Perfect for nature walks and photography.",
    icon: CloudSun,
  },
]

const itineraries = [
  {
    duration: "1 Day",
    title: "Quick Highlights",
    places: ["Robber's Cave", "FRI Museum", "Sahastradhara"],
    description: "Perfect for a day trip covering the must-see attractions.",
  },
  {
    duration: "2 Days",
    title: "Dehradun Essentials",
    places: [
      "Day 1: FRI, Mindrolling Monastery, Tapkeshwar Temple",
      "Day 2: Robber's Cave, Sahastradhara, Local Markets",
    ],
    description: "Ideal for covering major attractions with a relaxed pace.",
  },
  {
    duration: "3-4 Days",
    title: "Complete Experience",
    places: ["Day 1-2: Dehradun attractions", "Day 3: Mussoorie day trip", "Day 4: Rajaji National Park safari"],
    description: "Comprehensive tour including nearby hill station and wildlife.",
  },
]

const safetyTips = [
  "Carry valid ID proof at all times",
  "Stay hydrated, especially during summer",
  "Hire registered guides for trekking",
  "Inform someone about your travel plans",
  "Keep emergency numbers handy",
  "Respect local customs and traditions",
]

export default function TravelGuidePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4">Travel Guide</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Everything you need to know to plan your perfect trip to Dehradun
            </p>
          </div>
        </section>

        {/* How to Reach */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Transportation</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mt-2">How to Reach</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {transportOptions.map((option, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <option.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="font-serif">{option.title}</CardTitle>
                    <CardDescription>{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{option.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Weather & Best Time */}
        <section className="py-16 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Climate</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mt-2">Weather & Best Time to Visit</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {seasons.map((season, index) => (
                <div key={index} className="bg-card p-8 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <season.icon className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-serif font-bold">{season.name}</h3>
                      <p className="text-sm text-muted-foreground">{season.months}</p>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-primary mb-3">{season.temp}</div>
                  <p className="text-muted-foreground">{season.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Suggested Itineraries */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Planning</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mt-2">Suggested Itineraries</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {itineraries.map((itinerary, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-primary font-medium">{itinerary.duration}</span>
                    </div>
                    <CardTitle className="font-serif">{itinerary.title}</CardTitle>
                    <CardDescription>{itinerary.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {itinerary.places.map((place, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Map className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          {place}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Packing & Safety */}
        <section className="py-16 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* What to Pack */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Shirt className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-serif font-bold">What to Pack</h2>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2 text-primary">Summer</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Light cotton clothes</li>
                        <li>• Sunscreen & sunglasses</li>
                        <li>• Comfortable walking shoes</li>
                        <li>• Hat or cap</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-primary">Winter</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Warm layers & jacket</li>
                        <li>• Sweaters & thermals</li>
                        <li>• Warm socks</li>
                        <li>• Moisturizer</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-primary">Monsoon</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Raincoat or umbrella</li>
                        <li>• Waterproof bag</li>
                        <li>• Quick-dry clothes</li>
                        <li>• Anti-slip footwear</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-primary">Essentials</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• First aid kit</li>
                        <li>• Power bank</li>
                        <li>• Camera</li>
                        <li>• Reusable water bottle</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Safety Tips */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-serif font-bold">Safety Tips</h2>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <ul className="space-y-3">
                    {safetyTips.map((tip, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="text-xs font-medium text-primary">{index + 1}</span>
                        </div>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 bg-accent/20 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="h-6 w-6 text-accent" />
                    <h4 className="font-medium">Emergency Numbers</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      Police: <span className="font-medium">100</span>
                    </div>
                    <div>
                      Ambulance: <span className="font-medium">102</span>
                    </div>
                    <div>
                      Fire: <span className="font-medium">101</span>
                    </div>
                    <div>
                      Tourist Helpline: <span className="font-medium">1363</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
