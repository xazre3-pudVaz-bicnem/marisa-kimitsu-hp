import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, LINE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の肩こりケア・もみほぐし｜MARISA 君津店',
  description:
    '君津市の肩こりでお悩みの方へ。もみほぐし・MARISA 君津店では、デスクワーク・スマホ疲れ・姿勢からくる肩の張りや重さを、もみほぐし・鍼灸で丁寧にケア。45分¥3,900〜。当日予約OK・夜0時まで営業・無料駐車場。',
  keywords: ['君津 肩こり', '君津 マッサージ', '君津 もみほぐし 肩', '君津 肩こり ケア', '君津 肩こり 鍼灸'],
  openGraph: {
    title: '君津の肩こりケア・もみほぐし｜MARISA 君津店',
    description: '君津市の肩こりでお悩みの方へ。もみほぐし・MARISA 君津店では、肩の張りや重さを丁寧にケア。45分¥3,900〜。当日予約OK・夜0時まで営業・無料駐車場。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/symptom/stiff-shoulder' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '肩こりにはどのコースがおすすめですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '肩こりには「もみほぐし60分（¥4,500/70分計）」がおすすめです。首・肩・背中をバランスよくほぐすことができます。特に肩と首が中心のお悩みには45分（¥3,900）でも十分対応できます。眼精疲労も気になる方はヘッドセットコース（60分¥5,400〜）もご検討ください。',
      },
    },
    {
      '@type': 'Question',
      name: '強さはどのくらいがいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '施術前のカウンセリングで「強め・普通・優しめ」からご希望をお聞きします。肩こりがひどい方は強めを選ばれる方が多いですが、翌日に筋肉痛のように感じることもあります。施術中もいつでも調整できますのでお気軽にお申し付けください。',
      },
    },
    {
      '@type': 'Question',
      name: '当日予約はできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、当日予約にも対応しています。公式WEB予約・ホットペッパービューティー・お電話でご予約いただけます。夜0時まで営業（最終受付23:00）ですので、仕事帰りのご来店も可能です。混雑時はご案内できない場合もありますので、事前のご予約をおすすめします。',
      },
    },
    {
      '@type': 'Question',
      name: 'もみほぐしと鍼灸の違いは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'もみほぐしは手技を使って筋肉の表面から深部をほぐすリラクゼーション施術です。鍼灸は専門資格を持つ鍼灸師が細い鍼を用いて特定の部位にピンポイントアプローチする施術です。MARISAでは鍼灸もみほぐしセット（30分+鍼¥4,500〜）をご用意しています。鍼灸は公式WEB予約限定・金曜10:00-22:00/土曜10:00-14:00が基本勤務です。',
      },
    },
    {
      '@type': 'Question',
      name: '何分のコースを選べばいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '肩こりだけが気になる方は45分（¥3,900）から対応できます。肩・首・背中まとめてほぐしたい方は60分（¥4,500/70分計）がおすすめです。全身の疲れも気になる方・慢性的な肩こりの方は90分（¥6,400/100分計）が人気です。迷ったらカウンセリングでご相談ください。',
      },
    },
    {
      '@type': 'Question',
      name: 'どのくらいの頻度で来店するといいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '目安は2〜4週間に1回です。慢性的な肩こりの方は最初の数週間は2週間に1回のペースで通われると体の緊張が整いやすくなります。体の状態が安定してきたら月1回ペースに移行される方も多いです。ご自身のペースに合わせてご利用ください。',
      },
    },
  ],
}

