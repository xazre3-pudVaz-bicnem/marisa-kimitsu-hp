import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の冷え・むくみのケア｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」の冷え・むくみケア。デスクワーク・立ち仕事による足のむくみ感や冷えを、もみほぐし・足つぼでやわらげます。当日予約OK・夜0時まで営業。',
  keywords: ['君津 冷え むくみ', '君津 リラクゼーション むくみ', '君津 足つぼ むくみ'],
  openGraph: {
    title: '君津の冷え・むくみのケア｜MARISA 君津店',
    description: '千葉県君津市のリラクゼーションサロン「MARISA」の冷え・むくみケア。デスクワーク・立ち仕事による足のむくみ感や冷えをやわらげます。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/symptom/cold-body' },
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
        text: '足のむくみ・冷えが気になる方には「足つぼセットコース」がおすすめです。もみほぐしと足裏・ふくらはぎのケアを組み合わせることで、下半身全体をまとめてほぐせます。全身疲れも感じている場合は、もみほぐし単体でも対応しています。カウンセリングでお気軽にご相談ください。',
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
        text: '1回の施術でも「足が軽く感じる」「冷えが和らいだ」とおっしゃるお客様は多くいらっしゃいます。ただし、日常の習慣（デスクワーク・立ち仕事・運動不足）が続く場合は、定期的なケアとして月に数回ご利用いただくことで、体の状態を整えやすくなります。',
      },
    },
  ],
}

const causes = [
  {
    title: 'デスクワーク・長時間着座',
    desc: '長時間椅子に座り続けると、下半身の筋肉がほとんど動かない状態が続きます。筋肉のポンプ作用が働かないため血液やリンパ液の流れが滞り、足のむくみや冷えを感じやすくなります。特にふくらはぎは「第二の心臓」とも呼ばれ、歩かない時間が長いほど影響が出やすい部位です。',
  },
  {
    title: '立ち仕事・同じ姿勢の継続',
    desc: '立ちっぱなしの仕事（販売・接客・医療・介護など）では、重力で血液が下半身に溜まりやすくなります。足首・ふくらはぎに負担が集中し、夕方には足がパンパンになる感覚を覚える方も多くいらっしゃいます。足裏・ふくらはぎのケアで負担をやわらげることができます。',
  },
  {
    title: '血行の停滞',
    desc: '体が冷えると血管が収縮し、末端への血流がさらに低下する悪循環が生じます。手足の先が特に冷えやすい方は、全身の血行が滞りがちなサインです。体を温めるとともに、筋肉の緊張をほぐすことで血行を促しやすくなります。',
  },
]

const personas = [
  { label: '君津市内でデスクワーク・事務職の方', icon: '💻' },
  { label: '長距離通勤（千葉・東京方面へ）の方', icon: '🚃' },
  { label: '家事・育児で長時間立ちっぱなしの方', icon: '🏠' },
  { label: '販売・接客・医療・介護職の方', icon: '👟' },
]

const faqs = [
  {
    q: '冷えやむくみには足つぼともみほぐし、どちらがおすすめですか？',
    a: '足のむくみ・冷えが気になる方には「足つぼセットコース」がおすすめです。もみほぐしと足裏・ふくらはぎのケアを組み合わせることで、下半身全体をまとめてほぐせます。全身疲れも感じている場合は、もみほぐし単体でも対応しています。カウンセリングでお気軽にご相談ください。',
  },
  {
    q: '夜に足がむくんでいる状態でも施術できますか？',
    a: 'はい、夕方〜夜の施術はむくみが気になる時間帯に合わせてご利用いただけます。当日予約も受け付けておりますので、仕事帰りにそのままお立ち寄りいただく方も多くいらっしゃいます。夜0時まで営業していますので、お仕事後もお気軽にどうぞ。',
  },
  {
    q: '冷えやむくみは何回か通う必要がありますか？',
    a: '1回の施術でも「足が軽く感じる」「冷えが和らいだ」とおっしゃるお客様は多くいらっしゃいます。ただし、日常の習慣（デスクワーク・立ち仕事・運動不足）が続く場合は、定期的なケアとして月に数回ご利用いただくことで、体の状態を整えやすくなります。',
  },
]

export default function ColdBodyPage() {
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
              { label: '冷え・むくみ' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Cold &amp; Swelling</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              冷えやすい体・足のむくみ感のケア
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「仕事後は足がパンパン」「夜になると足が冷えて眠れない」——デスクワークや立ち仕事で下半身に疲れを抱える方は多くいらっしゃいます。MARISAでは、もみほぐしと足つぼを組み合わせて、足のむくみや冷えを感じやすい体の緊張をほぐします。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Causes ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Causes"
            ja="冷えとむくみの主な原因"
            lead="冷えとむくみは血行・リンパの停滞が深く関わっています。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {causes.map((c) => (
              <div key={c.title} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{c.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Approach ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Our Approach"
            ja="もみほぐし・足つぼでのアプローチ"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              冷えやむくみのケアでは、「足裏→ふくらはぎ→太もも→腰→全身」という流れで筋肉の緊張をほぐし、体全体の血行を促します。ふくらはぎは第二の心臓とも呼ばれ、ここの筋肉をほぐすことが下半身の血流改善に大きく貢献します。
            </p>
            <p>
              足つぼは足裏の反射区（各臓器・部位に対応するとされるツボ）への刺激と、足全体のほぐしを組み合わせたメニューです。「ゴリゴリして痛い」と感じる部位は特に丁寧にアプローチし、圧の強さはお好みに合わせて随時調整します。
            </p>
            <p>
              もみほぐしとの組み合わせ（足つぼセットコース）では、全身をほぐしつつ、足裏・ふくらはぎを集中してケアします。「全身疲れも取りたい、でも特に足が気になる」という方に最もご好評をいただいているコースです。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Who is this for ===== */}
      <section className="py-14 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="For You"
            ja="こんな方にご利用いただいています"
          />
          <ul className="mt-8 space-y-3">
            {personas.map((p) => (
              <li key={p.label} className="flex items-center gap-3 text-sm text-stone-700 leading-loose border border-sand-200 bg-cream-50 px-5 py-4">
                <span className="text-base">{p.icon}</span>
                <span>{p.label}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-stone-700 leading-loose">
            君津市内にお住まいの方や、君津インター・君津駅からお越しの方を中心にご利用いただいています。店舗前に無料駐車場もご用意しておりますので、お車でのお越しも便利です。
          </p>
        </div>
      </section>

      {/* ===== Recommended Menus ===== */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menus"
            ja="冷え・むくみにおすすめのメニュー"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Foot Set</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">足つぼセットコース</h3>
              <p className="text-sm text-stone-700 leading-loose mb-4">もみほぐし＋足つぼの組み合わせコース。¥5,500〜。足のむくみ・冷えが気になる方に最もおすすめのコースです。</p>
              <Link href="/menu" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
                メニューを見る →
              </Link>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Body Care</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">もみほぐし</h3>
              <p className="text-sm text-stone-700 leading-loose mb-4">45分¥3,500〜。全身のコリをほぐしながら、足腰を中心にアプローチ。全身疲れも一緒にケアしたい方に。</p>
              <Link href="/menu" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
                メニューを見る →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
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

      {/* ===== Related links ===== */}
      <section className="py-12 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: '足のだるさ・むくみ', href: '/symptom/leg-fatigue' },
              { label: '全身疲労のお悩み', href: '/symptom/fatigue' },
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
            冷えやむくみのお悩みは、MARISAへ
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
