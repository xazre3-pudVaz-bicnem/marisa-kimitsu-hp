import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, LINE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津のスポーツ後の体のケア・もみほぐし｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」のスポーツ後ケア。ゴルフ・ランニング・サッカーなど運動後の筋肉疲労・脚の張りをもみほぐし・足つぼでやわらげます。当日予約OK・夜0時まで営業。',
  keywords: ['君津 スポーツ後 ケア', '君津 運動後 マッサージ', '君津 筋肉疲労'],
  openGraph: {
    title: '君津のスポーツ後の体のケア・もみほぐし｜MARISA 君津店',
    description:
      '千葉県君津市のリラクゼーションサロン「MARISA」のスポーツ後ケア。ゴルフ・ランニング後の筋肉疲労をもみほぐしでやわらげます。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/symptom/sports' },
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
        text: 'スポーツ後の筋疲労には「もみほぐし90〜120分」がおすすめです。全身の疲れた部位を集中してほぐしながら、体全体のコリもケアできます。脚の疲れが強い場合は足つぼセット（60分¥5,500〜）との組み合わせも好評です。',
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
        text: 'MARISAはリラクゼーションサロンであり、スポーツ医療・治療・リハビリは行っておりません。スポーツ後の筋疲労のほぐし・体のリラクゼーションとして多くのスポーツ愛好家の方にご利用いただいています。怪我の治療や痛みが強い場合は、まず医療機関をご受診ください。',
      },
    },
    {
      '@type': 'Question',
      name: 'ゴルフの翌日に腰が重くなります。対応できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、ゴルフ後の腰・背中の張りに対応しています。ゴルフのスイング動作は同じ方向への反復で腰・背中に左右非対称な負担をかけます。カウンセリングで「ゴルフの翌日で腰が重い」とお伝えいただければ、その部位を重点的にほぐします。',
      },
    },
    {
      '@type': 'Question',
      name: '鍼灸との組み合わせはできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、MARISAでは鍼灸メニューもご用意しています（公式サイトからの予約のみ）。スポーツ後の深部の筋疲労や慢性的なコリには、もみほぐしと鍼灸の組み合わせが喜ばれています。詳しくはスタッフにお気軽にご相談ください。',
      },
    },
  ],
}

