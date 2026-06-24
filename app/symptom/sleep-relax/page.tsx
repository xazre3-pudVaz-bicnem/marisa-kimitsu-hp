import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, LINE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津で睡眠の質向上・リラックスケア｜MARISA 君津店',
  description:
    '君津市で睡眠の質が気になる方・リラックスしたい方へ。MARISA 君津店のもみほぐし・ヘッドセットで、こわばった身体をほぐしリラックスしやすい状態に。45分¥3,900〜。当日予約OK。',
  keywords: ['君津 リラクゼーション', '君津 リラックス ケア', '君津 睡眠 もみほぐし', '君津 不眠 ケア', '君津 ストレス ケア'],
  openGraph: {
    title: '君津で睡眠の質向上・リラックスケア｜MARISA 君津店',
    description: '君津市で睡眠の質が気になる方・リラックスしたい方へ。MARISA 君津店のもみほぐし・ヘッドセットでリラックスしやすい状態へ。45分¥3,900〜。当日予約OK。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/symptom/sleep-relax' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'もみほぐしで眠りやすくなりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'もみほぐしは医療行為ではないため睡眠に対する効果を保証するものではありませんが、体の筋肉の緊張をほぐすことで副交感神経が優位になりやすい状態をサポートします。「施術後によく眠れた」「体が軽くなって眠りにつきやすかった」というご感想を多くいただいています。',
      },
    },
    {
      '@type': 'Question',
      name: 'ヘッドケアはリラックスに向いていますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、ヘッドケアはリラックスに特に向いている施術です。頭皮・側頭部・後頭部の緊張をほぐすことで、精神的な落ち着きやリラックス感をサポートします。施術中に眠ってしまう方も多く、深いリラックス状態を得やすいと好評です。',
      },
    },
    {
      '@type': 'Question',
      name: '眠る前に来店するのが良いですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'リラックスを目的とした来店であれば、夕方以降・寝る前の来店が特に効果的です。MARISAは夜0時まで営業していますので、夜の時間帯にご来店いただけます。施術後はそのまま帰宅してゆっくりお休みいただくと、リラックス感が持続しやすくなります。',
      },
    },
    {
      '@type': 'Question',
      name: '強めのほぐしとゆっくりのほぐしはどちらがリラックスに向いていますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'リラックスを目的とする場合は、強すぎず心地よく感じる「普通〜優しめ」の圧がより向いていることが多いです。強すぎる圧は体への刺激が強くなりすぎることもあります。ただし個人差がありますので、施術前のカウンセリングでご希望をお聞きした上で調整します。',
      },
    },
    {
      '@type': 'Question',
      name: 'どのコースが最もリラックス感を得やすいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'リラックスを重視する方には「ヘッドセットコース（60分¥5,400〜）」が特に人気です。全身のもみほぐしと頭部のヘッドケアを組み合わせ、体も頭もまとめてリラックスできます。時間が限られている場合はヘッドケア単体（15分¥2,000〜）もリラックスに効果的です。',
      },
    },
  ],
}

const symptoms = [
  {
    title: '布団に入っても眠れない',
    desc: '「疲れているはずなのに眠れない」という状態は、体が緊張モードのまま切り替わっていないサインです。交感神経が優位な状態が続くと、布団に入っても気持ちや体がリラックスできず、眠りにつくまでに時間がかかります。もみほぐしで体の緊張をほぐすことで、眠りに入りやすい状態をサポートします。',
  },
  {
    title: '夜中に目が覚める',
    desc: '「一度は眠れるが途中で目が覚める」「早朝に目が覚めてしまう」という場合、体の疲れが回復しきれていない・緊張状態が睡眠中も続いているサインかもしれません。定期的なリラクゼーションケアで体のリセットを習慣にすることをおすすめします。',
  },
  {
    title: '睡眠が浅い感じがする',
    desc: '「寝ているはずなのにぐっすり感がない」「夢を見っぱなしで疲れが取れない」という浅い眠りは、体や心の緊張が睡眠中も解けていない状態です。もみほぐし・ヘッドケアで体の緊張をほぐし、副交感神経が優位な状態をサポートします。',
  },
  {
    title: '休日なのにぐっすり眠れない',
    desc: '「明日は休みなのに眠れない」「休日の朝に目が覚めてしまう」という状態は、体内時計の乱れや慢性的な緊張状態が関係していることがあります。平日の疲れを週末に一気に解消しようとしても追いつかないことがあります。定期的なケアで平日から体の緊張をリセットすることが効果的です。',
  },
  {
    title: '身体が緊張していてリラックスできない',
    desc: '「肩に力が入っている」「体がこわばったまま」「意識して力を抜こうとしても抜けない」という状態は、筋肉が慢性的な緊張状態にあるサインです。もみほぐしで筋肉の緊張を外側からほぐすことで、体全体がリラックスしやすい状態へと整えることをサポートします。',
  },
  {
    title: 'ストレスから解放されたい',
    desc: '「仕事のプレッシャーから頭が離れない」「日常のストレスを一時的にでもリセットしたい」——リラクゼーションサロンは、そういった心の緊張を体を通して解きほぐす場所でもあります。施術中の静かな時間の中で、日常から切り離されたひとときをお過ごしいただけます。',
  },
]

