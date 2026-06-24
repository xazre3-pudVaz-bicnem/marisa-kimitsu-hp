import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { BMERIT_URL, HPB_URL, LINE_URL, SHOP_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '安房・館山方面からのマッサージ・もみほぐし｜MARISA 君津店',
  description: '館山・安房方面からもみほぐし・マッサージをお探しの方へ。MARISA 君津店は館山ICから車で約30〜40分。夜0時まで・当日予約OK・無料駐車場。',
  keywords: ['館山 マッサージ', '安房 もみほぐし', '館山 リラクゼーション', '安房 マッサージ 君津'],
  openGraph: {
    title: '安房・館山方面からのマッサージ・もみほぐし｜MARISA 君津店',
    description: '館山・安房方面からもみほぐし・マッサージをお探しの方へ。MARISA 君津店は館山ICから車で約30〜40分。夜0時まで・当日予約OK・無料駐車場。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/area/awa' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '館山からどのくらいかかりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '館山市内から館山自動車道（富津館山道路）経由で車で約40〜50分ほどです。館山インターから乗車し、君津インターで下車後、店舗まで約10分でお到着いただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '高速を使うルートは？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '館山インターチェンジから館山自動車道を北上し、君津インターチェンジで下車してください。インターを出てから店舗まで約10分です。国道127号線での一般道ルートも同程度の時間でアクセスできます。',
      },
    },
    {
      '@type': 'Question',
      name: '遠くから来ても大丈夫ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、安房・館山方面からのお客様も多くいらっしゃいます。遠方からお越しの場合は事前予約をおすすめしています。ホットペッパービューティーから24時間いつでもご予約いただけます。無料駐車場も完備しています。',
      },
    },
    {
      '@type': 'Question',
      name: '鍼灸もできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、鍼灸・美容鍼のメニューをご用意しています。鍼灸のご予約はBMERITよりお申し込みください。もみほぐしと組み合わせてのご利用も可能です。',
      },
    },
    {
      '@type': 'Question',
      name: '営業時間は？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '10:00〜24:00（最終受付23:00）年中無休で営業しています。安房・館山方面から夕方以降にお越しいただいても十分間に合う営業時間です。帰り道にゆっくりとご利用いただけます。',
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

export default function AreaAwaPage() {
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
              { label: '安房・南房総方面からお越しの方' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">
              From Awa / Minami-Boso
            </p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              安房・南房総方面からのご来店も歓迎しています
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              館山・鴨川・鋸南・富山など安房・南房総エリアの方も、館山自動車道または国道127号線経由でMARISA君津店へお越しいただけます。館山から約40〜50分。夜0時まで・無料駐車場完備で遠方からのご来店もお気軽にどうぞ。
            </p>
          </div>
        </div>
      </div>

      {/* Access from Awa area */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Access from Awa" ja="安房・南房総からのアクセス詳細" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              安房・南房総方面からMARISA君津店へは、館山自動車道（富津館山道路を含む）をご利用いただくのが最もスムーズです。館山インターチェンジから乗車し、君津インターチェンジで下車してください。インターを出てから店舗まで約10分でお到着いただけます。
            </p>
            <p>
              館山市内からは館山インターから館山自動車道を北上し、君津インターまで約30〜40分ほどです。インターを降りてから店舗まで約10分ですので、トータルで約40〜50分を目安にお越しください。
            </p>
            <p>
              鋸南・保田方面からは、国道127号線を北上して富津市を経由し君津市へ向かうルート、または富津竹岡インターから館山自動車道に乗って君津インターで下車するルートがあります。車で約30〜40分ほどです。
            </p>
            <p>
              富山・鹿野山方面からは、県道や国道を経由して君津市へお越しください。車で約30分ほどでお到着いただけます。鴨川方面からは国道465号線を経由して君津方面へ向かう形になり、約50〜60分を目安にお越しください。カーナビには「千葉県君津市杢師3-20-10」とご入力ください。
            </p>
          </div>

          {/* Route summary */}
          <div className="mt-10 bg-sand-100 border border-sand-200 p-6 space-y-3 text-sm">
            <p className="font-medium text-stone-800 tracking-wide mb-4">安房・南房総からのルート目安</p>
            <div className="flex gap-4 text-stone-700">
              <span className="text-brown-400 shrink-0">●</span>
              <span>館山IC → 館山自動車道北上 → 君津IC → MARISA（約40〜50分）</span>
            </div>
            <div className="flex gap-4 text-stone-700">
              <span className="text-brown-400 shrink-0">●</span>
              <span>鋸南・保田 → 国道127号線北上 → 富津市経由 → 君津市杢師 → MARISA（約30〜40分）</span>
            </div>
            <div className="flex gap-4 text-stone-700">
              <span className="text-brown-400 shrink-0">●</span>
              <span>鴨川方面 → 国道465号線 → 君津市 → MARISA（約50〜60分）</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Awa visitors choose MARISA */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Why Choose MARISA" ja="安房・南房総の方が君津MARISAを選ぶ理由" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              安房・南房総エリアは自然豊かで観光地としても人気ですが、本格的なリラクゼーションサロンの選択肢が限られるエリアでもあります。そのため、より質の高い施術を求めて君津のMARISAまで足を運んでいただくお客様がいらっしゃいます。
            </p>
            <p>
              MARISAでは熟練したスタッフによる丁寧なもみほぐし施術をご提供しています。「遠くから来た甲斐があった」と感じていただけるよう、技術と接客の両面で高い水準を維持しています。お客様一人ひとりのお体の状態に合わせたアプローチを心がけています。
            </p>
            <p>
              夜0時まで営業（最終受付23:00）・年中無休という営業体制は、観光シーズンや農業・漁業のオフシーズンなど、生活パターンが変わりやすい安房・南房総エリアの方々にも利用しやすい環境です。ホットペッパービューティーから24時間いつでも予約できます。
            </p>
            <p>
              もみほぐし45分3,500円〜というリーズナブルな価格で、ヘッドリラックス・足つぼなど豊富なメニューをご用意しています。店舗前の無料駐車場でお車も安心です。安房・南房総方面からお越しの際はぜひ事前にご予約のうえお越しください。
            </p>
            <p>
              鍼灸・美容鍼も（BMERITよりご予約）ご利用いただけます。日常のお体のケアに、ぜひMARISAをご活用ください。
            </p>
          </div>
        </div>
      </section>

      {/* Menu Cards */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Menu" ja="対応メニュー" lead="安房・館山方面からお越しの方にもご利用いただけるメニューをご紹介します" />
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
              { label: '館山市から', value: '車で約40〜50分（館山自動車道・君津IC経由）' },
              { label: '鋸南から', value: '車で約30〜40分（国道127号線または館山道経由）' },
              { label: '鴨川から', value: '車で約50〜60分（国道465号線経由）' },
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
              { label: '富津方面からお越しの方', href: '/area/futtsu' },
              { label: '房総エリアの方へ', href: '/area/boso' },
              { label: '館山方面からお越しの方', href: '/area/tateyama' },
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
            夜0時まで営業・当日予約OK・無料駐車場完備。安房・南房総方面からのご来店もお気軽にどうぞ。
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
