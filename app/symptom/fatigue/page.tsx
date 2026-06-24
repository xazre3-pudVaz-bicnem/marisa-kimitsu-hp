import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, LINE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の全身疲労ケア・もみほぐし｜MARISA 君津店',
  description:
    '君津市で全身の疲れでお悩みの方へ。MARISA 君津店の全身もみほぐし90分・120分で、溜まった疲れをまるごとケア。90分¥6,400〜。セットコースも人気。当日予約OK・夜0時まで営業。',
  keywords: ['君津 全身疲労', '君津 疲れ もみほぐし', '君津 マッサージ 疲労回復', '君津 全身ケア', '君津 リラクゼーション'],
  openGraph: {
    title: '君津の全身疲労ケア・もみほぐし｜MARISA 君津店',
    description: '君津市で全身の疲れでお悩みの方へ。MARISA 君津店の全身もみほぐし90分・120分で、溜まった疲れをまるごとケア。90分¥6,400〜。当日予約OK・夜0時まで営業。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/symptom/fatigue' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '全身疲労には何分のコースが向いていますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '全身の疲れには「もみほぐし60分（¥4,500/70分計）」または「90分（¥6,400/100分計）」がおすすめです。60分は全身をバランスよくほぐせる定番コースです。疲れが特に深い方、全身をじっくりほぐしたい方には90分をおすすめします。足の疲れも気になる方には足つぼセット（60分¥5,500〜）もご検討ください。',
      },
    },
    {
      '@type': 'Question',
      name: '定期的に通いたいのですが、おすすめの頻度は？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '全身疲労のケアは2〜4週間に1回が目安です。慢性的な疲れを感じている方は最初の数回を2週間ペースで来店されると体の緊張が整いやすくなります。体の状態が安定してきたら月1回ペースに移行される方も多いです。定期的なメンテナンスとして継続ご利用いただくことで、疲れが慢性化しにくい体を保ちやすくなります。',
      },
    },
    {
      '@type': 'Question',
      name: '90分と120分の違いは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'もみほぐし90分（¥6,400/100分計）は首・肩・背中・腰・脚まで全身を時間をかけてほぐすコースです。もみほぐし120分（¥8,400）はさらに余裕を持って全身をじっくりほぐせる最上位コース。久しぶりのケア、たっぷり時間を使いたい方、「全身まんべんなく丁寧にほぐしたい」という方には120分がおすすめです。',
      },
    },
    {
      '@type': 'Question',
      name: '疲労回復のためにもみほぐしを活用するにはどうすればいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '定期的なご来店（2〜4週間に1回）が最も効果的な活用方法です。症状が出てからケアするより、定期メンテナンスとして継続することで疲れが蓄積しにくくなります。施術後は水分をしっかり摂り、当日の激しい運動は控えてゆっくりお休みいただくと、リラックス感が持続しやすくなります。',
      },
    },
    {
      '@type': 'Question',
      name: 'セットコースとはどのようなものですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'セットコースはもみほぐしに足つぼまたはヘッドケアを組み合わせたコースです。足つぼセット（60分¥5,500〜）はもみほぐし＋足つぼで体の上から下まで一度にケアできます。ヘッドセット（60分¥5,400〜）はもみほぐし＋ヘッドケアの組み合わせです。全身の疲れに加えて足や頭の疲れも気になる方に人気のコースです。',
      },
    },
  ],
}

