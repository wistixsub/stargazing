import type { Metadata } from "next";
import Link from "next/link";
import { LineIcon, type IconName } from "@/components/icons";

export const metadata: Metadata = {
  title: "ガイド一覧｜星空撮影と天体観望",
  description: "星空撮影の設定・機材・季節、そして天体観望（望遠鏡）の入門まで。順次公開予定のガイド一覧。",
};

const GUIDES: { e: IconName; t: string; g: string; href?: string }[] = [
  { e: "camera", t: "星空撮影の始め方【初心者完全ガイド】", g: "撮る", href: "/guide/beginner" },
  { e: "sliders", t: "星空撮影の設定 完全ガイド（ISO・絞り・SS）", g: "撮る", href: "/guide/settings" },
  { e: "milkyway", t: "天の川が見える時期と方角", g: "撮る", href: "/guide/milkyway-season" },
  { e: "smartphone", t: "スマホで星空を撮る方法", g: "撮る", href: "/guide/smartphone" },
  { e: "smartphone", t: "キャンプで星空を撮る方法（スマホ＋数千円から）", g: "撮る", href: "/guide/camp-stargazing" },
  { e: "lens", t: "星空向けレンズの選び方（焦点距離×明るさ）", g: "撮る", href: "/guide/lens" },
  { e: "mount", t: "ポータブル赤道儀は必要か", g: "撮る", href: "/guide/star-tracker" },
  { e: "mount", t: "スカイメモSの使い方・設定ガイド", g: "撮る", href: "/guide/skymemo-s" },
  { e: "lens", t: "SAMYANG 14mm F2.8で星空を撮る設定", g: "撮る", href: "/guide/samyang-14mm" },
  { e: "filter", t: "プロソフトン クリアの効果と使い方", g: "撮る", href: "/guide/prosofton-clear" },
  { e: "tripod", t: "星空向け三脚の選び方（ライトカーボン E83 II実例）", g: "撮る", href: "/guide/slik-e83ii" },
  { e: "flashlight", t: "赤色ライトはなぜ必要か（SG-L02ガイド）", g: "撮る", href: "/guide/sg-l02" },
  { e: "binoculars", t: "10×50双眼鏡で星空観望（アスコット ZR10×50WP）", g: "観る", href: "/guide/ascot-zr10x50" },
  { e: "moon", t: "月齢と撮影適期の考え方", g: "撮る", href: "/guide/moon-phase" },
  { e: "telescope", t: "はじめての天体望遠鏡の選び方", g: "観る", href: "/guide/telescope-beginner" },
  { e: "planet", t: "口径別・望遠鏡で見える天体の早見", g: "観る", href: "/guide/telescope-aperture" },
  { e: "constellation", t: "季節別・見える星座と天体（今夜は何が見える？）", g: "観る", href: "/guide/tonight-sky" },
  { e: "binoculars", t: "双眼鏡 vs 望遠鏡（天体観測）", g: "観る", href: "/guide/binoculars-vs-telescope" },
];

export default function GuideIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold">ガイド一覧</h1>
      <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
        「撮る」から始めて、「観る（望遠鏡）」まで。順次公開していきます。
      </p>

      <div className="mt-6 grid gap-3">
        {GUIDES.map((g) => {
          const inner = (
            <div className="rounded-lg border p-4 flex items-center gap-3 h-full"
              style={{ borderColor: "var(--border)", background: g.href ? "var(--surface)" : "var(--surface2)" }}>
              <LineIcon name={g.e} size={22} className="shrink-0" style={{ color: "var(--navy)" }} />
              <span className="text-sm">{g.t}</span>
              <span className="ml-auto text-xs px-2 py-0.5 rounded whitespace-nowrap"
                style={{ background: "var(--surface2)", color: g.g === "撮る" ? "var(--accent)" : "var(--accent2)" }}>
                {g.href ? "公開中" : `${g.g}・準備中`}
              </span>
            </div>
          );
          return g.href ? (
            <Link key={g.t} href={g.href} className="block transition hover:-translate-y-0.5">{inner}</Link>
          ) : (
            <div key={g.t}>{inner}</div>
          );
        })}
      </div>

      <p className="mt-8 text-sm" style={{ color: "var(--muted)" }}>
        まずは使えるツールから：
        <Link href="/tools/500-rule" className="underline ml-1" style={{ color: "var(--accent)" }}>500ルール計算機</Link>
      </p>
    </div>
  );
}
