import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津のもみほぐしスタッフ紹介・指名予約｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」のスタッフ紹介。経験豊富なセラピストが在籍。もみほぐし・ヘッドケア・足つぼの得意スタッフを指名予約できます。丁寧なカウンセリングが好評。',
  keywords: ['君津 もみほぐし スタッフ', '君津 マッサージ 指名', '君津 セラピスト', '君津 リラクゼーション スタッフ'],
  openGraph: { title: '君津のもみほぐしスタッフ紹介・指名予約｜MARISA 君津店', description: '経験豊富なセラピストが在籍。もみほぐし・ヘッドケア・足つぼの指名予約が可能です。', locale: 'ja_JP', type: 'website' },
  alternates: { canonical: '/staff' },
}

// TODO: HPBからスタッフ情報取得後に更新
const staffPlaceholders = [
  {
    id: 1,
    name: 'スタッフ A',
    role: 'セラピスト',
    message:
      'お客様の体の状態に合わせた施術を丁寧に行います。カウンセリングを大切にし、お一人おひとりに合ったケアをご提供することを心がけています。気になること、遠慮なくお申し付けください。',
    specialties: ['もみほぐし', 'ヘッドケア'],
    image: '/LINE_ALBUM_もみほぐしMARISA_260615_5.jpg',
    imageAlt: '君津 もみほぐし marisa 施術風景',
  },
  {
    id: 2,
    name: 'スタッフ B',
    role: 'セラピスト',
    message:
      '「来るたびに楽になれる場所」を大切にしています。圧の強さや気になる部位は施術前にしっかりお聞きしますので、初めての方もお気軽にご相談ください。',
    specialties: ['足つぼ・リフレ', 'もみほぐし'],
    image: '/LINE_ALBUM_もみほぐしMARISA_260615_13.jpg',
    imageAlt: '君津 もみほぐし 脚のケア 施術',
  },
  {
    id: 3,
    name: 'スタッフ C',
    role: 'セラピスト',
    message:
      'お客様の疲れに丁寧に向き合い、体の状態が整いやすくなるようサポートします。施術中も随時調整しますので、何でもお声がけください。',
    specialties: ['ヘッドケア', 'もみほぐし'],
    image: '/LINE_ALBUM_もみほぐしMARISA_260615_25.jpg',
    imageAlt: '君津 ヘッドケア 眼精疲労 施術風景',
  },
]

