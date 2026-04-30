import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { MessageCircle, ArrowRight, Clock, Calendar, HelpCircle, UserCheck, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Chatbot for Service Business Websites | SimplifAI Solutions',
  description: 'A custom AI chatbot for your website that answers FAQs, qualifies leads, and books appointments 24/7. Built around your business — not a generic widget.',
  keywords: 'AI chatbot for small business, website chatbot, AI lead capture, chatbot for service business, 24/7 website chat',
  alternates: { canonical: 'https://simplifai-solutions.com/ai-chatbot/' },
}

const features = [
  { icon: HelpCircle, title: 'Answers Your FAQs', desc: 'Trained on your business. Hours, pricing, services, coverage area. Answered instantly, any time of day.' },
  { icon: UserCheck, title: 'Qualifies Leads', desc: 'Asks the right questions before connecting a visitor to you. You only talk to people who are ready to buy.' },
  { icon: Calendar, title: 'Books Appointments', desc: 'Connects to your calendar and books directly from the chat window. No phone calls required.' },
  { icon: Clock, title: 'Works 24/7', desc: 'Your website gets visitors at all hours. The chatbot is always there to greet them and capture the lead.' },
  { icon: Zap, title: 'Instant Responses', desc: 'No wait times, no "we will get back to you." Visitors get an answer in seconds, which means they stay on your site.' },
  { icon: MessageCircle, title: 'Feels Like You', desc: 'Custom tone and language built around your brand. It sounds like you, not like a generic support bot.' },
]

export default function AIChatbotPage() {
  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(56,189,248,0.07) 0%, transparent 70%)' }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-4">
            <span className="section-badge">AI Chatbot</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
            Your website answers{' '}
            <span className="gradient-text">for itself.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-10" style={{ color: '#94a3b8' }}>
            Most website visitors leave without reaching out. An AI chatbot built for your business
            answers their questions, qualifies them, and books the appointment, while you focus on the work.
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
            <a href="#features" className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl btn-secondary">
              See What It Does
            </a>
          </div>
        </div>
      </section>

      {/* vs Generic chatbots */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-10">
            Why not just use a basic live chat widget?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                label: 'Generic Chat Widgets',
                color: '#f87171',
                points: [
                  'Requires someone to be online to respond',
                  'Says "we will get back to you" and kills the lead',
                  'Cookie-cutter templates, not your business',
                  'No booking, no qualification, no context',
                  'Visitors leave before you reply',
                ],
              },
              {
                label: 'SimplifAI AI Chatbot',
                color: '#22d3ee',
                points: [
                  'Responds instantly, 24/7, no human needed',
                  'Answers the question right now, not tomorrow',
                  'Custom-built around your services, pricing, and tone',
                  'Qualifies leads and books appointments in chat',
                  'Keeps visitors on your site and converts them',
                ],
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
      <section id="features" className="py-16 px-6" style={{ background: 'rgba(9,17,44,0.5)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-12">What your chatbot does</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="glass-card rounded-2xl p-7">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.2)' }}
                  >
                    <Icon size={20} color="#38bdf8" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to stop losing website visitors?</h2>
          <p className="mb-8" style={{ color: '#94a3b8' }}>
            Book a free call. We will show you exactly what a chatbot built for your business would look and feel like.
          </p>
          <a
            href="https://calendly.com/ted-manas/ai-appointment-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl btn-primary"
          >
            Book a Free Call <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
