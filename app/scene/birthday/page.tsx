import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '誕生日・記念日に体のご褒美を｜MARISA 君津店',
  description: '君津で誕生日・記念日のご褒美もみほぐしならMARISA。自分へのプレゼントに、パートナーへのサプライズに。90〜120分のたっぷりコース・ペア利用が人気。当日予約OK。',
  keywords: ['君津 誕生日 マッサージ', '誕生日プレゼント もみほぐし 君津', '記念日 マッサージ 君津', '自分へのご褒美 もみほぐし 君津'],
  openGraph: {
    title: '誕生日・記念日に体のご褒美を｜MARISA 君津店',
    description: '誕生日・記念日に自分へのご褒美・パートナーへのサプライズに。君津MARISA。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/scene/birthday' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '誕生日当日に予約できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、当日予約も受け付けております。ホットペッパービューティーから空き状況をご確認の上、ご予約ください。特別な日を最大限に楽しんでいただけるよう、スタッフ一同お待ちしております。',
      },
    },
    {
      '@type': 'Question',
      name: 'ペアで来ることはできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、ベッドを3台ご用意していますので、カップルや友人同士でのペア利用も可能です。予約時に「2名での来店予定」とお知らせいただくと、できる限り同じ時間帯でご案内できるよう調整いたします。',
      },
    },
    {
      '@type': 'Question',
      name: '特別メニューはありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '特別な日には90〜120分のたっぷりコースがおすすめです。全身をじっくりほぐせるコースは、普段とは違う特別感があります。ヘッドセット・足つぼセットも記念日に選ばれることが多いコースです。',
      },
    },
    {
      '@type': 'Question',
      name: 'プレゼントとして予約できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ホットペッパービューティーのギフト券を購入して贈る方法が便利です。受け取った方が自分の都合のよい日時にご予約・来店できます。一緒にペアで来店するスタイルも人気です。',
      },
    },
    {
      '@type': 'Question',
      name: '当日予約できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、当日予約も受け付けています。ただし、土日祝・夜の時間帯は混雑する場合がありますので、早めのご予約またはホットペッパービューティーから事前に空き状況をご確認いただくと確実です。',
      },
    },
  ],
}

export default function SceneBirthdayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: '地域・シーン別', href: '/area/kimitsu' }, { label: '誕生日・記念日に' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Birthday &amp; Anniversary</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              誕生日・記念日に、体のご褒美を
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              自分へのプレゼントに、パートナーへのサプライズに——特別な日だからこそ、いつもより少し長めのコースでじっくり体をほぐしてみませんか。記念日の思い出として、体が喜ぶ時間を贈りましょう。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Special Day" ja="特別な日にもみほぐしが喜ばれる理由" lead="体験ギフトとして定着しています" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              毎年の誕生日プレゼントに「物」を贈り続けていると、何を贈るか悩むことも多いですよね。そんなときに注目されているのが「体験ギフト」です。もみほぐしは日々働いている方、育児や家事に忙しい方、年齢とともに体の疲れを感じやすくなった方など、幅広い方に喜ばれるプレゼントです。
            </p>
            <p>
              「いつも頑張っているあの人に、ゆっくり休んでほしい」という気持ちを込めたプレゼントとして、体験ギフトは人気が高まっています。自分一人ではなかなかサロンへ行くきっかけを作れない方も、プレゼントされたことで初めてリラクゼーションサロンを体験する機会になります。
            </p>
            <p>
              「一緒に来店して、ペアでほぐしてもらう」というスタイルも人気です。カップルや友人同士で同じ時間に施術を受けることができ、施術後はお互いのリラックス感を共有しながら帰ることができます。特別な日の思い出作りとしてもおすすめです。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="How to Use" ja="誕生日・記念日の2つの楽しみ方" lead="自分への・誰かへの贈り物に" />
          <div className="mt-8 space-y-6">
            <div className="border-l-4 border-brown-300 pl-5 py-2">
              <p className="font-medium text-stone-800 mb-2 text-sm">自分へのご褒美として</p>
              <p className="text-sm text-stone-700 leading-loose">
                「誕生日くらいは自分にご褒美を」というときに。いつもより少し長めの90〜120分コースを選んで、日頃の頑張りを自分でいたわる時間にしましょう。当日予約でも対応していますので、その日の気分で来店していただけます。
              </p>
            </div>
            <div className="border-l-4 border-brown-300 pl-5 py-2">
              <p className="font-medium text-stone-800 mb-2 text-sm">パートナー・友人へのプレゼントとして</p>
              <p className="text-sm text-stone-700 leading-loose">
                「一緒に行こう」と誘ってペアで来店するのも素敵なプレゼントの形。ホットペッパービューティーのギフト券を贈って「好きなタイミングで使ってね」というスタイルも人気です。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Recommended" ja="誕生日・記念日のおすすめコース" lead="特別な日に選ばれるコース" />
          <div className="mt-8 space-y-4">
            <div className="bg-sand-100 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">もみほぐし 90〜120分（たっぷりコース）</p>
              <p className="text-sm text-stone-700 leading-loose">
                特別な日には「いつもより長めに」が定番です。90〜120分コースで全身をじっくりほぐすと、普段60分では時間が足りないと感じている部分もしっかりケアできます。記念日の贈り物として選ばれることも多いコースです。
              </p>
            </div>
            <div className="bg-sand-100 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">ヘッドセット 60分〜</p>
              <p className="text-sm text-stone-700 leading-loose">
                「頭・肩・首のセットコースを誕生日に」という方も多いです。普段は選ばないコースを特別な日に試す機会として、ギフトや記念日利用にも喜ばれています。
              </p>
            </div>
            <div className="bg-sand-100 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">ペア利用（2コース同時）</p>
              <p className="text-sm text-stone-700 leading-loose">
                カップル・友人同士でそれぞれのコースを選んで同時施術。それぞれが好きなメニューを自由に選べるので、どちらにも満足していただきやすいのがポイントです。
              </p>
            </div>
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
              { label: '友人・グループで', href: '/scene/friends' },
              { label: 'プレゼント・ギフトに', href: '/scene/gift' },
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
