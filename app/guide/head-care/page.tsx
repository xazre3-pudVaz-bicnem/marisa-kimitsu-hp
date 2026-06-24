import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'ヘッドケアとは？効果・施術内容・向いている人をわかりやすく解説｜MARISA 君津店',
  description: 'ヘッドケアとは、頭皮・側頭部・眼周りをほぐすリラクゼーション施術です。目の疲れ・頭の重さ・眼精疲労への対応方法や、ヘッドスパとの違いを解説。',
  keywords: ['ヘッドケア とは', 'ヘッドスパ ヘッドケア 違い', 'ヘッドケア 眼精疲労', '頭皮マッサージ とは', '君津 ヘッドケア'],
  openGraph: {
    title: 'ヘッドケアとは？効果・施術内容・向いている人をわかりやすく解説｜MARISA 君津店',
    description: 'ヘッドケアとは何か、ヘッドスパとの違い、眼精疲労との関連、MARISAのヘッドケアメニューを詳しく解説。',
    locale: 'ja_JP',
    type: 'article',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: `${SITE_URL}/guide/head-care` },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'ヘッドケアとは？効果・施術内容・向いている人をわかりやすく解説',
  description: 'ヘッドケアとは、頭皮・側頭部・眼周りをほぐすリラクゼーション施術です。目の疲れ・頭の重さ・眼精疲労への対応方法や、ヘッドスパとの違いを解説。',
  datePublished: '2026-06-24',
  dateModified: '2026-06-24',
  image: `${SITE_URL}/og-image.jpg`,
  author: {
    '@type': 'Organization',
    name: 'もみほぐし・MARISA 君津店',
    url: SITE_URL,
    '@id': `${SITE_URL}/#business`,
  },
  publisher: {
    '@type': 'Organization',
    name: 'もみほぐし・MARISA 君津店',
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/og-image.jpg` },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/guide/head-care` },
  about: { '@type': 'Thing', name: 'ヘッドケア・頭皮マッサージ' },
  inLanguage: 'ja',
  keywords: 'ヘッドケア とは, ヘッドスパ ヘッドケア 違い, ヘッドケア 眼精疲労, 頭皮マッサージ とは, 君津 ヘッドケア',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'ヘッドケアとヘッドスパの違いは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ヘッドスパは主に頭皮への水分補給・栄養補給を目的とした美容施術で、シャンプーやトリートメントを使ったウェット施術が多いです。ヘッドケアはドライ（髪を濡らさない）で頭部・首・肩周りの筋肉をほぐすリラクゼーション施術です。MARISAのヘッドケアはドライ施術です。',
      },
    },
    {
      '@type': 'Question',
      name: 'ヘッドケアは眼精疲労に向いていますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '頭部・首筋の筋肉をほぐすことで、眼の周辺の緊張がやわらげやすくなり、眼精疲労感が軽く感じやすくなるというお声をいただいています。パソコンやスマートフォンの使いすぎで目や頭が疲れている方にご好評です。ただし医療的な効果を保証するものではありません。',
      },
    },
    {
      '@type': 'Question',
      name: '15分と30分の違いは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '15分コースは頭部・頭皮を中心に重点的にケアするコースです。30分コースは首・肩のほぐしから頭部全体まで、よりゆったりとした施術が受けられます。初めての方は15分からお試しいただき、もう少し時間をかけたい方は30分をお選びください。',
      },
    },
    {
      '@type': 'Question',
      name: 'もみほぐしとセットで受けるとどう変わりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'もみほぐしで肩・背中・首をほぐした後にヘッドケアを受けることで、体全体の疲れをより深くほぐせます（ヘッドセット）。特に首こり・眼精疲労・頭の重さが気になる方には、セットコースが特におすすめです。',
      },
    },
    {
      '@type': 'Question',
      name: '頭皮が敏感でも大丈夫ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MARISAのヘッドケアはドライ施術で、化粧品・シャンプー等は使用しません。ただし頭皮に傷や炎症がある場合はお申し出ください。圧の強さも調整できますので、敏感な方はお気軽にスタッフにご相談ください。',
      },
    },
    {
      '@type': 'Question',
      name: '定期的に通うといいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'デスクワークや長時間のスマホ使用による頭・首の疲れが慢性化している方には、月2〜4回程度の定期的なご利用をおすすめしています。定期的にほぐすことで、疲れが蓄積しにくい状態を維持しやすくなります。',
      },
    },
  ],
}

