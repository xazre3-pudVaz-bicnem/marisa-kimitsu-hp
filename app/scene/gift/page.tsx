import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'プレゼント・記念日のもみほぐし｜MARISA 君津店',
  description: '君津でマッサージをプレゼントしたいならMARISA。誕生日・母の日・父の日・記念日のサプライズに。ホットペッパービューティーのギフト券活用でペア利用も。',
  keywords: ['君津 マッサージ プレゼント', '君津 もみほぐし 誕生日', '君津 記念日 リラクゼーション'],
  openGraph: {
    title: 'プレゼント・記念日のもみほぐし｜MARISA 君津店',
    description: '誕生日・母の日・父の日・記念日のサプライズに。君津MARISA。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/scene/gift' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'ホットペッパービューティーのギフト券は使えますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、ホットペッパービューティーのギフト券をご利用いただけます。大切な方へのプレゼントとしてギフト券を贈ることで、好きなタイミングでご来店いただけます。詳細はホットペッパービューティーの公式サービスをご確認ください。',
      },
    },
    {
      '@type': 'Question',
      name: 'カップル・夫婦でのペア利用はできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、ペアでのご利用も歓迎しております。お席の状況によっては同時間帯での対応も可能です。ご予約の際に「2名で利用したい」旨をお伝えいただくとスムーズです。',
      },
    },
    {
      '@type': 'Question',
      name: 'プレゼントとして予約する場合、受け取る本人が手続きできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ホットペッパービューティーのギフト券を贈る場合、受け取った方が自分でご予約・ご来店いただけます。ご不明な点はお気軽にお問い合わせください。',
      },
    },
  ],
}

export default function SceneGiftPage() {
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
              { label: '地域・シーン別', href: '/area/kimitsu' },
              { label: 'プレゼント・記念日に' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Gift & Anniversary</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              大切な方へのプレゼントに
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              誕生日、母の日、父の日、記念日——いつも頑張っている大切な人に、体のケアをプレゼントしませんか。君津のMARISAは贈り物としてのご利用も大歓迎です。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Gift Scenes" ja="プレゼントに喜ばれるシーン" lead="こんな場面でご活用いただいています" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              「いつも家族のために頑張っているお母さんに」「毎日仕事で疲れているパートナーに」——もみほぐしのプレゼントは、形に残るものとは違う、体で感じてもらえる特別な贈り物です。
            </p>
            <p>
              誕生日サプライズとして、ご夫婦・カップルの記念日に、母の日や父の日の贈り物として、また「お疲れさま」の気持ちを伝えたいときのサプライズとして——さまざまなシーンでご活用いただいています。
            </p>
            <p>
              普段は「自分だけのために時間とお金を使うのは…」と遠慮しがちな方も、プレゼントとして受け取ればとても喜んでいただけます。特に40〜60代のお父さん・お母さん世代は、体のケアへの関心が高まっている反面、自分では予約しにくいという方も多く、プレゼントとして大変喜ばれています。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Pair Use" ja="ペア利用でのギフト活用" lead="一緒に体をいたわる時間を" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              「一緒にリフレッシュしよう」と誘ってのペア利用も、素敵なプレゼントの形のひとつです。カップルや夫婦で同じ時間を共有しながら体をほぐすことで、より特別な記念日の思い出になります。
            </p>
            <p>
              MARISAでは複数名でのご来店も対応しております。ご予約時に人数やご希望のメニューをお伝えいただければ、できる限りご希望に沿った形でご用意いたします。
            </p>
            <p>
              人気のペアプランとしては、2名でそれぞれ60分もみほぐしをご利用いただくパターンや、片方がヘッドセット・もう片方が足つぼセットを選ぶなど、お好みに合わせてメニューを組み合わせることもできます。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Gift Voucher" ja="ホットペッパービューティーのギフト券" lead="好きなタイミングで使える贈り物" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              ホットペッパービューティーではギフト券サービスを提供しています。金額を指定して購入したギフト券を贈ることで、受け取った方が自分の好きなタイミングでMARISAに予約・来店できます。
            </p>
            <p>
              「何が欲しいかわからない」「モノよりも体験を贈りたい」という方にも、マッサージギフトは喜ばれる選択肢です。当日の場合も事前予約でも対応していますので、受け取った方のスケジュールに合わせて使っていただけます。
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
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
              { label: 'メニュー・料金', href: '/menu' },
              { label: 'よくある質問', href: '/faq' },
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
