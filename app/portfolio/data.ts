import type { CategoryKey, FilterOption, PortfolioItem } from './types';

export const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: 'AI-Powered Analytics Dashboard',
    category: 'ai',
    description:
      '機械学習を活用したリアルタイムデータ分析ダッシュボード。予測分析と異常検知機能を搭載。',
    image: 'https://placehold.jp/400x250.png',
    tech: ['Python', 'TensorFlow', 'React', 'D3.js'],
    demo: 'https://example.com',
    github: 'https://github.com',
    fullDescription:
      'このプロジェクトは、機械学習アルゴリズムを使用してリアルタイムでデータを分析し、ビジネスインサイトを提供する革新的なダッシュボードです。異常検知、予測分析、自動レポート生成などの機能を実装しました。',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    category: 'web',
    description:
      'モダンなUI/UXを備えたフルスタックEコマースプラットフォーム。決済システムと在庫管理を統合。',
    image: 'https://placehold.jp/400x250.png',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    demo: 'https://example.com',
    github: 'https://github.com',
    fullDescription:
      'スケーラブルなアーキテクチャを採用したEコマースプラットフォーム。リアルタイム在庫管理、安全な決済処理、パーソナライズされた商品推薦機能を実装。',
  },
  {
    id: 3,
    title: 'Mobile Banking App',
    category: 'mobile',
    description:
      'セキュアで使いやすいモバイルバンキングアプリケーション。生体認証とリアルタイム取引を実現。',
    image: 'https://placehold.jp/400x250.png',
    tech: ['React Native', 'Node.js', 'MongoDB', 'JWT'],
    demo: 'https://example.com',
    github: 'https://github.com',
    fullDescription:
      '最新のセキュリティ標準に準拠したモバイルバンキングアプリ。指紋認証、顔認証、リアルタイム残高確認、即時送金機能を搭載。',
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    category: 'web',
    description: '複数のソーシャルメディアプラットフォームを統合管理するダッシュボード。',
    image: 'https://placehold.jp/400x250.png',
    tech: ['Vue.js', 'Express', 'Redis', 'Socket.io'],
    demo: 'https://example.com',
    github: 'https://github.com',
    fullDescription:
      'マーケティングチーム向けの統合ソーシャルメディア管理ツール。投稿スケジューリング、分析、エンゲージメント追跡機能を提供。',
  },
  {
    id: 5,
    title: 'AR Interior Design App',
    category: 'mobile',
    description: 'ARを使用して家具を仮想配置できるインテリアデザインアプリ。',
    image: 'https://placehold.jp/400x250.png',
    tech: ['Unity', 'ARCore', 'C#', 'Firebase'],
    demo: 'https://example.com',
    github: 'https://github.com',
    fullDescription:
      '拡張現実技術を活用したインテリアデザインアプリ。実際の部屋に仮想家具を配置し、購入前に確認できる革新的なソリューション。',
  },
  {
    id: 6,
    title: 'Design System Library',
    category: 'design',
    description: '再利用可能なコンポーネントとデザイントークンを含む包括的なデザインシステム。',
    image: 'https://placehold.jp/400x250.png',
    tech: ['Figma', 'Storybook', 'React', 'Sass'],
    demo: 'https://example.com',
    github: 'https://github.com',
    fullDescription:
      'エンタープライズ向けの完全なデザインシステム。一貫性のあるUI/UXを提供し、開発効率を大幅に向上させるコンポーネントライブラリ。',
  },
];

export const filterOptions: FilterOption[] = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Solo Development' },
  { key: 'mobile', label: 'Slides' },
  { key: 'ai', label: 'Projects' },
];

export const getCategoryName = (category: string): string => {
  const names: Record<CategoryKey | string, string> = {
    web: 'Web Application',
    mobile: 'Mobile App',
    ai: 'AI/Machine Learning',
    design: 'Design System',
  };
  return names[category] || category;
};
