import type { Metadata } from "next";
import Link from "next/link";
import { getProduct, type Product } from "@/lib/products";
import GearHub, { type HubItem } from "@/components/GearHub";
import type { CompareRow } from "@/components/GearCompare";

export const metadata: Metadata = {
  title: "星空向け赤色ライトの紹介｜天体観測専用・ヘッドランプ兼用",
  description:
    "暗順応を崩さない赤色ライトを紹介。天体観測専用のビクセンSG-L02、白色も強力で防水IPX8のBlack Diamondスポット400、国産コスパのジェントスWS-243HDを、特徴と比較表つきでフラットにまとめました。",
  alternates: { canonical: "/gear/red-lights" },
};

// 並列の「こんな人に向く」一言紹介（順位・段階づけはしない）
const INTRO: Record<string, string> = {
  "red-headlamp":
    "天体観測に最適化した専用ライトが欲しい人へ。赤色を微光から無段階に絞れ、周囲の撮影者への写り込みも抑えられる。両手フリーで超軽量29g、観測席に1つ置く用途に。",
  "bd-spot-400":
    "1台で設営から観測・撤収まで回したい人へ。白色を経由せず赤色で点灯でき、白色400lm＋IPX8防水で登山・キャンプとも兼用できる定番ヘッドランプ。",
  "gentos-ws243hd":
    "コスパ重視で白色の明るさも欲しい人へ。白色580lm＋フォーカス調整つきで、単4電池で現地交換できる安心感。赤色はサブLEDで手元用に。",
};
const ORDER = ["red-headlamp", "bd-spot-400", "gentos-ws243hd"];

const TYPE: Record<string, string> = {
  "red-headlamp": "天体観測専用ライト",
  "bd-spot-400": "アウトドアヘッドランプ",
  "gentos-ws243hd": "ヘッドライト",
};
const RED: Record<string, string> = {
  "red-headlamp": "赤色 約0.28〜7.62lm（無段階調光）",
  "bd-spot-400": "赤色ナイトビジョン（白色を経由せず点灯）",
  "gentos-ws243hd": "赤色サブLED 約10lm（固定）",
};
const WHITE: Record<string, string> = {
  "red-headlamp": "電球色 約3〜42lm",
  "bd-spot-400": "最大400lm",
  "gentos-ws243hd": "最大580lm",
};
const POWER: Record<string, string> = {
  "red-headlamp": "内蔵Li-po（USB充電）",
  "bd-spot-400": "単4×3／BD1500充電池（別売）",
  "gentos-ws243hd": "単4×3／専用Li-po（別売）",
};
const WATER: Record<string, string> = {
  "red-headlamp": "IPX4（防滴）",
  "bd-spot-400": "IPX8（水深1.1m・30分）",
  "gentos-ws243hd": "IP64（耐塵・防滴）",
};
const WEIGHT: Record<string, string> = {
  "red-headlamp": "約29g",
  "bd-spot-400": "78g（電池込）",
  "gentos-ws243hd": "118g（電池込）",
};
const PRICE: Record<string, string> = {
  "red-headlamp": "¥7,150（税込）",
  "bd-spot-400": "¥8,470前後",
  "gentos-ws243hd": "オープン価格",
};

export default function RedLightHub() {
  const items: HubItem[] = ORDER.map((slug) => ({ p: getProduct(slug), intro: INTRO[slug] }))
    .filter((x): x is HubItem => Boolean(x.p));

  const val = (m: Record<string, string>) => Object.fromEntries(items.map(({ p }) => [p.slug, m[p.slug] ?? "—"]));
  const rows: CompareRow[] = [
    { label: "タイプ", values: val(TYPE) },
    { label: "赤色", values: val(RED) },
    { label: "白色", values: val(WHITE) },
    { label: "電源", values: val(POWER) },
    { label: "防水", values: val(WATER) },
    { label: "重量", values: val(WEIGHT) },
    { label: "参考価格", values: val(PRICE) },
  ];

  return (
    <GearHub
      icon="flashlight"
      title="星空向け赤色ライト"
      breadcrumb="赤色ライト"
      compareNoun="赤色ライト"
      lead={
        <>
          暗闇に慣れた目（暗順応）は、白色光を浴びると一瞬でリセットされてしまいます。手元やノートを照らすライトは
          <strong style={{ color: "var(--text)" }}>赤色</strong>が基本。観測席に置く専用機から、設営も兼ねる兼用ヘッドランプまで「こんな人に向く」をフラットに並べました。使い方は
          <Link href="/guide/sg-l02" className="underline mx-1" style={{ color: "var(--accent)" }}>赤色ライトはなぜ必要か</Link>へ。
        </>
      }
      items={items}
      rows={rows}
      notes={
        <>
          <p className="font-bold mb-2" style={{ color: "var(--navy)" }}>選ぶ前の2つの視点</p>
          <p>
            ・<strong style={{ color: "var(--text)" }}>「観測に最適」か「兼用で便利」か</strong>。赤色を微光まで絞れて周囲に配慮できるのは天体観測専用機。設営・撤収の作業灯（強い白色）や登山兼用まで1台で済ませたいならヘッドランプ型が向きます。
          </p>
          <p className="mt-2">
            ・<strong style={{ color: "var(--text)" }}>赤色は「白色を経由せず点く」と理想的</strong>。点灯のたびに白色を挟むと暗順応が崩れます。専用機や一部のヘッドランプは赤色から直接点灯でき、目に優しく使えます。
          </p>
        </>
      }
      related={[
        { href: "/guide/sg-l02", label: "赤色ライトはなぜ必要か：SG-L02を実例に" },
        { href: "/guide/camp-stargazing", label: "キャンプで星空観察・撮影（軽装備）" },
        { href: "/guide/settings", label: "星空撮影の設定 完全ガイド" },
      ]}
    />
  );
}
