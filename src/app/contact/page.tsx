import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Mail, Clock, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact SimplifAI Solutions',
  description: 'Get in touch with SimplifAI Solutions. Book a free call, send a message, or email Tadeáš directly. Every inquiry gets a personal response — no bots, no support tickets.',
  alternates: { canonical: 'https://simplifai-solutions.com/contact/' },
}

export default function ContactPage() {
  return (
    <main>
      <Navigation />

      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(34,211,238,0.06) 0%, transparent 70%)' }} />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <div className="flex justify-center mb-4">
              <span className="section-badge">Get in Touch</span>
            </div>
            <h1 className="text-5xl font-black text-white tracking-tight mb-4">
              Let&apos;s talk about{' '}
              <span className="gradient-text">your business.</span>
            </h1>
            <p className="text-xl max-w-xl mx-auto" style={{ color: '#94a3b8' }}>
              Not ready to book a call? Send a message directly to Tadeáš.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact form */}
            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-xl font-bold text-white mb-6">Send a message</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#94a3b8' }}>Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#94a3b8' }}>Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#94a3b8' }}>Business type</label>
                  <input
                    type="text"
                    placeholder="e.g. HVAC, Auto Detailing, Lawn Care..."
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#94a3b8' }}>Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your business and what you're looking for..."
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none resize-none"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 font-bold rounded-xl btn-primary text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact info + Calendly */}
            <div className="flex flex-col gap-6">
              <div className="glass-card rounded-3xl p-8">
                <h2 className="text-xl font-bold text-white mb-6">Direct contact</h2>
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.2)' }}>
                      <Mail size={18} color="#22d3ee" />
                    </div>
                    <div>
                      <p className="text-xs font-medium mb-0.5" style={{ color: '#64748b' }}>Email</p>
                      <a href="mailto:ted@simplifai-solutions.com" className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                        ted@simplifai-solutions.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.2)' }}>
                      <Clock size={18} color="#22d3ee" />
                    </div>
                    <div>
                      <p className="text-xs font-medium mb-0.5" style={{ color: '#64748b' }}>Response time</p>
                      <p className="text-sm font-semibold text-white">Personal response from Tadeáš</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="rounded-3xl p-8 flex flex-col items-center text-center"
                style={{ background: 'linear-gradient(135deg, rgba(34,211,238,0.08) 0%, rgba(34,211,238,0.04) 100%)', border: '1px solid rgba(34,211,238,0.2)' }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.3)' }}>
                  <Calendar size={20} color="#22d3ee" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Ready to talk?</h3>
                <p className="text-sm mb-6" style={{ color: '#94a3b8' }}>
                  Book a free call with Tadeáš. No sales pressure, just an honest conversation about what&apos;s possible for your business.
                </p>
                <a
                  href="https://calendly.com/ted-manas/ai-appointment-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl btn-primary w-full justify-center"
                >
                  Book on Calendly
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
