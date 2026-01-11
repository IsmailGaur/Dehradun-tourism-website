import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { places } from "@/lib/places-data"
import { MapPin, Clock, Ticket, Calendar, ArrowLeft, Check, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

export async function generateStaticParams() {
  return places.map((place) => ({
    id: place.id,
  }))
}

export default async function PlaceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const place = places.find((p) => p.id === id)

  if (!place) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Image */}
        <section className="relative h-[50vh] min-h-[400px]">
          <Image src={place.image || "/placeholder.svg"} alt={place.name} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-card">
            <div className="max-w-7xl mx-auto">
              <Link
                href="/places"
                className="inline-flex items-center gap-2 text-card/80 hover:text-card mb-4 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Places
              </Link>
              <span className="block text-sm tracking-wider uppercase text-card/80 mb-2">{place.category}</span>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold">{place.name}</h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-10">
                {/* Description */}
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4">About</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">{place.fullDescription}</p>
                </div>

                {/* Highlights */}
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4">Highlights</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {place.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3 bg-secondary p-4 rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gallery */}
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4">Gallery</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {place.gallery.map((img, index) => (
                      <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                        <Image
                          src={img || "/placeholder.svg"}
                          alt={`${place.name} gallery ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tips */}
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4">Visitor Tips</h2>
                  <div className="bg-accent/20 p-6 rounded-lg">
                    <ul className="space-y-3">
                      {place.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Lightbulb className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-border rounded-lg p-6 sticky top-24 space-y-6">
                  <h3 className="text-xl font-serif font-bold">Visitor Information</h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm text-muted-foreground block">Timing</span>
                        <span className="font-medium">{place.timing}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Ticket className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm text-muted-foreground block">Entry Fee</span>
                        <span className="font-medium">{place.entryFee}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm text-muted-foreground block">Best Time to Visit</span>
                        <span className="font-medium">{place.bestTime}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm text-muted-foreground block">Location</span>
                        <span className="font-medium">{place.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <Button asChild className="w-full">
                      <Link href="/travel-guide">Plan Your Visit</Link>
                    </Button>
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
