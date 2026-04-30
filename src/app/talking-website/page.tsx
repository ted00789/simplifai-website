import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Phone, MessageCircle, Globe, Zap, Check, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Talking Website | AI Receptionist + Chatbot + Custom Website',
  description: 'SimplifAI\'s flagship package: AI Receptionist + AI Chatbot + Custom Website. Your phone answers itself. Your website answers itself. Your business never misses a customer.',
  keywords: 'talking website, ai receptionist and website bundle, automated business website',
  alternates: { canonical: 'https://simplifai-solutions.com/talking-website/' },
}

const synergies = [
  { from: 'AI Receptionist', to: 'Custom Website', desc: 'Your website ranks on Google and builds trust. When they call, the AI is ready.' },
  { from: 'AI Chatbot', to: 'AI Receptionist', desc: 'Visitors who prefer chat get chatbot. Visitors who prefer calls get the AI. Every preference, covered.' },
  { from: 'Custom Website', to: 'AI Chatbot', desc: 'The chatbot lives on your site, trained on your content, turning every page view into a conversation.' },
]

export default function TalkingWebsitePage() {
  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(34,211,238,0.08) 0%, transparent 70%)' }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold" style={{ background: 'rgba(34,211,238,0.15)', color: '#22d3ee', border: '1px solid rgba(34,211,238,0.3)' }}>
              <Zap size={12} fill="#22d3ee" />
              FLAGSHIP PACKAGE
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
            The Talking Website:
            <br />
            <span className="gradient-text">Your business, fully automated.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-10" style={{ color: '#94a3b8' }}>
            Your phone answers itself. Your website answers itself. Your business captures leads around
            the clock, even when you&apos;re on a job, at dinner, or asleep.
          </p>
          <a href="https://calendly.com/ted-manas/ai-appointment-demo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-5 text-base font-bold rounded-xl btn-primary">
            Get the Talking Website <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-12">Everything. Working together.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Phone, color: '#22d3ee', name: 'AI Receptionist', points: ['Answers every call 24/7', 'Custom-built for your business', 'Books, qualifies, gives estimates', 'Urgent call routing'] },
              { icon: Globe, color: '#818cf8', name: 'Custom Website', points: ['Built from scratch, no templates', 'Mobile-first, fast-loading', 'SEO-optimized to rank & convert', 'Designed around your brand'] },
              { icon: MessageCircle, color: '#38bdf8', name: 'AI Chatbot', points: ['Lives on your custom website', '24/7 question answering', 'Qualifies and books visitors', 'Trained on your content'] },
            ].map((product) => {
              const Icon = product.icon
              return (
                <div key={product.name} className="glass-card rounded-2xl p-8">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `rgba(${product.color === '#22d3ee' ? '34,211,238' : product.color === '#38bdf8' ? '56,189,248' : '129,140,248'},0.1)`, border: `1px solid rgba(${product.color === '#22d3ee' ? '34,211,238' : product.color === '#38bdf8' ? '56,189,248' : '129,140,248'},0.25)` }}>
                    <Icon size={22} color={product.color} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4">{product.name}</h3>
                  <ul className="space-y-2">
                    {product.points.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <Check size={14} color={product.color} />
                        <span className="text-sm" style={{ color: '#94a3b8' }}>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Synergy */}
      <section className="py-16 px-6" style={{ background: 'rgba(9,17,44,0.5)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-4">Why all three together?</h2>
          <p className="text-center mb-12" style={{ color: '#94a3b8' }}>Each product is powerful alone. Together, they cover every way a customer might try to reach you.</p>
          <div className="space-y-4">
            {synergies.map((s) => (
              <div key={s.from} className="glass-card rounded-2xl p-6 flex items-start gap-4">
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-xs font-bold px-2 py-1 rounded" style={{ background: 'rgba(34,211,238,0.1)', color: '#22d3ee' }}>{s.from}</span>
                  <span style={{ color: '#475569' }}>+</span>
                  <span className="text-xs font-bold px-2 py-1 rounded" style={{ background: 'rgba(34,211,238,0.1)', color: '#22d3ee' }}>{s.to}</span>
                </div>
                <p className="text-sm" style={{ color: '#94a3b8' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">Want your entire front office automated?</h2>
          <p className="mb-8" style={{ color: '#94a3b8' }}>Book a free call. We will put together a custom proposal for The Talking Website based on your business.</p>
          <a href="https://calendly.com/ted-manas/ai-appointment-demo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-5 text-base font-bold rounded-xl btn-primary">
            Book a Free Call <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
