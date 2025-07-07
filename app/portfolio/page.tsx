import { PORTFOLIO_PAGE_DESCRIPTION } from './data';
import PortfolioClient from './PortfolioClient';
import { getAllPortfolioItems } from './services/portfolio-service';

export default async function PortfolioPage() {
  const portfolioItems = await getAllPortfolioItems();

  return (
    <PortfolioClient portfolioItems={portfolioItems} pageDescription={PORTFOLIO_PAGE_DESCRIPTION} />
  );
}
