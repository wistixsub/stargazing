import type { Metadata } from "next";
import Link from "next/link";
import { getProduct, type Product } from "@/lib/products";
import { LineIcon } from "@/components/icons";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "星空レンズのステップアップ診断｜入門単焦点→F2.8ズーム→F1.4",
  description:
    "星空向けレンズを「いま何に不満があるか」から選ぶステップアップガイド。入門のMF単焦点（SAMYANG 14mm F2.8）から、AF超広角ズーム（SIGMA 14-24mm F2.8）、星景フラッグシップ（SIGMA 14mm F1.4）まで比較表つきで解説。",
  alternates: { canonical: "/gear/lenses" },
};

const card: React.CSSProperties = {
  background: "var(--surface)",
  border: "1px solid var(--card-border)",
  boxShadow: "0 8px 22px rgba(40,70,120,.06)",
};

// ステップアップ診断の中身（商品データはlib/productsから引く）
const STEPS: {
  slug: string;
  tier: string;
  situation: string; // いまの状態
  unmet: string; // こんな不満が出たら、この段
  nextSign?: string; // この段を卒業するサイン
  priceNote: string; // 実勢目安（変動・要確認）
}[] = [
  {
    slug: "wide-fast-lens",
    tier: "入門",
    situation: "キットレンズで星を撮ってみた",
    unmet: "「もっと広く・もっと明るいレンズなら」と感じ始めた。まず1本、コスパで星空専用画角を手に入れたい。",
    nextSign: "ピント合わせの儀式が億劫になってきた／「あと少しズームできれば」と現地で何度も思った",
    priceNote: "4〜5万円台",
  },
  {
    slug: "sigma-14-24mm-f28",
    tier: "ステップアップ",
    situation: "MF単焦点で星景が撮れている",
    unmet: "構図の自由度が欲しい。AFで昼の撮影にも使いたい。遠征の1本を信頼できる現行品にまとめたい。",
    nextSign: "ISO6400のノイズが気になり始めた／結露やピントずれで失敗コマを量産した夜があった",
    priceNote: "15万円前後",
  },
  {
    slug: "sigma-14mm-f14",
    tier: "本格",
    situation: "F2.8で安定して撮れている",
    unmet: "ノイズをもう一段減らしたい。星景を作品の柱にすると決めた。結露・ピントずれ対策まで道具に任せたい。",
    priceNote: "20万円台",
  },
];

