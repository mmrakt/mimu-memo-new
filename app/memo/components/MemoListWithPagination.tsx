'use client';

import type { PostListItem } from '../lib/types';
import MemoGrid from './MemoGrid';
import UrlPagination from './UrlPagination';

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
