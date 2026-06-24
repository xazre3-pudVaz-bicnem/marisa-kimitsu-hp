import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, SHOP_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津でマッサージ・もみほぐしをお探しなら｜もみほぐし・MARISA 君津店',
  description:
    '君津市でマッサージ・もみほぐし・鍼灸・美容鍼をお探しの方へ。夜0時まで営業・当日予約OK・無料駐車場完備。肩こり・腰のつらさ・眼精疲労・足のだるさ・鍼灸・美容鍼まで対応。君津駅から車で5分。',
  keywords: [
    '君津 マッサージ',
    '君津 もみほぐし',
    '君津 リラクゼーション',
    '君津 肩こり',
    '君津 腰痛',
    '君津 ヘッドスパ',
    '君津 足つぼ',
    '君津 鍼灸',
    '君津 美容鍼',
    '君津 夜遅く マッサージ',
    '君津 駐車場あり マッサージ',
  ],
  openGraph: {
    title: '君津でマッサージ・もみほぐしをお探しなら｜もみほぐし・MARISA 君津店',
    description:
      '君津市でマッサージ・もみほぐし・鍼灸・美容鍼をお探しの方へ。夜0時まで営業・当日予約OK・無料駐車場完備。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/area/kimitsu' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: SHOP_INFO.name,
  description:
    '君津市でマッサージ・もみほぐし・鍼灸・美容鍼をお探しなら。夜0時まで営業・当日予約OK・無料駐車場完備。肩こり・腰のつらさ・眼精疲労・足のだるさ・鍼灸・美容鍼まで対応。',
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
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SHOP_INFO.lat,
    longitude: SHOP_INFO.lng,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '24:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: '君津市' },
    { '@type': 'City', name: '木更津市' },
    { '@type': 'City', name: '富津市' },
    { '@type': 'City', name: '袖ケ浦市' },
  ],
  priceRange: '¥¥',
  hasMap: SHOP_INFO.googleMapUrl,
  image: '/og-image.jpg',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '君津市でマッサージを探していますが、MARISAはどこにありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'もみほぐし・MARISA 君津店は、千葉県君津市杢師3-20-10にあります。君津駅から車で約5分、君津インターチェンジ（館山自動車道）から車で約10分。店舗前に無料駐車場を完備しているので、お車でのご来店も安心です。カーナビに「千葉県君津市杢師3-20-10」とご入力ください。',
      },
    },
    {
      '@type': 'Question',
      name: '夜遅くでも予約できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MARISAは夜0時まで営業しています（最終受付23:00）。仕事帰りや夕食後の夜の時間帯にも対応しており、年中無休で営業しています。当日の夜の予約もホットペッパービューティーや公式WEB予約から24時間確認・予約が可能です。',
      },
    },
    {
      '@type': 'Question',
      name: '駐車場はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、店舗前に無料駐車場を完備しています。君津市は車での移動が中心の地域です。コインパーキングを探す手間もなく、施術後そのままお帰りいただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '当日予約はできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、当日予約に対応しています。ホットペッパービューティーまたは公式WEB予約サイト（B-merit）から24時間いつでも空き状況をご確認いただき、当日のご予約が可能です。急な疲れや体のつらさを感じた日にもお気軽にどうぞ。',
      },
    },
    {
      '@type': 'Question',
      name: '鍼灸もできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、資格を持つ鍼灸師スタッフ（なお）が在籍しています（主に金・土曜日）。鍼灸メニューは公式WEB予約（B-merit）からのみ受け付けています。ホットペッパービューティーからは鍼灸の予約ができませんのでご注意ください。もみほぐし30分+鍼¥4,500〜、美顔鍼¥3,500〜（公式予約限定）。',
      },
    },
    {
      '@type': 'Question',
      name: '初めてでも利用しやすいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、初めての方も安心してご来店いただけます。施術前にカウンセリングを行い、その日の体の状態やご要望をしっかりお聞きします。「肩を集中してほしい」「圧は弱めで」など、細かいご希望にも対応しています。',
      },
    },
    {
      '@type': 'Question',
      name: 'どのコースから試すといいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '初めての方には「もみほぐし60分（¥4,500）」がおすすめです。首・肩・背中・腰・脚まで全身をバランスよくほぐせるため、体全体の状態を確認するのに適しています。眼精疲労が気になる方は「ヘッドセット60分（¥5,400）」もご好評いただいています。',
      },
    },
    {
      '@type': 'Question',
      name: 'クーポンは使えますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ホットペッパービューティーのクーポンをご利用いただけます。ご予約の際にクーポンをご選択ください。最新のクーポン情報はホットペッパービューティーの店舗ページでご確認ください。',
      },
    },
  ],
}

