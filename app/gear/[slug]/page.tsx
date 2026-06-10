import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, getProduct } from "@/lib/products";
import { getSamplesByGear } from "@/lib/samples";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { NETWORKS, affiliateClickUrl, impressionUrl } from "@/lib/affiliate";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: `${p.name}｜選び方と使い方`,
    description: `${p.tagline} ${p.forWho} 買う前の要点と、買ったあとの具体的な使い方、読者の作例をまとめました。`,
  };
}

export default async function GearDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const samples = getSamplesByGear(p.slug);
  const url = `${SITE_URL}/gear/${p.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: p.name,
        category: p.category,
        description: p.tagline,
        ...(p.image ? { image: `${SITE_URL}${p.image}` } : {}),
        brand: { "@type": "Brand", name: SITE_NAME },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "ギア", item: `${SITE_URL}/gear` },
          { "@type": "ListItem", position: 3, name: p.name, item: url },
        ],
      },
    ],
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-xs" style={{ color: "var(--muted)" }} aria-label="パンくず">
        <Link href="/" className="hover:underline">ホーム</Link> /{" "}
        <Link href="/gear" className="hover:underline">ギア</Link> / {p.category}
      </nav>

      <div className="mt-3 flex items-center gap-3">
        <span className="text-3xl">{p.emoji}</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-tight">{p.name}</h1>
      </div>
      <p className="mt-3 leading-relaxed" style={{ color: "var(--muted)" }}>{p.tagline}</p>
      <p className="mt-2 text-sm rounded-md px-3 py-2" style={{ background: "var(--surface2)", color: "var(--muted)" }}>
        <span style={{ color: "var(--accent)" }}>こんな人向け：</span>{p.forWho}
      </p>

      {/* 購入導線（核） */}
      <section className="mt-6 rounded-xl border p-5" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
        <h2 className="text-sm font-bold mb-2">購入を検討する</h2>
        <div className="flex flex-wrap gap-2">
          {p.affiliateKeyword ? (
            <>
              {NETWORKS.map((n) => (
                <a
                  key={n.key}
                  href={affiliateClickUrl(n, p.affiliateKeyword!)}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  className="rounded-lg px-4 py-2 text-sm font-bold"
                  style={{ background: "var(--accent)", color: "#06121a" }}
                >
                  {n.label} →
                </a>
              ))}
              <span className="rounded-lg px-4 py-2 text-sm" style={{ background: "var(--surface2)", color: "var(--muted)" }}>
                Amazon（準備中）
              </span>
              {NETWORKS.map((n) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={`imp-${n.key}`} src={impressionUrl(n)} width={1} height={1} alt="" style={{ border: "none" }} />
              ))}
            </>
          ) : (
            p.purchase.map((b) =>
              b.url ? (
                <a key={b.label} href={b.url} target="_blank" rel="nofollow sponsored noopener"
                  className="rounded-lg px-4 py-2 text-sm font-bold" style={{ background: "var(--accent)", color: "#06121a" }}>
                  {b.label} →
                </a>
              ) : (
                <span key={b.label} className="rounded-lg px-4 py-2 text-sm" style={{ background: "var(--surface2)", color: "var(--muted)" }}>
                  {b.label}
                </span>
              )
            )
          )}
        </div>
        <p className="mt-2 text-[11px]" style={{ color: "var(--muted)", opacity: 0.8 }}>
          ※購入リンクは広告（アフィリエイト）です。リンク先は各モールの検索結果ページです。価格・在庫は各販売店をご確認ください。
        </p>
      </section>

      {/* 買う前情報 */}
      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border p-4" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <h2 className="text-sm font-bold mb-2" style={{ color: "var(--accent)" }}>メリット</h2>
          <ul className="space-y-1.5 text-sm" style={{ color: "var(--muted)" }}>
            {p.pros.map((x, i) => <li key={i}>○ {x}</li>)}
          </ul>
        </div>
        <div className="rounded-lg border p-4" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <h2 className="text-sm font-bold mb-2" style={{ color: "var(--accent2)" }}>注意点</h2>
          <ul className="space-y-1.5 text-sm" style={{ color: "var(--muted)" }}>
            {p.cons.map((x, i) => <li key={i}>△ {x}</li>)}
          </ul>
        </div>
      </section>

      {/* スペック */}
      <section className="mt-6">
        <h2 className="text-lg font-bold mb-2">主なスペック</h2>
        <table className="w-full text-sm border-collapse">
          <tbody>
            {p.specs.map((s) => (
              <tr key={s.label} className="border-b" style={{ borderColor: "var(--border)" }}>
                <th className="text-left py-2 pr-4 font-medium align-top w-1/3" style={{ color: "var(--muted)" }}>{s.label}</th>
                <td className="py-2">{s.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {!p.verified && (
          <p className="mt-2 text-[11px]" style={{ color: "var(--muted)", opacity: 0.8 }}>
            ※スペックは代表値です。購入前に公式情報で必ずご確認ください（裏取り・更新を進めています）。
          </p>
        )}
        {p.sourceUrl && (
          <p className="mt-2 text-[11px]" style={{ color: "var(--muted)", opacity: 0.8 }}>
            出典：
            <a href={p.sourceUrl} target="_blank" rel="nofollow noopener" className="underline" style={{ color: "var(--accent)" }}>
              メーカー公式情報
            </a>
            （価格・仕様は変更される場合があります）
          </p>
        )}
      </section>

      {/* 使い方（買った後） */}
      <section className="mt-8">
        <h2 className="text-lg font-bold mb-3">具体的な使い方</h2>
        <div className="space-y-4">
          {p.usage.map((u) => (
            <div key={u.heading}>
              <h3 className="font-bold text-sm">{u.heading}</h3>
              <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>{u.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* この機材で撮られた作例（UGC・WEAR型の逆引き） */}
      <section className="mt-10">
        <h2 className="text-lg font-bold mb-1">この機材で撮られた作例</h2>
        <p className="text-xs mb-3" style={{ color: "var(--muted)" }}>読者が実際にこの機材で撮影した写真です。</p>
        {samples.length > 0 ? (
          <div className="grid gap-3 sm:grid-cols-3">
            {samples.map((s) => (
              <div key={s.id} className="rounded-lg border overflow-hidden" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                <div className="aspect-[4/3] flex items-center justify-center text-3xl" style={{ background: "var(--surface2)" }} aria-hidden="true">🌌</div>
                <div className="p-3">
                  <p className="text-sm font-medium leading-snug">{s.title}</p>
                  <p className="text-[11px] mt-1" style={{ color: "var(--muted)" }}>by {s.author}{s.location ? `・${s.location}` : ""}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm rounded-md px-3 py-3" style={{ background: "var(--surface2)", color: "var(--muted)" }}>
            まだ作例がありません。この機材で撮った写真を
            <Link href="/submit" className="underline mx-1" style={{ color: "var(--accent)" }}>投稿</Link>
            してみませんか？
          </p>
        )}
        <p className="mt-3 text-sm">
          <Link href="/submit" className="underline" style={{ color: "var(--accent)" }}>あなたの作例を投稿する →</Link>
        </p>
      </section>

      {/* 関連ガイド（集客導線） */}
      {p.relatedGuides.length > 0 && (
        <section className="mt-10 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
          <h2 className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--muted)" }}>関連ガイド</h2>
          <ul className="space-y-2">
            {p.relatedGuides.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="text-sm hover:underline" style={{ color: "var(--accent)" }}>{r.label} →</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
