import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, SHOP_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '木更津方面からもみほぐし・マッサージをお探しなら｜MARISA 君津店',
  description:
    '木更津方面からマッサージ・もみほぐしをお探しの方へ。もみほぐし・MARISA 君津店は木更津から車で約20分。夜0時まで営業・当日予約OK・無料駐車場完備。君津市杢師3-20-10。',
  keywords: ['木更津 マッサージ', '木更津 もみほぐし', '木更津 近く マッサージ', '君津 マッサージ'],
  openGraph: {
    title: '木更津方面からのお客様へ｜MARISA 君津店',
    description: '木更津から車で約20分。君津市のリラクゼーションサロン。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/area/kisarazu' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '木更津からMARISAへはどのくらい時間がかかりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '木更津駅から車で約20分程度です。館山自動車道をご利用の場合は、君津インターで降りていただくと便利です。国道127号線沿いに南下していただいても到着できます。',
      },
    },
    {
      '@type': 'Question',
      name: '木更津から来店する場合、駐車場はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、店舗前に無料駐車場を完備しています。お車でのご来店も安心してお越しください。',
      },
    },
    {
      '@type': 'Question',
      name: '木更津でマッサージを探していますが、君津のMARISAとの違いは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MARISAは君津市杢師に実店舗があるリラクゼーションサロンです。木更津市内ではなく君津市になりますが、木更津からのアクセスも車で約20分と近く、木更津方面から多くのお客様にご来店いただいています。夜0時まで営業・当日予約OK・無料駐車場完備のため、木更津周辺の方にも利用しやすい環境です。',
      },
    },
  ],
}

export default function AreaKisarazuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ===== Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: '地域・シーン別', href: '/area/kimitsu' }, { label: '木更津方面からお越しの方' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">From Kisarazu</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              木更津方面からの<br className="hidden sm:block" />
              ご来店も歓迎しています
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              もみほぐし・MARISA 君津店は、千葉県君津市杢師にあるリラクゼーションサロンです。木更津からも車で約20分のアクセス。木更津方面からも多くのお客様にご利用いただいています。
            </p>
          </div>
        </div>
      </div>

      {/* ===== From Kisarazu ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Access from Kisarazu" ja="木更津からMARISAへのアクセス" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAの実店舗は千葉県君津市杢師3-20-10にあります。木更津市に隣接した立地で、木更津駅周辺からは車で約20分程度でお越しいただけます。
            </p>
            <div className="border border-sand-200 p-6 space-y-3">
              <p className="text-xs tracking-widest text-brown-400 uppercase font-en">Route</p>
              <div>
                <h3 className="font-medium text-stone-800 mb-1 tracking-wide">館山自動車道をご利用の場合</h3>
                <p>木更津南インターまたは木更津インターから館山自動車道に乗り、「君津インター」で下りてください。インターを降りて国道方面へ進み、杢師3丁目付近が目的地です。</p>
              </div>
              <div>
                <h3 className="font-medium text-stone-800 mb-1 tracking-wide">国道127号線をご利用の場合</h3>
                <p>国道127号線を木更津方面から南下し、君津市街方面へお進みください。杢師3丁目付近を目指してお越しください。カーナビには「千葉県君津市杢師3-20-10」とご入力ください。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Why come from Kisarazu ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Why Choose MARISA" ja="木更津から君津のMARISAを選ぶ理由" />
          <div className="mt-8 space-y-6 text-sm text-stone-700 leading-loose">
            <div className="border border-sand-200 bg-cream-50 p-6">
              <h3 className="font-medium text-stone-800 mb-3 tracking-wide">夜0時まで営業・最終受付23時</h3>
              <p>仕事帰りに木更津から君津まで足を伸ばしていただく場合も、夜0時まで対応しています。最終受付は23時なので、夜遅い時間帯でも安心してご来店いただけます。</p>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <h3 className="font-medium text-stone-800 mb-3 tracking-wide">無料駐車場完備</h3>
              <p>木更津からのご来店はほとんどの方がお車です。店舗前に無料駐車場を完備しているので、駐車料金を気にせずゆっくりご来店いただけます。</p>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <h3 className="font-medium text-stone-800 mb-3 tracking-wide">当日予約にも対応</h3>
              <p>ホットペッパービューティーから24時間いつでも当日予約が可能です。「今日の帰りに寄りたい」という場合もお気軽にどうぞ。</p>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <h3 className="font-medium text-stone-800 mb-3 tracking-wide">もみほぐし・ヘッドケア・足つぼをまとめてケア</h3>
              <p>もみほぐし単体から、ヘッドケアや足つぼを組み合わせたセットコースまでご用意。肩こり・腰のつらさ・眼精疲労・足のだるさをまとめてケアできます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Shop Info ===== */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Shop Info" ja="店舗情報" />
          <dl className="mt-6 divide-y divide-sand-200 text-sm">
            {[
              { label: '店舗名', value: SHOP_INFO.name },
              { label: '住所', value: SHOP_INFO.address },
              { label: '営業時間', value: '10:00〜24:00（最終受付 23:00）' },
              { label: '定休日', value: '年中無休' },
              { label: '駐車場', value: '無料駐車場あり（店舗前）' },
            ].map((item) => (
              <div key={item.label} className="flex gap-6 py-3">
                <dt className="w-28 shrink-0 text-greige-400 tracking-wide">{item.label}</dt>
                <dd className="text-stone-700 leading-loose">{item.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6">
            <Link href="/access" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
              詳しいアクセスを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="FAQ" ja="よくある質問" />
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
        </div>
      </section>

      {/* ===== Related ===== */}
      <section className="py-12 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
              { label: 'アクセス・駐車場', href: '/access' },
              { label: 'メニュー・料金', href: '/menu' },
              { label: 'よくある質問', href: '/faq' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="border border-sand-300 px-3 py-1.5 text-stone-700 hover:border-brown-300 hover:text-brown-500 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">ご予約はこちらから</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業・当日予約OK・無料駐車場完備。<br />
            木更津方面からのご来店もお待ちしています。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton href="/access" label="アクセスを確認する" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
