import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MapPin, Users, BookOpen, Mountain, Building, Leaf } from "lucide-react"

const facts = [
  { icon: MapPin, label: "Altitude", value: "640 meters" },
  { icon: Users, label: "Population", value: "8+ Lakhs" },
  { icon: BookOpen, label: "Famous For", value: "Education Hub" },
  { icon: Mountain, label: "Location", value: "Doon Valley" },
]

const timeline = [
  {
    year: "1699",
    title: "Foundation",
    description: "Dehradun was founded by Guru Ram Rai, a Sikh guru who settled in the valley.",
  },
  {
    year: "1816",
    title: "British Rule",
    description: "The region came under British control after the Anglo-Nepalese War.",
  },
  {
    year: "1878",
    title: "Survey of India",
    description: "The Survey of India headquarters was established, marking scientific importance.",
  },
  {
    year: "1906",
    title: "FRI Established",
    description: "Forest Research Institute founded, becoming Asia's largest forestry institute.",
  },
  {
    year: "2000",
    title: "State Capital",
    description: "Dehradun became the interim capital of the newly formed Uttarakhand state.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4">About Dehradun</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Discover the rich history, geography, and culture of the Queen of Doon Valley
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary text-sm font-medium tracking-wider uppercase">The Gateway City</span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold mt-2 mb-6">Nestled in the Doon Valley</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Dehradun, the capital of Uttarakhand, lies in the picturesque Doon Valley, cradled between the mighty
                  Himalayas to the north and the Shivalik hills to the south. The city is blessed with a unique
                  geography where the Ganges flows to its east and the Yamuna to its west.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Known for its pleasant climate, prestigious educational institutions, and rich cultural heritage,
                  Dehradun has been a favored destination since the British era. Today, it serves as the gateway to some
                  of North India's most scenic destinations including Mussoorie, Rishikesh, and the Char Dham pilgrimage
                  circuit.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {facts.map((fact, index) => (
                    <div key={index} className="text-center p-4 bg-secondary rounded-lg">
                      <fact.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                      <div className="text-lg font-bold">{fact.value}</div>
                      <div className="text-xs text-muted-foreground">{fact.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=1000"
                  alt="Doon Valley aerial view"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section className="py-16 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Heritage</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mt-2">Historical Journey</h2>
            </div>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} hidden md:block`}>
                      {index % 2 === 0 && (
                        <div className="bg-card p-6 rounded-lg shadow-sm inline-block">
                          <h3 className="text-xl font-serif font-bold text-primary">{item.title}</h3>
                          <p className="text-muted-foreground mt-2">{item.description}</p>
                        </div>
                      )}
                    </div>
                    <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-primary rounded-full -translate-x-1/2 flex items-center justify-center text-primary-foreground text-xs font-bold z-10">
                      {item.year.slice(2)}
                    </div>
                    <div className="flex-1 ml-12 md:ml-0">
                      <div className="md:hidden bg-card p-6 rounded-lg shadow-sm">
                        <div className="text-sm text-primary font-medium">{item.year}</div>
                        <h3 className="text-xl font-serif font-bold">{item.title}</h3>
                        <p className="text-muted-foreground mt-2">{item.description}</p>
                      </div>
                      {index % 2 !== 0 && (
                        <div className="hidden md:block bg-card p-6 rounded-lg shadow-sm">
                          <h3 className="text-xl font-serif font-bold text-primary">{item.title}</h3>
                          <p className="text-muted-foreground mt-2">{item.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Aspects */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Identity</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mt-2">What Defines Dehradun</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-lg shadow-sm border border-border text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Education Hub</h3>
                <p className="text-muted-foreground">
                  Home to prestigious institutions like IMA, FRI, Doon School, and UPES. A city that shapes future
                  leaders and professionals.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-sm border border-border text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Colonial Legacy</h3>
                <p className="text-muted-foreground">
                  British-era architecture, hill station culture, and institutions that continue to define the city's
                  unique character.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-sm border border-border text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Natural Beauty</h3>
                <p className="text-muted-foreground">
                  Blessed with forests, rivers, caves, and waterfalls. A perfect blend of urban amenities and natural
                  serenity.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
