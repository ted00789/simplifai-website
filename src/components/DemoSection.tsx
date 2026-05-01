'use client'
import { useState } from 'react'
import { ArrowUpRight, Thermometer, Sparkles, Home, Leaf, Scissors, Wrench } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import type { LucideIcon } from 'lucide-react'

interface Demo {
  industry: string
  Icon: LucideIcon
  number: string
  desc: string
  delay: string
  color: string
  scanDelay: string
}

const demos: Demo[] = [
  { industry: 'HVAC',          Icon: Thermometer, number: '+1 (959) 444-4307', desc: 'Answers HVAC calls 24/7',            delay: 'reveal-delay-1', color: '#22d3ee', scanDelay: '0s'   },
  { industry: 'Auto Detailing',Icon: Sparkles,    number: '+1 (878) 879-2272', desc: 'Books detailing appointments',       delay: 'reveal-delay-2', color: '#a78bfa', scanDelay: '1.1s' },
  { industry: 'Real Estate',   Icon: Home,        number: '+1 (901) 460-9886', desc: 'Qualifies buyer and seller leads',   delay: 'reveal-delay-3', color: '#34d399', scanDelay: '2.2s' },
  { industry: 'Massage & Spa', Icon: Leaf,        number: '+1 (207) 830-4223', desc: 'Books appointments, answers FAQs',  delay: 'reveal-delay-4', color: '#f472b6', scanDelay: '0.6s' },
  { industry: 'Lawn Care',     Icon: Scissors,    number: '+1 (878) 879-2399', desc: 'Qualifies leads, gives estimates',  delay: 'reveal-delay-1', color: '#4ade80', scanDelay: '1.7s' },
  { industry: 'Auto Repair',   Icon: Wrench,      number: '+1 (610) 904-9146', desc: 'Books service appointments',        delay: 'reveal-delay-2', color: '#fb923c', scanDelay: '2.8s' },
]

