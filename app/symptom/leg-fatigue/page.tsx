import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, LINE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の足のだるさ・むくみケア・足つぼ｜MARISA 君津店',
  description:
    '君津市で足のだるさ・むくみ・冷えでお悩みの方へ。MARISA 君津店の足つぼ・リフレクソロジーで、足の重さをすっきり。足つぼ30分¥3,800〜。当日予約OK・夜0時まで営業。',
  keywords: ['君津 足つぼ', '君津 足のだるさ', '君津 むくみ ケア', '君津 リフレクソロジー', '君津 足 マッサージ'],
  openGraph: {
    title: '君津の足のだるさ・むくみケア・足つぼ｜MARISA 君津店',
    description: '君津市で足のだるさ・むくみ・冷えでお悩みの方へ。MARISA 君津店の足つぼで足の重さをすっきり。足つぼ30分¥3,800〜。当日予約OK・夜0時まで営業。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/symptom/leg-fatigue' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '足つぼとは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '足つぼ（リフレクソロジー）は、足裏の特定の部位（反射区）が体の各臓器・器官と対応するという考え方に基づき、足裏を刺激することで全身のバランスを整えることを目的とした施術です。MARISAでは足裏だけでなく、足の甲・くるぶしまわり・ふくらはぎまで含めた足全体へのケアを行います。',
      },
    },
    {
      '@type': 'Question',
      name: '足つぼは痛いですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '足つぼは「痛気持ちいい」と感じる方が多い施術です。ただし疲れが溜まっているときや体の特定の部位に負担がかかっているときは、感じやすくなることがあります。圧の強さは「強め・普通・優しめ」からご希望に応じて調整しますので、「痛い」と感じた場合はいつでもお申し付けください。',
      },
    },
    {
      '@type': 'Question',
      name: '30分と60分ではどう違いますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '足つぼ30分（¥3,800）は足裏・足の甲を中心にしたケアです。足つぼ60分（¥5,500）は30分の内容に加え、ふくらはぎ・アキレス腱まわりまで含めた足全体のケアになります。足のだるさ・むくみが気になる方はふくらはぎまでほぐせる60分がおすすめです。',
      },
    },
    {
      '@type': 'Question',
      name: 'むくみに特に向いている時間帯はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '足のむくみは夕方から夜にかけて最も蓄積しやすいため、仕事終わりに来店される方が多いです。MARISAは夜0時まで営業していますので、仕事帰りにお立ち寄りいただくことができます。足のむくみが強い日は早めにご来店いただくとすっきり感を得やすいです。',
      },
    },
    {
      '@type': 'Question',
      name: '足つぼセットと足つぼ単体の違いは？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '足つぼ単体（30分¥3,800〜）は足だけにじっくりフォーカスするコースです。足つぼセット（60分¥5,500〜）はもみほぐし＋足つぼの組み合わせで、体の上（肩・背中・腰）から下（足）まで一度にケアできます。足だけ気になる方は足つぼ単体、全身の疲れも気になる方はセットがおすすめです。',
      },
    },
  ],
}

const symptoms = [
  {
    title: '夕方になると足がパンパンになる',
    desc: '立ち仕事・長時間座り仕事が続くと、重力によって下半身に血液やリンパ液が溜まりやすくなります。「朝はすっきりしていたのに夕方になると足がパンパン」「靴がきつく感じる」という方はこのタイプが多いです。足のむくみは夕方から夜にかけて最もひどくなりやすいです。',
  },
  {
    title: '靴下の跡がなかなか消えない',
    desc: '靴下を脱いだ後に跡が長時間残る場合、足のむくみが慢性化しているサインです。本来は脱いでしばらくすれば消えるべきですが、むくみがひどいと夜になっても跡が残ることがあります。定期的な足のケアで血行・リンパの流れを促すことをおすすめします。',
  },
  {
    title: '朝になっても足のだるさが残る',
    desc: '一晩寝ても足のだるさが取れない場合、足の疲れが慢性化している可能性があります。睡眠中に足を動かさないことで回復が遅れ、翌朝も重だるさを感じることがあります。慢性的な足の疲れには定期的な足つぼケアが日々のメンテナンスとして効果的です。',
  },
  {
    title: '冷え性で足先が冷たい',
    desc: '足先の冷えは血行不良の代表的なサインです。デスクワーク中に足が冷える・冬場は足が常に冷たいという方は、下半身の血行が滞りやすい状態になっています。足つぼのほぐしで足全体の血行を促すことで、冷えの改善をサポートします。',
  },
  {
    title: '長時間立ちっぱなしで足がつらい',
    desc: '飲食・販売・医療・工場など、立ち仕事が多い職種の方は、足全体の筋肉が疲弊しやすいです。特にふくらはぎは「第二の心臓」と呼ばれるほど重要な役割を持ちますが、長時間の立ち仕事でふくらはぎの筋肉が疲弊すると血液の循環が滞り、足のだるさやむくみが生じやすくなります。',
  },
]

