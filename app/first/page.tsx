import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, SHOP_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '初めての方へ｜MARISA 君津店',
  description:
    '君津のもみほぐしサロン「MARISA」への初めてのご来店をサポートします。ご来店の流れ・服装・駐車場・当日予約・男性利用・ペア利用など、よくあるご質問をまとめてご案内します。',
  alternates: { canonical: '/first' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '服装はどうすればいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '動きやすい服装でお越しいただくのがベストですが、特に決まりはありません。施術前にお着替えの時間をご用意していますので、スーツや制服でのご来店も問題ありません。着替えは当店でご用意しています。',
      },
    },
    {
      '@type': 'Question',
      name: '当日の予約はできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、当日予約に対応しています。ホットペッパービューティーのネット予約、またはお電話にてお問い合わせください。空き状況により対応できない場合もありますので、お早めのご連絡をおすすめします。',
      },
    },
    {
      '@type': 'Question',
      name: '男性でも利用できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、男性のお客様も大歓迎です。肩こりや腰のつらさでお悩みの男性のお客様にも多くご利用いただいています。お気軽にご来店ください。',
      },
    },
    {
      '@type': 'Question',
      name: '駐車場はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、無料の駐車場を完備しています。お車でのご来店も安心してお越しください。',
      },
    },
    {
      '@type': 'Question',
      name: 'カップルや家族など、複数人で利用できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、ペアやグループでのご利用も歓迎しています。ベッドを3台ご用意していますので、ご夫婦やご家族、お友達同士でも同時に施術を受けていただけます。ご予約時にご人数をお知らせください。',
      },
    },
    {
      '@type': 'Question',
      name: '夜遅くても予約できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '営業時間は10:00〜24:00（最終受付23:00）です。仕事帰りでも夜遅くにご来店いただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '圧の強さは途中で変えてもらえますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'もちろんです。施術中、どのタイミングでもお気軽にお申し付けください。強め・弱めのご要望に合わせて調整します。我慢することなく、遠慮なくお声がけください。',
      },
    },
    {
      '@type': 'Question',
      name: '予約なしで来店できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '当日のご来店も可能ですが、混雑状況によってはお待ちいただく場合がございます。スムーズにご案内するため、事前のご予約をおすすめしています。',
      },
    },
  ],
}

const steps = [
  {
    step: '01',
    label: 'ご予約・ご来店',
    desc: 'ホットペッパービューティーのネット予約、またはお電話にてご予約ください。当日予約もOKです。お車でのご来店の場合は、店舗前の無料駐車場をご利用ください。君津駅からは車で約5分です。',
  },
  {
    step: '02',
    label: '受付・カウンセリング',
    desc: 'ご来店いただきましたら受付にてお名前をお知らせください。初めての方にはカウンセリングシートにご記入いただきます。その日の体の状態・気になる部位・施術の強さのご希望などをお聞きし、最適な施術をご提案します。',
  },
  {
    step: '03',
    label: 'お着替え',
    desc: '施術用の着替えをご用意しています。お持ちいただく必要はありません。貴重品はロッカーで安全に保管いただけます。スーツや仕事帰りの服装のままでも安心してご来店ください。',
  },
  {
    step: '04',
    label: '施術',
    desc: '専用ベッドでリラックスしながら施術をお受けください。施術中、圧の強さや気になる点があれば遠慮なくお申し付けください。スタッフが丁寧に対応します。うつ伏せ・仰向けの体勢はコースによって異なります。',
  },
  {
    step: '05',
    label: 'お会計',
    desc: '施術終了後、お着替えをしていただきお会計となります。現金のほか、クレジットカードでのお支払いも可能です。次回のご予約もこのタイミングで承ります。',
  },
  {
    step: '06',
    label: '次回のご予約・ご帰宅',
    desc: '施術後は体がほぐれた状態です。お帰りの際は水分をしっかりとっていただくことをおすすめしています。定期的なケアを続けることで、体の状態が整いやすくなります。また次回のご来店をお待ちしております。',
  },
]

