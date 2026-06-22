import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '休日・週末のもみほぐし・リラクゼーション｜MARISA 君津店',
  description: '君津で週末・休日のリフレッシュならMARISA。土日祝も年中無休で10〜24時営業。90分コースやヘッドセットで一週間の疲れをじっくりリセット。当日予約OK・無料駐車場完備。',
  keywords: ['君津 週末 マッサージ', '君津 休日 もみほぐし', '君津 土日 リラクゼーション'],
  openGraph: {
    title: '休日・週末のもみほぐし・リラクゼーション｜MARISA 君津店',
    description: '君津で週末・休日のリフレッシュならMARISA。土日祝も年中無休で10〜24時営業。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/scene/holiday' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '土日・祝日も営業していますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、MARISA 君津店は年中無休で営業しております。土曜・日曜・祝日も通常通り10:00〜24:00（最終受付23:00）でご利用いただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '週末は混雑しますか？予約した方がよいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '週末・休日は多くのお客様にご来店いただくため、混雑する場合がございます。ご希望のお時間を確保するために、ホットペッパービューティーからの事前予約をおすすめしております。当日予約も受け付けております。',
      },
    },
    {
      '@type': 'Question',
      name: 'ペアや家族での利用はできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、ペアや家族でのご利用も大歓迎です。お席のご用意状況によって同時対応が可能な場合もございますので、ご予約の際にご希望をお申し付けください。',
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
              { label: '休日・週末に' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Weekend Refresh</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              休日・週末のリフレッシュに
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              一週間の疲れを土日でリセット。君津市のMARISAは年中無休・夜0時まで営業しているから、休日のスケジュールに合わせて気軽にご利用いただけます。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Weekend Scene" ja="週末のご利用シーン" lead="こんな方に喜ばれています" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              月曜から金曜まで仕事・家事・育児と忙しく過ごしてきた方にとって、土日は体をゆっくりいたわる絶好のタイミングです。デスクワークで固まった肩や、長時間の立ち仕事で疲れた足腰を、じっくりとほぐしていただけます。
            </p>
            <p>
              「平日はなかなか時間が取れないけれど、週末くらいは体のケアをしたい」というお客様に多くご利用いただいています。休日ならではのゆとりある時間のなかで、90分コースをお選びになる方も多くいらっしゃいます。
            </p>
            <p>
              また、ご夫婦やカップル、親子でのペア利用も週末に多く見られます。「一緒にリフレッシュしよう」と連れ立っていらっしゃる方や、「日頃の感謝を込めて」とパートナーへのプレゼントとしてご利用になる方もいらっしゃいます。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Popular Courses" ja="週末に人気のコース" lead="ゆったりお時間を取れる週末に" />
          <div className="mt-8 space-y-4">
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">90分もみほぐし ¥6,500〜</p>
              <p className="text-sm text-stone-700 leading-loose">
                週末の醍醐味は「時間を気にせずゆっくりできること」。90分コースは背中・腰・肩・首・脚とトータルにケアできるため、一週間の疲れをまるごとほぐしたい方に最適です。
              </p>
            </div>
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">ヘッドセット 60分 ¥5,000〜</p>
              <p className="text-sm text-stone-700 leading-loose">
                デジタルデバイスの使いすぎで目や頭が疲れている方に人気。もみほぐし+ヘッドケアのセットで、頭皮から体幹まで丁寧にケアします。
              </p>
            </div>
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">足つぼセット ¥5,500〜</p>
              <p className="text-sm text-stone-700 leading-loose">
                足のむくみや疲労感が気になる方に。足裏へのアプローチと組み合わせることで、全身のリラクゼーション感がより深まります。週末にゆっくり取り組みたい一品です。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Tips" ja="週末予約のコツ" lead="スムーズにご利用いただくために" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              週末・連休は多くのお客様にご来店いただくため、ご希望の時間帯が埋まりやすくなります。特に午後から夕方にかけての時間帯はご予約が集中することが多いです。
            </p>
            <p>
              ホットペッパービューティーからの事前予約がおすすめです。スマートフォンからいつでも空き状況を確認し、ご希望のメニューと時間帯を選んでご予約いただけます。前日や当日のご予約も可能ですが、早めのご予約で希望通りのお時間が取りやすくなります。
            </p>
            <p>
              なお、当店には無料駐車場（店舗前）をご用意しています。お車でのご来店も安心してお越しください。君津駅から車で約5分、君津インターチェンジから約10分とアクセスも便利です。
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
              { label: '定期メンテナンス', href: '/scene/regular' },
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
