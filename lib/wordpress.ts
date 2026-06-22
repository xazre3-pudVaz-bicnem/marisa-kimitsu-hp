const WP_API = process.env.NEXT_PUBLIC_WP_API_URL ?? 'https://wp.marisa-kimitsu.com/wp-json/wp/v2'

export interface WPPost {
  id: number
  slug: string
  date: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
  featured_media: number
  categories: number[]
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
      media_details?: { sizes?: { medium?: { source_url: string } } }
    }>
    'wp:term'?: Array<Array<{ id: number; name: string; slug: string }>>
  }
}

export interface WPCategory {
  id: number
  name: string
  slug: string
  count: number
}

export async function getPosts(params?: {
  per_page?: number
  page?: number
  categories?: number[]
  search?: string
}): Promise<WPPost[]> {
  const url = new URL(`${WP_API}/posts`)
  url.searchParams.set('_embed', '1')
  if (params?.per_page) url.searchParams.set('per_page', String(params.per_page))
  if (params?.page) url.searchParams.set('page', String(params.page))
  if (params?.categories?.length) url.searchParams.set('categories', params.categories.join(','))
  if (params?.search) url.searchParams.set('search', params.search)

  try {
    const res = await fetch(url.toString(), { next: { revalidate: 3600 } })
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

export async function getPost(slug: string): Promise<WPPost | null> {
  const url = new URL(`${WP_API}/posts`)
  url.searchParams.set('slug', slug)
  url.searchParams.set('_embed', '1')

  try {
    const res = await fetch(url.toString(), { next: { revalidate: 3600 } })
    if (!res.ok) return null
    const posts: WPPost[] = await res.json()
    return posts[0] ?? null
  } catch {
    return null
  }
}

export async function getCategories(): Promise<WPCategory[]> {
  try {
    const res = await fetch(`${WP_API}/categories?per_page=50`, {
      next: { revalidate: 86400 },
    })
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&[a-z]+;/g, ' ').trim()
}

export function getFeaturedImageUrl(post: WPPost): string | null {
  const media = post._embedded?.['wp:featuredmedia']?.[0]
  return media?.media_details?.sizes?.medium?.source_url ?? media?.source_url ?? null
}

export function getPostCategories(post: WPPost): string[] {
  const terms = post._embedded?.['wp:term']?.[0]
  return terms?.map((t) => t.name) ?? []
}
