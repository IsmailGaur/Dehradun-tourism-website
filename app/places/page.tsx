"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { places, categories } from "@/lib/places-data"
import { MapPin, Clock, Ticket } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PlacesPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredPlaces = activeCategory === "all" ? places : places.filter((place) => place.category === activeCategory)

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4">Places to Visit</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Discover the diverse attractions of Dehradun, from natural wonders to ancient temples and heritage sites.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-border sticky top-16 bg-background z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
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

        {/* Places Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPlaces.map((place) => (
                <Link
                  key={place.id}
                  href={`/places/${place.id}`}
                  className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-border"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={place.image || "/placeholder.svg"}
                      alt={place.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                        {place.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">
                      {place.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{place.shortDescription}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {place.timing.split(" ")[0]}
                      </span>
                      <span className="flex items-center gap-1">
                        <Ticket className="h-4 w-4" />
                        {place.entryFee.split(" ")[0]}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {place.location.split(",")[0]}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
