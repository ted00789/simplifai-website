'use client'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const faqs = [
  {
    q: 'What is an AI receptionist for small businesses?',
    a: 'An AI receptionist is a custom-built system that answers your business phone calls 24/7. It greets callers, answers their questions, qualifies leads, books appointments, and takes messages, just like a human receptionist would. The difference is it works around the clock for a fraction of the cost.',
  },
  {
    q: 'How is SimplifAI different from a regular answering service?',
    a: 'Traditional answering services use humans who read from scripts and charge per call. Our AI is built specifically around your business. It knows your pricing, your services, your hours, and your booking process. It works at 3 am on a Sunday and never calls in sick.',
  },
  {
    q: 'Can an AI receptionist actually book appointments for me?',
    a: 'Yes. We connect your AI to your calendar, whether that is Google Calendar, Calendly, or your CRM. Callers can book, reschedule, or cancel appointments without you needing to pick up the phone.',
  },
  {
    q: 'Will callers know they are talking to an AI?',
    a: 'The AI speaks in natural, conversational language. There are no "press 1 for" menus, no hold music, and no robotic voices. Many callers do not realize it is AI. You can hear it yourself by calling one of our live demos above.',
  },
  {
    q: 'How does setup work?',
    a: 'We handle everything. You have one conversation with us about your business — who calls, what they ask, what systems you use — and we take it from there. You test it before it goes live.',
  },
  {
    q: 'Does it work with my existing phone number?',
    a: 'Yes. We forward your existing number to the AI. Your number stays the same. Your customers will not notice any difference, except that someone always answers.',
  },
  {
    q: 'What industries do you build AI receptionists for?',
    a: 'We have built systems for HVAC, auto detailing, real estate, massage and spa, lawn care, auto repair, plumbing, cleaning services, and more. If your business takes calls and you want to stop missing them, we can build for you.',
  },
  {
    q: 'How much does an AI receptionist cost?',
    a: 'It depends on your setup and what you need the AI to handle. Book a free call and we will put together a custom quote for your business. There are no lock-in contracts.',
  },
  {
    q: 'Can I change the AI after it goes live?',
    a: 'Yes, any time. Every client gets direct support from Tadeáš. If your pricing changes, your hours change, or you add a new service, just send a text. We update it right away.',
  },
  {
    q: 'Is there a contract or lock-in?',
    a: 'No contracts. You can cancel any time. We keep clients because they get results, not because they feel stuck.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="faq"
      className="py-16 px-6"
      style={{ background: '#09112c' }}
    >
      {/* FAQPage schema for SEO and AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
          }),
        }}
      />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="section-badge reveal">FAQ</div>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight reveal reveal-delay-1">
            Common questions,
            <br />
            <span className="gradient-text">straight answers.</span>
          </h2>
        </div>

        {/* Two-column accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="reveal rounded-xl overflow-hidden"
              style={{
                background: 'rgba(7,9,26,0.7)',
                border: openIndex === i
                  ? '1px solid rgba(34,211,238,0.25)'
                  : '1px solid rgba(255,255,255,0.05)',
                transition: 'border-color 0.25s ease',
              }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-sm font-semibold text-white leading-snug pr-2">{faq.q}</span>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    background: openIndex === i ? 'rgba(34,211,238,0.12)' : 'rgba(255,255,255,0.04)',
                    color: openIndex === i ? '#22d3ee' : '#475569',
                  }}
                >
                  {openIndex === i ? <Minus size={12} /> : <Plus size={12} />}
                </span>
              </button>

              <div
                style={{
                  maxHeight: openIndex === i ? '300px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.35s ease',
                }}
              >
                <p className="px-5 pb-4 text-sm leading-relaxed" style={{ color: '#64748b' }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm reveal" style={{ color: '#475569' }}>
          Still have questions?{' '}
          <a
            href="https://calendly.com/ted-manas/ai-appointment-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition-colors"
            style={{ color: '#22d3ee' }}
          >
            Book a free call
          </a>{' '}
          and ask Tadeáš directly.
        </p>
      </div>
    </section>
  )
}
