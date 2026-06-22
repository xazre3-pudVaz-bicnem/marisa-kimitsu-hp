import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津のリラクゼーション・睡眠の質ケア｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」。ストレスや緊張をほぐし、より良い睡眠と深いリラックスをサポートします。もみほぐし・ヘッドケア対応。当日予約OK・夜0時まで営業。',
  keywords: ['君津 リラクゼーション', '君津 睡眠', '君津 ストレス ほぐし', '君津 リラックス サロン'],
  openGraph: {
    title: '君津のリラクゼーション・睡眠の質ケア｜MARISA 君津店',
    description: '千葉県君津市のリラクゼーションサロン「MARISA」。ストレスや緊張をほぐし、より良い睡眠と深いリラックスをサポートします。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/symptom/sleep-relax' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '睡眠の質を上げたい場合、どのコースがいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'リラックスを深めるという観点から、もみほぐし60分以上のコースまたはヘッドセットコースをおすすめします。特に頭皮・側頭部のヘッドケアは、緊張した神経をやわらげ、副交感神経が優位になりやすい状態をサポートします。睡眠の前にMARISAでほぐしていただく方も多いです。',
      },
    },
    {
      '@type': 'Question',
      name: 'リラクゼーションサロンと整体の違いは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'リラクゼーションサロンは医療行為や骨格矯正を行わず、筋肉のほぐしや心身のリラックスを目的とした施術を提供する場所です。整体は骨格・関節へのアプローチが中心ですが、リラクゼーションサロンは筋肉・筋膜の緊張をほぐすことで、疲れや張りをやわらげ、日常的なメンテナンスとして多くの方に利用されています。',
      },
    },
    {
      '@type': 'Question',
      name: '施術中に眠ってしまっても大丈夫ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'もちろんです。施術中にうとうとしたり、眠ってしまう方はたくさんいらっしゃいます。それだけ深くリラックスしていただけているということです。途中で声をかけることは最小限にし、心地よくお過ごしいただけるよう心がけています。',
      },
    },
    {
      '@type': 'Question',
      name: '休日前や疲れたときに予約できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、週末・連休前・仕事帰りなど、ご自身のタイミングでご予約いただけます。当日予約も受け付けています。ただし、休日前や金曜夜は混み合いやすいため、事前のご予約をおすすめします。ホットペッパービューティーから24時間いつでもご予約いただけます。',
      },
    },
  ],
}

const scenes = [
  {
    scene: '休日前・週末の夜',
    desc: '翌日仕事がないという安心感の中で施術を受けると、より深くリラックスしやすいです。休日をしっかり休んで過ごすための準備として、金曜の夜や休前日にご来店される方も多いです。',
  },
  {
    scene: '疲れが溜まったとき',
    desc: '「今週は特に疲れた」「いつもよりだるさが抜けない」というときに、もみほぐしで全身をリセットすることで翌日からの体の軽さが変わります。疲れを溜め込む前に、定期的にケアすることをおすすめします。',
  },
  {
    scene: '気分転換・自分へのご褒美に',
    desc: 'ストレスが続いているとき、何かを頑張った後の自分へのご褒美として、リラクゼーションの時間を楽しみに来られる方も多いです。特別な理由がなくても、気分転換のために来ていただけます。',
  },
  {
    scene: '眠れない夜が続いているとき',
    desc: '緊張や不安で寝付けない夜が続いているとき、もみほぐしやヘッドケアでお体の緊張をほぐすことで、眠りにつきやすい状態をサポートします。医療的なアプローチではありませんが、多くの方にご好評いただいています。',
  },
]

const faqs = [
  {
    q: '睡眠の質を上げたい場合、どのコースがいいですか？',
    a: 'リラックスを深めるという観点から、もみほぐし60分以上またはヘッドセットコースをおすすめします。頭皮・側頭部のヘッドケアは特に緊張をほぐし、副交感神経が優位になりやすい状態をサポートします。「施術後によく眠れた」というご感想を多くいただいています。',
  },
  {
    q: 'リラクゼーションサロンと整体の違いは何ですか？',
    a: 'リラクゼーションサロンは医療行為や骨格矯正を行わず、筋肉のほぐしと心身のリラックスを目的とした場所です。MARISAのもみほぐしは、筋肉・筋膜の緊張をほぐすことで疲れや張りをやわらげ、日常的なメンテナンスとして多くの方にご利用いただいています。',
  },
  {
    q: '施術中に眠ってしまっても大丈夫ですか？',
    a: 'もちろんです。施術中にうとうとしたり、眠ってしまう方はたくさんいらっしゃいます。それだけ深くリラックスしていただけているということです。声がけは最小限にし、心地よい時間をお過ごしいただけるよう心がけています。',
  },
  {
    q: '休日前や疲れたときに予約できますか？',
    a: 'はい、当日予約にも対応しています。休日前・週末・仕事帰りなど、ご自身のタイミングでご予約ください。週末は混み合いやすいため、事前のご予約をおすすめしています。ホットペッパービューティーから24時間いつでもご予約いただけます。',
  },
]

