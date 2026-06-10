import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell, { Section } from "@/components/ArticleShell";

export const metadata: Metadata = {
  title: "SAMYANG 14mm F2.8で星空を撮る｜設定・ピント合わせ・注意点",
  description:
    "星景の定番SAMYANG 14mm F2.8 ED AS IF UMCで星空を撮るための実践ガイド。MFのピント合わせ、500ルールでの露光時間（フルサイズ約35秒）、絞り・ISOの目安、出目金レンズのフィルター問題まで。",
  alternates: { canonical: "/guide/samyang-14mm" },
};

export default function Page() {
  return (
    <ArticleShell
      slug="guide/samyang-14mm"
      title="SAMYANG 14mm F2.8で星空を撮る：設定とピント合わせ"
      lead="高コスパなマニュアル超広角として星景の定番になっているSAMYANG 14mm F2.8。オートフォーカスに頼れないこのレンズで、星にピントを合わせて天の川を撮るまでの実践手順です。"
      datePublished="2026-06-10"
      related={[
        { href: "/gear/wide-fast-lens", label: "【ギア詳細】SAMYANG 14mm F2.8" },
        { href: "/guide/lens", label: "星空向けレンズの選び方" },
        { href: "/guide/settings", label: "星空撮影の設定 完全ガイド" },
        { href: "/tools/500-rule", label: "500ルール計算機" },
      ]}
    >
      <Section heading="このレンズが星景定番である理由">
        14mmの超広角は<strong style={{ color: "var(--text)" }}>天の川のアーチと地上の風景を1枚に収められる</strong>画角。
        そこにF2.8の明るさがフルサイズ対応で手の届く価格に収まっているのが、定番と呼ばれる理由です。
        ただし<strong style={{ color: "var(--text)" }}>マニュアルフォーカス（MF）専用</strong>なので、ピント合わせの作法だけ先に覚える必要があります。
        スペックの詳細は<Link href="/gear/wide-fast-lens" className="underline mx-1" style={{ color: "var(--accent)" }}>ギア詳細ページ</Link>へ。
      </Section>
      <Section heading="ピント合わせ：無限遠の指標を信じない">
        星のピントで一番多い失敗が「距離指標を∞に回し切って撮る」こと。MFレンズの∞表示は個体差・温度でズレるため、
        <strong style={{ color: "var(--text)" }}>必ずライブビューで合わせます</strong>：<br />
        1. ひときわ明るい星（または遠くの街灯）を画面中央に入れる<br />
        2. ライブビューを最大倍率に拡大する<br />
        3. ピントリングを前後させ、<strong style={{ color: "var(--text)" }}>星が一番小さい点になる位置</strong>で止める<br />
        4. 合わせたあとはリングに触れない（テープで固定する人もいるほど）
      </Section>
      <Section heading="露光時間：14mmなら約35秒まで（フルサイズ）">
        星が流れない最大シャッタースピードの目安は
        <Link href="/tools/500-rule" className="underline mx-1" style={{ color: "var(--accent)" }}>500ルール</Link>
        で計算できます。500 ÷ 14mm ≒ <strong style={{ color: "var(--text)" }}>約35秒（フルサイズ）</strong>、APS-Cなら換算21mm相当で約23秒。
        超広角の強みはこの「長く露光できる」ことで、同じF2.8でも標準レンズよりたっぷり光を集められます。
      </Section>
      <Section heading="絞りとISOの目安">
        ・<strong style={{ color: "var(--text)" }}>絞り</strong>：開放F2.8でも撮れるが、四隅のコマ収差（星が鳥のように変形）が気になるならF3.5〜4へ少し絞ると星像が締まる<br />
        ・<strong style={{ color: "var(--text)" }}>ISO</strong>：F2.8・30秒前後ならISO1600〜6400の間で空の暗さに合わせて調整<br />
        ・<strong style={{ color: "var(--text)" }}>ホワイトバランス</strong>：RAWで撮っておけば後から調整可能。迷ったら電球〜蛍光灯寄りで青めに<br />
        全体の考え方は<Link href="/guide/settings" className="underline mx-1" style={{ color: "var(--accent)" }}>設定完全ガイド</Link>を参照してください。
      </Section>
      <Section heading="注意点：フィルターと周辺画質">
        前玉が出っ張った「出目金」形状のため<strong style={{ color: "var(--text)" }}>ねじ込み式フィルターが使えません</strong>。
        ソフトフィルターで星座を浮かせたい場合は角型フィルターホルダーが必要になります（ねじ込みで使いたい人は
        <Link href="/gear/soft-filter" className="underline mx-1" style={{ color: "var(--accent)" }}>プロソフトン クリア</Link>
        ×フィルター径のあるレンズという組み合わせも検討を）。周辺減光と歪曲は超広角の宿命なので、RAW現像のプロファイル補正で整えるのが現実的です。
      </Section>
      <Section heading="現場でのチェックリスト">
        ① ピント：ライブビュー拡大で星が点か<br />
        ② 露光：35秒以内（フルサイズ）で星が流れていないか拡大確認<br />
        ③ 四隅：コマ収差が気になればF3.5〜4へ<br />
        ④ 構図：14mmは広いぶん地上の暗部が大きく入りがち。明るいうちにロケハンを
      </Section>
      <p className="text-xs" style={{ color: "var(--muted)", opacity: 0.7 }}>
        ※ 設定値は撮影条件（空の暗さ・月齢・気温）で変わる目安です。レンズ仕様は<Link href="/gear/wide-fast-lens" className="underline mx-1">ギア詳細ページ</Link>参照。
      </p>
    </ArticleShell>
  );
}
