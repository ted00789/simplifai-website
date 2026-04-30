import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Phone, ArrowRight, Calendar, MapPin, Clock, DollarSign, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Receptionist for Lawn Care Companies | SimplifAI Solutions',
  description: 'Stop losing lawn care customers to voicemail. SimplifAI builds custom AI receptionists for lawn care businesses that answer calls 24/7, give estimates, and book recurring and one-time jobs.',
  keywords: 'AI receptionist for lawn care, lawn care answering service, lawn care virtual receptionist, lawn care call answering AI, landscaping answering service',
  alternates: { canonical: 'https://simplifai-solutions.com/ai-receptionist/lawn-care/' },
}

const painPoints = [
  { title: 'Peak season, your phone won\'t stop ringing.', body: 'Spring comes and everyone wants their lawn done at once. You can\'t answer every call while you\'re on a job. The calls that go unanswered go to a competitor.' },
  { title: 'Pricing questions eat up your day.', body: '"How much to mow a quarter acre?" "Do you do mulching?" "What about spring cleanup?" These questions have answers. Let your AI give them.' },
  { title: 'Recurring customers call to adjust their schedule.', body: 'Vacation rescheduling, skip weeks, add-on services. These are calls that shouldn\'t require your personal attention.' },
]

const whatItDoes = [
  { icon: Phone, title: 'Answers every call, 24/7', desc: 'During mowing season, you can\'t stop mid-job to answer the phone. Your AI never puts a caller on hold.' },
  { icon: DollarSign, title: 'Gives estimates over the phone', desc: 'Trained on your pricing for lot sizes and service types. Gives accurate ranges so callers know what to expect.' },
  { icon: Calendar, title: 'Books recurring and one-time jobs', desc: 'New customers get scheduled. Existing customers get rescheduled. All without interrupting your crew.' },
  { icon: MapPin, title: 'Qualifies by service area', desc: 'Knows your zip codes and coverage area. Customers outside your zone get a polite redirect.' },
  { icon: Clock, title: 'Handles schedule changes', desc: 'When a customer needs to skip a week or reschedule, the AI handles it and updates your calendar.' },
  { icon: CheckCircle, title: 'Sells add-on services', desc: 'Trained to mention available add-ons like aeration, overseeding, mulching, or fertilization when appropriate.' },
]

const faqs = [
  { q: 'Can it give lawn care estimates over the phone?', a: 'Yes. We train it on your pricing structure — by lot size, service type, or flat rates. It gives honest ranges based on what the customer describes. You can always adjust when you do a formal quote, but the AI handles the initial pricing question so callers don\'t hang up without a number.' },
  { q: 'Can it handle recurring customer calls?', a: 'Absolutely. Customers who want to skip a week, add a service, or change their schedule can call and the AI handles it. It updates your calendar and confirms the change — without you getting pulled off a job.' },
  { q: 'Can it book jobs into my scheduling software?', a: 'We integrate with most lawn care scheduling tools, Google Calendar, and CRM systems. Jobs get booked directly into your existing workflow.' },
  { q: 'What if the caller is outside my service area?', a: 'We program in your exact service zones and zip codes. The AI politely explains you don\'t service their area and, if you want, suggests they look for local providers. No wasted back-and-forth.' },
  { q: 'Can it explain the difference between my service packages?', a: 'Yes. We train it on all your service packages — mow-only, full maintenance, seasonal cleanups, whatever you offer. Callers get a clear explanation of what each package includes and what it costs.' },
]

export default function LawnCarePage() {
  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(34,211,238,0.07) 0%, transparent 70%)' }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-4">
            <span className="section-badge">AI Receptionist for Lawn Care</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
            Stop losing lawn care customers{' '}
            <span className="gradient-text">to voicemail.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-10" style={{ color: '#94a3b8' }}>
            Peak season means peak call volume. You can&apos;t stop mowing to answer pricing questions.
            SimplifAI builds a custom AI receptionist that handles every call, books every job,
            and gives estimates — while you focus on the work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/ted-manas/ai-appointment-demo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl btn-primary">
              Book a Free Call <ArrowRight size={16} />
            </a>
            <a href="tel:+18788792399" className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl btn-secondary">
              <Phone size={16} /> Call the Lawn Care Demo
            </a>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 px-6" style={{ background: 'rgba(9,17,44,0.5)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-10">The problem with peak season</h2>
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

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-12">What your lawn care AI handles</h2>
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
          <h2 className="text-3xl font-black text-white mb-4">Try the lawn care AI.</h2>
          <p className="mb-8 text-lg" style={{ color: '#94a3b8' }}>
            Call our live lawn care demo right now. Ask about pricing, request a quote for your property,
            or try to book a service. It&apos;s live — not a recording.
          </p>
          <a href="tel:+18788792399" className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold rounded-xl btn-primary">
            <Phone size={20} />
            +1 (878) 879-2399
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
          <h2 className="text-3xl font-black text-white text-center mb-10">Lawn care AI questions</h2>
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
          <h2 className="text-3xl font-black text-white mb-4">Ready for a full schedule this season?</h2>
          <p className="mb-8" style={{ color: '#94a3b8' }}>
            Book a free call and we&apos;ll show you exactly what an AI receptionist built for your lawn care business would handle.
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
