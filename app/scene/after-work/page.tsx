import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '仕事帰りに通えるもみほぐし｜夜0時まで営業｜MARISA 君津店',
  description:
    '君津市の仕事帰りにそのまま立ち寄れるもみほぐし・マッサージ。夜0時まで営業、最終受付23時。当日予約OK。スーツ・制服そのまま来店可。無料駐車場完備。',
  keywords: ['君津 夜遅く マッサージ', '君津 仕事帰り もみほぐし', '君津 夜 マッサージ', '君津 遅い時間 マッサージ'],
  openGraph: {
    title: '仕事帰りに通えるもみほぐし｜夜0時まで営業｜MARISA 君津店',
    description: '夜0時まで営業、最終受付23時。仕事帰りにそのまま立ち寄れます。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/scene/after-work' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '何時まで予約を受け付けていますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '最終受付は23:00です。営業は24:00（0時）まで。仕事帰りの22〜23時台でもご予約・ご来店いただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '仕事帰りにスーツのままでも大丈夫ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、問題ありません。施術前に当店でご用意した施術着にお着替えいただきますので、スーツ・制服・普段着そのままでお越しください。',
      },
    },
    {
      '@type': 'Question',
      name: '仕事帰りに当日予約で来店できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、当日予約に対応しています。ホットペッパービューティーから24時間いつでも空き状況を確認してご予約いただけます。「今日の帰りに寄りたい」という場合もお気軽にご予約ください。',
      },
    },
    {
      '@type': 'Question',
      name: '仕事帰りにおすすめのコースはありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'デスクワーク中心の方には、首・肩・背中・腰をまとめてケアできる「もみほぐし60分」がおすすめです。眼精疲労や頭の重さが気になる方には「ヘッドセット60分」（もみほぐし＋ヘッドケア）も人気です。',
      },
    },
  ],
}

const courses = [
  {
    name: 'もみほぐし 45分',
    price: '¥3,500〜',
    desc: '仕事帰りでも短時間でリフレッシュ。肩・首・背中を中心にケア。時間が限られている方に。',
    href: '/menu/body-care',
  },
  {
    name: 'もみほぐし 60分',
    price: '¥4,500〜',
    desc: '仕事帰りの定番。首・肩・背中・腰・脚まで全身をバランスよくほぐします。最も人気のコース。',
    href: '/menu/body-care',
    badge: '人気',
  },
  {
    name: 'ヘッドセット 60分',
    price: '¥5,000〜',
    desc: 'もみほぐし＋ヘッドケア。PC・スマホ疲れによる眼精疲労・頭の重さと、肩・首のコリをまとめてケア。',
    href: '/menu/set',
    badge: 'おすすめ',
  },
  {
    name: 'もみほぐし 90分',
    price: '¥6,500〜',
    desc: '仕事の疲れをじっくりリセット。週の終わりや特に疲れがたまった日に。全身をゆっくりほぐします。',
    href: '/menu/body-care',
  },
]

