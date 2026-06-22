interface SectionHeaderProps {
  en: string
  ja: string
  lead?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeader({ en, ja, lead, centered = false, light = false }: SectionHeaderProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <p className={`font-en text-xs tracking-widest uppercase mb-2 ${light ? 'text-sand-300' : 'text-brown-400'}`}>
        {en}
      </p>
      <h2 className={`text-2xl lg:text-3xl font-light tracking-wide mb-4 ${light ? 'text-cream-50' : 'text-stone-800'}`}>
        {ja}
      </h2>
      {lead && (
        <p className={`text-sm leading-relaxed max-w-prose ${centered ? 'mx-auto' : ''} ${light ? 'text-greige-300' : 'text-stone-700'}`}>
          {lead}
        </p>
      )}
    </div>
  )
}
