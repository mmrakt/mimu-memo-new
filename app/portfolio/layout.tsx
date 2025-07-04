import type { Metadata } from 'next';
import { PORTFOLIO_PAGE_DESCRIPTION } from '@/app/portfolio/data';

export const metadata: Metadata = {
  title: 'Portfolio | mimu-memo',
  description: PORTFOLIO_PAGE_DESCRIPTION,
  openGraph: {
    title: 'Portfolio | mimu-memo',
    description: PORTFOLIO_PAGE_DESCRIPTION,
    type: 'website',
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
