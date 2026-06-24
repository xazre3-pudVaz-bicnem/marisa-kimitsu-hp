import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, LINE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の通勤疲れ・車通勤ケア｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」の通勤疲れケア。長距離車通勤による肩・首・腰の緊張、電車通勤の立ちっぱなしによる脚の疲れをもみほぐしでやわらげます。当日予約OK・夜0時まで営業。',
  keywords: ['君津 通勤疲れ ケア', '君津 車通勤 肩こり', '君津 長距離通勤 もみほぐし'],
  openGraph: {
    title: '君津の通勤疲れ・車通勤ケア｜MARISA 君津店',
    description:
      '千葉県君津市のリラクゼーションサロン「MARISA」の通勤疲れケア。長距離車通勤の肩・首・腰、電車通勤の脚疲れをもみほぐしでやわらげます。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/symptom/commute-fatigue' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '車通勤の疲れには特にどの部位にアプローチしますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '車通勤の疲れは首・肩・腰に集中しやすいです。MARISAのもみほぐしでは、ハンドルを握り続けることで緊張する肩まわり、長時間の着座で固まる腰・臀部を重点的にほぐします。施術前のカウンセリングで「車通勤で首肩腰が疲れている」とお伝えいただければ、これらの部位を重点的にケアします。',
      },
    },
    {
      '@type': 'Question',
      name: '通勤疲れにはどのコースがおすすめですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '車通勤の疲れには、もみほぐし60〜90分（¥4,500〜¥6,400）がおすすめです。首肩腰を全身まとめてほぐす60分コース、全身をじっくりほぐす90分コースのどちらかをご状況に応じてお選びください。電車通勤で脚の疲れが気になる方には、足つぼセット（60分¥5,500）との組み合わせも好評です。',
      },
    },
    {
      '@type': 'Question',
      name: '君津から千葉・東京への通勤者が多く来られますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、君津・木更津から千葉・東京方面への長距離通勤をされている方が多くご来店いただいています。内房線での電車通勤・アクアラインや国道127号線での車通勤で蓄積した疲れのケアにご利用いただいています。夜0時まで営業していますので、帰宅途中に立ち寄りやすいのも好評です。',
      },
    },
    {
      '@type': 'Question',
      name: '毎日の通勤疲れに対して定期的なケアは必要ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '毎日の通勤が続く方には、2〜4週に1回程度の定期的なケアをおすすめしています。通勤疲れは毎日少しずつ蓄積するため、「疲れが限界になってから来る」よりも、こまめにリセットする日々のメンテナンスとして活用いただくほうが効果的です。',
      },
    },
    {
      '@type': 'Question',
      name: '足つぼセットとの組み合わせはできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、電車通勤で脚がむくんだり重くなる方には、足つぼセットコース（60分¥5,500・90分¥6,900）が特におすすめです。足裏のツボ刺激と下半身のもみほぐしを組み合わせて、脚全体の疲れをケアします。車通勤の方も、腰・臀部のほぐしと合わせて足つぼをご利用いただく方が多いです。',
      },
    },
  ],
}

const commuteTypes = [
  {
    type: '車通勤（長距離）',
    desc: '君津から千葉・東京方面へのアクアライン・国道127号線を使った長距離車通勤。ハンドルを長時間握ることで肩・首に力が入り続け、シートに深く座り続けることで腰・臀部が固まります。「毎日1〜2時間運転している」という方に多い疲れのパターンです。',
  },
  {
    type: '電車通勤（内房線・久留里線）',
    desc: '内房線を使った千葉・東京方面への通勤。座れない時間帯の立ちっぱなしで脚・腰に疲れが蓄積します。また「電車内でずっとスマホを見ている」という方は首・肩の疲れも重なります。',
  },
  {
    type: '通勤+デスクワークのダブル疲れ',
    desc: '通勤で体が疲れた状態で一日デスクワークをこなし、帰りの通勤でさらに疲れが重なる——これが「通勤×仕事のダブル疲れ」のパターンです。「家に着いたら何もしたくない」という方はこの状態になっています。',
  },
]

