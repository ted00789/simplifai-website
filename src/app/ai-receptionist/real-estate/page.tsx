import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Phone, ArrowRight, Clock, Calendar, Home, Users, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Receptionist for Real Estate Agents | SimplifAI Solutions',
  description: 'Every lead answered, even when you\'re showing a property. SimplifAI builds custom AI receptionists for real estate agents that qualify buyers and sellers, book showings, and capture every inquiry 24/7.',
  keywords: 'AI receptionist for real estate, real estate virtual receptionist, real estate AI phone answering, real estate lead answering service',
  alternates: { canonical: 'https://simplifai-solutions.com/ai-receptionist/real-estate/' },
}

const painPoints = [
  { title: 'You\'re showing a home when a hot lead calls.', body: 'You can\'t step out mid-showing. That buyer calls the next agent on their list. By the time you call back, they\'ve already booked with someone else.' },
  { title: 'After-hours inquiries go cold.', body: 'Buyers and sellers search on their schedule — evenings, weekends, holidays. If your phone isn\'t answered immediately, that lead moves on.' },
  { title: 'You spend hours on unqualified calls.', body: 'Not every call is a ready buyer. Your AI pre-qualifies leads, asks the right questions, and only routes serious prospects to you.' },
]

const whatItDoes = [
  { icon: Phone, title: 'Answers every inquiry instantly', desc: 'Buyers, sellers, and renters get an immediate response — not a voicemail and a hope.' },
  { icon: Home, title: 'Qualifies buyers and sellers', desc: 'Asks about timeline, budget, pre-approval status, and property type before the call reaches you.' },
  { icon: Calendar, title: 'Books showings and consultations', desc: 'Syncs with your calendar and books appointments directly. Clients leave with a confirmed time.' },
  { icon: Clock, title: 'Available 24/7', desc: 'Real estate doesn\'t stop at 5pm. Your AI handles evening and weekend inquiries so you don\'t have to.' },
  { icon: Users, title: 'Handles multiple listings', desc: 'Trained on your active listings, neighborhoods, and specialties. Answers specific questions about your properties.' },
  { icon: CheckCircle, title: 'CRM integration', desc: 'Logs every call, contact, and qualification into your CRM automatically. No manual data entry.' },
]

const faqs = [
  { q: 'Can the AI qualify real estate leads?', a: 'Yes. We train it to ask about buyer timeline, whether they\'re pre-approved, what type of property they\'re looking for, and their price range. Seller leads get asked about their timeline to list, whether they\'ve had an appraisal, and their situation. You only talk to people who are actually ready to move forward.' },
  { q: 'Can it answer questions about specific listings?', a: 'We can train your AI on your active listings — price, beds/baths, neighborhood, key features. Callers asking about a specific property get real answers, not a "call me back."' },
  { q: 'What happens if a caller wants to schedule a showing?', a: 'The AI checks your calendar and books the showing directly. You get a notification and both you and the client receive confirmation. No back-and-forth texting to find a time.' },
  { q: 'Will callers know they\'re talking to AI?', a: 'The AI speaks naturally and conversationally. Many callers don\'t realize it\'s AI. You can hear it for yourself by calling our real estate demo at +1 (901) 460-9886.' },
  { q: 'Can it handle both buyer and seller leads?', a: 'Yes. It\'s trained to identify which type of lead is calling and ask the right qualifying questions for each. Buyers and sellers get different conversations tailored to their situation.' },
]

export default function RealEstatePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Service',
        name: 'AI Receptionist for Real Estate Agents',
        description: 'Custom AI receptionist that answers buyer and seller inquiries 24/7, qualifies leads, books showings, and captures every real estate inquiry.',
        provider: { '@type': 'Organization', name: 'SimplifAI Solutions', url: 'https://simplifai-solutions.com' },
        areaServed: 'US', serviceType: 'AI Receptionist',
        url: 'https://simplifai-solutions.com/ai-receptionist/real-estate/',
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://simplifai-solutions.com' },
          { '@type': 'ListItem', position: 2, name: 'AI Receptionist', item: 'https://simplifai-solutions.com/ai-receptionist/' },
          { '@type': 'ListItem', position: 3, name: 'Real Estate', item: 'https://simplifai-solutions.com/ai-receptionist/real-estate/' },
        ],
      })}} />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(34,211,238,0.07) 0%, transparent 70%)' }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-4">
            <span className="section-badge">AI Receptionist for Real Estate</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
            Every lead answered,{' '}
            <span className="gradient-text">even mid-showing.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-10" style={{ color: '#94a3b8' }}>
            Real estate moves fast. When a buyer calls and you can&apos;t pick up, that opportunity is
            gone. SimplifAI builds a custom AI receptionist that qualifies leads, books showings,
            and captures every inquiry — around the clock.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/ted-manas/ai-appointment-demo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl btn-primary">
              Book a Free Call <ArrowRight size={16} />
            </a>
            <a href="tel:+19014609886" className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl btn-secondary">
              <Phone size={16} /> Call the Real Estate Demo
            </a>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 px-6" style={{ background: 'rgba(9,17,44,0.5)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-10">The leads you keep losing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((p) => (
              <div key={p.title} className="glass-card rounded-2xl p-7">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4 text-sm font-black" style={{ background: 'rgba(239,68,68,0.15)', color: '#f87171', border: '1px solid rgba(239,68,68,0.2)' }}>✕</div>
                <h3 className="font-bold text-white mb-2">{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it does */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-4">What your real estate AI handles</h2>
          <p className="text-center mb-12 max-w-xl mx-auto" style={{ color: '#94a3b8' }}>
            Built around how real estate actually works — not a generic phone script.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatItDoes.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="glass-card rounded-2xl p-7">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.2)' }}>
                    <Icon size={20} color="#22d3ee" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Demo */}
      <section className="py-16 px-6" style={{ background: 'rgba(9,17,44,0.5)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <span className="section-badge flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Live Demo
            </span>
          </div>
          <h2 className="text-3xl font-black text-white mb-4">Hear it in action.</h2>
          <p className="mb-8 text-lg" style={{ color: '#94a3b8' }}>
            Call our real estate demo right now. Ask about a listing, request a showing, or ask
            qualifying questions. It&apos;s live — not a recording.
          </p>
          <a href="tel:+19014609886" className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold rounded-xl btn-primary">
            <Phone size={20} />
            +1 (901) 460-9886
          </a>
          <p className="mt-4 text-sm" style={{ color: '#475569' }}>Live 24/7 — try it right now</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            }),
          }}
        />
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-10">Real estate AI questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass-card rounded-2xl p-6">
                <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6" style={{ background: 'rgba(9,17,44,0.5)' }}>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">Stop losing leads between showings.</h2>
          <p className="mb-8" style={{ color: '#94a3b8' }}>
            Book a free call. We&apos;ll show you exactly what a custom AI receptionist built for your real estate business would sound like and handle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/ted-manas/ai-appointment-demo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl btn-primary">
              Book a Free Call <ArrowRight size={16} />
            </a>
            <Link href="/ai-receptionist/" className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl btn-secondary">
              See All Features
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
