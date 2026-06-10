import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell, { Section } from "@/components/ArticleShell";

export const metadata: Metadata = {
  title: "星空撮影の三脚選び実例：スリック ライトカーボン E83 II｜スペックの読み解き方",
  description:
    "星空撮影向け三脚の選び方を、スリック ライトカーボン E83 II（28mmカーボン3段・推奨積載5kg）を実例に解説。パイプ径・段数・積載量の読み解き方、赤道儀運用、現場でブレを抑える使い方まで。",
  alternates: { canonical: "/guide/slik-e83ii" },
};

export default function Page() {
  return (
    <ArticleShell
      slug="guide/slik-e83ii"
      title="星空向け三脚の選び方：ライトカーボン E83 IIを実例に"
      lead="星空写真の失敗の多くは、レンズでもカメラでもなく『土台』で起きます。数十秒の露光に耐える三脚をどう選ぶか——現行機のスリック ライトカーボン E83 IIを実例に、スペックの読み解き方を解説します。"
      datePublished="2026-06-10"
      related={[
        { href: "/gear/sturdy-tripod", label: "【ギア詳細】スリック ライトカーボン E83 II" },
        { href: "/guide/settings", label: "星空撮影の設定 完全ガイド" },
        { href: "/guide/star-tracker", label: "ポータブル赤道儀は必要か" },
      ]}
    >
      <Section heading="星空撮影で三脚が「主役級」である理由">
        星空撮影は<strong style={{ color: "var(--text)" }}>数十秒シャッターを開けっぱなしにする</strong>世界。その間にミリ単位の揺れがあれば、星は点でなく線や団子になります。
        昼間の撮影なら許される細い三脚が、星では歩留まりを直撃する——だから星空ではレンズより先に三脚に投資しろ、と言われるわけです。
      </Section>
      <Section heading="スペックはこの3つを読む">
        ・<strong style={{ color: "var(--text)" }}>パイプ径</strong>：剛性の根幹。星空用途なら25mm以上、できれば28mm級。E83 IIは<strong style={{ color: "var(--text)" }}>28mm</strong><br />
        ・<strong style={{ color: "var(--text)" }}>段数</strong>：少ないほど剛性が高い（継ぎ目＝弱点が減る）。E83 IIは<strong style={{ color: "var(--text)" }}>3段</strong>で、4段機より縮長は長い（675mm）が剛性に振った構成<br />
        ・<strong style={{ color: "var(--text)" }}>推奨積載質量</strong>：カメラ＋レンズ＋（将来の）赤道儀の合計で考える。E83 IIは<strong style={{ color: "var(--text)" }}>5kg</strong>＝フルサイズ＋明るい広角に加えて、
        <Link href="/gear/portable-star-tracker" className="underline mx-1" style={{ color: "var(--accent)" }}>スカイメモS</Link>
        級のポータブル赤道儀を載せる構成まで視野に入る
      </Section>
      <Section heading="カーボンを選ぶ意味は「軽さ」より「遠征」">
        E83 IIは1,925g。同剛性のアルミより数百g軽い程度ですが、星空撮影は<strong style={{ color: "var(--text)" }}>暗い場所まで歩く趣味</strong>です。
        駐車場から撮影地まで機材一式を担ぐとき、この差が遠征のハードルを下げます。価格（希望小売¥58,000・税別）はカーボンの宿命なので、
        遠征しない・車横付けが基本なら、重くて安いアルミ大型機も合理的な選択です。
      </Section>
      <Section heading="付属雲台と「自由雲台換装」の話">
        E83 IIには2ハンドル3ウェイ雲台（SH-706）が付属し、<strong style={{ color: "var(--text)" }}>分離可能</strong>です。
        3ウェイは構図をきっちり追い込めますが、暗闇で素早く空に向けるなら自由雲台が楽——星空勢に換装派が多い理由です。
        まず付属で始めて、不満が出たら換装、の順で十分です。
      </Section>
      <Section heading="現場でブレを殺す使い方（どの三脚でも共通）">
        ① 脚は<strong style={{ color: "var(--text)" }}>太い段から</strong>伸ばす（細い末端段とエレベーターは最後の手段）<br />
        ② 風の日は<strong style={{ color: "var(--text)" }}>センターフックにバッグを吊る</strong>して重心を下げる<br />
        ③ <strong style={{ color: "var(--text)" }}>電子先幕／ミラーアップ</strong>でシャッターショックを殺す<br />
        ④ シャッターは直接押さない——セルフタイマー2秒かリモートレリーズで（
        <Link href="/gear/intervalometer-release" className="underline mx-1" style={{ color: "var(--accent)" }}>レリーズの選び方</Link>）
      </Section>
      <p className="text-xs" style={{ color: "var(--muted)", opacity: 0.7 }}>
        ※ 仕様はメーカー公式情報に基づきます（<Link href="/gear/sturdy-tripod" className="underline mx-1">ギア詳細ページ</Link>の出典参照）。価格・仕様は変更される場合があります。
      </p>
    </ArticleShell>
  );
}
