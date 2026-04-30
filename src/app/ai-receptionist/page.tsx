import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Phone, Check, ArrowRight, Clock, Calendar, MessageSquare, DollarSign, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Receptionist for Service Businesses | SimplifAI Solutions',
  description: 'Never miss another call. SimplifAI builds a custom AI receptionist that answers your business calls 24/7, qualifies callers, books appointments, and gives estimates. Built around your business.',
  keywords: 'AI receptionist, ai phone answering service, 24/7 call answering, best ai receptionist 2026, ai receptionist cost, ai receptionist for HVAC',
  alternates: { canonical: 'https://simplifai-solutions.com/ai-receptionist/' },
}

const features = [
  { icon: Clock, title: '24/7 Call Answering', desc: 'Never miss a call. Not at 2pm, not at 2am, not on weekends or holidays.' },
  { icon: Calendar, title: 'Appointment Booking', desc: 'Books directly into your calendar. No double-booking, no missed slots.' },
  { icon: MessageSquare, title: 'Custom Qualification', desc: 'Asks the right questions to qualify leads before routing or booking.' },
  { icon: DollarSign, title: 'Rough Estimates', desc: 'Gives ballpark pricing over the phone, trained on your actual rates.' },
  { icon: Phone, title: 'Urgent Call Routing', desc: 'Knows when to route to you directly. True emergencies always get through.' },
  { icon: ShieldCheck, title: 'Connected to Your Systems', desc: 'Works with your existing CRM, calendar, and tools. No switching required.' },
]

const demos = [
  { industry: 'HVAC', number: '+1 (959) 444-4307' },
  { industry: 'Auto Detailing', number: '+1 (878) 879-2272' },
  { industry: 'Real Estate', number: '+1 (901) 460-9886' },
  { industry: 'Massage & Spa', number: '+1 (207) 830-4223' },
  { industry: 'Lawn Care', number: '+1 (878) 879-2399' },
  { industry: 'Auto Repair', number: '+1 (610) 904-9146' },
]

export default function AIReceptionistPage() {
  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(34,211,238,0.07) 0%, transparent 70%)' }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-4">
            <span className="section-badge">AI Receptionist</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
            Never miss{' '}
            <span className="gradient-text">another call.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-10" style={{ color: '#94a3b8' }}>
            SimplifAI builds a custom AI receptionist that answers your business calls 24/7. It qualifies
            callers, books appointments, gives estimates, and works around your exact workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/ted-manas/ai-appointment-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl btn-primary"
            >
              Book a Free Call <ArrowRight size={16} />
            </a>
            <a href="#demos" className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl btn-secondary">
              Try a Live Demo
            </a>
          </div>
        </div>
      </section>

      {/* vs Answering Service */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-10">
            How is this different from a regular answering service?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                label: 'Traditional Answering Service',
                color: '#ef4444',
                points: ['Uses humans reading from scripts', 'Charges per minute (expensive)', 'Only works during business hours', 'Generic, not trained on your business', 'No booking or qualification', 'You get a message, not a lead'],
              },
              {
                label: 'SimplifAI AI Receptionist',
                color: '#22d3ee',
                points: ['Custom-built around your business', 'Flat monthly rate, fully predictable', 'Works 24/7 including holidays', 'Trained on your services, pricing, FAQs', 'Books appointments, qualifies leads', 'You get a booked job, not just a message'],
              },
            ].map((col) => (
              <div key={col.label} className="glass-card rounded-2xl p-8">
                <h3 className="font-bold text-lg mb-6" style={{ color: col.color }}>{col.label}</h3>
                <ul className="space-y-3">
                  {col.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: col.color }} />
                      <span className="text-sm" style={{ color: '#94a3b8' }}>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6" style={{ background: 'rgba(9,17,44,0.5)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-12">What it does for your business</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => {
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

      {/* Live Demos */}
      <section id="demos" className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-4">Try a live demo</h2>
          <p className="text-center mb-10" style={{ color: '#94a3b8' }}>These are real calls, not recordings. Pick your industry.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {demos.map((d) => (
              <a
                key={d.industry}
                href={`tel:${d.number.replace(/\s|\(|\)|-/g, '')}`}
                className="glass-card rounded-2xl p-6 flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.2)' }}>
                  <Phone size={18} color="#22d3ee" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{d.industry}</p>
                  <p className="text-xs font-mono mt-0.5" style={{ color: '#22d3ee' }}>{d.number}</p>
                </div>
                <ArrowRight size={14} color="#22d3ee" className="ml-auto opacity-0 group-hover:opacity-100 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6" style={{ background: 'rgba(9,17,44,0.5)' }}>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to stop missing calls?</h2>
          <p className="mb-8" style={{ color: '#94a3b8' }}>
            Book a free call. We will show you exactly what a custom AI receptionist would sound like for your business.
          </p>
          <a href="https://calendly.com/ted-manas/ai-appointment-demo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl btn-primary">
            Book a Free Call <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
