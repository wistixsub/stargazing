// ユーザー投稿の作例写真（UGC）データモデル。WEAR×ZOZOTOWN型。
// 作例に「使用機材タグ（gearSlugs）」を付け、タグ→商品ページにリンク（ショッパブルUGC）。
// 商品ページ側は getSamplesByGear() で「この機材で撮られた作例」を自動集約する。
//
// ※現状はテンプレ検証用のサンプル（approved=true のデモ）。実投稿はフォーム＋手動キュレーション後に追加。
//   画像は未取り込み（image未設定）＝UI上はプレースホルダ表示。利用許諾の取れた写真のみ掲載する。

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

export const SAMPLES: Sample[] = [
  {
    id: "s001",
    title: "夏の天の川（八ヶ岳）",
    author: "demo_user",
    location: "長野県・八ヶ岳",
    shotData: "ISO1600 / F2.8 / 20秒 / 追尾あり",
    comment: "赤道儀デビュー戦。点像のまま暗部まで写って感動しました。",
    gearSlugs: ["portable-star-tracker", "wide-fast-lens", "sturdy-tripod"],
    approved: true,
  },
  {
    id: "s002",
    title: "オリオン座と冬の星空",
    author: "demo_user",
    location: "静岡県・富士山麓",
    shotData: "ISO3200 / F3.2 / 15秒 / 固定撮影",
    comment: "広角レンズで地上の景色も入れて星景に。",
    gearSlugs: ["wide-fast-lens", "sturdy-tripod"],
    approved: true,
  },
  {
    id: "s003",
    title: "すばる（プレアデス星団）を双眼鏡で",
    author: "demo_user",
    location: "山梨県",
    comment: "三脚固定で見るとびっしり星が見えました。",
    gearSlugs: ["astro-binoculars"],
    approved: true,
  },
];

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
