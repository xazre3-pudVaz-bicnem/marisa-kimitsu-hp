import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'もみほぐし・マッサージガイド｜MARISA 君津店',
  description:
    'もみほぐしとは何か、整体との違い、通う頻度、コースの選び方など。君津のリラクゼーションサロン MARISAがわかりやすく解説するもみほぐし・マッサージガイド。',
  keywords: ['もみほぐし とは', 'マッサージ ガイド', '君津 もみほぐし 解説', 'リラクゼーション 知識'],
  openGraph: {
    title: 'もみほぐし・マッサージガイド｜MARISA 君津店',
    description: 'もみほぐしとは、通う頻度、コースの選び方など、初めての方に役立つ情報をまとめました。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: '/guide' },
}

const guides = [
  {
    en: 'What is Momihogushi',
    label: 'もみほぐしとは？',
    href: '/guide/what-is-momihogushi',
    desc: '整体・医療マッサージとの違い、もみほぐしがリラクゼーション目的に向いている理由をわかりやすく解説します。',
  },
  {
    en: 'Head Care',
    label: 'ヘッドケアとは？',
    href: '/guide/head-care',
    desc: 'ドライヘッドスパとの違い、ヘッドケアで期待できることについて解説します。眼精疲労・頭の重さが気になる方に。',
  },
  {
    en: 'Foot Reflexology',
    label: '足つぼとは？',
    href: '/guide/foot-reflexology',
    desc: 'リフレクソロジーの概要と足つぼ施術について。足のだるさ・むくみが気になる方におすすめの情報です。',
  },
  {
    en: 'Frequency Guide',
    label: '通う頻度の目安',
    href: '/guide/frequency',
    desc: 'もみほぐしはどのくらいの頻度で通えばいいか？お悩み・目的別の目安を解説します。',
  },
  {
    en: 'Course Selection',
    label: 'コースの選び方',
    href: '/guide/course-selection',
    desc: '45分・60分・90分、ヘッドセット・足つぼセット——どのコースが自分に合うか迷っている方へのガイドです。',
  },
  {
    en: 'vs Seitai',
    label: '整体との違い',
    href: '/guide/vs-seitai',
    desc: 'もみほぐしと整体はどう違う？どちらが自分に向いているか判断するためのポイントを解説します。',
  },
  {
    en: 'After Care',
    label: '施術後の過ごし方',
    href: '/guide/after-care',
    desc: '施術後を上手に過ごすためのアフターケアガイド。水分補給・当日の注意事項などをまとめました。',
  },
  {
    en: 'Benefits',
    label: '期待できること',
    href: '/guide/benefits',
    desc: 'もみほぐしで期待できるリラクゼーション効果について。医療的な断定なしに、正直に解説します。',
  },
  {
    en: 'Price Guide',
    label: '料金ガイド',
    href: '/guide/price-guide',
    desc: 'もみほぐしの一般的な料金相場とMARISAの価格設定、コスパの考え方について解説します。',
  },
  {
    en: 'Kimitsu Guide',
    label: '君津のマッサージ選び',
    href: '/guide/kimitsu-massage-guide',
    desc: '君津市でリラクゼーションサロンを選ぶときのポイントと、MARISAが選ばれる理由をまとめました。',
  },
]

export default function GuideIndexPage() {
  return (
    <>
      {/* ===== Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'もみほぐしガイド' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Guide</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800 leading-snug">
              もみほぐし・マッサージガイド
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              「もみほぐしって整体と何が違うの？」「どのコースを選べばいい？」「何回通えばいい？」——よくある疑問に答えるガイドをまとめました。初めての方もリピーターの方も、ぜひご活用ください。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Guide Cards ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Articles"
            ja="ガイド記事一覧"
            lead="初めての方から定期的にご利用の方まで、役立つ情報をまとめています。"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {guides.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="group border border-sand-200 bg-cream-50 p-7 hover:border-brown-300 transition-colors block"
              >
                <p className="font-en text-[10px] tracking-widest uppercase text-brown-400 mb-2 group-hover:text-brown-500 transition-colors">
                  {g.en}
                </p>
                <h2 className="text-base font-medium text-stone-800 mb-3 tracking-wide">{g.label}</h2>
                <p className="text-sm text-stone-700 leading-loose mb-4">{g.desc}</p>
                <span className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px group-hover:text-brown-500 transition-colors">
                  詳しく読む →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Related ===== */}
      <section className="py-12 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 mb-4 uppercase">Related</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              { label: 'メニュー・料金', href: '/menu' },
              { label: 'お悩み別ページ', href: '/symptom' },
              { label: 'よくある質問', href: '/faq' },
              { label: '初めての方へ', href: '/first' },
              { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
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
            夜0時まで営業・当日予約OK。<br />
            君津のリラクゼーションサロン MARISA。
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
