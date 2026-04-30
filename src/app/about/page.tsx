import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ArrowRight, Phone, Clock, Users, ShieldCheck, Linkedin, Instagram } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Tadeáš & SimplifAI Solutions',
  description: 'Tadeáš Manas built SimplifAI so service businesses never miss another customer. Learn about the story, the values, and how SimplifAI works differently.',
  alternates: { canonical: 'https://simplifai-solutions.com/about/' },
}

export default function AboutPage() {
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
            <span className="section-badge">The Founder</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-5">
            I built SimplifAI so your business{' '}
            <span className="gradient-text">never misses a customer.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
            The story behind SimplifAI, why custom-built matters, and how we work differently.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Photo */}
          <div>
            <div
              className="rounded-3xl overflow-hidden aspect-[4/5] max-w-sm"
              style={{
                background: 'linear-gradient(135deg, #0d1325 0%, #111c33 100%)',
                border: '1px solid rgba(34,211,238,0.15)',
              }}
            >
              <img
                src="/author.jpg"
                alt="Tadeáš Manas — Founder of SimplifAI Solutions"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="max-w-sm mt-4">
              <p className="font-bold text-white text-xl">Tadeáš Manas</p>
              <p className="text-sm mt-0.5 mb-3" style={{ color: '#64748b' }}>Founder, SimplifAI Solutions · Alabama, US</p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/tadeas-manas-42580a164"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:text-white"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8' }}
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/ted_manas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:text-white"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8' }}
                >
                  <Instagram size={14} /> Instagram
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6 max-w-sm">
              {[
                { icon: Phone, val: '24/7', label: 'Support for every client' },
                { icon: Clock, val: 'Fast', label: 'Setup, done for you' },
                { icon: Users, val: '6+', label: 'Industries served' },
                { icon: ShieldCheck, val: '100%', label: 'Custom built' },
              ].map((s) => {
                const Icon = s.icon
                return (
                  <div
                    key={s.val}
                    className="rounded-2xl p-5"
                    style={{ background: 'rgba(15,24,41,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <Icon size={18} color="#22d3ee" className="mb-3" />
                    <div className="text-xl font-black text-white">{s.val}</div>
                    <div className="text-xs mt-0.5" style={{ color: '#64748b' }}>{s.label}</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Story */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-black text-white mb-4">The Origin Story</h2>
              <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#94a3b8' }}>
                <p>I&apos;m a former college athlete who competed while earning two degrees simultaneously. In my spare time, I taught myself how to build AI systems — not because it was assigned, but because I was obsessed with what the technology could actually do for real businesses.</p>
                <p>In June 2025, I founded SimplifAI after watching the same problem play out over and over: hardworking business owners investing real money into marketing and their reputation, then losing customers at the very last step because nobody picked up the phone.</p>
                <p>The marketing works. The work is great. The reputation is solid. But the phone rings and nobody answers. That lead calls the next result on Google. Gone.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white mb-4">Why Custom-Built Matters</h2>
              <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#94a3b8' }}>
                <p>Other AI receptionist companies give you a generic system and wish you luck. SimplifAI is custom-built around each client&apos;s specific business, systems, and workflows.</p>
                <p>We don&apos;t do one-size-fits-all. Before we build anything, we talk to you. We learn how your business works, what your customers ask, what your systems are, and what you actually need. Then we build it around you.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white mb-4">The 24/7 Support Commitment</h2>
              <p className="text-lg leading-relaxed" style={{ color: '#94a3b8' }}>
                Every client gets my number. Text me any time, and I&apos;ll handle it. If your pricing changes, your hours change, you add a new service, just send a message. We update it right away. Because I believe that buying a system and being abandoned with it is irresponsible, and that&apos;s not how I work.
              </p>
            </div>

            <a
              href="https://calendly.com/ted-manas/ai-appointment-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold rounded-xl btn-primary"
            >
              Book a call with Tadeáš
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
