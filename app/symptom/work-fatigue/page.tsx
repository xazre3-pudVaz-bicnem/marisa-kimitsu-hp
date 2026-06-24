import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, LINE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の仕事疲れ・残業後のリセットケア｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」の仕事疲れケア。残業後の疲れ・職場ストレスで蓄積した体の緊張をもみほぐしでほぐします。夜0時まで営業・当日予約OK。',
  keywords: ['君津 仕事疲れ ケア', '君津 残業後 マッサージ', '君津 職場ストレス ほぐし'],
  openGraph: {
    title: '君津の仕事疲れ・残業後のリセットケア｜MARISA 君津店',
    description:
      '千葉県君津市のリラクゼーションサロン「MARISA」の仕事疲れケア。残業後・仕事帰りの体と心の疲れをもみほぐしでほぐします。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/symptom/work-fatigue' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '仕事帰りに立ち寄れますか？営業時間を教えてください。',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、MARISAは夜0時まで営業しています（最終受付 23:00）。仕事帰りにそのままお立ち寄りいただける時間帯です。当日予約も受け付けていますので、「今日仕事が終わったらそのまま行きたい」という方もお気軽にご連絡ください。',
      },
    },
    {
      '@type': 'Question',
      name: '残業続きで体がバキバキです。どのコースがいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '残業続きで全身が凝り固まっている方には、もみほぐし90分（¥6,400）または120分（¥8,400）がおすすめです。60分では全身のほぐしに時間がかかりすぎて十分に緩まないことがあるため、時間に余裕のある方はぜひ90〜120分をお選びください。',
      },
    },
    {
      '@type': 'Question',
      name: '仕事のストレスで体が緊張しています。もみほぐしは効きますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '仕事のプレッシャーや人間関係のストレスは、体の筋肉の緊張として現れることがよくあります。もみほぐしで全身の筋肉の緊張をほぐすことで、体がリラックスしやすい状態になります。頭まわりの緊張が強い方には、もみほぐしとヘッドケアを組み合わせたヘッドセットコース（60分¥5,400）も好評です。',
      },
    },
    {
      '@type': 'Question',
      name: 'ヘッドスパとの組み合わせはできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、MARISAのヘッドセットコース（ヘッドケア+もみほぐし 60分¥5,400・90分¥6,700）がおすすめです。仕事の考えすぎ・パソコン疲れで頭が重い方に特に好評で、頭・首・肩をセットでほぐすことで「頭が軽くなった」という感覚を得やすくなります。',
      },
    },
    {
      '@type': 'Question',
      name: '仕事帰りで少し急いでいます。60分でもほぐせますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、60分コース（¥4,500）も承っています。「少し時間が限られている」という方でも全身の主要な部位をまとめてほぐします。ただし、特に凝りが強い方・全身まとめてほぐしたい方には90分をおすすめしています。施術前にご希望をお伝えいただければ、限られた時間の中で最も効果的な施術を調整します。',
      },
    },
  ],
}

const causes = [
  {
    title: '長時間のデスクワーク・PC作業',
    desc: '一日中PCの前でタイピング・会議・メールと仕事をしていると、特定の筋肉に疲れが集中します。特に「首・肩・腰」がワンセットで凝り固まる「デスクワーカー型の疲れ」が蓄積しやすくなります。',
  },
  {
    title: '残業・長時間労働の蓄積',
    desc: '日々の残業が続くと、疲れが回復しないまま翌日も仕事を続けることになります。「今日も残業で疲れがたまった」が繰り返されると、週末の休みだけでは追いつかない慢性疲労の状態になりやすくなります。',
  },
  {
    title: '職場のプレッシャー・人間関係',
    desc: 'プレゼン前の緊張・上司からのプレッシャー・職場の人間関係のストレスが体の筋肉を緊張させます。「体は疲れているのに気持ちがオフにならない」という状態は、仕事のストレスが体に蓄積しているサインです。',
  },
  {
    title: '通勤の疲れとのダブル疲れ',
    desc: '電車通勤・車通勤で体が疲れた状態で仕事をし、仕事が終わって帰る頃にはダブルで疲れている——という「通勤+仕事の二重疲れ」が君津エリアからの千葉・東京通勤者に多く見られます。',
  },
  {
    title: '立ち仕事・接客の疲れ',
    desc: '接客・販売・工場の立ち仕事など、長時間立ち続ける仕事の方の疲れは脚・腰に集中します。「仕事帰りは脚が棒のようになる」という方は立ち仕事による疲れが蓄積しています。',
  },
  {
    title: '休憩時間が取れないストレス',
    desc: '業務量が多く、昼休みもまともに取れないような日が続くと、体と心の休憩が慢性的に不足します。「仕事中は無理をして動いているが、家に帰ると動けない」という方に多いパターンです。',
  },
]

