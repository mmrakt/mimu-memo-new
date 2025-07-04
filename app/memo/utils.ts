import { promises as fs } from 'fs'
import path from 'path'

export interface MemoMetadata {
  title: string
  tag: string
  pubDate: string
  id: string
}

export async function getMemoBySlug(slug: string): Promise<{ metadata: MemoMetadata; Component: React.ComponentType } | null> {
  try {
    const filePath = path.join(process.cwd(), 'app/_contents/posts', `${slug}.mdx`)
    
    // Check if file exists
    await fs.access(filePath)
    
    // Import the MDX file
    const mdxModule = await import(`@/app/_contents/posts/${slug}.mdx`)
    
    if (!mdxModule.default || !mdxModule.metadata) {
      return null
    }
    
    return {
      metadata: mdxModule.metadata,
      Component: mdxModule.default,
    }
  } catch (error) {
    console.error(`Error loading memo ${slug}:`, error)
    return null
  }
}

export async function getAllMemoSlugs(): Promise<string[]> {
  try {
    const postsDirectory = path.join(process.cwd(), 'app/_contents/posts')
    const filenames = await fs.readdir(postsDirectory)
    
    return filenames
      .filter(name => name.endsWith('.mdx'))
      .map(name => name.replace(/\.mdx$/, ''))
  } catch (error) {
    console.error('Error reading posts directory:', error)
    return []
  }
}

export function getTagIconPath(tag: string): string {
  // Map tag names to SVG file names
  const tagIconMap: Record<string, string> = {
    'vite': 'vite.svg',
    'react': 'react.svg',
    'nextjs': 'nextjs.svg',
    'javascript': 'javascript.svg',
    'typescript': 'typescript.svg',
    'css': 'css.svg',
    'html': 'html.svg',
    'sass': 'sass.svg',
    'tailwindcss': 'tailwindcss.svg',
    'astro': 'astro.svg',
    'gatsby': 'gatsby.svg',
  }
  
  const iconName = tagIconMap[tag.toLowerCase()]
  return iconName ? `/images/${iconName}` : '/images/favicon.png'
}