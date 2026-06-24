import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津のセットコース（ヘッドセット・足つぼセット）｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」のセットコース。もみほぐし+ヘッドのヘッドセット（60分¥5,400〜）、もみほぐし+足つぼの足つぼセット（60分¥5,500〜）をご用意。当日予約OK。',
  keywords: ['君津 セットコース', '君津 ヘッドセット', '君津 足つぼセット', '君津 マッサージ セット', '君津 全身ケア セット'],
  openGraph: {
    title: '君津のセットコース（ヘッドセット・足つぼセット）｜MARISA 君津店',
    description: '千葉県君津市「MARISA」のセットコース。もみほぐし＋ヘッドケア・足つぼを組み合わせたセット。60分¥5,400〜。当日予約OK。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/menu/set' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'ヘッドセットと足つぼセットはどちらが人気ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'どちらも人気ですが、デスクワーク・PC・スマホ疲れの方にはヘッドセット、立ち仕事・足のむくみ・冷えが気になる方には足つぼセットが選ばれることが多いです。「どちらか迷っている」という場合はカウンセリングでご相談ください。',
      },
    },
    {
      '@type': 'Question',
      name: 'セットコースの時間はどちらを選べばいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '初めてセットコースを受けられる方には60分コースをおすすめしています。全身と頭（または足）をバランスよく体験できます。「じっくりほぐしたい」「特に疲れが溜まっている」という方には90分・120分コースをご検討ください。',
      },
    },
    {
      '@type': 'Question',
      name: '60分のヘッドセットの内訳は何分ずつですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ヘッドセット60分はもみほぐし45分＋ヘッドケア15分の構成です。90分はもみほぐし75分＋ヘッドケア15分、120分はもみほぐし105分＋ヘッドケア15分となります。',
      },
    },
    {
      '@type': 'Question',
      name: '単体で予約するよりセットの方がお得ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、セットコースはもみほぐしとヘッドケア（または足つぼ）を組み合わせた価格設定になっており、複数の悩みをまとめてケアできるコストパフォーマンスの高いコースです。複数のお悩みをお持ちの方には特におすすめしています。',
      },
    },
    {
      '@type': 'Question',
      name: 'セットコースも当日予約できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、セットコースも当日予約に対応しています。WEB予約（B-merit・ホットペッパービューティー）からお選びください。満席の場合はご希望に添えないこともございますので、事前のご予約をおすすめしています。',
      },
    },
    {
      '@type': 'Question',
      name: '3種類以上のメニューを組み合わせることはできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '現在のセットコースはもみほぐし＋ヘッドケア、もみほぐし＋足つぼの2種類のセット構成になっています。3種類以上のご希望がある場合はカウンセリング時にご相談ください。',
      },
    },
  ],
}

const headSets = [
  {
    name: 'ヘッドセット 60分',
    detail: 'もみほぐし45分＋ヘッドケア15分',
    price: '¥5,400',
    desc: 'もみほぐし＋ヘッドケアを組み合わせた定番セット。首・肩のコリと頭の重さ・眼精疲労をまとめてケアします。仕事帰りに気軽に受けられる時間設定で、初めての方にも人気のコースです。',
    badge: 'おすすめ',
  },
  {
    name: 'ヘッドセット 90分',
    detail: 'もみほぐし75分＋ヘッドケア15分',
    price: '¥6,700',
    desc: 'もみほぐしとヘッドケアにじっくり時間をかけたコース。全身と頭を余裕をもってケアしたい方に。週末のリフレッシュや疲れが特に溜まっているときにおすすめです。',
    badge: '',
  },
  {
    name: 'ヘッドセット 120分',
    detail: 'もみほぐし105分＋ヘッドケア15分',
    price: '¥8,700',
    desc: 'もみほぐし＋ヘッドケアを最大限に堪能できるプレミアムコース。全身をじっくりほぐしながら頭・眼周りも丁寧にケア。特別な日の自分へのご褒美に。',
    badge: '',
  },
]

