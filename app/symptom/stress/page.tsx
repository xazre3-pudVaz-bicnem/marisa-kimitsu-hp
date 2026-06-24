import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, LINE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津のストレス・緊張ほぐしケア｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」のストレスケア。仕事・子育てのプレッシャーで体に溜まったコリ・睡眠不足・精神疲労をもみほぐしでリセット。当日予約OK・夜0時まで営業。',
  keywords: ['君津 ストレス ケア', '君津 緊張 もみほぐし', '君津 リラックス'],
  openGraph: {
    title: '君津のストレス・緊張ほぐしケア｜MARISA 君津店',
    description:
      '千葉県君津市のリラクゼーションサロン「MARISA」のストレスケア。仕事のプレッシャーで体に溜まったコリや緊張をもみほぐしでリセットします。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/symptom/stress' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'ストレスや疲れを感じるときにおすすめのコースは？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ストレスや心身の緊張を感じている方には「もみほぐし90〜120分」がおすすめです。じっくり時間をかけて体の緊張を解きほぐすことで、施術後に体が軽く感じやすくなります。頭や気持ちも疲れている場合はヘッドセットコースも好評です。',
      },
    },
    {
      '@type': 'Question',
      name: 'リラクゼーションで本当にストレスが和らぎますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '当サロンは医療機関ではありませんが、体の緊張をほぐすことでリラックスしやすい状態に近づいたとおっしゃるお客様は多くいらっしゃいます。ストレスによる肩や背中のコリ・睡眠の浅さに悩む方が定期的にご来店いただき、「いい気分転換になる」という声をよくいただいています。',
      },
    },
    {
      '@type': 'Question',
      name: '一人でゆっくりできる空間ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、MARISAは個室・半個室のプライベート空間でご利用いただけます。照明を落とし、静かな環境でリラックスしていただけるよう心がけています。「誰にも気を遣わずにただ休みたい」という方のご利用も歓迎しています。',
      },
    },
    {
      '@type': 'Question',
      name: 'ストレスで眠れない夜にもみほぐしは役立ちますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '体の筋肉の緊張がほぐれることで、リラックスしやすい状態に近づき、眠りに入りやすくなったと感じる方もいらっしゃいます。夜0時まで営業していますので、眠れない夜に施術を受けてそのまま帰宅してゆっくり休む、という使い方もご好評いただいています。',
      },
    },
    {
      '@type': 'Question',
      name: '定期的に通うとどんな変化がありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '定期的にご利用いただくことで、ストレスが溜まりにくい体の状態を維持しやすくなります。「月に2〜3回通うようになってから、肩が楽になった」「気持ちの切り替えが早くなった」という声もいただいています。日々のメンテナンスとしての定期利用をおすすめしています。',
      },
    },
  ],
}

const bodyConnections = [
  {
    title: '筋肉の慢性緊張',
    desc: 'ストレスがかかると、体は防御反応として筋肉を緊張させます。この状態が長く続くと、首・肩・背中・腰に慢性的なコリや張りとして蓄積されます。「ストレスで肩が凝る」という感覚は、このメカニズムによるものです。',
  },
  {
    title: '睡眠への影響',
    desc: '緊張状態が続くと自律神経のバランスが乱れ、寝付きが悪くなったり眠りが浅くなることがあります。体の緊張がほぐれることで、眠りにつきやすい状態に整えやすくなります。',
  },
  {
    title: '呼吸の浅さ',
    desc: 'ストレスを感じると胸や肩まわりの筋肉が緊張し、呼吸が浅くなりがちです。肩甲骨まわりや胸まわりの筋肉をほぐすことで、深い呼吸がしやすくなります。',
  },
  {
    title: '精神的疲労と体のだるさ',
    desc: '精神的に疲弊すると脳の疲れが体のだるさとして現れることがあります。「何もやる気が出ない」「体が重い」という感覚は、精神と体の疲れが連動しているサインです。',
  },
  {
    title: '消化器への影響',
    desc: '強いストレスが続くと胃腸の調子が乱れることがあります。背中や腰のこりはストレス性の緊張が関係していることもあり、全身をほぐすことで体全体をリラックスしやすい状態に整えます。',
  },
  {
    title: '首・肩への集中',
    desc: 'ストレス性のコリは特に首・肩・後頭部に集中しやすい傾向があります。「ストレスを感じると決まって肩が上がる」という方は、この部位に意識的にアプローチすることが大切です。',
  },
]

