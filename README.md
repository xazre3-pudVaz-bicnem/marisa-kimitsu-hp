# もみほぐし・MARISA 君津店 公式サイト

千葉県君津市のもみほぐし・リラクゼーションサロン「MARISA 君津店」の公式ホームページ。

- **ターゲットキーワード**: 君津 マッサージ / 君津 もみほぐし
- **フレームワーク**: Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- **ブログ連携**: WordPress REST API (Headless CMS / Botwriter対応)
- **デプロイ**: Vercel

---

## 1. 初回セットアップ手順

```bash
# リポジトリをクローン（または ZIP 展開後、フォルダに移動）
git clone https://github.com/YOUR_USER/marisa.git
cd marisa

# 依存パッケージをインストール
npm install

# 環境変数ファイルを作成
cp .env.local.example .env.local
# .env.local を開いて各変数を実際の値に更新してください（後述）
```

---

## 2. ローカル起動方法

```bash
# 開発サーバーを起動
npm run dev
```

ブラウザで **http://localhost:3000** を開くとサイトが確認できます。

```bash
# 本番ビルドの確認（デプロイ前チェック用）
npm run build
npm run start
```

> **スマートフォン表示の確認**: Chrome の DevTools → デバイスアイコンでモバイルビューに切り替えてください。

---

## 3. `.env.local` に入れる項目

`.env.local.example` をコピーして `.env.local` を作成し、以下を設定してください。

```env
# 公開サイトURL（末尾スラッシュなし）
# Vercel 本番ドメインに変更する。OGP・canonical・構造化データに使用。
NEXT_PUBLIC_SITE_URL=https://marisa-kimitsu.com

# WordPress REST API のベースURL
# WordPress をサブドメインに設置後、実際の URL に変更する。
# TODO: WordPress セットアップ後に更新
NEXT_PUBLIC_WP_API_URL=https://wp.marisa-kimitsu.com/wp-json/wp/v2

# Google Analytics 4 測定ID（省略可）
# GA4 プロパティ作成後に追加する。
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

| 変数名 | 必須 | 説明 |
|--------|------|------|
| `NEXT_PUBLIC_SITE_URL` | ✅ 必須 | 本番ドメイン（OGP・サイトマップ等に使用） |
| `NEXT_PUBLIC_WP_API_URL` | ✅ ブログ使用時必須 | WordPress REST API エンドポイント |
| `NEXT_PUBLIC_GA_ID` | 任意 | Google Analytics 4 の測定ID |

> **ローカル開発時**: `NEXT_PUBLIC_SITE_URL=http://localhost:3000` に変更するとOGPプレビューが正しく動作します。

---

## 4. WordPressブログ連携の設定方法

### WordPress のセットアップ

1. WordPress をサブドメインに設置（例: `https://wp.marisa-kimitsu.com`）
2. WordPress REST API は標準で有効。外部から `https://wp.marisa-kimitsu.com/wp-json/wp/v2/posts` にアクセスできることを確認
3. `.env.local` の `NEXT_PUBLIC_WP_API_URL` を実際の URL に設定

### WordPress 側で作成するカテゴリ

| カテゴリスラッグ | カテゴリ名 | 用途 |
|------------------|------------|------|
| `shoulder` | 肩こり | 肩こり関連記事 |
| `lower-back` | 腰のつらさ | 腰痛関連記事 |
| `head-care` | ヘッドケア | 頭・眼精疲労関連記事 |
| `foot` | 足つぼ | 足ケア関連記事 |
| `fatigue` | 全身疲労 | 疲れ全般の記事 |
| `relax` | リラクゼーション | リラクゼーション全般 |
| `news` | お知らせ | キャンペーン・営業時間変更など |

### Botwriter 連携

Botwriter で記事を生成する場合は上記カテゴリを指定して投稿してください。
`/blog` ページ（`app/blog/page.tsx`）と `/news` ページ（`app/news/page.tsx`）が自動的にWordPress記事を取得して表示します。

---

## 5. GitHub へ push する手順

