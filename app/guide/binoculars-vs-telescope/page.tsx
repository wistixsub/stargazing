import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell, { Section } from "@/components/ArticleShell";

export const metadata: Metadata = {
  title: "双眼鏡 vs 望遠鏡｜天体観測の最初の1台はどっち？",
  description:
    "天体観測を始めるなら双眼鏡と望遠鏡どちらがいい？それぞれの長所・向く対象、7x50など倍率と口径の見方、最初の1台の選び方を比較して解説します。",
  alternates: { canonical: "/guide/binoculars-vs-telescope" },
};

export default function Page() {
  return (
    <ArticleShell
      slug="guide/binoculars-vs-telescope"
      title="双眼鏡 vs 望遠鏡（天体観測）"
      lead="観望デビューの1台は双眼鏡？望遠鏡？ 実は最初の1台に双眼鏡を選ぶ人は多いです。それぞれの得意・不得意を比べます。"
      datePublished="2026-06-06"
      related={[
        { href: "/guide/ascot-zr10x50", label: "実例：10×50双眼鏡で星空観望（アスコット）" },
        { href: "/guide/telescope-beginner", label: "はじめての天体望遠鏡の選び方" },
        { href: "/guide/telescope-aperture", label: "口径別・望遠鏡で見える天体の早見" },
        { href: "/guide/tonight-sky", label: "季節別・見える星座と天体" },
      ]}
    >
      <Section heading="結論：最初の1台に双眼鏡は“あり”">
        手軽で広い視野、両眼で見やすく、星団・天の川・月のクレーターまで楽しめます。<strong style={{ color: "var(--text)" }}>「まず星空に親しむ」段階では双眼鏡が好相性</strong>。惑星の模様まで踏み込みたくなったら望遠鏡へ、が自然な流れです。
      </Section>
      <Section heading="双眼鏡の長所">
        ・<strong style={{ color: "var(--text)" }}>手軽・すぐ使える</strong>（組立・調整ほぼ不要）／・<strong style={{ color: "var(--text)" }}>広視野</strong>で星団や天の川、星座の中を流すのが気持ちいい／・像が<strong style={{ color: "var(--text)" }}>正立</strong>で直感的／・両眼で疲れにくい。向く対象：月、星団、天の川、アンドロメダ銀河など広く淡いもの。
      </Section>
      <Section heading="望遠鏡の長所">
        ・<strong style={{ color: "var(--text)" }}>高倍率</strong>で惑星の模様・土星の環・月の細部まで／・大きな<strong style={{ color: "var(--text)" }}>口径＝集光力</strong>で暗い天体も。向く対象：惑星、月の地形、二重星、（大口径なら）星雲・銀河。
      </Section>
      <Section heading="倍率と口径の見方（双眼鏡）">
        双眼鏡の「<strong style={{ color: "var(--text)" }}>7×50</strong>」は<strong style={{ color: "var(--text)" }}>倍率7倍・口径50mm</strong>の意味。天体には手持ちでブレにくい<strong style={{ color: "var(--text)" }}>7〜10倍</strong>・集光力のある<strong style={{ color: "var(--text)" }}>口径42〜50mm</strong>が定番。高倍率の双眼鏡は手ブレが増えるので三脚前提になります。
      </Section>
      <Section heading="最初の選び方">
        ・とにかく気軽に星空を楽しみたい → <strong style={{ color: "var(--text)" }}>7×50 / 8×42 の双眼鏡</strong>。<br />
        ・惑星や土星の環を“観たい” → <strong style={{ color: "var(--text)" }}>望遠鏡</strong>（
        <Link href="/guide/telescope-beginner" className="underline mx-1" style={{ color: "var(--accent2)" }}>選び方はこちら</Link>
        ）。両方欲しくなったら、双眼鏡を普段使い＋望遠鏡を本命に、という人も多いです。
      </Section>
      <p className="text-xs" style={{ color: "var(--muted)", opacity: 0.7 }}>
        ※ 見え方は空の暗さ・機材の質・経験で変わります。一般的な目安としてご参照ください。
      </p>
    </ArticleShell>
  );
}
