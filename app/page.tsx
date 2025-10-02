import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Welcome } from "@/components/welcome"
import { Locations } from "@/components/locations"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Welcome />
      <Locations />
      <Footer />
    </main>
  )
}
