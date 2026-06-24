import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, LINE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の不眠・眠りの浅さケア｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」の不眠ケア。「眠れない」「眠りが浅い」「寝ても疲れが取れない」——ヘッドスパ・もみほぐしで体の緊張をほぐし、リラックスしやすい状態に整えます。当日予約OK・夜0時まで営業。',
  keywords: ['君津 不眠 ケア', '君津 眠れない リラックス', '君津 睡眠 もみほぐし'],
  openGraph: {
    title: '君津の不眠・眠りの浅さケア｜MARISA 君津店',
    description:
      '千葉県君津市のリラクゼーションサロン「MARISA」の不眠ケア。体の緊張をほぐしてリラックスしやすい状態に整えるリラクゼーションサポート。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/symptom/insomnia' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '眠れない・眠りが浅い悩みにはどのコースがおすすめですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '眠りに関するお悩みには、ヘッドセットコース（60分¥5,400・90分¥6,700）が特におすすめです。頭・首・肩の緊張をほぐすことで、就寝前の「体が重い・頭が緊張している」状態をやわらげ、リラックスしやすい状態に整えるサポートをします。全身の緊張が強い方には、もみほぐし90分との組み合わせも好評です。',
      },
    },
    {
      '@type': 'Question',
      name: '夜に施術を受けても大丈夫ですか？眠気が来ますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、夜の施術は特に眠りの質のサポートに役立ちます。もみほぐしで体の筋肉の緊張がほぐれ、副交感神経が働きやすくなることで、施術後にリラックスしやすい状態になります。「施術後に眠くなった」という方も多くいらっしゃいます。MARISAは夜0時まで営業していますので、就寝前のルーティンとしてご利用いただく方もいらっしゃいます。',
      },
    },
    {
      '@type': 'Question',
      name: 'ストレスで眠れない方にも効果がありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '仕事のプレッシャー・心配事で「頭がぐるぐるして眠れない」という方に、ヘッドケア・もみほぐしで体の緊張をほぐすアプローチが好評です。ストレスが原因の場合は体の筋肉に力が入り続けていることが多く、体の緊張をほぐすことでリラックスしやすい状態になりやすくなります。ただし医療的な不眠症の診断・治療は行っておりません。',
      },
    },
    {
      '@type': 'Question',
      name: 'ヘッドスパと全身もみほぐしを組み合わせることはできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、MARISAのヘッドセットコースはヘッドケアともみほぐしを組み合わせたメニューです（60分¥5,400・90分¥6,700）。頭・首・肩から全身の緊張をまとめてほぐしたい方に特におすすめで、眠りに関するお悩みのある方から好評をいただいています。',
      },
    },
    {
      '@type': 'Question',
      name: '眠りのケアに定期的に通う必要はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '体の緊張が慢性化している方は、定期的なケアが役立つ場合があります。2〜4週に1回程度の定期来店で、体の緊張を蓄積させない日々のメンテナンスとして活用いただく方が多くいらっしゃいます。「眠れない日が続く」という方は、まず一度ご来店いただき体の状態をお聞かせください。',
      },
    },
  ],
}

const sleepCauses = [
  {
    title: '体の筋肉の緊張が取れない',
    desc: '首・肩・背中の筋肉が緊張したまま横になると、体が休まりにくくなります。「横になっても体がリラックスできない」「肩に力が入ったまま眠れない」という方に多いパターンです。',
  },
  {
    title: '頭が「オフ」にならない',
    desc: '仕事の考えごと・心配事・スマートフォンの使用などで、就寝前になっても頭が活動状態のままになりやすくなります。「布団に入っても頭がぐるぐるする」という方は、頭まわりの緊張をほぐすことが役立ちます。',
  },
  {
    title: 'ストレスによる自律神経の乱れ',
    desc: '精神的なプレッシャーが続くと、交感神経（活動モード）が優位な状態から副交感神経（リラックスモード）に切り替わりにくくなります。「緊張状態が続いて体がオフにならない」という方はこのパターンです。',
  },
  {
    title: 'スマートフォン・PC使用による睡眠への影響',
    desc: '就寝前のスマートフォン・PC使用は、目への刺激から目の疲れ・頭の緊張を生じさせることがあります。「就寝前までスマホを見ている」という方の眠りの浅さにつながりやすいパターンです。',
  },
  {
    title: '運動不足・体を動かしていない',
    desc: 'デスクワーク中心で日中に体をあまり動かしていない方は、夜になっても体が「疲れた」と感じにくく、眠りにつきにくくなることがあります。適度な疲労感がないと睡眠の質が低下しやすくなります。',
  },
  {
    title: '寝室環境・就寝前の習慣',
    desc: '寝室の温度・光・音・枕の高さなど、睡眠環境が眠りの質に影響します。また就寝前の飲食・入浴タイミング・照明の明るさなど、就寝前の習慣も眠りへの入りやすさに関係します。',
  },
]