const faqs = [
  {
    q: '服装はどうすればいいですか？着替えは必要ですか？',
    a: '特別な服装でお越しいただく必要はありません。スーツや仕事帰りの服でもそのままお越しください。施術前に当店でご用意した着替えに着替えていただきます。ゆったりとした施術着をご用意していますので、窮屈さを感じることなくリラックスして施術を受けていただけます。貴重品はロッカーで保管できます。',
  },
  {
    q: '駐車場はありますか？',
    a: '無料駐車場を完備しています。お車でのご来店も安心してお越しください。君津インターからも約10分と、アクセスしやすい立地です。公共交通機関をご利用の場合は、君津駅からタクシーまたはバスをご利用いただけます。',
  },
  {
    q: '圧の強さは変えてもらえますか？途中でお願いしても大丈夫ですか？',
    a: 'もちろんです。施術中、いつでもお申し付けください。「もう少し強く」「少し優しくしてほしい」など、遠慮なくお声がけいただけます。カウンセリング時にご要望をお伝えいただければ、最初から強さを合わせることも可能です。気持ちよく施術を受けていただくことが一番ですので、何でもお知らせください。',
  },
  {
    q: '当日予約はできますか？',
    a: 'はい、当日予約に対応しています。ホットペッパービューティーのネット予約から空き状況をご確認いただくか、お電話にてお問い合わせください。混雑している時間帯はお待ちいただく場合もありますので、事前のご予約をおすすめしています。特に週末や夕方以降は混み合うことが多いため、なるべく早めのご予約をお願いします。',
  },
  {
    q: '男性でも利用できますか？',
    a: 'はい、男性のお客様も大歓迎です。「男性は入りにくい」とご心配される方もいらっしゃいますが、当店では男性のお客様にも多くご来店いただいています。デスクワークによる肩こり・腰のつらさ・全身の疲れでお悩みの男性の方にもぜひご利用いただきたいサロンです。スタッフも丁寧に対応いたしますので、どうぞお気軽にお越しください。',
  },
  {
    q: 'カップルや家族など、複数人で一緒に受けられますか？',
    a: 'はい、ペア・グループでのご利用も歓迎しています。当店にはベッドが3台ありますので、ご家族やカップル、お友達同士で同じ時間帯に施術を受けていただけます。ご予約時に人数と希望時間をお知らせください。特別なご要望がある場合もご相談ください。',
  },
  {
    q: '夜遅くでも予約できますか？',
    a: '当店は10:00〜24:00（最終受付23:00）まで営業しています。仕事が終わった後でも、夜遅くにご来店いただけます。「いつも日中は時間がとれない」「夕食後にゆっくりほぐしたい」という方にも多くご利用いただいています。年中無休で営業していますので、お気軽にご来店ください。',
  },
  {
    q: '予約なしでも来店できますか？',
    a: 'ご予約なしでのご来店も受け付けています。ただし、混雑状況によってはお待ちいただくか、ご案内できない場合もございます。スムーズにご案内するため、事前のご予約をおすすめしています。特に週末・祝日・夜の時間帯はご予約が埋まりやすいため、なるべくお早めにご予約ください。',
  },
]

