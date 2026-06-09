import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "星空ノート — 星空撮影と天体観望のガイド";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// 暫定OG画像（コード生成）。CJKフォント読込を避けるため文字はローマ字/英語。
// 本格版（日本語ワードマーク）は docs/design-brief.md の依頼文で外部AIに発注予定。
export default function OG() {
  const stars = [
    [120, 90], [300, 160], [520, 70], [760, 130], [980, 90], [1080, 240],
    [180, 360], [420, 300], [640, 420], [900, 360], [1040, 470], [240, 520],
    [560, 540], [820, 520], [60, 240], [700, 250],
  ];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", position: "relative",
          background: "linear-gradient(160deg, #0b1020 0%, #131d36 100%)",
          color: "#eaf0ff", fontFamily: "sans-serif",
        }}
      >
        {stars.map(([x, y], i) => (
          <div key={i} style={{
            position: "absolute", left: x, top: y, width: i % 3 === 0 ? 4 : 2,
            height: i % 3 === 0 ? 4 : 2, borderRadius: 9999,
            background: i % 5 === 0 ? "#6fd3e0" : "#eaf0ff", opacity: 0.85,
          }} />
        ))}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ fontSize: 64, color: "#6fd3e0" }}>✦</div>
          <div style={{ fontSize: 78, fontWeight: 800, letterSpacing: 2 }}>HOSHIZORA NOTE</div>
        </div>
        <div style={{ fontSize: 30, color: "#9aa6c2", marginTop: 18, letterSpacing: 1 }}>
          Astrophotography &amp; Stargazing Guide
        </div>
        <div style={{ fontSize: 24, color: "#f0b357", marginTop: 26, letterSpacing: 3 }}>
          CAPTURE &middot; OBSERVE
        </div>
      </div>
    ),
    size
  );
}
