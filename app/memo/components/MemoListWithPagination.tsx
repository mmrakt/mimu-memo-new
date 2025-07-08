'use client';

import MemoGrid from '@/memo/components/MemoGrid';
import UrlPagination from '@/memo/components/UrlPagination';
import type { PostListItem } from '@/memo/lib/types';

interface MemoListWithPaginationProps {
  posts: PostListItem[];
  currentPage: number;
  totalPages: number;
  basePath?: string;
}

export default function MemoListWithPagination({
  posts,
  currentPage,
  totalPages,
  basePath,
}: MemoListWithPaginationProps) {
  return (
    <>
      <MemoGrid posts={posts} />
      <UrlPagination currentPage={currentPage} totalPages={totalPages} basePath={basePath} />
    </>
  );
}
