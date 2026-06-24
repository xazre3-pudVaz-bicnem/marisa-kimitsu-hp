import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { BMERIT_URL, HPB_URL, LINE_URL, SHOP_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津駅周辺・近くのマッサージ｜MARISA 君津店',
  description: '君津駅近くでマッサージ・もみほぐしをお探しの方へ。MARISA 君津店は君津駅から車で約5分。夜0時まで・当日予約OK・無料駐車場完備。',
  keywords: ['君津駅 マッサージ', '君津駅 もみほぐし', '君津駅 近く リラクゼーション', '君津駅 肩こり ケア'],
  openGraph: {
    title: '君津駅周辺・近くのマッサージ｜MARISA 君津店',
    description: '君津駅近くでマッサージ・もみほぐしをお探しの方へ。MARISA 君津店は君津駅から車で約5分。夜0時まで・当日予約OK・無料駐車場完備。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/area/kimitsu-station' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '君津駅からどのくらいかかりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '君津駅南口からお車またはタクシーで約5分ほどです。南口・北口いずれからも同程度の時間でお越しいただけます。カーナビに「千葉県君津市杢師3-20-10」とご入力ください。',
      },
    },
    {
      '@type': 'Question',
      name: '電車で来ることはできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '君津駅はJR内房線の主要駅で、千葉・木更津・館山方面からの電車が停まります。電車でお越しの場合は君津駅からタクシーをご利用ください。駅前にタクシー乗り場があります。',
      },
    },
    {
      '@type': 'Question',
      name: '駅からタクシーはありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、君津駅前にタクシー乗り場があります。タクシーで約5分・料金目安は700〜900円程度です。帰りも店舗からタクシーをお呼びすることができますので、スタッフにお声がけください。',
      },
    },
    {
      '@type': 'Question',
      name: '駅周辺の駐車場はどうなっていますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MARISAには店舗前に無料駐車場をご用意しています。君津駅周辺からお車でお越しになる場合も、駐車料金は一切かかりません。お車とタクシーどちらでもご来店いただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '夜遅くまで営業していますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、夜0時まで営業（最終受付23:00）しています。電車通勤の方が仕事帰りにご来店いただきやすい時間設定です。年中無休ですので、平日・休日を問わずご利用いただけます。',
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

export default function AreaKimitsuStationPage() {
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
              { label: '君津駅周辺のマッサージ' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">
              Near Kimitsu Station
            </p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              君津駅から車で5分。駅近くのもみほぐしサロン
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              君津駅南口からお車またはタクシーで約5分。MARISA君津店は最終受付23:00と夜遅い電車でも間に合う営業時間で、駅ご利用の方が通いやすいもみほぐしサロンです。電車通勤の方の仕事帰りにも最適です。
            </p>
          </div>
        </div>
      </div>

      {/* Access from Kimitsu Station */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="From Kimitsu Station" ja="君津駅からのアクセス詳細" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              君津駅南口を出て、お車またはタクシーで約5分でMARISAにお到着いただけます。君津駅は内房線の主要駅であり、千葉方面や木更津・館山方面からの電車が停まります。駅周辺からのアクセスがスムーズな立地です。
            </p>
            <p>
              お車でお越しの方は、君津駅南口から杢師方面へ向かってください。店舗前に無料駐車場をご用意していますので、駐車の心配なくお越しいただけます。カーナビで「千葉県君津市杢師3-20-10」と入力いただくと迷わずお越しいただけます。
            </p>
            <p>
              電車でお越しの方は、君津駅からタクシーをご利用ください。駅前にタクシー乗り場がありますので、そちらからお乗りいただくと約5分で到着します。施術後の帰りも、店舗からタクシーをお呼びすることができますので、スタッフにお声がけください。
            </p>
            <p>
              君津駅は内房線で千葉駅から約1時間のアクセスで、木更津・袖ケ浦・市原方面からも電車でお越しいただけます。電車でのアクセスをご検討の方も、ぜひMARISAをご利用ください。
            </p>
          </div>

          {/* Route summary */}
          <div className="mt-10 bg-sand-100 border border-sand-200 p-6 space-y-3 text-sm">
            <p className="font-medium text-stone-800 tracking-wide mb-4">君津駅からのルート目安</p>
            <div className="flex gap-4 text-stone-700">
              <span className="text-brown-400 shrink-0">●</span>
              <span>君津駅南口 → タクシー約5分（700〜900円程度）→ MARISA</span>
            </div>
            <div className="flex gap-4 text-stone-700">
              <span className="text-brown-400 shrink-0">●</span>
              <span>君津駅南口 → お車で杢師方面へ → 約5分 → MARISA（無料駐車場あり）</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why station users choose MARISA */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Late Night Welcome" ja="電車通勤の方にこそ使いやすい理由" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAは夜0時まで営業しており、最終受付は23:00です。仕事帰りに電車で君津にお戻りになる方も、遅い時間のご予約が可能です。22:00頃に電車で到着し、23:00の最終受付でご来店いただくこともできます。
            </p>
            <p>
              「帰宅途中に肩こりをほぐしたい」「疲れた体をリセットしてから帰りたい」という方にも、MARISAは最適なサロンです。仕事帰りの習慣として、週に一度のメンテナンスとしてご活用いただけます。
            </p>
            <p>
              君津駅周辺にお住まいの方も、電車通勤でご帰宅の方も、駅から5分というアクセスの便利さをぜひご活用ください。もみほぐし45分3,500円〜というリーズナブルな価格設定で、定期的なケアが続けやすい環境を整えています。
            </p>
            <p>
              ホットペッパービューティーから24時間いつでもオンライン予約が可能です。電車の中でご予約いただき、到着後すぐにご来店いただけます。スタッフ一同、ご来店を心よりお待ちしております。
            </p>
            <p>
              鍼灸・美容鍼もご用意しています。もみほぐしとあわせてより深いケアをご希望の方は、BMERIT よりご予約ください。
            </p>
          </div>
        </div>
      </section>

      {/* Menu Cards */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Menu" ja="対応メニュー" lead="君津駅周辺からお越しの方にもご利用いただけるメニューをご紹介します" />
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
              { label: '君津駅から', value: '車・タクシーで約5分（南口・北口いずれも同程度）' },
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
            夜0時まで営業・当日予約OK・無料駐車場完備。君津駅からのご来店もお気軽にどうぞ。
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
