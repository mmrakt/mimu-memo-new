export interface MemoMetadata {
  title: string;
  tag: string;
  pubDate: string;
  id: string;
}

export interface MemoContent {
  metadata: MemoMetadata;
  content: string;
  isMarkdown?: boolean;
}

export interface PostListItem {
  id: string;
  title: string;
  tag: string;
  pubDate: string;
  excerpt?: string;
}

export interface MemoBySlugResult {
  metadata: MemoMetadata;
  Component?: React.ComponentType;
  content?: string;
  isMarkdown?: boolean;
}
