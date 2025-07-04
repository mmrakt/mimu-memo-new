import type { Metadata } from 'next';
import { MEMO_PAGE_DESCRIPTION } from '@/app/memo/data';

export const metadata: Metadata = {
  title: 'Memo | mimu-memo',
  description: MEMO_PAGE_DESCRIPTION,
  openGraph: {
    title: 'Memo | mimu-memo',
    description: MEMO_PAGE_DESCRIPTION,
    type: 'website',
  },
};

export default function MemoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
