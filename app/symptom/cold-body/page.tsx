import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, LINE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の冷え・むくみケア・足つぼ｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」の冷え・むくみケア。手足の冷えや夕方の足のむくみを、足つぼ・もみほぐしでやわらげます。当日予約OK・夜0時まで営業・無料駐車場あり。',
  keywords: ['君津 冷え性 ケア', '君津 むくみ もみほぐし', '君津 冷え 足つぼ'],
  openGraph: {
    title: '君津の冷え・むくみケア・足つぼ｜MARISA 君津店',
    description:
      '千葉県君津市のリラクゼーションサロン「MARISA」の冷え・むくみケア。手足の冷えや夕方の足のむくみを足つぼ・もみほぐしでやわらげます。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/symptom/cold-body' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '冷えやむくみには足つぼともみほぐし、どちらがおすすめですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '足のむくみ・冷えが気になる方には「足つぼセットコース（60分¥5,500〜）」がおすすめです。もみほぐしと足裏・ふくらはぎのケアを組み合わせることで、下半身全体をまとめてほぐせます。全身疲れも感じている場合は、もみほぐし単体でも対応しています。カウンセリングでお気軽にご相談ください。',
      },
    },
    {
      '@type': 'Question',
      name: '夜に足がむくんでいる状態でも施術できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、夕方〜夜の施術はむくみが気になる時間帯に合わせてご利用いただけます。当日予約も受け付けておりますので、仕事帰りにそのままお立ち寄りいただく方も多くいらっしゃいます。夜0時まで営業していますので、お仕事後もお気軽にどうぞ。',
      },
    },
    {
      '@type': 'Question',
      name: '冷えやむくみは何回か通う必要がありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '1回の施術でも「足が軽く感じる」「冷えが和らいだ気がする」とおっしゃるお客様は多くいらっしゃいます。ただし、日常の習慣（デスクワーク・立ち仕事・運動不足）が続く場合は、定期的なケアとして月2〜4回ご利用いただくことで、体の状態を整えやすくなります。',
      },
    },
    {
      '@type': 'Question',
      name: '足つぼは痛いですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '足つぼは反射区への刺激のため、滞りがある部位はゴリゴリ感や圧痛を感じることがあります。圧の強さはお好みに合わせて随時調整しますので、「痛いのが苦手」「もう少し弱く」などお気軽にお申し付けください。気持ちよい範囲でのケアを大切にしています。',
      },
    },
    {
      '@type': 'Question',
      name: '冷え性でいつも手足が冷たいのですが、足つぼで変化はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '足つぼとふくらはぎのほぐしで下半身の血行を促すことで、施術後に「足が温かくなった」と感じる方もいらっしゃいます。ただし医療的な冷え性の治療ではありませんので、重篤な冷えは医療機関へご相談ください。日々のメンテナンスとして定期的にご利用いただくことをおすすめしています。',
      },
    },
  ],
}

const causes = [
  {
    title: 'デスクワーク・長時間着座',
    desc: '長時間椅子に座り続けると、下半身の筋肉がほとんど動かない状態が続きます。ふくらはぎの筋肉のポンプ作用が働かないため血液やリンパ液の流れが滞り、足のむくみや冷えを感じやすくなります。特にふくらはぎは「第二の心臓」とも呼ばれ、歩かない時間が長いほど影響が出やすい部位です。',
  },
  {
    title: '立ち仕事・同じ姿勢の継続',
    desc: '立ちっぱなしの仕事（販売・接客・医療・介護など）では、重力で血液が下半身に溜まりやすくなります。足首・ふくらはぎに負担が集中し、夕方には足がパンパンになる感覚を覚える方も多くいらっしゃいます。足裏・ふくらはぎのケアで負担をやわらげることができます。',
  },
  {
    title: '血行の停滞・筋肉の硬化',
    desc: '体が冷えると血管が収縮し、末端への血流がさらに低下する悪循環が生じます。手足の先が特に冷えやすい方は、全身の血行が滞りがちなサインです。体を温めるとともに、筋肉の緊張をほぐすことで血行を促しやすくなります。',
  },
  {
    title: '運動不足',
    desc: '日常的な歩行や運動が少なくなると、足の筋肉のポンプ機能が低下します。特にデスクワーク中心の生活や車移動が多い方は、意識的に体を動かす機会が少なくなりがちで、冷えやむくみが生じやすくなります。',
  },
  {
    title: '長距離通勤の疲れ',
    desc: '千葉・東京方面への長距離電車通勤では、長時間座りっぱなしや立ちっぱなしで下半身が疲弊します。帰宅時に足が重く感じる方は、通勤疲れとむくみが重なっている状態です。',
  },
  {
    title: '季節・気温の影響',
    desc: '冬場や冷房が効いた室内では、体が冷えることで血管が収縮しやすくなります。冷たい床に長時間立つ・冷房が直接当たる席での仕事なども冷えを助長します。',
  },
]

