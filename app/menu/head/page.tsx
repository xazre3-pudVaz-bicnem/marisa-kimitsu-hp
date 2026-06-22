import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津のヘッドスパ・眼精疲労ケア｜MARISA 君津店',
  description:
    '千葉県君津市「MARISA」のヘッドケア・眼精疲労ケアメニュー。頭の重さ・目の疲れ・頭皮のコリをほぐします。ヘッドケア15分¥2,000〜。PC・スマホ疲れの方に。当日予約OK・夜0時まで営業。',
  keywords: ['君津 ヘッドスパ', '君津 ヘッドケア', '君津 眼精疲労', '君津 頭皮 マッサージ'],
  alternates: { canonical: '/menu/head' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'ヘッドケアはどんな施術ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '頭皮・側頭部・後頭部・眼周りの筋肉を中心にほぐす施術です。頭の重さ・目の疲れ・頭痛・集中力の低下などが気になる方に向いています。髪を濡らすシャンプー系のヘッドスパとは異なり、ドライな状態で行う施術です。',
      },
    },
    {
      '@type': 'Question',
      name: 'もみほぐしとヘッドケアは何が違いますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'もみほぐしは主に首・肩・背中・腰・脚といった体幹部・四肢の施術です。ヘッドケアは頭皮・側頭部・後頭部・眼周りに特化した施術です。両方を組み合わせたセットコースもご用意しています。',
      },
    },
    {
      '@type': 'Question',
      name: '眼精疲労にも効果がありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '眼周りの筋肉や側頭部、後頭部のコリをほぐすことで、眼精疲労による目の重さ・頭痛・集中力の低下がやわらぐことが多いです。ただし医療行為ではないため、症状が重い場合は医療機関にもご相談ください。',
      },
    },
    {
      '@type': 'Question',
      name: '服装や持ち物に決まりはありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '特別な準備は必要ありません。施術着にお着替えいただきますので、普段通りの服装でお越しください。ヘッドケアは髪を濡らしませんので、施術後もそのままお帰りいただけます。',
      },
    },
  ],
}

const targets = [
  { label: 'PC・デスクワークで目が疲れている', detail: '長時間のモニター作業は目の周りの筋肉を酷使します。眼周りの緊張をほぐすことで目の重さをやわらげます。' },
  { label: 'スマートフォンを長時間使用している', detail: 'スマホの小さな画面を見続けると、目・首・肩に集中的な緊張が生じます。頭から首にかけて丁寧にほぐします。' },
  { label: '頭が重い・ぼーっとする', detail: '頭皮や側頭部の筋肉の緊張が、頭の重さ・ぼんやり感の原因になることがあります。頭皮のコリをほぐすことで血行がよくなります。' },
  { label: '頭痛が気になる', detail: '緊張型頭痛の多くは首・肩・後頭部の筋肉の硬さが関係しています。医療行為ではありませんが、緊張をほぐすことで症状がやわらぐ場合があります。' },
  { label: '睡眠の質を上げたい', detail: '頭皮・頭部の緊張が解れると副交感神経が優位になり、深い眠りにつきやすくなるといわれています。' },
  { label: '集中力が続かない・頭がすっきりしない', detail: '頭部の血行を促進することで、頭がクリアになりやすくなります。仕事前や作業の合間にもおすすめです。' },
]

