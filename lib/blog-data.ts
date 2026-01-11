export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  category: "travel-tips" | "culture" | "seasonal" | "food" | "adventure"
  author: string
  date: string
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "best-time-visit-dehradun",
    title: "Best Time to Visit Dehradun: A Season-by-Season Guide",
    excerpt:
      "Discover the perfect time to plan your Dehradun trip based on weather, festivals, and activities available throughout the year.",
    content:
      "Dehradun enjoys a pleasant climate throughout most of the year, making it an ideal destination for all seasons. However, each season offers a unique experience...",
    image: "/dehradun-seasons-weather-mountains.jpg",
    category: "travel-tips",
    author: "Tourism Team",
    date: "December 15, 2025",
    readTime: "5 min read",
  },
  {
    id: "hidden-gems-dehradun",
    title: "10 Hidden Gems of Dehradun That Most Tourists Miss",
    excerpt: "Beyond the popular attractions lie secret spots that offer authentic experiences and breathtaking views.",
    content:
      "While Robber's Cave and FRI are must-visits, Dehradun has many lesser-known treasures waiting to be explored...",
    image: "/hidden-waterfall-forest-dehradun.jpg",
    category: "adventure",
    author: "Local Guide",
    date: "December 10, 2025",
    readTime: "8 min read",
  },
  {
    id: "garhwali-cuisine-guide",
    title: "A Food Lover's Guide to Garhwali Cuisine",
    excerpt: "Explore the rich culinary heritage of Uttarakhand with these traditional Garhwali dishes you must try.",
    content:
      "Garhwali cuisine is a reflection of the region's geography and culture. Simple yet flavorful, these dishes have sustained mountain communities for centuries...",
    image: "/indian-traditional-food-thali.jpg",
    category: "food",
    author: "Food Writer",
    date: "December 5, 2025",
    readTime: "6 min read",
  },
  {
    id: "monsoon-magic-dehradun",
    title: "Monsoon Magic: Experiencing Dehradun in the Rains",
    excerpt: "Why the monsoon season might be the best-kept secret for experiencing Dehradun's natural beauty.",
    content: "When the monsoon clouds roll over the Shivalik hills, Dehradun transforms into a lush green paradise...",
    image: "/monsoon-rain-mountains-green-valley.jpg",
    category: "seasonal",
    author: "Nature Writer",
    date: "November 28, 2025",
    readTime: "4 min read",
  },
  {
    id: "tibetan-culture-dehradun",
    title: "Tibetan Heritage: Exploring Buddhist Culture in Dehradun",
    excerpt: "Discover the vibrant Tibetan community and their rich cultural contributions to Dehradun.",
    content:
      "Clement Town in Dehradun is home to one of the largest Tibetan settlements in India. The community has preserved their traditions while sharing their culture with visitors...",
    image: "/tibetan-monastery-buddhist-prayer-flags.jpg",
    category: "culture",
    author: "Cultural Expert",
    date: "November 20, 2025",
    readTime: "7 min read",
  },
  {
    id: "weekend-itinerary-dehradun",
    title: "Perfect 3-Day Dehradun Weekend Itinerary",
    excerpt: "Make the most of your short trip with this carefully planned itinerary covering the best of Dehradun.",
    content:
      "A weekend in Dehradun can be magical if planned right. Here's how to experience the best of nature, heritage, and spirituality in just three days...",
    image: "/travel-planning-map-backpack-adventure.jpg",
    category: "travel-tips",
    author: "Travel Planner",
    date: "November 15, 2025",
    readTime: "10 min read",
  },
]

export const blogCategories = [
  { id: "all", name: "All Posts" },
  { id: "travel-tips", name: "Travel Tips" },
  { id: "culture", name: "Culture & Heritage" },
  { id: "seasonal", name: "Seasonal Guides" },
  { id: "food", name: "Food & Cuisine" },
  { id: "adventure", name: "Adventure" },
]
