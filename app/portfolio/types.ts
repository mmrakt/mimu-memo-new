export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  demo: string;
  github: string;
  fullDescription: string;
}

export interface FilterOption {
  key: string;
  label: string;
}

export type CategoryKey = 'web' | 'mobile' | 'ai' | 'design';
