import { PORTFOLIO_PAGE_DESCRIPTION } from '@/portfolio/data';
import PortfolioClient from '@/portfolio/PortfolioClient';
import { getAllPortfolioItems } from '@/portfolio/services/portfolio-service';

export default async function PortfolioPage() {
  const portfolioItems = await getAllPortfolioItems();

  return (
    <PortfolioClient portfolioItems={portfolioItems} pageDescription={PORTFOLIO_PAGE_DESCRIPTION} />
  );
}
