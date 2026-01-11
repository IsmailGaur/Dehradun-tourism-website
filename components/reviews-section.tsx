"use client"
import { useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    date: "November 2025",
    title: "A Perfect Getaway!",
    text: "Dehradun exceeded all my expectations. The Robber's Cave was an amazing experience, and the weather was absolutely perfect. The locals were friendly and helpful. Can't wait to visit again!",
    visitedPlaces: ["Robber's Cave", "Sahastradhara", "FRI"],
  },
  {
    id: 2,
    name: "Rahul Mehta",
    location: "Mumbai",
    rating: 5,
    date: "October 2025",
    title: "Spiritual and Scenic",
    text: "Visited the Mindrolling Monastery and Tapkeshwar Temple. Both places have such peaceful vibes. The monastery's architecture is breathtaking. A must-visit for anyone seeking tranquility.",
    visitedPlaces: ["Mindrolling Monastery", "Tapkeshwar Temple"],
  },
  {
    id: 3,
    name: "Anjali Verma",
    location: "Bangalore",
    rating: 4,
    date: "September 2025",
    title: "Great Family Trip",
    text: "Took my family to Dehradun for a week. Kids loved Sahastradhara and the ropeway ride. The FRI museum was educational and interesting. Would recommend booking hotels in advance during peak season.",
    visitedPlaces: ["Sahastradhara", "FRI", "Mussoorie"],
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Lucknow",
    rating: 5,
    date: "August 2025",
    title: "Wildlife Paradise",
    text: "The Rajaji National Park safari was the highlight of our trip. Spotted elephants and deer! The guides were knowledgeable and the experience was unforgettable.",
    visitedPlaces: ["Rajaji National Park"],
  },
]

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const currentReview = reviews[currentIndex]

  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mt-2">What Visitors Say</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Read authentic experiences from travelers who have explored the beauty of Dehradun
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/10" />

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg">{currentReview.name}</h4>
                <p className="text-muted-foreground text-sm">
                  {currentReview.location} • {currentReview.date}
                </p>
              </div>
              <div className="ml-auto flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < currentReview.rating ? "fill-accent text-accent" : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
            </div>

            <h3 className="text-xl font-serif font-bold mb-3">{currentReview.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{currentReview.text}</p>

            <div className="flex flex-wrap gap-2">
              {currentReview.visitedPlaces.map((place) => (
                <span key={place} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  {place}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <div className="flex gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-muted"
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={prevReview} aria-label="Previous review">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={nextReview} aria-label="Next review">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
