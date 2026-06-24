import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, LINE_URL, SHOP_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '初めての方へ・ご来店の流れ｜もみほぐし・MARISA 君津店',
  description:
    '初めてもみほぐし・MARISAにご来店の方へ。ご予約から施術・お会計までの流れをご案内。肩こり・腰のつらさ・眼精疲労など、君津でリラクゼーションをお探しの方の疑問を解決します。',
  keywords: [
    '君津 マッサージ 初めて',
    '君津 もみほぐし 初めて',
    'もみほぐし MARISA 初めて',
    '君津 リラクゼーション 初めて',
  ],
  openGraph: {
    title: '初めての方へ・ご来店の流れ｜もみほぐし・MARISA 君津店',
    description:
      '初めてのご来店でも安心。ご予約から施術・お会計までの流れ、よくある疑問をわかりやすくご案内します。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/first' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '何を着て行けばいいですか？着替えは必要ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '特別な服装でお越しいただく必要はありません。スーツや仕事帰りの服でもそのままお越しください。施術前に当店でご用意した施術着にお着替えいただきます。着替えをお持ちいただく必要はありません。',
      },
    },
    {
      '@type': 'Question',
      name: 'コースはどう選べばいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '初めての方には60分コース（全身バランスよくケア）をおすすめしています。まずお試ししたい方は45分コースも好評です。カウンセリング時にスタッフにご相談いただければ、その日の体の状態に合わせてご提案します。',
      },
    },
    {
      '@type': 'Question',
      name: '予約なしで行っても大丈夫ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ご予約なしでのご来店も受け付けていますが、混雑状況によってはお待ちいただく場合があります。スムーズにご案内するため、事前のご予約をおすすめしています。',
      },
    },
    {
      '@type': 'Question',
      name: '当日の予約はできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、当日予約に対応しています。公式WEB予約（B-merit）またはホットペッパービューティーのネット予約、またはお電話にてお問い合わせください。空き状況により対応できない場合もありますので、お早めのご連絡をおすすめします。',
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
      name: '施術中に話しかけてもいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'どちらでも大丈夫です。会話しながらリラックスしたい方も、静かに施術に集中したい方も、スタッフはお客様のペースに合わせます。眠ってしまっても問題ありません。',
      },
    },
    {
      '@type': 'Question',
      name: '施術後に気をつけることは？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '施術後は水分をしっかり補給してください。施術直後の激しい運動はお体への負担になる場合があります。翌日に軽い筋肉痛のような感覚が出ることがありますが、一時的な反応です。',
      },
    },
    {
      '@type': 'Question',
      name: '値段はいくらくらいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'もみほぐしは45分¥3,900から。60分¥4,500（合計70分計）、90分¥6,400（合計100分計）、120分¥8,400のコースをご用意しています。ヘッドケア・足つぼ・セットコースなど各種メニューはご予約ページでご確認ください。',
      },
    },
  ],
}

const steps = [
  {
    step: '01',
    label: 'ご予約',
    desc: '公式WEB予約（B-merit）・ホットペッパービューティー・お電話・LINEのいずれかからご予約ください。24時間いつでもオンライン予約が可能です。当日予約にも対応しています。',
  },
  {
    step: '02',
    label: 'ご来店',
    desc: 'お車でのご来店は店舗前の無料駐車場をご利用ください。君津駅からは車で約5分、君津ICから約10分です。仕事帰りのスーツ・普段着でそのままお越しください。',
  },
  {
    step: '03',
    label: '受付・お着替え',
    desc: 'ご来店いただきましたら受付にてお名前をお知らせください。施術着はご用意していますので、更衣スペースにてお着替えください。着替えのお持ち込みは不要です。',
  },
  {
    step: '04',
    label: 'カウンセリング',
    desc: 'スタッフがその日の体の状態・気になる部位・施術の強さのご希望などを丁寧にお聞きします。初めての方でも遠慮なくご要望をお伝えください。最適な施術内容をご提案します。',
  },
  {
    step: '05',
    label: '施術',
    desc: '専用ベッドでリラックスしながら施術をお受けください。施術中、圧の強さや気になる点があれば遠慮なくお申し付けください。眠ってしまっても大丈夫です。',
  },
  {
    step: '06',
    label: '施術後・お着替え',
    desc: '施術終了後はゆっくりお着替えください。体がほぐれた状態ですので、水分補給をおすすめしています。施術後の体の感想・次回のご要望もお気軽にお伝えください。',
  },
  {
    step: '07',
    label: 'お会計・ご帰宅',
    desc: 'お会計は現金またはクレジットカードにてお支払いいただけます。次回のご予約もこのタイミングで承ります。またのご来店をスタッフ一同お待ちしております。',
  },
]

