import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { BMERIT_URL, HPB_URL, LINE_URL, SHOP_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '市原からのアクセス・マッサージ｜MARISA 君津店',
  description: '市原方面からもみほぐし・マッサージをお探しの方へ。MARISA 君津店は市原から車で約30〜40分。夜0時まで・当日予約OK・無料駐車場。',
  keywords: ['市原 マッサージ', '市原 もみほぐし', '市原 リラクゼーション', '市原 南部 マッサージ'],
  openGraph: {
    title: '市原からのアクセス・マッサージ｜MARISA 君津店',
    description: '市原方面からもみほぐし・マッサージをお探しの方へ。MARISA 君津店は市原から車で約30〜40分。夜0時まで・当日予約OK・無料駐車場。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/area/ichihara' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '市原からどのくらいかかりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '市原市街地（五井・姉崎方面）から館山自動車道経由で、車で約30〜40分ほどです。君津インターチェンジで下車後、店舗まで約10分でお到着いただけます。市原鶴舞インターをご利用の場合も同程度です。',
      },
    },
    {
      '@type': 'Question',
      name: '鍼灸もできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、鍼灸・美容鍼のメニューをご用意しています。鍼灸のご予約はBMERITよりお申し込みください。もみほぐしとの組み合わせもご相談いただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '当日予約できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、当日予約も承っています。市原方面から遠方をお越しの際は、ホットペッパービューティーからご予約いただくと確実です。最終受付は23:00ですので、遅い時間のご予約もお気軽にどうぞ。',
      },
    },
    {
      '@type': 'Question',
      name: '駐車場はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、店舗前に無料駐車場をご用意しています。お車でお越しの場合も駐車料金は一切かかりません。市原方面からのお客様のほとんどがお車でご来店されています。',
      },
    },
    {
      '@type': 'Question',
      name: 'どんなメニューがありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'もみほぐし（45分¥3,500〜）、ヘッドリラックス（60分¥5,000〜）、足つぼ（45分¥3,500〜）などをご用意しています。また、鍼灸・美容鍼はBMERITよりご予約いただけます。',
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

export default function AreaIchiharaPage() {
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
              { label: '市原方面からお越しの方' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">
              From Ichihara
            </p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              市原方面からのご来店も承っています
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              市原市・五井・姉崎エリアから館山自動車道経由で約30〜40分。君津インターから10分のMARISA君津店は、夜0時まで営業・無料駐車場完備で市原方面のお客様もお気軽にご利用いただけます。
            </p>
          </div>
        </div>
      </div>

      {/* Access from Ichihara */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Access from Ichihara" ja="市原方面からのアクセス詳細" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              市原市からMARISA君津店へは、館山自動車道（館山道）をご利用いただくのがおすすめです。市原鶴舞インターチェンジ、または館山道の各インターチェンジから乗車し、君津インターチェンジで下車してください。インターを出てからMARISAまで約10分でお到着いただけます。
            </p>
            <p>
              五井・姉崎エリアからは、館山自動車道を利用して約30〜40分が目安です。市原インターまたは市原鶴舞インターからご乗車いただくと便利です。道路状況によっては前後しますので、余裕を持ってお越しください。
            </p>
            <p>
              一般道でお越しの場合は、国道297号線や国道127号線を経由して君津方面へ向かってください。こちらは50分〜1時間程度かかる場合がありますが、景色を楽しみながらのドライブにもなります。
            </p>
            <p>
              市原から君津方面へのアクセスは、館山自動車道のおかげで比較的スムーズです。千葉県の内房エリアをつなぐ同道路を利用することで、市原・木更津・袖ケ浦・君津エリアの行き来が格段に便利になっています。MARISAはそのような交通の便を活かした立地にあります。カーナビには「千葉県君津市杢師3-20-10」とご入力ください。
            </p>
          </div>

          {/* Route summary */}
          <div className="mt-10 bg-sand-100 border border-sand-200 p-6 space-y-3 text-sm">
            <p className="font-medium text-stone-800 tracking-wide mb-4">市原からのルート目安</p>
            <div className="flex gap-4 text-stone-700">
              <span className="text-brown-400 shrink-0">●</span>
              <span>市原鶴舞IC → 館山自動車道 → 木更津JCT → 君津IC → MARISA（約30〜40分）</span>
            </div>
            <div className="flex gap-4 text-stone-700">
              <span className="text-brown-400 shrink-0">●</span>
              <span>市原市街地 → 国道297号線 → 国道127号線 → 君津市杢師 → MARISA（約50〜60分）</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ichihara residents choose MARISA */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Why Choose MARISA" ja="市原方面の方に選ばれる理由" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              市原エリアからわざわざ足を運んでいただくお客様には、「丁寧な施術と落ち着いた空間」を理由に挙げていただくことが多いです。MARISAは技術と空間づくりにこだわり、満足いただける施術を提供しています。
            </p>
            <p>
              夜0時まで営業（最終受付23:00）していますので、市原でのお仕事帰りや夕方以降のご利用も可能です。年中無休ですので、曜日や祝日を気にせずご予約いただけます。
            </p>
            <p>
              店舗前の無料駐車場は、遠方からお車でお越しの際にも便利です。駐車料金がかからないため、施術代のみのわかりやすい料金体系でご利用いただけます。もみほぐし45分3,500円〜というリーズナブルな価格設定で、高速代をかけてもお得感を感じていただけると思います。
            </p>
            <p>
              ホットペッパービューティーからのオンライン予約で、24時間いつでも空き状況の確認とご予約が可能です。市原方面からお越しの際は、ぜひ事前にご予約のうえお越しください。スタッフ一同、心よりお待ちしております。
            </p>
            <p>
              鍼灸・美容鍼のメニューもご用意しており、お体の深部からのケアもサポートします。もみほぐしとあわせてお使いいただくことで、より快適な体の状態をサポートします。
            </p>
          </div>
        </div>
      </section>

      {/* Menu Cards */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Menu" ja="対応メニュー" lead="市原方面からお越しの方にもご利用いただけるメニューをご紹介します" />
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
              { label: '市原市から', value: '車で約30〜40分（館山自動車道・君津IC経由）' },
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
              { label: '木更津方面からお越しの方', href: '/area/kisarazu' },
              { label: '袖ケ浦方面からお越しの方', href: '/area/sodegaura' },
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
            夜0時まで営業・当日予約OK・無料駐車場完備。市原方面からのご来店もお気軽にどうぞ。
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