const kimitsuScenes = [
  {
    title: '立ち仕事（販売・医療・飲食・介護）',
    desc: '君津市周辺の商業施設・医療機関・飲食店・介護施設など、一日中立って働く方の足のだるさ・むくみのケアのご来店が多いです。仕事終わりの足のパンパン感をリセットしに来られる方が多いです。',
  },
  {
    title: '長時間のデスクワーク',
    desc: '長時間座り続けるオフィスワークや在宅勤務では、ふくらはぎのポンプ機能が低下し足のむくみが蓄積しやすくなります。「夕方になると足が重くなる」というデスクワーカーの方のご来店も多いです。',
  },
  {
    title: '車での長距離移動後',
    desc: '長時間の運転では足をほとんど動かさないため、下半身に血液が滞りやすくなります。通勤・仕事での長距離移動後に足のだるさを感じる方が、仕事帰りにお立ち寄りいただいています。',
  },
  {
    title: '工場勤務・製造業',
    desc: '君津エリアには製造業・工場施設が多く、立ち仕事・歩き仕事による足の疲れを感じている方が多くご来店されます。工場での長時間の立ち仕事後の足のだるさ解消に足つぼが人気です。',
  },
]

const menuItems = [
  {
    category: 'Foot Care',
    name: '足つぼ 30分',
    desc: '足裏のツボ・反射区を中心にほぐします。短時間でも足の疲れをリセットできるコース。足裏・足の甲を中心にケアします。初めての方にも受けやすいコースです。',
    price: '¥3,800',
    href: '/menu/foot',
  },
  {
    category: 'Foot Care',
    name: '足つぼ 60分',
    desc: '30分の内容に加え、ふくらはぎ・アキレス腱まわりまで含めた足全体のケアです。足のだるさ・むくみが気になる方には60分がより効果的です。仕事帰りに足をまとめてリセットしたい方に人気。',
    price: '¥5,500',
    href: '/menu/foot',
  },
  {
    category: 'Foot Set',
    name: '足つぼセットコース',
    desc: 'もみほぐし＋足つぼの組み合わせ。体の上から下までまとめてケアしたい方に。肩・背中・腰をほぐしながら、足のだるさもまとめてリセットできます。全身疲労と足のだるさが両方気になる方に人気。',
    price: '60分 ¥5,500 / 90分 ¥6,900 / 120分 ¥8,900',
    href: '/menu/set',
  },
]

const courseGuide = [
  {
    time: '足つぼ30分（¥3,800）',
    target: '足裏・足の疲れをコンパクトにリセットしたい方',
    detail: '足裏のツボ・反射区を中心にほぐします。時間が少ない日や、足裏集中ケアにおすすめ。',
  },
  {
    time: '足つぼ60分（¥5,500）',
    target: 'ふくらはぎまで含めた足全体のむくみ・だるさが気になる方',
    detail: '足裏に加えてふくらはぎ・アキレス腱までほぐす充実コース。むくみ・だるさのケアに最適。',
  },
  {
    time: '足つぼセット60分（¥5,500）',
    target: '全身と足をまとめてほぐしたい方',
    detail: 'もみほぐし＋足つぼのセット。体全体の疲れと足のだるさを一度にリセットしたい方に。',
  },
  {
    time: '足つぼセット90分（¥6,900）',
    target: '全身をじっくりほぐして足もまとめてケアしたい方',
    detail: '全身もみほぐし＋足つぼのたっぷりセット。疲れが深い方・慢性的な疲労の方に人気。',
  },
]

