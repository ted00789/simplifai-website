import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ProblemSolutionSection from '@/components/ProblemSolutionSection'
import DemoSection from '@/components/DemoSection'
import Calculator from '@/components/Calculator'
import HowItWorks from '@/components/HowItWorks'
import CompetitorsCTA from '@/components/CompetitorsCTA'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AI Receptionist for Service Businesses | SimplifAI Solutions',
  description: 'SimplifAI builds custom AI receptionists that answer calls 24/7, qualify leads, and book appointments for service businesses. Never miss a customer again.',
  alternates: { canonical: 'https://simplifai-solutions.com/' },
}

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <Hero />
      <ProblemSolutionSection />
      <DemoSection />
      <Calculator />
      <HowItWorks />
      <CompetitorsCTA />
      <FAQSection />
      <Footer />
    </main>
  )
}
