import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, LINE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の腰まわりのつらさ・もみほぐし｜MARISA 君津店',
  description:
    '君津市で腰の重さ・だるさ・腰まわりのつらさでお悩みの方へ。MARISA 君津店では腰まわりの負担をやわらげるケアをご提供。45分¥3,900〜。鍼灸（公式予約限定）も対応。当日予約OK。',
  keywords: ['君津 腰痛', '君津 腰まわり ケア', '君津 腰 もみほぐし', '君津 腰 マッサージ', '君津 腰 鍼灸'],
  openGraph: {
    title: '君津の腰まわりのつらさ・もみほぐし｜MARISA 君津店',
    description: '君津市で腰の重さ・だるさでお悩みの方へ。MARISA 君津店では腰まわりの負担をやわらげるケアをご提供。45分¥3,900〜。当日予約OK。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/symptom/lower-back' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '腰のつらさにはどのコースが向いていますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '腰まわりのケアには「もみほぐし60分（¥4,500/70分計）」または「90分（¥6,400/100分計）」がおすすめです。腰は背中・臀部と連動しているため、腰単体でなく周辺をまとめてほぐすことが大切です。全身も疲れている方には90分以上をおすすめします。',
      },
    },
    {
      '@type': 'Question',
      name: '腰は強めにほぐしてもらえますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '施術前のカウンセリングで圧の好みをお聞きし、「強め・普通・優しめ」から調整します。ただし、腰は繊細な部位でもあるため、お体の状態に合わせた適切な圧で施術します。施術中もいつでも調整できますのでお気軽にお申し付けください。腰の痛みが強い場合は先に医療機関をご受診ください。',
      },
    },
    {
      '@type': 'Question',
      name: '鍼灸で腰をケアできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、鍼灸メニューで腰へのアプローチも可能です。担当の鍼灸師「なお」が腰の気になる部位にピンポイントで鍼アプローチを行います。鍼灸メニューは公式WEB予約（B-merit）限定で、なおは金曜10:00-22:00・土曜10:00-14:00が基本勤務時間です。ホットペッパービューティーからは予約できませんのでご注意ください。',
      },
    },
    {
      '@type': 'Question',
      name: '足つぼと腰のつらさは関係ありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '足つぼの考え方では、足裏の特定の反射区が腰・背中の対応部位とつながっているとされています。また、足のほぐしで下肢の血行が改善されることで腰周辺の血流もサポートされやすくなります。腰のつらさと足の疲れが両方ある方には、足つぼセットコースもご検討ください。',
      },
    },
    {
      '@type': 'Question',
      name: 'どのくらいの頻度で来店するといいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '目安は2〜4週間に1回です。デスクワーク・立ち仕事・運転など、腰への負担が継続する環境では定期的なケアをおすすめします。慢性的な腰まわりのつらさを感じている方は、最初は2週間ペースで数回通うと体の緊張が整いやすくなります。',
      },
    },
  ],
}

const symptoms = [
  {
    title: '長時間座り続けて腰が重くなる',
    desc: 'デスクワークや車の運転など、長時間座り続けると腰の筋肉は常に体重を支えながら緊張した状態になります。特に前かがみの姿勢や、骨盤が後傾した「へたり座り」は腰への負担が大きく、腰のだるさや重さの原因になります。「仕事終わりに腰がずっしり重くなる」という方に多いです。',
  },
  {
    title: '立ちっぱなしで腰がだるくなる',
    desc: '飲食・販売・製造業など立ち仕事の多い方も、腰のつらさを抱えやすい傾向があります。長時間同じ姿勢で立ち続けると、腰まわりの筋肉が疲弊し、夕方になるほど腰が重くなる・だるくなるといった状態が現れやすくなります。仕事の終わり頃に腰のつらさが最大になるという方が多いです。',
  },
  {
    title: '朝起きると腰が動きにくい',
    desc: '睡眠中は腰の筋肉を動かさないため、朝起きたときに「腰が固まっている感じ」を覚える方がいます。慢性的な腰まわりの筋肉の緊張が原因であることが多く、起床後しばらくは動きにくいが時間が経つにつれて少し楽になる、というパターンの方も多いです。',
  },
  {
    title: '前かがみになるとつらい',
    desc: '前かがみになる動作（洗顔、荷物を拾うなど）のときに腰がつらく感じる場合、腰まわりの筋肉の緊張が強くなっているサインです。前傾姿勢では腰への負荷が急増するため、筋肉が固まっている状態だと動きにくさやつらさを感じやすくなります。',
  },
  {
    title: '腰から脚にかけて重さを感じる',
    desc: '腰から脚にかけての重さ・だるさは、腰まわりの筋肉の緊張が臀部（お尻）・太ももへと広がっているサインです。長時間の着席や運転でお尻・太ももが圧迫されることで、腰から下にかけての重だるさが生じやすくなります。',
  },
]

