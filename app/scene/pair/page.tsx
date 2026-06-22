import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'カップル・夫婦・友人と一緒にもみほぐし｜MARISA 君津店',
  description:
    '君津市のもみほぐし・MARISA 君津店はベッド3台完備。カップル・ご夫婦・お友達同士でも同じ時間帯に施術を受けていただけます。ペアでお得なクーポンもご確認ください。',
  keywords: ['君津 ペア マッサージ', '君津 カップル もみほぐし', '君津 夫婦 マッサージ', '君津 グループ リラクゼーション'],
  openGraph: {
    title: 'カップル・夫婦・友人と一緒にもみほぐし｜MARISA 君津店',
    description: 'ベッド3台完備。カップル・ご夫婦でも同時施術OK。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/scene/pair' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'カップルや夫婦で同じ時間に施術を受けられますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、施術ベッドを3台ご用意しているので、2人同時に施術を受けていただけます。ご予約時に「2名で来店予定」とお知らせいただければ、スムーズにご案内できます。',
      },
    },
    {
      '@type': 'Question',
      name: '3人以上のグループでの利用は可能ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、ベッドが3台ありますので、最大3名まで同じ時間帯に施術を受けていただけます。3名以上の場合は交代でご対応しますので、ご予約時にご人数をお知らせください。',
      },
    },
    {
      '@type': 'Question',
      name: 'ペアで来店した場合、別々のコースを選べますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、それぞれ別のコースを選んでいただくことが可能です。例えば、一方が「もみほぐし60分」でもう一方が「ヘッドセット60分」という組み合わせも問題ありません。ご予約時にそれぞれのご希望をお伝えください。',
      },
    },
    {
      '@type': 'Question',
      name: '男性と女性のカップルでも利用できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、もちろんです。MARISAは男女問わずご利用いただけるリラクゼーションサロンです。カップルや夫婦でのご来店も多く、お二人でリラックスタイムをお楽しみいただいています。',
      },
    },
  ],
}

const scenes = [
  {
    title: 'カップル・夫婦で',
    body: '「一緒にリラックスタイムを過ごしたい」「お互いの体の疲れを癒したい」というカップル・ご夫婦のご来店が多いです。同じ時間帯に施術を受けながら、それぞれのお悩みに合わせたコースを選んでいただけます。',
  },
  {
    title: '友人・同僚と一緒に',
    body: '「仕事帰りに同僚とそのまま来た」「友人と久しぶりに会ってリフレッシュ」という使い方も。2名以上の場合は、ご予約時に人数をお知らせいただければ、一緒の時間帯でご案内できます。',
  },
  {
    title: '親子・家族で',
    body: '「母の日・父の日のプレゼントとして一緒に来た」という親子でのご利用もあります。ご家族みなさんで体のメンテナンスをするのも、一つの健康習慣です。',
  },
  {
    title: '誕生日・記念日のご褒美に',
    body: 'パートナーへの誕生日プレゼント、記念日のご褒美としてご利用いただくケースもあります。「マッサージってどこがいいか迷う」という方にも、MARISAは君津市でご利用しやすい環境を整えています。',
  },
]

