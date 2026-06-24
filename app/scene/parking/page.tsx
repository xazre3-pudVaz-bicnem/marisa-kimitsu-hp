import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, SHOP_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '駐車場あり・車で行けるマッサージ・もみほぐし｜MARISA 君津店',
  description:
    '君津市で駐車場付きのマッサージ・もみほぐしをお探しなら。MARISA 君津店は無料駐車場完備。君津駅から車で5分・君津ICから10分。車での来店も安心。',
  keywords: [
    '君津 駐車場あり マッサージ',
    '君津 車 もみほぐし',
    '君津 駐車場 マッサージ',
    '君津 車で行ける マッサージ',
    '君津IC マッサージ',
  ],
  openGraph: {
    title: '駐車場あり・車で行けるマッサージ・もみほぐし｜MARISA 君津店',
    description: '無料駐車場完備。君津駅から車で5分・君津ICから10分。車での来店も安心。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/scene/parking' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '駐車場は何台止められますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '店舗前にお客様専用の無料駐車スペースをご用意しています。詳しい台数についてはお気軽にお問い合わせください。万が一満車の場合は近隣をご案内することがあります。',
      },
    },
    {
      '@type': 'Question',
      name: '駐車場の利用料はかかりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '無料でご利用いただけます。コインパーキングへの支払いや駐車料金の心配は一切ありません。施術前後にゆっくりと準備・帰宅いただける環境です。',
      },
    },
    {
      '@type': 'Question',
      name: '夜間でも駐車場は使えますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、夜0時（24:00）まで駐車場をご利用いただけます。最終受付は23:00ですので、夜遅い時間帯のご来店でも安心してお車でお越しください。',
      },
    },
    {
      '@type': 'Question',
      name: '店舗の場所が分かりにくい場合はどうすればいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'カーナビに「千葉県君津市杢師3-20-10」とご入力ください。Googleマップでも「もみほぐし MARISA 君津」で検索いただけます。それでもご不明な場合はお電話でお問い合わせください。',
      },
    },
  ],
}

const routes = [
  {
    en: 'From Station',
    from: '君津駅から',
    time: '車で約5分',
    note: '君津駅南口を出て国道方面へ。杢師3丁目が目印。カーナビに住所を入力するとスムーズ。',
  },
  {
    en: 'From Highway',
    from: '君津IC（館山自動車道）から',
    time: '車で約10分',
    note: '館山自動車道「君津IC」を降りて君津市街方面へ。夜間でも迷いにくいルート。',
  },
  {
    en: 'From Kisarazu',
    from: '木更津方面から',
    time: '車で約20分',
    note: '国道127号線を南下、または館山自動車道経由。木更津方面からのご来店も多数。',
  },
  {
    en: 'From Futtsu',
    from: '富津方面から',
    time: '車で約15分',
    note: '国道127号線を北上し、君津市街方面へ。富津市・大貫方面からもアクセス可能。',
  },
  {
    en: 'From Sodegaura',
    from: '袖ケ浦方面から',
    time: '車で約20分',
    note: '館山自動車道をご利用いただくとスムーズ。袖ケ浦ICから君津ICへ。',
  },
]

