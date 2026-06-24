import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ReserveButton from '@/components/ui/ReserveButton'
import {
  getAllSlugs,
  getPostBySlug,
  getRecentPosts,
  formatDate,
  CATEGORY_NAMES,
} from '@/lib/blog'
import { BMERIT_URL, HPB_URL, SITE_URL } from '@/lib/constants'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: '記事が見つかりません｜MARISA 君津店' }

  return {
    title: `${post.title}｜MARISA 君津店`,
    description: post.description || post.title,
    keywords: post.tags,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description || post.title,
      type: 'article',
      publishedTime: post.date,
      locale: 'ja_JP',
    },
  }
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related = getRecentPosts(3, slug)

  const blogPostSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    image: `${SITE_URL}/og-image.jpg`,
    author: {
      '@type': 'Organization',
      name: 'もみほぐし・MARISA 君津店',
      url: SITE_URL,
      '@id': `${SITE_URL}/#business`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'もみほぐし・MARISA 君津店',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
      },
    },
    description: post.description || post.title,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${slug}`,
    },
    keywords: post.tags.join(', '),
    inLanguage: 'ja',
    about: {
      '@type': 'Thing',
      name: 'もみほぐし・リラクゼーション',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />

      <div className="bg-sand-100 pt-28 pb-10 lg:pt-36 lg:pb-12">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'ブログ', href: '/blog' },
              { label: post.title.slice(0, 30) + (post.title.length > 30 ? '…' : '') },
            ]}
          />
        </div>
      </div>

      <div className="bg-cream-50 pb-24 lg:pb-32">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">

          {/* Article Header */}
          <div className="mb-10 pt-8">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <time className="text-xs text-greige-400 tracking-wide">{formatDate(post.date)}</time>
              {post.category && (
                <Link
                  href={`/blog/category/${post.category}`}
                  className="text-xs text-brown-400 border border-brown-300 px-2 py-0.5 hover:bg-brown-400 hover:text-cream-50 transition-colors"
                >
                  {CATEGORY_NAMES[post.category] || post.category}
                </Link>
              )}
            </div>
            <h1 className="text-2xl lg:text-3xl font-light tracking-wide text-stone-800 leading-relaxed">
              {post.title}
            </h1>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] text-greige-400 tracking-wide border border-sand-200 px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Article Body */}
          <div className="prose-marisa max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>

          {/* CTA */}
          <div className="mt-14 bg-sand-100 border border-sand-200 p-8 text-center">
            <p className="text-xs tracking-widest text-brown-400 uppercase mb-3">Reservation</p>
            <p className="text-sm text-stone-700 mb-6 leading-loose">
              君津のもみほぐし・マッサージなら、MARISA 君津店へ。<br />
              当日予約OK・夜0時まで営業・無料駐車場あり。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <ReserveButton href={BMERIT_URL} label="WEB予約（公式）" variant="dark" size="md" />
              <ReserveButton href={HPB_URL} label="ホットペッパーで予約" variant="outline" size="md" />
            </div>
          </div>

          {/* Internal link suggestions */}
          <div className="mt-12 pt-10 border-t border-sand-200">
            <p className="text-xs tracking-widest text-greige-400 mb-5">この記事を読んだ方はこちらも</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'もみほぐしメニューを見る', href: '/menu/body-care' },
                { label: 'セットコースを見る', href: '/menu/set' },
                { label: 'よくある質問を見る', href: '/faq' },
                { label: '初めての方へ', href: '/first' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="border border-sand-200 text-center py-3 px-2 text-xs text-stone-700 hover:border-brown-300 hover:text-brown-500 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div className="mt-12 pt-10 border-t border-sand-200">
              <p className="text-xs tracking-widest text-greige-400 mb-6">関連記事</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group border border-sand-200 p-5 hover:border-sand-300 transition-colors"
                  >
                    <span className="text-[10px] text-greige-400 tracking-wide">
                      {formatDate(p.date)}
                    </span>
                    <p className="mt-1 text-sm text-stone-700 leading-snug group-hover:text-brown-500 transition-colors line-clamp-3">
                      {p.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
