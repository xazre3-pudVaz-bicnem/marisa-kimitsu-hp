import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, LINE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の慢性疲労・体の重だるさケア｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」の慢性疲労ケア。「寝ても疲れが取れない」「体が重だるい」「やる気が出ない」——慢性的な疲れをもみほぐしでリセット。当日予約OK・夜0時まで営業。',
  keywords: ['君津 慢性疲労 ケア', '君津 体の重さ もみほぐし', '君津 疲れが取れない'],
  openGraph: {
    title: '君津の慢性疲労・体の重だるさケア｜MARISA 君津店',
    description:
      '千葉県君津市のリラクゼーションサロン「MARISA」の慢性疲労ケア。寝ても疲れが取れない・体が重い方のリラクゼーションサポート。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/symptom/chronic-fatigue' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '「寝ても疲れが取れない」状態にはどのコースがおすすめですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '慢性的な疲れには、もみほぐし90〜120分コースがおすすめです。全身の筋肉の緊張をじっくりほぐすことで、施術後の「体が軽くなった」「リラックスできた」というすっきり感を感じていただきやすくなります。頭や首まわりの疲れも強い方には、ヘッドセット60分（¥5,400）も好評です。',
      },
    },
    {
      '@type': 'Question',
      name: '慢性疲労の場合、どのくらいの頻度でケアするのがいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '疲れが溜まりやすい方には、2〜4週間に1回程度の定期的なケアをおすすめしています。「疲れが限界になってから来る」よりも、定期的に来ていただくほうが、疲れを溜め込まない日々のメンテナンスとして役立ちます。お仕事の繁忙期など体への負担が増す時期は頻度を上げていただく方も多いです。',
      },
    },
    {
      '@type': 'Question',
      name: '疲れているのかストレスなのか自分でもわからないのですが？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '「漠然と体が重い」「気力がわかない」という状態は、肉体的な疲れとストレスが重なって現れることが多くあります。どちらが原因かわからなくても、もみほぐしで全身の筋肉の緊張をほぐし、ゆったりした時間を過ごすことがリラックスにつながります。まずはお気軽にご来店ください。',
      },
    },
    {
      '@type': 'Question',
      name: 'ヘッドスパとの組み合わせはできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、MARISAのヘッドセットコース（ヘッドケア+もみほぐし 60分¥5,400・90分¥6,700）は、頭・首・肩をセットでほぐすコースです。「頭が重い・ぼんやりする」という疲れのある方に特に好評です。全身の慢性疲労と合わせてヘッドケアも行うことで、より全身のリラックス感を得やすくなります。',
      },
    },
    {
      '@type': 'Question',
      name: '初めてのご来店でも大丈夫ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、初めての方も大歓迎です。ご来店の際に施術前のカウンセリングで体の状態・気になる部位・圧の好みを詳しくお聞きします。「全身疲れている・どこがコリているかわからない」という方も多くいらっしゃいます。お体の状態をお聞きしながら施術しますので、安心してご来店ください。',
      },
    },
  ],
}

const causes = [
  {
    title: '日常的な仕事・生活の積み重ね',
    desc: '「特に激しい運動をしたわけでもないのに体が重い」——これは日常の仕事・家事・育児の積み重ねから来る疲れです。毎日の生活の中で少しずつ蓄積した疲れが、「寝ても取れない慢性的な重さ」として現れます。',
  },
  {
    title: '睡眠の質の低下との悪循環',
    desc: '全身の筋肉が緊張したまま眠りにつくと、睡眠中も体の緊張がほぐれにくくなります。その結果「寝たのに疲れが取れない」状態が続き、さらに翌日の疲れが増す悪循環に陥りやすくなります。',
  },
  {
    title: 'ストレスと体の緊張のつながり',
    desc: '精神的なプレッシャーや心配事があると、体の筋肉に無意識に力が入り続けます。「体が常に戦闘態勢にある」状態が慢性化すると、休んでいるつもりでも体の疲れが抜けにくくなります。',
  },
  {
    title: '血行低下と疲れの蓄積',
    desc: '長時間の座り仕事や運動不足が続くと、全身の血行が低下します。筋肉への酸素・栄養の巡りが悪くなると、体内に疲労物質が蓄積しやすくなり、体の重だるさとして感じやすくなります。',
  },
  {
    title: '自律神経のリズムの乱れ',
    desc: '不規則な生活・睡眠不足・過度な残業が続くと、交感神経が優位な状態（緊張・活動モード）から抜け出しにくくなります。「体が休まらない」「眠りが浅い」という方は、自律神経のリズムが影響しているサインです。',
  },
  {
    title: '季節の変わり目・気候変化',
    desc: '春・秋の気温変化が大きい季節は、自律神経が気候への対応に追われやすくなり、疲れを感じやすくなります。特に「春バテ」「秋バテ」として知られる、季節の変わり目の体の重だるさを感じる方は多くいらっしゃいます。',
  },
]

