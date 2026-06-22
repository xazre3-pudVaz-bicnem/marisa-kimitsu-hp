import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の眼精疲労・頭の重さのケア｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」の眼精疲労・ヘッドケア。PC・スマホ・ブルーライトによる目の疲れや頭の重さを、ヘッドケアで整えます。当日予約OK・夜0時まで営業。',
  keywords: ['君津 眼精疲労', '君津 ヘッドスパ', '君津 頭 重い', '君津 目の疲れ ケア'],
  openGraph: {
    title: '君津の眼精疲労・頭の重さのケア｜MARISA 君津店',
    description: '千葉県君津市のリラクゼーションサロン「MARISA」の眼精疲労・ヘッドケア。PC・スマホによる目の疲れや頭の重さを、ヘッドケアで整えます。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/symptom/eye-fatigue' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '眼精疲労のケアにはどのコースがおすすめですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '眼精疲労には「ヘッドケア30分」または「ヘッドセットコース（60分〜）」がおすすめです。目の周りの筋肉・側頭部・後頭部をほぐすことで、目の疲れや頭の重さがやわらぎやすくなります。肩こりも伴う場合はヘッドセットコースで首・肩・頭をまとめてケアすることをおすすめします。',
      },
    },
    {
      '@type': 'Question',
      name: 'ヘッドケアは髪を濡らしますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'いいえ、MARISAのヘッドケアは髪を水で濡らしません。ドライな状態で行う施術のため、施術後もそのままお帰りいただけます。仕事帰りや外出前でも、ヘアスタイルを気にせずご利用いただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '眼精疲労には医療的な治療が必要ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MARISAのヘッドケアはリラクゼーション施術であり、医療行為ではありません。視力の問題・眼の疾患・頭痛の原因となる疾患などには対応できません。目の見え方に変化がある・頭痛が強くある場合は眼科や内科などの医療機関を受診してください。リラクゼーションとして、日常的な目や頭の疲れのケアにご活用ください。',
      },
    },
    {
      '@type': 'Question',
      name: 'ヘッドケアで頭以外もほぐしてもらえますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ヘッドケア単体（30分）は頭皮・側頭部・眼周りが中心です。首・肩もまとめてほぐしたい場合は、もみほぐしとヘッドケアを組み合わせたヘッドセットコース（60分・90分・120分）をおすすめします。眼精疲労と肩こりが両方つらい方にはセットコースが人気です。',
      },
    },
  ],
}

const causes = [
  {
    title: 'PC・モニター作業',
    desc: '長時間モニターを見続けると、眼球を動かす筋肉（外眼筋）や、ピントを調節する筋肉（毛様体筋）が疲弊します。また、モニター作業中はまばたきの回数が減少するため、目の乾燥も重なり眼精疲労を悪化させます。',
  },
  {
    title: 'スマートフォンの長時間使用',
    desc: 'スマートフォンの画面はモニターに比べて小さく、近い距離で細かい文字や映像を見ることが多いため、目への負担が特に大きいとされています。また、暗い場所での使用や就寝前のスマホは、目の疲れに加えて睡眠の質にも影響します。',
  },
  {
    title: 'ブルーライトの影響',
    desc: 'LED照明やデジタルデバイスから放出されるブルーライトは、波長が短く散乱しやすいため目が多くのエネルギーを使います。長時間浴び続けることで眼精疲労が蓄積しやすくなり、頭の重さや疲れにもつながりやすいといわれています。',
  },
  {
    title: '集中による眼の酷使',
    desc: 'デザイン・編集・校正・運転など、視覚的な集中力が必要な作業を続けると、目まわりの筋肉だけでなく側頭部・後頭部の筋肉も緊張します。これが頭の重さ・目の奥の痛み・首こりへとつながります。',
  },
]

const connections = [
  {
    area: '側頭部・こめかみ',
    desc: '側頭筋は目の動きを支える筋肉と間接的につながっています。こめかみを押すと楽になる頭の重さの多くは、この側頭筋の緊張が関与しています。',
  },
  {
    area: '後頭部・首',
    desc: '後頭部の筋肉（後頭下筋群）は首の筋肉とつながり、目の動きとも連動しています。後頭部がこると視界がぼんやりしたり、目の疲れが増したりすることがあります。',
  },
  {
    area: '目まわり（眼輪筋）',
    desc: '目の周りを取り囲む眼輪筋は、長時間の集中作業で緊張します。眼輪筋の緊張は目の充血・重さ・ドライアイ感などを引き起こしやすく、ヘッドケアでやさしくアプローチします。',
  },
]

const faqs = [
  {
    q: '眼精疲労のケアにはどのコースがおすすめですか？',
    a: '眼精疲労には「ヘッドケア30分」または「ヘッドセットコース」がおすすめです。目の周りの筋肉・側頭部・後頭部をほぐすことで、目の重さや疲れ感がやわらぎやすくなります。肩こりも伴う場合はヘッドセットコースで首・肩・頭をまとめてケアすることをおすすめします。',
  },
  {
    q: 'ヘッドケアは髪を濡らしますか？',
    a: 'いいえ、MARISAのヘッドケアは水を使わないドライの施術です。施術後もヘアスタイルをキープしたままお帰りいただけます。仕事帰りや外出前でも安心してご利用ください。',
  },
  {
    q: '眼精疲労には医療的な治療が必要ですか？',
    a: 'MARISAのヘッドケアはリラクゼーション施術であり、眼の疾患の治療にはなりません。目の見え方に変化がある・頭痛がひどいなどの症状がある場合は、眼科や内科へご相談ください。日常的な目や頭の疲れのリセットとしてご活用ください。',
  },
  {
    q: 'ヘッドケアで頭以外もほぐしてもらえますか？',
    a: 'ヘッドケア単体（30分）は頭・眼周りが中心ですが、もみほぐしと組み合わせたヘッドセットコース（60分・90分・120分）では首・肩・背中とヘッドケアをセットでケアできます。眼精疲労と肩こりが両方気になる方にはセットコースが特に人気です。',
  },
]

