import Link from 'next/link'
import { HPB_URL, INSTAGRAM_URL, PHONE } from '@/lib/constants'

export default function MobileReserveBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-cream-50 border-t border-sand-200 shadow-lg">
      <div className="grid grid-cols-3 divide-x divide-sand-200">
        <Link
          href={HPB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 py-3 text-xs text-brown-500 hover:bg-cream-100 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>WEB予約</span>
        </Link>
        <Link
          href={`tel:${PHONE}`}
          className="flex flex-col items-center gap-0.5 py-3 text-xs text-brown-500 hover:bg-cream-100 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>電話する</span>
        </Link>
        <Link
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 py-3 text-xs text-brown-500 hover:bg-cream-100 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={1.5}/>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth={1.5}/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth={2} strokeLinecap="round"/>
          </svg>
          <span>Instagram</span>
        </Link>
      </div>
    </div>
  )
}
