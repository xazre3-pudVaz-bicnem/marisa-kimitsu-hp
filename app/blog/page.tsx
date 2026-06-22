import type { Metadata } from 'next'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { getPosts, formatDate, stripHtml, getPostCategories } from '@/lib/wordpress'

export const metadata: Metadata = {
  title: 'ブログ｜君津のもみほぐし MARISA',
  description:
    '君津市のもみほぐしサロンMARISAのブログ。肩こり・腰のつらさ・眼精疲労・足のだるさ・リラクゼーションに関する情報を発信しています。',
  alternates: { canonical: '/blog' },
}

const BLOG_TOPICS = [
  '君津でもみほぐしを探す方へ、MARISAの通いやすさ',
  '肩こりがつらい日に選びたいもみほぐし',
  '仕事帰りに通える君津のリラクゼーションサロン',
  'ヘッドセットコースが人気の理由',
  '足のだるさが気になる方に足つぼセット',
  '君津で夜遅くまで営業しているマッサージサロンを探す方へ',
  'もみほぐし60分と90分の選び方',
  'ペアで利用しやすい君津のもみほぐしサロン',
  '無料駐車場ありのリラクゼーションサロンを探す方へ',
  '初めてのもみほぐしで不安な方へ',
]

export default async function BlogPage() {
  const posts = await getPosts({ per_page: 20 })

  return (
    <>
      <div className="pt-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
          <Breadcrumb items={[{ label: 'ブログ' }]} />
          <SectionHeader
            en="Blog"
            ja="ブログ"
            lead="君津のマッサージ・もみほぐし・リラクゼーションに関する情報をお届けします。"
          />
        </div>
      </div>

      <div className="bg-cream-50 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          {posts.length === 0 ? (
            <div>
              {/* No posts yet — show upcoming topics */}
              <div className="border border-sand-200 p-8 mb-12">
                <p className="text-stone-700 text-sm leading-loose mb-6">
                  ブログ記事は順次更新予定です。
                  WordPressと連携することで、以下のようなテーマの記事が表示されます。
                </p>
                <ul className="space-y-2">
                  {BLOG_TOPICS.map((topic, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-stone-700">
                      <span className="font-en text-brown-400 text-xs mt-0.5 flex-none">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
              {posts.map((post) => {
                const cats = getPostCategories(post)
                return (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group border border-sand-200 hover:border-sand-300 transition-colors"
                  >
                    <div className="bg-sand-100 aspect-video flex items-center justify-center text-greige-400 text-xs">
                      {/* TODO: アイキャッチ画像 */}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[10px] text-greige-400 tracking-wide">
                          {formatDate(post.date)}
                        </span>
                        {cats[0] && (
                          <span className="text-[10px] text-brown-400 border border-brown-300 px-2 py-0.5">
                            {cats[0]}
                          </span>
                        )}
                      </div>
                      <h2
                        className="text-base font-medium text-stone-800 mb-3 leading-snug tracking-wide group-hover:text-brown-500 transition-colors"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />
                      <p className="text-sm text-stone-700 leading-relaxed line-clamp-3">
                        {stripHtml(post.excerpt.rendered)}
                      </p>
                    </div>
                  </Link>
                )
              })}
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
