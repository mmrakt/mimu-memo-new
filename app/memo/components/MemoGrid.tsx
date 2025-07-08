'use client';

import MemoCard from '@/memo/components/MemoCard';
import { getGridClass } from '@/memo/lib/constants';
import type { PostListItem } from '@/memo/lib/types';

interface MemoGridProps {
  posts: PostListItem[];
}

export default function MemoGrid({ posts }: MemoGridProps) {
  return (
    <div className={getGridClass(posts.length)}>
      {posts.map((post, index) => (
        <MemoCard key={post.id} post={post} index={index} />
      ))}
    </div>
  );
}
