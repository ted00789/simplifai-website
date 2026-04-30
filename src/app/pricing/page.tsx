import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PricingSection from '@/components/PricingSection'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Pricing | SimplifAI Solutions',
  description: 'Transparent pricing for AI receptionist, AI chatbot, and custom website services. Starting at $297/month. No contracts. Cancel any time.',
  alternates: { canonical: 'https://simplifai-solutions.com/pricing/' },
}

export default function PricingPage() {
  return (
    <main>
      <Navigation />
      <div style={{ paddingTop: '64px' }}>
        <PricingSection />
        <FAQSection />
      </div>
      <Footer />
    </main>
  )
}
