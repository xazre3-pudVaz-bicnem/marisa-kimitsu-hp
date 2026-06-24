import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, LINE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の眼精疲労・頭の重さケア｜MARISA 君津店',
  description:
    '君津市で眼精疲労・頭の重さでお悩みの方へ。MARISA 君津店のヘッドケア・ヘッドセットコースで、目の疲れ・頭皮のコリ・頭の重さをすっきり。15分¥2,000〜。当日予約OK・夜0時まで営業。',
  keywords: ['君津 眼精疲労', '君津 ヘッドスパ', '君津 頭痛 ケア', '君津 頭の重さ', '君津 ヘッドケア'],
  openGraph: {
    title: '君津の眼精疲労・頭の重さケア｜MARISA 君津店',
    description: '君津市で眼精疲労・頭の重さでお悩みの方へ。MARISA 君津店のヘッドケアで目の疲れ・頭の重さをすっきり。15分¥2,000〜。当日予約OK・夜0時まで営業。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/symptom/eye-fatigue' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'ヘッドケアで目の疲れに対応できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、MARISAのヘッドケアでは頭皮・側頭部・眼周り（眼輪筋）・後頭部をほぐします。目の疲れに関係する筋肉を直接アプローチすることで、目の重さや疲れ感がやわらぎやすくなります。医療行為ではありませんが、日常的な眼精疲労のリラクゼーションケアとしてご活用ください。',
      },
    },
    {
      '@type': 'Question',
      name: '15分と30分の違いは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ヘッドケア15分（¥2,000）は頭皮・側頭部をメインにした短時間のケアです。ヘッドケア30分（¥3,000）は15分に加え、後頭部・眼周りもじっくりほぐせます。目の疲れが強い場合・頭全体の重さが気になる場合は30分をおすすめします。',
      },
    },
    {
      '@type': 'Question',
      name: 'ヘッドセットとヘッドケア単体のどちらを選べばいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '目・頭だけが疲れている場合はヘッドケア単体（15分¥2,000〜30分¥3,000）が手軽です。肩こり・首こりも気になる場合はもみほぐし＋ヘッドケアのヘッドセットコース（60分¥5,400〜）がおすすめです。「体も頭も全部疲れている」という方にはヘッドセットが特に人気です。',
      },
    },
    {
      '@type': 'Question',
      name: '眼精疲労が続いている場合、どのくらいの頻度で来るといいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PC・スマホ使用が多い方は2〜4週間に1回のペースでのご利用をおすすめします。デスクワーク中心の方は特に目の疲れが蓄積しやすいため、定期的にヘッドケアでリセットすることをご提案しています。仕事帰りに立ち寄るペースで通っていただいている方も多いです。',
      },
    },
    {
      '@type': 'Question',
      name: '当日に「今すぐ目が疲れた」という状態でも受けられますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、当日予約も受け付けています。ヘッドケアは15分という短い時間から受けられますので、「今日ちょっとだけほぐしたい」というときにも活用できます。夜0時まで営業していますので、仕事帰りにも立ち寄りやすいです。',
      },
    },
  ],
}

const symptoms = [
  {
    title: 'パソコン作業後に目がしょぼしょぼする',
    desc: '長時間モニターを見続けると、眼球を動かす筋肉（外眼筋）や、ピントを調節する筋肉（毛様体筋）が疲弊します。また、モニター作業中はまばたきの回数が減少するため、目の乾燥も重なり眼精疲労を悪化させます。「目がしょぼしょぼする」「目を開けているのがつらい」という感覚は目が限界に近い合図です。',
  },
  {
    title: '頭がぼーっとする・集中力が続かない',
    desc: '眼精疲労が続くと頭全体がぼんやりした感覚になり、集中力の低下を感じやすくなります。目の疲れが頭部全体の筋肉の緊張につながり、血流が滞ることで頭がはっきりしない感覚が生じます。午後になると頭がぼーっとするという方はこの状態が多いです。',
  },
  {
    title: 'こめかみが痛む・頭が締め付けられる感覚',
    desc: 'こめかみの張りや締め付け感は、側頭筋と眼周りの筋肉の緊張が原因のことが多いです。長時間の視覚集中作業（PC・運転・精密作業）でこめかみがズキズキするという方は、側頭部の筋肉が過緊張している状態です。ヘッドケアで側頭部をほぐすことでやわらぎやすくなります。',
  },
  {
    title: '目の周りが重い・目の奥がだるい',
    desc: '目の周りを取り囲む眼輪筋が緊張すると、「目の周りが重い」「目の奥がだるい」という感覚が出やすくなります。長時間の集中作業、特に細かい文字を読み続けたり、暗い場所でのスマートフォン使用などで生じやすいです。',
  },
  {
    title: '首から頭にかけて張る感じがある',
    desc: '首の後ろの筋肉（後頭下筋群）は後頭部・頭頂部の筋肉とつながっています。首こりが強くなると頭部全体に緊張が及び、「首から頭にかけて張っている感じ」「後頭部が重い」という感覚を覚えます。眼精疲労と首こりが連動しているケースも多いです。',
  },
  {
    title: '夜遅い仕事・テレワーク後の頭の疲れ',
    desc: '夜遅くまでPC作業や在宅勤務が続くと、目と頭の疲れが特に蓄積しやすくなります。夜のブルーライトは睡眠の質にも影響するため、仕事終わりにヘッドケアでリセットすることが日々のメンテナンスとして効果的です。',
  },
]

