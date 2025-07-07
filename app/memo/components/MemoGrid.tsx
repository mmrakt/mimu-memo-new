'use client';

import { getGridClass } from '../lib/constants';
import type { PostListItem } from '../lib/types';
import MemoCard from './MemoCard';

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
