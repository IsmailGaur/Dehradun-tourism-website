export interface Place {
  id: string
  name: string
  category: "nature" | "religious" | "heritage" | "excursion"
  shortDescription: string
  fullDescription: string
  image: string
  gallery: string[]
  highlights: string[]
  timing: string
  entryFee: string
  bestTime: string
  location: string
  tips: string[]
}

export const places: Place[] = [
  {
    id: "robbers-cave",
    name: "Robber's Cave (Gucchu Pani)",
    category: "nature",
    shortDescription: "A natural cave formation with a river flowing through it",
    fullDescription:
      "Robber's Cave, locally known as Gucchu Pani, is a natural cave formation located about 8 km from Dehradun. The cave is 600 meters long and features a cold stream running through it. Visitors wade through the ankle-deep water while exploring the narrow gorge with towering rock walls on either side. The cave gets its name from the legend that robbers used to hide here during the British era.",
    image: "/robbers-cave-dehradun-river-rocks-natural-cave-for.jpg",
    gallery: ["/robbers-cave-entrance-dehradun.jpg", "/river-flowing-through-cave-rocks.jpg", "/tourists-wading-through-cave-stream.jpg"],
    highlights: [
      "600m long natural cave",
      "Cold water stream",
      "Unique geological formation",
      "Family-friendly adventure",
    ],
    timing: "7:00 AM - 6:00 PM",
    entryFee: "₹25 per person",
    bestTime: "March to June, September to November",
    location: "Anarwala, Dehradun",
    tips: ["Wear waterproof footwear", "Carry extra clothes", "Visit early morning to avoid crowds"],
  },
  {
    id: "sahastradhara",
    name: "Sahastradhara",
    category: "nature",
    shortDescription: "Thousand-fold spring with medicinal sulphur waters",
    fullDescription:
      "Sahastradhara, meaning 'thousand-fold spring', is located 14 km from Dehradun. The area features sulphur springs that cascade down limestone stalactites, creating a stunning visual spectacle. The waters are believed to have medicinal properties, particularly beneficial for skin ailments. The site also offers a ropeway ride providing panoramic views of the valley.",
    image: "/sahastradhara-dehradun-waterfalls-sulphur-springs.jpg",
    gallery: ["/sulphur-water-falls-limestone.jpg", "/ropeway-cable-car-dehradun-hills.jpg", "/natural-pool-mountain-stream.jpg"],
    highlights: ["Medicinal sulphur springs", "Ropeway ride", "Limestone formations", "Natural bathing pools"],
    timing: "6:00 AM - 7:00 PM",
    entryFee: "Free (Ropeway: ₹100)",
    bestTime: "March to June",
    location: "Sahastradhara Road, Dehradun",
    tips: ["Carry swimming attire", "Try the ropeway for views", "Best visited after monsoon"],
  },
  {
    id: "tapkeshwar-temple",
    name: "Tapkeshwar Temple",
    category: "religious",
    shortDescription: "Ancient cave temple dedicated to Lord Shiva",
    fullDescription:
      "Tapkeshwar Temple is an ancient cave temple dedicated to Lord Shiva, located on the banks of a seasonal stream. The temple gets its name from the natural spring that drips (tapak) water onto the Shivling inside the cave. The serene atmosphere and the sound of flowing water create a spiritually uplifting experience. The temple is particularly crowded during Shivratri.",
    image: "/tapkeshwar-temple-dehradun-shiva-cave-temple.jpg",
    gallery: ["/shivling-inside-cave-temple.jpg", "/temple-entrance-stream-flowing.jpg", "/placeholder.svg?height=600&width=800"],
    highlights: ["Natural dripping spring", "Ancient cave shrine", "Peaceful atmosphere", "Riverside location"],
    timing: "6:00 AM - 8:00 PM",
    entryFee: "Free",
    bestTime: "Year-round (Special: Shivratri)",
    location: "Garhi Cantt, Dehradun",
    tips: ["Visit during early morning aarti", "Modest dress required", "Remove footwear before entering"],
  },
  {
    id: "forest-research-institute",
    name: "Forest Research Institute (FRI)",
    category: "heritage",
    shortDescription: "Colonial-era institute with stunning Greco-Roman architecture",
    fullDescription:
      "The Forest Research Institute is one of the oldest and largest forestry research institutes in the world. Built during the British Raj in 1906, the institute features magnificent Greco-Roman architecture spread across 450 hectares. The main building is a masterpiece with its pillared corridors, botanical gardens, and six museums showcasing forestry, entomology, pathology, and more.",
    image: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    highlights: ["Greco-Roman architecture", "Six specialized museums", "Botanical gardens", "Historic significance"],
    timing: "9:30 AM - 5:00 PM (Closed on Mondays)",
    entryFee: "₹40 (Indians), ₹250 (Foreigners)",
    bestTime: "October to March",
    location: "Chakrata Road, Dehradun",
    tips: ["Plan 2-3 hours for complete visit", "Photography permitted", "Guided tours available"],
  },
  {
    id: "mindrolling-monastery",
    name: "Mindrolling Monastery",
    category: "religious",
    shortDescription: "One of the largest Buddhist centers in India",
    fullDescription:
      "Mindrolling Monastery, established in 1965, is one of the largest Buddhist centers in India and a major Nyingmapa institution. The monastery complex includes the magnificent Great Stupa, standing 185 feet tall, adorned with stunning Buddhist murals and golden statues. The peaceful atmosphere and beautiful gardens make it a perfect place for meditation and spiritual reflection.",
    image: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    highlights: ["185-ft Great Stupa", "Tibetan Buddhist murals", "Beautiful gardens", "Meditation center"],
    timing: "9:00 AM - 5:00 PM",
    entryFee: "Free",
    bestTime: "October to March",
    location: "Clement Town, Dehradun",
    tips: ["Maintain silence inside stupa", "Photography restricted in main shrine", "Visit the handicraft shop"],
  },
  {
    id: "mussoorie",
    name: "Mussoorie",
    category: "excursion",
    shortDescription: "Queen of Hills - a popular hill station just 35km away",
    fullDescription:
      "Mussoorie, often called the 'Queen of Hills', is a charming hill station located just 35 km from Dehradun. At an altitude of 2,000 meters, it offers breathtaking views of the Himalayas and the Doon Valley. Key attractions include Mall Road, Kempty Falls, Gun Hill, and Lal Tibba. The town's colonial heritage is visible in its architecture and ambiance.",
    image: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    highlights: ["Himalayan panoramic views", "Colonial architecture", "Mall Road shopping", "Multiple viewpoints"],
    timing: "Open 24 hours",
    entryFee: "Varies by attraction",
    bestTime: "March to June, September to November",
    location: "35 km from Dehradun",
    tips: [
      "Book hotels in advance during peak season",
      "Visit Landour for quieter experience",
      "Try local Maggi and chai",
    ],
  },
  {
    id: "rajaji-national-park",
    name: "Rajaji National Park",
    category: "nature",
    shortDescription: "Wildlife sanctuary home to elephants, tigers, and diverse flora",
    fullDescription:
      "Rajaji National Park, spread across 820 sq km, is a renowned wildlife sanctuary that is home to Asian elephants, Bengal tigers, leopards, and over 400 species of birds. The park lies along the foothills of the Himalayas and offers jungle safaris, elephant spotting, and birdwatching opportunities. The Ganges and its tributaries flow through the park, adding to its biodiversity.",
    image: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    highlights: ["Asian elephant sightings", "Jungle safaris", "Birdwatching", "Scenic river views"],
    timing: "6:00 AM - 6:00 PM (Nov - June)",
    entryFee: "₹150 (Indians), ₹600 (Foreigners)",
    bestTime: "November to June",
    location: "Haridwar Road, Dehradun",
    tips: ["Book safari in advance", "Carry binoculars", "Wear earth-toned clothing"],
  },
  {
    id: "lakshman-siddh-temple",
    name: "Lakshman Siddh Temple",
    category: "religious",
    shortDescription: "Historic temple with natural sulphur spring",
    fullDescription:
      "Lakshman Siddh Temple is an ancient temple located about 12 km from Dehradun. The temple is dedicated to Lord Shiva and features a natural sulphur spring believed to have healing properties. Legend has it that Lord Lakshman meditated here during the exile period. The temple complex offers a tranquil environment surrounded by hills and forests.",
    image: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    highlights: ["Natural sulphur spring", "Mythological significance", "Hilltop location", "Panoramic views"],
    timing: "5:00 AM - 8:00 PM",
    entryFee: "Free",
    bestTime: "Year-round",
    location: "Raipur Road, Dehradun",
    tips: ["Carry swimming attire for spring", "Visit during sunrise", "Combine with Robber's Cave trip"],
  },
]

export const categories = [
  { id: "all", name: "All Places", description: "Explore all attractions" },
  { id: "nature", name: "Nature & Sightseeing", description: "Waterfalls, caves, and natural wonders" },
  { id: "religious", name: "Religious & Spiritual", description: "Temples, monasteries, and sacred sites" },
  { id: "heritage", name: "Heritage & Educational", description: "Museums, institutes, and historic sites" },
  { id: "excursion", name: "Nearby Excursions", description: "Day trips and weekend getaways" },
]