const kimitsuScenes = [
  {
    title: 'デスクワーク（長時間着座）',
    desc: '1日8時間以上椅子に座り続けるオフィスワーク・在宅勤務では、腰への蓄積疲労が大きくなります。椅子・机の高さが体に合っていない環境での長時間作業は特に腰への負担を増大させます。',
  },
  {
    title: '立ち仕事・工場勤務',
    desc: '君津エリアには製造業・工場施設が多く、立ち仕事・同じ動作の繰り返しによる腰への蓄積疲労を感じている方が多くご来店されます。仕事終わりの腰のだるさを感じる方に特においでいただいています。',
  },
  {
    title: '車での長時間移動',
    desc: '君津市は車での移動が主体のため、通勤・仕事での長距離運転が多い方が多くいます。長時間の運転姿勢は腰の筋肉を緊張させたまま維持するため、腰の重さ・だるさを生じやすくします。',
  },
  {
    title: '農業・育児・介護',
    desc: '前傾姿勢での農作業、赤ちゃんの抱っこ、介護での介助動作など、日常的に腰を使う動作の積み重ねが腰まわりの疲労につながります。育児・介護をされている方の腰のつらさのご来店も多いです。',
  },
]

const menuItems = [
  {
    category: 'Body Care',
    name: 'もみほぐし 60分',
    desc: '腰・背中・臀部（お尻まわり）をバランスよくほぐします。腰のつらさには60分コースが特におすすめです。カウンセリングで「腰を重点的に」とお伝えいただければ調整します。',
    price: '45分 ¥3,900 / 60分 ¥4,500（70分計）/ 90分 ¥6,400（100分計）',
    href: '/menu/body-care',
    note: '',
  },
  {
    category: 'Full Body',
    name: 'もみほぐし 90分・120分',
    desc: '腰だけでなく全身をじっくりほぐしたい方に。疲れが深い方・慢性的な腰のつらさの方には90分以上がおすすめです。腰・背中・臀部・脚まで全体をほぐすことで腰まわりの負担をやわらげます。',
    price: '90分 ¥6,400（100分計）/ 120分 ¥8,400',
    href: '/menu/body-care',
    note: '',
  },
  {
    category: 'Foot Set',
    name: '足つぼセットコース',
    desc: 'もみほぐし＋足つぼの組み合わせ。腰のつらさと足のだるさを同時にケアしたい方に。足裏からふくらはぎまでほぐすことで下半身全体の血行をサポートします。',
    price: '60分 ¥5,500 / 90分 ¥6,900 / 120分 ¥8,900',
    href: '/menu/set',
    note: '',
  },
  {
    category: 'Acupuncture',
    name: '鍼灸メニュー（公式予約限定）',
    desc: '腰・背中の気になる部位に鍼でピンポイントアプローチ。もみほぐし＋鍼のセットで深部へのケアが可能です。担当：なお（鍼灸師）。',
    price: 'もみほぐし30分+鍼 ¥4,500 / 45分+鍼 ¥5,400 / 70分+鍼 ¥6,000 / 鍼1部位オプション ¥1,500',
    href: '/menu/acupuncture',
    note: '鍼灸メニューは公式WEB予約（B-merit）限定です。ホットペッパービューティーからは予約できません。金曜10:00-22:00、土曜10:00-14:00が基本勤務時間です。',
  },
]

const bodyConnection = [
  {
    area: '背中（脊柱起立筋）',
    desc: '背骨の両側を走る脊柱起立筋は、腰の筋肉と連続してつながっています。背中が固まると腰の動きにも影響するため、腰と背中はセットでほぐすことが大切です。',
  },
  {
    area: '臀部（お尻まわり）',
    desc: '大臀筋・中臀筋など臀部の筋肉は、腰の動きを支えています。お尻が固まると腰への負担が増し、腰のだるさや重さにつながります。',
  },
  {
    area: '股関節・太もも',
    desc: '股関節や太もも前面の筋肉（大腰筋・腸腰筋など）は腰椎に直接つながる深部の筋肉です。長時間の座り仕事でこれらが縮まると、腰が前に引っ張られた状態になります。',
  },
]

