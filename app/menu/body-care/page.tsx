import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津のもみほぐし・全身ほぐしメニュー｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」のもみほぐし。首・肩・背中・腰・脚の全身ケアに対応。45分¥3,900〜120分¥8,400まで4コース。肩こり・腰のつらさ・全身疲労に。当日予約OK・夜0時まで営業・無料駐車場。',
  keywords: ['君津 もみほぐし', '君津 マッサージ', '君津 肩こり', '君津 腰痛', '君津 リラクゼーション', '君津 全身ケア'],
  openGraph: {
    title: '君津のもみほぐし・全身ほぐしメニュー｜MARISA 君津店',
    description: '千葉県君津市のリラクゼーションサロン「MARISA」のもみほぐし。45分¥3,900〜。当日予約OK・夜0時まで営業。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/menu/body-care' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'もみほぐしと整体・マッサージの違いは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'もみほぐしはリラクゼーションを目的とした施術です。整体は骨格・関節へのアプローチが中心ですが、もみほぐしは筋肉・筋膜の緊張をほぐすことで疲れやコリをやわらげます。医療行為ではありませんが、日常的な疲れやコリのセルフケアとして多くの方にご利用いただいています。',
      },
    },
    {
      '@type': 'Question',
      name: '施術中、圧の強さは変えてもらえますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、いつでもお申し付けください。施術前のカウンセリングでご希望の強さをお聞きしますが、施術中も随時調整できます。「もう少し強く」「もう少し優しく」などのご要望に柔軟に対応しますので、遠慮なくお声がけください。',
      },
    },
    {
      '@type': 'Question',
      name: '60分と90分はどう違いますか？どちらがおすすめですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '60分コース（合計70分）は全身をバランスよくケアするのに適しています。90分コース（合計100分）は各部位にゆっくり時間をかけてアプローチでき、深部の疲れまでしっかりほぐせます。初めての方や特に疲れが溜まっている方には90分コースをおすすめしています。',
      },
    },
    {
      '@type': 'Question',
      name: '施術後に気をつけることはありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '施術後はこまめに水分を摂ることをおすすめしています。老廃物が排出されやすくなるため、水やお茶を意識的に飲んでください。また、施術直後の激しい運動は控え、なるべくゆっくりお休みいただくと効果が持続しやすくなります。',
      },
    },
    {
      '@type': 'Question',
      name: '初めてでも安心して受けられますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、初めての方も安心してお越しください。施術前に丁寧なカウンセリングを行い、体の状態・気になる部位・圧の強さのご希望をお聞きした上で施術を行います。疑問や不安なことがあれば、何でもお気軽にご相談ください。',
      },
    },
    {
      '@type': 'Question',
      name: 'どの部位でも対応してもらえますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '首・肩・背中・腰・脚など全身に対応しています。特定の部位を集中的にケアしたい場合もカウンセリングでお伝えください。時間配分を調整し、気になる部位を念入りにほぐすことが可能です。',
      },
    },
  ],
}

const courses = [
  {
    name: 'もみほぐし 45分',
    price: '¥3,900',
    desc: '首・肩・背中・腰を中心に集中的にケアするコース。「短時間でもしっかりほぐしたい」「肩と腰だけ重点的に」という方に最適。仕事帰りにサッと立ち寄りたい方にも人気のコースです。',
    badge: '',
  },
  {
    name: 'もみほぐし 60分＋サービス10分',
    price: '¥4,500',
    desc: '全身をバランスよくほぐしながら、お好きな部位に10分のサービスタイムが付く定番コース（合計70分）。初めての方にもっとも選ばれているコースで、全身の疲れをしっかりリセットできます。',
    badge: '人気',
  },
  {
    name: 'もみほぐし 90分＋サービス10分',
    price: '¥6,400',
    desc: '各部位にゆっくり時間をかけてアプローチします（合計100分）。深部の疲れや長年のコリが気になる方、週に一度のしっかりケアを習慣にしたい方に。施術後の体の軽さが段違いです。',
    badge: '',
  },
  {
    name: 'もみほぐし 120分',
    price: '¥8,400',
    desc: '全身をたっぷり時間をかけてケアするプレミアムコース。疲れが溜まりに溜まった方・特別な日の自分へのご褒美・最高のリラクゼーション体験をご希望の方に。',
    badge: '',
  },
]

