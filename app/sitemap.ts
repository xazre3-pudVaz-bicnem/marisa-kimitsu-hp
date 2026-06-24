import type { MetadataRoute } from 'next'
import { getPosts } from '@/lib/wordpress'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://marisa-kimitsu.com'

const NOW = new Date('2026-06-24')
const MONTHLY = new Date('2026-06-24')

const staticRoutes: MetadataRoute.Sitemap = [
  { url: `${SITE_URL}/`, lastModified: NOW, priority: 1.0, changeFrequency: 'weekly' },
  { url: `${SITE_URL}/first`, lastModified: MONTHLY, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/menu`, lastModified: MONTHLY, priority: 0.9, changeFrequency: 'weekly' },
  { url: `${SITE_URL}/menu/body-care`, lastModified: MONTHLY, priority: 0.9, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/menu/head`, lastModified: MONTHLY, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/menu/foot`, lastModified: MONTHLY, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/menu/set`, lastModified: MONTHLY, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/menu/acupuncture`, lastModified: MONTHLY, priority: 0.9, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/menu/beauty-acupuncture`, lastModified: MONTHLY, priority: 0.9, changeFrequency: 'monthly' },
  // Symptom pages
  { url: `${SITE_URL}/symptom`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/stiff-shoulder`, lastModified: MONTHLY, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/neck`, lastModified: MONTHLY, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/lower-back`, lastModified: MONTHLY, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/eye-fatigue`, lastModified: MONTHLY, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/leg-fatigue`, lastModified: MONTHLY, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/fatigue`, lastModified: MONTHLY, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/sleep-relax`, lastModified: MONTHLY, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/headache`, lastModified: MONTHLY, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/cold-body`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/stress`, lastModified: MONTHLY, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/desk-work`, lastModified: MONTHLY, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/sports`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/shoulder-blade`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/posture`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/arm-fatigue`, lastModified: MONTHLY, priority: 0.6, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/hip-joint`, lastModified: MONTHLY, priority: 0.6, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/chronic-fatigue`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/work-fatigue`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/commute-fatigue`, lastModified: MONTHLY, priority: 0.6, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/insomnia`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  // About pages
  { url: `${SITE_URL}/concept`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/staff`, lastModified: MONTHLY, priority: 0.6, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/salon`, lastModified: MONTHLY, priority: 0.6, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/access`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/faq`, lastModified: NOW, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/blog`, lastModified: NOW, priority: 0.7, changeFrequency: 'daily' },
  { url: `${SITE_URL}/news`, lastModified: MONTHLY, priority: 0.6, changeFrequency: 'weekly' },
  { url: `${SITE_URL}/reservation`, lastModified: MONTHLY, priority: 0.9, changeFrequency: 'monthly' },
  // Area pages
  { url: `${SITE_URL}/area`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/area/kimitsu`, lastModified: NOW, priority: 1.0, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/area/kisarazu`, lastModified: MONTHLY, priority: 0.9, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/area/futtsu`, lastModified: MONTHLY, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/area/sodegaura`, lastModified: MONTHLY, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/area/ichihara`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/area/kimitsu-station`, lastModified: MONTHLY, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/area/kimitsu-ic`, lastModified: MONTHLY, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/area/boso`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/area/chiba-south`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/area/awa`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/area/tateyama`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/area/minamiboso`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  // Scene pages
  { url: `${SITE_URL}/scene`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/after-work`, lastModified: MONTHLY, priority: 0.9, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/same-day`, lastModified: MONTHLY, priority: 0.9, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/parking`, lastModified: MONTHLY, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/pair`, lastModified: MONTHLY, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/holiday`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/gift`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/men`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/ladies`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/regular`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/stress`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/night`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/seniors`, lastModified: MONTHLY, priority: 0.6, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/friends`, lastModified: MONTHLY, priority: 0.6, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/birthday`, lastModified: MONTHLY, priority: 0.6, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/before-sleep`, lastModified: MONTHLY, priority: 0.6, changeFrequency: 'monthly' },
  // Guide pages
  { url: `${SITE_URL}/guide`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/guide/what-is-momihogushi`, lastModified: MONTHLY, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/guide/head-care`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/guide/foot-reflexology`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/guide/frequency`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/guide/course-selection`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/guide/vs-seitai`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/guide/after-care`, lastModified: MONTHLY, priority: 0.6, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/guide/benefits`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/guide/price-guide`, lastModified: MONTHLY, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/guide/kimitsu-massage-guide`, lastModified: MONTHLY, priority: 0.8, changeFrequency: 'monthly' },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts({ per_page: 100 })
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.6,
    changeFrequency: 'monthly',
  }))

  return [...staticRoutes, ...blogRoutes]
}
