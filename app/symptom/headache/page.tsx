import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の頭痛・頭の重さのケア｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」の頭ケア。PC疲れ・眼精疲労・首コリからくる頭の重さや頭痛感をヘッドケアでやわらげます。当日予約OK・夜0時まで営業。',
  keywords: ['君津 頭痛', '君津 頭重感', '君津 ヘッドスパ', '君津 頭ケア'],
  openGraph: {
    title: '君津の頭痛・頭の重さのケア｜MARISA 君津店',
    description: '千葉県君津市のリラクゼーションサロン「MARISA」の頭ケア。PC疲れ・眼精疲労・首コリからくる頭の重さや頭痛感をヘッドケアでやわらげます。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/symptom/headache' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '頭の重さや頭痛感にはどのコースがおすすめですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '頭の重さには「ヘッドセットコース（60分）」がおすすめです。もみほぐしに頭皮・側頭部・後頭部のケアを組み合わせたコースで、首から頭にかけての緊張をまとめてほぐします。眼精疲労も気になる方に特に喜ばれています。',
      },
    },
    {
      '@type': 'Question',
      name: '頭痛がある状態でも施術を受けられますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '緊張型の頭の重さ・圧迫感がある場合はご利用いただけます。ただし、激しい頭痛・吐き気・発熱・視覚異常を伴う場合はまず医療機関を受診してください。当サロンはリラクゼーション施設であり、医療行為は行っておりません。施術前のカウンセリングでお体の状態を必ずお伝えください。',
      },
    },
    {
      '@type': 'Question',
      name: '頭ケアは頭皮を痛めませんか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ヘッドケアは頭皮への過度な刺激を避け、側頭筋・後頭筋・頭頂部など筋肉の緊張をほぐすアプローチです。圧の強さはお好みに合わせて調整できます。頭皮を傷めることなく、心地よい刺激でリラックスできます。',
      },
    },
  ],
}

const causes = [
  {
    title: 'PC・スマホ疲れ',
    desc: '長時間のPC作業やスマートフォン操作では、目を酷使するだけでなく、前傾姿勢が続きます。この姿勢が首や後頭部の筋肉に負担をかけ、頭の血流が滞ることで重だるさや締め付け感を引き起こしやすくなります。',
  },
  {
    title: 'ストレス・緊張',
    desc: '精神的なストレスや緊張状態が続くと、首・肩・頭まわりの筋肉が無意識のうちに緊張します。この筋肉の緊張が頭部への血流を低下させ、頭重感や圧迫感として感じられることがあります。',
  },
  {
    title: '眼精疲労との連動',
    desc: '目を動かす筋肉はこめかみ・後頭部と連動しています。眼精疲労が強くなると側頭部や後頭部の緊張が増し、頭全体が重く感じられることがあります。PC業務が多い方や運転が多い方に多く見られます。',
  },
  {
    title: '首コリとの連動',
    desc: '首の後ろの筋肉（後頭下筋群）は後頭部と直接つながっており、首がこると後頭部も引っ張られ、頭が重く感じやすくなります。首こりがひどい日に頭が重くなる方は、この連動が影響している可能性があります。',
  },
]

const faqs = [
  {
    q: '頭の重さや頭痛感にはどのコースがおすすめですか？',
    a: '頭の重さには「ヘッドセットコース（60分）」がおすすめです。もみほぐしに頭皮・側頭部・後頭部のケアを組み合わせたコースで、首から頭にかけての緊張をまとめてほぐします。眼精疲労も気になる方に特に喜ばれています。',
  },
  {
    q: '頭痛がある状態でも施術を受けられますか？',
    a: '緊張型の頭の重さ・圧迫感がある場合はご利用いただけます。ただし、激しい頭痛・吐き気・発熱・視覚異常を伴う場合はまず医療機関を受診してください。当サロンはリラクゼーション施設であり、医療行為は行っておりません。施術前のカウンセリングでお体の状態を必ずお伝えください。',
  },
  {
    q: '頭ケアは頭皮を痛めませんか？',
    a: 'ヘッドケアは頭皮への過度な刺激を避け、側頭筋・後頭筋・頭頂部など筋肉の緊張をほぐすアプローチです。圧の強さはお好みに合わせて調整できます。頭皮を傷めることなく、心地よい刺激でリラックスできます。',
  },
]

