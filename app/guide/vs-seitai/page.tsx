import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'もみほぐしと整体の違いは？どちらが向いているか解説｜MARISA 君津店',
  description: 'もみほぐしと整体の違いを解説。目的・施術内容・国家資格の有無・向いている状態の差を比較。日常の疲れ・コリにはもみほぐし・リラクゼーションがおすすめな理由も紹介。',
  keywords: ['もみほぐし 整体 違い', 'もみほぐし 整体 どちら', '整体 マッサージ 違い', 'リラクゼーション 整体 違い', '君津 整体 もみほぐし 違い'],
  openGraph: {
    title: 'もみほぐしと整体の違いは？どちらが向いているか解説｜MARISA 君津店',
    description: 'もみほぐしと整体の違いを詳しく比較。目的・アプローチ・国家資格の有無・使い分けの目安を解説。',
    locale: 'ja_JP',
    type: 'article',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: `${SITE_URL}/guide/vs-seitai` },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'もみほぐしと整体の違いは？どちらが向いているか解説',
  description: 'もみほぐしと整体の違いを解説。目的・施術内容・国家資格の有無・向いている状態の差を比較。日常の疲れ・コリにはもみほぐし・リラクゼーションがおすすめな理由も紹介。',
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
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/guide/vs-seitai` },
  about: { '@type': 'Thing', name: 'もみほぐしと整体の比較' },
  inLanguage: 'ja',
  keywords: 'もみほぐし 整体 違い, もみほぐし 整体 どちら, 整体 マッサージ 違い, リラクゼーション 整体 違い, 君津 整体 もみほぐし 違い',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'もみほぐしと整体はどちらが痛いですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '一般的に、整体は骨格・関節への操作を含むため矯正感（バキッとする感覚）を伴う場合があります。もみほぐしは主に筋肉への手技が中心で、圧の強さを調整できます。ただし個人差があります。もみほぐしの圧はご希望に合わせて調整できますので、遠慮なくお申し付けください。',
      },
    },
    {
      '@type': 'Question',
      name: 'コリには整体ともみほぐしどちらがいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '「コリ」の状態によって異なります。筋肉の疲弊・緊張によるコリにはもみほぐしが向いています。骨格の歪みが原因でコリが繰り返されていると感じる場合は、整体も選択肢になります。どちらか迷う場合は、まずリラクゼーション目的のもみほぐしからお試しいただき、症状に応じて判断するのも良いでしょう。',
      },
    },
    {
      '@type': 'Question',
      name: '国家資格がないと効果が薄いですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '国家資格の有無と施術の質は直接的に連動するものではありません。もみほぐし（リラクゼーション業）は国家資格が不要ですが、サロンによって独自の研修・トレーニングが行われています。一方、医療行為（治療・疾患改善）を目的とする場合は国家資格保有者への相談が必要です。',
      },
    },
    {
      '@type': 'Question',
      name: 'もみほぐしで骨格調整はできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'もみほぐしは主に筋肉へのアプローチを行うリラクゼーション施術です。骨格・関節の調整を目的とした施術ではありません。骨格の歪みが気になる場合は、整体師や医療機関への相談をおすすめします。',
      },
    },
    {
      '@type': 'Question',
      name: 'もみほぐしと整体を両方利用することはできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'それぞれ別の施術ですので、両方を受けること自体は可能です。ただし体への負担を考慮し、施術の間隔を空けることが一般的です。複数の施術を組み合わせる場合は、各施術者にご相談ください。',
      },
    },
  ],
}

export default function GuideVsSeitaiPage() {
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
              { label: 'もみほぐし vs 整体' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Guide</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              もみほぐしと整体は何が違う？どちらが向いている？
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「もみほぐし」と「整体」——どちらに行けばいいか迷う方は多いです。
              それぞれのアプローチの違い・目的・資格の有無・使い分けの目安を詳しく解説します。
            </p>
            {/* 目次 */}
            <nav className="mt-8 bg-cream-50 border border-sand-200 p-5 max-w-xl">
              <p className="text-xs tracking-widest text-greige-400 uppercase mb-3">Contents</p>
              <ol className="space-y-2 text-xs text-stone-700">
                <li><a href="#difference" className="hover:text-brown-500 transition-colors">1. 根本的な違い</a></li>
                <li><a href="#seitai" className="hover:text-brown-500 transition-colors">2. 整体とは何か</a></li>
                <li><a href="#momihogushi" className="hover:text-brown-500 transition-colors">3. もみほぐしとは何か</a></li>
                <li><a href="#license" className="hover:text-brown-500 transition-colors">4. 資格の違い</a></li>
                <li><a href="#comparison" className="hover:text-brown-500 transition-colors">5. 詳細比較表</a></li>
                <li><a href="#which" className="hover:text-brown-500 transition-colors">6. どちらを選ぶべきか</a></li>
                <li><a href="#faq" className="hover:text-brown-500 transition-colors">7. よくある質問</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* 1. 根本的な違い */}
      <section id="difference" className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Key Difference" ja="根本的な違い" lead="アプローチの対象が異なります" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              もみほぐしと整体の最も大きな違いは、「何に働きかける施術か」という点です。
            </p>
            <div className="grid gap-4 sm:grid-cols-2 mt-4">
              <div className="bg-sand-100 border border-sand-200 p-5">
                <p className="font-medium text-stone-800 mb-2 text-sm">もみほぐし</p>
                <p className="text-xs text-stone-700 leading-loose">
                  主に筋肉（体の表層・中層部の筋肉群）に対してアプローチ。
                  手や指を使って筋肉を圧迫・揉捏することで、筋肉の緊張をほぐし、
                  リラクゼーションをもたらすことを目的とします。
                </p>
              </div>
              <div className="bg-sand-100 border border-sand-200 p-5">
                <p className="font-medium text-stone-800 mb-2 text-sm">整体</p>
                <p className="text-xs text-stone-700 leading-loose">
                  主に骨格・関節・筋膜に対してアプローチ。
                  骨盤・脊椎・各関節のアライメントを調整することで、
                  姿勢の改善や体のバランスを整えることを目的とします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 整体とは */}
      <section id="seitai" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="What is Seitai" ja="整体とは何か" lead="骨格・関節へのアプローチ" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              整体とは、骨格・関節・筋膜へのアプローチを通じて体のバランスを整える施術の総称です。
              骨盤矯正・脊椎調整・関節モビリゼーションなど、
              体の構造的な問題にアプローチする技術が中心です。
            </p>
            <p>
              日本では整体師に法的に定められた国家資格はなく、
              様々な民間資格や独自の技法が存在します。
              ただし、柔道整復師・理学療法士など関連する国家資格保有者が
              整体的な施術を行うケースもあります。
            </p>
            <p>
              整体は「骨格の歪みを整えたい」「姿勢を改善したい」「関節の可動域を改善したい」
              という目的の方に向いています。
              施術中に「バキッ」という音がする矯正操作を行う場合もあります。
            </p>
          </div>
        </div>
      </section>

      {/* 3. もみほぐしとは */}
      <section id="momihogushi" className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="What is Momihogushi" ja="もみほぐしとは何か" lead="筋肉の緊張をほぐすリラクゼーション" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              もみほぐしは、筋肉の緊張をほぐすことを目的としたリラクゼーション施術です。
              「リラクゼーション業」として位置づけられており、医療行為・治療行為ではありません。
            </p>
            <p>
              疲れやコリを感じる筋肉に直接アプローチするため、
              施術後に「体が軽くなった」「肩の重さがやわらいだ」という感覚を
              感じやすいのが特徴です。
            </p>
            <p>
              国家資格は不要ですが、サロンによって独自の研修・トレーニングが実施されています。
              施術中の圧の強さを調整できるため、自分に合ったリラクゼーションが受けやすいのも魅力です。
            </p>
          </div>
        </div>
      </section>

      {/* 4. 資格の違い */}
      <section id="license" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="License" ja="資格の違い" lead="国家資格の有無と意味" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              整体師に必須の国家資格はなく、民間資格を取得した施術者が多いです。
              ただし関連する国家資格として柔道整復師・理学療法士・あん摩マッサージ指圧師などがあります。
            </p>
            <p>
              もみほぐしも同様に国家資格は不要です。
              「国家資格がない＝技術が低い」ということではなく、
              医療行為として法的に資格が定められていないというのが正確な解釈です。
            </p>
            <p className="text-xs bg-cream-50 border border-sand-200 p-4 leading-loose">
              ※医療的な治療（診断・疾患の治療・医療行為）が必要な場合は、必ず医療機関にご相談ください。
              もみほぐし・整体はいずれもリラクゼーション・メンテナンス目的の施術です。
            </p>
          </div>
        </div>
      </section>

      {/* 5. 比較表 */}
      <section id="comparison" className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Comparison" ja="詳細比較表" lead="目的・資格・施術感の違い" />
          <div className="mt-8">
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-stone-800 text-cream-50">
                    <th className="p-3 text-left font-medium tracking-wide">比較項目</th>
                    <th className="p-3 text-left font-medium tracking-wide">もみほぐし</th>
                    <th className="p-3 text-left font-medium tracking-wide">整体</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: '主なアプローチ対象', momihogushi: '筋肉・体表層', seitai: '骨格・関節・筋膜' },
                    { item: '主な目的', momihogushi: 'リラクゼーション・疲労ケア', seitai: '姿勢改善・関節調整' },
                    { item: '国家資格', momihogushi: '不要（リラクゼーション業）', seitai: '不要（民間資格あり）' },
                    { item: '施術の感覚', momihogushi: '比較的リラックス・ソフト', seitai: '関節操作あり・矯正感あり' },
                    { item: '向いているお悩み', momihogushi: '疲れ・コリ・リラクゼーション', seitai: '骨格の歪み・関節の問題' },
                    { item: '施術中の痛み', momihogushi: '圧の調整可', seitai: '矯正時に感じる場合あり' },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b border-sand-200 ${i % 2 === 0 ? 'bg-sand-100' : 'bg-cream-50'}`}>
                      <td className="p-3 font-medium text-stone-800">{row.item}</td>
                      <td className="p-3 text-stone-700">{row.momihogushi}</td>
                      <td className="p-3 text-stone-700">{row.seitai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 6. どちらを選ぶか */}
      <section id="which" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Which to Choose" ja="どちらを選ぶべきか" lead="使い分けの目安" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <div className="space-y-4">
              <div className="bg-cream-50 border border-sand-200 p-5">
                <p className="font-medium text-stone-800 mb-2 tracking-wide text-sm">もみほぐしが向いているケース</p>
                <ul className="text-xs text-stone-700 space-y-1.5 leading-loose">
                  <li>・仕事や日常生活の疲れ・コリをほぐしたい</li>
                  <li>・リラクゼーション・リフレッシュ目的</li>
                  <li>・週末や仕事帰りに気軽に体をいたわりたい</li>
                  <li>・定期的なメンテナンスとして通いたい</li>
                  <li>・強い痛みや疾患は特にないが体が重い</li>
                </ul>
              </div>
              <div className="bg-cream-50 border border-sand-200 p-5">
                <p className="font-medium text-stone-800 mb-2 tracking-wide text-sm">整体・医療機関が向いているケース</p>
                <ul className="text-xs text-stone-700 space-y-1.5 leading-loose">
                  <li>・骨格の歪みや関節の問題が気になる</li>
                  <li>・強い痛みが続いている</li>
                  <li>・外傷・炎症が疑われる</li>
                  <li>・医療的な診断・治療が必要な状態</li>
                  <li>・原因不明の痛みや症状がある</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs bg-cream-50 border border-sand-200 p-4 leading-loose">
              ※強い痛みや違和感が続く場合は、まず医療機関を受診することをおすすめします。
              もみほぐし・整体はいずれも医療行為の代替ではありません。
            </p>
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

      {/* まとめ・関連 */}
      <section className="py-12 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-sm text-stone-700 leading-loose mb-6">
            もみほぐしは「筋肉のリラクゼーション」、整体は「骨格・関節の調整」という
            根本的な違いがあります。日常の疲れ・コリのケアにはもみほぐしが向いています。
          </p>
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: 'ボディケアメニュー', href: '/menu/body-care' },
              { label: 'もみほぐしとは', href: '/guide/what-is-momihogushi' },
              { label: 'はじめての方へ', href: '/first' },
              { label: '期待できること', href: '/guide/benefits' },
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
