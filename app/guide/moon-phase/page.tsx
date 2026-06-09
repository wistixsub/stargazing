import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell, { Section } from "@/components/ArticleShell";

export const metadata: Metadata = {
  title: "月齢と撮影適期の考え方｜星空は新月、月は半月前後",
  description:
    "星空・天の川は月明かりに弱いので新月前後が狙い目。月の出入り時刻の使い方、逆に月そのものを撮るなら半月前後が良い理由まで、月齢と撮影適期を解説。",
  alternates: { canonical: "/guide/moon-phase" },
};

export default function Page() {
  return (
    <ArticleShell
      slug="guide/moon-phase"
      title="月齢と撮影適期の考え方"
      lead="星空撮影で最大の変数のひとつが「月明かり」。天の川は新月前後、月面そのものは半月前後——対象で狙う月齢が逆になります。"
      datePublished="2026-06-06"
      related={[
        { href: "/guide/milkyway-season", label: "天の川が見える時期と方角" },
        { href: "/guide/settings", label: "星空撮影の設定 完全ガイド" },
        { href: "/tools/500-rule", label: "500ルール計算機" },
      ]}
    >
      <Section heading="なぜ月齢が重要か">
        月は非常に明るく、満月期は空全体が明るくなって<strong style={{ color: "var(--text)" }}>淡い天の川や星雲はほぼ見えなく</strong>なります。星空・天の川狙いでは「月明かりをいかに避けるか」が成否を分けます。
      </Section>
      <Section heading="天の川・星空は新月前後">
        狙い目は<strong style={{ color: "var(--text)" }}>新月の前後数日</strong>。空が最も暗く、星が最も多く写ります。撮影計画はまず新月の日を起点に組むのが定石です。
      </Section>
      <Section heading="満月期でも「月が出ていない時間」を使う">
        新月に行けなくても、<strong style={{ color: "var(--text)" }}>月の出・月の入りの時刻</strong>を調べ、月が地平線の下にある時間帯を狙えば暗い空で撮れます。月齢だけでなく「今夜その時間に月が空にあるか」を確認しましょう。
      </Section>
      <Section heading="逆に、月そのものを撮るなら半月前後">
        月面を立体的に写したいなら満月は不向き（凹凸が消えてのっぺり）。<strong style={{ color: "var(--text)" }}>半月前後</strong>はクレーターに影が出て立体感が際立ちます。対象が変われば適期も逆になる、と覚えておくと便利です。
      </Section>
      <Section heading="適期の調べ方">
        月齢カレンダーや天文アプリで「新月の日」「当夜の月の出入り時刻」を確認。
        <Link href="/guide/milkyway-season" className="underline mx-1" style={{ color: "var(--accent)" }}>天の川の時期・方角</Link>
        と合わせて、暗い空×天の川の高度が両立する夜を選びます。
      </Section>
      <p className="text-xs" style={{ color: "var(--muted)", opacity: 0.7 }}>
        ※ 月の出入り時刻は日付・場所で変わります。当日の値を必ず確認してください。
      </p>
    </ArticleShell>
  );
}
