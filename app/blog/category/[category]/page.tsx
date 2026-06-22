import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumb from '@/components/ui/Breadcrumb'
import {
  getCategories,
  getPostsByCategory,
  formatDate,
  CATEGORY_NAMES,
} from '@/lib/blog'

type Props = {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const name = CATEGORY_NAMES[category] || category

  return {
    title: `${name}の記事一覧｜MARISA 君津店 ブログ`,
    description: `もみほぐしMARISA 君津店のブログ「${name}」カテゴリの記事一覧。君津のマッサージ・リラクゼーションに関する情報をお届けします。`,
    alternates: { canonical: `/blog/category/${category}` },
  }
}

export function generateStaticParams() {
  return getCategories().map((cat) => ({ category: cat.slug }))
}

export default async function BlogCategoryPage({ params }: Props) {
  const { category } = await params
  const posts = getPostsByCategory(category)
  const categoryName = CATEGORY_NAMES[category]

  if (!categoryName) notFound()

  const allCategories = getCategories()

  return (
    <>
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'ブログ', href: '/blog' },
              { label: categoryName },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Blog</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800">
              {categoryName}
            </h1>
            <p className="mt-3 text-stone-700 text-sm">
              {posts.length}件の記事
            </p>
          </div>
        </div>
      </div>

      <div className="bg-cream-50 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-10">

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Link
              href="/blog"
              className="text-xs tracking-widest border border-sand-200 text-stone-700 px-4 py-2 hover:border-brown-300 hover:text-brown-500 transition-colors"
            >
              すべて
            </Link>
            {allCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className={`text-xs tracking-widest border px-4 py-2 transition-colors ${
                  cat.slug === category
                    ? 'border-brown-300 bg-brown-400 text-cream-50'
                    : 'border-sand-200 text-stone-700 hover:border-brown-300 hover:text-brown-500'
                }`}
              >
                {cat.name}
                <span className="ml-1 opacity-70">({cat.count})</span>
              </Link>
            ))}
          </div>

          {posts.length === 0 ? (
            <div className="border border-sand-200 bg-cream-50 p-10 text-center">
              <p className="text-stone-700 text-sm">このカテゴリの記事はまだありません。</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group border border-sand-200 bg-cream-50 hover:border-brown-300 transition-colors"
                >
                  <div className="bg-sand-100 aspect-video flex items-center justify-center">
                    <span className="font-en text-xs tracking-widest text-greige-400 uppercase">
                      {categoryName}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] text-greige-400 tracking-wide">
                        {formatDate(post.date)}
                      </span>
                      <span className="text-[10px] text-brown-400 border border-brown-300 px-2 py-0.5">
                        {categoryName}
                      </span>
                    </div>
                    <h2 className="text-base font-medium text-stone-800 mb-3 leading-snug tracking-wide group-hover:text-brown-500 transition-colors line-clamp-3">
                      {post.title}
                    </h2>
                    {post.description && (
                      <p className="text-sm text-stone-700 leading-relaxed line-clamp-2">
                        {post.description}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
            >
              ← すべての記事を見る
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
