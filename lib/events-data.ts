export interface Event {
  id: string
  title: string
  description: string
  date: string
  endDate?: string
  location: string
  category: "festival" | "cultural" | "fair" | "religious"
  image: string
  highlights: string[]
}

export const events: Event[] = [
  {
    id: "makar-sankranti",
    title: "Makar Sankranti",
    description:
      "Celebrate the harvest festival with kite flying, traditional sweets, and bonfires. The skies of Dehradun fill with colorful kites as families gather to celebrate.",
    date: "January 14, 2026",
    location: "Throughout Dehradun",
    category: "festival",
    image: "/kite-flying-festival-colorful-sky.jpg",
    highlights: ["Kite Flying Competitions", "Traditional Sweets", "Bonfires", "Community Gatherings"],
  },
  {
    id: "basant-panchami",
    title: "Basant Panchami",
    description:
      "The festival of spring dedicated to Goddess Saraswati. Schools, colleges, and temples organize special prayers and cultural programs.",
    date: "February 2, 2026",
    location: "Temples across Dehradun",
    category: "religious",
    image: "/yellow-flowers-spring-festival-temple.jpg",
    highlights: ["Saraswati Puja", "Yellow Dress Code", "Music & Art Programs", "Temple Visits"],
  },
  {
    id: "holi",
    title: "Holi - Festival of Colors",
    description:
      "Experience the vibrant festival of colors in the valley. The celebration begins with Holika Dahan and continues with colorful revelry.",
    date: "March 14, 2026",
    endDate: "March 15, 2026",
    location: "Throughout Uttarakhand",
    category: "festival",
    image: "/holi-festival-colors-celebration-india.jpg",
    highlights: ["Holika Dahan Bonfire", "Color Play", "Traditional Music", "Special Delicacies"],
  },
  {
    id: "buddha-purnima",
    title: "Buddha Purnima",
    description:
      "A significant celebration at Mindrolling Monastery and other Buddhist centers. Experience prayers, processions, and teachings.",
    date: "May 12, 2026",
    location: "Mindrolling Monastery, Clement Town",
    category: "religious",
    image: "/buddha-purnima-monastery-celebration-candles.jpg",
    highlights: ["Prayer Ceremonies", "Processions", "Vegetarian Feasts", "Cultural Programs"],
  },
  {
    id: "diwali",
    title: "Diwali - Festival of Lights",
    description:
      "The city illuminates with millions of diyas and lights. Markets bustle with shoppers, and homes are decorated beautifully.",
    date: "October 20, 2026",
    endDate: "October 24, 2026",
    location: "Throughout Dehradun",
    category: "festival",
    image: "/diwali-festival-lights-diyas-decorations.jpg",
    highlights: ["Light Decorations", "Lakshmi Puja", "Fireworks", "Shopping Festivals", "Sweet Exchanges"],
  },
  {
    id: "tapkeshwar-mela",
    title: "Tapkeshwar Fair",
    description:
      "Annual fair at the famous Tapkeshwar Temple during Shivratri. Thousands of devotees gather for this spiritual celebration.",
    date: "February 26, 2026",
    location: "Tapkeshwar Temple, Garhi Cantt",
    category: "fair",
    image: "/hindu-temple-fair-devotees-celebration.jpg",
    highlights: ["Special Prayers", "Cultural Performances", "Local Handicrafts", "Food Stalls"],
  },
  {
    id: "jhanda-mela",
    title: "Jhanda Mela",
    description:
      "A five-day fair held at the Guru Ram Rai Darbar since 1699. One of the oldest and largest fairs in Uttarakhand.",
    date: "March 20, 2026",
    endDate: "March 25, 2026",
    location: "Guru Ram Rai Darbar Sahib",
    category: "fair",
    image: "/indian-fair-market-colorful-stalls.jpg",
    highlights: ["Flag Hoisting Ceremony", "Cultural Events", "Trade Fair", "Religious Gatherings"],
  },
  {
    id: "uttarakhand-day",
    title: "Uttarakhand Foundation Day",
    description:
      "Celebrate the formation of Uttarakhand state with cultural programs, exhibitions, and patriotic events.",
    date: "November 9, 2026",
    location: "Parade Ground, Dehradun",
    category: "cultural",
    image: "/cultural-parade-celebration-traditional-dress.jpg",
    highlights: ["State Parade", "Cultural Performances", "Folk Music & Dance", "Exhibitions"],
  },
]

export const eventCategories = [
  { id: "all", name: "All Events" },
  { id: "festival", name: "Festivals" },
  { id: "religious", name: "Religious" },
  { id: "fair", name: "Fairs & Melas" },
  { id: "cultural", name: "Cultural" },
]
