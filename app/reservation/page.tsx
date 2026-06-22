import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import ReserveButton from '@/components/ui/ReserveButton'
import { HPB_URL, BMERIT_URL, INSTAGRAM_URL, LINE_URL, PHONE, SHOP_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '君津のもみほぐし・ご予約方法｜MARISA 君津店',
  description:
    '千葉県君津市のリラクゼーションサロン「MARISA」のご予約方法。公式WEB予約・ホットペッパービューティー・LINEから24時間予約OK。当日予約対応・夜0時まで営業。',
  alternates: { canonical: '/reservation' },
}

export default function ReservationPage() {
  return (
    <>
      {/* ===== Page Header ===== */}
      <div className="bg-sand-100 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Breadcrumb items={[{ label: 'ご予約' }]} />
          <div className="mt-4">
            <p className="font-en text-xs tracking-widest uppercase text-brown-400 mb-3">Reservation</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-stone-800">
              ご予約方法
            </h1>
            <p className="mt-4 text-stone-700 text-sm leading-loose max-w-2xl">
              MARISAのご予約は、公式WEB予約（B-merit）・ホットペッパービューティー・LINEから24時間いつでもお申し込みいただけます。当日予約・クーポン利用も可能です。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Section 1: 公式WEB予約（B-merit） — PRIMARY ===== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Official Web Reservation"
            ja="公式WEB予約（最もかんたん）"
            lead="24時間いつでも予約可能。当日予約OK・クーポン利用可。"
          />
          <div className="mt-8 space-y-4 text-sm text-stone-700 leading-loose">
            <p>
              MARISAの公式予約システム（B-merit）から、24時間いつでもご予約いただけます。スマートフォン・パソコンから空き状況をリアルタイムで確認しながら、ご希望の日時・コースを選んでお申し込みいただけます。
            </p>
            <p>
              当日予約にも対応しています。「急に時間ができた」「今すぐほぐしたい」という場合もそのままご予約ください。クーポンもご利用いただけますので、お得にご来店いただけます。
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            {[
              { label: '24時間受付', desc: 'いつでもWEB予約OK' },
              { label: '当日予約OK', desc: '空き状況をすぐ確認' },
              { label: 'クーポン利用可', desc: 'お得にご来店いただけます' },
            ].map((item) => (
              <div key={item.label} className="border border-sand-200 p-5 bg-cream-50">
                <p className="font-medium text-stone-800 mb-1 tracking-wide">{item.label}</p>
                <p className="text-xs text-stone-700 leading-loose">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <ReserveButton href={BMERIT_URL} label="公式WEB予約はこちら" variant="dark" size="lg" />
          </div>
          <p className="mt-4 text-xs text-greige-400 leading-loose">
            公式の予約システムです。外部サイト（B-merit）に移動します。
          </p>
        </div>
      </section>

      {/* ===== Section 2: LINEで予約・相談 ===== */}
      <section className="py-14 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="LINE"
            ja="LINEで予約・相談"
            lead="ご質問やメニューの相談もLINEで気軽にできます。"
          />
          <div className="mt-6 space-y-4 text-sm text-stone-700 leading-loose">
            <p>
              「どのコースが合うか迷っている」「初めてで不安」など、ご相談しながらご予約したい方はLINEをご利用ください。メニューの選び方・初めてのご来店についてもお気軽にご連絡ください。
            </p>
          </div>
          <div className="mt-6">
            {LINE_URL ? (
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-brown-400 text-brown-500 hover:bg-brown-500 hover:text-cream-50 px-7 py-3.5 text-sm tracking-widest transition-colors"
              >
                LINEで予約・相談
              </a>
            ) : (
              <p className="text-sm text-greige-400">LINE予約は準備中です。公式WEB予約またはホットペッパービューティーをご利用ください。</p>
            )}
          </div>
          <div className="mt-5">
            <p className="text-xs text-stone-700 mb-2">InstagramのDMでもご相談いただけます。</p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-brown-400 text-brown-500 hover:bg-brown-500 hover:text-cream-50 px-7 py-3.5 text-sm tracking-widest transition-colors"
            >
              Instagram DMで相談
            </a>
            <p className="mt-3 text-xs text-greige-400">
              Instagram @momihogushi_marisa — 外部サイトに移動します。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Section 3: ホットペッパービューティー ===== */}
      <section className="py-14 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Hot Pepper Beauty"
            ja="ホットペッパービューティーで予約"
            lead="ホットペッパービューティーからも24時間予約可能です。"
          />
          <div className="mt-6 space-y-4 text-sm text-stone-700 leading-loose">
            <p>
              ホットペッパービューティーのアカウントをお持ちの方は、そちらからもご予約いただけます。クーポンの利用・スタッフ指名・口コミの確認もホットペッパービューティーからどうぞ。
            </p>
          </div>
          <div className="mt-6">
            <ReserveButton href={HPB_URL} label="ホットペッパービューティーで予約" variant="dark" size="lg" />
          </div>
          <p className="mt-4 text-xs text-greige-400 leading-loose">
            ホットペッパービューティーの外部サイトに移動します。
          </p>
        </div>
      </section>

      {/* ===== Section 4: お電話 ===== */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="Phone"
            ja="お電話でのご予約・お問い合わせ"
          />
          <div className="mt-6 space-y-4 text-sm text-stone-700 leading-loose">
            <p>
              ネット予約が難しい場合や、スタッフに直接相談したい場合は、お電話でもご予約・お問い合わせを承っています。「コースの選び方がわからない」「初めてで不安」という方もお気軽にお電話ください。
            </p>
            <p>
              受付時間は営業時間（10:00〜24:00）内です。お電話が混み合っている場合は、少し時間をおいておかけ直しください。
            </p>
          </div>
          <div className="mt-6 border border-sand-200 p-6 inline-block">
            <p className="text-xs tracking-widest text-greige-400 mb-2">電話番号</p>
            {/* TODO: 実際の電話番号に差し替え */}
            <a
              href={`tel:${PHONE.replace(/-/g, '')}`}
              className="font-en text-2xl text-stone-800 tracking-widest hover:text-brown-500 transition-colors"
            >
              {PHONE}
            </a>
            <p className="mt-2 text-xs text-greige-400">受付時間 {SHOP_INFO.hours}</p>
          </div>
        </div>
      </section>

      {/* ===== Notes ===== */}
      <section className="py-12 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs tracking-widest text-greige-400 uppercase mb-4">Notice</p>
          <div className="border border-sand-200 p-6 space-y-4 text-sm text-stone-700 leading-loose">
            <div>
              <p className="font-medium text-stone-800 mb-1 tracking-wide">当日予約について</p>
              <p>当日予約は公式WEB予約またはホットペッパービューティーの空き状況をご確認ください。特に週末・祝日・夜間は混み合うため、なるべくお早めのご予約をおすすめします。</p>
            </div>
            <div>
              <p className="font-medium text-stone-800 mb-1 tracking-wide">キャンセル・変更について</p>
              <p>ご都合が悪くなった場合は、なるべく早めのご連絡をお願いします。直前のキャンセルは他のお客様にご迷惑をおかけすることがあります。ご理解とご協力をお願いします。</p>
            </div>
            <div>
              <p className="font-medium text-stone-800 mb-1 tracking-wide">営業時間</p>
              <p>{SHOP_INFO.hours}　年中無休</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ Link ===== */}
      <section className="py-12 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeader
            en="FAQ"
            ja="予約に関するよくある質問"
          />
          <div className="mt-6 space-y-3">
            {[
              'ネット予約はどこからできますか？',
              '当日予約はできますか？',
              'キャンセル・変更はできますか？',
              '指名予約はできますか？',
            ].map((q) => (
              <div key={q} className="flex items-center gap-3 text-sm text-stone-700 border-b border-sand-200 pb-3 last:border-0">
                <span className="font-en text-xs text-brown-400 shrink-0">Q.</span>
                <span>{q}</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/faq"
              className="text-xs tracking-widest text-brown-400 border-b border-brown-300 pb-px hover:text-brown-500"
            >
              よくある質問をすべて見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-brown-600 text-cream-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-en text-xs tracking-widest text-sand-300 uppercase mb-4">Book Now</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wide mb-6">ご予約はこちらから</h2>
          <p className="text-sm text-sand-300 leading-loose mb-10">
            夜0時まで営業中・当日予約OK・無料駐車場完備。<br />
            公式WEB予約またはホットペッパービューティーからかんたんにご予約いただけます。
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
