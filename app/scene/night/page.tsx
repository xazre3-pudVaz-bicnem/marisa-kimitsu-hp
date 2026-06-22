import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '夜のリラックスタイムにもみほぐし｜MARISA 君津店',
  description: '君津で夜遅くまで営業のもみほぐしならMARISA。夜0時まで営業・最終受付23時。仕事帰りや夜のリラックスタイムに。照明を落とした静かな空間で体を整えます。',
  keywords: ['君津 夜 マッサージ', '君津 夜遅い もみほぐし', '君津 深夜 近く マッサージ'],
  openGraph: {
    title: '夜のリラックスタイムにもみほぐし｜MARISA 君津店',
    description: '夜0時まで営業。仕事帰りや夜のリラックスタイムに。君津MARISA。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/scene/night' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '何時まで営業していますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MARISA 君津店は夜0時（24:00）まで営業しております。最終受付は23:00です。年中無休で営業していますので、仕事帰りや夜の時間帯でもお気軽にお越しください。',
      },
    },
    {
      '@type': 'Question',
      name: '夜遅い時間でも当日予約できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、当日のご予約も受け付けております。ただし、夜の時間帯は混雑することがありますので、ホットペッパービューティーから事前に空き状況をご確認の上、ご予約いただくことをおすすめします。',
      },
    },
    {
      '@type': 'Question',
      name: '夜に施術を受けると眠れなくなりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '一般的に、もみほぐしによって体がリラックスしやすくなるため、眠りにつきやすくなるというお声をいただいています。ただし、個人差がありますので、施術後の体の状態をご自身で確認しながらお過ごしください。',
      },
    },
  ],
}

export default function SceneNightPage() {
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
              { label: '夜のご利用に' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Night Relaxation</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              夜のリラックスタイムに、じっくりほぐして帰る
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              MARISAは夜0時まで営業・最終受付23時。仕事帰りの夜や、寝る前のリラックスタイムに立ち寄れるもみほぐしサロンです。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Night Hours" ja="夜0時まで営業している理由" lead="夜こそ体が疲れている" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              「仕事が終わったら体をほぐしてリセットしたい」「夜の方がゆっくり時間が取れる」——そんなお客様のニーズに応えるために、MARISAは夜0時まで営業しています。
            </p>
            <p>
              特に夜型の生活スタイルの方や、夜まで働く方にとって、閉店時間の早いサロンは使い勝手が悪くなりがちです。23時受付・24時閉店という営業時間は、多くのお客様に「助かっている」とご好評いただいています。
            </p>
            <p>
              また、一日の終わりに体が一番疲れているのも事実です。朝よりも夕方・夜の方が筋肉の疲労が蓄積しているため、夜のもみほぐしは体がほぐれやすいという側面もあります。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Night Space" ja="夜の施術の心地よさ" lead="照明を落とした静かな空間" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAの夜の時間帯は、日中よりも静かで落ち着いた雰囲気になります。照明を落としたリラックス空間の中で、BGMが流れる心地よい環境でお過ごしいただけます。
            </p>
            <p>
              「仕事の後は頭が興奮状態で眠れない」という方にも、もみほぐしで体をほぐすことで、自然とリラックスした状態になりやすく、眠りにつきやすいというお声もいただいています。
            </p>
            <p>
              施術後はそのまま帰宅して、ゆっくり入浴・就寝というルーティンを持っているリピーターのお客様も多くいらっしゃいます。夜のもみほぐしを「1日の締めくくり」として定期利用されている方にもおすすめです。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="After Work" ja="仕事帰りの夜利用" lead="残業後でも間に合います" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              残業で帰宅が遅くなった日でも、MARISAなら最終受付23時まで対応しています。23時に来店いただければ、60分のコースでもしっかりほぐして帰れます。
            </p>
            <p>
              仕事帰りのご利用については、仕事帰りのもみほぐしシーンページもご覧ください。
            </p>
            <div className="mt-4">
              <Link href="/scene/after-work" className="inline-flex items-center text-sm text-brown-500 border-b border-brown-300 hover:border-brown-500 transition-colors pb-0.5">
                仕事帰りのもみほぐし →
              </Link>
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
