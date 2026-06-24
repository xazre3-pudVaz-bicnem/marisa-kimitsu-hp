import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, LINE_URL, SHOP_INFO, PHONE, INSTAGRAM_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'アクセス・場所・駐車場｜もみほぐし・MARISA 君津店',
  description:
    '君津市のリラクゼーションサロン・MARISAのアクセス情報。千葉県君津市杢師3-20-10。君津駅から車で約5分・君津ICから約10分。無料駐車場完備。夜0時まで営業・年中無休。',
  keywords: [
    '君津 マッサージ アクセス',
    'MARISA 場所',
    '君津 もみほぐし 場所',
    '君津市 杢師 マッサージ',
  ],
  openGraph: {
    title: 'アクセス・場所・駐車場｜もみほぐし・MARISA 君津店',
    description:
      '千葉県君津市杢師3-20-10。君津駅から車で約5分。無料駐車場完備。夜0時まで営業・年中無休。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/access' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'もみほぐし・MARISA 君津店',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '杢師3-20-10',
    addressLocality: '君津市',
    addressRegion: '千葉県',
    addressCountry: 'JP',
  },
  telephone: PHONE,
  openingHours: 'Mo-Su 10:00-24:00',
  url: 'https://marisa-kimitsu.com',
  priceRange: '¥¥',
  description:
    '千葉県君津市にあるリラクゼーションサロン。もみほぐし・ヘッドケア・足つぼ・鍼灸など。夜0時まで営業・当日予約OK・無料駐車場完備。',
}

const accessRoutes = [
  {
    en: 'By Car from Station',
    from: '君津駅からお越しの方',
    time: '車で約5分',
    desc: '君津駅南口を出て、国道127号線方面に向かいます。杢師交差点を目印に進んでいただくと、店舗前の無料駐車場へお入りいただけます。駅からタクシーでも5分程度です。公共交通機関をご利用の場合は、君津駅からタクシーまたはバスをご利用ください。カーナビには「千葉県君津市杢師3-20-10」とご入力ください。',
  },
  {
    en: 'By Car from Highway',
    from: '君津ICからお越しの方',
    time: '車で約10分',
    desc: '館山自動車道「君津IC（君津インター）」を降りて、国道127号線を君津市街方面へ進みます。杢師3丁目付近を目指してお越しください。インターからのアクセスは約10分です。カーナビには「千葉県君津市杢師3-20-10」とご入力ください。',
  },
  {
    en: 'From Kisarazu',
    from: '木更津方面からお越しの方',
    time: '車で約20分',
    desc: '木更津方面からは国道127号線を南下し、君津市街方面へ向かいます。木更津駅から車で約20分程度です。木更津市・袖ケ浦市方面からも多くのお客様にご来店いただいています。館山自動車道をご利用の場合は、君津ICをご利用ください。',
  },
  {
    en: 'From Futtsu',
    from: '富津方面からお越しの方',
    time: '車で約15分',
    desc: '富津市方面からは国道127号線を北上し、君津市杢師方面へ向かいます。富津IC・佐貫IC方面からは約15〜20分程度です。無料駐車場を完備していますので、お車でのご来店も安心です。',
  },
  {
    en: 'From Sodegaura',
    from: '袖ケ浦方面からお越しの方',
    time: '車で約20分',
    desc: '袖ケ浦市方面からは国道127号線または館山自動車道をご利用いただくと便利です。袖ケ浦ICをご利用の場合は、君津方面へ向かい約20分程度です。袖ケ浦からも多くのお客様にお越しいただいています。',
  },
  {
    en: 'From Ichihara',
    from: '市原方面からお越しの方',
    time: '車で約30〜40分',
    desc: '市原市内からは車で30〜40分程度が目安です。館山自動車道の木更津JCT・君津ICをご利用いただくと便利です。高速道路をご利用の場合は君津ICで下りて約10分となります。市原方面からもご来店いただいているお客様がいらっしゃいます。',
  },
]

