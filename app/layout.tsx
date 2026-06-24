import type { Metadata } from 'next'
import { Noto_Sans_JP, Noto_Serif_JP, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileReserveBar from '@/components/layout/MobileReserveBar'
import { INSTAGRAM_URL, HPB_URL, PHONE, SHOP_INFO } from '@/lib/constants'

const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans',
  display: 'swap',
})

const notoSerif = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-noto-serif',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://marisa-kimitsu.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '君津のもみほぐし・マッサージ｜MARISA 君津店',
    template: '%s｜MARISA 君津店',
  },
  description:
    '千葉県君津市のもみほぐし・リラクゼーションサロン「MARISA 君津店」。肩こり・腰のつらさ・眼精疲労・足のだるさに対応。夜0時まで営業・当日予約OK・無料駐車場あり。君津駅から車5分。',
  keywords: [
    '君津 マッサージ', '君津 もみほぐし', '君津 リラクゼーション',
    '君津 肩こり', '君津 腰痛', '君津 足つぼ', '君津 ヘッドスパ',
    '君津 夜遅く マッサージ', '君津 当日予約', '木更津 もみほぐし',
  ],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: 'MARISA 君津店',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'もみほぐし・MARISA 君津店',
  url: SITE_URL,
  description: '千葉県君津市のもみほぐし・リラクゼーションサロン。肩こり・腰のつらさ・眼精疲労・足のだるさに対応。',
  inLanguage: 'ja',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/blog?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: 'もみほぐし・MARISA 君津店',
  alternateName: 'MARISA 君津店',
  url: SITE_URL,
  telephone: PHONE,
  image: `${SITE_URL}/og-image.jpg`,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 },
  description:
    '千葉県君津市のもみほぐし・リラクゼーションサロン。肩こり・腰のつらさ・眼精疲労・足のだるさ・鍼灸・美容鍼に対応。夜0時まで営業・当日予約OK・無料駐車場あり。',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '杢師3-20-10',
    addressLocality: '君津市',
    addressRegion: '千葉県',
    postalCode: SHOP_INFO.postalCode,
    addressCountry: 'JP',
  },
  geo: { '@type': 'GeoCoordinates', latitude: SHOP_INFO.lat, longitude: SHOP_INFO.lng },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '24:00',
    },
  ],
  priceRange: '¥¥',
  currenciesAccepted: 'JPY',
  paymentAccepted: '現金',
  areaServed: [
    { '@type': 'City', name: '君津市' },
    { '@type': 'City', name: '木更津市' },
    { '@type': 'City', name: '富津市' },
    { '@type': 'City', name: '袖ケ浦市' },
  ],
  hasMap: SHOP_INFO.googleMapUrl,
  sameAs: [INSTAGRAM_URL, HPB_URL],
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: '無料駐車場', value: true },
    { '@type': 'LocationFeatureSpecification', name: '当日予約', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'ペア利用', value: true },
  ],
  knowsAbout: [
    'もみほぐし', 'リラクゼーション', '鍼灸', '美容鍼', 'ヘッドケア', '足つぼ',
    '肩こりケア', '腰のつらさケア', '眼精疲労ケア', '足のだるさケア',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      className={`${notoSans.variable} ${notoSerif.variable} ${cormorant.variable}`}
    >
      <body className="flex flex-col min-h-screen bg-cream-50 text-stone-800">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileReserveBar />
      </body>
    </html>
  )
}
