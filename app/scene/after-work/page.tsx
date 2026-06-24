import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '仕事帰りに立ち寄れるマッサージ・もみほぐし｜MARISA 君津店',
  description:
    '君津市で仕事帰りに通えるもみほぐし・マッサージをお探しなら。MARISA 君津店は夜0時まで営業（最終受付23:00）。スーツ・制服のままでOK。当日予約も受付中。',
  keywords: [
    '君津 夜遅く マッサージ',
    '君津 仕事帰り もみほぐし',
    '君津 夜 マッサージ',
    '君津 夜間 もみほぐし',
    '仕事帰り マッサージ 君津',
  ],
  openGraph: {
    title: '仕事帰りに立ち寄れるマッサージ・もみほぐし｜MARISA 君津店',
    description: '夜0時まで営業（最終受付23:00）。スーツのままでOK。当日予約も受付中。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/scene/after-work' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '仕事帰りに着替えなしで来店できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、問題ありません。施術前に当店でご用意した施術着にお着替えいただきますので、スーツ・制服・作業着・普段着そのままでお越しいただけます。着替えや持ち物を準備する必要はありません。',
      },
    },
    {
      '@type': 'Question',
      name: '何時まで予約を受け付けていますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '最終受付は23:00（23時）です。営業は24:00（0時）まで。23時前にご来店いただければ施術をお受けいただけます。夜21〜23時台の仕事帰りのご来店にも対応しています。',
      },
    },
    {
      '@type': 'Question',
      name: '当日の仕事帰りにも予約できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、当日予約に対応しています。ホットペッパービューティーまたは公式WEB予約（B-merit）から24時間いつでも空き状況をご確認いただき、その場でご予約いただけます。仕事中の昼休みに当日夜の予約を入れておくのが確実です。',
      },
    },
    {
      '@type': 'Question',
      name: '仕事帰りに向いているコースは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'デスクワーク中心の方には「ヘッドセット60分（¥5,400）」がおすすめです。もみほぐし＋ヘッドケアで、肩・首・眼精疲労をまとめてケアできます。時間がない方には「もみほぐし45分（¥3,900）」でも首・肩・背中を集中してほぐせます。足の疲れが強い方は「足つぼセット」もご好評いただいています。',
      },
    },
    {
      '@type': 'Question',
      name: '施術後すぐに運転して帰れますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '施術後はリラックスした状態になりますが、運転自体に支障はありません。ただし、施術直後はゆったりとした気持ちになる方も多いので、少し水分をとって落ち着いてからお帰りいただくことをおすすめします。',
      },
    },
  ],
}

const courses = [
  {
    name: 'もみほぐし 45分',
    price: '¥3,900',
    desc: '仕事帰りでも短時間でリフレッシュ。首・肩・背中を中心に施術。「時間はないが少しほぐしたい」方に。',
    href: '/menu/body-care',
  },
  {
    name: 'もみほぐし 60分',
    price: '¥4,500',
    desc: '仕事帰りの定番コース。首・肩・背中・腰・脚まで全身をバランスよくほぐします。最もご利用の多いコース。',
    href: '/menu/body-care',
    badge: '人気',
  },
  {
    name: 'ヘッドセット 60分',
    price: '¥5,400',
    desc: 'もみほぐし＋ヘッドケアの組み合わせ。PC・スマホ疲れによる眼精疲労・頭の重さと肩・首のコリをまとめてケア。',
    href: '/menu/set',
    badge: 'おすすめ',
  },
  {
    name: '足つぼセット 60分',
    price: '¥5,500',
    desc: 'もみほぐし＋足つぼの組み合わせ。立ち仕事・歩き疲れで足がパンパンになりやすい方に。',
    href: '/menu/foot',
  },
  {
    name: 'もみほぐし 90分',
    price: '¥6,400',
    desc: '週の終わりや特に疲れがたまった日に。全身をゆっくり丁寧にほぐして、日々の負担をリセット。',
    href: '/menu/body-care',
  },
  {
    name: 'もみほぐし 120分',
    price: '¥8,400',
    desc: '全身を時間をかけてしっかりケアしたい方に。忙しい日々の中で「自分へのご褒美」として利用する方も多い。',
    href: '/menu/body-care',
  },
]

