import Link from 'next/link'
import { BMERIT_URL, HPB_URL, INSTAGRAM_URL, LINE_URL } from '@/lib/constants'

export default function MobileReserveBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-cream-50 border-t border-sand-200 shadow-lg">
      <div className="grid grid-cols-3 divide-x divide-sand-200">
        <Link
          href={BMERIT_URL}
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
          href={LINE_URL || HPB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 py-3 text-xs text-brown-500 hover:bg-cream-100 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span>LINE予約</span>
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
