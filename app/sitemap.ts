import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { PRODUCTS } from "@/lib/products";

// lm = そのページの内容を最後に更新した日（git履歴基準）。
// ページの本文を更新したら、該当行の lm も更新すること。
// ビルド時刻を一律で入れると lastmod が信用されなくなるため使わない。
const PRODUCT_LM = "2026-06-17"; // 商品詳細テンプレ最終更新（Product JSON-LD除去）

export default function sitemap(): MetadataRoute.Sitemap {
  const paths: { p: string; cf: "weekly" | "monthly"; pr: number; lm: string }[] = [
    { p: "/", cf: "weekly", pr: 1, lm: "2026-06-14" },
    { p: "/gear", cf: "weekly", pr: 0.9, lm: "2026-06-15" },
    { p: "/gear/lenses", cf: "monthly", pr: 0.8, lm: "2026-06-14" },
    { p: "/gear/star-trackers", cf: "monthly", pr: 0.8, lm: "2026-06-14" },
    { p: "/gear/tripods", cf: "monthly", pr: 0.8, lm: "2026-06-14" },
    { p: "/gear/red-lights", cf: "monthly", pr: 0.8, lm: "2026-06-15" },
    { p: "/gallery", cf: "weekly", pr: 0.8, lm: "2026-06-11" },
    { p: "/submit", cf: "monthly", pr: 0.5, lm: "2026-06-11" },
    ...PRODUCTS.map((pr) => ({
      p: `/gear/${pr.slug}`,
      cf: "monthly" as const,
      pr: 0.8,
      lm: PRODUCT_LM,
    })),
    { p: "/tools/500-rule", cf: "monthly", pr: 0.9, lm: "2026-06-09" },
    { p: "/tools/moon-calendar", cf: "monthly", pr: 0.9, lm: "2026-06-09" },
    { p: "/glossary", cf: "monthly", pr: 0.7, lm: "2026-06-11" },
    { p: "/guide", cf: "weekly", pr: 0.7, lm: "2026-06-16" },
    { p: "/about", cf: "monthly", pr: 0.4, lm: "2026-06-11" },
    { p: "/contact", cf: "monthly", pr: 0.3, lm: "2026-06-11" },
    { p: "/privacy", cf: "monthly", pr: 0.3, lm: "2026-06-10" },
    { p: "/guide/beginner", cf: "weekly", pr: 0.9, lm: "2026-06-11" },
    { p: "/guide/camp-stargazing", cf: "monthly", pr: 0.8, lm: "2026-06-11" },
    { p: "/guide/tonight-sky", cf: "monthly", pr: 0.8, lm: "2026-06-09" },
    { p: "/guide/binoculars-vs-telescope", cf: "monthly", pr: 0.8, lm: "2026-06-10" },
    { p: "/guide/settings", cf: "monthly", pr: 0.8, lm: "2026-06-11" },
    { p: "/guide/milkyway-season", cf: "monthly", pr: 0.8, lm: "2026-06-09" },
    { p: "/guide/perseids-2026", cf: "weekly", pr: 0.9, lm: "2026-06-16" },
    { p: "/guide/tanabata-milkyway", cf: "weekly", pr: 0.9, lm: "2026-06-16" },
    { p: "/guide/smartphone", cf: "monthly", pr: 0.8, lm: "2026-06-11" },
    { p: "/guide/lens", cf: "monthly", pr: 0.8, lm: "2026-06-13" },
    { p: "/guide/star-tracker", cf: "monthly", pr: 0.8, lm: "2026-06-10" },
    { p: "/guide/skymemo-s", cf: "monthly", pr: 0.8, lm: "2026-06-10" },
    { p: "/guide/samyang-14mm", cf: "monthly", pr: 0.8, lm: "2026-06-10" },
    { p: "/guide/prosofton-clear", cf: "monthly", pr: 0.8, lm: "2026-06-10" },
    { p: "/guide/ascot-zr10x50", cf: "monthly", pr: 0.8, lm: "2026-06-10" },
    { p: "/guide/slik-e83ii", cf: "monthly", pr: 0.8, lm: "2026-06-10" },
    { p: "/guide/sg-l02", cf: "monthly", pr: 0.8, lm: "2026-06-10" },
    { p: "/guide/moon-phase", cf: "monthly", pr: 0.8, lm: "2026-06-09" },
    { p: "/guide/telescope-beginner", cf: "monthly", pr: 0.8, lm: "2026-06-09" },
    { p: "/guide/telescope-aperture", cf: "monthly", pr: 0.8, lm: "2026-06-09" },
  ];
  return paths.map(({ p, cf, pr, lm }) => ({
    url: `${SITE_URL}${p}`,
    lastModified: new Date(lm),
    changeFrequency: cf,
    priority: pr,
  }));
}
