import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { BMERIT_URL, HPB_URL, LINE_URL, SHOP_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '富津からのアクセス・マッサージ｜MARISA 君津店',
  description: '富津方面からもみほぐし・マッサージをお探しの方へ。MARISA 君津店は富津から車で約15分。夜0時まで・当日予約OK・無料駐車場。',
  keywords: ['富津 マッサージ', '富津 もみほぐし', '富津 リラクゼーション', '富津 肩こり ケア'],
  openGraph: {
    title: '富津からのアクセス・マッサージ｜MARISA 君津店',
    description: '富津方面からもみほぐし・マッサージをお探しの方へ。MARISA 君津店は富津から車で約15分。夜0時まで・当日予約OK・無料駐車場。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/area/futtsu' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '富津からMARISAまでどのくらいかかりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '富津市街地からは国道127号線経由で車で約15〜20分ほどです。竹岡・天羽方面からは約20〜25分を目安にお越しください。館山自動車道・君津IC経由でも同程度でお越しいただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '夜遅くでも受けられますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '夜0時まで営業しており、最終受付は23:00です。富津でのお仕事帰りや夕方以降のご利用も大歓迎です。年中無休ですので、平日・休日を問わずご来店いただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '当日予約できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、当日予約も承っています。ホットペッパービューティーからオンラインで空き状況をご確認のうえご予約いただくとスムーズです。急なご予定でもできる限りご対応しますので、まずはご確認ください。',
      },
    },
    {
      '@type': 'Question',
      name: '鍼灸もできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、鍼灸・美容鍼のご予約はBMERITよりお受けしています。もみほぐしと組み合わせてのご利用も可能です。ご予約の際に詳細をご確認ください。',
      },
    },
    {
      '@type': 'Question',
      name: '駐車場はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、店舗前に無料駐車場をご用意しています。富津方面からお車でお越しの方も駐車料金は一切かかりません。安心してご来店ください。',
      },
    },
  ],
}

const menus = [
  { name: 'もみほぐし', time: '45分〜', price: '¥3,500〜', href: '/menu/body-care', desc: '肩こり・腰痛・全身の疲れをしっかりほぐします' },
  { name: 'ヘッドリラックス', time: '60分〜', price: '¥5,000〜', href: '/menu/head', desc: '頭・首・肩のコリをまとめてケア' },
  { name: '足つぼ', time: '45分〜', price: '¥3,500〜', href: '/menu/foot', desc: '立ち仕事・歩き疲れに。足裏から全身をサポート' },
  { name: '鍼灸・美容鍼', time: '60分〜', price: '要予約', href: BMERIT_URL, desc: '本格的な鍼施術。BMERITよりご予約ください', external: true },
]

