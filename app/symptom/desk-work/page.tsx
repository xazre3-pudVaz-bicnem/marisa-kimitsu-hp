import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津のデスクワーク疲れ・PC疲れのもみほぐし｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」のデスクワーク疲れケア。PC作業による肩こり・首こり・眼精疲労・腰の張りを、もみほぐしでリセット。仕事帰りに当日予約OK。',
  keywords: ['君津 デスクワーク疲れ', '君津 PC 肩こり', '君津 事務 マッサージ'],
  openGraph: {
    title: '君津のデスクワーク疲れ・PC疲れのもみほぐし｜MARISA 君津店',
    description: '千葉県君津市のリラクゼーションサロン「MARISA」のデスクワーク疲れケア。PC作業・事務仕事による肩こり・首こり・腰の張りをほぐします。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/symptom/desk-work' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'デスクワーク疲れにおすすめのコースは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'デスクワークによる肩・首・腰の疲れには「もみほぐし60分」がおすすめです。眼精疲労や頭の重さも気になる場合は「ヘッドセットコース（60分）」が、全身まとめてリセットしたい場合は「もみほぐし90分」が好評です。カウンセリングでお体の状態をお聞きしてからコースをご提案します。',
      },
    },
    {
      '@type': 'Question',
      name: '仕事帰りに当日予約できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、当日予約を承っています。夜0時まで営業していますので、仕事が終わってからそのままお越しいただけます。ホットペッパービューティーからのオンライン予約が便利です。混み合う時間帯は早めのご予約をおすすめします。',
      },
    },
    {
      '@type': 'Question',
      name: 'PC作業で眼精疲労も気になりますが対応できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、ヘッドケアメニューでは側頭部・後頭部・こめかみ周辺の筋肉をほぐします。眼精疲労と首こりは連動していることが多いため、もみほぐしとヘッドケアを組み合わせたヘッドセットコースが眼精疲労にもお喜びいただいています。',
      },
    },
  ],
}

const whatHappens = [
  {
    title: '姿勢の崩れ',
    desc: 'PC画面に集中するにつれ、頭が前に出て肩が内側に巻き込まれる「巻き肩・前傾姿勢」になりがちです。この姿勢は首・肩・胸まわりの筋肉に継続的な負担をかけ、慢性的なコリの原因になります。',
  },
  {
    title: '血行の低下',
    desc: '長時間同じ姿勢でいると、全身の筋肉がほとんど動かない状態が続きます。筋肉のポンプ作用が働かなくなり、血液循環が滞ることで体が重だるく感じやすくなります。特に腰・お尻・太ももへの影響が大きくなります。',
  },
  {
    title: '眼精疲労との連動',
    desc: 'PC画面を長時間見続けることで目の筋肉が疲弊し、こめかみ・後頭部の緊張が増します。「目が疲れると首も痛くなる」という方は、眼精疲労と首こりが連動しているサインです。',
  },
]

const tensionPattern = [
  { area: '首', desc: '画面を見続ける姿勢で後頭下筋群・頸部筋肉が緊張。首の可動域が狭くなりやすい。' },
  { area: '肩', desc: '腕を前方に伸ばしてキーボード・マウスを操作することで僧帽筋・三角筋前部が緊張。' },
  { area: '背中', desc: '背もたれに寄りかかった不良姿勢で、背中全体の伸筋群が硬くなりやすい。' },
  { area: '腰', desc: '長時間の着座で腸腰筋・臀筋が縮まり、腰椎への負担が増加。腰の張りや重さにつながる。' },
]

const faqs = [
  {
    q: 'デスクワーク疲れにおすすめのコースは何ですか？',
    a: 'デスクワークによる肩・首・腰の疲れには「もみほぐし60分」がおすすめです。眼精疲労や頭の重さも気になる場合は「ヘッドセットコース（60分）」が、全身まとめてリセットしたい場合は「もみほぐし90分」が好評です。カウンセリングでお体の状態をお聞きしてからコースをご提案します。',
  },
  {
    q: '仕事帰りに当日予約できますか？',
    a: 'はい、当日予約を承っています。夜0時まで営業していますので、仕事が終わってからそのままお越しいただけます。ホットペッパービューティーからのオンライン予約が便利です。混み合う時間帯は早めのご予約をおすすめします。',
  },
  {
    q: 'PC作業で眼精疲労も気になりますが対応できますか？',
    a: 'はい、ヘッドケアメニューでは側頭部・後頭部・こめかみ周辺の筋肉をほぐします。眼精疲労と首こりは連動していることが多いため、もみほぐしとヘッドケアを組み合わせたヘッドセットコースが眼精疲労にもお喜びいただいています。',
  },
]

