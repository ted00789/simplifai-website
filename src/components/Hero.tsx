'use client'
import Link from 'next/link'
import { PhoneCall, CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

const scenarios = [
  {
    label: 'Caller asking about availability',
    steps: [
      'Checking your calendar',
      'Booking appointment for Saturday',
      'Booking confirmed',
    ],
  },
  {
    label: 'Caller asks about your services',
    steps: [
      'Describing your offerings',
      'Answering pricing questions',
      'Lead qualified',
    ],
  },
  {
    label: 'After-hours call received',
    steps: [
      'Answering immediately',
      'Collecting contact info',
      'Notifying you via text',
    ],
  },
  {
    label: 'Caller requesting a quote',
    steps: [
      'Gathering job details',
      'Providing estimate range',
      'Booking consultation',
    ],
  },
]

const waveDelays = ['0ms', '110ms', '220ms', '330ms', '220ms', '110ms', '0ms']

export default function Hero() {
  const [scenarioIdx, setScenarioIdx] = useState(0)
  const [stepsDone, setStepsDone] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const scenario = scenarios[scenarioIdx]

    if (stepsDone < scenario.steps.length) {
      // ~1.2s before first check, ~1.6s between subsequent checks → ~5s total per scenario
      const delay = stepsDone === 0 ? 1200 : 1600
      const t = setTimeout(() => setStepsDone((p) => p + 1), delay)
      return () => clearTimeout(t)
    } else {
      // All steps done — pause 1s, then fade to next scenario
      const t = setTimeout(() => {
        setFading(true)
        setTimeout(() => {
          setScenarioIdx((p) => (p + 1) % scenarios.length)
          setStepsDone(0)
          setFading(false)
        }, 500)
      }, 1000)
      return () => clearTimeout(t)
    }
  }, [stepsDone, scenarioIdx])

  const scenario = scenarios[scenarioIdx]

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden px-6 pt-16 pb-6"
      style={{ background: '#07091a' }}
    >
      {/* Background orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none opacity-25"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.14) 0%, transparent 65%)', filter: 'blur(70px)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none opacity-15"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center py-8 lg:py-10">

          {/* Left: content */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
              style={{ background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.2)', color: '#22d3ee' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              AI Receptionist for Service Businesses
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.07] mb-6">
              AI Receptionist for Service Businesses{' '}
              <span className="gradient-text">That Can&apos;t Afford to Miss Calls.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl" style={{ color: '#94a3b8' }}>
              We build and manage AI Receptionists so you{' '}
              <strong className="text-white">capture every caller,</strong>{' '}
              <strong className="text-white">stop repeating yourself,</strong>{' '}
              and{' '}
              <strong className="text-white">focus on the jobs that pay.</strong>
            </p>

            {/* Single CTA */}
            <Link
              href="#demos"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold rounded-xl btn-primary"
            >
              <PhoneCall size={17} />
              Try our demos
            </Link>
          </div>

          {/* Right: animated AI call card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div
                className="rounded-2xl p-6 transition-opacity duration-300"
                style={{
                  opacity: fading ? 0 : 1,
                  background: 'rgba(11,18,36,0.92)',
                  border: '1px solid rgba(34,211,238,0.18)',
                  boxShadow: '0 0 60px rgba(34,211,238,0.07), 0 32px 64px rgba(0,0,0,0.55)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* Card header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(34,211,238,0.12)', border: '2px solid rgba(34,211,238,0.3)' }}
                    >
                      <PhoneCall size={16} color="#22d3ee" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white leading-tight">AI Receptionist</p>
                      <p className="text-xs" style={{ color: '#22d3ee' }}>Active call</p>
                    </div>
                  </div>
                  <span
                    className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      background: 'rgba(34,239,128,0.1)',
                      border: '1px solid rgba(34,239,128,0.25)',
                      color: '#4ade80',
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    Live
                  </span>
                </div>

                {/* Waveform */}
                <div className="flex items-center justify-center gap-1 h-10 mb-5">
                  {waveDelays.map((delay, i) => (
                    <div
                      key={i}
                      className="w-1.5 rounded-full"
                      style={{
                        height: '36px',
                        background: 'linear-gradient(to top, rgba(34,211,238,0.35), #22d3ee)',
                        animation: 'wave 1.1s ease-in-out infinite',
                        animationDelay: delay,
                        transformOrigin: 'bottom',
                      }}
                    />
                  ))}
                </div>

                {/* Caller label */}
                <p
                  className="text-xs font-semibold mb-3 truncate"
                  style={{ color: '#475569' }}
                >
                  {scenario.label}
                </p>

                {/* Status rows */}
                <div className="space-y-2.5">
                  {scenario.steps.map((step, i) => (
                    <div key={`${scenarioIdx}-${i}`} className="flex items-center justify-between gap-3">
                      <span
                        className="text-sm transition-colors duration-300"
                        style={{ color: i < stepsDone ? '#f1f5f9' : '#334155' }}
                      >
                        {step}
                      </span>
                      {i < stepsDone ? (
                        <CheckCircle size={15} color="#4ade80" className="flex-shrink-0" />
                      ) : (
                        <span className="flex gap-0.5 flex-shrink-0">
                          {[0, 1, 2].map((d) => (
                            <span
                              key={d}
                              className="w-1 h-1 rounded-full"
                              style={{
                                background: i === stepsDone ? '#22d3ee' : '#1e293b',
                                animation: i === stepsDone ? 'blink 1.4s ease-in-out infinite' : 'none',
                                animationDelay: `${d * 0.2}s`,
                              }}
                            />
                          ))}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div
                  className="mt-5 pt-4 flex items-center justify-between"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <span className="text-xs" style={{ color: '#334155' }}>3 am on a Sunday</span>
                  <span className="text-xs font-medium" style={{ color: '#22d3ee' }}>Answered in 1s</span>
                </div>
              </div>

              {/* Label below card */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap"
                style={{
                  background: 'rgba(7,9,26,0.9)',
                  border: '1px solid rgba(34,211,238,0.15)',
                  color: '#475569',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                }}
              >
                Your business, running while you sleep
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5" style={{ color: '#1e293b' }}>
        <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#1e293b' }}>Scroll</span>
        <div
          className="w-0.5 h-6 rounded-full"
          style={{
            background: 'linear-gradient(to bottom, rgba(34,211,238,0.4), transparent)',
            animation: 'float 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  )
}
