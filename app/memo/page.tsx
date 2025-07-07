import { Tag } from 'lucide-react';
import Link from 'next/link';
import AnimatedBackground from '@/_components/AnimatedBackground';
import PageHeader from '@/_components/PageHeader';
import { PAGINATION } from '@/config/constants';
import MemoListWithPagination from './components/MemoListWithPagination';
import { MEMO_PAGE_DESCRIPTION } from './data';
import { getAllCombinedPosts } from './services/combined-posts-service';

export default async function MemoPage() {
  const posts = await getAllCombinedPosts();
  const totalPages = Math.ceil(posts.length / PAGINATION.POSTS_PER_PAGE);

  const startIndex = 0;
  const endIndex = PAGINATION.POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, endIndex);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <PageHeader title="Memo" description={MEMO_PAGE_DESCRIPTION} />

        <div className="mb-6">
          <Link
            href="/memo/tags"
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-indigo-400 hover:bg-indigo-500/20 hover:border-indigo-500/30 transition-colors"
          >
            <Tag size={18} />
            <span>View All Tag</span>
          </Link>
        </div>

        <MemoListWithPagination posts={currentPosts} currentPage={1} totalPages={totalPages} />
      </div>
    </div>
  );
}