const bodySymptoms = [
  { area: '肩・首の重さ', desc: '常に肩・首が張った状態が慢性的な体の重さの主な原因の一つ。肩・首をほぐすことで全身の緊張がやわらぎやすくなります。' },
  { area: '眼の疲れ・頭の重さ', desc: 'PC・スマホ作業が多い方は、目の疲れが頭の重さ・ぼんやり感として現れることがあります。ヘッドケアとセットでのケアが好評。' },
  { area: '腰・背中の重さ', desc: '長時間の座り仕事や立ち仕事の方に多い腰・背中の慢性的な重さ。全身もみほぐしの中でしっかりアプローチします。' },
  { area: '体全体のだるさ', desc: '「どこがコリているかわからないけど全身重い」という方も多くいらっしゃいます。全身をまとめてほぐすことで、体全体のだるさの解消サポートに。' },
]

const scenes = [
  {
    title: '長年のデスクワークで疲れが慢性化している方',
    desc: '長年のデスクワークで蓄積した疲れが慢性化し、「何となくいつも重い」という状態の方。月1〜2回の定期的なケアを日々のメンテナンスとして活用いただいています。',
  },
  {
    title: '育児・家事で体が休まらない方',
    desc: '育児・家事で休む間もなく動き続けている方。「自分だけのリラックス時間が欲しい」という方に、MARISAの施術時間がゆったりリセットできる場として喜ばれています。',
  },
  {
    title: '仕事のプレッシャーで体まで疲れている方',
    desc: '職場のストレス・人間関係のプレッシャーが体の重さとして現れている方。「体をほぐしてリラックスしたい」という目的でご来店される方が多く、施術後の解放感が好評です。',
  },
]

const recommendedMenus = [
  {
    tag: '90〜120 min',
    title: 'もみほぐし 90〜120分',
    desc: '90分¥6,400・120分¥8,400。慢性的な全身疲れには、時間をかけてじっくりほぐすことが大切。全身をリセットする感覚を体験していただけます。',
    href: '/menu/body-care',
  },
  {
    tag: 'Head Set',
    title: 'ヘッドセットコース',
    desc: '60分¥5,400・90分¥6,700。頭・首・肩をセットでほぐします。「頭も体も疲れている」という方に好評のセットコース。',
    href: '/menu/head',
  },
  {
    tag: 'Regular',
    title: '定期メンテナンス',
    desc: '2〜4週に1回の定期来店で、慢性的な疲れを溜め込まない体づくりをサポート。「疲れを溜めてから来る」より「こまめにリセット」がおすすめ。',
    href: HPB_URL,
  },
]

const steps = [
  { step: '01', title: 'ご予約', desc: 'ホットペッパービューティー・当日来店でご予約。当日予約OK。' },
  { step: '02', title: 'カウンセリング', desc: '慢性疲れの状況・特に気になる部位・全身の状態をお聞きします。「全体的に重い」という方も多く、詳しくお聞きします。' },
  { step: '03', title: '全身ほぐし（上半身）', desc: '肩・首・背中・腕から丁寧にほぐします。慢性疲れの方はここから体の変化を感じやすくなります。' },
  { step: '04', title: '全身ほぐし（下半身）', desc: '腰・臀部・脚まで全身を丁寧にほぐします。圧の強さはご要望に応じて調整。' },
  { step: '05', title: 'アフターケア', desc: '施術後の体の感覚を確認。定期的なメンテナンスのタイミングなどもご相談に応じます。' },
]

