'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { TOCItem } from './toc-utils';

interface TableOfContentsProps {
  headings: TOCItem[];
  variant?: 'mobile' | 'desktop';
}

export default function TableOfContents({ headings, variant = 'mobile' }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0,
      }
    );

    // Observe all headings
    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, id: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      scrollToHeading(id);
    }
  };

  if (headings.length === 0) {
    return null;
  }

  if (variant === 'mobile') {
    return (
      <div className="mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full p-4 bg-slate-800/50 backdrop-blur-sm border border-indigo-500/10 rounded-lg hover:bg-slate-800/70 transition-colors"
          aria-expanded={isOpen}
          aria-controls="mobile-toc"
        >
          <span className="font-semibold text-indigo-400">Table of Contents</span>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-indigo-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-indigo-400" />
          )}
        </button>
        
        {isOpen && (
          <div id="mobile-toc" className="mt-4 p-4 bg-slate-800/30 backdrop-blur-sm border border-indigo-500/10 rounded-lg">
            <nav role="navigation" aria-label="Table of contents">
              <ul className="space-y-2">
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <button
                      onClick={() => {
                        scrollToHeading(heading.id);
                        setIsOpen(false);
                      }}
                      onKeyDown={(e) => handleKeyDown(e, heading.id)}
                      className={`text-left w-full py-2 px-3 rounded transition-colors ${
                        activeId === heading.id
                          ? 'bg-indigo-500/20 text-indigo-300 border-l-2 border-indigo-400'
                          : 'text-slate-400 hover:text-slate-300 hover:bg-slate-700/50'
                      }`}
                      style={{ paddingLeft: `${0.75 + (heading.level - 2) * 0.5}rem` }}
                    >
                      {heading.text}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="fixed top-24 right-8 w-64 max-h-96 overflow-y-auto">
      <div className="p-4 bg-slate-800/50 backdrop-blur-sm border border-indigo-500/10 rounded-lg">
        <h3 className="font-semibold text-indigo-400 mb-4">Table of Contents</h3>
        <nav role="navigation" aria-label="Table of contents">
          <ul className="space-y-2">
            {headings.map((heading) => (
              <li key={heading.id}>
                <button
                  onClick={() => scrollToHeading(heading.id)}
                  onKeyDown={(e) => handleKeyDown(e, heading.id)}
                  className={`text-left w-full py-2 px-3 rounded transition-colors text-sm ${
                    activeId === heading.id
                      ? 'bg-indigo-500/20 text-indigo-300 border-l-2 border-indigo-400'
                      : 'text-slate-400 hover:text-slate-300 hover:bg-slate-700/50'
                  }`}
                  style={{ paddingLeft: `${0.75 + (heading.level - 2) * 0.5}rem` }}
                >
                  {heading.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}