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
    '千葉県君津市のリラクゼーションサロン「MARISA」の足つぼ・リフレクソロジー。足裏の反射区を丁寧に刺激し、足のだるさ・むくみ・冷え性のケアに。30分¥3,800〜60分¥5,500。当日予約OK。',
  keywords: ['君津 足つぼ', '君津 リフレクソロジー', '君津 足マッサージ', '君津 むくみ ケア', '君津 足 だるさ'],
  openGraph: {
    title: '君津の足つぼ・リフレクソロジー｜MARISA 君津店',
    description: '千葉県君津市「MARISA」の足つぼ・リフレクソロジー。30分¥3,800〜。足のだるさ・むくみ・冷え性のケアに。当日予約OK。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/menu/foot' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '足つぼは痛いですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '反射区によっては刺激を強く感じる場所もありますが、圧の強さはお客様のご要望に合わせて調整できます。「痛気持ちいい」と感じる程度の圧が一般的に好まれています。施術中はいつでも強さの調整をお申し付けください。',
      },
    },
    {
      '@type': 'Question',
      name: '30分と60分の違いは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '30分コースは足裏を中心に集中的にケアします。手軽に体験したい方・時間が限られている方に向いています。60分コースは足裏に加えてふくらはぎまでゆっくりとケアできます。立ち仕事・むくみが気になる方には60分をおすすめしています。',
      },
    },
    {
      '@type': 'Question',
      name: '足のむくみに特に効果的な時間はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'むくみが特に気になる方には、ふくらはぎまでケアできる60分コースをおすすめしています。ふくらはぎは「第二の心臓」とも呼ばれ、ここをほぐすことで血液・リンパの流れが大きく促進されます。',
      },
    },
    {
      '@type': 'Question',
      name: '足つぼだけを予約することはできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、足つぼ単体（30分・60分）でのご予約が可能です。WEB予約から「足つぼコース」をお選びください。',
      },
    },
    {
      '@type': 'Question',
      name: '妊娠中でも受けられますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '妊娠中の方への足つぼ施術は安全面を考慮し、ご対応が難しい場合がございます。ご来店前にあらかじめお電話またはホットペッパービューティーのメッセージよりお問い合わせください。',
      },
    },
  ],
}

const reflexAreas = [
  {
    zone: '足裏全体（反射区）',
    effect: '足裏には体の各臓器・器官に対応した反射区が集中しています。これらの反射区を適切な圧で刺激することで、全身の血行促進と体全体のリフレッシュが期待できます。',
  },
  {
    zone: '足の指・付け根',
    effect: '頭部・頸部・目・耳などに対応した反射区が集まっています。首のこわばりや目の疲れ感が気になる方にも足の指のケアは有効です。',
  },
  {
    zone: 'かかと周辺',
    effect: '骨盤・腸・坐骨に対応した反射区が集中しています。腰のつらさや骨盤周りの重さが気になる方にアプローチするポイントです。',
  },
  {
    zone: 'ふくらはぎ（60分コース）',
    effect: '「第二の心臓」とも呼ばれるふくらはぎ。ここの筋肉が動くことで血液が心臓に向かって押し上げられます。ふくらはぎをほぐすことで足全体の血行とリンパの流れが整います。',
  },
]

const targets = [
  {
    label: '立ち仕事で足がパンパンになる方',
    desc: '長時間の立ち仕事は足の筋肉・血管に大きな負担をかけます。足裏からふくらはぎまでまとめてほぐすことで、蓄積した疲れをやわらげます。',
  },
  {
    label: '夕方になると足のむくみが気になる方',
    desc: '重力の影響で夕方に向けて足のむくみは溜まりやすくなります。定期的な足つぼケアで、むくみの負担軽減をサポートします。',
  },
  {
    label: '冷え性で足先が冷たい方',
    desc: '足裏のケアで血行を促進することで、足先の冷えをやわらげるサポートになります。季節の変わり目や冬場のケアに特に人気です。',
  },
  {
    label: '長時間座っていて足がだるい方',
    desc: 'デスクワークで長時間座り続けると、足の血流が滞りやすくなります。足裏のケアで全身のめぐりを促進します。',
  },
  {
    label: '旅行・観光の後に足が疲れた方',
    desc: '長距離移動・観光で疲れた足をリフレッシュするのに最適。旅行帰りの方にも気軽にご利用いただいています。',
  },
  {
    label: '普段から足の重さ・だるさを感じる方',
    desc: '慢性的な足のだるさは、血行不良や筋肉の緊張が原因の場合が多いです。定期的なケアで体の状態を整えます。',
  },
  {
    label: '運動後の足のケアをしたい方',
    desc: '運動後の筋肉の緊張をほぐし、回復を助けます。スポーツ後の定期ケアとしてご利用の方も多いです。',
  },
  {
    label: '全身ではなく足を集中的にほぐしたい方',
    desc: '「今日は足だけをしっかりケアしたい」という方に。足つぼ単体コース（30分・60分）でピンポイントにアプローチできます。',
  },
  {
    label: '初めてリフレクソロジーを試してみたい方',
    desc: '初めての方も30分コースから気軽に体験できます。カウンセリングで不安なことをお聞きした上で施術を行います。',
  },
  {
    label: 'もみほぐしとあわせて全身ケアをしたい方',
    desc: '足つぼセットコース（もみほぐし＋足つぼ）で全身と足を同時にケア。「全部まとめてリフレッシュしたい」という方に好評です。',
  },
]

