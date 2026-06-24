import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, SITE_URL, SHOP_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '鴨川方面から君津のマッサージ・もみほぐし｜もみほぐし・MARISA',
  description:
    '鴨川方面でマッサージをお探しの方へ。もみほぐし・MARISAは君津市杢師にあるリラクゼーションサロンです。無料駐車場あり、夜0時まで営業。もみほぐし、ヘッドケア、足つぼ、鍼灸、美容鍼に対応。',
  keywords: [
    '鴨川 マッサージ',
    '鴨川 もみほぐし',
    '鴨川 リラクゼーション',
    '鴨川 方面 マッサージ',
    '君津 マッサージ 鴨川',
    '内房 マッサージ',
  ],
  openGraph: {
    title: '鴨川方面から君津のマッサージ・もみほぐし｜もみほぐし・MARISA',
    description:
      '鴨川方面でマッサージをお探しの方へ。もみほぐし・MARISAは君津市杢師にあるリラクゼーションサロンです。無料駐車場あり、夜0時まで営業。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/area/kamogawa' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '鴨川方面から車でどのくらいかかりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '鴨川市内からは国道410号線を北西方向へ進み、途中から国道127号線（内房なぎさライン）を経由するルートが一般的です。所要時間は交通状況によりますが、目安として40〜60分程度をお見込みください。高速道路をご利用の場合は、君津インターチェンジから店舗まで約10分です。',
      },
    },
    {
      '@type': 'Question',
      name: '駐車場は無料ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、店舗前に無料駐車場をご用意しています。鴨川方面からお車でお越しの方も駐車料金は一切かかりません。施術後そのままお帰りいただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '当日予約はできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、当日予約に対応しています。ホットペッパービューティーから24時間いつでも空き状況をご確認の上ご予約いただけます。「すぐ予約」機能もございますので、お急ぎの際もご活用ください。鍼灸・美容鍼のご予約は公式サイト（B-merit）からお申し込みください。',
      },
    },
    {
      '@type': 'Question',
      name: '鍼灸メニューはホットペッパーから予約できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '鍼灸・美容鍼のご予約は公式予約サイト（B-merit）からのみ承っております。ホットペッパービューティーからは鍼灸・美容鍼の予約ができませんのでご注意ください。もみほぐし・ヘッドケア・足つぼ・セットコースはホットペッパービューティーからご予約いただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '内房エリアへの観光途中に利用できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、ぜひご活用ください。当店は君津インターチェンジから車で約10分の立地にあり、内房エリアの移動途中に立ち寄りやすい場所にあります。観光の疲れを施術でリフレッシュしてから帰路につくというご利用パターンも多くいただいています。夜0時まで営業していますので、日中の観光後にも余裕を持ってご来店いただけます。',
      },
    },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  '@id': `${SITE_URL}/#business`,
  name: SHOP_INFO.name,
  description:
    '鴨川方面からもアクセスできる君津市のリラクゼーションサロン。夜0時まで営業・当日予約OK・無料駐車場完備。もみほぐし・ヘッドケア・足つぼ・鍼灸・美容鍼に対応。',
  url: SITE_URL,
  telephone: SHOP_INFO.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '杢師3-20-10',
    addressLocality: '君津市',
    addressRegion: '千葉県',
    postalCode: SHOP_INFO.postalCode,
    addressCountry: 'JP',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SHOP_INFO.lat,
    longitude: SHOP_INFO.lng,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '24:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: '君津市' },
    { '@type': 'City', name: '鴨川市' },
    { '@type': 'City', name: '南房総市' },
    { '@type': 'City', name: '木更津市' },
  ],
  priceRange: '¥¥',
  hasMap: SHOP_INFO.googleMapUrl,
  image: '/og-image.jpg',
}

