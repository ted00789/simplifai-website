import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'AI Receptionist for Service Businesses | SimplifAI Solutions',
    template: '%s | SimplifAI Solutions',
  },
  description: 'SimplifAI builds custom AI receptionists, chatbots, and websites that work 24/7 for service businesses. Never miss a call or lead again.',
  keywords: 'AI receptionist, AI answering service, 24/7 call answering, service business AI, missed calls solution, AI chatbot for website, custom website service business',
  authors: [{ name: 'SimplifAI Solutions' }],
  metadataBase: new URL('https://simplifai-solutions.com'),
  openGraph: {
    title: 'AI Receptionist for Service Businesses | SimplifAI Solutions',
    description: 'Custom AI receptionists, chatbots, and websites for service businesses. Never miss a lead, even when you\'re on the job.',
    url: 'https://simplifai-solutions.com',
    siteName: 'SimplifAI Solutions',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'SimplifAI Solutions — AI Receptionist for Service Businesses' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Receptionist for Service Businesses | SimplifAI Solutions',
    description: 'AI receptionist, chatbot & custom websites for service businesses. 24/7 lead capture on autopilot.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['Organization', 'ProfessionalService'],
              name: 'SimplifAI Solutions',
              url: 'https://simplifai-solutions.com',
              description: 'Custom AI receptionists, chatbots, and websites for service businesses.',
              founder: { '@type': 'Person', name: 'Tadeáš Manas' },
              areaServed: 'US',
              priceRange: '$$',
              serviceType: ['AI Receptionist', 'AI Chatbot', 'Website Design'],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'sales',
                email: 'tadeas@simplifai-solutions.com',
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
