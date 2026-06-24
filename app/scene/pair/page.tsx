import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'ペア・カップル・友人と一緒にもみほぐし｜MARISA 君津店',
  description:
    '君津市でペア・カップル・ご夫婦・友人と一緒にマッサージをお探しなら。MARISA 君津店はベッド3台完備。同じ時間帯での施術に対応（予約状況による）。45分¥3,900〜。当日予約も受付中。',
  keywords: [
    '君津 ペア マッサージ',
    '君津 カップル もみほぐし',
    '君津 夫婦 マッサージ',
    '君津 友人 もみほぐし',
    '君津 グループ マッサージ',
  ],
  openGraph: {
    title: 'ペア・カップル・友人と一緒にもみほぐし｜MARISA 君津店',
    description: 'ベッド3台完備。カップル・ご夫婦・友人でも同じ時間帯に施術を受けていただけます。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://marisa-kimitsu.com/scene/pair' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'ペアで同じ時間に施術を受けられますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '施術ベッドを3台ご用意しているため、2〜3名が同じ時間帯に施術を受けていただける場合があります。ただし、スタッフのシフトや予約状況によっては対応できないこともありますので、事前にご予約の際に「2名同時希望」とお伝えいただくか、お電話でご確認ください。',
      },
    },
    {
      '@type': 'Question',
      name: 'ペア予約はどのようにすればいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'それぞれがホットペッパービューティーまたは公式WEB予約（B-merit）から同じ日時で予約を入れてください。予約時の備考欄に「2名同時希望」と記入いただくと、スタッフが対応できるよう調整します。確実に同じ時間帯でご案内したい場合は、事前にお電話でのご確認もおすすめしています。',
      },
    },
    {
      '@type': 'Question',
      name: 'ベッドは何台ありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '施術ベッドは3台ございます。2名での同時利用はもちろん、状況によっては3名での同時施術も可能です。詳しくはご予約の際にご相談ください。',
      },
    },
    {
      '@type': 'Question',
      name: 'プレゼントとして使えますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、大切な方へのプレゼントとしてのご利用も歓迎しています。誕生日・記念日・母の日・父の日などのギフトとして、「一緒に来よう」とお誘いいただくケースもあります。ご来店いただければ、プレゼントとして一緒にリラクゼーションをお楽しみいただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '子供と一緒に来店できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '小学生以上のお子様はご来店いただける場合があります。ただし、施術は大人向けのメニューが中心となりますので、詳細についてはお電話でお問い合わせください。親子での来店や、保護者の施術中の待機スペースについてもご相談いただけます。',
      },
    },
  ],
}

const scenes = [
  {
    title: 'カップル・夫婦で',
    body: '「一緒にリラックスタイムを過ごしたい」「お互いの体の疲れを癒し合いたい」というカップル・ご夫婦のご来店が多いです。同じ時間帯に施術を受けながら、それぞれのお悩みに合わせたコースを選んでいただけます。デートの締めくくりや記念日のご褒美として活用される方も多いです。',
  },
  {
    title: '友人・同僚と一緒に',
    body: '「仕事帰りに同僚とそのまま来た」「友人と久しぶりに会ってリフレッシュ」という使い方も。2名以上の場合は、ご予約時に人数をお知らせいただければ、一緒の時間帯でご案内できます。施術後に話が弾む、という感想もよくいただきます。',
  },
  {
    title: '親子・家族で',
    body: '「母の日・父の日のプレゼントとして一緒に来た」という親子でのご利用もあります。ご家族みなさんで体のメンテナンスをするのも、一つの健康習慣。年中無休・夜0時まで営業なので、家族の予定に合わせてご来店いただきやすい環境です。',
  },
  {
    title: '誕生日・記念日のご褒美に',
    body: 'パートナーへの誕生日プレゼント、記念日のご褒美としてご利用いただくケースもあります。「マッサージってどこがいいか迷う」という方にも、君津市でご利用しやすい環境を整えています。「プレゼントとして一緒に来てほしい」という使い方も歓迎しています。',
  },
  {
    title: '職場の同僚と仕事帰りに',
    body: '夜0時まで営業しているため、仕事帰りに職場の同僚と一緒にご来店されるケースもあります。「今日は一緒に行こう」と気軽に声をかけて、当日予約でそのままご来店いただけます。',
  },
]

