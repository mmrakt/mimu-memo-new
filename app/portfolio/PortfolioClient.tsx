'use client';

import { useEffect, useState } from 'react';
import AnimatedBackground from '@/_components/AnimatedBackground';
import PageHeader from '@/_components/PageHeader';
import FilterButtons from '@/portfolio/components/FilterButtons';
import PortfolioCard from '@/portfolio/components/PortfolioCard';
import PortfolioModal from '@/portfolio/components/PortfolioModal';
import { filterOptions } from '@/portfolio/data';
import type { PortfolioItem } from '@/portfolio/types';

interface PortfolioClientProps {
  portfolioItems: PortfolioItem[];
  pageDescription: string;
}

export default function PortfolioClient({ portfolioItems, pageDescription }: PortfolioClientProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>(portfolioItems);

  useEffect(() => {
    const filtered =
      activeFilter === 'all'
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === activeFilter);
    setFilteredItems(filtered);
  }, [activeFilter, portfolioItems]);

  const handleCardClick = (item: PortfolioItem) => {
    setSelectedItem(item);
  };

  const handleModalClose = () => {
    setSelectedItem(null);
  };

  const handleFilterChange = (filterKey: string) => {
    setActiveFilter(filterKey);
  };

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground variant="pulse" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <PageHeader title="Portfolio" description={pageDescription} />

        <FilterButtons
          filterOptions={filterOptions}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} onCardClick={handleCardClick} />
          ))}
        </div>
      </div>

      <PortfolioModal item={selectedItem} onClose={handleModalClose} />
    </div>
  );
}
