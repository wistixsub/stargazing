import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import StarField from "@/components/StarField";

export default function Home() {
  const featured = PRODUCTS.slice(0, 4);
  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Hero */}
      <section className="relative -mx-4 px-4 py-20 sm:py-24 text-center overflow-hidden rounded-b-3xl"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,16,32,.62), rgba(11,16,32,.78) 70%, #0b1020), url('/photos/hero-milkyway.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
        }}>
        <StarField count={40} />
        <div className="relative">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            星を、<span style={{ color: "var(--accent)" }}>撮る</span>。<span style={{ color: "var(--accent2)" }}>観る</span>。
          </h1>
          <p className="mt-4 text-base sm:text-lg" style={{ color: "var(--muted)" }}>
            星空撮影の機材を「選ぶ」から「使いこなす」まで。<br className="hidden sm:block" />
            要点・使い方・ツールで、あなたの一枚を後押しします。
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link
              href="/gear"
              className="inline-block rounded-lg px-6 py-3 font-bold"
              style={{ background: "var(--accent)", color: "#06121a" }}
            >
              星空撮影ギアを見る →
            </Link>
            <Link
              href="/gallery"
              className="inline-block rounded-lg px-6 py-3 font-bold border"
              style={{ borderColor: "var(--border)", color: "var(--text)" }}
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
