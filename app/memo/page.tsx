import PageHeader from '@/app/_components/PageHeader';
import AnimatedBackground from './components/AnimatedBackground';
import MemoList from './components/MemoList';
import { MEMO_PAGE_DESCRIPTION } from './data';
import { getAllPosts } from './utils';

export default async function MemoPage() {
  const posts = await getAllPosts();

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <PageHeader title="Memo" description={MEMO_PAGE_DESCRIPTION} />
        <MemoList posts={posts} />
      </div>
    </div>
  );
}