const faqs = [
  {
    q: '「寝ても疲れが取れない」状態にはどのコースがおすすめですか？',
    a: '慢性的な疲れには、もみほぐし90〜120分コースがおすすめです。全身の筋肉の緊張をじっくりほぐすことで、施術後の「体が軽くなった」「リラックスできた」というすっきり感を感じていただきやすくなります。頭や首まわりの疲れも強い方には、ヘッドセット60分（¥5,400）も好評です。',
  },
  {
    q: '慢性疲労の場合、どのくらいの頻度でケアするのがいいですか？',
    a: '疲れが溜まりやすい方には、2〜4週間に1回程度の定期的なケアをおすすめしています。「疲れが限界になってから来る」よりも、定期的に来ていただくほうが、疲れを溜め込まない日々のメンテナンスとして役立ちます。お仕事の繁忙期など体への負担が増す時期は頻度を上げていただく方も多いです。',
  },
  {
    q: '疲れているのかストレスなのか自分でもわからないのですが？',
    a: '「漠然と体が重い」「気力がわかない」という状態は、肉体的な疲れとストレスが重なって現れることが多くあります。どちらが原因かわからなくても、もみほぐしで全身の筋肉の緊張をほぐし、ゆったりした時間を過ごすことがリラックスにつながります。まずはお気軽にご来店ください。',
  },
  {
    q: 'ヘッドスパとの組み合わせはできますか？',
    a: 'はい、MARISAのヘッドセットコース（ヘッドケア+もみほぐし 60分¥5,400・90分¥6,700）は、頭・首・肩をセットでほぐすコースです。「頭が重い・ぼんやりする」という疲れのある方に特に好評です。全身の慢性疲労と合わせてヘッドケアも行うことで、より全身のリラックス感を得やすくなります。',
  },
  {
    q: '初めてのご来店でも大丈夫ですか？',
    a: 'はい、初めての方も大歓迎です。ご来店の際に施術前のカウンセリングで体の状態・気になる部位・圧の好みを詳しくお聞きします。「全身疲れている・どこがコリているかわからない」という方も多くいらっしゃいます。お体の状態をお聞きしながら施術しますので、安心してご来店ください。',
  },
]