```bash
# 初回のみ: リモートリポジトリを追加
git remote add origin https://github.com/YOUR_USER/marisa.git

# 変更をステージ・コミット
git add .
git commit -m "feat: 〇〇を追加"

# push
git push origin main
```

> ブランチ名が `master` の場合は `git push origin master` に変更してください。

---

## 6. Vercel へ接続・デプロイする手順

### 初回デプロイ

1. [vercel.com](https://vercel.com) にログイン（GitHub アカウント推奨）
2. **「Add New Project」** → GitHub リポジトリを選択してインポート
3. **Framework Preset** が `Next.js` になっていることを確認
4. **Environment Variables** に以下を追加:
   - `NEXT_PUBLIC_SITE_URL` = `https://あなたのドメイン.com`
   - `NEXT_PUBLIC_WP_API_URL` = WordPress API URL
   - `NEXT_PUBLIC_GA_ID` = GA4 測定ID（任意）
5. **Deploy** ボタンをクリック

### 2回目以降

`main` ブランチに push すると Vercel が自動でビルド・デプロイします。

### カスタムドメインの設定

Vercel プロジェクト → **Settings → Domains** からドメインを追加し、DNS の CNAME を `cname.vercel-dns.com` に向けてください。

---

## 7. 画像を追加・差し替えする場合の場所と命名ルール

### 画像の保存場所

すべての実写真は `public/` フォルダ直下に配置されています。

```
public/
├── LINE_ALBUM_もみほぐしMARISA_260615_1.jpg   ← 外観（夜）
├── LINE_ALBUM_もみほぐしMARISA_260615_2.jpg   ← 店内全景
├── LINE_ALBUM_もみほぐしMARISA_260615_3.jpg   ← 施術ベッド（温かみのある）
│   ... （37枚）
├── og-image.jpg                                ← OGP画像（1200×630px）
└── logo.png                                    ← ロゴ画像
```

### 画像番号と内容の対応表

| ファイル | 内容 | 主な使用ページ |
|---------|------|---------------|
| `_1.jpg` | 外観・夜 | サロン、アクセス |
| `_2.jpg` | 店内全景 | トップ、サロン、初めての方へ |
| `_3.jpg` | 施術ベッド（温かみ） | トップ、サロン |
| `_4.jpg` | 店内装飾・ニッチ | トップ、サロン |
| `_5.jpg` | 全身もみほぐし | スタッフ、全身疲労 |
| `_6.jpg` | 背中のマッサージ | もみほぐし、セット |
| `_7.jpg` | 肩のクローズアップ | 肩こり、首こり |
| `_8.jpg` | 首・肩のクローズアップ | 肩こり |
| `_9.jpg` | 上背部マッサージ | 肩こり |
| `_10.jpg` | 肩の施術 | 肩こり |
| `_11.jpg` | 体重を使った深圧 | スタッフ、初めての方 |
| `_12.jpg` | 深圧（別角度） | 腰痛 |
| `_13.jpg` | 脚のストレッチ | 足つぼ、脚のだるさ |
| `_14.jpg` | 腕・肘の施術 | 脚のだるさ |
| `_15.jpg` | 腰・お尻のクローズアップ | 腰痛 |
| `_16.jpg` | 後頭部・首の施術 | 首こり |
| `_17.jpg` | カウンター（温かみのある照明） | サロン |
| `_18.jpg` | カウンター（別角度） | 初めての方 |
| `_25.jpg` | ヘッドケア（仰向け） | ヘッドケア、眼精疲労、セット |
| `_26.jpg` | 頭・首のケアのクローズアップ | ヘッドケア |
| `_28.jpg` | 外観＋駐車場 | アクセス |
| `_31.jpg` | 白い店内（カーテン区切り） | サロン |
| `_34.jpg` | 白いリクライニングチェア | 足つぼ |
| `_35.jpg` | 個室＋リクライニングチェア | サロン |
| `_36.jpg` | 清潔感のある白い施術ベッド | サロン |
| `_37.jpg` | 施術ベッド（温かみ） | サロン |

### 画像を差し替える手順

1. 新しい写真を `public/` フォルダに保存
2. 命名ルール: `LINE_ALBUM_もみほぐしMARISA_260615_38.jpg`（連番で追加）
3. 該当ページの `.tsx` ファイルを開き、`src` の値を新しいファイル名に変更
4. `alt` テキストも内容に合わせて更新（例: `"君津 もみほぐし marisa 施術風景"`）
5. `npm run dev` で表示を確認してから commit・push

### alt テキストの書き方ルール

- 地域キーワード + サービス名 + 内容を自然に組み合わせる
- 例: `"君津 もみほぐし marisa 肩こり 施術"` `"君津 マッサージ 店内"` `"君津 ヘッドケア 眼精疲労"`
- キーワードの詰め込みは禁止（3〜4語が上限）

---

## ページ構成

| ページ | URL | ターゲットキーワード |
|--------|-----|------------------|
| トップ | `/` | 君津 マッサージ / 君津 もみほぐし |
| 初めての方へ | `/first` | 君津 マッサージ 初めて |
| メニュー・料金 | `/menu` | 君津 マッサージ 料金 |
| もみほぐし | `/menu/body-care` | 君津 もみほぐし |
| ヘッドケア | `/menu/head` | 君津 ヘッドスパ / 眼精疲労 |
| 足つぼ | `/menu/foot` | 君津 足つぼ |
| セットコース | `/menu/set` | 君津 マッサージ セット |
| 症状別（肩こり） | `/symptom/stiff-shoulder` | 君津 肩こり マッサージ |
| 症状別（首こり） | `/symptom/neck` | 君津 首こり |
| 症状別（腰） | `/symptom/lower-back` | 君津 腰痛 マッサージ |
| 症状別（眼精疲労） | `/symptom/eye-fatigue` | 君津 眼精疲労 |
| 症状別（足） | `/symptom/leg-fatigue` | 君津 足つぼ / むくみ |
| 症状別（全身疲労） | `/symptom/fatigue` | 君津 疲労回復 マッサージ |
| 症状別（睡眠） | `/symptom/sleep-relax` | 君津 リラクゼーション |
| こだわり | `/concept` | — |
| スタッフ | `/staff` | — |
| 店内・設備 | `/salon` | — |
| アクセス | `/access` | 君津 マッサージ アクセス |
| よくある質問 | `/faq` | — |
| ブログ一覧 | `/blog` | — |
| ブログ詳細 | `/blog/[slug]` | 記事のキーワード |
| お知らせ | `/news` | — |
| ご予約 | `/reservation` | — |

---

## TODO（公開前に確認・設定が必要な項目）

- [ ] `lib/constants.ts` の `PHONE` を実際の電話番号に更新
- [ ] `lib/constants.ts` の `SHOP_INFO.postalCode` を正確な郵便番号に更新
- [ ] `SHOP_INFO.googleMapEmbedUrl` を正確なGoogle Maps埋め込みURLに更新
- [ ] `public/og-image.jpg` (1200×630) を作成・配置
- [ ] `public/logo.png` を作成・配置
- [ ] スタッフ情報をHPBから確認し、`app/staff/page.tsx` のスタッフ名・経歴を更新
- [ ] Google Analytics 4 の測定IDを取得し `.env.local` に設定
- [ ] WordPress をセットアップし `NEXT_PUBLIC_WP_API_URL` を設定
- [ ] ホットペッパービューティーの最新メニュー・料金を確認し各ページを更新
- [ ] Vercelに環境変数を設定してデプロイ
- [ ] Google Search Console に登録・サイトマップを送信
- [ ] Google ビジネスプロフィールの「ウェブサイト」URLを公式HPに変更

---

## 技術スタック

- **フレームワーク**: Next.js 16 (App Router)
- **言語**: TypeScript
- **スタイル**: Tailwind CSS v4（CSS-first configuration）
- **アニメーション**: Framer Motion（必要に応じて）
- **フォント**: Noto Sans JP / Noto Serif JP / Cormorant Garamond（next/font/google）
- **CMS**: WordPress REST API（Headless）
- **SEO**: next/metadata, JSON-LD（LocalBusiness, FAQPage, BreadcrumbList, BlogPosting）
- **デプロイ**: Vercel
- **バージョン管理**: GitHub
