import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '南房総・鋸南方面からもみほぐしをお探しなら｜MARISA 君津店',
  description: '南房総・鋸南方面からMARISA君津店へのご来店を歓迎しています。国道127号線を北上してアクセス可能。週末の観光帰りにも立ち寄れます。夜0時まで営業。',
  keywords: ['南房総 マッサージ', '鋸南 もみほぐし', '鋸山 近く マッサージ', '南房総 リラクゼーション', '鋸南 マッサージ'],
  openGraph: {
    title: '南房総・鋸南方面からもみほぐしをお探しなら｜MARISA 君津店',
    description: '南房総・鋸南方面からMARISA君津店へのご来店を歓迎しています。週末の観光帰りにも立ち寄れます。夜0時まで営業。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/area/minamiboso' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '鋸南・南房総からMARISAまでのアクセス方法を教えてください。',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '鋸南町・南房総市方面からは、国道127号線（内房なぎさライン）を北上するルートが一般的です。鋸南からは約30〜40分程度を目安にお越しください。館山自動車道を利用の場合は鋸南保田ICから乗り、富津中央ICまたは君津ICで降りるルートもあります。店舗前に無料駐車場があります。',
      },
    },
    {
      '@type': 'Question',
      name: '週末の観光帰りに立ち寄れますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、週末に鋸山や南房総の観光・ハイキングの帰りにお立ち寄りいただくお客様もいらっしゃいます。最終受付は23時ですので、夕方以降でもお気軽にご来店いただけます。ハイキングや観光で歩き疲れた体をほぐすのに喜ばれています。',
      },
    },
    {
      '@type': 'Question',
      name: '予約なしで行っても大丈夫ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '当日予約も承っておりますが、遠方からお越しの場合は事前にご予約されることをおすすめしています。ホットペッパービューティーからオンライン予約いただくと、空き状況をリアルタイムで確認できます。出発前にスマホでご確認いただくと安心してお越しいただけます。',
      },
    },
  ],
}

export default function AreaMinamibosoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: '地域・エリア別', href: '/area/kimitsu' }, { label: '南房総・鋸南方面からお越しの方' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">From Minamiboso</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              南房総・鋸南方面からのご来店も歓迎しています
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              南房総市・鋸南町方面からMARISA君津店へのご来店をお待ちしています。
              国道127号線を北上してアクセスいただける、内房エリアのリラクゼーションサロンです。
              週末の鋸山ハイキングや南房総観光の帰りにも立ち寄れます。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Access" ja="南房総・鋸南からのアクセス" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              南房総市・鋸南町方面からMARISA君津店へは、国道127号線（内房なぎさライン）を北上するルートが便利です。鋸南町内からは約30〜40分程度を目安にお越しください。南房総市内からは道路状況により45分〜50分程度かかる場合があります。内房の海岸線沿いを走る気持ちのよいドライブルートですので、お出かけのついでにお立ち寄りいただけます。
            </p>
            <p>
              高速道路をご利用の場合は、館山自動車道の鋸南保田ICから乗り、富津中央ICまたは君津ICで降りるルートがあります。一般道と比べて時間を短縮できる場合がありますので、急いでいるときや夜間のご利用に便利です。店舗前には無料駐車場をご用意していますので、車でそのままお越しいただけます。
            </p>
            <p>
              鋸山（のこぎりやま）は鋸南町と富津市の境に位置する人気スポットで、ハイキングや日本寺観光を楽しむ方も多くいらっしゃいます。鋸山でたっぷり歩いた後、帰り道にMARISAへ立ち寄り、疲れた脚や体をほぐしてから帰るというご利用パターンも喜ばれています。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="MARISA" ja="観光・週末のご利用もおすすめ" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              南房総エリアは豊かな自然と観光スポットに恵まれており、週末には多くの方がハイキングや海岸散歩などのアクティビティを楽しまれています。アウトドアを楽しんだ後の体のケアにも、MARISAのもみほぐしをご活用ください。ウォーキングやハイキングで疲れた脚・腰のケアには、もみほぐし60〜90分コースが特に喜ばれています。
            </p>
            <p>
              南房総エリアにはリラクゼーションサロンが少ないため、君津市内にあるMARISAまで足を運んでいただく方も増えています。夜0時まで（最終受付23時）営業していますので、日中のお出かけや観光の後でも余裕を持ってご来店いただけます。当日予約もホットペッパービューティーから可能ですので、お気軽にどうぞ。
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
              { label: '館山方面からお越しの方', href: '/area/tateyama' },
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