const kimitsuScenes = [
  {
    title: '仕事帰りのリラックスタイムとして',
    desc: '夜0時まで営業しているMARISAでは、仕事終わりにそのままお立ち寄りいただけます。帰宅前に体をほぐしてリラックスしてから帰ることで、帰宅後のくつろぎ感が変わります。',
  },
  {
    title: '休日の午後にゆったりと',
    desc: '特に予定のない休日の午後、ゆっくりとした時間を自分のために使いたいというときに。施術後に気分よく過ごせることで、休日の充実感が変わります。',
  },
  {
    title: '週末前（金曜の夜）に疲れをリセット',
    desc: '週の疲れが最大になる金曜の夜に来店して翌日をすっきり迎える、というパターンで定期来店される方が多いです。週末を元気に楽しみたい方のご来店も多くいただいています。',
  },
  {
    title: '自分へのご褒美・気分転換に',
    desc: '「何か頑張った後に自分をいたわりたい」「特別な理由はないが気分転換したい」——そういったシーンでのリラクゼーション目的のご来店も多くいただいています。',
  },
]

const menuItems = [
  {
    category: 'Head Set',
    name: 'ヘッドセットコース',
    desc: 'もみほぐし＋ヘッドケアの組み合わせ。体全体の緊張をほぐしながら、頭部・眼周りも合わせてケアします。リラックスを目的とした方に最もおすすめのコースです。施術中に眠ってしまう方も多いほど、深いリラックス感を得やすいコースです。',
    price: '60分 ¥5,400 / 90分 ¥6,700 / 120分 ¥8,700',
    href: '/menu/set',
  },
  {
    category: 'Body Care',
    name: 'もみほぐし 60〜90分',
    desc: '全身のもみほぐしで体の緊張をほぐします。60分は全身をバランスよくほぐせる定番コース。90分はよりじっくり全身をほぐしてリラックスしたい方に。寝る前・休日の午後に特においすすめです。',
    price: '60分 ¥4,500（70分計）/ 90分 ¥6,400（100分計）/ 120分 ¥8,400',
    href: '/menu/body-care',
  },
  {
    category: 'Head Care',
    name: 'ヘッドケア',
    desc: '頭皮・側頭部・後頭部・眼周りをほぐすドライケア。短時間でも深いリラックス感を得やすく、施術中に眠ってしまう方も多いです。もみほぐしとの組み合わせも人気。',
    price: '15分 ¥2,000 / 30分 ¥3,000',
    href: '/menu/head',
  },
]

const courseGuide = [
  {
    time: 'ヘッドセット60分（¥5,400）',
    target: '体も頭もまとめてリラックスしたい方',
    detail: 'もみほぐし＋ヘッドケアのセット。リラックスを目的とした方に最もおすすめ。施術中に眠ってしまう方も多い人気コース。',
  },
  {
    time: 'もみほぐし60分（¥4,500/70分計）',
    target: '全身の緊張をほぐしてリラックスしたい方',
    detail: '全身をバランスよくほぐします。仕事帰りや休日のリラックスに最もご利用の多いコース。',
  },
  {
    time: 'もみほぐし90分（¥6,400/100分計）',
    target: 'たっぷり時間をかけてリラックスしたい方',
    detail: '全身をじっくりほぐすコース。「今日はたっぷりほぐされたい」「久しぶりのリラクゼーション」という方に。',
  },
  {
    time: 'ヘッドケア30分（¥3,000）',
    target: '頭の緊張をピンポイントでほぐしたい方',
    detail: '頭皮・側頭部・後頭部・眼周りのケア。短時間でも深いリラックス感を得やすいコース。',
  },
]

