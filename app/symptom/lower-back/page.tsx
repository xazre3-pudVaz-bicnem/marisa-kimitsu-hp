import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津の腰のつらさ・腰まわりのケア｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」の腰まわりのケア。長時間の座り仕事・立ち仕事による腰のだるさや重さを、もみほぐしで負担をやわらげます。当日予約OK・夜0時まで営業。',
  keywords: ['君津 腰痛 マッサージ', '君津 腰 もみほぐし', '君津 腰まわり ケア', '君津 腰 リラクゼーション'],
  openGraph: {
    title: '君津の腰のつらさ・腰まわりのケア｜MARISA 君津店',
    description: '千葉県君津市のリラクゼーションサロン「MARISA」の腰まわりのケア。長時間の座り仕事・立ち仕事による腰のだるさや重さを、もみほぐしで負担をやわらげます。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/symptom/lower-back' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '腰のつらさに対応したコースはありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、もみほぐし（45分・60分・90分）で腰まわりのケアに対応しています。腰だけでなく背中・臀部（お尻まわり）もまとめてほぐせる60分コースが、腰のお悩みには特におすすめです。施術前のカウンセリングで腰を重点的に見てほしい旨をお伝えください。',
      },
    },
    {
      '@type': 'Question',
      name: 'もみほぐしは腰の医療的な治療になりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MARISAのもみほぐしはリラクゼーションを目的とした施術であり、医療行為ではありません。腰の病気（椎間板ヘルニア、脊柱管狭窄症など）の治療にはなりません。腰の痛みが強い場合、足のしびれを伴う場合は、必ず整形外科などの医療機関を受診してください。',
      },
    },
    {
      '@type': 'Question',
      name: '腰のほかに背中やお尻も気になります。合わせてほぐせますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、もみほぐしでは腰・背中・臀部（お尻まわり）も含めてケアできます。腰のつらさには背中や臀部の筋肉が関わっていることが多いため、腰まわり全体をほぐすことで負担をやわらげやすくなります。どの部位を重点的にほぐすか、カウンセリングでご相談ください。',
      },
    },
    {
      '@type': 'Question',
      name: '腰のつらさで横になるのがつらいのですが、施術できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '基本的にうつ伏せで施術を行いますが、腰の状態によっては仰向けやサイドの体勢に変更することも可能です。施術前のカウンセリングでお体の状態をお聞きし、無理のない体勢で対応します。痛みが強い・動くのがつらい場合は、まず医療機関のご受診をおすすめします。',
      },
    },
  ],
}

const causes = [
  {
    title: '長時間の座り仕事',
    desc: 'デスクワークや車の運転など、長時間座り続けると腰の筋肉は常に体重を支えながら緊張した状態になります。特に前かがみの姿勢や、骨盤が後傾した「へたり座り」は腰への負担が大きく、腰のだるさや重さの原因になります。',
  },
  {
    title: '長時間の立ち仕事',
    desc: '飲食・販売・製造業など立ち仕事の多い方も、腰のつらさを抱えやすい傾向があります。長時間同じ姿勢で立ち続けると、腰まわりの筋肉が疲弊し、夕方になるほど腰が重くなる・だるくなるといった症状が現れやすくなります。',
  },
  {
    title: '体の使い方の偏り・ゆがみ感',
    desc: '体の重心が一側に偏っている、荷物をいつも同じ側で持つ、片足に体重をかけて立つ癖がある、といった習慣が続くと腰まわりの筋肉に偏った負担がかかります。左右のバランスが崩れることで腰の張りや重さが生じやすくなります。',
  },
]

const bodyConnection = [
  {
    area: '背中（脊柱起立筋）',
    desc: '背骨の両側を走る脊柱起立筋は、腰の筋肉と連続してつながっています。背中が固まると腰の動きにも影響するため、腰と背中はセットでほぐすことが重要です。',
  },
  {
    area: '臀部（お尻まわり）',
    desc: '大臀筋・中臀筋など臀部の筋肉は、腰の動きを支えています。お尻が固まると腰への負担が増し、腰のだるさや重さにつながります。',
  },
  {
    area: '股関節・太もも',
    desc: '股関節や太もも前面の筋肉（大腰筋・腸腰筋など）は腰椎に直接つながる深部の筋肉です。長時間の座り仕事でこれらが縮まると、腰が前に引っ張られた状態になります。',
  },
]

