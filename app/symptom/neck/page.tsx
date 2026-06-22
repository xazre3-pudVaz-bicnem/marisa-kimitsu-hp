import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の首こり・首の張りのケア｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」の首こりケア。前傾姿勢・スマホ首・デスクワークによる首の張りやこわばりを、もみほぐしで和らげます。当日予約OK・夜0時まで営業。',
  keywords: ['君津 首こり', '君津 首 マッサージ', '君津 首こり ケア', '君津 スマホ首'],
  openGraph: {
    title: '君津の首こり・首の張りのケア｜MARISA 君津店',
    description: '千葉県君津市のリラクゼーションサロン「MARISA」の首こりケア。前傾姿勢・スマホ首・デスクワークによる首の張りやこわばりを、もみほぐしで和らげます。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/symptom/neck' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '首こりにはどのコースがおすすめですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '首こりには「もみほぐし60分」か、首・頭を合わせてケアできる「ヘッドセットコース」がおすすめです。首こりは肩や後頭部との連動が深いため、首だけでなく周辺の筋肉もまとめてほぐせるコースが効果的です。',
      },
    },
    {
      '@type': 'Question',
      name: '首の施術は痛くありませんか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '施術は圧の強さを調整しながら行いますので、痛みが出ないよう丁寧に進めます。首は繊細な部位のため、お体の状態を確認しながら施術します。「心地よい圧」を基本にしていますので、気になる場合はいつでもお申し付けください。',
      },
    },
    {
      '@type': 'Question',
      name: '首こりと頭痛は関係していますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '緊張型頭痛の多くは、首・肩・後頭部の筋肉の緊張が関係しているといわれています。医療行為ではありませんが、首周りの緊張をほぐすことで頭の重さや圧迫感がやわらぐことがあります。頭痛が強い・頻繁に起こる場合は医療機関へのご相談もあわせてご検討ください。',
      },
    },
    {
      '@type': 'Question',
      name: 'スマホ首（ストレートネック）にも対応できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、スマホの使いすぎや前傾姿勢が続くことで首の筋肉が疲弊している方にも対応しています。ストレートネックそのものを医療的に矯正するものではありませんが、首まわりの筋肉の緊張をほぐし、首が動きやすくなるようにケアします。',
      },
    },
  ],
}

const causes = [
  {
    title: '前傾姿勢・うつむき姿勢',
    desc: 'パソコン作業やスマートフォン操作のとき、頭を前に突き出す姿勢になりがちです。頭の重さは約4〜6kgあるため、うつむくほど首にかかる負荷は何倍にも増えます。この姿勢が長く続くと、首の後ろの筋肉が慢性的に引き伸ばされた状態になり、こわばりや張りを生じます。',
  },
  {
    title: 'スマホ首（ストレートネック）',
    desc: '本来、首の骨（頸椎）は緩やかなカーブを描いています。スマートフォンを長時間見続けることで、このカーブが失われストレートになる状態を「スマホ首」または「ストレートネック」と呼びます。首の自然なカーブが失われると、衝撃の吸収が難しくなり、首への負担が増します。',
  },
  {
    title: '長時間のデスクワーク',
    desc: '会社でのパソコン業務など、長時間同じ姿勢で作業を続けると首の筋肉が固まります。定期的に体を動かせない環境では、首のこわばりが蓄積しやすく、慢性的な首こりへとつながります。休憩が少ない業種・職種の方に首こりのお悩みが多い傾向があります。',
  },
]

const connections = [
  {
    area: '後頭部・頭皮',
    desc: '首の後ろの筋肉（後頭下筋群）は、頭皮や後頭部と直接つながっています。首がこると後頭部の緊張が増し、頭の重さや締め付け感を感じやすくなります。',
  },
  {
    area: '肩・肩甲骨',
    desc: '首から肩にかけての僧帽筋は一枚の大きな筋肉です。首がこると必然的に肩にも影響が及び、肩こりと首こりが同時に生じることが多いです。',
  },
  {
    area: '目・眼精疲労',
    desc: '眼球を動かす筋肉は、こめかみや後頭部の筋肉と連動しています。首こりがひどいと眼精疲労が悪化しやすく、目の疲れが首の緊張をさらに強める悪循環になることがあります。',
  },
]

