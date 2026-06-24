import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, LINE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の姿勢・猫背のつらさケア｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」の姿勢ケア。猫背・巻き肩・前傾頭位による首・肩・腰への負担を、もみほぐしで筋肉の緊張をゆるめてやわらげます。当日予約OK。',
  keywords: ['君津 猫背 ケア', '君津 姿勢 もみほぐし', '君津 巻き肩 ケア'],
  openGraph: {
    title: '君津の姿勢・猫背のつらさケア｜MARISA 君津店',
    description:
      '千葉県君津市のリラクゼーションサロン「MARISA」の姿勢ケア。猫背・巻き肩・前傾頭位による首・肩・腰への負担をもみほぐしでやわらげます。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/symptom/posture' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'もみほぐしで姿勢は良くなりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MARISAは医療機関ではなく、姿勢を矯正・治療する施設ではありません。ただし、猫背や巻き肩で緊張しやすい筋肉（胸筋・肩甲骨まわり・股関節まわりなど）をほぐすことで、体が動かしやすく感じやすくなる方は多くいらっしゃいます。姿勢の根本的な見直しには日常習慣の改善も大切です。',
      },
    },
    {
      '@type': 'Question',
      name: '猫背による肩こり・首こりにも対応できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、猫背・巻き肩が原因の肩こり・首こりに対応しています。前傾姿勢によって緊張しやすい首・肩・肩甲骨まわりをほぐします。特に「いつも同じところが凝る」という方は姿勢由来のコリである可能性が高く、全身をまとめてほぐすアプローチが有効です。',
      },
    },
    {
      '@type': 'Question',
      name: '姿勢ケアには何分のコースがおすすめですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '姿勢由来のコリは体の複数箇所に現れやすいため、「もみほぐし60〜90分」がおすすめです。胸まわり・肩甲骨・腰・股関節まわりなど、姿勢に関わる部位をまとめてほぐすことで、全体的な体の重さが軽く感じやすくなります。',
      },
    },
    {
      '@type': 'Question',
      name: '「巻き肩」「ストレートネック」と言われましたが対応できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '巻き肩・ストレートネックの方は特有の筋肉の緊張パターンがあります。巻き肩では胸の筋肉（大胸筋）が縮みやすく、ストレートネックでは首の後ろの筋肉が緊張しやすくなります。MARISAではこれらの筋肉の緊張をほぐすリラクゼーションケアを提供しています。矯正・治療は行っておりません。',
      },
    },
    {
      '@type': 'Question',
      name: 'ヘッドケアとの組み合わせはできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、猫背・前傾頭位の方は首・肩だけでなく頭の重さや頭痛感も感じやすい傾向があります。ヘッドケアを組み合わせたヘッドセットコース（60分¥5,400〜）で、首から頭にかけてまとめてほぐすことも可能です。カウンセリングでご相談ください。',
      },
    },
  ],
}

const habitCauses = [
  {
    title: 'PC・スマホの長時間使用',
    desc: '画面を見続けることで自然と頭が前に出て、肩が内側に丸まる「巻き肩・猫背」の姿勢になります。この姿勢が習慣化すると、胸の筋肉が縮み、背中の筋肉が引き伸ばされた状態が定着します。',
  },
  {
    title: '長時間の着座・デスクワーク',
    desc: '椅子に長時間座り続けると股関節まわりの筋肉（腸腰筋）が縮んで固くなります。この筋肉が硬くなると、立ったときに腰が前傾しにくくなり、全体的に前かがみの姿勢を引き起こしやすくなります。',
  },
  {
    title: '荷物の持ち方・日常の動作習慣',
    desc: '利き手側にいつもバッグを持つ、一方の足に体重をかけて立つ——日常の何気ない習慣が積み重なり、体の左右のバランスに影響を与えます。「肩の高さが左右で違う」という方に多いパターンです。',
  },
  {
    title: '運動不足・体幹の弱さ',
    desc: '姿勢を支える体幹（腹筋・背筋）が弱くなると、楽な前かがみの姿勢になりやすくなります。日常的に体を動かす習慣が少ない方に多く見られます。',
  },
  {
    title: '枕・マットレスの不適合',
    desc: '枕が高すぎる・マットレスが柔らかすぎるなど、睡眠環境が姿勢に影響することがあります。「朝起きると首が痛い・肩が重い」という方は睡眠中の姿勢も関係していることがあります。',
  },
  {
    title: '仕事・作業中の前傾姿勢',
    desc: '料理・DIY・農作業など、長時間前かがみになる作業でも猫背の習慣がつきやすくなります。「ある時期から姿勢が悪くなった」という方は、仕事や趣味の動作が影響していることがあります。',
  },
]

