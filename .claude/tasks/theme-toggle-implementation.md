# ライト・ダークモード切り替え機能実装計画

## プロジェクト概要
Next.js 15、React 19、Tailwind CSS 4を使用したプロジェクトにライト・ダークモード切り替え機能を実装する。

## 現在の状況分析

### 既存のテーマ設定
- `globals.css`で基本的なカラー変数が定義済み
- `prefers-color-scheme: dark`によるシステム設定の自動検出が実装済み
- CSS変数：`--background`、`--foreground`
- Tailwind設定でカラー変数を使用

### 技術スタック
- Next.js 15.3.4
- React 19
- Tailwind CSS 4
- TypeScript
- Biome（リント・フォーマット）

## 実装計画

### Phase 1: テーマ管理システム
1. **テーマコンテキストの作成**
   - `app/contexts/ThemeContext.tsx`
   - システム設定、ライト、ダークの3つのモード対応
   - LocalStorageでの設定保存

2. **カスタムフックの実装**
   - `app/hooks/useTheme.ts`
   - テーマ切り替えロジック
   - システム設定の検出

### Phase 2: UI コンポーネント
3. **テーマ切り替えボタンコンポーネント**
   - `app/components/ThemeToggle.tsx`
   - アイコン付きボタン（太陽/月/自動）
   - アニメーション効果

4. **レイアウトへの統合**
   - `app/layout.tsx`の更新
   - テーマプロバイダーの追加
   - 初期テーマ設定の処理

### Phase 3: スタイル拡張
5. **Tailwind設定の拡張**
   - `tailwind.config.ts`の更新
   - ダークモード設定の追加
   - 追加カラーパレットの定義

6. **CSS変数の拡張**
   - `globals.css`の更新
   - より詳細なカラー変数
   - スムーズなトランジション

### Phase 4: テスト・最適化
7. **動作確認**
   - 各テーマモードの表示確認
   - LocalStorageの動作確認
   - レスポンシブ対応確認

8. **パフォーマンス最適化**
   - ハイドレーション最適化
   - フラッシュ防止対策
   - アクセシビリティ対応

## 技術仕様

### テーマモード
- `light`: ライトモード
- `dark`: ダークモード  
- `system`: システム設定に従う

### LocalStorage キー
- `theme-preference`: ユーザーのテーマ設定

### CSS変数構造
```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --card: #f9f9f9;
  --card-foreground: #171717;
  --popover: #ffffff;
  --popover-foreground: #171717;
  --primary: #171717;
  --primary-foreground: #fafafa;
  --secondary: #f1f5f9;
  --secondary-foreground: #0f172a;
  --muted: #f1f5f9;
  --muted-foreground: #64748b;
  --accent: #f1f5f9;
  --accent-foreground: #0f172a;
  --destructive: #ef4444;
  --destructive-foreground: #fefefe;
  --border: #e2e8f0;
  --input: #e2e8f0;
  --ring: #94a3b8;
}
```

### アイコン使用
- lucide-react（既存依存関係）
- Sun、Moon、Monitor アイコン

## 実装順序
1. ThemeContext作成
2. useThemeフック実装
3. ThemeToggleコンポーネント作成
4. layout.tsx統合
5. CSS変数拡張
6. Tailwind設定更新
7. 動作確認・調整

## 注意点
- SSRでのハイドレーション問題対応
- フラッシュ（FOUC）防止
- アクセシビリティ（ARIA属性、キーボード操作）
- パフォーマンス（useCallback、useMemo活用）

## 完了条件
- [x] 3つのテーマモード（light/dark/system）が正常動作
- [x] 設定がLocalStorageに保存される
- [x] ページリロード時に設定が復元される
- [x] フラッシュなしで初期レンダリングされる
- [x] アクセシビリティ要件を満たす
- [x] 既存のスタイルが正常に動作する