const parts = [
  {
    area: '首・頸部',
    desc: 'スマートフォンやデスクワークで前傾姿勢が続くと、首の筋肉は常に緊張状態になります。首のコリは頭痛・眼精疲労・肩こりの原因にもつながるため、丁寧にほぐします。首周辺の緊張がほぐれると、頭全体の重さもやわらぐ方が多いです。',
  },
  {
    area: '肩・僧帽筋',
    desc: '肩こりの多くは僧帽筋（肩の筋肉）の緊張によるものです。血行を促進しながら筋肉の硬さをほぐすことで、肩の重さや張りをやわらげます。肩甲骨周りを丁寧にほぐすことで、肩全体の動きが軽くなりやすくなります。',
  },
  {
    area: '背中・脊柱起立筋',
    desc: '背中全体の筋肉をほぐすことで、体の中心部の緊張がゆるみ、全身のだるさや疲れが取れやすくなります。特にデスクワークで長時間同じ姿勢が続く方は、背中に硬さが溜まりやすいため、念入りにケアします。',
  },
  {
    area: '腰・臀部',
    desc: '長時間の座り仕事や立ち仕事で腰の筋肉は固まりやすい部位です。腰周りを重点的にほぐすことで、腰のつらさや重さをやわらげます。臀部（お尻の筋肉）の緊張をほぐすことも、腰まわりの負担軽減につながります。',
  },
  {
    area: '脚・ふくらはぎ',
    desc: '足の筋肉は体の末端にあり、血液やリンパの流れが滞りやすい場所です。ふくらはぎや太ももをほぐすことで、足のだるさ・むくみの負担をやわらげます。立ち仕事や長時間の歩行後のケアに特に効果的です。',
  },
]

const targets = [
  {
    label: 'デスクワーク・PC作業で肩や首が凝っている方',
    desc: '長時間のモニター作業は肩・首・背中に慢性的な緊張をもたらします。週に1度のほぐしでリセットするのがおすすめです。',
  },
  {
    label: '立ち仕事で腰が重い・足がだるい方',
    desc: '長時間の立ち仕事は腰・臀部・ふくらはぎに疲れが蓄積します。全身ケアで下半身からしっかりほぐします。',
  },
  {
    label: '車通勤で肩・首に負担がかかる方',
    desc: '長時間のドライビングは肩・首に大きな緊張をもたらします。帰宅前のほぐしが日々の疲れのリセットに役立ちます。',
  },
  {
    label: '全身の疲れが翌日まで残る方',
    desc: '「休んでも疲れが抜けない」という方は、慢性的な筋肉の緊張が原因の場合が多いです。定期的なほぐしで体の状態を整えます。',
  },
  {
    label: 'スポーツ後のケアをしたい方',
    desc: '運動後の筋肉の緊張をほぐすことで、回復を助けます。スポーツ後の定期ケアとしてご利用いただいている方も多いです。',
  },
  {
    label: '育児・家事の疲れを感じる方',
    desc: '育児・家事は体全体を使う動作が多く、特に腰・肩に負担がかかります。自分だけの時間として施術をお楽しみください。',
  },
  {
    label: '仕事帰りにリフレッシュしたい方',
    desc: '夜0時まで営業しているため、仕事帰りに立ち寄りやすい環境です。短時間の45分コースも好評です。',
  },
  {
    label: '定期的なメンテナンスをしたい方',
    desc: '月に1〜2回の定期ケアで、体の疲れが溜まりにくい状態を保つ方が多くいらっしゃいます。',
  },
  {
    label: '初めてもみほぐしを試してみたい方',
    desc: '初めての方も丁寧なカウンセリングから始めますので、安心してお越しください。60分コースがファーストトライとして人気です。',
  },
  {
    label: '特定の部位だけでなく全身をほぐしたい方',
    desc: '「どこか1か所だけでなく、全身スッキリさせたい」という方には60分以上のコースをおすすめしています。',
  },
]

const steps = [
  {
    step: '01',
    title: 'ご予約',
    desc: 'WEB予約（B-merit・ホットペッパービューティー）または当日のご来店受付。お電話でのご予約も承っています。',
  },
  {
    step: '02',
    title: 'ご来店・受付',
    desc: 'スタッフがお迎えします。施術着へのお着替えをご案内します。駐車場は無料でご利用いただけます。',
  },
  {
    step: '03',
    title: 'カウンセリング',
    desc: 'その日の体の状態・気になる部位・圧の強さのご希望をお聞きします。気になることは何でもお気軽にお伝えください。',
  },
  {
    step: '04',
    title: '施術',
    desc: 'カウンセリングの内容に合わせて施術を行います。施術中も圧の調整は随時可能です。リラックスしてお受けください。',
  },
  {
    step: '05',
    title: 'お会計・次回のご案内',
    desc: '施術後はゆっくりとお休みいただき、次回のご予約のご案内も承ります。お気に入りの施術日・コースを見つけてください。',
  },
]

