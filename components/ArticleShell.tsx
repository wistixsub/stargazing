import Link from "next/link";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export type RelatedLink = { href: string; label: string };

type Props = {
  slug: string;          // 例: "guide/settings"
  title: string;
  lead: string;
  datePublished?: string; // YYYY-MM-DD
  related?: RelatedLink[];
  children: React.ReactNode;
};

/** 記事共通シェル：パンくず・h1・リード・本文・関連リンク・Article/Breadcrumb JSON-LD。 */
export default function ArticleShell({ slug, title, lead, datePublished, related, children }: Props) {
  const url = `${SITE_URL}/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: title,
        description: lead,
        inLanguage: "ja",
        ...(datePublished ? { datePublished } : {}),
        mainEntityOfPage: url,
        publisher: { "@type": "Organization", name: SITE_NAME },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "ガイド", item: `${SITE_URL}/guide` },
          { "@type": "ListItem", position: 3, name: title, item: url },
        ],
      },
    ],
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="text-xs" style={{ color: "var(--muted)" }} aria-label="パンくず">
        <Link href="/" className="hover:underline">ホーム</Link> /{" "}
        <Link href="/guide" className="hover:underline">ガイド</Link> / {title}
      </nav>

      <h1 className="mt-3 text-2xl sm:text-3xl font-bold leading-tight">{title}</h1>
      <p className="mt-3 leading-relaxed" style={{ color: "var(--muted)" }}>{lead}</p>

      <div className="mt-8 space-y-6 leading-relaxed">{children}</div>

      {/* PR枠（収益動線・現在は募集中＝虚偽表示しない） */}
      <aside className="mt-10 rounded-lg border p-4" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ background: "var(--surface2)", color: "var(--accent2)" }}>PR枠</span>
          <span className="text-xs" style={{ color: "var(--muted)" }}>この記事のテーマに関連する機材・ショップ</span>
        </div>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          現在この枠は募集中です。撮影機材・光学機器メーカー／ショップ様は
          <Link href="/about#ads" className="underline mx-1" style={{ color: "var(--accent)" }}>掲載のご案内</Link>
          をご覧ください。
        </p>
      </aside>

      {related && related.length > 0 && (
        <section className="mt-12 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
          <h2 className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--muted)" }}>関連</h2>
          <ul className="space-y-2">
            {related.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="text-sm hover:underline" style={{ color: "var(--accent)" }}>
                  {r.label} →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}

/** 本文用の見出し付きセクション（h2＋本文）。 */
export function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-bold mb-2">{heading}</h2>
      <div className="text-sm" style={{ color: "var(--muted)" }}>{children}</div>
    </section>
  );
}
