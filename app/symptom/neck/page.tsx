import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, LINE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の首こりケア・もみほぐし｜MARISA 君津店',
  description:
    '君津市の首こり・スマホ首でお悩みの方へ。MARISA 君津店では、首の緊張・重さ・つらさを丁寧にほぐします。45分¥3,900〜。ヘッドケア・鍼灸も対応。当日予約OK・夜0時まで営業。',
  keywords: ['君津 首こり', '君津 首 マッサージ', '君津 スマホ首', '君津 頸部 ケア', '君津 首 もみほぐし'],
  openGraph: {
    title: '君津の首こりケア・もみほぐし｜MARISA 君津店',
    description: '君津市の首こり・スマホ首でお悩みの方へ。MARISA 君津店では、首の緊張・重さ・つらさを丁寧にほぐします。45分¥3,900〜。当日予約OK・夜0時まで営業。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/symptom/neck' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '首こりには何分のコースがおすすめですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '首こりには「もみほぐし60分（¥4,500/70分計）」がおすすめです。首は肩・後頭部と連動しているため、首だけでなく周辺もまとめてほぐせるコースが効果的です。頭の重さも気になる方はヘッドセットコース（60分¥5,400〜）もご検討ください。',
      },
    },
    {
      '@type': 'Question',
      name: 'ヘッドケアと首こりは関係ありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、深く関係しています。首の後ろの筋肉（後頭下筋群）は頭皮・後頭部と直接つながっています。首がこると後頭部の緊張が増し、頭の重さや締め付け感を感じやすくなります。ヘッドケアで頭部をほぐすことで首の緊張もやわらぎやすくなるため、首こりにはヘッドセットコースもおすすめです。',
      },
    },
    {
      '@type': 'Question',
      name: '施術後に首が楽になりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'もみほぐしは医療行為ではないため効果を保証するものではありませんが、施術後に「首が軽くなった」「首を回しやすくなった」という感想を多くいただいています。首の緊張をやわらげ、リラックスしやすい状態へ整えることをサポートします。',
      },
    },
    {
      '@type': 'Question',
      name: 'スマホを見ると首がつらい場合はどのメニューが向いていますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'スマホ首（前傾姿勢による首の疲れ）には「もみほぐし60分」がおすすめです。首の後ろ・肩・後頭部を合わせてほぐすことで、スマホ使用による首の緊張をやわらげます。頭も疲れている場合はヘッドセットコースで首から頭皮までまとめてケアできます。',
      },
    },
    {
      '@type': 'Question',
      name: '定期的に通った方がいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'スマホやPC使用が多い現代では、首への負担をゼロにすることは難しいため、定期的なケアで緊張をリセットすることをおすすめします。目安は2〜4週間に1回です。慢性的な首こりの方は最初の数回を近いペースで来店されると体の緊張が整いやすくなります。',
      },
    },
  ],
}

const symptoms = [
  {
    title: '首の後ろが重くつらい',
    desc: '長時間同じ姿勢を続けたり、うつむき加減で作業することで、首の後ろの筋肉が持続的に緊張します。「首の後ろが重い」「首の付け根が張る」という感覚は、後頭下筋群・頸部の筋肉が疲弊しているサインです。放置すると慢性化しやすいため、定期的なケアが大切です。',
  },
  {
    title: 'スマホを長時間見て首がつらい',
    desc: 'スマートフォンを見るとき、無意識に頭が前に傾いた姿勢（スマホ首・スマートフォン頸）になりがちです。頭の重さは約4〜6kgあり、うつむくほど首への負荷が増大します。SNS・動画・読書と、プライベートでもスマホを使う時間が長い現代では、首の疲れが慢性化しやすい環境です。',
  },
  {
    title: 'デスクワークで前傾姿勢が続く',
    desc: 'パソコン作業での前傾姿勢は、首の筋肉を常に引き伸ばした状態で維持することになります。長時間のデスクワーク中は定期的に姿勢を変えることが理想ですが、業務に集中していると何時間も同じ姿勢になりがちです。特に画面との距離や椅子の高さが合っていないと首への負担がさらに増します。',
  },
  {
    title: '頭が重くぼんやりする',
    desc: '首の緊張が強くなると、後頭部への血流が滞り「頭が重い」「頭がぼんやりする」という感覚につながることがあります。医療的な原因ではなく、首や肩の筋肉の緊張が原因で生じるこのような感覚は、もみほぐしやヘッドケアでやわらぎやすくなることがあります。',
  },
  {
    title: '寝違えたような感覚が続く',
    desc: '「起きたら首が痛い」という急性のトラブルとは別に、慢性的な首こりが続いている方の中には、「常に寝違えているような感覚」を訴える方も多くいらっしゃいます。首の筋肉が慢性的に緊張・疲弊しているサインです。定期的なほぐしで筋肉の状態を整えることをサポートします。',
  },
  {
    title: '首を回すとつらい・動かしにくい',
    desc: '首を左右に回したときに「つっかかる感じ」や「動かしにくさ」を感じる場合、頸部周辺の筋肉が固まっているサインです。長時間同じ方向を向いて作業する習慣、車の運転中に特定の方向だけ見続けるなどが積み重なることで生じやすくなります。',
  },
]

