import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '休日に通えるマッサージ・もみほぐし｜MARISA 君津店',
  description: '君津で休日・土日祝もみほぐしならMARISA。年中無休10〜24時営業。土日の午前中のリフレッシュ、家族との時間前の自分ケアに。90分コース・ヘッドセット・足つぼセットが人気。当日予約OK・無料駐車場完備。',
  keywords: ['君津 休日 マッサージ', '君津 土日 もみほぐし', '君津 週末 リラクゼーション', '君津 休日 ケア'],
  openGraph: {
    title: '休日に通えるマッサージ・もみほぐし｜MARISA 君津店',
    description: '君津で休日・土日祝もみほぐしならMARISA。年中無休10〜24時営業。当日予約OK・無料駐車場完備。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/scene/holiday' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '土日でも予約できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、MARISAは年中無休で営業しております。土曜・日曜も通常通り10:00〜24:00（最終受付23:00）でご利用いただけます。ホットペッパービューティーからいつでも予約可能です。',
      },
    },
    {
      '@type': 'Question',
      name: '休日は混み合いますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '土日・祝日は多くのお客様にご来店いただくため、特に午後の時間帯はご予約が集中しやすくなります。午前中の早い時間帯は比較的ご案内しやすいことが多いです。ご希望の時間を確保するために、ホットペッパービューティーからの事前予約をおすすめします。',
      },
    },
    {
      '@type': 'Question',
      name: '家族と一緒に来られますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、ご家族・カップル・友人でのご来店も大歓迎です。ベッドを3台ご用意していますので、複数名での同時施術にも対応できる場合があります。ご予約時にお人数をお知らせいただくとスムーズです。',
      },
    },
    {
      '@type': 'Question',
      name: '午前中に来ることはできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、10:00からご利用いただけます。午前中は比較的空きがあることも多く、ゆったりご利用いただきやすいです。休日の午前中にリフレッシュして、午後からの家族との時間やお出かけをより楽しんでいただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '祝日も営業していますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、年中無休ですので祝日・連休中も通常営業しております。ゴールデンウィーク・お盆・年末年始も10:00〜24:00（最終受付23:00）でご利用いただけます。',
      },
    },
  ],
}

export default function SceneHolidayPage() {
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
              { label: '休日に' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Holiday Refresh</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              休日こそ、自分の体をいたわる日に
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              土日祝も年中無休、朝10時から深夜0時まで営業のMARISAは、お客様の休日のペースに合わせてご利用いただける君津のリラクゼーションサロンです。午前のリフレッシュから夜のケアまで、自分らしいスタイルでお越しください。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Why Holiday" ja="休日にMARISAが選ばれる理由" lead="こんな方に喜ばれています" />
          <div className="mt-10 grid gap-5">
            {[
              {
                title: '土日祝も年中無休で営業',
                body: '祝日・連休・お盆・年末年始も関係なく、10:00〜24:00（最終受付23:00）で通常営業しています。「今日ふと行きたくなった」に対応できる、休日フレンドリーなサロンです。',
              },
              {
                title: '休日の午前中に体をリセット',
                body: '午前中のご来店は比較的ゆったりとご利用いただきやすく、施術後の午後を体も気分もすっきりした状態で過ごせます。家族との外出前・買い物前の自分ケアにもおすすめです。',
              },
              {
                title: '時間を気にせずゆっくりできる',
                body: '平日と違い、休日はまとまった時間が取れます。90分・120分のたっぷりコースで、一週間分の疲れを体全体からほぐしていただけます。',
              },
              {
                title: '家族・ペアでの利用も歓迎',
                body: 'ベッド3台完備でご家族やカップルの同時利用にも対応可能。「一緒にリフレッシュしよう」という休日のお出かけ先としても選んでいただいています。',
              },
              {
                title: '無料駐車場完備でアクセス簡単',
                body: '店舗前に無料駐車場があります。君津駅から車で約5分・君津ICから約10分。休日のドライブがてら気軽にお立ち寄りいただけます。',
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
          <SectionHeader en="Recommended Courses" ja="休日におすすめのコース" lead="ゆったりお時間を取れる休日に" />
          <div className="mt-8 space-y-4">
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">もみほぐし 90〜120分</p>
              <p className="text-sm text-stone-700 leading-loose">
                休日の醍醐味は「時間を気にせずゆっくりできること」。90〜120分コースは背中・腰・肩・首・脚とトータルにケアできるため、一週間分の疲れをまるごとほぐしたい方に最適です。週末の特別なご褒美として選ばれる方も多いコースです。
              </p>
            </div>
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">ヘッドセット 60分〜</p>
              <p className="text-sm text-stone-700 leading-loose">
                スマートフォンやPCの使いすぎで目・頭・首が疲れている方に人気。もみほぐし＋ヘッドケアのセットで、頭皮から体幹まで丁寧にアプローチします。休日の午前中に受けると、その後のお出かけが快適になります。
              </p>
            </div>
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">足つぼセット</p>
              <p className="text-sm text-stone-700 leading-loose">
                足のむくみや疲労感が気になる方に。足裏へのアプローチと組み合わせることで、全身のリラクゼーション感がより深まります。週末のショッピングや長時間の立ち仕事の後にもおすすめです。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="How to Visit" ja="休日の来店の流れ" lead="スムーズにご利用いただくために" />
          <div className="mt-8 space-y-4">
            {[
              { step: '01', title: 'ホットペッパーから予約', body: '事前予約がおすすめです。空き状況をスマートフォンから確認し、ご希望のコースと時間帯を選んでご予約ください。当日予約もできますが、休日は混み合うため早めのご予約を。' },
              { step: '02', title: 'お車でらくらく来店', body: '店舗前に無料駐車場があります。公共交通機関の場合は君津駅からお越しください。' },
              { step: '03', title: 'カウンセリング・着替え', body: '受付後、施術前にお体の状態やご希望をお聞きします。施術着もご用意していますので、ご来店の際はそのままの服装でお越しいただいて大丈夫です。' },
              { step: '04', title: 'じっくり施術でリフレッシュ', body: '落ち着いた空間でゆっくりとほぐしていただきます。強さはいつでも変更できますのでお気軽にお申し付けください。' },
              { step: '05', title: '施術後はすっきり帰宅', body: '施術後は体も気分もリフレッシュした状態でお帰りいただけます。その後のお出かけや家族との時間をより充実して過ごせます。' },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 items-start">
                <span className="font-en text-brown-400 text-xs tracking-widest shrink-0 pt-1">{item.step}</span>
                <div>
                  <p className="font-medium text-stone-800 text-sm mb-1">{item.title}</p>
                  <p className="text-sm text-stone-700 leading-loose">{item.body}</p>
                </div>
              </div>
            ))}
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
              { label: '定期メンテナンス', href: '/scene/regular' },
              { label: '友人・グループで', href: '/scene/friends' },
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
          <p className="text-sm text-sand-300 leading-loose mb-10">土日祝も年中無休・夜0時まで営業・当日予約OK・無料駐車場完備。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton href="/menu" label="メニューを見る" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
