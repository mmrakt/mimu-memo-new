import type { Metadata } from 'next';
import { generatePageMetadata } from '@/_utils/metadata';
import { MEMO_PAGE_DESCRIPTION } from '@/memo/data';

export const metadata: Metadata = generatePageMetadata('Memo', MEMO_PAGE_DESCRIPTION, '/memo');

export default function MemoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
