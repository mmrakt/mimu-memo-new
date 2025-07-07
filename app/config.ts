export const MY_NAME = "mimu";

export const SITE_NAME = `${MY_NAME}-memo`;

export const ABOUT_ME = [
  "日々成長するフルスタック志望エンジニア。",
  "技術と共に進化し続けます。",
] as const;

export const ABOUT_SITE = [
  `エンジニア${MY_NAME}のパーソナルサイト。`,
  "日々の開発の知見のメモやキャリア遍歴を記録しています。",
] as const;

export const QIITA_URL_PREFIX = "https://qiita.com";
export const NOTE_URL_PREFIX = "https://note.com";
export const ZENN_URL_PREFIX = "https://zenn.dev";
export const MEDIA_TYPE_LIST = ["owned", "qiita", "zenn", "note"] as const;
export const MEDIA_TYPE_LIST_FOR_DISPLAY = [
  "mimu-memo",
  "Qiita",
  "Zenn",
  "note",
] as const;

export const SNS_ID = "mmrakt";
export const TWITTER_ID = "mmrakt0716";
export const ZENN_FEED_URL = `https://zenn.dev/${SNS_ID}/feed?all=1`;
export const NOTE_FEED_URL = `https://note.com/${SNS_ID}/rss`;
export const QIITA_API_ENDPOINT =
  "https://qiita.com/api/v2/authenticated_user/items";
