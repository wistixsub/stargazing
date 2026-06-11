// 線画アイコンセット。トップページのデザイン素材（ネイビー線画・丸端ストローク）と
// 同じ視覚言語で、素材庫に無い機材・天体モチーフを補うためのSVG。
// 色は currentColor（親の color で制御。基本は var(--navy)、チップ内では accent）。

import type { CSSProperties, ReactNode } from "react";

export type IconName =
  | "mount"        // 赤道儀（ウェッジ＋三脚）
  | "lens"         // 広角レンズ
  | "tripod"       // 三脚
  | "flashlight"   // 赤色ライト
  | "timer"        // インターバルレリーズ（ストップウォッチ）
  | "filter"       // ソフトフィルター
  | "binoculars"   // 双眼鏡
  | "telescope"    // 望遠鏡
  | "camera"       // カメラ
  | "sliders"      // 撮影設定
  | "smartphone"   // スマホ
  | "moon"         // 月
  | "planet"       // 惑星（土星）
  | "constellation"// 星座
  | "milkyway"     // 天の川
  | "glossary";    // 用語集（しおり付きの本）

const PATHS: Record<IconName, ReactNode> = {
  mount: (
    <>
      <path d="M7.5 13.5 h9 V7 Z" />
      <circle cx="13.8" cy="11.2" r="1.1" />
      <path d="M9.5 13.5 7.5 20" />
      <path d="M14.5 13.5 16.5 20" />
      <path d="M12 13.5 V20" />
    </>
  ),
  lens: (
    <>
      <circle cx="12" cy="12" r="7.2" />
      <circle cx="12" cy="12" r="3.4" />
      <path d="M7.9 9.6 a5 5 0 0 1 2.2 -2.1" />
    </>
  ),
  tripod: (
    <>
      <path d="M10.3 4 h3.4 v3.2 h-3.4 Z" />
      <path d="M12 7.2 v3.2" />
      <path d="M12 10.4 6.8 20" />
      <path d="M12 10.4 17.2 20" />
      <path d="M12 10.4 V20" />
    </>
  ),
  flashlight: (
    <>
      <path d="M9.3 3.5 h5.4 v2.8 l-1.2 2.2 v8 a1.5 1.5 0 0 1 -3 0 v-8 L9.3 6.3 Z" />
      <path d="M12 10.5 v1.8" />
      <path d="M6.2 5.2 7.7 6.3" />
      <path d="M17.8 5.2 16.3 6.3" />
    </>
  ),
  timer: (
    <>
      <circle cx="12" cy="13.5" r="6.3" />
      <path d="M10.4 3.5 h3.2" />
      <path d="M12 3.5 v3.7" />
      <path d="M12 13.5 14.8 11" />
    </>
  ),
  filter: (
    <>
      <circle cx="11.3" cy="12.7" r="7" />
      <circle cx="11.3" cy="12.7" r="4.4" />
      <path d="M18.7 3.4 l.6 1.5 1.5 .6 -1.5 .6 -.6 1.5 -.6 -1.5 -1.5 -.6 1.5 -.6 Z" fill="currentColor" stroke="none" />
    </>
  ),
  binoculars: (
    <>
      <path d="M5.5 15.5 v-6.5 a2.5 2.5 0 0 1 5 0 v6.5 a2.5 2.5 0 0 1 -5 0 Z" />
      <path d="M13.5 15.5 v-6.5 a2.5 2.5 0 0 1 5 0 v6.5 a2.5 2.5 0 0 1 -5 0 Z" />
      <path d="M10.5 11.5 h3" />
    </>
  ),
  telescope: (
    <>
      <path d="M5 9.6 16.4 4.4 18.4 8.6 7 13.8 Z" />
      <path d="M12.6 13 9.4 20.5" />
      <path d="M13.6 12.6 17.2 20" />
    </>
  ),
  camera: (
    <>
      <rect x="3.8" y="7.5" width="16.4" height="11" rx="2" />
      <path d="M9 7.5 10.3 5.2 h3.4 L15 7.5" />
      <circle cx="12" cy="13" r="3.3" />
    </>
  ),
  sliders: (
    <>
      <path d="M5 7 h14" />
      <path d="M5 12 h14" />
      <path d="M5 17 h14" />
      <circle cx="10" cy="7" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="15.2" cy="12" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="8" cy="17" r="1.8" fill="currentColor" stroke="none" />
    </>
  ),
  smartphone: (
    <>
      <rect x="7.8" y="3.2" width="8.4" height="17.6" rx="2.2" />
      <path d="M10.8 5.9 h2.4" />
      <path d="M12 9.8 l.8 2 2 .8 -2 .8 -.8 2 -.8 -2 -2 -.8 2 -.8 Z" fill="currentColor" stroke="none" />
    </>
  ),
  moon: (
    <path d="M20.8 13.2 A8.8 8.8 0 1 1 10.8 3.2 6.9 6.9 0 0 0 20.8 13.2 Z" />
  ),
  planet: (
    <>
      <circle cx="12" cy="12" r="5" />
      <ellipse cx="12" cy="12" rx="9.3" ry="3.4" transform="rotate(-18 12 12)" />
    </>
  ),
  constellation: (
    <>
      <path d="M5.5 16.5 10 8 15.5 12.5 19 5.5" strokeDasharray="2.4 3" />
      <circle cx="5.5" cy="16.5" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="10" cy="8" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="12.5" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="19" cy="5.5" r="1.3" fill="currentColor" stroke="none" />
    </>
  ),
  milkyway: (
    <>
      <path d="M4 17.5 A10.7 10.7 0 0 1 20 17.5" />
      <path d="M12 4 l.7 1.7 1.7 .7 -1.7 .7 -.7 1.7 -.7 -1.7 -1.7 -.7 1.7 -.7 Z" fill="currentColor" stroke="none" />
      <circle cx="6" cy="10.6" r="1" fill="currentColor" stroke="none" />
      <circle cx="18" cy="10.6" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  glossary: (
    <>
      <path d="M6.5 2.5 H19.5 v19 H6.5 A2.5 2.5 0 0 1 4 19 v-14 A2.5 2.5 0 0 1 6.5 2.5 Z" />
      <path d="M4 19 a2.5 2.5 0 0 1 2.5 -2.5 H19.5" />
      <path d="M10 2.5 v7.5 l2.5 -1.8 2.5 1.8 V2.5" />
    </>
  ),
};

export function LineIcon({
  name,
  size = 24,
  className,
  style,
}: {
  name: IconName;
  size?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
