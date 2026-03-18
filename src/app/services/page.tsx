import type { Metadata } from 'next'
import { Navbar } from '@/components/sections/navbar'
import { ServicesHero } from '@/components/sections/services-page/services-hero'
import { AiVsHuman } from '@/components/sections/services-page/ai-vs-human'
import { AgentTypes } from '@/components/sections/services-page/agent-types'
import { ImplementationTimeline } from '@/components/sections/services-page/implementation-timeline'
import { SecurityFeatures } from '@/components/sections/services-page/security-features'
import { CTA } from '@/components/sections/cta'
import { Footer } from '@/components/sections/footer'

export const metadata: Metadata = {
  title: 'AI Employees & Automation Services | Ask Geoffrey AI',
  description:
    'Deploy AI employees that work 24/7 at a fraction of the cost. Content, Sales, Support, Development, and Operations agents tailored to your business.',
}

export default function ServicesPage() {
  return (
    <main className="bg-black">
      <Navbar />
      <ServicesHero />
      <AiVsHuman />
      <AgentTypes />
      <ImplementationTimeline />
      <SecurityFeatures />
      <CTA />
      <Footer />
    </main>
  )
}