const symptoms = [
  {
    title: 'デスクワーク・PC作業による肩の張り',
    desc: '長時間同じ姿勢でパソコンに向かっていると、首・肩・背中の筋肉が緊張し続けます。とくに前傾姿勢になると、頭の重さ（約4〜6kg）を首と肩の筋肉だけで支えることになり、肩の張りや重さが慢性化しやすくなります。「気づいたら1時間以上同じ姿勢だった」という経験がある方は特に注意が必要です。',
  },
  {
    title: 'スマートフォンの長時間使用',
    desc: 'スマートフォンを見るときは首が前に出た「スマホ首」の姿勢になりやすく、この姿勢が続くと首・肩まわりに大きな負担がかかります。SNSや動画鑑賞など、気づかないうちに長時間同じ姿勢を取っていることが肩こりを慢性化させます。肩だけでなく、首の付け根や背中上部にまで緊張が広がることがあります。',
  },
  {
    title: '車の長距離運転',
    desc: '君津市内では車での通勤・移動が多く、長時間の運転が肩こりの原因になりやすいです。ハンドルを握る姿勢では肩を前に出した状態が続き、肩甲骨まわりや僧帽筋に大きな負担がかかります。渋滞での緊張も加わり、運転後に肩がガチガチになる方も多く見受けられます。',
  },
  {
    title: '重い荷物や育児による肩への負担',
    desc: '重いカバンをいつも同じ側に持つ習慣、赤ちゃんや幼い子供を抱き続けることなど、日常的な動作で片側の肩に偏った負担がかかります。育児中の方はとくに肩・首・背中の疲れを感じやすく、「赤ちゃんが少し大きくなってから肩こりがひどくなった」というご来店も多くいただきます。',
  },
  {
    title: 'ストレス・精神的な緊張',
    desc: 'ストレスや不安を抱えていると、無意識に肩に力が入り筋肉が収縮した状態が続きます。「緊張すると肩が上がっている」という経験は多くの方に共通しており、精神的なプレッシャーが肩こりとして体に現れることは珍しくありません。仕事のプレッシャーが続く時期は肩こりが悪化しやすいです。',
  },
  {
    title: '姿勢の癖・体の使い方の偏り',
    desc: '猫背、脚を組む習慣、片側に重心を置くなど、日常的な姿勢の偏りは肩や首の一部の筋肉に繰り返し負担をかけます。長年の積み重ねが慢性的な肩こりにつながることが多く、「いつも右側の肩だけがひどく凝る」という方はこのケースが多いです。',
  },
  {
    title: '冷えによる血行不良',
    desc: 'エアコンの効きすぎた部屋での長時間作業、冬場の寒さなど、体が冷えると筋肉の血行が悪くなります。血行不良は筋肉の疲労物質が排出されにくくなることを意味し、肩こりの回復が遅くなる原因のひとつです。特に夏場のエアコンと冬場の寒さは要注意です。',
  },
  {
    title: '工場勤務・農業など体を使う仕事の蓄積疲労',
    desc: '君津市周辺には製造業・農業に従事される方も多く、同じ動作の繰り返しや重い物を扱う作業が肩への蓄積疲労につながります。特定の筋肉を繰り返し使う仕事では、その部位の筋肉が慢性的に緊張し、肩こりとして現れることがよくあります。',
  },
]

const kimitsuScenes = [
  {
    title: '車での長距離通勤・移動',
    desc: '君津市は車社会であり、千葉市・木更津・市原方面への通勤で毎日長距離を運転される方が多くいらっしゃいます。長時間のドライビングは肩と首の慢性的な負担につながります。',
  },
  {
    title: '工場・製造業勤務',
    desc: '君津エリアには大型の製造・工場施設が多く、同じ姿勢での作業・重い物の取り扱いによる肩への蓄積疲労を感じている方のご来店が多いです。',
  },
  {
    title: 'オフィスワーク・テレワーク',
    desc: '在宅勤務の普及で自宅の環境が整っていない状態での長時間作業が増え、デスクワークでの肩こりを訴える方が増えています。',
  },
  {
    title: '農業・育児・介護',
    desc: '前傾姿勢での農作業、赤ちゃんの抱っこ、介護での介助動作など、日常的な体の使い方が肩に積み重なる方も多くご来店されます。',
  },
]

