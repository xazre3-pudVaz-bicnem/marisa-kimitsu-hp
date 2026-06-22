import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '定期メンテナンスのもみほぐし・月1回ケア｜MARISA 君津店',
  description: '君津で定期的なもみほぐしメンテナンスならMARISA。2週間〜月1回の通い方で体を整え続けられます。ホットペッパービューティーからの事前予約でスムーズに。',
  keywords: ['君津 定期 マッサージ', '君津 月1 もみほぐし', '君津 メンテナンス リラクゼーション'],
  openGraph: {
    title: '定期メンテナンスのもみほぐし・月1回ケア｜MARISA 君津店',
    description: '君津で定期的なもみほぐしメンテナンスならMARISA。体を整え続けましょう。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/scene/regular' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '定期的に通う場合の推奨頻度を教えてください。',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '体の状態やライフスタイルによって異なりますが、目安として2週間に1回〜月1回程度をおすすめしています。慢性的な肩こりや腰のつらさを感じている方は2週間に1回、体のメンテナンスとして通われる方は月1回が人気です。',
      },
    },
    {
      '@type': 'Question',
      name: '定期的に通うと何か変わりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '継続してご利用いただくことで、体の変化に気づきやすくなったり、日常の疲れが軽く感じやすくなったというお声をいただいています。体のケアは習慣として続けることが大切です。',
      },
    },
    {
      '@type': 'Question',
      name: '毎回同じ担当者に施術してもらえますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ご希望の担当者がいる場合は、ご予約の際にお知らせください。スタッフのシフト状況によりますが、できる限りご希望に沿えるよう対応いたします。',
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
              一度だけでなく、定期的にもみほぐしを受けることで、体のコンディションを整え続けることができます。忙しい日常の中でも、体のケアを習慣にしてみませんか。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Benefits" ja="定期メンテナンスのメリット" lead="継続することで得られること" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              体の疲れや緊張は、毎日少しずつ積み重なっていきます。一度ほぐれたとしても、日常生活の中で同じ姿勢を続けたり、同じ動作を繰り返すことで、また固まりやすくなります。そのため、定期的なケアが体のコンディションを保つ上で効果的です。
            </p>
            <p>
              定期的にご利用いただくお客様からは「以前より体が軽く感じやすくなった」「肩こりの度合いが変わってきた気がする」というお声をいただいています。慢性化しているつらさも、習慣的なケアで少しずつ負担をやわらげやすくなります。
            </p>
            <p>
              また、施術を繰り返すことで「自分の体のクセ」に気づきやすくなります。右肩が特に固まりやすい、腰の左側が張りやすい——こうした傾向を把握することで、日常生活の中での体の使い方の意識も変わってきます。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Frequency" ja="推奨頻度の目安" lead="ライフスタイルに合わせて" />
          <div className="mt-8 space-y-4">
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">2週間に1回ペース</p>
              <p className="text-sm text-stone-700 leading-loose">
                慢性的な肩こりや腰のつらさを感じている方、デスクワークが多い方、体のコンディションを積極的に整えたい方におすすめです。
              </p>
            </div>
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">月1回ペース</p>
              <p className="text-sm text-stone-700 leading-loose">
                日常のメンテナンスとして体を整えたい方に人気の頻度です。月に一度のご褒美感覚でご利用いただいている方も多いです。
              </p>
            </div>
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">体がつらいときだけ</p>
              <p className="text-sm text-stone-700 leading-loose">
                忙しくて定期的に通うのが難しい方は、「体が疲れてきたな」と感じたタイミングでのご利用でも十分です。当日予約も受け付けています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Booking Tips" ja="定期利用の予約のコツ" lead="スムーズに続けるために" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              定期的に通う場合、ご希望の曜日・時間帯が取りやすくなるよう、早めの予約がおすすめです。ホットペッパービューティーでは先の日程も確認・予約できますので、施術後にその場で次回の予約を入れるお客様も多くいらっしゃいます。
            </p>
            <p>
              スマートフォンのカレンダーに予約を入れておくと、忘れずに続けやすくなります。定期通いを習慣化するコツは、「体がつらくなってから」ではなく「つらくなる前に行く」という意識を持つことです。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="FAQ" ja="よくある質問" />
          <div className="mt-8 space-y-4">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="border border-sand-200 bg-cream-50 p-6">
                <p className="text-sm font-medium text-stone-800 mb-3 tracking-wide">
                  <span className="font-en text-brown-400 mr-2">Q.</span>{item.name}
                </p>
                <p className="text-sm text-stone-700 leading-loose pl-5">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
              { label: 'メニュー・料金', href: '/menu' },
              { label: 'よくある質問', href: '/faq' },
              { label: 'もみほぐしの頻度について', href: '/guide/frequency' },
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
          <p className="text-sm text-sand-300 leading-loose mb-10">夜0時まで営業・当日予約OK・無料駐車場完備。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton href="/menu" label="メニューを見る" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
