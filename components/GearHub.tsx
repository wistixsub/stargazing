// カテゴリの「紹介ページ」共通レイアウト。並列の商品紹介（順位づけなし）＋選択式比較表。
// レンズ・赤道儀・三脚など各カテゴリのページから設定を渡して使う。
import Link from "next/link";
import GearImage from "@/components/GearImage";
import GearCompare, { type CompareRow, type CompareCol } from "@/components/GearCompare";
import { gearImageSrc } from "@/lib/productImages";
import { LineIcon, type IconName } from "@/components/icons";
import { SITE_URL } from "@/lib/site";
import type { Product } from "@/lib/products";

export type HubItem = { p: Product; intro: string };

const card: React.CSSProperties = {
  background: "var(--surface)",
  border: "1px solid var(--card-border)",
  boxShadow: "0 8px 22px rgba(40,70,120,.06)",
};

export default function GearHub({
  icon,
  title,
  breadcrumb,
  lead,
  items,
  rows,
  compareNoun,
  notes,
  related,
}: {
  icon: IconName;
  title: string;
  breadcrumb: string;
  lead: React.ReactNode;
  items: HubItem[];
  rows: CompareRow[];
  compareNoun: string;
  notes?: React.ReactNode;
  related: { href: string; label: string }[];
}) {
  const cols: CompareCol[] = items.map(({ p }) => ({
    slug: p.slug,
    name: p.name.replace(/（.*?）/g, ""),
    href: `/gear/${p.slug}`,
    img: gearImageSrc(p) ?? undefined,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    itemListElement: items.map(({ p }, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `${SITE_URL}/gear/${p.slug}`,
    })),
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-xs" style={{ color: "var(--muted)" }} aria-label="パンくず">
        <Link href="/" className="hover:underline">ホーム</Link> /{" "}
        <Link href="/gear" className="hover:underline">ギア</Link> / {breadcrumb}
      </nav>

      <div className="mt-3 flex items-center gap-3">
        <LineIcon name={icon} size={30} style={{ color: "var(--navy)" }} />
        <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
      </div>
      <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{lead}</p>

      {/* 各商品の紹介（並列・順位づけなし） */}
      <div className="mt-8 grid gap-4">
        {items.map(({ p, intro }) => (
          <div key={p.slug} className="rounded-[18px] p-5 sm:p-6" style={card}>
            <Link href={`/gear/${p.slug}`} className="group flex items-center gap-3">
              <span
                className="w-14 h-14 shrink-0 rounded-full flex items-center justify-center overflow-hidden"
                style={{ background: "radial-gradient(circle at 50% 45%,#eaf3f3 0%,#e3eef2 55%,#dde9f0 100%)" }}
              >
                <GearImage src={gearImageSrc(p)} alt={p.name} icon={p.icon} size={52} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-bold leading-snug" style={{ color: "var(--navy)" }}>{p.name}</span>
                <span className="block text-xs mt-0.5" style={{ color: "var(--muted)" }}>{p.tagline}</span>
              </span>
              <span className="ml-auto shrink-0 text-xs font-bold" style={{ color: "var(--accent)" }}>
                詳しく <span className="inline-block transition group-hover:translate-x-1">→</span>
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>{intro}</p>
          </div>
        ))}
      </div>

      {/* 比較表（選択式） */}
      <h2 className="mt-12 text-lg font-black" style={{ color: "var(--navy)" }}>{compareNoun}を選んで比較</h2>
      <div className="mt-4">
        <GearCompare cols={cols} rows={rows} noun={compareNoun} />
      </div>

      {notes && (
        <div className="mt-8 rounded-[18px] p-5 text-sm leading-relaxed" style={{ ...card, color: "var(--muted)" }}>
          {notes}
        </div>
      )}

      {related.length > 0 && (
        <section className="mt-10 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
          <h2 className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--muted)" }}>関連</h2>
          <ul className="space-y-2">
            {related.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="text-sm hover:underline" style={{ color: "var(--accent)" }}>{r.label} →</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
