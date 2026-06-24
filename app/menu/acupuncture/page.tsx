import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { BMERIT_URL, LINE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '鍼灸メニュー | もみほぐし・MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」の鍼灸メニュー。鍼灸師資格を持つスタッフ「なお」が担当。君津で鍼灸・もみほぐし鍼をお探しの方に。金・土対応中心。公式予約限定。',
  keywords: [
    '君津 鍼灸',
    '君津 鍼',
    '君津 もみほぐし 鍼',
    '君津 マッサージ 鍼',
    '君津 美容鍼',
    '君津 美顔鍼',
    '君津 鍼灸師',
  ],
  openGraph: {
    title: '鍼灸メニュー | もみほぐし・MARISA 君津店',
    description:
      '千葉県君津市のリラクゼーションサロン「MARISA」の鍼灸メニュー。鍼灸師資格を持つスタッフが担当。公式予約限定・金曜土曜中心の対応。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/menu/acupuncture' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '鍼灸メニューはホットペッパーから予約できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '鍼灸メニューはホットペッパービューティーには掲載しておりません。公式WEB予約またはLINEよりご予約・ご相談ください。',
      },
    },
    {
      '@type': 'Question',
      name: '鍼灸メニューはいつ受けられますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '鍼灸資格を持つスタッフが対応するため、基本的には金曜日（10:00〜22:00）・土曜日（10:00〜14:00）の対応となります。その他曜日は要相談で対応できる場合がございますので、公式予約またはLINEよりご相談ください。',
      },
    },
    {
      '@type': 'Question',
      name: '鍼は痛くないですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '使用する鍼は極細のもので、チクっとする感覚はありますが痛みを感じにくいように設計されています。初めての方も安心して受けていただけます。',
      },
    },
    {
      '@type': 'Question',
      name: 'もみほぐしと鍼は一緒に受けられますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、MARISAでは「もみほぐし＋鍼」の組み合わせメニューをご用意しています。まずもみほぐしで全体をほぐし、その後鍼でピンポイントにアプローチします。',
      },
    },
    {
      '@type': 'Question',
      name: '鍼は初めてでも受けられますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、初めての方も安心してお受けいただけます。施術前に丁寧に説明しますので、不安なことはお気軽にお申し付けください。',
      },
    },
    {
      '@type': 'Question',
      name: '男性でも鍼灸メニューを受けられますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、性別問わずお受けいただけます。肩こり・腰のつらさなどでお悩みの男性のお客様にもご利用いただいています。',
      },
    },
    {
      '@type': 'Question',
      name: 'なおさんの施術はどのメニューで受けられますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '鍼灸メニューはすべてなお（鍼灸師）が担当します。もみほぐしとの組み合わせコースもなおが担当いたします。',
      },
    },
  ],
}

const courses = [
  {
    name: 'もみほぐし30分 ＋ 鍼1部位',
    price: '¥4,500',
    desc: '短時間で気になる部位に集中してアプローチしたい方に。もみほぐしで全体をほぐした後、鍼でピンポイントにケアします。',
    badge: '',
  },
  {
    name: 'もみほぐし45分 ＋ 鍼1部位',
    price: '¥5,400',
    desc: 'バランスよく全身をほぐしながら、気になる部位に鍼でアプローチ。初めての組み合わせコースにも最適な人気の構成です。',
    badge: 'おすすめ',
  },
  {
    name: 'もみほぐし70分 ＋ 鍼1部位',
    price: '¥6,000',
    desc: 'じっくり時間をかけてほぐしたい方に。全身をしっかりほぐし、特に気になる部位への鍼ケアも丁寧に行います。',
    badge: '',
  },
  {
    name: '鍼1部位オプション（単品追加）',
    price: '¥1,500',
    desc: '他のメニューに追加して鍼をプラスできます。首・肩・腰など、特に気になる部位にピンポイントでアプローチしたい方向け。',
    badge: '',
  },
]

const targets = [
  '肩・首の慢性的なコリ',
  '腰まわりのつらさ',
  'デスクワーク疲れ',
  'ストレスによる緊張',
  'スポーツ後のケア',
  '初めて鍼を試してみたい方',
]

