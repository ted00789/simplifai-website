'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function SocialProof() {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 md:py-32 px-6"
      style={{ background: 'linear-gradient(180deg, #07091a 0%, #09112c 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-4">
            <div className="section-badge reveal">Results</div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight reveal reveal-delay-1">
            Real businesses.{' '}
            <span className="gradient-text">Real results.</span>
          </h2>
        </div>

        {/* Hero stat card */}
        <div
          className="reveal reveal-delay-2 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(34,211,238,0.1) 0%, rgba(56,189,248,0.06) 100%)',
            border: '1px solid rgba(34,211,238,0.3)',
          }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(34,211,238,0.12) 0%, transparent 70%)' }}
          />

          <div className="relative z-10">
            {/* Stats */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-8">
              <div className="text-center">
                <div
                  className="text-7xl md:text-8xl font-black mb-1"
                  style={{ color: '#22d3ee', lineHeight: 1 }}
                >
                  40
                </div>
                <div className="text-white font-semibold">calls answered</div>
                <div className="text-sm" style={{ color: '#64748b' }}>in their first week</div>
              </div>
              <div
                className="hidden md:block w-px h-20"
                style={{ background: 'rgba(34,211,238,0.2)' }}
              />
              <div className="text-center">
                <div
                  className="text-7xl md:text-8xl font-black mb-1"
                  style={{ color: '#22d3ee', lineHeight: 1 }}
                >
                  $0
                </div>
                <div className="text-white font-semibold">went to voicemail</div>
                <div className="text-sm" style={{ color: '#64748b' }}>not a single one</div>
              </div>
            </div>

            <p className="max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: '#94a3b8' }}>
              A car detailing client switched on their SimplifAI receptionist and in the first seven
              days, the AI answered <strong className="text-white">40 calls that would have gone to
              voicemail</strong>. Not a single one slipped through. Every caller got a real response,
              right away.
            </p>
          </div>
        </div>

        {/* Supporting proof points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[
            {
              stat: '24/7',
              label: 'Always on',
              body: 'Your AI answers calls at 2am on a Sunday the same way it does at noon on a Tuesday.',
              delay: 'reveal-delay-1',
            },
            {
              stat: '5 days',
              label: 'Time to go live',
              body: 'From your kickoff call to your AI answering real customers. We handle the entire build.',
              delay: 'reveal-delay-2',
            },
            {
              stat: '100%',
              label: 'Custom built',
              body: 'Built around your business, your pricing, your calendar, your voice. Not a template.',
              delay: 'reveal-delay-3',
            },
          ].map((item) => (
            <div
              key={item.stat}
              className={`glass-card rounded-2xl p-8 text-center reveal ${item.delay}`}
            >
              <div
                className="text-4xl font-black mb-1"
                style={{ color: '#22d3ee' }}
              >
                {item.stat}
              </div>
              <div className="text-sm font-bold text-white mb-3">{item.label}</div>
              <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