export default function SceneParkingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ===== Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb
            items={[
              { label: '地域・シーン別', href: '/area/kimitsu' },
              { label: '車で通いたい方' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Free Parking</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              無料駐車場完備。<br className="hidden sm:block" />
              お車でのご来店も安心です。
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              MARISAは店舗前に無料駐車場を完備しています。君津市は車社会。コインパーキングを探す手間もなく、施術後そのままお帰りいただけます。君津駅から車で約5分・君津ICから約10分。木更津・富津・袖ケ浦など広域からのご来店も歓迎しています。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Highlights ===== */}
      <section className="py-10 bg-cream-50 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { en: 'Free', ja: '駐車場無料' },
              { en: '5 min', ja: '君津駅から車5分' },
              { en: '10 min', ja: '君津ICから車10分' },
              { en: '24:00 Close', ja: '夜0時まで営業' },
            ].map((item) => (
              <div key={item.en} className="text-center py-4">
                <p className="font-en text-xs tracking-widest text-brown-400 mb-1">{item.en}</p>
                <p className="text-sm font-medium text-stone-800 tracking-wide">{item.ja}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Parking Info ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Parking Info" ja="駐車場・アクセスのご案内" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAは千葉県君津市杢師3-20-10に位置するリラクゼーションサロンです。君津市はお車での移動が中心の地域であることを考慮し、店舗前に無料駐車場を完備しています。ご来店前に駐車場を確保するためのコインパーキング探しや駐車料金の心配は一切不要です。
            </p>
            <p>
              施術の前後にゆっくりと準備・帰宅できる環境を整えています。施術直後は体がほぐれてリラックスした状態になりますので、お帰りの際も焦らずゆっくりとお過ごしください。水分補給してからお帰りいただくことをおすすめしています。
            </p>
            <div className="border border-sand-200 p-6">
              <dl className="space-y-2 text-xs">
                <div className="flex gap-4">
                  <dt className="text-greige-400 w-24 shrink-0">駐車場</dt>
                  <dd>無料（店舗前）</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-greige-400 w-24 shrink-0">住所</dt>
                  <dd>{SHOP_INFO.address}</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-greige-400 w-24 shrink-0">営業時間</dt>
                  <dd>10:00〜24:00（最終受付23:00）</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-greige-400 w-24 shrink-0">定休日</dt>
                  <dd>年中無休</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Photo ===== */}
      <section className="py-4 bg-cream-50">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[4/3] overflow-hidden">
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
          <p className="mt-2 text-xs text-greige-400">▲ 店舗外観・駐車場のようす</p>
        </div>
      </section>

      {/* ===== Why Car is Convenient ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Convenience" ja="車で来る方に便利な理由" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <div className="border border-sand-200 bg-cream-50 p-6">
              <h3 className="font-medium text-stone-800 mb-3 tracking-wide">広域から通いやすい立地</h3>
              <p>
                君津市杢師という立地は、君津市内だけでなく木更津・富津・袖ケ浦・市原などの近隣エリアからも車でアクセスしやすい位置にあります。館山自動車道の君津ICからも約10分と、高速道路を使った来店もスムーズです。
              </p>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <h3 className="font-medium text-stone-800 mb-3 tracking-wide">施術後もそのまま帰れる</h3>
              <p>
                施術後はリラックスした状態で車に乗り込み、そのままお帰りいただけます。コインパーキングの精算を気にしたり、時間を気にしながら急いで帰る必要がありません。ゆっくりとした気持ちで帰宅できます。
              </p>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <h3 className="font-medium text-stone-800 mb-3 tracking-wide">夜遅い時間帯でも安心</h3>
              <p>
                夜0時まで無料駐車場をご利用いただけます。夜遅い時間帯でも、店舗前の駐車場に安心して停めていただけます。周辺はコンビニや飲食店もある安全な環境です。
              </p>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <h3 className="font-medium text-stone-800 mb-3 tracking-wide">君津・木更津エリアの車社会に対応</h3>
              <p>
                君津市・木更津市・富津市・袖ケ浦市は、電車よりも車での移動が主体の地域です。MARISAはそうした地域の生活スタイルに合わせ、「車でいつでも来やすいサロン」を目指して環境を整えています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Access Routes ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Routes" ja="各方面からのアクセスルート" />
          <div className="mt-8 space-y-5">
            {routes.map((r) => (
              <div key={r.en} className="border border-sand-200 p-6">
                <p className="font-en text-[10px] tracking-widest uppercase text-brown-400 mb-1">{r.en}</p>
                <div className="flex items-baseline gap-4 mb-2">
                  <h3 className="text-sm font-medium text-stone-800 tracking-wide">{r.from}</h3>
                  <span className="font-en text-brown-400 text-sm">{r.time}</span>
                </div>
                <p className="text-sm text-stone-700 leading-loose">{r.note}</p>
              </div>
            ))}
          </div>

          {/* Access table */}
          <div className="mt-8 border border-sand-200 p-6">
            <h3 className="text-xs font-medium text-stone-800 mb-4 tracking-wide">各エリアからの所要時間（目安）</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-sand-200">
                    <th className="text-left py-2 pr-4 text-greige-400 font-normal tracking-wide">出発地</th>
                    <th className="text-left py-2 pr-4 text-greige-400 font-normal tracking-wide">所要時間</th>
                    <th className="text-left py-2 text-greige-400 font-normal tracking-wide">主なルート</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand-200">
                  {[
                    ['君津駅', '約5分', '国道方面へ直進'],
                    ['君津IC', '約10分', '館山自動車道下車後'],
                    ['木更津駅', '約20分', '館山自動車道 or 国道127号'],
                    ['富津市街', '約15分', '国道127号線北上'],
                    ['袖ケ浦駅', '約20分', '館山自動車道経由'],
                    ['市原IC', '約30分', '館山自動車道経由'],
                  ].map(([from, time, route]) => (
                    <tr key={from} className="text-stone-700">
                      <td className="py-2 pr-4">{from}</td>
                      <td className="py-2 pr-4">{time}</td>
                      <td className="py-2">{route}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/access"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
            >
              詳しいアクセスを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="FAQ" ja="駐車場・アクセスに関するよくある質問" />
          <div className="mt-8 space-y-4">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="border border-sand-200 bg-cream-50 p-6">
                <p className="text-sm font-medium text-stone-800 mb-3 leading-snug tracking-wide">
                  <span className="font-en text-brown-400 mr-2">Q.</span>
                  {item.name}
                </p>
                <p className="text-sm text-stone-700 leading-loose pl-5">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Related ===== */}
      <section className="py-12 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: 'アクセス・地図', href: '/access' },
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
              { label: '木更津からお越しの方', href: '/area/kisarazu' },
              { label: '予約はこちら', href: '/reservation' },
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

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">お車でそのままお越しください</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            無料駐車場完備・夜0時まで営業・当日予約OK。<br />
            千葉県君津市杢師3-20-10。<br />
            鍼灸・美容鍼は公式WEB予約（B-merit）からのみご予約いただけます。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton href={BMERIT_URL} label="公式WEB予約（鍼灸対応）" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
