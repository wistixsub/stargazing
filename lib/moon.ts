// 月齢計算（朔望月ベースの近似）。/tools/moon-calendar とホームの月齢ウィジェットで共用。

export const SYNODIC = 29.530588853; // 朔望月（日）
export const REF = Date.UTC(2000, 0, 6, 18, 14, 0); // 既知の新月（2000-01-06 18:14 UTC）

export function moonAge(ms: number): number {
  let age = ((ms - REF) / 86400000) % SYNODIC;
  if (age < 0) age += SYNODIC;
  return age;
}

/** 輝面比（0=新月〜1=満月） */
export function illumination(age: number): number {
  return (1 - Math.cos((2 * Math.PI * age) / SYNODIC)) / 2;
}
