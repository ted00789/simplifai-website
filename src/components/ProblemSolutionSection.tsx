'use client'
import { PhoneMissed, Repeat, Clock, Wrench, Plug, FlaskConical } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const problems = [
  {
    icon: Clock,
    title: 'They called after hours.',
    body: 'Most calls come at night, on weekends, or when you are on a job. By the time you call back, they already booked with someone else.',
  },
  {
    icon: Repeat,
    title: 'You answer the same questions every day.',
    body: '"What are your hours? Do you service my area? How much does it cost?" You stop what you are doing to answer the same things, over and over.',
  },
  {
    icon: PhoneMissed,
    title: 'Your phone rings when your hands are full.',
    body: "You can not answer. They do not leave a voicemail. They just Google the next result. That was a real job, gone.",
  },
]

const solutions = [
  {
    icon: Wrench,
    title: 'Built around your business.',
    body: 'We learn how your business works, then build the AI to match. Your voice, your services, your pricing. Not a template.',
  },
  {
    icon: Plug,
    title: 'Works with the tools you already use.',
    body: 'Connects to your calendar, your CRM, your booking system. No new software to learn. It just plugs in.',
  },
  {
    icon: FlaskConical,
    title: 'You test it before it goes live.',
    body: "Call it yourself. If anything is off, we fix it. Your AI only goes live when you are happy with it.",
  },
]

export default function ProblemSolutionSection() {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="problem-solution"
      className="relative py-16 md:py-20 px-6 overflow-hidden"
      style={{ background: '#09112c' }}
    >
      {/* ── Aurora blobs ── */}
      <div
        className="absolute pointer-events-none aurora-blob-red"
        style={{
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(239,68,68,0.2) 0%, rgba(239,68,68,0.06) 45%, transparent 70%)',
          top: '-140px',
          left: '-120px',
          filter: 'blur(72px)',
        }}
      />
      <div
        className="absolute pointer-events-none aurora-blob-cyan"
        style={{
          width: '620px',
          height: '620px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.17) 0%, rgba(34,211,238,0.05) 45%, transparent 70%)',
          bottom: '-180px',
          right: '-140px',
          filter: 'blur(80px)',
        }}
      />

      <style>{`
        @keyframes auroraDriftRed {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(28px,18px) scale(1.06); }
          66%      { transform: translate(-18px,28px) scale(0.96); }
        }
        @keyframes auroraDriftCyan {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(-22px,-18px) scale(1.09); }
          66%      { transform: translate(14px,-26px) scale(0.94); }
        }
        .aurora-blob-red  { animation: auroraDriftRed  13s ease-in-out infinite; }
        .aurora-blob-cyan { animation: auroraDriftCyan 16s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .aurora-blob-red, .aurora-blob-cyan { animation: none; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">

          {/* ══ THE PROBLEM ══ */}
          {/* Gradient-border wrapper: 1px padding + gradient bg creates the border */}
          <div
            className="reveal rounded-2xl"
            style={{
              padding: '1px',
              background: 'linear-gradient(135deg, rgba(239,68,68,0.5) 0%, rgba(239,68,68,0.15) 40%, rgba(239,68,68,0.04) 100%)',
              boxShadow: '0 0 60px rgba(239,68,68,0.08)',
            }}
          >
            <div
              className="rounded-2xl p-6 md:p-8 h-full relative overflow-hidden"
              style={{
                background: 'rgba(7,9,26,0.92)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
              }}
            >
              {/* Top colour-bleed spotlight */}
              <div
                className="absolute inset-x-0 top-0 h-44 pointer-events-none"
                style={{
                  background: 'linear-gradient(180deg, rgba(239,68,68,0.13) 0%, transparent 100%)',
                  borderRadius: '16px 16px 0 0',
                }}
              />

              <div className="relative">
                {/* Section badge */}
                <div className="flex items-center gap-3 mb-7">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-base font-black flex-shrink-0"
                    style={{
                      background: 'rgba(239,68,68,0.1)',
                      border: '1px solid rgba(239,68,68,0.35)',
                      color: '#f87171',
                      boxShadow: '0 0 22px rgba(239,68,68,0.28), inset 0 0 10px rgba(239,68,68,0.06)',
                    }}
                  >
                    ✕
                  </div>
                  <h3 className="text-3xl font-black text-white">The Problem</h3>
                </div>

                <div className="space-y-6">
                  {problems.map((item, i) => {
                    const Icon = item.icon
                    return (
                      <div key={i} className="flex items-start gap-4">
                        {/* Frosted-glass icon */}
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{
                            background: 'rgba(239,68,68,0.07)',
                            border: '1px solid rgba(239,68,68,0.18)',
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            boxShadow: '0 0 14px rgba(239,68,68,0.12), inset 0 0 8px rgba(239,68,68,0.04)',
                          }}
                        >
                          <Icon size={16} color="#f87171" />
                        </div>
                        {/* Left accent line */}
                        <div style={{ borderLeft: '2px solid rgba(239,68,68,0.22)', paddingLeft: '16px' }}>
                          <p className="text-sm font-bold text-white mb-1">{item.title}</p>
                          <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{item.body}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* ══ THE FIX ══ */}
          <div
            className="reveal reveal-delay-2 rounded-2xl"
            style={{
              padding: '1px',
              background: 'linear-gradient(135deg, rgba(34,211,238,0.45) 0%, rgba(34,211,238,0.12) 40%, rgba(34,211,238,0.02) 100%)',
              boxShadow: '0 0 60px rgba(34,211,238,0.07)',
            }}
          >
            <div
              className="rounded-2xl p-6 md:p-8 h-full relative overflow-hidden"
              style={{
                background: 'rgba(7,9,26,0.92)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
              }}
            >
              {/* Top colour-bleed spotlight */}
              <div
                className="absolute inset-x-0 top-0 h-44 pointer-events-none"
                style={{
                  background: 'linear-gradient(180deg, rgba(34,211,238,0.1) 0%, transparent 100%)',
                  borderRadius: '16px 16px 0 0',
                }}
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-7">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-base font-black flex-shrink-0"
                    style={{
                      background: 'rgba(34,211,238,0.1)',
                      border: '1px solid rgba(34,211,238,0.38)',
                      color: '#22d3ee',
                      boxShadow: '0 0 22px rgba(34,211,238,0.25), inset 0 0 10px rgba(34,211,238,0.06)',
                    }}
                  >
                    ✓
                  </div>
                  <h3 className="text-3xl font-black text-white">The Fix</h3>
                </div>

                <div className="space-y-6">
                  {solutions.map((item, i) => {
                    const Icon = item.icon
                    return (
                      <div key={i} className="flex items-start gap-4">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{
                            background: 'rgba(34,211,238,0.06)',
                            border: '1px solid rgba(34,211,238,0.18)',
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            boxShadow: '0 0 14px rgba(34,211,238,0.09), inset 0 0 8px rgba(34,211,238,0.03)',
                          }}
                        >
                          <Icon size={16} color="#22d3ee" />
                        </div>
                        <div style={{ borderLeft: '2px solid rgba(34,211,238,0.22)', paddingLeft: '16px' }}>
                          <p className="text-sm font-bold text-white mb-1">{item.title}</p>
                          <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{item.body}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
