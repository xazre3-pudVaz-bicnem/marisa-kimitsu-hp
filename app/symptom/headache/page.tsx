import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, LINE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の頭の重さ・頭痛感ケア｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」の頭ケア。PC眼精疲労・こめかみの圧迫感・首コリからくる頭の重さをヘッドケア・ヘッドセットでやわらげます。当日予約OK・夜0時まで営業。',
  keywords: ['君津 頭痛', '君津 頭の重さ', '君津 頭ケア', '君津 ヘッドスパ 頭痛'],
  openGraph: {
    title: '君津の頭の重さ・頭痛感ケア｜MARISA 君津店',
    description:
      '千葉県君津市のリラクゼーションサロン「MARISA」の頭ケア。PC眼精疲労・こめかみの圧迫感・首コリからくる頭の重さをやわらげます。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/symptom/headache' },
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
        text: '頭の重さには「ヘッドセットコース（60分¥5,400〜）」がおすすめです。もみほぐしに頭皮・側頭部・後頭部のケアを組み合わせたコースで、首から頭にかけての緊張をまとめてほぐします。眼精疲労も気になる方に特に喜ばれています。',
      },
    },
    {
      '@type': 'Question',
      name: '頭痛がある状態でも施術を受けられますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '緊張型の頭の重さ・こめかみの圧迫感がある場合はご利用いただけます。ただし、激しい頭痛・吐き気・発熱・視覚異常を伴う場合はまず医療機関を受診してください。当サロンはリラクゼーション施設であり、医療行為は行っておりません。施術前のカウンセリングでお体の状態を必ずお伝えください。',
      },
    },
    {
      '@type': 'Question',
      name: 'ヘッドケアは頭皮を痛めませんか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ヘッドケアは頭皮への過度な刺激を避け、側頭筋・後頭筋・頭頂部など筋肉の緊張をほぐすアプローチです。圧の強さはお好みに合わせて調整できます。心地よい刺激でリラックスしやすい状態を目指します。',
      },
    },
    {
      '@type': 'Question',
      name: 'こめかみのズキズキ感にも対応していますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'こめかみの緊張感・圧迫感にはヘッドケアでのアプローチが有効です。側頭筋（こめかみ周辺）はPC疲れやストレスで特に緊張しやすい部位です。ただし、ズキズキ・ガンガンする強い頭痛は医療機関へのご受診をおすすめします。',
      },
    },
    {
      '@type': 'Question',
      name: '頭のケアは定期的に通う必要がありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '1回の施術でもすっきり感を感じていただける方が多いですが、デスクワークや運転が多い方は月2〜4回程度の定期ご利用で、頭まわりを常に整えやすい状態を維持しやすくなります。日々のメンテナンスとしての定期利用をおすすめしています。',
      },
    },
  ],
}

const causes = [
  {
    title: 'PC・スマホ眼精疲労',
    desc: '長時間のPC作業やスマートフォン操作では目を酷使するだけでなく、前傾姿勢が続きます。この姿勢が首・後頭部の筋肉に負担をかけ、頭の血流が滞ることで重だるさや締め付け感を引き起こしやすくなります。',
  },
  {
    title: 'こめかみ・側頭部の緊張',
    desc: 'ストレスや噛み締め・食いしばりの習慣があると、こめかみ周辺の側頭筋が緊張します。「頭がバンドで締め付けられる感じ」「こめかみが重い」という感覚はこの緊張が関係していることが多いです。',
  },
  {
    title: '首コリからの頭への波及',
    desc: '首の後ろの後頭下筋群は後頭部と直接つながっており、首がこると後頭部も引っ張られ頭が重く感じやすくなります。「首こりがひどい日は頭も重い」という方は、首から頭への連動が影響しています。',
  },
  {
    title: '血行・自律神経の乱れ',
    desc: '睡眠不足・不規則な生活・ストレスが続くと自律神経のバランスが乱れ、頭部の血管に影響が出やすくなります。「天気が悪い日に頭が重くなる」という方も、血管や自律神経の関与が考えられます。',
  },
  {
    title: 'ドライアイ・目の疲れ',
    desc: 'エアコンの効いた室内での長時間作業でドライアイが進むと、目まわりの筋肉が緊張します。この緊張が側頭部・後頭部まで波及して頭の重さとして感じられることがあります。',
  },
  {
    title: '睡眠の質の低下',
    desc: '枕が合わない・睡眠が浅いといった状態が続くと、朝起きたときから頭が重い「朝の頭重感」として現れやすくなります。首・肩・後頭部の筋肉が就寝中も緊張しているサインです。',
  },
]

