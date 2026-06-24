import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'もみほぐしに通う頻度の目安は？定期メンテナンスのすすめ｜MARISA 君津店',
  description: 'もみほぐし・マッサージに通う頻度の目安を解説。週1回・月2回・月1回など、疲れのレベルや目的別の目安と、定期メンテナンスのメリットを紹介。',
  keywords: ['もみほぐし 頻度', 'マッサージ 通う 頻度', 'もみほぐし 月1回', 'マッサージ 週1回', '定期メンテナンス もみほぐし', '君津 マッサージ 通う'],
  openGraph: {
    title: 'もみほぐしに通う頻度の目安は？定期メンテナンスのすすめ｜MARISA 君津店',
    description: 'もみほぐしに通う頻度の目安を目的別に解説。週1回・月2回・月1回のそれぞれのメリットと定期メンテナンスの考え方。',
    locale: 'ja_JP',
    type: 'article',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: `${SITE_URL}/guide/frequency` },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'もみほぐしに通う頻度の目安は？定期メンテナンスのすすめ',
  description: 'もみほぐし・マッサージに通う頻度の目安を解説。週1回・月2回・月1回など、疲れのレベルや目的別の目安と、定期メンテナンスのメリットを紹介。',
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
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/guide/frequency` },
  about: { '@type': 'Thing', name: 'もみほぐしの通院頻度・定期メンテナンス' },
  inLanguage: 'ja',
  keywords: 'もみほぐし 頻度, マッサージ 通う 頻度, もみほぐし 月1回, マッサージ 週1回, 定期メンテナンス もみほぐし, 君津 マッサージ 通う',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'もみほぐしは何回くらい通うといいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'お悩みや目的によって異なりますが、慢性的な肩こりや腰のつらさがある方は2週間に1回、体のメンテナンス目的の方は月1回が目安です。忙しい方は体がつらいと感じたときに随時ご利用いただくスタイルでも十分です。',
      },
    },
    {
      '@type': 'Question',
      name: '週1回は通いすぎですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '週1回の利用は通いすぎではありませんが、毎回同じような強さの施術が続く場合は筋肉が刺激に慣れてきます。スタッフにその都度体の状態を伝えながら、必要に応じて施術内容を調整することをおすすめします。',
      },
    },
    {
      '@type': 'Question',
      name: '月1回でも意味がありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、月1回でも十分に意味があります。「定期的なメンテナンス」として月1回通うことで、疲れの蓄積が慢性化しにくくなります。定期的に体の状態をリセットすることで、日常のパフォーマンスを維持しやすくなります。',
      },
    },
    {
      '@type': 'Question',
      name: '定期的に通うとどう変わりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '定期的にご利用いただくお客様からは「以前と比べて体が重くなりにくくなった」「疲れのピークが下がった気がする」というお声をいただくことがあります。また、定期的に通うことでスタッフもお客様の体の癖を把握しやすくなり、よりきめ細かな対応ができるようになります。',
      },
    },
    {
      '@type': 'Question',
      name: '疲れが溜まってから行くのとどちらがいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '疲れが溜まる前に定期的に通う方が、長い目で見てより体の状態を維持しやすいとされています。疲れが慢性化してからでは、一度の施術では物足りなく感じることもあります。「つらくなる前に整えておく」という考え方がおすすめです。',
      },
    },
    {
      '@type': 'Question',
      name: '自分のペースで通えますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、定期的に通う義務はありません。体の状態・生活リズム・ご都合に合わせて自由にご利用いただけます。当日予約にも対応していますので、思い立ったときにご予約いただくスタイルでも大丈夫です。',
      },
    },
  ],
}

export default function GuideFrequencyPage() {
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
              { label: 'もみほぐしの頻度' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Guide</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              もみほぐしに通う頻度の目安は？定期メンテナンスのすすめ
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「もみほぐしは何回通えばいいの？」「週1は通いすぎ？」という疑問にお答えします。
              目的・疲れのレベル・ライフスタイル別の頻度の目安を詳しく解説します。
            </p>
            {/* 目次 */}
            <nav className="mt-8 bg-cream-50 border border-sand-200 p-5 max-w-xl">
              <p className="text-xs tracking-widest text-greige-400 uppercase mb-3">Contents</p>
              <ol className="space-y-2 text-xs text-stone-700">
                <li><a href="#basics" className="hover:text-brown-500 transition-colors">1. 頻度の基本的な考え方</a></li>
                <li><a href="#weekly" className="hover:text-brown-500 transition-colors">2. 週1回がおすすめな方</a></li>
                <li><a href="#biweekly" className="hover:text-brown-500 transition-colors">3. 月2〜3回がおすすめな方</a></li>
                <li><a href="#monthly" className="hover:text-brown-500 transition-colors">4. 月1回から始める方</a></li>
                <li><a href="#meaning" className="hover:text-brown-500 transition-colors">5. 定期的に通う意義</a></li>
                <li><a href="#lifestyle" className="hover:text-brown-500 transition-colors">6. 生活習慣との組み合わせ</a></li>
                <li><a href="#faq" className="hover:text-brown-500 transition-colors">7. よくある質問</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* 1. 基本的な考え方 */}
      <section id="basics" className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Frequency Guide" ja="頻度の基本的な考え方" lead="目的によって変わります" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              もみほぐしに通う頻度に「正解」はありません。
              お客様の体の状態・お悩みの程度・生活スタイルによって最適な頻度は異なります。
              大切なのは「体がつらくなってから行く」よりも「つらくなる前に整えておく」という考え方です。
            </p>
            <p>
              筋肉の緊張は一度ほぐれても、同じ生活習慣を続けていると再び固まりやすくなります。
              疲れのレベル・目的・スケジュールに合わせて、自分なりのペースを見つけることが大切です。
            </p>
            <div className="bg-sand-100 border border-sand-200 p-5 mt-4">
              <p className="text-xs font-medium text-stone-800 mb-2">目的別の頻度目安（参考）</p>
              <ul className="text-xs text-stone-700 space-y-1.5 leading-loose">
                <li>・慢性的な疲れ・コリをほぐしたい → 週1〜2週間に1回</li>
                <li>・日常のメンテナンス → 月2〜3回</li>
                <li>・まずお試しから → 月1回</li>
                <li>・スポーツ後・繁忙期 → 必要に応じて随時</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 週1回 */}
      <section id="weekly" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Weekly" ja="週1回がおすすめな方" lead="肉体労働・慢性的な疲れに" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              週1回の利用がおすすめな方は、体を使う仕事（肉体労働・立ち仕事・介護職など）の方や、
              慢性的な肩こり・腰のつらさが毎週繰り返されている方です。
            </p>
            <p>
              体への負荷が大きい生活を送っている方は、疲れが溜まるスピードが速いため、
              週に1回定期的にほぐすことで蓄積を防ぎやすくなります。
            </p>
            <p>
              ただし、極端に短い間隔（毎日など）での施術は、
              筋肉への過剰な刺激になる場合があります。
              週1回ペースが合わないと感じた場合はスタッフにご相談ください。
            </p>
          </div>
        </div>
      </section>

      {/* 3. 月2〜3回 */}
      <section id="biweekly" className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Biweekly" ja="月2〜3回がおすすめな方" lead="デスクワーク・全身疲れに" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              デスクワーカー・在宅勤務の方・育児中の方など、
              体はそこまで激しく使わないが疲れが蓄積しやすい生活をしている方には、
              2週間に1回〜月3回程度が一般的な目安です。
            </p>
            <p>
              「1回ほぐれても2週間もすると元に戻ってしまう」という感覚がある方は、
              そのサイクルに合わせて施術を受けることで、慢性化を防ぎやすくなります。
            </p>
            <div className="bg-sand-100 border border-sand-200 p-5 mt-4">
              <p className="text-xs font-medium text-stone-800 mb-2">こんな方に月2〜3回ペースが向いています</p>
              <ul className="text-xs text-stone-700 space-y-1.5 leading-loose">
                <li>・デスクワーク8時間以上が続いている</li>
                <li>・肩・首のこりが慢性化している</li>
                <li>・眼精疲労・頭の重さが繰り返される</li>
                <li>・育児・家事で全身疲れが溜まりやすい</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 月1回 */}
      <section id="monthly" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Monthly" ja="月1回から始める方" lead="まず試したい方に最適" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              「まずもみほぐしを試してみたい」「どのくらいの効果があるか体感したい」という方には、
              まず月1回から始めることをおすすめします。
            </p>
            <p>
              月1回を「自分へのご褒美・月次メンテナンス」として習慣化しているお客様も多くいらっしゃいます。
              定期的に体をリセットすることで、日常のコンディションを整えやすくなります。
            </p>
            <p>
              月1回でも、継続することで体のクセや疲れやすい部位が見えてきます。
              スタッフとのコミュニケーションを重ねることで、より最適な施術が受けやすくなります。
            </p>
          </div>
        </div>
      </section>

      {/* 5. 定期的に通う意義 */}
      <section id="meaning" className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Why Regular" ja="定期的に通うことの意義" lead="長期的な体のメンテナンスとして" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              定期的にもみほぐしをご利用いただくことで、体の変化に気づきやすくなります。
              「以前は施術後すぐに元に戻っていたが、だんだん体が軽い状態が続きやすくなった」
              というお声をいただくことがあります。
            </p>
            <p>
              また、定期的にご利用いただくことで、スタッフもお客様の体の特徴を把握しやすくなります。
              「右肩が固まりやすい」「腰の左側が緊張しやすい」といった体のクセを踏まえた
              施術ができるようになり、より細かい対応が可能になります。
            </p>
            <p>
              「疲れが溜まってから行く」よりも「疲れが溜まる前に整えておく」というアプローチの方が、
              体のコンディションを維持しやすいという考え方は、
              スポーツ選手のコンディショニングと同様の考え方です。
            </p>
          </div>
        </div>
      </section>

      {/* 6. 生活習慣との組み合わせ */}
      <section id="lifestyle" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Lifestyle" ja="生活習慣と組み合わせるとより良い" lead="日常のセルフケアも大切に" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              もみほぐしはリラクゼーション施術であり、生活習慣を根本から変えるものではありません。
              施術とあわせて、以下のような日常のセルフケアを組み合わせることで、
              体のコンディションを整えやすくなります。
            </p>
            <div className="grid gap-3 sm:grid-cols-2 mt-4">
              {[
                { title: '姿勢の見直し', body: '長時間同じ姿勢を続けないよう、1時間に1回は席を立つことをおすすめします。' },
                { title: '簡単なストレッチ', body: '肩・首・腰の簡単なストレッチを日常に取り入れることで、筋肉の緊張を溜めにくくなります。' },
                { title: '睡眠の質', body: '十分な睡眠と良い寝具の選択は、体の回復力を高める基本です。' },
                { title: '水分補給', body: '筋肉の緊張緩和には、日常的な水分補給も大切な要素です。' },
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
            もみほぐしの頻度は目的・体の状態・生活スタイルによって異なります。
            「疲れが溜まる前に整えておく」という定期メンテナンスの考え方が、
            長い目で見た体のコンディション維持につながります。
          </p>
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: 'メニュー・料金', href: '/menu' },
              { label: '定期メンテナンス', href: '/scene/regular' },
              { label: 'コースの選び方', href: '/guide/course-selection' },
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
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