const bodyImpacts = [
  {
    area: '首への負担',
    desc: '頭が前に出る姿勢では首への負担が増大します。本来の姿勢より頭が前に出るだけで、首にかかる負荷が大きくなるといわれています。これが慢性的な首こりの原因になります。',
  },
  {
    area: '肩への負担',
    desc: '巻き肩では肩甲骨が外転した状態が続き、肩まわりの筋肉が不均衡に緊張します。「肩が上に上がりにくい」「腕を上げると肩が痛い」という方に多い姿勢パターンです。',
  },
  {
    area: '腰への負担',
    desc: '猫背の姿勢では腰の自然なカーブ（前弯）が失われ、腰椎への負担が偏ります。長時間の着座後に「腰が重い」「立つのがつらい」と感じる方は、この姿勢パターンが関係していることが多いです。',
  },
]

const scenes = [
  {
    title: 'デスクワーク・事務職の方',
    desc: '長時間PC作業で猫背が定着しやすい方。「気づくと猫背になっている」という方のご利用が多く、もみほぐしで体の緊張をほぐしながら、姿勢に関わる筋肉を整えます。',
  },
  {
    title: '学生・若い世代のスマホ使い過ぎ',
    desc: 'スマートフォンの長時間使用で早くから猫背・ストレートネックになる方が増えています。首・肩の緊張をほぐし、体の負担をやわらげるサポートをします。',
  },
  {
    title: 'お子さんを抱っこする育児中の方',
    desc: '授乳や抱っこで前傾姿勢が続く育児中の方は、肩・背中・腰のコリが溜まりやすい傾向があります。自分の時間が取れない方のリラクゼーション休息時間として定期ご利用いただいています。',
  },
]

const recommendedMenus = [
  {
    tag: '60〜90 min',
    title: 'もみほぐし 60〜90分（背中・肩重点）',
    desc: '60分¥4,500・90分¥6,400。全身の姿勢由来のコリをまとめてほぐします。背中・肩・首・腰を一体でケアしたい方に。',
    href: '/menu/body-care',
  },
  {
    tag: 'Head Set',
    title: 'ヘッドセットコース',
    desc: '60分¥5,400。前傾頭位・猫背で頭の重さも感じやすい方に。もみほぐし＋ヘッドケアで首から頭まで一体でほぐします。',
    href: '/menu/set',
  },
]

const steps = [
  { step: '01', title: 'ご予約', desc: 'ホットペッパービューティー・当日来店でご予約。当日予約OK。' },
  { step: '02', title: 'カウンセリング', desc: '姿勢の癖・職業・日常の動作・特に気になる部位をお聞きします。' },
  { step: '03', title: '胸・肩まわりのほぐし', desc: '猫背・巻き肩で縮みやすい胸まわり・肩甲骨まわりから入念にほぐします。' },
  { step: '04', title: '全身ケア', desc: '首・背中・腰まで全体の緊張をゆるめ、体を動かしやすい状態に整えます。' },
  { step: '05', title: 'アフターケア', desc: '施術後の体の感覚を確認。日常のセルフストレッチや姿勢のポイントをご案内します。' },
]

const faqs = [
  {
    q: 'もみほぐしで姿勢は良くなりますか？',
    a: 'MARISAは医療機関ではなく、姿勢を矯正・治療する施設ではありません。ただし、猫背や巻き肩で緊張しやすい筋肉（胸筋・肩甲骨まわり・股関節まわりなど）をほぐすことで、体が動かしやすく感じやすくなる方は多くいらっしゃいます。姿勢の根本的な見直しには日常習慣の改善も大切です。',
  },
  {
    q: '猫背による肩こり・首こりにも対応できますか？',
    a: 'はい、猫背・巻き肩が原因の肩こり・首こりに対応しています。前傾姿勢によって緊張しやすい首・肩・肩甲骨まわりをほぐします。特に「いつも同じところが凝る」という方は姿勢由来のコリである可能性が高く、全身をまとめてほぐすアプローチが有効です。',
  },
  {
    q: '姿勢ケアには何分のコースがおすすめですか？',
    a: '姿勢由来のコリは体の複数箇所に現れやすいため、「もみほぐし60〜90分」がおすすめです。胸まわり・肩甲骨・腰・股関節まわりなど、姿勢に関わる部位をまとめてほぐすことで、全体的な体の重さが軽く感じやすくなります。',
  },
  {
    q: '「巻き肩」「ストレートネック」と言われましたが対応できますか？',
    a: '巻き肩・ストレートネックの方は特有の筋肉の緊張パターンがあります。巻き肩では胸の筋肉（大胸筋）が縮みやすく、ストレートネックでは首の後ろの筋肉が緊張しやすくなります。MARISAではこれらの筋肉の緊張をほぐすリラクゼーションケアを提供しています。矯正・治療は行っておりません。',
  },
  {
    q: 'ヘッドケアとの組み合わせはできますか？',
    a: 'はい、猫背・前傾頭位の方は首・肩だけでなく頭の重さや頭痛感も感じやすい傾向があります。ヘッドケアを組み合わせたヘッドセットコース（60分¥5,400〜）で、首から頭にかけてまとめてほぐすことも可能です。カウンセリングでご相談ください。',
  },
]

