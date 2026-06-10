// ユーザー投稿の作例写真（UGC）データモデル。WEAR×ZOZOTOWN型。
// 作例に「使用機材タグ（gearSlugs）」を付け、タグ→商品ページにリンク（ショッパブルUGC）。
// 商品ページ側は getSamplesByGear() で「この機材で撮られた作例」を自動集約する。
//
// ※掲載するのは「利用許諾の取れた実投稿のみ」。サクラ（偽の投稿者）データは信頼を損なうため置かない。
//   実投稿が集まるまで SAMPLES は空。UI側は「第1号募集中」の空状態を表示する。
//   投稿フロー：/submit（フォーム）→ メール受信 → 手動キュレーション → ここに追加（image は許諾済みのみ）。

import { getProduct, type Product } from "./products";

export type Sample = {
  id: string;
  title: string;
  author: string; // 投稿者ニックネーム
  location?: string; // 撮影地（任意）
  shotData?: string; // 撮影データ（投稿者申告：ISO/SS/F など）
  comment?: string; // 一言
  gearSlugs: string[]; // 使用機材＝Product.slug（WEAR的タグ）
  image?: string; // 画像パス（未設定＝プレースホルダ）
  approved: boolean; // 掲載承認済みか
};

// 実投稿が集まるまで空。サクラデータは置かない（信頼毀損を避ける）。
export const SAMPLES: Sample[] = [];

/** 掲載承認済みの作例のみ。 */
export function approvedSamples(): Sample[] {
  return SAMPLES.filter((s) => s.approved);
}

/** ある商品（gear slug）で撮られた作例を集約（商品ページの「この機材の作例」用）。 */
export function getSamplesByGear(slug: string): Sample[] {
  return approvedSamples().filter((s) => s.gearSlugs.includes(slug));
}

/** 作例に紐づく商品（タグ→商品ページのリンク用）。存在する商品だけ返す。 */
export function gearOf(sample: Sample): Product[] {
  return sample.gearSlugs.map(getProduct).filter((p): p is Product => Boolean(p));
}