const symptoms = [
  {
    title: 'どこかが特にではなく全体的に疲れている',
    desc: '「肩がひどい」「腰が特につらい」というよりも、「全体的に疲れている」「体全体が重だるい」という感覚を覚える方に、もみほぐしの全身ケアは特に向いています。全身の筋肉の緊張を部位ごとにほぐすことで、体全体のだるさをやわらげるサポートをします。',
  },
  {
    title: '朝起きてもだるい・寝ても疲れが取れない',
    desc: '一晩眠ったのに翌朝まだ疲れている、という状態は慢性疲労のサインです。体の疲れが睡眠だけでは回復しきれなくなっている可能性があります。もみほぐしで筋肉の緊張をほぐし体の回復をサポートすることで、翌朝の体の軽さが変わる方も多いです。',
  },
  {
    title: '仕事が終わった後ぐったりする',
    desc: '仕事終わりに「ぐったりしてもう何もしたくない」という状態が続いている場合、体の疲れが限界に近づいているサインです。仕事帰りにMARISAでほぐしてからお帰りいただくことで、帰宅後の過ごし方が変わる方も多くいらっしゃいます。',
  },
  {
    title: '休日に出かける気力がない',
    desc: '「休日なのに体がだるくて動けない」「せっかくの休みなのに体を休めるだけで終わってしまう」——これは体の疲れが週をまたいで持ち越されているサインです。定期的なもみほぐしで平日の疲れをリセットすることで、休日を元気に過ごしやすくなります。',
  },
  {
    title: '疲れが翌日まで持ち越しになっている',
    desc: '「月曜日からすでに体が重い」「先週の疲れが抜けていない」という状態は、体の回復が追いついていないサインです。特に仕事の忙しい時期・繁忙期は疲れの持ち越しが起きやすく、定期的なケアが特に大切になる時期です。',
  },
]

const kimitsuScenes = [
  {
    title: '工場・建設現場での肉体的な仕事',
    desc: '君津市周辺には大型の工場・建設現場が多く、肉体的な仕事による全身疲労を感じている方が多くご来店されます。仕事終わりの全身のだるさ・疲れを翌日に持ち越さないためのケアとして利用される方が多いです。',
  },
  {
    title: '育児や家事の疲れ',
    desc: '育児・家事は見えにくい「仕事」ですが、体への負担は大きいです。赤ちゃんや幼い子供の世話、家事全般をこなしながら自分のケアをする時間がなかった方に、ゆっくり過ごせる時間としてご利用いただいています。',
  },
  {
    title: '長時間残業・繁忙期の疲れ',
    desc: '仕事の繁忙期・長時間残業が続く時期は体の疲れが一気に蓄積します。「今週は特に疲れた」というタイミングでの来店や、繁忙期前後の定期ケアとしてご活用いただいています。',
  },
  {
    title: '季節の変わり目の体のだるさ',
    desc: '春・秋の季節の変わり目は自律神経のバランスが乱れやすく、体がだるくなりやすい時期です。気温の変化に体が対応しきれずに疲れが溜まりやすいこの時期に、定期的なほぐしでリセットすることをおすすめします。',
  },
]

const menuItems = [
  {
    category: 'Body Care',
    name: 'もみほぐし 60分',
    desc: '全身をバランスよくほぐす定番コース。首・肩・背中・腰・脚を一通りケアできます。全身疲労のベースケアとして最もご利用の多い時間です。',
    price: '¥4,500（70分計）',
    href: '/menu/body-care',
  },
  {
    category: 'Full Body',
    name: 'もみほぐし 90分・120分',
    desc: '全身をじっくりほぐしたい方に。疲れが深い方・久しぶりのケアの方・「全部まとめてほぐしたい」方に特におすすめです。90分は100分計、120分はたっぷり時間をかけたプレミアムケア。',
    price: '90分 ¥6,400（100分計）/ 120分 ¥8,400',
    href: '/menu/body-care',
  },
  {
    category: 'Foot Set',
    name: '足つぼセットコース',
    desc: 'もみほぐし＋足つぼの組み合わせ。全身の疲れに加えて足のだるさ・むくみも気になる方に。体の上から下まで一度にまとめてケアできます。',
    price: '60分 ¥5,500 / 90分 ¥6,900 / 120分 ¥8,900',
    href: '/menu/set',
  },
  {
    category: 'Head Set',
    name: 'ヘッドセットコース',
    desc: 'もみほぐし＋ヘッドケアの組み合わせ。全身疲労に加えて頭の重さ・眼精疲労も気になる方に。全身と頭をまとめてリセットしたい方に人気のコースです。',
    price: '60分 ¥5,400 / 90分 ¥6,700 / 120分 ¥8,700',
    href: '/menu/set',
  },
]

