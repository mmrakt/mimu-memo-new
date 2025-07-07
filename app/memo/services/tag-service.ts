import { PAGINATION, TAG_ICONS } from "@/config/constants";
import type { PostListItem } from "../lib/types";
import { getAllPosts } from "./post-service";

export interface TagInfo {
  name: string;
  count: number;
  icon?: string;
}

export interface PaginatedTagPosts {
  posts: PostListItem[];
  currentPage: number;
  totalPages: number;
  totalPosts: number;
}

export const TAG_LIST = [
  "other",
  "astro",
  "react",
  "typescript",
  "javascript",
  "nextjs",
  "vite",
  "css",
  "tailwindcss",
  "gatsby",
] as const;

export function isValidTag(tag: string): boolean {
  return TAG_LIST.includes(tag as (typeof TAG_LIST)[number]);
}

export function validateTag(tag: string, filePath?: string): string {
  if (!tag || !tag.trim()) {
    const errorMessage = `${
      filePath ? `[${filePath}] ` : ""
    }No tag specified. Valid tags: ${TAG_LIST.join(", ")}`;
    console.error(errorMessage);
    process.exit(1);
  }

  if (!isValidTag(tag)) {
    const errorMessage = `${
      filePath ? `[${filePath}] ` : ""
    }Invalid tag '${tag}'. Valid tags: ${TAG_LIST.join(", ")}`;
    console.error(errorMessage);
    process.exit(1);
  }

  return tag;
}

export async function getAllTags(): Promise<TagInfo[]> {
  const posts = await getAllPosts();

  const tagCounts = new Map<string, number>();

  posts.forEach((post) => {
    if (post.tag) {
      const count = tagCounts.get(post.tag) || 0;
      tagCounts.set(post.tag, count + 1);
    }
  });

  const tags: TagInfo[] = Array.from(tagCounts.entries()).map(
    ([name, count]) => ({
      name,
      count,
      icon: TAG_ICONS[name.toLowerCase() as keyof typeof TAG_ICONS],
    })
  );

  return tags.sort((a, b) => b.count - a.count);
}

export async function getPostsByTag(tag: string) {
  const posts = await getAllPosts();
  return posts.filter((post) => post.tag === tag);
}

export async function getPostsByTagPaginated(
  tag: string,
  page: number = 1
): Promise<PaginatedTagPosts> {
  const allPosts = await getPostsByTag(tag);
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / PAGINATION.POSTS_PER_PAGE);

  const startIndex = (page - 1) * PAGINATION.POSTS_PER_PAGE;
  const endIndex = startIndex + PAGINATION.POSTS_PER_PAGE;
  const posts = allPosts.slice(startIndex, endIndex);

  return {
    posts,
    currentPage: page,
    totalPages,
    totalPosts,
  };
}
