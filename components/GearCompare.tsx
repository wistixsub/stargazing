"use client";

import { useState } from "react";
import Link from "next/link";

// カテゴリ横断で使える選択式比較表。列(cols)を選んで動的に絞り込む。行(rows)はカテゴリごとに渡す。
export type CompareCol = { slug: string; name: string; href: string; img?: string };
export type CompareRow = { label: string; values: Record<string, string> }; // slug → 値

const card: React.CSSProperties = {
  background: "var(--surface)",
  border: "1px solid var(--card-border)",
  boxShadow: "0 8px 22px rgba(40,70,120,.06)",
};

export default function GearCompare({
  cols,
  rows,
  noun = "アイテム",
}: {
  cols: CompareCol[];
  rows: CompareRow[];
  noun?: string;
}) {
  // 初期状態は全選択（SSGの初期HTMLに全列が載るのでSEO・JS無効でも内容が見える）。
  const [selected, setSelected] = useState<string[]>(() => cols.map((c) => c.slug));

  function toggle(slug: string) {
    setSelected((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  }

  // 元の並び順を保ったまま、選択中の列だけ抽出。
  const shown = cols.filter((c) => selected.includes(c.slug));

  return (
    <div>
      {/* 比べたい対象を選ぶチップ */}
      <div className="flex flex-wrap gap-2">
        {cols.map((c) => {
          const on = selected.includes(c.slug);
          return (
            <button
              key={c.slug}
              type="button"
              onClick={() => toggle(c.slug)}
              aria-pressed={on}
              className="text-xs font-bold px-3 py-1.5 rounded-full border transition hover:-translate-y-0.5"
              style={{
                borderColor: on ? "var(--accent)" : "var(--border)",
                background: on ? "var(--accent)" : "var(--surface)",
                color: on ? "#ffffff" : "var(--muted)",
              }}
            >
              {on ? "✓ " : ""}
              {c.name}
            </button>
          );
        })}
      </div>
      <p className="mt-2 text-xs" style={{ color: "var(--muted)" }}>
        比べたい{noun}を選ぶと、下の表が切り替わります（複数選択できます）。
      </p>

      {shown.length === 0 ? (
        <div className="mt-4 rounded-[18px] p-6 text-sm text-center" style={{ ...card, color: "var(--muted)" }}>
          比べたい{noun}を1つ以上選んでください。
        </div>
      ) : (
        <div className="mt-4 overflow-x-auto rounded-[18px]" style={card}>
          <table className="w-full text-sm" style={{ minWidth: Math.max(320, 140 + shown.length * 150) }}>
            <thead>
              <tr className="text-left text-xs" style={{ color: "var(--muted)" }}>
                <th className="px-4 py-3 font-semibold"> </th>
                {shown.map((c) => (
                  <th key={c.slug} className="px-4 py-3 font-bold align-bottom" style={{ color: "var(--navy)" }}>
                    <Link href={c.href} className="group block hover:underline">
                      {c.img && (
                        <span
                          className="mb-2 w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden"
                          style={{ background: "radial-gradient(circle at 50% 45%,#eaf3f3 0%,#e3eef2 55%,#dde9f0 100%)" }}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={c.img} alt={c.name} width={56} height={56} style={{ width: 56, height: 56, objectFit: "contain" }} loading="lazy" />
                        </span>
                      )}
                      {c.name}
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody style={{ color: "var(--ink-soft)" }}>
              {rows.map((row) => (
                <tr key={row.label} className="border-t" style={{ borderColor: "var(--border)" }}>
                  <td className="px-4 py-2.5 text-xs font-semibold whitespace-nowrap" style={{ color: "var(--muted)" }}>
                    {row.label}
                  </td>
                  {shown.map((c) => (
                    <td key={c.slug} className="px-4 py-2.5">
                      {row.values[c.slug] ?? "—"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
