import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津のもみほぐし・全身ほぐし｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」のもみほぐし。首・肩・背中・腰・脚の全身ケアに対応。45分¥3,900〜。肩こり・腰のつらさ・全身疲労に。当日予約OK・夜0時まで営業。',
  keywords: ['君津 もみほぐし', '君津 マッサージ', '君津 肩こり', '君津 腰痛', '君津 リラクゼーション'],
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
        text: 'もみほぐしはリラクゼーションを目的とした施術です。整体は骨格・関節のアプローチが中心ですが、もみほぐしは筋肉・筋膜をほぐすことで緊張や疲れをやわらげます。医療行為ではありませんが、日常的な疲れやコリのケアに適しています。',
      },
    },
    {
      '@type': 'Question',
      name: '施術中、圧の強さは変えてもらえますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、いつでもお申し付けください。カウンセリング時にご希望の強さをお聞きしますが、施術中も随時調整できます。強め・弱めどちらのご希望にも対応しますので、遠慮なくお声がけください。',
      },
    },
    {
      '@type': 'Question',
      name: '60分と90分はどう違いますか？どちらがおすすめですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '60分コースは全身をバランスよくケアするのに適しています（ほぐし60分＋お好きな部位10分サービスの合計70分）。90分コースは各部位をじっくり時間をかけてほぐすことができ（ほぐし90分＋お好きな部位10分の合計100分）、深部の疲れまでしっかりアプローチできます。初めての方や特に疲れが溜まっている方には90分をおすすめしています。',
      },
    },
    {
      '@type': 'Question',
      name: '施術後に気をつけることはありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '施術後は水分をしっかりとることをおすすめしています。老廃物が体外に排出されやすくなるため、水やお茶を意識的に飲んでください。また、施術直後の激しい運動や長時間の入浴は控え、ゆっくりお休みいただくと効果が続きやすくなります。',
      },
    },
  ],
}

const courses = [
  {
    name: 'もみほぐし 45分',
    price: '¥3,900',
    desc: '首・肩・背中・腰を中心にケアします。「とにかく短時間でほぐしたい」「肩と腰だけ集中的にほぐしてほしい」という方に最適なコースです。',
    badge: '',
  },
  {
    name: 'もみほぐし 60分＋サービス10分',
    price: '¥4,500',
    desc: '全身をバランスよくほぐしながら、お好きな部位に10分のサービスタイムが付く定番コース（合計70分）。仕事帰りに寄る定番コース。最もご利用が多い時間帯です。',
    badge: '人気',
  },
  {
    name: 'もみほぐし 90分＋サービス10分',
    price: '¥6,400',
    desc: '各部位にゆっくり時間をかけてアプローチします（合計100分）。深部の疲れや長年のコリが気になる方、とにかくしっかりほぐしたい方におすすめです。',
    badge: '',
  },
  {
    name: 'もみほぐし 120分',
    price: '¥8,400',
    desc: '全身をじっくりほぐせるスペシャルコース。特別な日のご褒美・疲れが溜まりに溜まった方・最高のリラクゼーション体験をご希望の方に。',
    badge: '',
  },
]

const parts = [
  { area: '首・頸部', desc: 'スマートフォンやデスクワークで前傾姿勢が続くと、首の筋肉は常に緊張状態になります。首のコリは頭痛・眼精疲労・肩こりの原因にもつながるため、丁寧にほぐします。' },
  { area: '肩・僧帽筋', desc: '肩こりの多くは僧帽筋（肩の筋肉）の緊張によるものです。血行を促進しながら筋肉の硬さをほぐすことで、肩の重さや張りをやわらげます。' },
  { area: '背中・脊柱起立筋', desc: '背中全体の筋肉をほぐすことで、体の中心部の緊張がゆるみ、全身のだるさや疲れが取れやすくなります。' },
  { area: '腰・臀部', desc: '長時間の座り仕事や立ち仕事で腰の筋肉は固まりやすい部位です。腰周りを重点的にほぐすことで、腰のつらさや重さをやわらげます。' },
  { area: '脚・ふくらはぎ', desc: '足の筋肉は体の末端にあり、血液やリンパの流れが滞りやすい場所です。ふくらはぎや太ももをほぐすことで、足のだるさ・むくみの負担をやわらげます。' },
]

const targets = [
  'デスクワーク・PC作業で肩や首が凝っている方',
  '長時間の立ち仕事で足や腰がつらい方',
  '全身の疲れやだるさが抜けない方',
  '睡眠の質を上げたい方',
  '定期的に体のメンテナンスをしたい方',
  '腰の重さ・張りが気になる方',
  '体が硬く、動かしにくさを感じる方',
  '仕事帰りにサッとほぐしたい方',
]

