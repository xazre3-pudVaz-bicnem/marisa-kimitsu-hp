import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '当日予約でもみほぐし・マッサージ｜君津｜MARISA 君津店',
  description:
    '君津市のもみほぐし・MARISA 君津店は当日予約にも対応。ホットペッパービューティーから24時間いつでも空き確認・予約が可能。急な疲れや予定の合間にもお気軽にどうぞ。',
  keywords: ['君津 当日予約 マッサージ', '君津 当日 もみほぐし', '君津市 今日 マッサージ'],
  openGraph: {
    title: '当日予約でもみほぐし・マッサージ｜君津｜MARISA 君津店',
    description: '24時間いつでも当日予約OK。急な疲れにもすぐ対応。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/scene/same-day' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '当日予約は何時まで受け付けていますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '最終受付は23:00です。当日予約はホットペッパービューティーから24時間いつでも空き状況をご確認いただけます。当日の空き状況によっては満席の場合もありますので、なるべくお早めにご確認ください。',
      },
    },
    {
      '@type': 'Question',
      name: '電話での当日予約もできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、お電話でも当日予約を承っています。混雑時は繋がりにくい場合がありますので、ホットペッパービューティーのネット予約もあわせてご活用ください。',
      },
    },
    {
      '@type': 'Question',
      name: '当日予約でもクーポンは使えますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、ホットペッパービューティーのクーポンは当日予約でもご利用いただけます。予約時にクーポンをご選択ください。',
      },
    },
    {
      '@type': 'Question',
      name: '予約なしでの来店はできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ご予約なしでの来店も受け付けていますが、空きがない場合はお待ちいただくか、別の時間帯にご案内することがあります。できるだけ事前にホットペッパービューティーでご予約いただくことをおすすめします。',
      },
    },
  ],
}

export default function SceneSameDayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ===== Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: '地域・シーン別', href: '/area/kimitsu' }, { label: '当日予約したい方' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Same Day Booking</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              当日予約でもすぐに<br className="hidden sm:block" />
              ご案内できます。
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「急に体がつらくなった」「今日の帰りに行きたい」。そんなときも、ホットペッパービューティーから当日予約が可能です。24時間いつでも空き確認・即予約。君津市のリラクゼーションサロン MARISA。
            </p>
          </div>
        </div>
      </div>

      {/* ===== How to ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="How to Book" ja="当日予約の流れ" />
          <div className="mt-10 space-y-4">
            {[
              {
                step: '01',
                title: 'ホットペッパービューティーを開く',
                body: 'スマホ・PCからホットペッパービューティーの「もみほぐし MARISA 君津店」ページを開きます。当ページ上部のリンクからもアクセスできます。',
              },
              {
                step: '02',
                title: '空き状況を確認する',
                body: '希望の日時を選択すると、リアルタイムで空き状況が確認できます。当日の空きも即時反映されているので、すぐに確認できます。',
              },
              {
                step: '03',
                title: 'コースとスタッフを選んで予約',
                body: 'ご希望のコース（時間・種類）とスタッフを選択して予約を完了します。クーポンがある場合は、このステップで選択してください。',
              },
              {
                step: '04',
                title: '予約完了・来店するだけ',
                body: '予約確認メールが届いたら完了です。予約した時間にご来店ください。着替えや持ち物は不要です。そのままお越しください。',
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

      {/* ===== Why same day ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Same Day Tips" ja="当日予約の際に知っておくと便利なこと" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <div className="border border-sand-200 bg-cream-50 p-6">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">混みやすい時間帯を避けると取りやすい</h3>
              <p>夕方〜夜（18:00〜22:00）は混雑しやすく、当日予約が取りにくい場合があります。平日の午前〜昼過ぎ、または早めの夕方（16〜17時台）は比較的空いていることが多いです。</p>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">昼休みに当日夜の予約を入れるのがコツ</h3>
              <p>当日の夜の予約を昼休みに入れておく方が多いです。「今日帰りに行こうかな」と思ったら、仕事中の昼休みにホットペッパーから予約しておくと確実です。</p>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">最終受付23時・忙しくても使いやすい</h3>
              <p>最終受付は23:00です。帰りが遅くなった日でも、23時前にご来店いただければ施術を受けていただけます。「急いで来て施術してもらう」という使い方でも大丈夫です。</p>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">短時間コースも充実</h3>
              <p>「今日は時間がない」という場合は45分コースがあります。45分でも首・肩・背中を集中してほぐすことができ、体の軽さを感じやすいコースです。</p>
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
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">今すぐ予約する</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            24時間いつでも当日予約OK。<br />
            ホットペッパービューティーから空き確認・即予約が可能です。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="今すぐ空きを確認する" variant="light" size="lg" />
            <ReserveButton href="/menu" label="コース・料金を見る" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
