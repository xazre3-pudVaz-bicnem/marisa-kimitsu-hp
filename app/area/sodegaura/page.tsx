import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, SHOP_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '袖ケ浦市からもみほぐし・マッサージをお探しなら｜MARISA 君津店',
  description: '袖ケ浦市から車で約25分。館山自動車道・君津ICから10分のもみほぐしサロンMARISA君津店。夜0時まで営業・無料駐車場・当日予約OK。',
  keywords: ['袖ケ浦 マッサージ', '袖ケ浦 もみほぐし', '袖ケ浦市 リラクゼーション', '袖ケ浦 肩こり', '袖ケ浦 整体'],
  openGraph: {
    title: '袖ケ浦市からもみほぐし・マッサージをお探しなら｜MARISA 君津店',
    description: '袖ケ浦市から車で約25分。君津ICから10分のもみほぐしサロン。夜0時まで営業・無料駐車場完備。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/area/sodegaura' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '袖ケ浦市からMARISA君津店までどのくらいかかりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '袖ケ浦市街地からは館山自動車道または国道127号線を利用して、車で約25分ほどです。館山自動車道をご利用の場合は君津インターで降りて約10分でお到着いただけます。道路状況により変動する場合があります。',
      },
    },
    {
      '@type': 'Question',
      name: '駐車場はありますか？料金はかかりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、店舗前に無料駐車場をご用意しています。袖ケ浦方面からお車でお越しの場合も駐車料金は一切かかりません。安心してお越しください。',
      },
    },
    {
      '@type': 'Question',
      name: '予約なしで行けますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'できる限りご対応しますが、ご予約いただいた方を優先してご案内しています。遠方からお越しの袖ケ浦・木更津方面のお客様は、事前にホットペッパービューティーからご予約いただくとスムーズです。当日予約も受け付けています。',
      },
    },
  ],
}

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
              袖ケ浦市・木更津方面からお車で約25分。館山自動車道をご利用なら君津インターから約10分でお越しいただけます。MARISA君津店は夜0時まで営業・無料駐車場完備で、遠方からのお客様も安心してご利用いただけます。
            </p>
          </div>
        </div>
      </div>

      {/* Access from Sodegaura */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Access from Sodegaura" ja="袖ケ浦市からのアクセス" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              袖ケ浦市からMARISA君津店へは、館山自動車道（館山道）をご利用いただくのが最も便利です。袖ケ浦インターチェンジまたは木更津南インターチェンジから乗車し、君津インターチェンジで下車してください。インターを出てから店舗まで約10分ほどで到着します。
            </p>
            <p>
              一般道をご利用の場合は、国道127号線または県道を経由して君津市方面へお越しください。袖ケ浦市街地からは約25分を目安にお越しいただけます。木更津方面からお越しの方も同様のルートでアクセス可能です。
            </p>
            <p>
              袖ケ浦市は千葉県の中でも交通の便が良いエリアで、君津との往来も比較的スムーズです。袖ケ浦海浜公園や袖ケ浦市街地から君津のMARISAへは、都市部のサロンへ行くよりもかえって近い場合もあります。
            </p>
            <p>
              夜0時まで営業しているため、袖ケ浦・木更津エリアでお仕事をされている方が仕事帰りにお立ち寄りいただくことも可能です。無料駐車場を完備していますので、お車でお越しの方も安心してご利用ください。
            </p>
          </div>
        </div>
      </section>

      {/* Why Sodegaura / Kisarazu residents choose MARISA */}
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
              { label: '袖ケ浦から', value: '車で約25分（館山自動車道・君津IC経由）' },
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
