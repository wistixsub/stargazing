import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell, { Section } from "@/components/ArticleShell";

export const metadata: Metadata = {
  title: "ポータブル赤道儀は必要か｜要る人・要らない人の判断",
  description:
    "星空撮影でポータブル赤道儀が必要かどうかを用途別に解説。追尾の仕組み、長時間露光のメリット、極軸合わせや前景の流れといった注意点まで。",
  alternates: { canonical: "/guide/star-tracker" },
};

export default function Page() {
  return (
    <ArticleShell
      slug="guide/star-tracker"
      title="ポータブル赤道儀は必要か"
      lead="赤道儀は星を追尾して長時間露光を可能にする機材。淡い天の川や星雲を狙うなら強力ですが、全員に必須ではありません。要る人・要らない人を整理します。"
      datePublished="2026-06-06"
      related={[
        { href: "/guide/settings", label: "星空撮影の設定 完全ガイド" },
        { href: "/tools/500-rule", label: "500ルール計算機" },
        { href: "/guide/telescope-beginner", label: "【観る】はじめての天体望遠鏡の選び方" },
      ]}
    >
      <Section heading="赤道儀とは（追尾の仕組み）">
        地球の自転に合わせてカメラをゆっくり回し、星を点のまま追いかける装置。これにより
        <Link href="/tools/500-rule" className="underline mx-1" style={{ color: "var(--accent)" }}>500ルール</Link>
        の制限を超えて<strong style={{ color: "var(--text)" }}>長時間露光</strong>でき、暗い天体まで写せます。
      </Section>
      <Section heading="要らない人">
        <strong style={{ color: "var(--text)" }}>広角で短時間（数十秒以内）の星景がメイン</strong>なら、三脚だけで十分。まずは固定撮影で楽しみ、物足りなくなってからで遅くありません。
      </Section>
      <Section heading="要る人（メリット）">
        ・<strong style={{ color: "var(--text)" }}>淡い天の川・星雲をしっかり写したい</strong>／・<strong style={{ color: "var(--text)" }}>望遠で星を点にしたい</strong>／・ISOを下げてノイズを減らしたい。長時間露光で得られる情報量が段違いになります。
      </Section>
      <Section heading="注意点">
        ・使用前に<strong style={{ color: "var(--text)" }}>極軸合わせ</strong>（北極星方向に軸を向ける）が必要。<br />
        ・星を追尾する分<strong style={{ color: "var(--text)" }}>地上景は流れる</strong>→星と地上を別々に撮って合成、または短時間で妥協。<br />
        ・搭載重量に上限があるので機材重量を確認。
      </Section>
      <Section heading="次の一歩">
        赤道儀は<strong style={{ color: "var(--text)" }}>天体観望/望遠鏡でも使う機材</strong>です。「撮る」をさらに深めるか、いっそ「観る」へ広げるか——
        <Link href="/guide/telescope-beginner" className="underline mx-1" style={{ color: "var(--accent2)" }}>はじめての天体望遠鏡</Link>
        も覗いてみてください。
      </Section>
      <p className="text-xs" style={{ color: "var(--muted)", opacity: 0.7 }}>
        ※ 必要性は撮影対象・焦点距離・求める仕上がりで変わります。
      </p>
    </ArticleShell>
  );
}