const kimitsuScenes = [
  {
    title: 'デスクワーク・テレワーク',
    desc: '1日8時間以上モニターを見るデスクワーク・在宅勤務では、目と頭への蓄積疲労が大きくなります。特に画面との距離が近い・照明が暗い環境での作業は眼精疲労を悪化させます。',
  },
  {
    title: 'スマートフォン・タブレットの長時間使用',
    desc: '電車や車内でのスマートフォン使用、プライベートでの動画視聴・SNS利用など、仕事以外でも目への刺激が続く現代では、1日の目の疲れが相当なものになります。',
  },
  {
    title: '長距離ドライビング',
    desc: '君津エリアは車での移動が多いため、長距離運転による目の疲れを感じる方も多いです。前方への視線集中・夜間運転などが目の筋肉の緊張を高めます。',
  },
  {
    title: '精密作業・細かい仕事',
    desc: 'デザイン・縫製・校正・製造の検品作業など、視覚的な集中が必要な仕事では目と頭への負担が特に大きくなります。仕事終わりの目の重さ・頭の重さを感じやすい職種です。',
  },
]

const menuItems = [
  {
    category: 'Head Care',
    name: 'ヘッドケア 15分',
    desc: '頭皮・側頭部をメインにした短時間のケア。「今すぐ目をほぐしたい」「時間がないけど頭をリセットしたい」というときに。眼精疲労の短時間ケアとして人気です。',
    price: '¥2,000',
    href: '/menu/head',
  },
  {
    category: 'Head Care',
    name: 'ヘッドケア 30分',
    desc: '頭皮・側頭部に加え、後頭部・眼周り（眼輪筋）もじっくりほぐします。目の疲れ・頭の重さが気になる方にはこちらがおすすめです。頭全体をゆっくりほぐすことで、目と頭のすっきり感を得やすくなります。',
    price: '¥3,000',
    href: '/menu/head',
  },
  {
    category: 'Head Set',
    name: 'ヘッドセットコース',
    desc: 'もみほぐし＋ヘッドケアの組み合わせ。体（首・肩・背中）もまとめてほぐしながら、頭皮・目まわりのケアも同時に。肩こりと眼精疲労が両方気になる方に特に人気のコースです。',
    price: '60分 ¥5,400 / 90分 ¥6,700 / 120分 ¥8,700',
    href: '/menu/set',
  },
]

const courseGuide = [
  {
    time: 'ヘッドケア15分（¥2,000）',
    target: '短時間で目・頭をリセットしたい方',
    detail: '頭皮・側頭部の短時間ケア。「今すぐ目をほぐしたい」という日に。',
  },
  {
    time: 'ヘッドケア30分（¥3,000）',
    target: '目の疲れ・頭の重さを本格的にほぐしたい方',
    detail: '頭皮・側頭部・後頭部・眼周りをじっくりほぐします。目の疲れが強い方はこちらがおすすめ。',
  },
  {
    time: 'ヘッドセット60分（¥5,400）',
    target: '体の疲れも一緒にリセットしたい方',
    detail: 'もみほぐし（首・肩・背中）＋ヘッドケアのセット。肩こり＋眼精疲労の両方が気になる方に。',
  },
  {
    time: 'ヘッドセット90分（¥6,700）',
    target: '全身と頭をまとめてじっくりほぐしたい方',
    detail: 'もみほぐし（全身）＋ヘッドケアの充実セット。疲れが深い方・久しぶりのケアの方に。',
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
    q: 'ヘッドケアで目の疲れに対応できますか？',
    a: 'はい、MARISAのヘッドケアでは頭皮・側頭部・眼周り（眼輪筋）・後頭部をほぐします。目の疲れに関係する筋肉に直接アプローチすることで、目の重さや疲れ感がやわらぎやすくなります。医療行為ではありませんが、日常的な眼精疲労のリラクゼーションケアとしてご活用ください。',
  },
  {
    q: '15分と30分の違いは何ですか？',
    a: 'ヘッドケア15分（¥2,000）は頭皮・側頭部をメインにした短時間ケアです。ヘッドケア30分（¥3,000）は15分に加え、後頭部・眼周りもじっくりほぐせます。目の疲れが強い・頭全体の重さが気になる場合は30分をおすすめします。時間が限られている場合は15分でもすっきり感を得やすいです。',
  },
  {
    q: 'ヘッドセットとヘッドケア単体のどちらを選べばいいですか？',
    a: '目・頭だけが疲れている場合はヘッドケア単体（15分¥2,000〜30分¥3,000）が手軽です。肩こり・首こりも気になる方はもみほぐし＋ヘッドケアのヘッドセットコース（60分¥5,400〜）がおすすめです。「体も頭も全部疲れている」という方はヘッドセットが特に人気です。カウンセリングでお気軽にご相談ください。',
  },
  {
    q: '眼精疲労が続いている場合、どのくらいの頻度で来るといいですか？',
    a: 'PC・スマートフォン使用が多い方は2〜4週間に1回のペースをおすすめします。デスクワーク中心の方は目の疲れが蓄積しやすいため、定期的にヘッドケアでリセットすることをご提案しています。仕事帰りに立ち寄るペースで定期来店される方も多いです。',
  },
  {
    q: '当日に「今すぐ目が疲れた」という状態でも受けられますか？',
    a: 'はい、当日予約も受け付けています。ヘッドケアは15分という短い時間から受けられますので、「今日ちょっとだけほぐしたい」というときにも活用できます。夜0時まで営業していますので、仕事帰りに立ち寄りやすいです。公式WEB予約・ホットペッパービューティー・お電話でご予約ください。',
  },
]

