import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, SHOP_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '木更津からのアクセス・マッサージ・もみほぐし｜MARISA 君津店',
  description:
    '木更津方面からもみほぐし・マッサージをお探しの方へ。もみほぐし・MARISA 君津店は木更津から車で約15〜20分。夜0時まで・当日予約OK・無料駐車場。肩こり・腰のつらさ・足つぼ・鍼灸まで対応。',
  keywords: [
    '木更津 マッサージ',
    '木更津 もみほぐし',
    '木更津 リラクゼーション',
    '木更津 肩こり',
    '木更津 鍼灸',
    '木更津 近く マッサージ',
    '木更津 もみほぐし 近く',
    '君津 マッサージ',
  ],
  openGraph: {
    title: '木更津からのアクセス・マッサージ・もみほぐし｜MARISA 君津店',
    description:
      '木更津から車で約15〜20分。もみほぐし・MARISA 君津店は夜0時まで営業・当日予約OK・無料駐車場完備。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/area/kisarazu' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '木更津から車でどのくらいかかりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '木更津市中心部から車で約15〜20分程度です。館山自動車道をご利用の場合は木更津JCTから君津ICで下車し、そこから約10分でご来店いただけます。国道127号線や410号線を経由するルートでも到着できます。カーナビに「千葉県君津市杢師3-20-10」とご入力ください。',
      },
    },
    {
      '@type': 'Question',
      name: '駐車場は無料ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、店舗前に無料駐車場を完備しています。コインパーキングを探す必要はありません。木更津からお車でお越しの場合も安心してご来店いただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '当日予約はできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '当日予約にも対応しています。ホットペッパービューティーまたは公式WEB予約（B-merit）から24時間いつでも空き状況を確認してご予約いただけます。事前に予約いただくと確実にご案内できます。',
      },
    },
    {
      '@type': 'Question',
      name: '鍼灸はホットペッパーから予約できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '鍼灸・美容鍼は公式WEB予約（B-merit）からのみご予約いただけます。ホットペッパービューティーからは鍼灸のご予約はできませんのでご注意ください。もみほぐし・ヘッドケア・足つぼ・セットコースはホットペッパービューティーからもご予約いただけます。鍼灸の対応時間は金曜10:00〜22:00、土曜10:00〜14:00が中心です。',
      },
    },
    {
      '@type': 'Question',
      name: '木更津からの帰り道に立ち寄れますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、館山自動車道・国道127号線・国道410号線を使って君津方面へ向かう帰り道に立ち寄っていただけます。夜0時まで営業（最終受付23時）ですので、仕事帰りや夜の移動の途中でもご来店いただけます。無料駐車場完備。',
      },
    },
    {
      '@type': 'Question',
      name: '木更津方面の方でもよく来店されますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、木更津方面からもご来店いただいています。特に「夜遅くまで対応してくれるお店を探していた」「無料駐車場があるお店が希望だった」という方に利用いただいています。君津と木更津は隣接しているため、車での移動もスムーズです。',
      },
    },
    {
      '@type': 'Question',
      name: '深夜でも営業していますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '夜0時まで営業しています（最終受付23:00）。木更津から仕事帰りに来店される方も多く、23時前にご来店いただければ施術をお受けいただけます。年中無休で営業しています。',
      },
    },
  ],
}

const features = [
  {
    title: '夜0時まで営業・最終受付23時',
    body: '木更津から仕事帰りに君津へ足を伸ばしていただく方も多くいらっしゃいます。夜0時まで・年中無休で営業しているため、帰宅前に立ち寄りやすい環境です。最終受付は23時なので、仕事が長引いた日でも安心してご来店いただけます。',
  },
  {
    title: '当日予約にも対応',
    body: 'ホットペッパービューティーまたは公式WEB予約（B-merit）から24時間いつでも空き確認・予約が可能です。「木更津での用事が早く終わった」「今日の帰りに寄りたい」という場合もお気軽にどうぞ。',
  },
  {
    title: '無料駐車場完備',
    body: '木更津からのご来店はほとんどがお車です。店舗前に無料駐車場を完備しているので、駐車料金を気にせずゆっくりご来店いただけます。施術後もそのまま帰路につけます。',
  },
  {
    title: '豊富なメニュー・鍼灸師スタッフ在籍',
    body: 'もみほぐし・ヘッドケア・足つぼ・セットコースに加え、資格を持つ鍼灸師スタッフによる鍼灸・美容鍼（公式WEB予約限定）もご用意。お悩みに合わせて幅広く対応できます。',
  },
  {
    title: '丁寧なカウンセリング',
    body: '施術前に、その日の体の状態やご要望をしっかりお聞きします。「首と肩だけ集中してほしい」「圧は弱めで」など、細かいご希望にもできる限りお応えします。初めての方も安心してご来店ください。',
  },
]

