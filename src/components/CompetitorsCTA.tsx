'use client'
import Script from 'next/script'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function CompetitorsCTA() {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="book"
      className="relative py-16 md:py-20 px-6 overflow-hidden"
      style={{ background: '#07091a' }}
    >
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(34,211,238,0.07) 0%, transparent 70%)' }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-5">
          <div className="section-badge reveal">Book a Call</div>
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4 reveal reveal-delay-1">
          Your competitors are already{' '}
          <span className="gradient-text">available 24/7.</span>
          <br />
          Let&apos;s fix that.
        </h2>

        <p className="text-base mb-10 reveal reveal-delay-2" style={{ color: '#64748b' }}>
          Book a free call. No pressure. We will show you exactly what is possible for your business.
        </p>

        {/* Calendly inline widget */}
        <div className="reveal reveal-delay-3">
          <div
            className="calendly-inline-widget rounded-2xl overflow-hidden"
            data-url="https://calendly.com/ted-manas/ai-appointment-demo?background_color=07091a&text_color=f8fafc&primary_color=22d3ee&hide_gdpr_banner=1"
            style={{ minWidth: '320px', height: '700px' }}
          />
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
        </div>
      </div>
    </section>
  )
}
