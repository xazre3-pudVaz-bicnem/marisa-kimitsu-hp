/**
 * もみほぐしMARISA 君津店 — 毎日1記事を自動生成して content/blog/ に保存するスクリプト。
 * GitHub Actions から呼び出される。
 *
 * 実行方法:
 *   ANTHROPIC_API_KEY=xxx npx tsx scripts/generate-daily-post.ts
 */

import Anthropic from '@anthropic-ai/sdk'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// ─── 設定 ────────────────────────────────────────────────────────────────────

const POSTS_DIR = path.join(process.cwd(), 'content/blog')

const SITE = {
  name: 'もみほぐしMARISA 君津店',
  url: 'https://marisa-kimitsu-hp.vercel.app',
  area: '君津市・木更津市・袖ケ浦市・富津市',
  business: 'もみほぐし・リラクゼーション・マッサージ・鍼灸',
  hours: '10:00〜24:00（最終受付 23:00）',
  access: '千葉県君津市杢師3-20-10 / 君津駅から車5分 / 無料駐車場あり',
}

// ─── トピックプール ────────────────────────────────────────────────────────────

const TOPICS: {
  title: string
  slug: string
  category: string
  tags: string[]
}[] = [
  // ── 君津・地域情報 ──
  {
    title: '君津でマッサージを探している方へ：もみほぐしMARISAの通いやすさについて',
    slug: 'kimitsu-massage-intro',
    category: 'kimitsu',
    tags: ['君津 マッサージ', '君津 もみほぐし', '君津 リラクゼーション', '通いやすい'],
  },
  {
    title: '君津市で仕事帰りに使えるマッサージサロン：夜0時まで営業のMARISAをご紹介',
    slug: 'kimitsu-after-work-massage',
    category: 'kimitsu',
    tags: ['君津 仕事帰り マッサージ', '君津 夜 マッサージ', '君津 もみほぐし', '仕事帰り'],
  },
  {
    title: '君津でリラクゼーションサロンを探す方へ：MARISA 君津店の特徴と通い方',
    slug: 'kimitsu-relaxation-salon',
    category: 'kimitsu',
    tags: ['君津 リラクゼーション', '君津 マッサージ', '君津 サロン', 'リラクゼーション'],
  },
  {
    title: '木更津からMARISA 君津店へのアクセス：車で20分圏内の本格もみほぐしサロン',
    slug: 'kisarazu-access-marisa',
    category: 'kimitsu',
    tags: ['木更津 マッサージ', '木更津 もみほぐし', '君津 マッサージ', '木更津近郊'],
  },
  {
    title: '袖ケ浦からお越しの方へ：君津市MARISA 君津店までのアクセスと施術案内',
    slug: 'sodegaura-marisa-access',
    category: 'kimitsu',
    tags: ['袖ケ浦 マッサージ', '袖ケ浦 もみほぐし', '君津 マッサージ', 'アクセス'],
  },
  {
    title: '富津からも通えるリラクゼーションサロン：MARISA 君津店の施術メニューとアクセス',
    slug: 'futtsu-marisa-guide',
    category: 'kimitsu',
    tags: ['富津 マッサージ', '富津 もみほぐし', '君津 リラクゼーション', 'アクセス'],
  },
  {
    title: '君津市でペアで使えるマッサージサロン：ベッド3台完備のMARISAでカップル・家族利用',
    slug: 'kimitsu-pair-massage',
    category: 'kimitsu',
    tags: ['君津 マッサージ', '君津 ペア利用', '君津 カップル', 'ペア施術'],
  },
  {
    title: '君津市で女性も利用しやすいリラクゼーションサロン：MARISAの環境と配慮',
    slug: 'kimitsu-women-friendly-salon',
    category: 'kimitsu',
    tags: ['君津 女性 マッサージ', '君津 女性 リラクゼーション', '君津 もみほぐし', '女性向け'],
  },
  // ── ケア・お悩み別 ──
  {
    title: '君津の肩こりケア：デスクワーク・スマホ疲れに効くもみほぐしの選び方',
    slug: 'kimitsu-stiff-shoulder-care',
    category: 'care',
    tags: ['君津 肩こり', '肩こり ケア', 'デスクワーク 肩こり', '君津 もみほぐし'],
  },
  {
    title: '君津の腰のつらさケア：腰痛持ちの方がMARISAのもみほぐしを選ぶ理由',
    slug: 'kimitsu-lower-back-care',
    category: 'care',
    tags: ['君津 腰痛', '腰のつらさ ケア', '腰痛 もみほぐし', '君津 マッサージ'],
  },
  {
    title: 'デスクワークの肩こりが抜けない方へ：体の負担をやわらげるもみほぐしのポイント',
    slug: 'desk-work-shoulder-care',
    category: 'care',
    tags: ['デスクワーク 肩こり', 'デスクワーク 疲れ', '肩こり ケア', 'もみほぐし'],
  },
  {
    title: '立ち仕事で足がだるい・むくむ方へ：足つぼ・リフレクソロジーのケア方法',
    slug: 'standing-work-foot-care',
    category: 'care',
    tags: ['立ち仕事 足の疲れ', '足つぼ', 'むくみ ケア', 'リフレクソロジー'],
  },
  {
    title: '子育て世代の疲れをリセットするリラクゼーション：MARISAで体を整える',
    slug: 'parenting-fatigue-relax',
    category: 'care',
    tags: ['子育て 疲れ', 'ママ リラクゼーション', '君津 もみほぐし', '疲労回復'],
  },
  {
    title: '君津で疲労回復を目的にリラクゼーションサロンを選ぶ方へ',
    slug: 'kimitsu-fatigue-recovery',
    category: 'care',
    tags: ['君津 疲労回復', '疲れ解消', 'リラクゼーション', '君津 マッサージ'],
  },
  {
    title: '睡眠の質が気になる方へ：リラクゼーションが夜の休息をサポートする理由',
    slug: 'sleep-quality-relaxation',
    category: 'care',
    tags: ['睡眠 リラクゼーション', '睡眠の質', 'リラクゼーション 効果', '疲労回復'],
  },
  {
    title: '君津のヘッドケア・眼精疲労対策：スマホ・PCで頭が重い方に',
    slug: 'kimitsu-head-care-eye-fatigue',
    category: 'care',
    tags: ['君津 ヘッドケア', '君津 ヘッドスパ', '眼精疲労', '頭の重さ'],
  },
  // ── メニュー紹介 ──
  {
    title: 'もみほぐしの施術時間の選び方：45分・60分・90分・120分の違いを解説',
    slug: 'momihogushi-time-selection',
    category: 'menu',
    tags: ['もみほぐし 時間', 'もみほぐし 選び方', 'コース 選び方', 'MARISAメニュー'],
  },
  {
    title: 'ヘッドセットコースの魅力：もみほぐし＋ヘッドケアで体も頭もスッキリする理由',
    slug: 'head-set-course-appeal',
    category: 'menu',
    tags: ['ヘッドセット', 'セットコース', 'ヘッドケア', 'もみほぐし組み合わせ'],
  },
  {
    title: 'もみほぐしと足つぼを組み合わせるセットコースの効果：全身の疲れをまとめてケア',
    slug: 'body-care-foot-set-benefits',
    category: 'menu',
    tags: ['足つぼ セット', 'もみほぐし 足つぼ', 'セットコース', '全身ケア'],
  },
  {
    title: '君津のヘッドスパ・ヘッドケアとは：MARISAのドライ式ヘッドケアについて',
    slug: 'kimitsu-head-spa-guide',
    category: 'menu',
    tags: ['君津 ヘッドスパ', '君津 ヘッドケア', 'ドライ ヘッドケア', '眼精疲労'],
  },
  {
    title: '君津の足つぼ・リフレクソロジーとは：施術の流れと選び方のポイント',
    slug: 'kimitsu-foot-reflexology-guide',
    category: 'menu',
    tags: ['君津 足つぼ', 'リフレクソロジー', '足つぼ 効果', '施術 流れ'],
  },
  {
    title: '鍼灸メニューのある君津のリラクゼーションサロン：MARISAの鍼灸師による施術',
    slug: 'kimitsu-acupuncture-menu',
    category: 'menu',
    tags: ['君津 鍼灸', '鍼灸 リラクゼーション', '鍼灸師', 'もみほぐし 鍼灸'],
  },
  {
    title: '美容鍼（美顔鍼）とは：顔周りのケアを目的とした鍼灸施術の基本知識',
    slug: 'beauty-acupuncture-guide',
    category: 'menu',
    tags: ['美容鍼', '美顔鍼', '鍼灸 美容', '君津 美容鍼'],
  },
  {
    title: '君津の全身もみほぐし：120分コースで全身をじっくりケアするメリット',
    slug: 'kimitsu-full-body-120min',
    category: 'menu',
    tags: ['君津 全身もみほぐし', 'もみほぐし 120分', '全身ケア', '君津 マッサージ'],
  },
  // ── ライフスタイル ──
  {
    title: '定期的にもみほぐしサロンに通うことで変わること：週1・月2回のメンテナンスの効果',
    slug: 'regular-momihogushi-benefits',
    category: 'lifestyle',
    tags: ['定期メンテナンス', '通い方 頻度', 'リラクゼーション 習慣', '身体ケア'],
  },
  {
    title: '仕事帰りにリラクゼーションサロンを活用するライフスタイル：夜0時まで営業の使い方',
    slug: 'after-work-relaxation-lifestyle',
    category: 'lifestyle',
    tags: ['仕事帰り マッサージ', 'リラクゼーション 習慣', '君津 夜 マッサージ', 'ライフスタイル'],
  },
  {
    title: '身体のメンテナンスをルーティン化する方法：疲れを溜めない生活の作り方',
    slug: 'body-maintenance-routine',
    category: 'lifestyle',
    tags: ['身体メンテナンス', '疲れ 溜めない', 'ルーティン', 'セルフケア'],
  },
  {
    title: '季節の変わり目に体が重くなる理由とリラクゼーションケアの活用法',
    slug: 'seasonal-change-body-care',
    category: 'lifestyle',
    tags: ['季節の変わり目 疲れ', '体の重さ', 'リラクゼーション', '身体ケア'],
  },
  // ── 初めての方へ ──
  {
    title: '初めてのリラクゼーションサロン選び：何を基準にすればいい？失敗しないポイント',
    slug: 'first-relaxation-salon-guide',
    category: 'beginner',
    tags: ['初めて リラクゼーション', 'サロン選び', 'もみほぐし 初めて', '初心者'],
  },
  {
    title: 'もみほぐしとマッサージ・整体の違い：自分に合ったリラクゼーションを選ぶコツ',
    slug: 'momihogushi-vs-seitai',
    category: 'beginner',
    tags: ['もみほぐし 違い', '整体 比較', 'マッサージ 種類', 'サロン選び'],
  },
  {
    title: 'もみほぐしサロンで初めて施術を受けるときの流れ：予約から帰宅まで',
    slug: 'first-visit-guide',
    category: 'beginner',
    tags: ['もみほぐし 初めて', '施術の流れ', '予約方法', '君津 もみほぐし'],
  },
  {
    title: 'もみほぐしを受けた後の過ごし方：施術後に気をつけると効果を感じやすくなること',
    slug: 'after-session-care',
    category: 'beginner',
    tags: ['施術後 過ごし方', 'もみほぐし アフターケア', 'リラクゼーション 効果', '身体ケア'],
  },
]