export default function DemoSection() {
  const sectionRef = useScrollReveal()
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="demos"
      className="relative py-16 md:py-20 px-6"
      style={{ background: '#07091a' }}
    >
      <style>{`
        @keyframes scanLine {
          0%   { transform: translateY(-80px); opacity: 0;   }
          8%   { opacity: 1;                                  }
          92%  { opacity: 0.7;                               }
          100% { transform: translateY(400px);  opacity: 0;  }
        }
        .demo-scan-line {
          position: absolute;
          inset-inline: 0;
          top: 0;
          height: 80px;
          background: linear-gradient(180deg, transparent 0%, rgba(34,211,238,0.045) 50%, transparent 100%);
          animation: scanLine 6s ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes waveBar {
          0%,100% { transform: scaleY(0.35); }
          50%      { transform: scaleY(1);    }
        }
        .wave-bar {
          display: inline-block;
          width: 2px;
          height: 14px;
          border-radius: 1px;
          transform-origin: bottom;
          animation: waveBar 0.75s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .demo-scan-line { animation: none; }
          .wave-bar       { animation: none; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="section-badge reveal">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Live Demos
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3 reveal reveal-delay-1">
            Hear it yourself.{' '}
            <span className="gradient-text">Call the AI. Right now.</span>
          </h2>
          <p className="text-base max-w-md mx-auto reveal reveal-delay-2" style={{ color: '#64748b' }}>
            These are live demos, not recordings. Call the number for your industry.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {demos.map((demo) => {
            const isHovered = hovered === demo.industry
            const { Icon } = demo

            return (
              <a
                key={demo.industry}
                href={`tel:${demo.number.replace(/[\s()+-]/g, '')}`}
                className={`relative rounded-2xl p-6 flex flex-col gap-5 reveal ${demo.delay} overflow-hidden`}
                style={{
                  background: 'linear-gradient(145deg, rgba(13,21,45,0.96) 0%, rgba(9,15,32,0.96) 100%)',
                  border: `1px solid ${isHovered ? `${demo.color}55` : 'rgba(34,211,238,0.1)'}`,
                  boxShadow: isHovered
                    ? `0 0 0 1px ${demo.color}22, 0 8px 32px ${demo.color}18, 0 20px 60px rgba(0,0,0,0.5)`
                    : '0 2px 20px rgba(0,0,0,0.35)',
                  transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                  cursor: 'pointer',
                }}
                onMouseEnter={() => setHovered(demo.industry)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Radar scan line */}
                <div className="demo-scan-line" style={{ animationDelay: demo.scanDelay }} />

                {/* Top row: icon + LIVE badge */}
                <div className="flex items-start justify-between relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `color-mix(in srgb, ${demo.color} 10%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${demo.color} 28%, transparent)`,
                      boxShadow: isHovered
                        ? `0 0 24px color-mix(in srgb, ${demo.color} 22%, transparent), inset 0 0 10px color-mix(in srgb, ${demo.color} 8%, transparent)`
                        : `0 0 12px color-mix(in srgb, ${demo.color} 10%, transparent)`,
                      transition: 'box-shadow 0.25s ease',
                    }}
                  >
                    <Icon size={18} color={demo.color} />
                  </div>

                  <span
                    className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      background: 'rgba(74,222,128,0.07)',
                      border: '1px solid rgba(74,222,128,0.22)',
                      color: '#4ade80',
                      boxShadow: '0 0 10px rgba(74,222,128,0.1)',
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    LIVE
                  </span>
                </div>

                {/* Industry + description */}
                <div className="relative z-10">
                  <h3 className="text-base font-bold text-white mb-1">{demo.industry}</h3>
                  <p className="text-sm" style={{ color: '#475569' }}>{demo.desc}</p>
                </div>

                {/* Number + CTA */}
                <div
                  className="flex items-center justify-between mt-auto pt-4 relative z-10"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
                >
                  {/* Phone number — wave bars appear on hover */}
                  <div className="flex items-center gap-2">
                    {isHovered && (
                      <div className="flex items-end gap-0.5" aria-hidden="true">
                        {[0, 0.12, 0.24, 0.36].map((delay, i) => (
                          <div
                            key={i}
                            className="wave-bar"
                            style={{ background: demo.color, animationDelay: `${delay}s` }}
                          />
                        ))}
                      </div>
                    )}
                    <span
                      className="text-sm font-bold font-mono tracking-tight"
                      style={{ color: isHovered ? demo.color : '#22d3ee', transition: 'color 0.2s ease' }}
                    >
                      {demo.number}
                    </span>
                  </div>

                  {/* Call now button */}
                  <span
                    className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg"
                    style={{
                      background: isHovered ? `color-mix(in srgb, ${demo.color} 14%, transparent)` : 'rgba(34,211,238,0.06)',
                      border: `1px solid ${isHovered ? `color-mix(in srgb, ${demo.color} 40%, transparent)` : 'rgba(34,211,238,0.12)'}`,
                      color: isHovered ? demo.color : '#22d3ee',
                      transition: 'all 0.22s ease',
                    }}
                  >
                    Call now
                    <ArrowUpRight
                      size={12}
                      style={{
                        transform: isHovered ? 'translate(2px,-2px)' : 'translate(0,0)',
                        transition: 'transform 0.22s ease',
                      }}
                    />
                  </span>
                </div>
              </a>
            )
          })}
        </div>

        {/* ── Proof line ── */}
        <p className="text-center mt-8 text-sm reveal" style={{ color: '#334155' }}>
          A detailing client had their AI answer{' '}
          <span style={{ color: '#22d3ee' }}>40 calls</span> in the first week.
          Calls that would have gone to voicemail.
        </p>

        {/* ── CTA ── */}
        <div className="text-center mt-5 reveal">
          <a
            href="https://calendly.com/ted-manas/ai-appointment-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl btn-primary"
          >
            Want this for your business? Book a Free Call
          </a>
        </div>

      </div>
    </section>
  )
}
