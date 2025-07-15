'use client';

import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

interface CodeBlockProps {
  children: string;
  className?: string;
}

export default function CodeBlock({ children, className = '' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const match = /language-(\w+)/.exec(className);
  const language = match ? match[1] : '';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="relative group">
      {/* Language indicator */}
      {language && (
        <div className="absolute top-3 left-4 px-2 py-1 bg-slate-700/80 backdrop-blur-sm rounded text-xs font-medium text-slate-300 uppercase tracking-wide">
          {language}
        </div>
      )}
      
      {/* Copy button */}
      <button
        onClick={copyToClipboard}
        className="absolute top-3 right-3 p-2 bg-slate-700/80 backdrop-blur-sm hover:bg-slate-600/80 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Copy code to clipboard"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-400" />
        ) : (
          <Copy className="w-4 h-4 text-slate-300" />
        )}
      </button>

      {/* Code content */}
      <pre className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 overflow-x-auto relative">
        <code className={`hljs ${className}`}>
          {children}
        </code>
      </pre>
    </div>
  );
}