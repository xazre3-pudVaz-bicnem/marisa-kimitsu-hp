import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '足つぼ・リフレクソロジーとは？反射区・施術内容をわかりやすく解説｜MARISA 君津店',
  description: '足つぼ（リフレクソロジー）とは、足裏の反射区を刺激するリラクゼーション施術です。各反射区の意味・向いている症状・足つぼの痛みの理由を解説。',
  keywords: ['足つぼ とは', 'リフレクソロジー とは', '足つぼ 反射区', '足つぼ 痛い', '足つぼ むくみ', '君津 足つぼ'],
  openGraph: {
    title: '足つぼ・リフレクソロジーとは？反射区・施術内容をわかりやすく解説｜MARISA 君津店',
    description: '足つぼ・リフレクソロジーとは何か、反射区の意味、向いている人を詳しく解説。君津MARISA。',
    locale: 'ja_JP',
    type: 'article',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: `${SITE_URL}/guide/foot-reflexology` },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '足つぼ・リフレクソロジーとは？反射区・施術内容をわかりやすく解説',
  description: '足つぼ（リフレクソロジー）とは、足裏の反射区を刺激するリラクゼーション施術です。各反射区の意味・向いている症状・足つぼの痛みの理由を解説。',
  datePublished: '2026-06-24',
  dateModified: '2026-06-24',
  image: `${SITE_URL}/og-image.jpg`,
  author: {
    '@type': 'Organization',
    name: 'もみほぐし・MARISA 君津店',
    url: SITE_URL,
    '@id': `${SITE_URL}/#business`,
  },
  publisher: {
    '@type': 'Organization',
    name: 'もみほぐし・MARISA 君津店',
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/og-image.jpg` },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/guide/foot-reflexology` },
  about: { '@type': 'Thing', name: '足つぼ・リフレクソロジー' },
  inLanguage: 'ja',
  keywords: '足つぼ とは, リフレクソロジー とは, 足つぼ 反射区, 足つぼ 痛い, 足つぼ むくみ, 君津 足つぼ',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '足つぼとリフレクソロジーの違いは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '「足つぼ」は東洋医学的な考え方に基づき、足裏の特定ポイント（反射区）を刺激する施術です。リフレクソロジーは欧米から広まった施術で、足裏の反射区を刺激することで体全体のリラクゼーションを促す考え方です。現在の日本のサロンでは両者の技術を組み合わせて施術することが多いです。',
      },
    },
    {
      '@type': 'Question',
      name: '足つぼはなぜ痛いですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '足裏には多くの神経が集まっており、体の疲れ具合・血行状態によっては刺激を強く感じやすくなります。痛みの感じ方には個人差があります。圧の強さはご希望に合わせて調整できますので、施術前・施術中にお気軽にお申し付けください。',
      },
    },
    {
      '@type': 'Question',
      name: '足のむくみには足つぼが向いていますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '足のむくみやだるさが気になる方に足つぼは人気のメニューです。足裏・ふくらはぎへのアプローチによって足全体が軽く感じやすくなるというお声をいただいています。ただし医療的な改善を保証するものではありません。',
      },
    },
    {
      '@type': 'Question',
      name: '30分と60分の違いは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '30分コースは足裏・足首を中心に集中的にケアします。60分コースはふくらはぎ・脚全体まで広範囲にアプローチでき、よりゆったりとした施術です。初めての方は30分からお試しいただき、物足りなければ次回60分にするのもおすすめです。',
      },
    },
    {
      '@type': 'Question',
      name: 'どのくらいの頻度で通うといいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '立ち仕事や長距離の歩行が多い方は週1〜2回、デスクワークで足のだるさが気になる方は月2〜4回が目安です。疲れを感じたタイミングで随時ご利用いただくスタイルでも大丈夫です。',
      },
    },
    {
      '@type': 'Question',
      name: '足つぼの後に気をつけることはありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '施術後は水分を補給することをおすすめします。また、施術後の激しい運動は控え、ゆっくり過ごすことでより効果を感じやすくなります。足が温まった状態を保つよう、足を冷やさないようにしましょう。',
      },
    },
  ],
}