export default function ChronicFatiguePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ===== 1. Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'お悩み別', href: '/symptom' }, { label: '慢性疲労・体の重だるさ' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Chronic Fatigue Care</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              寝ても取れない疲れ・体の重だるさをリセット
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「ちゃんと寝たのに朝から体が重い」「疲れているのに眠りが浅い」「何となくいつもだるい」——こうした慢性的な体の重さは、毎日の仕事・家事・ストレスが少しずつ積み重なった結果です。MARISAでは、全身をじっくりほぐすもみほぐしで体の緊張をやわらげ、リラックスしやすい状態に整えるサポートをします。
            </p>
          </div>
        </div>
      </div>

      {/* ===== 2. Causes ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Causes"
            ja="慢性的な疲れの主な原因"
            lead="「寝ても取れない疲れ」には、いくつかのパターンがあります。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {causes.map((c) => (
              <div key={c.title} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{c.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. Body Symptoms ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Symptoms"
            ja="慢性疲れが出やすい体のパーツ"
            lead="「全身が重い」という感覚は、主に以下のパーツの緊張から来ています。"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {bodySymptoms.map((b) => (
              <div key={b.area} className="border border-sand-200 bg-cream-50 p-6">
                <p className="text-xs tracking-widest text-brown-400 uppercase mb-2">{b.area}</p>
                <p className="text-sm text-stone-700 leading-loose">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. Life Scenes ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Life Scenes"
            ja="こんな方の慢性疲れケアにご利用いただいています"
            lead="君津エリアで慢性的な疲れを抱える方々にご利用いただいています。"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {scenes.map((s) => (
              <div key={s.title} className="border border-sand-200 bg-cream-50 p-6">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{s.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. MARISA Approach ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Our Approach" ja="MARISAが大切にしていること" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              慢性的な疲れを感じている方には、「とにかく全身をほぐして、ゆっくりリラックスしてほしい」——MARISAではそのために時間をかけた施術を大切にしています。
            </p>
            <p>
              慢性疲れの方には、90分・120分のじっくりコースがおすすめです。短時間のケアでは全身の緊張が緩みにくく、施術後の「体が軽くなった感覚」を感じていただきにくいためです。時間をかけてほぐすことで、「久しぶりに体が楽になった」と感じていただきやすくなります。
            </p>
            <p>
              「疲れが限界になってから来る」よりも、「定期的にこまめにリセットする」ほうが慢性疲れには効果的です。2〜4週に1回のペースで定期的にご来店いただく方も多くいらっしゃいます。日々のメンテナンスとして活用いただければ幸いです。
            </p>
            <p className="border-l-2 border-brown-300 pl-4 text-stone-600 italic">
              ※ 当サロンはリラクゼーション施設です。強い倦怠感・発熱・体調不良が続く場合は医療機関へのご受診をおすすめします。
            </p>
          </div>
        </div>
      </section>

      {/* ===== 6. Recommended Menus ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Menus" ja="慢性疲労におすすめのメニュー" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl">
            {recommendedMenus.map((m) => (
              <div key={m.title} className="border border-sand-200 bg-cream-50 p-6">
                <p className="text-xs tracking-widest text-brown-400 mb-2">{m.tag}</p>
                <h3 className="text-sm font-medium text-stone-800 mb-2">{m.title}</h3>
                <p className="text-sm text-stone-700 leading-loose mb-4">{m.desc}</p>
                <Link href={m.href} className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
                  詳しく見る →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. Duration Guide ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Duration Guide"
            ja="コース時間の目安"
            lead="慢性疲れには時間をかけた施術が特に有効です。"
          />
          <div className="mt-8 space-y-4">
            {[
              { time: '60分', label: 'もみほぐし 60分', desc: '¥4,500。初めての方・久しぶりの方はまずこちらから。全身の主要な部位をまとめてほぐします。' },
              { time: '90分', label: 'もみほぐし 90分', desc: '¥6,400。慢性疲れには最もおすすめ。全身をじっくりほぐし、施術後の軽さを感じやすいコース。' },
              { time: '120分', label: 'もみほぐし 120分', desc: '¥8,400。しっかりリセットしたい日に。特に疲れが蓄積した時・仕事の繁忙期後に好評。' },
              { time: '60分', label: 'ヘッドセット 60分', desc: '¥5,400。頭も体も疲れている方に。頭・首・肩をセットでほぐします。' },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 border border-sand-200 bg-cream-50 p-5">
                <div className="font-en text-xl text-brown-400 font-light w-14 shrink-0">{item.time}</div>
                <div>
                  <p className="text-sm font-medium text-stone-800 mb-1">{item.label}</p>
                  <p className="text-xs text-stone-700 leading-loose">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. Treatment Flow ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Flow" ja="施術の流れ" />
          <div className="mt-10 space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-4 border border-sand-200 bg-cream-50 p-5">
                <div className="font-en text-xl text-brown-400 font-light w-10 shrink-0">{s.step}</div>
                <div>
                  <p className="text-sm font-medium text-stone-800 mb-1">{s.title}</p>
                  <p className="text-xs text-stone-700 leading-loose">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 9. FAQ ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
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

      {/* ===== 10. Related & CTA ===== */}
      <section className="py-12 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: 'ストレス・緊張のケア', href: '/symptom/stress' },
              { label: '不眠・眠りの浅さ', href: '/symptom/insomnia' },
              { label: 'デスクワーク疲れ', href: '/symptom/desk-work' },
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
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">慢性疲れは、MARISAでリセット</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業・当日予約OK・無料駐車場あり。<br />
            君津のリラクゼーションサロン MARISA。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            {LINE_URL && (
              <ReserveButton href={LINE_URL} label="LINEで予約する" variant="outline" size="lg" />
            )}
          </div>
        </div>
      </section>
    </>
  )
}
