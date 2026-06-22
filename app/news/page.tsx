import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { getPosts, getCategories, formatDate, stripHtml } from '@/lib/wordpress'
import { HPB_URL, INSTAGRAM_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'お知らせ｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」からのお知らせ。営業時間・キャンペーン・新メニューなど最新情報をお届けします。',
  alternates: { canonical: '/news' },
}

export default async function NewsPage() {
  // Fetch all categories to find the news category ID
  const categories = await getCategories()
  const newsCategory = categories.find(
    (c) => c.slug === 'news' || c.slug === 'お知らせ' || c.name === 'お知らせ'
  )

  // Fetch posts filtered by news category if found, otherwise all posts
  const posts = await getPosts({
    per_page: 30,
    ...(newsCategory ? { categories: [newsCategory.id] } : {}),
  })

  return (
    <>
      {/* ===== Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'お知らせ' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">News</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800">
              お知らせ
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              MARISA 君津店からのお知らせです。営業時間の変更・キャンペーン・新メニュー情報など、最新の情報をご確認ください。
            </p>
          </div>
        </div>
      </div>

      {/* ===== News List ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          {posts.length === 0 ? (
            <div className="border border-sand-200 p-8">
              <p className="text-sm text-stone-700 leading-loose mb-4">
                現在、お知らせはありません。最新情報はホットペッパービューティーやInstagramでも随時発信しています。
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href={HPB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
                >
                  ホットペッパービューティーを見る →
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
                >
                  Instagram を見る →
                </a>
              </div>
            </div>
          ) : (
            <div className="divide-y divide-sand-200">
              {posts.map((post) => (
                <article key={post.id} className="py-7 first:pt-0">
                  <div className="flex items-center gap-3 mb-2">
                    <time
                      dateTime={post.date}
                      className="font-en text-xs text-greige-400 tracking-wide"
                    >
                      {formatDate(post.date)}
                    </time>
                    <span className="text-[10px] text-brown-400 border border-brown-300 px-2 py-0.5 tracking-wide">
                      お知らせ
                    </span>
                  </div>
                  <h2 className="text-base font-medium text-stone-800 mb-2 tracking-wide leading-snug">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-brown-500 transition-colors"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed line-clamp-2">
                    {stripHtml(post.excerpt.rendered)}
                  </p>
                  <div className="mt-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
                    >
                      続きを読む →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== HPB Notice ===== */}
      <section className="py-12 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Latest Info" ja="最新情報のご確認" />
          <p className="mt-4 text-sm text-stone-700 leading-loose">
            キャンペーン・クーポン・最新の空き状況などはホットペッパービューティーのページもご確認ください。Instagramでも日々の情報を発信しています。
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={HPB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
            >
              ホットペッパービューティーのページを見る →
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
            >
              Instagram（@momihogushi_marisa）を見る →
            </a>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">ご予約はこちらから</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業中・当日予約OK。<br />
            ホットペッパービューティーからかんたんにご予約いただけます。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton href={INSTAGRAM_URL} label="Instagramを見る" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
