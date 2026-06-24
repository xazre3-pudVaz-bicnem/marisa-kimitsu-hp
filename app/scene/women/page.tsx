import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, SITE_URL, SHOP_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津で女性も通いやすいマッサージ・もみほぐし｜もみほぐし・MARISA',
  description:
    '君津で女性も通いやすいマッサージ・もみほぐしをお探しの方へ。もみほぐし・MARISAは、落ち着いた空間でヘッドケア、足つぼ、セットコース、美容鍼にも対応。当日予約やLINE相談も可能です。',
  keywords: [
    '君津 マッサージ 女性',
    '君津 リラクゼーション 女性',
    '君津 もみほぐし 女性',
    '君津 美容鍼',
    '君津 女性 一人',
    '君津 レディース マッサージ',
  ],
  openGraph: {
    title: '君津で女性も通いやすいマッサージ・もみほぐし｜もみほぐし・MARISA',
    description:
      '君津で女性も通いやすいマッサージ・もみほぐしをお探しの方へ。落ち着いた空間でヘッドケア、足つぼ、美容鍼にも対応。当日予約やLINE相談も可能です。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/scene/women' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '女性のお客様は多いですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、女性のお客様に多くご利用いただいています。20代〜50代の働く女性や主婦の方まで、幅広い年齢層の女性にお越しいただいています。Google検索経由でお越しになる女性のお客様も増えており、初めてのご来店でも安心して過ごしていただける環境を整えています。',
      },
    },
    {
      '@type': 'Question',
      name: '初めてでも安心して利用できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、初めてのお客様も大歓迎です。ご来店後、施術前にカウンセリングでお体の状態や気になる部位、力加減のご要望などをお伺いします。わからないことがあればスタッフにお気軽にお声がけください。施術着もご用意しておりますので、仕事帰りや外出途中にそのままお越しいただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '力加減は相談できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'もちろんです。施術前のカウンセリングで希望の強さをお伝えいただければ、施術中もご要望に合わせて調整します。「強め・普通・やさしめ」などお気軽にお申し付けください。施術中に強さが変わったと感じた場合も、遠慮なくお声がけいただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '美容鍼はホットペッパーから予約できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '美容鍼・鍼灸のご予約は公式予約サイト（B-merit）からのみ承っております。ホットペッパービューティーからは鍼灸・美容鍼の予約ができませんのでご注意ください。もみほぐし・ヘッドケア・足つぼ・セットコースはホットペッパービューティーからご予約いただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '当日予約やすぐ予約は可能ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、当日予約に対応しています。ホットペッパービューティーの「すぐ予約」機能からも空きのご確認と予約が可能です。仕事帰りや突然体がつらくなったときにもお気軽にどうぞ。夜0時まで営業・最終受付23時ですので、夕方以降のご予約も承っています。',
      },
    },
    {
      '@type': 'Question',
      name: '男性も利用できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、男性のお客様もご利用いただけます。このページは女性のお客様向けにご案内していますが、MARISAは男女ともにご来店を歓迎しています。カップルやご夫婦でのペア利用も承っています。',
      },
    },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  '@id': `${SITE_URL}/#business`,
  name: SHOP_INFO.name,
  description:
    '君津市の女性にも通いやすいリラクゼーションサロン。夜0時まで営業・当日予約OK・無料駐車場完備。もみほぐし・ヘッドケア・足つぼ・美容鍼に対応。',
  url: SITE_URL,
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
  priceRange: '¥¥',
  hasMap: SHOP_INFO.googleMapUrl,
  image: '/og-image.jpg',
}

