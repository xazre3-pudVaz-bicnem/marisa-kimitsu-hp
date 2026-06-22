import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '男性のお客様歓迎・もみほぐし｜MARISA 君津店',
  description: '君津の男性向けもみほぐしならMARISA。肩こり・腰のつらさ・デスクワーク疲れ・運転疲れに対応。男性も通いやすい清潔な環境。夜0時まで営業・当日予約OK。',
  keywords: ['君津 男性 マッサージ', '君津 男性 もみほぐし', '君津 メンズ リラクゼーション'],
  openGraph: {
    title: '男性のお客様歓迎・もみほぐし｜MARISA 君津店',
    description: '君津の男性向けもみほぐしならMARISA。肩こり・腰のつらさに対応。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/scene/men' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '男性でも利用しやすい雰囲気ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、男性のお客様も多くご来店いただいています。リラクゼーションサロンは女性のイメージが強いかもしれませんが、MARISAでは男女問わず気軽にご利用いただける環境を整えております。お気軽にお越しください。',
      },
    },
    {
      '@type': 'Question',
      name: '肩こりや腰のつらさに対応してもらえますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、肩こりや腰のつらさを感じている方のご利用はとても多いです。施術前にお悩みをお伝えいただければ、その部位を重点的にケアいたします。強さのご希望もお気軽にお申し付けください。',
      },
    },
    {
      '@type': 'Question',
      name: '仕事終わりに行けますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'もちろんです。MARISAは夜0時まで営業しており、最終受付は23時です。仕事帰りに立ち寄っていただいても十分対応できますので、お気軽にご予約ください。',
      },
    },
  ],
}

export default function SceneMenPage() {
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
              { label: '男性のお客様へ' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">For Men</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              男性のお客様も大歓迎です
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「男性が入りにくいのでは」という心配は不要です。MARISAでは男性のお客様も多くいらっしゃいます。肩こり・腰のつらさ・疲れをしっかりほぐします。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Men's Concerns" ja="男性に多いお悩み" lead="こんなつらさを感じていませんか" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              デスクワークで長時間パソコンに向かい続けることで、肩や首が固まってしまっている男性は非常に多くいらっしゃいます。特に30〜50代の働き盛り世代に多く見られるお悩みです。
            </p>
            <p>
              また、長距離ドライバーや運転が多い職種の方には、背中・腰・足の疲れが蓄積しやすい傾向があります。運転中の同じ姿勢が続くことで、腰や臀部まわりに緊張が生じやすくなります。
            </p>
            <p>
              立ち仕事・肉体労働の方は、脚全体や腰への負担が大きく、就業後の疲労感が特に強く感じられることがあります。こうした方々がMARISAに立ち寄り、体を整えてから帰宅されるケースも多いです。
            </p>
            <p>
              「体がつらいのはわかっているけれど、なんとなくマッサージ店に入るのは恥ずかしい」という男性もいらっしゃいますが、ご安心ください。MARISAは男性のお客様も多く、普段着でお越しいただける気軽なリラクゼーション空間です。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Recommended" ja="男性におすすめのコース" lead="お悩みに合わせてお選びください" />
          <div className="mt-8 space-y-4">
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">60分もみほぐし ¥4,500〜</p>
              <p className="text-sm text-stone-700 leading-loose">
                全身をバランスよくケアできる定番コース。肩・背中・腰・脚をひと通りほぐすことができ、初めての方にもおすすめです。
              </p>
            </div>
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">90分もみほぐし ¥6,500〜</p>
              <p className="text-sm text-stone-700 leading-loose">
                体全体をじっくりほぐしたい方に。仕事終わりのまとまった疲れをリセットしたい方、週1〜2回のメンテナンスをお考えの方に人気です。
              </p>
            </div>
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">ヘッドセット 60分 ¥5,000〜</p>
              <p className="text-sm text-stone-700 leading-loose">
                目の疲れ・頭の重さが気になる方に。パソコン作業が多いエンジニアや事務職の男性から特に好評いただいています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Voice" ja="男性のお客様の声" lead="実際にご利用いただいた方から" />
          <div className="mt-8 space-y-4">
            <div className="border-l-2 border-brown-300 pl-5 py-2">
              <p className="text-sm text-stone-700 leading-loose">「最初は少し躊躇しましたが、入店してみたら普通に歓迎してもらえて安心しました。肩こりがかなり楽になり、今では月に一度は通っています。」（40代・会社員）</p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5 py-2">
              <p className="text-sm text-stone-700 leading-loose">「仕事帰りに寄れる時間帯なのがありがたい。23時まで受け付けてくれるので、残業後でも間に合います。」（30代・営業職）</p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5 py-2">
              <p className="text-sm text-stone-700 leading-loose">「腰が重くて困っていましたが、施術後は体が軽く感じやすくなりました。無料駐車場があるのも助かります。」（50代・運転業）</p>
            </div>
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
