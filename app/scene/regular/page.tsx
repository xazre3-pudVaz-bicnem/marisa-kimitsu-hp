import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '定期メンテナンス・継続ケアのもみほぐし｜MARISA 君津店',
  description: '君津で定期的なもみほぐしメンテナンスならMARISA。週1・月2〜3回など自分のペースで継続できます。慢性的な肩こり・腰のつらさのケアに。ホットペッパービューティーから事前予約OK。',
  keywords: ['君津 定期 マッサージ', '君津 月1 もみほぐし', '君津 継続ケア リラクゼーション', '君津 定期的 もみほぐし'],
  openGraph: {
    title: '定期メンテナンス・継続ケアのもみほぐし｜MARISA 君津店',
    description: '君津で定期的なもみほぐしメンテナンスならMARISA。自分のペースで続けられます。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/scene/regular' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '定期的に通うとどう変わりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '継続してご利用いただくことで、「以前より体が軽く感じやすくなった」「肩こりの度合いが変わってきた気がする」というお声をいただいています。一度ほぐれた体も日常の中で再び固まりやすくなるため、定期的なケアを続けることが体のコンディション維持に役立ちます。',
      },
    },
    {
      '@type': 'Question',
      name: 'どのくらいの頻度が目安ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '体の状態やライフスタイルによって異なりますが、慢性的な肩こり・腰のつらさを感じている方は週1回、体のメンテナンスとして通われる方は月2〜3回が人気です。まず試す場合は月1回から始めて、体の変化に合わせて頻度を調整していただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '同じスタッフに担当してもらえますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ご希望の担当者がいる場合は、ご予約の際にお知らせください。スタッフのシフト状況によりますが、できる限りご希望に沿えるよう対応いたします。',
      },
    },
    {
      '@type': 'Question',
      name: '継続のための割引はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '現在提供中の特典・割引につきましては、ホットペッパービューティーの店舗ページにて最新情報をご確認ください。お得なクーポンが掲載されていることがあります。',
      },
    },
    {
      '@type': 'Question',
      name: 'まず月1から始めて頻度を増やすことはできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、もちろんです。まずは月1回から始めて、体の変化を見ながら頻度を増やしていくお客様も多くいらっしゃいます。自分のペース・スケジュールに合わせてご利用いただけます。',
      },
    },
  ],
}

export default function SceneRegularPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb
            items={[
              { label: '地域・シーン別', href: '/area/kimitsu' },
              { label: '定期メンテナンスに' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Regular Maintenance</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              定期的なメンテナンスで、体を整え続ける
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              一度だけでなく、定期的にもみほぐしを受けることで、体のコンディションを整え続けることができます。週1・月2〜3回など自分のペースで続けられます。忙しい日常の中でも、体のケアを習慣にしてみませんか。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Benefits" ja="定期メンテナンスのメリット" lead="継続することで得られること" />
          <div className="mt-10 grid gap-5">
            {[
              {
                title: '体のコンディションが整いやすくなる',
                body: '体の疲れや緊張は毎日少しずつ積み重なります。一度ほぐれたとしても、同じ姿勢や動作の繰り返しで再び固まりやすくなります。定期的なケアが体のコンディション維持に効果的です。',
              },
              {
                title: '慢性的な疲れのサイクルを変えやすくなる',
                body: '定期的にご利用いただくお客様からは「以前より体が軽く感じやすくなった」「肩こりの度合いが変わってきた気がする」というお声をいただいています。習慣的なケアで少しずつ負担をやわらげやすくなります。',
              },
              {
                title: '自分の体のクセに気づけるようになる',
                body: '施術を繰り返すことで「右肩が特に固まりやすい」「腰の左側が張りやすい」といった自分の体のクセに気づきやすくなります。日常生活での体の使い方の意識も自然と変わってきます。',
              },
              {
                title: '「つらくなる前に行く」習慣ができる',
                body: '体がつらくなってから行くのではなく、「つらくなる前に行く」という意識が生まれます。予防的なケアとして定期通いを習慣にしている方が増えています。',
              },
            ].map((item, i) => (
              <div key={i} className="bg-sand-100 border border-sand-200 p-6">
                <p className="font-medium text-stone-800 mb-2 tracking-wide text-sm">{item.title}</p>
                <p className="text-sm text-stone-700 leading-loose">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Frequency" ja="推奨頻度の目安" lead="ライフスタイルに合わせて選べます" />
          <div className="mt-8 space-y-4">
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">週1回ペース</p>
              <p className="text-sm text-stone-700 leading-loose">
                慢性的な肩こりや腰のつらさを強く感じている方、デスクワークや立ち仕事が多い方、体のコンディションを積極的に整えたい方に向いています。週1回で体の重さが変わったという声も多くいただいています。
              </p>
            </div>
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">月2〜3回ペース</p>
              <p className="text-sm text-stone-700 leading-loose">
                日常のメンテナンスとして体を整えたい方に人気の頻度です。「2週間に1回」と「月3回」を組み合わせて自分のスケジュールに合わせる方も多いです。
              </p>
            </div>
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">月1回ペース（まずはここから）</p>
              <p className="text-sm text-stone-700 leading-loose">
                定期通いを始めるなら月1回からがおすすめです。「月に一度のご褒美感覚」でリフレッシュしながら、体の変化を感じたら頻度を増やしていただけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Recommended Menu" ja="定期ケアにおすすめのメニュー" lead="継続しやすいコース選び" />
          <div className="mt-8 space-y-4">
            <div className="bg-sand-100 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">もみほぐし 60〜90分</p>
              <p className="text-sm text-stone-700 leading-loose">
                定期メンテナンスの主力コースです。全身をバランスよくケアできる60分、じっくりほぐしたい方の90分と、その日の疲れ具合に応じて使い分けができます。継続のしやすさと充実感を両立した、定番の選択肢です。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Booking Tips" ja="定期利用のコツ" lead="スムーズに続けるために" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              定期的に通う場合、ご希望の曜日・時間帯が取りやすくなるよう、早めの予約がおすすめです。ホットペッパービューティーでは先の日程も確認・予約できますので、施術後にその場で次回の予約を入れるお客様も多くいらっしゃいます。
            </p>
            <p>
              スマートフォンのカレンダーに予約を入れておくと、忘れずに続けやすくなります。定期通いを習慣化するコツは、「体がつらくなってから行く」ではなく「つらくなる前に行く」という意識を持つことです。
            </p>
            <p>
              MARISAは年中無休・夜0時まで営業しているため、仕事の都合や家族のスケジュールに合わせて柔軟に通い続けていただけます。「続けやすさ」を大切にしたい方にも選ばれています。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="FAQ" ja="よくある質問" />
          <div className="mt-8 space-y-4">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="border border-sand-200 bg-sand-100 p-6">
                <p className="text-sm font-medium text-stone-800 mb-3 tracking-wide">
                  <span className="font-en text-brown-400 mr-2">Q.</span>{item.name}
                </p>
                <p className="text-sm text-stone-700 leading-loose pl-5">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
              { label: 'メニュー・料金', href: '/menu' },
              { label: 'よくある質問', href: '/faq' },
              { label: '休日のご利用に', href: '/scene/holiday' },
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

      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">ご予約はこちらから</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">夜0時まで営業・年中無休・当日予約OK・無料駐車場完備。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton href="/menu" label="メニューを見る" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
