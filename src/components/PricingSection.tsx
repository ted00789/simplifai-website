'use client'
import { Check, Zap, ArrowRight } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const tiers = [
  {
    name: 'AI Receptionist',
    price: 'Starting at $297',
    period: '/mo',
    setup: 'One-time setup fee applies separately',
    callNote: 'Call usage billed at $0.10 to $0.20 per minute based on your setup',
    description: 'For businesses that need their phones answered around the clock.',
    features: [
      'Custom-built for your business',
      'Answers calls 24/7',
      'Qualifies leads, books, takes messages',
      'Gives estimates over the phone',
      'Connects to your calendar and CRM',
      '24/7 text support from Tadeáš',
      'Same-day updates whenever you need them',
    ],
    cta: 'Get Started',
    highlight: false,
    delay: 'reveal-delay-1',
  },
  {
    name: 'AI Receptionist + Chatbot',
    price: 'Starting at $397',
    period: '/mo',
    setup: 'One-time setup fee applies separately',
    callNote: 'Call usage billed at $0.10 to $0.20 per minute based on your setup',
    description: 'Phone and website AI working together to capture every lead.',
    features: [
      'Everything in AI Receptionist',
      'Custom AI chatbot for your website',
      'Qualifies website visitors 24/7',
      'Answers questions instantly',
      'Books appointments from chat',
      'Fully custom-trained on your business',
    ],
    cta: 'Get Started',
    highlight: false,
    delay: 'reveal-delay-2',
  },
  {
    name: 'The Talking Website',
    price: 'Starting at $480',
    period: '/mo',
    setup: 'Custom website from $1,500 (one-time). Setup fee applies separately.',
    callNote: 'Call usage billed at $0.10 to $0.20 per minute based on your setup',
    description: 'Your entire front-of-house, fully automated. Our flagship package.',
    features: [
      'AI Receptionist (24/7 call answering)',
      'Custom website, built from scratch',
      'AI chatbot embedded on your site',
      'Mobile-first, SEO-optimized design',
      'Everything built to work together',
      '24/7 ongoing support across all three',
      'Unlimited updates, just text us',
    ],
    cta: 'Get the Bundle',
    highlight: true,
    delay: 'reveal-delay-3',
  },
]

const faqRows = [
  {
    q: 'Is this cheaper than a human receptionist?',
    a: 'Yes. A full-time receptionist costs $2,500 to $3,500 per month and only works 8 hours. Ours works 24/7 starting at $297 per month.',
  },
  {
    q: 'How does per-minute billing work?',
    a: 'The AI uses a small amount of credit per call, similar to phone minutes. The rate ranges from $0.10 to $0.20 per minute depending on what you need the AI to handle. Most clients spend $30 to $50 per month on call usage. We give you an honest estimate upfront.',
  },
  {
    q: 'Can I cancel?',
    a: 'Yes, any time with 30 days notice. No lock-in contracts. We keep clients because they get results, not because they feel stuck.',
  },
]

export default function PricingSection() {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="pricing"
      className="py-24 md:py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <div className="section-badge reveal">Pricing</div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 reveal reveal-delay-1">
            Straightforward pricing.
            <br />
            <span className="gradient-text">No surprises.</span>
          </h2>
        </div>

        {/* Anchor framing */}
        <div
          className="text-center mb-12 px-6 py-4 rounded-2xl max-w-2xl mx-auto reveal"
          style={{
            background: 'rgba(34,211,238,0.04)',
            border: '1px solid rgba(34,211,238,0.12)',
          }}
        >
          <p style={{ color: '#94a3b8' }}>
            A full-time receptionist costs{' '}
            <strong className="text-white">$2,500 to $3,500 per month</strong> and only works 8 hours a day.
            Ours works 24/7.{' '}
            <strong style={{ color: '#22d3ee' }}>Starting at $297 per month.</strong>
          </p>
        </div>

        {/* Pricing tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 flex flex-col reveal ${tier.delay} ${
                tier.highlight ? '' : 'glass-card'
              }`}
              style={
                tier.highlight
                  ? {
                      background: 'linear-gradient(145deg, rgba(34,211,238,0.09) 0%, rgba(34,211,238,0.04) 100%)',
                      border: '2px solid rgba(34,211,238,0.35)',
                      boxShadow: '0 0 48px rgba(34,211,238,0.08)',
                    }
                  : {}
              }
            >
              {/* Best value badge */}
              {tier.highlight && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap"
                  style={{ background: '#22d3ee', color: '#07091a' }}
                >
                  <Zap size={11} fill="#07091a" />
                  BEST VALUE
                </div>
              )}

              <h3 className="text-lg font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-sm mb-5" style={{ color: '#475569' }}>
                {tier.description}
              </p>

              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-black text-white">{tier.price}</span>
                <span className="text-sm font-medium" style={{ color: '#475569' }}>{tier.period}</span>
              </div>
              <p className="text-xs mb-1" style={{ color: '#334155' }}>{tier.setup}</p>
              <p className="text-xs mb-6 italic" style={{ color: '#334155' }}>{tier.callNote}</p>

              <ul className="space-y-3 mb-6 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check
                      size={15}
                      className="mt-0.5 flex-shrink-0"
                      color={tier.highlight ? '#22d3ee' : '#4ade80'}
                    />
                    <span className="text-sm" style={{ color: '#94a3b8' }}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://calendly.com/ted-manas/ai-appointment-demo"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold transition-all ${
                  tier.highlight ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                {tier.cta} <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* FAQ inline rows */}
        <div
          className="rounded-2xl overflow-hidden reveal"
          style={{ border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div
            className="px-8 py-4"
            style={{ background: 'rgba(15,24,41,0.8)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
          >
            <h3 className="text-sm font-semibold text-white">Common pricing questions</h3>
          </div>
          {faqRows.map((row, i) => (
            <div
              key={row.q}
              className="px-8 py-5 grid grid-cols-1 md:grid-cols-2 gap-3"
              style={{
                background: i % 2 === 0 ? 'rgba(15,24,41,0.5)' : 'rgba(15,24,41,0.3)',
                borderBottom: i < faqRows.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
              }}
            >
              <p className="text-sm font-semibold text-white">{row.q}</p>
              <p className="text-sm" style={{ color: '#94a3b8' }}>{row.a}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 reveal">
          <a
            href="https://calendly.com/ted-manas/ai-appointment-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold rounded-xl btn-primary"
          >
            Get started: we will quote your exact setup <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
