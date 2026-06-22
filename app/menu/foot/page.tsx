import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の足つぼ・リフレクソロジー｜MARISA 君津店',
  description:
    '千葉県君津市「MARISA」の足つぼ・リフレクソロジーメニュー。立ち仕事の足の疲れ・むくみ・冷え性の方に。足つぼコース30分¥3,800〜。当日予約OK・夜0時まで営業。',
  keywords: ['君津 足つぼ', '君津 リフレクソロジー', '君津 足のむくみ', '君津 冷え性 マッサージ'],
  alternates: { canonical: '/menu/foot' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '足つぼは痛くないですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '反射区によっては刺激を強く感じる場所もありますが、圧の強さはお客様のご要望に合わせて調整できます。「痛気持ちいい」と感じる程度の圧が一般的に効果的とされています。施術中、いつでも強さの調整をお申し付けください。',
      },
    },
    {
      '@type': 'Question',
      name: '足つぼとリフレクソロジーの違いは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '足つぼは東洋医学の経絡・ツボの考え方に基づいた施術です。リフレクソロジーは西洋式で、足裏の反射区（体の各部位と対応した場所）を刺激することで全身のバランスを整えるアプローチです。当店ではこれらのアプローチを組み合わせた施術を行っています。',
      },
    },
    {
      '@type': 'Question',
      name: 'むくみや冷え性にも効果がありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '足裏・ふくらはぎの血行やリンパの流れを促進することで、足のむくみや冷えをやわらげるサポートになることが多いです。ただし医療行為ではないため、症状が重い場合は医療機関にもご相談ください。',
      },
    },
    {
      '@type': 'Question',
      name: '妊娠中でも施術は受けられますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '妊娠中の方への足つぼ施術は安全面を考慮し、ご対応が難しい場合がございます。ご来店前にあらかじめお電話またはホットペッパービューティーのメッセージよりお問い合わせください。',
      },
    },
  ],
}

const reflexAreas = [
  { zone: '足裏全体', effect: '体の各臓器・器官に対応した反射区を刺激することで、全身の血行促進と機能の活性化が期待できます。' },
  { zone: '足の指', effect: '頭部・頸部・目・耳などに対応した反射区です。首のこわばりや目の疲れ感が気になる方にも施術を行います。' },
  { zone: 'かかと周辺', effect: '骨盤・腸・坐骨に対応した反射区が集中しています。腰のつらさや骨盤周りの重さが気になる方に効果的です。' },
  { zone: 'ふくらはぎ', effect: '脚の後面にある筋肉で、「第二の心臓」とも呼ばれます。ふくらはぎをほぐすことで血液の循環が促され、足のだるさ・むくみの負担をやわらげます。' },
]

const targets = [
  '立ち仕事で足がだるい・痛い方',
  '1日の終わりに足がむくみやすい方',
  '足先・足首の冷え性が気になる方',
  'ふくらはぎが張って重い方',
  '全身の疲れをリセットしたい方',
  '体全体のバランスを整えたい方',
]

const faqs = [
  {
    q: '足つぼは痛くないですか？',
    a: '反射区によっては刺激を強く感じる場所もありますが、施術の圧はお客様のご要望に合わせてすべて調整できます。「痛気持ちいい」と感じる程度が効果的とされていますが、強さが気になる場合はいつでもお申し付けください。無理に痛みを我慢せず、お気軽にお声がけいただけます。',
  },
  {
    q: '足つぼとリフレクソロジーの違いは何ですか？',
    a: '足つぼは東洋医学の経絡・ツボの考え方に基づく施術で、ツボへの刺激を通じて体のバランスを整えるアプローチです。リフレクソロジーは西洋式で、足裏の反射区（体の各部位と対応した場所）を刺激することで全身のバランスを整えます。当店ではこれらを組み合わせた施術を行い、足全体と体全体へのアプローチを同時に行っています。',
  },
  {
    q: 'むくみや冷え性にも効果がありますか？',
    a: '足裏・ふくらはぎの筋肉をほぐし、血行やリンパの流れを促進することで、足のむくみや冷えをやわらげるサポートになることが多いです。特に夕方になると足がパンパンになる方、仕事中に足先が冷える方からは「施術後に足が軽くなった」とのお声をいただいています。ただし医療行為ではないため、症状が重い場合は医療機関にもご相談ください。',
  },
  {
    q: 'もみほぐしと足つぼを組み合わせるメリットは何ですか？',
    a: 'もみほぐしで体全体・特に上半身のコリをほぐしながら、足つぼで下半身の血行とリンパの流れを促進できるため、全身のリフレッシュ効果が高まります。「上半身は肩こり、下半身は足のだるさ」という方に特に好評なのが足つぼセットコースです。単体で受けるよりも、施術後の体の軽さをより実感していただけます。',
  },
]