const faqs = [
  {
    q: '腰のつらさに対応したコースはありますか？',
    a: 'もみほぐし（45分・60分・90分）で腰まわりのケアに対応しています。腰・背中・臀部をまとめてケアできる60分コースが特におすすめです。施術前のカウンセリングで腰を重点的に見てほしい旨をお伝えいただければ、その日の施術内容を調整します。',
  },
  {
    q: 'もみほぐしは腰の医療的な治療になりますか？',
    a: 'MARISAのもみほぐしはリラクゼーションを目的とした施術であり、医療行為ではありません。腰の疾患（ヘルニア・脊柱管狭窄症など）の治療にはなりません。腰の痛みが強い場合、下肢のしびれを伴う場合は、整形外科など医療機関を先にご受診ください。',
  },
  {
    q: '腰のほかに背中やお尻も気になります。合わせてほぐせますか？',
    a: 'はい、腰・背中・臀部はまとめてケアできます。腰のつらさには背中や臀部の筋肉が関与していることが多く、腰まわり全体をほぐすことで負担がやわらぎやすくなります。どの部位を優先するかはカウンセリングでご相談ください。',
  },
  {
    q: '腰のつらさで横になるのがつらいのですが、施術できますか？',
    a: '基本はうつ伏せですが、体の状態によって仰向けや横向きに変更することも可能です。施術前に状態をお聞きし、無理のない体勢で対応します。痛みが強い・動かすと激しく痛む場合は、先に医療機関をご受診ください。',
  },
]

