import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の腕・肘・手首の疲れのもみほぐし｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」の腕・肘・手首ケア。PC作業・スマホ・家事による腕のだるさや疲れを、もみほぐしでやわらげます。当日予約OK・夜0時まで営業。',
  keywords: ['君津 腕 疲れ マッサージ', '君津 肘 ケア', '君津 手首 もみほぐし'],
  openGraph: {
    title: '君津の腕・肘・手首の疲れのもみほぐし｜MARISA 君津店',
    description: '千葉県君津市のリラクゼーションサロン「MARISA」の腕・肘・手首ケア。PC作業・スマホ・家事による腕のだるさや疲れをやわらげます。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/symptom/arm-fatigue' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '腕の疲れには全身もみほぐしとどう違いますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MARISAのもみほぐしは全身を対象としており、腕・肘・手首のケアは全身もみほぐしに含まれています。施術前のカウンセリングで「腕を重点的にほぐしてほしい」とお伝えいただければ、腕の時間を多めに取ってケアします。腕だけを単独でケアする専用コースはございませんが、全身ほぐしの中で腕の疲れに対応しています。',
      },
    },
    {
      '@type': 'Question',
      name: 'スマホの使いすぎで腕がだるいのですが施術できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、スマートフォンの長時間使用による腕・手首・肘の疲れにも対応しています。スマホを持ち続ける姿勢は腕だけでなく首・肩にも影響するため、全身もみほぐしで腕から肩・首まで一体でほぐすことをおすすめします。',
      },
    },
    {
      '@type': 'Question',
      name: '腕の痛みがある場合も施術できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '軽い疲れやだるさ・筋肉の張りには対応していますが、強い痛み・しびれ・腫れがある場合はまず医療機関のご受診をお勧めします。当サロンはリラクゼーション施設であり、痛みの診断・治療は行っておりません。施術前のカウンセリングでお体の状態をお知らせください。',
      },
    },
  ],
}

const causes = [
  {
    title: 'PC作業・キーボード・マウス操作',
    desc: 'キーボードのタイピングやマウス操作では、前腕の筋肉（前腕屈筋群・前腕伸筋群）が繰り返し収縮し続けます。長時間の作業で筋肉が疲弊し、腕全体のだるさ・張り・こわばりとして現れます。特に「マウスを持つ側の腕だけが疲れる」という方が多くいらっしゃいます。',
  },
  {
    title: 'スマートフォンの長時間使用',
    desc: 'スマートフォンを長時間持ち続けること自体が腕への負担になります。さらに親指での頻繁なタップ・スクロール操作が手首・前腕の筋肉に繰り返し負荷をかけます。通勤中・休憩中・就寝前など、気づかないうちにスマホを使っている時間が積み重なります。',
  },
  {
    title: '料理・家事・育児',
    desc: '包丁の使用・鍋の持ち上げ・洗い物・掃除機がけ・子どもの抱っこ——家事や育児では腕・手首・肘を日常的に酷使します。「主婦の方・育児中の方の腕の疲れ」は見過ごされやすいですが、積み重なることで慢性的な腕の重だるさにつながります。',
  },
]

const shoulderConnection = [
  {
    title: '肩から腕全体のつながり',
    desc: '腕の疲れは腕だけの問題ではありません。肩の筋肉（三角筋・回旋筋腱板）から上腕二頭筋・上腕三頭筋、さらに前腕・手首へと一体のつながりで動いています。「腕が疲れた」と感じる時、肩まわりにも緊張が蓄積していることがほとんどです。',
  },
  {
    title: '首こり・肩こりとの連動',
    desc: '腕を長時間使い続けると、その負担は肩関節・肩甲骨を経由して首・肩のコリとしても現れます。「腕は疲れているし、肩も凝っている」という方は、この連動が起きているサインです。腕だけでなく肩・首まで一体でほぐすことが大切です。',
  },
  {
    title: '神経のつながり',
    desc: '腕・手首・指に感じるしびれやだるさは、首・肩の神経とつながっています。筋肉の緊張が神経を圧迫することで手先のだるさを感じやすくなることがあります。ただし、強いしびれや痛みは医療機関への受診をおすすめします。',
  },
]

const faqs = [
  {
    q: '腕の疲れには全身もみほぐしとどう違いますか？',
    a: 'MARISAのもみほぐしは全身を対象としており、腕・肘・手首のケアは全身もみほぐしに含まれています。施術前のカウンセリングで「腕を重点的にほぐしてほしい」とお伝えいただければ、腕の時間を多めに取ってケアします。腕だけを単独でケアする専用コースはございませんが、全身ほぐしの中で腕の疲れに対応しています。',
  },
  {
    q: 'スマホの使いすぎで腕がだるいのですが施術できますか？',
    a: 'はい、スマートフォンの長時間使用による腕・手首・肘の疲れにも対応しています。スマホを持ち続ける姿勢は腕だけでなく首・肩にも影響するため、全身もみほぐしで腕から肩・首まで一体でほぐすことをおすすめします。',
  },
  {
    q: '腕の痛みがある場合も施術できますか？',
    a: '軽い疲れやだるさ・筋肉の張りには対応していますが、強い痛み・しびれ・腫れがある場合はまず医療機関のご受診をお勧めします。当サロンはリラクゼーション施設であり、痛みの診断・治療は行っておりません。施術前のカウンセリングでお体の状態をお知らせください。',
  },
]

