import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の股関節・お尻まわりの張りのもみほぐし｜MARISA 君津店',
  description: '君津市で股関節やお尻まわりの張り・重さが気になる方へ。長時間の座り仕事・立ち仕事で蓄積した臀部・股関節周辺の疲れをもみほぐしでケア。夜0時まで営業・無料駐車場あり。',
  keywords: ['君津 股関節 ほぐし', '君津 お尻 張り マッサージ', '君津 骨盤まわり ケア', '君津 もみほぐし', '君津 リラクゼーション'],
  openGraph: {
    title: '君津の股関節・お尻まわりの張りのもみほぐし｜MARISA 君津店',
    description: '君津市で股関節やお尻まわりの張り・重さが気になる方へ。臀部・股関節周辺の疲れをもみほぐしでケア。夜0時まで営業。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/symptom/hip-joint' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '股関節まわりの張りはなぜ起こるのですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '長時間のデスクワークや立ち仕事、同じ姿勢の継続などにより、臀部や股関節周辺の筋肉に疲労が蓄積しやすくなります。体の使い方に左右差があると、片側に負担が集中することもあります。もみほぐしで筋肉の緊張をほぐし、体を楽な状態に整えるケアが役立ちます。',
      },
    },
    {
      '@type': 'Question',
      name: '股関節のケアに適したコースはどれですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '臀部・股関節周辺をじっくりほぐすには、もみほぐし60分以上がおすすめです。腰や太もも周辺も含めて全体的にケアしたい方には90分コースが特に喜ばれています。初めての方は60分からお試しいただくのが一般的です。',
      },
    },
    {
      '@type': 'Question',
      name: '予約なしでも当日利用できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、当日予約も承っております。ホットペッパービューティーからのオンライン予約が便利です。空き状況はリアルタイムで確認できますので、仕事帰りや外出のついでにお気軽にご来店ください。最終受付は23時です。',
      },
    },
  ],
}

export default function HipJointPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'お悩み別', href: '/symptom' }, { label: '股関節・お尻まわりの張り' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Hip Joint Care</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              股関節・お尻まわりの張り・重さをほぐす
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              長時間の座り仕事や立ち仕事が続くと、股関節まわりやお尻の筋肉に疲れが蓄積しやすくなります。
              MARISAでは臀部・股関節周辺の筋肉へのアプローチを大切にしたもみほぐしをご提供しています。
              君津市内・近隣エリアからのご来店も歓迎です。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="About" ja="股関節まわりの張りについて" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              股関節まわりやお尻の張り・重さは、現代の生活スタイルと深く関わっています。デスクワークで長時間椅子に座っていると、臀部の筋肉が圧迫され続け、血液の流れが滞りやすくなります。また、工場勤務や販売業など長時間立ち続ける仕事では、股関節周辺に疲労が蓄積しやすい傾向があります。
            </p>
            <p>
              体の左右差も、股関節まわりの張りの一因です。利き足への偏った体重のかけ方や、バッグを片側だけで持つ習慣などが積み重なると、骨盤や股関節周辺の筋肉バランスが偏りやすくなります。こうした積み重ねが、お尻まわりの重さ・張りとして感じられることがあります。
            </p>
            <p>
              さらに、股関節周辺の張りは腰のつらさと連動して感じられることもあります。臀部の筋肉は腰まわりの筋肉と隣接しているため、お尻の疲れが腰の重さとして感じられたり、その逆のケースもよく見られます。股関節と腰をセットでケアすることが、体全体を軽く感じやすくすることにつながります。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="MARISA" ja="MARISAでのケアアプローチ" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAのもみほぐしでは、臀部・股関節周辺の筋肉にしっかりアプローチします。大臀筋・中臀筋・梨状筋といったお尻まわりの筋肉は、デスクワークや立ち仕事でこわばりやすい部位です。丁寧にほぐすことで、体の重さや張りが軽く感じやすくなります。
            </p>
            <p>
              股関節まわりのケアには、もみほぐし60分コースが特におすすめです。腰・臀部・太ももと連続してケアすることで、下半身全体の疲れをリセットするように感じていただけます。より全身をゆったりとほぐしたい方には90分コースもご用意しています。
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
              { label: '腰のケアについて', href: '/symptom/lower-back' },
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
