'use client';

import { ArrowLeft, Calendar, Clock, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AnimatedBackground from '../components/AnimatedBackground';

import { blogPosts } from '../data/blogPosts';

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const postId = parseInt(params.id);
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== postId).slice(0, 3);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          ブログ一覧に戻る
        </Link>

        <article className="bg-slate-800/50 backdrop-blur-sm border border-indigo-500/10 rounded-2xl overflow-hidden">
          <header className="text-center p-8 border-b border-indigo-500/10">
            <h1 className="text-4xl font-bold font-space-grotesk mb-6 bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-slate-400 flex-wrap">
              <div className="flex items-center gap-2">
                <Image
                  src="https://placehold.jp/40x40.png"
                  alt="Author"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span>山田 太郎</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          <div className="relative h-96 bg-gradient-to-br from-indigo-600 to-cyan-600">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>

          <div className="p-8 space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              React Server Components (RSC)
              は、Reactアプリケーションの構築方法に革命をもたらす新しいアーキテクチャです。この記事では、RSCの基本概念から実践的な実装方法まで、包括的に解説します。
            </p>

            <h2 className="text-2xl font-bold font-space-grotesk text-slate-100 mt-8 mb-4">
              なぜReact Server Componentsが必要なのか？
            </h2>
            <p className="text-slate-300 leading-relaxed">
              従来のReactアプリケーションでは、すべてのコンポーネントがクライアントサイドで実行されていました。これにより、以下のような課題が生じていました：
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>大きなJavaScriptバンドルサイズ</li>
              <li>初期ロード時間の増加</li>
              <li>SEOの課題</li>
              <li>データフェッチングの複雑さ</li>
            </ul>

            <h2 className="text-2xl font-bold font-space-grotesk text-slate-100 mt-8 mb-4">
              React Server Componentsの主な利点
            </h2>
            <p className="text-slate-300 leading-relaxed">
              RSCは、これらの課題を解決する革新的なアプローチを提供します：
            </p>

            <h3 className="text-xl font-semibold text-slate-100 mt-6 mb-3">
              1. ゼロバンドルサイズ
            </h3>
            <p className="text-slate-300 leading-relaxed">
              サーバーコンポーネントはクライアントに送信されないため、JavaScriptバンドルサイズを大幅に削減できます。
            </p>

            <pre className="bg-slate-900/50 border border-indigo-500/20 rounded-lg p-6 overflow-x-auto">
              <code className="text-cyan-400 font-mono text-sm">
                {`// ServerComponent.tsx
async function ServerComponent() {
  const data = await fetchData(); // サーバーでのみ実行
  return <div>{data}</div>;
}`}
              </code>
            </pre>

            <h3 className="text-xl font-semibold text-slate-100 mt-6 mb-3">
              2. 直接的なバックエンドアクセス
            </h3>
            <p className="text-slate-300 leading-relaxed">
              データベースやファイルシステムに直接アクセスできるため、APIエンドポイントが不要になります。
            </p>

            <blockquote className="border-l-4 border-indigo-500 pl-6 italic text-slate-300 bg-slate-900/30 p-4 rounded-r-lg">
              &quot;React Server
              Componentsは、フルスタック開発の新しいパラダイムを提示しています。フロントエンドとバックエンドの境界線が曖昧になり、より統合された開発体験を提供します。&quot;
            </blockquote>

            <h2 className="text-2xl font-bold font-space-grotesk text-slate-100 mt-8 mb-4">
              実装のベストプラクティス
            </h2>
            <p className="text-slate-300 leading-relaxed">
              RSCを効果的に活用するためのベストプラクティスをいくつか紹介します：
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-slate-300">
              <li>適切なコンポーネントの分離</li>
              <li>キャッシング戦略の実装</li>
              <li>エラーハンドリングの最適化</li>
              <li>パフォーマンスモニタリング</li>
            </ol>

            <h2 className="text-2xl font-bold font-space-grotesk text-slate-100 mt-8 mb-4">
              まとめ
            </h2>
            <p className="text-slate-300 leading-relaxed">
              React Server
              Componentsは、モダンなWebアプリケーション開発における重要な進化です。適切に実装することで、パフォーマンス、開発効率、ユーザーエクスペリエンスの大幅な向上が期待できます。
            </p>
          </div>

          <div className="border-t border-indigo-500/10 p-8 text-center">
            <h3 className="text-xl font-semibold text-slate-100 mb-4">この記事をシェア</h3>
            <div className="flex justify-center gap-4">
              <button
                type="button"
                className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/30 rounded-full flex items-center justify-center text-slate-300 hover:bg-indigo-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="Twitter"
              >
                <X className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/30 rounded-full flex items-center justify-center text-slate-300 hover:bg-indigo-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <title>Facebook</title>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button
                type="button"
                className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/30 rounded-full flex items-center justify-center text-slate-300 hover:bg-indigo-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>
            </div>
          </div>
        </article>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-slate-100 mb-8 text-center">関連記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.id}`}
                className="bg-slate-800/50 backdrop-blur-sm border border-indigo-500/10 rounded-xl overflow-hidden hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 block"
              >
                <div className="relative h-32 bg-gradient-to-br from-indigo-600 to-cyan-600">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="p-4">
                  <div className="text-sm text-slate-400 mb-2">{relatedPost.date}</div>
                  <h3 className="text-lg font-semibold text-slate-100 line-clamp-2">
                    {relatedPost.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
