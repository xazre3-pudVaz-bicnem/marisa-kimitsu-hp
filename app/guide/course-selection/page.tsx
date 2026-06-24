import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'もみほぐしのコース・時間の選び方ガイド｜MARISA 君津店',
  description: 'もみほぐしの時間コースの選び方を解説。45分・60分・90分・120分の違い、初めての方向けのコース選び方、目的別おすすめをわかりやすく紹介。',
  keywords: ['もみほぐし コース 選び方', 'もみほぐし 何分 おすすめ', 'マッサージ 時間 選び方', '60分 90分 違い', '君津 もみほぐし コース'],
  openGraph: {
    title: 'もみほぐしのコース・時間の選び方ガイド｜MARISA 君津店',
    description: '45分・60分・90分・120分の違いと選び方。初めての方向けおすすめ・セットコースの選び方を解説。',
    locale: 'ja_JP',
    type: 'article',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: `${SITE_URL}/guide/course-selection` },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'もみほぐしのコース・時間の選び方ガイド',
  description: 'もみほぐしの時間コースの選び方を解説。45分・60分・90分・120分の違い、初めての方向けのコース選び方、目的別おすすめをわかりやすく紹介。',
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
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/guide/course-selection` },
  about: { '@type': 'Thing', name: 'もみほぐしのコース・時間選択' },
  inLanguage: 'ja',
  keywords: 'もみほぐし コース 選び方, もみほぐし 何分 おすすめ, マッサージ 時間 選び方, 60分 90分 違い, 君津 もみほぐし コース',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '初めてのコース選びで迷ったら何分がいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '初めての方には60分コース（70分計）をおすすめしています。全身をバランスよくケアできる時間で、施術の流れや自分の体の状態を把握するのに最適です。物足りなければ次回から90分に変更することも簡単です。',
      },
    },
    {
      '@type': 'Question',
      name: '60分と90分の違いは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '60分コース（70分計）は全身をひと通りバランスよくほぐすコースです。90分コース（100分計）はより時間をかけて各部位をじっくりほぐせます。特に気になる部位が多い方・深い疲れをリセットしたい方には90分がおすすめです。',
      },
    },
    {
      '@type': 'Question',
      name: '特定の部位だけをほぐしてもらえますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、施術前のカウンセリングで「肩・首だけを重点的に」「腰と脚を中心に」などご希望をお伝えください。時間に合わせてプランを調整します。',
      },
    },
    {
      '@type': 'Question',
      name: 'セットコースとは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'セットコースはもみほぐし（全身ほぐし）にヘッドケアまたは足つぼを組み合わせたコースです。全身ほぐしにプラスして特定部位を集中ケアできるため、より深いリラクゼーション感を得やすくなります。',
      },
    },
    {
      '@type': 'Question',
      name: '当日コース変更はできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'スタッフにご相談ください。ご希望に合わせて可能な範囲で対応します。予約時のコースからの変更は、空き状況によって対応できない場合もあります。',
      },
    },
  ],
}

export default function GuideCourseSelectionPage() {
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
              { label: 'コースの選び方' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Guide</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              もみほぐしコース・時間の選び方ガイド
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              45分・60分・90分・120分——それぞれの違いと、ヘッドセット・足つぼセットの選び方を解説します。
              初めての方から定期利用の方まで、自分に合ったコースを見つけるためのガイドです。
            </p>
            {/* 目次 */}
            <nav className="mt-8 bg-cream-50 border border-sand-200 p-5 max-w-xl">
              <p className="text-xs tracking-widest text-greige-400 uppercase mb-3">Contents</p>
              <ol className="space-y-2 text-xs text-stone-700">
                <li><a href="#basics" className="hover:text-brown-500 transition-colors">1. 時間コースの考え方</a></li>
                <li><a href="#45min" className="hover:text-brown-500 transition-colors">2. 45分コース</a></li>
                <li><a href="#60min" className="hover:text-brown-500 transition-colors">3. 60分コース（定番）</a></li>
                <li><a href="#90min" className="hover:text-brown-500 transition-colors">4. 90分コース</a></li>
                <li><a href="#120min" className="hover:text-brown-500 transition-colors">5. 120分コース</a></li>
                <li><a href="#set" className="hover:text-brown-500 transition-colors">6. セットコースの選び方</a></li>
                <li><a href="#first" className="hover:text-brown-500 transition-colors">7. 初めての方へのおすすめ</a></li>
                <li><a href="#faq" className="hover:text-brown-500 transition-colors">8. よくある質問</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* 1. 基本的な考え方 */}
      <section id="basics" className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="How to Choose" ja="時間コースの考え方" lead="目的と体の状態に合わせて" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              もみほぐしのコース選びで最も重要なのは「施術時間」です。
              時間が短すぎると「全然ほぐれなかった」と感じることがあり、
              長すぎると「疲れてしまった」と感じることもあります。
            </p>
            <p>
              基本的には「どの部位をほぐしたいか」「どのくらいじっくりケアしたいか」によって選ぶのが良いでしょう。
              初めての方は60分から始め、物足りなければ次回から長くするというのが定番の選び方です。
            </p>
          </div>
        </div>
      </section>

      {/* 2〜5: 各コース */}
      <section id="45min" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="45 min" ja="45分コース" lead="特定の部位を集中ケア" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <div className="bg-cream-50 border border-sand-200 p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="font-medium text-stone-800 tracking-wide">45分コース</p>
                <span className="text-sm text-brown-500 font-en">¥3,900</span>
              </div>
              <p className="leading-loose mb-3">
                短時間で気になる部位を重点的にケアしたい方に向いています。
                時間があまり取れないが体のケアをしたい方、
                特定の部位（肩・腰など）を集中してほぐしたい方に適しています。
              </p>
              <p className="text-xs bg-sand-100 border border-sand-200 p-3 leading-loose">
                向いている方：時間が限られている方、特定部位集中ケアをしたい方、
                会社の昼休み・仕事帰りに短時間で利用したい方
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="60min" className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="60 min" ja="60分コース（70分計）" lead="最も人気・バランスの良い定番コース" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <div className="bg-sand-100 border border-sand-200 p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="font-medium text-stone-800 tracking-wide">60分コース（カウンセリング含め70分計）</p>
                <span className="text-sm text-brown-500 font-en">¥4,500</span>
              </div>
              <p className="leading-loose mb-3">
                MARISAで最も人気の定番コースです。
                全身をひと通りバランスよくほぐすことができる時間で、
                背中・腰・肩・首・脚まで対応できます。
                初めての方にも最もおすすめのコースです。
              </p>
              <p className="text-xs bg-cream-50 border border-sand-200 p-3 leading-loose">
                向いている方：初めての方、全身バランスよくほぐしたい方、
                週1〜2回の定期利用に
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="90min" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="90 min" ja="90分コース（100分計）" lead="じっくり全身をほぐしたい方に" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <div className="bg-cream-50 border border-sand-200 p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="font-medium text-stone-800 tracking-wide">90分コース（カウンセリング含め100分計）</p>
                <span className="text-sm text-brown-500 font-en">¥6,400</span>
              </div>
              <p className="leading-loose mb-3">
                全身をじっくりとほぐしたい方に最適なコースです。
                背中・腰・肩・首・脚・腕など全身をゆったりとケアできます。
                週末のリフレッシュや長期的な疲れを一気にリセットしたい方に人気です。
              </p>
              <p className="text-xs bg-sand-100 border border-sand-200 p-3 leading-loose">
                向いている方：長期間の疲れをリセットしたい方、週末にゆっくり通いたい方、
                全身の疲れが慢性化している方
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="120min" className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="120 min" ja="120分コース" lead="特別なご褒美・深い疲れに" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <div className="bg-sand-100 border border-sand-200 p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="font-medium text-stone-800 tracking-wide">120分コース</p>
                <span className="text-sm text-brown-500 font-en">¥8,400</span>
              </div>
              <p className="leading-loose mb-3">
                最も長い時間でじっくりほぐしたい方のための特別コースです。
                繁忙期明け・旅行後・運動後など、体に大きな疲れが蓄積した状態に特におすすめです。
                自分へのご褒美・記念日利用にもご好評です。
              </p>
              <p className="text-xs bg-cream-50 border border-sand-200 p-3 leading-loose">
                向いている方：仕事の繁忙期後・長距離旅行後、
                「全身を2時間かけてほぐしたい」という方、
                体への長期蓄積をしっかりリセットしたい方
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. セットコース */}
      <section id="set" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Set Courses" ja="セットコースの選び方" lead="ヘッドセット vs 足つぼセット" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              セットコースはもみほぐしに加え、頭部ケアまたは足つぼをプラスしたお得なメニューです。
              どちらを選ぶかは、気になる部位によって決めましょう。
            </p>
            <div className="grid gap-4 sm:grid-cols-2 mt-4">
              <div className="bg-cream-50 border border-sand-200 p-5">
                <p className="font-medium text-stone-800 mb-2 tracking-wide text-sm">ヘッドセット ¥5,400〜</p>
                <ul className="text-xs text-stone-700 space-y-1.5 leading-loose">
                  <li>・眼精疲労が気になる方</li>
                  <li>・頭が重い・頭皮が張っている方</li>
                  <li>・パソコン・スマホ使いすぎの方</li>
                  <li>・首こりが強い方</li>
                </ul>
                <div className="mt-3 text-xs text-stone-700 leading-loose border-t border-sand-200 pt-3">
                  <p>60分 ¥5,400 / 90分 ¥6,700 / 120分 ¥8,700</p>
                </div>
              </div>
              <div className="bg-cream-50 border border-sand-200 p-5">
                <p className="font-medium text-stone-800 mb-2 tracking-wide text-sm">足つぼセット ¥5,500〜</p>
                <ul className="text-xs text-stone-700 space-y-1.5 leading-loose">
                  <li>・足のむくみが気になる方</li>
                  <li>・立ち仕事・歩き仕事の方</li>
                  <li>・足のだるさ・重さがある方</li>
                  <li>・全身のリラクゼーションを深めたい方</li>
                </ul>
                <div className="mt-3 text-xs text-stone-700 leading-loose border-t border-sand-200 pt-3">
                  <p>60分 ¥5,500 / 90分 ¥6,900 / 120分 ¥8,900</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. 初めての方 */}
      <section id="first" className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="For First Time" ja="初めての方へのおすすめ" lead="まずは60分から始めましょう" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              初めてMARISAをご利用いただく方には、60分のもみほぐしコースをおすすめしています。
              全身をひと通りほぐすことで、自分の体のどの部位に緊張が集まっているか、
              どの部位が特にほぐれやすいかなどを知ることができます。
            </p>
            <p>
              施術前にスタッフがカウンセリングを行いますので、初めての方でも安心してご来店いただけます。
              「初めてなのでよくわからない」という場合もお気軽にお伝えください。
              最適な施術内容をご提案します。
            </p>
            <p>
              2回目以降は、最初の施術で感じた体の変化や気になった点をベースに、
              より自分に合ったコース・時間帯・強さを選んでいただくことができます。
            </p>
          </div>
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
            初めての方には60分コースから始めることをおすすめします。
            体の状態・目的に合わせてコースを選び、定期的な通い方で
            体のコンディションを維持していきましょう。
          </p>
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: 'メニュー・料金', href: '/menu' },
              { label: 'ボディケアメニュー', href: '/menu/body-care' },
              { label: 'セットメニュー', href: '/menu/set' },
              { label: '料金ガイド', href: '/guide/price-guide' },
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
