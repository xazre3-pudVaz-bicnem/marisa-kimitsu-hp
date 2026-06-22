import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '千葉・君津・木更津・房総エリアからのもみほぐし｜MARISA 君津店',
  description:
    '君津・木更津・富津・袖ケ浦・市原・南房総など千葉県南部エリアからアクセスできるリラクゼーションサロン MARISA。夜0時まで営業・無料駐車場・当日予約OK。',
  keywords: ['君津 マッサージ', '木更津 もみほぐし', '千葉南部 マッサージ', '房総 リラクゼーション'],
  openGraph: {
    title: '千葉・君津・房総エリアからのもみほぐし｜MARISA 君津店',
    description: '千葉県南部エリア各地からアクセスできるもみほぐしサロン。夜0時まで・無料駐車場完備。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/area' },
}

const areaLinks = [
  {
    label: '君津でマッサージをお探しの方',
    sub: '最重要エリアページ',
    href: '/area/kimitsu',
    keywords: '君津 マッサージ / 君津 もみほぐし',
    time: '地元',
  },
  {
    label: '木更津方面からお越しの方',
    sub: '木更津・君津エリア',
    href: '/area/kisarazu',
    keywords: '木更津 もみほぐし',
    time: '車で約20分',
  },
  {
    label: '富津方面からお越しの方',
    sub: '富津・天羽エリア',
    href: '/area/futtsu',
    keywords: '富津 マッサージ',
    time: '車で約15〜20分',
  },
  {
    label: '袖ケ浦方面からお越しの方',
    sub: '袖ケ浦・木更津エリア',
    href: '/area/sodegaura',
    keywords: '袖ケ浦 もみほぐし',
    time: '車で約25分',
  },
  {
    label: '市原方面からお越しの方',
    sub: '市原・五井エリア',
    href: '/area/ichihara',
    keywords: '市原 マッサージ',
    time: '車で約30〜40分',
  },
  {
    label: '館山方面からお越しの方',
    sub: '館山・南房総エリア',
    href: '/area/tateyama',
    keywords: '館山 マッサージ',
    time: '車で約40〜50分',
  },
  {
    label: '南房総・鋸南方面からお越しの方',
    sub: '南房総・鋸南エリア',
    href: '/area/minamiboso',
    keywords: '南房総 もみほぐし',
    time: '車で約30〜40分',
  },
  {
    label: '千葉南部エリアの方',
    sub: '千葉県南部全域',
    href: '/area/chiba-south',
    keywords: '千葉南部 マッサージ',
    time: '各地から',
  },
  {
    label: '君津駅周辺の方',
    sub: '君津駅から車5分',
    href: '/area/kimitsu-station',
    keywords: '君津駅 マッサージ',
    time: '駅から車5分',
  },
  {
    label: '君津インター近くの方',
    sub: '館山道・高速利用者',
    href: '/area/kimitsu-ic',
    keywords: '君津IC マッサージ',
    time: 'ICから車10分',
  },
  {
    label: '安房・南房総方面の方',
    sub: '鴨川・鋸山・富山エリア',
    href: '/area/awa',
    keywords: '安房 マッサージ',
    time: '車で約40〜50分',
  },
  {
    label: '房総エリア全般',
    sub: '房総半島各地',
    href: '/area/boso',
    keywords: '房総 リラクゼーション',
    time: '各地から',
  },
]

export default function AreaIndexPage() {
  return (
    <>
      {/* ===== Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'エリア別アクセス' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Area Guide</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              千葉県南部・房総エリアからのアクセス
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              もみほぐし・MARISA 君津店は、君津市・木更津市・富津市・袖ケ浦市・市原市・南房総エリアなど千葉県南部全域からアクセスしやすい立地にあります。無料駐車場完備・夜0時まで営業・当日予約OKで、遠方からのお客様にも気軽にご利用いただけます。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Area Grid ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Area Links"
            ja="エリア別ご案内"
            lead="お住まいのエリアをお選びください。アクセス方法・所要時間・地域別の情報をご覧いただけます。"
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {areaLinks.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="group border border-sand-200 bg-cream-50 p-6 hover:border-brown-300 transition-colors block"
              >
                <p className="font-en text-[10px] tracking-widest text-brown-400 mb-1 uppercase">{area.keywords}</p>
                <h2 className="text-sm font-medium text-stone-800 mb-1 tracking-wide group-hover:text-brown-500 transition-colors">
                  {area.label}
                </h2>
                <p className="text-xs text-greige-400 mb-3">{area.sub}</p>
                <p className="text-xs text-stone-700 border-t border-sand-200 pt-3 mt-3">
                  目安: <span className="text-brown-400">{area.time}</span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Shop Access Summary ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Access" ja="MARISA 君津店へのアクセス" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              当店は千葉県君津市杢師3-20-10に位置しています。館山自動車道「君津IC」から車で約10分、JR内房線「君津駅」南口から車で約5分とアクセスしやすい立地です。
            </p>
            <p>
              木更津方面からは国道127号線を南下して約20分、富津・天羽方面からは国道127号線を北上して約15〜20分です。高速道路（館山自動車道）をご利用の場合は、君津ICが最寄りのICとなります。
            </p>
            <p>
              店舗前に無料駐車場を完備していますので、お車でのご来店も安心です。年中無休・夜0時まで（最終受付23:00）営業していますので、お仕事帰りや週末のご来店も気軽にお越しください。
            </p>
          </div>
          <div className="mt-6">
            <Link href="/access" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
              詳細なアクセス情報・地図はこちら →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Scene Links ===== */}
      <section className="py-12 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 uppercase mb-6">シーン別のご案内</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            {[
              { label: '仕事帰りに通いたい', href: '/scene/after-work' },
              { label: '当日予約したい', href: '/scene/same-day' },
              { label: '車で通いたい', href: '/scene/parking' },
              { label: 'ペアで利用したい', href: '/scene/pair' },
              { label: '男性の方', href: '/scene/men' },
              { label: '女性の方', href: '/scene/ladies' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="border border-sand-300 bg-cream-50 px-3 py-3 text-stone-700 hover:border-brown-300 hover:text-brown-500 transition-colors text-center">
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
            千葉県南部・房総エリアのもみほぐしサロン MARISA 君津店。
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
