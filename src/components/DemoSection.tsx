'use client'
import { ArrowUpRight } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const demos = [
  { industry: 'HVAC', emoji: '🌡️', number: '+1 (959) 444-4307', desc: 'Answers HVAC calls 24/7', delay: 'reveal-delay-1' },
  { industry: 'Auto Detailing', emoji: '🚗', number: '+1 (878) 879-2272', desc: 'Books detailing appointments', delay: 'reveal-delay-2' },
  { industry: 'Real Estate', emoji: '🏠', number: '+1 (901) 460-9886', desc: 'Qualifies buyer and seller leads', delay: 'reveal-delay-3' },
  { industry: 'Massage & Spa', emoji: '🌸', number: '+1 (207) 830-4223', desc: 'Books appointments, answers FAQs', delay: 'reveal-delay-4' },
  { industry: 'Lawn Care', emoji: '🌿', number: '+1 (878) 879-2399', desc: 'Qualifies leads, gives estimates', delay: 'reveal-delay-1' },
  { industry: 'Auto Repair', emoji: '🔧', number: '+1 (610) 904-9146', desc: 'Books service appointments', delay: 'reveal-delay-2' },
]

export default function DemoSection() {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="demos"
      className="relative py-16 md:py-20 px-6"
      style={{ background: '#07091a' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="section-badge reveal">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Live Demos
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3 reveal reveal-delay-1">
            Hear it yourself.{' '}
            <span className="gradient-text">Call the AI. Right now.</span>
          </h2>
          <p className="text-base max-w-md mx-auto reveal reveal-delay-2" style={{ color: '#64748b' }}>
            These are live demos, not recordings. Call the number for your industry.
          </p>
        </div>

        {/* Premium demo cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {demos.map((demo) => (
            <a
              key={demo.industry}
              href={`tel:${demo.number.replace(/\s|\(|\)|-/g, '')}`}
              className={`relative rounded-2xl p-6 flex flex-col gap-5 reveal ${demo.delay} group cursor-pointer`}
              style={{
                background: 'linear-gradient(145deg, rgba(13,21,45,0.95) 0%, rgba(9,15,32,0.95) 100%)',
                border: '1px solid rgba(34,211,238,0.1)',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(34,211,238,0.3)'
                el.style.boxShadow = '0 0 40px rgba(34,211,238,0.07), 0 16px 48px rgba(0,0,0,0.5)'
                el.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(34,211,238,0.1)'
                el.style.boxShadow = 'none'
                el.style.transform = 'translateY(0)'
              }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                  style={{
                    background: 'rgba(34,211,238,0.08)',
                    border: '1px solid rgba(34,211,238,0.15)',
                    boxShadow: '0 0 20px rgba(34,211,238,0.06)',
                  }}
                >
                  {demo.emoji}
                </div>
                <span
                  className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{
                    background: 'rgba(34,239,128,0.08)',
                    border: '1px solid rgba(34,239,128,0.18)',
                    color: '#4ade80',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  LIVE
                </span>
              </div>

              {/* Industry + desc */}
              <div>
                <h3 className="text-base font-bold text-white mb-1">{demo.industry}</h3>
                <p className="text-sm" style={{ color: '#475569' }}>{demo.desc}</p>
              </div>

              {/* Number + CTA */}
              <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                <span
                  className="text-sm font-bold font-mono tracking-tight"
                  style={{ color: '#22d3ee' }}
                >
                  {demo.number}
                </span>
                <span
                  className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 group-hover:gap-1.5"
                  style={{
                    background: 'rgba(34,211,238,0.08)',
                    border: '1px solid rgba(34,211,238,0.12)',
                    color: '#22d3ee',
                  }}
                >
                  Call now
                  <ArrowUpRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Proof line */}
        <p className="text-center mt-8 text-sm reveal" style={{ color: '#334155' }}>
          A detailing client had their AI answer{' '}
          <span style={{ color: '#22d3ee' }}>40 calls</span> in the first week.
          Calls that would have gone to voicemail.
        </p>

        {/* CTA */}
        <div className="text-center mt-5 reveal">
          <a
            href="https://calendly.com/ted-manas/ai-appointment-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl btn-primary"
          >
            Want this for your business? Book a Free Call
          </a>
        </div>
      </div>
    </section>
  )
}
