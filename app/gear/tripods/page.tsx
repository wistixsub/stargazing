import type { Metadata } from "next";
import Link from "next/link";
import { getProduct, type Product } from "@/lib/products";
import GearHub, { type HubItem } from "@/components/GearHub";
import type { CompareRow } from "@/components/GearCompare";

export const metadata: Metadata = {
  title: "星空向け三脚の紹介｜軽量トラベル・定番カーボン・高剛性",
  description:
    "長秒露光のブレを抑える星空向け三脚を紹介。軽量トラベルのスリック エアリーL100、定番カーボンのライトカーボンE83 II、赤道儀運用も見据える高剛性のLeofoto LS-324C proを、特徴と比較表つきでフラットにまとめました。",
  alternates: { canonical: "/gear/tripods" },
};

// 並列の「こんな人に向く」一言紹介（順位・段階づけはしない）
const INTRO: Record<string, string> = {
  "airy-l100": "とにかく軽く持ち歩きたい人へ。スマホや軽量ミラーレスでの星景・スナップから気軽に始めたいときに（搭載は軽め）。",
  "sturdy-tripod": "コスパよく剛性を確保したい定番志向の人へ。長秒露光のブレを抑え、ポータブル赤道儀の搭載も見据えたいときに。",
  "leofoto-ls324c": "ブレを徹底的に抑えたい人へ。軽さと高剛性を両立し、カメラ＋赤道儀まで載せる前提で土台を固めたいときに。",
};
const ORDER = ["airy-l100", "sturdy-tripod", "leofoto-ls324c"];
const PRICE: Record<string, string> = {
  "airy-l100": "3万円前後",
  "sturdy-tripod": "5〜6万円台",
  "leofoto-ls324c": "8万円前後",
};
const PAYLOAD: Record<string, string> = {
  "airy-l100": "1.5kg",
  "sturdy-tripod": "5kg（推奨積載）",
  "leofoto-ls324c": "15kg",
};
const PIPE: Record<string, string> = {
  "airy-l100": "20mm / 4段（アルミ）",
  "sturdy-tripod": "28mm / 3段（カーボン）",
  "leofoto-ls324c": "最大32mm / 4段（カーボン）",
};
const HEIGHT: Record<string, string> = {
  "airy-l100": "1,543mm",
  "sturdy-tripod": "1,845mm",
  "leofoto-ls324c": "1,400mm",
};

export default function TripodHub() {
  const items: HubItem[] = ORDER.map((slug) => ({ p: getProduct(slug), intro: INTRO[slug] }))
    .filter((x): x is HubItem => Boolean(x.p));

  const val = (pick: (p: Product) => string) => Object.fromEntries(items.map(({ p }) => [p.slug, pick(p)]));
  const rows: CompareRow[] = [
    { label: "パイプ径 / 段数", values: val((p) => PIPE[p.slug] ?? "—") },
    { label: "最大搭載 / 推奨積載", values: val((p) => PAYLOAD[p.slug] ?? "—") },
    { label: "全高", values: val((p) => HEIGHT[p.slug] ?? "—") },
    { label: "重量", values: val((p) => p.specs.find((x) => x.label === "重量")?.value ?? "—") },
    { label: "実勢価格の目安", values: PRICE },
  ];

  return (
    <GearHub
      icon="tripod"
      title="星空向け三脚"
      breadcrumb="三脚"
      compareNoun="三脚"
      lead={
        <>
          三脚は星空写真の歩留まりを決める土台です。長秒露光でブレないことが何より大切。
          軽量トラベルから高剛性まで「こんな人に向く」をフラットに並べました。設定の基本は
          <Link href="/guide/settings" className="underline mx-1" style={{ color: "var(--accent)" }}>星空撮影の設定ガイド</Link>へ。
        </>
      }
      items={items}
      rows={rows}
      notes={
        <>
          <p className="font-bold mb-2" style={{ color: "var(--navy)" }}>選ぶ前の2つの注意</p>
          <p>
            ・<strong style={{ color: "var(--text)" }}>搭載重量は機材に合わせて</strong>。カメラ＋明るい広角レンズで1〜1.5kg、
            <Link href="/gear/star-trackers" className="underline mx-1" style={{ color: "var(--accent)" }}>ポータブル赤道儀</Link>まで載せるなら余裕を持った剛性・耐荷重を選ぶと安心です。
          </p>
          <p className="mt-2">
            ・<strong style={{ color: "var(--text)" }}>軽さと剛性はトレードオフ</strong>。携帯性重視のトラベル三脚は搭載が控えめです。長秒露光のブレが気になる場合は、太いパイプ径・カーボンの上位機が効きます。
          </p>
        </>
      }
      related={[
        { href: "/guide/slik-e83ii", label: "星空向け三脚の選び方：E83 IIを実例に" },
        { href: "/guide/star-tracker", label: "ポータブル赤道儀は必要か" },
        { href: "/guide/settings", label: "星空撮影の設定 完全ガイド" },
      ]}
    />
  );
}
