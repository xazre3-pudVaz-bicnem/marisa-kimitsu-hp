import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の足のだるさ・むくみのケア｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」の足つぼ・足のケア。立ち仕事・長時間着席による足のだるさやむくみを、足つぼと施術で和らげます。当日予約OK・夜0時まで営業。',
  keywords: ['君津 足つぼ', '君津 むくみ', '君津 足 マッサージ', '君津 足のだるさ', '君津 リフレクソロジー'],
  openGraph: {
    title: '君津の足のだるさ・むくみのケア｜MARISA 君津店',
    description: '千葉県君津市のリラクゼーションサロン「MARISA」の足つぼ・足のケア。立ち仕事・長時間着席による足のだるさやむくみを、足つぼと施術で和らげます。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/symptom/leg-fatigue' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '足つぼは痛いですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '足つぼは「痛気持ちいい」と感じる方が多い施術です。ただし疲れが溜まっているときや、体の特定の部位に負担がかかっているときは、強く感じることがあります。圧の強さはご希望に応じて調整しますので、「痛い」と感じた場合はいつでもお申し付けください。優しめから始めることも可能です。',
      },
    },
    {
      '@type': 'Question',
      name: '足つぼとリフレクソロジーは同じですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '「足つぼ」と「リフレクソロジー（reflexology）」は関連した概念です。リフレクソロジーは英国式を中心に普及した足裏への反射区療法で、足の特定の部位が内臓・体の各部位と対応するという考え方に基づきます。日本の「足つぼ」も足裏の特定のポイントを刺激するという点では共通しています。MARISAでは、足全体（足裏・足の甲・ふくらはぎ）を含めてほぐすケアを行っています。',
      },
    },
    {
      '@type': 'Question',
      name: '足のむくみに足つぼは効果がありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '足つぼや足のマッサージは、リンパの流れや血行を促進することで足のむくみや重さがやわらぐサポートをします。ただし、心臓や腎臓の疾患によるむくみは医療的な対処が必要です。MARISAのケアはリラクゼーション目的であり、むくみを医療的に治療するものではありません。一時的なむくみや立ち仕事・座り仕事からくる足のだるさに対しては、多くの方にご好評いただいています。',
      },
    },
    {
      '@type': 'Question',
      name: '足つぼ単体とセットコースはどちらがいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '足だけが気になる場合は足つぼ単体（40分〜）でもしっかりケアできます。体全体の疲れも気になる場合は、もみほぐしと足つぼを組み合わせたセットコースがおすすめです。「今日は足だけに集中してほしい」という場合は足つぼ単体、「全身まとめてほぐしたい」という場合はセットコースをお選びください。',
      },
    },
  ],
}

const causes = [
  {
    title: '立ち仕事・歩き仕事',
    desc: '飲食・販売・工場・医療など、一日中立って働く職種の方は足全体の筋肉が疲弊しやすいです。重力によって下半身に血液やリンパ液が溜まりやすく、夕方になるほど足がだるくなる・むくむという症状が現れます。',
  },
  {
    title: '長時間の着席・デスクワーク',
    desc: '長時間座り続けると、足の筋肉がほとんど動かない状態が続きます。ふくらはぎは「第二の心臓」と呼ばれ、筋肉の収縮によって血液を心臓に戻す役割を担いますが、動かないとこのポンプ機能が低下し、血液やリンパが滞りやすくなります。',
  },
  {
    title: 'むくみ・冷え',
    desc: '冷えた環境での長時間作業や、水分の過剰摂取・塩分過多の食事習慣は足のむくみを助長します。冷えによって血管が収縮すると血行が悪化し、老廃物が排出されにくくなるため、足のだるさやむくみが生じやすくなります。',
  },
  {
    title: '運動不足・筋肉量の低下',
    desc: '普段から運動する機会が少ないと、ふくらはぎや太ももの筋肉量が低下します。筋肉のポンプ機能が弱まると足の血流が悪化し、疲れやすく・だるさを感じやすい足になります。特に在宅勤務が増えた近年では、この傾向が強まっています。',
  },
]

const faqs = [
  {
    q: '足つぼは痛いですか？',
    a: '足つぼは「痛気持ちいい」と感じる方が多い施術です。疲れが溜まっているときや体の特定の部位に負担がかかっているときは感じやすいことがあります。圧の強さはいつでも調整できますので、お気軽にお申し付けください。優しめからスタートすることも可能です。',
  },
  {
    q: '足つぼとリフレクソロジーは同じですか？',
    a: 'リフレクソロジー（reflexology）は足裏の特定の部位が体の各部位と対応するという考えに基づく英国式の施術です。日本の足つぼも同様の考え方を持つ施術で、概ね同じ系統のケアと言えます。MARISAでは足裏だけでなく足全体（足の甲・ふくらはぎなど）をケアします。',
  },
  {
    q: '足のむくみに足つぼは効果がありますか？',
    a: '足つぼや足のマッサージは血行・リンパの流れを促進することで、足のむくみや重さがやわらぐサポートをします。ただし、心臓・腎臓の疾患によるむくみは医療機関への相談が必要です。立ち仕事・座り仕事からくる一時的なむくみや疲れに対して、多くの方にご好評いただいています。',
  },
  {
    q: '足つぼ単体とセットコースはどちらがいいですか？',
    a: '足のだるさ・むくみが主なお悩みの場合は足つぼ単体でも十分です。全身の疲れも気になる場合や、腰・肩もついでにほぐしたい場合はセットコースがおすすめです。どちらにするか迷った場合は、カウンセリングでご相談いただければご提案します。',
  },
]

