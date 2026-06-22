import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, SHOP_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '無料駐車場完備・車でお越しください｜MARISA 君津店',
  description:
    '君津市のもみほぐし・MARISA 君津店は店舗前に無料駐車場完備。君津駅から車で5分、君津ICから10分。車でのご来店も安心。コインパーキング不要。夜0時まで営業。',
  keywords: ['君津 駐車場あり マッサージ', '君津 駐車場 もみほぐし', '君津市 車 マッサージ', '君津 無料駐車場 リラクゼーション'],
  openGraph: {
    title: '無料駐車場完備｜MARISA 君津店',
    description: '店舗前に無料駐車場。君津駅から車で5分。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/scene/parking' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '駐車場は無料ですか？何台停められますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、店舗前の駐車場は無料です。お客様専用の駐車スペースをご用意しています。台数が限られる場合がありますので、満車の際はお電話でご確認いただくか、近隣をご利用ください。',
      },
    },
    {
      '@type': 'Question',
      name: '君津ICからMARISAまでどのくらいかかりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '館山自動車道「君津インターチェンジ」から車で約10分です。インターを降りて君津市街方面へ進み、カーナビに「千葉県君津市杢師3-20-10」と入力してください。',
      },
    },
    {
      '@type': 'Question',
      name: '君津駅からタクシーや路線バスで来られますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'タクシーは君津駅から約5分でご来店いただけます。路線バスについては、最寄りのバス停からのルートをご確認ください。お車でのご来店が最も便利です。',
      },
    },
  ],
}

export default function SceneParkingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ===== Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: '地域・シーン別', href: '/area/kimitsu' }, { label: '車で通いたい方' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Free Parking</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              無料駐車場完備。<br className="hidden sm:block" />
              お車でのご来店も安心です。
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              MARISAは店舗前に無料駐車場を完備しています。君津市は車社会。コインパーキングを探す手間もなく、施術後そのままお帰りいただけます。君津駅から車で約5分、君津ICから約10分。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Parking info ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Parking Info" ja="駐車場のご案内" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAは千葉県君津市杢師3-20-10に位置するリラクゼーションサロンです。君津市はお車での移動が中心の地域であることを考慮し、店舗前に無料駐車場を完備しています。ご来店前に駐車場を確保するためのコインパーキング探しや駐車料金の心配は不要です。
            </p>
            <p>
              施術の前後にゆっくりと準備・帰宅できる環境を整えています。施術直後は体がほぐれてリラックスした状態になりますので、お帰りの際もゆっくりとお過ごしください。
            </p>
            <div className="border border-sand-200 p-6">
              <dl className="space-y-2 text-xs">
                <div className="flex gap-4"><dt className="text-greige-400 w-24 shrink-0">駐車場</dt><dd>無料（店舗前）</dd></div>
                <div className="flex gap-4"><dt className="text-greige-400 w-24 shrink-0">住所</dt><dd>{SHOP_INFO.address}</dd></div>
                <div className="flex gap-4"><dt className="text-greige-400 w-24 shrink-0">営業時間</dt><dd>10:00〜24:00（最終受付23:00）</dd></div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Photo ===== */}
      <section className="py-4 bg-cream-50">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/LINE_ALBUM_もみほぐしMARISA_260615_28.jpg"
                alt="君津 もみほぐし marisa 外観 駐車場"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/LINE_ALBUM_もみほぐしMARISA_260615_1.jpg"
                alt="君津 もみほぐし marisa 店舗外観"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          <p className="mt-2 text-xs text-greige-400">▲ 店舗外観・駐車場のようす</p>
        </div>
      </section>

      {/* ===== Access routes ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Routes" ja="各方面からのアクセス" />
          <div className="mt-8 space-y-5">
            {[
              {
                en: 'From Station',
                title: '君津駅から（車で約5分）',
                body: '君津駅南口を出て国道方面へ。杢師3丁目付近が目印です。カーナビに住所を入力するとスムーズにご来店いただけます。',
              },
              {
                en: 'From Highway',
                title: '君津インターから（車で約10分）',
                body: '館山自動車道「君津IC」を降りて、君津市街方面へ。インターから10分程度でご来店いただけます。夜の利用でも迷いにくいルートです。',
              },
              {
                en: 'From Kisarazu',
                title: '木更津方面から（車で約20分）',
                body: '国道127号線を南下、または館山自動車道をご利用ください。木更津エリアからも多くのお客様にご来店いただいています。',
              },
              {
                en: 'From Futtsu / Kanozan',
                title: '富津・鋸南方面から',
                body: '国道127号線を北上し、君津市杢師方面へ。南房総エリアからも車でお越しいただけます。',
              },
            ].map((r) => (
              <div key={r.en} className="border border-sand-200 bg-cream-50 p-6">
                <p className="font-en text-[10px] tracking-widest uppercase text-brown-400 mb-1">{r.en}</p>
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{r.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{r.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/access" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
              詳しいアクセスを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="FAQ" ja="駐車場・アクセスに関するよくある質問" />
          <div className="mt-8 space-y-4">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="border border-sand-200 p-6">
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

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">お車でそのままお越しください</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            無料駐車場完備。夜0時まで営業・当日予約OK。<br />
            千葉県君津市杢師3-20-10。
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