const faqs = [
  {
    q: 'もみほぐしと整体・マッサージの違いは何ですか？',
    a: 'もみほぐしはリラクゼーションを目的とした施術です。整体は骨格・関節へのアプローチが中心ですが、もみほぐしは筋肉・筋膜の緊張をほぐすことで疲れやコリをやわらげます。医療行為ではありませんが、日常的な疲れやコリのセルフケアとして多くの方にご利用いただいています。',
  },
  {
    q: '施術中、圧の強さは変えてもらえますか？',
    a: 'はい、いつでもお申し付けください。施術前のカウンセリングでご希望の強さをお聞きしますが、施術中も随時調整できます。「もう少し強く」「もう少し優しく」などのご要望に柔軟に対応しますので、遠慮なくお声がけください。お客様が心地よいと感じる施術を目指しています。',
  },
  {
    q: '60分と90分はどう違いますか？どちらを選べばいいですか？',
    a: '60分コースは「ほぐし60分＋お好きな部位10分サービス」の合計70分です。全身をバランスよくケアするのに適しています。90分コースは「ほぐし90分＋お好きな部位10分サービス」の合計100分で、各部位にゆっくり時間をかけてアプローチできます。初めての方や疲れが特に溜まっている方には90分をおすすめしていますが、時間や目的に合わせてお選びください。',
  },
  {
    q: '施術後に気をつけることはありますか？',
    a: '施術後はこまめに水分を摂ることをおすすめしています。老廃物が排出されやすくなるため、水やお茶を意識的に飲んでください。また、施術直後の激しい運動や長時間の飲酒は控え、なるべくゆっくりお休みいただくと効果が持続しやすくなります。',
  },
  {
    q: '初めてでも安心して受けられますか？',
    a: 'はい、初めての方も安心してお越しください。施術前に丁寧なカウンセリングを行い、体の状態・気になる部位・圧の強さのご希望をお聞きした上で施術を行います。「何を話せばいいかわからない」という方も、スタッフが丁寧にお聞きしますので、ご安心ください。',
  },
  {
    q: 'どの部位でも対応してもらえますか？',
    a: '首・肩・背中・腰・脚など全身に対応しています。特定の部位を集中的にケアしたい場合もカウンセリングでお伝えください。時間配分を調整し、気になる部位を念入りにほぐすことが可能です。コース時間によってカバーできる部位が変わりますので、ご希望に応じてご提案します。',
  },
]

