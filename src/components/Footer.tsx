import Link from 'next/link'
import Image from 'next/image'

const navGroups = [
  {
    label: 'Services',
    links: [
      { label: 'AI Receptionist', href: '/ai-receptionist' },
      { label: 'AI Chatbot', href: '/ai-chatbot' },
      { label: 'Custom Website', href: '/website-design' },
      { label: 'The Talking Website', href: '/talking-website' },
    ],
  },
  {
    label: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    label: 'Live Demos',
    links: [
      { label: 'HVAC Demo', href: 'tel:+19594444307' },
      { label: 'Auto Detailing Demo', href: 'tel:+18788792272' },
      { label: 'Real Estate Demo', href: 'tel:+19014609886' },
      { label: 'Lawn Care Demo', href: 'tel:+18788792399' },
    ],
  },
]

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-8 px-6"
      style={{
        background: '#050810',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo.png"
                alt="SimplifAI Solutions"
                width={160}
                height={44}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm mb-5 leading-relaxed max-w-xs" style={{ color: '#475569' }}>
              Your business, working 24/7. Custom AI receptionists, chatbots, and websites for
              service businesses that never stop.
            </p>
            <a
              href="mailto:tadeas@simplifai-solutions.com"
              className="text-sm transition-colors hover:text-white"
              style={{ color: '#475569' }}
            >
              tadeas@simplifai-solutions.com
            </a>
            <div className="mt-5">
              <a
                href="https://calendly.com/ted-manas/ai-appointment-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl btn-primary"
              >
                Book a Free Call
              </a>
            </div>
          </div>

          {/* Nav groups */}
          {navGroups.map((group) => (
            <div key={group.label}>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#334155' }}>
                {group.label}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: '#475569' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="gradient-divider mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: '#1e293b' }}>
            2026 SimplifAI Solutions LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs transition-colors hover:text-white" style={{ color: '#1e293b' }}>
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs transition-colors hover:text-white" style={{ color: '#1e293b' }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
