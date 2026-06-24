import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津のヘッドケア・頭皮マッサージ｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」のヘッドケア。頭皮・側頭部・眼周りを丁寧にケア。15分¥2,000〜30分¥3,000。眼精疲労・頭の重さ・PC疲れに。当日予約OK・夜0時まで営業。',
  keywords: ['君津 ヘッドスパ', '君津 ヘッドケア', '君津 頭皮マッサージ', '君津 眼精疲労', '君津 頭の重さ'],
  openGraph: {
    title: '君津のヘッドケア・頭皮マッサージ｜MARISA 君津店',
    description: '千葉県君津市「MARISA」のヘッドケア。頭皮・側頭部・眼周りを丁寧にケア。15分¥2,000〜。当日予約OK。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/menu/head' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'ヘッドケアはどんな方に向いていますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PC・スマホを長時間使っている方、頭がぼーっとする・重い感じがする方、目の疲れが続いている方、こめかみや頭皮が張った感じがある方に特に向いています。また、「リラックスして眠りにつきたい」という方にも多くご利用いただいています。',
      },
    },
    {
      '@type': 'Question',
      name: '15分と30分の違いは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '15分コースは頭皮・側頭部を短時間で集中ケアします。もみほぐしや他のメニューの前後に追加する場合に最適です。30分コースは頭皮・側頭部・眼周りをしっかりケアできる単体コースです。頭の疲れをまとめてリフレッシュしたい方には30分をおすすめしています。',
      },
    },
    {
      '@type': 'Question',
      name: 'もみほぐしと一緒に受けることはできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、ヘッドセットコース（もみほぐし＋ヘッドケア）として60分・90分・120分のコースをご用意しています。体のコリと頭の疲れをまとめてケアしたい方に特におすすめです。',
      },
    },
    {
      '@type': 'Question',
      name: '頭皮が敏感でも大丈夫ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、頭皮の状態やご希望に合わせて圧を調整いたします。敏感な方・刺激が気になる方はカウンセリングでお知らせください。優しい圧でも十分なリラクゼーション効果を感じていただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '施術はどのような体勢で受けますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ベッドに横になった体勢で受けていただきます。ヘッドケアは髪を水で濡らしませんので、施術後もヘアスタイルをそのままお帰りいただけます。',
      },
    },
  ],
}

const targets = [
  {
    label: 'PC・スマホを長時間使っている方',
    desc: '長時間のモニター作業や画面操作は、目の周囲の筋肉・側頭部・後頭部に慢性的な緊張をもたらします。頭皮からほぐすことで、溜まった疲れをリセットします。',
  },
  {
    label: '頭がぼーっとする・重い感じがする方',
    desc: '頭皮や側頭部の筋肉の緊張が、頭の重さやぼんやり感の原因になることがあります。頭皮のコリをほぐすことで、頭部の血行が促進されます。',
  },
  {
    label: '目の疲れが続いている方',
    desc: '眼精疲労は目の周りの筋肉だけでなく、眉間・こめかみ・後頭部の緊張とも深く関係しています。これらをほぐすことで、目の重さや張り感をやわらげます。',
  },
  {
    label: 'こめかみ・頭皮が張った感じがある方',
    desc: 'こめかみや頭皮の張りは、側頭筋の緊張が原因であることが多いです。指先で丁寧にほぐすことで、頭全体のスッキリ感が得られやすくなります。',
  },
  {
    label: '首から頭にかけて緊張を感じる方',
    desc: '首の後ろから後頭部にかけての筋肉（後頭下筋群）の緊張は、頭全体の重さや目の疲れにつながります。首から頭への流れを意識したケアを行います。',
  },
  {
    label: 'リラックスして眠りにつきたい方',
    desc: '頭皮・頭部の緊張が解れると副交感神経が優位になりやすく、深い眠りにつきやすくなる方が多いです。就寝前のリラックスケアとして人気です。',
  },
  {
    label: '仕事後に気持ちを切り替えたい方',
    desc: 'ヘッドケアは心理的なリフレッシュ効果も高く、仕事モードから切り替えたいときに最適です。仕事帰りの立ち寄りにも使いやすいメニューです。',
  },
  {
    label: 'ヘッドケアを短時間で体験したい方',
    desc: '15分コースでも十分なリフレッシュ感を得られます。「まずは試してみたい」という方にも気軽にお越しいただけます。',
  },
  {
    label: '全身ほぐしに加えて頭もケアしたい方',
    desc: 'もみほぐしだけでは物足りないという方に。ヘッドセットコースで体と頭を同時にケアすることができます。',
  },
  {
    label: '集中力が続かなくなってきた方',
    desc: '頭部の血行を促進することで、頭がクリアになりやすくなります。集中力の低下が気になる方・午後の仕事前のリフレッシュにもご利用いただいています。',
  },
]

