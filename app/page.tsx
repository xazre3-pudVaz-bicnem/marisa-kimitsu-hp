import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, INSTAGRAM_URL, SHOP_INFO } from '@/lib/constants'
import { getAllPosts, formatDate, CATEGORY_NAMES } from '@/lib/blog'

export const metadata: Metadata = {
  title: '君津のもみほぐし・マッサージ｜MARISA 君津店',
  description:
    '千葉県君津市のもみほぐし・リラクゼーションサロン「MARISA 君津店」。肩こり・腰のつらさ・眼精疲労・足のだるさに対応。夜0時まで営業・当日予約OK・無料駐車場あり。君津駅から車5分。',
  alternates: { canonical: '/' },
}

const SITE_URL_VAL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://marisa-kimitsu.com'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  '@id': `${SITE_URL_VAL}/#business`,
  name: 'もみほぐし・MARISA 君津店',
  alternateName: 'MARISA 君津店',
  description:
    '千葉県君津市のもみほぐし・リラクゼーションサロン。肩こり・腰のつらさ・眼精疲労・足のだるさ・鍼灸・美容鍼に対応。夜0時まで営業・当日予約OK・無料駐車場あり。君津駅から車5分。',
  url: SITE_URL_VAL,
  telephone: SHOP_INFO.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '杢師3-20-10',
    addressLocality: '君津市',
    addressRegion: '千葉県',
    postalCode: SHOP_INFO.postalCode,
    addressCountry: 'JP',
  },
  geo: { '@type': 'GeoCoordinates', latitude: SHOP_INFO.lat, longitude: SHOP_INFO.lng },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '24:00',
    },
  ],
  priceRange: '¥¥',
  image: [`${SITE_URL_VAL}/og-image.jpg`],
  logo: { '@type': 'ImageObject', url: `${SITE_URL_VAL}/og-image.jpg` },
  sameAs: [SHOP_INFO.instagramUrl, SHOP_INFO.hpbUrl],
  hasMap: SHOP_INFO.googleMapUrl,
  currenciesAccepted: 'JPY',
  paymentAccepted: '現金',
  areaServed: [
    { '@type': 'City', name: '君津市' },
    { '@type': 'City', name: '木更津市' },
    { '@type': 'City', name: '富津市' },
    { '@type': 'City', name: '袖ケ浦市' },
  ],
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: '無料駐車場', value: true },
    { '@type': 'LocationFeatureSpecification', name: '当日予約', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'ペア・グループ利用', value: true },
    { '@type': 'LocationFeatureSpecification', name: '男性歓迎', value: true },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'MARISAのメニュー',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'もみほぐし', description: '全身の筋肉の緊張をほぐすリラクゼーション施術' }, price: '3900', priceCurrency: 'JPY' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ヘッドケア', description: '頭皮・側頭部・眼周りのケア' }, price: '2000', priceCurrency: 'JPY' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '足つぼ・リフレクソロジー', description: '足裏の反射区を刺激するリラクゼーション施術' }, price: '3800', priceCurrency: 'JPY' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '鍼灸メニュー', description: 'もみほぐしと鍼の組み合わせ施術（公式予約限定）' }, price: '4500', priceCurrency: 'JPY' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '美容鍼', description: 'お顔まわりのケアに特化した鍼施術（公式予約限定）' }, price: '3500', priceCurrency: 'JPY' },
    ],
  },
}

const features = [
  { icon: '10:00〜24:00', label: '夜0時まで営業', desc: '最終受付23:00。仕事帰りや夜でも安心してご来店いただけます。' },
  { icon: '当日OK', label: '当日予約対応', desc: 'お急ぎの場合もご相談ください。当日のご予約も可能です。' },
  { icon: '駐車場', label: '無料駐車場完備', desc: 'お車でのご来店も安心。無料駐車場をご用意しています。' },
  { icon: 'ペア', label: 'ペア・グループ対応', desc: 'ベッド3台完備。ご家族やお友達とのご来店も歓迎します。' },
  { icon: '男性可', label: '男性のお客様歓迎', desc: '性別問わずご来店いただけます。男性のお客様もお気軽にどうぞ。' },
  { icon: '丁寧', label: '丁寧なカウンセリング', desc: 'その日の体調やご希望をお聞きし、お一人おひとりに合わせた施術を行います。' },
]

