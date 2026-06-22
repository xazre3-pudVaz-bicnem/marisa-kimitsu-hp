import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'お悩み別｜君津のもみほぐしサロン MARISA',
  description:
    '君津市のリラクゼーションサロン「MARISA」のお悩み別ページ。肩こり・首こり・腰のつらさ・眼精疲労・足のだるさ・全身疲労・睡眠のお悩みに、もみほぐしや足つぼ・ヘッドケアで対応します。',
  keywords: ['君津 もみほぐし 肩こり', '君津 マッサージ 症状別', '君津 リラクゼーション お悩み'],
  openGraph: {
    title: 'お悩み別｜君津のもみほぐしサロン MARISA',
    description: '君津市のリラクゼーションサロン「MARISA」のお悩み別ページ。肩こり・首こり・腰のつらさ・眼精疲労・足のだるさ・全身疲労・睡眠の質など、お悩みに合わせたケアをご提案します。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/symptom' },
}

const symptoms = [
  {
    en: 'Stiff Shoulder',
    label: '肩こり',
    href: '/symptom/stiff-shoulder',
    desc: 'デスクワーク・スマホ・姿勢の癖による肩の重さや張りを、もみほぐしで整えます。首・肩・背中をバランスよくほぐし、肩まわりの緊張をやわらげます。',
    tags: ['デスクワーク', 'スマホ首', 'PC疲れ', '肩の張り'],
  },
  {
    en: 'Neck Stiffness',
    label: '首こり',
    href: '/symptom/neck',
    desc: '前傾姿勢やスマホ首による首のこわばりや張りに対応します。首と肩・後頭部のつながりを意識しながら丁寧にほぐします。',
    tags: ['スマホ首', '首の張り', '首の動かしにくさ', 'デスクワーク'],
  },
  {
    en: 'Lower Back',
    label: '腰のつらさ',
    href: '/symptom/lower-back',
    desc: '座り仕事・立ち仕事による腰のだるさや重さを、腰・背中・臀部をまとめてほぐすことで負担をやわらげます。',
    tags: ['座り仕事', '立ち仕事', '腰のだるさ', '腰まわりのケア'],
  },
  {
    en: 'Eye & Head Fatigue',
    label: '眼精疲労・頭の重さ',
    href: '/symptom/eye-fatigue',
    desc: 'PC・スマホ・ブルーライトによる目の疲れや頭の重さを、ヘッドケアで整えます。頭皮・側頭部・眼周りをドライで施術します。',
    tags: ['PC疲れ', '目の重さ', 'ヘッドケア', '頭の重さ'],
  },
  {
    en: 'Leg & Foot Fatigue',
    label: '足のだるさ・むくみ',
    href: '/symptom/leg-fatigue',
    desc: '立ち仕事・長時間の着席による足のだるさやむくみを、足つぼとふくらはぎのケアで和らげます。リフレクソロジーの考え方を取り入れた施術です。',
    tags: ['立ち仕事', 'むくみ', '足つぼ', 'ふくらはぎ'],
  },
  {
    en: 'Full Body Fatigue',
    label: '全身疲労',
    href: '/symptom/fatigue',
    desc: '仕事疲れ・慢性的なだるさ・全身の重さを、もみほぐしでリセットします。仕事帰りに通える夜0時まで営業の君津のリラクゼーションサロンです。',
    tags: ['仕事疲れ', '全身だるさ', '仕事帰り', '全身ほぐし'],
  },
  {
    en: 'Sleep & Relaxation',
    label: '睡眠・リラックス',
    href: '/symptom/sleep-relax',
    desc: 'ストレスや緊張で眠れない・リラックスできないという方に、もみほぐしとヘッドケアで心身の緊張をほぐし、より良い休息をサポートします。',
    tags: ['ストレス', '睡眠の質', 'リラックス', '気分転換'],
  },
  {
    en: 'Stress & Tension',
    label: 'ストレス・緊張',
    href: '/symptom/stress',
    desc: '仕事・日常のストレスで張り詰めた体と心をほぐします。筋肉の緊張をゆるめることでリラックスしやすい状態をサポートします。',
    tags: ['ストレス', '緊張', '気分転換', 'リラックス'],
  },
  {
    en: 'Desk Work Fatigue',
    label: 'デスクワーク疲れ',
    href: '/symptom/desk-work',
    desc: '長時間のPC作業・事務仕事による首・肩・背中・腰・眼精疲労を全身のもみほぐしでリセットします。',
    tags: ['PC疲れ', 'デスクワーク', '事務仕事', '全身疲れ'],
  },
  {
    en: 'Headache & Heaviness',
    label: '頭痛・頭の重さ',
    href: '/symptom/headache',
    desc: '首こりや眼精疲労と連動した頭の重さ・頭痛感に、ヘッドケアで対応します。頭皮・側頭部のケアで頭まわりをすっきりさせます。',
    tags: ['頭の重さ', '頭痛感', 'ヘッドケア', 'PC疲れ'],
  },
  {
    en: 'Shoulder Blade',
    label: '肩甲骨まわりの張り',
    href: '/symptom/shoulder-blade',
    desc: '猫背や腕の疲れによる肩甲骨まわりの張りや背中のコリを、もみほぐしで丁寧にほぐします。',
    tags: ['肩甲骨', '背中のコリ', '猫背', 'デスクワーク'],
  },
  {
    en: 'Cold & Swelling',
    label: '冷え・むくみ',
    href: '/symptom/cold-body',
    desc: '血行が滞りやすいデスクワークや立ち仕事の方の冷えやむくみに、もみほぐし・足つぼでアプローチします。',
    tags: ['冷え', 'むくみ', '足つぼ', '血行'],
  },
  {
    en: 'Sports Recovery',
    label: 'スポーツ後の疲れ',
    href: '/symptom/sports',
    desc: 'スポーツやトレーニング後の筋肉の疲れ・だるさを、もみほぐしでリラクゼーションとしてケアします。',
    tags: ['スポーツ後', '筋疲労', 'リカバリー', '運動後'],
  },
  {
    en: 'Work Fatigue',
    label: '仕事疲れ',
    href: '/symptom/work-fatigue',
    desc: '職業による体の疲れ（工場・デスク・販売・介護・運転）に合わせた全身もみほぐしで仕事後の体をリセット。',
    tags: ['仕事後', '工場', 'デスクワーク', '仕事帰り'],
  },
  {
    en: 'Chronic Fatigue',
    label: '慢性疲労・体のだるさ',
    href: '/symptom/chronic-fatigue',
    desc: '疲れが取れない・体が常にだるい状態を、定期的なもみほぐしで体をリセットしやすい状態に整えます。',
    tags: ['慢性疲労', '体のだるさ', '疲れが取れない', '定期ケア'],
  },
]

