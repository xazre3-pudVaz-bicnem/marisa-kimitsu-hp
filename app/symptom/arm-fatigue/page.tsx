import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, LINE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の腕・手の疲れケア｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」の腕・手首ケア。タイピング・スマホ・家事による手首・前腕の疲れや腕の重だるさをもみほぐしでやわらげます。当日予約OK・夜0時まで営業。',
  keywords: ['君津 腕 疲れ', '君津 手首 ケア', '君津 PC 腕 疲れ'],
  openGraph: {
    title: '君津の腕・手の疲れケア｜MARISA 君津店',
    description:
      '千葉県君津市のリラクゼーションサロン「MARISA」の腕・手首ケア。タイピング・スマホ・家事による腕のだるさ・疲れをやわらげます。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/symptom/arm-fatigue' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '腕の疲れには全身もみほぐしとどう違いますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MARISAのもみほぐしは全身を対象としており、腕・肘・手首のケアは全身もみほぐしに含まれています。施術前のカウンセリングで「腕を重点的にほぐしてほしい」とお伝えいただければ、腕の時間を多めに取ってケアします。腕だけを単独でケアする専用コースはございませんが、全身ほぐしの中で腕の疲れに対応しています。',
      },
    },
    {
      '@type': 'Question',
      name: 'スマホの使いすぎで腕がだるいのですが施術できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、スマートフォンの長時間使用による腕・手首・肘の疲れにも対応しています。スマホを持ち続ける姿勢は腕だけでなく首・肩にも影響するため、全身もみほぐしで腕から肩・首まで一体でほぐすことをおすすめします。',
      },
    },
    {
      '@type': 'Question',
      name: '腕の痛みがある場合も施術できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '軽い疲れやだるさ・筋肉の張りには対応していますが、強い痛み・しびれ・腫れがある場合はまず医療機関のご受診をお勧めします。当サロンはリラクゼーション施設であり、痛みの診断・治療は行っておりません。施術前のカウンセリングでお体の状態をお知らせください。',
      },
    },
    {
      '@type': 'Question',
      name: '料理・家事で腕が疲れやすいのですが対応できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、家事・育児で腕・手首を酷使される方のご来店も多くいらっしゃいます。包丁の使用・鍋の持ち上げ・抱っこなどで蓄積した前腕・肩の疲れをほぐします。「腕を重点的に」とカウンセリングでお伝えいただければ、腕・前腕・手首に時間をかけてほぐします。',
      },
    },
    {
      '@type': 'Question',
      name: '鍼灸との組み合わせはできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、MARISAでは鍼灸メニューもご用意しています（公式サイトからの予約のみ）。慢性的な腕・前腕の疲れやこわばりには、もみほぐしと鍼灸を組み合わせたケアが好評です。詳しくはスタッフにお気軽にご相談ください。',
      },
    },
  ],
}

const causes = [
  {
    title: 'PC作業・キーボード・マウス操作',
    desc: 'キーボードのタイピングやマウス操作では、前腕の筋肉（前腕屈筋群・前腕伸筋群）が繰り返し収縮し続けます。長時間の作業で筋肉が疲弊し、腕全体のだるさ・張り・こわばりとして現れます。特に「マウスを持つ側の腕だけが疲れる」という方が多くいらっしゃいます。',
  },
  {
    title: 'スマートフォンの長時間使用',
    desc: 'スマートフォンを長時間持ち続けること自体が腕への負担になります。さらに親指での頻繁なタップ・スクロール操作が手首・前腕の筋肉に繰り返し負荷をかけます。通勤中・休憩中・就寝前など、気づかないうちにスマホを使っている時間が積み重なります。',
  },
  {
    title: '料理・家事・育児',
    desc: '包丁の使用・鍋の持ち上げ・洗い物・掃除機がけ・子どもの抱っこ——家事や育児では腕・手首・肘を日常的に酷使します。「主婦の方・育児中の方の腕の疲れ」は見過ごされやすいですが、積み重なることで慢性的な腕の重だるさにつながります。',
  },
  {
    title: '工場作業・手作業の多い仕事',
    desc: '君津市内の工場での手作業・組み立て・検品など、腕・手首・指を繰り返し使う仕事は特定の部位に疲れが蓄積しやすくなります。「同じ部位ばかりが疲れる」という方に多いパターンです。',
  },
  {
    title: '肩こりからの波及',
    desc: '肩の筋肉（三角筋・回旋筋腱板）の緊張が強くなると、腕全体の筋肉への血流が低下しやすくなります。「肩がこると腕まで重くなる」という方は、肩から腕への緊張の波及が起きているサインです。',
  },
  {
    title: '睡眠中の不自然な姿勢',
    desc: '横向きで寝るときに腕を下にして寝る・うつ伏せで寝るなど、就寝中の姿勢によって腕への血流が妨げられることがあります。「朝起きると腕がだるい」という方はこのパターンが関係していることがあります。',
  },
]

