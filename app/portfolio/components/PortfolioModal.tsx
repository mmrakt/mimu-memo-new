import { ExternalLink, X } from 'lucide-react';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import styles from '@/portfolio/components/markdown.module.css';
import type { PortfolioItem } from '@/portfolio/types';
import MediaComponent from './MediaComponent';

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export default function PortfolioModal({ item, onClose }: PortfolioModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (item) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  if (!item) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabIndex={-1}
    >
      <div className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-fadeInUp">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:rotate-90 z-10"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="relative w-full">
          <MediaComponent
            src={item.image}
            alt={item.title}
            width={800}
            height={600}
            className="w-full h-auto"
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />
        </div>

        <div className="p-8">
          <h2 id="modal-title" className="text-3xl font-bold text-slate-50 mb-4">
            {item.title}
          </h2>

          {item.startedAt && (
            <p className="text-slate-400 mb-6 text-sm">Started: {item.startedAt}</p>
          )}

          <div className="flex flex-wrap gap-2 mb-6">
            {item.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-sm text-indigo-400"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className={`${styles.markdown} mb-8`}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
              {item.fullDescription}
            </ReactMarkdown>
          </div>

          <div className="flex gap-4">
            {item.isActive !== false && (
              <a
                href={item.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            )}
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-transparent border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <title>GitHub</title>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
