import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'もみほぐしの料金相場・コスパの考え方ガイド｜MARISA 君津店',
  description: 'もみほぐしの料金相場やコスパのよい使い方をわかりやすく解説。MARISA君津店は45分¥3,500〜。ホットペッパービューティーのクーポンで初回もお得に。',
  keywords: ['もみほぐし 料金', 'マッサージ 値段', 'もみほぐし コスパ', '君津 マッサージ 料金', 'リラクゼーション 相場'],
  openGraph: {
    title: 'もみほぐしの料金相場・コスパの考え方ガイド｜MARISA 君津店',
    description: 'もみほぐしの料金相場やコスパのよい使い方をわかりやすく解説。MARISA君津店は45分¥3,500〜。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/guide/price-guide' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'もみほぐしの一般的な料金相場はいくらくらいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'リラクゼーションサロンのもみほぐしは、全国的に60分3,000〜6,000円程度が一般的な相場です。立地・設備・技術の質などによって価格帯が異なります。MARISA君津店は45分¥3,500〜・60分¥4,500〜・90分¥6,500〜となっています。初回限定クーポンを利用するとお得にお試しいただける場合があります。',
      },
    },
    {
      '@type': 'Question',
      name: 'コスパよくもみほぐしを利用するコツはありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ホットペッパービューティーの初回クーポンや定期的なキャンペーンを活用するのがおすすめです。また、定期的に通うことで疲れが蓄積しにくくなり、毎回の施術効果を感じやすくなります。疲れが溜まってから行くより、定期的にメンテナンスとして利用する方が長い目で見てコスパがよいという考え方もあります。',
      },
    },
    {
      '@type': 'Question',
      name: '短い時間のコースでも効果はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '45分コースでも首・肩・背中を中心にしっかりほぐすことができます。特定の部位の疲れが気になる場合や時間が限られている場合には45分から試してみるのがおすすめです。より全身をケアしたい場合や初回の方には60〜90分コースを選ぶ方も多くいらっしゃいます。',
      },
    },
  ],
}

export default function GuidePricePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'ガイド', href: '/guide/what-is-momihogushi' }, { label: '料金ガイド' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Price Guide</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              もみほぐしの料金ガイド・コスパを考える
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「もみほぐしってどのくらいかかるの？」という疑問にお答えします。
              料金の相場感やコスパのよい使い方、クーポン活用法をわかりやすく解説します。
              MARISAは君津市内で手頃な料金でしっかりほぐせるリラクゼーションサロンです。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="About" ja="もみほぐしの料金相場" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              リラクゼーションサロンのもみほぐしの料金は、全国的に60分あたり3,000〜6,000円程度が一般的な相場です。都市部では料金が高めになる傾向がありますが、地方や郊外エリアでは比較的手頃な価格でご利用いただけます。同じリラクゼーションサロンでも、立地・設備・空間の質・技術の水準などによって料金帯に差があります。
            </p>
            <p>
              また、「もみほぐし」と一口に言っても、リラクゼーションサロン・整体院・マッサージ院など業態によって提供するサービスの内容や価格帯が大きく異なります。リラクゼーションサロンは国家資格が不要な業態であり、整体院や鍼灸院と比べると一般的に料金は低めに設定されていることが多いです。気軽に継続的に利用できる点がリラクゼーションサロンの特徴です。
            </p>
            <p>
              MARISA君津店の料金は、もみほぐし45分¥3,500〜・60分¥4,500〜・90分¥6,500〜となっています。ヘッドセット60分は¥5,000〜、足つぼセットは¥5,500〜です。ホットペッパービューティーには初回限定クーポンや期間限定キャンペーンが掲載されることがありますので、初めての方はぜひチェックしてみてください。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="MARISA" ja="コスパのよいもみほぐしの使い方" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              もみほぐしをコスパよく利用するには、「疲れが溜まってから行く」よりも「定期的にメンテナンスとして通う」考え方がおすすめです。疲れがひどくなってからでは、1回の施術では物足りなく感じることもあります。月に2〜4回程度を習慣にすることで、体の状態を維持しやすくなり、1回あたりの満足度も高まります。
            </p>
            <p>
              初回ご利用の際はホットペッパービューティーの初回クーポンをぜひ活用してください。通常料金より割引されるクーポンが掲載されることがあり、初めてのご利用をお得に体験していただけます。クーポンの詳細・有効期限はホットペッパービューティーのMARISAページでご確認ください。まずは一度体験して、ご自身の体に合ったコースや通い方を見つけていただければと思います。
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/menu/body-care" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">もみほぐしを見る →</Link>
            <Link href="/menu/set" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">セットコースを見る →</Link>
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
              { label: '君津のマッサージ選びガイド', href: '/guide/kimitsu-massage-guide' },
              { label: 'もみほぐしとは', href: '/guide/what-is-momihogushi' },
              { label: 'メニュー・料金', href: '/menu' },
              { label: 'よくある質問', href: '/faq' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="border border-sand-300 px-3 py-1.5 text-stone-700 hover:border-brown-300 hover:text-brown-500 transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

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
            <ReserveButton href="/menu" label="メニューを見る" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
