import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "星空ノートのプライバシーポリシー。アクセス解析（Google Analytics）の利用、アフィリエイトプログラムへの参加、個人情報の取り扱いについて。",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold">プライバシーポリシー</h1>
      <p className="mt-2 text-xs" style={{ color: "var(--muted)", opacity: 0.7 }}>
        制定日：2026年6月10日
      </p>

      <section className="mt-8">
        <h2 className="text-lg font-bold mb-2">個人情報の取り扱い</h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          {SITE_NAME}（以下「当サイト」）は、作例投稿フォーム等を通じて取得したお名前（ハンドルネーム）・メールアドレス等の個人情報を、
          お問い合わせへの回答・作例掲載の連絡という目的の範囲内でのみ利用し、ご本人の同意なく第三者に提供しません。
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-bold mb-2">アクセス解析ツールについて</h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          当サイトは、Googleによるアクセス解析ツール「Google Analytics（GA4）」を利用しています。
          Google Analyticsはトラフィックデータの収集のためにCookieを使用します。このデータは匿名で収集されており、個人を特定するものではありません。
          この機能はブラウザの設定でCookieを無効にすることで収集を拒否できます。詳細は
          <a href="https://marketingplatform.google.com/about/analytics/terms/jp/" className="underline mx-1" style={{ color: "var(--accent)" }} rel="nofollow noopener" target="_blank">
            Googleアナリティクス利用規約
          </a>
          をご確認ください。
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-bold mb-2">広告・アフィリエイトプログラムについて</h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          当サイトは、第三者がコンテンツおよび宣伝を提供し、訪問者から直接情報を収集する場合があるアフィリエイトプログラム
          （もしもアフィリエイト・楽天アフィリエイト等）に参加しています。
        </p>
        <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          Amazonのアソシエイトとして、{SITE_NAME}は適格販売により収入を得ています。
        </p>
        <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          商品リンクを経由して購入された場合、当サイトに紹介料が支払われることがありますが、購入者様の支払額に追加の負担は発生しません。
          掲載する商品情報はメーカー公式情報に基づき、紹介料の有無で評価を変えない方針で運営しています（
          <Link href="/about" className="underline mx-1" style={{ color: "var(--accent)" }}>運営方針</Link>
          参照）。
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-bold mb-2">免責事項</h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          当サイトのコンテンツ・情報については、可能な限り正確な情報を掲載するよう努めていますが、正確性や安全性を保証するものではありません。
          当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-bold mb-2">本ポリシーの変更</h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          本ポリシーの内容は、法令の変更や運営上の必要に応じて、予告なく変更されることがあります。変更後の内容は本ページに掲載した時点で効力を生じます。
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-bold mb-2">お問い合わせ</h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          本ポリシーに関するお問い合わせは
          <Link href="/submit" className="underline mx-1" style={{ color: "var(--accent)" }}>投稿・お問い合わせフォーム</Link>
          からお願いします。
        </p>
      </section>
    </article>
  );
}
