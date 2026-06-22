import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の仕事疲れ・労働疲れのもみほぐし｜MARISA 君津店',
  description: '君津市で仕事疲れ・労働疲れが気になる方へ。工場勤務・立ち仕事・事務・運転など職業別の疲れをもみほぐしでケア。仕事帰りに寄れる夜0時まで営業。',
  keywords: ['君津 仕事疲れ マッサージ', '君津 労働疲れ もみほぐし', '君津 職業病 リラクゼーション', '君津 仕事帰り マッサージ'],
  openGraph: {
    title: '君津の仕事疲れ・労働疲れのもみほぐし｜MARISA 君津店',
    description: '君津市で仕事疲れ・労働疲れが気になる方へ。職業別の疲れをもみほぐしでケア。仕事帰りに寄れる夜0時まで営業。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/symptom/work-fatigue' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '仕事終わりに直接来店できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、仕事帰りのご来店を多くのお客様にご利用いただいています。最終受付は23時ですので、夜遅くなってもお気軽にご来店いただけます。当日のオンライン予約もホットペッパービューティーから可能です。店舗前に無料駐車場もご用意していますので、車での来店も便利です。',
      },
    },
    {
      '@type': 'Question',
      name: '立ち仕事で足がつらい場合はどのコースがおすすめですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '立ち仕事で脚・腰に疲れが溜まりやすい方には、足つぼセット（¥5,500〜）やもみほぐし60分・90分コースがおすすめです。下半身を重点的にほぐすことで、脚の重だるさが軽く感じやすくなります。ご希望の部位を事前にスタッフへお伝えいただくと、より集中してケアすることができます。',
      },
    },
    {
      '@type': 'Question',
      name: 'デスクワークで肩や首がこる場合は？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'デスクワークで首・肩まわりの疲れを感じる方には、もみほぐし45分〜60分コースが人気です。首・肩・背中を中心にほぐします。さらに頭の疲れも気になる方にはヘッドセット60分（¥5,000〜）も喜ばれています。パソコン作業や事務仕事で目や頭が疲れている方に特におすすめです。',
      },
    },
  ],
}

export default function WorkFatiguePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'お悩み別', href: '/symptom' }, { label: '仕事疲れ' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Work Fatigue Care</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              仕事の疲れを、体から解放する
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              工場勤務・事務・販売・介護・運転業など、仕事の種類によって体への負担のかかり方は異なります。
              MARISAでは職業に合わせた疲れのケアを大切にし、仕事帰りにも気軽に立ち寄れる環境を整えています。
              君津市内・近隣エリアの働く方々のお役に立てる場所でありたいと考えています。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="About" ja="職業別の疲れのパターン" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              仕事による疲れは、職業によって体への負担の出方が大きく異なります。君津市には製鉄所をはじめとした大型工場が多く、重作業や長時間の立ち仕事・中腰作業で腰・肩・脚に負担を感じやすい方が多くいらっしゃいます。工場勤務では特定の動作を繰り返すことで、特定の部位に疲れが偏りやすい特徴があります。
            </p>
            <p>
              デスクワーク・事務職の方は、長時間同じ姿勢でパソコン作業を続けることで、首・肩・背中の筋肉が緊張しやすくなります。眼精疲労や頭の重さを伴うことも多く、仕事終わりに頭も体もすっきりさせたいというご要望をよくいただきます。販売・サービス業の方は接客で長時間立ち続けることが多く、脚・腰への負担が積み重なりやすいのが特徴です。
            </p>
            <p>
              介護・医療従事者は、利用者の方のサポートで前傾姿勢や中腰になる機会が多く、腰への負担が大きい職業です。また、トラック・バス・タクシーなど運転業の方は、長時間同じ姿勢で運転を続けることで、腰・肩・首に緊張が蓄積しやすくなります。どの職業の方も、仕事の疲れは蓄積させないうちに定期的にケアすることが大切です。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="MARISA" ja="MARISAでのケアアプローチ" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAは仕事帰りに気軽に立ち寄れるリラクゼーションサロンを目指しています。最終受付は23時ですので、残業や夜の帰宅途中でもご来店いただけます。君津市内の国道沿いにあり、駅や職場からのアクセスも便利な立地です。店舗前には無料駐車場があり、車での来店もスムーズです。
            </p>
            <p>
              仕事の疲れには、もみほぐし45〜90分コースがおすすめです。お疲れの部位や仕事の種類に応じて、集中してほぐしてほしい箇所をスタッフにお伝えください。立ち仕事・重労働の方には下半身を重点的にケアする足つぼセットも人気です。仕事帰りに心身をリセットして、明日への活力を取り戻す時間をお過ごしください。
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/scene/after-work" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">仕事帰りの利用シーンを見る →</Link>
            <Link href="/menu/body-care" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">もみほぐしを見る →</Link>
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
              { label: '仕事帰りの利用シーン', href: '/scene/after-work' },
              { label: '慢性疲労・体のだるさ', href: '/symptom/chronic-fatigue' },
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
              { label: 'メニュー・料金', href: '/menu' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="border border-sand-300 px-3 py-1.5 text-stone-700 hover:border-brown-300 hover:text-brown-500 transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">ご予約はこちらから</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業・当日予約OK。<br />
            君津のリラクゼーションサロン MARISA。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton href="/menu" label="メニューを見る" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
