import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell, { Section } from "@/components/ArticleShell";

export const metadata: Metadata = {
  title: "天体観測用ライト SG-L02 ガイド｜なぜ赤色ライトが必要なのか",
  description:
    "ビクセン 天体観測用ライト SG-L02を例に、星見・星空撮影で赤色ライトが必須な理由（暗順応）を解説。555nmを避けた電球色LEDの意味、無段階調光の使いどころ、現場マナーまで。",
  alternates: { canonical: "/guide/sg-l02" },
};

export default function Page() {
  return (
    <ArticleShell
      slug="guide/sg-l02"
      title="赤色ライトはなぜ必要か：天体観測用ライト SG-L02 ガイド"
      lead="星空の現場で白いライトを点けると、自分の目と、周囲の撮影者の写真を同時に台無しにします。数千円で解決できる『暗順応』の話と、天体観測専用に設計されたSG-L02の使いどころを解説します。"
      datePublished="2026-06-10"
      related={[
        { href: "/gear/red-headlamp", label: "【ギア詳細】ビクセン 天体観測用ライト SG-L02" },
        { href: "/guide/tonight-sky", label: "季節別・見える星座と天体" },
        { href: "/guide/settings", label: "星空撮影の設定 完全ガイド" },
      ]}
    >
      <Section heading="暗順応：目は「暗闇仕様」になるまで15〜20分かかる">
        暗い場所に出ると、目は少しずつ感度を上げていきます。15〜20分でようやく淡い星まで見える「暗闇仕様」が完成——
        ところが<strong style={{ color: "var(--text)" }}>白いライトを一瞬浴びるだけでリセット</strong>され、また待ち直しです。
        スマホの画面も同罪。せっかく暗い空まで来たのに目が街仕様のまま、が初心者の定番の損です。
      </Section>
      <Section heading="赤い光なら暗順応を壊しにくい">
        目の暗所視は波長の短い光（青〜緑）に敏感で、<strong style={{ color: "var(--text)" }}>波長の長い赤い光には鈍感</strong>です。
        だから赤色ライトなら、手元を照らしても暗順応へのダメージが小さい。天文ファンが皆赤いライトを首から下げているのはこのためです。
      </Section>
      <Section heading="SG-L02の設計が「専用」たる理由">
        ビクセンのSG-L02は天体観測のためだけに設計されたライトで、ポイントは2つ：<br />
        ・<strong style={{ color: "var(--text)" }}>目が最も敏感な555nm付近の波長を避けた電球色LED</strong>＋赤色LEDの2色構成。地図やノートを「読める」明るさと暗順応保護を両立<br />
        ・<strong style={{ color: "var(--text)" }}>無段階調光</strong>。赤色は約0.28ルーメンまで絞れる——「手元がギリギリ見える最小光量」に合わせられるのが効く<br />
        本体約29g・IPX4防水（夜露に強い）・ストラップ2種＋クリップでヘッド／ネック／帽子と付け方を選べます。
      </Section>
      <Section heading="使い方の作法（現場マナー含む）">
        ① 現場に着いたら<strong style={{ color: "var(--text)" }}>最初から赤色・最小光量で</strong>点ける（白で点けてから切り替えでは遅い）<br />
        ② 長秒露光中の撮影者がいる方向には向けない——<strong style={{ color: "var(--text)" }}>他人の写真に自分のライトが写り込む</strong>のが現場で一番嫌われる失敗<br />
        ③ 自分の撮影中も消灯。レンズ前を横切る光はカブリの原因<br />
        ④ 充電池内蔵（USB充電）なので<strong style={{ color: "var(--text)" }}>出発前の充電を習慣に</strong>。長丁場はモバイルバッテリーを
      </Section>
      <Section heading="撮影でも観望でも、最初に買っていい一品">
        三脚やレンズと違って数千円で、効果は初日から体感できます。
        <Link href="/guide/tonight-sky" className="underline mx-1" style={{ color: "var(--accent)" }}>星座を眺める</Link>
        だけの夜でも、
        <Link href="/guide/settings" className="underline mx-1" style={{ color: "var(--accent)" }}>撮影の設定</Link>
        をいじる夜でも出番があります。「星空趣味で最初に買うべき物」を聞かれたら、赤色ライトと答えるのが当サイトの立場です。
      </Section>
      <p className="text-xs" style={{ color: "var(--muted)", opacity: 0.7 }}>
        ※ 仕様はメーカー公式情報に基づきます（<Link href="/gear/red-headlamp" className="underline mx-1">ギア詳細ページ</Link>の出典参照）。
      </p>
    </ArticleShell>
  );
}
