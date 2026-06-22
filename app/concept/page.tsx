import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'MARISAのこだわりとコンセプト｜君津のもみほぐしサロン',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」のこだわりとコンセプト。通いやすさ・丁寧さ・清潔感・落ち着いた空間・夜0時まで営業・地域密着。君津で気軽に通えるもみほぐしサロンです。',
  keywords: ['君津 もみほぐし こだわり', '君津 リラクゼーション サロン', '君津 マッサージ 安い', '君津 夜遅く 通いやすい'],
  openGraph: { title: 'MARISAのこだわりとコンセプト｜君津のもみほぐしサロン', description: '通いやすさ・丁寧さ・清潔感・夜0時まで・地域密着。君津で気軽に通えるもみほぐしサロンMARISAのこだわり。', locale: 'ja_JP', type: 'website' },
  alternates: { canonical: '/concept' },
}

const commitments = [
  {
    no: '01',
    en: 'Counseling',
    title: '丁寧なカウンセリングで、その日の体に寄り添う',
    body: `施術前には必ずカウンセリングを行います。その日の体の状態、気になる部位、疲れの度合い、施術の強さのご希望など、細かくお聞きしたうえで施術に入ります。「最近デスクワークが続いて肩がつらい」「立ち仕事で足がだるい」「全体的にリセットしたい」——同じ施術コースでも、体の状態やご要望によってアプローチは変わります。毎回のカウンセリングを通じて、その日のお客様に最適なケアをご提供することが、MARISAのこだわりのひとつです。また、来店を重ねるなかで体の傾向を把握し、状態の変化にも対応できるよう心がけています。初めてのご来店でも、どうぞ遠慮なくご要望をお知らせください。`,
  },
  {
    no: '02',
    en: 'Pressure',
    title: '圧の好みに合わせた施術で、無理のないケアを',
    body: `「もみほぐしは痛い」というイメージをお持ちの方もいらっしゃいますが、MARISAでは強さを押しつけることはしません。「気持ちよく感じる圧」はお一人おひとり異なります。体格・体質・その日の疲れの状態によっても変わります。カウンセリング時にご希望をお聞きするのはもちろんのこと、施術中もいつでも圧の調整が可能です。「もう少し弱めに」「ここは強くほぐしてほしい」と遠慮なくお声がけください。施術中に我慢することなく、心地よさを感じながら体の疲れをやわらげることを大切にしています。強さを合わせることで、施術の効果もより実感しやすくなります。お客様の体の状態とご要望に丁寧に向き合い、その日に合ったケアをご提供します。`,
  },
  {
    no: '03',
    en: 'Environment',
    title: '清潔で通いやすい環境を、毎日整えています',
    body: `サロンへの通いやすさも、MARISAが大切にしているこだわりのひとつです。施術スペースは常に清潔に保ち、使用するリネン類・フェイスシートはお客様ごとに新しいものに交換しています。施術スペースはカーテンで仕切られており、周囲を気にせずリラックスしていただける環境を整えています。駐車場を完備していますので、お車でのご来店も安心です。また、営業時間は夜0時まで（最終受付23:00）ですので、仕事帰りや家事の合間にも気軽にお立ち寄りいただけます。「近くて通いやすい」「来るたびに気持ちよくなれる」と感じていただけるサロンでありたいと思っています。お子様連れ・ご夫婦・お友達同士など、さまざまなスタイルでご利用いただいています。`,
  },
]

