import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/mussoorie-mountains-dehradun-sunset-panorama.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">
          Ready to Explore Dehradun?
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto text-pretty">
          Start planning your perfect Himalayan getaway today. From travel tips to must-see attractions, we have
          everything you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild className="text-lg px-8">
            <Link href="/travel-guide">Get Travel Guide</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
