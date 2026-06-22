import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '女性のお客様へ・もみほぐし・ヘッドケア｜MARISA 君津店',
  description: '君津の女性向けもみほぐしならMARISA。肩こり・冷え・眼精疲労・むくみのお悩みに。清潔感のある環境・施術着完備。女性に人気のヘッドセット・足つぼセットも。',
  keywords: ['君津 女性 マッサージ', '君津 レディース もみほぐし', '君津 女性 リラクゼーション'],
  openGraph: {
    title: '女性のお客様へ・もみほぐし・ヘッドケア｜MARISA 君津店',
    description: '女性に安心の環境でもみほぐし。君津MARISA。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/scene/ladies' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '女性一人でも利用しやすいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、女性お一人でのご利用も大歓迎です。清潔感のある環境を整えており、施術着もご用意しております。安心してお越しいただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '冷えやむくみが気になっているのですが、相談できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '施術前にスタッフへお気軽にお申し付けください。気になる部位や症状をお聞きした上で施術いたします。足のむくみには足つぼセット、全体的なケアにはもみほぐしがおすすめです。',
      },
    },
    {
      '@type': 'Question',
      name: '施術着は用意してありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、施術着をご用意しております。お着替えいただいてから施術を受けていただけますので、仕事帰りや外出途中でもお気軽にお越しいただけます。',
      },
    },
  ],
}

export default function SceneLadiesPage() {
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
              { label: '女性のお客様へ' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">For Ladies</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              女性のお客様に安心していただける環境を
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              女性に多い肩こり・冷え・眼精疲労・むくみのお悩みに、丁寧にアプローチします。清潔感のある環境と施術着完備で、安心してお過ごしいただけます。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Women's Concerns" ja="女性に多いお悩み" lead="こんなつらさを感じていませんか" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              デスクワークやスマートフォンの使いすぎによる肩こり・首のこわばりは、女性のお客様に非常に多いお悩みです。特に30〜40代の働く女性から多くご相談いただいています。
            </p>
            <p>
              また、冷えによる足のだるさ・むくみも女性に多く見られます。長時間立ち仕事をされている方や、デスクワークで同じ姿勢が続く方は、夕方になると足が重くなりやすくなります。
            </p>
            <p>
              パソコンや細かい作業が続く方には眼精疲労も深刻な悩みです。目の疲れは頭の重さや肩こりとも連動しており、ヘッドケアと組み合わせることで全体的な負担をやわらげやすくなります。
            </p>
            <p>
              育児や家事と仕事を両立している方にとっては、「自分のためだけの時間」がほとんどない、という状況も少なくありません。MARISAでの時間を、自分をいたわる特別なひとときにしていただければと思います。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Environment" ja="安心できる環境" lead="女性が過ごしやすい空間" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAは清潔感を大切にしており、施術スペースは常に清潔な状態を保っています。施術着もご用意しておりますので、仕事帰りや外出途中でもお気軽にお越しいただけます。
            </p>
            <p>
              施術は個別のスペースで行いますので、他のお客様の目を気にせずリラックスしていただけます。照明を落とした落ち着いた空間で、ゆっくりとお過ごしください。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Popular Menu" ja="女性に人気のメニュー" lead="お悩みに合わせてお選びください" />
          <div className="mt-8 space-y-4">
            <div className="border border-sand-200 bg-sand-100 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">ヘッドセット 60分 ¥5,000〜</p>
              <p className="text-sm text-stone-700 leading-loose">
                眼精疲労・頭の重さが気になる方に人気。もみほぐしとヘッドケアのセットで、肩から頭頂部までトータルにアプローチします。
              </p>
            </div>
            <div className="border border-sand-200 bg-sand-100 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">足つぼセット ¥5,500〜</p>
              <p className="text-sm text-stone-700 leading-loose">
                足のむくみ・だるさに悩む女性に好評。足裏へのアプローチで体全体のリラクゼーション感が深まります。
              </p>
            </div>
            <div className="border border-sand-200 bg-sand-100 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">60分もみほぐし ¥4,500〜</p>
              <p className="text-sm text-stone-700 leading-loose">
                全身をバランスよくケアしたい方に。肩・背中・腰・脚をひと通りほぐせる定番コース。初めての方にもおすすめです。
              </p>
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