const menus = [
  {
    name: 'もみほぐし 45分',
    price: '¥3,900',
    desc: '首・肩・背中・腰を中心に、疲れが溜まった部位を丁寧にほぐします。',
    href: '/menu/body-care',
    badge: '',
  },
  {
    name: 'もみほぐし 60分（70分計）',
    price: '¥4,500',
    desc: 'ほぐし60分＋10分サービス付き。全身の疲れをじっくりとケア。',
    href: '/menu/body-care',
    badge: '人気',
  },
  {
    name: 'もみほぐし 90分（100分計）',
    price: '¥6,400',
    desc: 'ほぐし90分＋10分サービス付き。深部の疲れまでしっかりケア。',
    href: '/menu/body-care',
    badge: '',
  },
  {
    name: 'ヘッドセット 60分',
    price: '¥5,400',
    desc: 'もみほぐし＋ヘッドケアのセット。頭・首・肩をまとめてケア。',
    href: '/menu/set',
    badge: 'おすすめ',
  },
  {
    name: 'ヘッドセット 90分',
    price: '¥6,700',
    desc: 'もみほぐし＋ヘッドの贅沢な組み合わせ。休日の自分へのご褒美に。',
    href: '/menu/set',
    badge: '',
  },
  {
    name: '足つぼセット 60分',
    price: '¥5,500',
    desc: 'もみほぐし＋足つぼ。立ち仕事や足のむくみが気になる方に。',
    href: '/menu/set',
    badge: '',
  },
]

const concerns = [
  { label: '肩・首がつらい', href: '/symptom/stiff-shoulder' },
  { label: '腰が重い・だるい', href: '/symptom/lower-back' },
  { label: '目が疲れている', href: '/symptom/eye-fatigue' },
  { label: '足がむくんでいる', href: '/symptom/leg-fatigue' },
  { label: '全身がだるい', href: '/symptom/fatigue' },
  { label: 'ゆっくり眠りたい', href: '/symptom/sleep-relax' },
  { label: '首・背中が張っている', href: '/symptom/neck' },
  { label: 'スッキリしたい', href: '/symptom/fatigue' },
]

const testimonials = [
  {
    name: '30代女性',
    text: '仕事帰りに寄れる時間帯が嬉しいです。毎回担当の方が体の状態をきちんと確認してくれて、次の日の体の軽さが全然違います。',
  },
  {
    name: '40代男性',
    text: '肩こりがひどくて来院しました。施術後に体がとても楽になり、以来月1回のペースで通っています。男性でも利用しやすいお店です。',
  },
  {
    name: '20代女性',
    text: 'ヘッドセットを受けました。頭の重さと首の張りが気になっていたのですが、施術後はスッキリして別人みたいに楽になりました。',
  },
  {
    name: '50代女性',
    text: '駐車場があるので車でも来やすく、夜遅くまで営業しているのがとても助かります。スタッフの方も親切で安心して通えます。',
  },
]

