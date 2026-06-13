"use client";

import { useState } from "react";
import Link from "next/link";

// サーバー側（page.tsx）で lib/products から組み立てて渡す、表示用のプレーンデータ。
export type LensCol = {
  slug: string;
  name: string; // 列見出し（短縮名）
  href: string;
  img?: string; // サムネイル画像URL（楽天等・任意）
  focal: string;
  focus: string;
  weight: string;
  mount: string;
  price: string;
};

const ROWS: { label: string; key: keyof Omit<LensCol, "slug" | "name" | "href"> }[] = [
  { label: "焦点距離 / F値", key: "focal" },
  { label: "フォーカス", key: "focus" },
  { label: "重量", key: "weight" },
  { label: "マウント", key: "mount" },
  { label: "実勢価格の目安", key: "price" },
];

const card: React.CSSProperties = {
  background: "var(--surface)",
  border: "1px solid var(--card-border)",
  boxShadow: "0 8px 22px rgba(40,70,120,.06)",
};

export default function LensCompare({ cols }: { cols: LensCol[] }) {
  // 初期状態は全選択（SSGの初期HTMLに全列が載るのでSEO・JS無効でも内容が見える）。
  const [selected, setSelected] = useState<string[]>(() => cols.map((c) => c.slug));

  function toggle(slug: string) {
    setSelected((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  }

  // 元の並び順を保ったまま、選択中の列だけ抽出。
  const shown = cols.filter((c) => selected.includes(c.slug));

  return (
    <div>
      {/* 比べたいレンズを選ぶチップ */}
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
        比べたいレンズを選ぶと、下の表が切り替わります（複数選択できます）。
      </p>

      {shown.length === 0 ? (
        <div className="mt-4 rounded-[18px] p-6 text-sm text-center" style={{ ...card, color: "var(--muted)" }}>
          比べたいレンズを1つ以上選んでください。
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
              {ROWS.map((row) => (
                <tr key={row.key} className="border-t" style={{ borderColor: "var(--border)" }}>
                  <td className="px-4 py-2.5 text-xs font-semibold whitespace-nowrap" style={{ color: "var(--muted)" }}>
                    {row.label}
                  </td>
                  {shown.map((c) => (
                    <td key={c.slug} className="px-4 py-2.5">
                      {c[row.key]}
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
