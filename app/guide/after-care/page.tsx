import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'もみほぐし施術後の過ごし方・注意点ガイド｜MARISA 君津店',
  description: 'もみほぐし・マッサージ施術後の過ごし方と注意点を解説。水分補給・入浴・運動・食事など、施術後にすべきこと・避けるべきことをわかりやすく紹介。',
  keywords: ['もみほぐし 後 過ごし方', 'マッサージ 後 注意点', 'もみほぐし 後 お風呂', 'もみほぐし 後 運動', 'もみほぐし 後 だるい'],
  openGraph: {
    title: 'もみほぐし施術後の過ごし方・注意点ガイド｜MARISA 君津店',
    description: 'もみほぐし施術後の過ごし方・アフターケアを解説。水分補給・入浴・運動・だるさへの対処法まで詳しく紹介。',
    locale: 'ja_JP',
    type: 'article',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: `${SITE_URL}/guide/after-care` },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'もみほぐし施術後の過ごし方・注意点ガイド',
  description: 'もみほぐし・マッサージ施術後の過ごし方と注意点を解説。水分補給・入浴・運動・食事など、施術後にすべきこと・避けるべきことをわかりやすく紹介。',
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
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/guide/after-care` },
  about: { '@type': 'Thing', name: 'もみほぐし・マッサージ施術後のケア' },
  inLanguage: 'ja',
  keywords: 'もみほぐし 後 過ごし方, マッサージ 後 注意点, もみほぐし 後 お風呂, もみほぐし 後 運動, もみほぐし 後 だるい',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '施術後すぐにお風呂に入っても大丈夫ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '施術直後の長時間・高温の入浴は控えることをおすすめします。施術後は血流が促進されやすい状態のため、長時間の高温浴は体への負担となる場合があります。ぬるめのシャワーか、施術から数時間後の入浴が安心です。',
      },
    },
    {
      '@type': 'Question',
      name: '施術後に運動してもいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '施術直後の激しい運動はお控えいただくことをおすすめします。施術によって筋肉がほぐれた状態は普段より刺激が伝わりやすいです。軽いウォーキング程度は問題ありませんが、激しいスポーツや筋トレは施術から数時間〜翌日以降が安心です。',
      },
    },
    {
      '@type': 'Question',
      name: '施術後にだるくなるのはなぜですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '施術後に一時的にだるさや「もみ返し」と呼ばれる感覚が出ることがあります。これは施術によって筋肉が刺激された際の自然な反応の場合があります。通常は1〜2日で落ち着きますが、強い場合や長引く場合はスタッフにご相談ください。',
      },
    },
    {
      '@type': 'Question',
      name: '施術後に水を飲むのはなぜですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'もみほぐしによって筋肉が刺激されると、老廃物が動きやすくなるとされています。水分を補給することでその排出をスムーズにするとされています。施術後はコップ1〜2杯の水やお茶を飲むことをおすすめします。',
      },
    },
    {
      '@type': 'Question',
      name: '施術後に頭痛がする場合はどうすればいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '施術後の頭痛は、施術前の水分不足・血流の変化・圧の強さなどが原因になる場合があります。安静にし、水分を補給してください。症状が強い・長引く場合は医療機関にご相談ください。次回の施術時にスタッフへお伝えいただければ、施術方法を調整します。',
      },
    },
    {
      '@type': 'Question',
      name: '車の運転はすぐにできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '施術後は眠気やリラックス感が出ることがあります。施術後すぐの運転は注意が必要な場合があります。眠気を感じる場合は少し休んでから運転することをおすすめします。',
      },
    },
  ],
}

export default function GuideAfterCarePage() {
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
              { label: '施術後の過ごし方' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Guide</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              もみほぐし施術後の過ごし方・注意点ガイド
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              施術後の過ごし方次第で、もみほぐしのリラクゼーション感が長持ちしやすくなります。
              水分補給・入浴・運動・食事・だるさへの対処法まで詳しく解説します。
            </p>
            {/* 目次 */}
            <nav className="mt-8 bg-cream-50 border border-sand-200 p-5 max-w-xl">
              <p className="text-xs tracking-widest text-greige-400 uppercase mb-3">Contents</p>
              <ol className="space-y-2 text-xs text-stone-700">
                <li><a href="#water" className="hover:text-brown-500 transition-colors">1. 水分補給をする理由</a></li>
                <li><a href="#bath" className="hover:text-brown-500 transition-colors">2. 施術後のお風呂</a></li>
                <li><a href="#exercise" className="hover:text-brown-500 transition-colors">3. 施術後の運動</a></li>
                <li><a href="#food" className="hover:text-brown-500 transition-colors">4. 施術後の食事・飲酒</a></li>
                <li><a href="#dull" className="hover:text-brown-500 transition-colors">5. 施術後のだるさ（もみ返し）</a></li>
                <li><a href="#lasting" className="hover:text-brown-500 transition-colors">6. 効果を長持ちさせる習慣</a></li>
                <li><a href="#faq" className="hover:text-brown-500 transition-colors">7. よくある質問</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* 1. 水分補給 */}
      <section id="water" className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Hydration" ja="水分補給をする理由" lead="施術後すぐに行いましょう" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              施術が終わったら、まず水分を補給することをおすすめします。
              もみほぐしによって筋肉が刺激され、老廃物が動きやすくなるとされており、
              水分補給がその排出をスムーズにするとされています。
            </p>
            <p>
              お帰りの際はお水やお茶をお飲みいただくと良いでしょう。
              カフェインの多い飲み物より、水・麦茶・スポーツドリンクなどが向いています。
              施術後1〜2時間は意識的に水分補給を心がけることをおすすめします。
            </p>
            <p>
              施術後の水分補給はアルコールで代用しないようにしてください。
              アルコールは施術後の体への負担となる場合があります。
            </p>
          </div>
        </div>
      </section>

      {/* 2. お風呂 */}
      <section id="bath" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Bath" ja="施術後のお風呂" lead="入浴のタイミングと注意点" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              施術直後の長時間・高温の入浴は控えることをおすすめします。
              施術後は血流が促進されやすい状態のため、
              長時間の高温浴は体への負担となる場合があります。
            </p>
            <div className="grid gap-4 sm:grid-cols-2 mt-4">
              <div className="bg-cream-50 border border-sand-200 p-5">
                <p className="text-sm font-medium text-stone-800 mb-2">おすすめの入浴方法</p>
                <ul className="text-xs text-stone-700 space-y-1.5 leading-loose">
                  <li>・ぬるめのシャワー（38〜40℃程度）</li>
                  <li>・施術から2〜3時間後の入浴</li>
                  <li>・短時間（15〜20分程度）の入浴</li>
                </ul>
              </div>
              <div className="bg-cream-50 border border-sand-200 p-5">
                <p className="text-sm font-medium text-stone-800 mb-2">避けた方が良い入浴</p>
                <ul className="text-xs text-stone-700 space-y-1.5 leading-loose">
                  <li>・施術直後の高温浴（42℃以上）</li>
                  <li>・長時間の半身浴・長湯</li>
                  <li>・サウナ・岩盤浴（施術当日）</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 運動 */}
      <section id="exercise" className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Exercise" ja="施術後の運動" lead="激しい運動は避けましょう" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              施術直後の激しい運動はお控えいただくことをおすすめします。
              施術によって筋肉がほぐれた状態は、普段より筋肉への刺激が伝わりやすい状態です。
              この状態で激しい運動を行うと、筋肉への過剰な負担になりやすいです。
            </p>
            <div className="space-y-3 mt-4">
              <div className="bg-sand-100 border border-sand-200 p-4">
                <p className="text-xs font-medium text-stone-800 mb-1">問題ない運動</p>
                <p className="text-xs text-stone-700 leading-loose">軽いウォーキング、ゆっくりした移動、日常的な動作</p>
              </div>
              <div className="bg-sand-100 border border-sand-200 p-4">
                <p className="text-xs font-medium text-stone-800 mb-1">翌日以降が安心な運動</p>
                <p className="text-xs text-stone-700 leading-loose">激しいスポーツ、筋トレ、ランニング、水泳など体を大きく動かす運動</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 食事・飲酒 */}
      <section id="food" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Food & Alcohol" ja="施術後の食事・飲酒" lead="過度な飲食を控えましょう" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              施術後の食事は、通常通りお召し上がりいただいて問題ありません。
              ただし、施術直後の過度な飲食は体への負担となる場合があります。
            </p>
            <p>
              特に注意が必要なのが飲酒です。
              施術後のアルコールは体への負担となる場合があります。
              施術後すぐの飲酒や大量摂取はお控えいただくことをおすすめします。
              少なくとも2〜3時間は時間を空けることをお勧めします。
            </p>
            <p>
              施術前の食事についても、直前の大量の食事は避けた方が施術を受けやすくなります。
              腹八分目程度を目安にしてください。
            </p>
          </div>
        </div>
      </section>

      {/* 5. だるさ */}
      <section id="dull" className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="After Effect" ja="施術後のだるさ（もみ返し）" lead="一時的なものとして捉えましょう" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              施術後、翌日に筋肉痛のような感覚（いわゆる「もみ返し」）が出ることがあります。
              これは施術によって筋肉が強く刺激された場合に起こることがあります。
              特に久しぶりの施術の後や、強い圧での施術後に出やすいとされています。
            </p>
            <p>
              もみ返しが出た場合の過ごし方：
            </p>
            <div className="space-y-3 mt-2">
              {[
                { title: '無理せず安静に', body: '激しい運動は避け、ゆっくり休みましょう。' },
                { title: '軽いストレッチや温め', body: '血流を促すことで回復しやすくなります。ただし激しいストレッチは避けてください。' },
                { title: '水分補給', body: '老廃物の排出を促すために、水分をこまめに補給しましょう。' },
              ].map((item, i) => (
                <div key={i} className="bg-sand-100 border border-sand-200 p-4">
                  <p className="text-xs font-medium text-stone-800 mb-1">{item.title}</p>
                  <p className="text-xs text-stone-700 leading-loose">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-4">
              もみ返しは通常1〜2日程度で自然に落ち着きます。
              症状が強い場合や数日続く場合は、次回の施術時にスタッフへお伝えください。
              施術の強さを調整します。
            </p>
          </div>
        </div>
      </section>

      {/* 6. 効果を長持ちさせる習慣 */}
      <section id="lasting" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Keep It Lasting" ja="すっきり感を長持ちさせる生活習慣" lead="日常のセルフケアと組み合わせて" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              施術のすっきり感をより長持ちさせるために、
              日常生活でできることを組み合わせることをおすすめします。
            </p>
            <div className="grid gap-3 sm:grid-cols-2 mt-4">
              {[
                { title: '姿勢の改善', body: 'デスクワーク中の猫背・前のめりを意識的に修正することで、首・肩の緊張が溜まりにくくなります。' },
                { title: '定期的なストレッチ', body: '肩・首・腰の簡単なストレッチを毎日5〜10分行うだけでも、筋肉の緊張を溜めにくくなります。' },
                { title: '睡眠の質', body: '枕の高さや寝具の見直しで、睡眠中の首・肩への負担を軽減しやすくなります。' },
                { title: '定期的な施術', body: '一度ほぐれても生活習慣が変わらなければ再び固まりやすくなります。定期的なメンテナンスが効果的です。' },
              ].map((item, i) => (
                <div key={i} className="bg-cream-50 border border-sand-200 p-4">
                  <p className="text-xs font-medium text-stone-800 mb-1">{item.title}</p>
                  <p className="text-xs text-stone-700 leading-loose">{item.body}</p>
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
            施術後の水分補給・休養・適切な入浴が、もみほぐしのすっきり感を長持ちさせるポイントです。
            定期的な施術と日常のセルフケアを組み合わせて、体のコンディションを維持しましょう。
          </p>
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: 'はじめての方へ', href: '/first' },
              { label: 'もみほぐしの頻度', href: '/guide/frequency' },
              { label: '期待できること', href: '/guide/benefits' },
              { label: 'メニュー・料金', href: '/menu' },
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
