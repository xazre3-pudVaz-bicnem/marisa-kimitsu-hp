import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '眠る前にもみほぐし・夜のリラクゼーション｜MARISA 君津店',
  description: '就寝前にもみほぐしで体をほぐして、ゆっくり休む時間を。最終受付23時・施術後すぐ帰宅できる君津のリラクゼーションサロン MARISA。',
  keywords: ['君津 眠る前 マッサージ', '君津 就寝前 リラクゼーション', '君津 夜 リラックス', '君津 夜遅い マッサージ'],
  openGraph: {
    title: '眠る前にもみほぐし・夜のリラクゼーション｜MARISA 君津店',
    description: '就寝前にもみほぐしで体をほぐして、ゆっくり休む時間を。最終受付23時・施術後すぐ帰宅できる君津のリラクゼーションサロン MARISA。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/scene/before-sleep' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '就寝前のもみほぐしはどのくらい前に受けるといいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '施術後は体が温まりリラックスしやすい状態になります。施術を終えて帰宅し、軽くストレッチをして休むという流れがおすすめです。MARISAの最終受付は23時ですので、23時前に施術を終えて帰宅後にゆっくり休んでいただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '眠る前に受けるのにおすすめのコースはありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '体全体をリラックスさせたい方にはもみほぐし60分（¥4,500〜）が人気です。頭・首・肩の緊張をほぐしたい方にはヘッドセット60分（¥5,000〜）もおすすめです。頭の重さや緊張が和らぎ、リラックスしやすい状態に整えるのに役立ちます。施術内容についてご不明な点はスタッフへお気軽にご相談ください。',
      },
    },
    {
      '@type': 'Question',
      name: '夜に来店する場合、何時まで受け付けていますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '最終受付は23時です。23時に施術を開始した場合、コースにより終了時間は異なりますが、0時ごろまで営業しております。夜遅い時間でも安心してご来店いただけます。当日予約もホットペッパービューティーから可能です。',
      },
    },
  ],
}

export default function SceneBeforeSleepPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: '地域・シーン別', href: '/area/kimitsu' }, { label: '眠る前に' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Before Sleep</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              眠る前に体をほぐして、ゆっくり休む
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              夜、なかなかリラックスできない・体がほぐれないまま眠れないと感じる方へ。
              就寝前にもみほぐしで体の緊張をほぐし、リラックスしやすい状態に整えてから休む時間を作りませんか。
              MARISAは最終受付23時まで営業しています。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="About" ja="就寝前のもみほぐしのメリット" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              仕事や日常の疲れで体が緊張したままの状態で眠ろうとすると、なかなか深くリラックスできないことがあります。筋肉の緊張が続いていると、横になっても体の重さや張りが気になり、リラックスした眠りに入りにくくなることがあります。就寝前にもみほぐしを受けることで、体の緊張をほぐし、リラックスしやすい状態に整えることができます。
            </p>
            <p>
              施術中はゆっくりとした環境の中で体をほぐしていただき、施術後は体が温まった状態になります。そのまま帰宅してベッドに入ることで、リラックスした状態で休みやすくなります。特に首・肩・頭まわりのほぐしは、頭の重さや緊張を和らぎやすくするとして多くのお客様に喜ばれています。
            </p>
            <p>
              眠る前のルーティンにMARISAでのもみほぐしを取り入れることで、一日の疲れをリセットする習慣が生まれます。週に1〜2回のご利用で、体が軽く感じやすい日が増えるというお客様の声もいただいています。ぜひご自身の体の変化を体験してみてください。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="MARISA" ja="最終受付23時・夜のケアをサポート" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAは夜0時まで（最終受付23時）営業しています。仕事帰りや夜の帰宅途中でもお気軽にご来店いただけます。就寝前のご利用を想定して、落ち着いた雰囲気の空間でリラックスしやすい環境をご用意しています。施術後はそのまま帰宅してゆっくりお休みください。
            </p>
            <p>
              眠る前のリラクゼーションには、もみほぐし60分コース（¥4,500〜）が特に人気です。全身をほぐしてリラックスしたい方には90分コースもおすすめです。頭の疲れや緊張が気になる方にはヘッドセット60分（¥5,000〜）をお試しください。当日予約もホットペッパービューティーから可能ですので、その日の気分に合わせてお気軽にご来店ください。
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
              { label: '眠りの質・不眠感のケア', href: '/symptom/insomnia' },
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
