import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PricingSection from '@/components/PricingSection'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'AI Receptionist Pricing | SimplifAI Solutions',
  description: 'Transparent AI receptionist pricing for service businesses. Starting at $297/month. No long-term contracts. Cancel any time.',
  alternates: { canonical: 'https://simplifai-solutions.com/pricing/' },
}

export default function PricingPage() {
  return (
    <main>
      <Navigation />
      <div style={{ paddingTop: '80px' }}>
        <section className="pt-16 pb-4 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
              AI Receptionist Pricing
            </h1>
            <p className="text-lg" style={{ color: '#94a3b8' }}>
              Straightforward plans for service businesses. No long-term contracts. No hidden fees. Starting at $297/month.
            </p>
          </div>
        </section>
        <PricingSection />
        <FAQSection />
      </div>
      <Footer />
    </main>
  )
}
