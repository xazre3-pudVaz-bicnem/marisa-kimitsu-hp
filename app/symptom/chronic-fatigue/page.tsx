import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の慢性疲労・体のだるさのもみほぐし｜MARISA 君津店',
  description: '君津市で慢性的な疲れ・体のだるさが続く方へ。蓄積した疲労を定期的なもみほぐしでリセット。夜0時まで営業・無料駐車場完備・当日予約OK。',
  keywords: ['君津 慢性疲労 マッサージ', '君津 体だるさ もみほぐし', '君津 疲れが取れない リラクゼーション', '君津 定期 ケア'],
  openGraph: {
    title: '君津の慢性疲労・体のだるさのもみほぐし｜MARISA 君津店',
    description: '君津市で慢性的な疲れ・体のだるさが続く方へ。蓄積した疲労を定期的なもみほぐしでリセット。夜0時まで営業。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/symptom/chronic-fatigue' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '慢性的な疲れとはどのような状態ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '休んでも疲れが抜けにくい、体が重くだるい感覚が続く状態のことを指します。睡眠不足・運動不足・不規則な生活習慣・仕事のストレスなどが重なることで、疲労が蓄積しやすくなります。もみほぐしで体の緊張をほぐし、定期的にリセットする習慣を取り入れることで、体を軽く感じやすい状態に整えることができます。',
      },
    },
    {
      '@type': 'Question',
      name: 'どのくらいの頻度で通うのがおすすめですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '慢性的な疲れを感じる方には、月2〜4回程度の定期的なご利用をおすすめしています。週1回ペースで通われる方も多くいらっしゃいます。定期的に体のケアを続けることで、疲れが溜まりにくい状態を維持しやすくなります。',
      },
    },
    {
      '@type': 'Question',
      name: '慢性疲労に効果的なコースはどれですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '全身をしっかりほぐしたい方にはもみほぐし90分コースが人気です。時間が限られている方には60分コースで首・肩・背中・腰を重点的にケアするのもおすすめです。疲れの状態やご希望に合わせてスタッフにご相談いただければ、適切なコースをご提案します。',
      },
    },
  ],
}

export default function ChroniFatiguePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'お悩み別', href: '/symptom' }, { label: '慢性疲労・体のだるさ' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Chronic Fatigue Care</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              慢性的な疲れ・体のだるさを定期的にケア
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「いつも体が重い」「休んでも疲れが取れない」と感じる方は、疲労が慢性的に蓄積しているサインかもしれません。
              MARISAでは定期的なもみほぐしで体をリセットするケアをご提供しています。
              君津市・近隣エリアから多くのお客様にご利用いただいています。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="About" ja="慢性疲労・体のだるさについて" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              慢性的な疲れとは、睡眠を取っても体の重さやだるさが続きやすい状態のことです。日々の仕事・家事・育児に追われ、十分に休息を取れていないと感じる方は多くいらっしゃいます。特に同じ姿勢での作業が続く方や、体を使う仕事に就いている方は、筋肉の疲労が積み重なりやすい傾向があります。
            </p>
            <p>
              疲労が蓄積すると、仕事のパフォーマンスや集中力にも影響が出やすくなります。「なんとなくやる気が出ない」「集中できない」「夜なかなか眠れない」といった状態が続く場合、体の緊張が影響していることがあります。こうしたサインを見逃さず、定期的にケアする習慣を持つことが大切です。
            </p>
            <p>
              また、慢性疲労は睡眠の質にも影響します。体の筋肉が緊張したままでは、深くリラックスした眠りに入りにくくなることがあります。眠りが浅いと翌朝の疲れが取れにくく、さらに疲労が蓄積するという悪循環になりやすいのです。定期的にもみほぐしで体の緊張をほぐすことが、この循環を断ち切るきっかけになることがあります。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="MARISA" ja="MARISAでのケアアプローチ" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAでは、蓄積した疲れを定期的にリセットする「メンテナンスとしてのもみほぐし」をご提案しています。全身の筋肉の緊張をほぐすことで、体が軽く感じやすい状態に整えます。首・肩・背中・腰・脚と全身をバランスよくケアするもみほぐし90分コースは、慢性的な疲れを感じる方に特に喜ばれています。
            </p>
            <p>
              忙しくてまとまった時間が取れない方には、45分・60分コースで効率よくケアする方法もあります。「疲れが溜まったときだけ行く場所」ではなく、「定期的に体をリセットするルーティン」として活用いただくことで、体を軽く保ちやすくなります。ホットペッパービューティーからのオンライン予約で、空き時間を使ってお気軽にご利用いただけます。
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
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
              { label: '仕事疲れのケア', href: '/symptom/work-fatigue' },
              { label: '眠りの質・不眠感', href: '/symptom/insomnia' },
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