const techniques = [
  {
    area: '頭皮全体',
    desc: '指の腹を使い、頭皮を丁寧にほぐします。頭皮の血行を促進し、筋肉の緊張をやわらげます。',
  },
  {
    area: 'こめかみ・側頭部',
    desc: '側頭筋は歯を食いしばる動作にも関わる筋肉で、ストレスや緊張で硬くなりやすい部位です。親指を使ってじっくりほぐします。',
  },
  {
    area: '後頭部・後頭下筋群',
    desc: '首の付け根から後頭部にかけての筋肉群は、頭の重さや眼精疲労と深く関係しています。ここをほぐすことで頭全体がスッキリしやすくなります。',
  },
  {
    area: '眼の周り・眉上',
    desc: '眼周りの筋肉（眼輪筋）や眉の上のポイントは、眼精疲労や頭痛と関連が深い部位です。優しい圧で丁寧にアプローチします。',
  },
]

const steps = [
  {
    step: '01',
    title: 'ご予約',
    desc: 'WEB予約（B-merit・ホットペッパービューティー）または当日のご来店受付。',
  },
  {
    step: '02',
    title: 'ご来店・受付',
    desc: 'スタッフがお迎えします。施術着へのお着替えをご案内します。',
  },
  {
    step: '03',
    title: 'カウンセリング',
    desc: '頭の状態・気になる部位・圧の強さのご希望をお聞きします。頭皮が敏感な方もお知らせください。',
  },
  {
    step: '04',
    title: '施術',
    desc: 'ベッドに横になった体勢で、頭皮・側頭部・眼周りを丁寧にほぐします。施術中も圧の調整は随時可能です。',
  },
  {
    step: '05',
    title: 'お会計',
    desc: '施術後は髪が乱れることがないため、そのままお帰りいただけます。次回のご予約もこちらで承ります。',
  },
]

const faqs = [
  {
    q: 'ヘッドケアはどんな方に向いていますか？',
    a: 'PC・スマホを長時間使っている方、頭がぼーっとする・重い感じがする方、目の疲れが続いている方、こめかみや頭皮が張った感じがある方に特に向いています。また「リラックスして眠りにつきたい」「気持ちをリフレッシュしたい」という方にも多くご利用いただいています。',
  },
  {
    q: '15分と30分の違いは何ですか？',
    a: '15分コースは頭皮・側頭部を短時間で集中ケアします。もみほぐしや他のメニューの追加オプションとして受ける場合に最適です。30分コースは頭皮・側頭部に加えて眼周り・後頭部もしっかりケアできる単体コースです。頭の疲れをまとめてリフレッシュしたい方には30分をおすすめしています。',
  },
  {
    q: 'もみほぐしと一緒に受けることはできますか？',
    a: 'はい、ヘッドセットコース（もみほぐし＋ヘッドケア）として60分・90分・120分のコースをご用意しています。「肩こりも眼精疲労もどちらも気になる」という方に特に好評です。体のコリと頭の疲れをまとめてケアできます。',
  },
  {
    q: '頭皮が敏感でも大丈夫ですか？',
    a: 'はい、頭皮の状態やご希望に合わせて圧を丁寧に調整いたします。敏感な方・刺激が気になる方はカウンセリングでお知らせください。優しい圧でも十分なリラクゼーション効果を感じていただけます。',
  },
  {
    q: '施術はどのような体勢で受けますか？',
    a: 'ベッドに横になった体勢で受けていただきます。ヘッドケアは髪を水で濡らしませんので、施術後もヘアスタイルをそのままにお帰りいただけます。仕事帰りや外出前でも気軽にご利用いただけます。',
  },
]

