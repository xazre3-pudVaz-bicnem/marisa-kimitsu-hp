import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津のマッサージ・もみほぐし選びガイド｜MARISA 君津店',
  description: '君津市でマッサージ・もみほぐしを選ぶときのポイントを解説。夜遅くまで・当日予約・駐車場・メニューの豊富さなど、君津エリアの特性に合わせた選び方ガイド。',
  keywords: ['君津 マッサージ 選び方', '君津 もみほぐし 選び方', '君津 リラクゼーション おすすめ', '君津 マッサージ ガイド', '君津 マッサージ 比較'],
  openGraph: {
    title: '君津のマッサージ・もみほぐし選びガイド｜MARISA 君津店',
    description: '君津市でマッサージ・もみほぐしを選ぶときのポイント。夜遅くまで・当日予約・駐車場・鍼灸もありなど詳しく解説。',
    locale: 'ja_JP',
    type: 'article',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: `${SITE_URL}/guide/kimitsu-massage-guide` },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '君津のマッサージ・もみほぐし選びガイド',
  description: '君津市でマッサージ・もみほぐしを選ぶときのポイントを解説。夜遅くまで・当日予約・駐車場・メニューの豊富さなど、君津エリアの特性に合わせた選び方ガイド。',
  datePublished: '2026-06-24',
  dateModified: '2026-06-24',
  image: `${SITE_URL}/og-image.jpg`,
  author: {
    '@type': 'Organization',
    name: 'もみほぐし・MARISA 君津店',
    url: SITE_URL,
    '@id': `${SITE_URL}/#business`,
  },
  publisher: {
    '@type': 'Organization',
    name: 'もみほぐし・MARISA 君津店',
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/og-image.jpg` },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/guide/kimitsu-massage-guide` },
  about: { '@type': 'Thing', name: '君津市のマッサージ・リラクゼーション選びガイド' },
  inLanguage: 'ja',
  keywords: '君津 マッサージ 選び方, 君津 もみほぐし 選び方, 君津 リラクゼーション おすすめ, 君津 マッサージ ガイド, 君津 マッサージ 比較',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '君津でマッサージを選ぶポイントは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '主なチェックポイントは①営業時間（仕事帰りや夜遅くに使えるか）、②駐車場の有無と料金、③料金の透明性（追加料金の有無）、④メニューの種類（目的に合ったコースがあるか）、⑤予約のしやすさ（オンライン予約対応か）、⑥口コミ・評判です。自分のライフスタイルに合った店舗を選ぶことが長く通い続けるコツです。',
      },
    },
    {
      '@type': 'Question',
      name: 'なぜ駐車場が大切ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '君津市は車社会で、多くの方が車で移動します。駐車場がないサロンや有料駐車場のみのサロンでは、来店のたびに駐車料金がかかることもあります。無料駐車場が完備されているサロンなら、毎回の来店コストを抑えられ、気軽に通いやすくなります。',
      },
    },
    {
      '@type': 'Question',
      name: '夜0時まで営業しているサロンはありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MARISA 君津店は夜0時まで営業（最終受付23時）しています。仕事帰りや夜遅い帰宅後でも気軽にご利用いただけます。君津市内でこの時間帯まで営業しているリラクゼーションサロンは限られています。',
      },
    },
    {
      '@type': 'Question',
      name: '君津で鍼灸も受けられる場所はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MARISAでは、もみほぐしに加えて鍼灸師による鍼灸メニューも受けられます（公式予約限定）。リラクゼーションと鍼灸を同じ場所で受けられるのがMARISAの特徴のひとつです。',
      },
    },
    {
      '@type': 'Question',
      name: 'どのサロンに最初に行けばいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '初めてリラクゼーションサロンを利用する方には、オンライン予約に対応していて、料金が明示されており、口コミが確認できるサロンから選ぶのがおすすめです。MARISAはホットペッパービューティーから24時間予約でき、料金・メニューが明示されています。当日予約にも対応しています。',
      },
    },
  ],
}

