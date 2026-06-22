import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の通勤疲れ・電車・車通勤のもみほぐし｜MARISA 君津店',
  description: '君津市で通勤・移動の疲れが気になる方へ。車通勤の腰の負担や電車通勤の立ち疲れをもみほぐしでケア。最終受付23時・帰り道に立ち寄れます。',
  keywords: ['君津 通勤疲れ マッサージ', '通勤 肩こり もみほぐし', '君津 車通勤 疲れ', '君津 帰り道 マッサージ'],
  openGraph: {
    title: '君津の通勤疲れ・電車・車通勤のもみほぐし｜MARISA 君津店',
    description: '君津市で通勤・移動の疲れが気になる方へ。車通勤の腰の負担や電車通勤の立ち疲れをもみほぐしでケア。最終受付23時。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/symptom/commute-fatigue' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '帰り道に寄れますか？何時まで受け付けていますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '最終受付は23時です。仕事帰りや通勤の帰り道にお気軽にお立ち寄りいただけます。当日のオンライン予約もホットペッパービューティーから可能ですので、退勤前にスマホで予約してそのまま来店いただく方も多くいらっしゃいます。店舗前に無料駐車場もご用意しています。',
      },
    },
    {
      '@type': 'Question',
      name: '車通勤で腰が重くなりやすいのですが、おすすめのコースはありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '車通勤で腰の負担を感じやすい方には、もみほぐし60〜90分コースがおすすめです。腰・背中・臀部を重点的にほぐすことで、運転の疲れで張った筋肉が軽く感じやすくなります。スタッフへ「腰を中心にほぐしてほしい」とお伝えいただくと、より集中してケアすることができます。',
      },
    },
    {
      '@type': 'Question',
      name: '電車通勤で長時間立っていると脚が重くなります。対応できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '長時間の立ち移動で脚の重だるさを感じる方には、足つぼセット（¥5,500〜）やもみほぐしと組み合わせたセットコースが人気です。脚・腰・背中と連続してケアすることで、通勤疲れを全体的にリセットするように感じていただけます。',
      },
    },
  ],
}

export default function CommuteFatiguePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'お悩み別', href: '/symptom' }, { label: '通勤・移動の疲れ' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Commute Fatigue Care</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              毎日の通勤・移動疲れをほぐす
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              車通勤・電車通勤・バス通勤など、毎日の移動も体への負担になります。
              MARISAは君津市内にあり、最終受付23時の帰り道に気軽に立ち寄れるリラクゼーションサロンです。
              通勤疲れを翌日に持ち越さない習慣を、もみほぐしで作りませんか。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="About" ja="通勤・移動疲れの特徴" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              君津市は内房エリアの中核都市であり、東京・千葉方面への通勤・通学者も多くお住まいです。高速バスや電車での長距離通勤では、座席に長時間座り続けることで腰・背中への負担が蓄積しやすくなります。混雑した車内での立ち姿勢が続くと、脚の疲れや肩の張りを感じる方も少なくありません。
            </p>
            <p>
              一方、君津市内での移動は車が中心という方も多くいらっしゃいます。車通勤では、シートに同じ姿勢で座り続けることで腰への負担が蓄積しやすくなります。特に渋滞の多い時間帯では、緊張した状態で長時間運転することになり、肩・首・腰に疲れが集中しやすいのが特徴です。通勤だけでなく、長距離ドライブや仕事での運転が多い方も、同様の疲れを感じやすいといえます。
            </p>
            <p>
              通勤疲れの厄介な点は、「移動しているだけ」という感覚から疲れを実感しにくいことです。実際には体が長時間緊張状態に置かれており、積み重なることで体の重さやこりとして現れます。毎日の通勤疲れを翌日に持ち越さないために、定期的なもみほぐしケアが役立ちます。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="MARISA" ja="帰り道に寄れるMARISA" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAは最終受付23時まで営業しており、夜の帰宅途中にも立ち寄っていただけます。ホットペッパービューティーからのオンライン予約で、退勤前にスマホでサクッと予約する方が増えています。店舗前には無料駐車場もありますので、車で来店いただいてもスムーズです。
            </p>
            <p>
              通勤疲れには、もみほぐし45〜60分コースが人気です。短時間でも首・肩・腰を重点的にほぐすことで、一日の移動疲れをリセットするように感じていただけます。脚の疲れが気になる方には足つぼセットもあわせておすすめです。週に1〜2回を習慣にすることで、疲れを溜め込みにくい体に整えていきましょう。
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
              { label: '仕事帰りの利用シーン', href: '/scene/after-work' },
              { label: '仕事疲れのケア', href: '/symptom/work-fatigue' },
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
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