export default function ArmFatiguePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ===== Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'お悩み別', href: '/symptom' },
              { label: '腕・肘・手首の疲れ' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Arm &amp; Wrist Care</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              腕・肘・手首の疲れ・だるさをほぐす
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「PC作業の後に腕がだるくて重い」「スマホを持ちすぎて手首が疲れた」「家事で腕の筋肉が張っている」——腕・肘・手首の疲れは、日常の積み重ねで慢性化しやすい部位です。MARISAでは、腕の疲れを全身もみほぐしの中でケアし、肩・首とのつながりも意識してほぐします。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Causes ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Causes"
            ja="腕の疲れの主な原因"
            lead="現代の日常生活では、腕・手首を酷使する場面が多くあります。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {causes.map((c) => (
              <div key={c.title} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{c.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 max-w-3xl text-sm text-stone-700 leading-loose">
            <p>
              これらの動作は一つひとつの負担は小さくても、毎日継続することで筋肉の疲弊が積み重なります。「気づいたら慢性的に腕がだるい」という状態になりやすいのが腕の疲れの特徴です。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Shoulder Connection ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Connection"
            ja="肩から腕全体のつながり"
            lead="腕の疲れは腕単体の問題ではなく、肩・首とのつながりで考えることが大切です。"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {shoulderConnection.map((c) => (
              <div key={c.title} className="border border-sand-200 bg-cream-50 p-6">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{c.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Approach ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Our Approach"
            ja="MARISAのアプローチ"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              腕のケアはMARISAの全身もみほぐしに含まれています。施術前のカウンセリングで「腕が特に疲れている」とお伝えいただければ、腕・前腕・手首を重点的にほぐす時間を多く取ります。
            </p>
            <p>
              腕のほぐしでは、前腕屈筋群・前腕伸筋群・上腕二頭筋・上腕三頭筋を丁寧にほぐします。腕は比較的繊細な部位のため、圧の強さはお好みに合わせて調整します。「強くほぐしてほしい」「優しい圧で」など、遠慮なくお申し付けください。
            </p>
            <p>
              腕の疲れと肩こりを両方お持ちの方が多いため、肩・首・背中との連動を意識しながら施術します。腕だけをほぐしても肩・首に緊張が残っていると腕の疲れが戻りやすいため、一体でほぐすことが大切です。
            </p>
            <p className="border-l-2 border-brown-300 pl-4 text-stone-600 italic">
              ※ 強い痛み・しびれ・腫れがある場合は医療機関へのご受診をお勧めします。当サロンはリラクゼーション施設であり、治療・診断は行っておりません。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Recommended Menus ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menus"
            ja="腕の疲れにおすすめのメニュー"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Body Care</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">もみほぐし 60分</h3>
              <p className="text-sm text-stone-700 leading-loose mb-4">¥4,500〜。腕の疲れと合わせて肩・首もまとめてほぐします。カウンセリングで「腕中心に」とお伝えください。</p>
              <Link href="/menu" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
                メニューを見る →
              </Link>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Full Body</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">もみほぐし 90分</h3>
              <p className="text-sm text-stone-700 leading-loose mb-4">¥6,500〜。腕・肩・首・背中・腰と全身をじっくりほぐします。全身疲れも一緒にリセットしたい方に。</p>
              <Link href="/menu" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
                メニューを見る →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="FAQ" ja="よくあるご質問" />
          <div className="mt-10 space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-sand-200 bg-cream-50 p-6">
                <p className="text-sm font-medium text-stone-800 mb-3 tracking-wide">
                  <span className="font-en text-brown-400 mr-2">Q.</span>
                  {faq.q}
                </p>
                <p className="text-sm text-stone-700 leading-loose pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Related links ===== */}
      <section className="py-12 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: '肩こりのお悩み', href: '/symptom/stiff-shoulder' },
              { label: 'デスクワーク疲れのお悩み', href: '/symptom/desk-work' },
              { label: '肩甲骨まわりの張り', href: '/symptom/shoulder-blade' },
              { label: 'メニュー・料金', href: '/menu' },
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="border border-sand-300 px-3 py-1.5 text-stone-700 hover:border-brown-300 hover:text-brown-500 transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">
            腕・肘・手首の疲れは、MARISAへ
          </h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業中・当日予約OK。<br />
            君津のリラクゼーションサロン MARISAへ。
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
