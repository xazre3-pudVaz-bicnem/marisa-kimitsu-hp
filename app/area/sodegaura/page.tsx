import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { BMERIT_URL, HPB_URL, LINE_URL, SHOP_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '袖ケ浦からのアクセス・マッサージ｜MARISA 君津店',
  description: '袖ケ浦方面からもみほぐし・マッサージをお探しの方へ。MARISA 君津店は袖ケ浦から車で約20〜25分。夜0時まで・当日予約OK。',
  keywords: ['袖ケ浦 マッサージ', '袖ケ浦 もみほぐし', '袖ケ浦 リラクゼーション', '袖ケ浦 肩こり'],
  openGraph: {
    title: '袖ケ浦からのアクセス・マッサージ｜MARISA 君津店',
    description: '袖ケ浦方面からもみほぐし・マッサージをお探しの方へ。MARISA 君津店は袖ケ浦から車で約20〜25分。夜0時まで・当日予約OK。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/area/sodegaura' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '袖ケ浦からどのくらいかかりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '袖ケ浦市街地からは館山自動車道・袖ケ浦IC〜君津IC経由で車で約20〜25分ほどです。一般道（国道16号・410号経由）でも同程度の時間でアクセスいただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '高速を使うルートを教えてください。',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '館山自動車道の袖ケ浦インターチェンジ、または木更津南インターチェンジから乗車し、君津インターチェンジで下車してください。インターを出てから店舗まで約10分でお到着いただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '予約は必要ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ご予約なしでのご来店も対応していますが、ご予約いただいた方を優先してご案内します。遠方からお越しの場合は、ホットペッパービューティーからの事前予約がおすすめです。当日予約も受け付けています。',
      },
    },
    {
      '@type': 'Question',
      name: '仕事帰りに使えますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、夜0時まで営業（最終受付23:00）しており、袖ケ浦でのお仕事帰りにも十分間に合います。年中無休ですので、平日・休日を問わずご利用いただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '豊富なメニューがありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'もみほぐし・ヘッドリラックス・足つぼなど豊富なメニューをご用意しています。また、鍼灸・美容鍼はBMERITよりご予約いただけます。45分¥3,500〜とリーズナブルな価格設定です。',
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

export default function AreaSodegauraPage() {
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
              { label: '袖ケ浦方面からお越しの方' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">
              From Sodegaura
            </p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              袖ケ浦方面からのご来店も歓迎しています
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              袖ケ浦市・木更津方面からお車で約20〜25分。館山自動車道をご利用なら君津インターから約10分でお越しいただけます。MARISA君津店は夜0時まで営業・無料駐車場完備で、遠方からのお客様も安心してご利用いただけます。
            </p>
          </div>
        </div>
      </div>

      {/* Access from Sodegaura */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Access from Sodegaura" ja="袖ケ浦市からのアクセス詳細" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              袖ケ浦市からMARISA君津店へは、館山自動車道（館山道）をご利用いただくのが最も便利です。袖ケ浦インターチェンジまたは木更津南インターチェンジから乗車し、君津インターチェンジで下車してください。インターを出てから店舗まで約10分ほどで到着します。
            </p>
            <p>
              一般道をご利用の場合は、国道127号線または国道16号・410号を経由して君津市方面へお越しください。袖ケ浦市街地からは約20〜25分を目安にお越しいただけます。木更津方面からお越しの方も同様のルートでアクセス可能です。
            </p>
            <p>
              袖ケ浦市は千葉県の中でも交通の便が良いエリアで、君津との往来も比較的スムーズです。袖ケ浦海浜公園や袖ケ浦市街地から君津のMARISAへは、都市部のサロンへ行くよりもかえって近い場合もあります。
            </p>
            <p>
              夜0時まで営業しているため、袖ケ浦・木更津エリアでお仕事をされている方が仕事帰りにお立ち寄りいただくことも可能です。無料駐車場を完備していますので、お車でお越しの方も安心してご利用ください。カーナビには「千葉県君津市杢師3-20-10」とご入力ください。
            </p>
          </div>

          {/* Route summary */}
          <div className="mt-10 bg-sand-100 border border-sand-200 p-6 space-y-3 text-sm">
            <p className="font-medium text-stone-800 tracking-wide mb-4">袖ケ浦からのルート目安</p>
            <div className="flex gap-4 text-stone-700">
              <span className="text-brown-400 shrink-0">●</span>
              <span>袖ケ浦IC → 館山自動車道南下 → 君津IC → MARISA（約20〜25分）</span>
            </div>
            <div className="flex gap-4 text-stone-700">
              <span className="text-brown-400 shrink-0">●</span>
              <span>袖ケ浦市街地 → 国道16号・410号 → 君津市杢師 → MARISA（約20〜25分）</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sodegaura residents choose MARISA */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Why Choose MARISA" ja="袖ケ浦・木更津方面の方に選ばれる理由" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              袖ケ浦・木更津エリアには多くのリラクゼーションサロンがありますが、MARISA君津店を選ぶお客様からは「ゆったりとした空間で丁寧な施術を受けられる」という声を多くいただいています。
            </p>
            <p>
              君津インターから約10分というアクセスの良さは、袖ケ浦・木更津方面から高速道路をご利用のお客様にとって大きなメリットです。お仕事帰りや買い物の帰りなど、ちょっとしたついでにお立ち寄りいただけます。
            </p>
            <p>
              もみほぐし45分3,500円〜という価格設定で、肩こりや腰痛、全身疲労など幅広いお悩みに対応しています。ヘッドリラックスや足つぼのメニューも充実しており、体の状態に合わせてお選びいただけます。
            </p>
            <p>
              年中無休・夜0時まで（最終受付23:00）の営業で、定期的に通いやすい環境を整えています。ホットペッパービューティーからいつでもオンライン予約ができますので、袖ケ浦・木更津方面からお越しの際は事前にご予約いただくとスムーズです。
            </p>
            <p>
              鍼灸・美容鍼のメニューもご用意しており、もみほぐしでは届きにくい体の深部からのケアにも対応しています。鍼灸のご予約はBMERITよりお申し込みください。
            </p>
          </div>
        </div>
      </section>

      {/* Menu Cards */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Menu" ja="対応メニュー" lead="袖ケ浦方面からお越しの方にもご利用いただけるメニューをご紹介します" />
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
              { label: '袖ケ浦から', value: '車で約20〜25分（館山自動車道・君津IC経由）' },
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
              { label: '君津IC近くのマッサージ', href: '/area/kimitsu-ic' },
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
            夜0時まで営業・当日予約OK・無料駐車場完備。袖ケ浦・木更津方面からのご来店もお気軽にどうぞ。
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
