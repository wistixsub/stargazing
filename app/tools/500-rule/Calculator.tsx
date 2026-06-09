"use client";

import { useMemo, useState } from "react";

const SENSORS: { label: string; crop: number }[] = [
  { label: "フルサイズ", crop: 1.0 },
  { label: "APS-C（Canon）", crop: 1.6 },
  { label: "APS-C（ニコン/ソニー/富士）", crop: 1.5 },
  { label: "マイクロフォーサーズ", crop: 2.0 },
  { label: "1インチ", crop: 2.7 },
];

function fmt(sec: number): string {
  if (!isFinite(sec) || sec <= 0) return "—";
  return sec >= 10 ? `${sec.toFixed(0)}秒` : `${sec.toFixed(1)}秒`;
}

export default function Calculator() {
  const [focal, setFocal] = useState<number>(24);
  const [cropIdx, setCropIdx] = useState<number>(0);

  const crop = SENSORS[cropIdx].crop;
  const { equiv, rule500, rule300 } = useMemo(() => {
    const equiv = focal * crop;
    return { equiv, rule500: 500 / equiv, rule300: 300 / equiv };
  }, [focal, crop]);

  return (
    <div>
      {/* 入力 */}
      <div className="rounded-xl border p-5 grid gap-4 sm:grid-cols-2"
        style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
        <label className="block">
          <span className="text-sm" style={{ color: "var(--muted)" }}>焦点距離（mm）</span>
          <input
            type="number"
            min={1}
            value={focal}
            onChange={(e) => setFocal(Math.max(1, Number(e.target.value) || 0))}
            className="mt-1 w-full rounded-lg px-3 py-2 text-lg font-bold outline-none"
            style={{ background: "var(--surface2)", color: "var(--text)", border: "1px solid var(--border)" }}
          />
        </label>
        <label className="block">
          <span className="text-sm" style={{ color: "var(--muted)" }}>センサーサイズ</span>
          <select
            value={cropIdx}
            onChange={(e) => setCropIdx(Number(e.target.value))}
            className="mt-1 w-full rounded-lg px-3 py-2 text-lg outline-none"
            style={{ background: "var(--surface2)", color: "var(--text)", border: "1px solid var(--border)" }}
          >
            {SENSORS.map((s, i) => (
              <option key={s.label} value={i}>{s.label}（×{s.crop}）</option>
            ))}
          </select>
        </label>
      </div>

      {/* 結果 */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border p-5 text-center" style={{ borderColor: "var(--accent)", background: "var(--surface)" }}>
          <p className="text-sm" style={{ color: "var(--muted)" }}>500ルール（目安）</p>
          <p className="text-4xl font-bold my-1" style={{ color: "var(--accent)" }}>{fmt(rule500)}</p>
          <p className="text-xs" style={{ color: "var(--muted)" }}>これより長いと星が流れ始めます</p>
        </div>
        <div className="rounded-xl border p-5 text-center" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <p className="text-sm" style={{ color: "var(--muted)" }}>300ルール（高画素向け・厳しめ）</p>
          <p className="text-4xl font-bold my-1" style={{ color: "var(--accent2)" }}>{fmt(rule300)}</p>
          <p className="text-xs" style={{ color: "var(--muted)" }}>等倍で点像にしたい時の目安</p>
        </div>
      </div>

      <p className="mt-3 text-sm" style={{ color: "var(--muted)" }}>
        35mm換算焦点距離 = {focal}mm × {crop} = <strong style={{ color: "var(--text)" }}>{equiv.toFixed(0)}mm</strong>
        （500 ÷ 換算焦点距離 で算出）
      </p>
    </div>
  );
}
