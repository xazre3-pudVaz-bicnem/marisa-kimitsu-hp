import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, SHOP_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津でマッサージ・もみほぐしをお探しなら｜もみほぐし・MARISA 君津店',
  description:
    '君津市でマッサージ・もみほぐしをお探しの方へ。もみほぐし・MARISA 君津店は、肩こり、腰のつらさ、眼精疲労、足のだるさに対応。無料駐車場あり、夜0時まで営業、当日予約にも対応しています。',
  keywords: ['君津 マッサージ', '君津 もみほぐし', '君津市 リラクゼーション', '君津 マッサージ 夜', '君津 マッサージ 駐車場'],
  openGraph: {
    title: '君津でマッサージ・もみほぐしをお探しなら｜MARISA 君津店',
    description: '君津市のリラクゼーションサロン。夜0時まで・当日予約OK・無料駐車場完備。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/area/kimitsu' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'もみほぐし・MARISA 君津店',
  description: '君津市でマッサージ・もみほぐしをお探しなら。夜0時まで営業・当日予約OK・無料駐車場完備。',
  url: 'https://marisa-kimitsu.com',
  telephone: SHOP_INFO.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '杢師3-20-10',
    addressLocality: '君津市',
    addressRegion: '千葉県',
    postalCode: SHOP_INFO.postalCode,
    addressCountry: 'JP',
  },
  geo: { '@type': 'GeoCoordinates', latitude: SHOP_INFO.lat, longitude: SHOP_INFO.lng },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '24:00',
    },
  ],
  areaServed: { '@type': 'City', name: '君津市' },
  priceRange: '¥¥',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '君津市でもみほぐしを探しています。MARISAはどこにありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'もみほぐし・MARISA 君津店は、千葉県君津市杢師3-20-10にあります。君津駅から車で約5分、君津インターチェンジから約10分。店舗前に無料駐車場を完備しているので、お車でのご来店も安心です。',
      },
    },
    {
      '@type': 'Question',
      name: '君津でマッサージを夜遅くまで受けられる店はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MARISAは夜0時まで営業しています（最終受付23:00）。仕事帰りや夜の時間帯にも対応しており、当日予約も可能です。君津市内で夜遅くまで対応できるリラクゼーションサロンをお探しの方にご利用いただいています。',
      },
    },
    {
      '@type': 'Question',
      name: '君津のマッサージで当日予約はできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、当日予約にも対応しています。ホットペッパービューティーから24時間いつでも空き状況をご確認いただき、当日のご予約が可能です。急な疲れや体のつらさを感じた日にもお気軽にどうぞ。',
      },
    },
    {
      '@type': 'Question',
      name: '君津市でペアやカップルで使えるマッサージはありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、MARISAではベッドを3台ご用意しているので、カップル・ご夫婦・お友達同士でも同じ時間帯に施術を受けていただけます。ご予約時にご人数をお知らせください。',
      },
    },
  ],
}

const menus = [
  { name: 'もみほぐし', href: '/menu/body-care', desc: '首・肩・背中・腰・脚を丁寧にほぐすベーシックコース。45分〜120分。', from: '¥3,500〜' },
  { name: 'ヘッドセット', href: '/menu/set', desc: 'もみほぐし＋ヘッドケアの組み合わせ。頭・首・肩をまとめてケア。', from: '¥5,000〜' },
  { name: '足つぼセット', href: '/menu/foot', desc: 'もみほぐし＋足つぼリフレクソロジー。立ち仕事・足のだるさに。', from: '¥5,500〜' },
  { name: 'セットコース', href: '/menu/set', desc: '複数の施術を組み合わせてまとめてケア。お時間に合わせて選べます。', from: '¥5,000〜' },
]

const concerns = [
  { label: '肩こり・首こり', href: '/symptom/stiff-shoulder', desc: 'デスクワーク・スマホ操作による肩・首の張りをケア' },
  { label: '腰のつらさ', href: '/symptom/lower-back', desc: '長時間のデスクワーク・運転・立ち仕事による腰まわりの負担を軽く' },
  { label: '眼精疲労・頭の重さ', href: '/symptom/eye-fatigue', desc: 'PC・スマホ疲れによる目の重さ、頭の疲れをケア' },
  { label: '足のだるさ・むくみ感', href: '/symptom/leg-fatigue', desc: '立ち仕事や歩き疲れで足がパンパンになりやすい方に' },
  { label: '全身のだるさ・疲れ', href: '/symptom/fatigue', desc: '仕事・家事・育児による全身のだるさをリセット' },
  { label: '睡眠・リラックス', href: '/symptom/sleep-relax', desc: '緊張がほぐれにくい方、夜ゆっくり休みたい方に' },
]