export default function GuideKimitsuMassagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ヘッダー */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'ガイド', href: '/guide/what-is-momihogushi' }, { label: '君津のマッサージ選びガイド' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Kimitsu Massage Guide</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              君津のマッサージ・もみほぐし選びガイド
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「君津でもみほぐしに行きたいけど、どこを選べばいいかわからない」という方へ。
              君津市の生活スタイルに合った選び方のポイントと、MARISAが選ばれる理由を詳しく解説します。
            </p>
            {/* 目次 */}
            <nav className="mt-8 bg-cream-50 border border-sand-200 p-5 max-w-xl">
              <p className="text-xs tracking-widest text-greige-400 uppercase mb-3">Contents</p>
              <ol className="space-y-2 text-xs text-stone-700">
                <li><a href="#checklist" className="hover:text-brown-500 transition-colors">1. サロン選びのチェックポイント</a></li>
                <li><a href="#kimitsu-life" className="hover:text-brown-500 transition-colors">2. 君津の生活シーンに合った選び方</a></li>
                <li><a href="#hours" className="hover:text-brown-500 transition-colors">3. 夜遅くまで営業しているか</a></li>
                <li><a href="#parking" className="hover:text-brown-500 transition-colors">4. 駐車場の有無</a></li>
                <li><a href="#acupuncture" className="hover:text-brown-500 transition-colors">5. 鍼灸も受けられるサロンのメリット</a></li>
                <li><a href="#marisa" className="hover:text-brown-500 transition-colors">6. MARISAが君津で選ばれる理由</a></li>
                <li><a href="#area" className="hover:text-brown-500 transition-colors">7. 近隣エリアからのアクセス</a></li>
                <li><a href="#faq" className="hover:text-brown-500 transition-colors">8. よくある質問</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* 1. チェックポイント */}
      <section id="checklist" className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Checklist" ja="サロン選びのチェックポイント" lead="6つのポイントで比較しましょう" />
          <div className="mt-8 space-y-4">
            {[
              { num: '01', title: '営業時間', body: '仕事帰りや夜遅くに利用したい方にとって、営業時間は最重要ポイントです。深夜まで営業しているサロンは限られています。' },
              { num: '02', title: '駐車場の有無・料金', body: '君津は車社会。無料駐車場完備のサロンなら来店コストを抑えて気軽に通えます。' },
              { num: '03', title: '料金の透明性', body: '指名料・オプション料などが加算されるサロンは最終的な費用が高くなる場合があります。料金表が明示されているか確認しましょう。' },
              { num: '04', title: 'メニューの種類', body: 'もみほぐしだけでなく、ヘッドケア・足つぼ・鍼灸など目的に合ったコースがあるか確認しましょう。' },
              { num: '05', title: '予約のしやすさ', body: 'ホットペッパービューティーなどオンライン予約対応のサロンは、24時間スマホからいつでも予約できて便利です。' },
              { num: '06', title: '口コミ・評判', body: '実際に利用したお客様の口コミをホットペッパービューティーやGoogleで確認することで、サービスの質を事前に把握できます。' },
            ].map((item) => (
              <div key={item.num} className="flex gap-4 bg-sand-100 border border-sand-200 p-5">
                <span className="font-en text-brown-400 text-sm font-medium shrink-0">{item.num}</span>
                <div>
                  <p className="text-sm font-medium text-stone-800 mb-1">{item.title}</p>
                  <p className="text-xs text-stone-700 leading-loose">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. 君津の生活シーン */}
      <section id="kimitsu-life" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Kimitsu Life" ja="君津の生活シーンに合った選び方" lead="車社会・仕事帰り・当日対応" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              君津市は千葉県南部に位置する地方都市で、多くの方が車で生活しています。
              電車よりも車での移動が中心のため、サロン選びでは「駐車場の有無」が重要な判断基準になります。
            </p>
            <p>
              また、君津市内には製鉄所をはじめとする大規模な工場・事業所があり、
              工場勤務・事務職・サービス業など様々な職種の方が暮らしています。
              仕事帰りに立ち寄りやすい立地・時間帯のサロンは重宝されます。
            </p>
            <p>
              木更津・富津・袖ケ浦など近隣エリアからお越しの方も多く、
              アクセスの良さ（幹線道路沿い・駐車場あり）も重要なポイントです。
            </p>
          </div>
        </div>
      </section>

      {/* 3. 夜遅くまで */}
      <section id="hours" className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Late Hours" ja="夜遅くまで営業しているかのチェック" lead="仕事帰りに通いたい方へ" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              リラクゼーションサロンの多くは22時頃に閉店するところが多いですが、
              仕事の都合で21〜22時以降にしか来店できない方には、
              深夜まで営業しているサロンが貴重な選択肢となります。
            </p>
            <p>
              最終受付時間の確認も重要です。
              例えば「23時まで営業」でも「最終受付21時」のサロンでは、
              22時に到着しても施術を受けられない場合があります。
            </p>
            <p>
              MARISA 君津店は夜0時まで営業（最終受付23時）しています。
              仕事帰り・夜遅い帰宅後でもご利用いただけます。
            </p>
          </div>
        </div>
      </section>

      {/* 4. 駐車場 */}
      <section id="parking" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Parking" ja="駐車場の有無" lead="車社会の君津では特に重要" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              君津市では多くの方が車でサロンを訪れます。
              駐車場がないサロンや有料駐車場のみのサロンでは、
              来店のたびに駐車料金がかかることになります。
              定期的に通う場合、この費用は積み重なります。
            </p>
            <p>
              「無料駐車場完備」のサロンを選ぶことで、
              余分なコストをかけずに気軽に来店できます。
              特に家族で複数台での来店や、夜間の来店時に駐車場の利便性は重要になります。
            </p>
            <p>
              MARISA 君津店は店舗前に無料駐車場を完備しており、
              車でのご来店をスムーズにしています。
            </p>
          </div>
        </div>
      </section>

      {/* 5. 鍼灸 */}
      <section id="acupuncture" className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Acupuncture" ja="鍼灸も受けられるサロンのメリット" lead="リラクゼーション＋鍼灸の両立" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              リラクゼーションサロンの中には、鍼灸師が在籍して鍼灸メニューも提供しているサロンがあります。
              もみほぐしとは異なり、鍼灸は国家資格保有者（はり師・きゅう師）が行う医療行為です。
            </p>
            <p>
              「もみほぐしとあわせて鍼灸も試してみたい」「同じ場所でリラクゼーションと鍼灸を両方受けたい」
              という方にとって、鍼灸師が在籍するリラクゼーションサロンは便利な選択肢です。
            </p>
            <p>
              MARISA 君津店では、もみほぐしに加え鍼灸師による鍼灸メニューも受けられます。
              公式予約サイトからのご予約で鍼灸・美容鍼も選択可能です。
            </p>
          </div>
        </div>
      </section>

      {/* 6. MARISAが選ばれる理由 */}
      <section id="marisa" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Why MARISA" ja="MARISAが君津で選ばれる理由" lead="6つの特徴" />
          <div className="mt-8 space-y-4">
            {[
              { title: '夜0時まで営業（最終受付23時）', body: '仕事帰りや夜遅い帰宅後でも気軽に立ち寄れます。君津市内でこの時間帯まで対応しているリラクゼーションサロンは限られています。' },
              { title: '無料駐車場完備', body: '店舗前に無料駐車場を用意しています。来店のたびに駐車料金を気にする必要がありません。' },
              { title: '当日予約OK', body: 'ホットペッパービューティーから当日のご予約も可能です。「今日行きたい」という方にも対応しています。' },
              { title: '鍼灸師在籍・鍼灸メニューあり', body: '国家資格（はり師・きゅう師）保有の鍼灸師が在籍。もみほぐしと鍼灸を同じ場所で受けられます（公式予約限定）。' },
              { title: 'わかりやすい料金設定', body: 'もみほぐし45分¥3,900〜。指名料・オプション料等の追加なし。料金表を事前にご確認いただけます。' },
              { title: '複数台のベッドで同時施術対応', body: 'ベッドを3台用意しているため、友人・カップル・家族での同時来店にも対応しています。' },
            ].map((item, i) => (
              <div key={i} className="bg-cream-50 border border-sand-200 p-5">
                <p className="text-sm font-medium text-stone-800 mb-1">{item.title}</p>
                <p className="text-xs text-stone-700 leading-loose">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 近隣エリア */}
      <section id="area" className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Nearby Area" ja="近隣エリアからのアクセス" lead="木更津・富津・袖ケ浦からも来店可能" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISA 君津店には、君津市内だけでなく、
              木更津・富津・袖ケ浦方面からお越しいただくお客様も多くいらっしゃいます。
            </p>
            <div className="grid gap-3 sm:grid-cols-2 mt-4">
              {[
                { area: '木更津方面から', note: '国道127号・君津ICからアクセスしやすい立地です。' },
                { area: '富津方面から', note: '国道127号沿いで、富津方面からのアクセスも便利です。' },
                { area: '袖ケ浦方面から', note: '袖ケ浦ICから君津ICを経由してお越しいただけます。' },
                { area: '鋸南・南房総方面から', note: '房総半島南部からもアクセス可能です。お気軽にどうぞ。' },
              ].map((item, i) => (
                <div key={i} className="bg-sand-100 border border-sand-200 p-4">
                  <p className="text-xs font-medium text-stone-800 mb-1">{item.area}</p>
                  <p className="text-xs text-stone-700 leading-loose">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-stone-700 leading-loose mt-4">
              無料駐車場完備のため、車でのご来店が最も便利です。
              詳しいアクセスは<Link href="/access" className="text-brown-400 hover:text-brown-500 border-b border-brown-300">アクセスページ</Link>をご確認ください。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-sand-100">
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

      {/* まとめ・関連 */}
      <section className="py-12 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-sm text-stone-700 leading-loose mb-6">
            君津でマッサージ・もみほぐしを選ぶなら、営業時間・駐車場・料金の透明性・
            予約のしやすさを確認することが大切です。MARISAはこれらすべてに対応したサロンです。
          </p>
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
              { label: '料金ガイド', href: '/guide/price-guide' },
              { label: 'もみほぐしとは', href: '/guide/what-is-momihogushi' },
              { label: 'アクセス・駐車場', href: '/access' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="border border-sand-300 px-3 py-1.5 text-stone-700 hover:border-brown-300 hover:text-brown-500 transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* 予約CTA */}
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
            <ReserveButton href={BMERIT_URL} label="公式サイトで予約する（鍼灸も）" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