const courseGuide = [
  {
    time: '60分（¥4,500/70分計）',
    target: '全身をバランスよくほぐしたい方',
    detail: '首・肩・背中・腰・脚を一通りほぐせる定番コース。定期メンテナンスとして最も人気。',
  },
  {
    time: '90分（¥6,400/100分計）',
    target: '疲れが深い方・全身をじっくりほぐしたい方',
    detail: '全身をたっぷり時間をかけてほぐせるコース。慢性的な疲れ・繁忙期後のリセットに。',
  },
  {
    time: '120分（¥8,400）',
    target: 'たっぷり時間を使ってリセットしたい方',
    detail: '全身を丁寧にじっくりほぐす最上位コース。久しぶりのケア・自分へのご褒美に。',
  },
  {
    time: '足つぼセット90分（¥6,900）',
    target: '全身と足の疲れをまとめてリセットしたい方',
    detail: 'もみほぐし＋足つぼのセット。全身疲労と足のだるさ両方ある方に特に人気。',
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
    q: '全身疲労には何分のコースが向いていますか？',
    a: '全身疲労には「もみほぐし60分（¥4,500/70分計）」または「90分（¥6,400/100分計）」がおすすめです。60分は全身をバランスよくほぐせる定番コース。疲れが特に深い方やじっくりほぐしたい方には90分をおすすめします。足の疲れも気になる方には足つぼセット（60分¥5,500〜）をご検討ください。',
  },
  {
    q: '定期的に通いたいのですが、おすすめの頻度は？',
    a: '全身疲労のケアは2〜4週間に1回が目安です。慢性的な疲れを感じている方は最初の数回を2週間ペースで来店されると体の緊張が整いやすくなります。体の状態が安定してきたら月1回ペースに移行される方も多いです。定期的なメンテナンスとして継続ご利用いただくことで、疲れが慢性化しにくい体を保ちやすくなります。',
  },
  {
    q: '90分と120分の違いは何ですか？',
    a: 'もみほぐし90分（¥6,400/100分計）は首・肩・背中・腰・脚まで全身をしっかりほぐせるコースです。もみほぐし120分（¥8,400）はさらに余裕を持って全身をじっくりほぐせる最上位コースで、各部位により時間をかけてほぐします。久しぶりのケア・「全身まんべんなく丁寧にほぐしてほしい」という方には120分がおすすめです。',
  },
  {
    q: '疲労回復のためにもみほぐしを活用するにはどうすればいいですか？',
    a: '定期的なご来店（2〜4週間に1回）が最も効果的な活用方法です。症状が出てからのケアより、定期メンテナンスとして継続することで疲れが蓄積しにくくなります。施術後は水分をしっかり摂り、当日の激しい運動は控えてゆっくりお休みいただくと、リラックス感が持続しやすくなります。',
  },
  {
    q: 'セットコースとはどのようなものですか？',
    a: 'セットコースはもみほぐしに足つぼまたはヘッドケアを組み合わせたコースです。足つぼセット（60分¥5,500〜）はもみほぐし＋足つぼで体の上から下まで一度にケアできます。ヘッドセット（60分¥5,400〜）はもみほぐし＋ヘッドケアの組み合わせです。全身疲労に加えて足や頭の疲れも気になる方に特に人気です。',
  },
]

