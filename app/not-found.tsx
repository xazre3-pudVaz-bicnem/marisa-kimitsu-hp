import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream-50 flex items-center justify-center px-5">
      <div className="text-center max-w-md">
        <p className="font-en text-8xl font-light text-brown-400 mb-6">404</p>
        <h1 className="text-xl font-light text-stone-800 mb-4 tracking-wide">
          ページが見つかりません
        </h1>
        <p className="text-sm text-stone-700 leading-loose mb-10">
          お探しのページは移動・削除されたか、
          <br />
          URLが正しくない可能性があります。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-brown-500 text-cream-50 text-sm px-7 py-3.5 tracking-wider hover:bg-brown-600 transition-colors"
          >
            トップへ戻る
          </Link>
          <Link
            href="/menu"
            className="border border-brown-400 text-brown-500 text-sm px-7 py-3.5 tracking-wider hover:bg-brown-500 hover:text-cream-50 transition-colors"
          >
            メニューを見る
          </Link>
        </div>
      </div>
    </div>
  )
}
