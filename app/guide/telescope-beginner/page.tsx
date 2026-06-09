import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell, { Section } from "@/components/ArticleShell";

export const metadata: Metadata = {
  title: "はじめての天体望遠鏡の選び方｜種類・架台・口径の基本",
  description:
    "天体観望デビュー向けに、望遠鏡の種類（屈折/反射/カタディオプトリック）・架台（経緯台/赤道儀）・口径の考え方と、初心者の選び方の指針、倍率の罠までやさしく解説。",
  alternates: { canonical: "/guide/telescope-beginner" },
};

export default function Page() {
  return (
    <ArticleShell
      slug="guide/telescope-beginner"
      title="はじめての天体望遠鏡の選び方"
      lead="星空を「撮る」だけでなく「観る」のも楽しいもの。初めての天体望遠鏡を、種類・架台・口径の3点から、初心者がつまずかない順で解説します。"
      datePublished="2026-06-06"
      related={[
        { href: "/guide/telescope-aperture", label: "口径別・望遠鏡で見える天体の早見" },
        { href: "/guide/star-tracker", label: "ポータブル赤道儀は必要か（撮影）" },
        { href: "/guide/milkyway-season", label: "天の川が見える時期と方角" },
      ]}
    >
      <Section heading="「撮る」から「観る」へ">
        カメラで星を撮れるようになると、次は「肉眼で見たらどう見える？」が気になります。望遠鏡は月のクレーターや土星の環をその場で“観る”体験ができ、撮影とはまた違う感動があります。
      </Section>
      <Section heading="望遠鏡の種類">
        ・<strong style={{ color: "var(--text)" }}>屈折式</strong>：レンズ式。扱いやすくメンテ少・月惑星向き。入門の定番。<br />
        ・<strong style={{ color: "var(--text)" }}>反射式（ニュートン）</strong>：鏡式。同じ口径なら割安で大口径にしやすい（星雲星団向き）。たまに光軸調整。<br />
        ・<strong style={{ color: "var(--text)" }}>カタディオプトリック</strong>：レンズ＋鏡。コンパクトで高倍率向き・やや高価。
      </Section>
      <Section heading="架台（土台）が観やすさを左右する">
        ・<strong style={{ color: "var(--text)" }}>経緯台</strong>：上下左右に動く直感操作。手軽で初心者向き（ドブソニアン＝大口径反射＋経緯台も人気）。<br />
        ・<strong style={{ color: "var(--text)" }}>赤道儀</strong>：天体の動きを追尾しやすい。撮影や高倍率に有利だが設置がやや手間。
      </Section>
      <Section heading="一番大事なのは口径">
        口径（レンズ/鏡の直径）が大きいほど<strong style={{ color: "var(--text)" }}>集光力</strong>が増し、暗い天体まで見え、像も精細に。どの天体が見えるかは
        <Link href="/guide/telescope-aperture" className="underline mx-1" style={{ color: "var(--accent2)" }}>口径別の早見</Link>
        を参照。「倍率」より「口径」を優先して選びます。
      </Section>
      <Section heading="初心者の指針・倍率の罠">
        迷ったら<strong style={{ color: "var(--text)" }}>「扱いやすい小〜中口径の屈折＋経緯台」</strong>か<strong style={{ color: "var(--text)" }}>「入門ドブソニアン」</strong>が無難。<br />
        注意：「<strong style={{ color: "var(--text)" }}>○○倍！</strong>」を売りにする製品に注意。過度な高倍率は像が暗く不鮮明になるだけ。実用上限は口径(mm)×2倍が目安です。
      </Section>
      <p className="text-xs" style={{ color: "var(--muted)", opacity: 0.7 }}>
        ※ 最適な機種は予算・観たい対象・持ち運び条件で変わります。本記事は一般的な選び方の指針です。
      </p>
    </ArticleShell>
  );
}
