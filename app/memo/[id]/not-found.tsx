import Link from 'next/link';
import AnimatedBackground from '@/app/_components/AnimatedBackground';

export default function NotFound() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-indigo-500 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-slate-100 mb-4">記事が見つかりません</h2>
          <p className="text-slate-400 mb-8">
            お探しのブログ記事は存在しないか、削除された可能性があります。
          </p>
          <Link
            href="/memo"
            className="inline-flex items-center px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors duration-300"
          >
            Back to memo page
          </Link>
        </div>
      </div>
    </div>
  );
}
