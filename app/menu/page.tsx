import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津のもみほぐしメニュー・料金｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」のメニュー・料金一覧。もみほぐし・ヘッドセット・足つぼセット・鍼灸・美容鍼をご用意。45分¥3,900〜。当日予約OK・夜0時まで営業。',
  alternates: { canonical: '/menu' },
}

const menus = [
  {
    category: 'もみほぐし',
    href: '/menu/body-care',
    en: 'Body Care',
    desc: '首・肩・背中・腰・脚など、全身の疲れとコリを丁寧にほぐします。毎日の疲れが溜まりやすい部位を中心にケアし、体を芯から楽にします。',
    recommend: 'デスクワークの肩こり・腰のつらさ・全身疲労の方に',
    courses: [
      { name: 'もみほぐし 45分', price: '¥3,900', desc: '首・肩・背中・腰を中心にケア。短時間でしっかりほぐしたい方に。' },
      { name: 'もみほぐし 60分（70分計）', price: '¥4,500', desc: 'ほぐし60分＋お好きな部位10分サービス付き。定番の人気コース。', badge: '人気' },
      { name: 'もみほぐし 90分（100分計）', price: '¥6,400', desc: 'ほぐし90分＋お好きな部位10分サービス付き。深部までじっくりケア。' },
      { name: 'もみほぐし 120分', price: '¥8,400', desc: '全身をたっぷり時間をかけてケアできるプレミアムコース。' },
    ],
  },
  {
    category: 'ヘッドセット',
    href: '/menu/set',
    en: 'Head Set',
    desc: 'もみほぐしとヘッドケアを組み合わせたセットコース。体のコリをほぐしながら、頭・頭皮・眼精疲労もまとめてケアできます。',
    recommend: 'PC・スマートフォン疲れ・頭の重さ・眼精疲労の方に',
    courses: [
      { name: 'ヘッドセット 60分', price: '¥5,400', desc: 'もみほぐし45分＋ヘッド15分。頭・首・肩をまとめてケア。', badge: 'おすすめ' },
      { name: 'ヘッドセット 90分', price: '¥6,700', desc: 'もみほぐし75分＋ヘッド15分。ゆったりと全身と頭を両方満喫。' },
      { name: 'ヘッドセット 120分', price: '¥8,700', desc: 'もみほぐし105分＋ヘッド15分。休日の特別なご褒美に。' },
    ],
  },
  {
    category: '足つぼセット',
    href: '/menu/set',
    en: 'Foot Set',
    desc: 'もみほぐしと足つぼ・リフレクソロジーを組み合わせたセットコース。足裏の反射区を刺激し、全身の疲れをまとめてケアします。',
    recommend: '立ち仕事の足の疲れ・むくみ・冷え性の方に',
    courses: [
      { name: '足つぼセット 60分', price: '¥5,500', desc: 'もみほぐし30分＋足つぼ30分。むくみ・冷え・だるさをまとめてケア。', badge: 'おすすめ' },
      { name: '足つぼセット 90分', price: '¥6,900', desc: 'もみほぐし60分＋足つぼ30分。全身と足元を余裕をもってケア。' },
      { name: '足つぼセット 120分', price: '¥8,900', desc: 'もみほぐし90分＋足つぼ30分。全身とフットをじっくり堪能。' },
    ],
  },
  {
    category: 'ヘッドケア単体',
    href: '/menu/head',
    en: 'Head Care',
    desc: '頭皮・側頭部・眼周りを中心にケアするヘッドケア単体メニュー。頭の重さ・目の疲れ・集中力の低下が気になる方に。',
    recommend: '頭がすっきりしない・目が重い・集中できない方に',
    courses: [
      { name: 'ヘッドケア 15分', price: '¥2,000', desc: '短時間で頭皮・側頭部を集中ケア。気軽なリフレッシュに。' },
      { name: 'ヘッドケア 30分', price: '¥3,000', desc: '頭皮・側頭部・眼周りを丁寧にケア。仕事帰りの定番コース。', badge: 'おすすめ' },
    ],
  },
  {
    category: '足つぼ単体',
    href: '/menu/foot',
    en: 'Foot Reflexology',
    desc: '足裏の反射区を丁寧に刺激するリフレクソロジー単体コース。足のだるさ・むくみ・冷え性が気になる方に。',
    recommend: '立ち仕事の方・足のむくみ・冷え性の方に',
    courses: [
      { name: '足つぼコース 30分', price: '¥3,800', desc: '足裏の反射区を集中ケア。気軽なリフレッシュに。' },
      { name: '足つぼコース 60分', price: '¥5,500', desc: '足裏・ふくらはぎをゆったりとした時間でケア。', badge: 'おすすめ' },
    ],
  },
]

