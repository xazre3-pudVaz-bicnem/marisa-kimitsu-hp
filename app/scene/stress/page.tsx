import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'ストレス解消・リフレッシュのもみほぐし｜MARISA 君津店',
  description: '君津でストレス解消・リフレッシュのもみほぐしならMARISA。体をほぐすことがリラクゼーションにつながります。仕事・人間関係・日常疲れで張り詰めた方に。',
  keywords: ['君津 ストレス解消 マッサージ', '君津 リフレッシュ もみほぐし', '君津 気分転換 リラクゼーション'],
  openGraph: {
    title: 'ストレス解消・リフレッシュのもみほぐし｜MARISA 君津店',
    description: '体をほぐすことがリラクゼーションにつながります。君津MARISA。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/scene/stress' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'ストレスで体が緊張しているのですが、もみほぐしは効果がありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ストレスを感じると筋肉が緊張しやすく、肩や首のこわばりが出やすくなります。もみほぐしで筋肉の緊張をほぐすことで、体がリラックスしやすい状態になります。心と体は繋がっているため、体をほぐすことで気分も軽く感じやすくなるというお声をいただいています。',
      },
    },
    {
      '@type': 'Question',
      name: '気分が落ち込んでいるときでも利用できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、ご利用いただけます。施術中は静かな空間でゆっくりとお過ごしいただけます。何もしゃべらなくても大丈夫ですし、施術に集中していただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '予約なしでも行けますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '当日予約も受け付けております。ただし、ご希望のお時間が埋まっている場合もございますので、事前にホットペッパービューティーから空き状況をご確認の上、ご予約いただくことをおすすめします。',
      },
    },
  ],
}

export default function SceneStressPage() {
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
              { label: 'ストレス解消に' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Stress Relief</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              ストレスを感じたら、体からリフレッシュ
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              仕事・人間関係・日常のさまざまなストレスで張り詰めてしまったとき、体をほぐすことが心のリフレッシュにもつながります。君津のMARISAで、静かな時間をお過ごしください。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Body & Stress" ja="ストレスと体のつながり" lead="心のつらさは体に現れやすい" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              ストレスを感じると、体は無意識に緊張状態になります。肩が上がる、首が縮まる、呼吸が浅くなる——こうした体の変化は、精神的な負荷が体に現れているサインです。
            </p>
            <p>
              特に肩から首にかけての緊張が続くと、頭が重く感じやすくなったり、目が疲れやすくなったりすることがあります。また、腰や背中が硬くなることで、全身に重だるさを感じやすくなります。
            </p>
            <p>
              体の緊張がほぐれると、自然と呼吸が深くなりやすく、体全体がリラックスした状態になりやすいです。「施術後は気持ちも軽くなった気がする」というお声をいただくのは、体と心のつながりによるものと考えられます。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Why Momihogushi" ja="もみほぐしがリフレッシュにつながる理由" lead="体からアプローチする気分転換" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              もみほぐしは、筋肉の緊張を直接ほぐすアプローチです。積み重なった疲れで固まった筋肉をほぐすことで、体が軽く感じやすい状態になります。
            </p>
            <p>
              施術中は静かな空間でうつ伏せになり、プロの手によってゆっくりと体をほぐしていただきます。何も考えずにただ体を委ねる時間は、それ自体が日常のストレスから離れる貴重なひとときになります。
            </p>
            <p>
              「気分転換に何かしたいけれど、何をすればいいかわからない」という方にも、もみほぐしはおすすめです。特別な準備や運動が必要なく、ただ来店して施術を受けるだけで、体と心の負担をやわらげやすくなります。
            </p>
            <p>
              仕事で忙しい日々の中でも、1〜2時間を自分のために使うことが、長期的に見てパフォーマンスの維持にもつながります。頑張りすぎている自分を、定期的にいたわってあげてください。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
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
