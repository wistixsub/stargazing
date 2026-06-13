import type { Metadata } from "next";
import Link from "next/link";
import { getProduct, type Product } from "@/lib/products";
import GearHub, { type HubItem } from "@/components/GearHub";
import type { CompareRow } from "@/components/GearCompare";

export const metadata: Metadata = {
  title: "ポータブル赤道儀の紹介｜軽量・定番・自動導入(GoTo)",
  description:
    "星を点像で長秒露光するためのポータブル赤道儀を紹介。軽量なビクセン ポラリエU、定番のケンコー スカイメモS、自動導入(GoTo)のSky-Watcher スター・アドベンチャーGTiを、特徴と比較表つきでフラットにまとめました。",
  alternates: { canonical: "/gear/star-trackers" },
};

// 並列の「こんな人に向く」一言紹介（順位・段階づけはしない）
const INTRO: Record<string, string> = {
  "polarie-u": "とにかく軽く始めたい人へ。登山・旅行・キャンプに気軽に持ち出し、星景から追尾デビューしたいときに。",
  "portable-star-tracker": "極軸合わせをしっかり覚えて定番機で始めたい人へ。極軸望遠鏡が標準で、搭載5kgと拡張性のバランスがよい。",
  "star-adventurer-gti": "星景から天体（星雲・星団）撮影へ進みたい人へ。アプリで目的の天体を自動導入(GoTo)したいときに。",
};
const ORDER = ["polarie-u", "portable-star-tracker", "star-adventurer-gti"];
const PRICE: Record<string, string> = {
  "polarie-u": "6万円台",
  "portable-star-tracker": "4万円前後",
  "star-adventurer-gti": "約10万円",
};
const GOTO: Record<string, string> = {
  "polarie-u": "なし（Wi-Fi設定のみ）",
  "portable-star-tracker": "なし",
  "star-adventurer-gti": "あり（Wi-Fi・SynScan）",
};
const POLARSCOPE: Record<string, string> = {
  "polarie-u": "別売（PF-LII）",
  "portable-star-tracker": "標準装備",
  "star-adventurer-gti": "内蔵",
};

export default function StarTrackerHub() {
  const items: HubItem[] = ORDER.map((slug) => ({ p: getProduct(slug), intro: INTRO[slug] }))
    .filter((x): x is HubItem => Boolean(x.p));

  const spec = (p: Product, label: string) => p.specs.find((x) => x.label === label)?.value ?? "—";
  const val = (pick: (p: Product) => string) => Object.fromEntries(items.map(({ p }) => [p.slug, pick(p)]));
  const rows: CompareRow[] = [
    { label: "搭載可能重量", values: val((p) => spec(p, "搭載可能重量")) },
    { label: "自動導入(GoTo)", values: val((p) => GOTO[p.slug] ?? "—") },
    { label: "極軸望遠鏡", values: val((p) => POLARSCOPE[p.slug] ?? "—") },
    { label: "本体重量", values: val((p) => spec(p, "本体重量")) },
    { label: "電源", values: val((p) => spec(p, "電源")) },
    { label: "実勢価格の目安", values: PRICE },
  ];

  return (
    <GearHub
      icon="mount"
      title="ポータブル赤道儀"
      breadcrumb="赤道儀"
      compareNoun="赤道儀"
      lead={
        <>
          星を追尾して長秒露光しても点像のまま写すための機材です。軽さ重視・定番・自動導入(GoTo)まで、
          「こんな人に向く」をフラットに並べました。そもそも必要かは
          <Link href="/guide/star-tracker" className="underline mx-1" style={{ color: "var(--accent)" }}>ポータブル赤道儀は必要か</Link>へ。
        </>
      }
      items={items}
      rows={rows}
      notes={
        <>
          <p className="font-bold mb-2" style={{ color: "var(--navy)" }}>選ぶ前の2つの注意</p>
          <p>
            ・<strong style={{ color: "var(--text)" }}>三脚の剛性が前提</strong>です。軽い赤道儀でも、土台がぶれると追尾精度が活きません。搭載重量に見合う
            <Link href="/gear#tripod" className="underline mx-1" style={{ color: "var(--accent)" }}>三脚</Link>と合わせて選んでください。
          </p>
          <p className="mt-2">
            ・<strong style={{ color: "var(--text)" }}>搭載重量は「不動点からの距離」で変わります</strong>。重い望遠レンズを載せるほどバランスウェイトや上位機が必要になります。まずは手持ちのレンズ重量を基準に。
          </p>
        </>
      }
      related={[
        { href: "/guide/star-tracker", label: "ポータブル赤道儀は必要か（仕組みと選び方）" },
        { href: "/guide/skymemo-s", label: "スカイメモSの使い方・設定ガイド（実例）" },
        { href: "/guide/settings", label: "星空撮影の設定 完全ガイド" },
      ]}
    />
  );
}
