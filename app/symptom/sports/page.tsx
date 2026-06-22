import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津のスポーツ後の疲れ・筋疲労のもみほぐし｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」のスポーツ後ケア。ゴルフ・ランニング・チームスポーツ後の筋肉の疲れや張りを、もみほぐしでやわらげます。当日予約OK・夜0時まで営業。',
  keywords: ['君津 スポーツ マッサージ', '君津 筋疲労 ケア', '君津 運動後 もみほぐし'],
  openGraph: {
    title: '君津のスポーツ後の疲れ・筋疲労のもみほぐし｜MARISA 君津店',
    description: '千葉県君津市のリラクゼーションサロン「MARISA」のスポーツ後ケア。ゴルフ・ランニング・チームスポーツ後の筋疲労をもみほぐしでやわらげます。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/symptom/sports' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'スポーツ後の筋疲労にはどのコースがおすすめですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'スポーツ後の筋疲労には「もみほぐし60〜90分」がおすすめです。疲れた部位を集中してほぐしながら全身のコリもケアできます。特に疲弊が強い場合は90分コースで、じっくり体全体をリセットするのがおすすめです。',
      },
    },
    {
      '@type': 'Question',
      name: 'スポーツ後すぐに施術を受けても大丈夫ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '激しい運動の直後（数時間以内）は筋肉が炎症状態にあることがあります。当日夜や翌日以降の施術が体への負担が少なくおすすめです。体が落ち着いてから施術することで、より気持ちよくほぐしていただけます。施術前にカウンセリングでお体の状態をお聞きしますのでご安心ください。',
      },
    },
    {
      '@type': 'Question',
      name: 'MARISAはスポーツマッサージ専門店ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MARISAはリラクゼーションサロンであり、スポーツ医療・治療・リハビリは行っておりません。スポーツ後の筋疲労のほぐし、体のリラクゼーションとして多くのスポーツ愛好家の方にご利用いただいています。怪我の治療や痛みが強い場合は、まず医療機関をご受診ください。',
      },
    },
  ],
}

const importance = [
  {
    title: '筋疲労の蓄積をやわらげる',
    desc: '運動後の筋肉には疲労物質が蓄積し、筋繊維に微小なダメージが生じています。もみほぐしで筋肉の緊張をほぐし、体の疲れをやわらげます。次の日への疲れの持ち越しを軽くしやすくなります。',
  },
  {
    title: '筋肉の緊張を解く',
    desc: '運動中に収縮し続けた筋肉は、運動後も緊張が残りやすい状態です。特に使い込んだ部位は硬くなりがちで、その状態を放置すると慢性的なコリにつながることがあります。もみほぐしで筋肉の緊張を解き、体を整えやすくします。',
  },
  {
    title: 'リラクゼーションによる回復',
    desc: '運動後の体のケアとして、リラクゼーションの時間を取ることは体の回復をサポートします。MARISAでのもみほぐしは、体のリラックスを促すリラクゼーション施術です。スポーツ医療ではありませんが、定期的なケアとしてご活用いただけます。',
  },
]

const sportTypes = [
  {
    sport: 'ゴルフ',
    desc: '同じ方向への繰り返しスイングにより、肩・背中・腰に左右非対称な負担がかかります。スイング後の背中・腰のひねり疲れや、前傾姿勢の持続による首・腰の張りをほぐします。',
    areas: '首・肩・背中・腰',
  },
  {
    sport: 'ランニング',
    desc: '足・ふくらはぎ・太もも・腰への繰り返し衝撃が蓄積します。長距離後のふくらはぎの張り・太ももの重さ・腰の疲れに、もみほぐしと足つぼの組み合わせが好評です。',
    areas: '腰・太もも・ふくらはぎ・足裏',
  },
  {
    sport: 'チームスポーツ（サッカー・野球・バレーなど）',
    desc: '瞬発的な動き・体幹への負荷・反復動作が全身に影響します。試合・練習後の全身疲弊には、もみほぐし90分でじっくりリセットする方法が好評です。',
    areas: '全身（重点部位はスポーツにより異なる）',
  },
]