const accessFaqs = [
  {
    q: '駐車場はありますか？',
    a: 'はい、店舗前に無料駐車場を完備しています。お客様専用の駐車スペースをご用意していますので、駐車場の心配なくご来店ください。満車の場合はお近くのコインパーキングをご案内することもあります。',
  },
  {
    q: '徒歩でも来られますか？',
    a: '君津駅からは徒歩では少し距離がありますので、お車またはタクシーのご利用をおすすめしています。君津駅からタクシーで約5分です。バスについては最寄りのバス停からのルートをご確認ください。お車でのご来店が最も便利です。',
  },
  {
    q: 'カーナビで見つけられない場合はどうすればいいですか？',
    a: 'カーナビには「千葉県君津市杢師3-20-10」とご入力ください。見つからない場合は、お電話またはInstagramのDMにてご連絡いただければ、道案内をいたします。お気軽にご連絡ください。',
  },
  {
    q: '周辺のランドマークを教えてください',
    a: '君津市杢師3丁目エリアにあります。詳しいランドマークについては、Googleマップで「千葉県君津市杢師3-20-10」を検索いただくか、当ページ内の地図をご参照ください。不明な場合はお電話にてご連絡ください。',
  },
]

export default function AccessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ===== Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'アクセス' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Access</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800">
              アクセス・お車でのご来店も安心
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              千葉県君津市杢師3-20-10。無料駐車場完備。君津駅から車で約5分、君津インターから約10分とアクセスしやすい立地です。夜0時まで営業・年中無休で皆様のご来店をお待ちしています。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Basic Info ===== */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Shop Info" ja="店舗情報" />
          <dl className="mt-8 divide-y divide-sand-200 text-sm">
            {[
              { label: '店舗名', value: SHOP_INFO.name },
              { label: '住所', value: SHOP_INFO.address },
              { label: '郵便番号', value: SHOP_INFO.postalCode },
              { label: '電話番号', value: PHONE },
              { label: '営業時間', value: '10:00〜24:00（最終受付 23:00）' },
              { label: '定休日', value: '年中無休' },
              { label: '駐車場', value: '無料駐車場あり（店舗前）' },
            ].map((item) => (
              <div key={item.label} className="flex gap-6 py-3">
                <dt className="w-28 shrink-0 text-greige-400 tracking-wide">{item.label}</dt>
                <dd className="text-stone-700 leading-loose">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ===== Map ===== */}
      <section className="py-12 bg-cream-100">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Map"
            ja="Googleマップ"
            centered
          />
          <div className="mt-8 w-full overflow-hidden">
            <iframe
              src={SHOP_INFO.googleMapEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="もみほぐし・MARISA 君津店 地図"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href={SHOP_INFO.googleMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
            >
              Google マップで開く →
            </a>
          </div>
        </div>
      </section>

      {/* ===== Access Details ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="How to Get Here"
            ja="各方面からのアクセス"
            lead="お車でのご来店が便利です。周辺各地からのルートをご案内します。"
          />
          <div className="mt-10 space-y-5">
            {accessRoutes.map((route) => (
              <div key={route.en} className="border border-sand-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <p className="font-en text-[10px] tracking-widest uppercase text-brown-400">{route.en}</p>
                  <span className="text-xs bg-sand-100 text-brown-500 px-2 py-0.5">{route.time}</span>
                </div>
                <h2 className="text-sm font-medium text-stone-800 mb-3 tracking-wide">{route.from}</h2>
                <p className="text-sm text-stone-700 leading-loose">
                  {route.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Exterior Photos ===== */}
      <section className="py-8 bg-cream-50">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="relative aspect-[4/3] overflow-hidden lg:col-span-2">
              <Image
                src="/LINE_ALBUM_もみほぐしMARISA_260615_28.jpg"
                alt="君津 もみほぐし marisa 外観 駐車場"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/LINE_ALBUM_もみほぐしMARISA_260615_1.jpg"
                alt="君津 もみほぐし marisa 店舗外観"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          <p className="mt-3 text-xs text-greige-400 tracking-wide">
            ▲ 店舗外観・駐車場のようす。店舗前に無料駐車場を完備しています。
          </p>
        </div>
      </section>

      {/* ===== Parking Info ===== */}
      <section className="py-14 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Parking" ja="駐車場のご案内" />
          <div className="mt-6 text-sm text-stone-700 leading-loose space-y-4">
            <p>
              店舗前に無料駐車場を完備しています。お客様専用の駐車スペースをご用意していますので、お車でのご来店も安心です。
            </p>
            <p>
              「近くにコインパーキングを探すのが大変」「駐車場の料金が気になる」といった心配は不要です。無料でご利用いただける駐車場がありますので、ゆっくりとご来店ください。
            </p>
            <p>
              駐車場の混雑状況や場所についてご不明な点がありましたら、ご来店前にお電話またはInstagramのDMにてご確認いただけます。近隣にコインパーキングもございますので、満車の場合はご案内いたします。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Business Hours Detail ===== */}
      <section className="py-14 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Hours" ja="営業時間の詳細" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="border border-sand-200 bg-cream-50 p-6">
                <p className="text-xs tracking-widest text-brown-400 mb-2">通常営業</p>
                <p className="text-base font-light text-stone-800 tracking-wide mb-1">10:00〜24:00</p>
                <p className="text-xs text-stone-700">最終受付 23:00</p>
              </div>
              <div className="border border-sand-200 bg-cream-50 p-6">
                <p className="text-xs tracking-widest text-brown-400 mb-2">定休日</p>
                <p className="text-base font-light text-stone-800 tracking-wide mb-1">年中無休</p>
                <p className="text-xs text-stone-700">祝日・年末年始も通常営業</p>
              </div>
            </div>
            <div className="border-l-2 border-brown-300 pl-5 mt-4">
              <p className="font-medium text-stone-800 mb-1 tracking-wide">鍼灸メニューの対応時間</p>
              <p>鍼灸師（なお）が対応する鍼灸メニューは、基本的に金曜日10:00〜22:00・土曜日10:00〜14:00となります。その他の曜日は要相談です。公式WEB予約（B-merit）からご予約ください。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Contact"
            ja="お問い合わせ"
            lead="ご来店前のご質問・道案内など、お気軽にご連絡ください。"
          />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5 text-sm text-stone-700">
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-3">Tel</p>
              <p className="font-medium text-stone-800 mb-2">お電話</p>
              <p className="leading-loose">{PHONE}</p>
              <p className="text-xs text-greige-400 mt-2">営業時間内にご連絡ください</p>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-3">Instagram</p>
              <p className="font-medium text-stone-800 mb-2">Instagram DM</p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
              >
                @momihogushi_marisa →
              </a>
              <p className="text-xs text-greige-400 mt-2">DMでお気軽にご相談ください</p>
            </div>
            {LINE_URL && (
              <div className="border border-sand-200 bg-cream-50 p-6">
                <p className="text-xs tracking-widest text-brown-400 mb-3">LINE</p>
                <p className="font-medium text-stone-800 mb-2">LINEでご相談</p>
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
                >
                  LINEで開く →
                </a>
                <p className="text-xs text-greige-400 mt-2">予約・道案内もお気軽に</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== Access FAQ ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="FAQ" ja="アクセスに関するよくある質問" />
          <div className="mt-8 space-y-4">
            {accessFaqs.map((faq, i) => (
              <div key={i} className="border border-sand-200 bg-cream-50 p-6">
                <p className="text-sm font-medium text-stone-800 mb-3 tracking-wide">
                  <span className="font-en text-brown-400 mr-2">Q.</span>{faq.q}
                </p>
                <p className="text-sm text-stone-700 leading-loose pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Related Links ===== */}
      <section className="py-12 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related Pages</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { label: 'ご予約方法', href: '/reservation', sub: 'Reservation' },
              { label: '初めての方へ', href: '/first', sub: 'First Visit' },
              { label: '君津のご案内', href: '/area/kimitsu', sub: 'Area Guide' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="border border-sand-200 p-5 bg-cream-50 hover:border-brown-300 transition-colors"
              >
                <p className="font-en text-[10px] tracking-widest text-brown-400 mb-1">{l.sub}</p>
                <p className="text-sm font-medium text-stone-800 tracking-wide">{l.label} →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">ご予約はこちらから</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            無料駐車場完備。夜0時まで営業・当日予約OK。<br />
            公式WEB予約またはホットペッパービューティーからかんたんにご予約いただけます。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={BMERIT_URL} label="WEB予約（公式）" variant="light" size="lg" />
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約" variant="outline" size="lg" />
          </div>
          {LINE_URL && (
            <div className="mt-6">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest text-sand-300 border-b border-sand-400 pb-px hover:text-cream-50"
              >
                LINEでご相談 →
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
