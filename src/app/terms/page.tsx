import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service | SimplifAI Solutions',
}

export default function TermsPage() {
  return (
    <main>
      <Navigation />
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-black text-white mb-8">Terms of Service</h1>
          <div className="space-y-6" style={{ color: '#94a3b8' }}>
            <p><strong className="text-white">Last updated: April 2026</strong></p>
            <p>These Terms of Service govern your use of SimplifAI Solutions LLC&apos;s services. By using our services, you agree to these terms.</p>
            <h2 className="text-2xl font-bold text-white">Services</h2>
            <p>SimplifAI Solutions provides custom AI receptionist, chatbot, and website design services for service businesses. Services are provided on a monthly subscription basis with optional one-time setup fees.</p>
            <h2 className="text-2xl font-bold text-white">Cancellation</h2>
            <p>Monthly subscriptions may be cancelled with written notice. No long-term contracts are required.</p>
            <h2 className="text-2xl font-bold text-white">Limitation of Liability</h2>
            <p>SimplifAI Solutions shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.</p>
            <h2 className="text-2xl font-bold text-white">Contact</h2>
            <p>Questions? Email <a href="mailto:ted@simplifai-solutions.com" className="text-cyan-400">ted@simplifai-solutions.com</a>.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
