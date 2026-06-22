import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, SHOP_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '安房・南房総方面からもみほぐし・マッサージをお探しなら｜MARISA 君津店',
  description: '館山・鴨川・鋸南・富山方面から館山自動車道または国道127号線経由でアクセス可能。館山から約40分・鴨川から約50分のもみほぐしサロンMARISA君津店。',
  keywords: ['安房 マッサージ', '南房総 もみほぐし', '館山 マッサージ', '鴨川 マッサージ', '安房 リラクゼーション'],
  openGraph: {
    title: '安房・南房総方面からもみほぐし・マッサージをお探しなら｜MARISA 君津店',
    description: '館山から約40分・鴨川から約50分のもみほぐしサロン。館山自動車道経由でアクセス便利。夜0時まで営業・無料駐車場完備。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/area/awa' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '館山・安房方面からMARISAまでどのくらいかかりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '館山市内から館山自動車道（富津館山道路）経由で車で約40〜50分ほどです。国道127号線をご利用の場合は同程度またはやや長くなります。館山インターから乗車し、君津インターで下車してお越しください。',
      },
    },
    {
      '@type': 'Question',
      name: '鴨川方面からはどのようなルートでお越しになれますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '鴨川方面からは国道465号線を経由して君津市方面へお越しいただくか、国道128号線から南房総市を経由して館山方向へ向かい、館山自動車道を利用する方法もあります。車で約50〜60分を目安にお越しください。',
      },
    },
    {
      '@type': 'Question',
      name: '安房・南房総方面から来る際に注意することはありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '遠方からのご来店の場合は、事前予約を強くおすすめしています。ホットペッパービューティーからオンライン予約が可能です。また、到着が遅れる場合は事前にお知らせください。最終受付は23:00です。無料駐車場を完備していますので駐車の心配は不要です。',
      },
    },
  ],
}

export default function AreaAwaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Page Header */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb
            items={[
              { label: '地域・シーン別', href: '/area/kimitsu' },
              { label: '安房・南房総方面からお越しの方' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">
              From Awa / Minami-Boso
            </p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              安房・南房総方面からのご来店も歓迎しています
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              館山・鴨川・鋸南・富山など安房・南房総エリアの方も、館山自動車道または国道127号線経由でMARISA君津店へお越しいただけます。館山から約40分、鴨川から約50分。遠方からのご来店もお気軽にどうぞ。
            </p>
          </div>
        </div>
      </div>

      {/* Access from Awa area */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Access from Awa" ja="安房・南房総からのアクセス" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              安房・南房総方面からMARISA君津店へは、館山自動車道（富津館山道路を含む）をご利用いただくのが最もスムーズです。館山インターチェンジから乗車し、君津インターチェンジで下車してください。インターを出てから店舗まで約10分でお到着いただけます。
            </p>
            <p>
              館山市内からは館山インターから館山自動車道を北上し、君津インターまで約30〜40分ほどです。インターを降りてから店舗まで約10分ですので、トータルで約40〜50分を目安にお越しください。
            </p>
            <p>
              鋸南・保田方面からは、国道127号線を北上して富津市を経由し君津市へ向かうルート、または富津竹岡インターから館山自動車道に乗って君津インターで下車するルートがあります。車で約30〜40分ほどです。
            </p>
            <p>
              富山・鹿野山方面からは、県道や国道を経由して君津市へお越しください。車で約30分ほどでお到着いただけます。鴨川方面からは国道465号線を経由して君津方面へ向かう形になり、約50〜60分を目安にお越しください。
            </p>
          </div>
        </div>
      </section>

      {/* Why Awa visitors choose MARISA */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Why Choose MARISA" ja="安房・南房総の方が君津MARISAを選ぶ理由" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              安房・南房総エリアは自然豊かで観光地としても人気ですが、本格的なリラクゼーションサロンの選択肢が限られるエリアでもあります。そのため、より質の高い施術を求めて君津のMARISAまで足を運んでいただくお客様がいらっしゃいます。
            </p>
            <p>
              MARISAでは熟練したスタッフによる丁寧なもみほぐし施術をご提供しています。「遠くから来た甲斐があった」と感じていただけるよう、技術と接客の両面で高い水準を維持しています。お客様一人ひとりのお体の状態に合わせたアプローチを心がけています。
            </p>
            <p>
              夜0時まで営業（最終受付23:00）・年中無休という営業体制は、観光シーズンや農業・漁業のオフシーズンなど、生活パターンが変わりやすい安房・南房総エリアの方々にも利用しやすい環境です。ホットペッパービューティーから24時間いつでも予約できます。
            </p>
            <p>
              もみほぐし45分3,500円〜というリーズナブルな価格で、ヘッドリラックス（60分5,000円〜）や足つぼセット（5,500円〜）など豊富なメニューをご用意しています。店舗前の無料駐車場でお車も安心です。安房・南房総方面からお越しの際はぜひ事前にご予約のうえお越しください。スタッフ一同、心よりお待ちしております。
            </p>
          </div>
        </div>
      </section>

      {/* Shop info table */}
      <section className="py-12 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Shop Info" ja="店舗情報" />
          <dl className="mt-6 divide-y divide-sand-200 text-sm">
            {[
              { label: '店舗名', value: SHOP_INFO.name },
              { label: '住所', value: SHOP_INFO.address },
              { label: '営業時間', value: '10:00〜24:00（最終受付23:00）年中無休' },
              { label: '駐車場', value: '無料駐車場あり（店舗前）' },
              { label: '館山市から', value: '車で約40〜50分（館山自動車道・君津IC経由）' },
              { label: '鋸南から', value: '車で約30〜40分（国道127号線または館山道経由）' },
              { label: '鴨川から', value: '車で約50〜60分（国道465号線経由）' },
              { label: '君津ICから', value: '車で約10分' },
            ].map((item) => (
              <div key={item.label} className="flex gap-6 py-3">
                <dt className="w-28 shrink-0 text-greige-400 tracking-wide">{item.label}</dt>
                <dd className="text-stone-700 leading-loose">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="FAQ" ja="よくある質問" />
          <div className="mt-8 space-y-4">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="border border-sand-200 bg-cream-50 p-6">
                <p className="text-sm font-medium text-stone-800 mb-3 tracking-wide">
                  <span className="font-en text-brown-400 mr-2">Q.</span>
                  {item.name}
                </p>
                <p className="text-sm text-stone-700 leading-loose pl-5">
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-12 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
              { label: '富津方面からお越しの方', href: '/area/futtsu' },
              { label: '房総エリアの方へ', href: '/area/boso' },
              { label: 'アクセス・駐車場', href: '/access' },
              { label: 'メニュー・料金', href: '/menu' },
              { label: 'よくある質問', href: '/faq' },
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

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">
            Reservation
          </p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">
            ご予約はこちらから
          </h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業・当日予約OK・無料駐車場完備。安房・南房総方面からのご来店もお気軽にどうぞ。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton
              href={HPB_URL}
              label="ホットペッパーで予約する"
              variant="light"
              size="lg"
            />
            <ReserveButton
              href="/access"
              label="アクセスを確認する"
              variant="outline"
              size="lg"
            />
          </div>
        </div>
      </section>
    </>
  )
}