const kimitsuScenes = [
  {
    title: '長距離運転（通勤・仕事）',
    desc: '君津市は車での移動が主体の地域です。千葉・市原・東京方面への通勤、仕事での移動など、長時間の運転が首への慢性的な負担につながります。特に渋滞中の緊張感も首の筋肉を硬くします。',
  },
  {
    title: 'スマホ・タブレットの長時間使用',
    desc: '電車移動中、休憩時間、就寝前など、スマートフォンを使う場面が多い現代では首への負担が日常化しています。うつむき姿勢での使用時間の積み重ねが首こりを慢性化させます。',
  },
  {
    title: 'テレワーク・在宅勤務',
    desc: '自宅での作業は机・椅子の高さが体に合っていないことが多く、オフィスより姿勢が悪くなりがちです。休憩のタイミングも不規則になりやすく、首への蓄積疲労が増えやすいです。',
  },
  {
    title: '工場の立ち作業・同一姿勢の仕事',
    desc: '製造業・工場勤務では、同じ方向を向き続けたり、同じ動作を繰り返す仕事が多く、首の特定の筋肉に慢性的な負担がかかりやすいです。仕事終わりの首のつらさを感じる方が多くご来店されます。',
  },
]

const menuItems = [
  {
    category: 'Body Care',
    name: 'もみほぐし（首・肩集中）',
    desc: '首こりのメインケア。首の後ろ・肩・後頭部をまとめてほぐします。60分がおすすめですが、45分から対応可能です。カウンセリングで首を重点的に見てほしい旨をお伝えください。',
    price: '45分 ¥3,900 / 60分 ¥4,500（70分計）/ 90分 ¥6,400（100分計）',
    href: '/menu/body-care',
    note: '',
  },
  {
    category: 'Head Care',
    name: 'ヘッドケア（首から頭皮へのケア）',
    desc: '首の後ろの筋肉は頭皮・後頭部と直接つながっています。ヘッドケアで頭部全体をほぐすことで、首の緊張もやわらぎやすくなります。単体でも、もみほぐしとのセットでも受けられます。',
    price: '15分 ¥2,000 / 30分 ¥3,000',
    href: '/menu/head',
    note: '',
  },
  {
    category: 'Head Set',
    name: 'ヘッドセットコース',
    desc: 'もみほぐし＋ヘッドケアの組み合わせ。首こりと頭の重さ・眼精疲労を同時にケアしたい方に特におすすめのコースです。首から頭皮まで全体的にすっきりした感覚を得やすいです。',
    price: '60分 ¥5,400 / 90分 ¥6,700 / 120分 ¥8,700',
    href: '/menu/set',
    note: '',
  },
  {
    category: 'Acupuncture',
    name: '鍼灸メニュー（公式予約限定）',
    desc: '首・肩の気になる部位に鍼でピンポイントアプローチ。もみほぐしのほぐしと鍼のアプローチを組み合わせることで、深部の緊張にアプローチします。担当：なお（鍼灸師）。',
    price: 'もみほぐし30分+鍼 ¥4,500 / 45分+鍼 ¥5,400 / 70分+鍼 ¥6,000',
    href: '/menu/acupuncture',
    note: '鍼灸メニューは公式WEB予約（B-merit）限定です。金曜10:00-22:00、土曜10:00-14:00が基本勤務時間です。',
  },
]

