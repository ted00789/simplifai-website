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
      className="relative py-16 md:py-20 px-6"
      style={{ background: '#09112c' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">

          {/* Left: The Problem */}
          <div
            className="rounded-2xl p-6 md:p-8 reveal"
            style={{
              background: 'rgba(239,68,68,0.03)',
              border: '1px solid rgba(239,68,68,0.1)',
            }}
          >
            <div className="flex items-center gap-3 mb-7">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-sm font-black flex-shrink-0"
                style={{ background: 'rgba(239,68,68,0.15)', color: '#f87171', border: '1px solid rgba(239,68,68,0.2)' }}
              >
                ✕
              </div>
              <h3 className="text-3xl font-black text-white">The Problem</h3>
            </div>

            <div className="space-y-5">
              {problems.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.12)' }}
                    >
                      <Icon size={16} color="#f87171" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white mb-1">{item.title}</p>
                      <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{item.body}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: The Fix */}
          <div
            className="rounded-2xl p-6 md:p-8 reveal reveal-delay-2"
            style={{
              background: 'rgba(34,211,238,0.03)',
              border: '1px solid rgba(34,211,238,0.1)',
            }}
          >
            <div className="flex items-center gap-3 mb-7">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-sm font-black flex-shrink-0"
                style={{ background: 'rgba(34,211,238,0.15)', color: '#22d3ee', border: '1px solid rgba(34,211,238,0.2)' }}
              >
                ✓
              </div>
              <h3 className="text-3xl font-black text-white">The Fix</h3>
            </div>

            <div className="space-y-5">
              {solutions.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(34,211,238,0.07)', border: '1px solid rgba(34,211,238,0.12)' }}
                    >
                      <Icon size={16} color="#22d3ee" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white mb-1">{item.title}</p>
                      <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{item.body}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
