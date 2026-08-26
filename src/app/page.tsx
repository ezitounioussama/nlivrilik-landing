import { JsonLd } from "@/components/json-ld"
import { Cta } from "@/components/sections/cta"
import { Faq } from "@/components/sections/faq"
import { Footer } from "@/components/sections/footer"
import { Hero } from "@/components/sections/hero"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Navbar } from "@/components/sections/navbar"
import { Services } from "@/components/sections/services"
import { Stats } from "@/components/sections/stats"
import { Testimonials } from "@/components/sections/testimonials"
import { WhatsAppFab } from "@/components/whatsapp-fab"

export default function Home() {
  return (
    <main className="flex-1">
      <JsonLd />
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
      <WhatsAppFab />
    </main>
  )
}
