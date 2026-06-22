import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'もみほぐしコースの選び方・時間の選び方ガイド｜MARISA 君津店',
  description: 'もみほぐし45分・60分・90分の違いと選び方を解説。ヘッドセットvs足つぼセットの比較、初めての方向けのおすすめも紹介。君津MARISA。',
  keywords: ['もみほぐし コース 選び方', 'マッサージ 時間 何分', 'もみほぐし 45分 60分 違い'],
  openGraph: {
    title: 'もみほぐしコースの選び方・時間の選び方ガイド｜MARISA 君津店',
    description: '45分・60分・90分の違いと選び方。MARISA 君津店。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/guide/course-selection' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '初めてですが何分のコースがおすすめですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '初めての方には60分コースをおすすめしています。全身をバランスよくケアできる時間で、施術の流れや自分の体の状態を把握するのに最適です。物足りなければ次回から90分に変更することも簡単です。',
      },
    },
    {
      '@type': 'Question',
      name: 'ヘッドセットと足つぼセットはどちらがおすすめですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '眼精疲労・頭の重さ・首こりが気になる方にはヘッドセット、足のむくみ・だるさ・立ち仕事疲れが気になる方には足つぼセットがおすすめです。どちらか迷う場合はスタッフにご相談ください。',
      },
    },
    {
      '@type': 'Question',
      name: '45分コースではどこをほぐしてもらえますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '45分では主に背中・肩・腰・首などの上半身を中心にケアします。時間の制約上、全身をまんべんなくというよりは、気になる部位を重点的にほぐすことになります。特に気になる部位を事前にお伝えください。',
      },
    },
  ],
}

export default function GuideCourseSelectionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
              もみほぐしコースの選び方ガイド
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              45分・60分・90分、ヘッドセット・足つぼセット——メニューの選び方で迷う方のために、それぞれの特徴と向いている方を解説します。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Time Selection" ja="施術時間の違いと選び方" lead="何分が自分に合っているか" />
          <div className="mt-8 space-y-4">
            <div className="bg-sand-100 border border-sand-200 p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="font-medium text-stone-800 tracking-wide">45分コース</p>
                <span className="text-sm text-brown-500 font-en">¥3,500〜</span>
              </div>
              <p className="text-sm text-stone-700 leading-loose mb-3">
                短時間で気になる部位を重点的にケアしたい方に向いています。時間があまり取れないが体のケアをしたい方、特定の部位（肩・腰など）を集中してほぐしたい方に適しています。
              </p>
              <p className="text-xs text-stone-700 bg-cream-50 border border-sand-200 p-3">
                こんな方に：「時間が限られているが体を整えたい」「特定の部位だけケアしたい」
              </p>
            </div>
            <div className="bg-sand-100 border border-sand-200 p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="font-medium text-stone-800 tracking-wide">60分コース</p>
                <span className="text-sm text-brown-500 font-en">¥4,500〜</span>
              </div>
              <p className="text-sm text-stone-700 leading-loose mb-3">
                最もバランスが取れた定番コース。全身をひと通りケアできる時間で、初めての方にもおすすめです。背中・腰・肩・首・脚まで一通り対応できます。
              </p>
              <p className="text-xs text-stone-700 bg-cream-50 border border-sand-200 p-3">
                こんな方に：「初めての方」「全身バランスよくほぐしたい」「週1〜2回の定期利用に」
              </p>
            </div>
            <div className="bg-sand-100 border border-sand-200 p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="font-medium text-stone-800 tracking-wide">90分コース</p>
                <span className="text-sm text-brown-500 font-en">¥6,500〜</span>
              </div>
              <p className="text-sm text-stone-700 leading-loose mb-3">
                全身をじっくりとほぐしたい方に最適。背中・腰・肩・首・脚・腕など全身をゆったりとケアできます。週末のリフレッシュや長期的な疲れを一気にリセットしたい方に人気です。
              </p>
              <p className="text-xs text-stone-700 bg-cream-50 border border-sand-200 p-3">
                こんな方に：「週末にゆっくり全身をほぐしたい」「長期間の疲れをリセットしたい」
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Set Courses" ja="セットコースの選び方" lead="ヘッドセット vs 足つぼセット" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              セットコースはもみほぐしに加え、頭部ケアまたは足つぼをプラスしたお得なメニューです。どちらを選ぶかは、気になる部位によって決めましょう。
            </p>
            <div className="grid gap-4 sm:grid-cols-2 mt-6">
              <div className="bg-cream-50 border border-sand-200 p-5">
                <p className="font-medium text-stone-800 mb-2 tracking-wide text-sm">ヘッドセット ¥5,000〜</p>
                <ul className="text-xs text-stone-700 space-y-1.5 leading-loose">
                  <li>・眼精疲労が気になる方</li>
                  <li>・頭が重い・頭皮が張っている方</li>
                  <li>・パソコン・スマホ使いすぎの方</li>
                  <li>・首こりが強い方</li>
                </ul>
              </div>
              <div className="bg-cream-50 border border-sand-200 p-5">
                <p className="font-medium text-stone-800 mb-2 tracking-wide text-sm">足つぼセット ¥5,500〜</p>
                <ul className="text-xs text-stone-700 space-y-1.5 leading-loose">
                  <li>・足のむくみが気になる方</li>
                  <li>・立ち仕事・歩き仕事の方</li>
                  <li>・足のだるさ・重さがある方</li>
                  <li>・全身のリラクゼーションを深めたい方</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="For First Time" ja="初めての方へのおすすめ" lead="まずは60分から始めましょう" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              初めてMARISAをご利用いただく方には、60分のもみほぐしコースをおすすめしています。全身をひと通りほぐすことで、自分の体のどの部位に緊張が集まっているか、どの部位が特にほぐれやすいかなどを知ることができます。
            </p>
            <p>
              施術前にスタッフがカウンセリングを行いますので、初めての方でも安心してご来店いただけます。気になる部位や強さのご希望はもちろん、「初めてなのでよくわからない」という場合もお気軽にお伝えください。最適な施術内容をご提案します。
            </p>
            <p>
              2回目以降は、最初の施術で感じた体の変化や気になった点をベースに、より自分に合ったコース・時間帯・強さを選んでいただくことができます。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
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

      <section className="py-12 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: 'メニュー・料金', href: '/menu' },
              { label: 'ボディケアメニュー', href: '/menu/body-care' },
              { label: 'セットメニュー', href: '/menu/set' },
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

      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">ご予約はこちらから</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">夜0時まで営業・当日予約OK・無料駐車場完備。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton href="/menu" label="メニューを見る" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
