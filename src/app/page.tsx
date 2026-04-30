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
  title: 'SimplifAI | AI Receptionist for Service Businesses',
  description: 'SimplifAI Solutions builds custom AI receptionists for service businesses — HVAC, real estate, lawn care, auto detailing, and more. Answer calls 24/7, book jobs, and never miss a lead again.',
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
