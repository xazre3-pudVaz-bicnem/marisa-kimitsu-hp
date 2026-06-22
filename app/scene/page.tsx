import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'シーン別もみほぐし・ご利用シーン一覧｜MARISA 君津店',
  description:
    '仕事帰り・当日予約・ペア利用・プレゼント・定期メンテナンスなど、さまざまなシーンでご利用いただける君津のリラクゼーションサロン MARISA。夜0時まで営業・無料駐車場完備。',
  keywords: ['君津 マッサージ シーン別', '君津 もみほぐし 仕事帰り', '君津 リラクゼーション ペア', '君津 当日予約 マッサージ'],
  openGraph: {
    title: 'シーン別もみほぐし一覧｜MARISA 君津店',
    description: '仕事帰り・当日予約・ペア・プレゼントなど、あなたのシーンに合わせたご利用方法をご紹介します。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/scene' },
}

const scenes = [
  {
    en: 'After Work',
    label: '仕事帰りに',
    href: '/scene/after-work',
    desc: '夜0時まで営業（最終受付23:00）。仕事帰りにそのまま立ち寄れるリラクゼーションサロンです。',
    badge: '人気',
  },
  {
    en: 'Same Day',
    label: '当日予約で',
    href: '/scene/same-day',
    desc: 'ホットペッパービューティーから当日予約OK。急に体がつらくなったときもご利用いただけます。',
    badge: '便利',
  },
  {
    en: 'By Car',
    label: '車で通いたい',
    href: '/scene/parking',
    desc: '店舗前に無料駐車場完備。お車でお越しの方も安心です。',
    badge: null,
  },
  {
    en: 'Pair',
    label: 'ペアで',
    href: '/scene/pair',
    desc: '施術ベッド3台完備。ご夫婦・カップル・お友達と一緒にご利用いただけます。',
    badge: null,
  },
  {
    en: 'Holiday',
    label: '休日・週末に',
    href: '/scene/holiday',
    desc: '年中無休営業。休日のリフレッシュや週の疲れをリセットするのに最適です。',
    badge: null,
  },
  {
    en: 'Gift',
    label: 'プレゼント・記念日に',
    href: '/scene/gift',
    desc: '誕生日・母の日・記念日など大切な方へのプレゼントにもみほぐし体験はいかがですか。',
    badge: null,
  },
  {
    en: 'For Men',
    label: '男性のお客様へ',
    href: '/scene/men',
    desc: '男性のお客様も大歓迎です。肩こり・腰のつらさ・デスクワーク疲れなど、男性に多いお悩みに対応します。',
    badge: null,
  },
  {
    en: 'For Ladies',
    label: '女性のお客様へ',
    href: '/scene/ladies',
    desc: '清潔感のある環境と個室感覚のスペースで、女性のお客様も安心してご利用いただけます。',
    badge: null,
  },
  {
    en: 'Regular Care',
    label: '定期メンテナンス',
    href: '/scene/regular',
    desc: '2週間〜月1回のペースで定期的にケアすることで、体を整えやすい状態を維持できます。',
    badge: null,
  },
  {
    en: 'Stress Relief',
    label: 'ストレス解消に',
    href: '/scene/stress',
    desc: 'ストレスや緊張で張り詰めた体と心を、もみほぐしでリラックスさせましょう。',
    badge: null,
  },
  {
    en: 'Night',
    label: '夜のリラックスに',
    href: '/scene/night',
    desc: '夜0時まで営業中。帰宅前にじっくりほぐして、深い眠りにつながるリラックスタイムを。',
    badge: null,
  },
  {
    en: 'For Seniors',
    label: 'シニアの方へ',
    href: '/scene/seniors',
    desc: '年配の方も安心してご利用いただけます。ゆっくり丁寧な施術・圧の調整に対応します。',
    badge: null,
  },
  {
    en: 'For Friends',
    label: '友人・グループで',
    href: '/scene/friends',
    desc: '3台のベッドで友人や職場仲間と一緒に施術を受けることができます。',
    badge: null,
  },
  {
    en: 'Birthday',
    label: '誕生日・お祝いに',
    href: '/scene/birthday',
    desc: '誕生日プレゼントにもみほぐし体験。ペアで一緒に来店するギフトにも最適です。',
    badge: null,
  },
  {
    en: 'Before Sleep',
    label: '眠る前に',
    href: '/scene/before-sleep',
    desc: '就寝前に体の緊張をほぐして、リラックスした状態で眠れる夜をサポートします。',
    badge: null,
  },
]

export default function SceneIndexPage() {
  return (
    <>
      {/* ===== Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'シーン別のご案内' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">By Scene</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              シーン別のご利用ガイド
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「仕事帰りに立ち寄りたい」「当日予約したい」「ペアで利用したい」「プレゼントにしたい」——さまざまなシーンでご利用いただける方法をご紹介します。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Scene Cards ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Scenes"
            ja="ご利用シーン一覧"
            lead="あなたのシーンに合ったページをお選びください。"
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {scenes.map((scene) => (
              <Link
                key={scene.href}
                href={scene.href}
                className="group relative border border-sand-200 bg-cream-50 p-7 hover:border-brown-300 transition-colors block"
              >
                {scene.badge && (
                  <span className="absolute top-4 right-4 text-[10px] tracking-widest bg-brown-400 text-cream-50 px-2.5 py-1">
                    {scene.badge}
                  </span>
                )}
                <p className="font-en text-[10px] tracking-widest uppercase text-brown-400 mb-2 group-hover:text-brown-500 transition-colors">
                  {scene.en}
                </p>
                <h2 className="text-base font-medium text-stone-800 mb-3 tracking-wide">{scene.label}</h2>
                <p className="text-sm text-stone-700 leading-loose mb-4">{scene.desc}</p>
                <span className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px group-hover:text-brown-500 transition-colors">
                  詳しく見る →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Area Links ===== */}
      <section className="py-12 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">エリア別のご案内</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: '君津エリア', href: '/area/kimitsu' },
              { label: '木更津方面', href: '/area/kisarazu' },
              { label: '富津方面', href: '/area/futtsu' },
              { label: 'エリア一覧', href: '/area' },
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
            夜0時まで営業・当日予約OK・無料駐車場完備。<br />
            どんなシーンでも気軽にご利用いただける君津のリラクゼーションサロン MARISA。
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
