import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths: { p: string; cf: "weekly" | "monthly"; pr: number }[] = [
    { p: "/", cf: "weekly", pr: 1 },
    { p: "/tools/500-rule", cf: "monthly", pr: 0.9 },
    { p: "/tools/moon-calendar", cf: "monthly", pr: 0.9 },
    { p: "/guide", cf: "weekly", pr: 0.7 },
    { p: "/about", cf: "monthly", pr: 0.4 },
    { p: "/guide/tonight-sky", cf: "monthly", pr: 0.8 },
    { p: "/guide/binoculars-vs-telescope", cf: "monthly", pr: 0.8 },
    { p: "/guide/settings", cf: "monthly", pr: 0.8 },
    { p: "/guide/milkyway-season", cf: "monthly", pr: 0.8 },
    { p: "/guide/smartphone", cf: "monthly", pr: 0.8 },
    { p: "/guide/lens", cf: "monthly", pr: 0.8 },
    { p: "/guide/star-tracker", cf: "monthly", pr: 0.8 },
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
