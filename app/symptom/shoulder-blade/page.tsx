import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, LINE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の肩甲骨まわりの張り・もみほぐし｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」の肩甲骨ケア。猫背・デスクワークによる背中の張りや肩甲骨内側の固さをもみほぐしでほぐします。当日予約OK・夜0時まで営業。',
  keywords: ['君津 肩甲骨 張り', '君津 背中 コリ', '君津 肩甲骨 ケア'],
  openGraph: {
    title: '君津の肩甲骨まわりの張り・もみほぐし｜MARISA 君津店',
    description:
      '千葉県君津市のリラクゼーションサロン「MARISA」の肩甲骨ケア。猫背・デスクワークによる肩甲骨内側の固さや背中の張りをほぐします。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/symptom/shoulder-blade' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '肩甲骨まわりのコリにおすすめのコースは？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '肩甲骨まわりのコリには「もみほぐし60〜90分」がおすすめです。背中・肩甲骨間・肩・首をまとめてほぐせます。肩こりや頭の重さも気になる方はヘッドセットコースで首から頭までのケアも加えることができます。カウンセリングでお体の状態をお聞きしてご提案します。',
      },
    },
    {
      '@type': 'Question',
      name: '背中の中央（脊柱起立筋）あたりの張りにも対応できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、背中全体のほぐしに対応しています。脊柱起立筋・広背筋・菱形筋など、背中の大きな筋肉をほぐします。「肩甲骨の間が特に気になる」「背中の真ん中が張っている」という方も多く、カウンセリングで重点部位をお聞きして施術します。',
      },
    },
    {
      '@type': 'Question',
      name: '肩甲骨まわりのコリは肩こりと別物ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '肩甲骨まわりと肩こりは密接に連動しています。肩甲骨が動きにくくなると肩への負担が増し、肩こりを引き起こしやすくなります。逆に肩がこると肩甲骨まわりの筋肉にも緊張が広がります。MARISAでは肩・肩甲骨・背中を一体としてほぐすアプローチをとっています。',
      },
    },
    {
      '@type': 'Question',
      name: '「背中が板みたいに固い」という感覚はなぜ起きるのですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '長時間の前傾姿勢やデスクワーク・スマートフォン操作が続くと、肩甲骨を外側に引っ張り続ける状態が続きます。肩甲骨を内側に引き寄せる菱形筋・中部僧帽筋が引き伸ばされた状態で固まることで、「板みたい」な硬さを感じやすくなります。',
      },
    },
    {
      '@type': 'Question',
      name: '鍼灸（はり）との併用は可能ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、MARISAでは鍼灸メニューもご用意しています（公式サイトからの予約のみ）。慢性化した肩甲骨まわりの張りには、もみほぐしと鍼灸を組み合わせたケアが好評です。詳しくはスタッフにお気軽にご相談ください。',
      },
    },
  ],
}

const causes = [
  {
    title: '猫背・巻き肩',
    desc: 'パソコン作業やスマートフォン操作で肩が前方に出る「巻き肩」の姿勢が続くと、肩甲骨が外側に引っ張られたまま固定されます。肩甲骨を内側に引き寄せる筋肉（菱形筋・中部僧帽筋）が伸ばされ続けることで、慢性的な張りが生じます。',
  },
  {
    title: '腕を前方で使い続ける動作',
    desc: 'キーボード操作・マウス操作・料理・育児（抱っこ）など、腕を体の前で使い続ける動作は肩甲骨を外転させ続けます。この姿勢が習慣化すると、肩甲骨を安定させるための筋肉群に継続的な負担がかかります。',
  },
  {
    title: '長時間の背もたれ使用',
    desc: '背もたれに寄りかかった姿勢では背中の筋肉が働かずに弱くなりがちです。一方で不自然な圧迫がかかる部位の筋肉は硬くなります。「背もたれから離れたとき背中が張る」という方に多いパターンです。',
  },
  {
    title: '運動不足と体幹の弱さ',
    desc: '肩甲骨まわりの筋肉は体幹の安定にも関わっています。運動不足で体幹筋が弱くなると、肩甲骨まわりの筋肉が代償として過剰に働き、慢性的な疲弊につながります。',
  },
  {
    title: '重いバッグの片側持ち',
    desc: '重いカバンを常に片側で持つ習慣があると、左右の肩甲骨の高さや筋肉のバランスに差が生じます。「左右で肩の高さが違う」という方はこのパターンが影響していることがあります。',
  },
  {
    title: '首こりからの波及',
    desc: '首の緊張が強くなると、首と肩甲骨をつなぐ筋肉（肩甲挙筋）にも緊張が広がります。「首がこると背中まで張る」という連動も肩甲骨まわりの張りの一因です。',
  },
]

