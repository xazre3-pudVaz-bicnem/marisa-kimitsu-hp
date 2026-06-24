import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, LINE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の股関節・お尻まわりのつらさケア｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」の股関節ケア。長時間の座り仕事・歩行時の股関節の詰まり感・お尻の張りをもみほぐしでやわらげます。当日予約OK・夜0時まで営業。',
  keywords: ['君津 股関節 ケア', '君津 お尻 コリ', '君津 骨盤 もみほぐし'],
  openGraph: {
    title: '君津の股関節・お尻まわりのつらさケア｜MARISA 君津店',
    description:
      '千葉県君津市のリラクゼーションサロン「MARISA」の股関節ケア。座り仕事によるお尻の痛み・股関節の詰まり感をもみほぐしでやわらげます。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/symptom/hip-joint' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '股関節まわりの張りはなぜ起こるのですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '長時間のデスクワークや立ち仕事、同じ姿勢の継続などにより、臀部や股関節周辺の筋肉に疲労が蓄積しやすくなります。体の使い方に左右差があると、片側に負担が集中することもあります。もみほぐしで筋肉の緊張をほぐし、体を楽な状態に整えるケアが役立ちます。',
      },
    },
    {
      '@type': 'Question',
      name: '股関節のケアに適したコースはどれですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '臀部・股関節周辺をじっくりほぐすには、もみほぐし90〜120分がおすすめです。腰や太もも周辺も含めて全体的にケアしたい方には90分コース（¥6,400）が特に喜ばれています。初めての方は60分（¥4,500）からお試しいただくのが一般的です。',
      },
    },
    {
      '@type': 'Question',
      name: '歩くときに股関節がつまる感じがするのですがケアできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '長時間の着座や股関節まわりの筋肉（大臀筋・中臀筋・梨状筋・腸腰筋）の緊張が強くなると、歩行時に股関節の可動域が狭くなり「詰まる感じ」として現れることがあります。MARISAではこれらの筋肉の緊張をほぐすリラクゼーションケアを提供しています。強い痛みや関節への影響が疑われる場合は医療機関へのご受診をおすすめします。',
      },
    },
    {
      '@type': 'Question',
      name: '足つぼセットとの組み合わせはできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、股関節まわりのケアと足つぼセットの組み合わせも可能です。股関節の張りと合わせて脚全体の疲れが気になる方には、足つぼセットコース（60分¥5,500・90分¥6,900）が特におすすめです。カウンセリングでご希望をお伝えください。',
      },
    },
    {
      '@type': 'Question',
      name: '鍼灸との組み合わせはできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、MARISAでは鍼灸メニューもご用意しています（公式サイトからの予約のみ）。慢性的な股関節まわりの張りや深部の筋肉へのアプローチには、もみほぐしと鍼灸の組み合わせが好評です。詳しくはスタッフにお気軽にご相談ください。',
      },
    },
  ],
}

const causes = [
  {
    title: 'デスクワーク・長時間の着座',
    desc: '長時間椅子に座り続けると、臀部の筋肉が圧迫され続け、股関節まわりの腸腰筋・臀筋が縮んで固くなります。「長時間座った後に立ち上がりにくい」「歩き始めに股関節が詰まる」という方に多いパターンです。',
  },
  {
    title: '立ち仕事・工場作業',
    desc: '君津市の工場や販売・接客職など、長時間立ち続ける仕事では、股関節周辺に疲労が蓄積しやすい傾向があります。立ちっぱなしで同じ姿勢を続けると、臀部と股関節に偏った負担がかかります。',
  },
  {
    title: '体の左右差・荷重の偏り',
    desc: '利き足への偏った体重のかけ方、バッグを片側だけで持つ習慣などが積み重なると、骨盤・股関節周辺の筋肉バランスに左右差が生じます。「片側のお尻だけが張る」という方はこのパターンが影響しています。',
  },
  {
    title: '車通勤・長距離運転',
    desc: '長時間の車の運転では、シートに深く座り同じ姿勢を続けることで腰・臀部に負担が集中します。君津市から千葉・東京方面への長距離車通勤や仕事での運転が多い方に、股関節まわりの疲れが蓄積しやすい傾向があります。',
  },
  {
    title: '股関節まわりと腰のつながり',
    desc: '臀部の筋肉は腰まわりの筋肉と隣接しているため、お尻の疲れが腰の重さとして感じられたり、その逆のケースもよく見られます。「腰が重いのかお尻が重いのかわからない」という方は両方が連動していることが多いです。',
  },
  {
    title: '運動不足・股関節の硬さ',
    desc: 'ストレッチや運動の習慣が少ない方は、股関節まわりの筋肉が硬くなりやすい傾向があります。「足を大きく開いたり内側に倒したりしにくい」という股関節の可動域の狭さは、周辺筋肉の緊張が蓄積しているサインです。',
  },
]

