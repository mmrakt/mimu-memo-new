'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pageNumbers = [];
  const maxVisiblePages = 5;

  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg border border-indigo-500/30 text-slate-600 dark:text-slate-300 hover:bg-indigo-500/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div className="flex items-center gap-1">
        {startPage > 1 && (
          <>
            <button
              type="button"
              onClick={() => onPageChange(1)}
              className="w-10 h-10 rounded-lg border border-indigo-500/30 text-slate-600 dark:text-slate-300 hover:bg-indigo-500 hover:text-white transition-all duration-300"
            >
              1
            </button>
            {startPage > 2 && <span className="text-slate-500 dark:text-slate-400 px-2">...</span>}
          </>
        )}

        {pageNumbers.map((number) => (
          <button
            type="button"
            key={number}
            onClick={() => onPageChange(number)}
            className={`w-10 h-10 rounded-lg border transition-all duration-300 ${
              currentPage === number
                ? 'bg-indigo-500 border-indigo-500 text-white'
                : 'border-indigo-500/30 text-slate-600 dark:text-slate-300 hover:bg-indigo-500 hover:text-white'
            }`}
          >
            {number}
          </button>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && (
              <span className="text-slate-500 dark:text-slate-400 px-2">...</span>
            )}
            <button
              type="button"
              onClick={() => onPageChange(totalPages)}
              className="w-10 h-10 rounded-lg border border-indigo-500/30 text-slate-600 dark:text-slate-300 hover:bg-indigo-500 hover:text-white transition-all duration-300"
            >
              {totalPages}
            </button>
          </>
        )}
      </div>

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg border border-indigo-500/30 text-slate-600 dark:text-slate-300 hover:bg-indigo-500/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