const footSets = [
  {
    name: '足つぼセット 60分',
    detail: 'もみほぐし30分＋足つぼ30分',
    price: '¥5,500',
    desc: 'もみほぐし＋足つぼをゆったりペースで体験できるコース。上半身のコリと足のだるさ・むくみをまとめてケアします。立ち仕事の方・夕方に足がパンパンになる方に特に人気です。',
    badge: 'おすすめ',
  },
  {
    name: '足つぼセット 90分',
    detail: 'もみほぐし60分＋足つぼ30分',
    price: '¥6,900',
    desc: '全身のもみほぐしに足つぼを加えた満足度の高いセット。上半身・下半身を一度にたっぷりケアしたい方に。「久しぶりにしっかりほぐしたい」という方にもぴったりです。',
    badge: '',
  },
  {
    name: '足つぼセット 120分',
    detail: 'もみほぐし90分＋足つぼ30分',
    price: '¥8,900',
    desc: '最大時間のもみほぐし＋足つぼセット。全身をじっくりほぐしながら足裏の反射区も丁寧にケア。特別なリラクゼーション体験をご希望の方に最適です。',
    badge: '',
  },
]

const headSetTargets = [
  { label: 'PC・スマホを長時間使っていて首・肩・頭がつらい方' },
  { label: '眼精疲労と肩こりが同時に気になる方' },
  { label: '頭の重さ・ぼーっとする感じが取れない方' },
  { label: '首から頭にかけて全体的にほぐしたい方' },
  { label: 'デスクワークの疲れをまとめてリセットしたい方' },
  { label: '体と頭のリフレッシュを一度に済ませたい方' },
]

const footSetTargets = [
  { label: '立ち仕事で足も腰もつらい方' },
  { label: '夕方になると足のむくみが気になる方' },
  { label: '全身と足の疲れを一度にほぐしたい方' },
  { label: '冷え性で足先が冷たい方' },
  { label: '上半身と下半身の疲れを同時にケアしたい方' },
  { label: '体全体の巡りを整えたい方' },
]

const steps = [
  {
    step: '01',
    title: 'ご予約',
    desc: 'WEB予約（B-merit・ホットペッパービューティー）から希望のセットコースをお選びください。',
  },
  {
    step: '02',
    title: 'ご来店・受付',
    desc: 'スタッフがお迎えします。施術着へのお着替えをご案内します。駐車場は無料でご利用いただけます。',
  },
  {
    step: '03',
    title: 'カウンセリング',
    desc: '体の状態・気になる部位・圧の強さのご希望をお聞きします。セットの時間配分についてのご要望もお気軽にお知らせください。',
  },
  {
    step: '04',
    title: 'もみほぐし',
    desc: 'まず全身のもみほぐしを行います。首・肩・背中・腰・脚など全身の筋肉をほぐします。体が温まったまま次の施術へ移ります。',
  },
  {
    step: '05',
    title: 'ヘッドケア or 足つぼ',
    desc: 'もみほぐしに続いて、ヘッドケアまたは足つぼを行います。体がほぐれた状態で施術を受けることで、より深いリラクゼーション効果を感じていただけます。',
  },
  {
    step: '06',
    title: 'お会計・次回のご案内',
    desc: '施術後はゆっくりとお休みいただき、次回のご予約のご案内も承ります。',
  },
]

const faqs = [
  {
    q: 'ヘッドセットと足つぼセットはどちらが人気ですか？',
    a: 'どちらも多くのお客様にご利用いただいています。デスクワーク・PC・スマホ疲れの方にはヘッドセットが、立ち仕事・足のむくみ・冷えが気になる方には足つぼセットが選ばれることが多いです。「どちらか迷っている」という場合はカウンセリングでその日の体の状態に合わせてご提案します。',
  },
  {
    q: 'セットコースの時間はどちらを選べばいいですか？',
    a: '初めてセットコースを受けられる方には60分コースをおすすめしています。もみほぐしとヘッドケア（または足つぼ）をバランスよく体験できる時間です。「じっくりほぐしたい」「疲れが特に溜まっている」という方には90分コースを、「最高のリラクゼーションを体験したい」という方には120分コースをおすすめしています。',
  },
  {
    q: '60分のヘッドセットの内訳は何分ずつですか？',
    a: 'ヘッドセット60分はもみほぐし45分＋ヘッドケア15分の構成です。90分はもみほぐし75分＋ヘッドケア15分、120分はもみほぐし105分＋ヘッドケア15分となります。足つぼセット60分はもみほぐし30分＋足つぼ30分、90分はもみほぐし60分＋足つぼ30分、120分はもみほぐし90分＋足つぼ30分です。',
  },
  {
    q: '単体で予約するよりセットの方がお得ですか？',
    a: 'はい、セットコースはもみほぐしとヘッドケア（または足つぼ）を組み合わせた価格設定になっており、複数の悩みをまとめてケアできるコストパフォーマンスの高いコースです。「肩こりも眼精疲労も気になる」「腰のつらさも足のだるさも両方ある」という方は、ぜひセットコースをご検討ください。',
  },
  {
    q: 'セットコースも当日予約できますか？',
    a: 'はい、セットコースも当日予約に対応しています。WEB予約（B-merit・ホットペッパービューティー）からお選びください。満席の場合はご希望に添えないこともございますので、週末や夜の時間帯は事前のご予約をおすすめしています。',
  },
  {
    q: '3種類以上のメニューを組み合わせることはできますか？',
    a: '現在のセットコースはもみほぐし＋ヘッドケア、もみほぐし＋足つぼの2種類のセット構成になっています。3種類以上のご希望がある場合はカウンセリング時にご相談ください。お体の状態やご希望の時間に合わせてご提案します。',
  },
]