const menus = [
  {
    name: 'もみほぐし',
    href: '/menu/body-care',
    price: '¥3,900〜',
    desc: '首・肩・背中・腰・脚を丁寧にほぐすベーシックコース。45分〜120分から選べます。',
  },
  {
    name: 'ヘッドケア',
    href: '/menu/head',
    price: '¥2,000〜',
    desc: '頭皮・側頭部・首まわりのケア。眼精疲労・頭の重さが気になる方に。',
  },
  {
    name: '足つぼ',
    href: '/menu/foot',
    price: '¥3,800〜',
    desc: '足裏の反射区を刺激。立ち仕事・歩き疲れで足がだるくなりやすい方に。',
  },
  {
    name: 'セットコース',
    href: '/menu/set',
    price: '¥5,400〜',
    desc: 'もみほぐし＋ヘッドケア、もみほぐし＋足つぼの組み合わせコース。',
  },
  {
    name: '鍼灸（公式予約限定）',
    href: '/menu/acupuncture',
    price: '¥4,500〜',
    desc: 'もみほぐし＋鍼のコース。公式WEB予約（B-merit）からのみご予約いただけます。',
  },
  {
    name: '美容鍼（公式予約限定）',
    href: '/menu/beauty-acupuncture',
    price: '¥3,500〜',
    desc: '美顔鍼施術。公式WEB予約（B-merit）からのみご予約いただけます。',
  },
]

