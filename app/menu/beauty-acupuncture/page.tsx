import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '美容鍼｜もみほぐし・MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」の美容鍼。顔まわりを整えたい方・美容目的のケアに。美顔鍼¥3,500。君津で美容鍼・美顔鍼をお探しの方に。当日予約OK・夜0時まで営業。',
  keywords: ['君津 美容鍼', '君津 美顔鍼', '君津 鍼灸', '君津 鍼 もみほぐし'],
  openGraph: {
    title: '美容鍼｜もみほぐし・MARISA 君津店',
    description:
      '千葉県君津市のリラクゼーションサロン「MARISA」の美容鍼。顔まわりを整えたい方・美容目的のケアに。美顔鍼¥3,500。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/menu/beauty-acupuncture' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '美容鍼はどのような方におすすめですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'お顔まわりのケアに関心がある方、リフレッシュ感を感じたい方に向いています。美容目的のケアとしてご利用いただいています。',
      },
    },
    {
      '@type': 'Question',
      name: '施術中は痛いですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '使用する鍼は極細のもので、チクっとする感覚がある場合もありますが、多くの方が違和感なくお受けいただいています。初めての方も安心してご相談ください。',
      },
    },
    {
      '@type': 'Question',
      name: '一回で変化を感じられますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '個人差がありますが、施術後にすっきりした感覚・お顔のリフレッシュ感を感じる方が多いです。継続的なケアとしてもご活用いただいています。',
      },
    },
    {
      '@type': 'Question',
      name: 'もみほぐしと組み合わせられますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、もみほぐしとの組み合わせも可能です。お体のケアとお顔まわりのケアを一度にご希望の方はカウンセリングでお申し付けください。',
      },
    },
  ],
}

const courses = [
  {
    name: '美顔鍼（たるみやハリ 美容目的）',
    price: '¥3,500',
    desc: 'お顔まわりのケアを美容目的で行いたい方に向けたメニューです。ハリ感・リフレッシュ感を目指した施術を、鍼灸師の資格を持つ「なお」が担当します。',
    badge: '',
  },
]

const targets = [
  '女性のお客様',
  'お顔まわりのケアに関心がある方',
  'すっきり感・リフレッシュ感を感じたい方',
  'もみほぐしと合わせてケアしたい方',
  '美容目的のケアを続けたい方',
  '鍼灸による美容ケアを試してみたい方',
]

const faqs = [
  {
    q: '美容鍼はどのような方におすすめですか？',
    a: 'お顔まわりのケアに関心がある方、リフレッシュ感を感じたい方に向いています。美容目的のケアとしてご利用いただいています。',
  },
  {
    q: '施術中は痛いですか？',
    a: '使用する鍼は極細のもので、チクっとする感覚がある場合もありますが、多くの方が違和感なくお受けいただいています。初めての方も安心してご相談ください。',
  },
  {
    q: '一回で変化を感じられますか？',
    a: '個人差がありますが、施術後にすっきりした感覚・お顔のリフレッシュ感を感じる方が多いです。継続的なケアとしてもご活用いただいています。',
  },
  {
    q: 'もみほぐしと組み合わせられますか？',
    a: 'はい、もみほぐしとの組み合わせも可能です。お体のケアとお顔まわりのケアを一度にご希望の方はカウンセリングでお申し付けください。',
  },
]

