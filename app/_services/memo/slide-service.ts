// Placeholder for slide service
// This will import from the original slide-service.ts in memo/services

import { unstable_cache } from 'next/cache';
import type { PostListItem } from '@/memo/lib/types';
import type { AsyncServiceResult } from '../shared';

async function getSlidesUncached(): AsyncServiceResult<PostListItem[]> {
  try {
    // Import the original function
    const { getSlides: originalFunction } = await import('@/memo/services/slide-service');
    const slides = await originalFunction();
    return { data: slides };
  } catch (_error) {
    return {
      error: {
        message: 'Failed to fetch slides',
        code: 'SLIDES_FETCH_ERROR',
      },
    };
  }
}

// Cached version with 1-hour revalidation for external slide API
export const getSlides = unstable_cache(getSlidesUncached, ['slides'], {
  revalidate: 3600, // 1 hour
  tags: ['slides'],
});