const faqs = [
  {
    q: '鍼灸メニューはホットペッパーから予約できますか？',
    a: '鍼灸メニューはホットペッパービューティーには掲載しておりません。公式WEB予約またはLINEよりご予約・ご相談ください。',
  },
  {
    q: '鍼灸メニューはいつ受けられますか？',
    a: '鍼灸資格を持つスタッフが対応するため、基本的には金曜日（10:00〜22:00）・土曜日（10:00〜14:00）の対応となります。その他曜日は要相談で対応できる場合がございますので、公式予約またはLINEよりご相談ください。',
  },
  {
    q: '鍼は痛くないですか？',
    a: '使用する鍼は極細のもので、チクっとする感覚はありますが痛みを感じにくいように設計されています。初めての方も安心して受けていただけます。',
  },
  {
    q: 'もみほぐしと鍼は一緒に受けられますか？',
    a: 'はい、MARISAでは「もみほぐし＋鍼」の組み合わせメニューをご用意しています。まずもみほぐしで全体をほぐし、その後鍼でピンポイントにアプローチします。',
  },
  {
    q: '鍼は初めてでも受けられますか？',
    a: 'はい、初めての方も安心してお受けいただけます。施術前に丁寧に説明しますので、不安なことはお気軽にお申し付けください。',
  },
  {
    q: '男性でも鍼灸メニューを受けられますか？',
    a: 'はい、性別問わずお受けいただけます。肩こり・腰のつらさなどでお悩みの男性のお客様にもご利用いただいています。',
  },
  {
    q: 'なおさんの施術はどのメニューで受けられますか？',
    a: '鍼灸メニューはすべてなお（鍼灸師）が担当します。もみほぐしとの組み合わせコースもなおが担当いたします。',
  },
]

