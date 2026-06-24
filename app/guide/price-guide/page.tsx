import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'MARISA 君津店の料金ガイド・コース比較｜もみほぐし¥3,900〜',
  description: 'もみほぐし・MARISA 君津店の料金を全メニュー解説。もみほぐし・ヘッドケア・足つぼ・セット・鍼灸・美容鍼の価格と選び方ガイド。45分¥3,900〜。',
  keywords: ['MARISA 料金', '君津 マッサージ 料金', '君津 もみほぐし 値段', '君津 リラクゼーション 料金', 'もみほぐし いくら 君津'],
  openGraph: {
    title: 'MARISA 君津店の料金ガイド・コース比較｜もみほぐし¥3,900〜',
    description: 'MARISAの全メニュー料金を解説。もみほぐし・ヘッドケア・足つぼ・セット・鍼灸の価格と選び方ガイド。',
    locale: 'ja_JP',
    type: 'article',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: `${SITE_URL}/guide/price-guide` },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'MARISA 君津店の料金ガイド・コース比較',
  description: 'もみほぐし・MARISA 君津店の料金を全メニュー解説。もみほぐし・ヘッドケア・足つぼ・セット・鍼灸・美容鍼の価格と選び方ガイド。',
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
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/guide/price-guide` },
  about: { '@type': 'Thing', name: 'もみほぐし・MARISAの料金体系' },
  inLanguage: 'ja',
  keywords: 'MARISA 料金, 君津 マッサージ 料金, 君津 もみほぐし 値段, 君津 リラクゼーション 料金, もみほぐし いくら 君津',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '最も安いコースはいくらですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'もみほぐし45分が¥3,900です。ヘッドケア単独は15分¥2,000から受けられます。まずはお試しで短時間のコースからはじめてみることをおすすめします。',
      },
    },
    {
      '@type': 'Question',
      name: '60分でいくらかかりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'もみほぐし60分（カウンセリング含め70分計）は¥4,500です。ヘッドセット60分は¥5,400、足つぼセット60分は¥5,500となっています。',
      },
    },
    {
      '@type': 'Question',
      name: 'セットコースはお得ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'セットコースはもみほぐしとヘッドケア（または足つぼ）を組み合わせた料金設定です。単独でそれぞれ受ける場合と比較してお得になっています。全身ほぐし＋特定部位のケアを一度に受けたい方におすすめです。',
      },
    },
    {
      '@type': 'Question',
      name: '鍼灸の料金はいくらですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '鍼灸は公式予約限定メニューです。もみほぐし30分+鍼¥4,500、45分+鍼¥5,400、70分+鍼¥6,000、鍼オプション単独¥1,500となっています。美顔鍼は¥3,500です。',
      },
    },
    {
      '@type': 'Question',
      name: '支払いはカードでもできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '支払い方法の詳細については、ご来店時またはホットペッパービューティーのMARISAページでご確認ください。現金・各種決済方法に対応しています。',
      },
    },
  ],
}

export default function GuidePricePage() {
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
          <Breadcrumb items={[{ label: 'ガイド', href: '/guide/what-is-momihogushi' }, { label: '料金ガイド' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Price Guide</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              MARISA 君津店の料金ガイド・コース比較
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              もみほぐし・ヘッドケア・足つぼ・セットコース・鍼灸・美容鍼まで、
              MARISAの全メニューの料金と選び方をわかりやすく解説します。
              君津で手頃な料金でしっかりほぐしたい方へ。
            </p>
            {/* 目次 */}
            <nav className="mt-8 bg-cream-50 border border-sand-200 p-5 max-w-xl">
              <p className="text-xs tracking-widest text-greige-400 uppercase mb-3">Contents</p>
              <ol className="space-y-2 text-xs text-stone-700">
                <li><a href="#price-table" className="hover:text-brown-500 transition-colors">1. 全メニュー料金表</a></li>
                <li><a href="#budget" className="hover:text-brown-500 transition-colors">2. 予算別おすすめ</a></li>
                <li><a href="#set-merit" className="hover:text-brown-500 transition-colors">3. セットコースのメリット</a></li>
                <li><a href="#acupuncture" className="hover:text-brown-500 transition-colors">4. 鍼灸・美容鍼について</a></li>
                <li><a href="#payment" className="hover:text-brown-500 transition-colors">5. お支払い方法</a></li>
                <li><a href="#faq" className="hover:text-brown-500 transition-colors">6. よくある質問</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* 1. 全メニュー料金表 */}
      <section id="price-table" className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Price List" ja="全メニュー料金表" lead="すべてのコースをまとめて確認" />
          <div className="mt-8 space-y-8">

            {/* もみほぐし */}
            <div>
              <h3 className="text-sm font-medium text-stone-800 mb-3 tracking-wide border-b border-sand-200 pb-2">もみほぐし</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-800 text-cream-50">
                      <th className="p-3 text-left font-medium">コース</th>
                      <th className="p-3 text-left font-medium">料金</th>
                      <th className="p-3 text-left font-medium">備考</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { course: '45分', price: '¥3,900', note: '' },
                      { course: '60分', price: '¥4,500', note: 'カウンセリング含め70分計' },
                      { course: '90分', price: '¥6,400', note: 'カウンセリング含め100分計' },
                      { course: '120分', price: '¥8,400', note: '' },
                    ].map((row, i) => (
                      <tr key={i} className={`border-b border-sand-200 ${i % 2 === 0 ? 'bg-sand-100' : 'bg-cream-50'}`}>
                        <td className="p-3 font-medium text-stone-800">{row.course}</td>
                        <td className="p-3 text-brown-500 font-medium">{row.price}</td>
                        <td className="p-3 text-stone-700">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ヘッドケア */}
            <div>
              <h3 className="text-sm font-medium text-stone-800 mb-3 tracking-wide border-b border-sand-200 pb-2">ヘッドケア</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-800 text-cream-50">
                      <th className="p-3 text-left font-medium">コース</th>
                      <th className="p-3 text-left font-medium">料金</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { course: '15分', price: '¥2,000' },
                      { course: '30分', price: '¥3,000' },
                    ].map((row, i) => (
                      <tr key={i} className={`border-b border-sand-200 ${i % 2 === 0 ? 'bg-sand-100' : 'bg-cream-50'}`}>
                        <td className="p-3 font-medium text-stone-800">{row.course}</td>
                        <td className="p-3 text-brown-500 font-medium">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 足つぼ */}
            <div>
              <h3 className="text-sm font-medium text-stone-800 mb-3 tracking-wide border-b border-sand-200 pb-2">足つぼ</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-800 text-cream-50">
                      <th className="p-3 text-left font-medium">コース</th>
                      <th className="p-3 text-left font-medium">料金</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { course: '30分', price: '¥3,800' },
                      { course: '60分', price: '¥5,500' },
                    ].map((row, i) => (
                      <tr key={i} className={`border-b border-sand-200 ${i % 2 === 0 ? 'bg-sand-100' : 'bg-cream-50'}`}>
                        <td className="p-3 font-medium text-stone-800">{row.course}</td>
                        <td className="p-3 text-brown-500 font-medium">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ヘッドセット */}
            <div>
              <h3 className="text-sm font-medium text-stone-800 mb-3 tracking-wide border-b border-sand-200 pb-2">ヘッドセット（もみほぐし＋ヘッドケア）</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-800 text-cream-50">
                      <th className="p-3 text-left font-medium">コース</th>
                      <th className="p-3 text-left font-medium">料金</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { course: '60分', price: '¥5,400' },
                      { course: '90分', price: '¥6,700' },
                      { course: '120分', price: '¥8,700' },
                    ].map((row, i) => (
                      <tr key={i} className={`border-b border-sand-200 ${i % 2 === 0 ? 'bg-sand-100' : 'bg-cream-50'}`}>
                        <td className="p-3 font-medium text-stone-800">{row.course}</td>
                        <td className="p-3 text-brown-500 font-medium">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 足つぼセット */}
            <div>
              <h3 className="text-sm font-medium text-stone-800 mb-3 tracking-wide border-b border-sand-200 pb-2">足つぼセット（もみほぐし＋足つぼ）</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-800 text-cream-50">
                      <th className="p-3 text-left font-medium">コース</th>
                      <th className="p-3 text-left font-medium">料金</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { course: '60分', price: '¥5,500' },
                      { course: '90分', price: '¥6,900' },
                      { course: '120分', price: '¥8,900' },
                    ].map((row, i) => (
                      <tr key={i} className={`border-b border-sand-200 ${i % 2 === 0 ? 'bg-sand-100' : 'bg-cream-50'}`}>
                        <td className="p-3 font-medium text-stone-800">{row.course}</td>
                        <td className="p-3 text-brown-500 font-medium">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 鍼灸 */}
            <div>
              <h3 className="text-sm font-medium text-stone-800 mb-3 tracking-wide border-b border-sand-200 pb-2">鍼灸（公式予約限定）</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-800 text-cream-50">
                      <th className="p-3 text-left font-medium">コース</th>
                      <th className="p-3 text-left font-medium">料金</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { course: 'もみほぐし30分＋鍼', price: '¥4,500' },
                      { course: 'もみほぐし45分＋鍼', price: '¥5,400' },
                      { course: 'もみほぐし70分＋鍼', price: '¥6,000' },
                      { course: '鍼オプション', price: '¥1,500' },
                    ].map((row, i) => (
                      <tr key={i} className={`border-b border-sand-200 ${i % 2 === 0 ? 'bg-sand-100' : 'bg-cream-50'}`}>
                        <td className="p-3 font-medium text-stone-800">{row.course}</td>
                        <td className="p-3 text-brown-500 font-medium">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 美顔鍼 */}
            <div>
              <h3 className="text-sm font-medium text-stone-800 mb-3 tracking-wide border-b border-sand-200 pb-2">美顔鍼（公式予約限定）</h3>
              <div className="bg-sand-100 border border-sand-200 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-stone-800">美顔鍼</p>
                  <p className="text-sm text-brown-500 font-medium">¥3,500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 予算別おすすめ */}
      <section id="budget" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Budget Guide" ja="予算別おすすめコース" lead="ご予算に合わせてお選びください" />
          <div className="mt-8 space-y-4">
            {[
              {
                budget: '〜¥4,000',
                title: '気軽にお試ししたい方',
                recommend: 'もみほぐし45分（¥3,900）',
                note: 'まずはリラクゼーション体験を。特定の部位を集中ケアしたい方にも。',
              },
              {
                budget: '¥4,000〜¥6,000',
                title: 'しっかりほぐしたい方',
                recommend: 'もみほぐし60分（¥4,500）/ ヘッドセット60分（¥5,400）/ 足つぼセット60分（¥5,500）',
                note: '全身ほぐし定番コース。セットなら特定部位の集中ケアも追加できます。',
              },
              {
                budget: '¥7,000以上',
                title: 'がっつりリセットしたい方',
                recommend: 'もみほぐし90分（¥6,400）/ ヘッドセット90分（¥6,700）/ 足つぼセット90分（¥6,900）',
                note: '週末や繁忙期明けに全身をしっかりリセットしたい方に。特別なご褒美にも。',
              },
            ].map((item, i) => (
              <div key={i} className="bg-cream-50 border border-sand-200 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-en text-brown-400 font-medium">{item.budget}</span>
                  <p className="text-sm font-medium text-stone-800">{item.title}</p>
                </div>
                <p className="text-xs text-brown-500 mb-2">{item.recommend}</p>
                <p className="text-xs text-stone-700 leading-loose">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. セットコースのメリット */}
      <section id="set-merit" className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Set Course" ja="セットコースのメリット" lead="もみほぐし＋αの満足感" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              セットコースは、もみほぐし（全身ほぐし）にヘッドケアまたは足つぼをプラスした組み合わせです。
              単独でそれぞれ受けるよりも、より深いリラクゼーション感を得やすいのが特徴です。
            </p>
            <div className="grid gap-4 sm:grid-cols-2 mt-4">
              <div className="bg-sand-100 border border-sand-200 p-5">
                <p className="font-medium text-stone-800 mb-2 text-sm">ヘッドセットをおすすめする方</p>
                <ul className="text-xs text-stone-700 space-y-1.5 leading-loose">
                  <li>・肩こり＋眼精疲労の両方が気になる</li>
                  <li>・デスクワーク・スマホ疲れがひどい</li>
                  <li>・頭が重い・すっきりしない</li>
                  <li>・首こりが慢性化している</li>
                </ul>
              </div>
              <div className="bg-sand-100 border border-sand-200 p-5">
                <p className="font-medium text-stone-800 mb-2 text-sm">足つぼセットをおすすめする方</p>
                <ul className="text-xs text-stone-700 space-y-1.5 leading-loose">
                  <li>・全身疲れ＋足のだるさが気になる</li>
                  <li>・立ち仕事・歩き仕事が多い</li>
                  <li>・夕方になると足が重くなる</li>
                  <li>・体全体のリラクゼーションを深めたい</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 鍼灸について */}
      <section id="acupuncture" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Acupuncture" ja="鍼灸・美容鍼について" lead="公式サイト予約限定メニュー" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAでは、鍼灸師による鍼灸メニューも受けられます（公式予約限定）。
              もみほぐしとの組み合わせで、リラクゼーションと鍼灸のアプローチを
              同時に受けることができます。
            </p>
            <p>
              鍼灸は国家資格（はり師・きゅう師）保有者が行う医療行為です。
              もみほぐしのリラクゼーションとは異なり、鍼灸は医療的なアプローチを含みます。
            </p>
            <p>
              美顔鍼（¥3,500）は顔への鍼施術で、リラクゼーションを目的として受けられます。
              詳細は公式予約ページでご確認ください。
            </p>
            <div className="bg-cream-50 border border-sand-200 p-4 text-xs text-stone-700 leading-loose">
              ※鍼灸・美容鍼は公式サイト（b-merit）からの予約限定メニューです。
              ホットペッパービューティーからは予約できません。
            </div>
          </div>
        </div>
      </section>

      {/* 5. お支払い */}
      <section id="payment" className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Payment" ja="お支払い方法" lead="各種お支払いに対応" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              お支払い方法の詳細については、ご来店時またはホットペッパービューティーの
              MARISAページでご確認ください。
              現金のほか各種電子マネー・クレジットカードに対応しています。
            </p>
            <p>
              ホットペッパービューティーからの予約では、
              初回クーポンや期間限定のお得なキャンペーンが掲載される場合があります。
              初めてご利用の方はぜひチェックしてみてください。
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
            MARISAは君津市内で手頃な料金でしっかりほぐせるリラクゼーションサロンです。
            もみほぐし45分¥3,900〜、鍼灸も受けられる充実したメニューをご用意しています。
          </p>
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: '君津のマッサージ選びガイド', href: '/guide/kimitsu-massage-guide' },
              { label: 'もみほぐしとは', href: '/guide/what-is-momihogushi' },
              { label: 'コースの選び方', href: '/guide/course-selection' },
              { label: 'メニュー・料金', href: '/menu' },
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
