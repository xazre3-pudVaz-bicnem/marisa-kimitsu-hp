import type { Metadata } from 'next'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, SHOP_INFO, PHONE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'アクセス・駐車場｜千葉県君津市｜MARISA 君津店',
  description:
    '千葉県君津市杢師3-20-10。もみほぐし・MARISA 君津店のアクセス・駐車場情報。君津駅から車で約5分。無料駐車場完備。10:00〜24:00営業・年中無休。',
  alternates: { canonical: '/access' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'もみほぐし・MARISA 君津店',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '杢師3-20-10',
    addressLocality: '君津市',
    addressRegion: '千葉県',
    addressCountry: 'JP',
  },
  telephone: PHONE,
  openingHours: 'Mo-Su 10:00-24:00',
  url: 'https://marisa-kimitsu.com',
  priceRange: '¥¥',
  description:
    '千葉県君津市にあるリラクゼーションサロン。もみほぐし・ヘッドケア・足つぼなど。夜0時まで営業・当日予約OK・無料駐車場完備。',
}

export default function AccessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ===== Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'アクセス' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Access</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800">
              アクセス・お車でのご来店も安心
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              千葉県君津市杢師3-20-10。無料駐車場完備。君津駅から車で約5分、君津インターから約10分とアクセスしやすい立地です。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Basic Info ===== */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Shop Info" ja="店舗情報" />
          <dl className="mt-8 divide-y divide-sand-200 text-sm">
            {[
              { label: '店舗名', value: SHOP_INFO.name },
              { label: '住所', value: SHOP_INFO.address },
              { label: '郵便番号', value: SHOP_INFO.postalCode },
              { label: '電話番号', value: PHONE },
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
        </div>
      </section>

      {/* ===== Map ===== */}
      <section className="py-12 bg-cream-100">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="aspect-video w-full">
            <iframe
              src={SHOP_INFO.googleMapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MARISA 君津店 地図"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href={SHOP_INFO.googleMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
            >
              Google マップで開く →
            </a>
          </div>
        </div>
      </section>

      {/* ===== Access Details ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="How to Get Here"
            ja="各方面からのアクセス"
            lead="お車でのご来店が便利です。周辺各地からのルートをご案内します。"
          />
          <div className="mt-10 space-y-6">
            <div className="border border-sand-200 p-6">
              <p className="font-en text-[10px] tracking-widest uppercase text-brown-400 mb-1">By Car from Station</p>
              <h2 className="text-sm font-medium text-stone-800 mb-3 tracking-wide">君津駅からお越しの方（車で約5分）</h2>
              <p className="text-sm text-stone-700 leading-loose">
                君津駅南口を出て、国道127号線方面に向かいます。杢師交差点を目印に進んでいただくと、店舗前の無料駐車場へお入りいただけます。駅からは車で5分程度のアクセスです。公共交通機関をご利用の場合は、君津駅からタクシーまたはバスをご利用ください。
              </p>
            </div>
            <div className="border border-sand-200 p-6">
              <p className="font-en text-[10px] tracking-widest uppercase text-brown-400 mb-1">By Car from Highway</p>
              <h2 className="text-sm font-medium text-stone-800 mb-3 tracking-wide">君津インターからお越しの方（車で約10分）</h2>
              <p className="text-sm text-stone-700 leading-loose">
                館山自動車道「君津インター」を降りて、国道127号線を君津市街方面へ進みます。杢師3丁目付近を目指してお越しください。インターからのアクセスは約10分です。カーナビには「千葉県君津市杢師3-20-10」とご入力ください。
              </p>
            </div>
            <div className="border border-sand-200 p-6">
              <p className="font-en text-[10px] tracking-widest uppercase text-brown-400 mb-1">From Kisarazu</p>
              <h2 className="text-sm font-medium text-stone-800 mb-3 tracking-wide">木更津方面からお越しの方</h2>
              <p className="text-sm text-stone-700 leading-loose">
                木更津方面からは国道127号線を南下し、君津市街方面へ向かいます。木更津駅から車で約20分程度です。木更津市・袖ケ浦市方面からも多くのお客様にご来店いただいています。館山自動車道をご利用の場合は、君津インターをご利用ください。
              </p>
            </div>
            <div className="border border-sand-200 p-6">
              <p className="font-en text-[10px] tracking-widest uppercase text-brown-400 mb-1">Surrounding Areas</p>
              <h2 className="text-sm font-medium text-stone-800 mb-3 tracking-wide">富津・鋸南・市原方面からお越しの方</h2>
              <p className="text-sm text-stone-700 leading-loose">
                富津市・鋸南町方面からは国道127号線を北上し、君津市杢師方面へ向かいます。市原市方面からは館山自動車道をご利用いただくと便利です。周辺市町村からも多くのお客様にご利用いただいています。お気軽にお越しください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Exterior Photos ===== */}
      <section className="py-8 bg-cream-50">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="relative aspect-[4/3] overflow-hidden lg:col-span-2">
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
          <p className="mt-3 text-xs text-greige-400 tracking-wide">
            ▲ 店舗外観・駐車場のようす。店舗前に無料駐車場を完備しています。
          </p>
        </div>
      </section>

      {/* ===== Parking Info ===== */}
      <section className="py-14 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Parking" ja="駐車場のご案内" />
          <div className="mt-6 text-sm text-stone-700 leading-loose space-y-4">
            <p>
              店舗前に無料駐車場を完備しています。お客様専用の駐車スペースをご用意していますので、お車でのご来店も安心です。
            </p>
            <p>
              「近くにコインパーキングを探すのが大変」「駐車場の料金が気になる」といった心配は不要です。無料でご利用いただける駐車場がありますので、ゆっくりとご来店ください。
            </p>
            <p>
              駐車場の混雑状況や場所についてご不明な点がありましたら、ご来店前にお電話にてご確認いただけます。
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">ご予約はこちらから</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            無料駐車場完備。夜0時まで営業・当日予約OK。<br />
            ホットペッパービューティーからかんたんにご予約いただけます。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton href="/reservation" label="予約方法を見る" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
