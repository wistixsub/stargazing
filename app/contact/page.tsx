import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "星空ノートへのお問い合わせフォーム。掲載のご相談（撮影機材・光学機器メーカー様、専門ショップ様）、記事内容の誤り報告などはこちらから。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold">お問い合わせ</h1>
      <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        掲載のご相談（メーカー・ショップ様）、記事内容の誤り報告などは、下記フォームからお送りください。
        星空写真の投稿は<Link href="/submit" className="underline mx-1" style={{ color: "var(--accent)" }}>作例投稿フォーム</Link>をご利用ください。
      </p>

      <div className="mt-6">
        <ContactForm />
      </div>

      <p className="mt-6 text-xs" style={{ color: "var(--muted)", opacity: 0.8 }}>
        いただいた個人情報はお問い合わせへの対応にのみ使用します（
        <Link href="/privacy" className="underline" style={{ color: "var(--accent)" }}>プライバシーポリシー</Link>
        ）。
      </p>
    </div>
  );
}
