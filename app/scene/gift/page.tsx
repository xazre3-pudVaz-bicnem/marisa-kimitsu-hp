import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'プレゼントに・体験ギフトのもみほぐし｜MARISA 君津店',
  description: '君津でマッサージをプレゼントしたいならMARISA。誕生日・記念日・母の日・父の日のサプライズに。ホットペッパービューティーのギフト券でペア体験も。当日予約OK・無料駐車場完備。',
  keywords: ['君津 マッサージ プレゼント', 'もみほぐし ギフト 君津', '体験ギフト マッサージ 君津', '誰かへのプレゼント もみほぐし'],
  openGraph: {
    title: 'プレゼントに・体験ギフトのもみほぐし｜MARISA 君津店',
    description: '誕生日・記念日・母の日・父の日に体のケアをプレゼント。君津MARISA。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/scene/gift' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'プレゼント用にギフト券はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ホットペッパービューティーのギフト券サービスをご活用いただけます。金額を指定して購入し、贈られた方が自分の都合のよい日時にMARISAへご予約・来店できます。詳細はホットペッパービューティーの公式サービスをご確認ください。',
      },
    },
    {
      '@type': 'Question',
      name: 'ペアで来店できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、ベッドを3台ご用意していますので、カップルや友人・家族でのペア利用も歓迎しています。ご予約時に「2名で来店予定」とお知らせいただくと、できる限り同じ時間帯でご案内できるよう調整いたします。',
      },
    },
    {
      '@type': 'Question',
      name: '誕生日に特別なサービスはありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MARISAはリラクゼーションサロンとして、誕生日の方にも通常のメニューを丁寧にご提供しています。特別な日には90分〜120分のゆったりコースをおすすめしています。ご希望があればスタッフへお気軽にお声がけください。',
      },
    },
    {
      '@type': 'Question',
      name: 'プレゼントとして予約する前に相談できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、お気軽にお問い合わせください。ホットペッパービューティーのメッセージ機能もご活用いただけます。「どのコースがプレゼント向きか」「ペアでの利用方法は」などのご質問にお答えします。',
      },
    },
    {
      '@type': 'Question',
      name: 'どんな人へのプレゼントに向いていますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '仕事や育児で体が疲れている方、自分のためにサロンへなかなか行けない方、年齢とともに体の重さが気になってきた方、日頃の感謝を伝えたい大切な方——幅広い方にご活用いただいています。特に40〜60代の親世代へのプレゼントとして喜ばれています。',
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
              { label: 'プレゼント・ギフトに' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Gift & Experience</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              大切な方へ、体のケアをプレゼント
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              誕生日、記念日、母の日、父の日——いつも頑張っている大切な人に、もみほぐし体験をプレゼントしませんか。形に残るギフトとは違う「体で感じてもらえる特別な贈り物」として、多くの方に選ばれています。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Gift Scenes" ja="こんなシーンでご活用ください" lead="体のケアが喜ばれる理由" />
          <div className="mt-10 grid gap-5">
            {[
              {
                title: '誕生日のサプライズに',
                body: '「何をプレゼントしたらいいかわからない」というときに選ばれるのがもみほぐし体験。物ではなく「体がほぐれる時間」を贈ることで、受け取った方がしっかりと実感できるギフトになります。',
              },
              {
                title: 'お世話になった方への感謝に',
                body: '仕事仲間・恩師・上司・お世話になっている方へ、「いつもありがとう」の気持ちを込めて。体のケアというギフトは「気が利いている」と感じてもらえる選択肢です。',
              },
              {
                title: '母の日・父の日・敬老の日に',
                body: '自分ではなかなかサロンへ行くきっかけが作れない親世代に、子どもからの贈り物として。「一緒に連れていく」というスタイルも、特別な時間になります。',
              },
              {
                title: 'ペア体験でさらに特別に',
                body: 'カップルや友人同士で「一緒に体をほぐす時間」を過ごすペア来店も人気です。同じ時間を共有しながらリフレッシュすることで、より特別な記念になります。',
              },
            ].map((item, i) => (
              <div key={i} className="bg-sand-100 border border-sand-200 p-6">
                <p className="font-medium text-stone-800 mb-2 tracking-wide text-sm">{item.title}</p>
                <p className="text-sm text-stone-700 leading-loose">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Recommended Courses" ja="プレゼントに人気のコース" lead="特別感があるコースをご提案" />
          <div className="mt-8 space-y-4">
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">もみほぐし 60〜90分</p>
              <p className="text-sm text-stone-700 leading-loose">
                プレゼントとして受け取った方が「しっかりほぐしてもらえた」と感じやすい、定番かつ人気のコースです。60分は気軽に受けやすく、90分はより特別感があります。初めての方への贈り物にも安心してお選びいただけます。
              </p>
            </div>
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">ヘッドセット 60分〜</p>
              <p className="text-sm text-stone-700 leading-loose">
                頭・首・肩のセットコースは、デジタル疲れが気になる現代人に喜ばれるギフトです。「普段自分では選ばないコース」を贈るからこそ、体験の新鮮さが加わりより喜ばれます。
              </p>
            </div>
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">足つぼセット</p>
              <p className="text-sm text-stone-700 leading-loose">
                立ち仕事・長距離移動が多い方、足のむくみや疲れが気になる方へのプレゼントに。セットコースは単体より体験の充実感が高く、ギフトとしての満足度も上がります。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="How to Gift" ja="プレゼントの贈り方" lead="2つの方法でご活用いただけます" />
          <div className="mt-8 space-y-6">
            <div className="border-l-4 border-brown-300 pl-5 py-2">
              <p className="font-medium text-stone-800 mb-2 text-sm">ホットペッパービューティーのギフト券を贈る</p>
              <p className="text-sm text-stone-700 leading-loose">
                ギフト券を購入して贈ることで、受け取った方が自分の都合に合わせて予約・来店できます。「いつ行けるかわからない」という方にも柔軟に対応できる方法です。
              </p>
            </div>
            <div className="border-l-4 border-brown-300 pl-5 py-2">
              <p className="font-medium text-stone-800 mb-2 text-sm">一緒に来店してペアで体験する</p>
              <p className="text-sm text-stone-700 leading-loose">
                「今日一緒に行こう」と誘って、2名でご来店するスタイルも人気です。それぞれのコースを選べるので、お互いに自分に合ったケアを受けながら特別な時間を共有できます。
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
              { label: '誕生日・記念日に', href: '/scene/birthday' },
              { label: '友人・グループで', href: '/scene/friends' },
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
