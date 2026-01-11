"use client"

import type React from "react"
import { useState } from "react"
import { Mail, CheckCircle, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLoading(false)
    setSubscribed(true)
    setEmail("")
  }

  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center text-primary-foreground">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Stay Updated</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-primary-foreground/80 mb-8">
            Get the latest travel tips, seasonal offers, event updates, and exclusive guides delivered straight to your
            inbox.
          </p>

          {subscribed ? (
            <div className="bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-xl">
              <CheckCircle className="h-16 w-16 mx-auto mb-4 text-primary-foreground" />
              <h3 className="text-xl font-serif font-bold mb-2">Welcome Aboard!</h3>
              <p className="text-primary-foreground/80">
                Thank you for subscribing. Check your inbox for a confirmation email and get ready to explore Dehradun!
              </p>
              <Button
                variant="outline"
                className="mt-6 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => setSubscribed(false)}
              >
                Subscribe Another Email
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10 h-12 bg-primary-foreground text-foreground"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="bg-accent text-accent-foreground hover:bg-accent/90 h-12"
              >
                {loading ? (
                  "Subscribing..."
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          )}

          <p className="text-xs text-primary-foreground/60 mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
