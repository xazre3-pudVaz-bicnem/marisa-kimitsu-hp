import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '男性も通えるもみほぐし・マッサージ｜MARISA 君津店',
  description: '君津の男性向けもみほぐしならMARISA。肩こり・腰のつらさ・スポーツ後のケアに対応。男性大歓迎・気軽に入れる雰囲気。夜0時まで営業・当日予約OK・無料駐車場完備。',
  keywords: ['君津 男性 マッサージ', '君津 男性 もみほぐし', '男性 マッサージ 君津', '男性歓迎 もみほぐし 君津'],
  openGraph: {
    title: '男性も通えるもみほぐし・マッサージ｜MARISA 君津店',
    description: '君津の男性向けもみほぐしならMARISA。肩こり・腰のつらさ・スポーツ後のケアに。夜0時まで営業。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/scene/men' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '男性でも利用できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、男性のお客様も多くご来店いただいています。リラクゼーションサロンは女性のイメージが強いかもしれませんが、MARISAでは男女問わず気軽にご利用いただける環境を整えております。初めての方もお気軽にお越しください。',
      },
    },
    {
      '@type': 'Question',
      name: '男性スタッフはいますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'スタッフの構成はシフトにより異なります。ご希望がある場合はご予約時にお知らせください。できる限りご希望に沿えるよう対応いたします。',
      },
    },
    {
      '@type': 'Question',
      name: '男性に特に向いているメニューは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '肩こりや腰のつらさには60〜90分のもみほぐしが人気です。デスクワークで頭や目が疲れている方にはヘッドセット、足の疲れやむくみにお悩みの方には足つぼセットがおすすめです。スポーツ後のケアとしても全身もみほぐしが多くご利用いただいています。',
      },
    },
    {
      '@type': 'Question',
      name: 'スーツで来ても大丈夫ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、施術着をご用意しておりますので、スーツや仕事着のままお越しいただいても大丈夫です。仕事帰りにそのままお立ち寄りいただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '男性のおすすめコースは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '初めての方には60分もみほぐしが人気です。体全体をほぐせてコストパフォーマンスが高く、試しやすいコースです。肩・腰のつらさが強い方は90分コースでじっくりほぐすと、より体の変化を感じやすくなります。鍼灸は公式サイト（B-merit）からのみご予約いただけます。',
      },
    },
  ],
}

export default function SceneMenPage() {
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
              { label: '男性のお客様へ' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">For Men</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              男性のお客様も大歓迎です
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「男性が入りにくいのでは」という心配は不要です。MARISAでは男性のお客様も多くいらっしゃいます。肩こり・腰のつらさ・仕事疲れ・スポーツ後のケアなど、男性に多いお悩みにしっかりアプローチします。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Why MARISA" ja="男性がMARISAを選ぶ理由" lead="こんな方が多くご来店されています" />
          <div className="mt-10 grid gap-5">
            {[
              {
                title: 'デスクワーク・PC疲れの肩こりに',
                body: '長時間パソコンに向かい続けることで固まった肩や首。特に30〜50代の働き盛り世代に多いお悩みです。施術前にお悩みを伝えていただければ、その部位を重点的にほぐします。',
              },
              {
                title: '長時間の運転・立ち仕事の腰疲れに',
                body: '運転業・立ち仕事の方は背中・腰・臀部まわりに疲れが蓄積しやすくなります。就業後にMARISAに立ち寄り、体を整えてから帰宅されるリピーターも多くいらっしゃいます。',
              },
              {
                title: 'スポーツ後のケアに',
                body: '週末のスポーツやジムトレーニング後の筋肉の疲れをほぐすためにご来店される方も増えています。パフォーマンス維持のためのセルフケアとして定期的にご利用いただいています。',
              },
              {
                title: '気軽に来れる雰囲気',
                body: 'MARISAは清潔で落ち着いた雰囲気のサロンです。「なんとなく入りにくい」というイメージはお越しいただければすぐに解消されます。施術着完備で、仕事帰りのスーツのままでもOKです。',
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
          <SectionHeader en="Recommended" ja="男性におすすめのコース" lead="お悩みに合わせてお選びください" />
          <div className="mt-8 space-y-4">
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">もみほぐし 60〜90分</p>
              <p className="text-sm text-stone-700 leading-loose">
                男性に最も人気のコースです。60分は全身をバランスよくケアでき、初めての方にもおすすめ。90分は仕事終わりのまとまった疲れをリセットしたい方、週1〜2回のメンテナンスとしてご利用の方に人気です。施術前にお体の状態をお伝えいただければ、気になる部位を重点的にアプローチします。
              </p>
            </div>
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">足つぼセット</p>
              <p className="text-sm text-stone-700 leading-loose">
                立ち仕事・長距離移動が多い方の足の疲れやむくみに対応。足裏へのアプローチで全身のだるさもやわらぎやすくなります。もみほぐしとの組み合わせでケアの充実感が高まります。
              </p>
            </div>
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">鍼灸（公式サイト予約限定）</p>
              <p className="text-sm text-stone-700 leading-loose">
                慢性的な肩こり・腰のつらさが気になる方向けに鍼灸もご用意しています。鍼灸のご予約は公式サイト（B-merit）からのみ承っています。もみほぐしとは異なるアプローチでお体をサポートします。
              </p>
              <div className="mt-3">
                <Link href={BMERIT_URL} className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500" target="_blank" rel="noopener noreferrer">鍼灸の予約はこちら（公式サイト）→</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Voice" ja="男性のお客様の声" lead="実際にご利用いただいた方から" />
          <div className="mt-8 space-y-4">
            <div className="border-l-2 border-brown-300 pl-5 py-2">
              <p className="text-sm text-stone-700 leading-loose">「最初は少し躊躇しましたが、入店してみたら普通に歓迎してもらえて安心しました。肩こりがかなり楽になり、今では月に一度は通っています。」（40代・会社員）</p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5 py-2">
              <p className="text-sm text-stone-700 leading-loose">「仕事帰りに寄れる時間帯なのがありがたい。23時まで受け付けてくれるので、残業後でも間に合います。」（30代・営業職）</p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5 py-2">
              <p className="text-sm text-stone-700 leading-loose">「腰が重くて困っていましたが、施術後は体が軽く感じやすくなりました。無料駐車場があるのも助かります。」（50代・運転業）</p>
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
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
              { label: 'メニュー・料金', href: '/menu' },
              { label: '定期メンテナンス', href: '/scene/regular' },
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
