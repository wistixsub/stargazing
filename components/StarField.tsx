// CSSだけで描く星空背景（外部画像・ライセンス不要の"当面しのぎ"ビジュアル）。
// 星の座標は決定論的に生成し、SSRとクライアントで一致させる（ハイドレーション不整合を回避）。
// フリー素材の実写ヒーローが用意できたら、この上に画像を重ねる or 差し替える前提。

// シンプルな決定論的擬似乱数（seed固定＝毎回同じ星空）。
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Props = {
  /** 星の数（密度）。 */
  count?: number;
  className?: string;
};

export default function StarField({ count = 80, className = "" }: Props) {
  const rand = mulberry32(20260610);
  const stars = Array.from({ length: count }, () => {
    const r = rand();
    const size = r < 0.85 ? 1 : r < 0.97 ? 2 : 3; // 大半は小さく、少数だけ大きく
    return {
      top: rand() * 100,
      left: rand() * 100,
      size,
      dur: 3 + rand() * 5, // 3〜8秒でゆらぐ
      delay: rand() * 6,
    };
  });

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {stars.map((s, i) => (
        <span
          key={i}
          className="starfield-star"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            // @ts-expect-error CSS custom properties
            "--dur": `${s.dur}s`,
            "--delay": `${s.delay}s`,
            boxShadow: s.size >= 3 ? "0 0 4px 1px rgba(255,255,255,0.6)" : undefined,
          }}
        />
      ))}
    </div>
  );
}