export default function SceneAfterWorkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ===== Page Header ===== */}
      <div className="bg-stone-800 text-cream-50 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: '地域・シーン別', href: '/area/kimitsu' }, { label: '仕事帰りに通いたい方' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-sand-300 mb-3">After Work</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-cream-50 leading-snug">
              仕事帰りにそのまま<br className="hidden sm:block" />
              立ち寄れます。
            </h1>
            <p className="mt-4 text-sand-300 text-sm leading-loose max-w-2xl">
              夜0時まで営業・最終受付23時。スーツのままでお越しください。
              君津市のリラクゼーションサロン MARISAは、仕事帰りの方が一番ご利用しやすい時間帯まで対応しています。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Highlight ===== */}
      <section className="py-10 bg-cream-50 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { en: '10:00 – 24:00', ja: '夜0時まで営業' },
              { en: 'Last 23:00', ja: '最終受付23時' },
              { en: 'Same Day OK', ja: '当日予約対応' },
              { en: 'Free Parking', ja: '無料駐車場完備' },
            ].map((item) => (
              <div key={item.en} className="text-center py-4">
                <p className="font-en text-xs tracking-widest text-brown-400 mb-1">{item.en}</p>
                <p className="text-sm font-medium text-stone-800 tracking-wide">{item.ja}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Body ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="For You" ja="仕事帰りに通いやすい5つの理由" />
          <div className="mt-8 space-y-6 text-sm text-stone-700 leading-loose">
            <div className="border-l-2 border-brown-300 pl-5">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">1. 夜0時まで営業・最終受付23時</h3>
              <p>帰りが遅い日でも、0時前にご来店いただければ施術を受けていただけます。「今日は残業だった」「夕食後にゆっくり来た」という方も多くご利用いただいています。週末の夜にリフレッシュする目的で来られる方も少なくありません。</p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">2. スーツ・制服のままでOK</h3>
              <p>「着替えを用意していない」という心配は不要です。施術前に当店でご用意した施術着にお着替えいただくので、どんな格好でも問題ありません。スーツや制服・作業着のままでお越しください。仕事帰りにそのまま立ち寄っていただくのが一番のご利用シーンです。</p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">3. 当日予約で空き確認→即予約</h3>
              <p>「今日帰りに行きたい」と思ったその場でホットペッパービューティーから空き確認・予約が完了します。24時間対応なので、仕事中の昼休みに当日夜の予約を入れることも可能です。突然の疲れにも柔軟に対応しています。</p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">4. 無料駐車場完備・車でそのまま</h3>
              <p>君津・木更津方面の方はお車でのご来店が多いです。店舗前に無料駐車場を完備しているので、駐車場を探したり料金を気にする必要がありません。施術後はそのままお帰りいただけます。</p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">5. 短時間コースも充実</h3>
              <p>「今日は時間がないけど少しだけほぐしてほしい」という方には45分コースがあります。45分でも、首・肩・背中を中心に施術を行えるので、仕事帰りに短時間でリフレッシュしたい方にご好評いただいています。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Courses ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Courses" ja="仕事帰りにおすすめのコース" centered />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {courses.map((c) => (
              <Link
                key={c.name}
                href={c.href}
                className="group relative border border-sand-200 bg-cream-50 p-7 hover:border-brown-300 transition-colors"
              >
                {c.badge && (
                  <span className="absolute top-5 right-5 text-[10px] tracking-widest bg-brown-400 text-cream-50 px-2.5 py-1">
                    {c.badge}
                  </span>
                )}
                <h3 className="text-sm font-medium text-stone-800 mb-1 tracking-wide group-hover:text-brown-500">{c.name}</h3>
                <p className="font-en text-lg text-brown-400 mb-3 font-light">{c.price}</p>
                <p className="text-xs text-stone-700 leading-relaxed">{c.desc}</p>
                <p className="mt-4 text-xs tracking-widest text-brown-400">詳しく見る →</p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/menu" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
              すべてのメニュー・料金を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Scene ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Typical Scene" ja="よくあるご利用シーン" />
          <div className="mt-8 space-y-4 text-sm text-stone-700 leading-loose">
            <div className="border border-sand-200 p-6">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">デスクワーク帰り・肩と首がつらい</h3>
              <p>一日中パソコン作業をして、肩・首・背中がガチガチになった状態で帰宅する前にMARISAへ。施術後は首の重さが軽くなり、家に帰ってからもゆっくり休めると好評です。</p>
            </div>
            <div className="border border-sand-200 p-6">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">長距離運転・腰のだるさ</h3>
              <p>君津から各地への仕事の移動・配達・外回りで腰が重くなった方に。仕事帰りにもみほぐしで腰まわりをしっかりほぐして帰る、という使い方をされているお客様もいます。</p>
            </div>
            <div className="border border-sand-200 p-6">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">眼精疲労・頭が重い</h3>
              <p>PC作業やスマートフォンの見過ぎで目の奥が重い、頭がぼーっとする、という方にはヘッドセットコースがおすすめです。もみほぐしで肩・首をほぐした後、ヘッドケアで頭まわりをスッキリさせます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="FAQ" ja="仕事帰りの利用でよくある質問" />
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
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/faq" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
              よくある質問をすべて見る →
            </Link>
            <Link href="/first" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
              初めての方へ →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">今日の帰りに、ぜひ。</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業・最終受付23時。<br />
            当日予約もホットペッパービューティーからすぐご予約いただけます。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="今日の予約をする" variant="light" size="lg" />
            <ReserveButton href="/menu" label="コースを選ぶ" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
