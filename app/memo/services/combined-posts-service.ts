import { sortPostsByDate } from '../lib/date-utils';
import type { PostListItem } from '../lib/types';
import { getAllExternalPosts } from './external-posts-service';
import { getAllPosts as getAllInternalPosts } from './post-service';

/**
 * Get all posts (internal and external) sorted by date
 */
export async function getAllCombinedPosts(): Promise<PostListItem[]> {
  try {
    // Fetch internal and external posts in parallel
    const [internalPosts, externalPosts] = await Promise.all([
      getAllInternalPosts(),
      getAllExternalPosts(),
    ]);

    // Combine all posts
    const allPosts = [...internalPosts, ...externalPosts];

    // Sort by publication date (newest first)
    return sortPostsByDate(allPosts);
  } catch (error) {
    console.error('Error fetching combined posts:', error);
    // If external posts fail, at least return internal posts
    return getAllInternalPosts();
  }
}
