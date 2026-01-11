"use client"

import { useState } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { X, ChevronLeft, ChevronRight, Play, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

const galleryImages = [
  { id: 1, src: "/robbers-cave-dehradun-water-stream.jpg", alt: "Robber's Cave", category: "nature" },
  { id: 2, src: "/placeholder.svg?height=600&width=800", alt: "Sahastradhara Waterfalls", category: "nature" },
  { id: 3, src: "/placeholder.svg?height=600&width=800", alt: "Forest Research Institute", category: "heritage" },
  { id: 4, src: "/placeholder.svg?height=600&width=800", alt: "Mindrolling Monastery", category: "religious" },
  { id: 5, src: "/placeholder.svg?height=600&width=800", alt: "Tapkeshwar Temple", category: "religious" },
  { id: 6, src: "/placeholder.svg?height=600&width=800", alt: "Mussoorie View", category: "nature" },
  { id: 7, src: "/placeholder.svg?height=600&width=800", alt: "Rajaji National Park", category: "nature" },
  { id: 8, src: "/placeholder.svg?height=600&width=800", alt: "Clock Tower Market", category: "heritage" },
  { id: 9, src: "/placeholder.svg?height=600&width=800", alt: "Doon Valley Aerial View", category: "nature" },
  { id: 10, src: "/placeholder.svg?height=600&width=800", alt: "Tibetan Market", category: "heritage" },
  { id: 11, src: "/placeholder.svg?height=600&width=800", alt: "Lakshman Siddh Temple", category: "religious" },
  { id: 12, src: "/placeholder.svg?height=600&width=800", alt: "Himalayan Sunrise", category: "nature" },
]

const videos = [
  {
    id: 1,
    thumbnail: "/placeholder.svg?height=400&width=600",
    title: "Discover Dehradun - Official Tourism Video",
    duration: "3:45",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    thumbnail: "/placeholder.svg?height=400&width=600",
    title: "Exploring Robber's Cave - Adventure Guide",
    duration: "5:20",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    thumbnail: "/placeholder.svg?height=400&width=600",
    title: "FRI Heritage Walk - Virtual Tour",
    duration: "8:15",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
]

const categories = [
  { id: "all", name: "All" },
  { id: "nature", name: "Nature" },
  { id: "heritage", name: "Heritage" },
  { id: "religious", name: "Religious" },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(null)

  const filteredImages =
    activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
      const nextIndex = (currentIndex + 1) % filteredImages.length
      setSelectedImage(filteredImages[nextIndex].id)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
      const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
      setSelectedImage(filteredImages[prevIndex].id)
    }
  }

  const currentImage = galleryImages.find((img) => img.id === selectedImage)

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4">Gallery</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Explore the visual beauty of Dehradun through our curated collection of images and videos
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

        {/* Image Gallery */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-bold mb-8">Photo Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(image.id)}
                  className="group relative aspect-square rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
                    <Maximize2 className="h-8 w-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-bold mb-8">Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {videos.map((video) => (
                <button
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className="group text-left bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                        <Play className="h-8 w-8 text-primary-foreground fill-current ml-1" />
                      </div>
                    </div>
                    <span className="absolute bottom-3 right-3 bg-foreground/80 text-primary-foreground text-xs px-2 py-1 rounded">
                      {video.duration}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium group-hover:text-primary transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Image Lightbox */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 bg-foreground/95">
            <VisuallyHidden>
              <DialogTitle>Image Preview</DialogTitle>
            </VisuallyHidden>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-background/20 hover:bg-background/40 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6 text-primary-foreground" />
            </button>
            {currentImage && (
              <div className="relative aspect-[4/3] md:aspect-video">
                <Image
                  src={currentImage.src || "/placeholder.svg"}
                  alt={currentImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
              <Button variant="secondary" size="icon" onClick={prevImage} aria-label="Previous image">
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button variant="secondary" size="icon" onClick={nextImage} aria-label="Next image">
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
            {currentImage && (
              <p className="absolute bottom-4 left-4 text-primary-foreground text-sm">{currentImage.alt}</p>
            )}
          </DialogContent>
        </Dialog>

        {/* Video Modal */}
        <Dialog open={selectedVideo !== null} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-4xl p-0">
            <VisuallyHidden>
              <DialogTitle>{selectedVideo?.title || "Video"}</DialogTitle>
            </VisuallyHidden>
            {selectedVideo && (
              <div className="aspect-video">
                <iframe
                  src={selectedVideo.embedUrl}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </>
  )
}
