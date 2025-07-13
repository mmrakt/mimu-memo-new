import { getCategoryName } from '@/portfolio/data';
import type { PortfolioItem } from '@/portfolio/types';
import MediaComponent from './MediaComponent';

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
  onCardClick: (item: PortfolioItem) => void;
}

export default function PortfolioCard({ item, index, onCardClick }: PortfolioCardProps) {
  const handleClick = () => {
    onCardClick(item);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onCardClick(item);
    }
  };

  return (
    <button
      type="button"
      className="group bg-slate-800 rounded-xl overflow-hidden border border-indigo-600/10 hover:border-indigo-600/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-600/20 cursor-pointer animate-fadeInUp text-left"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label={`View details for ${item.title}`}
    >
      <div className="relative overflow-hidden">
        <MediaComponent
          src={item.image}
          alt={item.title}
          width={400}
          height={250}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-slate-300 text-sm">Click to view details</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="text-cyan-400 text-sm font-semibold tracking-wide mb-2">
          {getCategoryName(item.category)}
        </div>
        <h3 className="text-xl font-bold text-slate-50 mb-3">{item.title}</h3>
        <p className="text-slate-400 mb-4 leading-relaxed">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs text-indigo-400 transition-all duration-300 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
