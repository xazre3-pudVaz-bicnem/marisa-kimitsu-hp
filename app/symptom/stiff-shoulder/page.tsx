import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の肩こりケア・もみほぐし｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」の肩こりケア。デスクワーク・スマホ疲れ・姿勢からくる肩の張りや重さを、もみほぐしで丁寧に整えます。当日予約OK・夜0時まで営業。',
  keywords: ['君津 肩こり', '君津 マッサージ', '君津 もみほぐし 肩', '君津 肩こり ケア'],
  openGraph: {
    title: '君津の肩こりケア・もみほぐし｜MARISA 君津店',
    description: '千葉県君津市のリラクゼーションサロン「MARISA」の肩こりケア。デスクワーク・スマホ疲れ・姿勢からくる肩の張りや重さを、もみほぐしで丁寧に整えます。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/symptom/stiff-shoulder' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '肩こりに効果的なコースは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '肩こりには「もみほぐし60分」をおすすめしています。首・肩・背中をバランスよくほぐすことができ、肩まわりの緊張をしっかりやわらげます。特に肩と首にお悩みが集中している場合は、もみほぐし45分でも対応可能です。また、肩こりと眼精疲労が両方つらい方にはヘッドセットコースもお試しください。',
      },
    },
    {
      '@type': 'Question',
      name: '施術中に強さは変えられますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、いつでも調整できます。施術前のカウンセリングでご希望の圧をお聞きしますが、施術中に「強く」「優しく」と感じた場合はお気軽にお申し付けください。肩こりがひどい方は強めをご希望されることが多いですが、翌日に筋肉痛のように感じる場合もあります。お体の状態を見ながら最適な圧で施術します。',
      },
    },
    {
      '@type': 'Question',
      name: '当日予約はできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、当日のご予約にも対応しています。ホットペッパービューティーからのオンライン予約のほか、お電話でもご予約いただけます。夜0時まで営業していますので、仕事帰りに立ち寄っていただくことも可能です。ただし、混雑時は対応できない場合もありますので、事前のご予約をおすすめしています。',
      },
    },
  ],
}

const causes = [
  {
    title: 'デスクワーク・PC作業',
    desc: '長時間同じ姿勢でパソコンに向かっていると、首・肩・背中の筋肉が緊張し続けます。とくに前傾姿勢になると、頭の重さ（約4〜6kg）を首と肩の筋肉だけで支えることになり、肩こりが生じやすくなります。',
  },
  {
    title: 'スマートフォンの長時間使用',
    desc: 'スマートフォンを見るときは首が前に出た「スマホ首」の姿勢になりやすく、この姿勢が続くと首・肩まわりに大きな負担がかかります。SNSや動画鑑賞など、気づかないうちに長時間同じ姿勢を取っていることが肩こりを慢性化させます。',
  },
  {
    title: '姿勢の癖・体の使い方のくせ',
    desc: '猫背、片側に重心を置く習慣、バッグを同じ側に持つ癖など、日常的な姿勢の偏りは肩や首の一部の筋肉に繰り返し負担をかけます。長年の積み重ねが慢性的な肩こりにつながることがあります。',
  },
  {
    title: 'ストレス・精神的な緊張',
    desc: 'ストレスや緊張状態が続くと、自律神経のバランスが乱れ、筋肉が収縮しやすい状態になります。「気がついたら肩に力が入っていた」という経験は多くの方に共通しており、精神的な疲れが肩こりとして現れることは珍しくありません。',
  },
]

const targets = [
  'PC・デスクワークで1日中画面を見ている方',
  '車の運転が多く、肩や首が緊張しやすい方',
  '首が回りにくい・動かしづらいと感じる方',
  'スマートフォンをよく使う方',
  '肩が上がりにくい・重さを感じる方',
  '慢性的に肩が凝っていると感じる方',
  '猫背など姿勢が気になる方',
  'ストレスが多く、体に緊張感がある方',
]