export default function BeautyAcupuncturePage() {
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
              { label: 'メニュー・料金', href: '/menu' },
              { label: '美容鍼' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Beauty Acupuncture</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800">
              美容鍼
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              君津のリラクゼーションサロン「MARISA」の美容鍼。お顔まわりのケアに関心がある方、美容目的のケアとして取り入れたい方に。美顔鍼¥3,500。君津で美容鍼・美顔鍼をお探しの方はぜひご相談ください。
            </p>
          </div>
        </div>
      </div>

      {/* ===== About Beauty Acupuncture ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="About"
            ja="MARISAの美容鍼とは"
          />
          <div className="mt-8">
            <p className="text-sm text-stone-700 leading-loose mb-5">
              美容鍼は、お顔まわりに細い鍼を使ってアプローチする美容目的のケアです。MARISAでは医療効果を目的としたものではなく、お顔のリフレッシュ感やすっきり感を感じていただきたい方に向けたリラクゼーション施術として提供しています。ハリ感・お顔まわりを整えたい方にご利用いただいています。
            </p>
            <p className="text-sm text-stone-700 leading-loose mb-5">
              施術は鍼灸師の資格を持つスタッフ「なお」が担当します。極細の鍼を使用し、お顔まわりに丁寧にアプローチします。初めての方も安心してお受けいただけるよう、施術前のカウンセリングで状態やご希望を確認してから行います。
            </p>
            <p className="text-sm text-stone-700 leading-loose">
              美容鍼は単体でのご利用はもちろん、もみほぐしと組み合わせることも可能です。お体のケアとお顔まわりのケアを一度に行いたい方は、カウンセリングでお気軽にお申し付けください。継続的な美容目的のケアとして月に一度のペースでご利用いただく方も多いです。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Courses ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Courses"
            ja="コース・料金"
            lead="美容目的のお顔まわりケアに。"
            centered
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {courses.map((course) => (
              <div key={course.name} className="bg-cream-50 border border-sand-200 p-7 relative">
                {course.badge && (
                  <span className="absolute top-4 right-4 text-[10px] tracking-widest bg-brown-400 text-cream-50 px-2.5 py-1">
                    {course.badge}
                  </span>
                )}
                <h2 className="text-base font-medium text-stone-800 mb-1 tracking-wide">{course.name}</h2>
                <p className="font-en text-2xl text-brown-400 mb-4 font-light">{course.price}</p>
                <p className="text-sm text-stone-700 leading-loose mb-6">{course.desc}</p>
                <ReserveButton href={HPB_URL} label="このコースで予約" size="sm" variant="outline" />
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-greige-400 text-center">
            ※ 表示価格は税込み参考価格です。詳細はホットペッパービューティーの予約ページをご確認ください。
          </p>
        </div>
      </section>

      {/* ===== Who Is It For ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Recommended For"
            ja="こんな方におすすめ"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
            {targets.map((t) => (
              <div key={t} className="flex items-start gap-3 bg-cream-50 border border-sand-200 p-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brown-400 mt-2 shrink-0" />
                <p className="text-sm text-stone-700 leading-loose">{t}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 max-w-3xl">
            <p className="text-sm text-stone-700 leading-loose">
              美容鍼はお顔まわりのセルフケアとして取り入れたい方に向いています。日常のメンテナンスの一環として、すっきり感を目指す方にご利用いただいています。もみほぐしとの組み合わせもできますので、全身とお顔まわりのケアをまとめてご希望の方はカウンセリングでご相談ください。
            </p>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="FAQ"
            ja="よくあるご質問"
          />
          <div className="mt-10 space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-sand-200 bg-cream-50 p-6">
                <p className="text-sm font-medium text-stone-800 mb-3 tracking-wide">
                  <span className="font-en text-brown-400 mr-2">Q.</span>
                  {faq.q}
                </p>
                <p className="text-sm text-stone-700 leading-loose pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Internal Links ===== */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 uppercase mb-6">Related</p>
          <p className="text-sm text-stone-700 mb-6">関連するメニューやページもご覧ください。</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            {[
              { label: '鍼灸メニュー', href: '/menu/acupuncture' },
              { label: 'スタッフ紹介', href: '/staff' },
              { label: '君津でマッサージ・美容鍼をお探しの方', href: '/area/kimitsu' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-sand-200 bg-cream-50 text-center py-4 px-3 text-sm text-stone-700 tracking-wide hover:border-brown-300 hover:text-brown-500 transition-colors"
              >
                {item.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">
            ご予約はこちらから
          </h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業中・当日予約OK。<br />
            君津で美容鍼・美顔鍼をお探しの方は、ぜひMARISAへ。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={BMERIT_URL} label="WEB予約（公式）" variant="light" size="lg" />
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