const menus = [
  {
    name: 'もみほぐし',
    time: '45分〜',
    price: '¥3,500〜',
    href: '/menu/body-care',
    desc: '肩こり・腰のつらさ・全身の疲れをしっかりほぐす定番コース',
    external: false,
  },
  {
    name: 'ヘッドケア',
    time: '30分〜',
    price: '¥2,500〜',
    href: '/menu/head',
    desc: '頭・首・肩のコリをまとめてケア。眼精疲労・頭の重さにも',
    external: false,
  },
  {
    name: '足つぼ',
    time: '45分〜',
    price: '¥3,500〜',
    href: '/menu/foot',
    desc: '足裏へのアプローチで全身のリラクゼーション感を深めます',
    external: false,
  },
  {
    name: 'セットコース',
    time: '60分〜',
    price: '¥5,000〜',
    href: '/menu/set',
    desc: 'もみほぐし＋ヘッドケアまたは足つぼを組み合わせた人気コース',
    external: false,
  },
  {
    name: '鍼灸',
    time: '60分〜',
    price: '要公式予約',
    href: BMERIT_URL,
    desc: '資格を持つ鍼灸師による本格的な施術。金曜10〜22時・土曜10〜14時を中心に対応',
    external: true,
  },
  {
    name: '美容鍼',
    time: '45分〜',
    price: '要公式予約',
    href: BMERIT_URL,
    desc: '顔まわりのケアをご希望の方へ。公式サイト（B-merit）からご予約ください',
    external: true,
  },
]

