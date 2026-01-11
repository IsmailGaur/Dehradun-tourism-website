"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { blogPosts, blogCategories } from "@/lib/blog-data"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsletterSection } from "@/components/newsletter-section"

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredPosts =
    activeCategory === "all" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  const featuredPost = blogPosts[0]
  const regularPosts = filteredPosts.filter((post) => post.id !== featuredPost.id)

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4">Travel Blog</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Stories, guides, and tips to help you explore and experience the best of Dehradun
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-border sticky top-16 bg-background z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {blogCategories.map((category) => (
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

        {/* Featured Post */}
        {activeCategory === "all" && (
          <section className="py-12 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link
                href={`/blog/${featuredPost.id}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                      Featured
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-primary text-sm font-medium tracking-wider uppercase">
                    {featuredPost.category.replace("-", " ")}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold mt-2 mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Button className="group/btn">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="py-12 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(activeCategory === "all" ? regularPosts : filteredPosts).map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-border"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                        {post.category.replace("-", " ")}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}
