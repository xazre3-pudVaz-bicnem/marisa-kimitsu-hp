import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'もみほぐし後のアフターケア・施術後の過ごし方｜MARISA 君津店',
  description: 'もみほぐし施術後の過ごし方・アフターケアを解説。水分補給、当日の注意事項、翌日の筋肉痛感への対処、定期利用時の体の変化について。君津MARISA。',
  keywords: ['もみほぐし 後 過ごし方', 'マッサージ 後 注意', 'もみほぐし アフターケア'],
  openGraph: {
    title: 'もみほぐし後のアフターケア・施術後の過ごし方｜MARISA 君津店',
    description: 'もみほぐし施術後の過ごし方・アフターケアを解説。MARISA 君津店。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/guide/after-care' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'もみほぐしの後に運動しても大丈夫ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '施術直後の激しい運動はお控えいただくことをおすすめします。施術によって筋肉がほぐれた状態は、普段より筋肉への刺激が伝わりやすい状態です。軽いウォーキング程度は問題ありませんが、激しいスポーツや筋トレは施術から数時間〜翌日以降が安心です。',
      },
    },
    {
      '@type': 'Question',
      name: '施術後にだるさや筋肉痛のような感覚が出ることはありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '施術後に一時的にだるさや「もみ返し」と呼ばれる筋肉痛のような感覚が出ることがあります。これは施術によって筋肉が刺激された際の自然な反応の場合があります。通常は1〜2日で落ち着きますが、強い場合や長引く場合はスタッフにご相談ください。',
      },
    },
    {
      '@type': 'Question',
      name: '施術後すぐにお風呂に入っても大丈夫ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '施術直後の長時間・高温の入浴は控えることをおすすめします。施術後は血流が促進されやすい状態のため、長時間の高温浴は体への負担となる場合があります。ぬるめのシャワーや、施術から数時間後の入浴が安心です。',
      },
    },
  ],
}

export default function GuideAfterCarePage() {
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
              { label: 'アフターケア' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Guide</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              施術後を上手に過ごすためのアフターケアガイド
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              もみほぐしの効果を最大限に感じるために、施術後の過ごし方が大切です。施術直後から翌日にかけての注意点とセルフケアをご紹介します。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="After Care" ja="施術直後にすること" lead="帰宅前・帰宅後すぐに" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              施術が終わったら、まず水分を補給することをおすすめします。もみほぐしによって筋肉が刺激され、老廃物が動きやすくなるため、水分補給がその排出をスムーズにするとされています。お帰りの際はお水やお茶をお飲みいただくと良いでしょう。
            </p>
            <p>
              施術後は急に立ち上がらず、ゆっくりと体を起こしてください。施術中はうつ伏せで長時間静止している場合があるため、急に立ち上がると立ちくらみのような感覚が起こることがあります。施術後は施術台に座った状態でしばらく落ち着いてからご移動いただくと安心です。
            </p>
            <p>
              施術後すぐにスマートフォンを長時間操作したり、パソコン作業に戻ったりすることは、せっかくほぐれた肩・首の筋肉が再び緊張しやすくなる原因になります。できれば施術後しばらくはゆったりとお過ごしいただくことをおすすめします。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Caution" ja="当日の注意事項" lead="避けた方が良いこと" />
          <div className="mt-8 space-y-4">
            <div className="bg-cream-50 border border-sand-200 p-5">
              <div className="flex items-start gap-3">
                <span className="font-en text-brown-400 text-xs font-medium mt-0.5 shrink-0">01</span>
                <div>
                  <p className="text-sm font-medium text-stone-800 mb-1">激しい運動・スポーツは控える</p>
                  <p className="text-xs text-stone-700 leading-loose">施術によって筋肉がほぐれた状態は刺激を受けやすいため、激しい運動は筋肉への過剰な負担になりやすいです。軽いウォーキングは問題ありませんが、ジムや激しいスポーツは翌日以降に。</p>
                </div>
              </div>
            </div>
            <div className="bg-cream-50 border border-sand-200 p-5">
              <div className="flex items-start gap-3">
                <span className="font-en text-brown-400 text-xs font-medium mt-0.5 shrink-0">02</span>
                <div>
                  <p className="text-sm font-medium text-stone-800 mb-1">長時間・高温の入浴は控える</p>
                  <p className="text-xs text-stone-700 leading-loose">施術後の血流が促されやすい状態で長時間の高温浴を行うと、体への負担となる場合があります。当日はぬるめのシャワーや短時間の入浴をおすすめします。</p>
                </div>
              </div>
            </div>
            <div className="bg-cream-50 border border-sand-200 p-5">
              <div className="flex items-start gap-3">
                <span className="font-en text-brown-400 text-xs font-medium mt-0.5 shrink-0">03</span>
                <div>
                  <p className="text-sm font-medium text-stone-800 mb-1">アルコールの大量摂取は避ける</p>
                  <p className="text-xs text-stone-700 leading-loose">施術後のアルコールは体への負担となる場合があります。施術後すぐの飲酒や大量摂取はお控えいただくことをおすすめします。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Next Day" ja="翌日の筋肉痛感への対処" lead="もみ返しが出た場合" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              施術後、翌日に筋肉痛のような感覚（いわゆる「もみ返し」）が出ることがあります。これは施術によって筋肉が強く刺激された場合に起こることがあります。特に久しぶりの施術の後や、強い圧での施術後に出やすいとされています。
            </p>
            <p>
              もみ返しが出た場合の対処法としては、無理せずゆっくり休むことが基本です。軽いストレッチや温めることで血流を促し、回復を助けやすくなります。通常は1〜2日程度で自然に落ち着きます。
            </p>
            <p>
              もみ返しが強い場合や数日経っても続く場合は、次回の施術時にスタッフへお伝えください。施術の強さや方法を調整いたします。もみ返しを防ぐためには、施術の強さを適切に設定することが大切ですので、遠慮なくご要望をお伝えください。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Regular Use" ja="定期的に通う場合の体の変化" lead="続けることで変わること" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              定期的にもみほぐしをご利用いただくことで、体の変化に気づきやすくなります。「以前は施術後すぐに元に戻っていたが、だんだん持続しやすくなった」というお声をいただくことがあります。
            </p>
            <p>
              また、定期的にご利用いただくことで、スタッフもお客様の体の特徴を把握しやすくなります。「右肩が固まりやすい」「腰の左側が緊張しやすい」といった体のクセを踏まえた施術ができるようになります。
            </p>
            <p>
              施術とあわせて、日常生活の中でのセルフケア（定期的なストレッチ、長時間同じ姿勢を続けないこと、適度な運動など）を組み合わせることで、体のコンディションを整えやすくなります。
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
              { label: 'はじめての方へ', href: '/first' },
              { label: 'もみほぐしの頻度', href: '/guide/frequency' },
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