export default function SymptomIndexPage() {
  return (
    <>
      {/* ===== Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'お悩み別' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Symptoms</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800">
              お悩み別
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              MARISA 君津店では、お客様のお体のお悩みに合わせてもみほぐし・ヘッドケア・足つぼのケアをご提供しています。肩こり・首こり・腰のつらさ・眼精疲労・足のだるさ・全身疲労・睡眠の質など、気になるお悩みのページをご覧ください。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Symptom List ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Symptoms"
            ja="お悩みから探す"
            lead="気になるお悩みをお選びください。それぞれのページで原因・MARISAのアプローチ・おすすめメニューをご確認いただけます。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {symptoms.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group border border-sand-200 bg-cream-50 p-7 hover:border-brown-300 transition-colors block"
              >
                <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-2 group-hover:text-brown-500 transition-colors">
                  {s.en}
                </p>
                <h2 className="text-base font-medium text-stone-800 mb-3 tracking-wide">{s.label}</h2>
                <p className="text-sm text-stone-700 leading-loose mb-5">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {s.tags.map((tag) => (
                    <span key={tag} className="text-xs text-greige-400 border border-sand-200 px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px group-hover:text-brown-500 transition-colors">
                  詳しく見る →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== About MARISA ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="About"
            ja="MARISA 君津店について"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISA 君津店は、千葉県君津市で日常的な体のケアを提供するリラクゼーションサロンです。医療行為は行いませんが、もみほぐし・ヘッドケア・足つぼを通じて、肩こり・首こり・腰のつらさ・眼精疲労・足のだるさ・全身疲労など、日常的なお体のお悩みに寄り添います。
            </p>
            <p>
              「特定の病気があるわけではないが、体がずっとだるい」「仕事で体がへとへとになっている」「定期的に体をほぐしてコンディションを保ちたい」——そのような方に向けて、気軽に通えるリラクゼーションサロンとして営業しています。
            </p>
            <p>
              夜0時まで営業（最終受付23:00）しており、仕事帰りや夜間のご利用も可能です。当日予約にも対応しています。君津市・木更津市・袖ケ浦市など近隣エリアからも多くのお客様にお越しいただいています。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Menu Cross Link ===== */}
      <section className="py-14 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 uppercase mb-6">Menus</p>
          <p className="text-sm text-stone-700 mb-6">メニュー・料金はこちらからご確認ください。</p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'もみほぐし', href: '/menu/body-care' },
              { label: 'ヘッド・眼精疲労ケア', href: '/menu/head' },
              { label: '足つぼ', href: '/menu/foot' },
              { label: 'セットコース', href: '/menu/set' },
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
            ご予約はこちらから
          </h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業中・当日予約OK。<br />
            君津でもみほぐし・リラクゼーションサロンをお探しの方は、ぜひMARISAへ。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton href="/menu" label="メニュー一覧へ" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
