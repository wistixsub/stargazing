// サイト共通定数。独自ドメイン取得後は NEXT_PUBLIC_SITE_URL を設定するだけで全箇所反映。
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
export const SITE_NAME = "星空ノート";
// GA4：本番で NEXT_PUBLIC_GA_ID を設定すると計測が有効化（未設定なら無効）。
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