const connections = [
  {
    area: '腰との連動',
    desc: '大臀筋・中臀筋は腰の筋肉（多裂筋・腸腰筋）と密接につながっています。股関節まわりをほぐすことで、腰の重さが同時に軽く感じやすくなることが多いです。',
  },
  {
    area: '太もも・膝への影響',
    desc: '股関節まわりの筋肉が硬くなると、太もも・膝の動きにも影響が出ることがあります。「膝が重い・曲げにくい」という方は、股関節まわりからのアプローチが役立つことがあります。',
  },
  {
    area: '姿勢・歩行への影響',
    desc: '股関節まわりが硬くなると骨盤の動きが制限され、姿勢や歩行パターンに影響が出ることがあります。「歩き方がぎこちなくなった」という方も、股関節のケアが役立つことがあります。',
  },
]

const scenes = [
  {
    title: 'デスクワーカー・テレワーカー',
    desc: '一日中椅子に座っているデスクワーカーに多い悩みです。「長時間座った後に立ち上がると股関節が詰まる」という方のご利用が多く、腰とお尻をセットでほぐすケアが好評です。',
  },
  {
    title: '君津の工場・製造業の方',
    desc: '長時間の立ち作業や特定の姿勢が続く工場勤務の方に、股関節まわりの疲れでご来店される方が増えています。定期的なケアで翌日への疲れを持ち越しにくくしています。',
  },
  {
    title: '育児中・子どもを抱っこすることが多い方',
    desc: '子どもの抱っこや上げ下ろしで股関節・腰に負担がかかりやすい育児中の方。「腰かお尻が重くなった」というお悩みでご来店される方も多くいらっしゃいます。',
  },
]

const recommendedMenus = [
  {
    tag: '90〜120 min',
    title: 'もみほぐし 90〜120分',
    desc: '90分¥6,400・120分¥8,400。腰・臀部・太ももを連続してしっかりほぐします。全身とともに股関節まわりをじっくりケアしたい方に。',
    href: '/menu/body-care',
    isExternal: false,
  },
  {
    tag: 'Foot Set',
    title: '足つぼセットコース',
    desc: '60分¥5,500・90分¥6,900。股関節まわりと脚全体の疲れを同時にケアしたい方に。下半身全体をまとめてほぐします。',
    href: '/menu/set',
    isExternal: false,
  },
  {
    tag: '鍼灸',
    title: '鍼灸コース（公式サイト予約）',
    desc: '30分+針¥4,500〜。慢性的な股関節まわりの張りや深部へのアプローチに。公式サイトからの予約のみ。',
    href: BMERIT_URL,
    isExternal: true,
  },
]

const steps = [
  { step: '01', title: 'ご予約', desc: 'ホットペッパービューティー・当日来店でご予約。当日予約OK。' },
  { step: '02', title: 'カウンセリング', desc: '股関節の張りの状況・仕事の種類・特に気になる部位をお聞きします。' },
  { step: '03', title: '腰まわりのほぐし', desc: '股関節と連動する腰・骨盤まわりから入念にほぐします。' },
  { step: '04', title: '臀部・股関節の集中ケア', desc: '大臀筋・中臀筋・梨状筋など股関節まわりの筋肉を丁寧にほぐします。圧の強さはご要望に応じて調整。' },
  { step: '05', title: 'アフターケア', desc: '施術後の体の感覚を確認。日常のストレッチや姿勢のポイントをご案内します。' },
]