const scenes = [
  {
    title: '仕事のプレッシャー',
    desc: '長時間の業務・人間関係・締め切りのプレッシャーで心身に緊張が溜まっている方。仕事帰りに立ち寄って、気持ちと体をリセットする習慣として定期利用される方も多くいらっしゃいます。',
  },
  {
    title: '子育て・介護の疲れ',
    desc: '子育て中の方や介護をされている方は、精神的な緊張とともに体を酷使する機会も多くあります。「自分のためのリラックスタイム」としてMARISAをご活用いただくお客様が増えています。',
  },
  {
    title: '「何となく疲れている」感覚',
    desc: '特定の理由はないけれど体が重い、なんとなくすっきりしない——そんな状態こそ、ゆっくりもみほぐしでリセットする機会です。深く体をほぐすことで、自分でも気づかなかった緊張が解けることがあります。',
  },
]

const recommendedMenus = [
  {
    tag: '90〜120 min',
    title: 'もみほぐし 90〜120分',
    desc: '90分¥6,400・120分¥8,400。じっくり全身をほぐすことで、体の深い緊張が解けやすくなります。「特に念入りにほぐしたい」という方に最適です。',
    href: '/menu/body-care',
  },
  {
    tag: 'Head Set',
    title: 'ヘッドセットコース',
    desc: '60分¥5,400〜。頭・首・肩をまとめてほぐすコース。「頭も体も疲れた日」にぴったり。施術後に頭がすっきりしたと感じる方が多いコースです。',
    href: '/menu/set',
  },
  {
    tag: 'Foot Set',
    title: '足つぼセットコース',
    desc: '60分¥5,500〜。全身もみほぐし＋足つぼの組み合わせ。全身の疲れと足のだるさを同時にリセット。深いリラクゼーションを求める方に。',
    href: '/menu/set',
  },
]

const steps = [
  { step: '01', title: 'ご予約', desc: 'ホットペッパービューティー・LINE・当日来店でご予約。当日予約OK。' },
  { step: '02', title: 'カウンセリング', desc: 'ストレスの出方・体の緊張が集中する部位・睡眠状況などをお聞きします。' },
  { step: '03', title: '重点ほぐし', desc: 'ストレスが集まりやすい首・肩・背中から丁寧にほぐします。' },
  { step: '04', title: '全身ケア', desc: '腰・お尻・脚まで全身を一体としてほぐし、体全体の緊張をゆるめます。' },
  { step: '05', title: 'アフターケア', desc: '施術後の体の感覚を確認。次回ケアのタイミングや日常のセルフケアをご案内します。' },
]

const faqs = [
  {
    q: 'ストレスや疲れを感じるときにおすすめのコースは？',
    a: 'ストレスや心身の緊張を感じている方には「もみほぐし90〜120分」がおすすめです。じっくり時間をかけて体の緊張を解きほぐすことで、施術後に体が軽く感じやすくなります。頭や気持ちも疲れている場合はヘッドセットコースも好評です。',
  },
  {
    q: 'リラクゼーションで本当にストレスが和らぎますか？',
    a: '当サロンは医療機関ではありませんが、体の緊張をほぐすことでリラックスしやすい状態に近づいたとおっしゃるお客様は多くいらっしゃいます。ストレスによる肩や背中のコリ・睡眠の浅さに悩む方が定期的にご来店いただき、「いい気分転換になる」という声をよくいただいています。',
  },
  {
    q: '一人でゆっくりできる空間ですか？',
    a: 'はい、MARISAは個室・半個室のプライベート空間でご利用いただけます。照明を落とし、静かな環境でリラックスしていただけるよう心がけています。「誰にも気を遣わずにただ休みたい」という方のご利用も歓迎しています。',
  },
  {
    q: 'ストレスで眠れない夜にもみほぐしは役立ちますか？',
    a: '体の筋肉の緊張がほぐれることで、リラックスしやすい状態に近づき、眠りに入りやすくなったと感じる方もいらっしゃいます。夜0時まで営業していますので、眠れない夜に施術を受けてそのまま帰宅してゆっくり休む、という使い方もご好評いただいています。',
  },
  {
    q: '定期的に通うとどんな変化がありますか？',
    a: '定期的にご利用いただくことで、ストレスが溜まりにくい体の状態を維持しやすくなります。「月に2〜3回通うようになってから、肩が楽になった」「気持ちの切り替えが早くなった」という声もいただいています。日々のメンテナンスとしての定期利用をおすすめしています。',
  },
]

