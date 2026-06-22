export const SITE_NAME = 'もみほぐし・MARISA'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://marisa-kimitsu.com'
export const HPB_URL = 'https://beauty.hotpepper.jp/kr/slnH000777799/'
export const BMERIT_URL = 'https://g97mhk-google.b-merit.jp/h6cg93/web/reserve1/'
export const INSTAGRAM_URL = 'https://www.instagram.com/momihogushi_marisa/'
export const LINE_URL = process.env.NEXT_PUBLIC_LINE_URL ?? ''
export const PHONE = '0439-00-0000' // TODO: 実際の電話番号に差し替え

export const SHOP_INFO = {
  name: 'もみほぐし・MARISA 君津店',
  address: '千葉県君津市杢師3-20-10',
  postalCode: '299-1100', // TODO: 正確な郵便番号に差し替え
  lat: 35.3274,
  lng: 139.9015,
  hours: '10:00〜24:00（最終受付 23:00）',
  phone: PHONE,
  hpbUrl: HPB_URL,
  bmeritUrl: BMERIT_URL,
  lineUrl: LINE_URL,
  instagramUrl: INSTAGRAM_URL,
  googleMapUrl: 'https://maps.google.com/?q=千葉県君津市杢師3-20-10',
  googleMapEmbedUrl:
    'https://maps.google.com/maps?q=%E5%8D%83%E8%91%89%E7%9C%8C%E5%90%9B%E6%B4%A5%E5%B8%82%E6%9D%A2%E5%B8%AB3-20-10&hl=ja&z=16&ie=UTF8&iwloc=&output=embed',
} as const

export const NAV_ITEMS = [
  { label: '初めての方へ', href: '/first' },
  {
    label: 'メニュー・料金',
    href: '/menu',
    children: [
      { label: 'もみほぐし', href: '/menu/body-care' },
      { label: 'ヘッドケア', href: '/menu/head' },
      { label: '足つぼ・リフレ', href: '/menu/foot' },
      { label: 'セットコース', href: '/menu/set' },
      { label: '鍼灸メニュー', href: '/menu/acupuncture' },
      { label: '美容鍼', href: '/menu/beauty-acupuncture' },
    ],
  },
  {
    label: 'お悩み別',
    href: '/symptom',
    children: [
      { label: '肩こり', href: '/symptom/stiff-shoulder' },
      { label: '首こり', href: '/symptom/neck' },
      { label: '腰のつらさ', href: '/symptom/lower-back' },
      { label: '眼精疲労・頭の重さ', href: '/symptom/eye-fatigue' },
      { label: '足のだるさ・むくみ', href: '/symptom/leg-fatigue' },
      { label: '全身疲労', href: '/symptom/fatigue' },
      { label: '睡眠・リラックス', href: '/symptom/sleep-relax' },
      { label: 'ストレス・緊張', href: '/symptom/stress' },
      { label: 'デスクワーク疲れ', href: '/symptom/desk-work' },
      { label: '頭痛・頭の重さ', href: '/symptom/headache' },
      { label: '肩甲骨まわりの張り', href: '/symptom/shoulder-blade' },
      { label: 'スポーツ後の疲れ', href: '/symptom/sports' },
      { label: '冷え・むくみ', href: '/symptom/cold-body' },
      { label: '仕事疲れ', href: '/symptom/work-fatigue' },
      { label: '慢性疲労', href: '/symptom/chronic-fatigue' },
    ],
  },
  { label: 'こだわり', href: '/concept' },
  {
    label: 'お店について',
    href: '/salon',
    children: [
      { label: 'スタッフ', href: '/staff' },
      { label: '店内・設備', href: '/salon' },
      { label: 'アクセス', href: '/access' },
    ],
  },
  { label: 'よくある質問', href: '/faq' },
  { label: 'ブログ', href: '/blog' },
  {
    label: '地域・シーン別',
    href: '/area/kimitsu',
    children: [
      { label: '君津でマッサージをお探しの方', href: '/area/kimitsu' },
      { label: '木更津方面からお越しの方', href: '/area/kisarazu' },
      { label: '富津方面からお越しの方', href: '/area/futtsu' },
      { label: '袖ケ浦方面からお越しの方', href: '/area/sodegaura' },
      { label: '仕事帰りに通いたい方', href: '/scene/after-work' },
      { label: '当日予約したい方', href: '/scene/same-day' },
      { label: '車で通いたい方', href: '/scene/parking' },
      { label: 'ペアで利用したい方', href: '/scene/pair' },
      { label: '男性のお客様', href: '/scene/men' },
      { label: '女性のお客様', href: '/scene/ladies' },
      { label: 'プレゼント・記念日に', href: '/scene/gift' },
      { label: '定期メンテナンス', href: '/scene/regular' },
    ],
  },
  {
    label: 'ガイド',
    href: '/guide/what-is-momihogushi',
    children: [
      { label: 'もみほぐしとは', href: '/guide/what-is-momihogushi' },
      { label: 'ヘッドケアとは', href: '/guide/head-care' },
      { label: '足つぼとは', href: '/guide/foot-reflexology' },
      { label: '通う頻度の目安', href: '/guide/frequency' },
      { label: 'コースの選び方', href: '/guide/course-selection' },
      { label: '整体との違い', href: '/guide/vs-seitai' },
      { label: '施術後の過ごし方', href: '/guide/after-care' },
      { label: '期待できること', href: '/guide/benefits' },
      { label: '料金ガイド', href: '/guide/price-guide' },
      { label: '君津のマッサージ選びガイド', href: '/guide/kimitsu-massage-guide' },
    ],
  },
] as const
