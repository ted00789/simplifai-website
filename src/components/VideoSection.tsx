'use client'
import { Play } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function VideoSection() {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <div className="section-badge reveal">From the Founder</div>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-3 reveal reveal-delay-1">
          Why I built SimplifAI
        </h2>
        <p className="text-lg mb-10 reveal reveal-delay-2" style={{ color: '#94a3b8' }}>
          A 2-minute message from Tadeáš, founder of SimplifAI Solutions.
        </p>

        {/* Video placeholder */}
        <div
          className="relative rounded-2xl overflow-hidden aspect-video reveal reveal-delay-3 group cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #0d1325 0%, #111c33 100%)',
            border: '1px solid rgba(34,211,238,0.2)',
          }}
        >
          {/* Placeholder visual */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
                background: 'rgba(34,211,238,0.15)',
                border: '2px solid rgba(34,211,238,0.4)',
                boxShadow: '0 0 40px rgba(34,211,238,0.2)',
              }}
            >
              <Play size={32} color="#22d3ee" fill="rgba(34,211,238,0.3)" />
            </div>
            <div>
              <p className="text-white font-semibold text-lg">Tadeáš&apos;s Founder Video</p>
              <p className="text-sm mt-1" style={{ color: '#64748b' }}>Coming soon, check back shortly</p>
            </div>
          </div>

          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* Script teaser */}
        <blockquote
          className="mt-10 text-left reveal"
          style={{
            borderLeft: '2px solid rgba(34,211,238,0.4)',
            paddingLeft: '20px',
          }}
        >
          <p className="text-lg italic leading-relaxed" style={{ color: '#94a3b8' }}>
            &ldquo;I kept seeing the same thing over and over. Business owners doing everything right:
            running ads, getting referrals, delivering great work. And then missing the call.&rdquo;
          </p>
          <cite className="block mt-3 text-sm font-semibold not-italic" style={{ color: '#22d3ee' }}>
            Tadeáš, Founder of SimplifAI Solutions
          </cite>
        </blockquote>
      </div>
    </section>
  )
}