const fatigueTypes = [
  {
    type: 'デスクワーク疲れ（肩・首・目）',
    menu: 'ヘッドセット 60分',
    href: '/menu/set',
    desc: '一日中PC作業をして肩・首・目がつらい方に。もみほぐし＋ヘッドケアで肩から頭まで一気にほぐします。',
  },
  {
    type: '全身のだるさ・重さ',
    menu: 'もみほぐし 60〜90分',
    href: '/menu/body-care',
    desc: '「全部疲れた」という日には全身をまんべんなくほぐす60分以上のコースが向いています。',
  },
  {
    type: '立ち仕事の足のつらさ',
    menu: '足つぼセット 60分',
    href: '/menu/foot',
    desc: 'ずっと立っていた日の足のだるさ・むくみ感に。もみほぐし＋足つぼで足まわりをしっかりケア。',
  },
  {
    type: '腰のだるさ・背中の張り',
    menu: 'もみほぐし 60〜90分',
    href: '/menu/body-care',
    desc: '運転・長時間の同じ姿勢による腰まわりのだるさに。腰・背中を中心にほぐしてほしい旨をお伝えください。',
  },
]

export default function SceneAfterWorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ===== Page Header ===== */}
      <div className="bg-stone-800 text-cream-50 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb
            items={[
              { label: '地域・シーン別', href: '/area/kimitsu' },
              { label: '仕事帰りに通いたい方' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-sand-300 mb-3">After Work</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-cream-50 leading-snug">
              仕事帰りにそのまま<br className="hidden sm:block" />
              立ち寄れます。
            </h1>
            <p className="mt-4 text-sand-300 text-sm leading-loose max-w-2xl">
              夜0時まで営業・最終受付23時。スーツや制服のままお越しください。
              君津市のリラクゼーションサロン MARISAは、仕事帰りの方が一番ご利用しやすい時間帯まで対応しています。当日予約OK・無料駐車場完備。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Highlights ===== */}
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

      {/* ===== Why After Work ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="For You" ja="仕事帰りのマッサージが向いている理由" />
          <div className="mt-8 space-y-6 text-sm text-stone-700 leading-loose">
            <p>
              「仕事帰りにマッサージに行きたいけれど、営業時間が合わない」「なかなかタイミングが取れない」——そんな方のために、MARISAは年中無休で夜0時まで営業（最終受付23:00）しています。仕事終わりに一番体を動かしやすい時間帯に合わせて、ケアできる環境を整えています。
            </p>
            <div className="border-l-2 border-brown-300 pl-5">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">1. 夜0時まで営業・最終受付23時</h3>
              <p>
                帰りが遅くなった日でも、0時前にご来店いただければ施術を受けていただけます。「今日は残業だった」「夕食後にゆっくり来た」という方も多くご利用いただいています。週末の夜にリフレッシュする目的で来られる方も少なくありません。22〜23時台のご予約も可能です。
              </p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">2. スーツ・制服のままでOK</h3>
              <p>
                「着替えを用意していない」という心配は不要です。施術前に当店でご用意した施術着にお着替えいただくので、どんな服装でも問題ありません。スーツ・制服・作業着のままでそのままお越しください。仕事帰りにそのまま立ち寄っていただくのが最も多いご利用パターンです。
              </p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">3. 当日予約で空き確認→即予約</h3>
              <p>
                「今日帰りに行きたい」と思ったその場でホットペッパービューティーまたは公式WEB予約から空き確認・予約が完了します。24時間対応なので、仕事中の昼休みに当日夜の予約を入れることも可能です。急な疲れにも柔軟に対応しています。
              </p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">4. 無料駐車場完備・車でそのまま</h3>
              <p>
                君津・木更津方面の方はお車でのご来店が多いです。店舗前に無料駐車場を完備しているので、駐車場を探したり料金を気にする必要がありません。施術後はそのままお帰りいただけます。
              </p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">5. 短時間コースも充実・45分から</h3>
              <p>
                「今日は時間がないけど少しだけほぐしてほしい」という方には45分コース（¥3,900）があります。45分でも、首・肩・背中を中心に施術を行えるので、仕事帰りに短時間でリフレッシュしたい方にご好評いただいています。もちろん60分・90分・120分とじっくり受けることもできます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Fatigue Types ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Your Fatigue" ja="仕事後の疲れのパターンと対応メニュー" />
          <div className="mt-8 space-y-5">
            {fatigueTypes.map((f) => (
              <div key={f.type} className="border border-sand-200 bg-cream-50 p-6">
                <h3 className="text-sm font-medium text-stone-800 mb-1 tracking-wide">{f.type}</h3>
                <Link
                  href={f.href}
                  className="inline-block text-xs text-brown-400 tracking-widest mb-3 hover:text-brown-500"
                >
                  おすすめ: {f.menu} →
                </Link>
                <p className="text-sm text-stone-700 leading-loose">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Courses ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Courses" ja="仕事帰りにおすすめのコース" centered />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                <h3 className="text-sm font-medium text-stone-800 mb-1 tracking-wide group-hover:text-brown-500">
                  {c.name}
                </h3>
                <p className="font-en text-lg text-brown-400 mb-3 font-light">{c.price}</p>
                <p className="text-xs text-stone-700 leading-relaxed">{c.desc}</p>
                <p className="mt-4 text-xs tracking-widest text-brown-400">詳しく見る →</p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/menu"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
            >
              すべてのメニュー・料金を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Timing & How to Book ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Tips" ja="仕事帰りの来店ポイント・予約のコツ" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <div className="border border-sand-200 p-6">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">混みやすい時間帯</h3>
              <p>
                夕方〜夜（18:00〜22:00）は最も混雑しやすく、特に金曜日・土曜日の夜は当日予約が取りにくい場合があります。「夕方の人気時間帯を確保したい」という方は、昼休みなどに事前予約を入れておくのがおすすめです。
              </p>
            </div>
            <div className="border border-sand-200 p-6">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">比較的予約が取りやすい時間帯</h3>
              <p>
                平日の午前〜昼過ぎ（10:00〜15:00）は比較的空いていることが多いです。昼休みに立ち寄れる方は、この時間帯もご活用ください。また、夜遅め（21:00以降）は案外取りやすいこともあります。
              </p>
            </div>
            <div className="border border-sand-200 p-6">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">当日予約の入れ方</h3>
              <p>
                ホットペッパービューティーまたは公式WEB予約（B-merit）にアクセスし、希望の日時・コースを選んで予約完了です。24時間いつでも空き確認・予約ができるので、仕事中でも昼休みに手軽に予約できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Scenes ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Typical Scene" ja="よくあるご利用シーン" />
          <div className="mt-8 space-y-4 text-sm text-stone-700 leading-loose">
            <div className="border border-sand-200 bg-cream-50 p-6">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">デスクワーク帰り・肩と首がつらい</h3>
              <p>
                一日中パソコン作業をして、肩・首・背中がガチガチになった状態で帰宅前にMARISAへ。施術後は首の重さが軽くなり、家に帰ってからもゆっくり休めると好評です。ヘッドセットコースで頭まで一気にケアする方も多いです。
              </p>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">長距離運転・腰のだるさ</h3>
              <p>
                君津から各地への仕事の移動・配達・外回りで腰が重くなった方に。仕事帰りにもみほぐしで腰まわりをしっかりほぐして帰る、という使い方をされているお客様もいます。「腰を重点的にほぐしてほしい」とお伝えください。
              </p>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">眼精疲労・頭が重い</h3>
              <p>
                PC作業やスマートフォンの見過ぎで目の奥が重い、頭がぼーっとする、という方にはヘッドセットコースがおすすめです。もみほぐしで肩・首をほぐした後、ヘッドケアで頭まわりをスッキリさせます。
              </p>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">立ち仕事の足のだるさ・むくみ</h3>
              <p>
                販売・医療・飲食・工場など立ち仕事が多い方の足のだるさ・むくみ感に。足つぼセットコースで、全身のもみほぐしに加え、足の反射区もしっかりケアします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="FAQ" ja="仕事帰りの利用でよくある質問" />
          <div className="mt-8 space-y-4">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="border border-sand-200 p-6">
                <p className="text-sm font-medium text-stone-800 mb-3 leading-snug tracking-wide">
                  <span className="font-en text-brown-400 mr-2">Q.</span>
                  {item.name}
                </p>
                <p className="text-sm text-stone-700 leading-loose pl-5">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/faq"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
            >
              よくある質問をすべて見る →
            </Link>
            <Link
              href="/first"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
            >
              初めての方へ →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Related ===== */}
      <section className="py-12 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
              { label: '当日予約について', href: '/scene/same-day' },
              { label: '駐車場について', href: '/scene/parking' },
              { label: 'メニュー・料金', href: '/menu' },
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
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">今日の帰りに、ぜひ。</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業・最終受付23時・年中無休。<br />
            当日予約もホットペッパービューティーまたは公式WEB予約からすぐご予約いただけます。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="今日の予約をする" variant="light" size="lg" />
            <ReserveButton href={BMERIT_URL} label="公式WEB予約（鍼灸対応）" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
