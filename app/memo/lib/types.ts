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
  media?: 'owned' | 'qiita' | 'zenn' | 'note';
  link?: string;
}

export interface MemoBySlugResult {
  metadata: MemoMetadata;
  Component?: React.ComponentType;
  content?: string;
  isMarkdown?: boolean;
}