const faqs = [
  {
    q: '肩こりに効果的なコースは何ですか？',
    a: '肩こりには「もみほぐし60分」がおすすめです。首・肩・背中をバランスよくほぐすことができます。特に肩と首が中心のお悩みには45分でも十分対応できます。眼精疲労も気になる方は、もみほぐしとヘッドケアを組み合わせたヘッドセットコースもご検討ください。肩こりの程度や気になる部位をカウンセリングでお聞きし、最適なコースをご提案します。',
  },
  {
    q: '施術中に強さは変えられますか？',
    a: 'はい、いつでも変更できます。施術前に希望の圧をお聞きしますが、途中で「もう少し強く」「優しくしてほしい」と感じた場合もお気軽にお申し付けください。肩こりがひどい時期は強めを希望される方が多いですが、お体の状態に合わせて最適な圧で施術しますのでご安心ください。',
  },
  {
    q: '当日予約はできますか？',
    a: 'はい、当日予約にも対応しています。ホットペッパービューティーからのオンライン予約のほか、お電話でもご予約いただけます。夜0時まで営業していますので、仕事帰りや夕方以降のご来店も可能です。混雑時は対応できないこともございますので、事前予約をおすすめしています。',
  },
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
              「肩が重い」「首の付け根が張っている」「肩甲骨まわりが痛い」——そのようなお悩みを抱える方が、君津市内からも多くご来店されています。MARISAでは、肩こりの根本にある筋肉の緊張にアプローチし、肩まわりをしっかりほぐすことで体を整えます。
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

      {/* ===== Causes ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Causes"
            ja="肩こりの主な原因"
            lead="肩こりはさまざまな要因が重なって生じます。当てはまるものがないか確認してみましょう。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {causes.map((c) => (
              <div key={c.title} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{c.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 prose-marisa max-w-3xl">
            <p>
              肩こりは単に「肩の疲れ」ではなく、首・肩・背中・腕など複数の筋肉群が連動して緊張している状態です。一つの原因だけでなく、デスクワーク＋ストレス、スマホ＋姿勢の癖、など複数の要因が重なっていることがほとんどです。そのため、ピンポイントをほぐすだけでなく、首・肩・背中全体をバランスよくケアすることが重要です。
            </p>
          </div>
        </div>
      </section>

      {/* ===== MARISA Approach ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Our Approach"
            ja="MARISAでのもみほぐしアプローチ"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISA 君津店では、肩こりのお客様に対して、首・肩・背中を一体としてほぐすアプローチを行います。肩だけをほぐしても、首や肩甲骨まわりに緊張が残っていれば根本的なケアになりません。全体のつながりを意識しながら施術します。
            </p>
            <p>
              施術は専用ベッドで行い、うつ伏せの姿勢を基本に、首の後ろ・肩甲骨まわり・僧帽筋・広背筋など、肩こりに関係する筋肉をひとつひとつ丁寧にほぐしていきます。圧の強さはカウンセリングでご確認し、「強め」「普通」「優しめ」から選べます。施術中も随時調整できます。
            </p>
            <p>
              肩こりがひどい方ほど、最初は「痛気持ちいい」と感じることがあります。これは筋肉に蓄積した緊張が解れていくサインでもあります。施術後は肩の軽さや可動域の広がりを実感される方が多く、「久しぶりに肩が軽く感じられた」というご感想をいただくこともあります。
            </p>
            <p>
              首・肩のコリが強い方には、ヘッドケアとの組み合わせ（ヘッドセットコース）もおすすめです。肩こりと眼精疲労・頭の重さは連動していることが多く、頭部のケアも合わせることでよりすっきりとした感覚を得られやすくなります。
            </p>
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
              肩こりのケアにおける来店頻度の目安は、2〜4週間に1回程度です。慢性的な肩こりを抱えている方は、最初は2週間に1回のペースで定期的にご来店いただくことで、体の緊張が少しずつやわらぎやすくなります。
            </p>
            <p>
              仕事の繁忙期や長時間労働が続く時期は、体のつらさが増しやすいため、月に2〜3回ご来店される方もいらっしゃいます。反対に、体の状態が安定してきたら月1回のペースに移行される方も多いです。お体の調子に合わせてペースをご相談ください。
            </p>
            <p>
              「久しぶりに来たらまた肩がガチガチになっていた」というケースも多く見られます。症状が出てからのケアだけでなく、定期的にメンテナンスとしてお使いいただくことで、慢性化しにくい体を保ちやすくなります。仕事帰りや週末など、ご自身のペースで通っていただける環境を整えています。
            </p>
          </div>
          <div className="mt-8 bg-cream-50 border border-sand-200 p-6">
            <p className="text-xs tracking-widest text-greige-400 mb-2">目安</p>
            <p className="text-sm font-medium text-stone-800 mb-1">2〜4週間に1回がおすすめ</p>
            <p className="text-sm text-stone-700 leading-loose">慢性的な肩こりは定期的なケアで整いやすくなります。ご自身のペースに合わせてご利用ください。</p>
          </div>
        </div>
      </section>

      {/* ===== Who Is It For ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
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

      {/* ===== Related Menus ===== */}
      <section className="py-14 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 uppercase mb-6">Related Menus</p>
          <p className="text-sm text-stone-700 mb-6">肩こりのケアにおすすめのメニューをご確認ください。</p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'もみほぐし', href: '/menu/body-care' },
              { label: 'ヘッドセットコース', href: '/menu/set' },
              { label: '首こりのお悩みへ', href: '/symptom/neck' },
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
            肩こりのお悩みは、MARISAへ
          </h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業中・当日予約OK。<br />
            君津で肩こりケアをお探しの方は、ぜひMARISAにお越しください。
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
