'use client'
import { useState, useMemo } from 'react'
import { ArrowRight, TrendingDown } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Calculator() {
  const [missedCalls, setMissedCalls]   = useState(10)
  const [jobValue,    setJobValue]      = useState(300)
  const [bookingRate, setBookingRate]   = useState(40)
  const sectionRef = useScrollReveal()

  const { monthlyLoss, yearlyLoss } = useMemo(() => {
    const monthly = Math.round(missedCalls * 4.33 * (bookingRate / 100) * jobValue)
    return { monthlyLoss: monthly, yearlyLoss: monthly * 12 }
  }, [missedCalls, jobValue, bookingRate])

  const fmt = (n: number) =>
    n >= 1000 ? `$${(n / 1000).toFixed(1)}K` : `$${n}`

  // Progress fill: 0–100% mapped to $0–$20K/month
  const progressPct = Math.min((monthlyLoss / 20000) * 100, 100)

  // Slider fill % helpers
  const sliderPct = (val: number, min: number, max: number) =>
    `${((val - min) / (max - min)) * 100}%`

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="calculator"
      className="py-12 md:py-16 px-6"
      style={{ background: '#09112c' }}
    >
      <style>{`
        /* Custom slider thumb */
        .calc-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 4px;
          border-radius: 2px;
          outline: none;
          cursor: pointer;
        }
        .calc-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #22d3ee;
          box-shadow: 0 0 0 4px rgba(34,211,238,0.18), 0 0 16px rgba(34,211,238,0.45);
          cursor: pointer;
          transition: box-shadow 0.2s ease;
        }
        .calc-slider::-webkit-slider-thumb:hover,
        .calc-slider:active::-webkit-slider-thumb {
          box-shadow: 0 0 0 7px rgba(34,211,238,0.22), 0 0 24px rgba(34,211,238,0.65);
        }
        .calc-slider::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border: none;
          border-radius: 50%;
          background: #22d3ee;
          box-shadow: 0 0 0 4px rgba(34,211,238,0.18), 0 0 16px rgba(34,211,238,0.45);
          cursor: pointer;
        }

        @keyframes numberPop {
          0%   { transform: scale(0.94); opacity: 0.6; }
          60%  { transform: scale(1.03); }
          100% { transform: scale(1);    opacity: 1;   }
        }
        .result-number { animation: numberPop 0.35s ease-out; }

        @media (prefers-reduced-motion: reduce) {
          .result-number { animation: none; }
          .calc-slider::-webkit-slider-thumb { transition: none; }
        }
      `}</style>

      <div className="max-w-2xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <div className="section-badge reveal">
              <TrendingDown size={12} />
              SimplifAI Calculator
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2 reveal reveal-delay-1">
            How much are missed calls{' '}
            <span className="gradient-text">costing you?</span>
          </h2>
          <p className="text-sm reveal reveal-delay-2" style={{ color: '#64748b' }}>
            Drag the sliders and see the real number.
          </p>
        </div>

        {/* ── Calculator card ── */}
        <div
          className="reveal rounded-2xl"
          style={{
            padding: '1px',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.06) 100%)',
          }}
        >
          <div
            className="rounded-2xl p-5 md:p-7"
            style={{
              background: 'rgba(7,9,26,0.88)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >

            {/* Sliders */}
            <div className="space-y-6">

              {/* Missed calls */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label className="text-xs font-semibold text-white">Missed calls per week</label>
                  <span
                    className="text-lg font-black tabular-nums px-2.5 py-0.5 rounded-lg"
                    style={{ color: '#22d3ee', background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.15)' }}
                  >
                    {missedCalls}
                  </span>
                </div>
                <input
                  type="range" min={1} max={50} value={missedCalls}
                  onChange={(e) => setMissedCalls(Number(e.target.value))}
                  className="calc-slider"
                  style={{ background: `linear-gradient(to right, #22d3ee ${sliderPct(missedCalls,1,50)}, rgba(255,255,255,0.08) ${sliderPct(missedCalls,1,50)})` }}
                />
                <div className="flex justify-between text-xs mt-1" style={{ color: '#334155' }}>
                  <span>1</span><span>50</span>
                </div>
              </div>

              {/* Job value */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label className="text-xs font-semibold text-white">Average job value</label>
                  <span
                    className="text-lg font-black tabular-nums px-2.5 py-0.5 rounded-lg"
                    style={{ color: '#22d3ee', background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.15)' }}
                  >
                    ${jobValue}
                  </span>
                </div>
                <input
                  type="range" min={50} max={5000} step={50} value={jobValue}
                  onChange={(e) => setJobValue(Number(e.target.value))}
                  className="calc-slider"
                  style={{ background: `linear-gradient(to right, #22d3ee ${sliderPct(jobValue,50,5000)}, rgba(255,255,255,0.08) ${sliderPct(jobValue,50,5000)})` }}
                />
                <div className="flex justify-between text-xs mt-1" style={{ color: '#334155' }}>
                  <span>$50</span><span>$5,000</span>
                </div>
              </div>

              {/* Booking rate */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label className="text-xs font-semibold text-white">% of callers who book</label>
                  <span
                    className="text-lg font-black tabular-nums px-2.5 py-0.5 rounded-lg"
                    style={{ color: '#22d3ee', background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.15)' }}
                  >
                    {bookingRate}%
                  </span>
                </div>
                <input
                  type="range" min={10} max={100} value={bookingRate}
                  onChange={(e) => setBookingRate(Number(e.target.value))}
                  className="calc-slider"
                  style={{ background: `linear-gradient(to right, #22d3ee ${sliderPct(bookingRate,10,100)}, rgba(255,255,255,0.08) ${sliderPct(bookingRate,10,100)})` }}
                />
                <div className="flex justify-between text-xs mt-1" style={{ color: '#334155' }}>
                  <span>10%</span><span>100%</span>
                </div>
              </div>
            </div>

            {/* ── Result ── */}
            <div
              className="mt-7 rounded-2xl overflow-hidden"
              style={{
                border: '1px solid rgba(239,68,68,0.2)',
                position: 'relative',
              }}
            >
              {/* Animated red fill rises from the bottom */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: `${progressPct}%`,
                  background: 'linear-gradient(to top, rgba(239,68,68,0.18) 0%, rgba(239,68,68,0.06) 60%, transparent 100%)',
                  transition: 'height 0.55s cubic-bezier(0.34,1.2,0.64,1)',
                  pointerEvents: 'none',
                }}
              />

              {/* Subtle top spotlight on result box */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(239,68,68,0.06) 0%, transparent 50%)',
                  pointerEvents: 'none',
                  borderRadius: '14px',
                }}
              />

              {/* Content */}
              <div
                style={{
                  position: 'relative',
                  padding: '28px 24px 24px',
                  textAlign: 'center',
                  background: 'rgba(7,9,26,0.6)',
                }}
              >
                <p
                  className="text-xs font-medium mb-2"
                  style={{ color: '#64748b', letterSpacing: '0.05em', textTransform: 'uppercase' }}
                >
                  You are losing an estimated
                </p>

                {/* Big number */}
                <div className="flex items-baseline justify-center gap-2">
                  <span
                    key={monthlyLoss}
                    className="result-number"
                    style={{
                      fontSize: 'clamp(48px, 8vw, 68px)',
                      fontWeight: 900,
                      lineHeight: 1,
                      color: '#f87171',
                      fontVariantNumeric: 'tabular-nums',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {fmt(monthlyLoss)}
                  </span>
                  <span style={{ color: '#64748b', fontSize: '15px' }}>/mo</span>
                </div>

                {/* Year line */}
                <div
                  className="mt-4 pt-4 flex items-center justify-center gap-3"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <span style={{ color: '#475569', fontSize: '13px' }}>Per year:</span>
                  <span
                    style={{
                      color: '#f87171',
                      fontSize: '20px',
                      fontWeight: 800,
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {fmt(yearlyLoss)}
                  </span>
                </div>
              </div>
            </div>

            {/* ── CTA ── */}
            <div className="mt-5 text-center">
              <a
                href="https://calendly.com/ted-manas/ai-appointment-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold rounded-xl btn-primary"
              >
                Let&apos;s recover that revenue <ArrowRight size={15} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
