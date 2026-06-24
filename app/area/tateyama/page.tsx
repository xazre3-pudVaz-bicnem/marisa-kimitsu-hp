import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { BMERIT_URL, HPB_URL, LINE_URL, SHOP_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '館山からのアクセス・マッサージ｜MARISA 君津店',
  description: '館山方面からもみほぐし・マッサージをお探しの方へ。MARISA 君津店は館山から車で約35分。夜0時まで・当日予約OK・無料駐車場完備。',
  keywords: ['館山 マッサージ', '館山 もみほぐし', '館山 肩こり ケア', '館山 リラクゼーション'],
  openGraph: {
    title: '館山からのアクセス・マッサージ｜MARISA 君津店',
    description: '館山方面からもみほぐし・マッサージをお探しの方へ。MARISA 君津店は館山から車で約35分。夜0時まで・当日予約OK・無料駐車場完備。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/area/tateyama' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '館山からMARISAまで何分ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '館山市内から館山自動車道（富津館山道路）を北上して君津インターチェンジで下車後、約10分でお到着いただけます。合計で約35〜45分を目安にお越しください。国道127号線での一般道ルートもご利用いただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '高速道路を使うルートを教えてください。',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '館山インターチェンジから館山自動車道を北上し、君津インターチェンジで下車してください。インターを出てから店舗まで約10分です。高速を使うと国道127号線より時間を短縮できる場合があります。',
      },
    },
    {
      '@type': 'Question',
      name: '予約は必要ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '当日予約も承っていますが、館山方面からの遠方ご来店の場合は事前予約をおすすめしています。ホットペッパービューティーから24時間いつでも空き状況を確認してご予約いただけます。',
      },
    },
    {
      '@type': 'Question',
      name: 'どんなメニューがありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'もみほぐし（45分¥3,500〜）、ヘッドリラックス（60分¥5,000〜）、足つぼ（45分¥3,500〜）などをご用意しています。鍼灸・美容鍼はBMERITよりご予約いただけます。体の状態に合わせてお選びください。',
      },
    },
    {
      '@type': 'Question',
      name: '夜遅くまで営業していますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、夜0時まで営業（最終受付23:00）しています。館山方面から夕方以降にお越しいただいても十分間に合う営業時間です。年中無休ですので、平日・休日を問わずご利用いただけます。',
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

export default function AreaTateyamaPage() {
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
              { label: '館山方面からお越しの方' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">
              From Tateyama
            </p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              館山・南房総方面からのご来店も歓迎しています
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              館山市・南房総市方面からMARISA君津店へのご来店をお待ちしています。館山自動車道（富津館山道路）または国道127号線を利用してお越しいただけます。夜0時まで営業・無料駐車場完備です。
            </p>
          </div>
        </div>
      </div>

      {/* Access from Tateyama */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Access from Tateyama" ja="館山からMARISAへのアクセス詳細" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              館山市内からMARISA君津店へは、館山自動車道（富津館山道路含む）を北上するルートが最もスムーズです。館山インターから乗車し、君津インターチェンジで下車後、店舗まで約10分でお到着いただけます。合計で約35〜45分を目安にお越しください。
            </p>
            <p>
              一般道の場合は国道127号線（内房なぎさライン）を北上するルートも利用できます。館山から君津方面へ向かい、所要時間は交通状況にもよりますが40〜50分程度を目安にお越しください。内房エリアの海沿いルートは景色も楽しめますので、ドライブがてらのご来店もおすすめです。
            </p>
            <p>
              南房総エリアにはリラクゼーションサロンの選択肢が限られているため、館山・南房総・鋸南方面からわざわざMARISAまで足を運んでいただくお客様も多くいらっしゃいます。夜0時まで営業していますので、日中のお出かけやお仕事の後でも余裕を持ってご来店いただけます。カーナビには「千葉県君津市杢師3-20-10」とご入力ください。
            </p>
            <p>
              店舗前には無料駐車場をご用意しており、館山方面からお車でお越しの方も駐車料金は一切かかりません。安心してご来店ください。
            </p>
          </div>

          {/* Route summary */}
          <div className="mt-10 bg-sand-100 border border-sand-200 p-6 space-y-3 text-sm">
            <p className="font-medium text-stone-800 tracking-wide mb-4">館山からのルート目安</p>
            <div className="flex gap-4 text-stone-700">
              <span className="text-brown-400 shrink-0">●</span>
              <span>館山IC → 館山自動車道北上 → 君津IC（約30〜35分）→ MARISA（約10分）</span>
            </div>
            <div className="flex gap-4 text-stone-700">
              <span className="text-brown-400 shrink-0">●</span>
              <span>館山市街地 → 国道127号線北上 → 君津市杢師 → MARISA（約40〜50分）</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Tateyama visitors choose MARISA */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Why Choose MARISA" ja="館山方面から選ばれる理由" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAが館山・南房総エリアからもお選びいただける理由のひとつが、夜0時まで（最終受付23時）という営業時間の長さです。南房総方面から夕方以降に来店し、施術後に帰宅するというご利用パターンが定着しています。営業時間内であれば当日予約も可能ですので、思い立ったときにすぐご来店いただけます。
            </p>
            <p>
              もみほぐし45分¥3,500〜という手頃な料金設定も、遠方からお越しのお客様に喜ばれています。60分¥4,500〜、90分¥6,500〜と時間を選べますので、その日の体の状態や滞在時間に合わせてお選びください。ヘッドリラックスや足つぼセットなども人気のコースです。
            </p>
            <p>
              館山エリアは自然豊かで観光地としても有名ですが、本格的なリラクゼーションサロンは限られています。MARISAでは熟練のスタッフによる丁寧な施術で、わざわざお越しいただく価値を感じていただけるよう心がけています。
            </p>
            <p>
              鍼灸・美容鍼もBMERITよりご予約いただけます。もみほぐしとあわせて体の深部からのケアをご希望の方は、ぜひご相談ください。
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
          <SectionHeader en="Menu" ja="対応メニュー" lead="館山方面からお越しの方にもご利用いただけるメニューをご紹介します" />
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
              { label: '館山市から', value: '車で約35〜45分（館山自動車道・君津IC経由）' },
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
              { label: '南房総・鋸南方面からお越しの方', href: '/area/minamiboso' },
              { label: '安房・南房総方面からお越しの方', href: '/area/awa' },
              { label: 'メニュー・料金', href: '/menu' },
              { label: 'アクセス・駐車場', href: '/access' },
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
            夜0時まで営業・当日予約OK・無料駐車場完備。館山方面からのご来店もお気軽にどうぞ。
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
