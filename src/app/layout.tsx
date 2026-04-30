import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

const GA_ID = 'G-TV6E2RZLKW'

export const metadata: Metadata = {
  title: {
    default: 'SimplifAI Solutions | AI Receptionists for Service Businesses',
    template: '%s',
  },
  description: 'SimplifAI builds custom AI receptionists, chatbots, and websites that work 24/7 for service businesses. Never miss a call or lead again.',
  keywords: 'AI receptionist, AI answering service, 24/7 call answering, service business AI, missed calls solution, AI chatbot for website, custom website service business',
  authors: [{ name: 'SimplifAI Solutions' }],
  metadataBase: new URL('https://simplifai-solutions.com'),
  openGraph: {
    title: 'SimplifAI Solutions | AI Receptionists for Service Businesses',
    description: 'Custom AI receptionists, chatbots, and websites for service businesses. Never miss a lead, even when you\'re on the job.',
    url: 'https://simplifai-solutions.com',
    siteName: 'SimplifAI Solutions',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'SimplifAI Solutions — AI Receptionist for Service Businesses' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SimplifAI Solutions | AI Receptionists for Service Businesses',
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
              logo: {
                '@type': 'ImageObject',
                url: 'https://simplifai-solutions.com/logo.png',
              },
              description: 'Custom AI receptionists, chatbots, and websites for service businesses.',
              founder: {
                '@type': 'Person',
                name: 'Tadeáš Manas',
                sameAs: [
                  'https://www.linkedin.com/in/tadeas-manas-42580a164',
                  'https://www.instagram.com/ted_manas/',
                ],
              },
              telephone: '+16027568791',
              email: 'tadeas@simplifai-solutions.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Alabama',
                addressCountry: 'US',
              },
              areaServed: ['US', 'Worldwide'],
              knowsLanguage: ['en', 'cs', 'sk'],
              priceRange: '$$',
              serviceType: ['AI Receptionist', 'AI Chatbot', 'Website Design'],
              sameAs: [
                'https://www.linkedin.com/in/tadeas-manas-42580a164',
                'https://www.instagram.com/ted_manas/',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'sales',
                telephone: '+16027568791',
                email: 'tadeas@simplifai-solutions.com',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'SimplifAI Solutions',
                url: 'https://simplifai-solutions.com',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: 'https://simplifai-solutions.com/?q={search_term_string}',
                  'query-input': 'required name=search_term_string',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'ItemList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'AI Receptionist',
                    url: 'https://simplifai-solutions.com/ai-receptionist/',
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'AI Chatbot',
                    url: 'https://simplifai-solutions.com/ai-chatbot/',
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Website Design',
                    url: 'https://simplifai-solutions.com/website-design/',
                  },
                  {
                    '@type': 'ListItem',
                    position: 4,
                    name: 'Pricing',
                    url: 'https://simplifai-solutions.com/pricing/',
                  },
                  {
                    '@type': 'ListItem',
                    position: 5,
                    name: 'Blog',
                    url: 'https://simplifai-solutions.com/blog/',
                  },
                  {
                    '@type': 'ListItem',
                    position: 6,
                    name: 'Contact',
                    url: 'https://simplifai-solutions.com/contact/',
                  },
                ],
              },
            ]),
          }}
        />
      </head>
      <body>
        {children}
        <div style={{ width: 0, height: 0 }} id="VG_OVERLAY_CONTAINER" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `}
        </Script>
        <Script id="voiceglow-chatbot" strategy="afterInteractive">
          {`
            (function() {
              window.VG_CONFIG = {
                ID: "eAUOC7HmBTKDZS2Scw6I",
                region: 'na',
                render: 'bottom-right',
                stylesheets: [
                  "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css"
                ],
                autostart: true,
              };
              var VG_SCRIPT = document.createElement("script");
              VG_SCRIPT.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
              VG_SCRIPT.defer = true;
              document.body.appendChild(VG_SCRIPT);
            })();
          `}
        </Script>
      </body>
    </html>
  )
}