export default function TopPage() {
  const latestPosts = getAllPosts().slice(0, 3)
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ===== Hero ===== */}
      <section className="relative min-h-screen flex items-center bg-cream-50 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 w-full pt-32 pb-24 lg:pt-40 lg:pb-32">
          <div className="max-w-xl">
            <p className="font-en text-xs tracking-widest text-brown-400 uppercase mb-6">
              Relaxation Salon in Kimitsu
            </p>
            <h1 className="text-3xl lg:text-5xl font-light leading-relaxed tracking-wide text-stone-800 mb-8">
              君津で、<br />
              ほっとひと息つける<br />
              <span className="text-brown-400">場所</span>があります。
            </h1>
            <p className="text-stone-700 leading-loose mb-10 text-base">
              肩・首・腰・足…毎日の疲れを、丁寧な施術で整えます。<br className="hidden sm:block" />
              夜0時まで営業・当日予約OK・無料駐車場完備。<br className="hidden sm:block" />
              千葉県君津市杢師、君津駅から車で約5分。
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-2/5 lg:w-1/3 hidden lg:block overflow-hidden">
          <Image
            src="/LINE_ALBUM_もみほぐしMARISA_260615_5.jpg"
            alt="君津 もみほぐし marisa 施術風景"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-cream-50/10" />
        </div>
      </section>

      {/* ===== Features ===== */}
      <section className="py-24 lg:py-32 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Features" ja="MARISAの特徴" centered />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.label}
                className="border border-sand-200 p-8 hover:border-sand-300 transition-colors"
              >
                <p className="font-en text-lg font-light text-brown-400 tracking-wider mb-3">
                  {f.icon}
                </p>
                <h3 className="text-base font-medium text-stone-800 mb-3 tracking-wide">{f.label}</h3>
                <p className="text-sm text-stone-700 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Photo Strip ===== */}
      <section className="bg-stone-800 py-2">
        <div className="grid grid-cols-4 gap-0.5">
          <div className="relative aspect-video overflow-hidden">
            <Image src="/LINE_ALBUM_もみほぐしMARISA_260615_2.jpg" alt="君津 もみほぐし marisa 店内" fill className="object-cover" />
          </div>
          <div className="relative aspect-video overflow-hidden">
            <Image src="/LINE_ALBUM_もみほぐしMARISA_260615_21.jpg" alt="君津 マッサージ 施術イメージ" fill className="object-cover" />
          </div>
          <div className="relative aspect-video overflow-hidden">
            <Image src="/LINE_ALBUM_もみほぐしMARISA_260615_17.jpg" alt="君津 リラクゼーション サロン 店内" fill className="object-cover" />
          </div>
          <div className="relative aspect-video overflow-hidden">
            <Image src="/LINE_ALBUM_もみほぐしMARISA_260615_36.jpg" alt="君津 もみほぐし marisa 施術ベッド" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* ===== Concerns ===== */}
      <section className="py-24 lg:py-32 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Your Concerns"
            ja="こんなお悩みに"
            centered
            lead="MARISAでは、日常の疲れやコリをお持ちのお客様をお待ちしています。"
          />
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {concerns.map((c) => (
              <Link
                key={c.href + c.label}
                href={c.href}
                className="border border-sand-300 bg-cream-50 text-center py-5 px-3 text-sm text-stone-700 tracking-wide hover:border-brown-300 hover:text-brown-500 transition-colors"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Menu ===== */}
      <section className="py-24 lg:py-32 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menu"
            ja="人気のメニュー"
            lead="豊富なコースをご用意。お時間やお悩みに合わせてお選びください。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {menus.map((m) => (
              <Link
                key={m.name}
                href={m.href}
                className="group border border-sand-200 p-7 hover:border-brown-300 transition-colors relative"
              >
                {m.badge && (
                  <span className="absolute top-5 right-5 text-[10px] tracking-widest bg-brown-400 text-cream-50 px-2.5 py-1">
                    {m.badge}
                  </span>
                )}
                <h3 className="text-base font-medium text-stone-800 mb-1 tracking-wide">{m.name}</h3>
                <p className="font-en text-xl text-brown-400 mb-4 font-light">{m.price}</p>
                <p className="text-sm text-stone-700 leading-relaxed">{m.desc}</p>
                <p className="mt-5 text-xs tracking-widest text-brown-400 group-hover:text-brown-500">
                  詳しく見る →
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ReserveButton href="/menu" label="すべてのメニューを見る" variant="outline" size="md" />
          </div>
        </div>
      </section>

      {/* ===== First Visit ===== */}
      <section className="py-24 lg:py-32 bg-stone-800 text-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader en="First Visit" ja="はじめての方へ" light />
            <div className="mt-8 space-y-4 text-greige-300 text-sm leading-loose">
              <p>
                「マッサージって、何を着ていけばいいの？」「強さを遠慮なく伝えられる？」
                はじめてのサロンは、わからないことばかりで不安になるもの。
              </p>
              <p>
                MARISAでは、ご来店前のご不安を少しでも和らげていただけるよう、
                受付から施術、お会計までの流れを丁寧にご説明しています。
                当日予約・ペア利用・男性利用・服装についてなど、
                よくあるご質問もまとめていますので、ぜひご覧ください。
              </p>
            </div>
            <div className="mt-8">
              <ReserveButton href="/first" label="詳しく見る" variant="light" size="md" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/LINE_ALBUM_もみほぐしMARISA_260615_3.jpg"
                alt="君津 もみほぐし marisa 清潔な施術スペース"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-square overflow-hidden rounded-sm">
                <Image
                  src="/LINE_ALBUM_もみほぐしMARISA_260615_1.jpg"
                  alt="君津 もみほぐし marisa 外観"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-sm">
                <Image
                  src="/LINE_ALBUM_もみほぐしMARISA_260615_4.jpg"
                  alt="君津 リラクゼーション サロン 内装"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="py-24 lg:py-32 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Reviews" ja="お客様の声" centered />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-cream-50 p-8 border border-sand-200">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-brown-400 text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-stone-700 text-sm leading-loose mb-4">{t.text}</p>
                <p className="text-xs text-greige-400 tracking-wide">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Concept lead ===== */}
      <section className="py-24 lg:py-32 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <SectionHeader en="Concept" ja="MARISAのこだわり" centered />
          <p className="mt-8 text-stone-700 leading-loose text-sm">
            「また来たい」と思っていただけるお店でありたい。
            <br />
            MARISAは、施術の質はもちろん、スタッフの接客・店内の清潔感・通いやすい環境まで、
            細部にこだわっています。
            <br />
            <br />
            ただ体をほぐすだけでなく、毎日の生活をもう少し楽にする。
            そのためのサポートを、丁寧に提供し続けることが私たちの想いです。
          </p>
          <div className="mt-8">
            <ReserveButton href="/concept" label="こだわりを見る" variant="outline" />
          </div>
        </div>
      </section>

      {/* ===== Access ===== */}
      <section className="py-24 lg:py-32 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Access" ja="アクセス" centered />
          <div className="mt-10 grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4 text-sm text-stone-700 leading-loose">
              <div>
                <p className="text-xs tracking-widest text-greige-400 mb-1">住所</p>
                <p>{SHOP_INFO.address}</p>
              </div>
              <div>
                <p className="text-xs tracking-widest text-greige-400 mb-1">営業時間</p>
                <p>{SHOP_INFO.hours}</p>
              </div>
              <div>
                <p className="text-xs tracking-widest text-greige-400 mb-1">アクセス</p>
                <p>
                  君津駅より車で約5分
                  <br />
                  君津インターより車で約10分
                </p>
              </div>
              <div>
                <p className="text-xs tracking-widest text-greige-400 mb-1">駐車場</p>
                <p>無料駐車場あり</p>
              </div>
              <Link
                href="/access"
                className="inline-block text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
              >
                詳しいアクセスを見る →
              </Link>
            </div>
            <div className="aspect-video w-full">
              <iframe
                src={SHOP_INFO.googleMapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MARISA 君津店 地図"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Area & Scene ===== */}
      <section className="py-24 lg:py-32 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Scene & Area"
            ja="シーン・エリア別のご案内"
            lead="どんなシーンでMARISAを使いたいか、お探しの方に合わせてご案内します。"
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { label: '仕事帰りに', href: '/scene/after-work', sub: '夜0時まで営業' },
              { label: '当日予約で', href: '/scene/same-day', sub: '24時間予約OK' },
              { label: '車で通いたい', href: '/scene/parking', sub: '無料駐車場あり' },
              { label: 'ペアで', href: '/scene/pair', sub: 'ベッド3台完備' },
              { label: '君津エリア', href: '/area/kimitsu', sub: '地域情報ページ' },
              { label: '木更津方面から', href: '/area/kisarazu', sub: '車で約20分' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group border border-sand-200 bg-cream-50 p-5 text-center hover:border-brown-300 transition-colors"
              >
                <p className="text-sm font-medium text-stone-800 mb-1 tracking-wide group-hover:text-brown-500">{item.label}</p>
                <p className="text-[11px] text-greige-400 tracking-wide">{item.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Guide Section ===== */}
      <section className="py-24 lg:py-32 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Guide"
            ja="もみほぐしガイド"
            lead="初めての方も、リピーターの方も。もみほぐしに関する疑問をわかりやすく解説します。"
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { label: 'もみほぐしとは？', href: '/guide/what-is-momihogushi' },
              { label: 'コースの選び方', href: '/guide/course-selection' },
              { label: '通う頻度の目安', href: '/guide/frequency' },
              { label: '整体との違い', href: '/guide/vs-seitai' },
              { label: '期待できること', href: '/guide/benefits' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group border border-sand-200 bg-cream-100 p-5 text-center hover:border-brown-300 transition-colors"
              >
                <p className="text-sm font-medium text-stone-800 tracking-wide group-hover:text-brown-500">{item.label}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-right">
            <Link href="/guide" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
              ガイド一覧を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Blog latest ===== */}
      <section className="py-24 lg:py-32 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <SectionHeader en="Blog" ja="ブログ新着" />
            <Link
              href="/blog"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500 shrink-0"
            >
              すべての記事を見る →
            </Link>
          </div>
          {latestPosts.length === 0 ? (
            <div className="border border-sand-200 bg-cream-50 p-8 text-center text-greige-400 text-sm">
              記事は順次更新予定です。
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group border border-sand-200 bg-cream-50 hover:border-brown-300 transition-colors"
                >
                  <div className="bg-sand-200 aspect-video flex items-center justify-center">
                    <span className="font-en text-xs tracking-widest text-greige-400 uppercase">
                      {CATEGORY_NAMES[post.category] || 'Blog'}
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] text-greige-400 tracking-wide">
                      {formatDate(post.date)}
                    </span>
                    <p className="mt-2 text-sm font-medium text-stone-800 leading-snug tracking-wide group-hover:text-brown-500 transition-colors line-clamp-3">
                      {post.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 lg:py-32 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">ご予約はこちらから</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業中・当日予約OK。<br />
            WEB予約・ホットペッパー・Instagramからもご相談いただけます。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={BMERIT_URL} label="WEB予約（公式）" variant="light" size="lg" />
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
