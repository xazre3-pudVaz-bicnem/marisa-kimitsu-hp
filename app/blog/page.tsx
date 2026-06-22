import type { Metadata } from 'next'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { getAllPosts, getCategories, formatDate, CATEGORY_NAMES } from '@/lib/blog'

export const metadata: Metadata = {
  title: '君津のもみほぐし・マッサージ情報ブログ｜MARISA 君津店',
  description:
    '君津市のもみほぐしサロンMARISAのブログ。肩こり・腰のつらさ・ヘッドケア・足つぼ・疲労回復など、君津のリラクゼーションに関する情報を発信しています。',
  keywords: [
    '君津 マッサージ ブログ',
    '君津 もみほぐし',
    '君津 リラクゼーション',
    '君津 肩こり',
    '君津 疲労回復',
  ],
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  const posts = getAllPosts()
  const categories = getCategories()

  return (
    <>
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'ブログ' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Blog</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800">
              ブログ
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              君津のもみほぐし・マッサージ・リラクゼーションに関する情報をお届けします。
              肩こり・腰のつらさ・疲労回復・ヘッドケアなど、身体のメンテナンスに役立つ記事を掲載しています。
            </p>
          </div>
        </div>
      </div>

      <div className="bg-cream-50 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-10">

          {/* Category Filter */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/blog"
                className="text-xs tracking-widest border border-brown-300 bg-brown-400 text-cream-50 px-4 py-2"
              >
                すべて
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/blog/category/${cat.slug}`}
                  className="text-xs tracking-widest border border-sand-200 text-stone-700 px-4 py-2 hover:border-brown-300 hover:text-brown-500 transition-colors"
                >
                  {cat.name}
                  <span className="ml-1 text-greige-400">({cat.count})</span>
                </Link>
              ))}
            </div>
          )}

          {posts.length === 0 ? (
            <div className="border border-sand-200 bg-cream-50 p-10 text-center">
              <p className="text-stone-700 text-sm leading-loose">
                ブログ記事は順次更新予定です。<br />
                もみほぐし・ヘッドケア・足つぼ・鍼灸など、君津のリラクゼーション情報をお届けします。
              </p>
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
                      {CATEGORY_NAMES[post.category] || post.category || 'Blog'}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] text-greige-400 tracking-wide">
                        {formatDate(post.date)}
                      </span>
                      {post.category && (
                        <span className="text-[10px] text-brown-400 border border-brown-300 px-2 py-0.5">
                          {CATEGORY_NAMES[post.category] || post.category}
                        </span>
                      )}
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

          {/* Internal links */}
          <div className="mt-16 pt-12 border-t border-sand-200">
            <p className="text-xs tracking-widest text-greige-400 mb-6">関連ページ</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: '肩こりのケア', href: '/symptom/stiff-shoulder' },
                { label: '腰のつらさのケア', href: '/symptom/lower-back' },
                { label: 'もみほぐしメニュー', href: '/menu/body-care' },
                { label: 'セットコース', href: '/menu/set' },
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
        </div>
      </div>
    </>
  )
}
