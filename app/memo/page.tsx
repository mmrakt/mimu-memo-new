import AnimatedBackground from '@/app/_components/AnimatedBackground';
import PageHeader from '@/app/_components/PageHeader';
import { PAGINATION } from '@/app/config/constants';
import MemoListWithPagination from './components/MemoListWithPagination';
import { MEMO_PAGE_DESCRIPTION } from './data';
import { getAllPosts } from './utils';

export default async function MemoPage() {
  const posts = await getAllPosts();
  const totalPages = Math.ceil(posts.length / PAGINATION.POSTS_PER_PAGE);

  const startIndex = 0;
  const endIndex = PAGINATION.POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, endIndex);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <PageHeader title="Memo" description={MEMO_PAGE_DESCRIPTION} />
        <MemoListWithPagination posts={currentPosts} currentPage={1} totalPages={totalPages} />
      </div>
    </div>
  );
}