const reasons = [
  {
    num: '01',
    title: '夜0時まで営業・最終受付23時',
    body: '君津市内で働く方の多くは、工場勤務・事務・自営業など多様な就業形態です。帰りが遅い日でもそのまま立ち寄れるよう、年中無休で夜0時まで営業しています。最終受付は23時。「残業で帰りが遅くなった日にも行ける」と仕事帰りの方に特に好評です。',
  },
  {
    num: '02',
    title: '当日予約OK・急な疲れにもすぐ対応',
    body: '「今日は体が特につらい」「急に予定が空いた」という場合も、ホットペッパービューティーまたは公式WEB予約から当日予約が可能です。24時間いつでも空き状況を確認でき、その場でご予約いただけます。急な疲れやコリを放置せず、当日すぐにケアできます。',
  },
  {
    num: '03',
    title: '無料駐車場完備・車でのご来店も安心',
    body: '君津市は車社会です。店舗前に無料駐車場を完備しているので、コインパーキングを探す手間もなく、施術後にそのままお帰りいただけます。君津駅から車で約5分、君津インターから約10分の便利な立地です。',
  },
  {
    num: '04',
    title: '豊富なメニュー・鍼灸師スタッフも在籍',
    body: 'もみほぐし・ヘッドケア・足つぼリフレクソロジー・セットコースに加え、鍼灸師資格を持つスタッフによる鍼灸メニューや美容鍼もご用意しています（公式WEB予約限定）。お悩みに合わせた幅広いアプローチで、日々のメンテナンスをサポートします。',
  },
  {
    num: '05',
    title: '丁寧なカウンセリングからスタート',
    body: '施術前に、その日の体の状態やご要望をしっかりお聞きします。「肩だけ集中してほしい」「圧は弱めで」など、細かいご要望にもできる限りお応えします。はじめての方でも、リラックスして受けていただけます。体の状態に合わせたアプローチで、日常の負担をやわらげるサポートをします。',
  },
  {
    num: '06',
    title: '男性も女性も・一人でもペアでも歓迎',
    body: '「マッサージ店は女性向け？」そんなことはありません。MARISAでは男女問わずご利用いただいています。また、ベッドを3台ご用意しているので、カップルやご夫婦、友人同士でも同じ時間帯に施術を受けていただけます。',
  },
  {
    num: '07',
    title: '君津市内の中心部に位置・アクセス良好',
    body: '千葉県君津市杢師3-20-10。君津駅から車で約5分、館山自動車道君津ICから約10分と、君津市内の各方面からアクセスしやすい立地です。木更津・富津・袖ケ浦など近隣エリアからのご来店も歓迎しています。',
  },
]

const menus = [
  {
    name: 'もみほぐし',
    href: '/menu/body-care',
    desc: '首・肩・背中・腰・脚を丁寧にほぐすベーシックコース。45分〜120分と時間帯も選びやすく、初めての方に最もご利用いただいています。',
    from: '¥3,900〜',
  },
  {
    name: 'ヘッドケア',
    href: '/menu/head',
    desc: '頭皮・側頭部・首まわりを集中ケア。PC・スマホ疲れによる眼精疲労・頭の重さをやわらげるサポートに。15分・30分から選べます。',
    from: '¥2,000〜',
  },
  {
    name: '足つぼ',
    href: '/menu/foot',
    desc: '足裏の反射区を刺激するリフレクソロジー。立ち仕事や長時間の歩行で足がだるくなりやすい方に。30分・60分。',
    from: '¥3,800〜',
  },
  {
    name: 'セットコース',
    href: '/menu/set',
    desc: 'もみほぐし＋ヘッドケア（ヘッドセット）やもみほぐし＋足つぼ（足つぼセット）など、複数の施術を組み合わせてまとめてケア。60分〜120分。',
    from: '¥5,400〜',
  },
  {
    name: '鍼灸（公式予約限定）',
    href: '/menu/acupuncture',
    desc: 'もみほぐし＋鍼のコース。資格を持つ鍼灸師スタッフが担当します。公式WEB予約（B-merit）からのみご予約いただけます。',
    from: '¥4,500〜',
  },
  {
    name: '美容鍼（公式予約限定）',
    href: '/menu/beauty-acupuncture',
    desc: '顔への鍼施術で肌の状態にアプローチ。公式WEB予約（B-merit）からのみご予約いただけます。',
    from: '¥3,500〜',
  },
]