const headCareEffect = [
  {
    point: '頭まわりの緊張をほぐす',
    desc: '頭皮・側頭部・後頭部の筋肉の緊張をほぐすことで、「頭の重さ・ぼんやり感」がやわらぎやすくなります。',
  },
  {
    point: '首・肩の緊張との連動を緩める',
    desc: '首・肩の緊張は頭への血行に影響します。頭・首・肩を一体でほぐすことで、全身のリラックス感が得やすくなります。',
  },
  {
    point: 'リラックスしやすい状態に整える',
    desc: '施術後の「体が軽くなった・リラックスした」という感覚は、就寝前の緊張をやわらげるサポートになります。',
  },
]

const scenes = [
  {
    title: '仕事のことが頭から離れず眠れない方',
    desc: '仕事のプレッシャーや翌日の心配で就寝前に頭が働き続けている方。ヘッドケア・もみほぐしで体の緊張をほぐし、リラックスしやすい状態に整えるサポートをします。',
  },
  {
    title: '眠りが浅くて朝から疲れている方',
    desc: '「眠れてはいるけど眠りが浅く、朝起きても疲れが残っている」という方。体の緊張が睡眠の質に影響しているケースに、定期的なリラクゼーションケアが役立ちます。',
  },
  {
    title: '就寝前のリラックスルーティンを作りたい方',
    desc: '「夜の施術をルーティンにしている」という方も増えています。夜0時まで営業のMARISAは、就寝前のリラックスケアとしてご利用いただけます。',
  },
]

const recommendedMenus = [
  {
    tag: 'Head Set',
    title: 'ヘッドセットコース',
    desc: '60分¥5,400・90分¥6,700。頭・首・肩をセットでほぐします。眠りに関するお悩みの方に特におすすめのコース。',
    href: '/menu/head',
  },
  {
    tag: '60〜90 min',
    title: 'もみほぐし 60〜90分',
    desc: '60分¥4,500・90分¥6,400。全身の筋肉の緊張をほぐします。体の緊張が強い方・全身まとめてほぐしたい方に。',
    href: '/menu/body-care',
  },
]

const steps = [
  { step: '01', title: 'ご予約', desc: 'ホットペッパービューティー・当日来店でご予約。夜の時間帯の予約も当日OK。' },
  { step: '02', title: 'カウンセリング', desc: '睡眠の状態・体の緊張の強い部位・圧の好みをお聞きします。' },
  { step: '03', title: '頭・首・肩のほぐし', desc: '眠りに影響しやすい頭まわり・首・肩から丁寧にほぐします。' },
  { step: '04', title: '全身のほぐし', desc: '背中・腰・脚まで全身の緊張をほぐします。圧の強さはご要望に応じて調整。' },
  { step: '05', title: 'アフターケア', desc: '施術後の体の感覚を確認。次回の来店タイミングのご相談も受け付けています。' },
]

const faqs = [
  {
    q: '眠れない・眠りが浅い悩みにはどのコースがおすすめですか？',
    a: '眠りに関するお悩みには、ヘッドセットコース（60分¥5,400・90分¥6,700）が特におすすめです。頭・首・肩の緊張をほぐすことで、就寝前の「体が重い・頭が緊張している」状態をやわらげ、リラックスしやすい状態に整えるサポートをします。全身の緊張が強い方には、もみほぐし90分との組み合わせも好評です。',
  },
  {
    q: '夜に施術を受けても大丈夫ですか？眠気が来ますか？',
    a: 'はい、夜の施術は特に眠りの質のサポートに役立ちます。もみほぐしで体の筋肉の緊張がほぐれ、副交感神経が働きやすくなることで、施術後にリラックスしやすい状態になります。「施術後に眠くなった」という方も多くいらっしゃいます。MARISAは夜0時まで営業していますので、就寝前のルーティンとしてご利用いただく方もいらっしゃいます。',
  },
  {
    q: 'ストレスで眠れない方にも効果がありますか？',
    a: '仕事のプレッシャー・心配事で「頭がぐるぐるして眠れない」という方に、ヘッドケア・もみほぐしで体の緊張をほぐすアプローチが好評です。ストレスが原因の場合は体の筋肉に力が入り続けていることが多く、体の緊張をほぐすことでリラックスしやすい状態になりやすくなります。ただし医療的な不眠症の診断・治療は行っておりません。',
  },
  {
    q: 'ヘッドスパと全身もみほぐしを組み合わせることはできますか？',
    a: 'はい、MARISAのヘッドセットコースはヘッドケアともみほぐしを組み合わせたメニューです（60分¥5,400・90分¥6,700）。頭・首・肩から全身の緊張をまとめてほぐしたい方に特におすすめで、眠りに関するお悩みのある方から好評をいただいています。',
  },
  {
    q: '眠りのケアに定期的に通う必要はありますか？',
    a: '体の緊張が慢性化している方は、定期的なケアが役立つ場合があります。2〜4週に1回程度の定期来店で、体の緊張を蓄積させない日々のメンテナンスとして活用いただく方が多くいらっしゃいます。「眠れない日が続く」という方は、まず一度ご来店いただき体の状態をお聞かせください。',
  },
]

