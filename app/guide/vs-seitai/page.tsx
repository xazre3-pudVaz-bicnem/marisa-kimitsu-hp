import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'もみほぐしと整体の違いは？どちらが自分に向いてる？｜MARISA 君津店',
  description: 'もみほぐしと整体の違いをわかりやすく解説。筋肉へのアプローチと骨格・関節へのアプローチの違い、国家資格の有無、どちらが向いているかの使い分け目安。',
  keywords: ['もみほぐし 整体 違い', 'もみほぐし 整体 どちら', 'リラクゼーション 整体'],
  openGraph: {
    title: 'もみほぐしと整体の違いは？どちらが自分に向いてる？｜MARISA 君津店',
    description: 'もみほぐしと整体の違いと使い分けを解説。MARISA 君津店。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/guide/vs-seitai' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'もみほぐしと整体はどちらが痛みに対して向いていますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '「痛み」の原因によって異なります。筋肉の疲弊や緊張による重さ・だるさにはもみほぐしが向いています。骨格や関節の問題、または強い痛みが続く場合は、整体や医療機関への相談が適切です。判断が難しい場合は、まず医療機関を受診することをおすすめします。',
      },
    },
    {
      '@type': 'Question',
      name: 'もみほぐしと整体を両方受けることはできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'それぞれ別の施術ですので、両方を受けること自体は可能です。ただし、体への負担を考慮し、施術の間隔を空けることが一般的です。複数の施術を組み合わせる場合は、各施術者に相談することをおすすめします。',
      },
    },
    {
      '@type': 'Question',
      name: '整体が必要かもみほぐしで大丈夫か判断する方法はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '疲れやコリのリラクゼーションが目的であればもみほぐしが向いています。骨格の歪みや関節の問題が気になる場合、または強い痛みが続く場合は、整体師や医療機関に相談することをおすすめします。迷う場合はまず医療機関を受診するのが安全です。',
      },
    },
  ],
}

export default function GuideVsSeitaiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
              「もみほぐし」と「整体」——どちらに行けばいいか迷う方は多いです。それぞれのアプローチの違いと、どちらが自分に向いているかをわかりやすく解説します。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Key Difference" ja="もみほぐしと整体の根本的な違い" lead="アプローチの対象が異なります" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              もみほぐしと整体の最も大きな違いは、「何に働きかける施術か」という点です。
            </p>
            <p>
              もみほぐしは主に筋肉（体の表層・中層部の筋肉群）に対してアプローチします。手や指を使って筋肉を圧迫・揉捏することで、筋肉の緊張をほぐし、リラクゼーションをもたらすことを目的としています。
            </p>
            <p>
              整体は主に骨格・関節・筋膜に対してアプローチします。骨盤・脊椎・各関節のアライメント（位置関係）を調整することで、姿勢の改善や体のバランスを整えることを目的としています。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Comparison" ja="詳細な比較" lead="目的・資格・施術感の違い" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
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
                  <tr className="border-b border-sand-200 bg-cream-50">
                    <td className="p-3 font-medium text-stone-800">主なアプローチ対象</td>
                    <td className="p-3 text-stone-700">筋肉・体表層</td>
                    <td className="p-3 text-stone-700">骨格・関節・筋膜</td>
                  </tr>
                  <tr className="border-b border-sand-200">
                    <td className="p-3 font-medium text-stone-800">主な目的</td>
                    <td className="p-3 text-stone-700">リラクゼーション・疲労ケア</td>
                    <td className="p-3 text-stone-700">姿勢改善・関節調整</td>
                  </tr>
                  <tr className="border-b border-sand-200 bg-cream-50">
                    <td className="p-3 font-medium text-stone-800">国家資格</td>
                    <td className="p-3 text-stone-700">不要（リラクゼーション業）</td>
                    <td className="p-3 text-stone-700">不要（民間資格あり）</td>
                  </tr>
                  <tr className="border-b border-sand-200">
                    <td className="p-3 font-medium text-stone-800">施術の感覚</td>
                    <td className="p-3 text-stone-700">比較的リラックス・ソフト</td>
                    <td className="p-3 text-stone-700">関節操作あり・矯正感あり</td>
                  </tr>
                  <tr className="border-b border-sand-200 bg-cream-50">
                    <td className="p-3 font-medium text-stone-800">向いているお悩み</td>
                    <td className="p-3 text-stone-700">疲れ・コリ・リラクゼーション</td>
                    <td className="p-3 text-stone-700">骨格の歪み・関節の問題</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Which is For You" ja="どちらが向いているか" lead="使い分けの目安" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              一般的な使い分けの目安として、以下を参考にしてください。
            </p>
            <div className="space-y-4 mt-4">
              <div className="bg-sand-100 border border-sand-200 p-5">
                <p className="font-medium text-stone-800 mb-2 tracking-wide text-sm">もみほぐしが向いているケース</p>
                <ul className="text-xs text-stone-700 space-y-1.5 leading-loose">
                  <li>・仕事や日常生活の疲れ・コリをほぐしたい</li>
                  <li>・リラクゼーション・リフレッシュ目的</li>
                  <li>・週末や仕事帰りに気軽に体をいたわりたい</li>
                  <li>・定期的なメンテナンスとして通いたい</li>
                </ul>
              </div>
              <div className="bg-sand-100 border border-sand-200 p-5">
                <p className="font-medium text-stone-800 mb-2 tracking-wide text-sm">整体・医療機関が向いているケース</p>
                <ul className="text-xs text-stone-700 space-y-1.5 leading-loose">
                  <li>・骨格の歪みや関節の問題が気になる</li>
                  <li>・強い痛みが続いている</li>
                  <li>・外傷・炎症が疑われる</li>
                  <li>・医療的な診断・治療が必要な状態</li>
                </ul>
              </div>
            </div>
            <p className="mt-4">
              なお、「疲れ・コリのリラクゼーション」と「骨格の問題」は明確に分けられないこともあります。強い痛みや違和感が続く場合は、まず医療機関を受診することをおすすめします。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
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

      <section className="py-12 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: 'ボディケアメニュー', href: '/menu/body-care' },
              { label: 'もみほぐしとは', href: '/guide/what-is-momihogushi' },
              { label: 'はじめての方へ', href: '/first' },
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

      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">ご予約はこちらから</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">夜0時まで営業・当日予約OK・無料駐車場完備。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton href="/menu" label="メニューを見る" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
