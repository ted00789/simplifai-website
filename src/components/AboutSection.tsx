'use client'
import { ArrowRight, Phone, Clock, Wrench } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function AboutSection() {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="about"
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="reveal order-2 lg:order-1">
            <div
              className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0"
              style={{
                background: 'linear-gradient(135deg, #0d1325 0%, #111c33 100%)',
                border: '1px solid rgba(34,211,238,0.15)',
              }}
            >
              {/* Placeholder portrait */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center text-4xl font-black"
                  style={{ background: 'rgba(34,211,238,0.1)', border: '2px solid rgba(34,211,238,0.3)', color: '#22d3ee' }}
                >
                  T
                </div>
                <p className="font-bold text-white">Tadeáš Manas</p>
                <p className="text-sm" style={{ color: '#64748b' }}>Photo coming soon</p>
              </div>

              {/* Accent corner */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ background: 'linear-gradient(90deg, #22d3ee, #38bdf8)' }}
              />
            </div>

            {/* Stats below photo */}
            <div className="grid grid-cols-3 gap-4 mt-6 max-w-sm mx-auto lg:mx-0">
              {[
                { icon: Phone, label: '24/7', sub: 'Support' },
                { icon: Clock, label: '5 Days', sub: 'To Go Live' },
                { icon: Wrench, label: '100%', sub: 'Custom Built' },
              ].map((stat) => {
                const Icon = stat.icon
                return (
                  <div
                    key={stat.label}
                    className="rounded-xl p-4 text-center"
                    style={{
                      background: 'rgba(15,24,41,0.8)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <Icon size={16} color="#22d3ee" className="mx-auto mb-2" />
                    <div className="text-sm font-bold text-white">{stat.label}</div>
                    <div className="text-xs" style={{ color: '#64748b' }}>{stat.sub}</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="flex justify-start mb-4">
              <div className="section-badge reveal">The Founder</div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6 reveal reveal-delay-1">
              Hi, I&apos;m Tadeáš.
            </h2>

            <div className="space-y-5">
              {[
                "I started SimplifAI because I kept seeing the same problem: hardworking business owners putting everything into their craft, their marketing, their reputation, and then losing customers at the very last step because nobody picked up the phone.",
                "I've built custom AI systems for businesses across HVAC, real estate, detailing, landscaping, and more. Every single one is built from scratch, around that specific business. Not from a template, not a one-size-fits-all solution.",
                "I'm also a one-call-away kind of partner. Every client gets my number. Text me any time, and I'll handle it. Because I believe that buying a system and being abandoned with it is irresponsible, and that's not how I work.",
              ].map((para, i) => (
                <p
                  key={i}
                  className={`leading-relaxed reveal reveal-delay-${i + 2}`}
                  style={{ color: '#94a3b8' }}
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-10 reveal reveal-delay-4">
              <a
                href="https://calendly.com/ted-manas/ai-appointment-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold rounded-xl btn-primary"
              >
                Book a free 20-minute call with Tadeáš
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
