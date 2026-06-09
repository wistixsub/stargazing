// サイト共通定数。env（NEXT_PUBLIC_*）があれば優先、無ければ本番の既定値を使う。
// SITE_URL・GA_ID はいずれも公開情報のため、既定値をコードに持たせてOK（envで上書き可）。
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hoshizora-note.com";
export const SITE_NAME = "星空ノート";
// GA4：測定ID。env優先・無ければ既定値で計測有効。
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-B4C9FG3VWX";
