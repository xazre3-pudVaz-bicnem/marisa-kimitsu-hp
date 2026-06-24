import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, LINE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津のデスクワーク疲れケア｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」のデスクワーク疲れケア。長時間PC作業による肩・首・腰のトリプル疲れと眼精疲労を、もみほぐし・ヘッドセットでリセット。仕事帰りに当日予約OK。',
  keywords: ['君津 デスクワーク 肩こり', '君津 テレワーク 疲れ', '君津 PC疲れ'],
  openGraph: {
    title: '君津のデスクワーク疲れケア｜MARISA 君津店',
    description:
      '千葉県君津市のリラクゼーションサロン「MARISA」のデスクワーク疲れケア。PC作業・事務仕事による肩・首・腰・眼精疲労をまとめてほぐします。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/symptom/desk-work' },
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
        text: 'デスクワークによる肩・首・腰の疲れには「もみほぐし60〜90分」がおすすめです。眼精疲労や頭の重さも気になる場合は「ヘッドセットコース（60分¥5,400）」が、全身まとめてリセットしたい場合は「もみほぐし90分¥6,400」が好評です。カウンセリングでお体の状態をお聞きしてからコースをご提案します。',
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
        text: 'はい、ヘッドケアメニューでは側頭部・後頭部・こめかみ周辺の筋肉をほぐします。眼精疲労と首こりは連動していることが多いため、もみほぐしとヘッドケアを組み合わせたヘッドセットコースが眼精疲労でお悩みの方にもご好評をいただいています。',
      },
    },
    {
      '@type': 'Question',
      name: 'テレワーク（在宅勤務）の疲れにも対応していますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、テレワーク特有の疲れにも対応しています。在宅勤務では姿勢が固定されやすく、通勤での歩行がなくなるため下半身の血流が特に滞りやすくなります。もみほぐしで首・肩・腰・脚まで全体的にケアすることをおすすめします。',
      },
    },
    {
      '@type': 'Question',
      name: '毎日デスクワークの場合はどのくらいの頻度で通うといいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '毎日デスクワークが続く方は、週1〜2回のご利用が理想です。難しい場合は月2〜4回のペースでも、疲れを翌日に持ち越しにくくなります。日々のメンテナンスとして定期的にご利用いただくお客様が多くいらっしゃいます。',
      },
    },
  ],
}