const personas = [
  { label: '君津市内でデスクワーク・事務職の方' },
  { label: '長距離通勤（千葉・東京方面へ）の方' },
  { label: '家事・育児で長時間立ちっぱなしの方' },
  { label: '販売・接客・医療・介護職の方' },
  { label: '夕方になると足がパンパンになる方' },
  { label: '冬場は手足がいつも冷たいという方' },
]

const recommendedMenus = [
  {
    tag: 'Foot Set',
    title: '足つぼセットコース',
    desc: 'もみほぐし＋足つぼの組み合わせ。60分¥5,500・90分¥6,900。足のむくみ・冷えが気になる方に最もおすすめのコース。',
    href: '/menu/set',
  },
  {
    tag: 'Foot Care',
    title: '足つぼ単体',
    desc: '30分¥3,800・60分¥5,500。足裏全体の反射区と、ふくらはぎを集中ケア。「足だけ集中してほぐしたい」方に。',
    href: '/menu/foot',
  },
  {
    tag: 'Full Body',
    title: 'もみほぐし全身',
    desc: '45分¥3,900〜。全身のコリをほぐしながら、足腰を中心にアプローチ。全身疲れも一緒にケアしたい方に。',
    href: '/menu/body-care',
  },
]

const steps = [
  { step: '01', title: 'ご予約', desc: 'ホットペッパービューティー・当日来店でご予約。当日予約OK。夕方〜夜の予約が特に人気。' },
  { step: '02', title: 'カウンセリング', desc: '冷え・むくみの状態・特に気になる部位・圧の好みをお聞きします。' },
  { step: '03', title: '全身もみほぐし', desc: '全身の筋肉をほぐしながら下半身を中心にアプローチ。血行を促します。' },
  { step: '04', title: '足つぼ・ふくらはぎ集中ケア', desc: '足裏の反射区・ふくらはぎを丁寧にほぐします。圧の強さはご要望に応じて調整。' },
  { step: '05', title: 'アフターケア', desc: '施術後の体の感覚を確認。日常のセルフケアのポイントをご案内します。' },
]

const faqs = [
  {
    q: '冷えやむくみには足つぼともみほぐし、どちらがおすすめですか？',
    a: '足のむくみ・冷えが気になる方には「足つぼセットコース（60分¥5,500〜）」がおすすめです。もみほぐしと足裏・ふくらはぎのケアを組み合わせることで、下半身全体をまとめてほぐせます。全身疲れも感じている場合は、もみほぐし単体でも対応しています。カウンセリングでお気軽にご相談ください。',
  },
  {
    q: '夜に足がむくんでいる状態でも施術できますか？',
    a: 'はい、夕方〜夜の施術はむくみが気になる時間帯に合わせてご利用いただけます。当日予約も受け付けておりますので、仕事帰りにそのままお立ち寄りいただく方も多くいらっしゃいます。夜0時まで営業していますので、お仕事後もお気軽にどうぞ。',
  },
  {
    q: '冷えやむくみは何回か通う必要がありますか？',
    a: '1回の施術でも「足が軽く感じる」「冷えが和らいだ気がする」とおっしゃるお客様は多くいらっしゃいます。ただし、日常の習慣（デスクワーク・立ち仕事・運動不足）が続く場合は、定期的なケアとして月2〜4回ご利用いただくことで、体の状態を整えやすくなります。',
  },
  {
    q: '足つぼは痛いですか？',
    a: '足つぼは反射区への刺激のため、滞りがある部位はゴリゴリ感や圧痛を感じることがあります。圧の強さはお好みに合わせて随時調整しますので、「痛いのが苦手」「もう少し弱く」などお気軽にお申し付けください。気持ちよい範囲でのケアを大切にしています。',
  },
  {
    q: '冷え性でいつも手足が冷たいのですが、足つぼで変化はありますか？',
    a: '足つぼとふくらはぎのほぐしで下半身の血行を促すことで、施術後に「足が温かくなった」と感じる方もいらっしゃいます。ただし医療的な冷え性の治療ではありませんので、重篤な冷えは医療機関へご相談ください。日々のメンテナンスとして定期的にご利用いただくことをおすすめしています。',
  },
]

