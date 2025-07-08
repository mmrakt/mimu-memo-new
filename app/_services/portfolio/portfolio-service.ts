import { promises as fs } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { FILE_EXTENSIONS } from '@/config/constants';
import type { CategoryKey, PortfolioItem } from '@/portfolio/types';
import { type AsyncServiceResult, safeAsyncCall } from '../shared';

const PORTFOLIO_CONTENT_DIR = 'app/_contents/portfolio';

async function getPortfolioDirectory(): Promise<string> {
  return path.join(process.cwd(), PORTFOLIO_CONTENT_DIR);
}

function isPortfolioFile(filename: string): boolean {
  return filename.endsWith(FILE_EXTENSIONS.MARKDOWN) || filename.endsWith(FILE_EXTENSIONS.MDX);
}

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.(md|mdx)$/, '');
}

function processImagePath(imagePath: string): string {
  if (!imagePath) {
    return 'https://placehold.jp/400x250.png';
  }

  if (imagePath.startsWith('http') || imagePath.startsWith('/')) {
    return imagePath;
  }

  return `/portfolio/${imagePath}`;
}

export async function getAllPortfolioItems(): AsyncServiceResult<PortfolioItem[]> {
  return safeAsyncCall(async () => {
    const portfolioDirectory = await getPortfolioDirectory();
    const filenames = await fs.readdir(portfolioDirectory);

    const portfolioItems: PortfolioItem[] = [];

    for (const filename of filenames) {
      if (!isPortfolioFile(filename)) continue;

      const _slug = getSlugFromFilename(filename);
      const filePath = path.join(portfolioDirectory, filename);

      try {
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const { data, content } = matter(fileContent);

        // All portfolio items are solo development
        const category: CategoryKey = 'solo-development';

        const portfolioItem: PortfolioItem = {
          id: portfolioItems.length + 1,
          title: data.title || '',
          category,
          description: data.description || '',
          image: processImagePath(data.image),
          tech: data.tags || [],
          demo: data.url || '',
          github: data.github || '',
          fullDescription: content.trim() || data.description || '',
          developmentPeriod: data.developmentPeriod || undefined,
        };

        portfolioItems.push(portfolioItem);
      } catch (error) {
        console.error(`Error processing portfolio file ${filename}:`, error);
      }
    }

    return portfolioItems;
  });
}

export async function getPortfolioItemBySlug(slug: string): AsyncServiceResult<PortfolioItem> {
  return safeAsyncCall(async () => {
    const portfolioDirectory = await getPortfolioDirectory();

    // Try .md file first, then .mdx
    const extensions = ['.md', '.mdx'];
    let filePath: string | null = null;

    for (const ext of extensions) {
      const testPath = path.join(portfolioDirectory, `${slug}${ext}`);
      try {
        await fs.access(testPath);
        filePath = testPath;
        break;
      } catch {
        // File doesn't exist, try next extension
      }
    }

    if (!filePath) {
      throw new Error(`Portfolio item not found: ${slug}`);
    }

    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const category: CategoryKey = 'solo-development';

    return {
      id: 1, // This could be generated based on the slug or order
      title: data.title || '',
      category,
      description: data.description || '',
      image: processImagePath(data.image),
      tech: data.tags || [],
      demo: data.url || '',
      github: data.github || '',
      fullDescription: content.trim() || data.description || '',
      developmentPeriod: data.developmentPeriod || undefined,
    };
  });
}

export async function getPortfolioItemsByCategory(
  category: CategoryKey,
): AsyncServiceResult<PortfolioItem[]> {
  return safeAsyncCall(async () => {
    const allItemsResult = await getAllPortfolioItems();

    if ('error' in allItemsResult) {
      throw new Error(allItemsResult.error?.message || 'Unknown error');
    }

    return allItemsResult.data.filter((item) => item.category === category);
  });
}

export async function getUniqueTechnologies(): AsyncServiceResult<string[]> {
  return safeAsyncCall(async () => {
    const allItemsResult = await getAllPortfolioItems();

    if ('error' in allItemsResult) {
      throw new Error(allItemsResult.error?.message || 'Unknown error');
    }

    const technologies = new Set<string>();

    allItemsResult.data.forEach((item) => {
      item.tech.forEach((tech) => technologies.add(tech));
    });

    return Array.from(technologies).sort();
  });
}