const pairCourses = [
  {
    name: 'もみほぐし 60分',
    price: '¥4,500',
    href: '/menu/body-care',
    desc: '全身をまんべんなくケア。初めての方・ペア利用の定番コース。お二人それぞれに合わせた圧でほぐします。',
  },
  {
    name: 'ヘッドセット 60分',
    price: '¥5,400',
    href: '/menu/set',
    desc: 'もみほぐし＋ヘッドケアの組み合わせ。眼精疲労・頭の重さが気になる方に。デスクワーク疲れに人気。',
    badge: 'おすすめ',
  },
  {
    name: 'もみほぐし 90分',
    price: '¥6,400',
    href: '/menu/body-care',
    desc: 'じっくりほぐしたい方に。記念日や特別な日のリラクゼーションに。全身を時間をかけてほぐします。',
  },
  {
    name: '足つぼセット 60分',
    price: '¥5,500',
    href: '/menu/foot',
    desc: 'もみほぐし＋足つぼ。足のだるさ・むくみが気になる方に。お二人でそれぞれの希望コースを選べます。',
  },
  {
    name: 'もみほぐし 120分',
    price: '¥8,400',
    href: '/menu/body-care',
    desc: '特別な日に全身をじっくりケア。記念日・誕生日のご褒美として利用される方が多いロングコース。',
  },
  {
    name: 'ヘッドセット 90分',
    price: '¥6,700',
    href: '/menu/set',
    desc: 'もみほぐし＋ヘッドケアのロングコース。時間をかけてゆっくりとほぐしたい記念日・週末に。',
  },
]

