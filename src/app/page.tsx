import { Navbar } from '@/components/sections/navbar'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Results } from '@/components/sections/results'
import { Pricing } from '@/components/sections/pricing'
import { FAQ } from '@/components/sections/faq'
import { CTA } from '@/components/sections/cta'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Services />
      <Results />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
