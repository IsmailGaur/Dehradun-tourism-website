"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, X, MapPin, Clock, ArrowRight } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { places } from "@/lib/places-data"

export function SearchDialog() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState(places)

  useEffect(() => {
    if (query.trim() === "") {
      setResults(places)
    } else {
      const filtered = places.filter(
        (place) =>
          place.name.toLowerCase().includes(query.toLowerCase()) ||
          place.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
          place.category.toLowerCase().includes(query.toLowerCase()) ||
          place.location.toLowerCase().includes(query.toLowerCase()),
      )
      setResults(filtered)
    }
  }, [query])

  // Keyboard shortcut to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setOpen(true)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="hidden md:flex" aria-label="Search">
          <Search className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl p-0 gap-0">
        <DialogHeader className="p-4 border-b border-border">
          <DialogTitle className="sr-only">Search Places</DialogTitle>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search places, attractions, activities..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 pr-10 h-12 text-lg border-0 focus-visible:ring-0"
              autoFocus
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded"
              >
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            )}
          </div>
        </DialogHeader>
        <div className="max-h-96 overflow-y-auto p-2">
          {results.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-20" />
              <p>No places found for "{query}"</p>
              <p className="text-sm mt-1">Try searching for different keywords</p>
            </div>
          ) : (
            <div className="space-y-1">
              {results.map((place) => (
                <Link
                  key={place.id}
                  href={`/places/${place.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium group-hover:text-primary transition-colors truncate">{place.name}</h4>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="capitalize">{place.category}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {place.timing.split(" ")[0]}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="p-3 border-t border-border bg-muted/50 text-xs text-muted-foreground text-center">
          Press <kbd className="px-1.5 py-0.5 bg-background rounded border">Ctrl</kbd> +{" "}
          <kbd className="px-1.5 py-0.5 bg-background rounded border">K</kbd> to search
        </div>
      </DialogContent>
    </Dialog>
  )
}