export default function InsomniaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ===== 1. Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'お悩み別', href: '/symptom' }, { label: '不眠・眠りの浅さ' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Sleep & Insomnia Care</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              眠れない・眠りが浅い——体の緊張をほぐしてリラックスしやすい状態に
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「布団に入っても眠れない」「眠りが浅くて朝から疲れている」「仕事のことが頭から離れない」——こうした眠りにまつわるつらさは、体の筋肉の緊張や頭の「オフ」が難しい状態と深く関係しています。MARISAでは、ヘッドケア・もみほぐしで頭・首・肩・全身の緊張をほぐし、リラックスしやすい状態に整えるサポートをします。
            </p>
          </div>
        </div>
      </div>

      {/* ===== 2. Sleep Causes ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Causes"
            ja="眠れない・眠りが浅い主な原因"
            lead="眠りにまつわるつらさには、いくつかのパターンがあります。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sleepCauses.map((c) => (
              <div key={c.title} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{c.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. Head Care Effect ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Head Care"
            ja="ヘッドケアが眠りのサポートになる理由"
            lead="頭まわりの緊張は、眠りにくい状態と深く関係しています。"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {headCareEffect.map((h) => (
              <div key={h.point} className="border border-sand-200 bg-cream-50 p-6">
                <p className="text-xs tracking-widest text-brown-400 uppercase mb-2">{h.point}</p>
                <p className="text-sm text-stone-700 leading-loose">{h.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 max-w-3xl text-sm text-stone-700 leading-loose">
            <p>
              MARISAのヘッドセットコースでは、頭皮・側頭部・後頭部のほぐし、首・肩のもみほぐしをセットで行います。「施術後にリラックスして眠気が来た」という方も多くいらっしゃいます。
            </p>
          </div>
        </div>
      </section>

      {/* ===== 4. Life Scenes ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Life Scenes"
            ja="こんな方の眠りのケアにご利用いただいています"
            lead="君津エリアで眠りにお悩みの方にご利用いただいています。"
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
          <SectionHeader en="Our Approach" ja="MARISAのケアアプローチ" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              眠りに関するお悩みの方には、<strong className="font-medium text-stone-800">ヘッドセットコース</strong>が特におすすめです。頭まわりの緊張をほぐし、首・肩の疲れも一体でケアすることで、全身がリラックスしやすい状態になります。
            </p>
            <p>
              「頭の緊張だけでなく体全体が疲れている」という方には、もみほぐし90〜120分でじっくり全身をほぐすことで、施術後の「体が軽くなった・眠くなってきた」という感覚を感じていただきやすくなります。
            </p>
            <p>
              MARISAは夜0時まで営業していますので、「就寝前にヘッドケアを受けてからゆっくり眠りたい」という方にも対応しています。施術後に車でご帰宅の際は安全運転にお気をつけください。
            </p>
            <p className="border-l-2 border-brown-300 pl-4 text-stone-600 italic">
              ※ 当サロンはリラクゼーション施設です。医療的な不眠症の診断・治療は行っておりません。強い不眠症状が続く場合は医療機関へのご受診をおすすめします。
            </p>
          </div>
        </div>
      </section>

      {/* ===== 6. Recommended Menus ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Menus" ja="眠りのお悩みにおすすめのメニュー" />
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

      {/* ===== 7. Duration Guide ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Duration Guide"
            ja="コース時間の目安"
            lead="眠りのお悩みの状況に応じてコースをお選びください。"
          />
          <div className="mt-8 space-y-4">
            {[
              { time: '60分', label: 'ヘッドセット 60分', desc: '¥5,400。頭・首・肩をセットでほぐす眠りのお悩みに定番コース。施術後のリラックス感が好評。' },
              { time: '90分', label: 'ヘッドセット 90分', desc: '¥6,700。頭・首・肩をたっぷりほぐしたい方に。全身の緊張が強い方に特におすすめ。' },
              { time: '60分', label: 'もみほぐし 60分', desc: '¥4,500。全身の緊張が気になる方に。体全体をまとめてほぐします。' },
              { time: '90分', label: 'もみほぐし 90分', desc: '¥6,400。全身の疲れが慢性化している方に。じっくりほぐすことで施術後のリラックス感を得やすくなります。' },
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
              { label: 'ストレス・緊張のケア', href: '/symptom/stress' },
              { label: '慢性疲労・体の重さ', href: '/symptom/chronic-fatigue' },
              { label: '頭の重さ・頭痛感', href: '/symptom/headache' },
              { label: 'ヘッドスパメニュー', href: '/menu/head' },
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
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">眠りのお悩みは、MARISAへ</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業・当日予約OK・無料駐車場あり。<br />
            就寝前のリラックスケアに、君津のリラクゼーションサロン MARISA。
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
