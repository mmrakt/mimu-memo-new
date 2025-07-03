# mimu' tech blog

エンジニア`mimu`の個人サイト。

## ページ構成

- top(`/`)
  - 各ページへの導線
  - 各種外部リンク
    - x
    - github
    - scrapbox
    - zenn
    - qiita
    - wantedly
- blog（`/blog`）
  - `/blog/page/x`でページネーション
  - tags(`/blog/tags`): タグ一覧
  - tag ページ（`/blog/tags/xxx`）:タグの記事一覧
    - `/blog/tags/xxx/page/1`でページネーション
- carrer(`/career`)
  - キャリア遍歴を時系列でいい感じに表示する
  - PDF 出力もできる（local 専用, md-to-pdf）
- portfolio(`/portfolio`)
  - solo-development（個人開発）
  - slides（発表資料）

## 機能要件

- light/dark mode 対応（手動切り替え、OS 設定による自動切り替え対応）
- View Transition 対応（ブログ一覧->詳細、ブログ詳細->ブログ一覧時）
