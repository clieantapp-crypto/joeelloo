import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const locations = [
  {
    name: "Mirdif - Mirdif Avenue Mall",
    address: "Mirdif Avenue Mall, Ground Floor",
    city: "Dubai, UAE",
    mapUrl: "/Index+Image1.jpg",
  },
  {
    name: "Burjuman - BurJuman",
    address: "BurJuman Shopping Centre, Ground Floor",
    city: "Dubai, UAE",
    mapUrl: "/Index+Image3.jpg",
  },
  {
    name: "Dubai Mall",
    address: "The Dubai Mall, Ground Floor",
    city: "Dubai, UAE",
    mapUrl: "/Index+ImageB1.jpg",
  },
  {
    name: "Ibn Battuta Mall",
    address: "Ibn Battuta Mall, Ground Floor",
    city: "Dubai, UAE",
    mapUrl: "/Index+ImageB2.jpg",
  },
 
]

export function Locations() {
  return (
    <section id="locations" className="py-12 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12 md:mb-16">Our Locations</h2>

        <div className="space-y-12 md:space-y-16 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <div key={index} className="bg-background rounded-sm overflow-hidden shadow-sm">
              <div className="relative w-full aspect-[16/9] bg-muted">
                <img
                  src={location.mapUrl || "/placeholder.svg"}
                  alt={`Map of ${location.name}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="font-serif text-xl md:text-2xl mb-2">{location.name}</h3>
                <p className="text-sm text-muted-foreground mb-1">{location.address}</p>
                <p className="text-sm text-muted-foreground mb-6">{location.city}</p>

                <Button className="w-full md:w-auto" variant="default">
                  DIRECTIONS
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
