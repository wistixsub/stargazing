// 明け方テーマのヒーロー装飾（CSS/SVGのみ・外部画像ゼロ）。
// 星座線・流れ星・きらめきを、明るい空に映える濃色（紺/ゴールド）の線画で控えめに配置する。
export default function DawnSky() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1200 500"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      style={{ pointerEvents: "none" }}
    >
      {/* 星座線（左） */}
      <g stroke="#3a5a8c" strokeOpacity="0.35" strokeWidth="1.2" fill="none">
        <polyline points="60,90 130,60 210,110 250,70 320,120" />
        <polyline points="90,200 160,170 200,230 280,210" />
      </g>
      {/* 星座線（右） */}
      <g stroke="#c98f2e" strokeOpacity="0.4" strokeWidth="1.2" fill="none">
        <polyline points="1140,120 1060,90 1000,150 930,120 880,170" />
        <polyline points="1120,260 1040,240 1000,300" />
      </g>
      {/* 星座の結節点 */}
      <g fill="#3a5a8c" fillOpacity="0.5">
        {[
          [60, 90], [130, 60], [210, 110], [250, 70], [320, 120],
          [90, 200], [160, 170], [200, 230], [280, 210],
        ].map(([x, y], i) => (
          <circle key={`b${i}`} cx={x} cy={y} r="2.4" />
        ))}
      </g>
      <g fill="#c98f2e" fillOpacity="0.6">
        {[
          [1140, 120], [1060, 90], [1000, 150], [930, 120], [880, 170],
          [1120, 260], [1040, 240], [1000, 300],
        ].map(([x, y], i) => (
          <circle key={`g${i}`} cx={x} cy={y} r="2.4" />
        ))}
      </g>
      {/* きらめき（4本線の星） */}
      <g fill="#c98f2e" fillOpacity="0.7">
        <path d="M600 60 l4 14 14 4 -14 4 -4 14 -4 -14 -14 -4 14 -4 z" />
        <path d="M420 150 l3 9 9 3 -9 3 -3 9 -3 -9 -9 -3 9 -3 z" opacity="0.7" />
        <path d="M820 250 l3 9 9 3 -9 3 -3 9 -3 -9 -9 -3 9 -3 z" opacity="0.6" />
      </g>
      {/* 流れ星 */}
      <g stroke="#1f8fb0" strokeWidth="2" strokeLinecap="round">
        <line x1="700" y1="80" x2="760" y2="50" strokeOpacity="0.0" />
        <line x1="690" y1="95" x2="770" y2="55" strokeOpacity="0.55" />
      </g>
      <circle cx="772" cy="54" r="3" fill="#1f8fb0" fillOpacity="0.8" />
    </svg>
  );
}
