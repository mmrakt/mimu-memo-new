'use client';

import { Calendar, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PAGINATION } from '@/config/constants';
import { getTagIconPath } from '@/memo/components/utils';
import { getMediaDisplayName, getMediaStyles, isExternalMedia } from '@/memo/lib/media-utils';
import type { PostListItem } from '@/memo/lib/types';

interface MemoCardProps {
  post: PostListItem;
  index: number;
}

export default function MemoCard({ post, index }: MemoCardProps) {
  const isExternal = (post.media && isExternalMedia(post.media)) || !!post.link;
  const isSlide = post.link && post.media === 'owned';
  const href = isExternal && post.link ? post.link : `/memo/${post.id}`;
  const LinkComponent = isExternal ? 'a' : Link;
  const linkProps = isExternal
    ? {
        href,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {
        href,
      };

  return (
    <LinkComponent
      {...linkProps}
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
          {post.tag && (
            <Link
              href={`/memo/tag/${post.tag}`}
              className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-xs text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400/30 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              {post.tag}
            </Link>
          )}
          {((post.media && isExternalMedia(post.media)) || isSlide) && (
            <span
              className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs ${
                isSlide
                  ? 'bg-amber-400/10 border border-amber-400/20 text-amber-400'
                  : post.media
                    ? getMediaStyles(post.media)
                    : ''
              }`}
            >
              {isSlide ? 'Slide' : post.media ? getMediaDisplayName(post.media) : ''}
              {isExternal && <ExternalLink className="w-3 h-3" />}
            </span>
          )}
        </div>
        <h2 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-indigo-400 transition-colors">
          {post.title}
        </h2>
        {post.excerpt && <p className="text-slate-400 line-clamp-3 mb-4">{post.excerpt}</p>}
      </div>
    </LinkComponent>
  );
}
