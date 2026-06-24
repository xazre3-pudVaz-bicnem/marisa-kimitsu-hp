import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'ストレス発散・気持ちの切り替えにもみほぐし｜MARISA 君津店',
  description: '君津でストレス発散・気分リフレッシュのもみほぐしならMARISA。仕事・日常のストレスを体からほぐす。施術後のすっきり感が気持ちの切り替えに。90〜120分コース・ヘッドセットが人気。',
  keywords: ['君津 ストレス発散 マッサージ', '君津 気持ち切り替え もみほぐし', '君津 仕事ストレス ケア', '君津 心身リフレッシュ'],
  openGraph: {
    title: 'ストレス発散・気持ちの切り替えにもみほぐし｜MARISA 君津店',
    description: '仕事・日常のストレスを体からほぐす。施術後のすっきり感で気持ちが切り替わります。君津MARISA。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/scene/stress' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'ストレスケアにはどのコースが向いていますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'たっぷりリセットしたい方には90〜120分のもみほぐしがおすすめです。頭の疲れや緊張が気になる方にはヘッドセット60分もよく選ばれています。まずはご自身の体の疲れがどこに出ているかをお伝えいただければ、スタッフがコースをご提案します。',
      },
    },
    {
      '@type': 'Question',
      name: '施術後にすっきりしますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '「施術後は気持ちも軽くなった気がする」というお声を多くいただいています。体の緊張がほぐれると呼吸が深くなりやすく、体全体がリラックスした状態になります。心と体はつながっているため、体をほぐすことで気分も変化しやすくなります。',
      },
    },
    {
      '@type': 'Question',
      name: '体が緊張しているときでも受けられますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、体が緊張している状態でもご利用いただけます。むしろ、体が緊張しているときこそ、ほぐれる感覚をより実感しやすいです。施術前にお体の状態をお伝えいただければ、その部位に合わせてアプローチします。',
      },
    },
    {
      '@type': 'Question',
      name: 'どのくらいの頻度で来ると良いですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ストレスを強く感じているときは週1〜2回、日常のリフレッシュとしては月2〜3回が目安です。「ストレスが溜まってきたな」と感じたタイミングで来店するパターンも多いです。当日予約も受け付けていますので、気になったときにお気軽にどうぞ。',
      },
    },
    {
      '@type': 'Question',
      name: '施術中はリラックスできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、施術中は照明を落とした静かな空間でBGMが流れる落ち着いた環境でお過ごしいただけます。何も話さなくてもOKです。施術に集中しながら、プロの手に体を委ねる時間がそれ自体のリラックスにつながります。',
      },
    },
  ],
}

export default function SceneStressPage() {
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
              { label: 'ストレス発散に' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Stress Relief</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              ストレスを感じたら、体からリフレッシュ
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              仕事・人間関係・日常のさまざまなストレスで張り詰めてしまったとき、体をほぐすことが心のリフレッシュにもつながります。施術後の「すっきり感」で気持ちを切り替える——君津のMARISAで、静かな時間をお過ごしください。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Body & Stress" ja="ストレスと体のつながり" lead="心のつらさは体に現れやすい" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              ストレスを感じると、体は無意識に緊張状態になります。肩が上がる、首が縮まる、呼吸が浅くなる——こうした体の変化は、精神的な負荷が体に現れているサインです。
            </p>
            <p>
              特に肩から首にかけての緊張が続くと、頭が重く感じやすくなったり、目が疲れやすくなったりすることがあります。また、腰や背中が硬くなることで、全身に重だるさを感じやすくなります。
            </p>
            <p>
              体の緊張がほぐれると、自然と呼吸が深くなりやすく、体全体がリラックスした状態になりやすいです。「施術後は気持ちも軽くなった気がする」というお声をいただくのは、体と心のつながりによるものです。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Why Momihogushi" ja="もみほぐしがリフレッシュにつながる理由" lead="体からアプローチする気分転換" />
          <div className="mt-10 grid gap-5">
            {[
              {
                title: '筋肉の緊張を直接ほぐせる',
                body: 'もみほぐしは積み重なった疲れで固まった筋肉をほぐすアプローチです。体が軽く感じやすい状態になることで、日常のストレスから離れやすくなります。',
              },
              {
                title: '「何もしない時間」が手に入る',
                body: '施術中はうつ伏せになり、プロの手に体を委ねるだけです。何も考えなくていい、判断しなくていい——この時間そのものが日常のストレスから離れる貴重なひとときになります。',
              },
              {
                title: '特別な準備が不要',
                body: '運動や趣味と違い、特別な道具・準備・技術は不要です。「気分転換に何かしたいけど何をすればいいか」という方にも、ただ来店するだけでOKのもみほぐしはハードルが低い選択肢です。',
              },
              {
                title: '長期的なパフォーマンスの維持につながる',
                body: '忙しい日々の中でも、1〜2時間を自分のために使うことが、長期的に見てパフォーマンスの維持にもつながります。頑張りすぎている自分を、定期的にいたわってあげてください。',
              },
            ].map((item, i) => (
              <div key={i} className="bg-cream-50 border border-sand-200 p-6">
                <p className="font-medium text-stone-800 mb-2 tracking-wide text-sm">{item.title}</p>
                <p className="text-sm text-stone-700 leading-loose">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Recommended" ja="ストレス発散におすすめのコース" lead="たっぷりリセットしたい方に" />
          <div className="mt-8 space-y-4">
            <div className="bg-sand-100 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">もみほぐし 90〜120分（たっぷりリセット）</p>
              <p className="text-sm text-stone-700 leading-loose">
                ストレスが溜まっているときはたっぷり時間をかけてほぐすのがおすすめです。90〜120分コースで、背中・腰・肩・首・脚と全身をゆっくりほぐすことで、体の重さが取れてすっきりした感覚になりやすくなります。
              </p>
            </div>
            <div className="bg-sand-100 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">ヘッドセット 60分〜</p>
              <p className="text-sm text-stone-700 leading-loose">
                仕事や思考で頭が疲れている方、頭の重さや緊張が気になる方に。ヘッドセットは頭・首・肩のセットコースで、頭まわりの緊張をほぐすことでリフレッシュ感が高まります。
              </p>
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