const causes = [
  {
    title: '長時間の運転による肩・首の緊張',
    desc: 'ハンドルを握り続ける姿勢は、肩まわりの筋肉（僧帽筋・三角筋）に継続的な緊張をもたらします。特に渋滞中の停車・発進の繰り返しや、高速道路の長時間運転は肩・首に大きな負担をかけます。',
  },
  {
    title: 'シートに座り続けることによる腰の固まり',
    desc: '運転中は体が動かせない状態が続くため、腰まわりの筋肉（多裂筋・腸腰筋・臀筋）が長時間収縮したままになります。「車から降りた後しばらく腰が重い」という方はこのパターンです。',
  },
  {
    title: '電車での立ちっぱなしによる脚の疲れ',
    desc: '混雑した電車での立ち通勤は、脚全体（ふくらはぎ・太もも・足首）に疲れが蓄積します。バランスを取り続けることで体幹も疲れるため、「電車を降りた後、脚が重い」という方は下半身全体が疲弊しています。',
  },
  {
    title: 'スマホ使用による首の前傾疲れ',
    desc: '電車通勤中に下を向いてスマートフォンを使い続けると、首への負担が増大します。「通勤時間中はずっとスマホを見ている」という方は、首・肩の疲れが通勤前からすでに蓄積した状態で仕事を始めることになります。',
  },
  {
    title: '季節・天候による疲れの変化',
    desc: '夏の車内の暑さ・冬の寒さの中での長距離運転、雨天・霧・強風時の緊張を伴う運転など、季節・天候によって通勤時の体への負担は変わります。「雨の日は運転後に特に肩が凝る」という方はこのパターンです。',
  },
  {
    title: '通勤時間の長さによる精神的疲れ',
    desc: '往復2〜3時間以上の長距離通勤は、体の疲れだけでなく、精神的なエネルギーも消耗します。「通勤するだけで一日の体力の多くを使ってしまう」という方には、定期的なケアで体力の回復をサポートします。',
  },
]

const areaConnections = [
  { label: '君津市内通勤', desc: '君津市内の工場・事業所への通勤でも、長距離移動の方に通勤疲れが見られます。' },
  { label: '木更津・袖ケ浦方面', desc: 'アクアライン経由での神奈川・東京方面への通勤者の腰・肩ケアにご利用いただいています。' },
  { label: '千葉・東京方面', desc: '内房線で千葉・東京へ通勤する方が帰宅途中にご来店されるケースが多くあります。' },
]

const scenes = [
  {
    title: '車通勤で毎日1〜2時間運転している方',
    desc: '「職場まで車で1時間」という君津エリアの長距離車通勤者に多い肩・首・腰の疲れケア。定期的な来店で通勤疲れの蓄積をリセットしています。',
  },
  {
    title: '電車通勤で脚がむくむ方',
    desc: '内房線での千葉・東京通勤で電車内に立ちっぱなしの方。帰宅後に脚がむくんで重いという方に足つぼセットが好評です。',
  },
  {
    title: '通勤後にそのまま施術を受けたい方',
    desc: '夜0時まで営業のMARISAは、仕事帰りの通勤疲れをそのままケアできます。「車や電車を降りてそのまま来店」という方が多くいらっしゃいます。',
  },
]

const recommendedMenus = [
  {
    tag: '60〜90 min',
    title: 'もみほぐし 60〜90分',
    desc: '60分¥4,500・90分¥6,400。車通勤の首・肩・腰を一体でほぐします。カウンセリングで重点部位をお伝えください。',
    href: '/menu/body-care',
  },
  {
    tag: 'Foot Set',
    title: '足つぼセット',
    desc: '60分¥5,500・90分¥6,900。電車通勤・立ち仕事で脚が重い方に。下半身全体の疲れをまとめてケア。',
    href: '/menu/set',
  },
]