export default function PosturePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ===== 1. Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'お悩み別', href: '/symptom' },
              { label: '姿勢・猫背' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Posture Care</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              姿勢の悩み・猫背が気になる方のリラクゼーションケア
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「気づくと猫背になっている」「肩が前に丸まっている」「背中が固まって姿勢を正すのがつらい」——日常の姿勢の癖は、首・肩・背中・腰に特有の緊張パターンを生み出します。MARISAのもみほぐしは姿勢矯正を行う施設ではありませんが、姿勢の悩みから来る筋肉の緊張をほぐし、体を動かしやすい状態に整えるサポートをします。
            </p>
          </div>
        </div>
      </div>

      {/* ===== 2. Habit Causes ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Daily Habits"
            ja="姿勢が悪くなる日常の習慣"
            lead="姿勢の悩みは、日常の何気ない動作や習慣の積み重ねから生まれます。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {habitCauses.map((c) => (
              <div key={c.title} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{c.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. Body Impacts ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Body Impact"
            ja="姿勢の悩みが体に与える影響"
            lead="猫背・巻き肩の姿勢は首・肩・腰に偏った負担をかけ続けます。"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {bodyImpacts.map((b) => (
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
            ja="こんな方の姿勢ケアにご利用いただいています"
            lead="君津エリアで姿勢のお悩みを抱える方々にご利用いただいています。"
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
          <SectionHeader
            en="Our Approach"
            ja="MARISAのもみほぐしで筋肉の緊張をゆるめる"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAのもみほぐしは、姿勢矯正や骨格調整を行う施設ではありません。リラクゼーションとして、姿勢の癖から来る筋肉の緊張をほぐすアプローチをとっています。
            </p>
            <p>
              猫背・巻き肩で特に緊張しやすい「胸の筋肉（大胸筋）」「肩甲骨まわり（菱形筋・僧帽筋）」「首の後ろ（後頭下筋群）」「腰（脊柱起立筋・腸腰筋まわり）」を中心にほぐします。筋肉の緊張がゆるむことで、体が動かしやすく感じやすくなります。
            </p>
            <p>
              「いつも同じ部位が凝る」という方の多くは、日常の姿勢パターンがコリの根本にあります。施術前のカウンセリングでライフスタイル・職業・姿勢の癖についてお聞きし、その方の体に合ったほぐし方を心がけています。
            </p>
            <p className="border-l-2 border-brown-300 pl-4 text-stone-600 italic">
              ※ 姿勢の根本改善には、日常的なストレッチや運動習慣の見直しも大切です。MARISAのもみほぐしは、その負担をやわらげるサポートとして定期的にご活用いただくことをおすすめします。
            </p>
          </div>
        </div>
      </section>

      {/* ===== 6. Recommended Menus ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menus"
            ja="姿勢ケアにおすすめのメニュー"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
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
            lead="姿勢の悩みの度合いや全身の疲れに応じてコース時間をお選びください。"
          />
          <div className="mt-8 space-y-4">
            {[
              { time: '60分', label: 'もみほぐし 60分', desc: '¥4,500。背中・肩甲骨・肩・首を一体でほぐす定番コース。姿勢ケアの入門として。' },
              { time: '90分', label: 'もみほぐし 90分', desc: '¥6,400。全身をじっくりほぐしたい方に。猫背・巻き肩に関わる全部位をまとめてケア。' },
              { time: '60分', label: 'ヘッドセット 60分', desc: '¥5,400。猫背＋頭の重さが気になる方に。もみほぐし＋ヘッドケアで首から頭まで一体で。' },
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
              { label: '肩甲骨まわりの張り', href: '/symptom/shoulder-blade' },
              { label: '肩こりのお悩み', href: '/symptom/stiff-shoulder' },
              { label: '腰のつらさのお悩み', href: '/symptom/lower-back' },
              { label: 'メニュー・料金', href: '/menu' },
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="border border-sand-300 px-3 py-1.5 text-stone-700 hover:border-brown-300 hover:text-brown-500 transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">
            姿勢のお悩みは、MARISAへ
          </h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業中・当日予約OK・無料駐車場あり。<br />
            君津のリラクゼーションサロン MARISAへ。
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
