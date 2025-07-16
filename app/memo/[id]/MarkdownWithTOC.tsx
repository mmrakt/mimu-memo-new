'use client';

import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import type { TOCItem } from './toc-utils';

interface MarkdownWithTOCProps {
  content: string;
  headings: TOCItem[];
  className?: string;
}

export default function MarkdownWithTOC({ content, headings, className }: MarkdownWithTOCProps) {
  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ children }) => {
            const text = children?.toString() || '';
            const heading = headings.find(h => h.text === text);
            return (
              <h1 id={heading?.id} className="scroll-mt-24">
                {children}
              </h1>
            );
          },
          h2: ({ children }) => {
            const text = children?.toString() || '';
            const heading = headings.find(h => h.text === text);
            return (
              <h2 id={heading?.id} className="scroll-mt-24">
                {children}
              </h2>
            );
          },
          h3: ({ children }) => {
            const text = children?.toString() || '';
            const heading = headings.find(h => h.text === text);
            return (
              <h3 id={heading?.id} className="scroll-mt-24">
                {children}
              </h3>
            );
          },
          h4: ({ children }) => {
            const text = children?.toString() || '';
            const heading = headings.find(h => h.text === text);
            return (
              <h4 id={heading?.id} className="scroll-mt-24">
                {children}
              </h4>
            );
          },
          h5: ({ children }) => {
            const text = children?.toString() || '';
            const heading = headings.find(h => h.text === text);
            return (
              <h5 id={heading?.id} className="scroll-mt-24">
                {children}
              </h5>
            );
          },
          h6: ({ children }) => {
            const text = children?.toString() || '';
            const heading = headings.find(h => h.text === text);
            return (
              <h6 id={heading?.id} className="scroll-mt-24">
                {children}
              </h6>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}