import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津のセットコース（ヘッドセット・足つぼセット）｜MARISA 君津店',
  description:
    '千葉県君津市「MARISA」のセットコース。もみほぐし＋ヘッドケアの「ヘッドセット」、もみほぐし＋足つぼの「足つぼセット」。60分¥5,000〜。全身ケアをまとめて受けたい方に。',
  alternates: { canonical: '/menu/set' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'セットコースと単体コースはどう違いますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'セットコースはもみほぐしにヘッドケアまたは足つぼを組み合わせたコースです。単体でそれぞれを受けるよりも、体の複数の悩みをまとめてケアできます。また、施術の流れが連続しているため、体全体のリラックス効果が高まりやすいというメリットがあります。',
      },
    },
    {
      '@type': 'Question',
      name: 'ヘッドセットと足つぼセット、どちらを選べばいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '頭の重さ・眼精疲労・首こりが気になる方にはヘッドセット、足のだるさ・むくみ・冷え性が気になる方には足つぼセットをおすすめします。「どちらか迷っている」という場合は、カウンセリングでご相談いただければ、その日のお悩みに合わせてご提案します。',
      },
    },
    {
      '@type': 'Question',
      name: '初めてのセットコースで何分がおすすめですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '初めてセットコースを受けられる方には、60分コースをおすすめしています。もみほぐしとヘッドまたは足つぼをバランスよく体験していただける時間です。「もっとじっくりほぐしたい」という方には90分・120分コースもご用意しています。',
      },
    },
  ],
}

const headSets = [
  {
    name: 'ヘッドセット 60分',
    price: '¥5,000〜',
    desc: 'もみほぐし＋ヘッドケアを組み合わせた定番セット。首・肩のコリと頭の重さ・眼精疲労をまとめてケアします。仕事帰りに気軽に受けられる時間設定です。',
    badge: 'おすすめ',
  },
  {
    name: 'ヘッドセット 90分',
    price: '¥7,000〜',
    desc: 'もみほぐしとヘッドケアにじっくり時間をかけたコース。全身と頭を余裕をもってケアしたい方に。週末のリフレッシュや疲れが溜まったときに。',
    badge: '',
  },
  {
    name: 'ヘッドセット 120分',
    price: '¥9,000〜',
    desc: 'もみほぐし＋ヘッドケアを最大限に堪能できるプレミアムコース。全身をじっくりほぐしながら頭・眼周りも丁寧にケア。特別な日の自分へのご褒美に。',
    badge: '',
  },
]

const footSets = [
  {
    name: '足つぼセット 45分',
    price: '¥4,000〜',
    desc: 'もみほぐし＋足つぼのコンパクトなセット。短い時間で体と足の疲れをリセットしたい方に。立ち仕事後の気軽なケアに最適です。',
    badge: '',
  },
  {
    name: '足つぼセット 60分',
    price: '¥5,500〜',
    desc: 'もみほぐし＋足つぼをゆったりペースで体験できるコース。足のだるさ・むくみ・冷えが気になる方にじっくりアプローチします。',
    badge: 'おすすめ',
  },
]

const whyCombine = [
  {
    title: 'もみほぐし＋ヘッドケア',
    reason: '肩・首のコリをもみほぐしでほぐした後、頭皮・側頭部・眼周りをヘッドケアでケアすることで、デスクワーク・スマホ疲れの根本から解消します。首から頭にかけて連続してアプローチするため、施術効果がより高く感じられます。「肩も首も頭も全部つらい」という方に最適です。',
    link: { label: 'ヘッドケアの詳細', href: '/menu/head' },
  },
  {
    title: 'もみほぐし＋足つぼ',
    reason: '体全体の筋肉の緊張をもみほぐしでほぐしながら、足裏の反射区を足つぼで刺激することで、全身の血行とリンパの流れをまとめて整えます。「上半身は肩こり、下半身は足のだるさ」という方のニーズにぴったりです。施術後の全身の軽さをぜひ体感してください。',
    link: { label: '足つぼの詳細', href: '/menu/foot' },
  },
]

const faqs = [
  {
    q: 'セットコースと単体コースはどう違いますか？',
    a: 'セットコースはもみほぐしにヘッドケアまたは足つぼを組み合わせたコースです。単体でそれぞれを受けるよりも、体の複数の悩みをまとめて一度の来店でケアできます。施術の流れが連続しているため、体が温まったまま次の施術に移れるため、リラックス効果が高まりやすいというメリットもあります。',
  },
  {
    q: 'ヘッドセットと足つぼセット、どちらを選べばいいですか？',
    a: '頭の重さ・眼精疲労・首こり・スマホ・PC疲れが気になる方にはヘッドセット、足のだるさ・むくみ・冷え性・立ち仕事後の疲れが気になる方には足つぼセットをおすすめします。「どちらも気になる」という場合はカウンセリングでご相談ください。その日のお体の状態を確認しながらご提案します。',
  },
  {
    q: '初めてセットコースを受ける場合、何分がおすすめですか？',
    a: '初めてセットコースをお受けになる方には、60分コースをおすすめしています。もみほぐしとヘッドまたは足つぼをバランスよく体験していただける時間です。「たっぷりほぐしてほしい」「特にじっくり時間をかけたい」という方には90分・120分コースもご用意しています。カウンセリングでご要望をお聞きした上でご提案することも可能です。',
  },
]

