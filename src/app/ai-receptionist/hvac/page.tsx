import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Phone, ArrowRight, Clock, Calendar, Flame, ShieldCheck, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Receptionist for HVAC Companies | SimplifAI Solutions',
  description: 'Never miss an HVAC call again. SimplifAI builds custom AI receptionists for HVAC businesses that answer emergency calls 24/7, book service appointments, and qualify every lead.',
  keywords: 'AI receptionist for HVAC, HVAC answering service, HVAC call answering AI, HVAC virtual receptionist, 24/7 HVAC phone answering',
  alternates: { canonical: 'https://simplifai-solutions.com/ai-receptionist/hvac/' },
}

const painPoints = [
  { title: 'Emergency calls at 2am go to voicemail.', body: 'A broken furnace in January. A failed AC in August. That homeowner is calling every HVAC company they can find. If you don\'t answer, your competitor does.' },
  { title: 'Seasonal rush overwhelms your phone.', body: 'When the first cold snap hits, calls come in faster than you can handle them. Every unanswered call is a job you won\'t book.' },
  { title: 'You answer the same questions all day.', body: '"Do you service my zip code?" "Can you come today?" "How much for a tune-up?" Your AI answers all of these, so you don\'t have to.' },
]

const whatItDoes = [
  { icon: Phone, title: 'Answers every call, 24/7', desc: 'Emergency or routine, your AI picks up immediately. No voicemail. No hold music.' },
  { icon: Flame, title: 'Handles emergency routing', desc: 'Knows the difference between a heating emergency and a maintenance request. Routes urgent calls directly to you.' },
  { icon: Calendar, title: 'Books service appointments', desc: 'Checks your calendar and books directly. Customers hang up with a confirmed appointment, not a callback promise.' },
  { icon: Clock, title: 'Gives ballpark estimates', desc: 'Trained on your pricing. Gives honest ranges for common jobs so callers know what to expect.' },
  { icon: ShieldCheck, title: 'Qualifies every caller', desc: 'Asks for zip code, equipment type, and problem description before routing. You only talk to real leads.' },
  { icon: CheckCircle, title: 'Works with your system', desc: 'Connects to your dispatch software, CRM, or Google Calendar. No new software to learn.' },
]

const faqs = [
  { q: 'Can it handle emergency HVAC calls?', a: 'Yes. You define what counts as an emergency for your business. When a caller says their heat is out or their AC stopped working in extreme weather, the AI knows to escalate and route the call to you directly instead of just booking an appointment.' },
  { q: 'Will it work during the seasonal rush when call volume spikes?', a: 'That\'s exactly when it earns its keep. The AI handles unlimited simultaneous calls. Whether you get 5 calls or 50 in an hour, every one gets answered.' },
  { q: 'Can it give pricing information?', a: 'Yes. We train it on your actual service rates and give it ranges for common jobs like tune-ups, service calls, and filter replacements. It gives honest ballpark numbers without committing you to a specific price.' },
  { q: 'Does it know my service area?', a: 'Absolutely. We program in your zip codes and service areas. Callers outside your territory get a polite explanation instead of a wasted appointment.' },
  { q: 'Can it book into my dispatch or scheduling software?', a: 'We connect to most major HVAC dispatch tools, Google Calendar, and CRM systems. Your AI books directly into your existing workflow.' },
]

export default function HVACPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Service',
        name: 'AI Receptionist for HVAC Companies',
        description: 'Custom AI receptionist that answers emergency HVAC calls 24/7, books service appointments, gives estimates, and qualifies every lead.',
        provider: { '@type': 'Organization', name: 'SimplifAI Solutions', url: 'https://simplifai-solutions.com' },
        areaServed: 'US', serviceType: 'AI Receptionist',
        url: 'https://simplifai-solutions.com/ai-receptionist/hvac/',
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://simplifai-solutions.com' },
          { '@type': 'ListItem', position: 2, name: 'AI Receptionist', item: 'https://simplifai-solutions.com/ai-receptionist/' },
          { '@type': 'ListItem', position: 3, name: 'HVAC', item: 'https://simplifai-solutions.com/ai-receptionist/hvac/' },
        ],
      })}} />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(34,211,238,0.07) 0%, transparent 70%)' }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-4">
            <span className="section-badge">AI Receptionist for HVAC</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
            Never miss an HVAC call.{' '}
            <span className="gradient-text">Not even at 2am.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-10" style={{ color: '#94a3b8' }}>
            HVAC customers call when their system fails — which is almost never during business hours.
            SimplifAI builds a custom AI receptionist that answers every call, qualifies every lead,
            and books every job automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/ted-manas/ai-appointment-demo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl btn-primary">
              Book a Free Call <ArrowRight size={16} />
            </a>
            <a href="tel:+19594444307" className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl btn-secondary">
              <Phone size={16} /> Call the HVAC Demo
            </a>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 px-6" style={{ background: 'rgba(9,17,44,0.5)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-10">The calls you keep missing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((p) => (
              <div key={p.title} className="glass-card rounded-2xl p-7">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4 text-sm font-black flex-shrink-0" style={{ background: 'rgba(239,68,68,0.15)', color: '#f87171', border: '1px solid rgba(239,68,68,0.2)' }}>✕</div>
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
          <h2 className="text-3xl font-black text-white text-center mb-4">What your HVAC AI receptionist does</h2>
          <p className="text-center mb-12 max-w-xl mx-auto" style={{ color: '#94a3b8' }}>
            Built specifically for HVAC workflows. Not a generic call center script.
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

      {/* Demo Call */}
      <section className="py-16 px-6" style={{ background: 'rgba(9,17,44,0.5)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <span className="section-badge flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Live Demo
            </span>
          </div>
          <h2 className="text-3xl font-black text-white mb-4">Hear the HVAC AI in action.</h2>
          <p className="mb-8 text-lg" style={{ color: '#94a3b8' }}>
            Call our live HVAC demo. It&apos;s not a recording — it&apos;s a real AI receptionist,
            built for an HVAC business. Ask it anything.
          </p>
          <a
            href="tel:+19594444307"
            className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold rounded-xl btn-primary"
          >
            <Phone size={20} />
            +1 (959) 444-4307
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
          <h2 className="text-3xl font-black text-white text-center mb-10">HVAC-specific questions</h2>
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
          <h2 className="text-3xl font-black text-white mb-4">Ready to stop missing HVAC jobs?</h2>
          <p className="mb-8" style={{ color: '#94a3b8' }}>
            Book a free call. We&apos;ll show you exactly what a custom AI receptionist would sound like for your HVAC business — trained on your services, your pricing, and your area.
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