const courseGuide = [
  {
    time: '45分（¥3,900）',
    target: '首・肩に絞ってほぐしたい方',
    detail: '首・肩周辺を集中的にほぐします。時間が限られている日のケアに。',
  },
  {
    time: '60分（¥4,500/70分計）',
    target: '首こり悩みの定番コース',
    detail: '首・肩・背中をバランスよくほぐします。首こりの方に最もご利用の多い時間帯です。',
  },
  {
    time: 'ヘッドセット60分（¥5,400）',
    target: '首と頭の重さを同時にケアしたい方',
    detail: 'もみほぐし＋ヘッドケアのセット。頭の重さ・眼精疲労も気になる首こりの方に。',
  },
  {
    time: '90分（¥6,400/100分計）',
    target: '全身の疲れも気になる方',
    detail: '首から腰・脚まで全身をほぐします。慢性的な首こりで全体的に疲れている方に。',
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
    q: '首こりには何分のコースがおすすめですか？',
    a: '首こりには「もみほぐし60分（¥4,500/70分計）」がおすすめです。首は肩・後頭部と連動しているため、首単体でなく周辺をまとめてほぐすことが効果的です。頭の重さや眼精疲労も気になる方は、もみほぐしとヘッドケアを組み合わせたヘッドセットコース（60分¥5,400〜）をぜひお試しください。',
  },
  {
    q: 'ヘッドケアと首こりは関係ありますか？',
    a: 'はい、密接に関係しています。首の後ろの筋肉（後頭下筋群）は頭皮・後頭部と直接つながっており、首がこると後頭部が緊張し頭の重さにつながります。ヘッドケアで頭部をほぐすことで首の緊張もやわらぎやすくなるため、首こりにはヘッドセットコースがとくにおすすめです。',
  },
  {
    q: '施術後に首が楽になりますか？',
    a: 'もみほぐしは医療行為ではないため効果を保証するものではありませんが、「施術後に首が軽くなった」「首を回しやすくなった」という声を多くいただいています。首まわりの筋肉の緊張をやわらげ、リラックスしやすい状態へ整えることをサポートします。',
  },
  {
    q: 'スマホを見ると首がつらい場合はどのメニューが向いていますか？',
    a: 'スマホ首による首の疲れには「もみほぐし60分」がおすすめです。首の後ろ・肩・後頭部をまとめてほぐすことで、スマホ使用による首の緊張をやわらげます。頭も疲れている場合はヘッドセットコースで首から頭皮までまとめてケアできます。',
  },
  {
    q: '定期的に通った方がいいですか？',
    a: 'はい、スマホやPC使用が多い現代では首への負担が継続するため、定期的なケアをおすすめします。目安は2〜4週間に1回です。慢性的な首こりの方は最初の数回を2週間ペースで来店されると体の緊張が整いやすくなります。症状が出てから来るより、定期メンテナンスとしてご活用いただく方が首こりの慢性化を防ぎやすくなります。',
  },
]

