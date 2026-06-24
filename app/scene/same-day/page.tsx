import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '当日予約OK・もみほぐし・マッサージ｜MARISA 君津店',
  description:
    '君津市でマッサージ・もみほぐしの当日予約をお探しなら。MARISA 君津店は24時間WEB予約受付・当日予約対応。急な疲れ・休日の空き時間・仕事帰りなどにご利用ください。',
  keywords: [
    '君津 当日予約 マッサージ',
    '君津 当日予約 もみほぐし',
    '君津 急に マッサージ',
    '当日 マッサージ 君津',
    '君津 空き 予約',
  ],
  openGraph: {
    title: '当日予約OK・もみほぐし・マッサージ｜MARISA 君津店',
    description: '24時間WEB予約受付・当日予約対応。急な疲れにすぐ対応できます。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/scene/same-day' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '本当に当日でも予約できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、当日予約に対応しています。ホットペッパービューティーまたは公式WEB予約（B-merit）から24時間いつでも空き状況をご確認いただき、当日のご予約が可能です。ただし、混雑状況によっては空きがない場合もありますので、なるべくお早めにご確認ください。',
      },
    },
    {
      '@type': 'Question',
      name: '当日予約の締め切り時間はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '最終受付は23:00です。当日の23時前にご予約・ご来店いただければ施術をお受けいただけます。早い時間帯ほど空き枠が多いため、「今日行きたい」と決まったらなるべくお早めにご確認ください。',
      },
    },
    {
      '@type': 'Question',
      name: '週末も当日予約できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '年中無休で当日予約に対応しています。ただし、土曜・日曜・祝日は混雑しやすく、当日予約が取りにくい場合があります。週末のご利用を希望の方は、前日か当日の早い時間帯にご予約いただくことをおすすめします。',
      },
    },
    {
      '@type': 'Question',
      name: '当日予約する方法を教えてください。',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ホットペッパービューティーまたは公式WEB予約（B-merit）にアクセスし、希望の日時・コースを選んで予約を完了してください。ホットペッパービューティーでは当日のクーポンも使用可能です。鍼灸・美容鍼をご希望の方は公式WEB予約（B-merit）からお申し込みください。',
      },
    },
    {
      '@type': 'Question',
      name: '満席の場合はどうなりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '空き枠がない場合はオンライン予約では選択できなくなります。別の時間帯や日時での予約をご検討ください。なるべく早い時間帯に確認・予約いただくと希望の時間が取りやすいです。',
      },
    },
  ],
}

const scenes = [
  {
    title: '「急に肩がつらくなった」',
    desc: '仕事中や家事の途中に急に肩・首がつらくなった日。そのままにせず、今日のうちにケアしたい方に。当日予約でその日のうちに来店できます。',
  },
  {
    title: '「休日の午後、急に時間ができた」',
    desc: '予定がキャンセルになった、子どもが友人宅に行った、など急に自由な時間ができた日に。「今日はゆっくりしたい」と思ったらすぐ予約できます。',
  },
  {
    title: '「仕事帰りに立ち寄りたい」',
    desc: '残業がなくなって帰りが早くなった日。仕事帰りの夜に当日予約してそのまま来店するパターンは最もご利用の多いシーンです。',
  },
  {
    title: '「昨日よく眠れず、今日ケアしたい」',
    desc: '疲れが残っている日・体がだるい日に、翌日に持ち越さずその日のうちにケアしたい方に。短時間コースでも効果を感じやすいです。',
  },
  {
    title: '「旅行・外出の帰り道に寄りたい」',
    desc: '南房総・鋸山観光やゴルフ帰りに君津のMARISAへ立ち寄る方もいます。無料駐車場完備なのでそのままお帰り前にリフレッシュできます。',
  },
]

const sameDayCourses = [
  {
    name: 'もみほぐし 45分',
    price: '¥3,900',
    href: '/menu/body-care',
    desc: '「短時間だけでもほぐしたい」方に最適。首・肩・背中を集中してケア。時間がない日の当日予約に人気。',
  },
  {
    name: 'もみほぐし 60分',
    price: '¥4,500',
    href: '/menu/body-care',
    desc: '全身をバランスよくほぐす定番コース。急な疲れにも対応できる当日予約の定番。',
    badge: '人気',
  },
  {
    name: 'ヘッドセット 60分',
    price: '¥5,400',
    href: '/menu/set',
    desc: 'もみほぐし＋ヘッドケア。急に眼精疲労や頭の重さが気になった日にもおすすめ。',
  },
  {
    name: '足つぼセット 60分',
    price: '¥5,500',
    href: '/menu/foot',
    desc: 'もみほぐし＋足つぼ。急に足がだるくなった日・むくみが気になる日に。',
  },
]

