'use client';

import { Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PAGINATION } from '@/app/config/constants';
import type { PostListItem } from '../utils';
import UrlPagination from './UrlPagination';
import { getTagIconPath } from './utils';

interface MemoListWithPaginationProps {
  posts: PostListItem[];
  currentPage: number;
  totalPages: number;
}

export default function MemoListWithPagination({
  posts,
  currentPage,
  totalPages,
}: MemoListWithPaginationProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
        {posts.map((post, index) => (
          <Link
            key={post.id}
            href={`/memo/${post.id}`}
            className="bg-slate-800/50 backdrop-blur-sm border border-indigo-500/10 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 cursor-pointer opacity-0 animate-fade-in-up block"
            style={{
              animationDelay: `${index * PAGINATION.ANIMATION_DELAY_MS}ms`,
              animationFillMode: 'forwards',
            }}
          >
            <div className="relative h-48 bg-gradient-to-br from-indigo-600 to-cyan-600 overflow-hidden group">
              <Image
                src={getTagIconPath(post.tag)}
                alt={post.title}
                fill
                className="object-contain p-16 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.pubDate}
                </span>
                <span className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-xs text-cyan-400">
                  {post.tag}
                </span>
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-indigo-400 transition-colors">
                {post.title}
              </h2>
              {post.excerpt && <p className="text-slate-400 line-clamp-3 mb-4">{post.excerpt}</p>}
            </div>
          </Link>
        ))}
      </div>

      <UrlPagination currentPage={currentPage} totalPages={totalPages} />
    </>
  );
}