const courseGuide = [
  {
    time: '60分（¥4,500/70分計）',
    target: '腰・背中をメインにほぐしたい方',
    detail: '腰・背中・臀部をバランスよくほぐします。腰まわりのケアにもっともご利用の多いコースです。',
  },
  {
    time: '90分（¥6,400/100分計）',
    target: '慢性的な腰のつらさ・全身疲れも気になる方',
    detail: '腰から脚まで全身をほぐします。腰のつらさが長く続いている方・全体的に疲れている方に。',
  },
  {
    time: '足つぼセット60分（¥5,500）',
    target: '腰と足のだるさを同時にケアしたい方',
    detail: 'もみほぐし＋足つぼのセット。腰のつらさと下半身のだるさをまとめてリセットしたい方に。',
  },
  {
    time: '鍼灸+もみほぐし（¥4,500〜）',
    target: '腰にピンポイントアプローチしたい方',
    detail: 'もみほぐし＋鍼のセット。腰の特定部位へのアプローチに。公式WEB予約限定・金曜土曜中心出勤。',
  },
]

const faqs = [
  {
    q: '腰のつらさにはどのコースが向いていますか？',
    a: '腰まわりのケアには「もみほぐし60分（¥4,500/70分計）」がおすすめです。腰・背中・臀部をまとめてほぐすことができ、腰のつらさに幅広く対応できます。疲れが深い方・慢性的な腰のつらさの方は90分（¥6,400/100分計）がより効果的です。足のだるさも気になる方は足つぼセットコースもご検討ください。',
  },
  {
    q: '腰は強めにほぐしてもらえますか？',
    a: 'カウンセリングで圧の好みをお聞きし、「強め・普通・優しめ」から調整します。ただし腰は繊細な部位でもあるため、体の状態に合わせた適切な圧で施術します。施術中に「もっと強く」「優しくしてほしい」と感じた場合はいつでもお申し付けください。腰の痛みが強い・下肢のしびれがある場合は先に整形外科など医療機関をご受診ください。',
  },
  {
    q: '鍼灸で腰をケアできますか？',
    a: 'はい、鍼灸メニューで腰へのアプローチも可能です。担当の鍼灸師「なお」が腰の気になる部位にピンポイントで鍼アプローチを行います。鍼灸メニューは公式WEB予約（B-merit）限定で、ホットペッパービューティーからは予約できません。なおの基本勤務は金曜10:00-22:00・土曜10:00-14:00です。',
  },
  {
    q: '足つぼと腰のつらさは関係ありますか？',
    a: '足つぼの反射区の考え方では、足裏の特定部位が腰・背中と対応しているとされています。また、足のほぐしで下半身全体の血行が促されることで腰周辺の血流もサポートされやすくなります。腰のつらさと足の疲れが両方ある方には足つぼセットコースもおすすめです。',
  },
  {
    q: 'どのくらいの頻度で来店するといいですか？',
    a: '目安は2〜4週間に1回です。デスクワーク・立ち仕事・運転など腰への負担が継続する環境では定期的なケアをおすすめします。慢性的な腰まわりのつらさを感じている方は、最初は2週間ペースで数回来店されると体の緊張が整いやすくなります。定期メンテナンスとして継続してご利用いただく方が多いです。',
  },
]

const flowSteps = [
  { step: '01', title: '予約', desc: '公式WEB・ホットペッパービューティー・お電話でご予約ください。鍼灸は公式WEB予約（B-merit）限定です。' },
  { step: '02', title: '受付・ヒアリング', desc: '来店後、カウンセリングシートへご記入いただきます。腰の状態・つらさの程度を確認します。' },
  { step: '03', title: 'カウンセリング', desc: '担当スタッフが腰のつらさ・気になる部位・圧の好みを確認します。「腰の右側がひどい」など細かいご要望もお伝えください。' },
  { step: '04', title: '施術', desc: '専用ベッドでうつ伏せになっていただき、腰・背中・臀部を中心にほぐします。体の状態によっては仰向けや横向きに変更することも可能です。' },
  { step: '05', title: 'お会計・次回予約', desc: '施術後、お会計をしていただきます。定期的なケアをご希望の方は次回のご予約もその場で承ります。' },
]

