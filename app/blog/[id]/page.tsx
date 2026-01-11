import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { blogPosts } from "@/lib/blog-data"
import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsletterSection } from "@/components/newsletter-section"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function generateStaticParams() {
  return blogPosts.map((post) => ({ id: post.id }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = blogPosts.find((p) => p.id === id)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 2)

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Image */}
        <section className="relative h-[50vh] min-h-[400px]">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </section>

        {/* Article Content */}
        <section className="relative -mt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{post.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 border border-border">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                {post.category.replace("-", " ")}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mt-2 mb-6">{post.title}</h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>
                <p className="leading-relaxed">{post.content}</p>
                <p className="leading-relaxed mt-4">
                  Dehradun, nestled in the lap of the Himalayas, offers a unique blend of natural beauty, cultural
                  heritage, and modern amenities. Whether you're seeking adventure, spirituality, or simply a peaceful
                  retreat, this city has something for everyone.
                </p>
                <p className="leading-relaxed mt-4">
                  The best experiences in Dehradun often come from exploring beyond the usual tourist spots. Take time
                  to walk through local markets, interact with residents, and savor the authentic flavors of Garhwali
                  cuisine. Each season brings its own charm, from the blooming flowers of spring to the misty mornings
                  of winter.
                </p>
                <p className="leading-relaxed mt-4">
                  We recommend planning your trip with flexibility, allowing room for spontaneous discoveries. The
                  valley has many secrets waiting to be uncovered by those who venture off the beaten path.
                </p>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-border">
                <span className="text-sm font-medium">Share this article:</span>
                <Button variant="outline" size="icon" aria-label="Share on Facebook">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" aria-label="Share on Twitter">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" aria-label="Share">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-serif font-bold mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.id}
                      href={`/blog/${related.id}`}
                      className="group flex gap-4 bg-card rounded-lg p-4 border border-border hover:shadow-md transition-shadow"
                    >
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0">
                        <Image
                          src={related.image || "/placeholder.svg"}
                          alt={related.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold group-hover:text-primary transition-colors line-clamp-2">
                          {related.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">{related.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Blog */}
            <div className="mt-8">
              <Button variant="outline" asChild>
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}
