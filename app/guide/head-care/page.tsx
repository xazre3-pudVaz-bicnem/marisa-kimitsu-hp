import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'ヘッドケアとは？ヘッドスパとの違いと期待できること｜MARISA 君津店',
  description: 'ヘッドケアとヘッドスパの違いをわかりやすく解説。ドライヘッドスパの特徴、眼精疲労・頭の重さとの関連、MARISAのヘッドケアの流れを紹介します。',
  keywords: ['ヘッドケア とは', 'ヘッドスパ 違い', '君津 ヘッドケア', '眼精疲労 ヘッドケア'],
  openGraph: {
    title: 'ヘッドケアとは？ヘッドスパとの違いと期待できること｜MARISA 君津店',
    description: 'ヘッドケアとヘッドスパの違い、眼精疲労との関連を解説。MARISA 君津店。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/guide/head-care' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'ヘッドケアとヘッドスパの違いは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ヘッドスパは主に頭皮への水分補給・栄養補給を目的とした美容施術で、シャンプーやトリートメントを使ったウェット施術が多いです。ヘッドケアはドライ（髪を濡らさない）で頭部・首・肩周りの筋肉をほぐすリラクゼーション施術です。MARISAのヘッドケアはドライ施術です。',
      },
    },
    {
      '@type': 'Question',
      name: 'ヘッドケアは眼精疲労に効果がありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '頭部・首筋の筋肉をほぐすことで、眼の周辺の緊張がやわらげやすくなり、眼精疲労感が軽く感じやすくなるというお声をいただいています。パソコンやスマートフォンの使いすぎで目や頭が疲れている方にご好評です。',
      },
    },
    {
      '@type': 'Question',
      name: 'ヘッドケアは髪が濡れますか？仕事帰りでも大丈夫ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MARISAのヘッドケアはドライ施術のため、髪が濡れることはありません。仕事帰りや外出途中でもお気軽にご利用いただけます。',
      },
    },
  ],
}

export default function GuideHeadCarePage() {
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
              { label: 'ヘッドケアとは' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Guide</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              ヘッドケアとは？ドライヘッドスパとの違いと期待できること
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「ヘッドスパ」と「ヘッドケア」——言葉は似ていますが、施術の内容は異なります。眼精疲労・頭の重さにお悩みの方へ、ヘッドケアの詳細を解説します。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="What is Head Care" ja="ヘッドケアとは" lead="頭・首・首筋へのリラクゼーション" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              ヘッドケアとは、頭部・頭皮・首・首筋（後頸部）にかけての筋肉をほぐすリラクゼーション施術です。手指を使って頭皮を丁寧にほぐしながら、頭蓋骨の周りについた筋肉の緊張をやわらげることを目的としています。
            </p>
            <p>
              頭には側頭筋・前頭筋・後頭筋など多くの筋肉があり、長時間のパソコン作業・スマートフォン操作・集中した作業などで緊張・疲弊しやすい部位です。また、首の後ろ側（僧帽筋・後頸筋群）の緊張は頭部への血液循環に影響しやすく、頭の重さや眼精疲労感との関連も指摘されています。
            </p>
            <p>
              ヘッドケアはリラクゼーション目的の施術であり、医療行為ではありません。「頭が重い」「目が疲れやすい」「頭皮が張っている気がする」という方のリフレッシュ目的でご利用いただくのが最も適した使い方です。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Dry vs Wet" ja="ドライ施術の特徴" lead="髪を濡らさないヘッドケア" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAのヘッドケアはドライ施術です。シャンプーやトリートメントを使用せず、乾いた状態で頭皮・頭部・首筋を施術します。
            </p>
            <p>
              ドライ施術の最大のメリットは「髪が濡れない」という点です。美容院のヘッドスパと異なり、施術後に髪を乾かす必要がなく、仕事帰りや外出の途中でも気軽に受けることができます。
            </p>
            <p>
              また、ドライ施術は頭皮への直接アプローチがしやすく、頭蓋骨周辺の筋肉をピンポイントでほぐすのに適しています。美容目的というよりも、リラクゼーション・疲労ケアを主目的とした方に向いています。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Eye Fatigue" ja="眼精疲労・頭の重さとの関連" lead="目の疲れは頭のケアから" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              現代社会では、多くの方がデジタルデバイスを長時間使用しています。パソコン・スマートフォン・タブレットの画面を長時間見続けることで、眼の周辺の筋肉だけでなく、頭部・首・肩の筋肉も緊張しやすくなります。
            </p>
            <p>
              眼精疲労（目の疲れ）は、目そのものの疲弊だけでなく、頭部や首の筋肉の緊張とも関連している場合があります。後頭部の筋肉が緊張すると、頭への血流が滞りやすくなり、頭が重く感じやすくなることがあります。
            </p>
            <p>
              ヘッドケアによって頭部・後頭部・首筋の筋肉をほぐすことで、眼精疲労感が軽減しやすくなったというお声を多くいただいています。「目の奥が疲れている」「頭が重くてスッキリしない」という方に特においすすめしています。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Flow" ja="MARISAのヘッドケアの流れ" lead="施術の基本的な流れ" />
          <div className="mt-8 space-y-4">
            <div className="flex gap-4 bg-cream-50 border border-sand-200 p-5">
              <span className="font-en text-brown-400 text-sm font-medium shrink-0">01</span>
              <div>
                <p className="text-sm font-medium text-stone-800 mb-1">カウンセリング</p>
                <p className="text-xs text-stone-700 leading-loose">施術前にお悩みと体の状態をお聞きします。どの部位を重点的にほぐしてほしいかをお伝えください。</p>
              </div>
            </div>
            <div className="flex gap-4 bg-cream-50 border border-sand-200 p-5">
              <span className="font-en text-brown-400 text-sm font-medium shrink-0">02</span>
              <div>
                <p className="text-sm font-medium text-stone-800 mb-1">首・肩のほぐし</p>
                <p className="text-xs text-stone-700 leading-loose">肩・首筋からアプローチし、頭頸部全体の血流を整えやすい状態に準備します。</p>
              </div>
            </div>
            <div className="flex gap-4 bg-cream-50 border border-sand-200 p-5">
              <span className="font-en text-brown-400 text-sm font-medium shrink-0">03</span>
              <div>
                <p className="text-sm font-medium text-stone-800 mb-1">頭部・頭皮のケア</p>
                <p className="text-xs text-stone-700 leading-loose">側頭部・後頭部・頭頂部をていねいにほぐします。頭蓋骨周辺の筋肉にアプローチします。</p>
              </div>
            </div>
            <div className="flex gap-4 bg-cream-50 border border-sand-200 p-5">
              <span className="font-en text-brown-400 text-sm font-medium shrink-0">04</span>
              <div>
                <p className="text-sm font-medium text-stone-800 mb-1">仕上げ</p>
                <p className="text-xs text-stone-700 leading-loose">全体のバランスを確認しながら仕上げます。施術後の感想・体の変化をお聞きします。</p>
              </div>
            </div>
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
              { label: 'ヘッドメニュー', href: '/menu/head' },
              { label: 'セットメニュー', href: '/menu/set' },
              { label: '眼精疲労のケア', href: '/symptom/eye-fatigue' },
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