export default function FootPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ===== Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'メニュー・料金', href: '/menu' }, { label: '足つぼ・リフレ' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Foot Reflexology</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800">
              足つぼ・リフレクソロジー
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              立ち仕事やデスクワークで足がだるい、夕方になるとむくみやすい、足先が冷えやすいという方に。MARISAの足つぼ・リフレクソロジーは、足裏の反射区を刺激し、体全体の疲れを奥からほぐします。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Visual ===== */}
      <section className="bg-stone-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-0.5">
            <div className="relative aspect-[16/7] overflow-hidden">
              <Image src="/LINE_ALBUM_もみほぐしMARISA_260615_13.jpg" alt="君津 足つぼ リフレクソロジー 脚のケア" fill className="object-cover" />
            </div>
            <div className="relative aspect-[16/7] overflow-hidden">
              <Image src="/LINE_ALBUM_もみほぐしMARISA_260615_34.jpg" alt="君津 足つぼ リクライニングチェア 施術スペース" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== What is Foot Reflexology ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="About"
            ja="MARISAの足つぼ・リフレとは"
          />
          <div className="mt-8 prose-marisa">
            <p>
              足裏には体の各臓器・器官と対応した「反射区」と呼ばれる場所が集中しています。これらの反射区を適切な圧で刺激することで、全身の血行やリンパの流れを促進し、体全体の疲れをやわらげるのが足つぼ・リフレクソロジーの施術です。
            </p>
            <p>
              「足が体全体の鏡」と言われるように、足裏の状態はその人の体の状態を反映しているとも考えられています。固く張っている部分、触れると刺激を感じる部分は、対応する体の部位に疲れや滞りがある可能性があります。丁寧に施術することで、全身のめぐりが促されます。
            </p>
            <p>
              MARISA 君津店では、足裏だけでなくふくらはぎや足首周辺も含めた施術を行っています。特にふくらはぎは「第二の心臓」とも呼ばれ、この部分の筋肉が動くことで血液が心臓に向かって押し上げられます。ふくらはぎを丁寧にほぐすことで、足全体の血行とリンパの流れが大きく整います。
            </p>
            <p>
              足つぼコース（30分・60分）はもちろん、もみほぐしと組み合わせた「足つぼセット」（60分・90分・120分）もご用意しています。体全体の疲れをとりながら、足元からしっかりリフレッシュしていただけます。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Courses ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Courses"
            ja="足つぼコース"
            lead="お時間やご要望に合わせてお選びください。"
            centered
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-cream-50 border border-sand-200 p-7">
              <h2 className="text-base font-medium text-stone-800 mb-1 tracking-wide">足つぼコース 30分</h2>
              <p className="font-en text-2xl text-brown-400 mb-4 font-light">¥3,800</p>
              <p className="text-sm text-stone-700 leading-loose mb-6">
                足裏の反射区を短時間で集中ケア。仕事帰りの気軽なリフレッシュや、他メニューとのオプション的な利用にも。
              </p>
              <ReserveButton href={BMERIT_URL} label="このコースで予約" size="sm" variant="outline" />
            </div>
            <div className="bg-cream-50 border border-brown-300 p-7 relative">
              <span className="absolute top-4 right-4 text-[10px] tracking-widest bg-brown-400 text-cream-50 px-2.5 py-1">
                おすすめ
              </span>
              <h2 className="text-base font-medium text-stone-800 mb-1 tracking-wide">足つぼコース 60分</h2>
              <p className="font-en text-2xl text-brown-400 mb-4 font-light">¥5,500</p>
              <p className="text-sm text-stone-700 leading-loose mb-6">
                足裏・ふくらはぎをゆったりとしたペースで丁寧にケア。足のだるさ・むくみ・冷えが気になる方に最適。
              </p>
              <ReserveButton href={BMERIT_URL} label="このコースで予約" size="sm" variant="outline" />
            </div>
          </div>
          <p className="mt-6 text-xs text-greige-400 text-center">
            ※ 表示価格は税込みです。
          </p>
          <div className="mt-8 text-center">
            <Link
              href="/menu/set"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
            >
              もみほぐし＋足つぼのセットコースを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Reflex Areas ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Areas"
            ja="施術する部位と効果"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {reflexAreas.map((area) => (
              <div key={area.zone} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{area.zone}</h3>
                <p className="text-sm text-stone-700 leading-loose">{area.effect}</p>
              </div>
            ))}
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
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
            {targets.map((t) => (
              <div key={t} className="flex items-start gap-3 bg-cream-50 border border-sand-200 p-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brown-400 mt-2 shrink-0" />
                <p className="text-sm text-stone-700 leading-loose">{t}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 max-w-3xl">
            <p className="text-sm text-stone-700 leading-loose">
              特に、仕事で長時間立ちっぱなしになる方・歩き回る方・デスクワークで長時間同じ姿勢が続く方は、足に疲れや老廃物が溜まりやすい状態にあります。定期的に足つぼのケアを続けることで、蓄積した疲れを週ごとにリセットしやすくなります。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Combination ===== */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Combination"
            ja="もみほぐしとの組み合わせ"
          />
          <div className="mt-8 prose-marisa">
            <p>
              足つぼ・リフレクソロジーは、もみほぐしと組み合わせることで効果がさらに高まります。もみほぐしで体全体の筋肉の緊張をほぐし、足つぼで足裏の反射区を刺激して全身の血行を整えることで、施術後の体の軽さをより実感していただけます。
            </p>
            <p>
              「肩こりもあるし、足のだるさも気になる」という方に多くご利用いただいているのが足つぼセットコース（60分・90分・120分）です。上半身の疲れと下半身の疲れを一度の施術でまとめてケアできるため、忙しい方や施術頻度が少ない方にも好評です。
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/menu/body-care"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
            >
              もみほぐしの詳細を見る →
            </Link>
            <Link
              href="/menu/set"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
            >
              足つぼセットコースを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Related Symptoms ===== */}
      <section className="py-14 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 uppercase mb-6">Related Symptoms</p>
          <p className="text-sm text-stone-700 mb-6">足つぼ・リフレクソロジーに関連するお悩みを症状別にご紹介しています。</p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: '足のだるさ・むくみ', href: '/symptom/leg-fatigue' },
              { label: '冷え・むくみ', href: '/symptom/cold-body' },
              { label: '通勤・移動の疲れ', href: '/symptom/commute-fatigue' },
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
            君津で足つぼ・リフレクソロジーをお探しの方は、ぜひもみほぐし・MARISAへ。
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
