import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const POSTS_DIR = path.join(process.cwd(), 'content/blog')

export const CATEGORY_NAMES: Record<string, string> = {
  kimitsu: '君津・地域情報',
  care: 'ケア・お悩み別',
  menu: 'メニュー紹介',
  lifestyle: 'ライフスタイル',
  beginner: '初めての方へ',
}

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  date: string
  category: string
  tags: string[]
}

export interface BlogPost extends BlogPostMeta {
  content: string
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return []

  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .sort()
    .reverse()

  const posts: BlogPostMeta[] = []

  for (const file of files) {
    try {
      const filePath = path.join(POSTS_DIR, file)
      const raw = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(raw)

      const filenameSlug = file
        .replace(/\.md$/, '')
        .replace(/^\d{4}-\d{2}-\d{2}-/, '')

      const slug = (data.slug as string) || filenameSlug
      const title = data.title as string

      if (!slug || !title) continue

      posts.push({
        slug,
        title,
        description: (data.description as string) || '',
        date: (data.date as string) || '',
        category: (data.category as string) || '',
        tags: (data.tags as string[]) || [],
      })
    } catch {
      // skip malformed files
    }
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug)
}

export function getPostBySlug(slug: string): BlogPost | null {
  if (!fs.existsSync(POSTS_DIR)) return null

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'))

  for (const file of files) {
    try {
      const filePath = path.join(POSTS_DIR, file)
      const raw = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(raw)

      const filenameSlug = file
        .replace(/\.md$/, '')
        .replace(/^\d{4}-\d{2}-\d{2}-/, '')

      const fileSlug = (data.slug as string) || filenameSlug

      if (fileSlug === slug) {
        return {
          slug: fileSlug,
          title: (data.title as string) || '',
          description: (data.description as string) || '',
          date: (data.date as string) || '',
          category: (data.category as string) || '',
          tags: (data.tags as string[]) || [],
          content,
        }
      }
    } catch {
      // skip
    }
  }

  return null
}

export function getPostsByCategory(category: string): BlogPostMeta[] {
  return getAllPosts().filter((p) => p.category === category)
}

export function getCategories(): { slug: string; name: string; count: number }[] {
  const posts = getAllPosts()
  const counts: Record<string, number> = {}

  for (const post of posts) {
    if (post.category) {
      counts[post.category] = (counts[post.category] || 0) + 1
    }
  }

  return Object.entries(counts)
    .map(([slug, count]) => ({
      slug,
      name: CATEGORY_NAMES[slug] || slug,
      count,
    }))
    .sort((a, b) => b.count - a.count)
}

export function getRecentPosts(n = 5, excludeSlug?: string): BlogPostMeta[] {
  return getAllPosts()
    .filter((p) => p.slug !== excludeSlug)
    .slice(0, n)
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00+09:00')
  if (isNaN(d.getTime())) return dateStr
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}