const concerns = [
  { label: '肩こり', href: '/symptom/stiff-shoulder', desc: 'デスクワーク・スマホ操作・立ち仕事による肩の張り・コリをケア' },
  { label: '首こり', href: '/symptom/neck', desc: '首の張り・後頭部の重さ・頸部まわりの負担をやわらげるサポート' },
  { label: '腰まわりのつらさ', href: '/symptom/lower-back', desc: '長時間のデスクワーク・運転・立ち仕事による腰への負担をケア' },
  { label: '眼精疲労・頭の重さ', href: '/symptom/eye-fatigue', desc: 'PC・スマホ疲れによる目の重さ・頭のだるさをやわらげるサポート' },
  { label: '足のだるさ・むくみ感', href: '/symptom/leg-fatigue', desc: '立ち仕事や歩き疲れで足がパンパンになりやすい方に' },
  { label: '全身疲労', href: '/symptom/fatigue', desc: '仕事・家事・育児による全身のだるさをリセットしたい方に' },
  { label: '睡眠の質・リラックス', href: '/symptom/sleep-relax', desc: '緊張がほぐれにくい方、夜ゆっくり休みたい方のサポートに' },
]

export default function AreaKimitsuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ===== Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb
            items={[
              { label: '地域・シーン別', href: '/area/kimitsu' },
              { label: '君津でマッサージをお探しの方' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Kimitsu Area</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              君津でマッサージ・もみほぐしを<br className="hidden sm:block" />
              お探しの方へ
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              千葉県君津市でマッサージ・もみほぐし・鍼灸・美容鍼を探しているあなたへ。夜0時まで営業・当日予約OK・無料駐車場完備。
              肩こり・腰のつらさ・眼精疲労・足のだるさなど、日常の疲れをまとめてケアできるリラクゼーションサロンです。
            </p>
          </div>
        </div>
      </div>

      {/* ===== About ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="For Kimitsu" ja="君津でマッサージを探している方へ" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              「仕事帰りに行けるマッサージがない」「駐車場があるお店を探している」「夜遅くまで対応してくれるところがいい」——君津市でマッサージ・もみほぐしを探すとき、こうした条件で絞り込んでいる方は多いはずです。
            </p>
            <p>
              もみほぐし・MARISA 君津店は、千葉県君津市杢師3-20-10に位置するリラクゼーションサロンです。年中無休・夜0時まで営業（最終受付23:00）で、当日予約にも対応しています。無料駐車場を完備しているので、「仕事帰りにそのまま車で立ち寄る」という使い方が最も多いご利用パターンです。
            </p>
            <p>
              君津市は工場勤務・製鉄所関連・建設業・農業・オフィスワーク・医療・飲食業など、さまざまな働き方の方が暮らすエリアです。立ち仕事の方は足腰や肩の疲れ、デスクワーク中心の方は肩・首・眼精疲労、運転が多い方は腰や背中のつらさが出やすい傾向があります。こうした体への日々の負担を、ケアせずに放置したまま過ごすことが慢性的なコリや疲れの原因になることが少なくありません。
            </p>
            <p>
              MARISAでは、もみほぐし・ヘッドケア・足つぼリフレクソロジー・セットコースのほか、資格を持つ鍼灸師スタッフによる鍼灸メニュー・美容鍼（公式WEB予約限定）もご用意しています。お悩みや体の状態に合わせたアプローチで、日々のメンテナンスをサポートします。
            </p>
            <p>
              「君津市内でどのお店を選べばいいかわからない」という方にも、当ページで店舗の特徴・メニュー・アクセスをまとめてご確認いただけます。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Reasons ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Why MARISA"
            ja="君津の方にMARISAが選ばれる7つの理由"
            centered
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <div key={r.num} className="bg-cream-50 border border-sand-200 p-7">
                <p className="font-en text-xs tracking-widest text-brown-400 mb-3">{r.num}</p>
                <h3 className="text-sm font-medium text-stone-800 mb-3 tracking-wide leading-snug">{r.title}</h3>
                <p className="text-sm text-stone-700 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Menu ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menu"
            ja="MARISAの対応メニュー一覧"
            lead="お悩みや時間に合わせてお選びいただけます。鍼灸・美容鍼は公式WEB予約（B-merit）限定です。"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {menus.map((m) => (
              <Link
                key={m.name}
                href={m.href}
                className="group border border-sand-200 bg-cream-50 p-6 hover:border-brown-300 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-sm font-medium text-stone-800 tracking-wide group-hover:text-brown-500 leading-snug">
                    {m.name}
                  </h3>
                  <span className="font-en text-brown-400 text-sm font-light shrink-0 ml-3">{m.from}</span>
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

      {/* ===== Kimitsu City ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Kimitsu Life" ja="君津市の生活者に合わせたサービス" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              君津市は千葉県南部に位置し、新日本製鐵（現・日本製鉄）の工場を中心とした工業都市として発展してきたエリアです。現在は製造業・建設業に加え、農業・林業・観光業・医療・商業など多様な産業が集積しています。君津市内は自動車での移動が主体であり、電車やバスよりも「車でどこへでも行く」ライフスタイルが定着しています。
            </p>
            <p>
              MARISAはそうした君津の生活スタイルに合わせ、無料駐車場完備・夜0時まで営業・当日予約対応という3つの柱で運営しています。「仕事終わりに車でそのまま来られる」「週末の空き時間に予約して来られる」「家族と一緒に来られる」など、君津市内の幅広い生活シーンに対応できるよう環境を整えています。
            </p>
            <p>
              また、工場・建設・農業などの体を使う仕事の方だけでなく、デスクワーク・育児・家事などで疲れをためやすい方、スポーツ後のリカバリーに活用したい方、週に一度の定期メンテナンスとして通いたい方など、幅広い目的でご利用いただいています。
            </p>
            <p>
              君津市から隣接する木更津・富津・袖ケ浦・市原方面からもアクセスしやすい立地です。「木更津市内にちょうどいいお店がない」という方に、君津のMARISAをご利用いただいているケースも多くあります。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Concerns ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Your Concerns"
            ja="こんなお悩みをお持ちの方へ"
            lead="君津市で以下のようなお悩みをお持ちの方に、MARISAのもみほぐし・各種メニューをご利用いただいています。"
            centered
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {concerns.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group border border-sand-200 bg-cream-50 p-6 hover:border-brown-300 transition-colors"
              >
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide group-hover:text-brown-500">
                  {c.label}
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">{c.desc}</p>
                <p className="mt-4 text-xs tracking-widest text-brown-400">詳しく見る →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Access ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Access" ja="アクセス・店舗情報" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <div className="border border-sand-200 p-6">
              <p className="font-en text-[10px] tracking-widest uppercase text-brown-400 mb-1">By Car from Station</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">君津駅から（車で約5分）</h3>
              <p>
                君津駅南口を出て、国道方面へ進みます。杢師3丁目付近が目印。カーナビに「千葉県君津市杢師3-20-10」と入力するとスムーズです。店舗前に無料駐車場あり。
              </p>
            </div>
            <div className="border border-sand-200 p-6">
              <p className="font-en text-[10px] tracking-widest uppercase text-brown-400 mb-1">By Highway</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">君津インターから（車で約10分）</h3>
              <p>
                館山自動車道「君津IC」を降りて、君津市街方面へ。インターから10分程度でご来店いただけます。夜の来店でも迷いにくいルートです。
              </p>
            </div>
            <div className="border border-sand-200 p-6">
              <p className="font-en text-[10px] tracking-widest uppercase text-brown-400 mb-1">From Nearby Areas</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">近隣エリアからのアクセス</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs mt-2">
                  <tbody className="divide-y divide-sand-200">
                    {[
                      ['木更津方面', '車で約20分（館山自動車道・国道127号線）'],
                      ['富津方面', '車で約15分（国道127号線）'],
                      ['袖ケ浦方面', '車で約20分（館山自動車道）'],
                      ['市原方面', '車で約30分（館山自動車道）'],
                    ].map(([from, time]) => (
                      <tr key={from} className="text-stone-700">
                        <td className="py-2 pr-4 text-greige-400 w-28 shrink-0">{from}</td>
                        <td className="py-2">{time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="border border-sand-200 p-6">
              <p className="font-en text-[10px] tracking-widest uppercase text-brown-400 mb-1">Basic Info</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">基本情報</h3>
              <dl className="space-y-1.5 text-xs">
                <div className="flex gap-4">
                  <dt className="text-greige-400 w-20 shrink-0">住所</dt>
                  <dd>{SHOP_INFO.address}</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-greige-400 w-20 shrink-0">営業時間</dt>
                  <dd>10:00〜24:00（最終受付23:00）</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-greige-400 w-20 shrink-0">定休日</dt>
                  <dd>年中無休</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-greige-400 w-20 shrink-0">駐車場</dt>
                  <dd>無料駐車場あり（店舗前）</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="/access"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
            >
              詳しいアクセスを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Reservation Guide ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="How to Book" ja="予約方法のご案内" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <div className="border border-sand-200 bg-cream-50 p-6">
              <h3 className="font-medium text-stone-800 mb-3 tracking-wide">
                公式WEB予約（B-merit）— もみほぐし・鍼灸・美容鍼
              </h3>
              <p>
                もみほぐし・ヘッドケア・足つぼ・セットコースに加え、鍼灸・美容鍼の予約はこちらから。24時間いつでも空き確認・予約が可能です。
                <strong className="text-stone-800">鍼灸・美容鍼は公式WEB予約（B-merit）からのみ受け付けています。</strong>
              </p>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <h3 className="font-medium text-stone-800 mb-3 tracking-wide">
                ホットペッパービューティー — もみほぐし・ヘッドケア・足つぼ・セット
              </h3>
              <p>
                ホットペッパービューティーからもみほぐし・ヘッドケア・足つぼ・セットコースのご予約が可能です。クーポンもご利用いただけます。当日予約にも対応しています。なお、鍼灸・美容鍼はホットペッパービューティーからの予約はできません。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Price ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Price" ja="料金案内" />
          <div className="mt-8 space-y-4">
            {[
              {
                category: 'もみほぐし',
                items: [
                  { name: '45分', price: '¥3,900', note: '（施術時間計55分）' },
                  { name: '60分', price: '¥4,500', note: '（施術時間計70分）' },
                  { name: '90分', price: '¥6,400', note: '（施術時間計100分）' },
                  { name: '120分', price: '¥8,400', note: '' },
                ],
              },
              {
                category: 'ヘッドケア',
                items: [
                  { name: '15分', price: '¥2,000', note: '' },
                  { name: '30分', price: '¥3,000', note: '' },
                ],
              },
              {
                category: '足つぼ',
                items: [
                  { name: '30分', price: '¥3,800', note: '' },
                  { name: '60分', price: '¥5,500', note: '' },
                ],
              },
              {
                category: 'ヘッドセット',
                items: [
                  { name: '60分', price: '¥5,400', note: '' },
                  { name: '90分', price: '¥6,700', note: '' },
                  { name: '120分', price: '¥8,700', note: '' },
                ],
              },
              {
                category: '足つぼセット',
                items: [
                  { name: '60分', price: '¥5,500', note: '' },
                  { name: '90分', price: '¥6,900', note: '' },
                  { name: '120分', price: '¥8,900', note: '' },
                ],
              },
              {
                category: '鍼灸（公式予約限定）',
                items: [
                  { name: 'もみほぐし30分+鍼', price: '¥4,500', note: '' },
                  { name: 'もみほぐし45分+鍼', price: '¥5,400', note: '' },
                  { name: 'もみほぐし70分+鍼', price: '¥6,000', note: '' },
                ],
              },
              {
                category: '美容鍼（公式予約限定）',
                items: [{ name: '美顔鍼', price: '¥3,500', note: '' }],
              },
            ].map((cat) => (
              <div key={cat.category} className="border border-sand-200 p-5">
                <h3 className="text-xs font-medium text-stone-800 tracking-wide mb-3">{cat.category}</h3>
                <div className="space-y-1.5">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-baseline justify-between text-xs">
                      <span className="text-stone-700">
                        {item.name}
                        {item.note && (
                          <span className="text-greige-400 ml-1">{item.note}</span>
                        )}
                      </span>
                      <span className="font-en text-brown-400 font-light">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/menu"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
            >
              メニュー・料金の詳細を見る →
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
            <Link
              href="/faq"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
            >
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
              { label: 'メニュー・料金', href: '/menu' },
              { label: 'もみほぐし', href: '/menu/body-care' },
              { label: 'ヘッドケア', href: '/menu/head' },
              { label: '足つぼ', href: '/menu/foot' },
              { label: 'セットコース', href: '/menu/set' },
              { label: '鍼灸メニュー', href: '/menu/acupuncture' },
              { label: '美容鍼', href: '/menu/beauty-acupuncture' },
              { label: '肩こり', href: '/symptom/stiff-shoulder' },
              { label: '腰のつらさ', href: '/symptom/lower-back' },
              { label: '眼精疲労', href: '/symptom/eye-fatigue' },
              { label: 'アクセス・地図', href: '/access' },
              { label: 'よくある質問', href: '/faq' },
              { label: '初めての方へ', href: '/first' },
              { label: '当日予約について', href: '/scene/same-day' },
              { label: '仕事帰りの利用', href: '/scene/after-work' },
              { label: '駐車場について', href: '/scene/parking' },
              { label: 'ペア・カップルで', href: '/scene/pair' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="border border-sand-300 px-3 py-1.5 text-stone-700 hover:border-brown-300 hover:text-brown-500 transition-colors"
              >
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
            鍼灸・美容鍼は公式WEB予約（B-merit）からのみご予約いただけます。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={BMERIT_URL} label="公式WEB予約（鍼灸対応）" variant="light" size="lg" />
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
