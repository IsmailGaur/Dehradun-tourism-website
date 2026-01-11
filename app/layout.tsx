import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Dehradun Tourism | Gateway to the Himalayas",
  description:
    "Discover the beauty of Dehradun, Uttarakhand. Explore nature, heritage, spiritual sites, and plan your perfect Himalayan getaway.",
  keywords: ["Dehradun", "Tourism", "Uttarakhand", "Himalayas", "Travel", "India"],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_playfair.variable} ${_inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
