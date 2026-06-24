import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, LINE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'MARISAのこだわり・施術方針｜もみほぐし・MARISA 君津店',
  description:
    '君津市のリラクゼーションサロン・MARISAのこだわり。お客様一人ひとりの状態に合わせたカウンセリング、圧の調整、清潔な環境、丁寧な施術をお約束。肩こり・腰のつらさ・眼精疲労まで対応。',
  keywords: [
    '君津 マッサージ こだわり',
    '君津 もみほぐし 丁寧',
    'MARISA こだわり',
    '君津 リラクゼーション 口コミ',
  ],
  openGraph: {
    title: 'MARISAのこだわり・施術方針｜もみほぐし・MARISA 君津店',
    description:
      'カウンセリング・圧の調整・清潔な空間・鍼灸師在籍・夜0時まで営業。君津のリラクゼーションサロンMARISAのこだわりをご紹介します。',
    locale: 'ja_JP',
    type: 'website',
  },
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
    title: '清潔で落ち着いた空間を、毎日整えています',
    body: `サロンへの通いやすさも、MARISAが大切にしているこだわりのひとつです。施術スペースは常に清潔に保ち、使用するリネン類・フェイスシートはお客様ごとに新しいものに交換しています。施術スペースはカーテンで仕切られており、周囲を気にせずリラックスしていただける環境を整えています。照明は落ち着いたトーンを採用し、BGMも選定しています。駐車場を完備していますので、お車でのご来店も安心です。また、営業時間は夜0時まで（最終受付23:00）ですので、仕事帰りや家事の合間にも気軽にお立ち寄りいただけます。清潔感のある環境で心地よく施術を受けていただくことが、リラクゼーション効果をより高めると考えています。`,
  },
  {
    no: '04',
    en: 'Expertise',
    title: '資格を持つスタッフが在籍、専門的なケアを提供',
    body: `MARISAには鍼灸師の資格を持つスタッフ（なお）が在籍しています。もみほぐし単体のリラクゼーション施術に加え、鍼灸師によるもみほぐし＋鍼の組み合わせメニューも対応可能です。鍼灸メニューは公式WEB予約限定・金曜土曜中心の対応となりますが、専門的な技術を活かして気になる部位へのアプローチをサポートします。なお、すべての施術は医療行為ではなく、日々のリラクゼーション・ケアを目的としたものです。体の状態に不安がある方は、医療機関への受診も合わせてご検討ください。MARISAでは施術の技術向上に継続的に取り組み、お客様に安心してご利用いただける環境を整えています。`,
  },
  {
    no: '05',
    en: 'Accessibility',
    title: '通いやすい環境—夜0時まで・当日予約・駐車場完備',
    body: `体のケアは、一度だけでなく継続的に行うことで、より効果を感じやすくなります。そのため、MARISAでは「続けて通いやすい環境づくり」を大切にしています。営業時間は10:00〜24:00（最終受付23:00）で年中無休。仕事帰りや週末、祝日でもご来店いただけます。当日予約にも対応しており、「急に時間ができた」「今日特に体がつらい」という場合にも対応できるよう努めています。店舗前に無料駐車場を完備しており、お車でのご来店も安心です。君津駅から車で約5分、君津ICから約10分というアクセスの良さも選ばれている理由のひとつです。木更津・富津・袖ケ浦など周辺エリアからもお越しいただいています。`,
  },
]

