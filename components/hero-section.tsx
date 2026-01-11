import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/dehradun-himalayan-mountains-sunrise-valley-scenic.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-card">
        <div className="flex items-center justify-center gap-2 mb-6">
          <MapPin className="h-5 w-5" />
          <span className="text-sm tracking-wider uppercase">Uttarakhand, India</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-6 text-balance">
          Discover the Magic of
          <span className="block mt-2">Dehradun</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-card/90 text-pretty leading-relaxed">
          Gateway to the Himalayas. Where misty mountains meet ancient temples, and every path leads to a new adventure.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="text-lg px-8">
            <Link href="/places">
              Explore Places
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="text-lg px-8 bg-card/10 border-card text-card hover:bg-card hover:text-foreground"
          >
            <Link href="/travel-guide">Plan Your Trip</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-card/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-card/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}
