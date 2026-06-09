import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell, { Section } from "@/components/ArticleShell";

export const metadata: Metadata = {
  title: "天の川が見える時期と方角｜日本でいつ・どこを見ればいいか",
  description:
    "日本で天の川（銀河の中心方向）が見える時期・時間帯・方角の早見。新月・光害・撮影適期の考え方と、撮影設定への繋ぎ方を解説します。",
  alternates: { canonical: "/guide/milkyway-season" },
};

export default function Page() {
  return (
    <ArticleShell
      slug="guide/milkyway-season"
      title="天の川が見える時期と方角（日本）"
      lead="天の川のいちばん濃い「銀河中心方向」は、日本では春〜秋に見やすくなります。時期・時間・方角・月齢のポイントを早見でまとめました。"
      datePublished="2026-06-06"
      related={[
        { href: "/guide/settings", label: "星空撮影の設定 完全ガイド" },
        { href: "/tools/500-rule", label: "500ルール計算機" },
        { href: "/guide/smartphone", label: "スマホで星空を撮る方法" },
      ]}
    >
      <Section heading="見頃の時期">
        濃い天の川（銀河中心＝いて座方向）が狙えるのは、日本ではおおむね
        <strong style={{ color: "var(--text)" }}>春の明け方〜夏の夜〜秋の宵</strong>。特に<strong style={{ color: "var(--text)" }}>初夏〜夏</strong>は夜の早い時間に高く昇り狙いやすい時期です。冬は銀河中心が地平下のため淡くなります。
      </Section>
      <Section heading="見える方角・高度">
        銀河中心方向は<strong style={{ color: "var(--text)" }}>南〜南東の低空から昇り、南の空</strong>へ。低空は大気と光害で淡くなるため、<strong style={{ color: "var(--text)" }}>ある程度高く昇った時間帯</strong>が見やすくなります。南側が開けて暗い場所が理想です。
      </Section>
      <Section heading="時間帯と月齢（ここが最重要）">
        鍵は<strong style={{ color: "var(--text)" }}>月明かりが無いこと</strong>。<strong style={{ color: "var(--text)" }}>新月前後</strong>、または月が沈んでいる時間を狙います。満月期は空が明るく天の川はほぼ見えません。月齢カレンダーで新月の日を確認しましょう。
      </Section>
      <Section heading="撮影地：光害の少ない場所へ">
        天の川は都市の明かりに弱いので、<strong style={{ color: "var(--text)" }}>街明かりから離れた暗い空</strong>へ。光害マップで暗いエリアを探し、南方向に街がない場所を選ぶと写りやすくなります。
      </Section>
      <Section heading="撮影設定への繋ぎ">
        条件が揃ったら、設定は
        <Link href="/guide/settings" className="underline mx-1" style={{ color: "var(--accent)" }}>星空撮影の設定ガイド</Link>
        を参照。露光時間は
        <Link href="/tools/500-rule" className="underline mx-1" style={{ color: "var(--accent)" }}>500ルール計算機</Link>
        で。淡い中心部まで写すなら追尾（ポータブル赤道儀）も有効です。
      </Section>
      <p className="text-xs" style={{ color: "var(--muted)", opacity: 0.7 }}>
        ※ 見頃は緯度・地形・その年の月齢で前後します。出発前にプラネタリウムアプリ等で当日の天の川の位置と月齢を確認してください。
      </p>
    </ArticleShell>
  );
}
