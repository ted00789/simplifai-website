import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock, AlertCircle, Phone } from 'lucide-react'
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

// ─── Special Block Components ─────────────────────────────────────────────────

function CalloutBlock({ content }: { content: string }) {
  const lines = content.split('\n').filter((l) => l.trim())
  const title = lines[0] || ''
  const body = lines.slice(1).join(' ')
  return (
    <div
      className="my-8 rounded-xl p-5 flex gap-4"
      style={{ background: 'rgba(34,211,238,0.06)', border: '1px solid rgba(34,211,238,0.22)' }}
    >
      <AlertCircle size={18} style={{ color: '#22d3ee', flexShrink: 0, marginTop: 2 }} />
      <div>
        <p className="font-bold text-sm mb-1" style={{ color: '#22d3ee' }}>
          {title}
        </p>
        {body && (
          <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
            {body}
          </p>
        )}
      </div>
    </div>
  )
}

function QuoteBlock({ content }: { content: string }) {
  const lines = content.split('\n').filter((l) => l.trim())
  const quote = lines.find((l) => !l.startsWith('—') && !l.startsWith('-')) || ''
  const attribution = lines.find((l) => l.startsWith('—') || l.startsWith('-'))
  return (
    <blockquote
      className="my-10 py-7 px-8 rounded-xl"
      style={{ background: 'rgba(34,211,238,0.04)', borderLeft: '4px solid #22d3ee' }}
    >
      <p className="text-xl font-semibold italic text-white leading-relaxed mb-3">
        &ldquo;{quote}&rdquo;
      </p>
      {attribution && (
        <p className="text-sm font-semibold" style={{ color: '#22d3ee' }}>
          {attribution}
        </p>
      )}
    </blockquote>
  )
}

function CompareBlock({ content }: { content: string }) {
  const lines = content.split('\n').filter((l) => l.trim())
  const headers = (lines[0] || '').split('|').map((h) => h.trim())
  const leftTitle = headers[0] || 'Option A'
  const rightTitle = headers[1] || 'Option B'
  const rows = lines.slice(1).map((l) => l.split('|').map((c) => c.trim()))

  return (
    <div className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[leftTitle, rightTitle].map((title, idx) => (
        <div
          key={idx}
          className="rounded-xl p-5"
          style={{
            background: idx === 0 ? 'rgba(239,68,68,0.05)' : 'rgba(34,211,238,0.06)',
            border: idx === 0 ? '1px solid rgba(239,68,68,0.15)' : '1px solid rgba(34,211,238,0.2)',
          }}
        >
          <p className="font-bold text-white mb-4 text-sm flex items-center gap-2">
            <span>{idx === 0 ? '👤' : '🤖'}</span>
            {title}
          </p>
          <ul className="space-y-2.5">
            {rows.map((row, j) =>
              row[idx] ? (
                <li
                  key={j}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: '#94a3b8' }}
                >
                  <span
                    className="font-bold mt-0.5 shrink-0"
                    style={{ color: idx === 0 ? '#f87171' : '#22d3ee' }}
                  >
                    {idx === 0 ? '×' : '✓'}
                  </span>
                  {row[idx]}
                </li>
              ) : null
            )}
          </ul>
        </div>
      ))}
    </div>
  )
}

// ─── Content Renderer ─────────────────────────────────────────────────────────

/** Render **bold** and *italic* inline markers */
function renderInline(text: string): React.ReactNode {
  if (!text.includes('*')) return text
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/)
  return (
    <>
      {parts.map((part, j) => {
        if (part.startsWith('**')) {
          return (
            <strong key={j} className="font-bold text-white">
              {part.replace(/\*\*/g, '')}
            </strong>
          )
        }
        if (part.startsWith('*')) {
          return (
            <em key={j} style={{ color: '#cbd5e1' }}>
              {part.replace(/\*/g, '')}
            </em>
          )
        }
        return part
      })}
    </>
  )
}

type ContentSegment =
  | { kind: 'special'; tag: 'callout' | 'quote' | 'compare'; inner: string }
  | { kind: 'text'; raw: string }

type ParsedBlock =
  | { type: 'callout' | 'quote' | 'compare'; content: string }
  | { type: 'table'; rows: string[][] }
  | { type: 'lines'; lines: string[] }

