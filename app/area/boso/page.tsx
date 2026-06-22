import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, SHOP_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '房総エリアのもみほぐし・マッサージ｜MARISA 君津店',
  description: '房総エリア（鴨川・鋸南・南房総方面）からもアクセス可能なもみほぐしサロン。千葉県南部の中心・君津市に位置するMARISA。夜0時まで営業・無料駐車場完備。',
  keywords: ['房総 マッサージ', '房総 もみほぐし', '房総半島 リラクゼーション', '南房総 マッサージ', '鴨川 マッサージ'],
  openGraph: {
    title: '房総エリアのもみほぐし・マッサージ｜MARISA 君津店',
    description: '房総エリアから館山自動車道や国道127号線でアクセス可能なもみほぐしサロン。夜0時まで営業・無料駐車場完備。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/area/boso' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '鴨川・南房総方面からMARISAへのアクセスはどのくらいかかりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '鴨川方面からは国道465号線または国道127号線経由で、車で約50〜60分ほどです。南房総・館山方面からは館山自動車道または国道127号線経由で約40〜50分を目安にお越しください。',
      },
    },
    {
      '@type': 'Question',
      name: '鋸南方面からはどのようなルートでお越しになれますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '鋸南方面からは国道127号線を北上し、富津市を経由して君津市へお越しください。車で約30〜40分ほどでお到着いただけます。館山自動車道の富津竹岡インターをご利用の場合は、君津インターまで高速を利用いただくとスムーズです。',
      },
    },
    {
      '@type': 'Question',
      name: '房総エリアから来ても空席がありますか？事前予約は必要ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '遠方からお越しの場合は事前予約を強くおすすめしています。ホットペッパービューティーから24時間いつでもオンライン予約が可能です。せっかくお越しいただいて満席でご案内できないことがないよう、お早めにご予約ください。',
      },
    },
  ],
}

export default function AreaBosoPage() {
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
              { label: '房総エリアの方へ' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">
              Boso Area
            </p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              房総エリアの方々にもご利用いただけます
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              鴨川・鋸南・南房総など房総エリアの方も、館山自動車道または国道127号線を利用して君津のMARISAへお越しいただけます。千葉県南部の中心的な立地で、房総各地からのアクセスポイントとなっています。
            </p>
          </div>
        </div>
      </div>

      {/* Access from Boso area */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Access from Boso" ja="房総各地からのアクセス" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              房総半島の各エリアから、MARISAがある君津市へのアクセスをご案内します。君津市は房総半島の北部に位置し、館山自動車道の終点に近い立地です。半島各地からの玄関口として、房総エリアからのアクセスが比較的しやすい場所にあります。
            </p>
            <p>
              鋸南・保田方面からは、国道127号線を北上して富津市を経由し、君津市へお越しください。車で約30〜40分ほどです。館山自動車道をご利用の場合は、富津竹岡インターから乗車して君津インターで下車すると便利です。
            </p>
            <p>
              南房総・館山方面からは、館山自動車道（富津館山道路を含む）を北上してお越しいただくのが最もスムーズです。館山インターから乗車し、君津インターで下車してください。約40〜50分を目安にお越しください。
            </p>
            <p>
              鴨川方面からは、国道465号線または国道128号線を経由して君津方面へ向かってください。山を越えるルートになりますが、車で約50〜60分ほどです。道路状況によって変動しますので、余裕を持ってお越しください。
            </p>
          </div>
        </div>
      </section>

      {/* Why Boso residents visit MARISA */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Why Visit MARISA" ja="房総エリアから君津MARISAを利用する理由" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              房総エリアの南部は、規模の大きなリラクゼーションサロンが少ないエリアも多く、「近くに良いサロンがない」というお客様も多くいらっしゃいます。そのような方々が君津のMARISAまで足を運んでくださっています。
            </p>
            <p>
              MARISAは技術と接客にこだわり、お客様一人ひとりのお体の状態に合わせた施術をご提供しています。「房総のサロンより技術が高い」というお声もいただいており、遠方からお越しいただく価値を感じていただいています。
            </p>
            <p>
              夜0時まで営業（最終受付23:00）・年中無休という環境は、仕事の関係や家族の都合で昼間に来店しにくい方にも対応しています。無料駐車場を完備しているため、お車でのご来店がスムーズです。
            </p>
            <p>
              もみほぐし45分3,500円〜のリーズナブルな価格で、質の高い施術をご提供しています。ヘッドリラックス（60分5,000円〜）や足つぼセット（5,500円〜）なども人気です。遠方からお越しいただく分、しっかりとした施術でご満足いただける内容を心がけています。
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
              { label: '鋸南から', value: '車で約30〜40分（国道127号線または館山道経由）' },
              { label: '館山から', value: '車で約40〜50分（館山自動車道経由）' },
              { label: '鴨川から', value: '車で約50〜60分（国道465号線経由）' },
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
            夜0時まで営業・当日予約OK・無料駐車場完備。房総エリアからのご来店もお気軽にどうぞ。
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
