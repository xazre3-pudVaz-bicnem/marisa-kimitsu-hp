import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の眠りの質・なかなか眠れない方のもみほぐし｜MARISA 君津店',
  description: '君津市で眠りにくい・ぐっすり眠れないとお感じの方へ。体の緊張をほぐしてリラックスしやすい状態に整えるもみほぐしケア。夜0時まで営業・無料駐車場あり。',
  keywords: ['君津 眠れない もみほぐし', '君津 不眠 リラクゼーション', '君津 睡眠 マッサージ', '君津 リラックス 夜'],
  openGraph: {
    title: '君津の眠りの質・なかなか眠れない方のもみほぐし｜MARISA 君津店',
    description: '君津市で眠りにくい・ぐっすり眠れないとお感じの方へ。体の緊張をほぐしてリラックスしやすい状態に整えるケア。夜0時まで営業。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/symptom/insomnia' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'もみほぐしで眠りの質は変わりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'もみほぐしは眠りの質を医学的に保証するものではありません。ただ、体の筋肉の緊張がほぐれることでリラックスしやすい状態に近づき、眠りに入りやすくなったと感じる方もいらっしゃいます。個人差がありますので、まずは一度お試しいただき、体の変化をご自身で感じてみてください。',
      },
    },
    {
      '@type': 'Question',
      name: '就寝前の施術は何時まで受けられますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '最終受付は23時です。施術を終えてそのまま帰宅し、リラックスした状態でお休みいただけます。帰宅後すぐ休みたい方は、施術後に軽くストレッチして帰宅されることをおすすめしています。眠る前にゆっくりとした時間を過ごす流れを作るのに活用いただいています。',
      },
    },
    {
      '@type': 'Question',
      name: '眠りの質が気になる場合はどのコースがおすすめですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '体全体のリラックスを目的とした方にはもみほぐし60〜90分コースがおすすめです。頭や首まわりの緊張をほぐしたい方にはヘッドセット60分（¥5,000〜）も人気です。頭部・首・肩をほぐすことで、頭の重さや緊張が和らぎやすく、リラックスしやすい状態に整えるのに役立ちます。',
      },
    },
  ],
}

export default function InsomniaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'お悩み別', href: '/symptom' }, { label: '眠りの質・不眠感' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Sleep Relaxation</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              眠りにくい・ぐっすり眠れない方のリラクゼーションケア
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              なかなか眠れない、眠りが浅いと感じる方の一因に、体の緊張が関係していることがあります。
              もみほぐしで体をリラックスしやすい状態に整え、眠りに近づきやすい夜を作るケアをご提供しています。
              医療的な治療ではありませんが、リラクゼーションとしてのご利用を歓迎しています。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="About" ja="眠りにくさと体の緊張の関係" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              「布団に入っても眠れない」「眠りが浅くて疲れが取れない」と感じる方は、体の筋肉が緊張したままになっている可能性があります。仕事中の緊張状態や精神的なストレスが続くと、仕事が終わっても体が緊張モードのままになりやすく、リラックスした状態に切り替わりにくくなることがあります。
            </p>
            <p>
              体の筋肉が緊張したままでいると、横になっても体の重さや張りが気になり、深くリラックスした状態に入りにくくなることがあります。特に首・肩まわりや背中の筋肉が張っていると、頭への血流が滞りやすくなり、頭の重さや目の疲れとして感じられることもあります。こうした体の状態が積み重なると、眠りにくさとして感じられることがあります。
            </p>
            <p>
              なお、眠れない・眠りが浅いという状態が長く続く場合は、医療機関へのご相談もご検討ください。MARISAはあくまでリラクゼーションサロンですので、医療的な診断・治療はお受けしておりません。体の緊張をほぐしてリラックスしやすい状態に整えることを目的としたご利用をおすすめしています。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="MARISA" ja="MARISAでのケアアプローチ" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAでは体全体の筋肉の緊張をほぐし、リラックスしやすい状態に整えるもみほぐしをご提供しています。就寝前にご利用いただく方も多く、施術後はそのまま帰宅してゆっくり休んでいただける環境です。最終受付は23時ですので、夜の帰宅途中にも気軽にお立ち寄りいただけます。
            </p>
            <p>
              眠りにくさを感じる方に特に喜ばれているのが、ヘッドセット60分コースです。頭・首・肩をしっかりほぐすことで、頭の重さや緊張が和らぎやすくなります。全身をリラックスさせたい方にはもみほぐし60〜90分コースもおすすめです。ゆっくりとした施術の中で体がほぐれていく感覚を楽しみながら、眠りやすい状態に近づけていきましょう。
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/symptom/sleep-relax" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">リラックス・睡眠ケアを見る →</Link>
            <Link href="/menu/body-care" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">もみほぐしを見る →</Link>
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
              { label: 'リラックス・睡眠ケア', href: '/symptom/sleep-relax' },
              { label: '眠る前の利用シーン', href: '/scene/before-sleep' },
              { label: '慢性疲労・体のだるさ', href: '/symptom/chronic-fatigue' },
              { label: 'メニュー・料金', href: '/menu' },
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
