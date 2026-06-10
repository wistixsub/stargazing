import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell, { Section } from "@/components/ArticleShell";

export const metadata: Metadata = {
  title: "スカイメモSの使い方・設定ガイド｜極軸合わせから星景・天の川まで",
  description:
    "ケンコー スカイメモS（ポータブル赤道儀）の使い方を手順で解説。必要な機材、極軸合わせのコツ、恒星時・0.5倍速・月の追尾モードの使い分け、撮影設定の目安、よくある失敗まで。",
  alternates: { canonical: "/guide/skymemo-s" },
};

export default function Page() {
  return (
    <ArticleShell
      slug="guide/skymemo-s"
      title="スカイメモSの使い方・設定ガイド"
      lead="ポータブル赤道儀の定番・スカイメモS。極軸合わせさえ覚えれば、ISOを下げた長秒露光でノイズの少ない天の川が撮れるようになります。現場での手順を順番に解説します。"
      datePublished="2026-06-10"
      related={[
        { href: "/gear/portable-star-tracker", label: "【ギア詳細】ケンコー スカイメモS" },
        { href: "/guide/star-tracker", label: "ポータブル赤道儀は必要か" },
        { href: "/guide/settings", label: "星空撮影の設定 完全ガイド" },
        { href: "/tools/500-rule", label: "500ルール計算機" },
      ]}
    >
      <Section heading="スカイメモSで何が変わるか">
        固定撮影では
        <Link href="/tools/500-rule" className="underline mx-1" style={{ color: "var(--accent)" }}>500ルール</Link>
        が露光時間の上限でしたが、スカイメモSは星を追尾するのでその制限を超えられます。
        <strong style={{ color: "var(--text)" }}>同じ明るさをISOを下げて長い露光で稼げる</strong>＝ノイズが減り、天の川の淡い部分まで写るのが最大の効果です。
        スペックや向き不向きは<Link href="/gear/portable-star-tracker" className="underline mx-1" style={{ color: "var(--accent)" }}>ギア詳細ページ</Link>にまとめています。
      </Section>
      <Section heading="必要なもの（本体以外）">
        ・<strong style={{ color: "var(--text)" }}>剛性のある三脚</strong>（本体＋雲台＋カメラの重さを支える。土台がゆるいと追尾しても星が流れる）<br />
        ・<strong style={{ color: "var(--text)" }}>カメラを載せる自由雲台</strong>（スカイメモSとカメラの間に1つ必要）<br />
        ・単3形アルカリ乾電池4本（公称約72時間動くので電池切れの心配は少なめ）
      </Section>
      <Section heading="手順1：設置と水平出し">
        三脚をしっかり開き、水平を合わせます。以降の極軸合わせの精度は土台で決まるため、
        <strong style={{ color: "var(--text)" }}>脚は太い段から伸ばし、締め付けはガタが出ないように</strong>。風が強い日はセンターフックに荷物を下げると安定します。
      </Section>
      <Section heading="手順2：極軸合わせ（ここが肝）">
        スカイメモSには<strong style={{ color: "var(--text)" }}>明視野照明付きの極軸望遠鏡が標準搭載</strong>されています。
        覗いて北極星を導入し、スケールの指示位置に合わせます。<br />
        コツは2つ：①おおよその方角（北）と緯度を先に合わせてから微調整する、②
        <Link href="/gear/red-headlamp" className="underline mx-1" style={{ color: "var(--accent)" }}>赤色ライト</Link>
        で手元を照らし、暗順応を保ったまま作業する。広角レンズの星景なら、極軸は「だいたい合っている」程度でも数十秒〜数分は十分実用になります。
      </Section>
      <Section heading="手順3：追尾モードを選ぶ">
        ・<strong style={{ color: "var(--text)" }}>恒星時追尾</strong>：星空が主役のとき。星は完全に点になるが、長く露光すると地上は流れる<br />
        ・<strong style={{ color: "var(--text)" }}>0.5倍速追尾</strong>：星と地上を両方写す星景向け。星と地上のブレを半分ずつに按分する妥協点<br />
        ・<strong style={{ color: "var(--text)" }}>月追尾</strong>：月を撮るとき<br />
        まずは「星空メイン＝恒星時」「地上入りの星景＝0.5倍速」と覚えれば十分です。
      </Section>
      <Section heading="撮影設定の目安">
        追尾できるようになったら、固定撮影の設定から<strong style={{ color: "var(--text)" }}>「ISOを下げ、その分シャッタースピードを伸ばす」</strong>方向に振ります。
        例えば固定でISO6400・20秒だった構図なら、追尾でISO1600・80秒〜といった配分が出発点。
        絞りとピントの基本は<Link href="/guide/settings" className="underline mx-1" style={{ color: "var(--accent)" }}>設定完全ガイド</Link>の通りです。
      </Section>
      <Section heading="よくある失敗">
        ・<strong style={{ color: "var(--text)" }}>星が線になる</strong>→ 極軸ズレか三脚のガタ。まず雲台と脚の締め直し、次に極軸を確認<br />
        ・<strong style={{ color: "var(--text)" }}>地上がブレる</strong>→ 恒星時追尾で地上を入れている。0.5倍速にするか、星と地上を別撮りして合成<br />
        ・<strong style={{ color: "var(--text)" }}>搭載オーバー</strong>→ 搭載可能重量は5kg。望遠レンズ＋大型ボディの組み合わせは要注意
      </Section>
      <p className="text-xs" style={{ color: "var(--muted)", opacity: 0.7 }}>
        ※ 仕様はメーカー公式情報に基づきます（詳細は<Link href="/gear/portable-star-tracker" className="underline mx-1">ギア詳細ページ</Link>の出典参照）。設定値の例は撮影条件で変わる目安です。
      </p>
    </ArticleShell>
  );
}