export default function GuideFootReflexologyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ヘッダー */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'ガイド', href: '/guide/what-is-momihogushi' },
              { label: '足つぼ・リフレクソロジーとは' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Guide</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              足つぼ・リフレクソロジーとは？反射区・施術内容を解説
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              足裏の特定ポイントへのアプローチで体全体をケアする「足つぼ」と「リフレクソロジー」。
              その概要・反射区の仕組み・痛みの理由・向いている方・MARISAのメニューをわかりやすく解説します。
            </p>
            {/* 目次 */}
            <nav className="mt-8 bg-cream-50 border border-sand-200 p-5 max-w-xl">
              <p className="text-xs tracking-widest text-greige-400 uppercase mb-3">Contents</p>
              <ol className="space-y-2 text-xs text-stone-700">
                <li><a href="#definition" className="hover:text-brown-500 transition-colors">1. 足つぼ・リフレクソロジーとは</a></li>
                <li><a href="#reflex-zone" className="hover:text-brown-500 transition-colors">2. 反射区とは何か</a></li>
                <li><a href="#why-hurts" className="hover:text-brown-500 transition-colors">3. 足つぼが痛い理由</a></li>
                <li><a href="#swelling" className="hover:text-brown-500 transition-colors">4. むくみ・だるさへの対応</a></li>
                <li><a href="#cold" className="hover:text-brown-500 transition-colors">5. 冷え性と足つぼ</a></li>
                <li><a href="#marisa" className="hover:text-brown-500 transition-colors">6. MARISAの足つぼメニュー</a></li>
                <li><a href="#faq" className="hover:text-brown-500 transition-colors">7. よくある質問</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* 1. 定義 */}
      <section id="definition" className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="What is Foot Reflexology" ja="足つぼ・リフレクソロジーとは" lead="東洋医学と西洋医学の融合" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              足つぼとは、足の裏や側面にある特定の「反射区」と呼ばれるポイントを刺激する施術です。
              東洋医学の考え方では、足裏には体の各器官や部位に対応するポイントがあるとされており、
              これらを刺激することで全身の調子を整えやすくなると考えられています。
            </p>
            <p>
              リフレクソロジー（Reflexology）は20世紀初頭にアメリカで体系化され、その後欧米を中心に広まった施術です。
              「反射療法」とも訳され、足裏の反射区を刺激することで体全体のバランスを整えることを目的としています。
            </p>
            <p>
              東洋の足つぼと西洋のリフレクソロジーは、「足裏の特定ポイントへのアプローチ」という点で共通していますが、
              理論的背景や具体的な手技には違いがあります。
              現在の日本のサロンでは、両方の考え方や技術を取り入れた施術を行っているところが多いです。
            </p>
            <p>
              いずれもリラクゼーション施術であり、医療行為や疾患の治療を目的とするものではありません。
              足の疲れ・むくみ・だるさのリラクゼーションケアとしてご利用ください。
            </p>
          </div>
        </div>
      </section>

      {/* 2. 反射区 */}
      <section id="reflex-zone" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Reflex Zones" ja="足裏の反射区とは何か" lead="各部位への対応ポイント" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              反射区（リフレックスゾーン）とは、足裏・足側面の特定のエリアで、
              体の各器官・部位に対応しているとされるポイントです。
            </p>
            <p>
              足裏の主な反射区のエリアとしては以下のようなものがあります。
            </p>
            <div className="grid gap-3 sm:grid-cols-2 mt-4">
              {[
                { zone: '足指（特に親指）', organ: '頭部・脳・副鼻腔', note: '頭の疲れが気になる方に刺激されるポイント' },
                { zone: '足の付け根（指の下）', organ: '肺・気管支・肩', note: '肩こり・呼吸器系に対応するとされるエリア' },
                { zone: '足裏の中央付近', organ: '消化器系（胃・腸・肝臓など）', note: '内臓全般に対応するとされるエリア' },
                { zone: '足の外側（小指側）', organ: '腕・肩・腰', note: '脊椎・側面への対応ポイント' },
                { zone: '足の内側（親指側）', organ: '脊椎・泌尿器', note: '背骨ラインに沿った対応ポイント' },
                { zone: 'かかと付近', organ: '生殖器・骨盤周り', note: '骨盤周辺への対応エリア' },
              ].map((item, i) => (
                <div key={i} className="bg-cream-50 border border-sand-200 p-4">
                  <p className="text-xs font-medium text-stone-800 mb-1">{item.zone}</p>
                  <p className="text-xs text-brown-500 mb-1">{item.organ}</p>
                  <p className="text-xs text-stone-700 leading-loose">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs bg-cream-50 border border-sand-200 p-4 leading-loose mt-4">
              ※反射区の考え方は東洋医学・リフレクソロジーの理論に基づくものであり、
              医学的に証明されたものではありません。リラクゼーション目的の施術として捉えてください。
            </p>
          </div>
        </div>
      </section>

      {/* 3. なぜ痛い */}
      <section id="why-hurts" className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Why It Hurts" ja="足つぼが痛い理由" lead="痛みの感じ方には個人差があります" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              足つぼ施術を受けると「痛い」と感じる方は多くいらっしゃいます。
              その理由として、足裏には多くの神経・末梢血管が密集しているため、
              圧刺激が伝わりやすいことが挙げられます。
            </p>
            <p>
              また、体の疲れ・血行の状態によっても痛みの感じ方が変わります。
              疲れが蓄積しているときや血行が滞りやすくなっているときは、
              同じ強さの施術でも「いたい」と感じやすくなることがあります。
            </p>
            <p>
              施術者はお客様の反応を見ながら圧の強さを調整します。
              「痛すぎる」と感じた場合はすぐにお申し出ください。
              痛さを我慢することが必ずしも良い結果につながるわけではないため、
              心地よいと感じる範囲での施術が基本です。
            </p>
          </div>
        </div>
      </section>

      {/* 4. むくみ */}
      <section id="swelling" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Swelling & Fatigue" ja="足のむくみ・だるさへの対応" lead="立ち仕事・長時間歩行後に" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              足のむくみは、血液やリンパの流れが滞ることで水分が組織に溜まった状態です。
              長時間の立ち仕事・座り仕事、長距離の歩行などで起こりやすくなります。
              特に夕方になるにつれて足がむくんでくるという方は多くいらっしゃいます。
            </p>
            <p>
              足裏・足首・ふくらはぎへのアプローチは、足全体の血液・リンパの循環を促しやすくします。
              施術後に足が軽く感じやすくなったというお声をよくいただきます。
            </p>
            <p>
              また、ふくらはぎは「第二の心臓」とも呼ばれ、
              血液を心臓に戻すポンプ機能を担っています。
              ここをしっかりほぐすことで、足全体の疲労感が軽くなりやすい傾向があります。
            </p>
            <p className="text-xs bg-cream-50 border border-sand-200 p-4 leading-loose">
              ※足つぼはリラクゼーション施術であり、むくみの医療的な治療や改善を保証するものではありません。
              慢性的なむくみが続く場合は医療機関にご相談ください。
            </p>
          </div>
        </div>
      </section>

      {/* 5. 冷え性 */}
      <section id="cold" className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Cold Feet" ja="冷え性と足つぼ" lead="足を温めることから始める" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              足先の冷えは、末梢血管が収縮して血流が滞りやすい状態で起こります。
              特に女性に多い悩みで、デスクワーク・冬場・冷房の効いたオフィスなどで気になりやすいです。
            </p>
            <p>
              足裏への刺激は、足全体の血流を促しやすくするとされています。
              施術後に「足が温かくなった気がする」「冷えがましになった感じがする」
              というお声をいただくことがあります。
            </p>
            <p>
              施術後は足を冷やさないようにすることで、
              施術で促された血流状態を維持しやすくなります。
              靴下を履いたり、足湯をするのも良い習慣です。
            </p>
          </div>
        </div>
      </section>

      {/* 6. MARISAのメニュー */}
      <section id="marisa" className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="MARISA Menu" ja="MARISAの足つぼメニュー" lead="単独・セットから選べます" />
          <div className="mt-8 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-cream-50 border border-sand-200 p-5">
                <p className="font-medium text-stone-800 mb-1 text-sm">足つぼ 30分</p>
                <p className="text-lg font-light text-brown-500 mb-2">¥3,800</p>
                <p className="text-xs text-stone-700 leading-loose">足裏・足首を中心に集中ケア。短い時間で足の疲れをリセットしたい方に。</p>
              </div>
              <div className="bg-cream-50 border border-sand-200 p-5">
                <p className="font-medium text-stone-800 mb-1 text-sm">足つぼ 60分</p>
                <p className="text-lg font-light text-brown-500 mb-2">¥5,500</p>
                <p className="text-xs text-stone-700 leading-loose">ふくらはぎ・脚全体まで広範囲にアプローチ。むくみ・だるさが強い方におすすめ。</p>
              </div>
            </div>

            <p className="text-sm font-medium text-stone-800 mt-6 mb-3">足つぼセット（もみほぐし＋足つぼ）</p>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { time: '60分', price: '¥5,500' },
                { time: '90分', price: '¥6,900' },
                { time: '120分', price: '¥8,900' },
              ].map((item, i) => (
                <div key={i} className="bg-cream-50 border border-sand-200 p-4 text-center">
                  <p className="text-sm font-medium text-stone-800 mb-1">{item.time}</p>
                  <p className="text-lg font-light text-brown-500">{item.price}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-stone-700 leading-loose mt-2">
              セットコースはもみほぐしで全身をほぐしながら、足つぼで足集中ケアも行うコースです。
              全身のリラクゼーションを深めたい方に特におすすめです。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="FAQ" ja="よくある質問" />
          <div className="mt-8 space-y-4">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="border border-sand-200 bg-sand-100 p-6">
                <p className="text-sm font-medium text-stone-800 mb-3 tracking-wide">
                  <span className="font-en text-brown-400 mr-2">Q.</span>{item.name}
                </p>
                <p className="text-sm text-stone-700 leading-loose pl-5">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* まとめ・関連 */}
      <section className="py-12 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-sm text-stone-700 leading-loose mb-6">
            足つぼは、足の疲れ・むくみ・冷えが気になる方のリラクゼーションに適した施術です。
            単独で受けることも、もみほぐしとのセットも可能です。
          </p>
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: '足つぼメニュー', href: '/menu/foot' },
              { label: 'セットメニュー', href: '/menu/set' },
              { label: '足のだるさ・むくみ', href: '/symptom/leg-fatigue' },
              { label: '冷え・むくみ', href: '/symptom/cold-body' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="border border-sand-300 px-3 py-1.5 text-stone-700 hover:border-brown-300 hover:text-brown-500 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 予約CTA */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">ご予約はこちらから</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">夜0時まで営業・当日予約OK・無料駐車場完備。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton href={BMERIT_URL} label="公式サイトで予約する" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
