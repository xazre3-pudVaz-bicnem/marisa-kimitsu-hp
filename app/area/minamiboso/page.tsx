import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { BMERIT_URL, HPB_URL, LINE_URL, SHOP_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '南房総からのアクセス・マッサージ｜MARISA 君津店',
  description: '南房総方面からもみほぐし・マッサージをお探しの方へ。MARISA 君津店は南房総方面から車で約40〜60分。夜0時まで・当日予約OK。',
  keywords: ['南房総 マッサージ', '南房総 もみほぐし', '鋸南 マッサージ', '南房総 リラクゼーション'],
  openGraph: {
    title: '南房総からのアクセス・マッサージ｜MARISA 君津店',
    description: '南房総方面からもみほぐし・マッサージをお探しの方へ。MARISA 君津店は南房総方面から車で約40〜60分。夜0時まで・当日予約OK。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/area/minamiboso' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '南房総からどのくらいかかりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '鋸南町からは国道127号線または館山自動車道（鋸南保田IC〜君津IC）経由で約30〜40分、南房総市内からは約40〜50分を目安にお越しください。道路状況により変動する場合があります。',
      },
    },
    {
      '@type': 'Question',
      name: '遠くても来店できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、南房総市・鋸南町方面からのお客様にもご来店いただいています。南房総エリアにはリラクゼーションサロンが少ないため、質の高い施術を求めて君津MARISAまでお越しになる方もいらっしゃいます。無料駐車場完備です。',
      },
    },
    {
      '@type': 'Question',
      name: '高速を使うルートを教えてください。',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '館山自動車道の鋸南保田インターチェンジから乗車し、君津インターチェンジで下車してください。インターを出てから店舗まで約10分です。一般道（国道127号線北上）よりも時間を短縮できる場合があります。',
      },
    },
    {
      '@type': 'Question',
      name: '予約は必要ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '当日予約も承っておりますが、遠方からお越しの場合は事前にホットペッパービューティーからご予約されることをおすすめしています。空き状況をリアルタイムで確認できます。出発前にスマホでご確認いただくと安心してお越しいただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '鍼灸もできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、鍼灸・美容鍼のメニューをご用意しています。鍼灸のご予約はBMERITよりお申し込みください。もみほぐしと組み合わせてのご利用も可能です。南房総方面からのお客様もぜひご利用ください。',
      },
    },
  ],
}

const menus = [
  { name: 'もみほぐし', time: '45分〜', price: '¥3,500〜', href: '/menu/body-care', desc: '肩こり・腰痛・全身の疲れをしっかりほぐします' },
  { name: 'ヘッドリラックス', time: '60分〜', price: '¥5,000〜', href: '/menu/head', desc: '頭・首・肩のコリをまとめてケア' },
  { name: '足つぼ', time: '45分〜', price: '¥3,500〜', href: '/menu/foot', desc: 'ハイキングや観光で疲れた脚に。足裏から全身をサポート' },
  { name: '鍼灸・美容鍼', time: '60分〜', price: '要予約', href: BMERIT_URL, desc: '本格的な鍼施術。BMERITよりご予約ください', external: true },
]

