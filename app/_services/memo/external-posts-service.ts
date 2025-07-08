// Placeholder for external posts service
// This will import from the original external-posts-service.ts in memo/services

import { unstable_cache } from 'next/cache';
import type { PostListItem } from '@/memo/lib/types';
import type { AsyncServiceResult } from '../shared';

async function getAllExternalPostsUncached(): AsyncServiceResult<PostListItem[]> {
  try {
    // Import the original function
    const { getAllExternalPosts: originalFunction } = await import(
      '@/memo/services/external-posts-service'
    );
    const posts = await originalFunction();
    return { data: posts };
  } catch (_error) {
    return {
      error: {
        message: 'Failed to fetch external posts',
        code: 'EXTERNAL_POSTS_FETCH_ERROR',
      },
    };
  }
}

// Cached version with 1-hour revalidation for external API calls
export const getAllExternalPosts = unstable_cache(getAllExternalPostsUncached, ['external-posts'], {
  revalidate: 3600, // 1 hour
  tags: ['external-posts'],
});