const steps = [
  {
    step: '01',
    title: 'ご予約',
    desc: 'WEB予約（B-merit・ホットペッパービューティー）または当日のご来店受付。',
  },
  {
    step: '02',
    title: 'ご来店・受付',
    desc: 'スタッフがお迎えします。施術着へのお着替えをご案内します。',
  },
  {
    step: '03',
    title: 'カウンセリング',
    desc: '足の状態・気になる部位・圧の強さのご希望をお聞きします。初めての方は特に圧の調整をていねいに行います。',
  },
  {
    step: '04',
    title: '施術',
    desc: 'リクライニングチェアでリラックスした体勢で施術を行います。足裏から丁寧にアプローチします（60分コースはふくらはぎも含む）。',
  },
  {
    step: '05',
    title: 'お会計',
    desc: '施術後は足の軽さをぜひ実感してください。次回のご予約もこちらで承ります。',
  },
]

const faqs = [
  {
    q: '足つぼは痛いですか？',
    a: '反射区によっては刺激を強く感じる場所もありますが、施術の圧はお客様のご要望に合わせてすべて調整できます。「痛気持ちいい」と感じる程度が多くの方に好まれていますが、強さが気になる場合はいつでもお申し付けください。無理に痛みを我慢する必要はありません。',
  },
  {
    q: '30分と60分の違いは何ですか？',
    a: '30分コースは足裏を中心に集中的にケアします。手軽に体験したい方・時間が限られている方・他のメニューとの組み合わせを考えている方に向いています。60分コースは足裏に加えてふくらはぎまでゆっくりとケアできます。立ち仕事・むくみ・冷えが気になる方には60分をおすすめしています。',
  },
  {
    q: '足のむくみに特に効果的な時間はありますか？',
    a: 'むくみが特に気になる方には、ふくらはぎまでケアできる60分コースをおすすめしています。ふくらはぎは「第二の心臓」とも呼ばれ、ここをほぐすことで血液・リンパの流れが大きく促進されます。「夕方になると足がパンパン」という方に特に好評です。',
  },
  {
    q: '足つぼだけを予約することはできますか？',
    a: 'はい、足つぼ単体（30分・60分）でのご予約が可能です。WEB予約から「足つぼコース」をお選びください。もみほぐしとのセットをご希望の場合は「足つぼセット」からご予約いただけます。',
  },
  {
    q: '妊娠中でも受けられますか？',
    a: '妊娠中の方への足つぼ施術は安全面を考慮し、ご対応が難しい場合がございます。ご来店前にあらかじめお電話またはホットペッパービューティーのメッセージよりお問い合わせください。',
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
              立ち仕事やデスクワークで足がだるい、夕方になるとむくみやすい、足先が冷えやすいという方に。MARISAの足つぼ・リフレクソロジーは、足裏の反射区を丁寧に刺激し、足のだるさ・むくみ・冷え性の負担をやわらげます。30分¥3,800〜60分¥5,500。もみほぐしとのセットコースもご用意。当日予約OK・夜0時まで営業・無料駐車場完備。
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

      {/* ===== About ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="About"
            ja="MARISAの足つぼ・リフレとは"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
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
              施術はリクライニングチェアで受けていただきます。圧の強さはいつでも調整可能で、初めての方も安心してお受けいただけます。足つぼコース（30分・60分）のほか、もみほぐしと組み合わせた「足つぼセット」（60分・90分・120分）もご用意しています。体全体の疲れをとりながら、足元からしっかりリフレッシュしていただけます。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Reflex Areas ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Areas"
            ja="施術の特徴・ほぐす部位"
            lead="足つぼ・リフレクソロジーでアプローチする主な部位をご紹介します。"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {reflexAreas.map((area) => (
              <div key={area.zone} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{area.zone}</h3>
                <p className="text-sm text-stone-700 leading-loose">{area.effect}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 border border-sand-200 bg-sand-100 p-6">
            <p className="text-sm text-stone-700 leading-loose">
              圧の強さはカウンセリング時にご確認し、施術中も随時調整します。「痛気持ちいい」と感じる程度の圧が多くの方に好まれていますが、敏感な方や初めての方には優しめの圧から始めます。お気軽にご要望をお知らせください。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Who Is It For ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Recommended For"
            ja="こんな方におすすめ"
            lead="足つぼ・リフレクソロジーが特に喜ばれているお客様のタイプをご紹介します。"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
            {targets.map((t) => (
              <div key={t.label} className="border border-sand-200 bg-cream-50 p-5">
                <div className="flex items-start gap-3 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brown-400 mt-1.5 shrink-0" />
                  <h3 className="text-sm font-medium text-stone-800 leading-snug">{t.label}</h3>
                </div>
                <p className="text-xs text-stone-700 leading-loose pl-4">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 max-w-3xl border border-sand-200 bg-sand-100 p-6">
            <p className="text-sm text-stone-700 leading-loose">
              特に、仕事で長時間立ちっぱなしになる方・歩き回る方・デスクワークで長時間同じ姿勢が続く方は、足に疲れや老廃物が溜まりやすい状態にあります。定期的に足つぼのケアを続けることで、蓄積した疲れをリセットしやすくなります。月に1〜2回のペースでのご利用をおすすめしています。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Courses ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Courses"
            ja="足つぼコース・料金"
            lead="お時間やご要望に合わせてお選びください。"
            centered
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-cream-50 border border-sand-200 p-7">
              <h2 className="text-base font-medium text-stone-800 mb-1 tracking-wide">足つぼコース 30分</h2>
              <p className="font-en text-2xl text-brown-400 mb-4 font-light">¥3,800</p>
              <p className="text-sm text-stone-700 leading-loose mb-6">
                足裏の反射区を短時間で集中ケア。仕事帰りの気軽なリフレッシュに。「まずは試してみたい」という初めての方にも人気のコースです。
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
                足裏・ふくらはぎをゆったりとしたペースで丁寧にケア。立ち仕事・むくみ・冷えが気になる方には60分がおすすめです。
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

      {/* ===== How to Choose a Course ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Guide"
            ja="コース時間の選び方"
            lead="迷ったときはこちらを参考にしてください。"
          />
          <div className="mt-10 space-y-4">
            <div className="border border-sand-200 bg-cream-50 p-5">
              <div className="flex items-start gap-4">
                <span className="font-en text-xl text-brown-400 font-light shrink-0">30分</span>
                <div>
                  <p className="text-sm font-medium text-stone-800 mb-1">足裏を集中ケア・初体験・時間が限られている方に</p>
                  <p className="text-xs text-stone-700 leading-loose">足裏の反射区を中心に集中ケア。「まずは体験してみたい」「短時間でさっとほぐしたい」という方に向いています。他のメニューとの組み合わせとしても利用しやすいコースです。</p>
                </div>
              </div>
            </div>
            <div className="border border-brown-300 bg-cream-50 p-5">
              <div className="flex items-start gap-4">
                <span className="font-en text-xl text-brown-400 font-light shrink-0">60分</span>
                <div>
                  <p className="text-sm font-medium text-stone-800 mb-1">足裏からふくらはぎまでゆっくりケア・むくみ・冷えの方に</p>
                  <p className="text-xs text-stone-700 leading-loose">足裏の反射区に加え、ふくらはぎまでしっかりとケアできます。「夕方になると足がパンパン」「足先が冷える」という方には60分がおすすめです。立ち仕事の方からも好評です。</p>
                </div>
              </div>
            </div>
            <div className="border border-sand-200 bg-sand-100 p-5">
              <div className="flex items-start gap-4">
                <span className="font-en text-xl text-brown-400 font-light shrink-0 leading-tight">足つぼ<br />セット</span>
                <div>
                  <p className="text-sm font-medium text-stone-800 mb-1">全身と足をまとめてケアしたい方に（60分〜）</p>
                  <p className="text-xs text-stone-700 leading-loose">もみほぐし＋足つぼのセットコース（60分¥5,500〜120分¥8,900）。「上半身も下半身もまとめてほぐしたい」という方に。体全体の疲れをリセットするのに最適です。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Combination ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Combination"
            ja="もみほぐしとの組み合わせ"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
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

      {/* ===== Flow ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Flow"
            ja="施術の流れ"
            lead="初めての方も安心してご来店いただけます。"
          />
          <div className="mt-10 space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="flex items-start gap-5 border border-sand-200 bg-cream-50 p-5">
                <span className="font-en text-2xl text-brown-400 font-light shrink-0">{s.step}</span>
                <div>
                  <p className="text-sm font-medium text-stone-800 mb-1 tracking-wide">{s.title}</p>
                  <p className="text-xs text-stone-700 leading-loose">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Related Symptoms ===== */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 uppercase mb-4">Related Symptoms</p>
          <p className="text-sm text-stone-700 mb-6">足つぼ・リフレクソロジーに関連するお悩みを症状別にご紹介しています。</p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: '足のだるさ・むくみ', href: '/symptom/leg-fatigue' },
              { label: '冷え・むくみ', href: '/symptom/cold-body' },
              { label: '全身疲労', href: '/symptom/fatigue' },
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
            夜0時まで営業中・当日予約OK・無料駐車場完備。<br />
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