const flowSteps = [
  { step: '01', title: '予約', desc: '公式WEB・ホットペッパービューティー・お電話でご予約ください。当日予約も受け付けています。' },
  { step: '02', title: '受付・ヒアリング', desc: '来店後、カウンセリングシートへご記入いただきます。首の状態や気になる部位を確認します。' },
  { step: '03', title: 'カウンセリング', desc: '担当スタッフが首のつらさ・可動域・圧の希望を確認します。「首の左側だけつらい」など細かいご要望もお聞きします。' },
  { step: '04', title: '施術', desc: '専用ベッドでうつ伏せになっていただき、首・後頭部・肩を中心にほぐします。首は繊細な部位のため、状態を確認しながら丁寧に進めます。' },
  { step: '05', title: 'お会計・次回予約', desc: '施術後、お会計をしていただきます。次回のご予約もその場で承ります。' },
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

      {/* ===== Symptoms ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Do You Feel This?"
            ja="こんなお悩みはありませんか"
            lead="首こりの背景には、現代の生活習慣が深く関わっています。"
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
              これらの原因が重なることで、首の筋肉は慢性的な緊張状態に置かれます。仕事でもプライベートでも画面を見る時間が長い現代では、首への負担を完全になくすことは難しいため、定期的なケアで緊張をリセットすることが大切です。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Kimitsu Scenes ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Life in Kimitsu"
            ja="君津での生活と首こりが起きやすいシーン"
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

      {/* ===== Body Connections ===== */}
      <section className="py-16 bg-cream-50">
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
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Our Approach"
            ja="MARISAでのケア方針"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              首こりへのアプローチでは、首の後ろを単独でほぐすだけでなく、肩・肩甲骨・後頭部との連動を意識しながら施術します。首の筋肉は肩や背中の筋肉と一体でつながっているため、周辺全体を整えることで首のこわばりがやわらぎやすくなります。
            </p>
            <p>
              施術は専用ベッドのうつ伏せ姿勢で、後頭下筋群・頸部の筋肉群・僧帽筋（上部）・肩甲挙筋など、首こりに関わる筋肉を丁寧にほぐします。首は非常に繊細な部位のため、過度な強さは避け、心地よい範囲で筋肉の緊張をほぐすことを心がけています。施術前のカウンセリングで首の状態をしっかり確認します。
            </p>
            <p>
              眼精疲労が伴う首こりには、ヘッドケアとのセットコースが特に有効です。目の周りの筋肉や側頭部も同時にほぐすことで、首から頭にかけてのすっきり感をより感じやすくなります。「体も頭も首も全部疲れている」という方にはヘッドセットコースをおすすめします。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Recommended Menus ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menus"
            ja="首こりにおすすめのメニュー"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {menuItems.map((m) => (
              <div key={m.name} className="border border-sand-200 bg-cream-50 p-6 flex flex-col">
                <p className="text-xs tracking-widest text-brown-400 mb-2">{m.category}</p>
                <h3 className="text-sm font-medium text-stone-800 mb-2">{m.name}</h3>
                <p className="text-sm text-stone-700 leading-loose mb-3 flex-1">{m.desc}</p>
                <p className="text-xs text-brown-500 font-medium mb-2">{m.price}</p>
                {m.note && (
                  <p className="text-xs text-stone-600 bg-sand-100 border border-sand-200 p-2 mb-3 leading-relaxed">{m.note}</p>
                )}
                <Link href={m.href} className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500 self-start">
                  詳しく見る →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Course Time Guide ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="How to Choose"
            ja="コース時間の選び方"
            lead="首こりの程度や目的に合わせて、最適なコース時間をお選びください。"
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
              首こりのケアにおける来店頻度の目安は2〜4週間に1回です。スマホやPC使用が続く限り首への負担はなくならないため、定期的なケアで緊張をリセットすることをおすすめします。
            </p>
            <p>
              慢性的な首こりの方は最初の数回を2週間ペースで来店されると、体の緊張が整いやすくなる傾向があります。体の状態が安定してきたら月1回ペースに移行される方も多いです。
            </p>
          </div>
          <div className="mt-8 bg-cream-50 border border-sand-200 p-6">
            <p className="text-xs tracking-widest text-greige-400 mb-2">目安</p>
            <p className="text-sm font-medium text-stone-800 mb-1">2〜4週間に1回がおすすめ</p>
            <p className="text-sm text-stone-700 leading-loose">症状が出てからではなく、定期メンテナンスとしての利用が首こりの慢性化を防ぎやすくなります。</p>
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
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Owner</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">オーナー</h3>
              <p className="text-sm text-stone-700 leading-loose">もみほぐし・足つぼ担当。首・肩のほぐしを得意とするオーナーが、体の状態に合わせたケアを行います。</p>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Acupuncturist</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">なお（鍼灸師）</h3>
              <p className="text-sm text-stone-700 leading-loose">国家資格を持つ鍼灸師。首の鍼灸施術を担当します。金曜10:00-22:00、土曜10:00-14:00が基本勤務。公式WEB予約（B-merit）でご予約ください。</p>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Staff</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">ゆい</h3>
              <p className="text-sm text-stone-700 leading-loose">不定期出勤。もみほぐしを担当します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Flow ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
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
              { label: 'もみほぐしメニュー', href: '/menu/body-care' },
              { label: 'ヘッドケアメニュー', href: '/menu/head' },
              { label: 'ヘッドセットコース', href: '/menu/set' },
              { label: '鍼灸メニュー', href: '/menu/acupuncture' },
              { label: '肩こりのお悩みへ', href: '/symptom/stiff-shoulder' },
              { label: '眼精疲労のお悩みへ', href: '/symptom/eye-fatigue' },
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
            首こりのお悩みは、MARISAへ
          </h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業中・当日予約OK・無料駐車場完備。<br />
            君津で首こりケアをお探しの方は、ぜひMARISAにお越しください。
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