const menuItems = [
  {
    category: 'Body Care',
    name: 'もみほぐし（首・肩・背中集中）',
    desc: '肩こりの基本ケア。首・肩甲骨まわり・背中上部を重点的にほぐします。45分¥3,900から対応。60分（¥4,500/70分計）が特におすすめです。',
    price: '45分 ¥3,900 / 60分 ¥4,500（70分計）/ 90分 ¥6,400（100分計）',
    href: '/menu/body-care',
    note: '',
  },
  {
    category: 'Head Set',
    name: 'ヘッドセットコース',
    desc: 'もみほぐし＋ヘッドケアの組み合わせ。肩こりと眼精疲労・頭の重さを同時にケアしたい方に人気のコースです。',
    price: '60分 ¥5,400 / 90分 ¥6,700 / 120分 ¥8,700',
    href: '/menu/set',
    note: '',
  },
  {
    category: 'Acupuncture',
    name: '鍼灸メニュー（公式予約限定）',
    desc: '肩こりの気になる部位に鍼でピンポイントアプローチ。もみほぐしとの組み合わせで深部へのケアが可能です。担当：なお（鍼灸師）。金曜・土曜中心出勤。',
    price: 'もみほぐし30分+鍼 ¥4,500 / 45分+鍼 ¥5,400 / 70分+鍼 ¥6,000',
    href: '/menu/acupuncture',
    note: '鍼灸メニューは公式WEB予約（B-merit）限定です。金曜10:00-22:00、土曜10:00-14:00が基本勤務時間です。',
  },
]

const courseGuide = [
  {
    time: '45分（¥3,900）',
    target: '時間が限られている方・肩と首に集中したい方',
    detail: '首・肩・背中上部を中心にほぐします。短時間でも肩の張りをやわらげたい方に。',
  },
  {
    time: '60分（¥4,500/70分計）',
    target: '肩こり・首こりに悩む方の定番コース',
    detail: '首・肩・背中全体をバランスよくほぐします。肩こりのファーストチョイスとして最もご利用の多いコースです。',
  },
  {
    time: '90分（¥6,400/100分計）',
    target: '全身の疲れも気になる方・慢性的な肩こりの方',
    detail: '上半身だけでなく腰・脚まで全身をほぐします。疲れが深い方・「まとめてリセットしたい」方に。',
  },
  {
    time: '120分（¥8,400）',
    target: '久しぶりのケア・たっぷり時間を使いたい方',
    detail: '全身を丁寧に時間をかけてほぐす最上位コース。仕事の繁忙期や長期間ケアできていなかった方に。',
  },
]

const faqs = [
  {
    q: '肩こりにはどのコースがおすすめですか？',
    a: '肩こりには「もみほぐし60分（¥4,500/70分計）」が最も人気です。首・肩・背中をまとめてほぐすことができ、肩こりのお悩みに幅広く対応できます。時間が限られている方は45分（¥3,900）でも対応可能です。眼精疲労も気になる方はヘッドセットコース（60分¥5,400〜）もご検討ください。',
  },
  {
    q: '強さはどのくらいがいいですか？',
    a: '施術前に「強め・普通・優しめ」からご希望をお聞きします。肩こりが強い方は強めを選ばれることが多いですが、翌日に筋肉痛のような感覚が出ることもあります。初めての方や久しぶりの方は「普通」から始めてみることをおすすめします。施術中もいつでも調整できますのでお気軽にお申し付けください。',
  },
  {
    q: '当日予約はできますか？',
    a: 'はい、当日予約も受け付けています。公式WEB予約・ホットペッパービューティー・お電話でご予約ください。夜0時まで営業していますので、仕事帰りのご来店も可能です。ただし夕方以降は混み合いやすいため、事前予約をおすすめしています。',
  },
  {
    q: 'もみほぐしと鍼灸の違いは何ですか？',
    a: 'もみほぐしは手技（指・手のひら）を使って筋肉をほぐすリラクゼーション施術です。鍼灸は専門資格を持つ鍼灸師が細い鍼を用いて特定の部位にアプローチする施術で、より深部へのケアが期待できます。MARISAでは鍼灸＋もみほぐしのセットメニュー（¥4,500〜）もご用意しています。鍼灸は公式WEB予約（B-merit）限定で、担当の「なお」が金曜・土曜中心に出勤しています。',
  },
  {
    q: '何分のコースを選べばいいですか？',
    a: '肩・首だけが気になる方は45分（¥3,900）から。肩・首・背中をまとめてほぐしたい方は60分（¥4,500/70分計）がおすすめです。全身も気になる・慢性的な肩こりの方は90分（¥6,400/100分計）が人気です。迷われた場合はカウンセリングで遠慮なくご相談ください。',
  },
  {
    q: 'どのくらいの頻度で来店するといいですか？',
    a: '目安は2〜4週間に1回です。慢性的な肩こりの方は最初は2週間に1回のペースで通うことで、体の緊張が整いやすくなる傾向があります。体の状態が安定してきたら月1回ペースに移行される方も多いです。「症状が出てから来る」よりも「定期的にメンテナンスで来る」スタイルが肩こりの慢性化を防ぎやすくなります。',
  },
]

