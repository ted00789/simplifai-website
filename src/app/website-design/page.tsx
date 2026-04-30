import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Globe, Check, ArrowRight, Smartphone, Zap, Search, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Custom Website Design for Service Businesses | SimplifAI Solutions',
  description: 'Professional, mobile-first custom websites built to convert visitors into leads. No templates. Designed around your brand, your industry, and your goals.',
  keywords: 'website design for small business, custom website for service business, affordable website design, website with chatbot',
  alternates: { canonical: 'https://simplifai-solutions.com/website-design/' },
}

const includes = [
  { icon: Smartphone, title: 'Mobile-First Design', desc: 'Built for the way your customers actually browse: on their phones, on the go.' },
  { icon: Zap, title: 'Fast Loading', desc: 'Optimized for speed. Slow websites lose visitors and rank lower on Google.' },
  { icon: Search, title: 'SEO-Optimized', desc: 'Structured to rank for the searches your customers are actually making.' },
  { icon: MessageCircle, title: 'AI Chatbot Built In', desc: 'Your chatbot is embedded from day one. No plugins, no patches.' },
  { icon: Globe, title: 'Built to Convert', desc: 'Every page, headline, and CTA is designed to turn visitors into booked jobs.' },
  { icon: Check, title: 'No Templates', desc: 'Designed from scratch around your brand, industry, and goals.' },
]

export default function WebsiteDesignPage() {
  return (
    <main>
      <Navigation />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(129,140,248,0.07) 0%, transparent 70%)' }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-4">
            <span className="section-badge">Custom Website Design</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
            A website that works{' '}
            <span className="gradient-text">as hard as you do.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-10" style={{ color: '#94a3b8' }}>
            No templates. No DIY builders. A real website built from scratch around your business,
            designed to convert visitors into leads, even while you sleep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/ted-manas/ai-appointment-demo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl btn-primary">
              Get a Free Quote <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-12">What&apos;s included in every site</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {includes.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="glass-card rounded-2xl p-7">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(129,140,248,0.1)', border: '1px solid rgba(129,140,248,0.25)' }}>
                    <Icon size={20} color="#818cf8" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Custom vs templates */}
      <section className="py-16 px-6" style={{ background: 'rgba(9,17,44,0.5)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-10">Why not just use Wix or Squarespace?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                label: 'DIY Website Builders (Wix, Squarespace)',
                color: '#f87171',
                points: ['Template-based, looks like thousands of others', 'Not optimized for your industry or customers', 'Chatbot? Tack on a plugin and hope it works', 'No SEO strategy baked in', 'You spend hours building it yourself', 'Converts visitors poorly, just looks pretty'],
              },
              {
                label: 'SimplifAI Custom Website',
                color: '#818cf8',
                points: ['Unique, built around your brand and industry', 'Copy and structure designed to convert leads', 'AI chatbot built in from the start', 'SEO-optimized for the keywords that matter', 'We build it, you review it, done.', 'Every element earns its place, built to close'],
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

      {/* Work Showcase */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-4">Our work</h2>
          <p className="text-center mb-10 max-w-lg mx-auto" style={{ color: '#94a3b8' }}>
            Examples coming soon. Each site is built from scratch around a specific business and industry.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(11,18,36,0.6)',
                  border: '1px solid rgba(129,140,248,0.12)',
                  minHeight: '220px',
                }}
              >
                <div className="flex flex-col items-center justify-center h-full p-10 gap-3 min-h-[220px]">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(129,140,248,0.08)', border: '1px solid rgba(129,140,248,0.15)' }}
                  >
                    <Globe size={18} color="#818cf8" />
                  </div>
                  <p className="text-sm font-medium text-center" style={{ color: '#334155' }}>
                    Example site {n} — coming soon
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6" style={{ background: 'rgba(9,17,44,0.5)' }}>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">Get a custom quote for your business.</h2>
          <p className="mb-8" style={{ color: '#94a3b8' }}>Every website is priced based on your specific needs. Book a free call and we will put together a proposal for you.</p>
          <a href="https://calendly.com/ted-manas/ai-appointment-demo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl btn-primary">
            Book a Free Call <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
