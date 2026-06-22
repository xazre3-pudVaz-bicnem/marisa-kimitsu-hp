import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '館山方面からもみほぐし・マッサージをお探しなら｜MARISA 君津店',
  description: '館山・南房総方面からMARISA君津店へのご来店を歓迎しています。国道127号線または館山自動車道でアクセス便利。夜0時まで営業・無料駐車場あり。',
  keywords: ['館山 マッサージ', '館山 もみほぐし', '南房総 マッサージ 近く', '館山 リラクゼーション', '内房 もみほぐし'],
  openGraph: {
    title: '館山方面からもみほぐし・マッサージをお探しなら｜MARISA 君津店',
    description: '館山・南房総方面からMARISA君津店へのご来店を歓迎しています。夜0時まで営業・無料駐車場あり。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/area/tateyama' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '館山からMARISAまでどのくらいかかりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '館山市内からは国道127号線を北上するルートで約40〜50分程度です。館山自動車道を利用すると富津中央ICや君津ICで降りてアクセスすることもできます。道路状況によって多少前後しますが、内房エリアからのご来店が増えています。',
      },
    },
    {
      '@type': 'Question',
      name: '駐車場はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、店舗前に無料駐車場をご用意しています。館山方面からお越しの方のほとんどが車でいらっしゃいます。駐車場に停めてそのまま来店いただけますのでご安心ください。',
      },
    },
    {
      '@type': 'Question',
      name: '当日予約はできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、当日予約も承っています。ホットペッパービューティーからのオンライン予約がスムーズです。空き状況をリアルタイムで確認できますので、出発前にご確認いただくと安心です。最終受付は23時ですので、夕方以降のご来店も歓迎しています。',
      },
    },
  ],
}

export default function AreaTateyamaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: '地域・エリア別', href: '/area/kimitsu' }, { label: '館山方面からお越しの方' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">From Tateyama</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              館山・南房総方面からのご来店も歓迎しています
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              館山市・南房総市方面からMARISA君津店へのご来店をお待ちしています。
              国道127号線を北上してアクセスいただけます。
              南房総エリアでリラクゼーションサロンをお探しの方も、ぜひ君津のMARISAへお越しください。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Access" ja="館山からMARISAへのアクセス" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              館山市内からMARISA君津店へは、国道127号線（内房なぎさライン）を北上するルートが便利です。館山から君津方面へ向かい、所要時間は交通状況にもよりますが40〜50分程度を目安にお越しください。内房エリアの海沿いルートは景色も楽しめますので、ドライブがてらのご来店もおすすめです。
            </p>
            <p>
              高速道路をご利用の場合は、館山自動車道を利用して富津中央ICまたは君津ICで降りるルートもあります。高速を使うと時間を短縮できる場合があります。いずれのルートでも、店舗前に無料駐車場をご用意していますので、そのまま安心してお停めいただけます。
            </p>
            <p>
              南房総エリアにはリラクゼーションサロンの選択肢が限られているため、館山・南房総・鋸南方面からわざわざMARISAまで足を運んでいただくお客様も多くいらっしゃいます。夜0時まで営業しておりますので、日中のお出かけやお仕事の後でも余裕を持ってご来店いただけます。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="MARISA" ja="館山方面から選ばれる理由" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAが館山・南房総エリアからもお選びいただける理由のひとつが、夜0時まで（最終受付23時）という営業時間の長さです。南房総方面から夕方以降に来店し、施術後に帰宅するというご利用パターンが定着しています。営業時間内であれば当日予約も可能ですので、思い立ったときにすぐご来店いただけます。
            </p>
            <p>
              もみほぐし45分¥3,500〜という手頃な料金設定も、遠方からお越しのお客様に喜ばれています。60分¥4,500〜、90分¥6,500〜と時間を選べますので、その日の体の状態や滞在時間に合わせてお選びください。ヘッドセット60分（¥5,000〜）や足つぼセット（¥5,500〜）も人気のコースです。
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/menu/body-care" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">もみほぐしを見る →</Link>
            <Link href="/access" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">アクセス・地図を見る →</Link>
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
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
              { label: '南房総・鋸南方面からお越しの方', href: '/area/minamiboso' },
              { label: 'メニュー・料金', href: '/menu' },
              { label: 'よくある質問', href: '/faq' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="border border-sand-300 px-3 py-1.5 text-stone-700 hover:border-brown-300 hover:text-brown-500 transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">ご予約はこちらから</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業・当日予約OK。<br />
            君津のリラクゼーションサロン MARISA。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton href="/menu" label="メニューを見る" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
