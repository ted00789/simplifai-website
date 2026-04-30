'use client'
import { Wrench, Plug, FlaskConical } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const solutionCards = [
  {
    icon: Wrench,
    title: 'Built for your business, not from a template.',
    body: 'We learn how your business works, then build the AI around it. Your voice, your services, your pricing. It sounds like you, not like a robot.',
    delay: 'reveal-delay-1',
  },
  {
    icon: Plug,
    title: 'Works with the tools you already use.',
    body: 'We connect to your calendar, your CRM, and your booking system. No new software to learn. It just plugs in and works.',
    delay: 'reveal-delay-2',
  },
  {
    icon: FlaskConical,
    title: 'You test it before it goes live.',
    body: "You call it yourself. You try it. If anything isn't right, we fix it. Your AI only goes live when you're happy with it.",
    delay: 'reveal-delay-3',
  },
]

export default function SolutionSection() {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="solution"
      className="relative py-20 md:py-28 px-6"
      style={{ background: '#07091a' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="section-badge reveal">The Fix</div>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight reveal reveal-delay-1">
            An AI built around your business.
            <br />
            <span className="gradient-text">Not a one-size-fits-all tool.</span>
          </h2>
          <p className="mt-3 text-base max-w-lg mx-auto reveal reveal-delay-2" style={{ color: '#64748b' }}>
            Every client gets a system built from scratch, connected to their tools, and tested before going live.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {solutionCards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className={`rounded-2xl p-6 reveal ${card.delay}`}
                style={{
                  background: 'rgba(11,18,36,0.7)',
                  border: '1px solid rgba(34,211,238,0.1)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.15)' }}
                >
                  <Icon size={18} color="#22d3ee" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">{card.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{card.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
