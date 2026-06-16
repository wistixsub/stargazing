import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell, { Section } from "@/components/ArticleShell";
import MoonWeekStrip from "@/components/MoonWeekStrip";
import Calc500Mini from "@/components/Calc500Mini";

export const metadata: Metadata = {
  title: "ペルセウス座流星群2026｜見頃は8月12〜14日・新月で月明かりゼロの絶好年",
  description:
    "2026年のペルセウス座流星群は極大が8月13日。しかも新月期と重なり月明かりの影響がほぼゼロという近年まれな好条件です。見頃の日付・時間帯、方角、観察のコツ、カメラで流星と天の川を一緒に撮る設定まで解説します。",
  alternates: { canonical: "/guide/perseids-2026" },
};

const toolBox: React.CSSProperties = {
  background: "var(--surface)",
  border: "1px solid var(--card-border)",
  boxShadow: "0 8px 22px rgba(40,70,120,.06)",
};

export default function Page() {
  return (
    <ArticleShell
      slug="guide/perseids-2026"
      title="ペルセウス座流星群2026｜新月で迎える絶好の当たり年"
      lead="毎年お盆の頃にやってくるペルセウス座流星群は、三大流星群のひとつ。そして2026年は、極大の時期が新月と重なり、ひと晩中ほとんど月明かりに邪魔されないという近年まれな好条件です。いつ・どこで・どう見れば一番楽しめるか、そしてカメラで流星と天の川を一緒に残す方法までまとめました。"
      datePublished="2026-06-16"
      related={[
        { href: "/guide/milkyway-season", label: "天の川が見える時期と方角（新月期は流星と同時に狙える）" },
        { href: "/guide/beginner", label: "星空撮影の始め方【初心者完全ガイド】" },
        { href: "/guide/settings", label: "星空撮影の設定 完全ガイド（ISO・絞り・SS）" },
        { href: "/tools/moon-calendar", label: "月齢カレンダー（観察日選びに）" },
        { href: "/tools/500-rule", label: "500ルール計算機（点像で写す露光時間）" },
        { href: "/gear/red-lights", label: "赤色ライト（暗順応を守る手元灯）" },
      ]}
    >
      <Section heading="2026年が「当たり年」と言われる理由">
        <p>
          流星群を見られるかどうかを左右する最大の敵は、実は天気と並んで
          <strong style={{ color: "var(--text)" }}>月明かり</strong>です。
          満月に近い夜は空全体が明るくなり、暗い流星はその光にかき消されてしまいます。
          ところが2026年は、ペルセウス座流星群の極大が
          <strong style={{ color: "var(--text)" }}>新月の時期と重なります</strong>。
          つまり、ひと晩を通して月明かりにほとんど邪魔されない——
          暗い空さえ確保できれば、近年でも屈指の好条件で観察できる年です。
        </p>
        <div className="mt-3 rounded-[18px] px-5 py-4" style={toolBox}>
          <MoonWeekStrip />
          <p className="mt-2 text-center text-[11px]" style={{ color: "var(--muted2)" }}>
            月が痩せているほど好条件。8月13日前後が新月です。先の月齢は
            <Link href="/tools/moon-calendar" className="underline" style={{ color: "var(--accent)" }}>月齢カレンダー</Link>
            で確認できます
          </p>
        </div>
      </Section>

      <Section heading="見頃はいつ？（2026年の極大と狙うべき夜）">
        <p>
          国立天文台によると、2026年の極大は
          <strong style={{ color: "var(--text)" }}>8月13日の昼頃（11時頃）</strong>と予想されています。
          極大が昼の時間帯にあたるため、おすすめの観察夜は前後の2晩です。
        </p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li><strong style={{ color: "var(--text)" }}>8月12日の夜 〜 13日の夜明け前</strong></li>
          <li><strong style={{ color: "var(--text)" }}>8月13日の夜 〜 14日の夜明け前</strong></li>
        </ul>
        <p className="mt-2">
          どちらの夜も、流星が増えるのは<strong style={{ color: "var(--text)" }}>放射点が高く昇る深夜から未明</strong>。
          21時頃から見え始めますが、本数を稼ぎたいなら午前0時を過ぎてからが本番です。
          夜更かし、あるいは明け方の早起きが報われる時間帯になります。
        </p>
      </Section>

      <Section heading="どこを見る？ 方角より「空の広さ」">
        <p>
          流星群の名前になっている放射点はペルセウス座（北東の空）にありますが、
          <strong style={{ color: "var(--text)" }}>流星は放射点の周りだけでなく空全体に現れます</strong>。
          そのため「ペルセウス座を凝視する」よりも、
          <strong style={{ color: "var(--text)" }}>なるべく空が広く開けた方角を、視野いっぱいにぼんやり眺める</strong>のがコツです。
          レジャーシートやリクライニングチェアで寝転ぶと、首が疲れず長く見続けられます。
        </p>
        <p className="mt-2">
          観察に特別な機材は要りません。むしろ双眼鏡や望遠鏡は視野が狭くなって逆効果。
          <strong style={{ color: "var(--text)" }}>肉眼が一番の機材</strong>です。
          大事なのは場所選びで、街明かりから離れた
          <strong style={{ color: "var(--text)" }}>できるだけ暗い空</strong>ほど見える数が段違いに増えます。
        </p>
      </Section>

      <Section heading="何個くらい見える？（正直な話）">
        <p>
          「1時間に何十個」という数字をよく目にしますが、これは
          <strong style={{ color: "var(--text)" }}>放射点が真上にあり空が理想的に暗い場合の理論上の最大値</strong>で、
          実際に見える数とは差があります。
          国立天文台は、空の暗い場所という条件が揃えば
          <strong style={{ color: "var(--text)" }}>1時間あたり40個程度</strong>と見込んでいます。
          街なかではこれよりぐっと減りますし、雲があればゼロの時間帯もあります。
        </p>
        <p className="mt-2">
          数を求めるほど「暗い空」が効いてきます。まずは
          <strong style={{ color: "var(--text)" }}>目が暗闇に慣れる（暗順応）まで15分以上</strong>待ちましょう。
          このとき白いライトを一度見ると暗順応がリセットされてしまうので、手元灯は
          <Link href="/gear/red-lights" className="underline mx-1" style={{ color: "var(--accent)" }}>赤色ライト</Link>
          が必須級です。スマホ画面の光も明るさを最小にしておきましょう。
        </p>
      </Section>

      <Section heading="カメラで撮る：流星と天の川を1枚に">
        <p>
          2026年は新月期にあたるため、流星だけでなく
          <strong style={{ color: "var(--text)" }}>濃い天の川も同時に写せる</strong>絶好のチャンスです。
          基本の機材は<strong style={{ color: "var(--text)" }}>広角レンズ＋三脚＋リモート（またはタイマー）</strong>。
          設定の考え方は通常の星空撮影と同じです。
        </p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li><strong style={{ color: "var(--text)" }}>レンズ</strong>：広角で明るいもの。空を広く写すほど流星が画面に入る確率が上がります（<Link href="/gear/lenses" className="underline" style={{ color: "var(--accent)" }}>レンズの選び方</Link>）</li>
          <li><strong style={{ color: "var(--text)" }}>絞り</strong>：開放〜1段絞り。とにかく光を集めます</li>
          <li><strong style={{ color: "var(--text)" }}>ISO</strong>：1600〜6400を目安に、空の暗さに合わせて調整</li>
          <li><strong style={{ color: "var(--text)" }}>シャッター速度</strong>：星を点像で写せる上限まで（下の計算機で確認）</li>
          <li><strong style={{ color: "var(--text)" }}>ピント</strong>：オートでは合わないので、明るい星でマニュアル無限遠</li>
          <li><strong style={{ color: "var(--text)" }}>撮り方</strong>：1枚狙いではなく<strong style={{ color: "var(--text)" }}>インターバル撮影で撮り続ける</strong>。流星はいつ流れるか分からないので「撮り続けて当てる」のが基本です</li>
        </ul>
        <div className="mt-3 rounded-[18px] px-5 py-4" style={toolBox}>
          <Calc500Mini />
          <p className="mt-2 text-center text-[11px]" style={{ color: "var(--muted2)" }}>
            焦点距離から、星が点に写る露光時間の目安が出ます。詳しい考え方は
            <Link href="/tools/500-rule" className="underline" style={{ color: "var(--accent)" }}>500ルール計算機</Link>
            と<Link href="/guide/settings" className="underline" style={{ color: "var(--accent)" }}>設定ガイド</Link>へ
          </p>
        </div>
        <p className="mt-3">
          仕上げの注意は2つ。夜半を過ぎると
          <strong style={{ color: "var(--text)" }}>レンズが結露</strong>して写真が白くにじむので、レンズヒーターか乾いた布を用意します。
          そして構図は、放射点を画面の隅に置きつつ
          <strong style={{ color: "var(--text)" }}>天の川を大きく入れる</strong>と、流星が流れたときに最も映えます。
          天の川の見える方角と時間は
          <Link href="/guide/milkyway-season" className="underline mx-1" style={{ color: "var(--accent)" }}>天の川が見える時期と方角</Link>
          を参考にしてください。
        </p>
      </Section>

      {/* TODO（藤野さん）：2026年のペルセウス座流星群を実際に撮った写真（できれば流星が写った1枚と、
          天の川を広く入れた構図の1枚）をここに挿入する。撮影地・レンズ・F値・SS・ISO・新月からの日数を
          キャプションに入れると、上の設定解説がそのまま裏付けになる。
          「肉眼で見えた本数」と「インターバルで写った本数」の体感差を一言添えると一次情報として強い。 */}

      <Section heading="持ち物チェック（観察だけなら手ぶらでもOK）">
        <p>
          見るだけなら<strong style={{ color: "var(--text)" }}>レジャーシートと防寒・防虫対策</strong>があれば十分です。
          夏でも夜間・高所は冷えるので一枚羽織るものを。撮るなら上記の機材一式に加えて、
          予備バッテリー（インターバル撮影は電池を食います）と
          <Link href="/gear/red-lights" className="underline mx-1" style={{ color: "var(--accent)" }}>赤色ライト</Link>
          を忘れずに。観察日を決めるときは天気予報と
          <Link href="/tools/moon-calendar" className="underline mx-1" style={{ color: "var(--accent)" }}>月齢</Link>
          を合わせて確認しましょう（2026年は月齢の心配がほぼ要らない、珍しい年です）。
        </p>
      </Section>

      <p className="text-xs" style={{ color: "var(--muted)", opacity: 0.7 }}>
        ※ 極大時刻・出現数は国立天文台などの予想に基づく目安です。実際の見え方は当日の天候・観察地の暗さによって大きく変わります。観察は安全な場所で、私有地・施設のルールを守って行ってください。
      </p>
    </ArticleShell>
  );
}
