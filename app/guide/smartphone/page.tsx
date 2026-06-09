import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell, { Section } from "@/components/ArticleShell";

export const metadata: Metadata = {
  title: "スマホで星空を撮る方法｜三脚と夜景/星空モードで撮るコツ",
  description:
    "スマホでも星空は撮れます。必要なもの（三脚は必須）、ナイトモード/プロモードの設定、撮影手順、そして次のステップまでを初心者向けに解説。",
  alternates: { canonical: "/guide/smartphone" },
};

export default function Page() {
  return (
    <ArticleShell
      slug="guide/smartphone"
      title="スマホで星空を撮る方法"
      lead="最近のスマホは夜景・星空モードが優秀で、星空も十分撮れます。最重要は「固定」。三脚さえあれば、今夜から始められます。"
      datePublished="2026-06-06"
      related={[
        { href: "/guide/settings", label: "星空撮影の設定 完全ガイド（次のステップ）" },
        { href: "/guide/milkyway-season", label: "天の川が見える時期と方角" },
        { href: "/tools/500-rule", label: "500ルール計算機" },
      ]}
    >
      <Section heading="必要なもの">
        ① <strong style={{ color: "var(--text)" }}>スマホ三脚（必須）</strong>＋スマホホルダー。星空は数秒〜数十秒の露光なので、手持ちでは必ずブレます。② 暗い場所。③ あれば<strong style={{ color: "var(--text)" }}>Bluetoothシャッター</strong>（押す振動を防ぐ。なければセルフタイマー）。
      </Section>
      <Section heading="設定：ナイトモード or プロ（マニュアル）モード">
        まずは<strong style={{ color: "var(--text)" }}>夜景/星空モード</strong>を試すのが簡単。さらに狙うなら<strong style={{ color: "var(--text)" }}>プロ/マニュアルモード</strong>（または対応アプリ）で、ISO（1600〜3200目安）・シャッタースピード（10〜30秒目安）・ピントを「遠（∞）」に手動設定します。
      </Section>
      <Section heading="撮影手順">
        三脚に固定 → 星空/ナイトモード（またはプロモードで上記設定）→ ピントを遠側に → セルフタイマー or リモートで撮影 → 明るすぎ/暗すぎなら露出（ISO・SS）を微調整。撮れた画像を拡大して星が点か線かを確認します。
      </Section>
      <Section heading="うまくいかない時">
        ・ブレる＝固定不足/シャッターの振動（タイマー必須）／・真っ白＝露光オーバー（ISO・SSを下げる、または明るい場所）／・星が線＝SSが長すぎ。スマホは画角が広い（換算20mm台が多い）ので比較的長めでも点になりますが、目安は
        <Link href="/tools/500-rule" className="underline mx-1" style={{ color: "var(--accent)" }}>500ルール計算機</Link>
        で確認できます。
      </Section>
      <Section heading="次のステップ">
        スマホで「撮れる楽しさ」を掴んだら、より暗部に強い一眼カメラへ。設定の考え方は
        <Link href="/guide/settings" className="underline mx-1" style={{ color: "var(--accent)" }}>星空撮影の設定ガイド</Link>
        が共通で使えます。淡い天の川を狙うなら追尾（ポータブル赤道儀）が次の一歩です。
      </Section>
      <p className="text-xs" style={{ color: "var(--muted)", opacity: 0.7 }}>
        ※ 機種・OS・カメラアプリにより設定名や可動範囲は異なります。お使いの端末のカメラ設定をご確認ください。
      </p>
    </ArticleShell>
  );
}
