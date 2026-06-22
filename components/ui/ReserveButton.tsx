import Link from 'next/link'
import { HPB_URL } from '@/lib/constants'

interface ReserveButtonProps {
  variant?: 'dark' | 'light' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  label?: string
}

export default function ReserveButton({
  variant = 'dark',
  size = 'md',
  href = HPB_URL,
  label = 'ご予約はこちら',
}: ReserveButtonProps) {
  const isExternal = href.startsWith('http')

  const sizeClass = {
    sm: 'px-5 py-2.5 text-xs',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-10 py-4 text-sm',
  }[size]

  const variantClass = {
    dark: 'bg-brown-500 text-cream-50 hover:bg-brown-600',
    light: 'bg-cream-50 text-brown-600 hover:bg-sand-100',
    outline: 'border border-brown-400 text-brown-500 hover:bg-brown-500 hover:text-cream-50',
  }[variant]

  return (
    <Link
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex items-center gap-2 tracking-widest transition-colors ${sizeClass} ${variantClass}`}
    >
      {label}
    </Link>
  )
}
