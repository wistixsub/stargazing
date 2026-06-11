import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell, { Section } from "@/components/ArticleShell";

export const metadata: Metadata = {
  title: "星空撮影の設定 完全ガイド｜ISO・絞り・シャッタースピードの決め方",
  description:
    "星空撮影の基本設定（ISO・絞り・シャッタースピード）の決め方を順番に解説。星が流れない露光時間の出し方、ピントの合わせ方、よくある失敗まで初心者向けに。",
  alternates: { canonical: "/guide/settings" },
};

export default function Page() {
  return (
    <ArticleShell
      slug="guide/settings"
      title="星空撮影の設定 完全ガイド（ISO・絞り・シャッタースピード）"
      lead="星空撮影は「絞り→シャッタースピード→ISO」の順で決めると迷いません。各設定の意味と目安、点で写すコツを順番に解説します。"
      datePublished="2026-06-06"
      related={[
        { href: "/guide/beginner", label: "全体の流れから知りたい人へ：星空撮影の始め方【初心者完全ガイド】" },
        { href: "/tools/500-rule", label: "500ルール計算機で最大SSを計算する" },
        { href: "/guide/milkyway-season", label: "天の川が見える時期と方角" },
        { href: "/guide/smartphone", label: "スマホで星空を撮る方法" },
      ]}
    >
      <Section heading="① 絞り：できるだけ開ける（F2.8〜F4目安）">
        星は暗いので、まずレンズの<strong style={{ color: "var(--text)" }}>絞りを開放〜1段絞った辺り</strong>（F2.8やF4）にして、できるだけ多くの光を取り込みます。開放で周辺が甘い場合は1段だけ絞ると改善します。
      </Section>
      <Section heading="② シャッタースピード：星が流れない上限で">
        地球の自転で、長く開けると星は線状に流れます。点で写せる上限の目安は
        「<strong style={{ color: "var(--text)" }}>500 ÷ 35mm換算焦点距離（秒）</strong>」。
        焦点距離とセンサーを入れるだけで出せる
        <Link href="/tools/500-rule" className="underline mx-1" style={{ color: "var(--accent)" }}>500ルール計算機</Link>
        を使うと早いです（例：フルサイズ20mmなら約25秒）。
      </Section>
      <Section heading="③ ISO：明るさの最後の調整（1600〜6400目安）">
        絞りとSSを決めたら、適正露出になるよう<strong style={{ color: "var(--text)" }}>ISOで明るさを合わせ</strong>ます。目安はISO1600〜6400。上げるほどノイズが増えるので、必要最小限に。背面液晶のヒストグラムで暗すぎ・白飛びを確認します。
      </Section>
      <Section heading="ピント：オートでなく「無限遠」を手動で">
        暗所ではオートフォーカスが迷います。<strong style={{ color: "var(--text)" }}>マニュアルフォーカス</strong>にして、明るい星や遠くの灯りをライブビューで拡大し、最もシャープになる位置に合わせます。レンズの∞マーク位置は必ずしも正確でないので、必ず拡大確認を。
      </Section>
      <Section heading="撮影手順（まとめ）">
        三脚に固定 → 手ブレ防止にセルフタイマー2秒かレリーズ → MFで無限遠 → 絞り開放 → 計算機で出したSS → ISOで明るさ調整 → 1枚撮ってヒストグラム確認 → 微調整。これが基本ループです。
      </Section>
      <Section heading="よくある失敗">
        ・星が線になる＝SSが長すぎ（計算機で見直し）／・全体が甘い＝ピントが無限遠でない／・ザラザラ＝ISO上げすぎ（絞り・SSを先に最大化）／・手前が真っ暗＝構図に地上景を入れるなら別途ライティングや比較明合成を検討。
        <br />
        もっと長く露光して淡い天の川まで写したい場合は、追尾できる<strong style={{ color: "var(--text)" }}>ポータブル赤道儀</strong>が次の一歩です（観望機材とも共通）。
      </Section>
      <p className="text-xs" style={{ color: "var(--muted)", opacity: 0.7 }}>
        ※ 数値はあくまで出発点の目安です。レンズ・空の暗さ・被写体で最適値は変わります。
      </p>
    </ArticleShell>
  );
}