export default function ConceptPage() {
  return (
    <>
      {/* ===== Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'こだわり' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Our Concept</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800">
              毎日の疲れに、丁寧に向き合う場所
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              MARISAは、千葉県君津市にあるリラクゼーションサロンです。施術の技術はもちろんのこと、カウンセリング・圧の調整・通いやすい環境の3つを大切に、来るたびに体が楽になれる場所を目指しています。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Intro ===== */}
      <section className="py-16 lg:py-20 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-stone-700 leading-loose text-sm">
            現代の生活では、肩こり・腰のつらさ・頭の重さ・足のだるさなど、さまざまな体の疲れが積み重なりやすい環境があります。仕事・家事・育児・長時間のデスクワーク——日々の忙しさのなかで、体のメンテナンスは後回しになりがちです。
          </p>
          <p className="text-stone-700 leading-loose text-sm mt-4">
            MARISAでは、「技術があれば十分」とは考えていません。お客様一人ひとりの体の状態に寄り添い、来店のたびに「楽になれた」と感じていただける場所であることを目標にしています。そのために、施術前のカウンセリングを大切にし、施術中の圧の調整も柔軟に対応し、清潔で通いやすい環境を整えています。
          </p>
          <p className="text-stone-700 leading-loose text-sm mt-4">
            「もみほぐし」という言葉には、ただほぐすだけでなく、体の緊張をやわらげ、リラックスしやすい状態をサポートするという意味が込められています。施術後に「体が軽くなった」「気持ちよく眠れた」「また来たい」と感じていただけるよう、スタッフ一同丁寧に取り組んでいます。
          </p>
        </div>
      </section>

      {/* ===== 3 Commitments ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Our Commitment"
            ja="MARISAの3つのこだわり"
            lead="施術の質だけでなく、来やすさ・安心感・居心地のよさを同時に追求しています。"
            centered
          />
          <div className="mt-14 space-y-12">
            {commitments.map((c) => (
              <div key={c.no} className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-cream-50 border border-sand-200 p-8 lg:p-10">
                <div className="lg:col-span-4">
                  <p className="font-en text-5xl font-light text-brown-400 mb-2 leading-none">{c.no}</p>
                  <p className="font-en text-xs tracking-widest uppercase text-greige-400 mb-3">{c.en}</p>
                  <h2 className="text-xl font-light tracking-wide text-stone-800 leading-snug">{c.title}</h2>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-sm text-stone-700 leading-loose">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Staff Message ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Staff Message"
            ja="スタッフの想い"
          />
          <div className="mt-8 space-y-4 text-sm text-stone-700 leading-loose">
            <p>
              MARISAのスタッフは、技術の習得はもちろん、お客様への接し方・空間の整え方・コミュニケーションのとり方にもこだわっています。「また来たい」と思っていただけることが、私たちにとって何よりの励みです。
            </p>
            <p>
              施術において大切にしているのは、「お客様の体の声に耳を傾けること」です。同じ肩こりでも、原因や状態は人それぞれです。カウンセリングで丁寧にヒアリングし、その方に合ったアプローチで施術を行います。圧の強さ・ほぐすスピード・部位のバランスなど、細かい部分まで意識して取り組んでいます。
            </p>
            <p>
              「サロンに行くのは特別なとき」ではなく、「疲れたら気軽に行ける場所」であってほしいと思っています。定期的にお体をケアすることで、疲れが溜まりにくい状態を整えるサポートができれば、スタッフ一同うれしく思います。初めての方も、お気軽にお越しください。
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/staff"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
            >
              スタッフ紹介を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Accessibility ===== */}
      <section className="py-14 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Access & Hours"
            ja="通いやすさへのこだわり"
            lead="仕事帰りでも、週末でも、気が向いたときに立ち寄れるサロンを目指しています。"
          />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-stone-700">
            <div className="border-l-2 border-brown-300 pl-5">
              <p className="font-medium text-stone-800 mb-1 tracking-wide">夜0時まで営業</p>
              <p className="leading-loose">10:00〜24:00（最終受付23:00）。仕事帰りや夕食後でもご来店いただけます。年中無休で営業しています。</p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5">
              <p className="font-medium text-stone-800 mb-1 tracking-wide">当日予約OK</p>
              <p className="leading-loose">「急に体がつらくなった」「今日時間ができた」というときにも、ホットペッパービューティーから当日予約が可能です。</p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5">
              <p className="font-medium text-stone-800 mb-1 tracking-wide">無料駐車場完備</p>
              <p className="leading-loose">お車でのご来店も安心です。君津駅から車で約5分、君津インターから約10分の立地です。</p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5">
              <p className="font-medium text-stone-800 mb-1 tracking-wide">ペア・複数名でのご利用</p>
              <p className="leading-loose">施術ベッドは3台ご用意しています。ご夫婦やお友達同士でも同時にご利用いただけます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 地域密着 ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Local Community"
            ja="君津に根ざした、地域密着のサロン"
            lead="MARISAは千葉県君津市にあるリラクゼーションサロンです。地域の皆様の日々の疲れに寄り添える場所であり続けたいと考えています。"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              君津市は、工場・製造業で働く方、デスクワークや事務職の方、自動車や電車で長距離通勤される方など、体を使う仕事・長時間同じ姿勢でいる仕事に従事する方が多く暮らしています。日々の仕事で蓄積される肩こり・腰のつらさ・足のだるさは、放置すると慢性化しやすい体の悩みです。
            </p>
            <p>
              MARISAは、「特別なときに行くサロン」ではなく、「疲れたら気軽に立ち寄れる場所」を目指しています。夜0時まで営業しているため、仕事帰りにそのまま立ち寄ることができます。無料駐車場を完備しているため、お車での来店も安心です。
            </p>
            <p>
              木更津・富津・袖ケ浦など周辺地域からお越しの方も多くいらっしゃいます。君津インターから約10分、君津駅から車で約5分というアクセスの良さが、遠方からのお客様にも選ばれている理由のひとつです。
            </p>
            <p>
              地域のリラクゼーションの場として、これからも君津市・周辺エリアの皆様の体のケアをサポートし続けてまいります。
            </p>
          </div>
          <div className="mt-6">
            <Link href="/area/kimitsu" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
              君津エリアのご案内を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 価格・通いやすさ ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Price & Value"
            ja="通いやすい価格と、高い品質を両立"
            lead="「続けて通えること」が体のケアには何より大切だと考えています。"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              リラクゼーションは「一度行けば終わり」ではなく、定期的に体をケアし続けることで本来の効果が実感しやすくなります。そのため、MARISAでは「続けて通いやすい価格設定」を意識しています。
            </p>
            <p>
              もみほぐし45分¥3,500〜（税込）とリーズナブルな価格ながら、カウンセリングの丁寧さ・清潔感のある環境・施術の質にはこだわっています。安さだけを追求したサロンではなく、「価格に見合う、それ以上の体験」を目指しています。
            </p>
            <p>
              ホットペッパービューティー掲載のため、初回クーポンや割引メニューもご利用いただけます。初めてお越しの方は、まずお試しの感覚でお気軽にご来店ください。
            </p>
          </div>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
            {[
              { label: 'もみほぐし45分', price: '¥3,500〜' },
              { label: 'もみほぐし60分', price: '¥4,500〜' },
              { label: 'もみほぐし90分', price: '¥6,500〜' },
              { label: 'ヘッドセット60分', price: '¥5,000〜' },
            ].map((item) => (
              <div key={item.label} className="border border-sand-200 bg-cream-50 p-4">
                <p className="text-xs text-greige-400 mb-1">{item.label}</p>
                <p className="text-base font-light text-stone-800 tracking-wide">{item.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/menu" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
              全メニュー・料金を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Related Links ===== */}
      <section className="py-12 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 uppercase mb-6">Related Pages</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: '/staff', label: 'スタッフ紹介', sub: 'Staff' },
              { href: '/salon', label: '店内・設備', sub: 'Salon' },
              { href: '/reservation', label: 'ご予約方法', sub: 'Reservation' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-sand-200 p-5 bg-cream-50 hover:border-brown-300 transition-colors"
              >
                <p className="font-en text-[10px] tracking-widest text-brown-400 mb-1">{item.sub}</p>
                <p className="text-sm font-medium text-stone-800 tracking-wide">{item.label} →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">ご予約はこちらから</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業中・当日予約OK。<br />
            ホットペッパービューティーからかんたんにご予約いただけます。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton href="/menu" label="メニューを見る" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
