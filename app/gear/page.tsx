import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS, CATEGORY_ORDER, type ProductCategory } from "@/lib/products";

export const metadata: Metadata = {
  title: "星空撮影ギア｜目的から選ぶ機材ガイド",
  description:
    "星空撮影を目的としたギア（ポータブル赤道儀・広角レンズ・三脚・観望双眼鏡など）を、買う前の要点と具体的な使い方つきで紹介。読者の作例とあわせて選べます。",
};

export default function GearIndex() {
  const byCategory = CATEGORY_ORDER.map((cat) => ({
    cat,
    items: PRODUCTS.filter((p) => p.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold">星空撮影ギア</h1>
      <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        「何を買えばいいか」の1歩目と、「買ったあとの使い方」をセットで。
        星空撮影を目的としたギアを、要点・注意点・実際の使い方つきで紹介します。
        各機材には読者の<Link href="/gallery" className="underline mx-0.5" style={{ color: "var(--accent)" }}>作例</Link>も紐づきます。
      </p>

      <p className="mt-3 text-xs rounded-md border px-3 py-2 inline-block"
        style={{ borderColor: "var(--border)", background: "var(--surface2)", color: "var(--muted)" }}>
        ※掲載中の仕様は代表値です。購入前に必ず公式情報をご確認ください（順次裏取り・更新します）。
      </p>

      {byCategory.map(({ cat, items }) => (
        <section key={cat} className="mt-8">
          <h2 className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--muted)" }}>
            {cat}
            <RoleBadge cat={cat} />
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((p) => (
              <Link
                key={p.slug}
                href={`/gear/${p.slug}`}
                className="rounded-xl border p-5 block transition hover:-translate-y-0.5"
                style={{ borderColor: "var(--border)", background: "var(--surface)" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{p.emoji}</span>
                  {p.role === "副" && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: "var(--surface2)", color: "var(--accent2)" }}>観る</span>
                  )}
                </div>
                <h3 className="font-bold mb-1 leading-snug">{p.name}</h3>
                <p className="text-sm" style={{ color: "var(--muted)" }}>{p.tagline}</p>
                <span className="mt-3 inline-block text-xs" style={{ color: "var(--accent)" }}>
                  詳しく見る →
                </span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function RoleBadge({ cat }: { cat: ProductCategory }) {
  if (cat !== "観望") return null;
  return (
    <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded align-middle"
      style={{ background: "var(--surface2)", color: "var(--accent2)" }}>副・観望系</span>
  );
}