// ─── ヘルパー ──────────────────────────────────────────────────────────────────

function getExistingSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return []

  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, f), 'utf-8')
      try {
        const { data } = matter(raw)
        return (
          (data.slug as string) ||
          f
            .replace(/\.md$/, '')
            .replace(/^\d{4}-\d{2}-\d{2}-/, '')
        )
      } catch {
        return f
          .replace(/\.md$/, '')
          .replace(/^\d{4}-\d{2}-\d{2}-/, '')
      }
    })
}

function pickTopic(existingSlugs: string[]) {
  const available = TOPICS.filter((t) => !existingSlugs.includes(t.slug))

  if (available.length > 0) {
    // カテゴリをバランス良く選ぶ
    const categoryCount: Record<string, number> = {}
    for (const slug of existingSlugs) {
      const topic = TOPICS.find((t) => t.slug === slug)
      if (topic) {
        categoryCount[topic.category] = (categoryCount[topic.category] || 0) + 1
      }
    }
    // 記事数が少ないカテゴリを優先
    available.sort((a, b) => {
      const countA = categoryCount[a.category] || 0
      const countB = categoryCount[b.category] || 0
      return countA - countB
    })
    return available[0]
  }

  // 全トピック消化済み → ランダムに選んでslugにサフィックスを付ける
  const base = TOPICS[Math.floor(Math.random() * TOPICS.length)]
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, '')
  return {
    ...base,
    slug: `${base.slug}-${date}`,
  }
}

