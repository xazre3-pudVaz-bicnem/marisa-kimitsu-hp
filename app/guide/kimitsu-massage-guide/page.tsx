import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津でマッサージ・もみほぐしを選ぶためのガイド｜MARISA 君津店',
  description: '君津市でリラクゼーションサロンを選ぶときのチェックポイントをわかりやすく解説。営業時間・駐車場・料金・メニュー・予約のしやすさを比較検討する際のポイントをご紹介。',
  keywords: ['君津 マッサージ 選び方', '君津 もみほぐし おすすめ', '君津市 リラクゼーション 選ぶ', '君津 マッサージサロン 比較'],
  openGraph: {
    title: '君津でマッサージ・もみほぐしを選ぶためのガイド｜MARISA 君津店',
    description: '君津市でリラクゼーションサロンを選ぶときのチェックポイントをわかりやすく解説。MARISAが選ばれる理由も紹介。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/guide/kimitsu-massage-guide' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '君津市内でリラクゼーションサロンを選ぶときのポイントは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '主なチェックポイントは①営業時間（仕事帰りや夜遅くに使えるか）、②駐車場の有無と料金、③料金の透明性（追加料金の有無）、④メニューの種類（目的に合ったコースがあるか）、⑤予約のしやすさ（オンライン予約対応か）、⑥口コミ・評判です。自分のライフスタイルに合った店舗を選ぶことが長く通い続けるコツです。',
      },
    },
    {
      '@type': 'Question',
      name: 'MARISAはどのような方に向いていますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MARISAは①夜遅い時間でも利用したい方（最終受付23時）、②車でのアクセスを希望する方（無料駐車場完備）、③当日に思い立ったときに予約したい方（当日予約OK）、④複数人で同時に施術を受けたい方（ベッド3台）、⑤手頃な料金でしっかりほぐしたい方（45分¥3,500〜）に特に向いています。',
      },
    },
    {
      '@type': 'Question',
      name: '初めて利用する場合の流れを教えてください。',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ホットペッパービューティーからご希望の日時・コースを選んでオンライン予約するのが最も簡単です。来店時は受付で問診票に記入していただき、体の状態やご希望をスタッフへお伝えください。着替えは不要です（お洋服のままで施術できます）。施術後は特別なアフターケアは必要なく、そのまま帰宅いただけます。',
      },
    },
  ],
}

export default function GuideKimitsuMassagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'ガイド', href: '/guide/what-is-momihogushi' }, { label: '君津のマッサージ選びガイド' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Kimitsu Massage Guide</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              君津でマッサージ・もみほぐしを選ぶためのポイント
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「君津でもみほぐしに行きたいけど、どこを選べばいいかわからない」という方へ。
              リラクゼーションサロンを選ぶときのチェックポイントをわかりやすくご説明します。
              ご自身のライフスタイルに合ったサロン選びの参考にしてください。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Points" ja="リラクゼーションサロンを選ぶチェックポイント" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              リラクゼーションサロン選びで最初に確認したいのが「営業時間」です。仕事帰りに利用したい方や夜遅くにしか時間が取れない方にとって、夜遅くまで営業しているかどうかは重要なポイントです。君津市内では、夜0時近くまで営業しているサロンは限られていますので、深夜帯の営業時間はひとつの差別化要因になります。
            </p>
            <p>
              次に確認したいのが「駐車場の有無と料金」です。君津市は車社会であり、多くの方が車で移動します。駐車場がないサロンや有料駐車場のみのサロンでは、来店のたびに駐車料金がかかることもあります。無料駐車場が完備されているサロンなら、気軽に来店しやすくなります。
            </p>
            <p>
              「料金の透明性」も大切です。基本料金以外に指名料・オプション料などが加算される場合、最終的な費用が予想より高くなることがあります。料金表がわかりやすく明示されているサロンを選ぶと安心です。また、「予約のしやすさ」も重要で、ホットペッパービューティーなどのオンライン予約に対応しているサロンは、スマホから24時間いつでも予約できて便利です。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="MARISA" ja="MARISAが選ばれる理由" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISA君津店が多くのお客様に選ばれる理由のひとつが、夜0時まで（最終受付23時）という営業時間です。仕事帰りや夜遅い帰宅後でも気軽に立ち寄れる環境を整えています。君津市・木更津市・富津市・鋸南町など近隣エリアからのお客様も多く、夜の利用シーンに対応しています。
            </p>
            <p>
              店舗前に無料駐車場を完備しており、車でのご来店もスムーズです。ホットペッパービューティーからのオンライン予約に対応しており、当日予約も可能です。ベッドを3台ご用意しているため、お一人でのご利用はもちろん、友人・家族・カップルでの同時施術も対応しています。料金は45分¥3,500〜とわかりやすく設定されており、追加料金なしでご利用いただけます。
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/menu/body-care" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">もみほぐしを見る →</Link>
            <Link href="/salon" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">サロン紹介を見る →</Link>
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
              { label: '料金ガイド', href: '/guide/price-guide' },
              { label: 'もみほぐしとは', href: '/guide/what-is-momihogushi' },
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
