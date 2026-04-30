'use client'
import { useState, useMemo } from 'react'
import { ArrowRight, TrendingDown } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Calculator() {
  const [missedCalls, setMissedCalls] = useState(10)
  const [jobValue, setJobValue] = useState(300)
  const [bookingRate, setBookingRate] = useState(40)
  const sectionRef = useScrollReveal()

  const { monthlyLoss, yearlyLoss } = useMemo(() => {
    const monthly = Math.round(missedCalls * 4.33 * (bookingRate / 100) * jobValue)
    return { monthlyLoss: monthly, yearlyLoss: monthly * 12 }
  }, [missedCalls, jobValue, bookingRate])

  const fmt = (n: number) =>
    n >= 1000 ? `$${(n / 1000).toFixed(1)}K` : `$${n}`

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="calculator"
      className="py-12 md:py-16 px-6"
      style={{ background: '#09112c' }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
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
            Enter your numbers and see the real cost.
          </p>
        </div>

        {/* Calculator card */}
        <div
          className="reveal rounded-2xl p-5 md:p-6"
          style={{
            background: 'rgba(7,9,26,0.8)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="space-y-5">
            {/* Slider 1 */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-white">Missed calls per week</label>
                <span className="text-lg font-black tabular-nums" style={{ color: '#22d3ee' }}>{missedCalls}</span>
              </div>
              <input
                type="range" min={1} max={50} value={missedCalls}
                onChange={(e) => setMissedCalls(Number(e.target.value))}
                className="w-full"
                style={{ background: `linear-gradient(to right, #22d3ee ${((missedCalls - 1) / 49) * 100}%, rgba(255,255,255,0.08) ${((missedCalls - 1) / 49) * 100}%)` }}
              />
              <div className="flex justify-between text-xs mt-0.5" style={{ color: '#334155' }}>
                <span>1</span><span>50</span>
              </div>
            </div>

            {/* Slider 2 */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-white">Average job value</label>
                <span className="text-lg font-black tabular-nums" style={{ color: '#22d3ee' }}>${jobValue}</span>
              </div>
              <input
                type="range" min={50} max={5000} step={50} value={jobValue}
                onChange={(e) => setJobValue(Number(e.target.value))}
                className="w-full"
                style={{ background: `linear-gradient(to right, #22d3ee ${((jobValue - 50) / 4950) * 100}%, rgba(255,255,255,0.08) ${((jobValue - 50) / 4950) * 100}%)` }}
              />
              <div className="flex justify-between text-xs mt-0.5" style={{ color: '#334155' }}>
                <span>$50</span><span>$5,000</span>
              </div>
            </div>

            {/* Slider 3 */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-white">% of callers who book</label>
                <span className="text-lg font-black tabular-nums" style={{ color: '#22d3ee' }}>{bookingRate}%</span>
              </div>
              <input
                type="range" min={10} max={100} value={bookingRate}
                onChange={(e) => setBookingRate(Number(e.target.value))}
                className="w-full"
                style={{ background: `linear-gradient(to right, #22d3ee ${((bookingRate - 10) / 90) * 100}%, rgba(255,255,255,0.08) ${((bookingRate - 10) / 90) * 100}%)` }}
              />
              <div className="flex justify-between text-xs mt-0.5" style={{ color: '#334155' }}>
                <span>10%</span><span>100%</span>
              </div>
            </div>
          </div>

          {/* Result */}
          <div
            className="mt-5 rounded-xl p-4 flex items-center justify-between gap-4 flex-wrap"
            style={{
              background: 'linear-gradient(135deg, rgba(239,68,68,0.07) 0%, rgba(239,68,68,0.03) 100%)',
              border: '1px solid rgba(239,68,68,0.15)',
            }}
          >
            <div>
              <p className="text-xs mb-1" style={{ color: '#64748b' }}>You are losing an estimated</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black tabular-nums" style={{ color: '#f87171' }}>
                  {fmt(monthlyLoss)}
                </span>
                <span className="text-sm" style={{ color: '#64748b' }}>/month</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs" style={{ color: '#64748b' }}>Per year</p>
              <p className="text-xl font-black tabular-nums" style={{ color: '#f87171' }}>{fmt(yearlyLoss)}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-4 text-center">
            <a
              href="https://calendly.com/ted-manas/ai-appointment-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-xl btn-primary"
            >
              Let&apos;s recover that revenue <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
