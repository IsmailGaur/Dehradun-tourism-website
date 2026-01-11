"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Mountain, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SearchDialog } from "@/components/search-dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/places", label: "Places" },
  {
    label: "Explore",
    children: [
      { href: "/blog", label: "Travel Blog" },
      { href: "/events", label: "Events & Festivals" },
      { href: "/gallery", label: "Photo & Video Gallery" },
    ],
  },
  { href: "/travel-guide", label: "Travel Guide" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Mountain className="h-8 w-8 text-primary" />
            <span className="text-xl font-serif font-bold text-foreground">Dehradun</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.children ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors font-medium">
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild>
                        <Link href={child.href}>{child.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ),
            )}
            <SearchDialog />
            <Button asChild>
              <Link href="/contact">Plan Your Trip</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <SearchDialog />
            <button className="p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="space-y-2">
                    <span className="text-sm font-medium text-muted-foreground px-2">{link.label}</span>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block text-muted-foreground hover:text-primary transition-colors font-medium py-2 pl-4"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ),
              )}
              <Button asChild className="w-full mt-2">
                <Link href="/contact">Plan Your Trip</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