const connections = [
  {
    area: '肩こりとの連動',
    desc: '肩甲骨を囲む僧帽筋・肩甲挙筋は、首・肩のこりと一体につながっています。肩甲骨まわりがほぐれると、肩こりも軽く感じやすくなることが多いです。',
  },
  {
    area: '首こりとの連動',
    desc: '肩甲骨の動きが制限されると首への負担が増します。「首だけケアしても戻りが早い」という方は、肩甲骨まわりから同時にほぐすことで変化を感じやすくなります。',
  },
  {
    area: '呼吸への影響',
    desc: '肩甲骨まわりや胸まわりの筋肉が緊張していると、胸が広がりにくくなり呼吸が浅くなりがちです。肩甲骨まわりをほぐすことで、深い呼吸がしやすくなります。',
  },
]

const scenes = [
  {
    title: 'PC・デスクワーク中心の仕事の方',
    desc: '君津市内での事務職・テレワーク勤務の方を中心に、背中の板状の固さでご来店される方が多くいらっしゃいます。週1〜2回の定期ご利用で背中の張りを軽減されている方も多数います。',
  },
  {
    title: '製造業・工場勤務の方',
    desc: '君津の大型工場での中腰・前傾作業が続く方も肩甲骨まわりに緊張が溜まりやすい傾向があります。仕事帰りにMARISAで背中の疲れをリセットしてから帰宅するご利用が人気です。',
  },
  {
    title: '子育て中・家事が多い方',
    desc: '子どもを抱っこする動作や料理・洗い物など、腕を前で使い続ける家事・育児は肩甲骨への負担が大きい動作です。「背中が重い」という方のご利用も増えています。',
  },
]

const recommendedMenus = [
  {
    tag: '60〜90 min',
    title: 'もみほぐし 60〜90分（背中重点）',
    desc: '60分¥4,500・90分¥6,400。背中・肩甲骨まわり・肩・首を重点的にほぐします。「背中中心に念入りにほぐしてほしい」という方に。',
    href: '/menu/body-care',
    isExternal: false,
  },
  {
    tag: '鍼灸',
    title: '鍼灸コース（公式サイト予約）',
    desc: '30分+針¥4,500〜。慢性化した肩甲骨まわりの固さには鍼灸とのケアの組み合わせも好評です。もみほぐしでほぐれにくい深部の緊張にアプローチ。',
    href: BMERIT_URL,
    isExternal: true,
  },
]

const steps = [
  { step: '01', title: 'ご予約', desc: 'ホットペッパービューティー・当日来店でご予約。当日予約OK。' },
  { step: '02', title: 'カウンセリング', desc: '肩甲骨の張りの状況・特に気になる部位・圧の好みをお聞きします。' },
  { step: '03', title: '首・肩のほぐし', desc: '肩甲骨と連動する首・肩から入念にほぐします。' },
  { step: '04', title: '肩甲骨・背中の集中ケア', desc: '菱形筋・中部僧帽筋・広背筋など背中の筋肉を丁寧にほぐします。圧の強さはご要望に応じて調整。' },
  { step: '05', title: 'アフターケア', desc: '施術後の体の感覚を確認。日常のセルフストレッチや姿勢のポイントをご案内します。' },
]

const faqs = [
  {
    q: '肩甲骨まわりのコリにおすすめのコースは？',
    a: '肩甲骨まわりのコリには「もみほぐし60〜90分」がおすすめです。背中・肩甲骨間・肩・首をまとめてほぐせます。肩こりや頭の重さも気になる方はヘッドセットコースで首から頭までのケアも加えることができます。カウンセリングでお体の状態をお聞きしてご提案します。',
  },
  {
    q: '背中の中央（脊柱起立筋）あたりの張りにも対応できますか？',
    a: 'はい、背中全体のほぐしに対応しています。脊柱起立筋・広背筋・菱形筋など、背中の大きな筋肉をほぐします。「肩甲骨の間が特に気になる」「背中の真ん中が張っている」という方も多く、カウンセリングで重点部位をお聞きして施術します。',
  },
  {
    q: '肩甲骨まわりのコリは肩こりと別物ですか？',
    a: '肩甲骨まわりと肩こりは密接に連動しています。肩甲骨が動きにくくなると肩への負担が増し、肩こりを引き起こしやすくなります。逆に肩がこると肩甲骨まわりの筋肉にも緊張が広がります。MARISAでは肩・肩甲骨・背中を一体としてほぐすアプローチをとっています。',
  },
  {
    q: '「背中が板みたいに固い」という感覚はなぜ起きるのですか？',
    a: '長時間の前傾姿勢やデスクワーク・スマートフォン操作が続くと、肩甲骨を外側に引っ張り続ける状態が続きます。肩甲骨を内側に引き寄せる菱形筋・中部僧帽筋が引き伸ばされた状態で固まることで、「板みたい」な硬さを感じやすくなります。',
  },
  {
    q: '鍼灸（はり）との併用は可能ですか？',
    a: 'はい、MARISAでは鍼灸メニューもご用意しています（公式サイトからの予約のみ）。慢性化した肩甲骨まわりの張りには、もみほぐしと鍼灸を組み合わせたケアが好評です。詳しくはスタッフにお気軽にご相談ください。',
  },
]