function todayStr(): string {
  const now = new Date()
  // JST (UTC+9)
  const jst = new Date(now.getTime() + 9 * 60 * 60 * 1000)
  return jst.toISOString().slice(0, 10)
}

// ─── 記事生成 ─────────────────────────────────────────────────────────────────

async function generatePost(topic: (typeof TOPICS)[0]): Promise<string> {
  const client = new Anthropic()

  const systemPrompt = `あなたは${SITE.name}のブログ執筆者です。
${SITE.name}は${SITE.area}を主な対象エリアとする${SITE.business}サロンです。

営業時間: ${SITE.hours}
アクセス: ${SITE.access}

記事執筆のルール:
- 日本語で書く
- 2,000〜3,500文字の記事にする
- SEO的に有益で、サロンらしく自然で読みやすい文章にする
- 地域名（君津・木更津・袖ケ浦・富津）とサービス名を自然に含める
- H2（## ）・H3（### ）を使って読みやすく構成する
- 導入文・本文・まとめの構成にする
- 「治る」「改善する」「治療」「診断」「必ず効果がある」「痛みがなくなる」「No.1」などの表現は使わない
- 「身体の状態に合わせたケア」「不調を感じる部位へのアプローチ」「日々のメンテナンス」「負担をやわらげるサポート」「すっきり感を目指す」のような表現はOK
- 医療行為との混同を招く断定表現は禁止
- 根拠のないNo.1・最安・保証などの表現は禁止
- AIが書いた感の強いテンプレート的な文章は避ける
- 記事の末尾にMARISA 君津店への自然な誘導を入れる（押し売り感なく）
- 実際のサロン情報（営業時間・アクセス・駐車場・当日予約OK）は正確に含めてよい
- 内部リンク候補: /menu（メニュー）、/reservation（ご予約）、/faq（よくある質問）、/first（初めての方へ）、/access（アクセス）
- Markdownの本文のみを出力し、frontmatterは出力しない
- コードブロックで囲まない（Markdownをそのまま出力）`

  const userPrompt = `以下のテーマでブログ記事を書いてください。

テーマ: ${topic.title}
カテゴリ: ${topic.category}
対象キーワード: ${topic.tags.join('・')}

記事の構成:
1. 導入（テーマの背景・読者のお悩みへの共感）
2. 本文（H2・H3で2〜4章に分けた具体的な内容）
3. まとめ・MARISA 君津店の紹介

本文のみ出力してください（frontmatterは不要）。`

  const message = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 4096,
    messages: [{ role: 'user', content: userPrompt }],
    system: systemPrompt,
  })

  const content = message.content[0]
  if (content.type !== 'text') throw new Error('Unexpected response type')

  return content.text.trim()
}

