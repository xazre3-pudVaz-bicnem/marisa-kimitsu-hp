import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { BMERIT_URL, HPB_URL, LINE_URL, SHOP_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '房総エリアのマッサージ・もみほぐし｜MARISA 君津店',
  description: '房総エリア（君津・木更津・富津・袖ケ浦・市原）でもみほぐし・マッサージをお探しなら。MARISA 君津店は夜0時まで・当日予約OK・無料駐車場完備。',
  keywords: ['房総 マッサージ', '房総 もみほぐし', '千葉南部 マッサージ', '房総半島 リラクゼーション'],
  openGraph: {
    title: '房総エリアのマッサージ・もみほぐし｜MARISA 君津店',
    description: '房総エリア（君津・木更津・富津・袖ケ浦・市原）でもみほぐし・マッサージをお探しなら。MARISA 君津店は夜0時まで・当日予約OK・無料駐車場完備。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/area/boso' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '房総エリアのどこから来店できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '君津・木更津・富津・袖ケ浦・市原・館山・南房総・鋸南など房総半島全域からお越しいただけます。館山自動車道や国道127号線でアクセスできるエリア全般からのご来店を歓迎しています。',
      },
    },
    {
      '@type': 'Question',
      name: '遠くからでもアクセスできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、館山自動車道をご利用いただくと房総各地からスムーズにアクセスできます。館山・鋸南方面から約30〜50分、鴨川方面からは約50〜60分を目安にお越しください。無料駐車場も完備しています。',
      },
    },
    {
      '@type': 'Question',
      name: '君津以外の方も来店されますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、木更津・富津・袖ケ浦・市原・館山・南房総など多くのエリアからお越しいただいています。房総エリアのリラクゼーションサロンとして、広域からのご来店を歓迎しています。',
      },
    },
    {
      '@type': 'Question',
      name: '鍼灸もできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、鍼灸・美容鍼のメニューをご用意しています。鍼灸のご予約はBMERITよりお申し込みください。もみほぐしと組み合わせてのご利用も可能です。',
      },
    },
    {
      '@type': 'Question',
      name: '予約方法は？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ホットペッパービューティーからのオンライン予約が便利です。24時間いつでも空き状況を確認してご予約いただけます。遠方からお越しの場合は事前予約をおすすめします。当日予約も可能です。',
      },
    },
  ],
}

const menus = [
  { name: 'もみほぐし', time: '45分〜', price: '¥3,500〜', href: '/menu/body-care', desc: '肩こり・腰痛・全身の疲れをしっかりほぐします' },
  { name: 'ヘッドリラックス', time: '60分〜', price: '¥5,000〜', href: '/menu/head', desc: '頭・首・肩のコリをまとめてケア' },
  { name: '足つぼ', time: '45分〜', price: '¥3,500〜', href: '/menu/foot', desc: '立ち仕事・歩き疲れに。足裏から全身をサポート' },
  { name: '鍼灸・美容鍼', time: '60分〜', price: '要予約', href: BMERIT_URL, desc: '本格的な鍼施術。BMERITよりご予約ください', external: true },
]

const areaList = [
  { name: '君津市', time: '〜10分', note: '最寄りエリア' },
  { name: '木更津市', time: '約25〜30分', note: '館山自動車道経由' },
  { name: '富津市', time: '約15〜20分', note: '国道127号線経由' },
  { name: '袖ケ浦市', time: '約20〜25分', note: '館山自動車道経由' },
  { name: '市原市', time: '約30〜40分', note: '館山自動車道経由' },
  { name: '館山市', time: '約40〜50分', note: '館山自動車道経由' },
  { name: '南房総市・鋸南町', time: '約30〜40分', note: '国道127号線経由' },
  { name: '鴨川市', time: '約50〜60分', note: '国道465号線経由' },
]

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
              君津・木更津・富津・袖ケ浦・市原・館山・南房総など房総エリアの方も、館山自動車道または国道127号線を利用して君津のMARISAへお越しいただけます。千葉県南部の中心的な立地で、房総各地からのアクセスポイントとなっています。
            </p>
          </div>
        </div>
      </div>

      {/* Access from Boso area */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Access from Boso" ja="房総各地からのアクセス詳細" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              房総半島の各エリアから、MARISAがある君津市へのアクセスをご案内します。君津市は房総半島の北部に位置し、館山自動車道の重要インターがある立地です。半島各地からの玄関口として、房総エリアからのアクセスが比較的しやすい場所にあります。
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

          {/* Area access table */}
          <div className="mt-10">
            <p className="font-medium text-stone-800 tracking-wide text-sm mb-4">房総各地からの所要時間目安</p>
            <div className="divide-y divide-sand-200 border border-sand-200">
              {areaList.map((a) => (
                <div key={a.name} className="flex gap-4 px-4 py-3 text-sm bg-cream-50">
                  <span className="w-32 shrink-0 text-stone-800">{a.name}</span>
                  <span className="w-24 shrink-0 text-brown-400 font-medium">{a.time}</span>
                  <span className="text-greige-400 text-xs self-center">{a.note}</span>
                </div>
              ))}
            </div>
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
              MARISAは技術と接客にこだわり、お客様一人ひとりのお体の状態に合わせた施術をご提供しています。「房総のサロンより丁寧に施術してもらえる」というお声もいただいており、遠方からお越しいただく価値を感じていただいています。
            </p>
            <p>
              夜0時まで営業（最終受付23:00）・年中無休という環境は、仕事の関係や家族の都合で昼間に来店しにくい方にも対応しています。無料駐車場を完備しているため、お車でのご来店がスムーズです。
            </p>
            <p>
              もみほぐし45分3,500円〜のリーズナブルな価格で、質の高い施術をご提供しています。ヘッドリラックス・足つぼなども人気です。遠方からお越しいただく分、しっかりとした施術でご満足いただける内容を心がけています。
            </p>
            <p>
              鍼灸・美容鍼もご用意しており（BMERITよりご予約）、もみほぐしでは届きにくい体の深部からのサポートにも対応しています。
            </p>
          </div>
        </div>
      </section>

      {/* Menu Cards */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Menu" ja="対応メニュー" lead="房総エリアからお越しの方にもご利用いただけるメニューをご紹介します" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {menus.map((m) => (
              <Link
                key={m.name}
                href={m.href}
                target={m.external ? '_blank' : undefined}
                rel={m.external ? 'noopener noreferrer' : undefined}
                className="block bg-cream-50 border border-sand-200 p-5 hover:border-brown-300 transition-colors"
              >
                <p className="font-medium text-stone-800 tracking-wide mb-1">{m.name}</p>
                <p className="text-xs text-greige-400 mb-2">{m.time} / {m.price}</p>
                <p className="text-xs text-stone-700 leading-relaxed">{m.desc}</p>
              </Link>
            ))}
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
              { label: '安房・館山方面からお越しの方', href: '/area/awa' },
              { label: '南房総・鋸南方面からお越しの方', href: '/area/minamiboso' },
              { label: 'アクセス・駐車場', href: '/access' },
              { label: 'メニュー・料金', href: '/menu' },
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
            {LINE_URL && (
              <ReserveButton
                href={LINE_URL}
                label="LINEで問い合わせ"
                variant="outline"
                size="lg"
              />
            )}
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