export default function ShoulderBladePage() {
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
              { label: '肩甲骨まわりの張り' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Shoulder Blade</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              肩甲骨まわりの張り・背中のコリをほぐす
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「背中の肩甲骨の間が板みたいに固い」「背中全体が張って重い」「姿勢を正そうとしても背中が痛い」——デスクワークや前傾姿勢が続くと、肩甲骨まわりの筋肉に特有の緊張が蓄積します。MARISAでは、肩甲骨・背中・肩・首を一体としてほぐし、背中の重さや張りをやわらげるサポートをします。
            </p>
          </div>
        </div>
      </div>

      {/* ===== 2. Causes ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Causes"
            ja="肩甲骨まわりが張る原因"
            lead="現代の生活習慣が肩甲骨まわりの特有の緊張を生み出します。"
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

      {/* ===== 3. Connections ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Connection"
            ja="肩甲骨まわりと体全体のつながり"
            lead="肩甲骨まわりのコリは、首・肩・呼吸にも影響します。"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {connections.map((c) => (
              <div key={c.area} className="border border-sand-200 bg-cream-50 p-6">
                <p className="text-xs tracking-widest text-brown-400 uppercase mb-2">{c.area}</p>
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
            ja="君津エリアでよくある肩甲骨まわりの張り"
            lead="こんな方々がMARISAの肩甲骨ケアをご利用いただいています。"
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
            ja="MARISAでのアプローチ"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              肩甲骨まわりのほぐしでは、「菱形筋」「中部・下部僧帽筋」「肩甲挙筋」「広背筋」など、背中を構成する複数の筋肉群にアプローチします。表面の筋肉だけでなく深部の筋肉にも丁寧に圧をかけることで、「板みたいに固い」と感じる背中の緊張を解きほぐします。
            </p>
            <p>
              背中は体の中でも大きな筋肉が集まる部位のため、しっかりほぐすには時間が必要です。「背中中心にほぐしてほしい」という方には、60分以上のコースで重点的にケアするのがおすすめです。施術前のカウンセリングで重点部位・圧の好みをお聞きして、その日の施術を組み立てます。
            </p>
            <p>
              肩こりと肩甲骨まわりのコリを同時にお持ちの方が多くいらっしゃいます。肩・肩甲骨・首を一連のつながりとしてほぐすことで、それぞれ単独でほぐすよりも体が軽く感じやすくなります。
            </p>
          </div>
        </div>
      </section>

      {/* ===== 6. Recommended Menus ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menus"
            ja="肩甲骨まわりにおすすめのメニュー"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
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

      {/* ===== 7. Course Duration Guide ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Duration Guide"
            ja="コース時間の目安"
            lead="肩甲骨まわりの張りの度合いに応じてコース時間をお選びください。"
          />
          <div className="mt-8 space-y-4">
            {[
              { time: '60分', label: 'もみほぐし 60分', desc: '¥4,500。背中・肩甲骨・肩・首を一体でほぐす定番コース。' },
              { time: '90分', label: 'もみほぐし 90分', desc: '¥6,400。全身とともに肩甲骨まわりをじっくりほぐしたい方に。慢性的な張りに特におすすめ。' },
              { time: '60分', label: 'ヘッドセット 60分', desc: '¥5,400。肩甲骨＋頭・首のセットケア。「背中も頭も疲れた日」に。' },
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
              { label: '首こりのお悩み', href: '/symptom/neck' },
              { label: '姿勢・猫背のケア', href: '/symptom/posture' },
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
            肩甲骨まわりのお悩みは、MARISAへ
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