export default function GuideHeadCarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ヘッダー */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'ガイド', href: '/guide/what-is-momihogushi' },
              { label: 'ヘッドケアとは' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Guide</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              ヘッドケアとは？効果・施術内容・向いている人を解説
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「ヘッドスパ」と「ヘッドケア」——言葉は似ていますが、施術の内容は異なります。
              眼精疲労・頭の重さ・デジタル疲れにお悩みの方へ、ヘッドケアの基本から
              MARISAのメニューまでわかりやすく解説します。
            </p>
            {/* 目次 */}
            <nav className="mt-8 bg-cream-50 border border-sand-200 p-5 max-w-xl">
              <p className="text-xs tracking-widest text-greige-400 uppercase mb-3">Contents</p>
              <ol className="space-y-2 text-xs text-stone-700">
                <li><a href="#definition" className="hover:text-brown-500 transition-colors">1. ヘッドケアとは何か</a></li>
                <li><a href="#parts" className="hover:text-brown-500 transition-colors">2. アプローチする部位</a></li>
                <li><a href="#eye-fatigue" className="hover:text-brown-500 transition-colors">3. 眼精疲労・頭の重さとの関係</a></li>
                <li><a href="#dry" className="hover:text-brown-500 transition-colors">4. ドライ施術の特徴</a></li>
                <li><a href="#marisa" className="hover:text-brown-500 transition-colors">5. MARISAのヘッドケアメニュー</a></li>
                <li><a href="#headset" className="hover:text-brown-500 transition-colors">6. ヘッドセットとは</a></li>
                <li><a href="#faq" className="hover:text-brown-500 transition-colors">7. よくある質問</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* 1. ヘッドケアとは */}
      <section id="definition" className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="What is Head Care" ja="ヘッドケアとは" lead="頭・首・首筋へのリラクゼーション" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              ヘッドケアとは、頭部・頭皮・首・首筋（後頸部）にかけての筋肉をほぐすリラクゼーション施術です。
              手指を使って頭皮を丁寧にほぐしながら、頭蓋骨の周りについた筋肉の緊張をやわらげることを目的としています。
            </p>
            <p>
              ヘッドスパ（美容院で行うウェット施術）とは異なり、ヘッドケアはドライ（髪を濡らさない）で行うリラクゼーション施術です。
              美容目的ではなく、頭部・首・肩周りの疲れをほぐすケアとして位置づけられています。
            </p>
            <p>
              現代はデジタルデバイスを長時間使用する生活が一般的になり、
              頭部・首・肩の疲れを感じる方が増えています。
              ヘッドケアはそのような「デジタル疲れ」「スマホ首」の方に特に喜ばれている施術です。
            </p>
          </div>
        </div>
      </section>

      {/* 2. アプローチする部位 */}
      <section id="parts" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Target Areas" ja="アプローチする部位" lead="頭部を中心に広範囲をカバー" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              ヘッドケアでアプローチする主な部位は以下の通りです。
            </p>
            <div className="grid gap-3 sm:grid-cols-2 mt-4">
              {[
                { part: '側頭部（こめかみ周辺）', desc: '側頭筋が集まるエリア。噛み合わせや緊張で固まりやすい部位です。' },
                { part: '後頭部', desc: '後頭下筋群が集まる部位。首との接続部で特に緊張しやすい場所です。' },
                { part: '頭頂部', desc: '帽状腱膜（ぼうじょうけんまく）が広がるエリア。頭皮全体の張りに影響します。' },
                { part: '前頭部', desc: '前頭筋が位置するエリア。眉間のシワや目の疲れと関連しやすい部位です。' },
                { part: 'こめかみ・眼周り', desc: '眼の筋肉と連動している部位。眼精疲労感との関連が指摘されています。' },
                { part: '首・後頸部', desc: '僧帽筋・後頸筋群が集まるエリア。頭部への血流に影響しやすい部位です。' },
              ].map((item, i) => (
                <div key={i} className="bg-cream-50 border border-sand-200 p-4">
                  <p className="text-xs font-medium text-stone-800 mb-1">{item.part}</p>
                  <p className="text-xs text-stone-700 leading-loose">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. 眼精疲労との関係 */}
      <section id="eye-fatigue" className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Eye Fatigue" ja="眼精疲労・頭の重さとヘッドケアの関係" lead="目の疲れは頭のケアから" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              現代社会では、多くの方がデジタルデバイスを長時間使用しています。
              パソコン・スマートフォン・タブレットを長時間見続けることで、
              眼の周辺の筋肉だけでなく、頭部・首・肩の筋肉も緊張しやすくなります。
            </p>
            <p>
              眼精疲労（目の疲れ）は、目そのものの疲弊だけでなく、頭部や首の筋肉の緊張とも
              関連している場合があります。後頭部の筋肉が緊張すると、頭への血流が滞りやすくなり、
              頭が重く感じやすくなることがあります。
            </p>
            <p>
              ヘッドケアによって頭部・後頭部・首筋の筋肉をほぐすことで、
              眼精疲労感が軽減しやすくなったというお声を多くいただいています。
              「目の奥が疲れている」「頭が重くてスッキリしない」という方に特におすすめしています。
            </p>
            <p className="text-xs bg-sand-100 border border-sand-200 p-4 leading-loose">
              ※ヘッドケアはリラクゼーション施術であり、眼精疲労の医療的な治療や改善を保証するものではありません。
              眼科的な疾患が疑われる場合は医療機関にご相談ください。
            </p>
          </div>
        </div>
      </section>

      {/* 4. ドライ施術 */}
      <section id="dry" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Dry Treatment" ja="ドライ施術の特徴" lead="髪を濡らさないヘッドケア" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAのヘッドケアはドライ施術です。シャンプーやトリートメントを使用せず、
              乾いた状態で頭皮・頭部・首筋を施術します。
            </p>
            <p>
              ドライ施術の最大のメリットは「髪が濡れない」という点です。
              美容院のヘッドスパと異なり、施術後に髪を乾かす必要がなく、
              仕事帰りや外出の途中でも気軽に受けることができます。
            </p>
            <div className="grid gap-4 sm:grid-cols-2 mt-6">
              <div className="bg-cream-50 border border-sand-200 p-5">
                <p className="font-medium text-stone-800 mb-2 text-sm">ドライヘッドケアの特徴</p>
                <ul className="text-xs text-stone-700 space-y-1.5 leading-loose">
                  <li>・髪が濡れない</li>
                  <li>・施術後すぐ外出できる</li>
                  <li>・化粧品・薬剤不使用</li>
                  <li>・リラクゼーション目的に特化</li>
                </ul>
              </div>
              <div className="bg-cream-50 border border-sand-200 p-5">
                <p className="font-medium text-stone-800 mb-2 text-sm">ヘッドスパとの違い</p>
                <ul className="text-xs text-stone-700 space-y-1.5 leading-loose">
                  <li>・シャンプー・薬剤を使用</li>
                  <li>・美容院で行うウェット施術</li>
                  <li>・頭皮の美容・栄養補給目的</li>
                  <li>・施術後の乾燥が必要</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MARISAのヘッドケアメニュー */}
      <section id="marisa" className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="MARISA Menu" ja="MARISAのヘッドケアメニュー" lead="15分・30分から選べます" />
          <div className="mt-8 space-y-4">
            <div className="flex gap-4 bg-sand-100 border border-sand-200 p-5">
              <span className="font-en text-brown-400 text-sm font-medium shrink-0">01</span>
              <div>
                <p className="text-sm font-medium text-stone-800 mb-1">カウンセリング</p>
                <p className="text-xs text-stone-700 leading-loose">施術前にお悩みと体の状態をお聞きします。どの部位を重点的にほぐしてほしいかをお伝えください。</p>
              </div>
            </div>
            <div className="flex gap-4 bg-sand-100 border border-sand-200 p-5">
              <span className="font-en text-brown-400 text-sm font-medium shrink-0">02</span>
              <div>
                <p className="text-sm font-medium text-stone-800 mb-1">首・肩のほぐし</p>
                <p className="text-xs text-stone-700 leading-loose">肩・首筋からアプローチし、頭頸部全体を整えやすい状態に準備します。</p>
              </div>
            </div>
            <div className="flex gap-4 bg-sand-100 border border-sand-200 p-5">
              <span className="font-en text-brown-400 text-sm font-medium shrink-0">03</span>
              <div>
                <p className="text-sm font-medium text-stone-800 mb-1">頭部・頭皮のケア</p>
                <p className="text-xs text-stone-700 leading-loose">側頭部・後頭部・頭頂部・前頭部をていねいにほぐします。こめかみ・眼周りにもアプローチします。</p>
              </div>
            </div>
            <div className="flex gap-4 bg-sand-100 border border-sand-200 p-5">
              <span className="font-en text-brown-400 text-sm font-medium shrink-0">04</span>
              <div>
                <p className="text-sm font-medium text-stone-800 mb-1">仕上げ</p>
                <p className="text-xs text-stone-700 leading-loose">全体のバランスを確認しながら仕上げます。髪が濡れないのでそのままご帰宅いただけます。</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="bg-sand-100 border border-sand-200 p-5">
                <p className="font-medium text-stone-800 mb-1 text-sm">ヘッドケア 15分</p>
                <p className="text-lg font-light text-brown-500 mb-2">¥2,000</p>
                <p className="text-xs text-stone-700 leading-loose">頭部・頭皮を重点的にケア。ちょっとした頭の疲れをリセットしたいときに。</p>
              </div>
              <div className="bg-sand-100 border border-sand-200 p-5">
                <p className="font-medium text-stone-800 mb-1 text-sm">ヘッドケア 30分</p>
                <p className="text-lg font-light text-brown-500 mb-2">¥3,000</p>
                <p className="text-xs text-stone-700 leading-loose">首・肩からじっくり頭部全体まで。眼精疲労・頭の重さが気になる方におすすめ。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ヘッドセットとは */}
      <section id="headset" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Head Set" ja="ヘッドセットとは" lead="もみほぐし＋ヘッドケアの組み合わせ" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              ヘッドセットとは、もみほぐし（全身ほぐし）とヘッドケアをセットにしたお得なコースです。
              全身の筋肉をほぐしながら、頭部・頭皮・眼周りまで一度にケアできます。
            </p>
            <p>
              特に「肩・首こりがあり、頭も重い」「デスクワークで全身疲れている」という方に人気のコースです。
              もみほぐしで体全体の緊張をほぐした後にヘッドケアを受けることで、
              より深いリラクゼーション感を得やすくなります。
            </p>
            <div className="grid gap-4 sm:grid-cols-3 mt-6">
              {[
                { time: '60分', price: '¥5,400', note: '（もみほぐし30分＋ヘッドケア）' },
                { time: '90分', price: '¥6,700', note: '（もみほぐし60分＋ヘッドケア）' },
                { time: '120分', price: '¥8,700', note: '（もみほぐし90分＋ヘッドケア）' },
              ].map((item, i) => (
                <div key={i} className="bg-cream-50 border border-sand-200 p-4 text-center">
                  <p className="text-sm font-medium text-stone-800 mb-1">{item.time}</p>
                  <p className="text-lg font-light text-brown-500 mb-1">{item.price}</p>
                  <p className="text-xs text-stone-700 leading-loose">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="FAQ" ja="よくある質問" />
          <div className="mt-8 space-y-4">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="border border-sand-200 bg-sand-100 p-6">
                <p className="text-sm font-medium text-stone-800 mb-3 tracking-wide">
                  <span className="font-en text-brown-400 mr-2">Q.</span>{item.name}
                </p>
                <p className="text-sm text-stone-700 leading-loose pl-5">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* まとめ・関連 */}
      <section className="py-12 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-sm text-stone-700 leading-loose mb-6">
            ヘッドケアは、PC疲れ・スマホ首・眼精疲労に悩む現代人のためのリラクゼーション施術です。
            ドライ施術なので仕事帰りでも気軽に受けられ、15分〜受けられるのも魅力です。
          </p>
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: 'ヘッドケアメニュー', href: '/menu/head' },
              { label: 'ヘッドセットメニュー', href: '/menu/set' },
              { label: '眼精疲労のケア', href: '/symptom/eye-fatigue' },
              { label: 'デスクワーク疲れ', href: '/symptom/desk-work' },
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

      {/* 予約CTA */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">ご予約はこちらから</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">夜0時まで営業・当日予約OK・無料駐車場完備。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton href={BMERIT_URL} label="公式サイトで予約する" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