export default function EyeFatiguePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ===== Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'お悩み別', href: '/symptom' },
              { label: '眼精疲労・頭の重さ' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Eye & Head Care</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800">
              目の疲れ・頭の重さを、ヘッドケアで整える
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「目が重い」「頭がぼんやりする」「こめかみが張っている」——デジタル機器が生活の中心となった現代では、目と頭への疲れを日常的に感じる方が増えています。MARISAでは、頭皮・側頭部・眼周りをほぐすヘッドケアで、目と頭の疲れを整えます。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Visual ===== */}
      <section className="bg-stone-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-0.5">
            <div className="relative aspect-[16/7] overflow-hidden">
              <Image src="/LINE_ALBUM_もみほぐしMARISA_260615_25.jpg" alt="君津 眼精疲労 ヘッドケア 施術" fill className="object-cover" />
            </div>
            <div className="relative aspect-[16/7] overflow-hidden">
              <Image src="/LINE_ALBUM_もみほぐしMARISA_260615_26.jpg" alt="君津 頭の重さ ヘッドマッサージ" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Causes ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Causes"
            ja="眼精疲労・頭の重さの主な原因"
            lead="現代の生活環境は、目と頭部への負担が増え続けています。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {causes.map((c) => (
              <div key={c.title} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{c.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 prose-marisa max-w-3xl">
            <p>
              現代のオフィスワークやリモートワークでは、1日8時間以上モニターを見続けることも珍しくありません。プライベートでもスマートフォンの使用時間が増え続けており、目や頭への蓄積した疲れを感じている方は多いです。こまめな休憩をとることが理想ですが、仕事の都合で難しい場合も多く、定期的なヘッドケアで疲れをリセットすることが有効です。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Connections ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Connection"
            ja="頭・目・首の連動"
            lead="眼精疲労は目だけの問題ではなく、頭部全体の筋肉が関与しています。"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {connections.map((c) => (
              <div key={c.area} className="border border-sand-200 p-6 bg-cream-50">
                <p className="text-xs tracking-widest text-brown-400 uppercase mb-2">{c.area}</p>
                <p className="text-sm text-stone-700 leading-loose">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MARISA Approach ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Our Approach"
            ja="MARISAのヘッドケアアプローチ"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAのヘッドケアは、頭皮・側頭筋・後頭下筋群・眼輪筋など、頭部に存在する筋肉群を丁寧にほぐします。指先と手のひらを使い、心地よい圧で頭部全体にアプローチすることで、頭の重さ・目の疲れ感・こめかみの張りがやわらぎやすくなります。
            </p>
            <p>
              施術はドライ（水・シャンプーなし）で行います。専用ベッドにリラックスした姿勢で横になっていただき、目を閉じてゆっくり過ごしていただけます。照明を落とし、穏やかなBGMの中でリラックスしながら施術を受けていただけます。仕事帰りにも立ち寄りやすく、施術後はそのままお帰りいただけます。
            </p>
            <p>
              眼精疲労と肩こり・首こりが同時に気になる方には、ヘッドセットコースをおすすめします。もみほぐしでお体をほぐしながら、ヘッドケアで頭・目の疲れも同時にリセットできます。「体も頭も全部疲れている」という方に特に人気のコースです。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Recommended Menus ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menus"
            ja="眼精疲労・頭の重さにおすすめのメニュー"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Head Care</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">ヘッドケア 30分</h3>
              <p className="text-sm text-stone-700 leading-loose mb-4">頭皮・側頭部・眼周りを集中ケア。短時間でも目と頭の疲れをリセットできます。</p>
              <Link href="/menu/head" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
                ヘッドケアを見る →
              </Link>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Head Set</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">ヘッドセットコース</h3>
              <p className="text-sm text-stone-700 leading-loose mb-4">もみほぐし＋ヘッドケアの組み合わせ。肩こり・眼精疲労をまとめてケアしたい方に。</p>
              <Link href="/menu/set" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
                セットコースを見る →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Related Symptoms ===== */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 uppercase mb-6">Related Symptoms</p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: '首こり', href: '/symptom/neck' },
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-sand-200 bg-cream-50 py-4 px-6 text-sm text-stone-700 tracking-wide hover:border-brown-300 hover:text-brown-500 transition-colors"
              >
                {item.label}のお悩みへ →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="FAQ"
            ja="よくあるご質問"
          />
          <div className="mt-10 space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-sand-200 bg-cream-50 p-6">
                <p className="text-sm font-medium text-stone-800 mb-3 tracking-wide">
                  <span className="font-en text-brown-400 mr-2">Q.</span>
                  {faq.q}
                </p>
                <p className="text-sm text-stone-700 leading-loose pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">
            目の疲れ・頭の重さは、MARISAへ
          </h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業中・当日予約OK。<br />
            君津で眼精疲労・ヘッドケアをお探しの方は、ぜひMARISAにお越しください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton href="/menu/head" label="ヘッドケアのメニューを見る" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
