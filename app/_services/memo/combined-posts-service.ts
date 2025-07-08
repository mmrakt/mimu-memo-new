import { unstable_cache } from 'next/cache';
import { sortPostsByDate } from '@/memo/lib/date-utils';
import type { PostListItem } from '@/memo/lib/types';
import type { AsyncServiceResult } from '../shared';
import { getAllExternalPosts } from './external-posts-service';
import { getAllPosts as getAllInternalPosts } from './post-service';
import { getSlides } from './slide-service';

async function getAllCombinedPostsUncached(): AsyncServiceResult<PostListItem[]> {
  try {
    // Fetch internal, external posts, and slides in parallel
    const [internalPostsResult, externalPostsResult, slidesResult] = await Promise.all([
      getAllInternalPosts(),
      getAllExternalPosts(),
      getSlides(),
    ]);

    // Extract data from results, using empty arrays for failed requests
    const internalPosts = 'data' in internalPostsResult ? internalPostsResult.data : [];
    const externalPosts = 'data' in externalPostsResult ? externalPostsResult.data : [];
    const slides = 'data' in slidesResult ? slidesResult.data : [];

    // Log any errors without failing the entire operation
    if ('error' in internalPostsResult) {
      console.error('Failed to fetch internal posts:', internalPostsResult.error);
    }
    if ('error' in externalPostsResult) {
      console.error('Failed to fetch external posts:', externalPostsResult.error);
    }
    if ('error' in slidesResult) {
      console.error('Failed to fetch slides:', slidesResult.error);
    }

    // Combine all posts
    const allPosts = [...(internalPosts || []), ...(externalPosts || []), ...(slides || [])];

    // Sort by publication date (newest first)
    return { data: sortPostsByDate(allPosts) };
  } catch (_error) {
    return {
      error: {
        message: 'Failed to fetch combined posts',
        code: 'COMBINED_POSTS_FETCH_ERROR',
      },
    };
  }
}

// Cached version for production with 30-minute revalidation
export const getAllCombinedPosts = unstable_cache(getAllCombinedPostsUncached, ['combined-posts'], {
  revalidate: 1800, // 30 minutes
  tags: ['posts', 'external-posts', 'slides'],
});
