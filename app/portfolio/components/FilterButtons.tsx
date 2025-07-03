import type { FilterOption } from '../types';

interface FilterButtonsProps {
  filterOptions: FilterOption[];
  activeFilter: string;
  onFilterChange: (filterKey: string) => void;
}

export default function FilterButtons({
  filterOptions,
  activeFilter,
  onFilterChange,
}: FilterButtonsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {filterOptions.map((filter) => (
        <button
          key={filter.key}
          type="button"
          onClick={() => onFilterChange(filter.key)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeFilter === filter.key
              ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30'
              : 'bg-transparent border border-indigo-500/30 text-slate-400 hover:bg-indigo-500/10 hover:border-indigo-500 hover:text-indigo-400 hover:-translate-y-1'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
