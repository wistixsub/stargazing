import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";
import { SITE_URL, SITE_NAME, GA_ID } from "@/lib/site";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", name: SITE_NAME, url: SITE_URL, inLanguage: "ja" },
    { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "星空ノート | 星空撮影と天体観望のガイド",
    template: "%s | 星空ノート",
  },
  description:
    "星空撮影の設定・機材・季節の早見と、天体観望（望遠鏡）の入門ガイド。500ルール計算機など実用ツールも。星を「撮る・観る」ための中立的な情報サイト。",
  keywords: ["星空撮影", "天体写真", "星空 設定", "天の川 撮影", "天体観望", "望遠鏡 選び方"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "星空ノート",
    title: "星空ノート | 星空撮影と天体観望のガイド",
    description: "星を「撮る・観る」ためのガイドと実用ツール。",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}</Script>
          </>
        )}
        <header className="border-b" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <svg width="22" height="22" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <path d="M32 13 C34.5 27 37 29.5 51 32 C37 34.5 34.5 37 32 51 C29.5 37 27 34.5 13 32 C27 29.5 29.5 27 32 13 Z" fill="var(--accent)" />
              </svg>
              <span className="text-lg font-bold tracking-wide" style={{ color: "var(--text)" }}>星空ノート</span>
              <span className="text-xs" style={{ color: "var(--accent)" }}>撮る・観る</span>
            </Link>
            <nav className="flex items-center gap-4 sm:gap-5 text-sm" style={{ color: "var(--muted)" }}>
              <Link href="/gear" className="hover:opacity-80" style={{ color: "var(--text)" }}>ギア</Link>
              <Link href="/gallery" className="hover:opacity-80">作例</Link>
              <Link href="/guide" className="hover:opacity-80">ガイド</Link>
              <Link href="/tools/500-rule" className="hover:opacity-80">ツール</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t mt-12 py-8 text-sm" style={{ borderColor: "var(--border)", background: "var(--surface)", color: "var(--muted)" }}>
          <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p>© 2026 星空ノート — 星を撮る・観るためのガイド</p>
            <nav className="flex gap-4 flex-wrap">
              <Link href="/gear" className="hover:opacity-80">ギア</Link>
              <Link href="/gallery" className="hover:opacity-80">作例</Link>
              <Link href="/guide" className="hover:opacity-80">ガイド</Link>
              <Link href="/tools/500-rule" className="hover:opacity-80">ツール</Link>
              <Link href="/about" className="hover:opacity-80">このサイトについて</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
