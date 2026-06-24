import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'もみほぐしで期待できること・体への働きを解説｜MARISA 君津店',
  description: 'もみほぐし・リラクゼーション施術で期待できることを解説。医療的な「効果保証」ではありませんが、多くの方が感じる「すっきり感」「リラックス感」を紹介。',
  keywords: ['もみほぐし 効果', 'マッサージ 期待できること', 'もみほぐし 肩こり 効果', 'もみほぐし リラックス', '君津 もみほぐし 期待'],
  openGraph: {
    title: 'もみほぐしで期待できること・体への働きを解説｜MARISA 君津店',
    description: 'もみほぐしで期待できること・多くの方が感じる変化を解説。すっきり感・リラックス感・体の軽さなどを紹介。',
    locale: 'ja_JP',
    type: 'article',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: `${SITE_URL}/guide/benefits` },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'もみほぐしで期待できること・体への働きを解説',
  description: 'もみほぐし・リラクゼーション施術で期待できることを解説。医療的な「効果保証」ではありませんが、多くの方が感じる「すっきり感」「リラックス感」を紹介。',
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
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/guide/benefits` },
  about: { '@type': 'Thing', name: 'もみほぐし・リラクゼーション施術の体への働き' },
  inLanguage: 'ja',
  keywords: 'もみほぐし 効果, マッサージ 期待できること, もみほぐし 肩こり 効果, もみほぐし リラックス, 君津 もみほぐし 期待',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'もみほぐしで肩こりは治りますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'もみほぐしはリラクゼーション施術であり、医療的な「治療」ではありません。「治る」という表現は適切ではありませんが、施術によって筋肉の緊張をほぐすことで肩の重さや不快感が軽く感じやすくなるというお声を多くいただいています。継続的なケアと合わせてご活用ください。',
      },
    },
    {
      '@type': 'Question',
      name: '効果はすぐに感じられますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '個人差がありますが、多くの方が1回の施術後に「体が軽くなった気がする」「肩の重さがやわらいだ」という感覚を実感されています。慢性的なお悩みには継続的なケアがより変化を感じやすくなります。',
      },
    },
    {
      '@type': 'Question',
      name: 'どのくらいの頻度で通うと体が変わりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '個人差がありますが、月2〜4回程度の定期的なご利用をされているお客様から「以前と比べて体が重くなりにくくなった」「疲れのピークが下がった気がする」というお声をいただくことがあります。体の変化の感じ方は個人によって異なります。',
      },
    },
    {
      '@type': 'Question',
      name: '一回で変化を感じますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '多くの方が1回の施術でも「その日の体が楽になった」という感覚を感じられています。ただし、慢性的な疲れやコリには継続的なケアがより効果を感じやすいとされています。',
      },
    },
    {
      '@type': 'Question',
      name: '長期的に通うとどう変わりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '定期的に通われているお客様からは「体が重くなるスパンが伸びてきた」「施術前と比べてすっきり感が続くようになってきた」というお声をいただくことがあります。ただし、すべての方に同様の変化をお約束するものではありません。',
      },
    },
  ],
}

export default function GuideBenefitsPage() {
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
              { label: 'もみほぐしで期待できること' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Guide</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              もみほぐしで期待できること・体への働き
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              もみほぐしはリラクゼーション施術です。医療的な「効果を保証するもの」ではありませんが、
              多くのお客様が感じている「すっきり感」「リラックス感」「体の軽さ」をご紹介します。
            </p>
            {/* 目次 */}
            <nav className="mt-8 bg-cream-50 border border-sand-200 p-5 max-w-xl">
              <p className="text-xs tracking-widest text-greige-400 uppercase mb-3">Contents</p>
              <ol className="space-y-2 text-xs text-stone-700">
                <li><a href="#premise" className="hover:text-brown-500 transition-colors">1. 前提：医療行為ではありません</a></li>
                <li><a href="#feel" className="hover:text-brown-500 transition-colors">2. 多くの方が感じること</a></li>
                <li><a href="#shoulder" className="hover:text-brown-500 transition-colors">3. 肩こり・腰のつらさへのケア</a></li>
                <li><a href="#eye" className="hover:text-brown-500 transition-colors">4. 眼精疲労・頭の重さへのケア</a></li>
                <li><a href="#leg" className="hover:text-brown-500 transition-colors">5. 足のだるさ・むくみへのケア</a></li>
                <li><a href="#sleep" className="hover:text-brown-500 transition-colors">6. 睡眠の質との関係</a></li>
                <li><a href="#regular" className="hover:text-brown-500 transition-colors">7. 定期利用のお声</a></li>
                <li><a href="#faq" className="hover:text-brown-500 transition-colors">8. よくある質問</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* 1. 前提 */}
      <section id="premise" className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Important Note" ja="前提：リラクゼーション施術です" lead="医療行為との違いを理解した上で" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              もみほぐしは医療行為ではありませんので、「〜が治る」「〜が改善する」という断定的な表現は適切ではありません。
              リラクゼーション目的の施術として、多くのお客様が体感される変化があります。
            </p>
            <p>
              ここでは、実際にご利用いただいたお客様からのお声を参考に、
              もみほぐしで期待しやすいことをご紹介します。
              あくまでも個人差があり、すべての方に同じ変化をお約束するものではありません。
            </p>
            <div className="bg-sand-100 border border-sand-200 p-4 text-xs text-stone-700 leading-loose">
              もみほぐしは「リラクゼーション・日々のメンテナンス」を目的とした施術です。
              医療的な診断・治療が必要な状態には医療機関へのご相談をおすすめします。
            </div>
          </div>
        </div>
      </section>

      {/* 2. 多くの方が感じること */}
      <section id="feel" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="What People Feel" ja="多くの方が施術後に感じること" lead="お客様からのお声より" />
          <div className="mt-8 space-y-4">
            {[
              {
                title: '筋肉の緊張がほぐれる感覚',
                body: '施術によって、固まっていた肩・背中・腰の筋肉がほぐれやすくなります。「肩が軽くなった気がする」「腰のつっぱりが和らいだ感じがする」というお声を多くいただいています。',
              },
              {
                title: '体が軽く感じやすくなる',
                body: '全身の筋肉の緊張がほぐれることで、体全体が軽く感じやすくなります。「来たときと帰るときで体の感覚が全然違う」という感想をいただくことがよくあります。',
              },
              {
                title: '血流が促されやすくなる',
                body: '施術によって筋肉がほぐれると、血液循環が促されやすくなります。「体がポカポカしてきた」「冷えていた手足が温かくなった気がする」というお声もいただいています。',
              },
              {
                title: 'リラックスしやすい状態になる',
                body: '静かな空間で体を委ねる時間は、日常のストレスや緊張から一時的に離れる貴重な時間です。施術後に「気持ちが軽くなった」「リフレッシュできた」という感想をいただくことも多いです。',
              },
            ].map((item, i) => (
              <div key={i} className="bg-cream-50 border border-sand-200 p-6">
                <p className="font-medium text-stone-800 mb-2 tracking-wide">{item.title}</p>
                <p className="text-sm text-stone-700 leading-loose">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 肩こり・腰 */}
      <section id="shoulder" className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Stiff Shoulder" ja="肩こり・腰のつらさへのケア" lead="日常のほぐしとして" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              肩こりや腰のつらさは、長時間の同じ姿勢・デスクワーク・スマートフォン操作などで
              筋肉が緊張し続けることで起こりやすくなります。
            </p>
            <p>
              もみほぐしでは、肩・背中・腰・首の筋肉に直接アプローチし、
              筋肉の緊張をほぐすことを目指します。
              施術後に「肩の重さがやわらいだ」「腰が楽になった感じがする」というお声をいただくことがあります。
            </p>
            <p>
              「治す」という表現は使えませんが、定期的なほぐしによって
              「慢性化する前にケアする」という日常のメンテナンスとして活用されている方が多いです。
            </p>
          </div>
        </div>
      </section>

      {/* 4. 眼精疲労 */}
      <section id="eye" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Eye Fatigue" ja="眼精疲労・頭の重さへのケア" lead="ヘッドケアとの組み合わせで" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              眼精疲労（目の疲れ）は、目そのものの疲弊だけでなく、
              頭部や首の筋肉の緊張とも関連している場合があります。
            </p>
            <p>
              もみほぐしで肩・首の筋肉をほぐし、さらにヘッドケアで頭部・頭皮・眼周りにアプローチすることで、
              眼精疲労感が軽くなりやすくなるというお声をいただくことがあります。
            </p>
            <p>
              「パソコン作業後に頭が重い」「目の奥の疲れが取れない」という方には、
              もみほぐし＋ヘッドケアのセットコース（ヘッドセット）がおすすめです。
            </p>
          </div>
        </div>
      </section>

      {/* 5. 足のだるさ */}
      <section id="leg" className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Leg Fatigue" ja="足のだるさ・むくみへのケア" lead="足つぼセットで集中ケア" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              立ち仕事・長時間の歩行・座り仕事などで、足のだるさ・むくみを感じる方は多いです。
              特に夕方以降に足が重くなりやすい方に、足つぼを組み合わせたケアはご好評です。
            </p>
            <p>
              もみほぐしで全身をほぐしながら、足裏・ふくらはぎへのアプローチを加えることで、
              足全体が軽く感じやすくなるというお声をいただいています。
            </p>
          </div>
        </div>
      </section>

      {/* 6. 睡眠 */}
      <section id="sleep" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Sleep" ja="睡眠の質との関係" lead="リラックスした状態で眠りやすく" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              体の緊張がほぐれてリラックスしやすい状態になることで、
              その夜の眠りにつきやすくなったというお声をいただくことがあります。
              特に夕方・夜の施術後にこの変化を感じやすい方が多いようです。
            </p>
            <p>
              ただし、睡眠の質には様々な要因が関係しており、
              施術によって睡眠が改善することを保証するものではありません。
              個人差があり、すべての方に同様の変化をお約束するものではありません。
            </p>
          </div>
        </div>
      </section>

      {/* 7. 定期利用の声 */}
      <section id="regular" className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Voices" ja="定期利用のお客様の声" lead="継続してご利用いただいている方から" />
          <div className="mt-8 space-y-4">
            <div className="border-l-2 border-brown-300 pl-5 py-2">
              <p className="text-sm text-stone-700 leading-loose">「月に2回通っています。以前は慢性的に肩が重かったのですが、通い始めてから体全体の重だるさが軽く感じやすくなりました。」（40代・女性）</p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5 py-2">
              <p className="text-sm text-stone-700 leading-loose">「仕事帰りに月1回通っています。施術後はよく眠れる気がします。疲れの蓄積の感じ方が変わってきたような感覚があります。」（30代・男性）</p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5 py-2">
              <p className="text-sm text-stone-700 leading-loose">「デスクワークで肩と首が固まりがちでしたが、2週間に1回通うようにしてから、ひどくなる前にケアできている感じがします。」（50代・女性）</p>
            </div>
          </div>
          <p className="mt-6 text-xs text-stone-700 leading-loose bg-sand-100 border border-sand-200 p-4">
            ※上記はお客様個人の体感です。同様の変化を全ての方にお約束するものではありません。
            もみほぐしはリラクゼーション施術であり、医療行為ではありません。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="FAQ" ja="よくある質問" />
          <div className="mt-8 space-y-4">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="border border-sand-200 bg-cream-50 p-6">
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
      <section className="py-12 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-sm text-stone-700 leading-loose mb-6">
            もみほぐしは「すっきり感」「体の軽さ」「リラックス感」を目指すリラクゼーション施術です。
            医療的な効果保証はできませんが、多くの方が定期的なケアとして活用しています。
          </p>
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: 'メニュー・料金', href: '/menu' },
              { label: 'もみほぐしの頻度', href: '/guide/frequency' },
              { label: 'もみほぐしとは', href: '/guide/what-is-momihogushi' },
              { label: '施術後の過ごし方', href: '/guide/after-care' },
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
