import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の全身疲労・体のだるさのケア｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」の全身疲労ケア。仕事疲れ・全身のだるさ・体のリセットに、もみほぐしで全身をほぐします。当日予約OK・仕事帰りに通える夜0時まで営業。',
  keywords: ['君津 疲労回復 マッサージ', '君津 全身疲労', '君津 疲れ もみほぐし', '君津 体のだるさ ケア'],
  openGraph: {
    title: '君津の全身疲労・体のだるさのケア｜MARISA 君津店',
    description: '千葉県君津市のリラクゼーションサロン「MARISA」の全身疲労ケア。仕事疲れ・全身のだるさをもみほぐしでリセット。当日予約OK・仕事帰りに通える夜0時まで営業。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/symptom/fatigue' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '全身疲労にはどのコースがおすすめですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '全身の疲れには「もみほぐし60分」または「90分」がおすすめです。60分は全身をバランスよくほぐせる基本コースです。疲れが特に深い方、全身まんべんなくじっくりほぐしたい方には90分をおすすめします。足の疲れも気になる方には、もみほぐし＋足つぼのセットコースもご検討ください。',
      },
    },
    {
      '@type': 'Question',
      name: '仕事帰りに通えますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、MARISAは夜0時まで営業しています（最終受付23:00）。仕事帰りや夕方以降のご来店も多く、18時〜22時台が特に混み合う時間帯です。スムーズにご案内できるよう、事前のご予約をおすすめしています。',
      },
    },
    {
      '@type': 'Question',
      name: '疲れが溜まりすぎていても施術を受けられますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、疲れが溜まっている状態でも施術を受けていただけます。ただし、発熱・体調不良時は施術をお断りする場合がありますのでご了承ください。また、痛みが強い部位・けが・炎症がある部位については、施術前のカウンセリングでお知らせください。お体の状態に合わせた施術を行います。',
      },
    },
    {
      '@type': 'Question',
      name: '施術後、どんな感覚になりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '施術後は体が軽くなった感覚、肩や腰の張りがやわらいだ感覚、全身がリラックスした感覚を感じる方が多いです。施術後は老廃物が排出されやすい状態になるため、水分をしっかり摂ることをおすすめします。当日の激しい運動は控え、ゆっくりお休みいただくとより長くリラックス感が続きます。',
      },
    },
  ],
}

const causes = [
  {
    title: '仕事・業務による疲労の蓄積',
    desc: '長時間のデスクワーク・立ち仕事・肉体労働・精神的なプレッシャーなど、仕事による疲れは日々積み重なります。一晩眠っただけでは回復しきれない慢性的な疲れを感じている方が、多くご来店されています。',
  },
  {
    title: '不規則な生活リズム',
    desc: '深夜まで働く・就寝時間がバラバラ・食事が不規則、といった生活リズムの乱れは、体の回復力を下げます。自律神経のバランスが崩れやすくなり、疲れが取れにくい・朝から体がだるい、といった状態になりやすいです。',
  },
  {
    title: '運動不足・筋肉の硬直',
    desc: 'デスクワーク中心の生活や、仕事の忙しさで体を動かす機会が減ると、筋肉が使われないまま固まっていきます。血液の循環が悪くなり、全身のだるさや疲れが取れにくい状態につながります。',
  },
]

const targets = [
  '仕事帰りに全身の疲れをリセットしたい方',
  '週末にまとめてケアして一週間乗り切りたい方',
  '慢性的な疲れで体がずっとだるい方',
  '肩・腰・足など全身が凝っている方',
  '自分へのご褒美にリラクゼーションを楽しみたい方',
  '睡眠の質を上げたい・よく眠れない方',
  '体のだるさで集中力が続かない方',
  '定期的に体のメンテナンスをしたい方',
]

const faqs = [
  {
    q: '全身疲労にはどのコースがおすすめですか？',
    a: '全身疲労には「もみほぐし60分」または「90分」がおすすめです。60分は全身をバランスよくほぐせる定番コース。疲れが特に深い方やじっくりほぐしたい方には90分をおすすめします。足の疲れも気になる方には、もみほぐし＋足つぼのセットコースをご検討ください。',
  },
  {
    q: '仕事帰りに通えますか？',
    a: 'はい、MARISAは夜0時まで営業（最終受付23:00）しています。仕事帰りのご来店も多く、特に夕方以降が混み合う傾向があります。スムーズにご案内できるよう、事前のご予約をおすすめしています。',
  },
  {
    q: '疲れが溜まりすぎていても施術を受けられますか？',
    a: '疲れが溜まっている状態でも施術を受けていただけます。ただし発熱・体調不良時は施術をお断りする場合があります。痛みが強い部位・けが・炎症がある部位については、カウンセリングの際にお知らせください。状態に合わせた施術を行います。',
  },
  {
    q: '施術後、どんな感覚になりますか？',
    a: '施術後は体が軽くなった感覚や全身がリラックスした感覚を感じる方が多いです。水分をしっかり摂ることをおすすめし、当日の激しい運動は控えていただくとリラックス感が続きやすくなります。',
  },
]

