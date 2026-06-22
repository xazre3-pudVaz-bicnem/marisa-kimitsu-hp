import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津のストレスケア・緊張をほぐすもみほぐし｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」のストレスケア。仕事・子育て・日常の緊張で体に溜まったコリや張りを、もみほぐしでリセット。当日予約OK・夜0時まで営業。',
  keywords: ['君津 ストレスケア', '君津 リラックス', '君津 緊張 もみほぐし'],
  openGraph: {
    title: '君津のストレスケア・緊張をほぐすもみほぐし｜MARISA 君津店',
    description: '千葉県君津市のリラクゼーションサロン「MARISA」のストレスケア。仕事・子育て・日常の緊張を、もみほぐしでリセットします。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/symptom/stress' },
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
        text: 'ストレスや心身の緊張を感じている方には「もみほぐし60分〜90分」がおすすめです。じっくり時間をかけて体の緊張を解きほぐすことで、施術後に体が軽く感じやすくなります。頭や気持ちも疲れている場合は、ヘッドセットコースも好評です。',
      },
    },
    {
      '@type': 'Question',
      name: 'リラクゼーションで本当にストレスが和らぎますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '当サロンは医療機関ではありませんが、体の緊張をほぐすことでリラックスしやすくなったとおっしゃるお客様は多くいらっしゃいます。ストレスによる肩や背中のコリ、睡眠の浅さなどに悩む方が定期的にご来店いただき、「いい気分転換になる」という声をよくいただきます。',
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
  ],
}

const bodyConnections = [
  {
    title: '筋肉の慢性緊張',
    desc: 'ストレスがかかると、体は防御反応として筋肉を緊張させます。この状態が長く続くと、首・肩・背中・腰に慢性的なコリや張りとして蓄積されます。「ストレスで肩が凝る」という感覚は、このメカニズムによるものです。',
  },
  {
    title: '睡眠への影響',
    desc: '緊張状態が続くと自律神経のバランスが乱れ、寝付きが悪くなったり、眠りが浅くなることがあります。体の緊張がほぐれることで、眠りにつきやすい状態に整えやすくなります。',
  },
  {
    title: '呼吸の浅さ',
    desc: 'ストレスを感じると胸や肩まわりの筋肉が緊張し、呼吸が浅くなりがちです。肩甲骨まわりや胸まわりの筋肉をほぐすことで、深い呼吸がしやすくなります。',
  },
]

const scenes = [
  {
    title: '仕事のストレス',
    desc: '長時間の業務・人間関係・プレッシャーで心身に緊張が溜まっている方。仕事帰りに立ち寄って、気持ちと体をリセットする習慣として定期利用される方も多くいらっしゃいます。',
  },
  {
    title: '子育てや介護の疲れ',
    desc: '子育て中の方や介護をされている方は、精神的な緊張とともに体を酷使する機会も多くあります。自分のためのリラックスタイムとして、MARISAをご活用ください。',
  },
  {
    title: '「何となく疲れている」感覚',
    desc: '特定の理由はないけれど体が重い、なんとなくすっきりしない——そんな状態こそ、ゆっくりもみほぐしでリセットする機会です。深く体をほぐすことで、自分でも気づかなかった緊張が解けることがあります。',
  },
]

const faqs = [
  {
    q: 'ストレスや疲れを感じるときにおすすめのコースは？',
    a: 'ストレスや心身の緊張を感じている方には「もみほぐし60分〜90分」がおすすめです。じっくり時間をかけて体の緊張を解きほぐすことで、施術後に体が軽く感じやすくなります。頭や気持ちも疲れている場合は、ヘッドセットコースも好評です。',
  },
  {
    q: 'リラクゼーションで本当にストレスが和らぎますか？',
    a: '当サロンは医療機関ではありませんが、体の緊張をほぐすことでリラックスしやすくなったとおっしゃるお客様は多くいらっしゃいます。ストレスによる肩や背中のコリ、睡眠の浅さなどに悩む方が定期的にご来店いただき、「いい気分転換になる」という声をよくいただきます。',
  },
  {
    q: '一人でゆっくりできる空間ですか？',
    a: 'はい、MARISAは個室・半個室のプライベート空間でご利用いただけます。照明を落とし、静かな環境でリラックスしていただけるよう心がけています。「誰にも気を遣わずにただ休みたい」という方のご利用も歓迎しています。',
  },
]

export default function StressPage() {
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
              { label: 'ストレス・緊張' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Stress Relief</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              ストレスや緊張をほぐして、心と体をリセット
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「仕事の疲れが抜けない」「なんとなく体がだるい」「気持ちの余裕がない」——日常のストレスや緊張は、体の中にコリや張りとして蓄積されます。MARISAのもみほぐしで体の緊張をゆるめ、心と体をリセットする時間を作りましょう。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Body Connections ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Mind & Body"
            ja="ストレスと体のつながり"
            lead="精神的な緊張は、体のあちこちにコリや不調として現れます。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {bodyConnections.map((c) => (
              <div key={c.title} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{c.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MARISA Relaxation ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Relaxation"
            ja="MARISAでのリラクゼーション"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAは、プライベートな空間で静かにリラックスできることを大切にしています。施術前のカウンセリングでお体の状態やご要望をお聞きし、その日の緊張が集中している部位を重点的にほぐします。
            </p>
            <p>
              ストレスが原因のコリは、首・肩・背中に特に現れやすい傾向があります。全身をほぐしつつ、緊張が溜まりやすいエリアに時間をかけることで、施術後の「体が軽い」という感覚を感じやすくなります。
            </p>
            <p>
              当サロンは医療機関ではなく、リラクゼーションを目的とした施設です。精神的なご相談や医療的なアドバイスはいたしかねますが、体の疲れをほぐし、心地よい時間を提供することで、気分転換や休息のサポートをいたします。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Life Scenes ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Life Scenes"
            ja="こんな場面でご利用いただいています"
            lead="君津の日常生活の中で、MARISAは「リセットの場所」として活用されています。"
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

      {/* ===== Recommended Menus ===== */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menus"
            ja="ストレスケアにおすすめのメニュー"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Body Care</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">もみほぐし 60〜90分</h3>
              <p className="text-sm text-stone-700 leading-loose mb-4">60分¥4,500〜・90分¥6,500〜。じっくり全身をほぐすことで、体の深い緊張が解けやすくなります。「特に念入りにほぐしたい」という方には90分コースをおすすめします。</p>
              <Link href="/menu" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
                メニューを見る →
              </Link>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Head Set</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">ヘッドセットコース</h3>
              <p className="text-sm text-stone-700 leading-loose mb-4">60分¥5,000〜。頭・頭皮・首肩をまとめてほぐすコース。「頭も体も疲れた」という日にぴったりです。施術後に頭がすっきりしたと感じる方が多いコースです。</p>
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
              { label: '睡眠・リラックスのお悩み', href: '/symptom/sleep-relax' },
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
            ご予約はこちらから
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
