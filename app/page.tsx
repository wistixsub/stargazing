import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import DawnSky from "@/components/DawnSky";

export default function Home() {
  const featured = PRODUCTS.slice(0, 4);
  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Hero（明け方テーマ・2026-06-11 明るい版へ刷新／基準点tag claude-only-v1） */}
      <section className="relative -mx-4 px-4 py-20 sm:py-28 text-center overflow-hidden rounded-b-3xl"
        style={{
          background:
            "linear-gradient(180deg, #b9d3ef 0%, #cfe0f5 22%, #e6eefb 46%, #f6ecdb 72%, #fdf4e8 86%, #f4f7ff 100%)",
        }}>
        <DawnSky />
        <div className="relative">
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight" style={{ color: "#1b2545" }}>
            星を、<span style={{ color: "#1f8fb0" }}>撮る</span>。<span style={{ color: "#cf8a1e" }}>観る</span>。
          </h1>
          <p className="mt-5 text-base sm:text-lg leading-relaxed" style={{ color: "#34406a" }}>
            星空撮影の機材ガイドと、撮影作例が集まる個人運営メディア。<br className="hidden sm:block" />
            星を「撮る・観る」ための選び方・使い方と、読者の作例が集まる場所。
          </p>
          <div className="mt-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium"
              style={{ background: "rgba(255,255,255,0.7)", color: "#1b2545", border: "1px solid #cdd9ef" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#1f8fb0" aria-hidden="true"><path d="M6 2h12a1 1 0 0 1 1 1v18l-7-4-7 4V3a1 1 0 0 1 1-1z" /></svg>
              初心者〜中級者向け｜今日から始める星空撮影
            </span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link
              href="/gear"
              className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 font-bold text-white shadow-lg transition hover:-translate-y-0.5"
              style={{ background: "linear-gradient(180deg, #2ba0c4, #1f7fb0)", boxShadow: "0 8px 20px rgba(31,127,176,0.35)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 3l-1.5 2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.5L15 3H9zm3 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" /></svg>
              星空撮影ギアを見る →
            </Link>
            <Link
              href="/gallery"
              className="inline-block rounded-xl px-7 py-3.5 font-bold transition hover:-translate-y-0.5"
              style={{ background: "rgba(255,255,255,0.75)", color: "#1b2545", border: "1px solid #cdd9ef" }}
            >
              みんなの作例を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Gear（核） */}
      <section className="py-6">
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-xs uppercase tracking-widest" style={{ color: "var(--muted)" }}>星空撮影ギア</h2>
          <Link href="/gear" className="text-xs hover:underline" style={{ color: "var(--accent)" }}>すべて見る →</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <Link key={p.slug} href={`/gear/${p.slug}`}
              className="rounded-xl border p-5 block transition hover:-translate-y-0.5"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
              <div className="text-2xl mb-2">{p.emoji}</div>
              <h3 className="font-bold text-sm mb-1 leading-snug">{p.name}</h3>
              <p className="text-xs" style={{ color: "var(--muted)" }}>{p.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="py-6">
        <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>ツール</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/tools/500-rule" className="rounded-xl border p-5 block transition hover:-translate-y-0.5"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
            <div className="text-2xl mb-2">📷</div>
            <h3 className="font-bold mb-1">500ルール計算機</h3>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              焦点距離とセンサーから、星が流れずに点で写る最大シャッタースピードを計算。
            </p>
          </Link>
          <Link href="/tools/moon-calendar" className="rounded-xl border p-5 block transition hover:-translate-y-0.5"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
            <div className="text-2xl mb-2">🌙</div>
            <h3 className="font-bold mb-1">月齢カレンダー</h3>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              今日の月齢と「次の新月（星空撮影の適期）」がわかる。月明かり対策に。
            </p>
          </Link>
        </div>
      </section>

      {/* Guide roadmap */}
      <section className="py-8">
        <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>ガイド</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {([
            { e: "📸", t: "星空撮影の設定 完全ガイド（ISO・絞り・SS）", href: "/guide/settings" },
            { e: "🌠", t: "天の川が見える時期と方角", href: "/guide/milkyway-season" },
            { e: "📱", t: "スマホで星空を撮る方法", href: "/guide/smartphone" },
            { e: "🔭", t: "星空向けレンズの選び方（焦点距離×明るさ）", href: "/guide/lens" },
            { e: "🧭", t: "ポータブル赤道儀は必要か", href: "/guide/star-tracker" },
            { e: "🔭", t: "【観る】はじめての天体望遠鏡の選び方", href: "/guide/telescope-beginner" },
          ] as { e: string; t: string; href?: string }[]).map((g) => {
            const inner = (
              <div className="rounded-lg border p-4 flex items-center gap-3 h-full"
                style={{ borderColor: "var(--border)", background: "var(--surface2)" }}>
                <span className="text-xl">{g.e}</span>
                <span className="text-sm" style={{ color: g.href ? "var(--text)" : "var(--muted)" }}>{g.t}</span>
                <span className="ml-auto text-xs whitespace-nowrap" style={{ color: "var(--accent)" }}>
                  {g.href ? "公開中" : "準備中"}
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
        <p className="mt-4 text-xs" style={{ color: "var(--muted)", opacity: 0.7 }}>
          「撮る」から始めて、「観る（望遠鏡）」まで。順次公開していきます。
        </p>
      </section>
    </div>
  );
}