const shoulderConnection = [
  {
    title: '肩から腕全体のつながり',
    desc: '腕の疲れは腕だけの問題ではありません。肩の筋肉（三角筋・回旋筋腱板）から上腕二頭筋・上腕三頭筋、さらに前腕・手首へと一体のつながりで動いています。「腕が疲れた」と感じる時、肩まわりにも緊張が蓄積していることがほとんどです。',
  },
  {
    title: '首こり・肩こりとの連動',
    desc: '腕を長時間使い続けると、その負担は肩関節・肩甲骨を経由して首・肩のコリとしても現れます。「腕は疲れているし、肩も凝っている」という方は、この連動が起きているサインです。腕だけでなく肩・首まで一体でほぐすことが大切です。',
  },
  {
    title: '腕の疲れと睡眠の浅さ',
    desc: '腕・肩まわりの筋肉の緊張が強いと、横になっても体が休まりにくくなることがあります。「腕が張ったまま眠れない」という方には、就寝前のもみほぐしで腕・肩の緊張をほぐすことが役立つことがあります。',
  },
]

const scenes = [
  {
    title: 'PC・デスクワーク中心の仕事の方',
    desc: '一日中タイピングやマウス操作をする方は、利き手側の前腕・手首に疲れが溜まりやすくなります。仕事帰りに腕を重点的にほぐすケアとしてご利用いただいています。',
  },
  {
    title: '家事・育児で腕を使いすぎの方',
    desc: '子どもの抱っこ・家事全般で腕を日々酷使している方。「腕が上がらない」「手首が疲れた」という状態になりやすく、もみほぐしで腕の負担をやわらげるサポートをします。',
  },
  {
    title: '工場・手作業の多い仕事の方',
    desc: '君津の工場や製造業で手作業が多い方。同じ動作の繰り返しで特定の部位が疲れやすく、定期的なケアで日々のメンテナンスとしてご利用いただいています。',
  },
]

const recommendedMenus = [
  {
    tag: '60 min',
    title: 'もみほぐし 60分（腕・肩重点）',
    desc: '¥4,500。腕の疲れと合わせて肩・首もまとめてほぐします。カウンセリングで「腕中心に」とお伝えください。',
    href: '/menu/body-care',
    isExternal: false,
  },
  {
    tag: '90 min',
    title: 'もみほぐし 90分',
    desc: '¥6,400。腕・肩・首・背中・腰と全身をじっくりほぐします。全身疲れも一緒にリセットしたい方に。',
    href: '/menu/body-care',
    isExternal: false,
  },
  {
    tag: '鍼灸',
    title: '鍼灸コース（公式サイト予約）',
    desc: '30分+針¥4,500〜。慢性的な腕・前腕の疲れや張りに。もみほぐしでほぐれにくい深部へのアプローチ。公式サイトからの予約のみ。',
    href: BMERIT_URL,
    isExternal: true,
  },
]

const steps = [
  { step: '01', title: 'ご予約', desc: 'ホットペッパービューティー・当日来店でご予約。当日予約OK。' },
  { step: '02', title: 'カウンセリング', desc: '腕の疲れの状況・特に気になる部位・圧の好みをお聞きします。' },
  { step: '03', title: '肩・首のほぐし', desc: '腕の疲れと連動する肩・首から先にほぐします。' },
  { step: '04', title: '腕・前腕・手首の集中ケア', desc: '前腕屈筋群・伸筋群・上腕二頭筋・上腕三頭筋を丁寧にほぐします。圧の強さはご要望に応じて調整。' },
  { step: '05', title: 'アフターケア', desc: '施術後の体の感覚を確認。腕のセルフストレッチや日常ケアのポイントをご案内します。' },
]

const faqs = [
  {
    q: '腕の疲れには全身もみほぐしとどう違いますか？',
    a: 'MARISAのもみほぐしは全身を対象としており、腕・肘・手首のケアは全身もみほぐしに含まれています。施術前のカウンセリングで「腕を重点的にほぐしてほしい」とお伝えいただければ、腕の時間を多めに取ってケアします。腕だけを単独でケアする専用コースはございませんが、全身ほぐしの中で腕の疲れに対応しています。',
  },
  {
    q: 'スマホの使いすぎで腕がだるいのですが施術できますか？',
    a: 'はい、スマートフォンの長時間使用による腕・手首・肘の疲れにも対応しています。スマホを持ち続ける姿勢は腕だけでなく首・肩にも影響するため、全身もみほぐしで腕から肩・首まで一体でほぐすことをおすすめします。',
  },
  {
    q: '腕の痛みがある場合も施術できますか？',
    a: '軽い疲れやだるさ・筋肉の張りには対応していますが、強い痛み・しびれ・腫れがある場合はまず医療機関のご受診をお勧めします。当サロンはリラクゼーション施設であり、痛みの診断・治療は行っておりません。施術前のカウンセリングでお体の状態をお知らせください。',
  },
  {
    q: '料理・家事で腕が疲れやすいのですが対応できますか？',
    a: 'はい、家事・育児で腕・手首を酷使される方のご来店も多くいらっしゃいます。包丁の使用・鍋の持ち上げ・抱っこなどで蓄積した前腕・肩の疲れをほぐします。「腕を重点的に」とカウンセリングでお伝えいただければ、腕・前腕・手首に時間をかけてほぐします。',
  },
  {
    q: '鍼灸との組み合わせはできますか？',
    a: 'はい、MARISAでは鍼灸メニューもご用意しています（公式サイトからの予約のみ）。慢性的な腕・前腕の疲れやこわばりには、もみほぐしと鍼灸を組み合わせたケアが好評です。詳しくはスタッフにお気軽にご相談ください。',
  },
]