function parseContent(content: string): ParsedBlock[] {
  // Step 1 — split out [CALLOUT], [QUOTE], [COMPARE] blocks
  const segments: ContentSegment[] = []
  const specialRe = /\[(CALLOUT|QUOTE|COMPARE)\]([\s\S]*?)\[\/\1\]/g
  let last = 0
  let m: RegExpExecArray | null

  while ((m = specialRe.exec(content)) !== null) {
    if (m.index > last) segments.push({ kind: 'text', raw: content.slice(last, m.index) })
    segments.push({
      kind: 'special',
      tag: m[1].toLowerCase() as 'callout' | 'quote' | 'compare',
      inner: m[2].trim(),
    })
    last = m.index + m[0].length
  }
  if (last < content.length) segments.push({ kind: 'text', raw: content.slice(last) })

  // Step 2 — within text segments, further split table rows from regular lines
  const blocks: ParsedBlock[] = []

  for (const seg of segments) {
    if (seg.kind === 'special') {
      blocks.push({ type: seg.tag, content: seg.inner })
      continue
    }

    const lines = seg.raw.split('\n')
    let lineBuffer: string[] = []
    let tableBuffer: string[][] = []

    const flushLines = () => {
      if (lineBuffer.length > 0) {
        blocks.push({ type: 'lines', lines: [...lineBuffer] })
        lineBuffer = []
      }
    }
    const flushTable = () => {
      if (tableBuffer.length > 0) {
        blocks.push({ type: 'table', rows: [...tableBuffer] })
        tableBuffer = []
      }
    }

    for (const line of lines) {
      const trimmed = line.trim()
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        // Skip separator rows like |---|---|
        if (trimmed.replace(/[|\s\-]/g, '') === '') continue
        flushLines()
        const cells = trimmed.split('|').map((c) => c.trim()).filter(Boolean)
        tableBuffer.push(cells)
      } else {
        flushTable()
        lineBuffer.push(line)
      }
    }
    flushLines()
    flushTable()
  }

  return blocks
}