export default function ColdBodyPage() {
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
              { label: '冷え・むくみ' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Cold &amp; Swelling</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              冷えやすい体・足のむくみ感を足つぼとほぐしでケア
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「仕事後は足がパンパン」「夜になると手足が冷えて眠れない」「夕方には靴がきつくなる」——デスクワークや立ち仕事で下半身に疲れを抱える方は多くいらっしゃいます。MARISAでは、足つぼ・もみほぐしを組み合わせて、冷えやむくみを感じやすい体の緊張をほぐすサポートをします。
            </p>
          </div>
        </div>
      </div>

      {/* ===== 2. Causes ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Causes"
            ja="冷えとむくみの主な原因"
            lead="冷えとむくみは血行・リンパの停滞が深く関わっています。"
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

      {/* ===== 3. Life Scenes ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="For You"
            ja="こんな方にご利用いただいています"
            lead="冷え・むくみでお悩みの君津エリアの方々にご利用いただいています。"
          />
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {personas.map((p) => (
              <li key={p.label} className="flex items-center gap-3 text-sm text-stone-700 leading-loose border border-sand-200 bg-cream-50 px-5 py-4">
                <span className="w-2 h-2 rounded-full bg-brown-400 shrink-0" />
                <span>{p.label}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-stone-700 leading-loose">
            君津市内にお住まいの方や、君津インター・君津駅からお越しの方を中心にご利用いただいています。店舗前に無料駐車場もご用意しておりますので、お車でのお越しも便利です。
          </p>
        </div>
      </section>

      {/* ===== 4. MARISA Approach ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Our Approach"
            ja="もみほぐし・足つぼでのアプローチ"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              冷えやむくみのケアでは、「足裏→ふくらはぎ→太もも→腰→全身」という流れで筋肉の緊張をほぐし、体全体の血行を促します。ふくらはぎは第二の心臓とも呼ばれ、ここの筋肉をほぐすことが下半身の血流サポートに大きく貢献します。
            </p>
            <p>
              足つぼは足裏の反射区（各臓器・部位に対応するとされるツボ）への刺激と、足全体のほぐしを組み合わせたメニューです。「ゴリゴリして痛い」と感じる部位は特に丁寧にアプローチし、圧の強さはお好みに合わせて随時調整します。
            </p>
            <p>
              もみほぐしとの組み合わせ（足つぼセットコース）では、全身をほぐしつつ足裏・ふくらはぎを集中してケアします。「全身疲れも取りたい、でも特に足が気になる」という方に最もご好評をいただいているコースです。
            </p>
          </div>
        </div>
      </section>

      {/* ===== 5. Recommended Menus ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menus"
            ja="冷え・むくみにおすすめのメニュー"
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

      {/* ===== 6. Duration Guide ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Duration Guide"
            ja="コース時間の目安"
            lead="冷えやむくみの度合いに応じてコース時間をお選びください。"
          />
          <div className="mt-8 space-y-4">
            {[
              { time: '30分', label: '足つぼ 30分', desc: '¥3,800。「足だけ短時間でほぐしたい」方に。仕事帰りの短時間ケアに。' },
              { time: '60分', label: '足つぼ 60分 / 足つぼセット', desc: '¥5,500。足全体とふくらはぎをしっかりほぐす。全身もみほぐし付きセットコースも同価格帯。' },
              { time: '90分', label: '足つぼセット 90分', desc: '¥6,900。全身もみほぐし＋足つぼを90分でじっくり。全身の疲れと下半身の冷え・むくみを同時ケア。' },
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
              { label: '足のだるさ・むくみ', href: '/symptom/leg-fatigue' },
              { label: '全身疲労のお悩み', href: '/symptom/fatigue' },
              { label: '足つぼメニュー', href: '/menu/foot' },
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
            冷えやむくみのお悩みは、MARISAへ
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
