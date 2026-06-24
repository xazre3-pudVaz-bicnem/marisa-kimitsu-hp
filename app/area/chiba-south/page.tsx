import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { BMERIT_URL, HPB_URL, LINE_URL, SHOP_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '千葉南部エリアのマッサージ・もみほぐし｜MARISA 君津店',
  description: '千葉南部（君津・木更津・富津・袖ケ浦・市原）でもみほぐし・マッサージをお探しなら。MARISA 君津店が対応。夜0時まで・当日予約OK・無料駐車場。',
  keywords: ['千葉南部 マッサージ', '千葉南部 もみほぐし', '千葉 南 リラクゼーション', '千葉県 君津 マッサージ'],
  openGraph: {
    title: '千葉南部エリアのマッサージ・もみほぐし｜MARISA 君津店',
    description: '千葉南部（君津・木更津・富津・袖ケ浦・市原）でもみほぐし・マッサージをお探しなら。MARISA 君津店が対応。夜0時まで・当日予約OK・無料駐車場。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/area/chiba-south' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '千葉南部からどのくらいかかりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '木更津市から約25〜30分、富津市から約15〜20分、袖ケ浦市から約25分、市原市から約30〜40分を目安にお越しください。館山自動車道をご利用いただくと多くのエリアからスムーズにアクセスできます。',
      },
    },
    {
      '@type': 'Question',
      name: '千葉市方面からは来られますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '千葉市方面からは京葉道路・館山自動車道経由で約50〜60分程度となります。やや遠いエリアですが、館山自動車道を利用すると比較的スムーズにお越しいただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '予約は必要ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '当日予約も承っていますが、遠方からお越しの場合はホットペッパービューティーからの事前予約をおすすめしています。24時間いつでもオンラインで空き状況をご確認いただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '鍼灸は受けられますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、鍼灸・美容鍼のメニューをご用意しています。鍼灸のご予約はBMERITよりお申し込みください。もみほぐしと組み合わせてのご利用も可能です。',
      },
    },
    {
      '@type': 'Question',
      name: '夜遅くでも大丈夫ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、夜0時まで営業（最終受付23:00）しています。千葉南部エリアでは夜遅くまで営業しているリラクゼーションサロンは少ないため、仕事帰りや夜のリフレッシュに多くのお客様にご利用いただいています。年中無休です。',
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
]

export default function AreaChibaSouthPage() {
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
              { label: '千葉南部エリアの方へ' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">
              Chiba South Area
            </p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              千葉県南部でマッサージをお探しの方へ
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              君津・木更津・富津・袖ケ浦・市原・館山など千葉県南部エリアの皆様に広くご利用いただいているMARISA君津店。年中無休・夜0時まで営業・無料駐車場完備で、千葉南部のどこからでも通いやすいもみほぐしサロンです。
            </p>
          </div>
        </div>
      </div>

      {/* About Chiba South area */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="About the Area" ja="千葉県南部エリアとMARISAのアクセス" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              千葉県南部は、君津市・木更津市・富津市・袖ケ浦市・市原市・館山市・南房総市・鋸南町などを含む、内房エリアを中心とした広大なエリアです。東京湾沿いに館山自動車道が走り、各市町村を結ぶ交通網が整備されています。
            </p>
            <p>
              このエリアは都市部に比べてリラクゼーションサロンの数が少なく、特に夜遅くまで営業しているサロンや、駐車場完備のサロンは限られています。MARISAはそのような千葉南部エリアのニーズに応えるため、利便性にこだわった運営をしています。
            </p>
            <p>
              君津市は千葉県南部の中心的な都市のひとつで、館山自動車道の君津インターチェンジがあります。このアクセスの良さから、木更津・富津・袖ケ浦・市原方面から来やすい立地となっています。また国道127号線を使えば富津・館山方面からもアクセス可能です。
            </p>
            <p>
              千葉南部エリアは自然豊かで、農業・漁業・工業も盛んな地域です。体を動かす仕事や屋外での活動が多い方にとって、定期的なもみほぐしは体のメンテナンスとして非常に効果的です。MARISAではそのような地域の特性を理解した施術をご提供しています。
            </p>
          </div>

          {/* Area access table */}
          <div className="mt-10">
            <p className="font-medium text-stone-800 tracking-wide text-sm mb-4">千葉南部各地からの所要時間目安</p>
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

      {/* Why Chiba South residents choose MARISA */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Convenient for South Chiba" ja="千葉南部エリアから利用しやすい理由" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              千葉南部からMARISAが選ばれる最大の理由は、夜0時まで（最終受付23:00）年中無休という営業体制です。仕事帰りが遅い方や、休日もスケジュールが変わりやすい方でも、気軽に予約・来店できます。
            </p>
            <p>
              千葉南部エリアはお車での移動が中心のため、無料駐車場の完備は大切なポイントです。MARISAは店舗前に無料駐車場を備えており、駐車料金を気にせずご来店いただけます。
            </p>
            <p>
              もみほぐし・ヘッドリラックス・足つぼなど豊富なメニューから、その日の状態に合わせてお選びいただけます。鍼灸・美容鍼（BMERITよりご予約）もご用意しており、幅広いニーズに対応しています。
            </p>
            <p>
              ホットペッパービューティーからの事前予約で待ち時間なくご案内しています。千葉南部エリアのどこからでも、ぜひMARISAへお越しください。
            </p>
            <p>
              初回の方も安心していただける丁寧なカウンセリングからスタートします。お体の状態やご希望に合わせて、最適なメニューをご提案いたします。
            </p>
          </div>
        </div>
      </section>

      {/* Menu Cards */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Menu" ja="対応メニュー" lead="千葉南部エリアからお越しの方にもご利用いただけるメニューをご紹介します" />
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
              { label: '木更津市から', value: '車で約25〜30分' },
              { label: '富津市から', value: '車で約15〜20分' },
              { label: '袖ケ浦市から', value: '車で約20〜25分' },
              { label: '市原市から', value: '車で約30〜40分（館山自動車道経由）' },
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
              { label: '木更津方面からお越しの方', href: '/area/kisarazu' },
              { label: '富津方面からお越しの方', href: '/area/futtsu' },
              { label: '袖ケ浦方面からお越しの方', href: '/area/sodegaura' },
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
            夜0時まで営業・当日予約OK・無料駐車場完備。千葉南部エリアからのご来店もお気軽にどうぞ。
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
