import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, SHOP_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津のもみほぐし店内・設備のご案内｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」の店内・設備。施術ベッド3台・清潔感のある個室感覚の空間・無料駐車場完備・初めての方も安心。仕事帰りにも立ち寄りやすい君津のもみほぐしサロン。',
  keywords: ['君津 もみほぐし 店内', '君津 リラクゼーション 清潔', '君津 マッサージ 設備', '君津 サロン 個室'],
  openGraph: { title: '君津のもみほぐし店内・設備のご案内｜MARISA 君津店', description: '施術ベッド3台・個室感覚・清潔な空間・無料駐車場。君津のリラクゼーションサロンMARISAの店内をご紹介します。', locale: 'ja_JP', type: 'website' },
  alternates: { canonical: '/salon' },
}

const facilities = [
  {
    en: 'Bed',
    label: '施術ベッド 3台',
    desc: '施術ベッドは3台ご用意しています。ご夫婦やカップル、お友達同士など複数名でも同時にご利用いただけます。ベッドはゆったりとした設計で、お体への負担が少ない姿勢でリラックスしていただけます。',
  },
  {
    en: 'Clean',
    label: '清潔感を大切にした店内',
    desc: '使用するリネン類・フェイスシートはお客様ごとに交換しています。床・施術スペース・更衣スペースは毎日清掃し、常に清潔な状態を保っています。安心してご利用いただける環境づくりに取り組んでいます。',
  },
  {
    en: 'Parking',
    label: '無料駐車場',
    desc: '店舗前に無料駐車場を完備しています。お車でのご来店も安心です。君津駅から車で約5分、君津インターから約10分の立地のため、周辺地域からアクセスしやすい環境です。',
  },
  {
    en: 'Fitting',
    label: '更衣スペース',
    desc: '施術前にお着替えいただける更衣スペースをご用意しています。施術着は当店でご用意しますので、仕事帰りやスーツのままでもそのままお越しいただけます。貴重品は安全に保管できます。',
  },
  {
    en: 'Private',
    label: '個室感のある施術スペース',
    desc: '施術スペースはカーテンで仕切られており、プライバシーに配慮した個室感のある空間になっています。周囲を気にせず、リラックスして施術をお受けいただけます。照明・BGMにもこだわり、日常の喧騒を忘れられる空間を整えています。',
  },
]