export default function LowerBackPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ===== Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'お悩み別', href: '/symptom' },
              { label: '腰のつらさ' },
            ]}
          />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Lower Back Care</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800">
              腰のだるさ・重さを、しっかりほぐして負担をやわらげる
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「仕事が終わると腰が重い」「朝起きるときに腰がだるい」「長時間座っていると腰が張ってくる」——そのようなお悩みを抱える方が、君津市内からも多くご来店されています。MARISAのもみほぐしで、腰まわりの筋肉の緊張をやわらげ、体の負担を整えます。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Medical Disclaimer ===== */}
      <div className="bg-cream-100 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-5">
          <p className="text-xs text-stone-700 leading-loose">
            <span className="font-medium">ご注意：</span>MARISAのもみほぐしはリラクゼーションを目的とした施術であり、医療行為ではありません。腰の痛みが強い・足のしびれがある・動くのがつらいなどの症状がある場合は、整形外科などの医療機関を受診してください。
          </p>
        </div>
      </div>

      {/* ===== Visual ===== */}
      <section className="bg-stone-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-0.5">
            <div className="relative aspect-[16/7] overflow-hidden">
              <Image src="/LINE_ALBUM_もみほぐしMARISA_260615_15.jpg" alt="君津 腰のつらさ もみほぐし 腰の施術" fill className="object-cover" />
            </div>
            <div className="relative aspect-[16/7] overflow-hidden">
              <Image src="/LINE_ALBUM_もみほぐしMARISA_260615_12.jpg" alt="君津 腰まわり ケア 深部ほぐし" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Causes ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Causes"
            ja="腰のつらさの主な原因"
            lead="腰のだるさ・重さには、日常の生活習慣や仕事環境が大きく影響します。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {causes.map((c) => (
              <div key={c.title} className="border border-sand-200 p-6 bg-cream-50">
                <h3 className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{c.title}</h3>
                <p className="text-sm text-stone-700 leading-loose">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 prose-marisa max-w-3xl">
            <p>
              腰のつらさの多くは、日常的な体の使い方の積み重ねによるものです。「急に重いものを持ったから」というケースよりも、毎日の姿勢や動作の癖が蓄積して腰の筋肉が疲弊していくことが多いと言われています。そのため、定期的なケアで筋肉の緊張をリセットすることが、腰の負担を軽減するうえで効果的です。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Body Connection ===== */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Connection"
            ja="腰と背中・お尻のつながり"
            lead="腰のつらさは、腰単体ではなく周辺の筋肉全体に関わっています。"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {bodyConnection.map((c) => (
              <div key={c.area} className="border border-sand-200 p-6 bg-cream-50">
                <p className="text-xs tracking-widest text-brown-400 uppercase mb-2">{c.area}</p>
                <p className="text-sm text-stone-700 leading-loose">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MARISA Approach ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Our Approach"
            ja="MARISAの腰まわりへのアプローチ"
          />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              腰のお悩みに対して、MARISAでは腰・背中・臀部（お尻まわり）をまとめてほぐすアプローチを行います。腰の筋肉だけをほぐしても、背中や臀部の緊張が残っていれば腰への負担は変わりません。周辺の筋肉全体を整えることで、腰のだるさや重さがやわらぎやすくなります。
            </p>
            <p>
              施術は専用ベッドにうつ伏せになっていただき、脊柱起立筋・腰方形筋・大臀筋・中臀筋など、腰まわりに関わる筋肉を丁寧にほぐします。圧の強さはカウンセリングで確認し、腰の状態に合わせて調整します。「腰は強めに、背中は普通で」など細かいご要望にも対応します。
            </p>
            <p>
              腰のお悩みが長く続いている方には、全身のケアを合わせた60分・90分コースをおすすめしています。全身の筋肉のバランスを整えることで、特定部位への過剰な負担が生じにくくなります。定期的なご来店（2〜4週間に1回が目安）でお体のコンディションを維持されている方も多いです。
            </p>
            <p>
              なお、腰の痛みが強い・足のしびれがある・安静にしていても痛みがある場合は、医療機関（整形外科）のご受診をおすすめします。MARISAのもみほぐしはリラクゼーション施術であり、医療的な治療を行うものではありません。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Recommended Menus ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Menus"
            ja="腰まわりのケアにおすすめのメニュー"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Body Care</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">もみほぐし 60分</h3>
              <p className="text-sm text-stone-700 leading-loose mb-4">腰・背中・臀部をバランスよくほぐします。腰のお悩みには60分がおすすめです。</p>
              <Link href="/menu/body-care" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
                もみほぐしを見る →
              </Link>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Full Body</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">もみほぐし 90分</h3>
              <p className="text-sm text-stone-700 leading-loose mb-4">腰だけでなく全身をじっくりほぐしたい方に。疲れが深い方・慢性化している方に向いています。</p>
              <Link href="/menu/body-care" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
                コース詳細を見る →
              </Link>
            </div>
            <div className="border border-sand-200 bg-cream-50 p-6">
              <p className="text-xs tracking-widest text-brown-400 mb-2">Acupuncture</p>
              <h3 className="text-sm font-medium text-stone-800 mb-2">鍼灸メニュー</h3>
              <p className="text-sm text-stone-700 leading-loose mb-4">腰・背中の気になる部位に鍼のアプローチを加えるメニュー。もみほぐし＋鍼のセットもあります。</p>
              <Link href="/menu/acupuncture" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
                鍼灸メニューを見る →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Kimitsu Life Patterns ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Life in Kimitsu" ja="君津市での日常と腰のつらさ" />
          <div className="mt-8 space-y-5 text-sm text-stone-700 leading-loose">
            <p>
              君津市は製造業・工場勤務の方から、デスクワーク中心のオフィス勤務の方、飲食・販売業の方まで、さまざまな就業形態の方が暮らす地域です。業種によって腰への負担のかかり方は違いますが、共通するのは「日々の疲れが腰に積み重なっていく」という点です。
            </p>
            <div className="border border-sand-200 bg-cream-100 p-6 space-y-4">
              <div>
                <h3 className="font-medium text-stone-800 mb-1 tracking-wide">工場・製造業の方</h3>
                <p>同じ動作の繰り返し、長時間の立ち仕事、重い物を扱う作業による腰への負担が蓄積しやすいです。夕方になるにつれ腰のだるさが増す方が多く、仕事帰りにMARISAでケアされる方も多数いらっしゃいます。</p>
              </div>
              <div>
                <h3 className="font-medium text-stone-800 mb-1 tracking-wide">デスクワーク・事務職の方</h3>
                <p>一日中座って作業する方の腰への負担は意外に大きく、特に椅子の状態や姿勢の習慣によっては慢性的な腰のだるさになりやすいです。PC作業で肩こりと腰のつらさを同時に抱える方が多いため、もみほぐしでまとめてケアされる方が多いです。</p>
              </div>
              <div>
                <h3 className="font-medium text-stone-800 mb-1 tracking-wide">運転が多い方・外回りの多い方</h3>
                <p>君津市内では車の移動が多く、長時間の運転が腰に大きな負担をかけることがあります。同じ体勢での長距離運転は、腰の筋肉を緊張させたまま保持するため、腰の重さ・だるさを生じやすくします。</p>
              </div>
            </div>
            <p>
              どのようなお仕事・生活スタイルの方でも、腰のつらさが慢性化する前に定期的なケアをすることで、体の負担を軽くしやすくなります。MARISAは夜0時まで営業・当日予約OKで、君津市内どの方面からでもお越しいただきやすい環境を整えています。
            </p>
          </div>
          <div className="mt-6">
            <Link href="/area/kimitsu" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
              君津でマッサージをお探しの方へ →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Related Symptoms ===== */}
      <section className="py-14 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 uppercase mb-6">Related Symptoms</p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: '全身疲労', href: '/symptom/fatigue' },
              { label: '肩こり', href: '/symptom/stiff-shoulder' },
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
            腰のお悩みは、MARISAへ
          </h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業中・当日予約OK。<br />
            君津で腰まわりのケアをお探しの方は、ぜひMARISAにお越しください。
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
