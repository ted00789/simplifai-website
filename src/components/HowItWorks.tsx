'use client'
import { CalendarCheck, Settings, Rocket } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const steps = [
  {
    number: '01',
    icon: CalendarCheck,
    title: 'Book a free call.',
    description:
      'Tell us about your business: who calls you, what questions they ask, what systems you use. We listen first, then get to work.',
    delay: 'reveal-delay-1',
  },
  {
    number: '02',
    icon: Settings,
    title: 'We build your AI.',
    description:
      'We pick the voice, tone, and style, or you choose. We connect it to your calendar, CRM, and pricing. We handle everything.',
    delay: 'reveal-delay-2',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Test it. Go live when you are ready.',
    description:
      'Call it yourself. Try it out. If something is off, we fix it. Your AI only goes live when you are happy with it.',
    delay: 'reveal-delay-3',
  },
]

export default function HowItWorks() {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="how-it-works"
      className="py-16 md:py-20 px-6 overflow-hidden"
      style={{ background: '#07091a' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="section-badge reveal">How It Works</div>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3 reveal reveal-delay-1">
            Simple.{' '}
            <span className="gradient-text">Done for you.</span>
          </h2>
          <p className="text-base max-w-md mx-auto reveal reveal-delay-2" style={{ color: '#64748b' }}>
            We do all the building. You just show up for one conversation.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="absolute hidden md:block h-px left-0 right-0"
            style={{
              top: '48px',
              background: 'linear-gradient(90deg, transparent 10%, rgba(34,211,238,0.15) 30%, rgba(34,211,238,0.15) 70%, transparent 90%)',
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.number} className={`flex flex-col items-center text-center reveal ${step.delay}`}>
                  {/* Icon circle */}
                  <div
                    className="relative w-24 h-24 rounded-full flex items-center justify-center mb-5"
                    style={{
                      background: 'linear-gradient(135deg, rgba(34,211,238,0.10) 0%, rgba(34,211,238,0.04) 100%)',
                      border: '2px solid rgba(34,211,238,0.2)',
                    }}
                  >
                    <Icon size={28} color="#22d3ee" />
                    <span
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black"
                      style={{ background: '#22d3ee', color: '#07091a' }}
                    >
                      {step.number.replace('0', '')}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#64748b' }}>
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
