import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell, { Section } from "@/components/ArticleShell";

export const metadata: Metadata = {
  title: "星空向けレンズの選び方｜焦点距離と明るさ(F値)の考え方",
  description:
    "星空撮影に向くレンズの選び方を、焦点距離（画角）と明るさ（F値）の2軸で解説。星景・天の川に向く画角、開放F値の重要性、開放の弱点と対策まで。",
  alternates: { canonical: "/guide/lens" },
};

export default function Page() {
  return (
    <ArticleShell
      slug="guide/lens"
      title="星空向けレンズの選び方（焦点距離×明るさ）"
      lead="星空レンズは「焦点距離（どこまで広く写すか）」と「F値（どれだけ明るいか）」の2軸で選びます。星景・天の川に向く組み合わせを整理します。"
      datePublished="2026-06-06"
      related={[
        { href: "/gear/lenses", label: "具体的に選ぶ：星空向けレンズの紹介（比較表つき）" },
        { href: "/guide/samyang-14mm", label: "実例：SAMYANG 14mm F2.8で星空を撮る設定" },
        { href: "/guide/settings", label: "星空撮影の設定 完全ガイド" },
        { href: "/tools/500-rule", label: "500ルール計算機（画角で最大SSが変わる）" },
        { href: "/guide/star-tracker", label: "ポータブル赤道儀は必要か" },
      ]}
    >
      <Section heading="焦点距離（画角）の目安">
        ・<strong style={{ color: "var(--text)" }}>14〜24mm（超広角〜広角）</strong>：星景・天の川全体の定番。地上景と星空を一緒に入れやすい。<br />
        ・<strong style={{ color: "var(--text)" }}>35mm前後（標準寄り）</strong>：天の川の一部を濃く、構図を締めたい時。<br />
        ・<strong style={{ color: "var(--text)" }}>50mm以上</strong>：星座のクローズアップ。流れやすいので
        <Link href="/tools/500-rule" className="underline mx-1" style={{ color: "var(--accent)" }}>500ルール</Link>でSSをより短く。
      </Section>
      <Section heading="明るさ（F値）が効く理由">
        星は暗いので、<strong style={{ color: "var(--text)" }}>開放F値が小さい（明るい）レンズほど有利</strong>。目安は<strong style={{ color: "var(--text)" }}>F2.8以下</strong>（F1.4〜2.8）。同じ露光でも多くの光を集められ、ISOを下げられます。
      </Section>
      <Section heading="単焦点 vs ズーム">
        星空は基本ワンシーンを追い込むので<strong style={{ color: "var(--text)" }}>明るい単焦点</strong>が王道。ただしF2.8通しの広角ズーム（例：14-24/16-35 F2.8）は画角の自由度が高く実用的。まずはお持ちの一番明るい広角で始めてOK。
      </Section>
      <Section heading="開放の弱点と対策">
        開放では周辺の星が鳥が羽を広げたように歪む<strong style={{ color: "var(--text)" }}>コマ収差</strong>や周辺減光が出やすい。気になる場合は<strong style={{ color: "var(--text)" }}>1段だけ絞る</strong>と改善します（明るさとのトレードオフ）。
      </Section>
      <Section heading="まとめ（最初の1本）">
        星景・天の川なら<strong style={{ color: "var(--text)" }}>「広角14〜24mm × F2.8以下」</strong>が無難な出発点。次に画角の好みや追尾（赤道儀）の有無で広げていきます。
      </Section>
      <p className="text-xs" style={{ color: "var(--muted)", opacity: 0.7 }}>
        ※ 最適なレンズは撮りたい対象・センサーサイズ・予算で変わります。数値は一般的な目安です。
      </p>
    </ArticleShell>
  );
}