const reasons = [
  {
    title: '夜0時まで営業・最終受付23時',
    body: '君津市内で働く方の多くは、工場勤務・事務・自営業など多様な就業形態。帰りが遅い日でもそのまま立ち寄れるよう、夜0時まで営業しています。最終受付は23時で、仕事帰りの方が一番ご利用しやすい時間帯に対応しています。',
  },
  {
    title: '当日予約OK・急な疲れにもすぐ対応',
    body: '「今日は体が特につらい」「急に予定が空いた」という場合も、ホットペッパービューティーから当日予約が可能です。24時間いつでも空き状況を確認でき、その場でご予約いただけます。電話でのご相談も承っています。',
  },
  {
    title: '無料駐車場完備・車でのご来店も安心',
    body: '君津市は車社会です。店舗前に無料駐車場を完備しているので、コインパーキングを探す手間もなく、施術後にそのままお帰りいただけます。君津駅から車で約5分、君津インターから約10分の便利な立地です。',
  },
  {
    title: '男性も女性も、一人でもペアでも歓迎',
    body: '「マッサージ店は女性向け？」そんなことはありません。MARISAでは男性のお客様も多数ご利用いただいています。また、ベッドを3台ご用意しているので、カップルやご夫婦、友人同士でも同じ時間帯に施術を受けていただけます。',
  },
  {
    title: 'カウンセリングから丁寧にご対応',
    body: '施術前に、その日の体の状態やご要望をしっかりお聞きします。「肩だけ集中してほしい」「圧は弱めで」など、細かいご要望にもできる限りお応えします。はじめての方でも、リラックスして受けていただけます。',
  },
  {
    title: 'もみほぐし・ヘッドケア・足つぼをまとめてケア',
    body: '肩こりと眼精疲労、腰のつらさと足のだるさ、など複数のお悩みをお持ちの方にはセットコースがおすすめです。もみほぐし単体よりも、体が温まった状態で次の施術に移れるので、より深いリラクゼーションを感じやすくなります。',
  },
]