const scenes = [
  {
    title: '君津市内のデスクワーカー',
    desc: 'PC作業が続く事務職・テレワーク勤務の方は、夕方になるほど頭が重くなりやすい傾向があります。仕事帰りのヘッドケアで頭まわりをリセットしてから帰宅するご利用が人気です。',
  },
  {
    title: '長距離車通勤の方',
    desc: '千葉・東京方面への長距離通勤では、運転中の緊張が首・肩・目に蓄積します。帰宅途中にMARISAへ立ち寄り、頭と首をほぐしてから帰るルーティンの方もいらっしゃいます。',
  },
  {
    title: '休日前のリセットに',
    desc: '「週末になっても頭が重くてすっきりしない」という方。週末の前夜にヘッドケアでリセットすることで、休日を本当にリラックスして過ごしやすくなります。',
  },
]

const recommendedMenus = [
  {
    tag: 'Head Set',
    title: 'ヘッドセットコース',
    desc: 'もみほぐし＋ヘッドケアの組み合わせ。60分¥5,400・90分¥6,700。首から頭にかけての緊張をまとめてケアできます。頭の重さ・眼精疲労・こめかみの圧感が気になる方に。',
    href: '/menu/set',
  },
  {
    tag: 'Head Care',
    title: 'ヘッドケア 30分',
    desc: '¥3,000。頭・頭皮・側頭部・後頭部を集中ケア。「頭だけを集中してほぐしたい」という方に。もみほぐしとの組み合わせも可能です。',
    href: '/menu/head',
  },
  {
    tag: 'Body + Neck',
    title: 'もみほぐし（首・肩重点）',
    desc: '45分¥3,900〜。首と肩の緊張から頭の重さが来ている方に。頭まわりの重さの原因となる首・肩を重点的にほぐします。カウンセリングで重点部位をお伝えください。',
    href: '/menu/body-care',
  },
]

const steps = [
  { step: '01', title: 'ご予約', desc: 'ホットペッパービューティー・LINE・当日来店でご予約。当日予約OK。' },
  { step: '02', title: 'カウンセリング', desc: '施術前に頭の重さの出方・場所・原因・生活習慣などをお聞きします。' },
  { step: '03', title: '首・肩のほぐし', desc: '頭への血流につながる首・肩の緊張を先にほぐします。' },
  { step: '04', title: 'ヘッドケア', desc: '側頭筋・後頭筋・頭頂部・こめかみをゆっくりほぐします。圧の強さはご要望に応じて調整。' },
  { step: '05', title: 'アフターケア', desc: '施術後の体の感覚を確認。次回ケアのタイミングや日常のセルフケアをご案内します。' },
]

const faqs = [
  {
    q: '頭の重さや頭痛感にはどのコースがおすすめですか？',
    a: '頭の重さには「ヘッドセットコース（60分¥5,400〜）」がおすすめです。もみほぐしに頭皮・側頭部・後頭部のケアを組み合わせたコースで、首から頭にかけての緊張をまとめてほぐします。眼精疲労も気になる方に特に喜ばれています。',
  },
  {
    q: '頭痛がある状態でも施術を受けられますか？',
    a: '緊張型の頭の重さ・こめかみの圧迫感がある場合はご利用いただけます。ただし、激しい頭痛・吐き気・発熱・視覚異常を伴う場合はまず医療機関を受診してください。当サロンはリラクゼーション施設であり、医療行為は行っておりません。施術前のカウンセリングでお体の状態を必ずお伝えください。',
  },
  {
    q: 'ヘッドケアは頭皮を痛めませんか？',
    a: 'ヘッドケアは頭皮への過度な刺激を避け、側頭筋・後頭筋・頭頂部など筋肉の緊張をほぐすアプローチです。圧の強さはお好みに合わせて調整できます。心地よい刺激でリラックスしやすい状態を目指します。',
  },
  {
    q: 'こめかみのズキズキ感にも対応していますか？',
    a: 'こめかみの緊張感・圧迫感にはヘッドケアでのアプローチが有効です。側頭筋（こめかみ周辺）はPC疲れやストレスで特に緊張しやすい部位です。ただし、ズキズキ・ガンガンする強い頭痛は医療機関へのご受診をおすすめします。',
  },
  {
    q: '頭のケアは定期的に通う必要がありますか？',
    a: '1回の施術でもすっきり感を感じていただける方が多いですが、デスクワークや運転が多い方は月2〜4回程度の定期ご利用で、頭まわりを常に整えやすい状態を維持しやすくなります。日々のメンテナンスとしての定期利用をおすすめしています。',
  },
]