export default function ScenePairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ===== Page Header ===== */}
      <div className="bg-cream-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: '地域・シーン別', href: '/area/kimitsu' }, { label: 'ペアで利用したい方' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Pair Visit</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              カップル・ご夫婦・<br className="hidden sm:block" />
              友人同士でのご来店歓迎。
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              MARISAはベッドを3台ご用意しています。カップル・ご夫婦・お友達同士でも同じ時間帯に施術を受けていただけます。君津市でペア利用できるリラクゼーションサロンをお探しの方へ。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Highlights ===== */}
      <section className="py-12 bg-cream-50 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '3', unit: '台', label: '施術ベッド数' },
              { num: '2〜3', unit: '名', label: '同時対応可能人数' },
              { num: '年中', unit: '無休', label: '定休日なし' },
              { num: '10:00', unit: '〜 24:00', label: '営業時間' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-en text-2xl font-light text-brown-400">
                  {item.num}<span className="text-sm ml-0.5">{item.unit}</span>
                </p>
                <p className="text-xs text-stone-700 tracking-wide mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Scenes ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Usage Scenes" ja="ペア・グループでのご利用シーン" />
          <div className="mt-8 space-y-5">
            {scenes.map((s) => (
              <div key={s.title} className="border border-sand-200 p-6">
                <h3 className="text-sm font-medium text-stone-800 mb-3 tracking-wide">{s.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== How to book pair ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="How to Book" ja="ペア予約の方法" />
          <div className="mt-8 space-y-4 text-sm text-stone-700 leading-loose">
            <div className="border border-sand-200 bg-cream-50 p-6">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">ホットペッパービューティーから人数分予約する</h3>
              <p>2名でのご利用の場合は、それぞれホットペッパービューティーから予約を入れてください。希望の時間帯を同じ日時で予約していただくと、スムーズにご案内できます。予約の備考欄に「2名同時希望」と記載いただくとより確実です。</p>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">コースはそれぞれ別々でもOK</h3>
              <p>一方が「もみほぐし60分」、もう一方が「ヘッドセット60分」など、コースが異なってもご対応できます。それぞれのお悩みに合わせたコースをお選びください。</p>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">来店後にカウンセリングで希望を伝える</h3>
              <p>ご来店後、それぞれのカウンセリングで体の状態やご要望をお伝えください。強さ・集中してほぐしたい部位・施術中の環境など、細かいご希望にもできる限りお応えします。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Courses ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Courses" ja="ペア利用におすすめのコース" />
          <div className="mt-8 space-y-4">
            {[
              { name: 'もみほぐし 60分', price: '¥4,500〜', href: '/menu/body-care', desc: '全身をまんべんなくケア。初めての方・ペア利用の定番コース。' },
              { name: 'ヘッドセット 60分', price: '¥5,000〜', href: '/menu/set', desc: 'もみほぐし＋ヘッドケアの組み合わせ。眼精疲労・頭の重さが気になる方に。' },
              { name: 'もみほぐし 90分', price: '¥6,500〜', href: '/menu/body-care', desc: 'じっくりほぐしたい方に。記念日や特別な日のリラクゼーションに。' },
              { name: '足つぼセット', price: '¥5,500〜', href: '/menu/foot', desc: 'もみほぐし＋足つぼ。足のだるさ・むくみが気になる方に。' },
            ].map((c) => (
              <Link
                key={c.name}
                href={c.href}
                className="group flex items-start justify-between border border-sand-200 p-5 hover:border-brown-300 transition-colors"
              >
                <div>
                  <h3 className="text-sm font-medium text-stone-800 mb-1 tracking-wide group-hover:text-brown-500">{c.name}</h3>
                  <p className="text-xs text-stone-700 leading-relaxed max-w-md">{c.desc}</p>
                </div>
                <p className="font-en text-brown-400 text-sm font-light shrink-0 ml-4">{c.price}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/menu" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
              すべてのメニュー・料金を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="FAQ" ja="ペア・グループ利用のよくある質問" />
          <div className="mt-8 space-y-4">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="border border-sand-200 bg-cream-50 p-6">
                <p className="text-sm font-medium text-stone-800 mb-3 leading-snug tracking-wide">
                  <span className="font-en text-brown-400 mr-2">Q.</span>
                  {item.name}
                </p>
                <p className="text-sm text-stone-700 leading-loose pl-5">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/faq" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
              よくある質問をすべて見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">大切な方と、ゆっくりと。</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            ベッド3台完備。カップル・ご夫婦・お友達でのご来店歓迎。<br />
            夜0時まで営業・当日予約OK・無料駐車場完備。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="2名分を予約する" variant="light" size="lg" />
            <ReserveButton href="/first" label="はじめての方へ" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
