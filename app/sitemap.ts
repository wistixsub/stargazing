import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { PRODUCTS } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths: { p: string; cf: "weekly" | "monthly"; pr: number }[] = [
    { p: "/", cf: "weekly", pr: 1 },
    { p: "/gear", cf: "weekly", pr: 0.9 },
    { p: "/gear/lenses", cf: "monthly", pr: 0.8 },
    { p: "/gallery", cf: "weekly", pr: 0.8 },
    { p: "/submit", cf: "monthly", pr: 0.5 },
    ...PRODUCTS.map((pr) => ({ p: `/gear/${pr.slug}`, cf: "monthly" as const, pr: 0.8 })),
    { p: "/tools/500-rule", cf: "monthly", pr: 0.9 },
    { p: "/tools/moon-calendar", cf: "monthly", pr: 0.9 },
    { p: "/glossary", cf: "monthly", pr: 0.7 },
    { p: "/guide", cf: "weekly", pr: 0.7 },
    { p: "/about", cf: "monthly", pr: 0.4 },
    { p: "/contact", cf: "monthly", pr: 0.3 },
    { p: "/privacy", cf: "monthly", pr: 0.3 },
    { p: "/guide/beginner", cf: "weekly", pr: 0.9 },
    { p: "/guide/camp-stargazing", cf: "monthly", pr: 0.8 },
    { p: "/guide/tonight-sky", cf: "monthly", pr: 0.8 },
    { p: "/guide/binoculars-vs-telescope", cf: "monthly", pr: 0.8 },
    { p: "/guide/settings", cf: "monthly", pr: 0.8 },
    { p: "/guide/milkyway-season", cf: "monthly", pr: 0.8 },
    { p: "/guide/smartphone", cf: "monthly", pr: 0.8 },
    { p: "/guide/lens", cf: "monthly", pr: 0.8 },
    { p: "/guide/star-tracker", cf: "monthly", pr: 0.8 },
    { p: "/guide/skymemo-s", cf: "monthly", pr: 0.8 },
    { p: "/guide/samyang-14mm", cf: "monthly", pr: 0.8 },
    { p: "/guide/prosofton-clear", cf: "monthly", pr: 0.8 },
    { p: "/guide/ascot-zr10x50", cf: "monthly", pr: 0.8 },
    { p: "/guide/slik-e83ii", cf: "monthly", pr: 0.8 },
    { p: "/guide/sg-l02", cf: "monthly", pr: 0.8 },
    { p: "/guide/moon-phase", cf: "monthly", pr: 0.8 },
    { p: "/guide/telescope-beginner", cf: "monthly", pr: 0.8 },
    { p: "/guide/telescope-aperture", cf: "monthly", pr: 0.8 },
  ];
  return paths.map(({ p, cf, pr }) => ({
    url: `${SITE_URL}${p}`,
    lastModified: now,
    changeFrequency: cf,
    priority: pr,
  }));
}
