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
  developmentPeriod?: string;
  isActive?: boolean;
}

export interface FilterOption {
  key: string;
  label: string;
}

export type CategoryKey = 'solo-development';