export default function BodyCarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ===== Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'メニュー・料金', href: '/menu' }, { label: 'もみほぐし' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Body Care</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800">
              もみほぐし
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              君津のリラクゼーションサロン「もみほぐし・MARISA」のもみほぐしは、首・肩・背中・腰・脚など全身の疲れとコリを丁寧にほぐします。デスクワークや立ち仕事で体がつらい方、全身の疲れが翌日まで残る方、定期的なメンテナンスをお考えの方にご利用いただいています。45分¥3,900〜120分¥8,400まで4コースをご用意。夜0時まで営業・当日予約OK・無料駐車場完備。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Hero Image ===== */}
      <section className="bg-stone-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-0.5">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/LINE_ALBUM_もみほぐしMARISA_260615_6.jpg" alt="君津 もみほぐし 背中 施術" fill className="object-cover object-top" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/LINE_ALBUM_もみほぐしMARISA_260615_21.jpg" alt="君津 マッサージ 手技 クローズアップ" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/LINE_ALBUM_もみほぐしMARISA_260615_22.jpg" alt="君津 もみほぐし 肩甲骨 ほぐし" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== About ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="About"
            ja="MARISAのもみほぐしとは"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              もみほぐしは、筋肉・筋膜の緊張をほぐし、血行を促進することで体の疲れやコリをやわらげるリラクゼーション施術です。整体や鍼灸とは異なり、骨格の矯正や医療行為ではありませんが、日常的な疲れや張り・だるさのケアとして多くの方に支持されています。
            </p>
            <p>
              MARISA 君津店のもみほぐしでは、施術前のカウンセリングを大切にしています。その日の体の状態・気になる部位・圧の強さのご希望をお聞きし、お客様一人ひとりに合わせた施術を行います。「肩と腰を重点的にほぐしてほしい」「今日は優しめにお願いしたい」など、どんなご要望もお気軽にお知らせください。圧の強さは施術中も随時変更でき、心地よい感覚を保ちながら受けていただけます。
            </p>
            <p>
              施術は専用ベッドで行います。うつ伏せ・仰向けを組み合わせ、全身をバランスよくケアします。施術中は照明を落とし、落ち着いたBGMの中でリラックスしていただけます。日常の忙しさを一時忘れ、体と心をゆっくり回復させる時間として多くのお客様にご愛顧いただいています。
            </p>
            <p>
              コースは45分・60分（＋サービス10分）・90分（＋サービス10分）・120分の4種類から、お時間やお悩みに合わせてお選びいただけます。初めての方には、全身をバランスよくほぐせる60分コースをおすすめしています。「まずは試してみたい」という方には45分コースも人気です。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Body Parts ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Areas"
            ja="施術の特徴・ほぐす部位"
            lead="もみほぐしでケアする主な部位と、その特徴をご紹介します。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {parts.map((part) => (
              <div key={part.area} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{part.area}</h3>
                <p className="text-sm text-stone-700 leading-loose">{part.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 border border-sand-200 bg-sand-100 p-6">
            <p className="text-sm text-stone-700 leading-loose">
              コースの時間や当日のご要望に応じて、重点的にケアする部位を調整することができます。カウンセリングでお気軽にご相談ください。特に気になる部位がある場合は、そこを中心にケアする施術も可能です。全身をバランスよくほぐしつつ、特定の部位には念入りにアプローチします。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Who Is It For ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Recommended For"
            ja="こんな方におすすめ"
            lead="もみほぐしが特に喜ばれているお客様のタイプをご紹介します。"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
            {targets.map((t) => (
              <div key={t.label} className="border border-sand-200 bg-cream-50 p-5">
                <div className="flex items-start gap-3 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brown-400 mt-1.5 shrink-0" />
                  <h3 className="text-sm font-medium text-stone-800 leading-snug">{t.label}</h3>
                </div>
                <p className="text-xs text-stone-700 leading-loose pl-4">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 max-w-3xl border border-sand-200 bg-sand-100 p-6">
            <p className="text-sm text-stone-700 leading-loose">
              もみほぐしは年齢・性別を問わず多くの方にご利用いただけます。20代〜60代まで幅広いお客様が定期的に通われています。体のコリや疲れが慢性化している方ほど、定期的なケアを続けることで体の状態が整いやすくなります。月に1〜2回のペースでのご利用をおすすめしています。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Courses ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Courses"
            ja="コース・料金"
            lead="お時間やお悩みに合わせてお選びください。"
            centered
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div key={course.name} className="bg-cream-50 border border-sand-200 p-7 relative">
                {course.badge && (
                  <span className="absolute top-4 right-4 text-[10px] tracking-widest bg-brown-400 text-cream-50 px-2.5 py-1">
                    {course.badge}
                  </span>
                )}
                <h2 className="text-base font-medium text-stone-800 mb-1 tracking-wide">{course.name}</h2>
                <p className="font-en text-2xl text-brown-400 mb-4 font-light">{course.price}</p>
                <p className="text-sm text-stone-700 leading-loose mb-6">{course.desc}</p>
                <ReserveButton href={BMERIT_URL} label="このコースで予約" size="sm" variant="outline" />
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-greige-400 text-center">
            ※ 表示価格は税込みです。
          </p>
        </div>
      </section>

      {/* ===== How to Choose a Course ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Guide"
            ja="コース時間の選び方"
            lead="迷ったときはこちらを参考にしてください。"
          />
          <div className="mt-10 space-y-4">
            <div className="border border-sand-200 bg-cream-50 p-5">
              <div className="flex items-start gap-4">
                <span className="font-en text-xl text-brown-400 font-light shrink-0">45分</span>
                <div>
                  <p className="text-sm font-medium text-stone-800 mb-1">肩・首・背中を集中的にケアしたい方</p>
                  <p className="text-xs text-stone-700 leading-loose">時間が限られている方・仕事の合間に立ち寄りたい方・特定の部位だけをほぐしたい方に。気軽に体験してみたい初めての方にも人気です。</p>
                </div>
              </div>
            </div>
            <div className="border border-brown-300 bg-cream-50 p-5">
              <div className="flex items-start gap-4">
                <span className="font-en text-xl text-brown-400 font-light shrink-0">60分<br /><span className="text-xs text-greige-400">（70分計）</span></span>
                <div>
                  <p className="text-sm font-medium text-stone-800 mb-1">全身をバランスよくケアしたい方・初めての方におすすめ</p>
                  <p className="text-xs text-stone-700 leading-loose">もっとも多くの方にご利用いただいている定番コース。全身をバランスよくほぐしながら、お好きな部位を重点的にケアします。初めての方やリピーターの方の定番として人気です。</p>
                </div>
              </div>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-5">
              <div className="flex items-start gap-4">
                <span className="font-en text-xl text-brown-400 font-light shrink-0">90分<br /><span className="text-xs text-greige-400">（100分計）</span></span>
                <div>
                  <p className="text-sm font-medium text-stone-800 mb-1">全身をじっくりほぐしたい方・疲れが特に溜まっている方に</p>
                  <p className="text-xs text-stone-700 leading-loose">各部位をゆっくりと時間をかけてほぐすことができます。深部の緊張にもアプローチできるため、「なかなか疲れが抜けない」という方に特におすすめです。</p>
                </div>
              </div>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-5">
              <div className="flex items-start gap-4">
                <span className="font-en text-xl text-brown-400 font-light shrink-0">120分</span>
                <div>
                  <p className="text-sm font-medium text-stone-800 mb-1">最高のリラクゼーション体験・特別な日のご褒美に</p>
                  <p className="text-xs text-stone-700 leading-loose">全身をたっぷり時間をかけてケアするプレミアムコース。自分へのご褒美・週末のリフレッシュ・長期的な疲れのリセットに最適です。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Combination ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Combination"
            ja="他のメニューとの組み合わせ"
            lead="もみほぐしに組み合わせることで、より深いケアが可能です。"
          />
          <div className="mt-10 space-y-5">
            <div className="border border-sand-200 bg-cream-50 p-6">
              <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">ヘッドセット（もみほぐし＋ヘッドケア）</h3>
              <p className="text-sm text-stone-700 leading-loose mb-4">
                肩こりと眼精疲労・頭の重さが両方気になる方に。もみほぐしで首・肩・背中をほぐした後、ヘッドケアで頭皮・眼周りにアプローチします。デスクワーク・スマホ疲れの方に特に人気のセットです。
              </p>
              <Link href="/menu/set" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
                ヘッドセットを見る →
              </Link>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">足つぼセット（もみほぐし＋足つぼ）</h3>
              <p className="text-sm text-stone-700 leading-loose mb-4">
                腰のつらさと足のだるさ・むくみが両方気になる方に。もみほぐしで全身の筋肉をほぐした後、足つぼで足裏の反射区を刺激します。立ち仕事の方・夕方に足がパンパンになる方に好評です。
              </p>
              <Link href="/menu/set" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
                足つぼセットを見る →
              </Link>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">もみほぐし＋鍼灸（公式予約限定）</h3>
              <p className="text-sm text-stone-700 leading-loose mb-4">
                特定の部位に集中的にアプローチしたい方に。もみほぐしと鍼灸を組み合わせることで、体の深部へのアプローチが可能です。鍼灸メニューはB-merit公式予約からのみご予約いただけます。
              </p>
              <Link href="/menu/acupuncture" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
                鍼灸メニューを見る →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Flow ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Flow"
            ja="施術の流れ"
            lead="初めての方も安心してご来店いただけます。"
          />
          <div className="mt-10 space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="flex items-start gap-5 border border-sand-200 bg-cream-50 p-5">
                <span className="font-en text-2xl text-brown-400 font-light shrink-0">{s.step}</span>
                <div>
                  <p className="text-sm font-medium text-stone-800 mb-1 tracking-wide">{s.title}</p>
                  <p className="text-xs text-stone-700 leading-loose">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Related Symptoms ===== */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 uppercase mb-4">Related Symptoms</p>
          <p className="text-sm text-stone-700 mb-6">もみほぐしで対応できるお悩みを症状別にご紹介しています。</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl">
            {[
              { label: '肩こり・首こり', href: '/symptom/stiff-shoulder' },
              { label: '腰まわりのつらさ', href: '/symptom/lower-back' },
              { label: '全身疲労・だるさ', href: '/symptom/fatigue' },
              { label: 'デスクワーク疲れ', href: '/symptom/desk-work' },
              { label: 'ストレス・緊張感', href: '/symptom/stress' },
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-sand-200 bg-cream-50 text-center py-4 px-3 text-sm text-stone-700 tracking-wide hover:border-brown-300 hover:text-brown-500 transition-colors"
              >
                {item.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
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

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">
            ご予約はこちらから
          </h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業中・当日予約OK・無料駐車場完備。<br />
            君津でもみほぐしをお探しの方は、ぜひもみほぐし・MARISAへ。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={BMERIT_URL} label="WEB予約（公式）" variant="light" size="lg" />
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
