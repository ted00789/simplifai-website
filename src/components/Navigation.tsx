'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Phone, MessageCircle, Globe } from 'lucide-react'

const services = [
  { label: 'AI Receptionist', href: '/ai-receptionist', icon: Phone, desc: '24/7 call answering' },
  { label: 'AI Chatbot', href: '/ai-chatbot', icon: MessageCircle, desc: 'Website lead capture' },
  { label: 'Website Design', href: '/website-design', icon: Globe, desc: 'Custom sites that convert' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const linkStyle = { color: '#94a3b8' }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(11,17,38,0.98)' : 'rgba(11,17,38,0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/logo.png"
            alt="SimplifAI Solutions"
            width={220}
            height={60}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          <Link
            href="/"
            className="px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 hover:text-white hover:bg-white/5"
            style={linkStyle}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 hover:text-white hover:bg-white/5"
            style={linkStyle}
          >
            About
          </Link>

          {/* Services dropdown — click to open */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 hover:text-white hover:bg-white/5"
              style={linkStyle}
            >
              Services
              <ChevronDown
                size={14}
                className="transition-transform duration-200"
                style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </button>

            {dropdownOpen && (
              <div
                className="absolute top-[calc(100%+6px)] left-1/2 -translate-x-1/2 w-64 rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(10,15,35,0.99)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.7)',
                }}
              >
                {services.map((s) => {
                  const Icon = s.icon
                  return (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-3.5 transition-colors duration-150 group"
                      style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.15)' }}
                      >
                        <Icon size={15} color="#22d3ee" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white leading-tight">{s.label}</p>
                        <p className="text-xs mt-0.5" style={{ color: '#64748b' }}>{s.desc}</p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>

          <Link
            href="/blog"
            className="px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 hover:text-white hover:bg-white/5"
            style={linkStyle}
          >
            Blog
          </Link>
        </div>

        {/* Desktop CTA */}
        <a
          href="https://calendly.com/ted-manas/ai-appointment-demo"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl btn-primary"
        >
          Book a Call
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ color: '#94a3b8' }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-4 pb-5 pt-2 flex flex-col"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(7,9,26,0.99)' }}
        >
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-3 text-sm font-medium rounded-lg hover:bg-white/5"
            style={{ color: '#94a3b8' }}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-3 text-sm font-medium rounded-lg hover:bg-white/5"
            style={{ color: '#94a3b8' }}
          >
            About
          </Link>

          {/* Mobile services accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg hover:bg-white/5"
              style={{ color: '#94a3b8' }}
            >
              Services
              <ChevronDown
                size={14}
                className="transition-transform duration-200"
                style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </button>
            {mobileServicesOpen && (
              <div className="ml-4 mt-1 flex flex-col gap-1">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-2.5 text-sm rounded-lg hover:bg-white/5"
                    style={{ color: '#64748b' }}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/blog"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-3 text-sm font-medium rounded-lg hover:bg-white/5"
            style={{ color: '#94a3b8' }}
          >
            Blog
          </Link>
          <a
            href="https://calendly.com/ted-manas/ai-appointment-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 mx-2 px-5 py-3 text-sm font-bold rounded-xl btn-primary text-center"
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  )
}
