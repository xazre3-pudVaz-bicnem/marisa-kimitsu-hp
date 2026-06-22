'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { NAV_ITEMS, HPB_URL } from '@/lib/constants'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-sm border-b border-sand-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-en text-xl lg:text-2xl font-light tracking-widest text-brown-500 group-hover:text-brown-400 transition-colors">
            MARISA
          </span>
          <span className="text-[10px] tracking-widest text-greige-400 font-light">
            君津もみほぐし
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.href}
              className="relative group"
              onMouseEnter={() => 'children' in item && setOpenDropdown(item.href)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="text-stone-700 hover:text-brown-500 transition-colors py-1 tracking-wide"
              >
                {item.label}
              </Link>
              {'children' in item && openDropdown === item.href && (
                <div className="absolute top-full left-0 mt-1 bg-cream-50 border border-sand-200 rounded-sm shadow-md min-w-44 py-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-stone-700 hover:text-brown-500 hover:bg-cream-100 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Reserve button (desktop) */}
        <Link
          href="/reservation"
          className="hidden lg:inline-flex items-center gap-2 bg-brown-500 text-cream-50 text-sm px-5 py-2.5 tracking-wider hover:bg-brown-600 transition-colors"
        >
          予約する
        </Link>

        {/* Hamburger (mobile) */}
        <button
          aria-label="メニューを開く"
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-5 h-px bg-stone-800 transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-stone-800 transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-stone-800 transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-cream-50 border-t border-sand-200 max-h-[85vh] overflow-y-auto">
          <nav className="px-5 py-6 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-stone-700 border-b border-sand-100 tracking-wide"
                >
                  {item.label}
                </Link>
                {'children' in item && (
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-2.5 text-sm text-greige-500 border-b border-sand-100"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/reservation"
              onClick={() => setMenuOpen(false)}
              className="mt-4 block text-center bg-brown-500 text-cream-50 py-3 tracking-wider"
            >
              予約する
            </Link>
            <Link
              href={HPB_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block text-center border border-brown-400 text-brown-500 py-3 tracking-wider text-sm"
            >
              ホットペッパーで予約
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
