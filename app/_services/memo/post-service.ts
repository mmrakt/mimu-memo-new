import { promises as fs } from 'node:fs';
import matter from 'gray-matter';
import { FILE_EXTENSIONS } from '@/config/constants';
import { formatPubDate, sortPostsByDate } from '@/memo/lib/date-utils';
import { safeAsync } from '@/memo/lib/error-handler';
import {
  buildPostFilePath,
  getPostsDirectory,
  getSlugFromFilename,
  isPostFile,
  parseMdFile,
} from '@/memo/lib/file-utils';
import type { MemoBySlugResult, PostListItem } from '@/memo/lib/types';
import {
  type AsyncServiceResult,
  createPaginatedResult,
  type PaginatedResult,
  type PaginationParams,
  type ServiceError,
  validatePaginationParams,
} from '../shared';
import { validateTag } from './tag-service';

export async function getAllPosts(): AsyncServiceResult<PostListItem[]> {
  try {
    const postsDirectory = await getPostsDirectory();
    const filenames = await fs.readdir(postsDirectory);

    const posts: PostListItem[] = [];

    for (const filename of filenames) {
      if (!isPostFile(filename)) continue;

      const slug = getSlugFromFilename(filename);

      if (filename.endsWith(FILE_EXTENSIONS.MARKDOWN) || filename.endsWith(FILE_EXTENSIONS.MDX)) {
        await processPostFile(filename, slug, postsDirectory, posts);
      }
    }

    return { data: sortPostsByDate(posts) };
  } catch (_error) {
    return {
      error: {
        message: 'Failed to fetch posts',
        code: 'POSTS_FETCH_ERROR',
      },
    };
  }
}

export async function getPaginatedPosts(
  params: PaginationParams = {},
): AsyncServiceResult<PaginatedResult<PostListItem>> {
  const validatedParams = validatePaginationParams(params);

  try {
    const allPostsResult = await getAllPosts();

    if ('error' in allPostsResult) {
      return allPostsResult as ServiceError;
    }

    const { page, limit } = validatedParams;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedPosts = allPostsResult.data.slice(startIndex, endIndex);

    const result = createPaginatedResult(
      paginatedPosts,
      validatedParams,
      allPostsResult.data.length,
    );

    return { data: result };
  } catch (_error) {
    return {
      error: {
        message: 'Failed to fetch paginated posts',
        code: 'PAGINATED_POSTS_FETCH_ERROR',
      },
    };
  }
}

async function processPostFile(
  filename: string,
  slug: string,
  postsDirectory: string,
  posts: PostListItem[],
): Promise<void> {
  const filePath = `${postsDirectory}/${filename}`;

  const post = await safeAsync(
    async () => {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const { data } = matter(fileContent);

      return {
        id: slug,
        title: data.title || '',
        tag: validateTag(data.tag || '', filePath),
        pubDate: formatPubDate(data.pubDate),
        excerpt: data.excerpt || data.description || '',
        media: 'owned' as const,
      };
    },
    null,
    `Processing post file: ${filename}`,
  );

  if (post) {
    posts.push(post);
  }
}

export async function getMemoBySlug(slug: string): AsyncServiceResult<MemoBySlugResult> {
  try {
    // Try .md file first
    const mdFilePath = buildPostFilePath(slug, FILE_EXTENSIONS.MARKDOWN);
    try {
      await fs.access(mdFilePath);
      const mdContent = await parseMdFile(mdFilePath);
      if (mdContent) {
        return { data: mdContent };
      }
    } catch {
      // MD file doesn't exist, try MDX
    }

    // Try .mdx file
    const mdxFilePath = buildPostFilePath(slug, FILE_EXTENSIONS.MDX);
    await fs.access(mdxFilePath);

    // Read MDX file as text and parse frontmatter, then use ReactMarkdown for rendering
    const fileContent = await fs.readFile(mdxFilePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const result: MemoBySlugResult = {
      metadata: {
        title: data.title || '',
        tag: validateTag(data.tag || '', mdxFilePath),
        pubDate: formatPubDate(data.pubDate),
        id: slug,
      },
      content: content,
      isMarkdown: true,
    };

    return { data: result };
  } catch (_error) {
    return {
      error: {
        message: `Failed to load memo: ${slug}`,
        code: 'MEMO_NOT_FOUND',
      },
    };
  }
}

export async function getAllMemoSlugs(): AsyncServiceResult<string[]> {
  try {
    const postsDirectory = await getPostsDirectory();
    const filenames = await fs.readdir(postsDirectory);

    const slugs = filenames.filter(isPostFile).map(getSlugFromFilename);
    return { data: slugs };
  } catch (_error) {
    return {
      error: {
        message: 'Failed to fetch memo slugs',
        code: 'SLUGS_FETCH_ERROR',
      },
    };
  }
}
