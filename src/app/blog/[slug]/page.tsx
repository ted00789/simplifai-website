import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react'
import { blogPosts, getPostBySlug, getAllSlugs } from '../data'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://simplifai-solutions.com/blog/${post.slug}/` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.publishDate,
    },
  }
}

function renderContent(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-2xl font-black text-white mt-10 mb-4">
          {line.replace('## ', '')}
        </h2>
      )
    } else if (line.startsWith('**') && line.endsWith('**') && !line.includes('|')) {
      elements.push(
        <p key={i} className="font-bold text-white mt-5 mb-2">
          {line.replace(/\*\*/g, '')}
        </p>
      )
    } else if (line.startsWith('- ')) {
      elements.push(
        <li key={i} className="ml-4 text-base leading-relaxed" style={{ color: '#94a3b8' }}>
          {line.replace('- ', '')}
        </li>
      )
    } else if (line.startsWith('| ') && line.includes(' | ')) {
      // Skip table header separator
      if (line.includes('---')) {
        i++
        continue
      }
      const cells = line.split(' | ').map((c) => c.replace(/^\| /, '').replace(/ \|$/, '').trim())
      const isHeader = lines[i + 1]?.includes('---')
      elements.push(
        <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          {cells.map((cell, j) => (
            isHeader
              ? <th key={j} className="text-left p-3 text-xs font-bold uppercase tracking-wider" style={{ color: '#22d3ee' }}>{cell}</th>
              : <td key={j} className="p-3 text-sm" style={{ color: '#94a3b8' }}>{cell}</td>
          ))}
        </tr>
      )
    } else if (line.trim() === '') {
      // empty line — skip
    } else {
      // Check if it contains bold inline
      if (line.includes('**')) {
        const parts = line.split(/(\*\*[^*]+\*\*)/)
        elements.push(
          <p key={i} className="text-base leading-relaxed mb-4" style={{ color: '#94a3b8' }}>
            {parts.map((part, j) =>
              part.startsWith('**') ? (
                <strong key={j} className="text-white font-bold">{part.replace(/\*\*/g, '')}</strong>
              ) : (
                part
              )
            )}
          </p>
        )
      } else {
        elements.push(
          <p key={i} className="text-base leading-relaxed mb-4" style={{ color: '#94a3b8' }}>
            {line}
          </p>
        )
      }
    }
    i++
  }

  return elements
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <main>
      <Navigation />

      <article className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-cyan-400"
            style={{ color: '#475569' }}
          >
            <ArrowLeft size={14} /> Back to blog
          </Link>

          {/* Category + read time */}
          <div className="flex items-center gap-3 mb-5">
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
            <span className="text-xs" style={{ color: '#475569' }}>{post.publishDate}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Divider */}
          <div className="gradient-divider mb-10" />

          {/* Content */}
          <div className="prose-custom">
            {renderContent(post.content)}
          </div>

          {/* CTA */}
          <div
            className="mt-14 rounded-2xl p-8 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(34,211,238,0.08) 0%, rgba(34,211,238,0.04) 100%)',
              border: '1px solid rgba(34,211,238,0.2)',
            }}
          >
            <h3 className="text-2xl font-black text-white mb-3">Want this for your business?</h3>
            <p className="mb-6" style={{ color: '#94a3b8' }}>
              Book a free call and we&apos;ll show you exactly what a custom AI receptionist would sound like for your business.
            </p>
            <a
              href="https://calendly.com/ted-manas/ai-appointment-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl btn-primary"
            >
              Book a Free Call <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {otherPosts.length > 0 && (
        <section className="py-16 px-6" style={{ background: 'rgba(9,17,44,0.5)' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-white mb-8">More from the blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}/`}
                  className="glass-card rounded-2xl p-6 flex flex-col group"
                >
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full mb-3 self-start"
                    style={{ background: 'rgba(34,211,238,0.08)', color: '#22d3ee' }}
                  >
                    {p.category}
                  </span>
                  <h3 className="text-sm font-bold text-white leading-snug mb-2 group-hover:text-cyan-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs leading-relaxed mt-auto pt-3 flex items-center gap-1" style={{ color: '#22d3ee' }}>
                    Read <ArrowRight size={11} />
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
