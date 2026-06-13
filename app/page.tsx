import Link from "next/link";
import Image from "next/image";
import { approvedSamples } from "@/lib/samples";
import { getProduct } from "@/lib/products";
import { gearImageSrc } from "@/lib/productImages";
import GearImage from "@/components/GearImage";
import Calc500Mini from "@/components/Calc500Mini";
import MoonWeekStrip from "@/components/MoonWeekStrip";
import { LineIcon } from "@/components/icons";
import icCamera from "@/public/img/ic-camera.png";
import icBookmark from "@/public/img/ic-bookmark.png";
import icBeginner from "@/public/img/ic-beginner.png";
import icStart from "@/public/img/ic-start.png";
import icGear from "@/public/img/ic-gear.png";
import icTechnique from "@/public/img/ic-technique.png";
import icCalc from "@/public/img/ic-calc.png";
import icMoon from "@/public/img/ic-moon.png";

// ギア4カード（カテゴリ紹介→カテゴリのビューへ。専用ハブがあればハブ、無ければ /gear の該当セクション）
// 画像は代表商品(slug)から解決（楽天取得画像→自前イラストの順）。
const GEAR_CARDS = [
  { title: "赤道儀", desc: "星を点で写すための必須アイテム。自動追尾で長時間露光をサポート。", slug: "portable-star-tracker", href: "/gear/star-trackers" },
  { title: "広角レンズ", desc: "天の川や星景を広く美しく写す。焦点距離の選び方を解説。", slug: "wide-fast-lens", href: "/gear/lenses" },
  { title: "三脚", desc: "安定した撮影の土台。選び方と使い方のポイント。", slug: "sturdy-tripod", href: "/gear#tripod" },
  { title: "赤色ライト", desc: "暗闇に目を慣らしながら作業できる。撮影の強い味方。", slug: "red-headlamp", href: "/gear#accessory" },
];

const INTRO_ITEMS = [
  { icon: icStart, title: "星空撮影の始め方", desc: "持ち物・場所・設定を1ページで", href: "/guide/beginner" },
  { icon: icGear, title: "機材の選び方", desc: "予算別のおすすめ構成", href: "/gear" },
  { icon: icTechnique, title: "撮影テクニック", desc: "設定・ピント・構図の基本", href: "/guide/settings" },
];

const cardShadow = "0 8px 22px rgba(40,70,120,.06)";