export default function AreaMinamibosoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Page Header */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb
            items={[
              { label: '地域・シーン別', href: '/area/kimitsu' },
              { label: '南房総・鋸南方面からお越しの方' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">
              From Minamiboso
            </p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              南房総・鋸南方面からのご来店も歓迎しています
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              南房総市・鋸南町方面からMARISA君津店へのご来店をお待ちしています。国道127号線を北上してアクセスいただける、内房エリアのもみほぐしサロンです。週末の鋸山ハイキングや南房総観光の帰りにも立ち寄れます。
            </p>
          </div>
        </div>
      </div>

      {/* Access from Minamiboso */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Access from Minamiboso" ja="南房総・鋸南からのアクセス詳細" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              南房総市・鋸南町方面からMARISA君津店へは、国道127号線（内房なぎさライン）を北上するルートが便利です。鋸南町内からは約30〜40分程度を目安にお越しください。南房総市内からは道路状況により45分〜50分程度かかる場合があります。内房の海岸線沿いを走る気持ちのよいドライブルートですので、お出かけのついでにお立ち寄りいただけます。
            </p>
            <p>
              高速道路をご利用の場合は、館山自動車道の鋸南保田インターから乗り、君津インターで下車するルートがあります。一般道と比べて時間を短縮できる場合がありますので、急いでいるときや夜間のご利用に便利です。店舗前には無料駐車場をご用意していますので、車でそのままお越しいただけます。
            </p>
            <p>
              鋸山（のこぎりやま）は鋸南町と富津市の境に位置する人気スポットで、ハイキングや日本寺観光を楽しむ方も多くいらっしゃいます。鋸山でたっぷり歩いた後、帰り道にMARISAへ立ち寄り、疲れた脚や体をほぐしてから帰るというご利用パターンも喜ばれています。カーナビには「千葉県君津市杢師3-20-10」とご入力ください。
            </p>
            <p>
              富浦・白浜・千倉方面からも国道127号線・134号線を利用してお越しいただけます。内房を北上するルートで、君津市杢師エリアのMARISAへアクセスしてください。
            </p>
          </div>

          {/* Route summary */}
          <div className="mt-10 bg-sand-100 border border-sand-200 p-6 space-y-3 text-sm">
            <p className="font-medium text-stone-800 tracking-wide mb-4">南房総からのルート目安</p>
            <div className="flex gap-4 text-stone-700">
              <span className="text-brown-400 shrink-0">●</span>
              <span>鋸南町 → 国道127号線北上 → 富津市経由 → 君津市杢師 → MARISA（約30〜40分）</span>
            </div>
            <div className="flex gap-4 text-stone-700">
              <span className="text-brown-400 shrink-0">●</span>
              <span>鋸南保田IC → 館山自動車道 → 君津IC → MARISA（約25〜30分）</span>
            </div>
            <div className="flex gap-4 text-stone-700">
              <span className="text-brown-400 shrink-0">●</span>
              <span>南房総市 → 国道127号線北上 → 君津市杢師 → MARISA（約40〜50分）</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Minamiboso visitors choose MARISA */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="For Sightseers & Locals" ja="観光・週末のご利用もおすすめ" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              南房総エリアは豊かな自然と観光スポットに恵まれており、週末には多くの方がハイキングや海岸散歩などのアクティビティを楽しまれています。アウトドアを楽しんだ後の体のケアにも、MARISAのもみほぐしをご活用ください。ウォーキングやハイキングで疲れた脚・腰のケアには、もみほぐし60〜90分コースが特に喜ばれています。
            </p>
            <p>
              南房総エリアにはリラクゼーションサロンが少ないため、君津市内にあるMARISAまで足を運んでいただく方も増えています。夜0時まで（最終受付23時）営業していますので、日中のお出かけや観光の後でも余裕を持ってご来店いただけます。当日予約もホットペッパービューティーから可能ですので、お気軽にどうぞ。
            </p>
            <p>
              もみほぐし45分3,500円〜というリーズナブルな価格設定で、ヘッドリラックス・足つぼなど豊富なメニューも揃えています。鍼灸・美容鍼はBMERITよりご予約いただけます。
            </p>
            <p>
              MARISAへのご来店は、南房総・鋸南エリアの皆様にとってのリフレッシュの場として定着してきています。お体の状態に合わせた丁寧なカウンセリングからスタートし、最適なメニューをご提案いたします。
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/menu/body-care" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">もみほぐしを見る →</Link>
            <Link href="/access" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">アクセス・地図を見る →</Link>
          </div>
        </div>
      </section>

      {/* Menu Cards */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Menu" ja="対応メニュー" lead="南房総方面からお越しの方にもご利用いただけるメニューをご紹介します" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {menus.map((m) => (
              <Link
                key={m.name}
                href={m.href}
                target={m.external ? '_blank' : undefined}
                rel={m.external ? 'noopener noreferrer' : undefined}
                className="block bg-cream-50 border border-sand-200 p-5 hover:border-brown-300 transition-colors"
              >
                <p className="font-medium text-stone-800 tracking-wide mb-1">{m.name}</p>
                <p className="text-xs text-greige-400 mb-2">{m.time} / {m.price}</p>
                <p className="text-xs text-stone-700 leading-relaxed">{m.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Shop info table */}
      <section className="py-12 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Shop Info" ja="店舗情報" />
          <dl className="mt-6 divide-y divide-sand-200 text-sm">
            {[
              { label: '店舗名', value: SHOP_INFO.name },
              { label: '住所', value: SHOP_INFO.address },
              { label: '営業時間', value: '10:00〜24:00（最終受付23:00）年中無休' },
              { label: '駐車場', value: '無料駐車場あり（店舗前）' },
              { label: '鋸南から', value: '車で約30〜40分（国道127号線または館山道経由）' },
              { label: '南房総市から', value: '車で約40〜50分（国道127号線経由）' },
              { label: '君津ICから', value: '車で約10分' },
            ].map((item) => (
              <div key={item.label} className="flex gap-6 py-3">
                <dt className="w-28 shrink-0 text-greige-400 tracking-wide">{item.label}</dt>
                <dd className="text-stone-700 leading-loose">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="FAQ" ja="よくある質問" />
          <div className="mt-8 space-y-4">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="border border-sand-200 bg-cream-50 p-6">
                <p className="text-sm font-medium text-stone-800 mb-3 tracking-wide">
                  <span className="font-en text-brown-400 mr-2">Q.</span>
                  {item.name}
                </p>
                <p className="text-sm text-stone-700 leading-loose pl-5">
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-12 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
              { label: '館山方面からお越しの方', href: '/area/tateyama' },
              { label: '安房・南房総方面からお越しの方', href: '/area/awa' },
              { label: '房総エリアの方へ', href: '/area/boso' },
              { label: 'メニュー・料金', href: '/menu' },
              { label: 'アクセス・駐車場', href: '/access' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="border border-sand-300 px-3 py-1.5 text-stone-700 hover:border-brown-300 hover:text-brown-500 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">
            Reservation
          </p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">
            ご予約はこちらから
          </h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業・当日予約OK・無料駐車場完備。南房総・鋸南方面からのご来店もお気軽にどうぞ。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            {LINE_URL && (
              <ReserveButton href={LINE_URL} label="LINEで問い合わせ" variant="outline" size="lg" />
            )}
            <ReserveButton href="/access" label="アクセスを確認する" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