export default function SetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ===== Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'メニュー・料金', href: '/menu' }, { label: 'セットコース' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Set Courses</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800">
              セットコース
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              もみほぐしにヘッドケアまたは足つぼを組み合わせたセットコース。複数の悩みを一度の来店でまとめてケアしたい方に。ヘッドセット（60分¥5,400〜）はPC・スマホ疲れの方に、足つぼセット（60分¥5,500〜）は立ち仕事・むくみが気になる方に人気です。当日予約OK・夜0時まで営業・無料駐車場完備。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Introduction ===== */}
      <section className="py-16 lg:py-20 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="About"
            ja="セットコースとは"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              忙しい毎日の中で「来れるときにしっかりケアしておきたい」という方のために、MARISAではもみほぐしと他の施術を組み合わせたセットコースをご用意しています。
            </p>
            <p>
              セットコースの最大のメリットは、複数の悩みを一度の施術でまとめてケアできることです。「肩こりがひどいけど、目の疲れもかなりつらい」「腰のだるさもあるし、夕方になると足もパンパンになる」といった複合的なお悩みをお持ちの方に、特におすすめしています。
            </p>
            <p>
              また、単体で2種類の施術を別々に受けるよりも、連続して受けることで体が温まったまま次の施術に移れるため、筋肉がほぐれやすく、より深いリラクゼーション効果を感じていただけます。施術の流れも自然でスムーズなため、お客様からも「セットで受けたら全然違った」というお声を多くいただいています。
            </p>
            <p>
              2つのセットコースをご用意しています。もみほぐし＋ヘッドケアの「ヘッドセット」と、もみほぐし＋足つぼの「足つぼセット」。どちらも60分・90分・120分の3つの時間からお選びいただけます。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Photo Strip ===== */}
      <section className="bg-stone-900 py-1">
        <div className="grid grid-cols-2 gap-0.5">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/LINE_ALBUM_もみほぐしMARISA_260615_6.jpg"
              alt="君津 もみほぐし marisa 背中の施術"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/LINE_ALBUM_もみほぐしMARISA_260615_25.jpg"
              alt="君津 ヘッドケア marisa 頭部ケア施術"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* ===== Head Set ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-2">Head Set</p>
            <h2 className="text-2xl font-light text-stone-800 tracking-wide mb-4">ヘッドセット</h2>
            <p className="text-sm text-stone-700 leading-loose max-w-2xl mb-4">
              もみほぐし＋ヘッドケアの組み合わせ。首・肩のコリと頭の重さ・眼精疲労をまとめてケアします。PC・スマホ疲れ・デスクワークの方に特におすすめです。もみほぐしで首・肩・背中をほぐした後、ヘッドケアで頭皮・側頭部・眼周りにアプローチすることで、体と頭を同時にリフレッシュできます。
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mb-6">
              {headSetTargets.map((t) => (
                <div key={t.label} className="flex items-start gap-2 bg-cream-50 border border-sand-200 p-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brown-400 mt-1.5 shrink-0" />
                  <p className="text-xs text-stone-700 leading-snug">{t.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {headSets.map((course) => (
              <div key={course.name} className="bg-cream-50 border border-sand-200 p-7 relative">
                {course.badge && (
                  <span className="absolute top-4 right-4 text-[10px] tracking-widest bg-brown-400 text-cream-50 px-2.5 py-1">
                    {course.badge}
                  </span>
                )}
                <p className="text-[10px] tracking-widest text-greige-400 mb-1">{course.detail}</p>
                <h3 className="text-base font-medium text-stone-800 mb-1 tracking-wide">{course.name}</h3>
                <p className="font-en text-2xl text-brown-400 mb-4 font-light">{course.price}</p>
                <p className="text-sm text-stone-700 leading-loose mb-6">{course.desc}</p>
                <ReserveButton href={BMERIT_URL} label="このコースで予約" size="sm" variant="outline" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Foot Set ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-2">Foot Set</p>
            <h2 className="text-2xl font-light text-stone-800 tracking-wide mb-4">足つぼセット</h2>
            <p className="text-sm text-stone-700 leading-loose max-w-2xl mb-4">
              もみほぐし＋足つぼの組み合わせ。立ち仕事の疲れ・足のだるさ・むくみ・冷えが気になる方にじっくりアプローチします。もみほぐしで全身の筋肉をほぐした後、足つぼで足裏の反射区を刺激することで、全身の血行とリンパの流れをまとめて整えます。「上半身も下半身も両方ケアしたい」という方に特に好評です。
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mb-6">
              {footSetTargets.map((t) => (
                <div key={t.label} className="flex items-start gap-2 bg-cream-50 border border-sand-200 p-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brown-400 mt-1.5 shrink-0" />
                  <p className="text-xs text-stone-700 leading-snug">{t.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {footSets.map((course) => (
              <div key={course.name} className="bg-cream-50 border border-sand-200 p-7 relative">
                {course.badge && (
                  <span className="absolute top-4 right-4 text-[10px] tracking-widest bg-brown-400 text-cream-50 px-2.5 py-1">
                    {course.badge}
                  </span>
                )}
                <p className="text-[10px] tracking-widest text-greige-400 mb-1">{course.detail}</p>
                <h3 className="text-base font-medium text-stone-800 mb-1 tracking-wide">{course.name}</h3>
                <p className="font-en text-2xl text-brown-400 mb-4 font-light">{course.price}</p>
                <p className="text-sm text-stone-700 leading-loose mb-6">{course.desc}</p>
                <ReserveButton href={BMERIT_URL} label="このコースで予約" size="sm" variant="outline" />
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-greige-400">
            ※ 表示価格は税込みです。
          </p>
        </div>
      </section>

      {/* ===== Course Time Guide ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Guide"
            ja="コース時間の選び方"
            lead="セットコースで迷ったときはこちらを参考にしてください。"
          />
          <div className="mt-10 space-y-6">
            <div>
              <h3 className="text-sm font-medium text-stone-800 mb-3 tracking-wide">ヘッドセットの時間の選び方</h3>
              <div className="space-y-3">
                <div className="border border-sand-200 bg-cream-50 p-4">
                  <div className="flex items-start gap-4">
                    <span className="font-en text-lg text-brown-400 font-light shrink-0">60分</span>
                    <p className="text-xs text-stone-700 leading-loose">もみほぐし45分＋ヘッドケア15分。初めての方・仕事帰りにサッと受けたい方に。肩こりと眼精疲労をバランスよくケアできます。</p>
                  </div>
                </div>
                <div className="border border-brown-300 bg-cream-50 p-4">
                  <div className="flex items-start gap-4">
                    <span className="font-en text-lg text-brown-400 font-light shrink-0">90分</span>
                    <p className="text-xs text-stone-700 leading-loose">もみほぐし75分＋ヘッドケア15分。全身をしっかりほぐしながら頭もケアしたい方に。週末のリフレッシュに人気です。</p>
                  </div>
                </div>
                <div className="border border-sand-200 bg-cream-50 p-4">
                  <div className="flex items-start gap-4">
                    <span className="font-en text-lg text-brown-400 font-light shrink-0">120分</span>
                    <p className="text-xs text-stone-700 leading-loose">もみほぐし105分＋ヘッドケア15分。最大限のリラクゼーションを求める方・特別な日のご褒美に。</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-stone-800 mb-3 tracking-wide">足つぼセットの時間の選び方</h3>
              <div className="space-y-3">
                <div className="border border-sand-200 bg-cream-50 p-4">
                  <div className="flex items-start gap-4">
                    <span className="font-en text-lg text-brown-400 font-light shrink-0">60分</span>
                    <p className="text-xs text-stone-700 leading-loose">もみほぐし30分＋足つぼ30分。初めての方・気軽に試したい方に。全身と足をバランスよくケアできます。</p>
                  </div>
                </div>
                <div className="border border-brown-300 bg-cream-50 p-4">
                  <div className="flex items-start gap-4">
                    <span className="font-en text-lg text-brown-400 font-light shrink-0">90分</span>
                    <p className="text-xs text-stone-700 leading-loose">もみほぐし60分＋足つぼ30分。全身のもみほぐしをしっかり受けながら足つぼも満喫したい方に。</p>
                  </div>
                </div>
                <div className="border border-sand-200 bg-cream-50 p-4">
                  <div className="flex items-start gap-4">
                    <span className="font-en text-lg text-brown-400 font-light shrink-0">120分</span>
                    <p className="text-xs text-stone-700 leading-loose">もみほぐし90分＋足つぼ30分。全身たっぷりほぐしながら足もしっかりケアしたい方・特別なご褒美に。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Why Combine ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Why Combine"
            ja="セットで受けることのメリット"
            lead="単体で受けるよりも、セットで受けることで得られるもの。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cream-50 border border-sand-200 p-8">
              <p className="font-en text-xs tracking-widest text-brown-400 mb-2">Head Set</p>
              <h3 className="text-base font-medium text-stone-800 mb-4 tracking-wide">もみほぐし＋ヘッドケア</h3>
              <p className="text-sm text-stone-700 leading-loose mb-5">
                肩・首のコリをもみほぐしでほぐした後、頭皮・側頭部・眼周りをヘッドケアでケアすることで、デスクワーク・スマホ疲れに対して首から頭まで連続してアプローチできます。「肩も首も頭も全部つらい」という方の複合的なお悩みに、一度の施術でアプローチできます。
              </p>
              <Link
                href="/menu/head"
                className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
              >
                ヘッドケアの詳細を見る →
              </Link>
            </div>
            <div className="bg-cream-50 border border-sand-200 p-8">
              <p className="font-en text-xs tracking-widest text-brown-400 mb-2">Foot Set</p>
              <h3 className="text-base font-medium text-stone-800 mb-4 tracking-wide">もみほぐし＋足つぼ</h3>
              <p className="text-sm text-stone-700 leading-loose mb-5">
                体全体の筋肉の緊張をもみほぐしでほぐしながら、足裏の反射区を足つぼで刺激することで、全身の血行とリンパの流れをまとめて整えます。「上半身は肩こり、下半身は足のだるさ」という方のニーズにぴったりです。施術後の全身の軽さをぜひ体感してください。
              </p>
              <Link
                href="/menu/foot"
                className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
              >
                足つぼの詳細を見る →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Flow ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
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

      {/* ===== Individual Menu Links ===== */}
      <section className="py-14 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 uppercase mb-4">Related Menus &amp; Symptoms</p>
          <p className="text-sm text-stone-700 mb-6">各単体メニューの詳細・関連するお悩みはこちらからご確認いただけます。</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl">
            {[
              { label: 'もみほぐし', href: '/menu/body-care', en: 'Body Care' },
              { label: 'ヘッドケア', href: '/menu/head', en: 'Head Care' },
              { label: '足つぼ・リフレ', href: '/menu/foot', en: 'Foot Reflexology' },
              { label: '肩こり・首こり', href: '/symptom/stiff-shoulder', en: 'Stiff Shoulder' },
              { label: '眼精疲労・頭の重さ', href: '/symptom/eye-fatigue', en: 'Eye Fatigue' },
              { label: '足のだるさ・むくみ', href: '/symptom/leg-fatigue', en: 'Leg Fatigue' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-sand-200 bg-cream-50 p-5 hover:border-brown-300 transition-colors"
              >
                <p className="font-en text-[10px] tracking-widest text-brown-400 mb-1">{item.en}</p>
                <p className="text-sm font-medium text-stone-800 tracking-wide">{item.label} →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
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
            君津でセットコースをお探しの方は、ぜひもみほぐし・MARISAへ。
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