const whatHappens = [
  {
    title: '姿勢の崩れ・巻き肩',
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

const scenes = [
  {
    title: '事務・テレワーカー',
    desc: '毎日長時間PC作業が続く方。夕方になるほど肩や腰が重くなりやすく、仕事帰りにMARISAでリセットしてから帰宅するルーティンの方が増えています。',
  },
  {
    title: '君津市内の工場・製造業のデスク部門',
    desc: '君津市には大型工場が多く、管理・事務部門でデスクワークが続く方も多くいらっしゃいます。職場から近いMARISAで帰宅途中に立ち寄るご利用が人気です。',
  },
  {
    title: '千葉・東京方面への通勤＋デスクワーク',
    desc: '長距離通勤＋終日PC作業という方は、通勤疲れとデスクワーク疲れが重なりやすい状態です。90分でじっくり全身をリセットするコースが特におすすめです。',
  },
]

const recommendedMenus = [
  {
    tag: 'Head Set',
    title: 'ヘッドセットコース',
    desc: '60分¥5,400・90分¥6,700。眼精疲労・頭の重さも気になる方に。もみほぐし＋ヘッドケアのセット。首から頭まで一体でリセット。',
    href: '/menu/set',
  },
  {
    tag: '60 min',
    title: 'もみほぐし 60分',
    desc: '¥4,500。首・肩・背中・腰を全体的にほぐす定番コース。仕事帰りのリセットに最適。カウンセリングで重点部位をお伝えください。',
    href: '/menu/body-care',
  },
  {
    tag: '90 min',
    title: 'もみほぐし 90分',
    desc: '¥6,400。全身をじっくりほぐしたい方に。疲れが溜まった週の終わりや特に体が重い日に。',
    href: '/menu/body-care',
  },
]

const steps = [
  { step: '01', title: 'ご予約', desc: 'ホットペッパービューティー・当日来店でご予約。仕事帰りの当日予約OK。' },
  { step: '02', title: 'カウンセリング', desc: '今日の仕事の状況・特に気になる部位・圧の好みをお聞きします。' },
  { step: '03', title: '首・肩のほぐし', desc: 'デスクワークで最も緊張しやすい首・肩から丁寧にほぐします。' },
  { step: '04', title: '全身ケア', desc: '背中・腰・脚まで、体全体の血行を促しながらほぐします。' },
  { step: '05', title: 'アフターケア', desc: '施術後の体の感覚を確認。セルフストレッチや姿勢のポイントをご案内します。' },
]

const faqs = [
  {
    q: 'デスクワーク疲れにおすすめのコースは何ですか？',
    a: 'デスクワークによる肩・首・腰の疲れには「もみほぐし60〜90分」がおすすめです。眼精疲労や頭の重さも気になる場合は「ヘッドセットコース（60分¥5,400）」が、全身まとめてリセットしたい場合は「もみほぐし90分¥6,400」が好評です。カウンセリングでお体の状態をお聞きしてからコースをご提案します。',
  },
  {
    q: '仕事帰りに当日予約できますか？',
    a: 'はい、当日予約を承っています。夜0時まで営業していますので、仕事が終わってからそのままお越しいただけます。ホットペッパービューティーからのオンライン予約が便利です。混み合う時間帯は早めのご予約をおすすめします。',
  },
  {
    q: 'PC作業で眼精疲労も気になりますが対応できますか？',
    a: 'はい、ヘッドケアメニューでは側頭部・後頭部・こめかみ周辺の筋肉をほぐします。眼精疲労と首こりは連動していることが多いため、もみほぐしとヘッドケアを組み合わせたヘッドセットコースが眼精疲労でお悩みの方にもご好評をいただいています。',
  },
  {
    q: 'テレワーク（在宅勤務）の疲れにも対応していますか？',
    a: 'はい、テレワーク特有の疲れにも対応しています。在宅勤務では姿勢が固定されやすく、通勤での歩行がなくなるため下半身の血流が特に滞りやすくなります。もみほぐしで首・肩・腰・脚まで全体的にケアすることをおすすめします。',
  },
  {
    q: '毎日デスクワークの場合はどのくらいの頻度で通うといいですか？',
    a: '毎日デスクワークが続く方は、週1〜2回のご利用が理想です。難しい場合は月2〜4回のペースでも、疲れを翌日に持ち越しにくくなります。日々のメンテナンスとして定期的にご利用いただくお客様が多くいらっしゃいます。',
  },
]

export default function DeskWorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ===== 1. Page Header ===== */}
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
              デスクワークによる肩・首・腰の疲れをリセット
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「仕事が終わると肩が上がらないほど凝っている」「夕方になると腰が重くて集中できない」「PC疲れで目まで頭まで重い」——PC作業や事務仕事が続くと、体は知らず知らずのうちに緊張を蓄積します。MARISAでは、デスクワークで疲弊した首・肩・背中・腰の「トリプル疲れ」をまとめてほぐし、翌日への疲れを持ち越しにくくします。
            </p>
          </div>
        </div>
      </div>

      {/* ===== 2. What Happens ===== */}
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

      {/* ===== 3. Tension Pattern ===== */}
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

      {/* ===== 4. Life Scenes ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Life Scenes"
            ja="君津エリアでのデスクワーク疲れの場面"
            lead="君津の日常生活の中で、デスクワーク疲れを感じやすいシーンをご紹介します。"
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

      {/* ===== 5. Recommended Menus ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menus"
            ja="デスクワーク疲れにおすすめのメニュー"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl">
            {recommendedMenus.map((m) => (
              <div key={m.title} className="border border-sand-200 bg-cream-50 p-6">
                <p className="text-xs tracking-widest text-brown-400 mb-2">{m.tag}</p>
                <h3 className="text-sm font-medium text-stone-800 mb-2">{m.title}</h3>
                <p className="text-sm text-stone-700 leading-loose mb-4">{m.desc}</p>
                <Link href={m.href} className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
                  詳しく見る →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. Course Duration Guide ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Duration Guide"
            ja="コース時間の目安"
            lead="今日の疲れの度合いに応じてコース時間をお選びください。"
          />
          <div className="mt-8 space-y-4">
            {[
              { time: '45分', label: 'もみほぐし 45分', desc: '¥3,900。「短時間でも肩と首だけリセットしたい」方に。' },
              { time: '60分', label: 'もみほぐし 60分 / ヘッドセット', desc: '¥4,500 / ¥5,400。仕事帰りの定番リセットに。眼精疲労にはヘッドセットが特におすすめ。' },
              { time: '90分', label: 'もみほぐし 90分 / ヘッドセット', desc: '¥6,400 / ¥6,700。全身をじっくりほぐしたい日に。週の終わりや疲れが溜まったときに。' },
            ].map((item) => (
              <div key={item.time} className="flex gap-4 border border-sand-200 bg-cream-50 p-5">
                <div className="font-en text-xl text-brown-400 font-light w-14 shrink-0">{item.time}</div>
                <div>
                  <p className="text-sm font-medium text-stone-800 mb-1">{item.label}</p>
                  <p className="text-xs text-stone-700 leading-loose">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. Treatment Flow ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Flow" ja="施術の流れ" />
          <div className="mt-10 space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-4 border border-sand-200 bg-cream-50 p-5">
                <div className="font-en text-xl text-brown-400 font-light w-10 shrink-0">{s.step}</div>
                <div>
                  <p className="text-sm font-medium text-stone-800 mb-1">{s.title}</p>
                  <p className="text-xs text-stone-700 leading-loose">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. FAQ ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
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

      {/* ===== 9. Related links ===== */}
      <section className="py-12 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: '肩こりのお悩み', href: '/symptom/stiff-shoulder' },
              { label: '眼精疲労・頭の重さ', href: '/symptom/eye-fatigue' },
              { label: '肩甲骨まわりの張り', href: '/symptom/shoulder-blade' },
              { label: '仕事帰りのご利用', href: '/scene/after-work' },
              { label: 'メニュー・料金', href: '/menu' },
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="border border-sand-300 px-3 py-1.5 text-stone-700 hover:border-brown-300 hover:text-brown-500 transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 10. CTA ===== */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">
            仕事帰りに、MARISAでリセット
          </h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業中・当日予約OK・無料駐車場あり。<br />
            君津のリラクゼーションサロン MARISAへ。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            {LINE_URL && (
              <ReserveButton href={LINE_URL} label="LINEで予約する" variant="outline" size="lg" />
            )}
          </div>
        </div>
      </section>
    </>
  )
}
