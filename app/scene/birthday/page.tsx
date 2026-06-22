import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '誕生日・お祝いにもみほぐしのプレゼント｜MARISA 君津店',
  description: '君津市でもみほぐし体験をプレゼントに。誕生日・記念日のお祝いにホットペッパービューティーのギフト券活用やペアでの来店が人気。夜0時まで営業。',
  keywords: ['君津 誕生日 マッサージ プレゼント', 'もみほぐし 誕生日', '君津 お祝い リラクゼーション', 'もみほぐし ギフト'],
  openGraph: {
    title: '誕生日・お祝いにもみほぐしのプレゼント｜MARISA 君津店',
    description: '君津市でもみほぐし体験をプレゼントに。誕生日・記念日のお祝いに喜ばれるリラクゼーション体験。夜0時まで営業。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/scene/birthday' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'もみほぐしをプレゼントしたい場合はどうすればいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ホットペッパービューティーのギフト券を購入して贈る方法が便利です。受け取った方が自分の都合のよい日時に予約して来店できます。また、一緒にご来店いただいてペアで施術を受けるのも喜ばれています。ご不明な点はお気軽にスタッフへご相談ください。',
      },
    },
    {
      '@type': 'Question',
      name: '誕生日や記念日にペアで受けられますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、ベッドを3台ご用意していますので、2名で同時に施術を受けていただくことができます。カップルや友人同士でのご来店も歓迎しています。それぞれ希望のコースを選べますので、おすすめのコースについてはご予約時またはご来店時にスタッフへお声がけください。',
      },
    },
    {
      '@type': 'Question',
      name: '特別な日におすすめのコースはありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '特別な日には、じっくりほぐせる90分コース（¥6,500〜）や、セットコースが人気です。ヘッドセット60分（¥5,000〜）はリラクゼーション感が高く、贈り物としても喜ばれています。足つぼセット（¥5,500〜）も人気のコースです。ご要望に合わせてスタッフがご提案します。',
      },
    },
  ],
}

export default function SceneBirthdayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: '地域・シーン別', href: '/area/kimitsu' }, { label: '誕生日・お祝いに' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Birthday Gift</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              誕生日のプレゼントに、もみほぐし体験を
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「何をプレゼントしたらいいかわからない」そんなときに喜ばれるのが、もみほぐし体験のギフトです。
              大切な方の誕生日・記念日・お祝いに、日々の疲れを癒すリラクゼーション体験を贈りませんか。
              一緒にペアで来店するのも特別な時間になります。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="About" ja="誕生日プレゼントにもみほぐしが喜ばれる理由" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              毎年の誕生日プレゼントに「物」を贈り続けていると、何を贈るか悩むことも多いですよね。そんなときに注目されているのが「体験ギフト」です。もみほぐしは日々働いている方、育児や家事に忙しい方、年齢とともに体の疲れを感じやすくなった方など、幅広い方に喜ばれるプレゼントです。
            </p>
            <p>
              特に「いつも頑張っているあの人に、ゆっくり休んでほしい」という気持ちを込めたプレゼントとして、もみほぐし体験は人気が高まっています。自分一人ではなかなかサロンに行くきっかけを作れない方も、プレゼントされたことで初めてリラクゼーションサロンを体験する機会になります。日常の中で自分へのご褒美を後回しにしがちな方へ、ほぐれる時間をプレゼントしましょう。
            </p>
            <p>
              「一緒に来店して、ペアでほぐしてもらう」というスタイルも人気です。カップルや友人同士で同じ時間に施術を受けることができ、施術後はお互いのリラックス感を共有しながら帰ることができます。特別な日の思い出作りとしてもおすすめです。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="MARISA" ja="贈り物・特別な日のご利用について" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              もみほぐし体験をプレゼントする方法として、ホットペッパービューティーのギフト券が便利です。贈られた方は自分の都合に合わせていつでもご利用いただけますので、スケジュールが合わせにくい場合にも柔軟に対応できます。ギフト券の詳細はホットペッパービューティーのサイトでご確認ください。
            </p>
            <p>
              特別な日には、ゆっくりほぐせるコースがおすすめです。90分コース（¥6,500〜）は全身をじっくりケアでき、プレゼントとして特別感があります。ヘッドセット60分（¥5,000〜）や足つぼセット（¥5,500〜）も、ふだん自分ではなかなか体験しないコースとして喜ばれています。ペアでのご来店の際は、ホットペッパービューティーから2名分ご予約いただくとスムーズです。
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
              { label: '友人・グループで', href: '/scene/friends' },
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