export default function StaffPage() {
  return (
    <>
      {/* TODO: HPBからスタッフ情報取得後に更新 */}

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
              MARISAには、経験豊富なセラピストが在籍しています。一人ひとりの体の状態に合わせた施術を心がけ、来るたびに楽になれる場所を目指しています。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Intro ===== */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-5xl mx-auto px-5 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div>
            <p className="text-stone-700 leading-loose text-sm">
              MARISAのスタッフは、技術の習得だけでなく、お客様一人ひとりとのコミュニケーションを大切にしています。施術前のカウンセリングでその日の体の状態をしっかりお聞きし、ご要望に合わせてアプローチします。施術中も圧の強さや気になる点があれば、いつでも遠慮なくお申し付けください。
            </p>
            <p className="text-stone-700 leading-loose text-sm mt-4">
              「また来たい」と感じていただけるサロンであるために、スタッフ一同、日々のケアと技術の向上に取り組んでいます。
            </p>
          </div>
          <div className="mt-8 lg:mt-0 relative aspect-[4/3] overflow-hidden">
            <Image
              src="/LINE_ALBUM_もみほぐしMARISA_260615_11.jpg"
              alt="君津 もみほぐし marisa スタッフによる丁寧な施術"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* ===== Staff Cards ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Staff Members"
            ja="在籍スタッフ"
            lead="経験豊富なセラピストが、お客様の体の状態に合わせた丁寧な施術をご提供します。"
            centered
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {staffPlaceholders.map((staff) => (
              <div key={staff.id} className="bg-cream-50 border border-sand-200 p-7">
                <div className="relative w-full aspect-[4/3] mb-5 overflow-hidden">
                  <Image
                    src={staff.image}
                    alt={staff.imageAlt}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <p className="font-en text-[10px] tracking-widest text-brown-400 uppercase mb-1">{staff.role}</p>
                <h2 className="text-base font-medium text-stone-800 tracking-wide mb-3">{staff.name}</h2>
                <p className="text-sm text-stone-700 leading-loose mb-4">{staff.message}</p>
                <div className="flex flex-wrap gap-2">
                  {staff.specialties.map((s) => (
                    <span key={s} className="text-[11px] border border-sand-200 px-2.5 py-1 text-stone-700 tracking-wide">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Nomination ===== */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Nomination"
            ja="指名予約について"
          />
          <div className="mt-6 space-y-4 text-sm text-stone-700 leading-loose">
            <p>
              MARISAでは指名予約も承っています。「いつも同じスタッフに担当してほしい」「前回の施術がとても良かった」という方は、ご予約時にスタッフ名をご指定ください。
            </p>
            <p>
              担当スタッフの体の傾向や好みの圧を把握していることで、毎回のカウンセリングがよりスムーズになり、施術の質も高まります。定期的なご利用の方には特におすすめしています。
            </p>
            <p>
              指名をご希望の場合は、ホットペッパービューティーのご予約ページからご選択いただけます。空き状況はリアルタイムでご確認いただけますので、お気軽にご利用ください。
            </p>
          </div>
        </div>
      </section>

      {/* ===== 施術スタイルとこだわり ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Our Style"
            ja="MARISAスタッフの施術スタイル"
            lead="技術はもちろん、お客様一人ひとりへの丁寧な対応を大切にしています。"
          />
          <div className="mt-8 space-y-6 text-sm text-stone-700 leading-loose">
            <div className="border-l-2 border-brown-300 pl-5">
              <p className="font-medium text-stone-800 mb-1 tracking-wide">施術前のカウンセリング</p>
              <p>毎回の施術前に、体の状態・気になる部位・強さのご希望を丁寧にお聞きします。「最近肩がつらい」「全体的にリセットしたい」など、どんなご要望もお気軽にお伝えください。</p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5">
              <p className="font-medium text-stone-800 mb-1 tracking-wide">圧の調整・柔軟な対応</p>
              <p>「気持ちよく感じる圧」はお一人おひとり異なります。施術中も圧の強さをいつでも調整できます。強すぎる・弱すぎるなど、遠慮なくお申し付けください。</p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5">
              <p className="font-medium text-stone-800 mb-1 tracking-wide">得意メニュー・専門性</p>
              <p>スタッフはそれぞれ得意とするメニューがあります。もみほぐし全般が得意なスタッフ、ヘッドケアや足つぼが得意なスタッフなど、ご予約時にご希望をお伝えいただければマッチングします。</p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5">
              <p className="font-medium text-stone-800 mb-1 tracking-wide">定期的な研修・技術向上</p>
              <p>スタッフは定期的な研修を通じて技術と知識を更新しています。お客様に安心していただけるケアを提供し続けるため、日々の改善を大切にしています。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Staff FAQ ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="FAQ" ja="スタッフに関するよくある質問" />
          <div className="mt-8 space-y-4">
            {[
              { q: '指名は追加料金がかかりますか？', a: 'ホットペッパービューティーの指名システムをご利用の場合、指名料が発生する場合があります。最新の料金はホットペッパービューティーのページでご確認ください。' },
              { q: '初めての来店で「指名なし」でも大丈夫ですか？', a: 'はい、もちろん大丈夫です。ご来店時に担当スタッフが対応いたします。2回目以降、気に入ったスタッフを指名することも可能です。' },
              { q: 'スタッフは男性・女性どちらですか？', a: '現在のスタッフ構成はホットペッパービューティーのページでご確認いただけます。女性スタッフへの施術を希望される方は、ご予約時にスタッフ選択をご利用ください。' },
              { q: 'スタッフに話しかけなくても大丈夫ですか？', a: 'はい、施術中はリラックスしてお過ごしいただければ結構です。眠ってしまっても大丈夫です。お話が好きな方も苦手な方も、それぞれのスタイルで施術をお受けください。' },
            ].map((item, i) => (
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
              <Link key={l.href} href={l.href} className="border border-sand-300 px-3 py-1.5 text-stone-700 hover:border-brown-300 hover:text-brown-500 transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Reservation</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">スタッフを指名して予約する</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            ホットペッパービューティーからスタッフ指名・日時指定でかんたんにご予約いただけます。<br />
            当日予約・夜0時まで受付中。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton href="/reservation" label="予約方法を見る" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
