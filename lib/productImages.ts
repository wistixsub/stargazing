// 商品の表示画像の解決。
// 優先順位: 手動指定(p.image) > 楽天取得画像(data/product-images.json) > 自前イラスト(p.illustration) > なし(null=アイコン)
// 楽天画像は scripts/fetch-rakuten-images.mjs で生成し、URLをコミット（ホットリンク）。
import images from "@/data/product-images.json";
import type { Product } from "./products";

const MAP = images as Record<string, string>;

export function gearImageSrc(p: Product): string | null {
  return p.image ?? MAP[p.slug] ?? p.illustration ?? null;
}