export default function SceneWomenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Page Header */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb
            items={[
              { label: '地域・シーン別', href: '/scene' },
              { label: '女性のお客様へ' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">
              For Women
            </p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              君津で、女性がゆっくり過ごせるリラクゼーションサロン
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              君津市でマッサージ・もみほぐしをお探しの女性のお客様へ。MARISAは落ち着いた清潔感のある空間で、もみほぐし・ヘッドケア・足つぼ・セットコース・美容鍼に対応しています。初めての方も、施術前のカウンセリングで安心してお受けいただけます。
            </p>
          </div>
        </div>
      </div>

      {/* Welcome message */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Welcome" ja="はじめての方も、常連の方も" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              近年、Google検索から「君津 マッサージ 女性」「君津 リラクゼーション 女性」といったキーワードでMARISAにたどり着き、ご来店いただく女性のお客様が増えています。初めてリラクゼーションサロンを利用される方も、他のサロンに通ったことがある方も、ぜひMARISAでの時間をお楽しみいただけたらと思っています。
            </p>
            <p>
              仕事・育児・家事と毎日忙しい中で、自分のために時間を作るのはなかなか難しいものです。だからこそ、MARISAでの施術時間が「自分のためだけの特別な時間」になるよう、一人ひとりのお客様に丁寧に向き合っています。
            </p>
            <p>
              施術前には必ずカウンセリングの時間を設けています。「肩がとくに気になる」「強めにほぐしてほしい」「眠ってしまっても大丈夫ですか？」——どんなご要望もお気軽にお声がけください。施術中に眠ってしまうお客様も多く、それもリラックスできている証拠として歓迎しています。会話が苦手な方も、無理に話す必要はありません。施術に集中していただける静かな時間をお届けします。
            </p>
          </div>
        </div>
      </section>

      {/* Comfort & Safety */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Environment" ja="安心して過ごせる空間" lead="女性が通いやすいと感じていただけるように" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: '落ち着いた清潔感のある店内',
                body: '清潔感のある落ち着いた空間を大切にしています。シーツやタオルは毎回新しいものをご用意しており、衛生面にも配慮しています。',
              },
              {
                title: '施術前のカウンセリングで力加減を確認',
                body: 'ご来店後、施術前にお体の状態や気になる部位、力加減のご希望をお伺いします。「やさしめで」「ここを重点的に」などお気軽にお伝えください。',
              },
              {
                title: '施術着あり・着替えの心配不要',
                body: '施術用の着替えをご用意しています。仕事帰りや外出途中でそのままお越しいただいても大丈夫です。',
              },
              {
                title: '眠ってしまっても、会話が苦手でも大丈夫',
                body: '施術中に眠ってしまうお客様も多くいらっしゃいます。無理に会話する必要はありません。ゆっくりと心地よい時間をお過ごしください。',
              },
              {
                title: '個別スペースでの施術',
                body: '施術は個別スペースで行います。他のお客様の目を気にせず、自分だけの空間でリラックスしていただけます。',
              },
              {
                title: '照明・BGMでリラックスできる空間づくり',
                body: '落ち着いた照明と静かなBGMの中で施術を受けていただけます。日常の喧騒から離れた静かな時間をお届けします。',
              },
            ].map((item, i) => (
              <div key={i} className="bg-cream-50 border border-sand-200 p-5">
                <p className="font-medium text-stone-800 tracking-wide mb-2 text-sm">{item.title}</p>
                <p className="text-xs text-stone-700 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended menus for women */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Recommended Menu"
            ja="女性に人気のメニュー"
            lead="お悩みや気分に合わせてお選びください"
          />

          <div className="mt-8 space-y-4">
            <div className="bg-sand-100 border border-sand-200 p-6">
              <div className="flex justify-between items-start mb-3">
                <p className="font-medium text-stone-800 tracking-wide">ヘッドケア</p>
                <span className="text-xs text-greige-400">30分〜 / ¥2,500〜</span>
              </div>
              <p className="text-sm text-stone-700 leading-loose">
                頭・首・肩のコリをまとめてケアするコースです。デスクワークやスマートフォンの使いすぎによる眼精疲労・頭の重さが気になる女性に選ばれています。美容面からも頭皮のケアに関心を持つ方が多く、ヘッドケアは女性のお客様に特に人気のメニューです。
              </p>
              <div className="mt-3">
                <Link
                  href="/menu/head"
                  className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
                >
                  ヘッドケアの詳細を見る →
                </Link>
              </div>
            </div>

            <div className="bg-sand-100 border border-sand-200 p-6">
              <div className="flex justify-between items-start mb-3">
                <p className="font-medium text-stone-800 tracking-wide">足つぼ・フットリフレ</p>
                <span className="text-xs text-greige-400">45分〜 / ¥3,500〜</span>
              </div>
              <p className="text-sm text-stone-700 leading-loose">
                足裏へのアプローチで全身のリラクゼーション感が深まります。冷えや足のだるさ・むくみが気になる女性に好評です。立ち仕事後・長時間の外出後・夕方になると足が重くなる方にとくにおすすめしています。
              </p>
              <div className="mt-3">
                <Link
                  href="/menu/foot"
                  className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
                >
                  足つぼの詳細を見る →
                </Link>
              </div>
            </div>

            <div className="bg-sand-100 border border-sand-200 p-6">
              <div className="flex justify-between items-start mb-3">
                <p className="font-medium text-stone-800 tracking-wide">セットコース</p>
                <span className="text-xs text-greige-400">60分〜 / ¥5,000〜</span>
              </div>
              <p className="text-sm text-stone-700 leading-loose">
                もみほぐし＋ヘッドケア、またはもみほぐし＋足つぼを組み合わせたセットコースです。体全体をバランスよくケアしたい方に。仕事帰りに全身をしっかりほぐしたいという女性のお客様に人気のコースです。
              </p>
              <div className="mt-3">
                <Link
                  href="/menu/set"
                  className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
                >
                  セットコースの詳細を見る →
                </Link>
              </div>
            </div>

            <div className="bg-sand-100 border border-sand-200 p-6">
              <div className="flex justify-between items-start mb-3">
                <p className="font-medium text-stone-800 tracking-wide">もみほぐし</p>
                <span className="text-xs text-greige-400">45分〜 / ¥3,500〜</span>
              </div>
              <p className="text-sm text-stone-700 leading-loose">
                肩・背中・腰・脚をバランスよくケアする定番コースです。育児・家事・仕事の疲れが全身に蓄積している方、まず試してみたいという初めての方にもおすすめです。力加減は施術前にご相談いただけます。
              </p>
              <div className="mt-3">
                <Link
                  href="/menu/body-care"
                  className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
                >
                  もみほぐしの詳細を見る →
                </Link>
              </div>
            </div>

            <div className="bg-sand-100 border border-sand-200 p-6">
              <div className="flex justify-between items-start mb-3">
                <p className="font-medium text-stone-800 tracking-wide">美容鍼（公式予約限定）</p>
                <span className="text-xs text-greige-400">45分〜 / 公式サイトでご確認</span>
              </div>
              <p className="text-sm text-stone-700 leading-loose">
                フェイスラインや肌の状態のケアをご希望の女性に選ばれているのが美容鍼です。資格を持つ鍼灸師スタッフが対応しています（金曜・土曜を中心に対応）。美容鍼・鍼灸のご予約はホットペッパービューティーには掲載しておらず、公式予約サイト（B-merit）からのみ承っています。
              </p>
              <div className="mt-3 flex flex-wrap gap-4">
                <Link
                  href={BMERIT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
                >
                  美容鍼の予約（公式サイト）→
                </Link>
                <Link
                  href="/menu/beauty-acupuncture"
                  className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
                >
                  美容鍼の詳細を見る →
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs text-greige-400 leading-loose">
            ※鍼灸・美容鍼はホットペッパービューティーには掲載しておりません。公式予約サイト（B-merit）からのみご予約いただけます。対応時間：金曜10:00〜22:00・土曜10:00〜14:00（その他は要相談）。
          </p>
        </div>
      </section>

      {/* Access convenience */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Access" ja="通いやすさへのこだわり" lead="忙しい女性でも立ち寄りやすい環境を整えています" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              仕事・育児・家事に追われる毎日の中でサロンに通うには、「行きやすさ」がとても大切です。MARISAは君津でお仕事や生活をされている女性のお客様が通いやすい環境を意識しています。
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: '当日予約・すぐ予約に対応',
                body: 'ホットペッパービューティーから当日の空き状況を確認してすぐに予約できます。「今日行きたい」という日にもお気軽にどうぞ。',
              },
              {
                title: '夜0時まで営業（最終受付23時）',
                body: '仕事帰りや夕食後にも間に合う営業時間です。年中無休ですので、平日・休日を問わずご利用いただけます。',
              },
              {
                title: '無料駐車場あり（車での来店OK）',
                body: '店舗前に無料駐車場完備。君津市内はお車での移動が中心の方も多く、駐車料金の心配なくご来店いただけます。',
              },
              {
                title: 'LINE相談OK',
                body: '予約前のご質問やメニューについての相談は、LINEでも承っています。気軽にお問い合わせいただけます。',
              },
            ].map((item, i) => (
              <div key={i} className="bg-cream-50 border border-sand-200 p-5">
                <p className="font-medium text-stone-800 tracking-wide mb-2 text-sm">{item.title}</p>
                <p className="text-xs text-stone-700 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              「久しぶりにリラクゼーションサロンに行きたいけど、どんな感じか不安」という方も、まずはもみほぐし45分からお試しいただければと思います。施術前に丁寧にカウンセリングを行い、初めての方にも安心してご利用いただけるよう努めています。
            </p>
            <p>
              君津市内在住・在勤の女性のお客様はもちろん、木更津・富津・袖ケ浦方面からお越しの女性のお客様にもご利用いただいています。いずれの方向からも無料駐車場を完備していますので、お車でのご来店も安心です。
            </p>
          </div>

          {/* Shop info table */}
          <dl className="mt-8 divide-y divide-sand-200 text-sm bg-cream-50 border border-sand-200">
            {[
              { label: '住所', value: SHOP_INFO.address },
              { label: '営業時間', value: '10:00〜24:00（最終受付23:00）年中無休' },
              { label: '駐車場', value: '無料駐車場あり（店舗前）' },
              { label: '予約方法', value: 'ホットペッパービューティー / 公式サイト（鍼灸のみ）' },
            ].map((item) => (
              <div key={item.label} className="flex gap-6 px-5 py-3">
                <dt className="w-24 shrink-0 text-greige-400 tracking-wide">{item.label}</dt>
                <dd className="text-stone-700 leading-loose">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="FAQ" ja="よくある質問" />
          <div className="mt-8 space-y-4">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="border border-sand-200 bg-sand-100 p-6">
                <p className="text-sm font-medium text-stone-800 mb-3 tracking-wide">
                  <span className="font-en text-brown-400 mr-2">Q.</span>
                  {item.name}
                </p>
                <p className="text-sm text-stone-700 leading-loose pl-5">
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-12 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: '美容鍼メニュー', href: '/menu/beauty-acupuncture' },
              { label: 'ヘッドケアメニュー', href: '/menu/head' },
              { label: '足つぼメニュー', href: '/menu/foot' },
              { label: 'セットコース', href: '/menu/set' },
              { label: 'ご予約について', href: '/reservation' },
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

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">
            Reservation
          </p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">ご予約はこちらから</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業・当日予約OK・無料駐車場完備。
            <br />
            美容鍼・鍼灸のご予約は公式サイト（B-merit）からお願いいたします。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton
              href={BMERIT_URL}
              label="美容鍼・鍼灸の予約（公式）"
              variant="outline"
              size="lg"
            />
          </div>
        </div>
      </section>
    </>
  )
}