export default function AreaKimitsuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ===== Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: '地域・シーン別', href: '/area/kimitsu' }, { label: '君津でマッサージをお探しの方' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Kimitsu Area</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              君津でマッサージ・もみほぐしを<br className="hidden sm:block" />
              お探しの方へ
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              千葉県君津市でマッサージ・もみほぐしを探しているあなたへ。夜0時まで営業・当日予約OK・無料駐車場完備。
              肩こり・腰のつらさ・眼精疲労・足のだるさなど、日常の疲れをまとめてケアできるリラクゼーションサロンです。
            </p>
          </div>
        </div>
      </div>

      {/* ===== About ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="About" ja="君津市のリラクゼーションサロン MARISA" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose prose-marisa">
            <p>
              君津市は千葉県南部の工業都市であり、製鉄所・工場勤務の方から、デスクワーク中心のオフィスワーカー、自営業・農業・飲食業まで、さまざまな働き方の方が暮らしています。仕事の種類が違っても、共通するのは「日々の疲れが体に積み重なっていく」ということです。
            </p>
            <p>
              立ち仕事が多い方は足腰や肩の疲れ、デスクワーク中心の方は肩・首・眼精疲労、運転が多い方は腰や背中のつらさが出やすい傾向があります。こうした慢性的な疲れやコリを、放置したまま毎日を過ごしている方は少なくありません。
            </p>
            <p>
              もみほぐし・MARISA 君津店は、千葉県君津市杢師3-20-10に位置するリラクゼーションサロンです。もみほぐし・ヘッドケア・足つぼリフレクソロジーを中心に、日常の疲れをケアするメニューをご用意しています。年中無休・夜0時まで営業（最終受付23:00）で、仕事帰りの方でも立ち寄りやすい環境を整えています。
            </p>
            <p>
              「君津市内でマッサージサロンを探したけど選び方がわからない」「夜遅くても対応してくれるお店が見つからない」そんな方にMARISAをご利用いただいています。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Reasons ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Why MARISA" ja="君津の方にMARISAが選ばれる6つの理由" centered />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <div key={i} className="bg-cream-50 border border-sand-200 p-7">
                <p className="font-en text-xs tracking-widest text-brown-400 mb-3">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="text-sm font-medium text-stone-800 mb-3 tracking-wide leading-snug">{r.title}</h3>
                <p className="text-sm text-stone-700 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Concerns ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Your Concerns"
            ja="こんなお悩みをお持ちの方へ"
            lead="君津市で以下のようなお悩みをお持ちの方に、MARISAのもみほぐしをおすすめしています。"
            centered
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {concerns.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group border border-sand-200 bg-cream-50 p-6 hover:border-brown-300 transition-colors"
              >
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide group-hover:text-brown-500">{c.label}</h3>
                <p className="text-xs text-stone-700 leading-relaxed">{c.desc}</p>
                <p className="mt-4 text-xs tracking-widest text-brown-400">詳しく見る →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Menu ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menu"
            ja="MARISAのメニュー・料金"
            lead="お悩みや時間に合わせてお選びいただけます。詳細はメニューページをご確認ください。"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {menus.map((m) => (
              <Link
                key={m.name}
                href={m.href}
                className="group border border-sand-200 bg-cream-50 p-6 hover:border-brown-300 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-sm font-medium text-stone-800 tracking-wide group-hover:text-brown-500">{m.name}</h3>
                  <span className="font-en text-brown-400 text-sm font-light">{m.from}</span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed">{m.desc}</p>
                <p className="mt-4 text-xs tracking-widest text-brown-400">メニュー詳細 →</p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/menu"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
            >
              すべてのメニュー・料金を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Access ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Access" ja="君津市内からのアクセス" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <div className="border border-sand-200 p-6">
              <p className="font-en text-[10px] tracking-widest uppercase text-brown-400 mb-1">By Car from Station</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">君津駅から（車で約5分）</h3>
              <p>君津駅南口を出て国道方面へ。杢師3丁目付近が目印です。店舗前に無料駐車場あり。</p>
            </div>
            <div className="border border-sand-200 p-6">
              <p className="font-en text-[10px] tracking-widest uppercase text-brown-400 mb-1">By Highway</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">君津インターから（車で約10分）</h3>
              <p>館山自動車道「君津IC」を降りて、君津市街方面へ。カーナビに「千葉県君津市杢師3-20-10」と入力してください。</p>
            </div>
            <div className="border border-sand-200 p-6">
              <p className="font-en text-[10px] tracking-widest uppercase text-brown-400 mb-1">Basic Info</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">基本情報</h3>
              <dl className="space-y-1.5 text-xs">
                <div className="flex gap-4"><dt className="text-greige-400 w-20 shrink-0">住所</dt><dd>{SHOP_INFO.address}</dd></div>
                <div className="flex gap-4"><dt className="text-greige-400 w-20 shrink-0">営業時間</dt><dd>10:00〜24:00（最終受付23:00）</dd></div>
                <div className="flex gap-4"><dt className="text-greige-400 w-20 shrink-0">定休日</dt><dd>年中無休</dd></div>
                <div className="flex gap-4"><dt className="text-greige-400 w-20 shrink-0">駐車場</dt><dd>無料駐車場あり（店舗前）</dd></div>
              </dl>
            </div>
          </div>
          <div className="mt-6">
            <Link href="/access" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
              詳しいアクセスを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="FAQ" ja="君津のマッサージでよくある質問" />
          <div className="mt-8 space-y-4">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="border border-sand-200 bg-cream-50 p-6">
                <p className="text-sm font-medium text-stone-800 mb-3 leading-snug tracking-wide">
                  <span className="font-en text-brown-400 mr-2">Q.</span>
                  {item.name}
                </p>
                <p className="text-sm text-stone-700 leading-loose pl-5">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/faq" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
              すべてのよくある質問を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Related Pages ===== */}
      <section className="py-12 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: 'アクセス・地図', href: '/access' },
              { label: 'よくある質問', href: '/faq' },
              { label: '初めての方へ', href: '/first' },
              { label: '当日予約について', href: '/scene/same-day' },
              { label: '夜のご利用について', href: '/scene/after-work' },
              { label: '駐車場について', href: '/scene/parking' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="border border-sand-300 px-3 py-1.5 text-stone-700 hover:border-brown-300 hover:text-brown-500 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">ご予約・ご相談はこちら</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            君津市のリラクゼーションサロン MARISA。<br />
            夜0時まで営業・当日予約OK・無料駐車場完備。<br />
            ホットペッパービューティーからかんたんにご予約いただけます。
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