export default function AcupuncturePage() {
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
              { label: '鍼灸メニュー' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Acupuncture</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800">
              鍼灸メニュー
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              君津のリラクゼーションサロン「MARISA」では、もみほぐしと鍼を組み合わせたケアをご提供しています。鍼灸師の資格を持つスタッフ「なお」が担当し、気になる部位に丁寧にアプローチします。君津で鍼・もみほぐし鍼灸をお探しの方に。
            </p>
          </div>
        </div>
      </div>

      {/* ===== 公式予約限定 Notice ===== */}
      <div className="bg-cream-100 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-6">
          <div className="border-l-2 border-brown-400 pl-5 py-4">
            <p className="text-[10px] tracking-widest text-brown-400 uppercase mb-2">Notice</p>
            <p className="text-sm font-medium text-stone-800 mb-1">鍼灸メニューは公式予約限定です</p>
            <p className="text-sm text-stone-700 leading-loose">
              鍼灸メニューはホットペッパービューティーには掲載しておりません。ご予約は公式WEB予約またはLINEよりお問い合わせください。
            </p>
          </div>
        </div>
      </div>

      {/* ===== About Acupuncture at MARISA ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="About"
            ja="MARISAの鍼灸ケアとは"
          />
          <div className="mt-8 prose-marisa">
            <p className="text-sm text-stone-700 leading-loose mb-5">
              鍼灸は、細い鍼を使って体の特定の部位にアプローチするケアです。MARISAの鍼灸ケアは医療行為ではなく、日々のメンテナンスや身体の状態に合わせたリラクゼーション施術として位置づけています。肩・首・腰など負担を感じやすい部位に対して、ピンポイントでのアプローチをご希望の方に向いています。
            </p>
            <p className="text-sm text-stone-700 leading-loose mb-5">
              MARISAでは「もみほぐし＋鍼」の組み合わせコースを中心にご提供しています。まずもみほぐしで全体の緊張をやわらげ、その後に鍼でより集中したアプローチを行います。この流れにより、体全体のほぐれと局所的なケアを同時に行うことができます。担当するのは鍼灸師の資格を持つスタッフ「なお」です。
            </p>
            <p className="text-sm text-stone-700 leading-loose">
              鍼灸は初めてという方も多くいらっしゃいます。施術前のカウンセリングで状態をしっかりお聞きし、不安を感じることなく受けていただけるよう丁寧にご説明します。肩や腰のコリが長引いていると感じる方、デスクワークやスポーツ後の日常的なメンテナンスとして取り入れたい方にご利用いただいています。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Schedule / Availability ===== */}
      <section className="py-12 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-4">Schedule</p>
          <h2 className="text-lg font-light text-stone-800 mb-6">鍼灸スタッフの対応可能時間</h2>
          <p className="text-sm text-stone-700 leading-loose mb-6">
            鍼灸メニューは、鍼灸資格を持つスタッフ「なお」が対応いたします。現在、鍼灸スタッフの出勤日は金曜日・土曜日が中心となっております。
          </p>
          <div className="bg-cream-50 border border-sand-200">
            <table className="w-full text-sm">
              <tbody>
                {[
                  { day: '金曜日', time: '10:00〜22:00' },
                  { day: '土曜日', time: '10:00〜14:00' },
                  { day: 'その他曜日', time: '要相談' },
                ].map((row, i, arr) => (
                  <tr key={row.day} className={i < arr.length - 1 ? 'border-b border-sand-200' : ''}>
                    <td className="px-6 py-4 text-stone-700 w-40">{row.day}</td>
                    <td className="px-6 py-4 text-stone-800">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-greige-400 leading-loose">
            その他曜日のご希望がある場合は、公式予約またはLINEより事前にご相談ください。状況により対応できる場合がございます。
          </p>
        </div>
      </section>

      {/* ===== Courses ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Courses"
            ja="コース・料金"
            lead="お時間やご要望に合わせてお選びください。"
            centered
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <ReserveButton href={BMERIT_URL} label="公式予約で申し込む" size="sm" variant="outline" />
              </div>
            ))}
          </div>
          <div className="mt-6 border-l-2 border-sand-200 pl-4">
            <p className="text-xs text-greige-400 leading-loose">
              ※ 表示価格は税込み参考価格です。<br />
              ※ 鍼灸メニューはホットペッパービューティーには掲載しておりません。公式予約またはLINEよりご予約ください。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Who Should Try It ===== */}
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
              鍼灸ケアは年齢・性別を問わずお受けいただけます。初めて鍼を体験する方から、定期的なメンテナンスとして通われている方まで幅広くご利用いただいています。「体の状態に合わせたケアをしたい」「もみほぐしと組み合わせてより丁寧なアプローチをしたい」という方はぜひカウンセリングでご相談ください。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Staff ===== */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-4">Staff</p>
          <h2 className="text-lg font-light text-stone-800 mb-4">担当スタッフ「なお」について</h2>
          <div className="border border-sand-200 bg-sand-100 p-6">
            <p className="text-sm font-medium text-stone-800 mb-2">なお（鍼灸師）</p>
            <p className="text-sm text-stone-700 leading-loose">
              鍼灸師の国家資格を保有するスタッフです。鍼灸メニューおよびもみほぐし＋鍼の組み合わせコースはすべてなおが担当します。現在、金曜日・土曜日を中心に出勤しています。初めて鍼を受ける方にも丁寧にご説明しながら施術を行いますので、不安なことがあればお気軽にご相談ください。
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
          <p className="text-sm text-stone-700 mb-6">お悩みの症状や他のメニューもご覧ください。</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            {[
              { label: '肩こり', href: '/symptom/stiff-shoulder' },
              { label: '首こり', href: '/symptom/neck' },
              { label: '腰のつらさ', href: '/symptom/lower-back' },
              { label: 'もみほぐし', href: '/menu/body-care' },
              { label: '美容鍼', href: '/menu/beauty-acupuncture' },
              { label: '君津でマッサージ・鍼灸をお探しの方', href: '/area/kimitsu' },
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
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-4">
            鍼灸メニューのご予約
          </h2>
          <p className="text-sm text-sand-300 leading-loose mb-3">
            鍼灸・美容鍼は公式予約またはLINEよりご相談ください。
          </p>
          <p className="text-xs text-sand-300 opacity-80 leading-loose mb-10">
            対応時間：金曜 10:00〜22:00 ／ 土曜 10:00〜14:00（その他曜日は要相談）
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={BMERIT_URL} label="公式WEB予約はこちら" variant="light" size="lg" />
            {LINE_URL && (
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-sand-300 text-sand-300 hover:bg-sand-300 hover:text-brown-600 px-7 py-3.5 text-sm tracking-widest transition-colors"
              >
                LINEで相談する
              </a>
            )}
          </div>
          <p className="mt-6 text-xs text-sand-300 opacity-70">
            鍼灸メニューはホットペッパービューティーには掲載しておりません
          </p>
        </div>
      </section>
    </>
  )
}
