import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { BMERIT_URL, HPB_URL, LINE_URL, SHOP_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津IC近くのマッサージ・もみほぐし｜MARISA 君津店',
  description: '君津IC近くでマッサージ・もみほぐしをお探しの方へ。MARISA 君津店は君津ICから車で約10分。高速道路利用で木更津・富津・袖ケ浦からもアクセス便利。',
  keywords: ['君津IC マッサージ', '君津IC もみほぐし', '君津 インター 近く マッサージ', '館山自動車道 マッサージ'],
  openGraph: {
    title: '君津IC近くのマッサージ・もみほぐし｜MARISA 君津店',
    description: '君津IC近くでマッサージ・もみほぐしをお探しの方へ。MARISA 君津店は君津ICから車で約10分。高速道路利用で木更津・富津・袖ケ浦からもアクセス便利。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/area/kimitsu-ic' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '君津ICからMARISAまで何分ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '君津インターチェンジから店舗まで車で約10分です。インターを降りてから杢師方面へ向かっていただくとスムーズにお越しいただけます。カーナビに「千葉県君津市杢師3-20-10」と入力してお越しください。',
      },
    },
    {
      '@type': 'Question',
      name: '高速を使って来られますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、館山自動車道・君津インターチェンジが最寄りのインターです。木更津・袖ケ浦・市原方面からは館山道を南下し、東京・横浜方面からはアクアラインまたは京葉道路から館山道へ接続してください。',
      },
    },
    {
      '@type': 'Question',
      name: '遠方からでも大丈夫ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、遠方からお越しのお客様も多くいらっしゃいます。事前にホットペッパービューティーよりご予約いただくと確実にご案内できます。無料駐車場も完備していますので安心してお越しください。',
      },
    },
    {
      '@type': 'Question',
      name: '事前予約は必要ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '遠方からお越しの場合は事前予約を強くおすすめしています。当日予約も対応していますが、確実にご案内するためにも事前のご予約が便利です。ホットペッパービューティーから24時間いつでもご予約いただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '夜遅くまで営業していますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、夜0時まで営業（最終受付23:00）しています。高速道路でのお仕事帰りや夕方以降のご来店も大歓迎です。年中無休ですので、平日・休日・祝日を問わずご利用いただけます。',
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

export default function AreaKimitsuIcPage() {
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
              { label: '君津インター近くのマッサージ' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">
              Near Kimitsu IC
            </p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              君津インターから車で10分。高速道路沿いのもみほぐし
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              館山自動車道・君津インターチェンジから約10分。木更津・市原・富津・袖ケ浦方面からも高速道路でアクセスしやすいMARISA君津店。夜0時まで営業・無料駐車場完備で、遠方からのお客様も安心してご利用いただけます。
            </p>
          </div>
        </div>
      </div>

      {/* Access via Kimitsu IC */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Access via Kimitsu IC" ja="君津インターからのアクセス詳細" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              館山自動車道・君津インターチェンジを降りたら、杢師方面へ向かってください。インターから約10分でMARISA君津店にお到着いただけます。カーナビには「千葉県君津市杢師3-20-10」とご入力ください。
            </p>
            <p>
              東京・横浜方面からお越しの場合は、東京湾アクアラインまたは京葉道路から館山自動車道へ進み、君津インターチェンジでお降りください。アクアライン利用の場合は木更津金田インターから館山道へ接続し、君津インターまでさらに約10分ほどです。
            </p>
            <p>
              木更津・袖ケ浦方面からは館山自動車道を南下し、君津インターでお降りください。木更津南インターまたは袖ケ浦インターから乗車すれば、約15〜20分でお越しいただけます。
            </p>
            <p>
              市原・千葉方面からは、館山自動車道または京葉道路から接続し、君津インターまで約30〜40分です。高速道路を利用することで一般道に比べて大幅に時間を短縮できます。富津方面からは富津竹岡インターから乗車すると便利です。
            </p>
          </div>

          {/* Route summary */}
          <div className="mt-10 bg-sand-100 border border-sand-200 p-6 space-y-3 text-sm">
            <p className="font-medium text-stone-800 tracking-wide mb-4">各方面からのルート目安</p>
            <div className="flex gap-4 text-stone-700">
              <span className="text-brown-400 shrink-0">●</span>
              <span>木更津・袖ケ浦 → 館山自動車道 → 君津IC → MARISA（約15〜25分）</span>
            </div>
            <div className="flex gap-4 text-stone-700">
              <span className="text-brown-400 shrink-0">●</span>
              <span>市原 → 館山自動車道 → 君津IC → MARISA（約30〜40分）</span>
            </div>
            <div className="flex gap-4 text-stone-700">
              <span className="text-brown-400 shrink-0">●</span>
              <span>東京・横浜 → アクアライン → 館山自動車道 → 君津IC → MARISA（約50〜70分）</span>
            </div>
            <div className="flex gap-4 text-stone-700">
              <span className="text-brown-400 shrink-0">●</span>
              <span>富津 → 富津竹岡IC → 館山自動車道 → 君津IC → MARISA（約20分）</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why high speed users choose MARISA */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="For Long Distance Visitors" ja="遠方からお越しの方への安心ポイント" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              遠方から高速道路でお越しになる方に、MARISAの安心ポイントをお伝えします。まず、店舗前に無料駐車場を完備していますので、駐車の心配なくお越しいただけます。お車でのご来店がほとんどのお客様で、停めやすい環境を整えています。
            </p>
            <p>
              営業時間は夜0時まで（最終受付23:00）と長く設定していますので、仕事終わりに高速道路でお越しになる場合でも、遅い時間のご予約が可能です。年中無休ですので、曜日や祝日を選ばずいつでもご来店いただけます。
            </p>
            <p>
              せっかく遠方からお越しいただくため、ホットペッパービューティーからの事前予約をおすすめしています。予約なしでお越しいただいた場合でも対応できる限りご案内しますが、確実にご利用いただくためにも事前予約が便利です。
            </p>
            <p>
              もみほぐし・ヘッドリラックス・足つぼなど豊富なメニューから、その日の体の状態に合わせてお選びいただけます。45分3,500円〜というリーズナブルな価格設定で、高速代をかけても満足いただける施術をご提供します。初めてのご来店の方もお気軽にどうぞ。
            </p>
            <p>
              鍼灸・美容鍼をご希望の方はBMERITよりご予約ください。もみほぐしと鍼灸を組み合わせて、より深いケアをご体験いただけます。
            </p>
          </div>
        </div>
      </section>

      {/* Menu Cards */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Menu" ja="対応メニュー" lead="君津IC周辺からお越しの方にもご利用いただけるメニューをご紹介します" />
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
              { label: '君津ICから', value: '車で約10分' },
              { label: 'アクセス道路', value: '館山自動車道（館山道）利用' },
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
              { label: '袖ケ浦方面からお越しの方', href: '/area/sodegaura' },
              { label: '富津方面からお越しの方', href: '/area/futtsu' },
              { label: 'アクセス・駐車場', href: '/access' },
              { label: 'メニュー・料金', href: '/menu' },
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
            夜0時まで営業・当日予約OK・無料駐車場完備。遠方からのご来店もお気軽にどうぞ。
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
