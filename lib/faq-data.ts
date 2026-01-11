export interface FAQ {
  id: string
  question: string
  answer: string
  category: "general" | "travel" | "accommodation" | "safety" | "weather"
}

export const faqs: FAQ[] = [
  {
    id: "best-time",
    question: "What is the best time to visit Dehradun?",
    answer:
      "The best time to visit Dehradun is from March to June (pleasant spring/summer) and September to November (post-monsoon autumn). March-June offers temperatures between 20-35°C, ideal for sightseeing. September-November provides clear skies and comfortable weather. While monsoon (July-August) brings lush greenery, it may disrupt travel plans. Winter (December-February) is cold but perfect for those who enjoy misty mornings.",
    category: "weather",
  },
  {
    id: "reach-dehradun",
    question: "How can I reach Dehradun?",
    answer:
      "Dehradun is well-connected by all modes of transport. By Air: Jolly Grant Airport is 20 km from the city with flights from Delhi, Mumbai, and other major cities. By Train: Dehradun Railway Station connects to Delhi, Mumbai, Kolkata, and other cities. By Road: Regular buses and taxis from Delhi (250 km), Haridwar (52 km), and other nearby cities. The drive from Delhi takes approximately 5-6 hours via NH 58.",
    category: "travel",
  },
  {
    id: "local-transport",
    question: "What are the local transportation options in Dehradun?",
    answer:
      "Local transportation includes auto-rickshaws (most common), Vikram tempos (shared autos on fixed routes), city buses, app-based cabs (Ola, Uber), and rental cars/bikes. For visiting nearby attractions, hiring a taxi for the day is recommended. Rates should be negotiated beforehand for auto-rickshaws.",
    category: "travel",
  },
  {
    id: "accommodation",
    question: "What types of accommodation are available?",
    answer:
      "Dehradun offers accommodation for all budgets. Luxury hotels like Lemon Tree and Fairfield by Marriott, mid-range options like Hotel Padmini and Hotel Madhuban, budget hotels and guesthouses in Rajpur Road and Clock Tower areas, and homestays for authentic experiences. Book in advance during peak season (May-June) and festivals.",
    category: "accommodation",
  },
  {
    id: "places-nearby",
    question: "What places can I visit near Dehradun?",
    answer:
      "Nearby attractions include Mussoorie (35 km) - the Queen of Hills, Rishikesh (43 km) - yoga and adventure capital, Haridwar (52 km) - holy city on the Ganges, Chakrata (90 km) - offbeat hill station, and Dhanaulti (60 km) - peaceful eco-tourism spot. Day trips to these places are easily manageable from Dehradun.",
    category: "general",
  },
  {
    id: "safety",
    question: "Is Dehradun safe for tourists?",
    answer:
      "Dehradun is generally very safe for tourists, including solo travelers and families. The city has low crime rates and locals are known for their hospitality. However, standard precautions apply: avoid isolated areas after dark, keep valuables secure, use registered taxis, and carry emergency contact numbers. For adventure activities like trekking, always go with certified guides.",
    category: "safety",
  },
  {
    id: "local-food",
    question: "What local foods should I try?",
    answer:
      "Must-try local dishes include Kafuli (green leafy vegetable curry), Chainsoo (black gram dal), Phaanu (lentil stew), Bal Mithai (chocolate-like sweet), Singori (sweet wrapped in Maalu leaf), and Aloo ke Gutke (spiced potatoes). For street food, try the local momos, chaat at Paltan Bazaar, and bakery items from old establishments like Ellora's.",
    category: "general",
  },
  {
    id: "atm-banking",
    question: "Are ATMs and banking facilities easily available?",
    answer:
      "Yes, Dehradun has excellent banking infrastructure with ATMs available throughout the city, especially along Rajpur Road, Clock Tower, and major market areas. All major banks have branches here. UPI payments are widely accepted at shops, restaurants, and hotels. Carry some cash for remote attractions and small vendors.",
    category: "general",
  },
  {
    id: "mobile-connectivity",
    question: "How is the mobile network and internet connectivity?",
    answer:
      "All major mobile networks (Jio, Airtel, Vi, BSNL) work well in Dehradun city. 4G/5G coverage is available in most areas. Network may be weak in remote attractions like caves and forests. Most hotels and cafes offer Wi-Fi. For uninterrupted connectivity during travel, carry a portable power bank.",
    category: "general",
  },
  {
    id: "monsoon-travel",
    question: "Should I avoid visiting during monsoon?",
    answer:
      "Monsoon (July-August) has pros and cons. Pros: Lush green landscapes, fewer crowds, lower prices, and pleasant temperatures. Cons: Potential for landslides on hilly routes, some attractions may close temporarily, and outdoor activities may be restricted. If visiting during monsoon, check weather forecasts, avoid river activities, and keep flexible itinerary.",
    category: "weather",
  },
  {
    id: "medical-facilities",
    question: "What medical facilities are available?",
    answer:
      "Dehradun has excellent healthcare facilities including government hospitals like Doon Hospital, private hospitals like Max and Synergy, numerous clinics and pharmacies throughout the city. For emergencies, dial 108 for ambulance service. Carry basic medications and any prescriptions you might need.",
    category: "safety",
  },
  {
    id: "shopping",
    question: "What are the best places to shop in Dehradun?",
    answer:
      "Popular shopping destinations include Paltan Bazaar (traditional market, textiles, handicrafts), Rajpur Road (modern shops, malls), Tibetan Market (Tibetan handicrafts, woolens), Astley Hall (local products), and Pacific Mall (branded stores). Local specialties to buy include woolens, Tibetan artifacts, forest produce, and local sweets.",
    category: "general",
  },
]

export const faqCategories = [
  { id: "all", name: "All Questions" },
  { id: "general", name: "General" },
  { id: "travel", name: "Travel & Transport" },
  { id: "accommodation", name: "Accommodation" },
  { id: "weather", name: "Weather & Seasons" },
  { id: "safety", name: "Safety & Health" },
]