const faqs = [
  {
    q: 'ヘッドケアはどんな施術ですか？',
    a: '頭皮・側頭部・後頭部・眼周りの筋肉を中心にほぐすリラクゼーション施術です。指や手のひらを使って頭皮を刺激し、筋肉の緊張をやわらげます。髪を濡らすシャンプー系のヘッドスパとは異なり、施術後もそのままお帰りいただけます。頭の重さ・目の疲れ・頭痛・集中力の低下などが気になる方に向いています。',
  },
  {
    q: 'もみほぐしとヘッドケアは何が違いますか？',
    a: 'もみほぐしは首・肩・背中・腰・脚など体幹部・四肢の疲れやコリをほぐす施術です。ヘッドケアは頭皮・側頭部・後頭部・眼周りに特化した施術です。「体もほぐしながら頭もケアしたい」という方には、もみほぐしとヘッドケアを組み合わせたヘッドセットコースをおすすめしています。',
  },
  {
    q: '眼精疲労にも効果がありますか？',
    a: '眼精疲労は目の周りの筋肉や側頭部・後頭部の緊張が関わっていることが多く、これらをほぐすことで目の重さ・疲れ感がやわらぐことが多いです。ただし、医療行為ではないため、視力に問題がある場合や症状が重い場合は眼科へのご相談もあわせてご検討ください。',
  },
  {
    q: '服装・持ち物に決まりはありますか？',
    a: '特別な準備は必要ありません。施術前に施術着へのお着替えをご案内しますので、普段通りの服装でお越しください。ヘッドケアは髪を水で濡らすことはありませんので、施術後もヘアスタイルをキープしたままお帰りいただけます。',
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
          <Breadcrumb items={[{ label: 'メニュー・料金', href: '/menu' }, { label: 'ヘッド・眼精疲労ケア' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Head & Eye Care</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800">
              ヘッド・眼精疲労ケア
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              スマートフォン・PC作業・デスクワークで頭や目が疲れていませんか。MARISAのヘッドケアは、頭皮・側頭部・眼周りを中心にほぐし、頭の重さ・眼精疲労・集中力の低下をやわらげます。
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

      {/* ===== What is Head Care ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="About"
            ja="MARISAのヘッドケアとは"
          />
          <div className="mt-8 prose-marisa">
            <p>
              現代の生活では、スマートフォンやパソコンの使用が日常化し、目や頭部への負担が増え続けています。長時間の画面作業は、眼球を動かす筋肉だけでなく、側頭部・後頭部・首の後ろの筋肉にも大きな緊張をもたらします。この緊張が慢性化すると、頭の重さ・目の疲れ・集中力の低下・睡眠の質の低下につながることがあります。
            </p>
            <p>
              MARISA 君津店のヘッドケアは、頭皮・側頭筋・後頭下筋群・眼輪筋など、頭部にある筋肉群を丁寧にほぐす施術です。指先や手のひらを使って適度な圧で刺激することで、頭部の血行を促進し、筋肉の緊張をやわらげます。シャンプーや水を使わないドライの施術のため、施術後もそのままお出かけいただけます。
            </p>
            <p>
              「頭が重い」「目の奥が痛い」「集中できない」「夜なかなか寝付けない」という方に、多くご利用いただいています。ヘッドケア単体（15分・30分）のほか、もみほぐしと組み合わせたヘッドセットコース（60分・90分・120分）もご用意しています。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Course ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Course"
            ja="ヘッドケアのコース"
            centered
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-cream-50 border border-sand-200 p-7">
              <h2 className="text-base font-medium text-stone-800 mb-1 tracking-wide">ヘッドケア 15分</h2>
              <p className="font-en text-2xl text-brown-400 mb-4 font-light">¥2,000</p>
              <p className="text-sm text-stone-700 leading-loose mb-6">
                頭皮・側頭部を短時間で集中ケア。仕事の合間や帰宅前のちょっとしたリフレッシュに。
              </p>
              <ReserveButton href={BMERIT_URL} label="このコースで予約" size="sm" variant="outline" />
            </div>
            <div className="bg-cream-50 border border-brown-300 p-7 relative">
              <span className="absolute top-4 right-4 text-[10px] tracking-widest bg-brown-400 text-cream-50 px-2.5 py-1">おすすめ</span>
              <h2 className="text-base font-medium text-stone-800 mb-1 tracking-wide">ヘッドケア 30分</h2>
              <p className="font-en text-2xl text-brown-400 mb-4 font-light">¥3,000</p>
              <p className="text-sm text-stone-700 leading-loose mb-6">
                頭皮・側頭部・眼周りを丁寧にケアする単体コース。仕事の合間や帰宅前に立ち寄りやすい時間設定です。
              </p>
              <ReserveButton href={BMERIT_URL} label="このコースで予約" size="sm" variant="outline" />
            </div>
            <div className="bg-sand-100 border border-sand-200 p-7">
              <p className="text-xs tracking-widest text-greige-400 uppercase mb-3">Recommended</p>
              <h2 className="text-base font-medium text-stone-800 mb-2 tracking-wide">セットコースもおすすめ</h2>
              <p className="text-sm text-stone-700 leading-loose mb-4">
                ヘッドケアともみほぐしを組み合わせたヘッドセットコース（60分・90分・120分）もご用意しています。体のコリと頭の疲れをまとめてケアしたい方はセットがおすすめです。
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

      {/* ===== Who Is It For ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Recommended For"
            ja="こんな方におすすめ"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {targets.map((t) => (
              <div key={t.label} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{t.label}</h3>
                <p className="text-sm text-stone-700 leading-loose">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Difference from Body Care ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Difference"
            ja="もみほぐしとの違い"
          />
          <div className="mt-8 prose-marisa">
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

      {/* ===== Related Symptoms ===== */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 uppercase mb-6">Related Symptoms</p>
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
            夜0時まで営業中・当日予約OK。<br />
            君津でヘッドケア・眼精疲労ケアをお探しの方は、ぜひもみほぐし・MARISAへ。
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
