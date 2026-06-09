import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Hero */}
      <section className="py-16 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
          星を、<span style={{ color: "var(--accent)" }}>撮る</span>。<span style={{ color: "var(--accent2)" }}>観る</span>。
        </h1>
        <p className="mt-4 text-base sm:text-lg" style={{ color: "var(--muted)" }}>
          星空撮影の設定・機材・季節の早見と、天体観望の入門ガイド。<br className="hidden sm:block" />
          まずは「点で写る最大シャッタースピード」を計算してみよう。
        </p>
        <div className="mt-8">
          <Link
            href="/tools/500-rule"
            className="inline-block rounded-lg px-6 py-3 font-bold"
            style={{ background: "var(--accent)", color: "#06121a" }}
          >
            500ルール計算機を使う →
          </Link>
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
