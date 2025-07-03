export interface MemoPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  tag: string;
  category: string;
  readTime: string;
}

export const memoPosts: MemoPost[] = [
  {
    id: 1,
    title: 'React Server Componentsの完全ガイド：次世代のReact開発',
    excerpt:
      'React Server Componentsの基本概念から実践的な実装方法まで、包括的に解説します。パフォーマンスとDXの両方を向上させる新しいアーキテクチャについて学びましょう。',
    date: '2024年3月15日',
    image: 'https://placehold.jp/400x200.png',
    tag: 'React',
    category: 'Frontend',
    readTime: '10分で読める',
  },
  {
    id: 2,
    title: 'TypeScript 5.0の新機能とマイグレーションガイド',
    excerpt:
      'TypeScript 5.0で追加された新機能と、既存プロジェクトのスムーズなマイグレーション方法について詳しく解説します。',
    date: '2024年3月10日',
    image: 'https://placehold.jp/400x200.png',
    tag: 'TypeScript',
    category: 'Frontend',
    readTime: '8分で読める',
  },
  {
    id: 3,
    title: 'マイクロサービスアーキテクチャのベストプラクティス',
    excerpt:
      'スケーラブルなマイクロサービスを構築するための設計原則、実装パターン、運用のベストプラクティスを紹介します。',
    date: '2024年3月5日',
    image: 'https://placehold.jp/400x200.png',
    tag: 'Architecture',
    category: 'Backend',
    readTime: '15分で読める',
  },
  {
    id: 4,
    title: 'AIを活用した開発効率化：GitHub Copilotの実践活用法',
    excerpt:
      'GitHub Copilotを使って開発効率を劇的に向上させる方法と、AIペアプログラミングのベストプラクティスを解説します。',
    date: '2024年3月1日',
    image: 'https://placehold.jp/400x200.png',
    tag: 'AI/ML',
    category: 'Tools',
    readTime: '12分で読める',
  },
  {
    id: 5,
    title: 'Next.js 14のApp Routerを使った実践的なWebアプリ開発',
    excerpt:
      'Next.js 14の新しいApp Routerを使用して、モダンなフルスタックWebアプリケーションを構築する方法を実例とともに解説します。',
    date: '2024年2月25日',
    image: 'https://placehold.jp/400x200.png',
    tag: 'Next.js',
    category: 'Frontend',
    readTime: '20分で読める',
  },
  {
    id: 6,
    title: 'CI/CDパイプラインの最適化テクニック',
    excerpt:
      'GitHub ActionsとDockerを使用した効率的なCI/CDパイプラインの構築方法と、デプロイメントの自動化について解説します。',
    date: '2024年2月20日',
    image: 'https://placehold.jp/400x200.png',
    tag: 'DevOps',
    category: 'DevOps',
    readTime: '15分で読める',
  },
];
