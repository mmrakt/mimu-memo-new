'use client';

import { useState } from 'react';
import { PAGINATION } from '@/config/constants';
import MemoGrid from '@/memo/components/MemoGrid';
import Pagination from '@/memo/components/Pagination';
import type { PostListItem } from '@/memo/lib/types';

interface MemoListProps {
  posts: PostListItem[];
}

export default function MemoList({ posts }: MemoListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = PAGINATION.POSTS_PER_PAGE;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <>
      <MemoGrid posts={currentPosts} />
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </>
  );
}
