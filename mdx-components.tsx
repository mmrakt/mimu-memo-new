import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Skip h1 since it's handled by the page layout
    h1: ({ children }) => (
      <div className="hidden">
        {children}
      </div>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold font-space-grotesk text-slate-100 mt-8 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-slate-100 mt-6 mb-3">
        {children}
      </h3>
    ),

    // Custom paragraph
    p: ({ children }) => (
      <p className="text-slate-300 leading-relaxed mb-4">
        {children}
      </p>
    ),

    // Custom lists
    ul: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2 text-slate-300 mb-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-2 text-slate-300 mb-4">
        {children}
      </ol>
    ),

    // Custom code blocks
    pre: ({ children }) => (
      <pre className="bg-slate-900/50 border border-indigo-500/20 rounded-lg p-6 overflow-x-auto mb-6">
        {children}
      </pre>
    ),
    code: ({ children }) => (
      <code className="text-cyan-400 font-mono text-sm bg-slate-900/30 px-2 py-1 rounded">
        {children}
      </code>
    ),

    // Custom blockquote
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-indigo-500 pl-6 italic text-slate-300 bg-slate-900/30 p-4 rounded-r-lg mb-6">
        {children}
      </blockquote>
    ),

    // Custom links
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-indigo-400 hover:text-indigo-300 transition-colors underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),

    // Custom image
    img: ({ src, alt }) => (
      <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
        <Image
          src={src || ''}
          alt={alt || ''}
          fill
          className="object-cover"
        />
      </div>
    ),

    // Custom strong/bold
    strong: ({ children }) => (
      <strong className="text-slate-100 font-semibold">
        {children}
      </strong>
    ),

    // Custom emphasis/italic
    em: ({ children }) => (
      <em className="text-slate-200 italic">
        {children}
      </em>
    ),

    ...components,
  }
}