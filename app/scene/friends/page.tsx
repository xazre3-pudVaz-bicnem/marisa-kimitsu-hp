import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '友人・グループで一緒に通えるもみほぐし｜MARISA 君津店',
  description: '君津で友人・グループ利用のもみほぐしならMARISA。ベッド3台完備で最大3名まで同時施術。それぞれのコースを自由に選べます。お出かけのついでに気軽にどうぞ。',
  keywords: ['君津 友人 マッサージ', '君津 グループ もみほぐし', '君津 複数人 リラクゼーション', '友達と マッサージ 君津'],
  openGraph: {
    title: '友人・グループで一緒に通えるもみほぐし｜MARISA 君津店',
    description: '君津でグループ利用ならMARISA。ベッド3台で最大3名まで同時施術OK。夜0時まで営業。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/scene/friends' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '友人2〜3人で一緒に来られますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、ベッドを3台ご用意していますので、最大3名まで同時に施術を受けていただくことができます。友人同士・カップル・職場仲間でのご来店を歓迎しています。',
      },
    },
    {
      '@type': 'Question',
      name: '同じ時間帯に受けられますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '予約状況によっては同じ時間帯にご案内できる場合があります。グループでのご来店の場合は、ホットペッパービューティーからご予約の際に「グループでの来店予定」とお知らせいただくと、できる限り同時刻でご案内できるよう調整いたします。',
      },
    },
    {
      '@type': 'Question',
      name: '別々のコースでも大丈夫ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、一人ひとり異なるコースをお選びいただけます。もみほぐし45分・60分・90分のほか、ヘッドセット・足つぼセットなど、それぞれのご希望に合わせてお選びください。',
      },
    },
    {
      '@type': 'Question',
      name: '事前に相談が必要ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '複数名でのご来店の場合は、事前にホットペッパービューティーからご予約いただくことをおすすめします。「グループで来店予定」とお知らせいただくとスムーズにご案内できます。',
      },
    },
    {
      '@type': 'Question',
      name: '当日でも対応できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '当日のご予約も受け付けておりますが、複数名での同時施術を希望される場合は空きの状況によっては対応できないこともあります。スムーズなご利用のために、事前予約をおすすめします。',
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
              友人・グループでのご来店もお待ちしています
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              MARISAはベッドを3台ご用意しており、友人同士・カップル・職場仲間でのグループ利用が可能です。それぞれが希望のコースを選べるので、気軽に一緒にリラクゼーションを楽しんでいただけます。お出かけのついでに立ち寄る感覚で、お気軽にどうぞ。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Group Scenes" ja="グループでのご利用シーン" lead="こんな場面で選ばれています" />
          <div className="mt-10 grid gap-5">
            {[
              {
                title: '友人同士でリフレッシュ',
                body: '「一緒にどこか行こう」という休日のお出かけ先として。一人では入りにくいと感じていた方も、友人と一緒なら気軽に初体験できます。施術後にそれぞれの感想を話しながら帰るのも楽しいひとときになります。',
              },
              {
                title: 'カップル・夫婦でペア体験',
                body: 'それぞれのコースを選びながら、同じ時間にほぐしてもらうペア体験。施術後にお互いのリラックス感を共有できる特別な時間になります。記念日・お誕生日のお出かけにも選ばれています。',
              },
              {
                title: '職場仲間で仕事帰りに',
                body: '残業後に同僚と一緒にMARISAへ立ち寄るパターンが人気です。最終受付23時ですので、遅くなった日でも間に合います。それぞれの疲れをほぐしてから帰宅できます。',
              },
              {
                title: '初めてのリラクゼーションを一緒に',
                body: '「初めて一人では行きにくい」という方も、友人と一緒なら安心して初体験できます。気軽に連れていってあげることで、リラクゼーションの良さを一緒に体験できます。',
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
          <SectionHeader en="Group Points" ja="グループ利用のポイント" lead="スムーズにご利用いただくために" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              グループでのご来店はホットペッパービューティーから事前にご予約いただくのが最もスムーズです。複数名の場合は、それぞれ個別に予約を取る方法が一般的です。同じ時間帯を希望される場合は、「グループで来店予定」とお知らせいただくと調整しやすくなります。
            </p>
            <p>
              コースはそれぞれ自由に選べます。もみほぐし45分・60分・90分のほか、ヘッドセット・足つぼセットからお選びいただけます。「今日は短めに」「しっかりほぐしたい」と、その日の体の状態に合わせてお選びください。友人と一緒でも自分のペースでケアできます。
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/menu" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">メニュー・料金を見る →</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="How to Visit" ja="グループ来店の流れ" lead="事前に確認しておくと安心" />
          <div className="mt-8 space-y-4">
            {[
              { step: '01', title: '人数分ホットペッパーで予約', body: 'それぞれがホットペッパービューティーから予約するのが基本です。「グループで来店予定」とメモ欄に入れていただくとより調整しやすくなります。' },
              { step: '02', title: 'コースをそれぞれ選ぶ', body: '一人ひとり異なるコースを選べます。事前に決めておくか、来店後にスタッフにご相談いただいてもOKです。' },
              { step: '03', title: '来店・カウンセリング', body: 'お体の状態や気になる部位をお伝えください。人数が多い場合は順番にご案内します。' },
              { step: '04', title: 'それぞれほぐしてもらいながらリラックス', body: 'ベッド3台で最大3名まで同時施術が可能です。それぞれのペースでゆっくりお過ごしください。' },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 items-start bg-sand-100 border border-sand-200 p-5">
                <span className="font-en text-brown-400 text-xs tracking-widest shrink-0 pt-0.5">{item.step}</span>
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
              { label: '誕生日・記念日に', href: '/scene/birthday' },
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
