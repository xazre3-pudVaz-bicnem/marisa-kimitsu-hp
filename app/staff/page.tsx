import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津のもみほぐしスタッフ紹介｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」のスタッフ紹介。鍼灸師資格を持つなお・オーナー・めいが在籍。丁寧なカウンセリングと体の状態に合わせた施術で、君津のもみほぐし・鍼灸メニューを提供します。',
  keywords: ['君津 もみほぐし スタッフ', '君津 鍼灸師', '君津 マッサージ 指名', '君津 リラクゼーション なお', '君津 マッサージ 女性'],
  openGraph: {
    title: '君津のもみほぐしスタッフ紹介｜MARISA 君津店',
    description: '鍼灸師資格を持つなお、オーナーが在籍。君津のもみほぐし・鍼灸メニューを丁寧に提供します。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/staff' },
}

// ---- Staff data ----

const mainStaff = [
  {
    id: 'owner',
    name: 'オーナー',
    role: 'オーナー・セラピスト',
    qualificationBadge: null,
    specialties: ['もみほぐし', '足つぼ', 'ヘッドケア'],
    message:
      '「来るたびに楽になれる場所」を目指して、日々の施術に取り組んでいます。お客様のお悩みをしっかりお聞きし、体の状態に合わせた丁寧なケアをご提供します。ご不安なことは何でもお気軽にお申し付けください。',
    image: '/0V2A1767_0.JPG',
    imageAlt: '君津 もみほぐし MARISA オーナー 足ケア施術風景',
  },
  {
    id: 'nao',
    name: 'なお',
    role: '鍼灸師・セラピスト',
    qualificationBadge: '鍼灸師',
    specialties: ['もみほぐし', 'ヘッドケア', '鍼灸メニュー'],
    message:
      '鍼灸師の資格を活かし、もみほぐしとの組み合わせケアを行います。体のつらい部位に丁寧にアプローチし、日々のメンテナンスをサポートします。初めて鍼を試してみたい方も、まずお気軽にご相談ください。',
    // Final image: /images/staff/nao-head-care.jpg
    image: '/S__15343701.jpg',
    imageAlt: '君津 鍼灸師 もみほぐし MARISA なお ヘッドケア施術風景',
  },
  {
    id: 'mei',
    name: 'めい',
    role: 'セラピスト',
    qualificationBadge: null,
    specialties: ['もみほぐし', 'ヘッドケア', 'リラクゼーション'],
    message:
      'お客様一人ひとりのお疲れに寄り添い、落ち着いて過ごせる施術時間を大切にしています。初めての方にも安心してご利用いただけるよう、力加減や気になる箇所を確認しながら、無理のないケアをご提案いたします。',
    image: '/images/staff/mei.jpg',
    imagePending: true,
    imageAlt: '君津 もみほぐし MARISA めい セラピスト',
  },
]

const supportStaff = [
  {
    id: 'yui',
    name: 'ゆい',
    displayLabel: 'サポートスタッフ（不定期出勤）',
    message:
      '主に繁忙期・不定期でサポートとして在籍しています。ご予約の際はホットペッパービューティーの空き状況をご確認ください。',
    image: '/LINE_ALBUM_もみほぐしMARISA_260615_5.jpg',
    imageAlt: '君津 もみほぐし MARISA サポートスタッフ ゆい',
  },
]

// ---- Staff philosophy items ----

const philosophyItems = [
  {
    title: '施術前のカウンセリング',
    body: '毎回の施術前に、体の状態・気になる部位・圧の強さのご希望を丁寧にお聞きします。「最近肩がつらい」「全体的にリセットしたい」など、どんなご要望もお気軽にお伝えください。',
  },
  {
    title: '圧の調整・柔軟な対応',
    body: '「気持ちよく感じる圧」はお一人おひとり異なります。施術中も圧の強さをいつでも調整できます。強すぎる・弱すぎるなど、遠慮なくお申し付けください。',
  },
  {
    title: '資格・専門知識に裏打ちされた施術',
    body: 'なおは鍼灸師の国家資格を保有し、経絡・ツボの知識をもみほぐしに応用します。オーナーも足つぼ・リフレクソロジーの専門知識を持つ経験豊富なセラピストです。',
  },
  {
    title: '定期的な研修・技術向上',
    body: 'スタッフは定期的な研修を通じて技術と知識を更新しています。お客様に安心していただけるケアを提供し続けるため、日々の改善を大切にしています。',
  },
]