export default function StressPage() {
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
              { label: 'ストレス・緊張' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Stress Relief</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              ストレス・緊張をほぐして、心と体をリセット
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「仕事のプレッシャーで体が緊張したまま」「なんとなく体がだるい」「気持ちの余裕がない」——日常のストレスや緊張は、体の中にコリや張りとして蓄積されます。睡眠の質が落ちたり、精神的な疲労が体の重さとして現れたりすることもあります。MARISAのもみほぐしで体の緊張をゆるめ、心と体をリセットする時間を作りましょう。
            </p>
          </div>
        </div>
      </div>

      {/* ===== 2. Body Connections ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Mind & Body"
            ja="ストレスと体のつながり"
            lead="精神的な緊張は、体のあちこちにコリや不調として現れます。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {bodyConnections.map((c) => (
              <div key={c.title} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{c.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. Life Scenes ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Life Scenes"
            ja="君津の日常でこんな場面でご利用いただいています"
            lead="MARISAは「リセットの場所」として活用されています。"
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
            ja="MARISAのリラクゼーションアプローチ"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAは、プライベートな空間で静かにリラックスできることを大切にしています。施術前のカウンセリングでお体の状態やご要望をお聞きし、その日の緊張が集中している部位を重点的にほぐします。
            </p>
            <p>
              ストレスが原因のコリは首・肩・背中に特に現れやすい傾向があります。全身をほぐしつつ、緊張が溜まりやすいエリアに時間をかけることで、施術後の「体が軽い」というすっきり感を感じやすくなります。
            </p>
            <p>
              「緊張をほぐしてリラックスしやすい状態になる」「眠りに入りやすくなる」という声を多くいただいています。当サロンは医療機関ではありませんが、体の疲れをほぐし心地よい時間を提供することで、気分転換や休息をサポートします。
            </p>
          </div>
        </div>
      </section>

      {/* ===== 5. Recommended Menus ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menus"
            ja="ストレスケアにおすすめのメニュー"
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
            lead="ストレスの蓄積度合いや時間に応じてコースをお選びください。"
          />
          <div className="mt-8 space-y-4">
            {[
              { time: '60分', label: 'もみほぐし 60分', desc: '¥4,500。首・肩・背中・腰を全体的にほぐす定番コース。仕事帰りのリセットに。' },
              { time: '90分', label: 'もみほぐし 90分', desc: '¥6,400。全身をじっくりほぐしたい方に。ストレスが強く溜まっている日に特におすすめ。' },
              { time: '120分', label: 'もみほぐし 120分', desc: '¥8,400。全身をとことんリセットしたい日に。週末前や連休の前日に特に人気のコース。' },
              { time: '60分', label: 'ヘッドセット 60分', desc: '¥5,400。頭も体も疲れた日に。もみほぐし＋ヘッドケアで頭と首のつながりをほぐします。' },
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
              { label: '睡眠・不眠感のお悩み', href: '/symptom/insomnia' },
              { label: '慢性疲労・体のだるさ', href: '/symptom/chronic-fatigue' },
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

      {/* ===== 10. CTA ===== */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">
            体と心のリセットは、MARISAで
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
