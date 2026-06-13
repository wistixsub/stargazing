import type { Metadata } from "next";
import Link from "next/link";
import { getProduct, type Product } from "@/lib/products";
import GearHub, { type HubItem } from "@/components/GearHub";
import type { CompareRow } from "@/components/GearCompare";

export const metadata: Metadata = {
  title: "星空向けレンズの紹介｜広角F2.8〜F1.4（単焦点・ズーム）",
  description:
    "星空撮影に向く広角レンズを紹介。コスパの良いMF単焦点（SAMYANG 14mm F2.8）、AF超広角ズーム（SIGMA 14-24mm F2.8）、明るさ重視のF1.4単焦点（SIGMA 14mm F1.4）を、特徴と比較表つきでフラットにまとめました。",
  alternates: { canonical: "/gear/lenses" },
};

// 並列の「こんな人に向く」一言紹介（順位・段階づけはしない）
const INTRO: Record<string, string> = {
  "wide-fast-lens": "「もっと広く・もっと明るいレンズなら」と感じ始めた人へ。まず1本、コスパで星空専用の画角を手に入れたいときに。",
  "sigma-14-24mm-f28": "構図の自由度が欲しい人へ。AFで昼の撮影にも使え、遠征の1本を信頼できる現行品にまとめたいときに。",
  "sigma-14mm-f14": "ノイズをもう一段減らしたい人へ。星景を作品の柱にし、結露・ピントずれ対策まで道具に任せたいときに。",
};
const ORDER = ["wide-fast-lens", "sigma-14-24mm-f28", "sigma-14mm-f14"];
const PRICE: Record<string, string> = {
  "wide-fast-lens": "4〜5万円台",
  "sigma-14-24mm-f28": "15万円前後",
  "sigma-14mm-f14": "20万円台",
};
const FOCUS: Record<string, string> = {
  "wide-fast-lens": "MF専用",
  "sigma-14-24mm-f28": "AF",
  "sigma-14mm-f14": "AF（MFLロック付）",
};
const MOUNT: Record<string, string> = {
  "wide-fast-lens": "キヤノンEF・ニコンF・ソニー等",
  "sigma-14-24mm-f28": "ソニーE / ライカL",
  "sigma-14mm-f14": "ソニーE / ライカL",
};
const WEIGHT: Record<string, string> = {
  "wide-fast-lens": "約570g",
};

export default function LensHub() {
  const items: HubItem[] = ORDER.map((slug) => ({ p: getProduct(slug), intro: INTRO[slug] }))
    .filter((x): x is HubItem => Boolean(x.p));

  const val = (pick: (p: Product) => string) => Object.fromEntries(items.map(({ p }) => [p.slug, pick(p)]));
  const rows: CompareRow[] = [
    { label: "焦点距離 / F値", values: val((p) => p.specs[0]?.value ?? "—") },
    { label: "フォーカス", values: val((p) => FOCUS[p.slug] ?? "—") },
    { label: "重量", values: val((p) => WEIGHT[p.slug] ?? p.specs.find((x) => x.label === "重量")?.value ?? "—") },
    { label: "マウント", values: val((p) => MOUNT[p.slug] ?? "—") },
    { label: "実勢価格の目安", values: PRICE },
  ];

  return (
    <GearHub
      icon="lens"
      title="星空向けレンズ"
      breadcrumb="レンズ"
      compareNoun="レンズ"
      lead={
        <>
          星空撮影に向く広角レンズを紹介します。それぞれ「こんな人に向く」をフラットに並べました。
          焦点距離やF値の理屈から知りたい人は
          <Link href="/guide/lens" className="underline mx-1" style={{ color: "var(--accent)" }}>レンズの選び方ガイド</Link>へ。
        </>
      }
      items={items}
      rows={rows}
      notes={
        <>
          <p className="font-bold mb-2" style={{ color: "var(--navy)" }}>選ぶ前の2つの注意</p>
          <p>
            ・<strong style={{ color: "var(--text)" }}>APS-Cカメラの人</strong>：焦点距離は約1.5倍相当になります（14mm→約21mm相当）。画角が狭くなるぶん、星が流れない上限秒数も変わるので
            <Link href="/tools/500-rule" className="underline mx-1" style={{ color: "var(--accent)" }}>500ルール計算機</Link>で確認を。
          </p>
          <p className="mt-2">
            ・<strong style={{ color: "var(--text)" }}>キヤノンRF・ニコンZの人</strong>：今回のSIGMA 2本は対応外です。同じ考え方（F2.8ズーム／F1.4級単焦点）で純正・対応レンズから選んでください。対応マウントの選択肢は順次追加します。
          </p>
        </>
      }
      related={[
        { href: "/guide/lens", label: "星空向けレンズの選び方（焦点距離×明るさの理屈）" },
        { href: "/guide/samyang-14mm", label: "SAMYANG 14mm F2.8で星空を撮る設定（撮影設定の実例）" },
        { href: "/guide/beginner", label: "星空撮影の始め方【初心者完全ガイド】" },
      ]}
    />
  );
}
