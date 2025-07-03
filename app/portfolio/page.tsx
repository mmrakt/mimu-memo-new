'use client';

import { useEffect, useState } from 'react';
import Footer from '@/app/_components/Footer';
import Navigation from '@/app/_components/Navigation';
import AnimatedBackground from './components/AnimatedBackground';
import FilterButtons from './components/FilterButtons';
import PortfolioCard from './components/PortfolioCard';
import PortfolioModal from './components/PortfolioModal';
import { filterOptions, portfolioData } from './data';
import type { PortfolioItem } from './types';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>(portfolioData);

  useEffect(() => {
    const filtered =
      activeFilter === 'all'
        ? portfolioData
        : portfolioData.filter((item) => item.category === activeFilter);
    setFilteredItems(filtered);
  }, [activeFilter]);

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
    <div className="min-h-screen bg-slate-900 text-slate-50">
      <AnimatedBackground />
      <Navigation />

      <main className="relative z-10 pt-20">
        <section className="px-8 py-20 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <FilterButtons
            filterOptions={filterOptions}
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <PortfolioCard
                key={item.id}
                item={item}
                index={index}
                onCardClick={handleCardClick}
              />
            ))}
          </div>
        </section>
      </main>

      <PortfolioModal item={selectedItem} onClose={handleModalClose} />
      <Footer />
    </div>
  );
}
