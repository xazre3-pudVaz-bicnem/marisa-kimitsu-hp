import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '足つぼ・リフレクソロジーとは？期待できることをわかりやすく｜MARISA 君津店',
  description: '足つぼ・リフレクソロジーとは何か、足のむくみ・だるさへのアプローチ、MARISAの足つぼメニューをわかりやすく解説。君津で足つぼをお探しの方へ。',
  keywords: ['足つぼ とは', 'リフレクソロジー とは', '君津 足つぼ'],
  openGraph: {
    title: '足つぼ・リフレクソロジーとは？期待できることをわかりやすく｜MARISA 君津店',
    description: '足つぼ・リフレクソロジーとは？むくみ・だるさへのアプローチを解説。MARISA 君津店。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/guide/foot-reflexology' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '足つぼとリフレクソロジーは同じですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '似ていますが厳密には異なります。「足つぼ」は東洋医学的な考え方に基づき、足裏の特定ポイント（反射区）を刺激する施術です。リフレクソロジーは欧米から広まった施術で、足裏の反射区を刺激することで体全体のリラクゼーションを促す考え方です。現在の日本のサロンでは両者の技術を組み合わせて施術することが多いです。',
      },
    },
    {
      '@type': 'Question',
      name: '足つぼは痛いですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '足裏には多くの神経が集まっているため、体の疲れ具合によっては刺激を感じる場合があります。圧の強さはご希望に合わせて調整できますので、施術前または施術中にお気軽にお申し付けください。',
      },
    },
    {
      '@type': 'Question',
      name: '足のむくみが気になりますが、足つぼは向いていますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、足のむくみやだるさが気になる方に足つぼは人気のメニューです。足裏へのアプローチによって足全体が軽く感じやすくなるというお声をいただいています。',
      },
    },
  ],
}

export default function GuideFootReflexologyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
              足つぼ・リフレクソロジーとは？
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              足裏の特定ポイントへのアプローチで体全体をケアする「足つぼ」と「リフレクソロジー」。その概要と期待できること、MARISAのメニューをわかりやすく解説します。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="What is Foot Reflexology" ja="足つぼとは" lead="東洋医学から生まれたアプローチ" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              足つぼとは、足の裏や側面にある特定の「反射区」と呼ばれるポイントを刺激する施術です。東洋医学の考え方では、足裏には体の各器官や部位に対応するポイントがあるとされており、これらを刺激することで全身の調子を整えることができると考えられています。
            </p>
            <p>
              一般的に「足つぼ」と呼ばれる施術は、親指などを使って足裏の特定ポイントに圧をかけていく手技が中心です。体の疲れ具合によっては、圧を感じやすい部位とそうでない部位があります。
            </p>
            <p>
              足には非常に多くの神経・毛細血管が集中しており、足裏をしっかりと刺激することで、足全体の血流が促進されやすくなります。一日中立ち仕事をした後や、長時間歩き続けた後の足のだるさ・疲れに、足つぼのアプローチは多くの方に好まれています。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Reflexology" ja="リフレクソロジーとの関係" lead="西洋から広まった足裏施術" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              リフレクソロジー（Reflexology）は20世紀初頭にアメリカで体系化され、その後欧米を中心に広まった施術です。「反射療法」とも訳され、足裏の反射区を刺激することで体全体のバランスを整えることを目的としています。
            </p>
            <p>
              東洋の足つぼと西洋のリフレクソロジーは、「足裏の特定ポイントへのアプローチ」という点で共通していますが、理論的背景や具体的な手技には違いがあります。現在の日本のサロンでは、両方の考え方や技術を取り入れた施術を行っているところが多いです。
            </p>
            <p>
              足裏へのアプローチは、足そのものの疲れだけでなく、全身のリラクゼーションにもつながりやすいとされています。「足を触られているのに体全体が軽くなった気がする」という感想をいただくことも多く、足は体全体のリラクゼーションへの重要なアプローチポイントです。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Swelling & Fatigue" ja="足のむくみ・だるさへのアプローチ" lead="立ち仕事・長時間歩行後に" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              足のむくみは、血液やリンパの流れが滞ることで水分が組織に溜まった状態です。長時間の立ち仕事・座り仕事、長距離の歩行などで起こりやすくなります。特に夕方になるにつれて足がむくんでくるという方は多くいらっしゃいます。
            </p>
            <p>
              足裏・足首・ふくらはぎへのアプローチは、足全体の血液・リンパの循環を促しやすくします。施術後に足が軽く感じやすくなったというお声をよくいただきます。
            </p>
            <p>
              また、足のだるさ（疲労感）は筋肉の疲弊が原因のことが多いです。特にふくらはぎは「第二の心臓」とも呼ばれ、血液を心臓に戻すポンプ機能を担っています。ここをしっかりほぐすことで、足全体の疲労感が軽くなりやすい傾向があります。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="MARISA Menu" ja="MARISAの足つぼメニュー" lead="お悩みに合わせてお選びください" />
          <div className="mt-8 space-y-4">
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">足つぼセット ¥5,500〜</p>
              <p className="text-sm text-stone-700 leading-loose">
                もみほぐしと足つぼを組み合わせたセットコースです。全身のほぐしに加え、足裏・ふくらはぎへの重点アプローチで、体全体のリラクゼーション感が深まります。
              </p>
            </div>
            <div className="bg-cream-50 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">足つぼ単独メニュー</p>
              <p className="text-sm text-stone-700 leading-loose">
                足のみを集中的にケアしたい方向けのメニューもご用意しています。詳細はメニューページまたはホットペッパービューティーにてご確認ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
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

      <section className="py-12 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: '足つぼメニュー', href: '/menu/foot' },
              { label: 'セットメニュー', href: '/menu/set' },
              { label: '足・脚の疲れのケア', href: '/symptom/leg-fatigue' },
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

      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">ご予約はこちらから</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">夜0時まで営業・当日予約OK・無料駐車場完備。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton href="/menu" label="メニューを見る" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