const faqs = [
  {
    q: '首こりにはどのコースがおすすめですか？',
    a: '首こりには「もみほぐし60分」または「ヘッドセットコース」がおすすめです。首は肩・後頭部と連動しているため、首だけでなく周辺をまとめてほぐせるコースが効果的です。頭の重さや目の疲れも気になる方は、もみほぐしとヘッドケアを組み合わせたヘッドセットコースをぜひお試しください。',
  },
  {
    q: '首の施術は痛くありませんか？',
    a: '施術前のカウンセリングでお体の状態と圧の好みをお聞きし、無理のない範囲で行います。首は繊細な部位のため、強すぎない適切な圧で丁寧にほぐします。施術中に「強すぎる」「痛い」と感じた場合はすぐにお申し付けください。いつでも調整します。',
  },
  {
    q: '首こりと頭痛は関係していますか？',
    a: '緊張型頭痛と呼ばれる頭痛は、首・肩・後頭部の筋肉の緊張が原因のひとつとされています。もみほぐしは医療行為ではありませんが、首周りの緊張をほぐすことで頭の重さや圧迫感がやわらぐことがあります。頭痛の症状が強い場合は医療機関のご受診もあわせてご検討ください。',
  },
  {
    q: 'スマホ首（ストレートネック）にも対応できますか？',
    a: 'はい、スマートフォンや前傾姿勢による首の筋肉疲弊に対応しています。ストレートネック自体を医療的に矯正するものではありませんが、首まわりの筋肉の緊張をほぐすことで、首が動きやすく感じやすくなります。日常的なケアとしてご活用ください。',
  },
]

export default function NeckPage() {
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
              { label: '首こり' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Neck Stiffness</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800">
              首のこわばりや張りを、もみほぐしと丁寧なケアで和らげる
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「首が回りにくい」「首の後ろが張っている」「頭が重く感じる」——現代のデスクワーク・スマートフォン社会では、首に慢性的な負担を抱えている方が増えています。MARISAでは、首・肩・後頭部を一体としてほぐし、首のこわばりや張りをやわらげます。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Visual ===== */}
      <section className="bg-stone-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-0.5">
            <div className="relative aspect-[16/7] overflow-hidden">
              <Image src="/LINE_ALBUM_もみほぐしMARISA_260615_7.jpg" alt="君津 首こり もみほぐし 肩・首の施術" fill className="object-cover" />
            </div>
            <div className="relative aspect-[16/7] overflow-hidden">
              <Image src="/LINE_ALBUM_もみほぐしMARISA_260615_16.jpg" alt="君津 首の張り ケア 頸部ほぐし" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Causes ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Causes"
            ja="首こりの主な原因"
            lead="首こりの背景には、現代の生活習慣が深く関わっています。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {causes.map((c) => (
              <div key={c.title} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{c.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 prose-marisa max-w-3xl">
            <p>
              これらの原因が重なることで、首の筋肉は慢性的な緊張状態に置かれます。仕事でもプライベートでも画面を見る時間が長い現代では、首への負担を完全になくすことは難しいため、定期的なケアで緊張をリセットすることが大切です。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Connections ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Connection"
            ja="首と体の各部位のつながり"
            lead="首のこわばりは、頭・肩・目など体全体に影響を与えます。"
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
            ja="MARISAの首こりへのアプローチ"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              首こりへのアプローチでは、首の後ろを単独でほぐすだけでなく、肩・肩甲骨・後頭部との連動を意識しながら施術します。首の筋肉は肩や背中の筋肉と一体でつながっているため、周辺全体を整えることで首のこわばりがやわらぎやすくなります。
            </p>
            <p>
              施術は専用ベッドのうつ伏せ姿勢で、後頭下筋群・頸部の筋肉群・僧帽筋（上部）・肩甲挙筋など、首こりに関わる筋肉を丁寧にほぐします。首は非常に繊細な部位のため、過度な強さは避け、心地よい範囲で筋肉の緊張をほぐすことを心がけています。
            </p>
            <p>
              眼精疲労が伴う首こりには、ヘッドケアとのセットコースが特に有効です。目の周りの筋肉や側頭部も同時にほぐすことで、首から頭にかけてのすっきり感をより感じやすくなります。カウンセリングの際にご相談ください。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Recommended Menus ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menus"
            ja="首こりにおすすめのメニュー"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Body Care</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">もみほぐし</h3>
              <p className="text-sm text-stone-700 leading-loose mb-4">首・肩・背中をまとめてほぐします。首こりが中心のお悩みには60分コースが最適です。</p>
              <Link href="/menu/body-care" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
                もみほぐしを見る →
              </Link>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Head Set</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">ヘッドセットコース</h3>
              <p className="text-sm text-stone-700 leading-loose mb-4">もみほぐしにヘッドケアを組み合わせたコース。首から頭にかけての疲れをまとめてケアできます。</p>
              <Link href="/menu/head" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
                ヘッドケアを見る →
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
              { label: '肩こり', href: '/symptom/stiff-shoulder' },
              { label: '眼精疲労・頭の重さ', href: '/symptom/eye-fatigue' },
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
            首こりのお悩みは、MARISAへ
          </h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業中・当日予約OK。<br />
            君津で首こりケアをお探しの方は、ぜひMARISAにお越しください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton href="/menu/body-care" label="もみほぐしのメニューを見る" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