const faqs = [
  {
    q: '股関節まわりの張りはなぜ起こるのですか？',
    a: '長時間のデスクワークや立ち仕事、同じ姿勢の継続などにより、臀部や股関節周辺の筋肉に疲労が蓄積しやすくなります。体の使い方に左右差があると、片側に負担が集中することもあります。もみほぐしで筋肉の緊張をほぐし、体を楽な状態に整えるケアが役立ちます。',
  },
  {
    q: '股関節のケアに適したコースはどれですか？',
    a: '臀部・股関節周辺をじっくりほぐすには、もみほぐし90〜120分がおすすめです。腰や太もも周辺も含めて全体的にケアしたい方には90分コース（¥6,400）が特に喜ばれています。初めての方は60分（¥4,500）からお試しいただくのが一般的です。',
  },
  {
    q: '歩くときに股関節がつまる感じがするのですがケアできますか？',
    a: '長時間の着座や股関節まわりの筋肉（大臀筋・中臀筋・梨状筋・腸腰筋）の緊張が強くなると、歩行時に股関節の可動域が狭くなり「詰まる感じ」として現れることがあります。MARISAではこれらの筋肉の緊張をほぐすリラクゼーションケアを提供しています。強い痛みや関節への影響が疑われる場合は医療機関へのご受診をおすすめします。',
  },
  {
    q: '足つぼセットとの組み合わせはできますか？',
    a: 'はい、股関節まわりのケアと足つぼセットの組み合わせも可能です。股関節の張りと合わせて脚全体の疲れが気になる方には、足つぼセットコース（60分¥5,500・90分¥6,900）が特におすすめです。カウンセリングでご希望をお伝えください。',
  },
  {
    q: '鍼灸との組み合わせはできますか？',
    a: 'はい、MARISAでは鍼灸メニューもご用意しています（公式サイトからの予約のみ）。慢性的な股関節まわりの張りや深部の筋肉へのアプローチには、もみほぐしと鍼灸の組み合わせが好評です。詳しくはスタッフにお気軽にご相談ください。',
  },
]

export default function HipJointPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ===== 1. Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'お悩み別', href: '/symptom' }, { label: '股関節・お尻まわりの張り' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Hip Joint Care</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              股関節・お尻まわりの張り・重さをほぐす
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「長時間座った後に立ち上がると股関節が詰まる感じ」「お尻がいつも張っている」「歩き出しに股関節が重い」——長時間の座り仕事や立ち仕事が続くと、股関節まわりやお尻の筋肉に疲れが蓄積しやすくなります。MARISAでは臀部・股関節周辺の筋肉へのアプローチを大切にしたもみほぐしで、下半身の重さをやわらげるサポートをします。
            </p>
          </div>
        </div>
      </div>

      {/* ===== 2. Causes ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Causes"
            ja="股関節・お尻まわりが張る原因"
            lead="現代の生活習慣が股関節まわりの特有の緊張を生み出します。"
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
            ja="股関節まわりと体全体のつながり"
            lead="股関節まわりの緊張は、腰・脚・姿勢全体に影響します。"
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
            ja="こんな方の股関節ケアにご利用いただいています"
            lead="君津エリアで股関節のお悩みを抱える方々にご利用いただいています。"
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
          <SectionHeader en="Our Approach" ja="MARISAでのケアアプローチ" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAのもみほぐしでは、臀部・股関節周辺の筋肉にしっかりアプローチします。大臀筋・中臀筋・梨状筋といったお尻まわりの筋肉は、デスクワークや立ち仕事でこわばりやすい部位です。丁寧にほぐすことで、体の重さや張りが軽く感じやすくなります。
            </p>
            <p>
              股関節まわりのケアには、もみほぐし90分コースが特におすすめです。腰・臀部・太ももと連続してケアすることで、下半身全体の疲れをリセットするように感じていただけます。より全身をゆったりとほぐしたい方には120分コースもご用意しています。
            </p>
            <p>
              股関節まわりと腰のコリを同時にお持ちの方が多くいらっしゃいます。腰・臀部・股関節を一連のつながりとしてほぐすことで、それぞれ単独でほぐすよりも下半身が軽く感じやすくなります。
            </p>
          </div>
        </div>
      </section>

      {/* ===== 6. Recommended Menus ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Menus" ja="股関節・お尻まわりにおすすめのメニュー" />
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
            lead="股関節まわりの張りの度合いや全身の疲れに応じてコース時間をお選びください。"
          />
          <div className="mt-8 space-y-4">
            {[
              { time: '60分', label: 'もみほぐし 60分', desc: '¥4,500。腰・臀部・股関節を一体でほぐす定番コース。初めての方に。' },
              { time: '90分', label: 'もみほぐし 90分', desc: '¥6,400。全身とともに股関節まわりをじっくりほぐしたい方に。慢性的な張りに特におすすめ。' },
              { time: '60分', label: '足つぼセット 60分', desc: '¥5,500。股関節まわり＋脚全体の疲れを同時ケア。下半身全体をリセットしたい方に。' },
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
              { label: '腰のケアについて', href: '/symptom/lower-back' },
              { label: '足のだるさ・むくみ', href: '/symptom/leg-fatigue' },
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
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">股関節・お尻まわりのお悩みは、MARISAへ</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業・当日予約OK・無料駐車場あり。<br />
            君津のリラクゼーションサロン MARISA。
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
