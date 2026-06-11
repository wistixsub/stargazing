import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { SITE_URL, SITE_NAME, GA_ID } from "@/lib/site";
import logoConstellation from "@/public/img/logo-constellation.png";
import logoWordmark from "@/public/img/logo-wordmark.png";
import icGear from "@/public/img/ic-gear.png";
import icGallery from "@/public/img/ic-gallery.png";
import icGuide from "@/public/img/ic-guide.png";
import icTools from "@/public/img/ic-tools.png";
import icBeginner from "@/public/img/ic-beginner.png";
import icAbout from "@/public/img/ic-about.png";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans",
});
const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
  variable: "--font-noto-serif",
});

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

const NAV_MAIN = [
  { href: "/gear", icon: icGear, label: "ギア", sub: "機材カタログ" },
  { href: "/gallery", icon: icGallery, label: "作例", sub: "ギャラリー" },
  { href: "/guide", icon: icGuide, label: "ガイド", sub: "撮影ガイド" },
  { href: "/tools/500-rule", icon: icTools, label: "ツール", sub: "便利ツール" },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${notoSans.variable} ${notoSerif.variable} h-full antialiased`}>
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
        <header
          className="sticky top-0 z-50 border-b"
          style={{
            borderColor: "var(--border)",
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "saturate(140%) blur(8px)",
          }}
        >
          <div className="max-w-[1680px] mx-auto flex items-center gap-5 lg:gap-8 px-4 sm:px-10 py-3.5">
            <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="星空ノート">
              <Image src={logoConstellation} alt="" className="h-[42px] w-auto opacity-95" priority />
              <Image src={logoWordmark} alt="星空ノート Hoshizora Note" className="h-10 w-auto" priority />
            </Link>
            <nav className="hidden xl:flex items-center gap-[30px] ml-1">
              {NAV_MAIN.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="flex items-center gap-[11px] py-1.5 px-1 transition hover:-translate-y-px"
                >
                  <Image src={n.icon} alt="" className="w-[26px] h-[26px] object-contain shrink-0" />
                  <span>
                    <b className="block font-bold text-base leading-tight tracking-wide whitespace-nowrap" style={{ color: "var(--navy)" }}>
                      {n.label}
                    </b>
                    <span className="block text-[11.5px] leading-tight tracking-wide whitespace-nowrap" style={{ color: "var(--muted2)" }}>
                      {n.sub}
                    </span>
                  </span>
                </Link>
              ))}
            </nav>
            <div className="ml-auto flex items-center gap-4 sm:gap-[26px]">
              <Link
                href="/#hajimete"
                className="flex items-center gap-2 text-sm font-medium transition hover:opacity-80"
                style={{ color: "var(--ink-soft)" }}
              >
                <Image src={icBeginner} alt="" className="w-[22px] h-[22px] object-contain" />
                <span className="hidden sm:inline">はじめての方へ</span>
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 text-sm font-medium transition hover:opacity-80"
                style={{ color: "var(--ink-soft)" }}
              >
                <Image src={icAbout} alt="" className="w-[22px] h-[22px] object-contain" />
                <span className="hidden sm:inline">このサイトについて</span>
              </Link>
              <Link
                href="/guide"
                className="text-white font-bold text-sm px-[22px] py-[11px] rounded-full transition hover:-translate-y-px whitespace-nowrap"
                style={{
                  background: "linear-gradient(180deg,#3a86cf,#2360a3)",
                  boxShadow: "0 6px 16px rgba(38,96,164,.32)",
                  border: "1px solid rgba(255,255,255,.25)",
                }}
              >
                新着記事
              </Link>
            </div>
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
              <Link href="/privacy" className="hover:opacity-80">プライバシーポリシー</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