// ---- FAQ ----

const faqs = [
  {
    q: '指名は追加料金がかかりますか？',
    a: 'ホットペッパービューティーの指名システムをご利用の場合、指名料が発生する場合があります。最新の料金はホットペッパービューティーのページでご確認ください。',
  },
  {
    q: '初めての来店で「指名なし」でも大丈夫ですか？',
    a: 'はい、もちろん大丈夫です。ご来店時に担当スタッフが対応いたします。2回目以降、気に入ったスタッフを指名することも可能です。',
  },
  {
    q: 'なおさんの鍼灸メニューは初めてでも受けられますか？',
    a: 'はい、鍼が初めての方も歓迎します。施術前に丁寧にご説明しますので、不安なことは何でもお気軽にご相談ください。',
  },
  {
    q: 'スタッフに話しかけなくても大丈夫ですか？',
    a: 'はい、施術中はリラックスしてお過ごしいただければ結構です。眠ってしまっても大丈夫です。お話が好きな方も苦手な方も、それぞれのスタイルで施術をお受けください。',
  },
  {
    q: 'めいさんの施術は予約できますか？',
    a: 'はい、予約の際にめいをご指名いただけます。ご予約はWEB予約（公式）またはホットペッパービューティーから、スタッフ指定のうえお手続きください。出勤日はホットペッパービューティーの空き状況でご確認いただけます。',
  },
  {
    q: 'ヘッドケアはどのスタッフが対応していますか？',
    a: 'オーナー・なお・めいの全スタッフがヘッドケアに対応しています。ご予約時にスタッフをご指名いただくことも可能です。',
  },
]

// ---- Page ----

