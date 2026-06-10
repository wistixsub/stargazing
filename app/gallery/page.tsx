import type { Metadata } from "next";
import Link from "next/link";
import { approvedSamples, gearOf } from "@/lib/samples";

export const metadata: Metadata = {
  title: "みんなの星空作例｜使用機材から探す",
  description:
    "読者が投稿した星空写真の作例ギャラリー。各作例には使用機材のタグが付き、そのまま機材ページへ。あなたの一枚も投稿できます。",
};

export default function Gallery() {
  const samples = approvedSamples();
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold">みんなの星空作例</h1>
      <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        読者が撮った星空写真です。各作例には<span style={{ color: "var(--accent)" }}>使用機材のタグ</span>が付いています。
        「この写真、何で撮ったの？」をタグから辿って、機材選びの参考にどうぞ。
      </p>
      <p className="mt-4">
        <Link href="/submit" className="inline-block rounded-lg px-5 py-2.5 text-sm font-bold"
          style={{ background: "var(--accent)", color: "#06121a" }}>
          作例を投稿する →
        </Link>
      </p>

      {samples.length === 0 && (
        <div className="mt-10 rounded-2xl border p-8 sm:p-12 text-center"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="text-5xl mb-4" aria-hidden="true">🌌</div>
          <h2 className="text-lg sm:text-xl font-bold">作例ギャラリー、第1号を募集中です</h2>
          <p className="mt-3 text-sm leading-relaxed max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            このギャラリーには、読者のみなさんが撮った<strong>本物の星空写真だけ</strong>を掲載します。
            あなたの一枚に使用機材のタグを付けて、これから星を撮る人の道しるべにしませんか。
            最初の数枚は、サイト各所で大きく紹介します。
          </p>
          <p className="mt-6">
            <Link href="/submit" className="inline-block rounded-lg px-6 py-3 text-sm font-bold"
              style={{ background: "var(--accent)", color: "#06121a" }}>
              第1号として作例を投稿する →
            </Link>
          </p>
          <p className="mt-4 text-xs" style={{ color: "var(--muted)", opacity: 0.8 }}>
            撮影データ（ISO・SS・F値）や使用機材も一緒に教えていただけると、読者の参考になります。
          </p>
        </div>
      )}

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {samples.map((s) => {
          const gear = gearOf(s);
          return (
            <div key={s.id} className="rounded-xl border overflow-hidden flex flex-col"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
              <div className="aspect-[4/3] flex items-center justify-center text-4xl" style={{ background: "var(--surface2)" }} aria-hidden="true">🌌</div>
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="font-bold leading-snug">{s.title}</h2>
                <p className="text-[11px] mt-1" style={{ color: "var(--muted)" }}>
                  by {s.author}{s.location ? `・${s.location}` : ""}
                </p>
                {s.shotData && <p className="text-[11px] mt-1" style={{ color: "var(--muted)" }}>{s.shotData}</p>}
                {s.comment && <p className="text-sm mt-2" style={{ color: "var(--muted)" }}>{s.comment}</p>}

                {gear.length > 0 && (
                  <div className="mt-3 pt-3 border-t" style={{ borderColor: "var(--border)" }}>
                    <p className="text-[10px] uppercase tracking-widest mb-1.5" style={{ color: "var(--muted)" }}>使用機材</p>
                    <div className="flex flex-wrap gap-1.5">
                      {gear.map((g) => (
                        <Link key={g.slug} href={`/gear/${g.slug}`}
                          className="text-[11px] px-2 py-1 rounded-full transition hover:opacity-80"
                          style={{ background: "var(--surface2)", color: "var(--accent)" }}>
                          {g.emoji} {g.name.replace(/（.*?）/g, "").trim()}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-xs" style={{ color: "var(--muted)", opacity: 0.8 }}>
        掲載写真は投稿者の許諾を得たものです。掲載の取り下げ依頼は
        <Link href="/submit#terms" className="underline mx-1" style={{ color: "var(--accent)" }}>投稿ガイドライン</Link>
        をご覧ください。
      </p>
    </div>
  );
}
