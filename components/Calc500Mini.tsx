"use client";

// ホーム右カラムの500ルール簡易計算機（フル機能は /tools/500-rule）。
import { useState } from "react";

export default function Calc500Mini() {
  const [focal, setFocal] = useState("20");
  const [result, setResult] = useState<string>("25");

  const calc = (value: string) => {
    const f = parseFloat(value);
    setResult(!f || f <= 0 ? "—" : String(Math.round(500 / f)));
  };

  return (
    <div className="flex gap-[18px] items-stretch">
      <div className="flex-1 flex flex-col justify-end">
        <div className="flex gap-2">
          <input
            type="text"
            inputMode="decimal"
            value={focal}
            onChange={(e) => setFocal(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && calc(focal)}
            placeholder="焦点距離(mm)を入力"
            aria-label="焦点距離（mm）"
            className="flex-1 min-w-0 rounded-[9px] px-3 py-2.5 text-[13px] outline-none focus:ring-[3px]"
            style={{ border: "1px solid #d7e0ea", background: "#fff", color: "var(--text)", ["--tw-ring-color" as string]: "rgba(44,116,191,.14)" }}
          />
          <button
            onClick={() => calc(focal)}
            className="rounded-[9px] px-4 text-[13px] font-bold text-white whitespace-nowrap transition hover:brightness-105"
            style={{ background: "linear-gradient(180deg,#3a86cf,#2360a3)" }}
          >
            計算する
          </button>
        </div>
      </div>
      <div
        className="w-[150px] shrink-0 rounded-xl text-center px-2.5 py-3 flex flex-col justify-center"
        style={{ background: "linear-gradient(160deg,#eef5fc,#e4eef8)", border: "1px solid #dbe7f3" }}
      >
        <div className="text-[11px] font-semibold" style={{ color: "var(--muted)" }}>適正露光時間の目安</div>
        <div className="text-[34px] font-black leading-none mt-0.5" style={{ color: "var(--navy)" }}>
          {result}
          <small className="text-[15px] font-bold ml-0.5">秒</small>
        </div>
        <div className="text-[10px] mt-1" style={{ color: "var(--muted2)" }}>※500 ÷ 焦点距離</div>
      </div>
    </div>
  );
}
