"use client"

import { useState } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { events, eventCategories } from "@/lib/events-data"
import { Calendar, MapPin, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsletterSection } from "@/components/newsletter-section"

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredEvents = activeCategory === "all" ? events : events.filter((event) => event.category === activeCategory)

  // Sort events by date
  const sortedEvents = [...filteredEvents].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4">Events & Festivals</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Experience the vibrant culture and traditions of Dehradun through its colorful festivals and events
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-border sticky top-16 bg-background z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {eventCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className="rounded-full"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Events List */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {sortedEvents.map((event) => (
                <div
                  key={event.id}
                  className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-accent text-accent-foreground text-xs px-3 py-1 rounded-full uppercase tracking-wider capitalize">
                          {event.category}
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-2 p-6 md:p-8">
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {event.date}
                          {event.endDate && ` - ${event.endDate}`}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{event.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {event.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="flex items-center gap-1 text-sm bg-secondary px-3 py-1 rounded-full"
                          >
                            <ChevronRight className="h-3 w-3 text-primary" />
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {sortedEvents.length === 0 && (
              <div className="text-center py-16">
                <Calendar className="h-16 w-16 mx-auto text-muted-foreground/20 mb-4" />
                <h3 className="text-xl font-serif font-bold mb-2">No Events Found</h3>
                <p className="text-muted-foreground">No events in this category at the moment. Check back soon!</p>
              </div>
            )}
          </div>
        </section>

        {/* Calendar Note */}
        <section className="py-12 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-serif font-bold mb-4">Plan Your Visit Around Festivals</h2>
            <p className="text-muted-foreground mb-6">
              Experiencing local festivals adds a unique dimension to your trip. We recommend booking accommodation well
              in advance during major festivals as the city sees increased tourist activity.
            </p>
            <Button asChild>
              <a href="/travel-guide">View Travel Guide</a>
            </Button>
          </div>
        </section>

        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}