const flowSteps = [
  { step: '01', title: '予約', desc: '公式WEB・ホットペッパービューティー・お電話でご予約ください。当日予約も受け付けています。' },
  { step: '02', title: '受付・ヒアリング', desc: '来店後、カウンセリングシートへご記入いただきます。目の状態・頭の重さの程度を確認します。' },
  { step: '03', title: 'カウンセリング', desc: '担当スタッフが目の疲れ・頭の重さの状態・圧の好みを確認します。今日の体の状態に合わせてコースをご提案します。' },
  { step: '04', title: '施術', desc: '専用ベッドにリラックスした状態で横になっていただき、頭皮・側頭部・眼周り・後頭部を丁寧にほぐします。ドライでの施術のため、施術後もヘアスタイルそのままです。' },
  { step: '05', title: 'お会計・次回予約', desc: '施術後、お会計をしていただきます。次回のご予約もその場で承ります。' },
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
              目の疲れ・頭の重さを、ヘッドケアでリセットする
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「目が重い」「頭がぼんやりする」「こめかみが張っている」——デジタル機器が生活の中心となった現代では、目と頭への疲れを日常的に感じる方が増えています。MARISAでは、頭皮・側頭部・眼周りをほぐすヘッドケアで、目と頭の疲れをやわらげ、すっきり感を目指します。
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

      {/* ===== Symptoms ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Do You Feel This?"
            ja="こんなお悩みはありませんか"
            lead="現代の生活環境は、目と頭部への負担が増え続けています。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {symptoms.map((s) => (
              <div key={s.title} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{s.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 max-w-3xl">
            <p className="text-sm text-stone-700 leading-loose">
              現代のオフィスワークやリモートワークでは、1日8時間以上モニターを見続けることも珍しくありません。プライベートでもスマートフォンの使用時間が増え続けており、目や頭への蓄積した疲れを感じている方は多いです。こまめな休憩をとることが理想ですが、仕事の都合で難しい場合も多く、定期的なヘッドケアで疲れをリセットすることが有効です。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Kimitsu Scenes ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Life in Kimitsu"
            ja="君津での生活と眼精疲労が起きやすいシーン"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {kimitsuScenes.map((s) => (
              <div key={s.title} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{s.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Connections ===== */}
      <section className="py-16 bg-cream-50">
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
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Our Approach"
            ja="MARISAでのケア方針"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAのヘッドケアは、頭皮・側頭筋・後頭下筋群・眼輪筋など、頭部に存在する筋肉群を丁寧にほぐします。指先と手のひらを使い、心地よい圧で頭部全体にアプローチすることで、頭の重さ・目の疲れ感・こめかみの張りがやわらぎやすくなります。
            </p>
            <p>
              施術はドライ（水・シャンプーなし）で行います。専用ベッドにリラックスした姿勢で横になっていただき、目を閉じてゆっくり過ごしていただけます。仕事帰りにも立ち寄りやすく、施術後はそのままお帰りいただけます。ヘアスタイルを崩す心配がないため、外出前や仕事帰りにも気軽にご利用いただけます。
            </p>
            <p>
              眼精疲労と肩こり・首こりが同時に気になる方には、ヘッドセットコースをおすすめします。もみほぐしでお体をほぐしながら、ヘッドケアで頭・目の疲れも同時にリセットできます。「体も頭も全部疲れている」という方に特に人気のコースです。眼精疲労に特化したい場合はヘッドケア単体が短時間で手軽です。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Recommended Menus ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menus"
            ja="眼精疲労・頭の重さにおすすめのメニュー"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {menuItems.map((m) => (
              <div key={m.name} className="border border-sand-200 bg-cream-50 p-6 flex flex-col">
                <p className="text-xs tracking-widest text-brown-400 mb-2">{m.category}</p>
                <h3 className="text-sm font-medium text-stone-800 mb-2">{m.name}</h3>
                <p className="text-sm text-stone-700 leading-loose mb-3 flex-1">{m.desc}</p>
                <p className="text-xs text-brown-500 font-medium mb-3">{m.price}</p>
                <Link href={m.href} className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500 self-start">
                  詳しく見る →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Course Guide ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="How to Choose"
            ja="コースの選び方"
            lead="目の疲れの程度や全身の状態に合わせてお選びください。"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {courseGuide.map((c) => (
              <div key={c.time} className="border border-sand-200 bg-cream-50 p-6">
                <p className="text-xs tracking-widest text-brown-400 mb-1">{c.time}</p>
                <h3 className="text-sm font-medium text-stone-800 mb-2">{c.target}</h3>
                <p className="text-sm text-stone-700 leading-loose">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Visit Frequency ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Frequency"
            ja="来店頻度の目安"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              PC・スマートフォン使用が多い方は2〜4週間に1回のペースでのご利用をおすすめします。デスクワーク中心の方は目の疲れが蓄積しやすいため、定期的にヘッドケアでリセットすることが日々のメンテナンスとして効果的です。
            </p>
            <p>
              「最近特に疲れがひどい」という時期は週1回ペースで来店される方もいます。体の状態が安定してきたら月1回ペースに移行される方も多いです。仕事帰りに立ち寄るペースで定期来店されている方も多くいらっしゃいます。
            </p>
          </div>
          <div className="mt-8 bg-cream-50 border border-sand-200 p-6">
            <p className="text-xs tracking-widest text-greige-400 mb-2">目安</p>
            <p className="text-sm font-medium text-stone-800 mb-1">2〜4週間に1回がおすすめ</p>
            <p className="text-sm text-stone-700 leading-loose">眼精疲労は蓄積しやすいため、定期的なヘッドケアでリセットすることをおすすめします。</p>
          </div>
        </div>
      </section>

      {/* ===== Staff ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Staff"
            ja="担当スタッフ"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl">
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Owner</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">オーナー</h3>
              <p className="text-sm text-stone-700 leading-loose">もみほぐし・ヘッドケア・足つぼ担当。ヘッドケアのほぐし・眼周りのアプローチを丁寧に行います。</p>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Staff</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">ゆい</h3>
              <p className="text-sm text-stone-700 leading-loose">不定期出勤。もみほぐし・ヘッドケアを担当します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Flow ===== */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Flow"
            ja="施術の流れ"
          />
          <div className="mt-10 space-y-4">
            {flowSteps.map((f) => (
              <div key={f.step} className="flex gap-5 border border-sand-200 bg-cream-50 p-5">
                <p className="font-en text-2xl text-brown-400 font-light shrink-0 leading-none pt-1">{f.step}</p>
                <div>
                  <h3 className="text-sm font-medium text-stone-800 mb-1">{f.title}</h3>
                  <p className="text-sm text-stone-700 leading-loose">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
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

      {/* ===== Related Links ===== */}
      <section className="py-14 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 uppercase mb-6">Related Pages</p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'ヘッドケアメニュー', href: '/menu/head' },
              { label: 'ヘッドセットコース', href: '/menu/set' },
              { label: 'もみほぐしメニュー', href: '/menu/body-care' },
              { label: '首こりのお悩みへ', href: '/symptom/neck' },
              { label: '肩こりのお悩みへ', href: '/symptom/stiff-shoulder' },
              { label: 'アクセス・無料駐車場', href: '/access' },
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-sand-200 bg-cream-50 py-4 px-6 text-sm text-stone-700 tracking-wide hover:border-brown-300 hover:text-brown-500 transition-colors"
              >
                {item.label} →
              </Link>
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
            夜0時まで営業中・当日予約OK・無料駐車場完備。<br />
            君津で眼精疲労・ヘッドケアをお探しの方は、ぜひMARISAにお越しください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={BMERIT_URL} label="WEB予約（公式）" variant="light" size="lg" />
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約" variant="outline" size="lg" />
          </div>
          {LINE_URL && (
            <div className="mt-4">
              <a href={LINE_URL} className="text-sm text-sand-300 underline underline-offset-4 hover:text-cream-50 transition-colors">
                LINEでお問い合わせ
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