export default function AreaKisarazuPage() {
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
              { label: '地域・シーン別', href: '/area/kimitsu' },
              { label: '木更津方面からお越しの方' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">From Kisarazu</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              木更津からのご来店も<br className="hidden sm:block" />
              歓迎しています。
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              もみほぐし・MARISA 君津店は千葉県君津市杢師3-20-10にある実店舗です（木更津市内ではありません）。木更津から車で約15〜20分と近く、木更津方面からも多くのお客様にご来店いただいています。夜0時まで営業・当日予約OK・無料駐車場完備。
            </p>
          </div>
        </div>
      </div>

      {/* ===== For Kisarazu Searchers ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="From Kisarazu Area" ja="木更津方面で、もみほぐしを近くで探している方へ" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              「木更津でもみほぐしを探しているけれど、近くにちょうどいいお店がない」という方へ。君津市のMARISAは木更津方面からも通いやすい距離にあります。
            </p>
            <p>
              当店は君津市杢師3-20-10にある実店舗です。木更津市内ではありませんが、車で約15〜20分とアクセスしやすく、木更津方面からも多くのお客様にご利用いただいています。無料駐車場があるので、お車でのご来店も安心です。
            </p>
            <p>
              夜0時まで営業・当日予約対応・年中無休という環境から、「夜でも通える」「急なときでも予約できる」という点で木更津方面のお客様にも選んでいただいています。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Access from Kisarazu ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Access from Kisarazu" ja="木更津方面からのアクセス" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              もみほぐし・MARISAの実店舗は千葉県君津市杢師3-20-10にあります。木更津市と君津市は隣接しており、木更津駅周辺から車で約15〜20分程度でお越しいただけます。
            </p>
            <div className="border border-sand-200 p-6 space-y-5">
              <p className="text-xs tracking-widest text-brown-400 uppercase font-en">Route Options</p>
              <div>
                <h3 className="font-medium text-stone-800 mb-2 tracking-wide">
                  館山自動車道をご利用の場合（最短ルート）
                </h3>
                <p>
                  木更津JCT（または木更津南IC・木更津北IC）から館山自動車道に乗り、「君津IC」で下車。インターを降りて君津市街方面へ進み、杢師3丁目が目的地です。インターから約10分。全体で約15〜20分程度。
                </p>
              </div>
              <div>
                <h3 className="font-medium text-stone-800 mb-2 tracking-wide">
                  国道127号線をご利用の場合
                </h3>
                <p>
                  木更津市内から国道127号線を君津方面へ南下。君津市街に入ったら杢師3丁目方面へ。交通状況により20〜30分程度。カーナビに「千葉県君津市杢師3-20-10」とご入力ください。
                </p>
              </div>
              <div>
                <h3 className="font-medium text-stone-800 mb-2 tracking-wide">国道410号線をご利用の場合</h3>
                <p>
                  木更津市から国道410号線経由でお越しいただくことも可能です。道路状況によっては下道でもスムーズに来店できます。カーナビのルート案内に従ってください。
                </p>
              </div>
            </div>
            <div className="border border-sand-200 p-6">
              <dl className="space-y-1.5 text-xs">
                <div className="flex gap-4">
                  <dt className="text-greige-400 w-28 shrink-0">木更津駅から</dt>
                  <dd>車で約15〜20分</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-greige-400 w-28 shrink-0">木更津JCTから</dt>
                  <dd>館山自動車道経由→君津IC→車で約10分</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-greige-400 w-28 shrink-0">駐車場</dt>
                  <dd>無料駐車場あり（店舗前）</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Features ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Why Choose MARISA" ja="木更津から君津のMARISAを選ぶ理由" />
          <div className="mt-8 space-y-5">
            {features.map((f) => (
              <div key={f.title} className="border border-sand-200 bg-cream-50 p-6">
                <h3 className="text-sm font-medium text-stone-800 mb-3 tracking-wide">{f.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Scenes ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Usage Scenes" ja="木更津からの来店に向いているシーン" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <div className="border border-sand-200 p-6">
              <h3 className="font-medium text-stone-800 mb-3 tracking-wide">木更津のビジネス街から仕事帰りに</h3>
              <p>
                木更津市内で働いている方が、帰宅前に君津のMARISAへ立ち寄るというケースがあります。夜0時まで営業しているため、仕事が長引いた日でも「帰り道に少し足を伸ばす」感覚でご利用いただけます。
              </p>
            </div>
            <div className="border border-sand-200 p-6">
              <h3 className="font-medium text-stone-800 mb-3 tracking-wide">君津方面での用事のついでに</h3>
              <p>
                君津市内での買い物・通院・知人訪問などの用事の前後にMARISAへ立ち寄る方もいます。「どうせ君津まで来るなら」という感覚で、木更津エリアの方にも気軽にご利用いただいています。
              </p>
            </div>
            <div className="border border-sand-200 p-6">
              <h3 className="font-medium text-stone-800 mb-3 tracking-wide">残業後・夜遅い時間帯にも使える</h3>
              <p>
                木更津でのお仕事が残業になってしまった夜も、最終受付23時なので、23時前にご来店いただければ施術をお受けいただけます。夜遅くまで対応しているお店を探していた方にも好評です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Menus ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menu"
            ja="対応メニュー一覧"
            lead="木更津方面からお越しのお客様にご利用いただいているメニューです。鍼灸・美容鍼は公式WEB予約限定。"
            centered
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
                  <span className="font-en text-brown-400 text-sm font-light shrink-0 ml-2">{m.price}</span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed">{m.desc}</p>
                <p className="mt-4 text-xs tracking-widest text-brown-400">詳しく見る →</p>
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

      {/* ===== Shop Info ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Shop Info" ja="店舗情報" />
          <dl className="mt-6 divide-y divide-sand-200 text-sm">
            {[
              { label: '店舗名', value: SHOP_INFO.name },
              { label: '住所', value: SHOP_INFO.address },
              { label: '営業時間', value: '10:00〜24:00（最終受付 23:00）' },
              { label: '定休日', value: '年中無休' },
              { label: '駐車場', value: '無料駐車場あり（店舗前）' },
              { label: '木更津から', value: '車で約15〜20分（館山自動車道経由）' },
            ].map((item) => (
              <div key={item.label} className="flex gap-6 py-3">
                <dt className="w-28 shrink-0 text-greige-400 tracking-wide">{item.label}</dt>
                <dd className="text-stone-700 leading-loose">{item.value}</dd>
              </div>
            ))}
          </dl>
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

      {/* ===== FAQ ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="FAQ" ja="よくある質問" />
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
        </div>
      </section>

      {/* ===== Related ===== */}
      <section className="py-12 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
              { label: 'アクセス・駐車場', href: '/access' },
              { label: 'メニュー・料金', href: '/menu' },
              { label: '当日予約について', href: '/scene/same-day' },
              { label: '仕事帰りの利用', href: '/scene/after-work' },
              { label: 'よくある質問', href: '/faq' },
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
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">ご予約はこちらから</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            木更津から車で約15〜20分。<br />
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
