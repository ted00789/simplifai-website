import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | SimplifAI Solutions',
  description: 'SimplifAI Solutions privacy policy — how we collect, use, and protect your personal data when you use our website and services.',
  alternates: { canonical: 'https://simplifai-solutions.com/privacy/' },
}

export default function PrivacyPage() {
  return (
    <main>
      <Navigation />
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-black text-white mb-8">Privacy Policy</h1>
          <div className="prose prose-invert space-y-6" style={{ color: '#94a3b8' }}>
            <p><strong className="text-white">Last updated: April 2026</strong></p>
            <p>SimplifAI Solutions LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information when you use our website and services.</p>
            <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you book a call, fill out a contact form, or subscribe to our email list. This may include your name, email address, phone number, and business information.</p>
            <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
            <p>We use the information we collect to: provide and improve our services, communicate with you about your account or our services, send you marketing communications (with your consent), and comply with legal obligations.</p>
            <h2 className="text-2xl font-bold text-white">Contact</h2>
            <p>If you have questions about this Privacy Policy, contact us at <a href="mailto:ted@simplifai-solutions.com" className="text-cyan-400">ted@simplifai-solutions.com</a>.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