const steps = [
  { step: '01', title: 'ご予約', desc: 'ホットペッパービューティー・当日来店でご予約。通勤帰りの当日予約OK。' },
  { step: '02', title: 'カウンセリング', desc: '通勤の手段（車・電車）・特に疲れている部位・圧の好みをお聞きします。' },
  { step: '03', title: '首・肩のほぐし', desc: '車通勤の方に特に疲れやすい首・肩から丁寧にほぐします。' },
  { step: '04', title: '腰・下半身のほぐし', desc: '腰まわり・臀部・脚まで全身の通勤疲れをほぐします。圧の強さはご要望に応じて調整。' },
  { step: '05', title: 'アフターケア', desc: '施術後の体の感覚を確認。通勤疲れの定期ケアのタイミングについてもご相談に応じます。' },
]

const faqs = [
  {
    q: '車通勤の疲れには特にどの部位にアプローチしますか？',
    a: '車通勤の疲れは首・肩・腰に集中しやすいです。MARISAのもみほぐしでは、ハンドルを握り続けることで緊張する肩まわり、長時間の着座で固まる腰・臀部を重点的にほぐします。施術前のカウンセリングで「車通勤で首肩腰が疲れている」とお伝えいただければ、これらの部位を重点的にケアします。',
  },
  {
    q: '通勤疲れにはどのコースがおすすめですか？',
    a: '車通勤の疲れには、もみほぐし60〜90分（¥4,500〜¥6,400）がおすすめです。首肩腰を全身まとめてほぐす60分コース、全身をじっくりほぐす90分コースのどちらかをご状況に応じてお選びください。電車通勤で脚の疲れが気になる方には、足つぼセット（60分¥5,500）との組み合わせも好評です。',
  },
  {
    q: '君津から千葉・東京への通勤者が多く来られますか？',
    a: 'はい、君津・木更津から千葉・東京方面への長距離通勤をされている方が多くご来店いただいています。内房線での電車通勤・アクアラインや国道127号線での車通勤で蓄積した疲れのケアにご利用いただいています。夜0時まで営業していますので、帰宅途中に立ち寄りやすいのも好評です。',
  },
  {
    q: '毎日の通勤疲れに対して定期的なケアは必要ですか？',
    a: '毎日の通勤が続く方には、2〜4週に1回程度の定期的なケアをおすすめしています。通勤疲れは毎日少しずつ蓄積するため、「疲れが限界になってから来る」よりも、こまめにリセットする日々のメンテナンスとして活用いただくほうが効果的です。',
  },
  {
    q: '足つぼセットとの組み合わせはできますか？',
    a: 'はい、電車通勤で脚がむくんだり重くなる方には、足つぼセットコース（60分¥5,500・90分¥6,900）が特におすすめです。足裏のツボ刺激と下半身のもみほぐしを組み合わせて、脚全体の疲れをケアします。車通勤の方も、腰・臀部のほぐしと合わせて足つぼをご利用いただく方が多いです。',
  },
]