function renderContent(content: string): React.ReactNode {
  const blocks = parseContent(content)
  const elements: React.ReactNode[] = []
  let key = 0

  for (const block of blocks) {
    if (block.type === 'callout') {
      elements.push(<CalloutBlock key={key++} content={block.content} />)
    } else if (block.type === 'quote') {
      elements.push(<QuoteBlock key={key++} content={block.content} />)
    } else if (block.type === 'compare') {
      elements.push(<CompareBlock key={key++} content={block.content} />)
    } else if (block.type === 'table') {
      const [headerRow, ...dataRows] = block.rows
      elements.push(
        <div
          key={key++}
          className="overflow-x-auto my-8 rounded-xl"
          style={{ border: '1px solid rgba(34,211,238,0.12)', background: 'rgba(11,18,36,0.6)' }}
        >
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(34,211,238,0.15)' }}>
                {(headerRow || []).map((cell, j) => (
                  <th
                    key={j}
                    className="text-left p-3 text-xs font-bold uppercase tracking-wider whitespace-nowrap"
                    style={{ color: '#22d3ee' }}
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataRows.map((row, ri) => (
                <tr key={ri} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="p-3 text-sm" style={{ color: '#94a3b8' }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    } else if (block.type === 'lines') {
      let listItems: string[] = []

      const flushList = () => {
        if (listItems.length === 0) return
        elements.push(
          <ul key={key++} className="my-4 space-y-2">
            {listItems.map((item, j) => (
              <li
                key={j}
                className="flex items-start gap-2.5 text-base leading-relaxed"
                style={{ color: '#94a3b8' }}
              >
                <span
                  className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full"
                  style={{ background: 'rgba(34,211,238,0.6)' }}
                />
                <span>{renderInline(item)}</span>
              </li>
            ))}
          </ul>
        )
        listItems = []
      }

      for (const line of block.lines) {
        const trimmed = line.trim()

        if (trimmed.startsWith('## ')) {
          flushList()
          elements.push(
            <h2 key={key++} className="text-2xl font-black text-white mt-10 mb-4 leading-snug">
              {trimmed.replace('## ', '')}
            </h2>
          )
        } else if (trimmed.startsWith('### ')) {
          flushList()
          elements.push(
            <h3 key={key++} className="text-xl font-bold text-white mt-7 mb-3">
              {trimmed.replace('### ', '')}
            </h3>
          )
        } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          listItems.push(trimmed.replace(/^[-*] /, ''))
        } else if (trimmed === '') {
          flushList()
        } else if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
          flushList()
          elements.push(
            <p key={key++} className="font-bold text-white mt-6 mb-2">
              {trimmed.replace(/\*\*/g, '')}
            </p>
          )
        } else if (trimmed) {
          flushList()
          elements.push(
            <p key={key++} className="text-base leading-relaxed mb-4" style={{ color: '#94a3b8' }}>
              {renderInline(trimmed)}
            </p>
          )
        }
      }
      flushList()
    }
  }

  return <>{elements}</>
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function Sidebar({ currentSlug }: { currentSlug: string }) {
  const recent = blogPosts.filter((p) => p.slug !== currentSlug).slice(0, 4)

  return (
    <div className="flex flex-col gap-6">
      {/* Book a call CTA */}
      <div
        className="rounded-2xl p-6"
        style={{
          background: 'linear-gradient(135deg, rgba(34,211,238,0.1) 0%, rgba(34,211,238,0.04) 100%)',
          border: '1px solid rgba(34,211,238,0.22)',
        }}
      >
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#22d3ee' }}>
          Free Demo Call
        </p>
        <h3 className="text-lg font-black text-white mb-2 leading-snug">
          Hear what an AI receptionist sounds like for your business
        </h3>
        <p className="text-sm mb-5" style={{ color: '#94a3b8' }}>
          We&apos;ll build a custom demo and walk you through it. No commitment.
        </p>
        <a
          href="https://calendly.com/ted-manas/ai-appointment-demo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold btn-primary"
        >
          <Phone size={14} /> Book a Free Call
        </a>
      </div>

      {/* Recent posts */}
      <div
        className="rounded-2xl p-6"
        style={{ background: 'rgba(13,19,37,0.8)', border: '1px solid rgba(255,255,255,0.07)' }}
      >
        <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#475569' }}>
          More from the blog
        </p>
        <div className="flex flex-col gap-5">
          {recent.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}/`} className="group flex flex-col gap-1.5">
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full self-start"
                style={{ background: 'rgba(34,211,238,0.08)', color: '#22d3ee' }}
              >
                {p.category}
              </span>
              <p className="text-sm font-semibold leading-snug text-white group-hover:text-cyan-400 transition-colors">
                {p.title}
              </p>
              <p className="text-xs flex items-center gap-1" style={{ color: '#475569' }}>
                <Clock size={10} /> {p.readTime}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <main>
      <Navigation />

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back link */}
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-sm mb-10 transition-colors hover:text-cyan-400"
            style={{ color: '#475569' }}
          >
            <ArrowLeft size={14} /> Back to blog
          </Link>

          <div className="flex gap-12 lg:gap-16 items-start">
            {/* ── Main Article ── */}
            <article className="min-w-0 flex-1">
              {/* Category + meta row */}
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    background: 'rgba(34,211,238,0.08)',
                    border: '1px solid rgba(34,211,238,0.15)',
                    color: '#22d3ee',
                  }}
                >
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs" style={{ color: '#475569' }}>
                  <Clock size={11} /> {post.readTime}
                </span>
                <span className="text-xs" style={{ color: '#475569' }}>
                  {post.publishDate}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Hero image */}
              {post.heroImage && (
                <div className="mb-8 rounded-2xl overflow-hidden" style={{ aspectRatio: '16/7' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.heroImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Divider */}
              <div className="gradient-divider mb-10" />

              {/* Content */}
              <div className="prose-custom">{renderContent(post.content)}</div>

              {/* Bottom CTA */}
              <div
                className="mt-14 rounded-2xl p-8 text-center"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(34,211,238,0.08) 0%, rgba(34,211,238,0.04) 100%)',
                  border: '1px solid rgba(34,211,238,0.2)',
                }}
              >
                <h3 className="text-2xl font-black text-white mb-3">
                  Want this for your business?
                </h3>
                <p className="mb-6" style={{ color: '#94a3b8' }}>
                  Book a free call and we&apos;ll show you exactly what a custom AI receptionist
                  would sound like for your business.
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
            </article>

            {/* ── Sticky Sidebar ── */}
            <div className="w-72 xl:w-80 shrink-0 sticky top-28 hidden lg:block">
              <Sidebar currentSlug={post.slug} />
            </div>
          </div>
        </div>
      </div>

      {/* Related posts */}
      <section className="py-16 px-6" style={{ background: 'rgba(9,17,44,0.5)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-8">More from the blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((p) => (
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
                  <p
                    className="text-xs leading-relaxed mt-auto pt-3 flex items-center gap-1"
                    style={{ color: '#22d3ee' }}
                  >
                    Read <ArrowRight size={11} />
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