// ─── メイン ───────────────────────────────────────────────────────────────────

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error('ANTHROPIC_API_KEY が設定されていません')
  }

  const existingSlugs = getExistingSlugs()
  console.log(`既存記事: ${existingSlugs.length}件`)

  const topic = pickTopic(existingSlugs)
  console.log(`生成トピック: ${topic.title} (${topic.slug})`)

  console.log('Claude API で記事を生成中...')
  const body = await generatePost(topic)
  console.log(`生成完了: ${body.length}文字`)

  const today = todayStr()
  const filename = `${today}-${topic.slug}.md`
  const filepath = path.join(POSTS_DIR, filename)

  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true })
  }

  // description: 本文の最初の段落から抽出
  const firstParagraph = body
    .split('\n')
    .filter((line) => line.trim() && !line.startsWith('#'))
    .slice(0, 1)
    .join('')
    .slice(0, 120)

  const frontmatter = matter.stringify(body, {
    title: topic.title,
    slug: topic.slug,
    description: firstParagraph,
    date: today,
    category: topic.category,
    tags: topic.tags,
  })

  fs.writeFileSync(filepath, frontmatter, 'utf-8')
  console.log(`✓ 記事を保存しました: ${filename}`)
}

main().catch((err) => {
  console.error('エラー:', err)
  process.exit(1)
})