export default function MenuPage() {
  return (
    <>
      {/* ===== Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'メニュー・料金' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Menu & Price</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800">
              メニュー・料金
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              もみほぐし・ヘッドセット・足つぼセット・鍼灸・美容鍼など、お体の状態やお悩みに合わせて選べるコースをご用意しています。初めての方にも丁寧にご案内しますので、お気軽にご相談ください。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Category Links ===== */}
      <section className="py-10 bg-cream-50 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 uppercase mb-5">Explore Menus</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { label: 'もみほぐし', href: '/menu/body-care', sub: 'Body Care' },
              { label: 'ヘッドケア', href: '/menu/head', sub: 'Head Care' },
              { label: '足つぼ・リフレ', href: '/menu/foot', sub: 'Foot Reflexology' },
              { label: 'セットコース', href: '/menu/set', sub: 'Set Course' },
              { label: '鍼灸メニュー', href: '/menu/acupuncture', sub: 'Acupuncture' },
              { label: '美容鍼', href: '/menu/beauty-acupuncture', sub: 'Beauty Acupuncture' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-sand-200 bg-cream-50 p-4 hover:border-brown-300 transition-colors"
              >
                <p className="font-en text-[10px] tracking-widest text-brown-400 mb-1">{item.sub}</p>
                <p className="text-sm font-medium text-stone-800 tracking-wide">{item.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Menu Cards ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 space-y-20">
          {menus.map((menu) => (
            <div key={menu.category}>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                <div>
                  <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-1">{menu.en}</p>
                  <h2 className="text-2xl font-light tracking-wide text-stone-800">{menu.category}</h2>
                  <p className="mt-2 text-sm text-stone-700 leading-loose max-w-xl">{menu.desc}</p>
                  <p className="mt-2 text-xs text-brown-400 tracking-wide">{menu.recommend}</p>
                </div>
                <Link
                  href={menu.href}
                  className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500 shrink-0"
                >
                  このメニューの詳細を見る →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {menu.courses.map((course) => (
                  <div key={course.name} className="border border-sand-200 p-6 bg-cream-50 relative hover:border-sand-300 transition-colors">
                    {'badge' in course && course.badge && (
                      <span className="absolute top-4 right-4 text-[10px] tracking-widest bg-brown-400 text-cream-50 px-2.5 py-1">
                        {course.badge}
                      </span>
                    )}
                    <h3 className="text-base font-medium text-stone-800 mb-1 tracking-wide">{course.name}</h3>
                    <p className="font-en text-xl text-brown-400 mb-4 font-light">{course.price}</p>
                    <p className="text-sm text-stone-700 leading-relaxed mb-5">{course.desc}</p>
                    <ReserveButton href={BMERIT_URL} label="このコースで予約" size="sm" variant="outline" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Acupuncture Section ===== */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-8">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-2">Acupuncture</p>
            <h2 className="text-2xl font-light text-stone-800 tracking-wide">鍼灸・美容鍼</h2>
            <p className="mt-2 text-sm text-stone-700 leading-loose max-w-2xl">
              鍼灸師・なおによる鍼灸メニューと美容鍼をご用意しています。もみほぐしと組み合わせたセットメニューもございます。国家資格を持つ鍼灸師が施術します。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/menu/acupuncture"
              className="group bg-cream-50 border border-sand-200 p-8 hover:border-brown-300 transition-colors"
            >
              <p className="font-en text-[10px] tracking-widest text-brown-400 mb-2">Acupuncture</p>
              <h3 className="text-lg font-light text-stone-800 tracking-wide mb-3">鍼灸メニュー</h3>
              <p className="text-sm text-stone-700 leading-loose mb-4">
                もみほぐし＋鍼のセットコース（¥4,500〜）や鍼1部位オプション（¥1,500）をご用意。首・肩・腰など気になる部位へ、鍼のアプローチをプラスできます。
              </p>
              <p className="text-xs tracking-widest text-brown-400 group-hover:text-brown-500">
                詳しく見る →
              </p>
            </Link>
            <Link
              href="/menu/beauty-acupuncture"
              className="group bg-cream-50 border border-sand-200 p-8 hover:border-brown-300 transition-colors"
            >
              <p className="font-en text-[10px] tracking-widest text-brown-400 mb-2">Beauty Acupuncture</p>
              <h3 className="text-lg font-light text-stone-800 tracking-wide mb-3">美容鍼（美顔鍼）</h3>
              <p className="text-sm text-stone-700 leading-loose mb-4">
                美顔鍼¥3,500。顔周りに細い鍼を施術し、肌のハリ・むくみ・フェイスラインのケアを目的とした美容ケアです。
              </p>
              <p className="text-xs tracking-widest text-brown-400 group-hover:text-brown-500">
                詳しく見る →
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Useful Info ===== */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader en="Info" ja="ご来店の前に" />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-stone-700 leading-loose">
            <div className="border-l-2 border-sand-200 pl-4">
              <p className="font-medium text-stone-800 mb-1">営業時間</p>
              <p>10:00〜24:00（最終受付 23:00）<br />年中無休</p>
            </div>
            <div className="border-l-2 border-sand-200 pl-4">
              <p className="font-medium text-stone-800 mb-1">ご予約</p>
              <p>WEB予約・当日予約OK<br />お電話でもご相談いただけます</p>
            </div>
            <div className="border-l-2 border-sand-200 pl-4">
              <p className="font-medium text-stone-800 mb-1">お支払い</p>
              <p>現金・クレジットカード</p>
            </div>
            <div className="border-l-2 border-sand-200 pl-4">
              <p className="font-medium text-stone-800 mb-1">駐車場</p>
              <p>無料駐車場完備</p>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/first"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
            >
              初めての方へ（ご来店の流れ） →
            </Link>
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
            君津でもみほぐし・鍼灸をお探しの方は、ぜひMARISAへ。
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