export default function StaffPage() {
  return (
    <>
      {/* ===== Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'スタッフ' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Our Staff</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800">
              スタッフのご紹介
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              MARISAには、鍼灸師資格を持つセラピストをはじめ、経験豊富なスタッフが在籍しています。
              一人ひとりの体の状態に合わせた施術を心がけ、来るたびに楽になれる場所を目指しています。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Main Staff ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Main Staff"
            ja="在籍スタッフ"
            lead="MARISAを担うメインセラピストをご紹介します。"
          />

          <div className="mt-12 space-y-12 lg:space-y-20">
            {mainStaff.map((staff, index) => (
              <div
                key={staff.id}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-14 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Photo */}
                <div className="w-full lg:w-5/12 flex-shrink-0">
                  <div className="relative aspect-[4/3] overflow-hidden bg-sand-100">
                    {(staff as { imagePending?: boolean }).imagePending ? (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-sand-200 text-stone-400">
                        <svg className="w-12 h-12 mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <p className="text-xs tracking-widest text-stone-400">写真準備中</p>
                      </div>
                    ) : (
                      <Image
                        src={staff.image}
                        alt={staff.imageAlt}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <p className="font-en text-[10px] tracking-widest text-brown-400 uppercase">
                      {staff.role}
                    </p>
                    {staff.qualificationBadge && (
                      <span className="inline-block bg-brown-600 text-cream-50 text-[10px] tracking-widest px-2.5 py-1 uppercase">
                        {staff.qualificationBadge}
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-light tracking-widest text-stone-800 mb-6">
                    {staff.name}
                  </h2>

                  <p className="text-sm text-stone-700 leading-loose mb-7">
                    {staff.message}
                  </p>

                  {/* Specialties */}
                  <div className="mb-8">
                    <p className="text-[10px] tracking-widest uppercase text-brown-400 mb-3">
                      Specialty
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {staff.specialties.map((s) => (
                        <span
                          key={s}
                          className="text-xs border border-sand-200 px-3 py-1.5 text-stone-700 tracking-wide bg-cream-100"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-sand-200 pt-6">
                    <p className="text-[11px] text-stone-500 leading-loose">
                      ご予約の際にスタッフ名をご指定いただけます。
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MARISA Staff Philosophy ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Our Philosophy"
            ja="MARISAのスタッフ像"
            lead="技術・丁寧さ・寄り添う姿勢——MARISAのスタッフが共通して大切にしていることです。"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {philosophyItems.map((item) => (
              <div key={item.title} className="bg-cream-50 border border-sand-200 p-7">
                <div className="border-l-2 border-brown-400 pl-5">
                  <p className="text-sm font-medium text-stone-800 mb-2 tracking-wide">{item.title}</p>
                  <p className="text-sm text-stone-700 leading-loose">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Support Staff ===== */}
      <section className="py-14 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Support Staff"
            ja="サポートスタッフ"
            lead="繁忙期・不定期でサポートとして在籍しています。"
          />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportStaff.map((staff) => (
              <div key={staff.id} className="bg-cream-50 border border-sand-200 p-6 flex gap-5 items-start">
                {/* Compact photo */}
                <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden bg-sand-200">
                  <Image
                    src={staff.image}
                    alt={staff.imageAlt}
                    fill
                    className="object-cover object-top"
                    sizes="80px"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-en text-[10px] tracking-widest text-brown-400 uppercase mb-1">
                    Support
                  </p>
                  <h3 className="text-base font-medium text-stone-800 tracking-wide mb-2">{staff.name}</h3>
                  <p className="text-[11px] text-stone-500 leading-loose mb-2">{staff.displayLabel}</p>
                  <p className="text-xs text-stone-700 leading-loose">{staff.message}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-stone-500 leading-loose">
            ※ サポートスタッフの出勤状況はホットペッパービューティーの空き状況画面でご確認ください。
          </p>
        </div>
      </section>

      {/* ===== Nomination ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Nomination"
            ja="指名予約について"
          />

          <div className="mt-8 space-y-4 text-sm text-stone-700 leading-loose">
            <p>
              MARISAでは指名予約も承っています。「いつも同じスタッフに担当してほしい」「前回の施術がとても良かった」という方は、ご予約時にスタッフ名をご指定ください。
            </p>
            <p>
              担当スタッフがお客様の体の傾向や好みの圧を把握していることで、毎回のカウンセリングがよりスムーズになり、施術の質も高まります。定期的なご利用の方には特におすすめしています。
            </p>
            <p>
              ホットペッパービューティーのご予約ページからスタッフを選択してご指定いただけます。空き状況はリアルタイムでご確認いただけますので、お気軽にご利用ください。
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <ReserveButton href={BMERIT_URL} label="WEB予約（公式）" variant="dark" size="md" />
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約" variant="outline" size="md" />
          </div>
        </div>
      </section>

      {/* ===== Staff FAQ ===== */}
      <section className="py-16 bg-sand-200">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="FAQ" ja="スタッフに関するよくある質問" />
          <div className="mt-8 space-y-4">
            {faqs.map((item, i) => (
              <div key={i} className="border border-sand-200 bg-cream-50 p-6">
                <p className="text-sm font-medium text-stone-800 mb-3 tracking-wide">
                  <span className="font-en text-brown-400 mr-2">Q.</span>{item.q}
                </p>
                <p className="text-sm text-stone-700 leading-loose pl-5">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Related ===== */}
      <section className="py-12 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: 'こだわり・コンセプト', href: '/concept' },
              { label: '店内・設備', href: '/salon' },
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
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">
            スタッフを指名して予約する
          </h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            WEB予約（公式）またはホットペッパービューティーから、スタッフ指名・日時指定でかんたんにご予約いただけます。<br />
            当日予約・夜0時まで受付中。
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
