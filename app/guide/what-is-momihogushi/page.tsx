import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'もみほぐしとは？整体・マッサージとの違いをわかりやすく解説｜MARISA 君津店',
  description: 'もみほぐしとは何か、整体・鍼灸・医療マッサージとの違いをわかりやすく解説。国家資格の有無、リラクゼーション目的に向いている理由とMARISAの特徴も紹介。',
  keywords: ['もみほぐし とは', 'もみほぐし 整体 違い', 'リラクゼーション もみほぐし'],
  openGraph: {
    title: 'もみほぐしとは？整体・マッサージとの違いをわかりやすく解説｜MARISA 君津店',
    description: 'もみほぐしと整体・マッサージの違いをわかりやすく解説。MARISA 君津店。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/guide/what-is-momihogushi' },
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
      name: 'もみほぐしと整体はどちらが自分に向いていますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '疲れやコリのリラクゼーションを目的とする場合はもみほぐしが向いています。骨格や関節の調整を目的とする場合や、痛みの原因が明確でその治療を希望する場合は、整体や医療機関への相談が適しています。',
      },
    },
    {
      '@type': 'Question',
      name: 'もみほぐしは毎回違う施術になりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '施術前に毎回お体の状態やお悩みをお聞きし、その日の状態に合わせた施術を行います。体調や疲れ具合は日々変化するため、毎回同じではなくその日の状態に合わせて対応します。',
      },
    },
  ],
}

export default function GuideWhatIsMomihogushiPage() {
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
              { label: 'もみほぐしとは' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Guide</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              もみほぐしとは？整体・マッサージとどう違う？
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「もみほぐし」「整体」「マッサージ」——言葉は似ていますが、それぞれ異なるものです。選び方に迷っている方のために、わかりやすく解説します。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="What is Momihogushi" ja="もみほぐしとは" lead="リラクゼーション施術の基本" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              もみほぐしとは、主に筋肉の緊張をほぐすことを目的としたリラクゼーション施術です。手技（手や指を使った施術）によって体の表層にある筋肉を刺激し、緊張やコリをやわらげることを目的としています。
            </p>
            <p>
              日本では「リラクゼーション業」として位置づけられており、医療行為や治療行為ではなく、あくまでも「癒し・リラクゼーション」を提供するサービスです。そのため、「疲れを取りたい」「体をほぐしてリフレッシュしたい」という目的でご利用いただくのが主な使い方です。
            </p>
            <p>
              もみほぐしの施術は通常、全身または指定した部位（肩・背中・腰・脚など）に対して行われます。うつ伏せや横向きなど体勢を変えながら、手のひら・指・肘などを使って筋肉を圧迫・揉捏（もみこね）します。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Comparison" ja="整体・鍼灸・マッサージとの違い" lead="何がどう違うのかを整理" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              よく混同されますが、もみほぐしと他の施術は目的・対象・資格の有無において異なります。
            </p>
            <div className="overflow-x-auto mt-6">
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
            <p className="mt-6">
              特に注意したいのは「マッサージ」という言葉についてです。日本では「マッサージ」を正式に名乗れるのは国家資格（あん摩マッサージ指圧師）を持つ施術者のみです。一般のリラクゼーションサロンでは「もみほぐし」「ボディケア」などの呼称を使用しています。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="For Relaxation" ja="もみほぐしがリラクゼーションに向いている理由" lead="疲れを取りたい方へ" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              「体が疲れている」「肩こりをほぐしたい」「リフレッシュしたい」という目的であれば、もみほぐしは非常に適した選択肢です。医療行為ではないため、治療の必要がない方でも気軽にご利用いただけます。
            </p>
            <p>
              整体が骨格や関節へのアプローチを主とするのに対し、もみほぐしは体表層の筋肉をほぐすことに特化しています。そのため、「とにかく筋肉の緊張をほぐしたい」「全身を気持ちよくほぐしたい」という方のニーズに直接応えることができます。
            </p>
            <p>
              また、もみほぐしは施術中も比較的リラックスした状態で受けられます。うつ伏せ姿勢でBGMの流れる静かな空間で受ける施術は、体のケアと同時に心のリラクゼーションにもつながりやすいです。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="MARISA's Style" ja="MARISAのもみほぐしの特徴" lead="こだわりのリラクゼーション" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISA 君津店では、お客様一人ひとりの体の状態とお悩みをしっかりとお聞きした上で施術を行います。全身のほぐしから特定の部位への重点ケアまで、その日の状態に合わせて対応します。
            </p>
            <p>
              圧の強さはお客様のご希望に合わせて調整します。「強めにほぐしてほしい」「弱めでゆっくり」どちらのご要望にも対応可能です。施術中にご希望が変わった場合もお気軽にお申し付けください。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
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

      <section className="py-12 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: 'ボディケアメニュー', href: '/menu/body-care' },
              { label: 'もみほぐしの頻度', href: '/guide/frequency' },
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
