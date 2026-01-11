import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturedPlaces } from "@/components/featured-places"
import { HighlightsSection } from "@/components/highlights-section"
import { ReviewsSection } from "@/components/reviews-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedPlaces />
        <HighlightsSection />
        <ReviewsSection />
        <NewsletterSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