export default function FirstPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ===== Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: '初めての方へ' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">First Visit</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800">
              初めての方へ
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              はじめてのサロンは、なにかと不安になるものです。「服装はどうすればいい？」「強さを遠慮なく伝えられる？」「男性でも入れる？」そんな疑問にお答えします。ご来店の流れとよくあるご質問をまとめました。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Intro ===== */}
      <section className="py-16 lg:py-20 bg-cream-50">
        <div className="max-w-5xl mx-auto px-5 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-14 lg:items-center">
          <div>
            <p className="text-stone-700 leading-loose text-sm">
              もみほぐし・MARISA 君津店は、千葉県君津市にあるリラクゼーションサロンです。肩こり・腰のつらさ・眼精疲労・足のだるさなど、毎日の疲れを丁寧な施術でケアします。
            </p>
            <p className="text-stone-700 leading-loose text-sm mt-4">
              「はじめてのサロンで緊張している」「どんな流れで進むのかわからない」という方もご安心ください。当店では初めての方にも安心してお過ごしいただけるよう、カウンセリングから施術まで丁寧にサポートします。このページでは、ご来店からお帰りまでの流れと、よくあるご質問をわかりやすくご紹介します。
            </p>
          </div>
          <div className="mt-8 lg:mt-0 grid grid-cols-2 gap-2">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/LINE_ALBUM_もみほぐしMARISA_260615_2.jpg"
                alt="君津 もみほぐし marisa 清潔な店内"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/LINE_ALBUM_もみほぐしMARISA_260615_18.jpg"
                alt="君津 リラクゼーション サロン 受付エリア"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Visit Flow ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Visit Flow"
            ja="ご来店の流れ"
            lead="初めての方にも安心していただけるよう、施術の流れをご説明します。"
            centered
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="bg-cream-50 border border-sand-200 p-7">
                <p className="font-en text-2xl font-light text-brown-400 mb-3">{s.step}</p>
                <h2 className="text-base font-medium text-stone-800 mb-3 tracking-wide">{s.label}</h2>
                <p className="text-sm text-stone-700 leading-loose">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Reassurance Points ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="At MARISA"
            ja="MARISAで安心できる理由"
            lead="初めてのサロンでの不安を、少しでも和らげていただけるよう取り組んでいます。"
          />
          <div className="mt-10 space-y-6">
            <div className="border-l-2 border-brown-300 pl-5">
              <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">丁寧なカウンセリング</h3>
              <p className="text-sm text-stone-700 leading-loose">
                施術前に必ずカウンセリングを行います。その日の体の状態・気になる部位・施術の強さのご希望などをお聞きし、お一人おひとりに合った施術をご提案します。「どこを重点的にほぐしてほしい」「今日は全体的に軽くほぐしてほしい」などのご要望もお気軽にお知らせください。
              </p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5">
              <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">施術中もいつでも調整できます</h3>
              <p className="text-sm text-stone-700 leading-loose">
                施術中、圧の強さが気になる場合はいつでもお申し付けください。我慢して施術を受ける必要はありません。「もう少し強く」「ここが特につらい」など、遠慮なくお声がけいただけます。お客様が心地よいと感じる施術をご提供することが、私たちの一番の目標です。
              </p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5">
              <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">清潔で落ち着いた空間</h3>
              <p className="text-sm text-stone-700 leading-loose">
                店内は常に清潔に保たれており、使用するリネン類はお客様ごとに交換しています。施術スペースは個別にカーテンで区切られており、周囲を気にせずリラックスしていただけます。照明やBGMにもこだわり、日常の忙しさを忘れてゆっくりお過ごしいただける空間を整えています。
              </p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5">
              <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">夜0時まで営業・当日予約OK</h3>
              <p className="text-sm text-stone-700 leading-loose">
                営業時間は10:00〜24:00（最終受付23:00）です。仕事帰りや夜に立ち寄りたい方にもご利用いただきやすい時間帯まで営業しています。当日予約にも対応していますので、「急に体がつらくなった」「今日時間ができた」という場合にもお気軽にご連絡ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Shop Info Brief ===== */}
      <section className="py-12 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 text-sm text-stone-700">
            <div>
              <p className="text-xs tracking-widest text-greige-400 mb-1">住所</p>
              <p>{SHOP_INFO.address}</p>
            </div>
            <div>
              <p className="text-xs tracking-widest text-greige-400 mb-1">営業時間</p>
              <p>10:00〜24:00<br />（最終受付 23:00）</p>
            </div>
            <div>
              <p className="text-xs tracking-widest text-greige-400 mb-1">定休日</p>
              <p>年中無休</p>
            </div>
            <div>
              <p className="text-xs tracking-widest text-greige-400 mb-1">駐車場</p>
              <p>無料駐車場あり</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="FAQ"
            ja="よくあるご質問"
            lead="初めてご来店される方からよくいただくご質問をまとめました。"
          />
          <div className="mt-10 space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-sand-200 p-6">
                <p className="text-sm font-medium text-stone-800 mb-3 tracking-wide">
                  <span className="font-en text-brown-400 mr-2">Q.</span>
                  {faq.q}
                </p>
                <p className="text-sm text-stone-700 leading-loose pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/faq"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
            >
              その他のよくある質問はこちら →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">
            ご予約・お問い合わせ
          </h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            ご不明な点はお気軽にお問い合わせください。<br />
            当日予約・ネット予約に対応しています。
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
