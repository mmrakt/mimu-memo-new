import { Suspense } from 'react';
import { PORTFOLIO_PAGE_DESCRIPTION } from '@/portfolio/data';
import PortfolioClient from '@/portfolio/PortfolioClient';
import { getAllPortfolioItems } from '@/portfolio/services/portfolio-service';

export default async function PortfolioPage() {
  const portfolioItems = await getAllPortfolioItems();

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-900 text-slate-50 flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <PortfolioClient
        portfolioItems={portfolioItems}
        pageDescription={PORTFOLIO_PAGE_DESCRIPTION}
      />
    </Suspense>
  );
}
