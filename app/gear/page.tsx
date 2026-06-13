import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS, CATEGORY_ORDER, CATEGORY_ANCHOR, type ProductCategory } from "@/lib/products";
import { LineIcon } from "@/components/icons";

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
        <section key={cat} id={CATEGORY_ANCHOR[cat]} className="mt-8 scroll-mt-24">
          <div className="flex items-center mb-3">
            <h2 className="text-xs uppercase tracking-widest" style={{ color: "var(--muted)" }}>
              {cat}
              <RoleBadge cat={cat} />
            </h2>
            {cat === "レンズ" && (
              <Link href="/gear/lenses" className="ml-auto text-xs font-bold hover:underline" style={{ color: "var(--accent)" }}>
                レンズを比較して見る →
              </Link>
            )}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((p) => (
              <Link
                key={p.slug}
                href={`/gear/${p.slug}`}
                className="group flex items-start gap-4 rounded-[18px] p-5 transition hover:-translate-y-1"
                style={{ background: "var(--surface)", border: "1px solid var(--card-border)", boxShadow: "0 8px 22px rgba(40,70,120,.06)" }}
              >
                <span
                  className="w-[72px] h-[72px] shrink-0 rounded-full flex items-center justify-center overflow-hidden"
                  style={{ background: "radial-gradient(circle at 50% 45%,#eaf3f3 0%,#e3eef2 55%,#dde9f0 100%)" }}
                >
                  {p.illustration ? (
                    <Image src={p.illustration} alt="" width={64} height={64} className="w-16 h-16 object-contain" />
                  ) : (
                    <LineIcon name={p.icon} size={34} style={{ color: "var(--navy)" }} />
                  )}
                </span>
                <span className="block min-w-0">
                  <span className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold leading-snug" style={{ color: "var(--navy)" }}>{p.name}</h3>
                    {p.role === "副" && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded shrink-0" style={{ background: "var(--surface2)", color: "var(--accent2)" }}>観る</span>
                    )}
                  </span>
                  <span className="block text-sm" style={{ color: "var(--muted)" }}>{p.tagline}</span>
                  <span className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-bold" style={{ color: "var(--accent)" }}>
                    詳しく見る <span className="transition group-hover:translate-x-1">→</span>
                  </span>
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
