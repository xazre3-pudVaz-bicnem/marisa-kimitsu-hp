import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'もみほぐしで期待できること・リラクゼーション効果について｜MARISA 君津店',
  description: 'もみほぐしで期待できることをわかりやすく解説。筋肉の緊張がほぐれる感覚、体が軽く感じやすい、睡眠への影響など。医療的な断定なし・正確な情報をご提供。',
  keywords: ['もみほぐし 効果', 'もみほぐし メリット', 'もみほぐし リラクゼーション'],
  openGraph: {
    title: 'もみほぐしで期待できること・リラクゼーション効果について｜MARISA 君津店',
    description: 'もみほぐしで期待できることをわかりやすく解説。MARISA 君津店。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/guide/benefits' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'もみほぐしで肩こりは治りますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'もみほぐしはリラクゼーション施術であり、医療的な治療ではありません。「治る」という表現は適切ではありませんが、施術によって筋肉の緊張がほぐれやすくなり、肩の重さや不快感が軽く感じやすくなるというお声を多くいただいています。継続的なケアと合わせてご活用ください。',
      },
    },
    {
      '@type': 'Question',
      name: 'もみほぐしの後に眠れるようになりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '体の緊張がほぐれることで、リラックスした状態になりやすく、眠りにつきやすくなるというお声をいただくことがあります。ただし、個人差がありますので、絶対に改善するとは言い切れません。体の状態に応じて感じ方は異なります。',
      },
    },
    {
      '@type': 'Question',
      name: '1回の施術でどのくらい変化を感じますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '個人差がありますが、多くの方が1回の施術後に「体が軽くなった気がする」「肩の重さがやわらいだ」という感覚を実感されています。慢性的なお悩みには継続的なケアがより変化を感じやすくなります。',
      },
    },
  ],
}

export default function GuideBenefitsPage() {
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
              { label: 'ガイド', href: '/guide/what-is-momihogushi' },
              { label: 'もみほぐしで期待できること' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Guide</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              もみほぐしで期待できること
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              もみほぐしはリラクゼーション施術です。「治る」「改善する」という医療的な断定はできませんが、多くのお客様が感じている変化をご紹介します。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="What to Expect" ja="期待できること" lead="リラクゼーション目的として" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              もみほぐしは医療行為ではありませんので、「〜が治る」「〜が改善する」という断定的な表現は適切ではありません。ただし、リラクゼーション施術として多くのお客様が体感される変化があります。
            </p>
            <p>
              ここでは、実際にご利用いただいたお客様からのお声を参考に、もみほぐしで期待しやすいことをご紹介します。あくまでも個人差があり、すべての方に同じ効果をお約束するものではありませんが、参考にしていただければ幸いです。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Benefits" ja="体感しやすい変化" lead="お客様からのお声より" />
          <div className="mt-8 space-y-4">
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">筋肉の緊張がほぐれる感覚</p>
              <p className="text-sm text-stone-700 leading-loose">
                施術によって、固まっていた肩・背中・腰の筋肉がほぐれやすくなります。「肩が軽くなった気がする」「腰のつっぱりが和らいだ感じがする」というお声を多くいただいています。
              </p>
            </div>
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">体が軽く感じやすくなる</p>
              <p className="text-sm text-stone-700 leading-loose">
                全身の筋肉の緊張がほぐれることで、体全体が軽く感じやすくなります。「来たときと帰るときで体の感覚が全然違う」という感想をいただくことがよくあります。
              </p>
            </div>
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">血行が促進されやすい</p>
              <p className="text-sm text-stone-700 leading-loose">
                施術によって筋肉がほぐれると、血液循環が促しやすくなります。「体がポカポカしてきた」「冷えていた手足が温かくなった気がする」というお声もいただいています。
              </p>
            </div>
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">睡眠の質に影響することがある</p>
              <p className="text-sm text-stone-700 leading-loose">
                体がリラックス状態になりやすいことで、その夜の眠りにつきやすくなったというお声をいただくことがあります。特に夕方・夜の施術後にこの変化を感じやすい方が多いようです。ただし、個人差があります。
              </p>
            </div>
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">気分がリフレッシュしやすい</p>
              <p className="text-sm text-stone-700 leading-loose">
                静かな空間で体を委ねる時間は、日常のストレスや緊張から一時的に離れるための貴重な時間です。施術後に「気持ちが軽くなった」「リフレッシュできた」という感想をいただくことも多いです。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Voices" ja="定期利用のお客様の声" lead="継続してご利用いただいている方から" />
          <div className="mt-8 space-y-4">
            <div className="border-l-2 border-brown-300 pl-5 py-2">
              <p className="text-sm text-stone-700 leading-loose">「月に2回通っています。以前は慢性的に肩が重かったのですが、通い始めてから体全体の重だるさが軽く感じやすくなりました。」（40代・女性）</p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5 py-2">
              <p className="text-sm text-stone-700 leading-loose">「仕事帰りに月1回通っています。施術後はよく眠れる気がします。疲れの蓄積が変わってきたような感覚があります。」（30代・男性）</p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5 py-2">
              <p className="text-sm text-stone-700 leading-loose">「デスクワークで肩と首が固まりがちでしたが、2週間に1回通うようにしてから、ひどくなる前にケアできている感じがします。」（50代・女性）</p>
            </div>
          </div>
          <p className="mt-6 text-xs text-stone-700 leading-loose bg-sand-100 border border-sand-200 p-4">
            ※上記はお客様個人の体感です。同様の変化を全ての方にお約束するものではありません。もみほぐしはリラクゼーション施術であり、医療行為ではありません。
          </p>
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
              { label: 'メニュー・料金', href: '/menu' },
              { label: 'もみほぐしの頻度', href: '/guide/frequency' },
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
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
