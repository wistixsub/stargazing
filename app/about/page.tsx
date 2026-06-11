import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "このサイトについて｜運営方針・掲載のご案内",
  description:
    "星空ノートの運営方針（中立・実用重視）、免責事項、そして撮影機材・光学メーカー様向けの掲載のご案内・お問い合わせ。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold">このサイトについて</h1>

      <section className="mt-8">
        <h2 className="text-lg font-bold mb-2">運営方針</h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          {SITE_NAME}は、星空を「撮る・観る」ための実用情報を、できるだけ中立にまとめるガイドサイトです。
          設定値・機材の選び方・季節の早見などを、特定メーカーへの誘導ありきでなく、判断材料として提供することを目指しています。
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-bold mb-2">免責事項</h2>
        <ul className="text-sm leading-relaxed space-y-1 list-disc list-inside" style={{ color: "var(--muted)" }}>
          <li>掲載する数値（露光時間・月齢・見える天体など）は一般的な目安です。条件により最適値は変わります。</li>
          <li>機材選び・撮影は自己責任で。夜間の屋外活動は安全・私有地・自然環境に配慮してください。</li>
          <li>情報の正確性・最新性を保証するものではありません。重要な点は公式情報等でご確認ください。</li>
        </ul>
      </section>

      <section className="mt-8" id="ads">
        <h2 className="text-lg font-bold mb-2">掲載のご案内（メーカー・ショップ様へ）</h2>
        <div className="rounded-lg border p-4 text-sm leading-relaxed" style={{ borderColor: "var(--border)", background: "var(--surface)", color: "var(--muted)" }}>
          <p>
            当サイトの読者は、星空撮影や天体観望に関心があり、<strong style={{ color: "var(--text)" }}>カメラ・レンズ・三脚・赤道儀・双眼鏡・望遠鏡などの購入を検討している層</strong>です。
          </p>
          <p className="mt-2">
            撮影機材・光学機器メーカー様、専門ショップ様向けに、関連記事での掲載枠（純広告）等のご相談を承ります（媒体資料は整備中）。
            掲載は記事の中立性を損なわない範囲で行います。
          </p>
          <Link
            href="/contact"
            className="mt-3 inline-block rounded-lg px-5 py-2.5 font-bold text-sm"
            style={{ background: "var(--accent)", color: "#ffffff" }}
          >
            フォームから問い合わせる
          </Link>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-bold mb-2">運営者情報</h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          当サイトは個人が運営しています。星空撮影の入門情報を一次情報（メーカー公式）に基づいて整理し、
          広告・アフィリエイトの有無で評価を変えない方針です（詳細は
          <Link href="/privacy" className="underline mx-1" style={{ color: "var(--accent)" }}>プライバシーポリシー</Link>
          ）。
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-bold mb-2">お問い合わせ</h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          内容の誤り報告・ご相談は
          <Link href="/contact" className="underline mx-1" style={{ color: "var(--accent)" }}>お問い合わせフォーム</Link>
          まで。まずは
          <Link href="/tools/500-rule" className="underline mx-1" style={{ color: "var(--accent)" }}>ツール</Link>
          や
          <Link href="/guide" className="underline mx-1" style={{ color: "var(--accent)" }}>ガイド</Link>
          をご覧ください。
        </p>
      </section>

      <p className="mt-10 text-xs" style={{ color: "var(--muted)", opacity: 0.6 }}>
        サイトURL: {SITE_URL}
      </p>
    </article>
  );
}