export default function SalonPage() {
  return (
    <>
      {/* ===== Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: '店内・設備' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Our Salon</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800">
              清潔感のある、ゆったりとした空間
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              MARISAでは、施術の品質と同じくらい、空間の清潔感と過ごしやすさを大切にしています。初めてご来店の方も、安心してリラックスしていただけるよう、設備と環境を整えています。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Intro ===== */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-stone-700 leading-loose text-sm">
            MARISAの店内は、リラックスしやすい落ち着いた雰囲気を大切にしています。過ごしやすい照明と静かなBGMの中で、日常の疲れを忘れてゆったりとした時間をお過ごしください。施術スペースはカーテンで仕切られた個室感のある設計になっており、周りを気にせずリラックスしていただけます。
          </p>
          <p className="text-stone-700 leading-loose text-sm mt-4">
            店内の清潔さへのこだわりとして、リネン類はお客様ごとに新しいものに交換しています。床・施術スペース・更衣スペースも毎日清掃し、常に衛生的な環境を保っています。「きれいな場所で、安心してケアを受けたい」というお客様のご要望にしっかりお応えします。
          </p>
          <p className="text-stone-700 leading-loose text-sm mt-4">
            お体のケアは、環境の心地よさと合わさることで、より深くリラックスできます。施術の質と空間の質、両方にこだわることで、「また来たい」と感じていただけるサロンを目指しています。
          </p>
        </div>
      </section>

      {/* ===== Photo Gallery ===== */}
      <section className="py-6 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/LINE_ALBUM_もみほぐしMARISA_260615_1.jpg"
                alt="君津 もみほぐし marisa 外観"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/LINE_ALBUM_もみほぐしMARISA_260615_17.jpg"
                alt="君津 もみほぐし marisa 店内カウンター"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/LINE_ALBUM_もみほぐしMARISA_260615_36.jpg"
                alt="君津 マッサージ 清潔な施術ベッド"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/LINE_ALBUM_もみほぐしMARISA_260615_3.jpg"
                alt="君津 リラクゼーション 施術スペース"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Facilities ===== */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Facilities"
            ja="店内設備のご案内"
            lead="快適にご利用いただけるよう、各設備を整えています。"
            centered
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {facilities.map((f) => (
              <div key={f.en} className="bg-cream-50 border border-sand-200 p-7">
                <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-2">{f.en}</p>
                <h2 className="text-base font-medium text-stone-800 tracking-wide mb-3">{f.label}</h2>
                <p className="text-sm text-stone-700 leading-loose">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== More Photos ===== */}
      <section className="py-8 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-3 gap-3">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/LINE_ALBUM_もみほぐしMARISA_260615_31.jpg"
                alt="君津 もみほぐし marisa 施術スペース全景"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/LINE_ALBUM_もみほぐしMARISA_260615_2.jpg"
                alt="君津 もみほぐし marisa 店内入口"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/LINE_ALBUM_もみほぐしMARISA_260615_4.jpg"
                alt="君津 リラクゼーション サロン インテリア"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Atmosphere ===== */}
      <section className="py-16 lg:py-20 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Atmosphere"
            ja="空間へのこだわり"
          />
          <div className="mt-8 space-y-6 text-sm text-stone-700 leading-loose">
            <div className="border-l-2 border-brown-300 pl-5">
              <p className="font-medium text-stone-800 mb-1 tracking-wide">照明とBGMにこだわった空間</p>
              <p>過剰に明るすぎず、暗すぎない落ち着いた照明を採用しています。穏やかなBGMの中で、日常の喧騒を忘れてリラックスできる時間をご提供します。</p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5">
              <p className="font-medium text-stone-800 mb-1 tracking-wide">仕切りで確保するプライベート空間</p>
              <p>施術スペースはカーテンで区切られており、周りの視線を気にせずリラックスしていただける個室感のある設計です。他のお客様の施術音が気になりにくい環境を整えています。</p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5">
              <p className="font-medium text-stone-800 mb-1 tracking-wide">衛生管理の徹底</p>
              <p>フェイスシートやリネン類はお客様ごとに交換しています。施術用のオイルや道具も衛生管理を徹底し、安心してご利用いただける環境を維持しています。</p>
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
              <p className="text-xs tracking-widest text-greige-400 mb-1">施術ベッド</p>
              <p>3台</p>
            </div>
            <div>
              <p className="text-xs tracking-widest text-greige-400 mb-1">駐車場</p>
              <p>無料駐車場あり</p>
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="/access"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
            >
              アクセス・駐車場の詳細はこちら →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 初めての方へ ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="First Visit"
            ja="初めてご来店の方へ"
            lead="「マッサージサロンに行ったことがない」という方も安心してご来店いただけます。"
          />
          <div className="mt-8 space-y-6 text-sm text-stone-700 leading-loose">
            <div className="border-l-2 border-brown-300 pl-5">
              <p className="font-medium text-stone-800 mb-1 tracking-wide">入店からご案内まで</p>
              <p>ご来店いただくと、スタッフがお迎えします。施術前に体の状態や気になる部位、強さのご希望などを丁寧にお聞きします。はじめての方でも、何でも気軽にご相談ください。</p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5">
              <p className="font-medium text-stone-800 mb-1 tracking-wide">施術着はご用意しています</p>
              <p>施術用のお着替えをご用意しています。仕事帰りにスーツでお越しになっても、そのままご案内できます。着替えスペースは安心してご利用いただける個別スペースです。</p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5">
              <p className="font-medium text-stone-800 mb-1 tracking-wide">施術中のコミュニケーション</p>
              <p>施術中はリラックスしてお過ごしいただければ結構です。お話が苦手な方は、眠っていただいても大丈夫です。圧が強すぎる・弱すぎるなど、いつでも遠慮なくお声がけください。</p>
            </div>
            <div className="border-l-2 border-brown-300 pl-5">
              <p className="font-medium text-stone-800 mb-1 tracking-wide">お子様のご同伴について</p>
              <p>小さなお子様をお連れの場合は、事前にお電話またはホットペッパービューティーのメッセージ機能からご相談ください。状況に応じて対応いたします。</p>
            </div>
          </div>
          <div className="mt-6">
            <Link href="/first" className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500">
              初めての方向け詳細ガイドを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Salon FAQ ===== */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="FAQ" ja="店内に関するよくある質問" />
          <div className="mt-8 space-y-4">
            {[
              { q: '駐車場はありますか？', a: 'はい、店舗前に無料駐車場をご用意しています。お車でのご来店も安心です。台数に限りがある場合もございますので、満車の際はお近くのコインパーキングをご利用ください。' },
              { q: '施術スペースは個室ですか？', a: 'カーテンで仕切られた個室感覚のスペースをご用意しています。完全個室ではありませんが、周囲の視線を気にせずリラックスしていただける環境です。' },
              { q: '仕事帰りのスーツのまま来店できますか？', a: 'はい、もちろん大丈夫です。施術着はご用意していますので、着替えていただいてから施術をお受けいただけます。仕事帰りのご来店も多くいただいています。' },
              { q: 'ベッドは何台ありますか？', a: '施術ベッドは3台ございます。ご夫婦・カップル・お友達などのペア・グループでの同時施術も可能です。複数名でご予約の際は、まとめてご予約いただくとスムーズです。' },
              { q: '何か事前に準備することはありますか？', a: '特別な準備は必要ありません。ご来店されましたらスタッフがご案内します。施術着・フェイスシート・タオルはすべてご用意しています。アクセサリーは施術前に外していただきます。' },
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
              { label: '初めての方へ', href: '/first' },
              { label: 'アクセス・駐車場', href: '/access' },
              { label: 'よくある質問', href: '/faq' },
              { label: 'スタッフ紹介', href: '/staff' },
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
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">ご予約はこちらから</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            清潔で落ち着いた空間で、毎日の疲れをリセットしませんか。<br />
            夜0時まで営業・当日予約OK。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ReserveButton href={HPB_URL} label="ホットペッパーで予約する" variant="light" size="lg" />
            <ReserveButton href="/access" label="アクセスを確認する" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
