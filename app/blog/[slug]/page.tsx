import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import {
  getPost,
  getPosts,
  formatDate,
  stripHtml,
  getPostCategories,
} from '@/lib/wordpress'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return { title: '記事が見つかりません｜MARISA 君津店' }

  const description = stripHtml(post.excerpt.rendered).slice(0, 120)

  return {
    title: `${stripHtml(post.title.rendered)}｜MARISA 君津店`,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: stripHtml(post.title.rendered),
      description,
      type: 'article',
      publishedTime: post.date,
      locale: 'ja_JP',
    },
  }
}

export async function generateStaticParams() {
  const posts = await getPosts({ per_page: 100 })
  return posts.map((p) => ({ slug: p.slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  const recentPosts = await getPosts({ per_page: 4 })
  const related = recentPosts.filter((p) => p.slug !== slug).slice(0, 3)
  const cats = getPostCategories(post)

  const blogPostSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: stripHtml(post.title.rendered),
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'もみほぐし・MARISA 君津店',
    },
    publisher: {
      '@type': 'Organization',
      name: 'もみほぐし・MARISA 君津店',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://marisa-kimitsu.com'}/logo.png`,
      },
    },
    description: stripHtml(post.excerpt.rendered).slice(0, 160),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://marisa-kimitsu.com'}/blog/${slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />

      <div className="pt-24 bg-cream-50">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 py-10">
          <Breadcrumb
            items={[
              { label: 'ブログ', href: '/blog' },
              { label: stripHtml(post.title.rendered).slice(0, 30) + '…' },
            ]}
          />
        </div>
      </div>

      <div className="bg-cream-50 pb-24 lg:pb-32">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs text-greige-400 tracking-wide">{formatDate(post.date)}</span>
              {cats.map((c) => (
                <span key={c} className="text-xs text-brown-400 border border-brown-300 px-2 py-0.5">
                  {c}
                </span>
              ))}
            </div>
            <h1
              className="text-2xl lg:text-3xl font-light tracking-wide text-stone-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
          </div>

          {/* Aritcle body */}
          <div
            className="prose-marisa max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          {/* Internal link suggestions */}
          <div className="mt-16 pt-10 border-t border-sand-200">
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
                    key={p.id}
                    href={`/blog/${p.slug}`}
                    className="group border border-sand-200 p-5 hover:border-sand-300 transition-colors"
                  >
                    <span className="text-[10px] text-greige-400 tracking-wide">
                      {formatDate(p.date)}
                    </span>
                    <p
                      className="mt-1 text-sm text-stone-700 leading-snug group-hover:text-brown-500 transition-colors"
                      dangerouslySetInnerHTML={{ __html: p.title.rendered }}
                    />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 bg-sand-100 p-8 text-center">
            <p className="text-sm text-stone-700 mb-5">
              君津のもみほぐし・マッサージなら、MARISA 君津店へ。
              <br />
              当日予約OK・夜0時まで営業・無料駐車場あり。
            </p>
            <Link
              href="https://beauty.hotpepper.jp/kr/slnH000777799/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brown-500 text-cream-50 text-sm px-7 py-3.5 tracking-wider hover:bg-brown-600 transition-colors"
            >
              ホットペッパーで予約する
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