const faqs = [
  {
    q: '足つぼとは何ですか？',
    a: '足つぼ（リフレクソロジー）とは、足裏の特定の部位（反射区）が体の各臓器・器官と対応するという考え方に基づき、足裏を刺激することで全身のバランスを整えることを目的とした施術です。英国式を中心に「リフレクソロジー」として広まり、日本では「足つぼ」「足裏マッサージ」と呼ばれ広く親しまれています。MARISAでは足裏だけでなく、足の甲・くるぶしまわり・ふくらはぎまで含めた足全体のケアを行います。',
  },
  {
    q: '足つぼは痛いですか？',
    a: '足つぼは「痛気持ちいい」と感じる方が多い施術です。疲れが溜まっているときや体の特定の部位に負担がかかっているときは特に感じやすくなることがあります。圧の強さは「強め・普通・優しめ」からご希望に応じて調整しますので、初めての方や痛みが苦手な方は「優しめ」からお試しください。施術中もいつでも調整できます。',
  },
  {
    q: '30分と60分ではどう違いますか？',
    a: '足つぼ30分（¥3,800）は足裏・足の甲を中心にしたコースです。足つぼ60分（¥5,500）は30分の内容に加え、ふくらはぎ・アキレス腱まわりまで含めた足全体のケアになります。足のだるさ・むくみが気になる方はふくらはぎまでほぐせる60分がより効果的です。時間が限られている場合は30分でも十分すっきり感を得られます。',
  },
  {
    q: 'むくみに特に向いている時間帯はありますか？',
    a: '足のむくみは夕方から夜にかけて最も蓄積しやすいため、仕事終わりに来店される方が多いです。MARISAは夜0時まで営業していますので、仕事帰りにお立ち寄りいただくことができます。足のむくみが強い日は早めにご来店いただくとすっきり感を得やすいです。ただし心臓・腎臓の疾患によるむくみは医療機関へご相談ください。',
  },
  {
    q: '足つぼセットと足つぼ単体の違いは？',
    a: '足つぼ単体（30分¥3,800〜）は足だけにじっくりフォーカスするコースです。足つぼセット（60分¥5,500〜）はもみほぐし＋足つぼの組み合わせで、体の上（肩・背中・腰）から下（足）まで一度にケアできます。足だけが気になる方は足つぼ単体、全身の疲れも気になる方はセットがおすすめです。迷ったらカウンセリングでご相談ください。',
  },
]

