/**
 * @deprecated This file is deprecated. Import directly from the appropriate modules:
 * - Types: import from './lib/types'
 * - Services: import from './services/post-service'
 * - Utils: import from './lib/[specific-util-file]'
 */

// Re-export from services for backward compatibility
export type { MemoBySlugResult, MemoContent, MemoMetadata, PostListItem } from './lib/types';
export { getAllMemoSlugs, getAllPosts, getMemoBySlug } from './services/post-service';

// TODO: Remove this file and update all imports to use direct imports
