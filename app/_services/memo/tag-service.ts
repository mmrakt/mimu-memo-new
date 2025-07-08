import { PAGINATION, TAG_ICONS } from '@/config/constants';
import { handleCriticalError, ValidationError } from '@/memo/lib/error-handler';
import type { PostListItem } from '@/memo/lib/types';
import {
  type AsyncServiceResult,
  createPaginatedResult,
  type PaginatedResult,
  type ServiceError,
  type Tag,
  validatePaginationParams,
} from '../shared';
import { getAllCombinedPosts } from './combined-posts-service';

export interface TagInfo extends Tag {
  icon?: string;
}

export const TAG_LIST = [
  'other',
  'astro',
  'react',
  'typescript',
  'javascript',
  'nextjs',
  'vite',
  'css',
  'tailwindcss',
  'gatsby',
  'npm',
] as const;

export type ValidTag = (typeof TAG_LIST)[number];

export function isValidTag(tag: string): tag is ValidTag {
  return TAG_LIST.includes(tag as ValidTag);
}

export function validateTag(tag: string, filePath?: string): string {
  if (!tag || !tag.trim()) {
    const error = new ValidationError(
      `No tag specified. Valid tags: ${TAG_LIST.join(', ')}`,
      filePath,
    );
    handleCriticalError(error, 'Tag validation');
  }

  if (!isValidTag(tag)) {
    const error = new ValidationError(
      `Invalid tag '${tag}'. Valid tags: ${TAG_LIST.join(', ')}`,
      filePath,
    );
    handleCriticalError(error, 'Tag validation');
  }

  return tag;
}

export function validateTagSafe(tag: string, fallback: ValidTag = 'other'): ValidTag {
  if (!tag || !tag.trim()) {
    return fallback;
  }

  if (!isValidTag(tag)) {
    return fallback;
  }

  return tag;
}

export async function getAllTags(): AsyncServiceResult<TagInfo[]> {
  try {
    const postsResult = await getAllCombinedPosts();

    if ('error' in postsResult) {
      return postsResult as ServiceError;
    }

    const tagCounts = new Map<string, number>();

    postsResult.data.forEach((post) => {
      if (post.tag) {
        const count = tagCounts.get(post.tag) || 0;
        tagCounts.set(post.tag, count + 1);
      }
    });

    const tags: TagInfo[] = Array.from(tagCounts.entries()).map(([name, count]) => ({
      name,
      count,
      icon: TAG_ICONS[name.toLowerCase() as keyof typeof TAG_ICONS],
    }));

    return { data: tags.sort((a, b) => b.count - a.count) };
  } catch (_error) {
    return {
      error: {
        message: 'Failed to fetch tags',
        code: 'TAGS_FETCH_ERROR',
      },
    };
  }
}

export async function getPostsByTag(tag: string): AsyncServiceResult<PostListItem[]> {
  try {
    const postsResult = await getAllCombinedPosts();

    if ('error' in postsResult) {
      return postsResult as ServiceError;
    }

    const filteredPosts = postsResult.data.filter((post) => post.tag === tag);
    return { data: filteredPosts };
  } catch (_error) {
    return {
      error: {
        message: `Failed to fetch posts for tag: ${tag}`,
        code: 'TAG_POSTS_FETCH_ERROR',
      },
    };
  }
}

export async function getPostsByTagPaginated(
  tag: string,
  page: number = 1,
  limit: number = PAGINATION.POSTS_PER_PAGE,
): AsyncServiceResult<PaginatedResult<PostListItem>> {
  try {
    const postsResult = await getPostsByTag(tag);

    if ('error' in postsResult) {
      return postsResult as ServiceError;
    }

    const validatedParams = validatePaginationParams({ page, limit });
    const startIndex = (validatedParams.page - 1) * validatedParams.limit;
    const endIndex = startIndex + validatedParams.limit;

    const paginatedPosts = postsResult.data.slice(startIndex, endIndex);

    const result = createPaginatedResult(paginatedPosts, validatedParams, postsResult.data.length);

    return { data: result };
  } catch (_error) {
    return {
      error: {
        message: `Failed to fetch paginated posts for tag: ${tag}`,
        code: 'TAG_POSTS_PAGINATED_FETCH_ERROR',
      },
    };
  }
}