export default function HeadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ===== Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'メニュー・料金', href: '/menu' }, { label: 'ヘッドケア' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Head Care</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800">
              ヘッドケア・頭皮マッサージ
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              スマートフォン・PC作業・デスクワークで頭や目が疲れていませんか。MARISAのヘッドケアは、頭皮・側頭部・こめかみ・眼周りを中心にほぐし、頭の重さ・眼精疲労・集中力の低下をやわらげます。ヘッドケア単体（15分¥2,000〜30分¥3,000）のほか、もみほぐしとのセットコースもご用意。当日予約OK・夜0時まで営業・無料駐車場完備。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Head Care Image ===== */}
      <section className="bg-stone-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-0.5">
            <div className="relative aspect-[16/7] overflow-hidden">
              <Image src="/LINE_ALBUM_もみほぐしMARISA_260615_25.jpg" alt="君津 ヘッドケア 眼精疲労 施術" fill className="object-cover" />
            </div>
            <div className="relative aspect-[16/7] overflow-hidden">
              <Image src="/LINE_ALBUM_もみほぐしMARISA_260615_26.jpg" alt="君津 ヘッドマッサージ 頭皮ケア" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== About ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="About"
            ja="MARISAのヘッドケアとは"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              現代の生活では、スマートフォンやパソコンの使用が日常化し、目や頭部への負担が増え続けています。長時間の画面作業は、眼球を動かす筋肉だけでなく、側頭部・後頭部・首の後ろの筋肉にも大きな緊張をもたらします。この緊張が慢性化すると、頭の重さ・目の疲れ・集中力の低下・睡眠の質の低下につながることがあります。
            </p>
            <p>
              MARISA 君津店のヘッドケアは、頭皮・側頭筋・後頭下筋群・眼輪筋など、頭部にある筋肉群を丁寧にほぐす施術です。指先や手のひらを使って適度な圧で刺激することで、頭部の血行を促進し、筋肉の緊張をやわらげます。シャンプーや水を使わないドライの施術のため、施術後もそのままお出かけいただけます。
            </p>
            <p>
              「頭が重い」「目の奥がじんわり疲れている」「集中できない」「夜なかなか寝付けない」という方に多くご利用いただいています。ヘッドケア単体（15分・30分）のほか、もみほぐしと組み合わせたヘッドセットコース（60分・90分・120分）もご用意しています。
            </p>
            <p>
              ヘッドケアは着替えたままでも受けられる施術ですが、MARISA では施術着へのお着替えをご案内しており、よりリラックスした状態で施術を受けていただけます。頭皮・眼周り・こめかみを丁寧にほぐし、施術後のスッキリ感をぜひ体感してください。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Techniques ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Technique"
            ja="施術の特徴・ほぐす部位"
            lead="ヘッドケアでアプローチする主な部位をご紹介します。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {techniques.map((t) => (
              <div key={t.area} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{t.area}</h3>
                <p className="text-sm text-stone-700 leading-loose">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 border border-sand-200 bg-sand-100 p-6">
            <p className="text-sm text-stone-700 leading-loose">
              ヘッドケアでは頭部全体を丁寧にほぐしながら、特に気になる部位には念入りにアプローチします。カウンセリング時に「こめかみが特につらい」「眼周りを重点的に」など、ご要望をお知らせください。首から頭皮への流れを意識した施術で、全体的なほぐれ感を高めます。
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
            lead="ヘッドケアが特に喜ばれているお客様のタイプをご紹介します。"
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
        </div>
      </section>

      {/* ===== Courses ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Course"
            ja="コース・料金"
            centered
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-cream-50 border border-sand-200 p-7">
              <h2 className="text-base font-medium text-stone-800 mb-1 tracking-wide">ヘッドケア 15分</h2>
              <p className="font-en text-2xl text-brown-400 mb-4 font-light">¥2,000</p>
              <p className="text-sm text-stone-700 leading-loose mb-6">
                頭皮・側頭部を短時間で集中ケア。仕事の合間や帰宅前のリフレッシュに。もみほぐしの追加オプションとしても人気です。
              </p>
              <ReserveButton href={BMERIT_URL} label="このコースで予約" size="sm" variant="outline" />
            </div>
            <div className="bg-cream-50 border border-brown-300 p-7 relative">
              <span className="absolute top-4 right-4 text-[10px] tracking-widest bg-brown-400 text-cream-50 px-2.5 py-1">おすすめ</span>
              <h2 className="text-base font-medium text-stone-800 mb-1 tracking-wide">ヘッドケア 30分</h2>
              <p className="font-en text-2xl text-brown-400 mb-4 font-light">¥3,000</p>
              <p className="text-sm text-stone-700 leading-loose mb-6">
                頭皮・側頭部・眼周りを丁寧にケアする定番コース。頭の重さ・眼精疲労をまとめてリフレッシュしたい方に。
              </p>
              <ReserveButton href={BMERIT_URL} label="このコースで予約" size="sm" variant="outline" />
            </div>
            <div className="bg-sand-100 border border-sand-200 p-7">
              <p className="text-xs tracking-widest text-greige-400 uppercase mb-3">Recommended</p>
              <h2 className="text-base font-medium text-stone-800 mb-2 tracking-wide">セットコースもおすすめ</h2>
              <p className="text-sm text-stone-700 leading-loose mb-4">
                ヘッドケアともみほぐしを組み合わせたヘッドセットコース（60分¥5,400〜）。体のコリと頭の疲れをまとめてケアしたい方はセットがおすすめです。
              </p>
              <Link
                href="/menu/set"
                className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
              >
                セットコースを見る →
              </Link>
            </div>
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
                <span className="font-en text-xl text-brown-400 font-light shrink-0">15分</span>
                <div>
                  <p className="text-sm font-medium text-stone-800 mb-1">お手軽な頭皮リフレッシュ・追加オプションに</p>
                  <p className="text-xs text-stone-700 leading-loose">もみほぐしや他のメニューの前後に追加する場合に最適。「ちょっとだけ頭もほぐしたい」という方に人気のコースです。</p>
                </div>
              </div>
            </div>
            <div className="border border-brown-300 bg-cream-50 p-5">
              <div className="flex items-start gap-4">
                <span className="font-en text-xl text-brown-400 font-light shrink-0">30分</span>
                <div>
                  <p className="text-sm font-medium text-stone-800 mb-1">頭皮・側頭部・眼周りをしっかりケアしたい方に</p>
                  <p className="text-xs text-stone-700 leading-loose">ヘッドケア単体の定番コース。頭の重さ・眼精疲労・こめかみの張りが気になる方に最適。施術後のスッキリ感が好評です。</p>
                </div>
              </div>
            </div>
            <div className="border border-sand-200 bg-sand-100 p-5">
              <div className="flex items-start gap-4">
                <span className="font-en text-xl text-brown-400 font-light shrink-0 leading-tight">ヘッド<br />セット</span>
                <div>
                  <p className="text-sm font-medium text-stone-800 mb-1">体と頭を同時にケアしたい方に（60分〜）</p>
                  <p className="text-xs text-stone-700 leading-loose">もみほぐし＋ヘッドケアのセットコース（60分¥5,400〜120分¥8,700）。「肩こりも眼精疲労も両方つらい」という方に特に人気です。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Difference from Body Care ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Difference"
            ja="もみほぐしとの違い"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              もみほぐしは首・肩・背中・腰・脚など体幹部や四肢の筋肉を中心にほぐす施術です。一方ヘッドケアは、頭皮・側頭部・後頭部・眼周りに特化した施術です。施術する部位・アプローチが異なるため、お悩みに合わせてどちらか、またはセットでお選びいただくことをおすすめします。
            </p>
            <p>
              「肩こりと眼精疲労が両方つらい」「首から頭にかけて全部ほぐしたい」という方には、もみほぐしとヘッドケアを組み合わせたヘッドセットコースが最適です。体と頭を同時にケアすることで、より高いリラックス効果を実感していただけます。
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="border border-sand-200 bg-cream-50 p-5">
              <p className="text-xs tracking-widest text-greige-400 mb-2">Body Care</p>
              <p className="text-sm font-medium text-stone-800 mb-2">もみほぐし</p>
              <p className="text-xs text-stone-700 leading-loose">首・肩・背中・腰・脚の筋肉をほぐす</p>
            </div>
            <div className="border border-brown-300 bg-cream-50 p-5">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Head Care</p>
              <p className="text-sm font-medium text-stone-800 mb-2">ヘッドケア</p>
              <p className="text-xs text-stone-700 leading-loose">頭皮・側頭部・眼周りをほぐす</p>
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
          <p className="text-sm text-stone-700 mb-6">ヘッドケアに関連するお悩みを症状別にご紹介しています。</p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: '眼精疲労・頭の重さ', href: '/symptom/eye-fatigue' },
              { label: '首こり', href: '/symptom/neck' },
              { label: '頭痛・頭の重さ', href: '/symptom/headache' },
              { label: 'デスクワーク疲れ', href: '/symptom/desk-work' },
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
            君津でヘッドケア・頭皮マッサージをお探しの方は、ぜひもみほぐし・MARISAへ。
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