const fatigue_patterns = [
  { label: '首・肩の凝り固まり', desc: 'PC作業・ストレスで常に緊張状態の首肩。「仕事中ずっと肩に力が入っている」という方に多い。' },
  { label: '腰の重さ・張り', desc: '長時間座り続けて固まった腰まわり。「椅子から立ち上がると腰が重い」という方。' },
  { label: '頭の重さ・ぼんやり感', desc: 'PC画面を長時間見続けることで目が疲れ、頭全体が重く感じる状態。ヘッドケアが特に有効。' },
  { label: '体全体のだるさ', desc: '「どこが凝っているかわからないけど全身重い」という仕事疲れのサイン。全身ほぐしで一気にリセット。' },
]

const scenes = [
  {
    title: '残業続きで仕事帰りに寄りたい方',
    desc: '夜0時まで営業のMARISAは、残業後でも仕事帰りにそのままお立ち寄りいただけます。「家に帰る前に体をほぐしたい」という方に多くご利用いただいています。',
  },
  {
    title: 'プレッシャー・ストレスで体が緊張している方',
    desc: '仕事のプレッシャーが体の緊張として現れている方。「体と心の両方をオフにしたい」という方に、もみほぐしで体の緊張をほぐしリラックスしやすい状態に整えるサポートをします。',
  },
  {
    title: '週末に疲れをリセットしたい方',
    desc: '「週5日働いて週末だけがリセットタイム」という方に、土日・祝日の施術も承っています。週末に体をほぐして月曜日を軽い体でスタートしたい方に好評です。',
  },
]

const recommendedMenus = [
  {
    tag: '60〜120 min',
    title: 'もみほぐし 60〜120分',
    desc: '60分¥4,500・90分¥6,400・120分¥8,400。仕事帰りの体と心の緊張をじっくりほぐします。残業続きの方には90〜120分がおすすめ。',
    href: '/menu/body-care',
  },
  {
    tag: 'Head Set',
    title: 'ヘッドセットコース',
    desc: '60分¥5,400・90分¥6,700。PC作業の目の疲れ・頭の重さ・首肩コリを一体でほぐします。「頭と体の両方が疲れている」という方に好評。',
    href: '/menu/head',
  },
]

const steps = [
  { step: '01', title: 'ご予約', desc: 'ホットペッパービューティー・当日来店でご予約。当日予約OK・仕事帰りでもOK。' },
  { step: '02', title: 'カウンセリング', desc: '仕事の種類・今日の疲れの状況・特に気になる部位をお聞きします。時間の都合もお聞きします。' },
  { step: '03', title: '首・肩・背中のほぐし', desc: '仕事疲れで最も緊張しやすい首・肩から丁寧にほぐします。' },
  { step: '04', title: '腰・下半身のほぐし', desc: '腰まわり・脚まで全身の疲れをほぐします。圧の強さはご要望に応じて調整。' },
  { step: '05', title: 'アフターケア', desc: '施術後の体の感覚を確認。次回の来店タイミングの目安もご相談に応じます。' },
]

const faqs = [
  {
    q: '仕事帰りに立ち寄れますか？営業時間を教えてください。',
    a: 'はい、MARISAは夜0時まで営業しています（最終受付 23:00）。仕事帰りにそのままお立ち寄りいただける時間帯です。当日予約も受け付けていますので、「今日仕事が終わったらそのまま行きたい」という方もお気軽にご連絡ください。',
  },
  {
    q: '残業続きで体がバキバキです。どのコースがいいですか？',
    a: '残業続きで全身が凝り固まっている方には、もみほぐし90分（¥6,400）または120分（¥8,400）がおすすめです。60分では全身のほぐしに時間がかかりすぎて十分に緩まないことがあるため、時間に余裕のある方はぜひ90〜120分をお選びください。',
  },
  {
    q: '仕事のストレスで体が緊張しています。もみほぐしは効きますか？',
    a: '仕事のプレッシャーや人間関係のストレスは、体の筋肉の緊張として現れることがよくあります。もみほぐしで全身の筋肉の緊張をほぐすことで、体がリラックスしやすい状態になります。頭まわりの緊張が強い方には、もみほぐしとヘッドケアを組み合わせたヘッドセットコース（60分¥5,400）も好評です。',
  },
  {
    q: 'ヘッドスパとの組み合わせはできますか？',
    a: 'はい、MARISAのヘッドセットコース（ヘッドケア+もみほぐし 60分¥5,400・90分¥6,700）がおすすめです。仕事の考えすぎ・パソコン疲れで頭が重い方に特に好評で、頭・首・肩をセットでほぐすことで「頭が軽くなった」という感覚を得やすくなります。',
  },
  {
    q: '仕事帰りで少し急いでいます。60分でもほぐせますか？',
    a: 'はい、60分コース（¥4,500）も承っています。「少し時間が限られている」という方でも全身の主要な部位をまとめてほぐします。ただし、特に凝りが強い方・全身まとめてほぐしたい方には90分をおすすめしています。施術前にご希望をお伝えいただければ、限られた時間の中で最も効果的な施術を調整します。',
  },
]

