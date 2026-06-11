import type { Metadata } from "next";
import Link from "next/link";
import { GLOSSARY, GLOSSARY_CATEGORIES, termsByCategory } from "@/lib/glossary";
import { getProduct } from "@/lib/products";
import { LineIcon } from "@/components/icons";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "星空撮影の用語集｜ことばから機材と撮り方がわかる",
  description:
    "赤道儀・500ルール・コマ収差・暗順応など、星空撮影と天体観望でよく出てくる用語をやさしく解説。関連する機材・ガイド・ツールにもそのまま辿れます。",
};

const CATEGORY_IDS: Record<string, string> = {
  "機材のことば": "gear-words",
  "撮影のことば": "shooting-words",
  "空と天体のことば": "sky-words",
  "観る（観望）のことば": "viewing-words",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "星空撮影の用語集",
  url: `${SITE_URL}/glossary`,
  hasDefinedTerm: GLOSSARY.map((t) => ({
    "@type": "DefinedTerm",
    name: t.term,
    description: t.body,
    url: `${SITE_URL}/glossary#${t.id}`,
  })),
};

export default function Glossary() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="flex items-center gap-3">
        <LineIcon name="glossary" size={30} style={{ color: "var(--navy)" }} />
        <h1 className="text-2xl sm:text-3xl font-bold">星空撮影の用語集</h1>
      </div>
      <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        星空撮影や天体観望でよく出てくることばをまとめました。
        各用語からは、関連する機材・ガイド・ツールにもそのまま辿れます。
      </p>

      {/* カテゴリジャンプ */}
      <div className="mt-5 flex flex-wrap gap-2">
        {GLOSSARY_CATEGORIES.map((cat) => (
          <a
            key={cat}
            href={`#${CATEGORY_IDS[cat]}`}
            className="text-xs font-bold px-3 py-1.5 rounded-full transition hover:opacity-80"
            style={{ background: "var(--surface2)", color: "var(--accent)" }}
          >
            {cat}
          </a>
        ))}
      </div>

      {GLOSSARY_CATEGORIES.map((cat) => (
        <section key={cat} id={CATEGORY_IDS[cat]} className="mt-10 scroll-mt-20">
          <h2 className="text-lg font-black mb-4" style={{ color: "var(--navy)" }}>{cat}</h2>
          <div className="grid gap-4">
            {termsByCategory(cat).map((t) => {
              const gear = (t.gear ?? []).map(getProduct).filter((p) => p !== undefined);
              return (
                <article
                  key={t.id}
                  id={t.id}
                  className="rounded-[18px] p-5 sm:p-6 scroll-mt-20"
                  style={{ background: "var(--surface)", border: "1px solid var(--card-border)", boxShadow: "0 8px 22px rgba(40,70,120,.06)" }}
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <span
                      className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center"
                      style={{ background: "radial-gradient(circle at 50% 45%,#eaf3f3 0%,#e3eef2 55%,#dde9f0 100%)" }}
                    >
                      <LineIcon name={t.icon} size={22} style={{ color: "var(--navy)" }} />
                    </span>
                    <h3 className="font-bold text-base sm:text-lg leading-snug" style={{ color: "var(--navy)" }}>
                      {t.term}
                      {t.kana && (
                        <span className="ml-2 text-xs font-medium" style={{ color: "var(--muted2)" }}>{t.kana}</span>
                      )}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>{t.body}</p>

                  {(gear.length > 0 || (t.links?.length ?? 0) > 0) && (
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {gear.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/gear/${p.slug}`}
                          className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-full transition hover:opacity-80"
                          style={{ background: "var(--surface2)", color: "var(--accent)" }}
                        >
                          <LineIcon name={p.icon} size={13} className="shrink-0" />
                          {p.name.replace(/（.*?）/g, "").trim()}
                        </Link>
                      ))}
                      {t.links?.map((l) => (
                        <Link
                          key={l.href + l.label}
                          href={l.href}
                          className="inline-flex items-center text-[11px] px-2 py-1 rounded-full transition hover:opacity-80"
                          style={{ background: "var(--surface2)", color: "var(--ink-soft)" }}
                        >
                          {l.label} →
                        </Link>
                      ))}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      ))}

      <p className="mt-10 text-xs" style={{ color: "var(--muted)", opacity: 0.8 }}>
        ことばの説明は星空撮影での使われ方に絞った要約です。数値はいずれも目安で、機材・条件により変わります。
      </p>
    </div>
  );
}