export default function ArmFatiguePage() {
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
              { label: '腕・手の疲れ' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Arm &amp; Wrist Care</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              腕・手首の疲れ・重だるさをほぐす
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「PC作業の後に腕がだるくて重い」「スマホを持ちすぎて手首が疲れた」「家事で腕の筋肉が張っている」——腕・肘・手首の疲れは、日常の積み重ねで慢性化しやすい部位です。MARISAでは、腕の疲れを全身もみほぐしの中でケアし、肩・首とのつながりも意識してほぐし、腕まわりの負担をやわらげるサポートをします。
            </p>
          </div>
        </div>
      </div>

      {/* ===== 2. Causes ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Causes"
            ja="腕の疲れの主な原因"
            lead="現代の日常生活では、腕・手首を酷使する場面が多くあります。"
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
              これらの動作は一つひとつの負担は小さくても、毎日継続することで筋肉の疲弊が積み重なります。「気づいたら慢性的に腕がだるい」という状態になりやすいのが腕の疲れの特徴です。
            </p>
          </div>
        </div>
      </section>

      {/* ===== 3. Shoulder Connection ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Connection"
            ja="肩から腕全体のつながり"
            lead="腕の疲れは腕単体の問題ではなく、肩・首とのつながりで考えることが大切です。"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {shoulderConnection.map((c) => (
              <div key={c.title} className="border border-sand-200 bg-cream-50 p-6">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{c.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. Life Scenes ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Life Scenes"
            ja="こんな方の腕の疲れケアにご利用いただいています"
            lead="君津エリアで腕・手首の疲れにお悩みの方々にご利用いただいています。"
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

      {/* ===== 5. MARISA Approach ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Our Approach"
            ja="MARISAのアプローチ"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              腕のケアはMARISAの全身もみほぐしに含まれています。施術前のカウンセリングで「腕が特に疲れている」とお伝えいただければ、腕・前腕・手首を重点的にほぐす時間を多く取ります。
            </p>
            <p>
              腕のほぐしでは、前腕屈筋群・前腕伸筋群・上腕二頭筋・上腕三頭筋を丁寧にほぐします。腕は比較的繊細な部位のため、圧の強さはお好みに合わせて調整します。「強くほぐしてほしい」「優しい圧で」など、遠慮なくお申し付けください。
            </p>
            <p>
              腕の疲れと肩こりを両方お持ちの方が多いため、肩・首・背中との連動を意識しながら施術します。腕だけをほぐしても肩・首に緊張が残っていると腕の疲れが戻りやすいため、一体でほぐすことが大切です。
            </p>
            <p className="border-l-2 border-brown-300 pl-4 text-stone-600 italic">
              ※ 強い痛み・しびれ・腫れがある場合は医療機関へのご受診をお勧めします。当サロンはリラクゼーション施設であり、診断・治療は行っておりません。
            </p>
          </div>
        </div>
      </section>

      {/* ===== 6. Recommended Menus ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menus"
            ja="腕の疲れにおすすめのメニュー"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl">
            {recommendedMenus.map((m) => (
              <div key={m.title} className="border border-sand-200 bg-cream-50 p-6">
                <p className="text-xs tracking-widest text-brown-400 mb-2">{m.tag}</p>
                <h3 className="text-sm font-medium text-stone-800 mb-2">{m.title}</h3>
                <p className="text-sm text-stone-700 leading-loose mb-4">{m.desc}</p>
                {m.isExternal ? (
                  <a href={m.href} target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
                    公式サイトで予約 →
                  </a>
                ) : (
                  <Link href={m.href} className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
                    詳しく見る →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. Duration Guide ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Duration Guide"
            ja="コース時間の目安"
            lead="腕の疲れの度合いや全身の疲れに応じてコース時間をお選びください。"
          />
          <div className="mt-8 space-y-4">
            {[
              { time: '60分', label: 'もみほぐし 60分', desc: '¥4,500。腕＋肩＋首をまとめてほぐす定番コース。腕の疲れと肩こりを同時にケア。' },
              { time: '90分', label: 'もみほぐし 90分', desc: '¥6,400。全身の疲れと腕の疲れを同時にリセットしたい方に。腕だけでなく全身の血行も促します。' },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 border border-sand-200 bg-cream-50 p-5">
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
              { label: '肩こりのお悩み', href: '/symptom/stiff-shoulder' },
              { label: 'デスクワーク疲れのお悩み', href: '/symptom/desk-work' },
              { label: '肩甲骨まわりの張り', href: '/symptom/shoulder-blade' },
              { label: 'メニュー・料金', href: '/menu' },
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="border border-sand-300 px-3 py-1.5 text-stone-700 hover:border-brown-300 hover:text-brown-500 transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">
            腕・手首の疲れは、MARISAへ
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