export default function AreaKamogawaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Page Header */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb
            items={[
              { label: '地域・シーン別', href: '/area' },
              { label: '鴨川方面からのアクセス' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">
              From Kamogawa Direction
            </p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              鴨川方面から、君津のリラクゼーションサロンへ
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              鴨川方面でマッサージ・もみほぐしをお探しの方へ。もみほぐし・MARISAは千葉県君津市杢師にあるリラクゼーションサロンです。国道410号・127号経由でお越しいただけます。無料駐車場完備・夜0時まで営業・当日予約対応。
            </p>
          </div>
        </div>
      </div>

      {/* Shop location clarity */}
      <section className="py-12 bg-cream-50 border-b border-sand-200">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <div className="bg-sand-100 border-l-2 border-brown-400 pl-5 py-4 text-sm text-stone-700 leading-loose">
            <p className="font-medium text-stone-800 mb-1">当店の所在地について</p>
            <p>
              当店は<strong>君津市杢師3-20-10</strong>にあるリラクゼーションサロンです。鴨川に店舗はございません。鴨川方面からのお客様を君津店でお迎えしています。
            </p>
          </div>
        </div>
      </section>

      {/* Why accessible from Kamogawa */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Access from Kamogawa" ja="鴨川方面からのアクセス" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              鴨川市内からMARISA君津店へは、国道410号線を北西方向に進み、鋸南町付近から国道127号線（内房なぎさライン）に乗り継いで君津方面へ向かうルートが一般的です。内房エリアの海沿いを走る国道127号線は景色も楽しめるドライブルートで、観光や帰り道の途中でも自然に立ち寄りやすい経路です。
            </p>
            <p>
              高速道路をご利用の場合は、君津インターチェンジ（館山自動車道）で下車後、店舗まで約10分でお到着いただけます。鴨川エリアから富津館山道路を経由して君津インターを目指すルートもご利用いただけます。所要時間は出発地点や交通状況によりますが、鴨川市街地からの目安は40〜60分程度です。
            </p>
            <p>
              カーナビには「千葉県君津市杢師3-20-10」とご入力ください。店舗前に無料駐車場を完備しておりますので、鴨川方面からお車でお越しの場合も駐車料金は一切かかりません。施術後そのまま安心してお帰りいただけます。
            </p>
          </div>

          {/* Route summary */}
          <div className="mt-10 bg-sand-100 border border-sand-200 p-6 space-y-3 text-sm">
            <p className="font-medium text-stone-800 tracking-wide mb-4">鴨川方面からのルート目安</p>
            <div className="flex gap-4 text-stone-700">
              <span className="text-brown-400 shrink-0">●</span>
              <span>鴨川市街地 → 国道410号線北西へ → 国道127号線へ → 君津市杢師 → MARISA（約40〜60分）</span>
            </div>
            <div className="flex gap-4 text-stone-700">
              <span className="text-brown-400 shrink-0">●</span>
              <span>高速利用の場合 → 富津館山道路 → 君津IC → MARISA（IC出口から約10分）</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose MARISA */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Why Choose MARISA" ja="鴨川方面から選ばれる理由" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              鴨川エリアはマリンスポーツや観光スポットとして知られていますが、本格的なリラクゼーションサロンの選択肢が限られているエリアでもあります。MARISA君津店には、鴨川方面から「帰り道に寄った」「ここしか選択肢がなかったけど来てよかった」というお声をいただくことがあります。わざわざ足を運んでいただく分、施術の質と接客で必ずご満足いただけるよう努めています。
            </p>
            <p>
              当店が鴨川方面からのお客様に選ばれているポイントをまとめると、以下のとおりです。
            </p>
          </div>

          {/* Feature list */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: '無料駐車場完備',
                body: '店舗前に無料駐車場あり。鴨川方面からお車でお越しの方も安心してご利用いただけます。',
              },
              {
                title: '夜0時まで営業・最終受付23時',
                body: '観光や仕事の後、夕方以降に鴨川方面からお越しいただいても十分間に合う営業時間です。',
              },
              {
                title: '当日予約・すぐ予約に対応',
                body: 'ホットペッパービューティーから24時間いつでも空き状況を確認してその日のうちにご予約いただけます。',
              },
              {
                title: '君津インターから車で約10分',
                body: '館山自動車道の君津インターチェンジから店舗まで約10分。内房エリアの移動途中にも立ち寄りやすい立地です。',
              },
              {
                title: '国道410号・127号経由でアクセス可',
                body: '高速を使わなくても一般道で来店できます。内房なぎさラインをドライブしながらのご来店も歓迎しています。',
              },
              {
                title: '鍼灸・美容鍼にも対応',
                body: '資格を持つ鍼灸師スタッフが在籍しており（金曜・土曜中心）、もみほぐしだけでなく本格的な鍼施術もご提供しています。',
              },
            ].map((item, i) => (
              <div key={i} className="bg-cream-50 border border-sand-200 p-5">
                <p className="font-medium text-stone-800 tracking-wide mb-2 text-sm">{item.title}</p>
                <p className="text-xs text-stone-700 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              もみほぐし45分¥3,500〜という手頃な料金設定も、遠方からお越しのお客様に喜ばれています。60分¥4,500〜、90分¥6,500〜と時間を選べますので、その日のスケジュールや体の状態に合わせてお選びください。
            </p>
            <p>
              鍼灸・美容鍼のご予約は公式サイト（B-merit）からのみ承っています。ホットペッパービューティーからは鍼灸のご予約ができませんのでご注意ください。鍼灸の対応時間は金曜日10:00〜22:00、土曜日10:00〜14:00を中心としており、その他の曜日・時間帯についてはご相談ください。
            </p>
          </div>
        </div>
      </section>

      {/* Menu Cards */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menu"
            ja="対応メニュー"
            lead="鴨川方面からお越しの方にもご利用いただけるメニューをご紹介します"
          />
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
                <p className="text-xs text-greige-400 mb-2">
                  {m.time} / {m.price}
                </p>
                <p className="text-xs text-stone-700 leading-relaxed">{m.desc}</p>
                {m.external && (
                  <p className="text-xs text-brown-400 mt-2">※公式サイト（B-merit）からご予約</p>
                )}
              </Link>
            ))}
          </div>
          <p className="mt-4 text-xs text-greige-400 leading-loose">
            ※鍼灸・美容鍼はホットペッパービューティーには掲載しておりません。公式予約サイト（B-merit）からのみご予約いただけます。
          </p>
        </div>
      </section>

      {/* Shop info */}
      <section className="py-12 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Shop Info" ja="店舗情報" />
          <dl className="mt-6 divide-y divide-sand-200 text-sm">
            {[
              { label: '店舗名', value: SHOP_INFO.name },
              { label: '住所', value: SHOP_INFO.address },
              { label: '営業時間', value: '10:00〜24:00（最終受付23:00）年中無休' },
              { label: '駐車場', value: '無料駐車場あり（店舗前）' },
              { label: '鴨川市から', value: '車で約40〜60分（国道410号・127号経由）' },
              { label: '君津ICから', value: '車で約10分' },
              { label: '鍼灸の対応時間', value: '金曜10:00〜22:00・土曜10:00〜14:00（その他は要相談）' },
            ].map((item) => (
              <div key={item.label} className="flex gap-6 py-3">
                <dt className="w-32 shrink-0 text-greige-400 tracking-wide">{item.label}</dt>
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
              { label: 'メニュー・料金', href: '/menu' },
              { label: 'アクセス・地図', href: '/access' },
              { label: 'ご予約について', href: '/reservation' },
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
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">ご予約はこちらから</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業・当日予約OK・無料駐車場完備。鴨川方面からのご来店もお気軽にどうぞ。
            <br />
            鍼灸・美容鍼のご予約は公式サイト（B-merit）からお願いいたします。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton
              href={BMERIT_URL}
              label="鍼灸・美容鍼の予約（公式）"
              variant="outline"
              size="lg"
            />
            <ReserveButton href="/access" label="アクセスを確認する" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
