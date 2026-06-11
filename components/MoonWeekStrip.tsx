"use client";

// ホーム右カラムの月齢ウィジェット（今日から7日分）。詳細は /tools/moon-calendar。
// 日付依存のためSSRとずれないよう、マウント後に計算して描画する。
import { useEffect, useState } from "react";
import { SYNODIC, moonAge, illumination } from "@/lib/moon";

type Day = { d: number; w: string; wd: number; p: number; waxing: boolean };

const WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"];

function moonStyle(p: number, waxing: boolean): React.CSSProperties {
  const base = "#22395a"; // 影の色
  const lit = "#d9e3f1"; // 光っている部分
  if (p < 0.06) return { background: base };
  if (p > 0.94) return { background: lit };
  // 光球の半径と中心位置を輝面比に応じて動かす近似表現（満ちる＝右側から、欠ける＝左側から）
  const r = Math.round(28 + p * 34);
  const cx = waxing ? Math.round(78 - p * 24) : Math.round(22 + p * 24);
  return {
    background: `radial-gradient(circle at ${cx}% 50%, ${lit} 0 ${r}%, rgba(217,227,241,0) ${r + 2}%), ${base}`,
  };
}

export default function MoonWeekStrip() {
  const [days, setDays] = useState<Day[] | null>(null);
  const [todayAge, setTodayAge] = useState<number | null>(null);

  useEffect(() => {
    const out: Day[] = [];
    const now = new Date();
    for (let i = 0; i < 7; i++) {
      const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i, 21, 0, 0); // 夜21時を代表値に
      const age = moonAge(d.getTime());
      out.push({
        d: d.getDate(),
        w: WEEKDAYS[d.getDay()],
        wd: d.getDay(),
        p: illumination(age),
        waxing: age < SYNODIC / 2,
      });
    }
    setDays(out);
    setTodayAge(moonAge(new Date(now.getFullYear(), now.getMonth(), now.getDate(), 21, 0, 0).getTime()));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-7 gap-1.5 text-center mt-1 min-h-[78px]">
        {days?.map((x) => (
          <div key={`${x.d}-${x.w}`}>
            <div className="text-[15px] font-extrabold leading-none" style={{ color: "var(--navy)" }}>{x.d}</div>
            <div
              className="text-[10.5px] mb-2"
              style={{ color: x.wd === 6 ? "#3f7fc6" : x.wd === 0 ? "#c66" : "var(--muted2)" }}
            >
              {x.w}
            </div>
            <div
              className="w-[30px] h-[30px] rounded-full mx-auto"
              style={{ boxShadow: "inset 0 0 0 1px rgba(0,0,0,.06)", ...moonStyle(x.p, x.waxing) }}
            />
          </div>
        ))}
      </div>
      <div className="text-center text-[13px] font-bold mt-4 tracking-wider" style={{ color: "var(--navy)" }}>
        {todayAge !== null ? `月齢 ${todayAge.toFixed(1)}` : "…"}
      </div>
    </div>
  );
}