const faqs = [
  {
    q: '何を着て行けばいいですか？',
    a: '特別な服装でお越しいただく必要はありません。スーツや仕事帰りの服でもそのままお越しください。施術前に当店でご用意した施術着にお着替えいただきます。着替えをお持ちいただく必要はありません。',
  },
  {
    q: '着替えは必要ですか？',
    a: '施術着は当店でご用意していますので、着替えをお持ちいただく必要はありません。施術前に更衣スペースにてお着替えいただきます。仕事帰りにそのままお越しいただいても安心です。',
  },
  {
    q: 'コースはどう選べばいいですか？',
    a: '初めての方には60分コース（¥4,500・合計70分計）をおすすめしています。全身をバランスよくケアでき、体の状態を感じていただきやすいコースです。まずお試ししたい方は45分コース（¥3,900）も好評です。カウンセリング時にスタッフにご相談いただければ、その日の体の状態に合わせてご提案します。',
  },
  {
    q: '予約なしで行っても大丈夫ですか？',
    a: 'ご予約なしでのご来店も受け付けていますが、混雑状況によってはお待ちいただく場合があります。特に週末・祝日・夜の時間帯はご予約が埋まりやすいため、なるべく事前のご予約をおすすめしています。',
  },
  {
    q: 'どのくらい前に予約しておけばいいですか？',
    a: '平日の昼間であれば前日・当日のご予約でも対応できることが多いです。週末・祝日・夜の時間帯は早めに埋まりやすい傾向があります。ご希望の日時がある場合は、3〜7日前のご予約をおすすめしています。',
  },
  {
    q: '施術中に話しかけてもいいですか？',
    a: 'どちらでも大丈夫です。会話しながらリラックスしたい方も、静かに施術に集中したい方も、スタッフはお客様のペースに合わせます。眠ってしまっても問題ありません。施術終了時に優しくお声がけします。',
  },
  {
    q: '施術後に気をつけることは？',
    a: '施術後は体がほぐれた状態になっています。水分をしっかり補給してください。施術直後の激しい運動はお体への負担になることがあります。翌日に軽い筋肉痛のような感覚が出ることがありますが、一時的な反応です。気になる場合はスタッフにご相談ください。',
  },
  {
    q: '値段はいくらくらいですか？',
    a: 'もみほぐしは45分¥3,900から。60分¥4,500（合計70分計）、90分¥6,400（合計100分計）、120分¥8,400のコースをご用意しています。ヘッドケア・足つぼ・セットコースなど各種メニューはご予約ページをご確認ください。初回クーポンもホットペッパービューティーにてご用意しています。',
  },
]

