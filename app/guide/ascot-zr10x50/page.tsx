import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell, { Section } from "@/components/ArticleShell";

export const metadata: Metadata = {
  title: "10×50双眼鏡で星空観望｜アスコット ZR10×50WPで見える天体と使い方",
  description:
    "ビクセン アスコット ZR10×50WPを例に、10倍×口径50mm双眼鏡での星空観望を解説。月・すばる・天の川など見える天体、ひとみ径5mmの意味、三脚固定のすすめ、撮影との楽しみ方の違いまで。",
  alternates: { canonical: "/guide/ascot-zr10x50" },
};

export default function Page() {
  return (
    <ArticleShell
      slug="guide/ascot-zr10x50"
      title="10×50双眼鏡で星空観望：アスコット ZR10×50WPの楽しみ方"
      lead="星空の趣味は「撮る」だけではありません。10倍×口径50mmの双眼鏡は、望遠鏡より手軽に星雲・星団・天の川を『その場で観る』ための定番スペック。アスコット ZR10×50WPを例に解説します。"
      datePublished="2026-06-10"
      related={[
        { href: "/gear/astro-binoculars", label: "【ギア詳細】ビクセン アスコット ZR10×50WP" },
        { href: "/guide/binoculars-vs-telescope", label: "双眼鏡 vs 望遠鏡（天体観測）" },
        { href: "/guide/telescope-beginner", label: "はじめての天体望遠鏡の選び方" },
        { href: "/guide/tonight-sky", label: "季節別・見える星座と天体" },
      ]}
    >
      <Section heading="なぜ星見の双眼鏡は「10×50」が定番なのか">
        双眼鏡の「10×50」は<strong style={{ color: "var(--text)" }}>倍率10倍・対物レンズ口径50mm</strong>の意味。
        星見でこのスペックが定番なのは、<strong style={{ color: "var(--text)" }}>ひとみ径（口径÷倍率）が5mm</strong>になるからです。
        暗い場所で開いた人間の瞳に近い太さで光が届くため、淡い天体が見やすい——スペック表の「ひとみ径5.0mm」にはそういう意味があります。
        アスコット ZR10×50WPはこれに<strong style={{ color: "var(--text)" }}>実視界6.5°の広さと防水</strong>を備えた入門定番機です（詳細は
        <Link href="/gear/astro-binoculars" className="underline mx-1" style={{ color: "var(--accent)" }}>ギア詳細ページ</Link>）。
      </Section>
      <Section heading="実際に何が見えるか">
        ・<strong style={{ color: "var(--text)" }}>月</strong>：クレーターの凹凸が分かる。最初の一目に最適<br />
        ・<strong style={{ color: "var(--text)" }}>すばる（プレアデス星団）</strong>：肉眼で数個の星が、視野いっぱいの星の群れに化ける。双眼鏡観望のハイライト<br />
        ・<strong style={{ color: "var(--text)" }}>天の川</strong>：空の暗い場所なら、もやっとした帯が無数の星に分解されて見える<br />
        ・<strong style={{ color: "var(--text)" }}>二重星団・アンドロメダ銀河</strong>：空の条件が良ければ淡い光のシミとして捉えられる<br />
        惑星の模様（木星の縞など）は倍率不足で見えません。そこから先は
        <Link href="/guide/telescope-beginner" className="underline mx-1" style={{ color: "var(--accent2)" }}>望遠鏡</Link>の出番です。
        今夜の対象は<Link href="/guide/tonight-sky" className="underline mx-1" style={{ color: "var(--accent)" }}>季節別ガイド</Link>で。
      </Section>
      <Section heading="使い方のコツ：手ブレとの戦い">
        10倍は手持ちの限界に近く、<strong style={{ color: "var(--text)" }}>腕がプルプルすると星も踊ります</strong>。<br />
        ① 肘を体に付ける・座って膝に肘を置くだけでかなり安定する<br />
        ② 本気で観るなら<strong style={{ color: "var(--text)" }}>ビノホルダーで三脚に固定</strong>。約1,040gの本機は手持ち長時間より三脚が快適で、見え味が一変する<br />
        ③ ピントは明るい星でセンターフォーカスを合わせ、視度調整リングで左右の差を補正
      </Section>
      <Section heading="観望の作法">
        ・<strong style={{ color: "var(--text)" }}>暗順応15〜20分</strong>：目が暗闇に慣れるほど見える星は増える。スマホの白い画面は見ない<br />
        ・手元は<Link href="/gear/red-headlamp" className="underline mx-1" style={{ color: "var(--accent)" }}>赤色ライト</Link>で照らす（暗順応を保つ）<br />
        ・夜露に注意：レンズが曇ったら拭かずに自然乾燥が基本。防水機でも収納前に乾かす
      </Section>
      <Section heading="「撮る」派にも双眼鏡をすすめる理由">
        撮影は露光中の待ち時間が長い趣味です。<strong style={{ color: "var(--text)" }}>カメラが30秒×何十枚を撮っている間、双眼鏡で同じ空を流す</strong>——
        撮って待つだけだった時間が観望タイムに変わります。撮影と観望は対立ではなく相性のいい組み合わせです。
        どちらを深めるかの整理は<Link href="/guide/binoculars-vs-telescope" className="underline mx-1" style={{ color: "var(--accent2)" }}>双眼鏡 vs 望遠鏡</Link>へ。
      </Section>
      <p className="text-xs" style={{ color: "var(--muted)", opacity: 0.7 }}>
        ※ 製品仕様は<Link href="/gear/astro-binoculars" className="underline mx-1">ギア詳細ページ</Link>（メーカー公式出典）参照。見え方は空の暗さ・気流条件で変わります。
      </p>
    </ArticleShell>
  );
}
