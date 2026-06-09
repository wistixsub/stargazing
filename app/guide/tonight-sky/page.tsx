import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell, { Section } from "@/components/ArticleShell";

export const metadata: Metadata = {
  title: "季節別・見える星座と天体｜今夜は何が見える？（春夏秋冬の早見）",
  description:
    "今夜どの星座・天体が見えるかは季節で変わります。春夏秋冬それぞれの代表的な星座・星雲・銀河を早見でまとめ、双眼鏡・望遠鏡での楽しみ方も紹介します。",
  alternates: { canonical: "/guide/tonight-sky" },
};

export default function Page() {
  return (
    <ArticleShell
      slug="guide/tonight-sky"
      title="季節別・見える星座と天体（今夜は何が見える？）"
      lead="夜空は季節で主役が入れ替わります。春夏秋冬それぞれの代表的な星座・天体を早見にまとめました。今夜の空の“あたり”をつけるのに。"
      datePublished="2026-06-06"
      related={[
        { href: "/guide/telescope-aperture", label: "口径別・望遠鏡で見える天体の早見" },
        { href: "/guide/binoculars-vs-telescope", label: "双眼鏡 vs 望遠鏡（天体観測）" },
        { href: "/guide/milkyway-season", label: "天の川が見える時期と方角" },
      ]}
    >
      <Section heading="季節で“見える星”が変わる理由">
        地球が太陽の周りを回るため、夜に見える方向（星座）が季節でずれていきます。ざっくり以下が各季節の主役です（夜半ごろの目安）。
      </Section>
      <Section heading="🌸 春">
        しし座・おとめ座・うしかい座（春の大三角／アークトゥルス・スピカ）。系外<strong style={{ color: "var(--text)" }}>銀河</strong>が多い季節で、暗い空＋ある程度の口径があると楽しめます。
      </Section>
      <Section heading="☀️ 夏">
        さそり座・いて座、夏の大三角（ベガ・アルタイル・デネブ）。<strong style={{ color: "var(--text)" }}>天の川</strong>が濃く、干潟星雲などの星雲・星団が見頃。撮影も観望もハイシーズン。
      </Section>
      <Section heading="🍂 秋">
        ペガスス座（秋の四辺形）・アンドロメダ座。肉眼でも見える<strong style={{ color: "var(--text)" }}>アンドロメダ銀河（M31）</strong>が代表格。双眼鏡で淡い広がりを楽しめます。
      </Section>
      <Section heading="❄️ 冬">
        オリオン座・おうし座・冬の大三角。<strong style={{ color: "var(--text)" }}>オリオン大星雲（M42）</strong>や<strong style={{ color: "var(--text)" }}>すばる（プレアデス星団）</strong>など、双眼鏡でも見応えのある対象が揃います。
      </Section>
      <Section heading="観てみるには">
        広く淡い対象（星団・天の川・アンドロメダ）は
        <Link href="/guide/binoculars-vs-telescope" className="underline mx-1" style={{ color: "var(--accent2)" }}>双眼鏡</Link>
        が得意。惑星の模様や土星の環は
        <Link href="/guide/telescope-beginner" className="underline mx-1" style={{ color: "var(--accent2)" }}>望遠鏡</Link>
        の出番。口径ごとの見え方は
        <Link href="/guide/telescope-aperture" className="underline mx-1" style={{ color: "var(--accent2)" }}>口径別の早見</Link>
        を参照。
      </Section>
      <p className="text-xs" style={{ color: "var(--muted)", opacity: 0.7 }}>
        ※ 実際に見える時刻・高度は緯度・日付・時間帯で変わります。当夜はプラネタリウムアプリ等で確認を。
      </p>
    </ArticleShell>
  );
}
