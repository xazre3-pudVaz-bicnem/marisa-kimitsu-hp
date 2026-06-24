import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '就寝前・夜のリラックスケア｜MARISA 君津店',
  description: '君津で就寝前・夜のリラックスケアならMARISA。体の緊張をほぐして眠りやすい状態に。ヘッドセット・もみほぐし60分が人気。夜0時まで営業・最終受付23時。当日予約OK。',
  keywords: ['君津 寝る前 マッサージ', '君津 就寝前 もみほぐし', '君津 夜 リラックス ケア', '君津 眠りやすくなる マッサージ'],
  openGraph: {
    title: '就寝前・夜のリラックスケア｜MARISA 君津店',
    description: '就寝前に体をほぐして眠りやすい状態に。夜0時まで営業・最終受付23時。君津MARISA。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/scene/before-sleep' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '就寝前にほぐしてもらうと眠れますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '体の緊張がほぐれると、自然とリラックスしやすい状態になります。「施術後に帰宅してすぐ眠れた」というお声を多くいただいています。ただし個人差がありますので、ご自身の体の状態をご確認ください。',
      },
    },
    {
      '@type': 'Question',
      name: '夜遅い時間でも受けられますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、最終受付は23:00です。23時からでも60分コースをしっかり受けていただけます。夜0時まで営業していますので、仕事帰りの遅い時間でも安心してお越しください。',
      },
    },
    {
      '@type': 'Question',
      name: '施術後すぐ帰れますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、施術後はお着替えいただいてすぐにお帰りいただけます。施術後の体が温まった状態のままご帰宅いただき、そのままリラックスした状態で就寝いただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '施術中に眠くなっても大丈夫ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、施術中に眠くなる方も多くいらっしゃいます。うとうとされながら施術を受けていただいてまったく問題ありません。体がリラックスしているサインですので、安心してお任せください。',
      },
    },
    {
      '@type': 'Question',
      name: 'どのコースが就寝前に向いていますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '頭・首・肩の緊張をほぐしたい方にはヘッドセット60分がおすすめです。全身をほぐしてリラックスしたい方にはもみほぐし60分が人気です。どちらも施術後にリラックスしやすい状態になりやすく、就寝前のケアとして多くの方に選ばれています。',
      },
    },
  ],
}

export default function SceneBeforeSleepPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: '地域・シーン別', href: '/area/kimitsu' }, { label: '就寝前・夜のケアに' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Before Sleep</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              就寝前に体をほぐして、ゆっくり眠る
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              体の緊張をほぐしてリラックスした状態で帰宅→そのまま就寝。夜0時まで営業・最終受付23時のMARISAなら、仕事帰りの夜遅い時間でも就寝前のケアが実現できます。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Before Sleep" ja="就寝前のほぐしが効果的な理由" lead="体の緊張と眠りの関係" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              仕事や日常の疲れで体が緊張したままの状態で眠ろうとすると、なかなかリラックスできないことがあります。筋肉の緊張が続いていると、横になっても体の重さや張りが気になり、深く眠りに入りにくくなることがあります。
            </p>
            <p>
              就寝前にもみほぐしを受けることで、体の緊張をほぐし、リラックスしやすい状態に整えることができます。施術中はゆっくりとした環境の中で体をほぐしていただき、施術後は体が温まった状態になります。そのまま帰宅してベッドに入ることで、リラックスした状態で休みやすくなります。
            </p>
            <p>
              特に首・肩・頭まわりのほぐしは、頭の重さや緊張をやわらげやすくするとして多くのお客様に喜ばれています。眠る前のルーティンにMARISAでのもみほぐしを取り入れることで、一日の疲れをリセットする習慣が生まれます。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Why MARISA" ja="MARISAが就寝前ケアに選ばれる理由" lead="夜0時まで営業している安心感" />
          <div className="mt-10 grid gap-5">
            {[
              {
                title: '最終受付23時・夜0時まで営業',
                body: '仕事帰りや夜の帰宅途中でもお気軽にご来店いただけます。「何時まで大丈夫か」という心配が不要な、夜遅い時間帯にも対応したサロンです。',
              },
              {
                title: '施術後すぐ帰宅できる',
                body: '施術が終わったらお着替えしてすぐにお帰りいただけます。施術後の体が温まった状態のままご帰宅いただき、そのまま就寝できます。',
              },
              {
                title: '照明を落とした落ち着いた空間',
                body: '就寝前のご利用を想定して、落ち着いた雰囲気の空間でリラックスしやすい環境をご用意しています。施術中に眠くなっても大丈夫です。',
              },
              {
                title: '無料駐車場で夜も安心',
                body: '店舗前に無料駐車場があります。夜遅い時間でもお車で安心してお越しいただけます。',
              },
            ].map((item, i) => (
              <div key={i} className="bg-cream-50 border border-sand-200 p-6">
                <p className="font-medium text-stone-800 mb-2 tracking-wide text-sm">{item.title}</p>
                <p className="text-sm text-stone-700 leading-loose">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Recommended" ja="就寝前におすすめのコース" lead="体をリラックス状態に整えるために" />
          <div className="mt-8 space-y-4">
            <div className="bg-sand-100 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">ヘッドセット 60分〜（頭をほぐして眠りやすく）</p>
              <p className="text-sm text-stone-700 leading-loose">
                就寝前に特に人気のコースです。頭・首・肩のセットで、仕事や思考で張り詰めた頭まわりの緊張をほぐします。施術後に「頭が軽くなってリラックスできた」という声を多くいただいています。
              </p>
            </div>
            <div className="bg-sand-100 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">もみほぐし 60分前後</p>
              <p className="text-sm text-stone-700 leading-loose">
                全身をほぐしてリラックスしたい方に。60分は仕事帰りにちょうどよいボリューム感で、全身のケアができます。体全体の疲れをリセットしてから眠りたい方におすすめです。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Night Routine" ja="就寝前ルーティンの作り方" lead="体のケアを習慣にするヒント" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              週に1〜2回のご利用で、「体が軽く感じやすい日が増えた」というお客様の声もいただいています。ぜひご自身の体の変化を体験してみてください。
            </p>
            <p>
              就寝前のルーティンに組み込む方法として、「仕事の帰りに寄る」「週1回の締めくくりに」というパターンが人気です。ホットペッパービューティーから事前予約をしておくと、その日に「やっぱり行かなくていいかな」とならずに続けやすくなります。
            </p>
            <p>
              施術後はそのまま帰宅して、ゆっくり入浴・就寝というルーティンを持っているリピーターのお客様も多くいらっしゃいます。夜のもみほぐしを「1日の締めくくり」として定期利用されている方にもおすすめです。
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
              { label: '夜遅くでも使える', href: '/scene/night' },
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
              { label: 'メニュー・料金', href: '/menu' },
              { label: 'よくある質問', href: '/faq' },
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