export default function HeadachePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ===== 1. Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'お悩み別', href: '/symptom' },
              { label: '頭の重さ・頭痛感' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Head Care</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              頭が重い・こめかみが痛いときのヘッドケア
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「仕事中から頭が重い」「夕方になるとこめかみが締め付けられる」「首こりがひどいと頭まで痛くなる」——PC作業や長時間のデスクワークで首・肩・目を酷使する現代では、頭の重さや圧迫感を感じる方が増えています。MARISAでは、頭・首・肩の緊張をつながりとしてほぐすヘッドケアで、頭まわりの重さをやわらげるサポートをします。
            </p>
          </div>
        </div>
      </div>

      {/* ===== 2. Causes ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Causes"
            ja="頭の重さ・頭痛感の主な原因"
            lead="頭の重さは多くの場合、首・肩・目の疲れと密接に関連しています。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {causes.map((c) => (
              <div key={c.title} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{c.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 max-w-3xl text-sm text-stone-700 leading-loose">
            <p>
              頭の重さ・頭痛感は、単独で起こるよりもPC疲れ・眼精疲労・首こり・ストレスが複合して現れることがほとんどです。複数の原因が重なることで症状が強く感じられるため、根本の緊張を複数個所でほぐすことが、すっきり感を感じやすくするポイントになります。
            </p>
          </div>
        </div>
      </section>

      {/* ===== 3. Life Scenes in Kimitsu ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Life Scenes"
            ja="君津エリアでの頭の重さを感じやすい場面"
            lead="君津の日常生活の中で、頭まわりの重さを感じやすいシーンをご紹介します。"
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

      {/* ===== 4. MARISA Approach ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
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
              側頭筋（こめかみ周辺）・後頭筋（後頭部）・前頭筋（額）など、頭部の筋肉はストレスや眼精疲労で緊張しやすい部位です。ゆっくりとした圧で筋肉の緊張をほぐし、頭まわりをリラックスしやすい状態に整えます。施術後に「頭が軽く感じる」「目がすっきりした気がする」とおっしゃるお客様が多くいらっしゃいます。
            </p>
            <p>
              定期的なケアとしてご活用いただくことで、頭の重さを感じにくい状態を日々のメンテナンスとして整えやすくなります。「疲れたら行く場所」ではなく「定期的に体を整える習慣」として多くの方にご利用いただいています。
            </p>
            <p className="border-l-2 border-brown-300 pl-4 text-stone-600 italic">
              ※ 強い頭痛・吐き気・発熱・視覚異常を伴う場合は医療機関へのご受診をお願いします。当サロンはリラクゼーション施設です。
            </p>
          </div>
        </div>
      </section>

      {/* ===== 5. Recommended Menus ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menus"
            ja="頭の重さにおすすめのメニュー"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl">
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

      {/* ===== 6. Course Duration Guide ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Duration Guide"
            ja="コース時間の目安"
            lead="頭の重さの度合いや全身の疲れに応じて、コース時間を選んでください。"
          />
          <div className="mt-8 space-y-4">
            {[
              { time: '15分', label: 'ヘッドケア単体', desc: '¥2,000。「頭だけ短時間でほぐしたい」「他のメニューに追加したい」方に。' },
              { time: '30分', label: 'ヘッドケア 30分', desc: '¥3,000。側頭部・後頭部・頭頂部を丁寧にほぐす集中ケア。' },
              { time: '60分', label: 'ヘッドセット', desc: '¥5,400。もみほぐし＋ヘッドケアのセット。首から頭まで一体でリセット。' },
              { time: '90分', label: 'ヘッドセット 90分', desc: '¥6,700。全身もみほぐし＋ヘッドケアをゆっくりじっくり。頭も体も疲れた日に。' },
            ].map((item) => (
              <div key={item.time} className="flex gap-4 border border-sand-200 bg-cream-50 p-5">
                <div className="font-en text-xl text-brown-400 font-light w-14 shrink-0">{item.time}</div>
                <div>
                  <p className="text-sm font-medium text-stone-800 mb-1">{item.label}</p>
                  <p className="text-xs text-stone-700 leading-loose">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. Treatment Flow ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Flow"
            ja="施術の流れ"
          />
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

      {/* ===== 8. FAQ ===== */}
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

      {/* ===== 9. Related links ===== */}
      <section className="py-12 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: '眼精疲労・頭の重さ', href: '/symptom/eye-fatigue' },
              { label: '首こりのお悩み', href: '/symptom/neck' },
              { label: 'ストレス・緊張ケア', href: '/symptom/stress' },
              { label: 'ヘッドケアメニュー', href: '/menu/head' },
              { label: 'セットコース', href: '/menu/set' },
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="border border-sand-300 px-3 py-1.5 text-stone-700 hover:border-brown-300 hover:text-brown-500 transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 10. CTA ===== */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">
            頭の重さが気になったら、MARISAへ
          </h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業中・当日予約OK・無料駐車場あり。<br />
            君津のリラクゼーションサロン MARISAへ。
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