export default function CommuteFatiguePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ===== 1. Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'お悩み別', href: '/symptom' }, { label: '通勤疲れ・車通勤のケア' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Commute Fatigue Care</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              通勤疲れ・長距離車通勤の肩・首・腰・脚をほぐす
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「毎日1〜2時間の車通勤で肩がガチガチ」「電車の帰りに脚がむくんで重い」——君津エリアから千葉・東京方面への長距離通勤は、体への積み重なる負担になります。MARISAでは、車通勤特有の肩・首・腰の疲れや、電車通勤による下半身の疲れを、もみほぐしでやわらげるサポートをします。
            </p>
          </div>
        </div>
      </div>

      {/* ===== 2. Commute Types ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Commute Types"
            ja="通勤スタイル別の疲れのパターン"
            lead="通勤手段によって、疲れが出やすい部位が異なります。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {commuteTypes.map((c) => (
              <div key={c.type} className="border border-sand-200 p-6 bg-cream-50">
                <p className="text-xs tracking-widest text-brown-400 uppercase mb-2">{c.type}</p>
                <p className="text-sm text-stone-700 leading-loose">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. Causes ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Causes"
            ja="通勤疲れの主な原因"
            lead="通勤による体への負担はさまざまな原因から生じます。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {causes.map((c) => (
              <div key={c.title} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{c.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. Area Connections ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Area"
            ja="君津エリアの通勤者の方に"
            lead="君津市・木更津市・富津市エリアからの通勤者の方のご来店が多いです。"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {areaConnections.map((a) => (
              <div key={a.label} className="border border-sand-200 bg-cream-50 p-6">
                <p className="text-xs tracking-widest text-brown-400 uppercase mb-2">{a.label}</p>
                <p className="text-sm text-stone-700 leading-loose">{a.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 max-w-3xl text-sm text-stone-700 leading-loose">
            <p>
              MARISAは君津市内に立地し、無料駐車場を完備しています。仕事帰りに車でそのまま立ち寄れる立地と、夜0時まで営業という時間帯が、通勤帰りの方に特に好評です。
            </p>
          </div>
        </div>
      </section>

      {/* ===== 5. MARISA Approach ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Our Approach" ja="通勤疲れへのケアアプローチ" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              車通勤の疲れには、首・肩・腰を一体でほぐすことが大切です。ハンドルを握る姿勢での肩まわりの緊張、シートに固定された腰まわりの固まりを順番にほぐすことで、「車から降りた後の重さ」が軽くなっていくのを感じやすくなります。
            </p>
            <p>
              電車通勤で脚がむくむ方には、足つぼセットコースが特におすすめです。足裏のツボ刺激と下半身のもみほぐしで、脚のむくみ・重さをやわらげるサポートをします。
            </p>
            <p>
              通勤疲れは毎日少しずつ蓄積するため、定期的なケアが特に有効です。「疲れが限界になってから来る」より「2〜3週に1回こまめにリセットする」ほうが、日常的に体が楽な状態を保ちやすくなります。
            </p>
          </div>
        </div>
      </section>

      {/* ===== 6. Life Scenes ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Life Scenes"
            ja="こんな方の通勤疲れケアにご利用いただいています"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {scenes.map((s) => (
              <div key={s.title} className="border border-sand-200 bg-cream-50 p-6">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{s.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. Recommended Menus ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Menus" ja="通勤疲れにおすすめのメニュー" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
            {recommendedMenus.map((m) => (
              <div key={m.title} className="border border-sand-200 bg-cream-50 p-6">
                <p className="text-xs tracking-widest text-brown-400 mb-2">{m.tag}</p>
                <h3 className="text-sm font-medium text-stone-800 mb-2">{m.title}</h3>
                <p className="text-sm text-stone-700 leading-loose mb-4">{m.desc}</p>
                <Link href={m.href} className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
                  詳しく見る →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. Treatment Flow ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Flow" ja="施術の流れ" />
          <div className="mt-10 space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-4 border border-sand-200 bg-cream-50 p-5">
                <div className="font-en text-xl text-brown-400 font-light w-10 shrink-0">{s.step}</div>
                <div>
                  <p className="text-sm font-medium text-stone-800 mb-1">{s.title}</p>
                  <p className="text-xs text-stone-700 leading-loose">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 9. FAQ ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
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

      {/* ===== 10. Related & CTA ===== */}
      <section className="py-12 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: '肩こりのケア', href: '/symptom/stiff-shoulder' },
              { label: '腰のケア', href: '/symptom/lower-back' },
              { label: '冷え・むくみのケア', href: '/symptom/cold-body' },
              { label: '仕事疲れのケア', href: '/symptom/work-fatigue' },
              { label: 'メニュー・料金', href: '/menu' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="border border-sand-300 px-3 py-1.5 text-stone-700 hover:border-brown-300 hover:text-brown-500 transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">通勤疲れは、MARISAへ</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業・当日予約OK・無料駐車場あり。<br />
            仕事帰りにそのまま立ち寄れる、君津のリラクゼーションサロン MARISA。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            {LINE_URL && (
              <ReserveButton href={LINE_URL} label="LINEで予約する" variant="outline" size="lg" />
            )}
          </div>
        </div>
      </section>
    </>
  )
}
