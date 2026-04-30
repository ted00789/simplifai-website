import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Receptionist Blog for Service Businesses | SimplifAI',
  description: 'Practical guides on AI receptionists, chatbots, and websites for service businesses. Learn how to stop missing calls, capture more leads, and grow on autopilot.',
  alternates: { canonical: 'https://simplifai-solutions.com/blog/' },
}

const categories = ['All', 'AI Receptionist', 'AI Chatbot', 'Websites', 'Small Business Tips']

const posts = [
  {
    title: 'AI Receptionist for HVAC Companies: Complete Guide 2026',
    excerpt: 'How HVAC businesses are using AI receptionists to answer after-hours calls, qualify leads, and book jobs automatically, without missing a single call.',
    category: 'AI Receptionist',
    readTime: '7 min read',
    slug: '/blog/ai-receptionist-for-hvac/',
  },
  {
    title: 'How Much Does an AI Receptionist Cost? (2026 Pricing Guide)',
    excerpt: 'Most service business owners underestimate what they\'re spending on missed calls. Here\'s a transparent breakdown of AI receptionist pricing and whether it makes financial sense.',
    category: 'AI Receptionist',
    readTime: '5 min read',
    slug: '/blog/how-much-does-an-ai-receptionist-cost/',
  },
  {
    title: 'AI Receptionist vs. Answering Service: What\'s the Difference?',
    excerpt: 'Traditional answering services and AI receptionists both answer calls, but that\'s where the similarity ends. Here\'s the full comparison.',
    category: 'AI Receptionist',
    readTime: '6 min read',
    slug: '/blog/ai-receptionist-vs-answering-service/',
  },
  {
    title: 'AI Receptionist for Real Estate Agents: What to Know in 2026',
    excerpt: 'Real estate moves fast. When a buyer calls and you\'re showing a property, that lead shouldn\'t have to wait. Here\'s how AI changes that.',
    category: 'AI Receptionist',
    readTime: '6 min read',
    slug: '/blog/ai-receptionist-for-real-estate/',
  },
  {
    title: 'How to Never Miss a Business Call Again (3 Solutions Compared)',
    excerpt: 'A practical guide to making sure every call to your business gets answered, even when you\'re unavailable. Three solutions, ranked by cost and effectiveness.',
    category: 'Small Business Tips',
    readTime: '5 min read',
    slug: '/blog/never-miss-a-business-call/',
  },
  {
    title: 'What Is a Talking Website? (And Why Service Businesses Need One)',
    excerpt: 'A Talking Website is a website that answers itself: phone calls and chat messages, 24/7. Here\'s what that means and why it matters for your business.',
    category: 'Websites',
    readTime: '5 min read',
    slug: '#',
  },
  {
    title: '5 Signs Your Business Needs an AI Receptionist',
    excerpt: 'If any of these five things are happening in your business, you\'re losing money to missed calls. Here\'s how to know, and what to do about it.',
    category: 'Small Business Tips',
    readTime: '4 min read',
    slug: '#',
  },
  {
    title: 'AI Chatbot for Your Website: The Complete Guide for Service Businesses',
    excerpt: 'Your website visitors have questions. If they can\'t get quick answers, they leave. Here\'s how an AI chatbot changes that, and what to look for.',
    category: 'AI Chatbot',
    readTime: '7 min read',
    slug: '#',
  },
]

export default function BlogPage() {
  return (
    <main>
      <Navigation />

      <section className="pt-32 pb-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <span className="section-badge">Blog</span>
            </div>
            <h1 className="text-5xl font-black text-white tracking-tight mb-4">
              SimplifAI Blog:{' '}
              <span className="gradient-text">AI for Service Businesses</span>
            </h1>
            <p className="text-xl max-w-xl mx-auto" style={{ color: '#94a3b8' }}>
              Practical guides on AI receptionists, chatbots, and websites, written for business
              owners, not tech people.
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  background: i === 0 ? 'rgba(34,211,238,0.15)' : 'rgba(255,255,255,0.04)',
                  border: i === 0 ? '1px solid rgba(34,211,238,0.3)' : '1px solid rgba(255,255,255,0.07)',
                  color: i === 0 ? '#22d3ee' : '#94a3b8',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {posts.map((post) => (
              <Link
                key={post.title}
                href={post.slug}
                className="glass-card rounded-2xl p-7 flex flex-col group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.15)', color: '#22d3ee' }}
                  >
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs" style={{ color: '#475569' }}>
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-white leading-snug mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: '#64748b' }}>
                  {post.excerpt}
                </p>
                <span className="flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5" style={{ color: '#22d3ee' }}>
                  Read article <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>

          {/* Email capture */}
          <div
            className="rounded-3xl p-10 text-center max-w-2xl mx-auto"
            style={{
              background: 'linear-gradient(135deg, rgba(34,211,238,0.08) 0%, rgba(34,211,238,0.04) 100%)',
              border: '1px solid rgba(34,211,238,0.2)',
            }}
          >
            <h2 className="text-2xl font-black text-white mb-2">Free guide: The Missed Call Audit</h2>
            <p className="mb-6" style={{ color: '#94a3b8' }}>
              Find out exactly how much you&apos;re losing to missed calls, and how to fix it.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
              />
              <button type="submit" className="px-6 py-3 rounded-xl text-sm font-bold btn-primary whitespace-nowrap">
                Get the Guide
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