export default function LowerBackPage() {
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
              { label: '腰まわりのつらさ' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Lower Back Care</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800">
              腰のだるさ・重さを、しっかりほぐして負担をやわらげる
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「仕事が終わると腰が重い」「朝起きるときに腰がだるい」「長時間座っていると腰が張ってくる」——そのようなお悩みを抱える方が、君津市内からも多くご来店されています。MARISAのもみほぐしで、腰まわりの筋肉の緊張をやわらげ、体の負担を整えます。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Medical Disclaimer ===== */}
      <div className="bg-cream-100 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-5">
          <p className="text-xs text-stone-700 leading-loose">
            <span className="font-medium">ご注意：</span>MARISAのもみほぐしはリラクゼーションを目的とした施術であり、医療行為ではありません。腰の痛みが強い・足のしびれがある・動くのがつらいなどの症状がある場合は、整形外科などの医療機関を受診してください。
          </p>
        </div>
      </div>

      {/* ===== Visual ===== */}
      <section className="bg-stone-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-0.5">
            <div className="relative aspect-[16/7] overflow-hidden">
              <Image src="/LINE_ALBUM_もみほぐしMARISA_260615_15.jpg" alt="君津 腰のつらさ もみほぐし 腰の施術" fill className="object-cover" />
            </div>
            <div className="relative aspect-[16/7] overflow-hidden">
              <Image src="/LINE_ALBUM_もみほぐしMARISA_260615_12.jpg" alt="君津 腰まわり ケア 深部ほぐし" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Symptoms ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Do You Feel This?"
            ja="こんなお悩みはありませんか"
            lead="腰のだるさ・重さには、日常の生活習慣や仕事環境が大きく影響します。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {symptoms.map((s) => (
              <div key={s.title} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{s.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 max-w-3xl">
            <p className="text-sm text-stone-700 leading-loose">
              腰のつらさの多くは、日常的な体の使い方の積み重ねによるものです。毎日の姿勢や動作の癖が蓄積して腰の筋肉が疲弊していくことが多いと言われています。そのため、定期的なケアで筋肉の緊張をリセットすることが、腰の負担をやわらげるうえで大切です。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Kimitsu Scenes ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Life in Kimitsu"
            ja="君津での日常と腰まわりのつらさ"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {kimitsuScenes.map((s) => (
              <div key={s.title} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{s.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Body Connection ===== */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Connection"
            ja="腰と背中・お尻のつながり"
            lead="腰のつらさは、腰単体ではなく周辺の筋肉全体に関わっています。"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {bodyConnection.map((c) => (
              <div key={c.area} className="border border-sand-200 p-6 bg-cream-50">
                <p className="text-xs tracking-widest text-brown-400 uppercase mb-2">{c.area}</p>
                <p className="text-sm text-stone-700 leading-loose">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MARISA Approach ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Our Approach"
            ja="MARISAでのケア方針"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              腰のお悩みに対して、MARISAでは腰・背中・臀部（お尻まわり）をまとめてほぐすアプローチを行います。腰の筋肉だけをほぐしても、背中や臀部の緊張が残っていれば腰への負担は変わりません。周辺の筋肉全体を整えることで、腰のだるさや重さがやわらぎやすくなります。
            </p>
            <p>
              施術は専用ベッドにうつ伏せになっていただき、脊柱起立筋・腰方形筋・大臀筋・中臀筋など、腰まわりに関わる筋肉を丁寧にほぐします。圧の強さはカウンセリングで確認し、腰の状態に合わせて調整します。「腰は強めに、背中は普通で」など細かいご要望にも対応します。
            </p>
            <p>
              腰のお悩みが長く続いている方には、全身のケアを合わせた60分・90分コースをおすすめしています。全身の筋肉のバランスを整えることで、腰への過剰な負担が生じにくくなります。定期的なご来店（2〜4週間に1回が目安）でお体のコンディションを維持されている方も多いです。
            </p>
            <p>
              なお、腰の痛みが強い・足のしびれがある・安静にしていても痛みがある場合は、医療機関（整形外科）のご受診をおすすめします。MARISAのもみほぐしはリラクゼーション施術であり、医療的な治療を行うものではありません。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Recommended Menus ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menus"
            ja="腰まわりのケアにおすすめのメニュー"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {menuItems.map((m) => (
              <div key={m.name} className="border border-sand-200 bg-cream-50 p-6 flex flex-col">
                <p className="text-xs tracking-widest text-brown-400 mb-2">{m.category}</p>
                <h3 className="text-sm font-medium text-stone-800 mb-2">{m.name}</h3>
                <p className="text-sm text-stone-700 leading-loose mb-3 flex-1">{m.desc}</p>
                <p className="text-xs text-brown-500 font-medium mb-2">{m.price}</p>
                {m.note && (
                  <p className="text-xs text-stone-600 bg-sand-100 border border-sand-200 p-2 mb-3 leading-relaxed">{m.note}</p>
                )}
                <Link href={m.href} className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500 self-start">
                  詳しく見る →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Course Time Guide ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="How to Choose"
            ja="コース時間の選び方"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {courseGuide.map((c) => (
              <div key={c.time} className="border border-sand-200 bg-cream-50 p-6">
                <p className="text-xs tracking-widest text-brown-400 mb-1">{c.time}</p>
                <h3 className="text-sm font-medium text-stone-800 mb-2">{c.target}</h3>
                <p className="text-sm text-stone-700 leading-loose">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Visit Frequency ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Frequency"
            ja="来店頻度の目安"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              腰まわりのケアにおける来店頻度の目安は2〜4週間に1回です。デスクワーク・立ち仕事・運転など腰への負担が日常的に続く環境では、定期的なケアで筋肉の緊張をリセットすることをおすすめします。
            </p>
            <p>
              慢性的な腰のつらさを感じている方は最初は2週間ペースで来店されると体の緊張が整いやすくなります。体の状態が安定してきたら月1回ペースに移行される方も多いです。
            </p>
          </div>
          <div className="mt-8 bg-cream-50 border border-sand-200 p-6">
            <p className="text-xs tracking-widest text-greige-400 mb-2">目安</p>
            <p className="text-sm font-medium text-stone-800 mb-1">2〜4週間に1回がおすすめ</p>
            <p className="text-sm text-stone-700 leading-loose">症状が出てからのケアだけでなく、定期メンテナンスとして利用することで腰まわりの状態を整えやすくなります。</p>
          </div>
        </div>
      </section>

      {/* ===== Staff ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Staff"
            ja="担当スタッフ"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Owner</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">オーナー</h3>
              <p className="text-sm text-stone-700 leading-loose">もみほぐし・足つぼ担当。腰・背中・臀部のほぐしを丁寧に行います。体の状態に合わせたケアで腰まわりの負担をやわらげます。</p>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Acupuncturist</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">なお（鍼灸師）</h3>
              <p className="text-sm text-stone-700 leading-loose">国家資格を持つ鍼灸師。腰の鍼灸施術を担当します。金曜10:00-22:00、土曜10:00-14:00が基本勤務。公式WEB予約（B-merit）でご予約ください。</p>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Staff</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">ゆい</h3>
              <p className="text-sm text-stone-700 leading-loose">不定期出勤。もみほぐしを担当します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Flow ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Flow"
            ja="施術の流れ"
          />
          <div className="mt-10 space-y-4">
            {flowSteps.map((f) => (
              <div key={f.step} className="flex gap-5 border border-sand-200 bg-cream-50 p-5">
                <p className="font-en text-2xl text-brown-400 font-light shrink-0 leading-none pt-1">{f.step}</p>
                <div>
                  <h3 className="text-sm font-medium text-stone-800 mb-1">{f.title}</h3>
                  <p className="text-sm text-stone-700 leading-loose">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="FAQ"
            ja="よくあるご質問"
          />
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

      {/* ===== Related Links ===== */}
      <section className="py-14 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 uppercase mb-6">Related Pages</p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'もみほぐしメニュー', href: '/menu/body-care' },
              { label: '足つぼセットコース', href: '/menu/set' },
              { label: '鍼灸メニュー', href: '/menu/acupuncture' },
              { label: '全身疲労のお悩みへ', href: '/symptom/fatigue' },
              { label: '肩こりのお悩みへ', href: '/symptom/stiff-shoulder' },
              { label: 'アクセス・無料駐車場', href: '/access' },
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-sand-200 bg-cream-50 py-4 px-6 text-sm text-stone-700 tracking-wide hover:border-brown-300 hover:text-brown-500 transition-colors"
              >
                {item.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">
            腰まわりのお悩みは、MARISAへ
          </h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業中・当日予約OK・無料駐車場完備。<br />
            君津で腰まわりのケアをお探しの方は、ぜひMARISAにお越しください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={BMERIT_URL} label="WEB予約（公式）" variant="light" size="lg" />
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約" variant="outline" size="lg" />
          </div>
          {LINE_URL && (
            <div className="mt-4">
              <a href={LINE_URL} className="text-sm text-sand-300 underline underline-offset-4 hover:text-cream-50 transition-colors">
                LINEでお問い合わせ
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
