import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "./Calculator";

export const metadata: Metadata = {
  title: "500ルール計算機｜星空撮影で星が点に写る最大シャッタースピード",
  description:
    "焦点距離とセンサーサイズを入れるだけ。星空撮影で星が流れずに点で写る最大シャッタースピードを500ルール・300ルールで計算します。設定の目安に。",
  alternates: { canonical: "/tools/500-rule" },
};

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-xs" style={{ color: "var(--muted)" }}>
        <Link href="/" className="hover:underline">ホーム</Link> / ツール / 500ルール計算機
      </nav>

      <h1 className="mt-3 text-2xl sm:text-3xl font-bold">500ルール計算機</h1>
      <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
        星空撮影で「星が線に流れず、点として写る」最大シャッタースピードの目安を計算します。
      </p>

      <div className="mt-6">
        <Calculator />
      </div>

      {/* SEO/解説本文 */}
      <section className="mt-10 space-y-6 leading-relaxed text-sm" style={{ color: "var(--text)" }}>
        <div>
          <h2 className="text-lg font-bold mb-2">500ルールとは</h2>
          <p style={{ color: "var(--muted)" }}>
            地球の自転で、長時間露光すると星は線状に流れて写ります。<strong style={{ color: "var(--text)" }}>「500 ÷ 35mm換算焦点距離（秒）」</strong>
            より短いシャッタースピードなら、星をおおむね点として写せる、という経験則が500ルールです。
            広角ほど長く開けられ、望遠ほど短くする必要があります。
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2">センサーサイズ（換算）が効く理由</h2>
          <p style={{ color: "var(--muted)" }}>
            星の流れは「写る画角」に対して決まるため、APS-Cやマイクロフォーサーズでは
            クロップ係数（×1.5〜2.0）をかけた<strong style={{ color: "var(--text)" }}>35mm換算焦点距離</strong>で計算します。
            例：APS-Cに24mm → 換算36mm → 500÷36 ≒ 14秒。
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2">300ルール（高画素・等倍鑑賞向け）</h2>
          <p style={{ color: "var(--muted)" }}>
            高画素機で等倍で見ると、500ルールでもわずかに流れて見えることがあります。
            より厳しめに点像を狙うなら<strong style={{ color: "var(--text)" }}>300ルール</strong>（300÷換算焦点距離）を目安にします。
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2">もっと長く開けたい時は</h2>
          <p style={{ color: "var(--muted)" }}>
            星を追尾する<strong style={{ color: "var(--text)" }}>ポータブル赤道儀</strong>を使うと、500ルールを超えて露光でき、
            より多くの星や淡い天の川を写せます（その分ピント・構図はシビアに）。赤道儀は天体観望でも使う機材です。
          </p>
        </div>
      </section>

      <p className="mt-10 text-xs" style={{ color: "var(--muted)", opacity: 0.7 }}>
        ※ 数値は経験則に基づく目安です。実際の許容範囲はレンズ・画素ピッチ・鑑賞サイズ・天の赤緯で変わります。
      </p>
    </article>
  );
}