export default function FatiguePage() {
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
              { label: '全身疲労' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Body Fatigue</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800">
              全身の疲れを、もみほぐしでリセットしよう
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「体がずっとだるい」「一晩寝ても疲れが取れない」「全身がなんとなく重い」——そのような全身疲労を感じている方に、MARISAのもみほぐしで全身をほぐし、体のだるさをやわらげるサポートをします。君津で仕事帰りにも通えるリラクゼーションサロンです。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Visual ===== */}
      <section className="bg-stone-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-0.5">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/LINE_ALBUM_もみほぐしMARISA_260615_5.jpg" alt="君津 全身疲労 もみほぐし 施術風景" fill className="object-cover object-top" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/LINE_ALBUM_もみほぐしMARISA_260615_23.jpg" alt="君津 全身疲れ マッサージ 手技" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/LINE_ALBUM_もみほぐしMARISA_260615_24.jpg" alt="君津 リラクゼーション 仰向け ケア" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Causes ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Causes"
            ja="全身疲労の主な原因"
            lead="全身の疲れは、様々な要因が重なって生じます。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {causes.map((c) => (
              <div key={c.title} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{c.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 prose-marisa max-w-3xl">
            <p>
              全身疲労の多くは、体の疲れと心の疲れが重なっている状態です。仕事のプレッシャーやストレスは筋肉の緊張を生み、その緊張が慢性化すると血行不良・だるさ・睡眠の質の低下につながります。もみほぐしで体の緊張をほぐすことは、こうしたサイクルの緩和をサポートします。
            </p>
          </div>
        </div>
      </section>

      {/* ===== After Work Relaxation ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="After Work"
            ja="仕事帰りに通える、君津のリラクゼーション"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISA 君津店は夜0時まで営業しています（最終受付23:00）。仕事帰りに立ち寄れるリラクゼーションサロンとして、平日の夜間も多くの方にご利用いただいています。お仕事が終わった後、帰宅前に全身をほぐしてリフレッシュしてからお帰りいただけます。
            </p>
            <p>
              JR内房線「君津駅」からアクセスしやすい立地のため、電車通勤の方にも通いやすい環境です。予約はホットペッパービューティーのオンライン予約が24時間対応可能です。「今日は疲れた、ちょっとほぐしてもらいたい」という日にもご利用いただけます。
            </p>
            <p>
              当日予約にも対応しています。ただし、夕方以降は混み合いやすい時間帯ですので、事前のご予約をおすすめしています。週に1回・月に2〜3回と、ご自身のペースで定期的にご来店される方も多いです。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Full Body Approach ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Full Body Care"
            ja="もみほぐし＋セットコースで全身ケア"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              全身の疲れが気になる方には、もみほぐし（60分・90分）またはセットコースをおすすめします。もみほぐしでは首・肩・背中・腰・脚をバランスよくほぐし、全身の筋肉の緊張をやわらげます。体の疲れを根本からほぐすには、部分的なケアよりも全身を通してほぐすことが効果的です。
            </p>
            <p>
              さらに全身をまとめてケアしたい方には、もみほぐしに足つぼやヘッドケアを組み合わせたセットコースがあります。体の上（頭・首・肩）から下（腰・脚・足）まで一度のご来店でケアでき、全身がすっきりした感覚を得られやすくなります。
            </p>
            <p>
              疲労回復をサポートするアプローチとして、MARISAでは施術前のカウンセリングを大切にしています。「今日は特に腰がつらい」「全部まんべんなくほぐしてほしい」など、その日のご要望をお聞きしながら施術内容を調整します。全身疲労のケアとして、ぜひご活用ください。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Who Is It For ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Recommended For"
            ja="こんな方におすすめ"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
            {targets.map((t) => (
              <div key={t} className="flex items-start gap-3 bg-cream-50 border border-sand-200 p-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brown-400 mt-2 shrink-0" />
                <p className="text-sm text-stone-700 leading-loose">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Related Symptoms ===== */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 uppercase mb-6">Related Symptoms</p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: '睡眠・リラックス', href: '/symptom/sleep-relax' },
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-sand-200 bg-cream-50 py-4 px-6 text-sm text-stone-700 tracking-wide hover:border-brown-300 hover:text-brown-500 transition-colors"
              >
                {item.label}のお悩みへ →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="FAQ"
            ja="よくあるご質問"
          />
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

      {/* ===== Menu Links ===== */}
      <section className="py-14 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 uppercase mb-6">Menus</p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'もみほぐし', href: '/menu/body-care' },
              { label: 'セットコース', href: '/menu/set' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-sand-200 bg-cream-50 py-4 px-6 text-sm text-stone-700 tracking-wide hover:border-brown-300 hover:text-brown-500 transition-colors"
              >
                {item.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">
            全身疲労は、MARISAでリセット
          </h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業中・当日予約OK。<br />
            君津で疲労回復ケアをお探しの方は、ぜひMARISAにお越しください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton href="/menu/body-care" label="もみほぐしのメニューを見る" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