export default function SleepRelaxPage() {
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
              { label: '睡眠・リラックス' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Sleep & Relaxation</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800">
              ゆったりとほぐされる時間が、より良い休息をサポートします
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「眠りが浅い」「休日なのに体が休めない」「ストレスで体が緊張したまま」——現代のストレス社会で、本当の意味でリラックスできている時間が少ない方は多いのではないでしょうか。MARISAでは、体の緊張をほぐすことで心身のリラックスをサポートし、より良い休息の土台を整えます。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Visual ===== */}
      <section className="bg-stone-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-0.5">
            <div className="relative aspect-[16/7] overflow-hidden">
              <Image src="/LINE_ALBUM_もみほぐしMARISA_260615_24.jpg" alt="君津 睡眠改善 リラクゼーション 仰向けケア" fill className="object-cover" />
            </div>
            <div className="relative aspect-[16/7] overflow-hidden">
              <Image src="/LINE_ALBUM_もみほぐしMARISA_260615_3.jpg" alt="君津 リラックス 施術ベッド 落ち着いた空間" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Modern Stress & Sleep ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Modern Life"
            ja="現代のストレスと睡眠の質について"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              現代の生活では、仕事・人間関係・情報過多など、さまざまなストレスにさらされる機会が増えています。ストレスが慢性化すると、交感神経が過剰に活性化した状態が続き、体が常に「緊張モード」になってしまいます。この状態では、たとえ時間があっても深くリラックスできず、夜になっても眠りにつきにくくなることがあります。
            </p>
            <p>
              睡眠の質は、日中の仕事のパフォーマンスや気分、体の回復力に直接影響します。慢性的な睡眠不足や浅い眠りが続くと、疲れが抜けない状態が続き、さらにストレスに対する抵抗力が下がるという悪循環に陥りやすくなります。
            </p>
            <p>
              こうした状況を打開するひとつの方法として、定期的なリラクゼーションがあります。もみほぐしやヘッドケアで体の緊張をほぐし、副交感神経が優位な状態をつくることで、深いリラックスと良質な睡眠のサポートが期待できます。
            </p>
          </div>
        </div>
      </section>

      {/* ===== MARISA's Role ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Our Role"
            ja="リラクゼーションサロンとしてのMARISAの役割"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISA 君津店は、地域の皆様が日常的に体と心を整えに来られるリラクゼーションサロンです。医療機関ではありませんが、日常の中で積み重なる疲れやストレスをリセットする場所として、多くの方に定期的にご利用いただいています。
            </p>
            <p>
              施術はリラックスできる専用ベッドで行い、照明を落とし穏やかなBGMの中で施術を受けていただけます。スタッフはお客様の体の状態に合わせた圧で丁寧に施術し、施術中に眠ってしまう方も多いほど深いリラックス状態をご提供しています。
            </p>
            <p>
              「何か病気ではないけれど、なんとなく体がつらい」「仕事は忙しいが、自分をいたわる時間を持ちたい」——そのような方のための場所でもあります。自分へのご褒美として、気分転換として、疲れのリセットとして、ぜひMARISAをご活用ください。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Effects of Care ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Effects"
            ja="もみほぐし・ヘッドケアのリラックスサポート"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              もみほぐしで全身の筋肉の緊張をほぐすことで、体が「緊張モード」から「リラックスモード」に切り替わりやすくなります。これは医学的な治療ではなく、あくまでリラクゼーション施術としてのサポートですが、「施術後にいつもより深く眠れた」「体が軽くなって気持ちが楽になった」という声を多くいただいています。
            </p>
            <p>
              ヘッドケアは特に頭部・後頭部・側頭部の緊張をほぐすことで、精神的な落ち着きやリラックス感をサポートします。頭の重さ・こめかみの張り・目の疲れが和らぐことで、全体的なだるさも感じにくくなる方が多いです。
            </p>
            <p>
              リラックス効果を最大限に活かすには、施術後はゆっくり過ごすことをおすすめします。施術直後の激しい活動は避け、水分をしっかり取り、できれば施術後にゆっくりお休みいただくとリラックス感が持続しやすくなります。
            </p>
          </div>
          <div className="mt-8 bg-sand-100 border border-sand-200 p-6">
            <p className="text-xs tracking-widest text-greige-400 mb-2">Note</p>
            <p className="text-sm text-stone-700 leading-loose">
              MARISAのもみほぐし・ヘッドケアはリラクゼーションを目的とした施術であり、睡眠障害や精神疾患の医療的治療を行うものではありません。不眠症状が重い場合は医療機関へご相談ください。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Recommended Scenes ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Scenes"
            ja="おすすめのシーン"
            lead="どんなタイミングでご来店いただけるか、ご紹介します。"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {scenes.map((s) => (
              <div key={s.scene} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{s.scene}</h3>
                <p className="text-sm text-stone-700 leading-loose">{s.desc}</p>
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
              { label: '全身疲労', href: '/symptom/fatigue' },
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

      {/* ===== Menu Links ===== */}
      <section className="py-14 bg-cream-100">
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

      {/* ===== FAQ ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
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

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">
            ゆったりとした時間を、MARISAで
          </h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業中・当日予約OK。<br />
            君津でリラクゼーション・睡眠の質ケアをお探しの方は、ぜひMARISAにお越しください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton href="/menu/set" label="セットコースを見る" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
