import { ArrowLeft, Calendar, X } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import AnimatedBackground from '@/app/_components/AnimatedBackground';
import { getTagIconPath } from '@/app/memo/components/utils';
import { getAllMemoSlugs, getMemoBySlug } from '@/app/memo/utils';
import styles from './markdown.module.css';

interface MemoDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getAllMemoSlugs();
  return slugs.map((slug) => ({ id: slug }));
}

export async function generateMetadata({ params }: MemoDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const memo = await getMemoBySlug(id);

  if (!memo) {
    return {
      title: 'Not Found | mimu-memo',
    };
  }

  return {
    title: `${memo.metadata.title} | mimu-memo`,
    description: `Read about ${memo.metadata.title} on mimu-memo blog`,
    openGraph: {
      title: memo.metadata.title,
      description: `Read about ${memo.metadata.title} on mimu-memo blog`,
      type: 'article',
      publishedTime: memo.metadata.pubDate,
      authors: ['mimu'],
    },
  };
}

export default async function MemoDetailPage({ params }: MemoDetailPageProps) {
  const { id } = await params;
  const memo = await getMemoBySlug(id);

  if (!memo) {
    notFound();
  }

  const { metadata, Component, content, isMarkdown } = memo;

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/memo"
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          メモ一覧に戻る
        </Link>

        <article className="bg-slate-800/50 backdrop-blur-sm border border-indigo-500/10 rounded-2xl overflow-hidden">
          <header className="text-center p-8 border-b border-indigo-500/10">
            <div className="mb-6">
              <Image
                src={getTagIconPath(metadata.tag)}
                alt={`${metadata.tag} icon`}
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
            </div>
            <h1 className="text-4xl font-bold font-space-grotesk mb-6 bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              {metadata.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-slate-400 flex-wrap">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{metadata.pubDate}</span>
              </div>
              <div className="bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full text-sm">
                {metadata.tag}
              </div>
            </div>
          </header>

          <div className="p-8 space-y-6">
            {isMarkdown && content ? (
              <div className={styles.markdown}>
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
                  {content}
                </ReactMarkdown>
              </div>
            ) : Component ? (
              <Component />
            ) : null}
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
      </div>
    </div>
  );
}
