import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'もみほぐしの通う頻度は？お悩み別の目安を解説｜MARISA 君津店',
  description: 'もみほぐしに通う頻度の目安をお悩み別に解説。慢性疲労には2週間に1回、メンテナンスには月1回が目安。忙しい方向けの通い方も紹介。君津MARISA。',
  keywords: ['もみほぐし 頻度', 'マッサージ 何回 通う', 'もみほぐし どのくらい'],
  openGraph: {
    title: 'もみほぐしの通う頻度は？お悩み別の目安を解説｜MARISA 君津店',
    description: 'もみほぐしに通う頻度をお悩み別に解説。MARISA 君津店。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/guide/frequency' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'もみほぐしはどのくらいの頻度で通えばいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'お悩みや目的によって異なりますが、慢性的な肩こりや腰のつらさがある方は2週間に1回、体のメンテナンス目的の方は月1回が目安です。忙しい方は体がつらいと感じたときに随時ご利用いただくスタイルでも十分です。',
      },
    },
    {
      '@type': 'Question',
      name: '通いすぎることはありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'リラクゼーション目的のもみほぐしは、過度に短い間隔で受けると筋肉が敏感になることがあります。一般的には最低でも3日〜1週間程度の間隔を空けることが多いです。スタッフへご相談ください。',
      },
    },
    {
      '@type': 'Question',
      name: '1回だけでも効果はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '1回の施術でも、その日の体の緊張がほぐれる感覚や体が軽く感じやすくなる変化を実感いただけることがあります。ただし、慢性的なお悩みには継続的なケアがより効果的です。',
      },
    },
  ],
}

export default function GuideFrequencyPage() {
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
              { label: 'ガイド', href: '/guide/what-is-momihogushi' },
              { label: 'もみほぐしの頻度' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Guide</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              もみほぐしはどのくらいの頻度で通えばいい？
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「もみほぐしは何回通えばいいの？」という疑問にお答えします。お悩みや目的別に頻度の目安を解説します。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Frequency Guide" ja="頻度の基本的な考え方" lead="目的によって変わります" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              もみほぐしに通う頻度に「正解」はありません。お客様の体の状態・お悩みの程度・生活スタイルによって最適な頻度は異なります。ここでは一般的な目安を解説しますが、あくまでも参考としてご利用ください。
            </p>
            <p>
              大切なのは「体がつらくなってから行く」よりも「つらくなる前に整えておく」という考え方です。定期的なケアによって体の緊張が慢性化しにくくなり、日常のパフォーマンスも維持しやすくなります。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="By Concern" ja="お悩み別の目安" lead="自分に合った頻度を見つけましょう" />
          <div className="mt-8 space-y-4">
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">慢性的な肩こり・腰のつらさがある方</p>
              <p className="text-sm text-stone-700 leading-loose mb-2">おすすめ頻度：<span className="font-medium text-brown-500">2週間に1回</span></p>
              <p className="text-sm text-stone-700 leading-loose">
                慢性化した筋肉の緊張は一度ほぐれても、同じ生活習慣を続けていると再び固まりやすくなります。2週間程度の間隔でケアすることで、緊張が蓄積する前に整えやすくなります。
              </p>
            </div>
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">日常のメンテナンスとして通いたい方</p>
              <p className="text-sm text-stone-700 leading-loose mb-2">おすすめ頻度：<span className="font-medium text-brown-500">月1回</span></p>
              <p className="text-sm text-stone-700 leading-loose">
                大きなつらさはないが体を定期的に整えたい方に人気の頻度です。月1回を「自分へのご褒美」として習慣化しているお客様も多くいらっしゃいます。
              </p>
            </div>
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">忙しくて定期的に通えない方</p>
              <p className="text-sm text-stone-700 leading-loose mb-2">おすすめ頻度：<span className="font-medium text-brown-500">体がつらいときに随時</span></p>
              <p className="text-sm text-stone-700 leading-loose">
                毎回決まった頻度でなくても大丈夫です。「最近体が重いな」「肩が特にこってきた」と感じたタイミングでご来店いただけます。当日予約にも対応しています。
              </p>
            </div>
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">スポーツ後や特定の疲れを取りたい方</p>
              <p className="text-sm text-stone-700 leading-loose mb-2">おすすめ頻度：<span className="font-medium text-brown-500">疲れのタイミングに合わせて</span></p>
              <p className="text-sm text-stone-700 leading-loose">
                運動後の筋肉疲労や、特定のイベント・繁忙期後の疲れをリセットしたいときに活用する方も多いです。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Caution" ja="通いすぎに関する注意点" lead="バランスが大切です" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              もみほぐしは体に良いリラクゼーション施術ですが、極端に短い間隔での施術は筋肉への負担となる場合があります。毎日のように施術を受けることは推奨されておらず、一般的には最低でも数日の間隔を空けることが望ましいとされています。
            </p>
            <p>
              「施術後に体が痛い」「もみ返しが強い」という場合は、施術の強さや頻度を見直す必要があるかもしれません。担当スタッフにご相談いただければ、体の状態に合わせたアドバイスをいたします。
            </p>
            <p>
              なお、「通えば通うほど良い」ということではなく、適切な頻度と日常のセルフケア（ストレッチ・姿勢の見直しなど）を組み合わせることが、長期的な体のケアにつながります。
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
              { label: 'メニュー・料金', href: '/menu' },
              { label: '定期メンテナンス', href: '/scene/regular' },
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
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
