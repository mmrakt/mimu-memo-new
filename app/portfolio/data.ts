import type { FilterOption } from '@/portfolio/types';

export const PORTFOLIO_PAGE_DESCRIPTION = '主に個人開発ツールの紹介';

// This file is deprecated. Portfolio data is now loaded from markdown files in app/_contents/portfolio/
// Use getAllPortfolioItems() from ./services/portfolio-service.ts instead

export const filterOptions: FilterOption[] = [
  { key: 'all', label: 'All' },
  { key: 'solo-development', label: 'Solo Development' },
];

export const getCategoryName = (category: string): string => {
  const names: Record<string, string> = {
    'solo-development': 'Solo Development',
  };
  return names[category] || category;
};