const faqs = [
  {
    q: 'もみほぐしと整体・マッサージの違いは何ですか？',
    a: 'もみほぐしはリラクゼーションを目的とした施術です。整体は骨格・関節へのアプローチが中心ですが、もみほぐしは筋肉・筋膜の緊張をほぐすことで疲れやコリをやわらげます。医療行為ではありませんが、日常的な疲れやコリのセルフケアとして多くの方にご利用いただいています。',
  },
  {
    q: '施術中、圧の強さは変えてもらえますか？',
    a: 'はい、いつでもお申し付けください。施術前のカウンセリングでご希望の強さをお聞きしますが、施術中も随時調整できます。「もう少し強く」「もう少し優しく」などのご要望に対応しますので、遠慮なくお声がけください。お客様が心地よいと感じる施術をご提供することが一番の目標です。',
  },
  {
    q: '60分と90分はどう違いますか？どちらがおすすめですか？',
    a: '60分コースは「ほぐし60分＋お好きな部位10分サービス」の合計70分です。全身をバランスよくケアするのに適しています。90分コースは「ほぐし90分＋お好きな部位10分サービス」の合計100分で、各部位にゆっくり時間をかけてアプローチでき、深部の疲れまでしっかりほぐせます。初めての方や疲れが特に溜まっている方には90分をおすすめしていますが、時間や目的に合わせてお選びください。',
  },
  {
    q: '施術後に気をつけることはありますか？',
    a: '施術後はこまめに水分を摂ることをおすすめしています。老廃物が排出されやすくなるため、水やお茶を意識的に飲んでください。また、施術直後の激しい運動や長時間の飲酒は控え、なるべくゆっくりお休みいただくと効果が持続しやすくなります。',
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
              君津のリラクゼーションサロン「もみほぐし・MARISA」のもみほぐしは、首・肩・背中・腰・脚など、全身の疲れとコリを丁寧にほぐします。デスクワークや立ち仕事で体がつらい方、全身の疲れが抜けない方にご利用いただいています。
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

      {/* ===== What is Momihogushi ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="About"
            ja="MARISAのもみほぐしとは"
          />
          <div className="mt-8 prose-marisa">
            <p>
              もみほぐしは、筋肉・筋膜の緊張をほぐし、血行を促進することで体の疲れやコリをやわらげるリラクゼーション施術です。整体や鍼灸とは異なり、骨格の矯正や医療行為ではありませんが、日常的な疲れや張り・だるさのケアとして多くの方に支持されています。
            </p>
            <p>
              MARISA 君津店のもみほぐしでは、施術前のカウンセリングを大切にしています。その日の体の状態・気になる部位・圧の強さのご希望をお聞きし、お客様一人ひとりに合わせた施術を行います。「肩と腰を重点的にほぐしてほしい」「今日は優しめにお願いしたい」など、どんなご要望もお気軽にお知らせください。
            </p>
            <p>
              施術は専用ベッドで行います。うつ伏せ・仰向けを組み合わせ、全身をバランスよくケアします。施術中は照明を落とし、落ち着いたBGMの中でリラックスしていただけます。日常の忙しさを一時忘れ、体と心をゆっくり回復させる時間を提供します。
            </p>
            <p>
              コースは45分・60分・90分・120分の4種類から、お時間やお悩みに合わせてお選びいただけます。初めての方には、全身をバランスよくほぐせる60分コースをおすすめしています。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Courses ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
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

      {/* ===== Body Parts ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Areas"
            ja="施術部位について"
            lead="もみほぐしでケアする主な部位をご紹介します。"
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
              コースの時間や当日のご要望に応じて、重点的にケアする部位を調整することができます。カウンセリングでお気軽にご相談ください。特に気になる部位がある場合は、そこを中心にケアする施術も可能です。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Who Is It For ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Recommended For"
            ja="こんな方におすすめ"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
            {targets.map((t) => (
              <div key={t} className="flex items-start gap-3 bg-cream-50 border border-sand-200 p-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brown-400 mt-2 shrink-0" />
                <p className="text-sm text-stone-700 leading-loose">{t}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 max-w-3xl">
            <p className="text-sm text-stone-700 leading-loose">
              もみほぐしは年齢・性別を問わず多くの方にご利用いただけます。20代〜60代まで幅広いお客様が定期的に通われています。体のコリや疲れが慢性化している方ほど、定期的なケアを続けることで体の状態が整いやすくなります。月に1〜2回のペースでのご利用をおすすめしています。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Related Symptoms ===== */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 uppercase mb-6">Related Symptoms</p>
          <p className="text-sm text-stone-700 mb-6">もみほぐしで対応できるお悩みを症状別にご紹介しています。</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            {[
              { label: '肩こり', href: '/symptom/stiff-shoulder' },
              { label: '腰のつらさ', href: '/symptom/lower-back' },
              { label: '全身疲労', href: '/symptom/fatigue' },
              { label: 'デスクワーク疲れ', href: '/symptom/desk-work' },
              { label: 'ストレス・緊張', href: '/symptom/stress' },
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

      {/* ===== Set Course Suggestion ===== */}
      <section className="py-14 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 uppercase mb-4">Also Recommended</p>
          <h2 className="text-lg font-light text-stone-800 mb-4">もみほぐしと組み合わせて、より深いケアを</h2>
          <p className="text-sm text-stone-700 leading-loose mb-6">
            体のコリをほぐしながら、頭・目の疲れや足のだるさも同時にケアしたい方には、セットコースがおすすめです。もみほぐしにヘッドケアや足つぼを組み合わせることで、より全身のリフレッシュ効果が高まります。
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/menu/set"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
            >
              セットコースを見る →
            </Link>
            <Link
              href="/menu/head"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
            >
              ヘッドケアを見る →
            </Link>
            <Link
              href="/menu/foot"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
            >
              足つぼを見る →
            </Link>
            <Link
              href="/menu/acupuncture"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
            >
              鍼灸メニューを見る →
            </Link>
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
            夜0時まで営業中・当日予約OK。<br />
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
