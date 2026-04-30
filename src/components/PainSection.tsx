'use client'
import { PhoneMissed, Repeat, Clock } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const painCards = [
  {
    icon: Clock,
    title: "They called after hours. You missed it.",
    body: "Most calls come after 5 pm, on weekends, or when you're on a job. By the time you call back, they've already booked with someone else.",
    delay: 'reveal-delay-1',
  },
  {
    icon: Repeat,
    title: "You answer the same questions every day.",
    body: '"What are your hours?" "Do you service my area?" "How much does it cost?" You answer them all, over and over, instead of doing the actual work.',
    delay: 'reveal-delay-2',
  },
  {
    icon: PhoneMissed,
    title: "Your phone rings when your hands are full.",
    body: "You're on a job, driving, or with a customer. You can't answer. The caller doesn't leave a voicemail. They just Google the next result.",
    delay: 'reveal-delay-3',
  },
]

export default function PainSection() {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="pain"
      className="relative py-20 md:py-28 px-6"
      style={{ background: '#09112c' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="section-badge reveal">Sound familiar?</div>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight reveal reveal-delay-1">
            You&apos;re losing jobs every week.
            <br />
            <span className="gradient-text">Not because of your work.</span>
          </h2>
          <p className="mt-3 text-base max-w-lg mx-auto reveal reveal-delay-2" style={{ color: '#64748b' }}>
            Because of what happens after the phone rings.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {painCards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className={`rounded-2xl p-6 reveal ${card.delay}`}
                style={{
                  background: 'rgba(7,9,26,0.6)',
                  border: '1px solid rgba(239,68,68,0.12)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.15)' }}
                >
                  <Icon size={18} color="#f87171" />
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