const flowSteps = [
  { step: '01', title: '予約', desc: '公式WEB・ホットペッパービューティー・お電話でご予約ください。当日予約も受け付けています。夕方以降は混み合いやすいため事前予約がおすすめです。' },
  { step: '02', title: '受付・ヒアリング', desc: '来店後、カウンセリングシートへご記入いただきます。全身の状態・特に気になる部位を確認します。' },
  { step: '03', title: 'カウンセリング', desc: '担当スタッフが全身の疲れの状態・気になる部位・圧の好みを確認します。「今日は全身まんべんなく」「腰を特に重点的に」など、その日のご要望をお聞きします。' },
  { step: '04', title: '施術', desc: '専用ベッドで首・肩・背中・腰・脚と全身をほぐします。うつ伏せ→仰向けの体位変換で全身をバランスよくケアします。' },
  { step: '05', title: 'お会計・次回予約', desc: '施術後、お会計をしていただきます。次回の定期予約もその場で承ります。' },
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
              全身の疲れを、もみほぐしでまるごとリセットする
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

      {/* ===== Symptoms ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Do You Feel This?"
            ja="こんなお悩みはありませんか"
            lead="全身の疲れは、さまざまな要因が重なって生じます。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {symptoms.map((s) => (
              <div key={s.title} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{s.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 max-w-3xl">
            <p className="text-sm text-stone-700 leading-loose">
              全身疲労の多くは、体の疲れと心の疲れが重なっている状態です。仕事のプレッシャーやストレスは筋肉の緊張を生み、その緊張が慢性化すると血行不良・だるさ・睡眠の質の低下につながります。もみほぐしで体の緊張をほぐすことは、こうしたサイクルの緩和をサポートします。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Kimitsu Scenes ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Life in Kimitsu"
            ja="君津での生活と全身疲労が起きやすいシーン"
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

      {/* ===== MARISA Approach ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Our Approach"
            ja="MARISAでのケア方針"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              全身疲労のお客様には、首・肩・背中・腰・脚を通してほぐす全身もみほぐしをおすすめしています。部分的なケアよりも全身を通してほぐすことで、体全体の筋肉の緊張がやわらぎ、血行が促されやすくなります。
            </p>
            <p>
              施術前のカウンセリングでは、全身の状態と特に気になる部位をお聞きします。「今日は全部まんべんなくほぐしてほしい」「腰を特に念入りに」など、その日のご要望に合わせて施術内容を調整します。圧の強さも「強め・普通・優しめ」から選べます。
            </p>
            <p>
              さらに全身をまとめてケアしたい方には、もみほぐしに足つぼやヘッドケアを組み合わせたセットコースもあります。体の上（頭・首・肩）から下（腰・脚・足）まで一度のご来店でケアでき、全身がすっきりした感覚を得られやすくなります。
            </p>
            <p>
              MARISA 君津店は夜0時まで営業しています（最終受付23:00）。仕事帰りや夕方以降のご来店も多く、お仕事が終わってからでもゆっくり全身をほぐしてリフレッシュしてお帰りいただける環境を整えています。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Recommended Menus ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menus"
            ja="全身疲労におすすめのメニュー"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
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
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="How to Choose"
            ja="コース時間の選び方"
            lead="疲れの程度や目的に合わせて最適なコースをお選びください。"
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

      {/* ===== Who Is It For ===== */}
      <section className="py-16 bg-cream-50">
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

      {/* ===== Visit Frequency ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Frequency"
            ja="来店頻度の目安"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              全身疲労のケアにおける来店頻度の目安は2〜4週間に1回です。慢性的な疲れを感じている方は最初の数回を2週間ペースで来店されると体の緊張が整いやすくなります。
            </p>
            <p>
              「症状が出てから来る」よりも、「定期的にメンテナンスで来る」スタイルが全身疲労の慢性化を防ぎやすくなります。仕事帰りに定期的に通っていただいている方も多く、自分のペースで継続できる環境をご提供しています。
            </p>
          </div>
          <div className="mt-8 bg-cream-50 border border-sand-200 p-6">
            <p className="text-xs tracking-widest text-greige-400 mb-2">目安</p>
            <p className="text-sm font-medium text-stone-800 mb-1">2〜4週間に1回がおすすめ</p>
            <p className="text-sm text-stone-700 leading-loose">定期的なメンテナンスとして継続することで、疲れが蓄積しにくい体を保ちやすくなります。</p>
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
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Owner</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">オーナー</h3>
              <p className="text-sm text-stone-700 leading-loose">もみほぐし・足つぼ担当。全身をバランスよくほぐすことが得意なオーナーが、全身の疲れをしっかりリセットするケアを行います。</p>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Acupuncturist</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">なお（鍼灸師）</h3>
              <p className="text-sm text-stone-700 leading-loose">国家資格を持つ鍼灸師。もみほぐし＋鍼のセットメニューも担当します。金曜・土曜中心勤務。公式WEB予約（B-merit）でご予約ください。</p>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Staff</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">ゆい</h3>
              <p className="text-sm text-stone-700 leading-loose">不定期出勤。もみほぐしを担当します。</p>
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
              { label: 'もみほぐしメニュー', href: '/menu/body-care' },
              { label: '足つぼセットコース', href: '/menu/set' },
              { label: 'ヘッドセットコース', href: '/menu/set' },
              { label: '睡眠・リラックスのお悩みへ', href: '/symptom/sleep-relax' },
              { label: '足のだるさのお悩みへ', href: '/symptom/leg-fatigue' },
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
            全身疲労は、MARISAでリセット
          </h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業中・当日予約OK・無料駐車場完備。<br />
            君津で疲労回復ケアをお探しの方は、ぜひMARISAにお越しください。
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
