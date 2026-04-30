'use client'
import { ArrowRight, Phone } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function FinalCTA() {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 md:py-32 px-6 relative overflow-hidden"
    >
      {/* Background orbs */}
      <div
        className="orb w-96 h-96 opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(34,211,238,0.5) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div className="noise-overlay" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Phone icon */}
        <div className="flex justify-center mb-8">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center reveal"
            style={{
              background: 'rgba(34,211,238,0.1)',
              border: '2px solid rgba(34,211,238,0.3)',
              boxShadow: '0 0 40px rgba(34,211,238,0.15)',
            }}
          >
            <Phone size={36} color="#22d3ee" className="animate-float" />
          </div>
        </div>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6 reveal reveal-delay-1">
          Your phone is ringing
          <br />
          <span className="gradient-text">right now.</span>
        </h2>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed reveal reveal-delay-2" style={{ color: '#94a3b8' }}>
          Somewhere out there, a potential customer is about to search for what you do, find your
          number, and call. What happens next is up to you.
          <br /><br />
          SimplifAI makes sure that call, and every call after it, gets answered. Every time. 24/7.
          Custom-built for your business.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal reveal-delay-3">
          <a
            href="https://calendly.com/ted-manas/ai-appointment-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-10 py-5 text-base font-bold rounded-xl btn-primary w-full sm:w-auto justify-center"
          >
            Book a Free 20-Minute Call
            <ArrowRight size={18} />
          </a>
          <a
            href="#demos"
            className="inline-flex items-center gap-2 px-8 py-5 text-sm font-semibold rounded-xl btn-secondary w-full sm:w-auto justify-center"
          >
            Not ready? Try the AI demo first →
          </a>
        </div>

        <p className="mt-6 text-sm reveal reveal-delay-4" style={{ color: '#475569' }}>
          No pressure. We&apos;ll show you exactly what&apos;s possible for your business.
        </p>
      </div>
    </section>
  )
}