const faqs = [
  {
    q: 'もみほぐしは医療行為ですか？',
    a: 'いいえ、MARISAのもみほぐしは医療行為ではなく、リラクゼーションを目的とした施術です。体の不調の診断・治療は行っておりません。体のつらさが続く場合や医療的なご相談は、医療機関への受診をおすすめします。',
  },
  {
    q: '鍼灸メニューはどんな方に向いていますか？',
    a: '鍼灸（もみほぐし＋鍼）のメニューは、手技では届きにくい深いところへのアプローチや、特定の部位に集中したケアをご希望の方に向いています。肩こり・腰のつらさで長期間悩んでいる方にも選ばれています。なお、医療的な効果を保証するものではありません。',
  },
  {
    q: '施術の強さは途中でも変えられますか？',
    a: 'はい、施術中はいつでも圧の強さを変えることができます。「もう少し強く」「ここは優しくしてほしい」など遠慮なくお申し付けください。我慢して施術を受ける必要はありません。',
  },
  {
    q: '何回通えば体が楽になりますか？',
    a: '個人差がありますが、一般的に2〜4週間に1回のペースで定期的にご来店いただくことで、体の状態が整いやすくなると言われています。体の状態やお悩みに応じてスタッフにご相談ください。',
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
              MARISAは、千葉県君津市にあるリラクゼーションサロンです。施術の技術はもちろんのこと、カウンセリング・圧の調整・通いやすい環境の5つのこだわりを大切に、来るたびに体が楽になれる場所を目指しています。
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
          <p className="text-stone-700 leading-loose text-sm mt-4">
            君津市を中心に、木更津・富津・袖ケ浦など周辺エリアからも多くのお客様にご来店いただいています。「疲れたら気軽に立ち寄れる場所」として、地域の皆様の日々のケアをサポートし続けてまいります。
          </p>
        </div>
      </section>

      {/* ===== 5 Commitments ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Our Commitment"
            ja="MARISAの5つのこだわり"
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

      {/* ===== Treatment Philosophy ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Philosophy"
            ja="施術に対する考え方"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              MARISAで提供するもみほぐし・足つぼ・ヘッドケアはすべてリラクゼーションを目的とした施術であり、医療行為ではありません。体の不調の診断・治療・医療効果を保証するものではありません。
            </p>
            <p>
              施術を通じてお客様に感じていただきたいのは、「体が軽くなった」「気持ちよかった」「すっきりした」という日常のケアとしての心地よさです。定期的に体のメンテナンスを行うことで、疲れが蓄積しにくい状態を目指すサポートをしたいと考えています。
            </p>
            <p>
              「サロンに行くのは特別なとき」ではなく、「疲れたら気軽に行ける場所」であってほしいと思っています。月1回のリセット、2週間に1回のメンテナンス、仕事帰りのリフレッシュなど、それぞれのペースで続けていただける場所を目指しています。
            </p>
            <p>
              体のつらさが続く場合や、医療的なご相談については医療機関への受診をあわせてご検討ください。MARISAはリラクゼーションのサポートという位置づけで、皆様の毎日に寄り添ってまいります。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Staff Message ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
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
            <p>
              鍼灸師（なお）が在籍していることで、手技だけでは届きにくい部位へのアプローチや、より専門的なケアをご提供できることも当店の強みのひとつです。気になる方はスタッフにお気軽にご相談ください。
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

      {/* ===== Environment & Equipment ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Environment"
            ja="環境・設備のこだわり"
            lead="心地よく施術を受けていただくための空間づくりに取り組んでいます。"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-stone-700">
            {[
              {
                title: '施術ベッド3台',
                desc: '3台のベッドをご用意しています。ご夫婦・カップル・グループでも同時にご利用いただけます。ゆったりとした設計で、体に負担の少ない姿勢でリラックスできます。',
              },
              {
                title: 'カーテン仕切りのプライベート空間',
                desc: '施術スペースはカーテンで仕切られており、周囲の視線を気にせずリラックスしていただける個室感のある環境です。プライバシーに配慮した設計です。',
              },
              {
                title: '清潔な衛生管理',
                desc: 'リネン類・フェイスシートはお客様ごとに新しいものに交換しています。施術スペース・更衣スペース・洗面台は毎日清掃し、衛生管理を徹底しています。',
              },
              {
                title: '落ち着いた照明・BGM',
                desc: '過剰に明るすぎず暗すぎない落ち着いた照明と、穏やかなBGMで日常の喧騒を忘れられる空間を整えています。リラクゼーション効果を高める環境づくりを意識しています。',
              },
              {
                title: '更衣スペース',
                desc: '施術前にお着替えいただける更衣スペースをご用意。施術着はすべて当店で準備していますので、手ぶらでご来店いただけます。',
              },
              {
                title: '無料駐車場完備',
                desc: '店舗前に無料駐車場を完備しています。お車でのご来店も安心です。駐車場の心配なくご来店いただける環境を整えています。',
              },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-brown-300 pl-5">
                <p className="font-medium text-stone-800 mb-1 tracking-wide">{item.title}</p>
                <p className="leading-loose">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/salon"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
            >
              店内・設備の詳細を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Owner Message ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Owner's Message"
            ja="オーナーからのメッセージ"
          />
          <div className="mt-8 space-y-4 text-sm text-stone-700 leading-loose">
            <p>
              MARISAをご利用いただいているお客様、いつもありがとうございます。また、このページをご覧いただいている方、はじめまして。オーナーです。
            </p>
            <p>
              このサロンを始めたのは、「もっと気軽に体のケアができる場所がほしい」という思いからです。特別な日だけでなく、日常の疲れを取るために気軽に立ち寄れる場所。夜遅くでも来られて、予約が取りやすくて、駐車場があって、清潔で——そんな場所を地域の方々に提供したいと思っています。
            </p>
            <p>
              施術においては、お一人おひとりの体の状態とご要望に丁寧に向き合うことを最優先にしています。同じコースでも、その日の体の状態によってアプローチを変えています。「前回より楽になった」「また来たくなった」という言葉が、私たちの一番の励みです。
            </p>
            <p>
              鍼灸師（なお）とともに、手技だけでなく鍼灸によるケアも提供できるチームを作ることができました。より幅広いお悩みに対応できるよう、これからも技術と環境を磨いてまいります。
            </p>
            <p>
              ぜひ一度、MARISAにお越しください。皆さんにとって「疲れたら行きたくなる場所」になれるよう、スタッフ一同お待ちしています。
            </p>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="FAQ"
            ja="こだわりに関するよくある質問"
          />
          <div className="mt-8 space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-sand-200 bg-cream-50 p-6">
                <p className="text-sm font-medium text-stone-800 mb-3 tracking-wide">
                  <span className="font-en text-brown-400 mr-2">Q.</span>{faq.q}
                </p>
                <p className="text-sm text-stone-700 leading-loose pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Accessibility ===== */}
      <section className="py-14 bg-cream-100">
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
              <p className="leading-loose">「急に体がつらくなった」「今日時間ができた」というときにも、公式WEB予約・ホットペッパービューティーから当日予約が可能です。</p>
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
      <section className="py-16 lg:py-24 bg-cream-50">
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
      <section className="py-16 lg:py-24 bg-sand-100">
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
              もみほぐし45分¥3,900からとリーズナブルな価格ながら、カウンセリングの丁寧さ・清潔感のある環境・施術の質にはこだわっています。安さだけを追求したサロンではなく、「価格に見合う、それ以上の体験」を目指しています。
            </p>
            <p>
              ホットペッパービューティー掲載のため、初回クーポンや割引メニューもご利用いただけます。初めてお越しの方は、まずお試しの感覚でお気軽にご来店ください。
            </p>
          </div>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
            {[
              { label: 'もみほぐし45分', price: '¥3,900' },
              { label: 'もみほぐし60分', price: '¥4,500' },
              { label: 'もみほぐし90分', price: '¥6,400' },
              { label: 'ヘッドセット60分', price: '¥5,400' },
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
              { href: '/menu', label: 'メニュー・料金', sub: 'Menu' },
              { href: '/first', label: '初めての方へ', sub: 'First Visit' },
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
            公式WEB予約またはホットペッパービューティーからかんたんにご予約いただけます。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={BMERIT_URL} label="WEB予約（公式）" variant="light" size="lg" />
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約" variant="outline" size="lg" />
          </div>
          {LINE_URL && (
            <div className="mt-6">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest text-sand-300 border-b border-sand-400 pb-px hover:text-cream-50"
              >
                LINEでご相談 →
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
