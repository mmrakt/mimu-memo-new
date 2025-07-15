'use client';

import { X, ZoomIn } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface ZoomableImageProps {
  src: string;
  alt: string;
  [key: string]: any;
}

export default function ZoomableImage({ src, alt, ...props }: ZoomableImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  const openZoom = () => {
    setIsZoomed(true);
    document.body.style.overflow = 'hidden';
  };

  const closeZoom = () => {
    setIsZoomed(false);
    document.body.style.overflow = 'unset';
  };

  // Handle escape key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeZoom();
    }
  };

  return (
    <>
      {/* Thumbnail image */}
      <div className="relative group cursor-pointer" onClick={openZoom}>
        <Image
          src={src}
          alt={alt}
          className="w-full h-auto rounded-lg transition-all duration-300 group-hover:brightness-75"
          width={800}
          height={400}
          {...props}
        />
        
        {/* Zoom overlay indicator */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center">
          <div className="bg-slate-800/80 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
            <ZoomIn className="w-6 h-6 text-white" />
          </div>
        </div>
        
        {/* Caption if alt text exists */}
        {alt && (
          <div className="mt-2 text-sm text-slate-400 text-center italic">
            {alt}
          </div>
        )}
      </div>

      {/* Zoom modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeZoom}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          {/* Close button */}
          <button
            onClick={closeZoom}
            className="absolute top-4 right-4 p-3 bg-slate-800/80 hover:bg-slate-700/80 rounded-full transition-all duration-200 z-10"
            aria-label="Close zoom view"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          {/* Zoomed image */}
          <div className="relative max-w-[95vw] max-h-[95vh] animate-fadeInUp">
            <Image
              src={src}
              alt={alt}
              className="w-auto h-auto max-w-full max-h-full object-contain"
              width={1200}
              height={800}
              quality={100}
              priority
            />
            
            {/* Caption in zoom view */}
            {alt && (
              <div className="mt-4 text-center text-slate-300 max-w-2xl mx-auto">
                {alt}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}