const importance = [
  {
    title: '筋疲労の負担をやわらげる',
    desc: '運動後の筋肉には疲労物質が蓄積し、筋繊維に微小なダメージが生じています。もみほぐしで筋肉の緊張をほぐし、体の疲れをやわらげます。次の日への疲れの持ち越しを軽くしやすくなります。',
  },
  {
    title: '筋肉の緊張を解く',
    desc: '運動中に収縮し続けた筋肉は、運動後も緊張が残りやすい状態です。特に使い込んだ部位は硬くなりがちで、その状態を放置すると慢性的なコリにつながることがあります。もみほぐしで筋肉の緊張をほぐし、体を整えやすくします。',
  },
  {
    title: 'リラクゼーションによる回復サポート',
    desc: '運動後の体のケアとして、リラクゼーションの時間を取ることは体の負担をやわらげるサポートになります。MARISAのもみほぐしは、体のリラックスを促すリラクゼーション施術です。定期的なメンテナンスとしてご活用いただけます。',
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
  {
    sport: '水泳',
    desc: '肩・背中・腰を大きく使う水泳では、特に肩まわりや広背筋の疲れが蓄積しやすくなります。水泳後の肩の重さ・背中の張りには60〜90分のもみほぐしが好評です。',
    areas: '肩・背中・腰',
  },
  {
    sport: 'テニス・バドミントン',
    desc: 'ラケットスポーツは利き手側の腕・肩に偏った負担がかかります。「利き手側の肩や背中だけがこる」という方には、腕・肩・背中を重点的にほぐすアプローチをとります。',
    areas: '腕・肩・背中（利き手側重点）',
  },
  {
    sport: 'ヨガ・ストレッチ系',
    desc: 'ポーズの維持や深いストレッチで筋肉に意外な負担がかかることがあります。「ヨガの翌日なぜか体が重い」という方にも、全身ほぐしの定期ケアが役立ちます。',
    areas: '全体的に・特に股関節・背中',
  },
]

const scenes = [
  {
    title: '君津・周辺エリアのゴルフ愛好家',
    desc: '君津・富津・木更津にはゴルフ場が多く、週末ゴルフ後の腰・背中の疲れでご来店される方が多くいらっしゃいます。日曜日の夕方のご予約が特に人気です。',
  },
  {
    title: 'ランニング・マラソン愛好家',
    desc: '君津市内の公園や道路をランニングされる方が、ふくらはぎや足裏の張りでご利用いただいています。足つぼセットとの組み合わせが特に好評です。',
  },
  {
    title: 'お子様のスポーツ送迎で一緒に体を使う親御さん',
    desc: '子どもの練習・試合の準備や応援で体を動かす機会が多い方にも、スポーツ後のリラクゼーションとしてご利用いただいています。',
  },
]

const recommendedMenus = [
  {
    tag: '90〜120 min',
    title: 'もみほぐし 90〜120分',
    desc: '90分¥6,400・120分¥8,400。全身の筋疲労をまとめてほぐす定番コース。疲弊が強い日は120分でとことんリセットするのがおすすめ。',
    href: '/menu/body-care',
    isExternal: false,
  },
  {
    tag: 'Foot Set',
    title: '足つぼセットコース',
    desc: '60分¥5,500・90分¥6,900。ランニングやチームスポーツで足・ふくらはぎの疲れが気になる方に。もみほぐし＋足裏・ふくらはぎの集中ケア。',
    href: '/menu/set',
    isExternal: false,
  },
  {
    tag: '鍼灸',
    title: '鍼灸コース（公式サイト予約）',
    desc: '30分+針¥4,500〜。慢性的な筋疲労や深部へのアプローチに。もみほぐしでほぐれにくい部位への鍼灸ケア。公式サイトからの予約のみ。',
    href: BMERIT_URL,
    isExternal: true,
  },
]

const steps = [
  { step: '01', title: 'ご予約', desc: 'ホットペッパービューティー・当日来店でご予約。スポーツ後のケアは当日予約OK。' },
  { step: '02', title: 'カウンセリング', desc: 'どのスポーツをしたか・疲れが強い部位・圧の好みをお聞きします。' },
  { step: '03', title: '重点ほぐし', desc: 'スポーツで特に疲れた部位を重点的にほぐします。' },
  { step: '04', title: '全身ケア', desc: '全身の筋疲労を一体としてほぐし、体全体の緊張をリセットします。' },
  { step: '05', title: 'アフターケア', desc: '施術後の体の感覚を確認。次回ケアのタイミングやアフタースポーツのセルフケアをご案内します。' },
]

const faqs = [
  {
    q: 'スポーツ後の筋疲労にはどのコースがおすすめですか？',
    a: 'スポーツ後の筋疲労には「もみほぐし90〜120分」がおすすめです。全身の疲れた部位を集中してほぐしながら、体全体のコリもケアできます。脚の疲れが強い場合は足つぼセット（60分¥5,500〜）との組み合わせも好評です。',
  },
  {
    q: 'スポーツ後すぐに施術を受けても大丈夫ですか？',
    a: '激しい運動の直後（数時間以内）は筋肉が炎症状態にあることがあります。当日夜や翌日以降の施術が体への負担が少なくおすすめです。体が落ち着いてから施術することで、より気持ちよくほぐしていただけます。施術前にカウンセリングでお体の状態をお聞きしますのでご安心ください。',
  },
  {
    q: 'MARISAはスポーツマッサージ専門店ですか？',
    a: 'MARISAはリラクゼーションサロンであり、スポーツ医療・治療・リハビリは行っておりません。スポーツ後の筋疲労のほぐし・体のリラクゼーションとして多くのスポーツ愛好家の方にご利用いただいています。怪我の治療や痛みが強い場合は、まず医療機関をご受診ください。',
  },
  {
    q: 'ゴルフの翌日に腰が重くなります。対応できますか？',
    a: 'はい、ゴルフ後の腰・背中の張りに対応しています。ゴルフのスイング動作は同じ方向への反復で腰・背中に左右非対称な負担をかけます。カウンセリングで「ゴルフの翌日で腰が重い」とお伝えいただければ、その部位を重点的にほぐします。',
  },
  {
    q: '鍼灸との組み合わせはできますか？',
    a: 'はい、MARISAでは鍼灸メニューもご用意しています（公式サイトからの予約のみ）。スポーツ後の深部の筋疲労や慢性的なコリには、もみほぐしと鍼灸の組み合わせが喜ばれています。詳しくはスタッフにお気軽にご相談ください。',
  },
]

export default function SportsPage() {
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
              { label: 'スポーツ後の疲れ' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Sports Recovery</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              スポーツ後の筋肉疲労・体のケア
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「ゴルフの翌日は腰がひどい」「ランニング後にふくらはぎが張って歩きにくい」「試合後は全身が重い」——運動後の筋疲労はケアなしでは蓄積します。MARISAでは、スポーツ後の体の疲れ・筋肉の緊張をもみほぐしでやわらげ、体を整えるサポートをします。当サロンはリラクゼーション施設であり、スポーツ医療・治療は行っておりません。
            </p>
          </div>
        </div>
      </div>

      {/* ===== 2. Why Care ===== */}
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

      {/* ===== 3. Sport Types ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="By Sport"
            ja="スポーツの種類別おすすめアプローチ"
            lead="スポーツによって使う筋肉・疲弊する部位が異なります。"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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

      {/* ===== 4. Life Scenes ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Life Scenes"
            ja="君津エリアのスポーツ愛好家の方のご利用"
            lead="こんな方々がスポーツ後のケアとしてMARISAをご利用いただいています。"
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

      {/* ===== 5. Recommended Menus ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menus"
            ja="スポーツ後におすすめのメニュー"
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

      {/* ===== 6. Duration Guide ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Duration Guide"
            ja="コース時間の目安"
            lead="運動の強度や全身の疲れに応じてコース時間をお選びください。"
          />
          <div className="mt-8 space-y-4">
            {[
              { time: '60分', label: 'もみほぐし 60分', desc: '¥4,500。軽〜中程度の運動後の全身リセットに。特定部位の集中ケアにも対応。' },
              { time: '90分', label: 'もみほぐし 90分', desc: '¥6,400。中〜強度の運動後の全身ほぐしに。全身の筋疲労をしっかりリセットしたい方に。' },
              { time: '120分', label: 'もみほぐし 120分', desc: '¥8,400。激しい試合・長距離後の疲弊に。全身をとことんほぐす最長コース。' },
              { time: '60分', label: '足つぼセット 60分', desc: '¥5,500。ランニング・立ち系スポーツ後の脚の疲れに特化したセットコース。' },
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

      {/* ===== 7. Treatment Flow ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
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
              { label: '全身疲労のお悩み', href: '/symptom/fatigue' },
              { label: '足のだるさ・むくみ', href: '/symptom/leg-fatigue' },
              { label: '腰のつらさのお悩み', href: '/symptom/lower-back' },
              { label: 'メニュー・料金', href: '/menu' },
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
            スポーツ後のリセットに、MARISAへ
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
