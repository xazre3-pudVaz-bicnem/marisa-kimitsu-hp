import Link from 'next/link'
import { SHOP_INFO, HPB_URL, INSTAGRAM_URL, BMERIT_URL, LINE_URL, NAV_ITEMS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-stone-800 text-cream-200 mt-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-en text-2xl font-light tracking-widest text-cream-50 mb-1">MARISA</p>
            <p className="text-xs tracking-widest text-greige-400 mb-6">もみほぐし・君津店</p>
            <div className="text-sm text-greige-300 space-y-1.5 leading-relaxed">
              <p>{SHOP_INFO.address}</p>
              <p>営業時間：{SHOP_INFO.hours}</p>
              <p>無料駐車場あり｜君津駅から車5分</p>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs tracking-widest text-greige-400 uppercase mb-5">Menu</p>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-greige-300">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-cream-50 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/access" className="hover:text-cream-50 transition-colors">アクセス</Link>
              <Link href="/reservation" className="hover:text-cream-50 transition-colors">ご予約</Link>
            </nav>
          </div>

          {/* Reserve */}
          <div>
            <p className="text-xs tracking-widest text-greige-400 uppercase mb-5">Reserve</p>
            <div className="space-y-3">
              <Link
                href={BMERIT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-brown-500 text-cream-50 text-sm py-3 tracking-wider hover:bg-brown-400 transition-colors"
              >
                WEB予約（公式）
              </Link>
              {LINE_URL && (
                <Link
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#06C755] text-cream-50 text-sm py-3 tracking-wider hover:opacity-90 transition-opacity"
                >
                  LINEで予約・相談
                </Link>
              )}
              <Link
                href={HPB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center border border-greige-500 text-greige-300 text-sm py-3 tracking-wider hover:border-greige-300 hover:text-cream-50 transition-colors"
              >
                ホットペッパービューティー
              </Link>
              <Link
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center border border-greige-500 text-greige-300 text-sm py-3 tracking-wider hover:border-greige-300 hover:text-cream-50 transition-colors"
              >
                Instagram
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-stone-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-greige-500">
          <p>&copy; {new Date().getFullYear()} もみほぐし・MARISA 君津店 All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link href="/faq" className="hover:text-greige-300 transition-colors">よくある質問</Link>
            <Link href="/access" className="hover:text-greige-300 transition-colors">アクセス</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