const flowSteps = [
  { step: '01', title: '予約', desc: '公式WEB・ホットペッパービューティー・お電話でご予約ください。当日予約も受け付けています。' },
  { step: '02', title: '受付・ヒアリング', desc: '来店後、施術前にカウンセリングシートへご記入いただきます。お体の状態や気になる部位を確認します。' },
  { step: '03', title: 'カウンセリング', desc: '担当スタッフが体の状態・圧の希望・コースを確認します。肩こりの気になる部位や強さを詳しくお聞きします。' },
  { step: '04', title: '施術', desc: '専用ベッドでうつ伏せになっていただき、首・肩・背中を中心にほぐします。圧の変更は施術中もいつでもお申し付けください。' },
  { step: '05', title: 'お会計・次回予約', desc: '施術後、お会計をしていただきます。次回のご予約もその場で承ります。' },
]

export default function StiffShoulderPage() {
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
              { label: '肩こり' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Stiff Shoulder</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800">
              肩こりのつらさを、丁寧なもみほぐしで整える
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「肩が重い」「首の付け根が張っている」「肩甲骨まわりがつらい」——そのようなお悩みを抱える方が、君津市内からも多くご来店されています。MARISAでは、肩こりの根本にある筋肉の緊張にアプローチし、肩まわりをしっかりほぐすことで体を整えます。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Visual ===== */}
      <section className="bg-stone-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-0.5">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/LINE_ALBUM_もみほぐしMARISA_260615_8.jpg" alt="君津 肩こり もみほぐし 肩の施術" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/LINE_ALBUM_もみほぐしMARISA_260615_9.jpg" alt="君津 肩こりケア 首・肩ほぐし" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/LINE_ALBUM_もみほぐしMARISA_260615_7.jpg" alt="君津 マッサージ 肩甲骨 ほぐし" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Symptoms Check ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Do You Feel This?"
            ja="こんなお悩みはありませんか"
            lead="肩こりはさまざまな原因から生じます。当てはまるものがないか確認してみましょう。"
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
              肩こりは単に「肩の疲れ」ではなく、首・肩・背中・腕など複数の筋肉群が連動して緊張している状態です。一つの原因だけでなく、デスクワーク＋ストレス、スマホ＋姿勢の癖など複数の要因が重なっていることがほとんどです。そのため、ピンポイントをほぐすだけでなく、首・肩・背中全体をバランスよくケアすることが重要です。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Kimitsu Life Scenes ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Life in Kimitsu"
            ja="君津での生活と肩こりが起きやすいシーン"
            lead="君津エリアの生活習慣・仕事環境と肩こりのつながりを確認しましょう。"
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
              MARISA 君津店では、肩こりのお客様に対して、首・肩・背中を一体としてほぐすアプローチを行います。肩だけをほぐしても、首や肩甲骨まわりに緊張が残っていれば根本的なケアになりません。全体のつながりを意識しながら施術します。
            </p>
            <p>
              施術は専用ベッドで行い、うつ伏せの姿勢を基本に、首の後ろ・肩甲骨まわり・僧帽筋・広背筋など、肩こりに関係する筋肉をひとつひとつ丁寧にほぐしていきます。圧の強さはカウンセリングでご確認し、「強め」「普通」「優しめ」から選べます。施術中も随時調整できます。
            </p>
            <p>
              肩こりがつらい方ほど、最初は「痛気持ちいい」と感じることがあります。これは筋肉に蓄積した緊張がほぐれていくプロセスでもあります。施術後は肩の軽さや可動域の広がりを実感される方が多く、「久しぶりに肩が軽く感じられた」というご感想をいただくこともあります。
            </p>
            <p>
              首・肩のコリが強い方には、ヘッドケアとの組み合わせ（ヘッドセットコース）もおすすめです。肩こりと眼精疲労・頭の重さは連動していることが多く、頭部のケアも合わせることでよりすっきりとした感覚を得られやすくなります。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Recommended Menus ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menus"
            ja="肩こりにおすすめのメニュー"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {menuItems.map((m) => (
              <div key={m.name} className="border border-sand-200 bg-cream-50 p-6 flex flex-col">
                <p className="text-xs tracking-widest text-brown-400 mb-2">{m.category}</p>
                <h3 className="text-sm font-medium text-stone-800 mb-2">{m.name}</h3>
                <p className="text-sm text-stone-700 leading-loose mb-3 flex-1">{m.desc}</p>
                <p className="text-xs text-brown-500 font-medium mb-2">{m.price}</p>
                {m.note && (
                  <p className="text-xs text-stone-600 bg-sand-100 border border-sand-200 p-2 mb-3 leading-relaxed">{m.note}</p>
                )}
                <Link href={m.href} className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500 self-start">
                  詳しく見る →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Course Time Guide ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="How to Choose"
            ja="コース時間の選び方"
            lead="肩こりの程度や目的に合わせて、最適なコース時間をお選びください。"
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
      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Frequency"
            ja="来店頻度の目安"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              肩こりのケアにおける来店頻度の目安は、2〜4週間に1回程度です。慢性的な肩こりを抱えている方は、最初は2週間に1回のペースでご来店いただくことで、体の緊張が少しずつやわらぎやすくなります。
            </p>
            <p>
              仕事の繁忙期や長時間労働が続く時期は、体のつらさが増しやすいため、月に2〜3回ご来店される方もいらっしゃいます。反対に、体の状態が安定してきたら月1回のペースに移行される方も多いです。
            </p>
            <p>
              「久しぶりに来たらまた肩がガチガチになっていた」というケースも多く見られます。症状が出てからのケアだけでなく、定期的にメンテナンスとしてお使いいただくことで、慢性化しにくい体を保ちやすくなります。
            </p>
          </div>
          <div className="mt-8 bg-sand-100 border border-sand-200 p-6">
            <p className="text-xs tracking-widest text-greige-400 mb-2">目安</p>
            <p className="text-sm font-medium text-stone-800 mb-1">2〜4週間に1回がおすすめ</p>
            <p className="text-sm text-stone-700 leading-loose">慢性的な肩こりは定期的なケアで整いやすくなります。ご自身のペースに合わせてご利用ください。</p>
          </div>
        </div>
      </section>

      {/* ===== Staff ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Staff"
            ja="担当スタッフ"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Owner</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">オーナー</h3>
              <p className="text-sm text-stone-700 leading-loose">もみほぐし・足つぼ担当。豊富な経験を持つオーナーが肩・首・背中のほぐしを丁寧に行います。</p>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Acupuncturist</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">なお（鍼灸師）</h3>
              <p className="text-sm text-stone-700 leading-loose">国家資格を持つ鍼灸師。肩こりの鍼灸施術を担当します。金曜10:00-22:00、土曜10:00-14:00が基本勤務時間です。公式WEB予約（B-merit）でご予約ください。</p>
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
      <section className="py-16 lg:py-24 bg-cream-100">
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

      {/* ===== Related Links ===== */}
      <section className="py-14 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 uppercase mb-6">Related Pages</p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'もみほぐしメニュー', href: '/menu/body-care' },
              { label: 'ヘッドセットコース', href: '/menu/set' },
              { label: '鍼灸メニュー', href: '/menu/acupuncture' },
              { label: '首こりのお悩みへ', href: '/symptom/neck' },
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
            肩こりのお悩みは、MARISAへ
          </h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業中・当日予約OK・無料駐車場完備。<br />
            君津で肩こりケアをお探しの方は、ぜひMARISAにお越しください。
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
