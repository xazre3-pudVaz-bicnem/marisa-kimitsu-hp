import type { MetadataRoute } from 'next'
import { getPosts } from '@/lib/wordpress'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://marisa-kimitsu.com'

const staticRoutes: MetadataRoute.Sitemap = [
  { url: `${SITE_URL}/`, priority: 1.0, changeFrequency: 'weekly' },
  { url: `${SITE_URL}/first`, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/menu`, priority: 0.9, changeFrequency: 'weekly' },
  { url: `${SITE_URL}/menu/body-care`, priority: 0.9, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/menu/head`, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/menu/foot`, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/menu/set`, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/menu/acupuncture`, priority: 0.9, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/menu/beauty-acupuncture`, priority: 0.9, changeFrequency: 'monthly' },
  // Symptom pages
  { url: `${SITE_URL}/symptom`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/stiff-shoulder`, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/neck`, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/lower-back`, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/eye-fatigue`, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/leg-fatigue`, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/fatigue`, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/sleep-relax`, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/headache`, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/cold-body`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/stress`, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/desk-work`, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/sports`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/shoulder-blade`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/posture`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/arm-fatigue`, priority: 0.6, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/hip-joint`, priority: 0.6, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/chronic-fatigue`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/work-fatigue`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/commute-fatigue`, priority: 0.6, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/symptom/insomnia`, priority: 0.7, changeFrequency: 'monthly' },
  // About pages
  { url: `${SITE_URL}/concept`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/staff`, priority: 0.6, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/salon`, priority: 0.6, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/access`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/faq`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/blog`, priority: 0.7, changeFrequency: 'daily' },
  { url: `${SITE_URL}/news`, priority: 0.6, changeFrequency: 'weekly' },
  { url: `${SITE_URL}/reservation`, priority: 0.9, changeFrequency: 'monthly' },
  // Area pages
  { url: `${SITE_URL}/area`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/area/kimitsu`, priority: 1.0, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/area/kisarazu`, priority: 0.9, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/area/futtsu`, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/area/sodegaura`, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/area/ichihara`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/area/kimitsu-station`, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/area/kimitsu-ic`, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/area/boso`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/area/chiba-south`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/area/awa`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/area/tateyama`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/area/minamiboso`, priority: 0.7, changeFrequency: 'monthly' },
  // Scene pages
  { url: `${SITE_URL}/scene`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/after-work`, priority: 0.9, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/same-day`, priority: 0.9, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/parking`, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/pair`, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/holiday`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/gift`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/men`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/ladies`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/regular`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/stress`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/night`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/seniors`, priority: 0.6, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/friends`, priority: 0.6, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/birthday`, priority: 0.6, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/scene/before-sleep`, priority: 0.6, changeFrequency: 'monthly' },
  // Guide pages
  { url: `${SITE_URL}/guide`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/guide/what-is-momihogushi`, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/guide/head-care`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/guide/foot-reflexology`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/guide/frequency`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/guide/course-selection`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/guide/vs-seitai`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/guide/after-care`, priority: 0.6, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/guide/benefits`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/guide/price-guide`, priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/guide/kimitsu-massage-guide`, priority: 0.8, changeFrequency: 'monthly' },
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
