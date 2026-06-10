import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell, { Section } from "@/components/ArticleShell";

export const metadata: Metadata = {
  title: "プロソフトン クリアの効果と使い方｜星座が浮かぶ星景ソフトフィルター",
  description:
    "ケンコー PRO1D プロソフトン クリア(W)の星景写真での効果と使い方を解説。プロソフトン(A)との違い、フィルター径の選び方、効果が活きる構図、出目金レンズで使えない場合の対処まで。",
  alternates: { canonical: "/guide/prosofton-clear" },
};

export default function Page() {
  return (
    <ArticleShell
      slug="guide/prosofton-clear"
      title="プロソフトン クリアの効果と使い方"
      lead="星景写真を見て「星座の形がはっきり分かる」と感じたら、それはソフトフィルターの仕事かもしれません。風景をにじませず星だけを程よく浮かせる『プロソフトン クリア』の使いどころを解説します。"
      datePublished="2026-06-10"
      related={[
        { href: "/gear/soft-filter", label: "【ギア詳細】ケンコー プロソフトン クリア(W)" },
        { href: "/guide/lens", label: "星空向けレンズの選び方" },
        { href: "/guide/tonight-sky", label: "季節別・見える星座と天体" },
        { href: "/guide/settings", label: "星空撮影の設定 完全ガイド" },
      ]}
    >
      <Section heading="ソフトフィルターは何をしてくれるか">
        星は本来ただの点で、撮って出しでは<strong style={{ color: "var(--text)" }}>明るい星も暗い星も同じような点</strong>に写ります。
        ソフトフィルターを付けると明るい星ほど大きく滲み、<strong style={{ color: "var(--text)" }}>星の明るさの差＝星座の形</strong>が浮かび上がります。
        オリオン座や夏の大三角が「絵に描いたように」分かる星景写真の多くは、この効果です。
      </Section>
      <Section heading="「クリア」と従来の(A)の違い">
        従来のプロソフトン(A)はソフト効果がしっかりある反面、地上の風景まで柔らかくにじみます。
        <strong style={{ color: "var(--text)" }}>プロソフトン クリアはソフト効果が(A)の約半分</strong>。
        風景のディテールを保ったまま、明るい星だけ控えめに滲ませる設計で、
        <strong style={{ color: "var(--text)" }}>「風景はシャープ・星座は浮かす」が両立</strong>します。星景の最初の1枚にクリアが勧められるのはこのためです。
        逆に星をしっかり大きく滲ませた表現が好みなら(A)など強めを選びます。
      </Section>
      <Section heading="買う前に：フィルター径の確認">
        丸型のねじ込み式なので、<strong style={{ color: "var(--text)" }}>レンズ前面の「⌀」表記（例 ⌀77mm）に合うサイズ</strong>を選びます。
        複数レンズで使い回すなら、一番大きい径に合わせて買い、小さいレンズにはステップアップリングで装着する方法もあります。<br />
        注意点がひとつ：SAMYANG 14mm F2.8のような<strong style={{ color: "var(--text)" }}>前玉が出っ張った「出目金」レンズにはねじ込みフィルターが付けられません</strong>。
        その場合は角型フィルターホルダーが必要です（詳しくは
        <Link href="/guide/samyang-14mm" className="underline mx-1" style={{ color: "var(--accent)" }}>SAMYANG 14mmの記事</Link>参照）。
      </Section>
      <Section heading="効果が活きる構図">
        ソフトフィルターは「形の分かる星座」が主役のときに活きます：<br />
        ・冬：オリオン座・冬の大三角（明るい1等星が多く効果が出やすい）<br />
        ・夏：夏の大三角・さそり座<br />
        ・<strong style={{ color: "var(--text)" }}>月や強い街明かりが画面内にあると、そちらも滲んで悪目立ち</strong>するので構図から外すのが基本です。
        今の季節に何が見えるかは<Link href="/guide/tonight-sky" className="underline mx-1" style={{ color: "var(--accent)" }}>季節別ガイド</Link>へ。
      </Section>
      <Section heading="撮影時のポイント">
        ・設定は通常の星景と同じでOK（<Link href="/guide/settings" className="underline mx-1" style={{ color: "var(--accent)" }}>設定完全ガイド</Link>）。フィルターの有無で露出を大きく変える必要はありません<br />
        ・<strong style={{ color: "var(--text)" }}>ピントはフィルター装着後に確認</strong>。滲みで星が太って見えるため、ライブビュー拡大で「滲みの中心が最小」になる位置に<br />
        ・同じ構図で「あり／なし」を1枚ずつ撮っておくと、後で比較・選択できて失敗がない
      </Section>
      <p className="text-xs" style={{ color: "var(--muted)", opacity: 0.7 }}>
        ※ 製品仕様は<Link href="/gear/soft-filter" className="underline mx-1">ギア詳細ページ</Link>（メーカー公式出典）参照。効果の見え方はレンズ焦点距離・空の条件で変わります。
      </p>
    </ArticleShell>
  );
}