export default function SceneSameDayPage() {
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
              { label: '当日予約したい方' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Same Day Booking</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              当日予約でもすぐに<br className="hidden sm:block" />
              ご案内できます。
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「急に体がつらくなった」「今日の帰りに行きたい」「休日の空き時間にリフレッシュしたい」。そんなときも、ホットペッパービューティーまたは公式WEB予約から当日予約が可能です。24時間いつでも空き確認・即予約。君津市のリラクゼーションサロン MARISA。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Highlights ===== */}
      <section className="py-10 bg-cream-50 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { en: '24 Hours', ja: '24時間予約受付' },
              { en: 'Same Day OK', ja: '当日予約対応' },
              { en: 'Last 23:00', ja: '最終受付23時' },
              { en: 'Year-Round', ja: '年中無休' },
            ].map((item) => (
              <div key={item.en} className="text-center py-4">
                <p className="font-en text-xs tracking-widest text-brown-400 mb-1">{item.en}</p>
                <p className="text-sm font-medium text-stone-800 tracking-wide">{item.ja}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== How to book ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="How to Book" ja="当日予約の流れ（3ステップ）" />
          <div className="mt-10 space-y-4">
            {[
              {
                step: '01',
                title: '空き状況を確認する',
                body: 'ホットペッパービューティーまたは公式WEB予約（B-merit）にアクセスし、今日の希望の時間帯を選択します。リアルタイムで空き状況が確認できるので、すぐにわかります。ホットペッパーではクーポンもご利用いただけます。鍼灸・美容鍼をご希望の方は公式WEB予約（B-merit）からのみご予約いただけます。',
              },
              {
                step: '02',
                title: '希望のコースと時間帯を選んで予約',
                body: 'ご希望のコース（もみほぐし・ヘッドケア・足つぼ・セットコースなど）と時間帯を選択して予約を完了します。クーポンがある場合はこのステップで選択してください。予約確認のメールやSMSが届きます。',
              },
              {
                step: '03',
                title: 'ご来店・手ぶらでOK',
                body: '予約した時間にご来店ください。着替えや持ち物の準備は不要です。スーツ・制服・普段着のままで大丈夫。店舗前の無料駐車場をご利用ください。来店後にカウンセリングを行い、その日の体の状態に合わせてケアします。',
              },
            ].map((s) => (
              <div key={s.step} className="flex gap-6 border border-sand-200 bg-cream-50 p-6">
                <p className="font-en text-2xl font-light text-brown-300 shrink-0 w-10">{s.step}</p>
                <div>
                  <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{s.title}</h3>
                  <p className="text-sm text-stone-700 leading-loose">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Scenes ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="When to Use" ja="当日予約が重宝するシーン" />
          <div className="mt-8 space-y-4">
            {scenes.map((s) => (
              <div key={s.title} className="border border-sand-200 bg-cream-50 p-6">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{s.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Tips ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Tips" ja="当日予約のコツ・混雑を避けるポイント" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <div className="border border-sand-200 p-6">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">混みやすい時間帯</h3>
              <p>
                夕方〜夜（18:00〜22:00）は最も当日予約が埋まりやすい時間帯です。特に金曜・土曜・日曜・祝日の夜は早めに埋まることがあります。「今日の夜に行きたい」と思ったら、できるだけ昼休みなどに早めに確認することをおすすめします。
              </p>
            </div>
            <div className="border border-sand-200 p-6">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">当日予約が取りやすい時間帯</h3>
              <p>
                平日の午前〜昼過ぎ（10:00〜15:00）や、夜遅め（21:00〜23:00）は比較的空きが出やすいです。また、平日の夕方も土日と比較すると取りやすい場合が多いです。
              </p>
            </div>
            <div className="border border-sand-200 p-6">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">昼休みに当日夜の予約を入れるのがコツ</h3>
              <p>
                「今日の帰りに行こうかな」と思ったら、仕事中の昼休みにホットペッパービューティーまたは公式WEB予約から予約しておくのが確実です。夕方になると希望の時間帯が埋まっていることもあります。
              </p>
            </div>
            <div className="border border-sand-200 p-6">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">最終受付23時・帰りが遅くなっても使いやすい</h3>
              <p>
                最終受付は23:00です。「今日残業で帰りが遅くなったけど、それでも行きたい」という場合も、23時前にご来店いただければ施術をお受けいただけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Courses ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Courses" ja="当日でも受けやすいコース" centered />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {sameDayCourses.map((c) => (
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

      {/* ===== Reservation Methods ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Book Now" ja="予約方法" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <div className="border border-sand-200 bg-cream-50 p-6">
              <h3 className="font-medium text-stone-800 mb-3 tracking-wide">
                ホットペッパービューティー（もみほぐし・ヘッドケア・足つぼ・セット）
              </h3>
              <p>
                24時間いつでも当日予約OK。クーポンもご利用いただけます。空き状況はリアルタイムで確認できます。
              </p>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <h3 className="font-medium text-stone-800 mb-3 tracking-wide">
                公式WEB予約・B-merit（鍼灸・美容鍼を含む全メニュー）
              </h3>
              <p>
                鍼灸・美容鍼は公式WEB予約（B-merit）からのみご予約いただけます。もみほぐし等も公式予約から予約可能です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="FAQ" ja="当日予約に関するよくある質問" />
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
              { label: '仕事帰りの利用', href: '/scene/after-work' },
              { label: '駐車場について', href: '/scene/parking' },
              { label: 'メニュー・料金', href: '/menu' },
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
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">今すぐ予約する</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            24時間いつでも当日予約OK。<br />
            ホットペッパービューティーまたは公式WEB予約から空き確認・即予約が可能です。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="今すぐ空きを確認する" variant="light" size="lg" />
            <ReserveButton href={BMERIT_URL} label="公式WEB予約（鍼灸対応）" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
