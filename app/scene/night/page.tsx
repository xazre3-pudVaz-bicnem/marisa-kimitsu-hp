import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '夜遅くまで営業・深夜のもみほぐし｜MARISA 君津店',
  description: '君津で夜遅くまで営業のもみほぐしならMARISA。夜0時まで営業・最終受付23時。仕事帰りの遅い時間・22時以降でも来店可能。深夜の疲れをその日のうちにケア。当日予約OK。',
  keywords: ['君津 夜遅く マッサージ', '君津 深夜 もみほぐし', '君津 夜間 リラクゼーション', '君津 22時以降 マッサージ'],
  openGraph: {
    title: '夜遅くまで営業・深夜のもみほぐし｜MARISA 君津店',
    description: '夜0時まで営業・最終受付23時。仕事帰りの深夜でも来店可能。君津MARISA。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/scene/night' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '何時まで受けられますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MARISA 君津店は夜0時（24:00）まで営業しております。最終受付は23:00です。年中無休で営業していますので、仕事帰りや夜の遅い時間でもお気軽にお越しください。',
      },
    },
    {
      '@type': 'Question',
      name: '23時に予約してもいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、最終受付が23:00ですので、23時からご予約いただけます。60分コースであれば24時ごろに終了となります。ホットペッパービューティーから空き状況をご確認の上、ご予約いただくとスムーズです。',
      },
    },
    {
      '@type': 'Question',
      name: '夜遅くでも当日予約できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、当日のご予約も受け付けております。ただし、夜の時間帯は混雑することがありますので、ホットペッパービューティーから事前に空き状況をご確認の上、ご予約いただくことをおすすめします。',
      },
    },
    {
      '@type': 'Question',
      name: '深夜料金はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '深夜追加料金の有無は現在のメニュー・料金ページをご確認ください。ホットペッパービューティーの店舗ページにも最新の料金情報を掲載しています。',
      },
    },
    {
      '@type': 'Question',
      name: '翌日の朝が楽になりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '「夜にほぐしてもらったら翌朝体が軽かった」というお声をいただいています。夜のもみほぐしで一日の疲れをリセットして帰宅することで、翌朝をすっきりした状態で迎えやすくなるというリピーターの方も多くいらっしゃいます。',
      },
    },
  ],
}

export default function SceneNightPage() {
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
              { label: '地域・シーン別', href: '/area/kimitsu' },
              { label: '夜遅くでも使える' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Night Relaxation</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              夜0時まで営業。遅い時間でも体をほぐして帰れる
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              最終受付23時、閉店24時のMARISAなら、仕事帰りの遅い時間・22時以降でも来店可能です。深夜の疲れをその日のうちにリセットして帰宅できます。
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Night Hours" ja="夜0時まで営業している理由" lead="夜こそ体が一番疲れている" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              「仕事が終わったら体をほぐしてリセットしたい」「夜の方がゆっくり時間が取れる」——そんなお客様のニーズに応えるために、MARISAは夜0時まで営業しています。
            </p>
            <p>
              特に夜型の生活スタイルの方や、夜まで働く方にとって、閉店時間の早いサロンは使い勝手が悪くなりがちです。23時受付・24時閉店という営業時間は、多くのお客様に「助かっている」とご好評いただいています。
            </p>
            <p>
              また、一日の終わりに体が一番疲れているのも事実です。朝よりも夕方・夜の方が疲労が蓄積しているため、夜のもみほぐしは体がほぐれやすいという側面もあります。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Why MARISA Night" ja="夜遅い来店に選ばれる理由" lead="こんな方が夜に来店されています" />
          <div className="mt-10 grid gap-5">
            {[
              {
                title: '仕事帰りに直接来店できる',
                body: '残業・営業回りで遅くなった日でも、仕事終わりにそのままMARISAへ。施術着完備なので着替えて施術を受けていただけます。スーツ・仕事着のままでOKです。',
              },
              {
                title: '22時・23時でも受付してもらえる',
                body: '最終受付は23:00です。23時に来店いただいても60分コースはしっかり受けていただけます。「何時まで大丈夫か」という心配がいらない安心感があります。',
              },
              {
                title: '夜の静かな空間でリラックス',
                body: '夜の時間帯は照明を落とした静かな雰囲気の中でゆっくりお過ごしいただけます。日中の喧騒から離れ、体と気持ちをリセットする時間になります。',
              },
              {
                title: 'その日のうちに疲れをリセット',
                body: '「疲れを翌日に持ち越したくない」という方に。夜のうちにほぐして帰宅することで、翌朝をすっきりした状態で迎えやすくなります。',
              },
            ].map((item, i) => (
              <div key={i} className="bg-cream-50 border border-sand-200 p-6">
                <p className="font-medium text-stone-800 mb-2 tracking-wide text-sm">{item.title}</p>
                <p className="text-sm text-stone-700 leading-loose">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Recommended Menu" ja="夜の来店におすすめのコース" lead="疲れに合わせてお選びください" />
          <div className="mt-8 space-y-4">
            <div className="bg-sand-100 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">もみほぐし 60〜90分</p>
              <p className="text-sm text-stone-700 leading-loose">
                一日の疲れをしっかりリセットしたい方に。60分は仕事帰りにちょうどよいボリューム感で、全身をバランスよくほぐせます。90分はじっくり体全体のケアをしたい方におすすめです。
              </p>
            </div>
            <div className="bg-sand-100 border border-sand-200 p-6">
              <p className="font-medium text-stone-800 mb-2 tracking-wide">ヘッドセット 60分〜</p>
              <p className="text-sm text-stone-700 leading-loose">
                仕事で頭が疲れている方・パソコン作業が多い方に。夜のヘッドケアは頭まわりの緊張をほぐし、その後の睡眠のリラックスにもつながりやすいと好評です。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Night Space" ja="夜の施術の心地よさ" lead="照明を落とした静かな空間" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAの夜の時間帯は、日中よりも静かで落ち着いた雰囲気になります。照明を落とした落ち着いた空間の中で、BGMが流れる心地よい環境でお過ごしいただけます。
            </p>
            <p>
              施術後はそのまま帰宅して、ゆっくり入浴・就寝というルーティンを持っているリピーターのお客様も多くいらっしゃいます。夜のもみほぐしを「1日の締めくくり」として定期利用されている方にもおすすめです。
            </p>
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
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
              { label: 'メニュー・料金', href: '/menu' },
              { label: '就寝前のケアに', href: '/scene/before-sleep' },
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

      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">ご予約はこちらから</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">夜0時まで営業・最終受付23時・当日予約OK・無料駐車場完備。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton href="/menu" label="メニューを見る" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