const recommendedMenus = [
  {
    en: 'Body Care 60min',
    label: 'もみほぐし 60分',
    price: '¥4,500（合計70分計）',
    desc: '首・肩・背中・腰・脚を全身バランスよくケア。初めての方に最もおすすめのコースです。「全身スッキリさせたい」「どのコースか迷っている」方にぴったりです。',
    href: '/menu/body-care',
  },
  {
    en: 'Head Set 60min',
    label: 'ヘッドセット 60分',
    price: '¥5,400',
    desc: 'もみほぐし＋ヘッドケアのセットコース。肩こりと眼精疲労が両方気になる方、デスクワーク疲れにお悩みの方におすすめです。頭まわりもすっきりほぐします。',
    href: '/menu/set',
  },
  {
    en: 'Foot Reflexology 30min',
    label: '足つぼ 30分',
    price: '¥3,800',
    desc: '足のだるさ・むくみが気になる方に。短時間でのお試しにも最適です。立ち仕事・長時間の歩行後のケアに喜ばれています。',
    href: '/menu/foot',
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

      {/* ===== Welcome Message ===== */}
      <section className="py-16 lg:py-20 bg-cream-50">
        <div className="max-w-5xl mx-auto px-5 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-14 lg:items-center">
          <div>
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-4">Welcome</p>
            <h2 className="text-2xl font-light tracking-wide text-stone-800 mb-6 leading-snug">
              はじめてでも、<br />安心してお越しください
            </h2>
            <p className="text-stone-700 leading-loose text-sm">
              もみほぐし・MARISA 君津店は、千葉県君津市にあるリラクゼーションサロンです。肩こり・腰のつらさ・眼精疲労・足のだるさなど、毎日の疲れを丁寧な施術でケアします。
            </p>
            <p className="text-stone-700 leading-loose text-sm mt-4">
              「はじめてのサロンで緊張している」「どんな流れで進むのかわからない」「強さを遠慮なく言えるか不安」——そんな方も大丈夫です。当店では初めての方にも安心してお過ごしいただけるよう、カウンセリングから施術まで丁寧にサポートします。
            </p>
            <p className="text-stone-700 leading-loose text-sm mt-4">
              施術着はご用意していますので手ぶらでお越しいただけます。仕事帰りのスーツのまま、お子様連れ、ご夫婦でのご来店など、さまざまなスタイルでのご利用を歓迎しています。夜0時まで営業・当日予約OK・無料駐車場完備と、通いやすい環境を整えています。
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
            ja="ご来店の流れ（7ステップ）"
            lead="初めての方にも安心していただけるよう、ご予約からお帰りまでの流れをご説明します。"
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
            <div className="border-l-2 border-brown-300 pl-5">
              <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">手ぶら・着替え不要で来店OK</h3>
              <p className="text-sm text-stone-700 leading-loose">
                施術着・フェイスシート・タオルはすべてご用意しています。着替えをお持ちいただく必要はありません。仕事帰りにそのままお越しいただけます。貴重品も安全に保管できますのでご安心ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Recommended Menus ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Recommended Menu"
            ja="初めての方向けおすすめメニュー"
            lead="「何を選べばいいかわからない」という方に、スタッフのおすすめをご紹介します。"
            centered
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedMenus.map((menu) => (
              <div key={menu.en} className="bg-cream-50 border border-sand-200 p-7 flex flex-col">
                <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-2">{menu.en}</p>
                <h3 className="text-base font-medium text-stone-800 tracking-wide mb-1">{menu.label}</h3>
                <p className="text-sm text-brown-500 font-light mb-4">{menu.price}</p>
                <p className="text-sm text-stone-700 leading-loose flex-1">{menu.desc}</p>
                <div className="mt-6">
                  <Link
                    href={menu.href}
                    className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
                  >
                    詳しく見る →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/menu"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
            >
              全メニュー・料金を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Points / What to Bring ===== */}
      <section className="py-16 lg:py-20 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Points to Know"
            ja="来店のポイント・持ち物"
            lead="はじめてのご来店前に確認しておくと安心な情報をまとめました。"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: '着替えは不要',
                desc: '施術着はご用意しています。手ぶらでOKです。',
              },
              {
                title: '貴重品の管理',
                desc: '施術中はスタッフが安全に保管します。アクセサリーは施術前に外してください。',
              },
              {
                title: '飲食は施術前に軽めに',
                desc: '食事直後の施術はお体の負担になる場合があります。施術の1〜2時間前までに食事を済ませるのがベストです。',
              },
              {
                title: '施術後は水分補給を',
                desc: '施術後は体がほぐれた状態です。お水やお茶などで水分補給をおすすめしています。',
              },
              {
                title: 'アクセサリー・コンタクトについて',
                desc: 'ネックレスや指輪などは施術前に外していただきます。コンタクトレンズも外しておくと楽に施術を受けられます。',
              },
              {
                title: '体調がすぐれない場合',
                desc: '発熱・体調不良の場合は施術をお控えください。体の状態に不安がある場合はご来店前にご相談ください。',
              },
            ].map((item) => (
              <div key={item.title} className="border border-sand-200 bg-cream-50 p-5">
                <p className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{item.title}</p>
                <p className="text-sm text-stone-700 leading-loose">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="FAQ"
            ja="初めての方によくあるご質問"
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

      {/* ===== Voices ===== */}
      <section className="py-16 lg:py-20 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Our Guests"
            ja="こんな方にご来店いただいています"
            lead="MARISAには、さまざまなきっかけや目的でお越しいただいています。"
          />
          <div className="mt-10 space-y-5">
            {[
              {
                scene: 'デスクワーク中心の方',
                text: '毎日パソコン作業で肩・首がカチカチに。仕事帰りに立ち寄って、翌日スッキリした状態で出社できるようになりました。夜0時まで営業しているので、残業後でも来られるのが助かります。',
              },
              {
                scene: '立ち仕事・体を使う仕事の方',
                text: '工場や接客業で一日中立ち仕事。足のだるさとむくみがひどかったのが、足つぼコースで楽になりました。2週間に1回のペースで通っています。',
              },
              {
                scene: 'ご夫婦・カップルでの利用',
                text: '2人で一緒に施術を受けられると聞いて来店しました。ベッドが3台あるので一緒の時間に受けられて、終わった後も2人でリフレッシュできて良かったです。',
              },
              {
                scene: '初めてサロンに来た方',
                text: 'マッサージサロンって敷居が高いイメージでしたが、スタッフの方が丁寧にカウンセリングしてくれて安心できました。服装も特に気にしなくていいし、着替えも用意してくれていたので楽でした。',
              },
            ].map((voice, i) => (
              <div key={i} className="border border-sand-200 bg-cream-50 p-6">
                <p className="text-xs tracking-widest text-brown-400 mb-3">{voice.scene}</p>
                <p className="text-sm text-stone-700 leading-loose">{voice.text}</p>
              </div>
            ))}
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

      {/* ===== Related Links ===== */}
      <section className="py-12 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 uppercase mb-6">Related Pages</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { href: '/menu', label: 'メニュー・料金', sub: 'Menu' },
              { href: '/faq', label: 'よくある質問', sub: 'FAQ' },
              { href: '/reservation', label: 'ご予約方法', sub: 'Reservation' },
              { href: '/access', label: 'アクセス', sub: 'Access' },
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
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">
            ご予約・お問い合わせ
          </h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業中・当日予約OK・無料駐車場完備。<br />
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
