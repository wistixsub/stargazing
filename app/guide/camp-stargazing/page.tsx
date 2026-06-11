import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell, { Section } from "@/components/ArticleShell";
import MoonWeekStrip from "@/components/MoonWeekStrip";

export const metadata: Metadata = {
  title: "キャンプで星空を撮る方法｜スマホ＋数千円の機材から始める",
  description:
    "キャンプ場は実は絶好の星空撮影スポット。手持ちのスマホのナイトモードと数千円のスマホ三脚から始める星空撮影を、焚き火・ランタンとの付き合い方や予約日の選び方（月齢）まで、キャンパー目線で解説します。",
  alternates: { canonical: "/guide/camp-stargazing" },
};

const toolBox: React.CSSProperties = {
  background: "var(--surface)",
  border: "1px solid var(--card-border)",
  boxShadow: "0 8px 22px rgba(40,70,120,.06)",
};

export default function Page() {
  return (
    <ArticleShell
      slug="guide/camp-stargazing"
      title="キャンプで星空を撮る方法｜スマホ＋数千円から"
      lead="星空撮影でいちばん大変なのは「暗い場所まで行って、夜通しそこに居ること」。キャンパーはそれを毎回クリアしています。つまり、あと必要なのはほんの少しの道具と知識だけ。手持ちのスマホから始めるキャンプ星空撮影ガイドです。"
      datePublished="2026-06-11"
      related={[
        { href: "/guide/smartphone", label: "スマホで星空を撮る方法（設定の詳細）" },
        { href: "/guide/beginner", label: "カメラで本格的に：星空撮影の始め方【初心者完全ガイド】" },
        { href: "/tools/moon-calendar", label: "月齢カレンダー（キャンプの予約日選びに）" },
        { href: "/guide/milkyway-season", label: "天の川が見える時期と方角" },
        { href: "/gear/red-headlamp", label: "赤色ライト（夜のサイトで暗順応を守る）" },
      ]}
    >
      <Section heading="キャンプ場は「機材より大事な条件」を最初から満たしている">
        <p>
          星空写真の仕上がりを決める最大の要素は、機材ではなく<strong style={{ color: "var(--text)" }}>空の暗さ</strong>です。
          多くのキャンプ場は街明かりから離れた山間や高原にあり、しかもあなたは<strong style={{ color: "var(--text)" }}>深夜までそこに居ます</strong>。
          「暗い場所への遠征」という星空撮影最大のハードルが、キャンプでは最初から消えているわけです。
          車載なら荷物の制約も緩い。条件だけ見れば、キャンパーは星空撮影をいちばん始めやすい人たちです。
        </p>
      </Section>

      <Section heading="ステップ0：今夜、手持ちのスマホだけで撮れる">
        <p>
          最近のスマホ（iPhoneのナイトモード、Pixelの天体写真モードなど）は、
          <strong style={{ color: "var(--text)" }}>固定さえすれば</strong>数秒〜数十秒の露光で肉眼以上の星を写します。
          ポイントは露光中にスマホが1mmも動かないこと。テーブルに置いてタオルで角度を作るだけでも撮れます。
          シャッターはセルフタイマー（3秒）で切ると、タップの揺れが写りません。
          設定の詳細は<Link href="/guide/smartphone" className="underline mx-1" style={{ color: "var(--accent)" }}>スマホで星空を撮る方法</Link>にまとめています。
        </p>
      </Section>

      <Section heading="最初に買う1点は「スマホ三脚」（数千円）">
        <p>
          タオルでの固定は構図がほぼ選べません。そこで最初の機材投資は
          <strong style={{ color: "var(--text)" }}>ミニ三脚＋スマホホルダー（合わせて数千円）</strong>をおすすめします。
          これだけで「水平が出る・狙った方角に向けられる・連写しても動かない」が揃い、歩留まりが一気に変わります。
          ゴリラポッド型ならテーブルやポールに巻き付けられて、キャンプサイトとの相性も良好です。
          テントや焚き火を前景に入れた「キャンプらしい星空写真」は、固定さえできれば今夜撮れます。
        </p>
      </Section>

      <Section heading="クリップ式スマホレンズの正直な話">
        <p>
          「スマホに広角レンズを付ければ星がきれいに撮れる？」——正直に言うと、
          <strong style={{ color: "var(--text)" }}>星の写りを良くするのはレンズの追加ではなく、固定と露光時間</strong>です。
          クリップ式の広角レンズは<strong style={{ color: "var(--text)" }}>画角を広げてテント・タープと星空を1枚に収める</strong>用途なら楽しい道具ですが、
          安価な製品は星のような点光源でにじみやゴーストが出やすく、画質はむしろ下がる方向に働きます。
          買う順番は「三脚が先、レンズはお好みで後」。これがこのサイトとしての正直なおすすめです。
        </p>
      </Section>

      <Section heading="キャンプならではのコツ3つ">
        <p>
          <strong style={{ color: "var(--text)" }}>① 灯りと写真の距離をとる</strong> —
          ランタンや焚き火の光は数十秒の露光では強烈に写り込みます。撮影は消灯後か、サイトの灯りを背にした方角で。
          焚き火をあえて前景に入れて「灯りと星空」の対比にする構図もキャンプならではです。<br />
          <strong style={{ color: "var(--text)" }}>② 手元は赤色ライトで</strong> —
          目が暗闇に慣れる（暗順応）と見える星は増えますが、白いヘッドライトを一度見ると振り出しに戻ります。
          周りのサイトへの眩しさも抑えられるので、夜の手元灯は<Link href="/gear/red-headlamp" className="underline mx-1" style={{ color: "var(--accent)" }}>赤色ライト</Link>が一石二鳥です。<br />
          <strong style={{ color: "var(--text)" }}>③ 夜露に注意</strong> —
          夜半を過ぎるとレンズ面が結露して、写真全体が白っぽくにじみます。撮影の合間はレンズを下に向けておく、曇ったら乾いた布でそっと拭く、で十分対処できます。
        </p>
      </Section>

      <Section heading="予約の日付は「月」で選ぶ">
        <p>
          せっかくなら星が見える夜にキャンプしたい——そのとき見るべきは天気予報より先に<strong style={{ color: "var(--text)" }}>月齢</strong>です。
          満月の夜は空が明るく、星はまばらにしか見えません。<strong style={{ color: "var(--text)" }}>新月前後の週末</strong>を狙って予約すると、同じキャンプ場でも夜空が別物になります。
        </p>
        <div className="mt-3 rounded-[18px] px-5 py-4" style={toolBox}>
          <MoonWeekStrip />
          <p className="mt-2 text-center text-[11px]" style={{ color: "var(--muted2)" }}>
            直近1週間の月齢。先の予定は<Link href="/tools/moon-calendar" className="underline" style={{ color: "var(--accent)" }}>月齢カレンダー</Link>で（次の新月の日付がわかります）
          </p>
        </div>
        <p className="mt-3">
          夏キャンプなら天の川シーズンと重なります。見える時期と方角は
          <Link href="/guide/milkyway-season" className="underline mx-1" style={{ color: "var(--accent)" }}>こちら</Link>。
        </p>
      </Section>

      {/* TODO（藤野さん）：キャンプ場でスマホ＋ミニ三脚で実際に撮った写真（機種名・ナイトモード秒数つき）を
          ここに挿入する。「タオル固定の1枚 → 三脚の1枚」の比較ができると記事の主張がそのまま伝わる。 */}

      <Section heading="もっと撮りたくなったら">
        <p>
          スマホで星が撮れると、かなりの確率で「カメラならどこまで写るんだろう」が始まります。
          そのときは<Link href="/guide/beginner" className="underline mx-1" style={{ color: "var(--accent)" }}>星空撮影の始め方【初心者完全ガイド】</Link>へ。
          キャンプ道具と同じで、星空の機材も「必須は3つだけ、あとは沼」です。
        </p>
      </Section>

      <p className="text-xs" style={{ color: "var(--muted)", opacity: 0.7 }}>
        ※ スマホの夜間撮影機能の名称・性能は機種により異なります。キャンプ場の消灯時間・ライト使用のルールに従ってください。
      </p>
    </ArticleShell>
  );
}