export default function LensStepUp() {
  const items = STEPS.map((s) => ({ ...s, p: getProduct(s.slug) })).filter(
    (s): s is (typeof STEPS)[number] & { p: Product } => Boolean(s.p)
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "星空レンズのステップアップ診断",
    itemListElement: items.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.p.name,
      url: `${SITE_URL}/gear/${s.p.slug}`,
    })),
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-xs" style={{ color: "var(--muted)" }} aria-label="パンくず">
        <Link href="/" className="hover:underline">ホーム</Link> /{" "}
        <Link href="/gear" className="hover:underline">ギア</Link> / レンズのステップアップ診断
      </nav>

      <div className="mt-3 flex items-center gap-3">
        <LineIcon name="lens" size={30} style={{ color: "var(--navy)" }} />
        <h1 className="text-2xl sm:text-3xl font-bold">星空レンズのステップアップ診断</h1>
      </div>
      <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        レンズ選びは「おすすめランキング」より、<strong style={{ color: "var(--text)" }}>いま何に不満があるか</strong>から決めるのが失敗しません。
        星空向けレンズを入門 → ステップアップ → 本格の3段で整理しました。
        焦点距離やF値の理屈から知りたい人は<Link href="/guide/lens" className="underline mx-1" style={{ color: "var(--accent)" }}>レンズの選び方ガイド</Link>へ。
      </p>

      {/* 診断：いまのあなたはどこ？ */}
      <h2 className="mt-10 text-lg font-black" style={{ color: "var(--navy)" }}>いまのあなたはどこ？</h2>
      <div className="mt-4 grid gap-4">
        {items.map((s) => (
          <div key={s.slug} className="rounded-[18px] p-5 sm:p-6" style={card}>
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full" style={{ background: "var(--surface2)", color: "var(--accent)" }}>
                {s.tier}
              </span>
              <span className="text-sm font-bold" style={{ color: "var(--navy)" }}>{s.situation}</span>
            </div>
            <p className="mt-2.5 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>{s.unmet}</p>
            <Link href={`/gear/${s.p.slug}`} className="mt-3 group flex items-center gap-3 rounded-xl p-3 transition hover:-translate-y-0.5" style={{ background: "var(--surface2)" }}>
              <LineIcon name="lens" size={22} className="shrink-0" style={{ color: "var(--navy)" }} />
              <span className="min-w-0">
                <span className="block text-sm font-bold leading-snug" style={{ color: "var(--navy)" }}>{s.p.name}</span>
                <span className="block text-xs mt-0.5" style={{ color: "var(--muted)" }}>{s.p.tagline}</span>
              </span>
              <span className="ml-auto shrink-0 text-xs font-bold" style={{ color: "var(--accent)" }}>
                詳しく <span className="inline-block transition group-hover:translate-x-1">→</span>
              </span>
            </Link>
            {s.nextSign && (
              <p className="mt-3 text-xs leading-relaxed" style={{ color: "var(--muted2)" }}>
                ⤴ 次の段へ進むサイン：{s.nextSign}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* 比較表 */}
      <h2 className="mt-12 text-lg font-black" style={{ color: "var(--navy)" }}>3本の比較</h2>
      <div className="mt-4 overflow-x-auto rounded-[18px]" style={card}>
        <table className="w-full text-sm" style={{ minWidth: 560 }}>
          <thead>
            <tr className="text-left text-xs" style={{ color: "var(--muted)" }}>
              <th className="px-4 py-3 font-semibold"> </th>
              {items.map((s) => (
                <th key={s.slug} className="px-4 py-3 font-bold" style={{ color: "var(--navy)" }}>
                  <span className="block text-[10px] font-bold mb-1" style={{ color: "var(--accent)" }}>{s.tier}</span>
                  <Link href={`/gear/${s.p.slug}`} className="hover:underline">
                    {s.p.name.replace(/（.*?）/g, "")}
                  </Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody style={{ color: "var(--ink-soft)" }}>
            {[
              { label: "焦点距離 / F値", get: (p: Product) => p.specs[0]?.value ?? "—" },
              { label: "フォーカス", get: (p: Product) => (p.slug === "wide-fast-lens" ? "MF専用" : p.slug === "sigma-14mm-f14" ? "AF（MFLロック付）" : "AF") },
              { label: "重量", get: (p: Product) => (p.slug === "wide-fast-lens" ? "約570g" : p.specs.find((x) => x.label === "重量")?.value ?? "—") },
              { label: "マウント", get: (p: Product) => (p.slug === "wide-fast-lens" ? "キヤノンEF・ニコンF・ソニー等" : "ソニーE / ライカL") },
            ].map((row) => (
              <tr key={row.label} className="border-t" style={{ borderColor: "var(--border)" }}>
                <td className="px-4 py-2.5 text-xs font-semibold whitespace-nowrap" style={{ color: "var(--muted)" }}>{row.label}</td>
                {items.map((s) => (
                  <td key={s.slug} className="px-4 py-2.5">{row.get(s.p)}</td>
                ))}
              </tr>
            ))}
            <tr className="border-t" style={{ borderColor: "var(--border)" }}>
              <td className="px-4 py-2.5 text-xs font-semibold whitespace-nowrap" style={{ color: "var(--muted)" }}>実勢価格の目安</td>
              {items.map((s) => (
                <td key={s.slug} className="px-4 py-2.5">{s.priceNote}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs" style={{ color: "var(--muted)", opacity: 0.8 }}>
        ※ 価格は変動します。最新の実勢価格・対応マウントは購入前に必ずご確認ください。スペック出典は各商品ページに記載（メーカー公式）。
      </p>

      {/* 注意書き */}
      <div className="mt-8 rounded-[18px] p-5 text-sm leading-relaxed" style={{ ...card, color: "var(--muted)" }}>
        <p className="font-bold mb-2" style={{ color: "var(--navy)" }}>選ぶ前の2つの注意</p>
        <p>
          ・<strong style={{ color: "var(--text)" }}>APS-Cカメラの人</strong>：焦点距離は約1.5倍相当になります（14mm→約21mm相当）。画角が狭くなるぶん、星が流れない上限秒数も変わるので
          <Link href="/tools/500-rule" className="underline mx-1" style={{ color: "var(--accent)" }}>500ルール計算機</Link>で確認を。
        </p>
        <p className="mt-2">
          ・<strong style={{ color: "var(--text)" }}>キヤノンRF・ニコンZの人</strong>：今回のSIGMA 2本は対応外です。同じ考え方（F2.8ズーム→F1.4級単焦点）で純正・対応レンズから選んでください。対応マウントの選択肢は順次追加します。
        </p>
      </div>

      <section className="mt-10 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
        <h2 className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--muted)" }}>関連</h2>
        <ul className="space-y-2">
          <li><Link href="/guide/lens" className="text-sm hover:underline" style={{ color: "var(--accent)" }}>星空向けレンズの選び方（焦点距離×明るさの理屈） →</Link></li>
          <li><Link href="/guide/samyang-14mm" className="text-sm hover:underline" style={{ color: "var(--accent)" }}>SAMYANG 14mm F2.8で星空を撮る設定（入門機の実例） →</Link></li>
          <li><Link href="/guide/beginner" className="text-sm hover:underline" style={{ color: "var(--accent)" }}>星空撮影の始め方【初心者完全ガイド】 →</Link></li>
        </ul>
      </section>
    </div>
  );
}
