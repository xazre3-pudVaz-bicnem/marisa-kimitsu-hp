import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'シニアの方・年配の方のもみほぐし｜MARISA 君津店',
  description: '君津でシニア・年配の方向けもみほぐしならMARISA。ゆっくり丁寧な施術・弱め圧対応。慢性的な肩・腰・足の疲れに。子どもや孫とのペア利用も歓迎。',
  keywords: ['君津 シニア マッサージ', '君津 年配 もみほぐし', '君津 高齢者 リラクゼーション'],
  openGraph: {
    title: 'シニアの方・年配の方のもみほぐし｜MARISA 君津店',
    description: 'シニアの方も安心してご利用いただける君津MARISA。ゆっくり丁寧な施術。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/scene/seniors' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '高齢者でも安心して利用できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、シニアの方も多くご利用いただいています。施術の強さは弱めに調整することも可能ですので、ご希望を施術前にお伝えください。なお、持病をお持ちの方や体調に不安がある方は、事前にかかりつけの医師にご相談の上でご来店ください。',
      },
    },
    {
      '@type': 'Question',
      name: '施術の強さを弱くしてもらえますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、もちろんです。施術前または施術中にスタッフへお気軽にお申し付けください。お客様の体の状態やご希望に合わせて圧の強さを調整いたします。',
      },
    },
    {
      '@type': 'Question',
      name: '子どもや孫と一緒に来店できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ご家族での来店は大歓迎です。お席の空き状況によって同時間帯の施術も対応できる場合があります。ご予約の際にご人数をお知らせください。',
      },
    },
  ],
}

export default function SceneSeniorsPage() {
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
              { label: 'シニアの方へ' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">For Seniors</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              シニアの方も安心してご利用いただけます
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              年齢を重ねるごとに増える肩・腰・足の疲れに、丁寧にアプローチします。圧の強さは弱め対応も可能。ゆっくりと体を整えたいシニアの方を歓迎します。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Senior Concerns" ja="年配の方に多いお悩み" lead="年齢とともに積み重なる疲れに" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              年齢を重ねると、若い頃には気にならなかった体のつらさが慢性化しやすくなります。特に肩・腰・膝・足の疲れや重だるさは、多くのシニアの方が感じているお悩みです。
            </p>
            <p>
              長年の生活習慣や姿勢の積み重ねで、筋肉が慢性的に緊張した状態になっている方も多くいらっしゃいます。こうした方にはゆっくりと丁寧な施術で、少しずつほぐしていくアプローチが適しています。
            </p>
            <p>
              「病院に行くほどではないけれど、体が重くてつらい」「薬を使わずに体をケアしたい」という方に、リラクゼーション目的のもみほぐしはご活用いただきやすい選択肢です。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Our Approach" ja="ゆっくり丁寧な施術スタイル" lead="シニアの方に合わせた対応" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAでは施術前に必ずお客様のお悩みと体の状態をお聞きします。シニアの方には、全体的な強さを弱めに設定し、丁寧にゆっくりとほぐしていくスタイルを基本としています。
            </p>
            <p>
              施術中も「痛くないか」「強さはいかがか」をご確認しながら進めます。少しでもご不快を感じた場合は遠慮なくお申し付けください。すぐに対応いたします。
            </p>
            <p>
              なお、骨粗しょう症や循環器疾患など持病をお持ちの方、または体調に不安がある場合は、事前にかかりつけの医師にご相談のうえでご来店いただくようお願いしております。お客様の安全を最優先に考えております。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Family Visit" ja="子どもや孫とのペア利用" lead="世代を超えてリフレッシュを" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              「親孝行にマッサージを連れていきたい」「おばあちゃんへのプレゼントに」と、子どもや孫世代が連れ立ってご来店されるケースも多くあります。
            </p>
            <p>
              家族で一緒に来店し、それぞれのメニューを選んでリフレッシュする時間は、世代を超えた特別なひとときになります。「今度一緒に行こう」と誘ってみてはいかがでしょうか。
            </p>
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
