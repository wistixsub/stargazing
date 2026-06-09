import type { Metadata } from "next";
import Link from "next/link";
import MoonCalc from "./MoonCalc";

export const metadata: Metadata = {
  title: "月齢カレンダー｜今日の月齢と次の新月（星空撮影の適期）",
  description:
    "日付を入れるだけで月齢・月の形・輝面比がわかる月齢カレンダー。次の新月（天の川・星空撮影の適期）も表示。撮影計画の月明かり対策に。",
  alternates: { canonical: "/tools/moon-calendar" },
};

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-xs" style={{ color: "var(--muted)" }}>
        <Link href="/" className="hover:underline">ホーム</Link> / ツール / 月齢カレンダー
      </nav>
      <h1 className="mt-3 text-2xl sm:text-3xl font-bold">月齢カレンダー</h1>
      <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
        日付から月齢・月の形・明るさ（輝面比）を計算。星空撮影で重要な「次の新月」も表示します。
      </p>

      <div className="mt-6">
        <MoonCalc />
      </div>

      <section className="mt-10 space-y-6 leading-relaxed text-sm">
        <div>
          <h2 className="text-lg font-bold mb-2">なぜ月齢が撮影に効くのか</h2>
          <p style={{ color: "var(--muted)" }}>
            月は非常に明るく、満月期は空が明るくなって淡い天の川がほぼ見えません。
            <strong style={{ color: "var(--text)" }}>新月前後</strong>を狙うのが基本です。詳しくは
            <Link href="/guide/moon-phase" className="underline mx-1" style={{ color: "var(--accent)" }}>月齢と撮影適期の考え方</Link>
            をどうぞ。
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2">撮影計画の立て方</h2>
          <p style={{ color: "var(--muted)" }}>
            ①このカレンダーで次の新月を確認 → ②
            <Link href="/guide/milkyway-season" className="underline mx-1" style={{ color: "var(--accent)" }}>天の川の時期・方角</Link>
            で対象の高度を確認 → ③
            <Link href="/tools/500-rule" className="underline mx-1" style={{ color: "var(--accent)" }}>500ルール計算機</Link>
            で露光を決める、の順がスムーズです。
          </p>
        </div>
      </section>

      <p className="mt-10 text-xs" style={{ color: "var(--muted)", opacity: 0.7 }}>
        ※ 月齢は簡易計算による目安です（朔望月平均で算出）。正確な新月時刻・月の出入りは天文台や天文アプリでご確認ください。
      </p>
    </article>
  );
}