export default function HeadachePage() {
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
              { label: '頭痛・頭の重さ' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Head Care</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              頭が重い・頭痛感のあるときのヘッドケア
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「仕事中から頭が重い」「夕方になると頭が締め付けられる感じがする」——PC作業や長時間のデスクワークで首・肩・目を酷使する現代では、頭の重さや圧迫感を感じる方が増えています。MARISAでは、頭・首・肩の緊張をまとめてほぐすヘッドケアで、頭まわりの重さを軽く感じやすくします。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Causes ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Causes"
            ja="頭の重さ・頭痛感の主な原因"
            lead="頭の重さは多くの場合、首・肩・目の疲れと密接に関連しています。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
            {causes.map((c) => (
              <div key={c.title} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{c.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 max-w-3xl text-sm text-stone-700 leading-loose">
            <p>
              頭の重さ・頭痛感は、単独で起こるよりもPC疲れ・眼精疲労・首こり・ストレスが複合して現れることがほとんどです。根本の緊張を複数個所でほぐすことが、すっきり感を感じやすくするためのポイントになります。
            </p>
          </div>
        </div>
      </section>

      {/* ===== MARISA Approach ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Our Approach"
            ja="MARISAのヘッドケアアプローチ"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              頭の重さのケアでは、頭単体ではなく「首→肩→後頭部→側頭部→頭頂部」というつながりを意識して施術します。首と肩の緊張をゆるめてから頭部へアプローチすることで、ヘッドケアの心地よさをより感じやすくなります。
            </p>
            <p>
              側頭筋（こめかみ周辺）・後頭筋（後頭部）・前頭筋（額）など、頭部の筋肉はストレスや眼精疲労で緊張しやすい部位です。ゆっくりとした圧で筋肉の緊張をほぐし、頭まわりの血流を促します。
            </p>
            <p>
              医療行為ではありませんが、ヘッドケア後に「頭が軽く感じる」「目がすっきりした気がする」とおっしゃるお客様が多くいらっしゃいます。定期的なケアとしてご活用いただくことで、頭の重さを感じにくい状態を整えやすくなります。
            </p>
            <p className="border-l-2 border-brown-300 pl-4 text-stone-600 italic">
              ※ 強い頭痛・吐き気・発熱・視覚異常を伴う場合は医療機関へのご受診をお願いします。当サロンはリラクゼーション施設です。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Recommended Menus ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menus"
            ja="頭の重さにおすすめのメニュー"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Head Set</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">ヘッドセットコース</h3>
              <p className="text-sm text-stone-700 leading-loose mb-4">もみほぐし＋ヘッドケアのセットコース。60分¥5,000〜。首から頭にかけての緊張をまとめてケアできます。頭の重さ・眼精疲労・首こりが気になる方に。</p>
              <Link href="/menu/set" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
                セットコースを見る →
              </Link>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Head Care</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">ヘッドケア単体</h3>
              <p className="text-sm text-stone-700 leading-loose mb-4">頭・頭皮・側頭部・後頭部を集中的にほぐします。「頭だけ集中してケアしたい」という方はこちら。もみほぐしとの組み合わせも可能です。</p>
              <Link href="/menu/head" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
                ヘッドケアを見る →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="FAQ" ja="よくあるご質問" />
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

      {/* ===== Related links ===== */}
      <section className="py-12 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: '眼精疲労・頭の重さ', href: '/symptom/eye-fatigue' },
              { label: '首こりのお悩み', href: '/symptom/neck' },
              { label: 'ヘッドケアメニュー', href: '/menu/head' },
              { label: 'セットコース', href: '/menu/set' },
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="border border-sand-300 px-3 py-1.5 text-stone-700 hover:border-brown-300 hover:text-brown-500 transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">
            頭の重さが気になったら、MARISAへ
          </h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業中・当日予約OK。<br />
            君津のリラクゼーションサロン MARISAへ。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton href="/menu/head" label="ヘッドケアメニューを見る" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
