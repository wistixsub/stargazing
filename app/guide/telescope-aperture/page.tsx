import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell, { Section } from "@/components/ArticleShell";

export const metadata: Metadata = {
  title: "口径別・望遠鏡で見える天体の早見｜50mm〜150mm超で何が見える",
  description:
    "天体望遠鏡の口径ごとに、月・惑星・二重星・星雲星団など見える対象の目安をまとめた早見。倍率の上限の考え方、空の暗さの影響も解説します。",
  alternates: { canonical: "/guide/telescope-aperture" },
};

const ROWS = [
  { d: "50〜60mm", s: "入門", t: "月のクレーター、土星の環、木星と4大衛星、月の地形。明るい対象の“観る”入門に。" },
  { d: "70〜80mm", s: "汎用", t: "木星の縞模様、二重星、明るい星団。扱いやすさと見え方のバランスが良い。" },
  { d: "100〜130mm", s: "本格入門", t: "より細かな惑星模様、明るい星雲・星団（オリオン大星雲など）も見え始める。" },
  { d: "150mm以上", s: "深空向き", t: "淡い星雲・銀河・球状星団まで。暗い空ならさらに多くの天体が射程に。" },
];

export default function Page() {
  return (
    <ArticleShell
      slug="guide/telescope-aperture"
      title="口径別・望遠鏡で見える天体の早見"
      lead="望遠鏡で何が見えるかは、ほぼ「口径」で決まります。口径ごとに見える対象の目安を早見表にまとめました。"
      datePublished="2026-06-06"
      related={[
        { href: "/guide/telescope-beginner", label: "はじめての天体望遠鏡の選び方" },
        { href: "/guide/milkyway-season", label: "天の川が見える時期と方角" },
      ]}
    >
      <Section heading="口径 → 見える天体の早見">
        <div className="overflow-x-auto mt-2 rounded-lg border" style={{ borderColor: "var(--border)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "var(--surface2)" }}>
                <th className="text-left p-3" style={{ color: "var(--text)" }}>口径</th>
                <th className="text-left p-3" style={{ color: "var(--text)" }}>位置づけ</th>
                <th className="text-left p-3" style={{ color: "var(--text)" }}>見える対象の目安</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.d} className="border-t" style={{ borderColor: "var(--border)" }}>
                  <td className="p-3 font-bold whitespace-nowrap" style={{ color: "var(--accent)" }}>{r.d}</td>
                  <td className="p-3 whitespace-nowrap" style={{ color: "var(--muted)" }}>{r.s}</td>
                  <td className="p-3" style={{ color: "var(--text)" }}>{r.t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      <Section heading="倍率の上限の考え方">
        倍率は「対物焦点距離 ÷ 接眼焦点距離」で決まりますが、いくらでも上げられるわけではありません。<strong style={{ color: "var(--text)" }}>実用上限は口径(mm)×2倍</strong>が目安。これを超えると像が暗く・ぼやけるだけです。口径こそが見え方の土台です。
      </Section>
      <Section heading="空の暗さも効く">
        同じ口径でも、<strong style={{ color: "var(--text)" }}>空が暗い場所</strong>ほど淡い天体が見えます。都市部では星雲・銀河は厳しく、月・惑星・二重星が中心になります。観る対象に合わせて口径と観測地を選びましょう。
      </Section>
      <Section heading="選び方に戻る">
        口径の感覚がつかめたら、種類・架台と合わせて
        <Link href="/guide/telescope-beginner" className="underline mx-1" style={{ color: "var(--accent2)" }}>はじめての天体望遠鏡の選び方</Link>
        へ。
      </Section>
      <p className="text-xs" style={{ color: "var(--muted)", opacity: 0.7 }}>
        ※ 見え方は口径だけでなく、空の暗さ・気流（シーイング）・光学性能・経験で変わります。表は一般的な目安です。
      </p>
    </ArticleShell>
  );
}
