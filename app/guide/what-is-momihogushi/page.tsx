import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'もみほぐしとは？整体・マッサージとの違いをわかりやすく解説｜MARISA 君津店',
  description: 'もみほぐしとは、リラクゼーション目的で筋肉の緊張をほぐす施術です。整体・医療マッサージ・鍼灸との違い、国家資格の有無、向いている人を詳しく解説。',
  keywords: ['もみほぐし とは', 'もみほぐし 整体 違い', 'もみほぐし マッサージ 違い', 'リラクゼーション もみほぐし', '君津 もみほぐし とは'],
  openGraph: {
    title: 'もみほぐしとは？整体・マッサージとの違いをわかりやすく解説｜MARISA 君津店',
    description: 'もみほぐしとは何か、整体・鍼灸・医療マッサージとの違いをわかりやすく解説。国家資格の有無、向いている人とMARISAの特徴も紹介。',
    locale: 'ja_JP',
    type: 'article',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: `${SITE_URL}/guide/what-is-momihogushi` },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'もみほぐしとは？整体・マッサージとの違いをわかりやすく解説',
  description: 'もみほぐしとは、リラクゼーション目的で筋肉の緊張をほぐす施術です。整体・医療マッサージ・鍼灸との違い、国家資格の有無、向いている人を詳しく解説。',
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
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/guide/what-is-momihogushi` },
  about: { '@type': 'Thing', name: 'もみほぐし・リラクゼーション施術' },
  inLanguage: 'ja',
  keywords: 'もみほぐし とは, もみほぐし 整体 違い, もみほぐし マッサージ 違い, リラクゼーション もみほぐし, 君津 もみほぐし とは',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'もみほぐしに国家資格は必要ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'もみほぐし（リラクゼーション施術）は、あん摩マッサージ指圧師などの国家資格がなくても施術できる「リラクゼーション業」に分類されます。一方、「マッサージ」という名称を正式に使用できるのは国家資格保有者のみです。整体や鍼灸は別の資格体系があります。',
      },
    },
    {
      '@type': 'Question',
      name: 'マッサージともみほぐしは何が違いますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '「マッサージ」は正式には国家資格（あん摩マッサージ指圧師）を持つ施術者が行う医療・治療行為を指します。一方「もみほぐし」はリラクゼーション目的の施術であり、国家資格は不要です。一般のリラクゼーションサロンでは「もみほぐし」「ボディケア」などの呼称を使用しています。',
      },
    },
    {
      '@type': 'Question',
      name: '整体ともみほぐしはどちらが自分に向いていますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '疲れやコリのリラクゼーションを目的とする場合はもみほぐしが向いています。骨格や関節の調整を目的とする場合や、痛みの原因が明確でその治療を希望する場合は、整体や医療機関への相談が適しています。',
      },
    },
    {
      '@type': 'Question',
      name: '医療行為ではないとはどういう意味ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'もみほぐしは「治療」や「疾患の改善」を目的とするものではなく、「リラクゼーション・癒し」を提供するサービスです。そのため「治る」「改善する」などの医療的な効果を保証するものではありません。疲れやコリのケア・リフレッシュを目的としてご利用いただくのが最適です。',
      },
    },
    {
      '@type': 'Question',
      name: '初めてでも受けられますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、初めての方でも安心してご利用いただけます。施術前に必ずカウンセリングを行い、体の状態・お悩み・圧の好みをお聞きします。「初めてでよくわからない」という場合もお気軽にお申し付けください。',
      },
    },
    {
      '@type': 'Question',
      name: 'どのくらいの頻度で通うといいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '目的や体の状態によって異なりますが、日常のメンテナンスには月1〜2回、慢性的な疲れやコリには2週間に1回程度が一般的な目安です。体がつらくなったタイミングで随時ご利用いただくスタイルでも大丈夫です。',
      },
    },
  ],
}

export default function GuideWhatIsMomihogushiPage() {
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
          <Breadcrumb
            items={[
              { label: 'ガイド', href: '/guide/what-is-momihogushi' },
              { label: 'もみほぐしとは' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Guide</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              もみほぐしとは？整体・マッサージとどう違う？
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「もみほぐし」「整体」「マッサージ」——言葉は似ていますが、それぞれ目的・アプローチ・資格の有無が異なります。
              選び方に迷っている方のために、定義から違いまでわかりやすく解説します。
            </p>
            {/* 目次 */}
            <nav className="mt-8 bg-cream-50 border border-sand-200 p-5 max-w-xl">
              <p className="text-xs tracking-widest text-greige-400 uppercase mb-3">Contents</p>
              <ol className="space-y-2 text-xs text-stone-700">
                <li><a href="#definition" className="hover:text-brown-500 transition-colors">1. もみほぐしの定義</a></li>
                <li><a href="#comparison" className="hover:text-brown-500 transition-colors">2. 整体・鍼灸・マッサージとの違い</a></li>
                <li><a href="#no-license" className="hover:text-brown-500 transition-colors">3. 国家資格がないとは？</a></li>
                <li><a href="#who-suits" className="hover:text-brown-500 transition-colors">4. もみほぐしに向いている人</a></li>
                <li><a href="#flow" className="hover:text-brown-500 transition-colors">5. 施術の流れ</a></li>
                <li><a href="#marisa" className="hover:text-brown-500 transition-colors">6. MARISAのもみほぐしの特徴</a></li>
                <li><a href="#faq" className="hover:text-brown-500 transition-colors">7. よくある質問</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* 1. もみほぐしの定義 */}
      <section id="definition" className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Definition" ja="もみほぐしとは" lead="リラクゼーション施術の基本" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              もみほぐしとは、主に筋肉の緊張をほぐすことを目的としたリラクゼーション施術です。
              手技（手・指・肘などを使った施術）によって体の表層〜中層にある筋肉を刺激し、
              緊張やコリをやわらげることを目指します。
            </p>
            <p>
              日本では「リラクゼーション業」として位置づけられており、医療行為や治療行為ではなく、
              あくまでも「癒し・リラクゼーション」を提供するサービスです。
              そのため「疲れを取りたい」「体をほぐしてリフレッシュしたい」という目的でご利用いただくのが主な使い方です。
            </p>
            <p>
              施術は通常、全身または指定した部位（肩・背中・腰・脚など）に対して行われます。
              うつ伏せや横向きなど体勢を変えながら、手のひら・指・肘などを使って筋肉を
              圧迫・揉捏（もみこね）します。施術中の痛みの強さは、ご希望に合わせて調整できます。
            </p>
            <p>
              一般的なリラクゼーションサロンでは「もみほぐし」「ボディケア」「リラクゼーションマッサージ」
              などの呼称を使用しており、「マッサージ」という正式名称は国家資格保有者のみが使用できます。
            </p>
          </div>
        </div>
      </section>

      {/* 2. 整体・鍼灸・マッサージとの違い */}
      <section id="comparison" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Comparison" ja="整体・鍼灸・マッサージとの違い" lead="何がどう違うのかを整理" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              よく混同されますが、もみほぐしと他の施術は目的・対象・資格の有無において異なります。
            </p>

            <h3 className="text-base font-medium text-stone-800 mt-6">整体との違い</h3>
            <p>
              整体は主に骨格・関節・筋膜に対してアプローチする施術です。
              骨盤や脊椎のアライメント（位置関係）を調整し、姿勢改善や体のバランスを整えることを目的とします。
              もみほぐしが「筋肉の緊張をほぐす」ことを主目的とするのに対し、
              整体は「骨格・構造的なアプローチ」が中心という点が大きな違いです。
            </p>

            <h3 className="text-base font-medium text-stone-800 mt-4">医療マッサージ（あん摩・指圧）との違い</h3>
            <p>
              「マッサージ」と正式に名乗れるのは、あん摩マッサージ指圧師の国家資格保有者のみです。
              これらは医療行為として疾患の治療や症状の緩和を目的としており、
              リラクゼーション目的のもみほぐしとは法的・目的的に区別されます。
            </p>

            <h3 className="text-base font-medium text-stone-800 mt-4">鍼灸との違い</h3>
            <p>
              鍼灸は鍼灸師の国家資格が必要な医療行為です。
              ツボ・経絡に鍼や灸を用いてアプローチするという点で、
              手技のみで行うもみほぐしとは施術方法が根本的に異なります。
            </p>

            <div className="overflow-x-auto mt-8">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-stone-800 text-cream-50">
                    <th className="p-3 text-left font-medium tracking-wide">施術の種類</th>
                    <th className="p-3 text-left font-medium tracking-wide">主なアプローチ</th>
                    <th className="p-3 text-left font-medium tracking-wide">国家資格</th>
                    <th className="p-3 text-left font-medium tracking-wide">目的</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-sand-200 bg-cream-50">
                    <td className="p-3 font-medium text-stone-800">もみほぐし</td>
                    <td className="p-3 text-stone-700">筋肉・体表層</td>
                    <td className="p-3 text-stone-700">不要</td>
                    <td className="p-3 text-stone-700">リラクゼーション</td>
                  </tr>
                  <tr className="border-b border-sand-200">
                    <td className="p-3 font-medium text-stone-800">整体</td>
                    <td className="p-3 text-stone-700">骨格・関節・筋膜</td>
                    <td className="p-3 text-stone-700">不要（民間資格あり）</td>
                    <td className="p-3 text-stone-700">姿勢改善・調整</td>
                  </tr>
                  <tr className="border-b border-sand-200 bg-cream-50">
                    <td className="p-3 font-medium text-stone-800">マッサージ（医療）</td>
                    <td className="p-3 text-stone-700">筋肉・循環系</td>
                    <td className="p-3 text-stone-700">必要（あん摩等）</td>
                    <td className="p-3 text-stone-700">医療・治療</td>
                  </tr>
                  <tr className="border-b border-sand-200">
                    <td className="p-3 font-medium text-stone-800">鍼灸</td>
                    <td className="p-3 text-stone-700">ツボ・経絡</td>
                    <td className="p-3 text-stone-700">必要（鍼灸師）</td>
                    <td className="p-3 text-stone-700">医療・治療</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 国家資格がないとは */}
      <section id="no-license" className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="No License Required" ja="国家資格がないとはどういう意味か" lead="よくある誤解を解消" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              「国家資格が不要」というと「未熟な施術者が行っている」というイメージを持つ方もいらっしゃいますが、
              これは正確ではありません。国家資格が不要というのは「医療行為として法律で定められた資格が必要ない」
              という意味であり、施術者のスキル・訓練の水準を直接示すものではありません。
            </p>
            <p>
              多くのリラクゼーションサロンでは、施術者に対して独自の研修・トレーニングを実施しています。
              解剖学・生理学の基礎知識、手技のトレーニング、接客スキルなどを習得した上で施術を行っています。
            </p>
            <p>
              また「医療行為ではない」ということは、「治療」や「疾患の改善」を保証するものではないという意味でもあります。
              もみほぐしはあくまでもリラクゼーション・日々のメンテナンスを目的とした施術です。
              「治る」「改善する」などの医療的な効果を期待している場合は、医療機関へのご相談をおすすめします。
            </p>
          </div>
        </div>
      </section>

      {/* 4. 向いている人 */}
      <section id="who-suits" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Who Is It For" ja="もみほぐしに向いている人" lead="こんな方におすすめです" />
          <div className="mt-8 space-y-4">
            {[
              { title: '日常の疲れ・コリが気になる方', body: '仕事・家事・育児・運動などで蓄積した体の疲れを定期的にほぐしたい方に向いています。特定の疾患の治療ではなく、日常のメンテナンスとしての活用が最も適した使い方です。' },
              { title: 'リラックスしたい・リフレッシュしたい方', body: '静かな空間で体を委ねることで、心身のリラクゼーションを感じやすくなります。仕事のストレスや緊張をほぐしたい方にも多くご利用いただいています。' },
              { title: 'デスクワーク・スマホ疲れの方', body: '長時間のパソコン作業やスマートフォン操作による肩・首・背中の緊張は、もみほぐしでアプローチしやすいお悩みです。' },
              { title: '立ち仕事・肉体労働の方', body: '一日中立ったまま働く方や体を使う仕事の方は、脚・腰・背中に疲れが溜まりやすいです。定期的なほぐしで疲れの蓄積をケアできます。' },
            ].map((item, i) => (
              <div key={i} className="bg-cream-50 border border-sand-200 p-6">
                <p className="text-sm font-medium text-stone-800 mb-2">{item.title}</p>
                <p className="text-sm text-stone-700 leading-loose">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 施術の流れ */}
      <section id="flow" className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Flow" ja="施術の流れ" lead="初めての方のために" />
          <div className="mt-8 space-y-4">
            {[
              { step: '01', title: 'ご予約', body: 'ホットペッパービューティーまたは公式予約ページからご予約ください。当日のご予約も受け付けています。' },
              { step: '02', title: 'カウンセリング', body: '来店後、問診票にご記入いただきます。体の状態・お悩み・希望の圧の強さなどをお聞きします。初めての方も安心してお任せください。' },
              { step: '03', title: '施術', body: 'ご希望のコース時間、施術内容で行います。衣服を着たままでも受けられます（着替えが必要な場合はお知らせします）。' },
              { step: '04', title: 'ご会計・お帰り', body: '施術後はゆっくり体を起こしていただき、お会計をしてご帰宅いただきます。帰宅後の水分補給をおすすめします。' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 bg-sand-100 border border-sand-200 p-5">
                <span className="font-en text-brown-400 text-sm font-medium shrink-0">{item.step}</span>
                <div>
                  <p className="text-sm font-medium text-stone-800 mb-1">{item.title}</p>
                  <p className="text-xs text-stone-700 leading-loose">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MARISAの特徴 */}
      <section id="marisa" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="MARISA's Style" ja="MARISAのもみほぐしの特徴" lead="こだわりのリラクゼーション" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISA 君津店では、お客様一人ひとりの体の状態とお悩みをしっかりとお聞きした上で施術を行います。
              全身のほぐしから特定の部位への重点ケアまで、その日の状態に合わせて対応します。
            </p>
            <p>
              圧の強さはお客様のご希望に合わせて調整します。「強めにほぐしてほしい」「弱めでゆっくり」
              どちらのご要望にも対応可能です。施術中にご希望が変わった場合もお気軽にお申し付けください。
            </p>
            <div className="grid gap-4 sm:grid-cols-2 mt-6">
              <div className="bg-cream-50 border border-sand-200 p-5">
                <p className="font-medium text-stone-800 mb-2 text-sm">料金・メニュー</p>
                <ul className="text-xs text-stone-700 space-y-1.5 leading-loose">
                  <li>・もみほぐし 45分 ¥3,900</li>
                  <li>・もみほぐし 60分 ¥4,500（70分計）</li>
                  <li>・もみほぐし 90分 ¥6,400（100分計）</li>
                  <li>・もみほぐし 120分 ¥8,400</li>
                </ul>
              </div>
              <div className="bg-cream-50 border border-sand-200 p-5">
                <p className="font-medium text-stone-800 mb-2 text-sm">MARISAの特徴</p>
                <ul className="text-xs text-stone-700 space-y-1.5 leading-loose">
                  <li>・夜0時まで営業（最終受付23時）</li>
                  <li>・当日予約OK</li>
                  <li>・無料駐車場完備</li>
                  <li>・鍼灸・美容鍼も受けられる</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="FAQ" ja="よくある質問" />
          <div className="mt-8 space-y-4">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="border border-sand-200 bg-sand-100 p-6">
                <p className="text-sm font-medium text-stone-800 mb-3 tracking-wide">
                  <span className="font-en text-brown-400 mr-2">Q.</span>{item.name}
                </p>
                <p className="text-sm text-stone-700 leading-loose pl-5">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* まとめ・関連ページ */}
      <section className="py-12 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-sm text-stone-700 leading-loose mb-6">
            もみほぐしは、日常の疲れ・コリ・ストレスをリラクゼーション目的でほぐすための施術です。
            医療行為ではありませんが、多くの方が「すっきり感」「体の軽さ」を感じています。
            整体・鍼灸と役割が異なることを理解した上で、自分に合った施術を選ぶことが大切です。
          </p>
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: 'ボディケアメニュー', href: '/menu/body-care' },
              { label: '整体との違い', href: '/guide/vs-seitai' },
              { label: 'もみほぐしの頻度', href: '/guide/frequency' },
              { label: '期待できること', href: '/guide/benefits' },
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
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

      {/* 予約CTA */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">ご予約はこちらから</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">夜0時まで営業・当日予約OK・無料駐車場完備。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton href={BMERIT_URL} label="公式サイトで予約する" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