export default function AreaFuttsuPage() {
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
              { label: '富津方面からお越しの方' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">
              From Futtsu
            </p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              富津方面からのご来店も歓迎しています
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              富津市・竹岡・天羽エリアからお車で約15〜20分。国道127号線を使ってアクセスしやすいMARISA君津店へ、ぜひお気軽にお越しください。夜0時まで営業していますので、仕事帰りや休日のリフレッシュにもご活用いただけます。
            </p>
          </div>
        </div>
      </div>

      {/* Access from Futtsu */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Access from Futtsu" ja="富津市からのアクセス詳細" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              富津市からMARISA君津店へは、国道127号線を北上してお越しいただくのが最もわかりやすいルートです。富津市街地を出発して君津方面へ向かうと、約15〜20分でお到着いただけます。
            </p>
            <p>
              竹岡・天羽エリアからは、国道127号線を経由して君津市内へ入り、杢師交差点付近が目印となります。こちらからは約20〜25分ほどを目安にお越しください。道路はほぼ直線的でわかりやすく、初めての方でも迷いにくいルートです。
            </p>
            <p>
              館山自動車道（館山道）をご利用の場合は、君津インターチェンジで下車してください。インターを降りてから店舗まで約10分ですので、高速道路をご利用の富津方面のお客様にも便利なルートです。富津竹岡インターから乗車するとさらに短時間でアクセスできます。
            </p>
            <p>
              店舗前には無料駐車場をご用意していますので、お車でのご来店でも安心です。富津市内にはリラクゼーションサロンが少ないエリアもあるかと思いますが、君津のMARISAはそうしたお客様のご来店も大歓迎です。カーナビには「千葉県君津市杢師3-20-10」とご入力ください。
            </p>
          </div>

          {/* Route summary */}
          <div className="mt-10 bg-sand-100 border border-sand-200 p-6 space-y-3 text-sm">
            <p className="font-medium text-stone-800 tracking-wide mb-4">富津からのルート目安</p>
            <div className="flex gap-4 text-stone-700">
              <span className="text-brown-400 shrink-0">●</span>
              <span>富津市街地 → 国道127号線北上 → 君津市杢師 → MARISA（約15〜20分）</span>
            </div>
            <div className="flex gap-4 text-stone-700">
              <span className="text-brown-400 shrink-0">●</span>
              <span>竹岡・天羽方面 → 国道127号線北上 → 君津市杢師 → MARISA（約20〜25分）</span>
            </div>
            <div className="flex gap-4 text-stone-700">
              <span className="text-brown-400 shrink-0">●</span>
              <span>富津竹岡IC → 館山自動車道 → 君津IC → MARISA（約15分）</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Futtsu residents choose MARISA */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Why Choose MARISA" ja="富津市の方にMARISAが選ばれる理由" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              富津エリアの皆様からMARISAが選ばれる理由のひとつが、営業時間の長さです。夜0時まで営業（最終受付23:00）していますので、日中お忙しい方でも仕事帰りにお立ち寄りいただけます。
            </p>
            <p>
              無料駐車場を完備していることも、お車でお越しになる富津方面のお客様にとって大きなメリットです。駐車場の心配なく、ゆったりとした気持ちでお越しいただけます。
            </p>
            <p>
              年中無休で営業していますので、お休みの曜日を気にする必要がありません。祝日や年末年始も通常通り営業していますので、急なご予定でもご予約いただけます。ホットペッパービューティーから24時間いつでもオンラインご予約が可能です。
            </p>
            <p>
              もみほぐし・ヘッドリラックス・足つぼなど豊富なメニューをご用意しています。45分3,500円〜とリーズナブルな価格設定で、定期的なメンテナンスとしてもご活用いただけます。疲れが溜まったと感じたときに気軽にお越しいただける、身近なリラクゼーションサロンを目指しています。
            </p>
            <p>
              また、鍼灸・美容鍼のメニューもご用意しており、体の深部からのケアをサポートします。もみほぐしとの組み合わせで、より効果的な施術が期待できます。鍼灸のご予約はBMERITよりお申し込みください。
            </p>
          </div>
        </div>
      </section>

      {/* Menu Cards */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Menu" ja="対応メニュー" lead="富津方面からお越しの方にもご利用いただけるメニューをご紹介します" />
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
              { label: '富津市から', value: '車で約15〜20分（国道127号線経由）' },
              { label: '君津ICから', value: '車で約10分（館山自動車道利用）' },
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
              { label: '木更津方面からお越しの方', href: '/area/kisarazu' },
              { label: '房総エリアの方へ', href: '/area/boso' },
              { label: 'アクセス・駐車場', href: '/access' },
              { label: 'メニュー・料金', href: '/menu' },
              { label: 'よくある質問', href: '/faq' },
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
            夜0時まで営業・当日予約OK・無料駐車場完備。富津方面からのご来店もお気軽にどうぞ。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton
              href={HPB_URL}
              label="ホットペッパーで予約する"
              variant="light"
              size="lg"
            />
            {LINE_URL && (
              <ReserveButton
                href={LINE_URL}
                label="LINEで問い合わせ"
                variant="outline"
                size="lg"
              />
            )}
            <ReserveButton
              href="/access"
              label="アクセスを確認する"
              variant="outline"
              size="lg"
            />
          </div>
        </div>
      </section>
    </>
  )
}