export default function ScenePairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ===== Page Header ===== */}
      <div className="bg-cream-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb
            items={[
              { label: '地域・シーン別', href: '/area/kimitsu' },
              { label: 'ペアで利用したい方' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Pair Visit</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              カップル・ご夫婦・<br className="hidden sm:block" />
              友人同士でのご来店歓迎。
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              MARISAはベッドを3台ご用意しています。カップル・ご夫婦・お友達同士でも同じ時間帯に施術を受けていただける場合があります（予約状況による・事前確認推奨）。君津市でペア利用できるリラクゼーションサロンをお探しの方へ。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Highlights ===== */}
      <section className="py-12 bg-cream-50 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '3', unit: '台', label: '施術ベッド数' },
              { num: '2〜3', unit: '名', label: '同時対応可能人数' },
              { num: '年中', unit: '無休', label: '定休日なし' },
              { num: '10:00', unit: '〜 24:00', label: '営業時間' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-en text-2xl font-light text-brown-400">
                  {item.num}
                  <span className="text-sm ml-0.5">{item.unit}</span>
                </p>
                <p className="text-xs text-stone-700 tracking-wide mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Why Pair ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="For Pair" ja="ペア利用ができる理由" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAは施術ベッドを3台ご用意しています。スタッフが複数在籍している時間帯には、2〜3名が同じ時間帯に施術を受けていただくことが可能です。ただし、スタッフのシフトや予約状況によっては同じ時間帯での対応が難しい場合もあります。
            </p>
            <div className="bg-sand-100 border border-sand-200 p-5 text-xs text-stone-700 leading-relaxed">
              <p className="font-medium text-stone-800 mb-2">ペア予約をご希望の方へ</p>
              <p>
                確実に同じ時間帯でご案内するため、ご予約の際に備考欄へ「2名同時希望」とご記入ください。または事前にお電話でスタッフへご確認いただくと、よりスムーズにご案内できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Scenes ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Usage Scenes" ja="ペア・グループでのご利用シーン" />
          <div className="mt-8 space-y-5">
            {scenes.map((s) => (
              <div key={s.title} className="border border-sand-200 bg-cream-50 p-6">
                <h3 className="text-sm font-medium text-stone-800 mb-3 tracking-wide">{s.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== How to Book ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="How to Book" ja="ペア予約の方法" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <div className="border border-sand-200 p-6">
              <h3 className="font-medium text-stone-800 mb-3 tracking-wide">
                1. それぞれWEB予約で同じ時間帯を選ぶ
              </h3>
              <p>
                2名でのご利用の場合は、それぞれがホットペッパービューティーまたは公式WEB予約（B-merit）から同じ日時で予約を入れてください。予約時の備考欄に「2名同時希望」と記入いただくと、スタッフが対応できるよう調整します。
              </p>
            </div>
            <div className="border border-sand-200 p-6">
              <h3 className="font-medium text-stone-800 mb-3 tracking-wide">
                2. コースはそれぞれ別々でも大丈夫
              </h3>
              <p>
                一方が「もみほぐし60分」、もう一方が「ヘッドセット60分」など、コースが異なっても対応できます。それぞれのお悩みに合わせたコースをお選びください。施術時間が違う場合の調整についてはご来店時にご相談ください。
              </p>
            </div>
            <div className="border border-sand-200 p-6">
              <h3 className="font-medium text-stone-800 mb-3 tracking-wide">
                3. 来店後のカウンセリングでご要望を伝える
              </h3>
              <p>
                ご来店後、それぞれのカウンセリングで体の状態やご要望をお伝えください。強さ・集中してほぐしたい部位・施術中の環境など、細かいご希望にもできる限りお応えします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Menu Combinations ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Courses"
            ja="ペア利用におすすめのコース"
            lead="それぞれのお悩みに合わせて組み合わせ自由。同じコースでも、別のコースでもOKです。"
            centered
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pairCourses.map((c) => (
              <Link
                key={c.name}
                href={c.href}
                className="group relative border border-sand-200 bg-cream-50 p-6 hover:border-brown-300 transition-colors"
              >
                {c.badge && (
                  <span className="absolute top-5 right-5 text-[10px] tracking-widest bg-brown-400 text-cream-50 px-2.5 py-1">
                    {c.badge}
                  </span>
                )}
                <h3 className="text-sm font-medium text-stone-800 mb-1 tracking-wide group-hover:text-brown-500">
                  {c.name}
                </h3>
                <p className="font-en text-lg text-brown-400 mb-3 font-light">{c.price}</p>
                <p className="text-xs text-stone-700 leading-relaxed">{c.desc}</p>
                <p className="mt-4 text-xs tracking-widest text-brown-400">詳しく見る →</p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/menu"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
            >
              すべてのメニュー・料金を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Notes ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Notes" ja="ペア・グループ来店の注意事項" />
          <div className="mt-8 space-y-4 text-sm text-stone-700 leading-loose">
            <div className="border border-sand-200 bg-cream-50 p-6">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">事前予約を強くおすすめします</h3>
              <p>
                同じ時間帯にご案内するには、スタッフの人数・他の予約状況によります。予約なしでの来店や、当日の直前予約では同時案内が難しい場合がございます。ペアでのご来店をご希望の場合は、できるだけ早めにご予約ください。
              </p>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">時間差での案内になる場合があります</h3>
              <p>
                予約状況によっては、同じ時間帯での案内ができない場合もあります。その際は時間差での施術となりますが、もう一方の方は待合スペースでお待ちいただけます。詳しくはご来店時にご相談ください。
              </p>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <h3 className="font-medium text-stone-800 mb-2 tracking-wide">事前に電話でご確認いただくと安心</h3>
              <p>
                「確実に2名同時で受けたい」という場合は、電話でスタッフに直接ご確認いただくと、より確実です。日時・人数・ご希望のコースをお伝えいただければ、対応可能かどうかご回答できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="FAQ" ja="ペア・グループ利用のよくある質問" />
          <div className="mt-8 space-y-4">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="border border-sand-200 p-6">
                <p className="text-sm font-medium text-stone-800 mb-3 leading-snug tracking-wide">
                  <span className="font-en text-brown-400 mr-2">Q.</span>
                  {item.name}
                </p>
                <p className="text-sm text-stone-700 leading-loose pl-5">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/faq"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
            >
              よくある質問をすべて見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Related ===== */}
      <section className="py-12 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
              { label: 'メニュー・料金', href: '/menu' },
              { label: '当日予約について', href: '/scene/same-day' },
              { label: '仕事帰りの利用', href: '/scene/after-work' },
              { label: 'よくある質問', href: '/faq' },
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

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">大切な方と、ゆっくりと。</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            ベッド3台完備。カップル・ご夫婦・お友達でのご来店歓迎。<br />
            夜0時まで営業・当日予約OK・無料駐車場完備。<br />
            予約備考欄に「2名同時希望」とご記入ください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton href={BMERIT_URL} label="公式WEB予約（鍼灸対応）" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