export default function Home() {
  const samples = approvedSamples();

  return (
    <div>
      {/* ============ HERO（Claude Designモック 2026-06-10 準拠） ============ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(150deg,#c7dbf0 0%,#d4e0ec 38%,#e9e3da 72%,#f7e8d6 100%)" }}
      >
        <div className="max-w-[1680px] mx-auto relative min-h-[560px]">
          <div
            className="absolute inset-y-0 right-0 w-full opacity-50 sm:opacity-100 sm:w-[58%]"
            style={{
              backgroundImage: "url('/photos/hero-milkyway-v2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center 38%",
              WebkitMaskImage: "linear-gradient(90deg,transparent 0%,rgba(0,0,0,.55) 16%,#000 42%)",
              maskImage: "linear-gradient(90deg,transparent 0%,rgba(0,0,0,.55) 16%,#000 42%)",
            }}
            role="img"
            aria-label="天の川の星空"
          />
          {/* 星座・流れ星の装飾 */}
          <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true">
            <svg width="320" height="160" viewBox="0 0 320 160" className="absolute hidden md:block" style={{ left: "46%", top: 60, opacity: 0.5 }}>
              <g fill="#5a7aa6"><circle cx="20" cy="40" r="3" /><circle cx="90" cy="20" r="3" /><circle cx="160" cy="60" r="3" /><circle cx="230" cy="30" r="3" /><circle cx="300" cy="80" r="3" /></g>
              <path d="M20 40 L90 20 L160 60 L230 30 L300 80" stroke="#7d97bd" strokeWidth="1.2" fill="none" strokeDasharray="3 5" />
            </svg>
            <svg width="200" height="130" viewBox="0 0 200 130" className="absolute" style={{ left: "6%", top: 300, opacity: 0.45 }}>
              <g fill="#7d93b4"><circle cx="20" cy="20" r="2.6" /><circle cx="80" cy="50" r="2.6" /><circle cx="140" cy="20" r="2.6" /><circle cx="120" cy="100" r="2.6" /><circle cx="60" cy="110" r="2.6" /></g>
              <path d="M20 20 L80 50 L140 20 M80 50 L120 100 L60 110" stroke="#9aafce" strokeWidth="1" fill="none" strokeDasharray="2 4" />
            </svg>
            <svg width="160" height="70" viewBox="0 0 160 70" className="absolute hidden md:block" style={{ left: "54%", top: 40, opacity: 0.85 }}>
              <line x1="10" y1="14" x2="120" y2="48" stroke="url(#sg)" strokeWidth="2.2" strokeLinecap="round" />
              <circle cx="124" cy="49" r="3.5" fill="#fff" />
              <path d="M124 41 l2 6 6 2 -6 2 -2 6 -2-6 -6-2 6-2 z" fill="#f4b942" />
              <defs><linearGradient id="sg" x1="0" x2="1"><stop offset="0" stopColor="#ffffff" stopOpacity="0" /><stop offset="1" stopColor="#ffffff" /></linearGradient></defs>
            </svg>
          </div>
          <div className="relative z-[3] px-4 sm:px-10 pt-[74px] pb-[90px] max-w-[780px]">
            <h1
              className="text-5xl md:text-7xl xl:text-[84px] xl:whitespace-nowrap leading-[1.08] mb-6"
              style={{ fontFamily: "var(--font-noto-serif), serif", fontWeight: 900, letterSpacing: ".01em", color: "#16294a", textShadow: "0 1px 0 rgba(255,255,255,.4)" }}
            >
              <span className="inline-block">星を、<span style={{ color: "#234a78" }}>撮</span>る<span style={{ color: "#234a78" }}>。</span></span><span className="inline-block">観る<span style={{ color: "#234a78" }}>。</span></span>
            </h1>
            <p className="text-lg md:text-[19px] font-medium max-w-[600px] leading-[1.85]" style={{ color: "#2c3e58", textShadow: "0 1px 2px rgba(255,255,255,.5)" }}>
              星空撮影の機材ガイドと撮影作例が集まる専門メディア。
            </p>
            <p className="text-lg md:text-[19px] font-medium max-w-[600px] leading-[1.85] mb-7" style={{ color: "#2c3e58", textShadow: "0 1px 2px rgba(255,255,255,.5)" }}>
              星を「撮る・観る」ための機材の選び方・使い方と、読者の作例が集まる場所。
            </p>
            <div
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full text-sm font-semibold mb-8"
              style={{
                background: "rgba(255,255,255,.78)",
                border: "1px solid rgba(255,255,255,.9)",
                boxShadow: "0 4px 14px rgba(40,70,120,.12)",
                color: "#284268",
                backdropFilter: "blur(4px)",
              }}
            >
              <Image src={icBookmark} alt="" className="w-4 h-5 object-contain" />
              機材ガイド
              <span className="w-px h-4" style={{ background: "#c5cfdd" }} />
              撮影作例
            </div>
            <div>
              <Link
                href="/gear"
                className="inline-flex items-center gap-4 text-white font-bold text-lg md:text-[23px] px-8 md:px-10 py-4 md:py-5 rounded-full transition hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(180deg,#3f8ad2,#225fa0)",
                  boxShadow: "0 14px 30px rgba(34,84,150,.4)",
                  border: "1px solid rgba(255,255,255,.28)",
                }}
              >
                <Image src={icCamera} alt="" className="w-8 h-[26px] object-contain brightness-0 invert" />
                星空撮影ギアを見る
                <span className="text-xl opacity-90">›</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ギア4カード（ヒーローに重なる） ============ */}
      <section className="pb-[18px]" style={{ background: "linear-gradient(180deg,#eef4fb 0%,#f8fafd 60%,#fbfcfe 100%)" }}>
        <div className="max-w-[1680px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[30px] px-4 sm:px-10 -mt-[58px] relative z-10">
          {GEAR_CARDS.map((g) => {
            const p = getProduct(g.slug);
            return (
            <Link
              key={g.title}
              href={g.href}
              className="group flex items-start gap-5 rounded-[18px] p-6 sm:p-7 transition hover:-translate-y-1"
              style={{ background: "var(--surface)", border: "1px solid var(--card-border)", boxShadow: "0 12px 30px rgba(40,70,120,.08)" }}
            >
              <span
                className="w-24 h-24 shrink-0 rounded-full flex items-center justify-center overflow-hidden"
                style={{ background: "radial-gradient(circle at 50% 45%,#eaf3f3 0%,#e3eef2 55%,#dde9f0 100%)" }}
              >
                <GearImage src={p ? gearImageSrc(p) : null} alt={g.title} icon={p?.icon ?? "camera"} size={88} />
              </span>
              <span className="block">
                <span className="block text-[21px] font-bold tracking-wide mt-0.5 mb-2" style={{ color: "var(--navy)" }}>{g.title}</span>
                <span className="block text-sm leading-relaxed mb-3.5" style={{ color: "var(--muted)" }}>{g.desc}</span>
                <span className="inline-flex items-center gap-2 font-bold text-sm" style={{ color: "var(--accent)" }}>
                  詳しく見る <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </span>
            </Link>
            );
          })}
        </div>
      </section>

      {/* ============ コンテンツ（作例ギャラリー＋はじめての方へ｜便利ツール） ============ */}
      <div className="max-w-[1680px] mx-auto grid grid-cols-1 xl:grid-cols-[1fr_432px] gap-10 px-4 sm:px-10 pt-12 pb-14">
        {/* 左：作例ギャラリー */}
        <div>
          <div className="flex items-center gap-3.5 mb-5 flex-wrap">
            <Image src={icCamera} alt="" className="w-[30px] h-[30px] object-contain" />
            <h2 className="text-[26px] font-black tracking-wide" style={{ color: "var(--navy)" }}>新着の作例ギャラリー</h2>
            <span className="text-[13.5px] font-medium" style={{ color: "var(--muted2)" }}>読者の素敵な星空写真を紹介</span>
            <Link href="/gallery" className="ml-auto flex items-center gap-1.5 font-bold text-sm hover:underline" style={{ color: "var(--accent)" }}>
              すべての作例を見る <span>→</span>
            </Link>
          </div>

          {samples.length === 0 ? (
            /* 実投稿が集まるまでの空状態（サクラ作例は置かない方針） */
            <div
              className="rounded-[18px] p-8 sm:p-12 text-center"
              style={{ background: "var(--surface)", border: "1px solid var(--card-border)", boxShadow: cardShadow }}
            >
              <div className="text-5xl mb-4" aria-hidden="true">🌌</div>
              <h3 className="text-lg sm:text-xl font-bold" style={{ color: "var(--navy)" }}>作例ギャラリー、第1号を募集中です</h3>
              <p className="mt-3 text-sm leading-relaxed max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
                このギャラリーには、読者のみなさんが撮った<strong>本物の星空写真だけ</strong>を掲載します。
                あなたの一枚に使用機材のタグを付けて、これから星を撮る人の道しるべにしませんか。
              </p>
              <p className="mt-6">
                <Link
                  href="/submit"
                  className="inline-block rounded-full px-7 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(180deg,#3a86cf,#2360a3)", boxShadow: "0 6px 16px rgba(38,96,164,.32)" }}
                >
                  第1号として作例を投稿する →
                </Link>
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4">
              {samples.slice(0, 5).map((s) => (
                <Link
                  key={s.id}
                  href="/gallery"
                  className="group rounded-[13px] overflow-hidden transition hover:-translate-y-1"
                  style={{ background: "var(--surface)", border: "1px solid var(--card-border)", boxShadow: "0 8px 20px rgba(40,70,120,.07)" }}
                >
                  <div className="relative h-[166px] overflow-hidden">
                    {s.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={s.image} alt={s.title} className="w-full h-full object-cover transition duration-300 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-3xl" style={{ background: "var(--surface2)" }} aria-hidden="true">🌌</div>
                    )}
                    <div
                      className="absolute inset-x-0 bottom-0 px-3 pt-6 pb-2 text-white text-[13px] font-bold tracking-wide"
                      style={{ background: "linear-gradient(180deg,transparent,rgba(12,22,40,.78))" }}
                    >
                      {s.title}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-2 text-[11px]" style={{ color: "var(--muted)" }}>
                    <span className="font-bold whitespace-nowrap" style={{ color: "var(--navy)" }}>by {s.author}</span>
                    {s.shotData && (
                      <>
                        <span className="w-px h-[11px] shrink-0" style={{ background: "var(--border)" }} />
                        <span className="truncate">{s.shotData}</span>
                      </>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* はじめての方へ */}
          <div
            id="hajimete"
            className="mt-10 rounded-[18px] px-6 sm:px-8 py-7"
            style={{ background: "var(--surface)", border: "1px solid var(--card-border)", boxShadow: cardShadow }}
          >
            <div className="flex items-center gap-3.5 mb-5 flex-wrap">
              <Image src={icBeginner} alt="" className="w-[26px] h-[26px] object-contain" />
              <h3 className="text-[22px] font-black" style={{ color: "var(--navy)" }}>はじめての方へ</h3>
              <span className="text-[13.5px] font-medium" style={{ color: "var(--muted2)" }}>
                星空撮影の始め方や、必要な機材の選び方をやさしく解説
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {INTRO_ITEMS.map((it) => (
                <Link key={it.title} href={it.href} className="group flex items-start gap-3.5 py-1.5">
                  <Image src={it.icon} alt="" className="w-[30px] h-[30px] object-contain mt-0.5" />
                  <span>
                    <b className="block text-base font-bold mb-0.5 transition group-hover:text-[var(--accent)]" style={{ color: "var(--navy)" }}>
                      {it.title}
                    </b>
                    <span className="block text-[13px] leading-relaxed" style={{ color: "var(--muted)" }}>{it.desc}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 右：便利ツール */}
        <aside>
          <div className="flex items-center gap-3.5 mb-5">
            <svg className="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="#2c74bf" aria-hidden="true">
              <path d="M12 1 l2.4 7.2 7.6 0.4 -6.1 4.6 2.2 7.4 -6.1-4.4 -6.1 4.4 2.2-7.4 -6.1-4.6 7.6-0.4 z" opacity=".9" />
            </svg>
            <h2 className="text-[26px] font-black tracking-wide" style={{ color: "var(--navy)" }}>便利ツール</h2>
          </div>

          <div className="rounded-[18px] px-6 sm:px-[26px] py-6 mb-[22px]" style={{ background: "var(--surface)", border: "1px solid var(--card-border)", boxShadow: cardShadow }}>
            <Link href="/tools/500-rule" className="group flex items-start gap-3.5 mb-4">
              <Image src={icCalc} alt="" className="w-[42px] h-[42px] object-contain shrink-0 mt-0.5" />
              <span>
                <span className="block text-lg font-extrabold mb-1 transition group-hover:text-[var(--accent)]" style={{ color: "var(--navy)" }}>
                  500ルール計算機
                </span>
                <span className="block text-[12.5px] leading-snug" style={{ color: "var(--muted)" }}>
                  500ルールで適正露光時間を計算。焦点距離を入力するだけ。
                </span>
              </span>
            </Link>
            <Calc500Mini />
          </div>

          <div className="rounded-[18px] px-6 sm:px-[26px] py-6" style={{ background: "var(--surface)", border: "1px solid var(--card-border)", boxShadow: cardShadow }}>
            <Link href="/tools/moon-calendar" className="group flex items-start gap-3.5 mb-4">
              <Image src={icMoon} alt="" className="w-[42px] h-[42px] object-contain shrink-0 mt-0.5" />
              <span>
                <span className="block text-lg font-extrabold mb-1 transition group-hover:text-[var(--accent)]" style={{ color: "var(--navy)" }}>
                  月齢カレンダー
                </span>
                <span className="block text-[12.5px] leading-snug" style={{ color: "var(--muted)" }}>
                  月の満ち欠けと月齢をカレンダーで確認。撮影計画にお役立てください。
                </span>
              </span>
            </Link>
            <MoonWeekStrip />
          </div>

          <Link
            href="/glossary"
            className="group block rounded-[18px] px-6 sm:px-[26px] py-6 mt-[22px] transition hover:-translate-y-0.5"
            style={{ background: "var(--surface)", border: "1px solid var(--card-border)", boxShadow: cardShadow }}
          >
            <span className="flex items-start gap-3.5">
              <span
                className="w-[42px] h-[42px] shrink-0 rounded-full flex items-center justify-center"
                style={{ background: "radial-gradient(circle at 50% 45%,#eaf3f3 0%,#e3eef2 55%,#dde9f0 100%)" }}
              >
                <LineIcon name="glossary" size={24} style={{ color: "var(--navy)" }} />
              </span>
              <span>
                <span className="block text-lg font-extrabold mb-1 transition group-hover:text-[var(--accent)]" style={{ color: "var(--navy)" }}>
                  星空撮影の用語集
                </span>
                <span className="block text-[12.5px] leading-snug" style={{ color: "var(--muted)" }}>
                  赤道儀・500ルール・暗順応…。星空撮影でよく出てくることばを、関連する機材・ガイドとあわせて確認できます。
                </span>
                <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold" style={{ color: "var(--accent)" }}>
                  用語集を見る <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </span>
            </span>
          </Link>
        </aside>
      </div>
    </div>
  );
}
