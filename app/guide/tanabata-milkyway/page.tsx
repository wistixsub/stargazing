import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell, { Section } from "@/components/ArticleShell";
import MoonWeekStrip from "@/components/MoonWeekStrip";

export const metadata: Metadata = {
  title: "七夕に天の川は見える？｜本当の見頃は「伝統的七夕」（2026年は8月19日）",
  description:
    "7月7日の七夕に天の川は見えるのか——実は新暦7月7日は梅雨と重なり見えにくい夜です。天の川が本当に見やすいのは梅雨明け後、国立天文台が呼びかける「伝統的七夕」（2026年は8月19日）の頃。七夕の星（夏の大三角）の見つけ方と、誰でも天の川に会うための条件を解説します。",
  alternates: { canonical: "/guide/tanabata-milkyway" },
};

const toolBox: React.CSSProperties = {
  background: "var(--surface)",
  border: "1px solid var(--card-border)",
  boxShadow: "0 8px 22px rgba(40,70,120,.06)",
};

export default function Page() {
  return (
    <ArticleShell
      slug="guide/tanabata-milkyway"
      title="七夕に天の川は見える？ 本当の見頃は「伝統的七夕」"
      lead="織姫と彦星が天の川を挟んで出会う七夕。では7月7日に夜空を見上げれば天の川に会えるのか——正直に言うと、新暦の7月7日は天の川観察には少し不利な夜です。理由と、本当に見やすい時期（国立天文台が呼びかける「伝統的七夕」）、そして七夕の星の見つけ方をまとめました。"
      datePublished="2026-06-16"
      related={[
        { href: "/guide/milkyway-season", label: "天の川が見える時期と方角（撮影の狙い目）" },
        { href: "/guide/perseids-2026", label: "ペルセウス座流星群2026（8月は流星も見頃）" },
        { href: "/guide/beginner", label: "星空撮影の始め方【初心者完全ガイド】" },
        { href: "/guide/smartphone", label: "スマホで星空を撮る方法" },
        { href: "/tools/moon-calendar", label: "月齢カレンダー（観察日選びに）" },
      ]}
    >
      <Section heading="なぜ7月7日は天の川が見えにくいのか">
        <p>
          がっかりさせてしまうかもしれませんが、<strong style={{ color: "var(--text)" }}>新暦の7月7日</strong>は
          天の川を見るには条件がそろいにくい日です。理由は2つあります。
        </p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li><strong style={{ color: "var(--text)" }}>梅雨のまっただ中</strong>——日本の多くの地域で7月上旬はまだ梅雨。そもそも空が雲に覆われている夜が多くなります。</li>
          <li><strong style={{ color: "var(--text)" }}>時間と高さの問題</strong>——七夕の星（天の川）が空高く昇るのは夜が更けてから。日没直後はまだ低く、空も明るさが残っています。</li>
        </ul>
        <p className="mt-2">
          つまり「7月7日に見えない」のは、あなたの探し方のせいではなく<strong style={{ color: "var(--text)" }}>暦と季節の都合</strong>なのです。
        </p>
      </Section>

      <Section heading="本当の見頃＝「伝統的七夕」（2026年は8月19日）">
        <p>
          そこで知っておきたいのが、国立天文台が2001年から呼びかけている
          <strong style={{ color: "var(--text)" }}>「伝統的七夕」</strong>です。
          これは旧暦の7月7日にあたる日で、現在の暦では<strong style={{ color: "var(--text)" }}>8月頃</strong>になります。
          <strong style={{ color: "var(--text)" }}>2026年の伝統的七夕は8月19日</strong>。
          梅雨も明け、夏本番で天の川が一年で最も濃く見える時期と重なります。
        </p>
        <p className="mt-2">
          しかも伝統的七夕の頃は月齢の条件も良好です。旧暦7月7日は
          <strong style={{ color: "var(--text)" }}>上弦前の細い月</strong>で、宵のうちに西に沈みます。
          月が沈んだ後の夜空は暗くなり、天の川がぐっと見やすくなる——昔の人が
          「七夕＝天の川」と結びつけたのには、ちゃんと天文学的な裏付けがあったわけです。
        </p>
        <div className="mt-3 rounded-[18px] px-5 py-4" style={toolBox}>
          <MoonWeekStrip />
          <p className="mt-2 text-center text-[11px]" style={{ color: "var(--muted2)" }}>
            天の川観察は月が細い日ほど好条件。観察したい日の月齢は
            <Link href="/tools/moon-calendar" className="underline" style={{ color: "var(--accent)" }}>月齢カレンダー</Link>
            で確認できます
          </p>
        </div>
      </Section>

      <Section heading="七夕の星を空で見つける（夏の大三角）">
        <p>
          天の川そのものは暗い空でないと淡くて分かりにくいですが、
          <strong style={{ color: "var(--text)" }}>七夕の主役の星は街なかでも見えます</strong>。
          夏の夜、空を見上げて明るい3つの星を結ぶ「夏の大三角」を探してみましょう。
        </p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li><strong style={{ color: "var(--text)" }}>織姫星＝ベガ</strong>（こと座）——3つの中で最も明るく、ほぼ頭の真上付近</li>
          <li><strong style={{ color: "var(--text)" }}>彦星＝アルタイル</strong>（わし座）——ベガの南東側</li>
          <li><strong style={{ color: "var(--text)" }}>デネブ</strong>（はくちょう座）——三角形の残りひとつ</li>
        </ul>
        <p className="mt-2">
          このベガとアルタイルの<strong style={{ color: "var(--text)" }}>間を流れているのが天の川</strong>です。
          暗い場所へ行けば、2つの星のあいだに淡い光の帯が浮かび上がります。
          どの方角・時間に高く昇るかは
          <Link href="/guide/milkyway-season" className="underline mx-1" style={{ color: "var(--accent)" }}>天の川が見える時期と方角</Link>
          で詳しく解説しています。
        </p>
      </Section>

      <Section heading="天の川に会うための3条件">
        <p>
          七夕の星は街でも見えますが、<strong style={{ color: "var(--text)" }}>天の川の帯</strong>を見るには次の3つがそろうほど確実です。
        </p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li><strong style={{ color: "var(--text)" }}>暗い場所</strong>——街明かりから離れるほど見える。これが一番効きます</li>
          <li><strong style={{ color: "var(--text)" }}>細い月（または月のない時間帯）</strong>——満月の夜は空が明るく天の川は埋もれます</li>
          <li><strong style={{ color: "var(--text)" }}>晴れた夏の夜の、空が暗くなりきった時間</strong>——夏は日没後しばらく明るいので、本番は夜が更けてから</li>
        </ul>
        <p className="mt-2">
          目が暗闇に慣れる（暗順応）まで15分ほど待つと、見える星の数も天の川の濃さも変わります。
          ちょうど8月は<Link href="/guide/perseids-2026" className="underline mx-1" style={{ color: "var(--accent)" }}>ペルセウス座流星群</Link>
          の見頃でもあり、2026年は流星と天の川を一緒に楽しめる当たり年です。
        </p>
      </Section>

      <Section heading="スマホでも、天の川は写せる">
        <p>
          肉眼では淡い天の川も、<strong style={{ color: "var(--text)" }}>カメラやスマホなら肉眼以上にはっきり写ります</strong>。
          最近のスマホはナイトモードで固定さえすれば数秒〜数十秒の露光ができ、天の川を捉えられます。
          まずは手持ちのスマホで、という方は
          <Link href="/guide/smartphone" className="underline mx-1" style={{ color: "var(--accent)" }}>スマホで星空を撮る方法</Link>
          から。カメラで本格的に狙うなら
          <Link href="/guide/beginner" className="underline mx-1" style={{ color: "var(--accent)" }}>星空撮影の始め方【初心者完全ガイド】</Link>
          が入口です。
        </p>
      </Section>

      {/* TODO（藤野さん）：伝統的七夕の頃（8月）に撮った天の川と夏の大三角の実写を挿入する。
          できればベガ・アルタイル・天の川の位置関係が分かる構図と、撮影データ（レンズ/F/SS/ISO）を添える。
          「7月7日に撮ろうとして見えなかった→8月に撮れた」体験談があれば、記事の主張がそのまま裏付けになる。 */}

      <p className="text-xs" style={{ color: "var(--muted)", opacity: 0.7 }}>
        ※ 伝統的七夕の日付は国立天文台の定義（処暑直前の新月から数えた旧暦7月7日）に基づきます。実際の見え方は当日の天候・観察地の暗さによって変わります。
      </p>
    </ArticleShell>
  );
}