const flowSteps = [
  { step: '01', title: '予約', desc: '公式WEB・ホットペッパービューティー・お電話でご予約ください。当日予約も受け付けています。' },
  { step: '02', title: '受付・ヒアリング', desc: '来店後、カウンセリングシートへご記入いただきます。足の状態・むくみの程度を確認します。' },
  { step: '03', title: 'カウンセリング', desc: '担当スタッフが足の状態・気になる部位・圧の好みを確認します。足のどの部分が特につらいかお聞きします。' },
  { step: '04', title: '施術', desc: 'リクライニングチェアまたは専用ベッドでリラックスした姿勢で施術を受けていただきます。足裏・ふくらはぎなど足全体を丁寧にほぐします。' },
  { step: '05', title: 'お会計・次回予約', desc: '施術後、お会計をしていただきます。定期的なケアをご希望の方は次回のご予約もその場で承ります。' },
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
              足のだるさ・むくみを、足つぼで整える
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「仕事終わりに足がパンパン」「夕方になると足がだるくて重い」「ふくらはぎが張っている」——そのようなお悩みをお持ちの方が、君津市内からも多くご来店されています。MARISAの足つぼと足のケアで、足の疲れとだるさをリセットします。
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

      {/* ===== Symptoms ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Do You Feel This?"
            ja="こんなお悩みはありませんか"
            lead="足の疲れは、仕事環境や生活習慣が大きく影響しています。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {symptoms.map((s) => (
              <div key={s.title} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{s.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Kimitsu Scenes ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Life in Kimitsu"
            ja="君津での生活と足のだるさが起きやすいシーン"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {kimitsuScenes.map((s) => (
              <div key={s.title} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{s.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== What is Reflexology ===== */}
      <section className="py-16 bg-cream-50">
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
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Our Approach"
            ja="MARISAでのケア方針"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAの足つぼケアは、足裏のツボ・反射区への刺激とともに、ふくらはぎ・足の甲・くるぶしまわりも含めた足全体のほぐしを行います。足だけを単体で刺激するのではなく、下肢全体の血行とリンパの流れを促すことを意識したケアです。
            </p>
            <p>
              施術はリクライニングチェアまたは専用ベッドで行い、リラックスした状態で受けていただけます。圧の強さは「強め」「普通」「優しめ」から選べます。足つぼは初めての方でも受けやすい施術で、「痛気持ちいい」感覚が好きな方には特に人気です。
            </p>
            <p>
              全身疲労が気になる方には、もみほぐしと足つぼを組み合わせた足つぼセットコースもおすすめです。上半身のコリを取りながら、足の疲れもまとめてリセットできます。「全部まとめてほぐしたい」という方に多くご利用いただいています。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Recommended Menus ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menus"
            ja="足のだるさ・むくみにおすすめのメニュー"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {menuItems.map((m) => (
              <div key={m.name} className="border border-sand-200 bg-cream-50 p-6 flex flex-col">
                <p className="text-xs tracking-widest text-brown-400 mb-2">{m.category}</p>
                <h3 className="text-sm font-medium text-stone-800 mb-2">{m.name}</h3>
                <p className="text-sm text-stone-700 leading-loose mb-3 flex-1">{m.desc}</p>
                <p className="text-xs text-brown-500 font-medium mb-3">{m.price}</p>
                <Link href={m.href} className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500 self-start">
                  詳しく見る →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Course Guide ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="How to Choose"
            ja="コース時間の選び方"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {courseGuide.map((c) => (
              <div key={c.time} className="border border-sand-200 bg-cream-50 p-6">
                <p className="text-xs tracking-widest text-brown-400 mb-1">{c.time}</p>
                <h3 className="text-sm font-medium text-stone-800 mb-2">{c.target}</h3>
                <p className="text-sm text-stone-700 leading-loose">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Visit Frequency ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Frequency"
            ja="来店頻度の目安"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              足のだるさ・むくみのケアにおける来店頻度の目安は2〜4週間に1回です。立ち仕事・長時間のデスクワークが続く環境では、定期的に足をほぐすことで蓄積した疲れをリセットしやすくなります。
            </p>
            <p>
              疲れが特に蓄積しやすい繁忙期や、季節の変わり目など体の変化が大きい時期は月2〜3回ご来店される方もいます。仕事帰りに定期的に通っていただいている方も多いです。
            </p>
          </div>
          <div className="mt-8 bg-cream-50 border border-sand-200 p-6">
            <p className="text-xs tracking-widest text-greige-400 mb-2">目安</p>
            <p className="text-sm font-medium text-stone-800 mb-1">2〜4週間に1回がおすすめ</p>
            <p className="text-sm text-stone-700 leading-loose">立ち仕事・長時間座り仕事が続く方は定期的なケアで足の蓄積疲労を防ぎやすくなります。</p>
          </div>
          <div className="mt-4">
            <p className="text-xs text-stone-600 leading-loose">
              ※心臓・腎臓の疾患によるむくみは医療機関へのご相談をおすすめします。MARISAのケアはリラクゼーションを目的としたものであり、疾患の治療を行うものではありません。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Staff ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Staff"
            ja="担当スタッフ"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl">
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Owner</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">オーナー</h3>
              <p className="text-sm text-stone-700 leading-loose">足つぼ・もみほぐし担当。足裏のツボ・反射区への的確なアプローチと、ふくらはぎまで含めた足全体のほぐしを丁寧に行います。</p>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Staff</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">ゆい</h3>
              <p className="text-sm text-stone-700 leading-loose">不定期出勤。もみほぐし・足つぼを担当します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Flow ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Flow"
            ja="施術の流れ"
          />
          <div className="mt-10 space-y-4">
            {flowSteps.map((f) => (
              <div key={f.step} className="flex gap-5 border border-sand-200 bg-cream-50 p-5">
                <p className="font-en text-2xl text-brown-400 font-light shrink-0 leading-none pt-1">{f.step}</p>
                <div>
                  <h3 className="text-sm font-medium text-stone-800 mb-1">{f.title}</h3>
                  <p className="text-sm text-stone-700 leading-loose">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
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

      {/* ===== Related Links ===== */}
      <section className="py-14 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 uppercase mb-6">Related Pages</p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: '足つぼメニュー', href: '/menu/foot' },
              { label: 'セットコース', href: '/menu/set' },
              { label: 'もみほぐしメニュー', href: '/menu/body-care' },
              { label: '全身疲労のお悩みへ', href: '/symptom/fatigue' },
              { label: '腰まわりのお悩みへ', href: '/symptom/lower-back' },
              { label: 'アクセス・無料駐車場', href: '/access' },
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
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
            足のお悩みは、MARISAへ
          </h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業中・当日予約OK・無料駐車場完備。<br />
            君津で足つぼ・足のケアをお探しの方は、ぜひMARISAにお越しください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={BMERIT_URL} label="WEB予約（公式）" variant="light" size="lg" />
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約" variant="outline" size="lg" />
          </div>
          {LINE_URL && (
            <div className="mt-4">
              <a href={LINE_URL} className="text-sm text-sand-300 underline underline-offset-4 hover:text-cream-50 transition-colors">
                LINEでお問い合わせ
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
