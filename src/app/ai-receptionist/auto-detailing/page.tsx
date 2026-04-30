import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Phone, ArrowRight, Calendar, Star, Clock, MessageSquare, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Receptionist for Auto Detailing Businesses | SimplifAI Solutions',
  description: 'Book more detailing jobs without answering your phone. SimplifAI builds custom AI receptionists for auto detailing businesses that answer calls 24/7, book appointments, and qualify every lead.',
  keywords: 'AI receptionist for auto detailing, auto detailing answering service, auto detailing appointment booking AI, car detailing virtual receptionist',
  alternates: { canonical: 'https://simplifai-solutions.com/ai-receptionist/auto-detailing/' },
}

const painPoints = [
  { title: 'Calls come in while you\'re detailing a car.', body: 'You\'re elbow-deep in a paint correction or ceramic coating. You can\'t answer. They don\'t leave a voicemail. They call the next shop on Google.' },
  { title: 'Customers ask the same questions every day.', body: '"How much for a full detail on an SUV?" "Do you do paint correction?" "Can you come to me?" Your AI answers all of it, instantly.' },
  { title: 'No-shows and last-minute cancellations waste your day.', body: 'Your AI confirms appointments and sends reminders. Fewer no-shows, better-planned days, more revenue.' },
]

const whatItDoes = [
  { icon: Phone, title: 'Answers every call, 24/7', desc: 'Never miss a booking inquiry. Every caller gets an immediate answer, day or night.' },
  { icon: Calendar, title: 'Books appointments directly', desc: 'Syncs with your schedule and books the job. Customers hang up with a confirmed time and date.' },
  { icon: Star, title: 'Gives package pricing', desc: 'Trained on your service menu and pricing. Quotes correctly for vehicle type, size, and requested service.' },
  { icon: MessageSquare, title: 'Handles mobile vs shop questions', desc: 'Explains your mobile availability, service area, and whether you come to the customer or they come to you.' },
  { icon: Clock, title: 'Handles rescheduling', desc: 'Customers who need to move their appointment can do it without calling during your work hours.' },
  { icon: CheckCircle, title: 'Qualifies vehicle type and service', desc: 'Asks about vehicle size, condition, and requested service level so you know exactly what\'s booked before you arrive.' },
]

const faqs = [
  { q: 'Can it give accurate pricing for different vehicle types?', a: 'Yes. We train it on your exact pricing for sedans, SUVs, trucks, vans, and any vehicle categories you work with. It quotes correctly based on what the customer tells it about their vehicle.' },
  { q: 'Can it handle mobile detailing booking?', a: 'Absolutely. If you offer mobile detailing, the AI explains your service area, asks for the address, and books the job at the customer\'s location. It can also explain the difference between mobile and in-shop pricing if you have both.' },
  { q: 'What if a customer wants to describe a specific problem, like paint swirls or water spots?', a: 'We train the AI on your common services and what they correct. It can explain what paint correction addresses, what a ceramic coating does, and help customers understand what service they actually need.' },
  { q: 'Can it handle multiple locations or service areas?', a: 'Yes. If you operate from multiple locations or have defined service zones, the AI knows which areas you cover and routes bookings to the right location or technician.' },
  { q: 'A client called our HVAC demo and had their AI answer 40 calls in the first month. Does this work for detailing too?', a: 'That\'s exactly what happened with one of our auto detailing clients. The volume of calls that were previously going to voicemail — and to competitors — is often surprising once the AI starts tracking them.' },
]

export default function AutoDetailingPage() {
  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(34,211,238,0.07) 0%, transparent 70%)' }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-4">
            <span className="section-badge">AI Receptionist for Auto Detailing</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
            Book more detailing jobs{' '}
            <span className="gradient-text">without touching your phone.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-10" style={{ color: '#94a3b8' }}>
            When you&apos;re working on a car, the last thing you can do is answer the phone.
            SimplifAI builds a custom AI receptionist that books appointments, quotes pricing,
            and handles every call while you focus on the work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/ted-manas/ai-appointment-demo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl btn-primary">
              Book a Free Call <ArrowRight size={16} />
            </a>
            <a href="tel:+18788792272" className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl btn-secondary">
              <Phone size={16} /> Call the Detailing Demo
            </a>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 px-6" style={{ background: 'rgba(9,17,44,0.5)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-10">The bookings you keep missing</h2>
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
          <h2 className="text-3xl font-black text-white text-center mb-12">What your detailing AI handles</h2>
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
          <h2 className="text-3xl font-black text-white mb-4">Try the auto detailing AI.</h2>
          <p className="mb-8 text-lg" style={{ color: '#94a3b8' }}>
            Call our live auto detailing demo. Ask about pricing for your vehicle, book an appointment,
            or ask about specific services. It&apos;s a real AI — not a recording.
          </p>
          <a href="tel:+18788792272" className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold rounded-xl btn-primary">
            <Phone size={20} />
            +1 (878) 879-2272
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
          <h2 className="text-3xl font-black text-white text-center mb-10">Questions about AI for detailing businesses</h2>
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
          <h2 className="text-3xl font-black text-white mb-4">Ready to fill your schedule?</h2>
          <p className="mb-8" style={{ color: '#94a3b8' }}>
            Book a free call and we&apos;ll show you exactly what a custom AI receptionist built for your detailing business would look and sound like.
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