export default function DeskWorkPage() {
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
              { label: 'デスクワーク疲れ' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Desk Work Care</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              デスクワークによる体の疲れ・コリをリセット
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「仕事が終わると肩が上がらないほど凝っている」「夕方になると腰が重くて集中できない」——PC作業や事務仕事が続くと、体は知らず知らずのうちに緊張を蓄積します。MARISAでは、デスクワークで疲弊した首・肩・背中・腰をまとめてほぐし、翌日への疲れを持ち越しにくくします。
            </p>
          </div>
        </div>
      </div>

      {/* ===== What Happens ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="What Happens"
            ja="デスクワークで体に何が起きるか"
            lead="PC作業中の姿勢と動作が、体に特有の緊張パターンを生み出します。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {whatHappens.map((c) => (
              <div key={c.title} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{c.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Tension Pattern ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Tension Map"
            ja="デスクワーカーに多い緊張パターン"
            lead="首→肩→背中→腰へとコリが連鎖する流れが典型的です。"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {tensionPattern.map((t, i) => (
              <div key={t.area} className="border border-sand-200 bg-cream-50 p-5">
                <p className="font-en text-2xl text-brown-400 mb-2 font-light">0{i + 1}</p>
                <h3 className="text-sm font-medium text-stone-800 mb-2">{t.area}</h3>
                <p className="text-xs text-stone-700 leading-loose">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 max-w-3xl text-sm text-stone-700 leading-loose">
            <p>
              これらは独立した問題ではなく、体全体でつながっています。首のコリが肩に波及し、肩の緊張が背中を硬くし、骨盤のバランスが崩れて腰に負担が集中するという連鎖が起きています。全身をまとめてほぐすことで、この連鎖をリセットしやすくなります。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Approach ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Our Approach"
            ja="MARISAのアプローチ"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              デスクワーク疲れへのアプローチでは、首・肩・背中・腰を一連の流れとしてほぐすことを重視します。施術前のカウンセリングで「特に気になる部位」をお聞きし、その日の体の状態に合わせて重点箇所を決めます。
            </p>
            <p>
              特に慢性化している部位（「いつも同じところが凝る」という方）は、表面の筋肉だけでなく深部の筋肉にも丁寧にアプローチします。圧の強さはカウンセリングで調整しますので、「強めにほぐしてほしい」「痛いのが苦手」など、お好みをご遠慮なくお申し付けください。
            </p>
            <p>
              眼精疲労・頭の重さが伴う場合は、ヘッドケアとの組み合わせもご提案します。仕事帰りに立ち寄ってリセットする習慣として、定期的にご利用いただくお客様も多くいらっしゃいます。
            </p>
          </div>
        </div>
      </section>

      {/* ===== After Work Scene ===== */}
      <section className="py-14 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="After Work"
            ja="仕事帰りのご利用"
          />
          <div className="mt-6 space-y-4 text-sm text-stone-700 leading-loose">
            <p>
              MARISAは君津駅から車で約5分、夜0時まで営業しています。仕事帰りにそのままお立ち寄りいただけます。当日予約も承っていますので、「今日は特に疲れた」という日にもすぐにご利用いただけます。
            </p>
            <p>
              店舗前に無料駐車場をご用意していますので、車での通勤の方もスムーズにご利用いただけます。仕事から帰る途中に立ち寄って体をリセットしてから帰宅する、というご利用スタイルの方も多くいらっしゃいます。
            </p>
          </div>
          <div className="mt-6">
            <Link href="/scene/after-work" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
              仕事帰りのご利用について詳しく →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Recommended Menus ===== */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menus"
            ja="デスクワーク疲れにおすすめのメニュー"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl">
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">60 min</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">もみほぐし 60分</h3>
              <p className="text-sm text-stone-700 leading-loose mb-4">¥4,500〜。首・肩・背中・腰を全体的にほぐす定番コース。仕事帰りのリセットに。</p>
              <Link href="/menu" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">メニューを見る →</Link>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Head Set</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">ヘッドセットコース</h3>
              <p className="text-sm text-stone-700 leading-loose mb-4">¥5,000〜。眼精疲労・頭の重さも気になる方に。もみほぐし＋ヘッドケアのセット。</p>
              <Link href="/menu" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">メニューを見る →</Link>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">90 min</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">もみほぐし 90分</h3>
              <p className="text-sm text-stone-700 leading-loose mb-4">¥6,500〜。全身をじっくりほぐしたい方に。週末前のリセットや疲れが溜まったときに。</p>
              <Link href="/menu" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">メニューを見る →</Link>
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
              { label: '肩こりのお悩み', href: '/symptom/stiff-shoulder' },
              { label: '眼精疲労・頭の重さ', href: '/symptom/eye-fatigue' },
              { label: '仕事帰りのご利用', href: '/scene/after-work' },
              { label: 'メニュー・料金', href: '/menu' },
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
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
            仕事帰りに、MARISAでリセット
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
