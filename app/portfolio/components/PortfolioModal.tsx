import { ExternalLink, Github, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';
import type { PortfolioItem } from '../types';

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
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
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

        <Image
          src={item.image}
          alt={item.title}
          width={800}
          height={320}
          className="w-full h-80 object-cover"
        />

        <div className="p-8">
          <h2 id="modal-title" className="text-3xl font-bold text-slate-50 mb-6">
            {item.title}
          </h2>

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

          <p className="text-slate-300 leading-relaxed mb-8 text-lg">{item.fullDescription}</p>

          <div className="flex gap-4">
            <a
              href={item.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30"
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </a>
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-transparent border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30"
            >
              <Github className="w-5 h-5" />
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