export default function SetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ===== Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'メニュー・料金', href: '/menu' }, { label: 'セットコース' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Set Courses</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800">
              セットコース
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              もみほぐしにヘッドケアまたは足つぼを組み合わせたセットコース。複数の悩みをまとめて一度の来店でケアしたい方に。体全体のリフレッシュ効果が高まります。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Introduction ===== */}
      <section className="py-16 lg:py-20 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="About"
            ja="セットコースとは"
          />
          <div className="mt-8 prose-marisa">
            <p>
              忙しい毎日の中で「来れるときにしっかりケアしておきたい」という方のために、MARISAではもみほぐしと他の施術を組み合わせたセットコースをご用意しています。
            </p>
            <p>
              セットコースの最大のメリットは、複数の悩みを一度の施術でまとめてケアできることです。たとえば「肩こりがひどいけど、目の疲れもかなりつらい」「腰のだるさもあるし、夕方になると足もパンパンになる」といった複合的なお悩みをお持ちの方に、特におすすめしています。
            </p>
            <p>
              また、単体で2種類の施術を別々に受けるよりも、連続して受けることで体が温まったまま次の施術に移れるため、筋肉がほぐれやすく、より深いリラクゼーション効果を感じていただけます。施術の流れも自然でスムーズなため、お客様からも「セットで受けたら全然違った」というお声を多くいただいています。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Photo Strip ===== */}
      <section className="bg-stone-900 py-1">
        <div className="grid grid-cols-2 gap-0.5">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/LINE_ALBUM_もみほぐしMARISA_260615_6.jpg"
              alt="君津 もみほぐし marisa 背中の施術"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/LINE_ALBUM_もみほぐしMARISA_260615_25.jpg"
              alt="君津 ヘッドケア marisa 頭部ケア施術"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* ===== Head Set Courses ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-8">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-2">Head Set</p>
            <h2 className="text-2xl font-light text-stone-800 tracking-wide">ヘッドセット</h2>
            <p className="mt-2 text-sm text-stone-700 leading-loose max-w-xl">
              もみほぐし＋ヘッドケアの組み合わせ。首・肩のコリと頭の重さ・眼精疲労をまとめてケアします。PC・スマホ疲れの方に特におすすめです。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {headSets.map((course) => (
              <div key={course.name} className="bg-cream-50 border border-sand-200 p-7 relative">
                {course.badge && (
                  <span className="absolute top-4 right-4 text-[10px] tracking-widest bg-brown-400 text-cream-50 px-2.5 py-1">
                    {course.badge}
                  </span>
                )}
                <h3 className="text-base font-medium text-stone-800 mb-1 tracking-wide">{course.name}</h3>
                <p className="font-en text-2xl text-brown-400 mb-4 font-light">{course.price}</p>
                <p className="text-sm text-stone-700 leading-loose mb-6">{course.desc}</p>
                <ReserveButton href={HPB_URL} label="このコースで予約" size="sm" variant="outline" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Foot Set Courses ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-8">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-2">Foot Set</p>
            <h2 className="text-2xl font-light text-stone-800 tracking-wide">足つぼセット</h2>
            <p className="mt-2 text-sm text-stone-700 leading-loose max-w-xl">
              もみほぐし＋足つぼの組み合わせ。立ち仕事の疲れ・足のだるさ・むくみ・冷えが気になる方にじっくりアプローチします。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            {footSets.map((course) => (
              <div key={course.name} className="bg-cream-50 border border-sand-200 p-7 relative">
                {course.badge && (
                  <span className="absolute top-4 right-4 text-[10px] tracking-widest bg-brown-400 text-cream-50 px-2.5 py-1">
                    {course.badge}
                  </span>
                )}
                <h3 className="text-base font-medium text-stone-800 mb-1 tracking-wide">{course.name}</h3>
                <p className="font-en text-2xl text-brown-400 mb-4 font-light">{course.price}</p>
                <p className="text-sm text-stone-700 leading-loose mb-6">{course.desc}</p>
                <ReserveButton href={HPB_URL} label="このコースで予約" size="sm" variant="outline" />
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-greige-400">
            ※ 表示価格は税込み参考価格です。詳細はホットペッパービューティーの予約ページをご確認ください。
          </p>
        </div>
      </section>

      {/* ===== Why Combine ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Why Combine"
            ja="組み合わせることで得られるもの"
            lead="単体で受けるよりも、セットで受けることのメリットをご説明します。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyCombine.map((item) => (
              <div key={item.title} className="bg-cream-50 border border-sand-200 p-8">
                <h3 className="text-base font-medium text-stone-800 mb-4 tracking-wide">{item.title}</h3>
                <p className="text-sm text-stone-700 leading-loose mb-5">{item.reason}</p>
                <Link
                  href={item.link.href}
                  className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
                >
                  {item.link.label} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Individual Menu Links ===== */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 uppercase mb-6">Single Menus</p>
          <p className="text-sm text-stone-700 mb-6">各メニューの詳細はこちらからご確認いただけます。</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            {[
              { label: 'もみほぐし', href: '/menu/body-care', en: 'Body Care' },
              { label: 'ヘッドケア', href: '/menu/head', en: 'Head Care' },
              { label: '足つぼ・リフレ', href: '/menu/foot', en: 'Foot Reflexology' },
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu', en: 'Area Kimitsu' },
              { label: 'コースの選び方ガイド', href: '/guide/course-selection', en: 'Guide' },
              { label: '通う頻度の目安', href: '/guide/frequency', en: 'Frequency' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-sand-200 bg-cream-50 p-5 hover:border-brown-300 transition-colors"
              >
                <p className="font-en text-[10px] tracking-widest text-brown-400 mb-1">{item.en}</p>
                <p className="text-sm font-medium text-stone-800 tracking-wide">{item.label} →</p>
              </Link>
            ))}
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

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">
            ご予約はこちらから
          </h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業中・当日予約OK。<br />
            ホットペッパービューティーからかんたんにご予約いただけます。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton href="/menu" label="メニュー一覧へ戻る" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