export default function WorkFatiguePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ===== 1. Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'お悩み別', href: '/symptom' }, { label: '仕事疲れ・残業後のケア' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Work Fatigue Care</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              仕事疲れ・残業後の体の緊張をほぐすリセットケア
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「今日も残業で体がバキバキ」「仕事のプレッシャーで肩に力が入りっぱなし」「週末も疲れが抜けない」——仕事の疲れは、体の筋肉の緊張として蓄積します。MARISAは夜0時まで営業しているので、仕事帰りにそのままお立ち寄りいただけます。もみほぐしで全身の緊張をほぐし、体と心をリセットするサポートをします。
            </p>
          </div>
        </div>
      </div>

      {/* ===== 2. Causes ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Causes"
            ja="仕事疲れの主な原因"
            lead="仕事の疲れは、作業の種類や職場のストレスによってパターンが異なります。"
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

      {/* ===== 3. Fatigue Patterns ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Patterns"
            ja="仕事疲れが出やすい体のパターン"
            lead="仕事の種類によって疲れが出やすい部位が異なります。"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {fatigue_patterns.map((p) => (
              <div key={p.label} className="border border-sand-200 bg-cream-50 p-6">
                <p className="text-xs font-medium text-brown-400 mb-2 tracking-wide">{p.label}</p>
                <p className="text-sm text-stone-700 leading-loose">{p.desc}</p>
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
            ja="こんな方の仕事疲れケアにご利用いただいています"
            lead="君津エリアで仕事疲れにお悩みの方々にご利用いただいています。"
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

      {/* ===== 5. MARISA Point ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Why MARISA" ja="仕事帰りにMARISAをおすすめする理由" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAが仕事帰りの方に特に選ばれている理由は、<strong className="font-medium text-stone-800">夜0時まで営業（最終受付23:00）</strong>という営業時間です。残業後の20時・21時でもお立ち寄りいただけます。
            </p>
            <p>
              当日予約も承っています。「今日仕事が終わったらすぐ行きたい」という方は、お電話・ホットペッパービューティーからのネット予約でも当日に対応しています。
            </p>
            <p>
              無料駐車場完備のため、仕事帰りに車でそのままお立ち寄りいただけます。君津市内はもちろん、木更津・富津方面からもアクセスしやすい立地です。
            </p>
            <p>
              「職場のプレッシャーで肩が張り続けている」「仕事の後は頭も体も重い」——そんな状態をほぐすために、MARISAでは全身もみほぐしとヘッドケアを組み合わせたコースも充実させています。
            </p>
          </div>
        </div>
      </section>

      {/* ===== 6. Recommended Menus ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Menus" ja="仕事疲れにおすすめのメニュー" />
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
            lead="仕事帰りのスケジュールに合わせてコースをお選びください。"
          />
          <div className="mt-8 space-y-4">
            {[
              { time: '60分', label: 'もみほぐし 60分', desc: '¥4,500。時間が限られている仕事帰りに。全身の主要な部位を一通りほぐします。' },
              { time: '90分', label: 'もみほぐし 90分', desc: '¥6,400。残業疲れをしっかりリセットしたい方に。全身の緊張をじっくりほぐします。' },
              { time: '60分', label: 'ヘッドセット 60分', desc: '¥5,400。頭・首・肩を一体でほぐすセットコース。PCで頭を使い続けた日に特におすすめ。' },
              { time: '90分', label: 'ヘッドセット 90分', desc: '¥6,700。頭・首・肩をたっぷりほぐします。「頭も体もリセットしたい」という方に。' },
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
              { label: '慢性疲労・体の重さ', href: '/symptom/chronic-fatigue' },
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
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">仕事帰りは、MARISAへ</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業・当日予約OK・無料駐車場あり。<br />
            残業後でも立ち寄れる、君津のリラクゼーションサロン MARISA。
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
