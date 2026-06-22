import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '友人・グループでもみほぐし｜MARISA 君津店',
  description: '君津市で友人・仲間とのグループ利用はMARISA君津店へ。ベッド3台で同時施術可能・それぞれのコースを選べます。夜0時まで営業・無料駐車場あり。',
  keywords: ['君津 友人 マッサージ', '君津 グループ もみほぐし', '君津 複数人 リラクゼーション', '君津 友達 マッサージ'],
  openGraph: {
    title: '友人・グループでもみほぐし｜MARISA 君津店',
    description: '君津市で友人・仲間とのグループ利用はMARISA君津店へ。ベッド3台で同時施術可能。夜0時まで営業。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/scene/friends' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '複数人で同時に施術を受けられますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、ベッドを3台ご用意していますので、最大3名まで同時に施術を受けていただくことができます。友人同士・カップル・職場仲間でのご来店も歓迎しています。それぞれが希望のコースを選べますので、時間や目的が違っても大丈夫です。',
      },
    },
    {
      '@type': 'Question',
      name: 'グループで来店する場合、事前予約は必要ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '複数名でのご来店の場合は、スムーズにご案内するためにホットペッパービューティーからの事前予約をおすすめしています。人数分のご予約をそれぞれにお取りいただくか、来店予定人数をご確認の上、お電話でご相談いただくことも可能です。',
      },
    },
    {
      '@type': 'Question',
      name: 'それぞれ違うコースを選べますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、一人ひとり異なるコースをお選びいただけます。もみほぐしの時間（45分・60分・90分）やヘッドセット・足つぼセットなど、それぞれのご希望に合わせてお選びください。コースの組み合わせについてはご予約時またはご来店時にスタッフへお気軽にご相談ください。',
      },
    },
  ],
}

export default function SceneFriendsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: '地域・シーン別', href: '/area/kimitsu' }, { label: '友人・グループで' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">With Friends</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              友人・仲間でのご来店もお待ちしています
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              MARISAはベッドを3台ご用意しており、友人同士・カップル・職場仲間でのグループ利用が可能です。
              それぞれが希望のコースを選べるので、気軽に一緒にリラクゼーションを楽しんでいただけます。
              君津市内・近隣エリアからのグループでのご来店を歓迎しています。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="About" ja="友人・グループでの利用シーン" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAには「友人と一緒に来た」「職場の同僚と仕事帰りに寄った」「カップルで来店した」など、複数人でのご利用も多くいただいています。一人では少し来店しにくいと感じる方も、友人と一緒なら気軽に体験していただきやすいのが特徴です。初めてのもみほぐしを友人と一緒に体験するきっかけにもなっています。
            </p>
            <p>
              ベッド3台をご用意していますので、最大3名まで同時に施術を受けていただけます。友人それぞれが異なる体の疲れを感じていても、それぞれ希望の部位やコースを選べるので、みんなが満足できるのがMARISAのポイントです。施術中は隣のベッドと適度な距離があり、プライバシーにも配慮した空間になっています。
            </p>
            <p>
              職場仲間での利用も増えています。仕事帰りに同僚と一緒にMARISAへ立ち寄り、それぞれの疲れをほぐしてから帰るというパターンが人気です。最終受付23時ですので、残業後の帰りでも気軽にご利用いただけます。グループでのご来店の際は、事前にホットペッパービューティーから人数分のご予約をいただくとスムーズにご案内できます。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="MARISA" ja="グループ利用のポイント" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              グループでのご来店はホットペッパービューティーから事前にご予約いただくのが最もスムーズです。複数名の場合はそれぞれ個別に予約を取る方法が一般的です。同じ時間帯に希望される場合は、予約時に「グループで来店予定」とお伝えいただくと、できる限り同時刻にご案内するよう調整いたします。
            </p>
            <p>
              それぞれコースを自由に選べます。もみほぐし45分（¥3,500〜）・60分（¥4,500〜）・90分（¥6,500〜）のほか、ヘッドセット60分（¥5,000〜）・足つぼセット（¥5,500〜）からお選びいただけます。「今日は短めに」「しっかりほぐしたい」と、その日の体の状態に合わせてお選びください。友人と一緒でも自分のペースでケアできます。
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
              { label: '誕生日・お祝いに', href: '/scene/birthday' },
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
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