const faqs = [
  {
    q: 'スポーツ後の筋疲労にはどのコースがおすすめですか？',
    a: 'スポーツ後の筋疲労には「もみほぐし60〜90分」がおすすめです。疲れた部位を集中してほぐしながら全身のコリもケアできます。特に疲弊が強い場合は90分コースで、じっくり体全体をリセットするのがおすすめです。',
  },
  {
    q: 'スポーツ後すぐに施術を受けても大丈夫ですか？',
    a: '激しい運動の直後（数時間以内）は筋肉が炎症状態にあることがあります。当日夜や翌日以降の施術が体への負担が少なくおすすめです。体が落ち着いてから施術することで、より気持ちよくほぐしていただけます。施術前にカウンセリングでお体の状態をお聞きしますのでご安心ください。',
  },
  {
    q: 'MARISAはスポーツマッサージ専門店ですか？',
    a: 'MARISAはリラクゼーションサロンであり、スポーツ医療・治療・リハビリは行っておりません。スポーツ後の筋疲労のほぐし、体のリラクゼーションとして多くのスポーツ愛好家の方にご利用いただいています。怪我の治療や痛みが強い場合は、まず医療機関をご受診ください。',
  },
]

export default function SportsPage() {
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
              { label: 'スポーツ後の疲れ' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Sports Recovery</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              スポーツ後の疲れ・筋肉のケアに
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「ゴルフの翌日は腰がひどい」「ランニング後にふくらはぎが張って歩きにくい」——運動後の筋疲労はケアなしでは蓄積します。MARISAでは、スポーツ後の体の疲れ・筋肉の緊張をもみほぐしでやわらげ、体を整えるサポートをします。当サロンはリラクゼーション施設であり、スポーツ医療・治療は行っておりません。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Importance ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Why Care"
            ja="スポーツ後のケアが大切な理由"
            lead="運動後の筋肉は緊張と疲労が蓄積した状態です。ケアで体を整えやすくしましょう。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {importance.map((c) => (
              <div key={c.title} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{c.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm text-stone-700 leading-loose border-l-2 border-brown-300 pl-4 text-stone-600">
            ※ MARISAはリラクゼーションサロンです。怪我の治療・スポーツリハビリ・医療的処置は行っておりません。痛みが強い・腫れている・可動域が極端に狭い場合は医療機関をご受診ください。
          </p>
        </div>
      </section>

      {/* ===== Sport Types ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="By Sport"
            ja="スポーツの種類別おすすめアプローチ"
            lead="スポーツによって使う筋肉・疲弊する部位が異なります。"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {sportTypes.map((s) => (
              <div key={s.sport} className="border border-sand-200 bg-cream-50 p-6">
                <h3 className="text-sm font-medium text-stone-800 mb-2">{s.sport}</h3>
                <p className="text-xs tracking-widest text-brown-400 mb-3">重点ケア箇所：{s.areas}</p>
                <p className="text-sm text-stone-700 leading-loose">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Recommended Menus ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menus"
            ja="スポーツ後におすすめのメニュー"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">60〜90 min</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">もみほぐし 60〜90分</h3>
              <p className="text-sm text-stone-700 leading-loose mb-4">60分¥4,500〜・90分¥6,500〜。全身の筋疲労をまとめてほぐす定番コース。疲弊が強い日は90分でじっくりケアするのがおすすめです。</p>
              <Link href="/menu" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
                メニューを見る →
              </Link>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Foot Set</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">足つぼセットコース</h3>
              <p className="text-sm text-stone-700 leading-loose mb-4">¥5,500〜。ランニングやチームスポーツで足・ふくらはぎの疲れが特に気になる方に。もみほぐし＋足裏・ふくらはぎの集中ケア。</p>
              <Link href="/menu" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
                メニューを見る →
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
              { label: '全身疲労のお悩み', href: '/symptom/fatigue' },
              { label: '足のだるさ・むくみ', href: '/symptom/leg-fatigue' },
              { label: 'メニュー・料金', href: '/menu' },
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
              { label: 'よくある質問', href: '/faq' },
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
            スポーツ後のリセットに、MARISAへ
          </h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業中・当日予約OK。<br />
            君津のリラクゼーションサロン MARISAへ。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton href="/menu" label="メニューを見る" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