const scenes = [
  {
    scene: '休日前・週末の夜',
    desc: '翌日仕事がないという安心感の中で施術を受けると、より深くリラックスしやすいです。休日をしっかり休んで過ごすための準備として、金曜の夜や休前日にご来店される方も多いです。',
  },
  {
    scene: '疲れが溜まったとき',
    desc: '「今週は特に疲れた」「いつもよりだるさが抜けない」というときに、もみほぐしで全身をリセットすることで翌日からの体の軽さが変わります。疲れを溜め込む前に定期的にケアすることをおすすめします。',
  },
  {
    scene: '気分転換・自分へのご褒美に',
    desc: 'ストレスが続いているとき、何かを頑張った後の自分へのご褒美として、リラクゼーションの時間を楽しみに来られる方も多いです。特別な理由がなくても、気分転換のためにご来店いただけます。',
  },
  {
    scene: '眠れない夜が続いているとき',
    desc: '緊張や不安で寝付けない夜が続いているとき、もみほぐしやヘッドケアでお体の緊張をほぐすことで、眠りにつきやすい状態をサポートします。医療的なアプローチではありませんが、多くの方にご好評いただいています。',
  },
]

const faqs = [
  {
    q: 'もみほぐしで眠りやすくなりますか？',
    a: 'もみほぐしは医療行為ではないため効果を保証するものではありませんが、体の筋肉の緊張をほぐすことで副交感神経が優位になりやすい状態をサポートします。「施術後によく眠れた」「体が軽くなって眠りにつきやすかった」というご感想を多くいただいています。リラクゼーションとしての日常ケアにご活用ください。',
  },
  {
    q: 'ヘッドケアはリラックスに向いていますか？',
    a: 'はい、ヘッドケアはリラックスに特に向いている施術です。頭皮・側頭部・後頭部の緊張をほぐすことで、精神的な落ち着きやリラックス感をサポートします。施術中に眠ってしまう方も多く、深いリラックス状態を得やすいと好評です。もみほぐしとの組み合わせ（ヘッドセットコース）では、体と頭を同時にリセットできます。',
  },
  {
    q: '眠る前に来店するのが良いですか？',
    a: 'リラックスを目的とした来店であれば、夕方以降・寝る前の来店が特におすすめです。MARISAは夜0時まで営業していますので、夜の時間帯にもご来店いただけます。施術後はそのまま帰宅してゆっくりお休みいただくと、リラックス感が持続しやすくなります。施術後の激しい運動は控え、水分をしっかり摂ることをおすすめします。',
  },
  {
    q: '強めのほぐしとゆっくりのほぐしはどちらがリラックスに向いていますか？',
    a: 'リラックスを目的とする場合は「普通〜優しめ」の圧がより向いていることが多いです。強すぎる圧は体への刺激が強くなりすぎることもあります。ただし個人差もありますので、施術前のカウンセリングでご希望をお聞きした上で最適な圧に調整します。「今日はリラックスしたいので優しめで」とお伝えいただければ調整します。',
  },
  {
    q: 'どのコースが最もリラックス感を得やすいですか？',
    a: 'リラックスを重視する方には「ヘッドセットコース（60分¥5,400〜）」が特に人気です。全身のもみほぐしと頭部のヘッドケアを組み合わせ、体も頭もまとめてリラックスできます。時間が限られている場合はヘッドケア単体（15分¥2,000〜）もリラックスに効果的です。迷ったらカウンセリングでご相談ください。',
  },
]