export default function LegFatiguePage() {
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
              { label: '足のだるさ・むくみ' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Leg & Foot Care</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800">
              足のだるさ・むくみを、足つぼと施術で和らげる
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「仕事終わりに足がパンパン」「夕方になると足がだるくて重い」「ふくらはぎが張っている」——そのようなお悩みをお持ちの方が、君津市内からも多くご来店されています。MARISAの足つぼと足のケアで、足の疲れとだるさを整えます。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Visual ===== */}
      <section className="bg-stone-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-0.5">
            <div className="relative aspect-[16/7] overflow-hidden">
              <Image src="/LINE_ALBUM_もみほぐしMARISA_260615_13.jpg" alt="君津 足の疲れ むくみ 脚のケア 施術" fill className="object-cover" />
            </div>
            <div className="relative aspect-[16/7] overflow-hidden">
              <Image src="/LINE_ALBUM_もみほぐしMARISA_260615_14.jpg" alt="君津 足つぼ 脚 ストレッチ ケア" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Causes ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Causes"
            ja="足のだるさ・むくみの主な原因"
            lead="足の疲れは、仕事環境や生活習慣が大きく影響しています。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {causes.map((c) => (
              <div key={c.title} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{c.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== What is Reflexology ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Reflexology"
            ja="足つぼ・リフレクソロジーとは"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              リフレクソロジー（Reflexology）とは、足裏の特定の部位が体の各臓器や器官と対応しているという考え方に基づき、足裏を刺激することで全身のバランスを整えることを目的とした施術です。英国や台湾を中心に広まり、日本では「足つぼ」「足裏マッサージ」と呼ばれることが多く、広く親しまれています。
            </p>
            <p>
              足裏には「反射区」と呼ばれるゾーンがあり、それぞれが体の特定の部位に対応するとされています。足裏のポイントをほぐすことで、その対応する部位の血行促進やリラクゼーション効果が期待できます。医療行為ではありませんが、日常的な体のケアとして多くの方に親しまれています。
            </p>
            <p>
              MARISAの足つぼは、足裏だけでなく、足の甲・くるぶしまわり・ふくらはぎまで含めた足全体へのケアを行います。ふくらはぎをほぐすことで下肢の血液循環を促し、足のだるさやむくみがやわらぎやすくなります。
            </p>
          </div>
        </div>
      </section>

      {/* ===== MARISA Approach ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Our Approach"
            ja="MARISAの足つぼアプローチ"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAの足つぼケアは、足裏のツボ・反射区への刺激とともに、ふくらはぎ・足の甲・くるぶしまわりも含めた足全体のほぐしを行います。足だけを単体で刺激するのではなく、下肢全体の血行とリンパの流れを促すことを意識したケアです。
            </p>
            <p>
              施術はリクライニングチェアまたは専用ベッドで行い、リラックスした状態で受けていただけます。圧の強さは「強め」「普通」「優しめ」から選べます。足つぼは初めての方でも受けやすい施術で、「痛気持ちいい」感覚が好きな方には特に人気です。
            </p>
            <p>
              全身疲労が気になる方には、もみほぐしと足つぼを組み合わせたセットコースもおすすめです。上半身のコリを取りながら、足の疲れもまとめてリセットできます。「全部まとめてほぐしたい」という方に多くご利用いただいています。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Recommended Menus ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menus"
            ja="足のだるさ・むくみにおすすめのメニュー"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Foot Care</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">足つぼ・足のケア</h3>
              <p className="text-sm text-stone-700 leading-loose mb-4">足裏・ふくらはぎを集中ケア。立ち仕事・座り仕事後の足の疲れリセットに。</p>
              <Link href="/menu/foot" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
                足つぼメニューを見る →
              </Link>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Set Course</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">セットコース</h3>
              <p className="text-sm text-stone-700 leading-loose mb-4">もみほぐし＋足つぼの組み合わせ。全身の疲れを体の上から下までまとめてケア。</p>
              <Link href="/menu/set" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
                セットコースを見る →
              </Link>
            </div>
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

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">
            足のお悩みは、MARISAへ
          </h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業中・当日予約OK。<br />
            君津で足つぼ・足のケアをお探しの方は、ぜひMARISAにお越しください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton href="/menu/foot" label="足つぼのメニューを見る" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
