"use client";

import { useMemo, useState } from "react";
import { SYNODIC, moonAge, illumination } from "@/lib/moon";

const PHASES = [
  "新月", "三日月（上弦前）", "上弦の月", "十三夜（満月前）",
  "満月", "寝待月（満月後）", "下弦の月", "有明月（新月前）",
];

function phaseLabel(age: number): string {
  // 8区分（各 ~3.69日）。新月/満月付近は狭めに判定
  if (age < 1.0 || age > SYNODIC - 1.0) return "新月";
  if (Math.abs(age - SYNODIC / 2) < 1.0) return "満月";
  const idx = Math.floor((age / SYNODIC) * 8 + 0.5) % 8;
  return PHASES[idx];
}

function fmtDate(ms: number): string {
  const d = new Date(ms);
  const days = ["日", "月", "火", "水", "木", "金", "土"];
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日（${days[d.getDay()]}）`;
}

function nextNewMoons(fromMs: number, n: number): number[] {
  const out: number[] = [];
  // 現在の月齢から次の新月までの残り日数
  let t = fromMs + (SYNODIC - moonAge(fromMs)) * 86400000;
  for (let i = 0; i < n; i++) {
    out.push(t);
    t += SYNODIC * 86400000;
  }
  return out;
}

function todayInputValue(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export default function MoonCalc() {
  const [dateStr, setDateStr] = useState<string>(todayInputValue());

  const { age, label, illum, newMoons } = useMemo(() => {
    const [y, m, d] = dateStr.split("-").map(Number);
    const ms = new Date(y, (m || 1) - 1, d || 1, 21, 0, 0).getTime(); // その日の夜21時を代表値に
    const age = moonAge(ms);
    return {
      age,
      label: phaseLabel(age),
      illum: illumination(age),
      newMoons: nextNewMoons(Date.now(), 3),
    };
  }, [dateStr]);

  return (
    <div>
      <div className="rounded-xl border p-5" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
        <label className="block">
          <span className="text-sm" style={{ color: "var(--muted)" }}>日付</span>
          <input
            type="date"
            value={dateStr}
            onChange={(e) => setDateStr(e.target.value || todayInputValue())}
            className="mt-1 w-full rounded-lg px-3 py-2 text-lg outline-none"
            style={{ background: "var(--surface2)", color: "var(--text)", border: "1px solid var(--border)" }}
          />
        </label>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border p-5 text-center" style={{ borderColor: "var(--accent)", background: "var(--surface)" }}>
          <p className="text-sm" style={{ color: "var(--muted)" }}>月齢</p>
          <p className="text-4xl font-bold my-1" style={{ color: "var(--accent)" }}>{age.toFixed(1)}</p>
        </div>
        <div className="rounded-xl border p-5 text-center" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <p className="text-sm" style={{ color: "var(--muted)" }}>月の形</p>
          <p className="text-xl font-bold my-2" style={{ color: "var(--text)" }}>{label}</p>
        </div>
        <div className="rounded-xl border p-5 text-center" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <p className="text-sm" style={{ color: "var(--muted)" }}>輝面比（明るさ）</p>
          <p className="text-4xl font-bold my-1" style={{ color: "var(--accent2)" }}>{Math.round(illum * 100)}%</p>
        </div>
      </div>

      <div className="mt-4 rounded-xl border p-5" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
        <p className="text-sm font-bold mb-2">🌌 次の新月（天の川・星空の撮影適期）</p>
        <ul className="space-y-1 text-sm" style={{ color: "var(--muted)" }}>
          {newMoons.map((ms) => (
            <li key={ms}>・{fmtDate(ms)} 前後</li>
          ))}
        </ul>
        <p className="mt-2 text-xs" style={{ color: "var(--muted)", opacity: 0.7 }}>
          新月前後は月明かりが少なく、淡い天の川が写しやすい時期です。
        </p>
      </div>
    </div>
  );
}