const flowSteps = [
  { step: '01', title: '予約', desc: '公式WEB・ホットペッパービューティー・お電話でご予約ください。夕方以降は混み合いやすいため事前予約がおすすめです。' },
  { step: '02', title: '受付・ヒアリング', desc: '来店後、カウンセリングシートへご記入いただきます。体の状態・リラックスの目的をお聞きします。' },
  { step: '03', title: 'カウンセリング', desc: '担当スタッフが体の状態・気になる部位・圧の好みを確認します。「今日はリラックス重視」「優しめにほぐしてほしい」などのご要望もお伝えください。' },
  { step: '04', title: '施術', desc: '照明を落とした穏やかな空間で、リラックスできる圧で丁寧に施術します。施術中に眠ってしまっても大丈夫です。声がけは最小限にします。' },
  { step: '05', title: 'お会計・次回予約', desc: '施術後、お会計をしていただきます。定期的なケアをご希望の方は次回のご予約もその場で承ります。' },
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

      {/* ===== Symptoms ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Do You Feel This?"
            ja="こんなお悩みはありませんか"
            lead="現代の生活では、体の緊張を解くことが難しくなっています。"
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
              現代の生活では、仕事・人間関係・情報過多など、さまざまなストレスにさらされる機会が増えています。ストレスが慢性化すると、交感神経が過剰に活性化した状態が続き、体が常に「緊張モード」になってしまいます。こうした状況を打開する一つの方法として、定期的なリラクゼーションがあります。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Kimitsu Scenes ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Scenes"
            ja="こんなシーンにおすすめ"
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
              睡眠の質は、日中の仕事のパフォーマンスや気分、体の回復力に直接影響します。慢性的な睡眠不足や浅い眠りが続くと、疲れが抜けない状態が続き、さらにストレスへの抵抗力が下がるという悪循環に陥りやすくなります。
            </p>
            <p>
              こうした状況を打開するひとつの方法として、定期的なリラクゼーションがあります。もみほぐしやヘッドケアで体の緊張をほぐし、副交感神経が優位な状態をつくることで、深いリラックスと良質な睡眠の土台をサポートすることができます。
            </p>
          </div>
        </div>
      </section>

      {/* ===== MARISA Approach ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Our Approach"
            ja="MARISAでのケア方針"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISA 君津店は、地域の皆様が日常的に体と心を整えに来られるリラクゼーションサロンです。医療機関ではありませんが、日常の中で積み重なる疲れやストレスをリセットする場所として、多くの方に定期的にご利用いただいています。
            </p>
            <p>
              施術はリラックスできる専用ベッドで行い、照明を落とし穏やかなBGMの中で施術を受けていただけます。スタッフはお客様の体の状態に合わせた圧で丁寧に施術し、施術中に眠ってしまう方も多いほど深いリラックス状態を提供することを心がけています。
            </p>
            <p>
              リラクゼーション効果を最大限に活かすには、施術後はゆっくり過ごすことをおすすめします。施術直後の激しい活動は避け、水分をしっかり取り、できれば施術後にゆっくりお休みいただくとリラックス感が持続しやすくなります。
            </p>
          </div>
          <div className="mt-8 bg-cream-50 border border-sand-200 p-6">
            <p className="text-xs tracking-widest text-greige-400 mb-2">Note</p>
            <p className="text-sm text-stone-700 leading-loose">
              MARISAのもみほぐし・ヘッドケアはリラクゼーションを目的とした施術であり、睡眠障害や精神疾患の医療的治療を行うものではありません。不眠症状が重い場合は医療機関へご相談ください。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Recommended Menus ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menus"
            ja="睡眠・リラックスにおすすめのメニュー"
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
            ja="コースの選び方"
            lead="目的・時間・体の状態に合わせてコースをお選びください。"
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
              リラクゼーション・睡眠の質向上を目的とした来店頻度の目安は2〜4週間に1回です。週の疲れが溜まる週末前や、特にストレスが多い時期に定期的に来店される方が多いです。
            </p>
            <p>
              「疲れたと感じたとき」に来るよりも、「疲れが溜まる前に定期的にリセットする」習慣として活用いただくことで、体の緊張が慢性化しにくくなります。自分をいたわる時間を生活の一部にしていただけると幸いです。
            </p>
          </div>
          <div className="mt-8 bg-cream-50 border border-sand-200 p-6">
            <p className="text-xs tracking-widest text-greige-400 mb-2">おすすめの活用シーン</p>
            <ul className="text-sm text-stone-700 leading-loose space-y-1">
              <li>• 仕事帰りのリラックスタイムとして（夜0時まで営業）</li>
              <li>• 週末前（金曜夜）に週の疲れをリセット</li>
              <li>• 休日の午後のゆったりとした時間に</li>
              <li>• 特に疲れた・ストレスが多い日に</li>
            </ul>
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
              <p className="text-sm text-stone-700 leading-loose">もみほぐし・ヘッドケア・足つぼ担当。お客様がリラックスしやすい状態で施術を受けていただけるよう、体の状態に合わせた丁寧なケアを行います。</p>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Staff</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">ゆい</h3>
              <p className="text-sm text-stone-700 leading-loose">不定期出勤。もみほぐし・ヘッドケアを担当します。</p>
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
              { label: 'ヘッドセットコース', href: '/menu/set' },
              { label: 'もみほぐしメニュー', href: '/menu/body-care' },
              { label: 'ヘッドケアメニュー', href: '/menu/head' },
              { label: '全身疲労のお悩みへ', href: '/symptom/fatigue' },
              { label: '眼精疲労のお悩みへ', href: '/symptom/eye-fatigue' },
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
            ゆったりとした時間を、MARISAで
          </h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業中・当日予約OK・無料駐車場完備。<br />
            君津でリラクゼーション・睡眠の質ケアをお探しの方は、ぜひMARISAにお越しください。
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
