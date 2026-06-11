import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell, { Section } from "@/components/ArticleShell";
import Calc500Mini from "@/components/Calc500Mini";
import MoonWeekStrip from "@/components/MoonWeekStrip";

export const metadata: Metadata = {
  title: "星空撮影の始め方【初心者完全ガイド】持ち物・場所・設定・手順",
  description:
    "初めての星空撮影に必要な持ち物、日付と場所の選び方、カメラ設定（F値・シャッタースピード・ISO）、現地での手順、よくある失敗まで1ページで解説。500ルール計算機と月齢カレンダー付き。",
  alternates: { canonical: "/guide/beginner" },
};

const toolBox: React.CSSProperties = {
  background: "var(--surface)",
  border: "1px solid var(--card-border)",
  boxShadow: "0 8px 22px rgba(40,70,120,.06)",
};

export default function Page() {
  return (
    <ArticleShell
      slug="guide/beginner"
      title="星空撮影の始め方【初心者完全ガイド】"
      lead="このページは「今夜、星を撮りに行ける」ようになるための1本道ガイドです。持ち物 → 日付と場所 → カメラ設定 → 現地での手順 → 失敗対処の順に、必要なことだけをまとめました。詳しく知りたくなった項目から個別ガイドに進めます。"
      datePublished="2026-06-11"
      related={[
        { href: "/guide/settings", label: "設定をもっと詳しく：星空撮影の設定 完全ガイド" },
        { href: "/guide/lens", label: "星空向けレンズの選び方" },
        { href: "/guide/milkyway-season", label: "天の川が見える時期と方角" },
        { href: "/guide/smartphone", label: "カメラがない人へ：スマホで星空を撮る方法" },
        { href: "/guide/camp-stargazing", label: "キャンプで星空を撮る方法（スマホ＋数千円から）" },
        { href: "/glossary", label: "わからない言葉が出てきたら：星空撮影の用語集" },
      ]}
    >
      <Section heading="① 持ち物：必須は3つだけ">
        <p>
          最低限必要なのは
          <strong style={{ color: "var(--text)" }}>「マニュアル露出ができるカメラ」「レンズ（広角だと有利）」「三脚」</strong>
          の3つです。レンズはF2.8以下が理想ですが、キットレンズでも撮れます。明るい星は十分写るので、まず手持ちの機材で1回撮ってみるのが上達の最短路です。
        </p>
        <ul className="mt-3 space-y-1.5">
          <li>✅ <strong style={{ color: "var(--text)" }}>カメラ</strong> — M（マニュアル）モードがあれば機種は問いません。RAWで撮れるとなお良し</li>
          <li>✅ <strong style={{ color: "var(--text)" }}>レンズ</strong> — 広角（35mm換算14〜24mm）×明るい（F2.8以下）が理想。<Link href="/guide/lens" className="underline" style={{ color: "var(--accent)" }}>選び方はこちら</Link></li>
          <li>✅ <strong style={{ color: "var(--text)" }}>三脚</strong> — 数十秒の露光中の揺れは全カットをダメにします。<Link href="/gear/sturdy-tripod" className="underline" style={{ color: "var(--accent)" }}>剛性が効きます</Link></li>
        </ul>
        <p className="mt-3">あると快適なもの：</p>
        <ul className="mt-1.5 space-y-1.5">
          <li>・<strong style={{ color: "var(--text)" }}>レリーズ</strong> — 無ければ<strong style={{ color: "var(--text)" }}>セルフタイマー2秒</strong>で代用できます（押した振動が収まってからシャッターが切れる）</li>
          <li>・<strong style={{ color: "var(--text)" }}>赤色ライト</strong> — 白いライトは目の暗順応をリセットし、周囲の撮影者の写真にも写り込みます。<Link href="/gear/red-headlamp" className="underline" style={{ color: "var(--accent)" }}>専用ライト</Link>が定番</li>
          <li>・<strong style={{ color: "var(--text)" }}>予備バッテリー</strong> — 夜間の冷えで電池の減りが早くなります。ポケットで保温しておくと安心</li>
          <li>・<strong style={{ color: "var(--text)" }}>結露対策</strong> — 夜露でレンズ前玉が曇ると、その後の写真が全部ソフトフォーカスになります。レンズヒーターか、使い捨てカイロをレンズ鏡筒に輪ゴムで巻くだけでも効果があります</li>
        </ul>
      </Section>

      <Section heading="② 日付：新月前後を選ぶ（ここが機材より重要）">
        <p>
          月明かりは最大の「自然の光害」です。満月の夜は空が明るく、淡い天の川はほぼ写りません。
          <strong style={{ color: "var(--text)" }}>新月の前後1週間</strong>が狙い目です。直近1週間の月齢はこちら：
        </p>
        <div className="mt-3 rounded-[18px] px-5 py-4" style={toolBox}>
          <MoonWeekStrip />
          <p className="mt-2 text-center text-[11px]" style={{ color: "var(--muted2)" }}>
            月が痩せているほど好条件。<Link href="/tools/moon-calendar" className="underline" style={{ color: "var(--accent)" }}>月齢カレンダー</Link>で次の新月を確認できます
          </p>
        </div>
        <p className="mt-3">
          天の川を狙うなら時期も見ます。日本ではおおむね4〜10月、南の空が見頃です。
          <Link href="/guide/milkyway-season" className="underline ml-1" style={{ color: "var(--accent)" }}>天の川が見える時期と方角</Link>
        </p>
      </Section>

      <Section heading="③ 場所：街明かりから離れて、南が開けた場所へ">
        <p>
          空の暗さは写真のコントラストを直接決めます。市街地から車で1〜2時間離れるだけで、写る星の数が目に見えて変わります。条件は3つ：
          <strong style={{ color: "var(--text)" }}>街明かりから遠い／狙う方角（天の川なら南）が開けている／安全に長時間滞在できる</strong>。
          山の駐車場・ダム湖畔・海岸などが定番です。私有地への立ち入りと、先客がいる場合のライト使用（赤色・最小限）には注意してください。
        </p>
      </Section>

      <Section heading="④ カメラ設定：まずこの値から始める">
        <p>考える順番は「絞り → シャッタースピード → ISO」です。最初の1枚はこの設定をそのまま使ってください：</p>
        <ul className="mt-3 space-y-1.5">
          <li>・モード：<strong style={{ color: "var(--text)" }}>M（マニュアル）</strong>、保存形式はRAW（後から明るさ・色を調整できる）</li>
          <li>・絞り：<strong style={{ color: "var(--text)" }}>開放（F2.8〜F4）</strong>。四隅の星のにじみが気になったら半段絞る</li>
          <li>・シャッタースピード：<strong style={{ color: "var(--text)" }}>500 ÷ 焦点距離（秒）</strong>が星が点に写る上限の目安。↓で計算できます</li>
          <li>・ISO：<strong style={{ color: "var(--text)" }}>3200から開始</strong>。撮って暗ければ6400へ、明るすぎれば1600へ</li>
        </ul>
        <div className="mt-3 rounded-[18px] px-5 py-4" style={toolBox}>
          <p className="text-xs font-bold mb-2" style={{ color: "var(--navy)" }}>500ルール計算機（焦点距離を入れるだけ）</p>
          <Calc500Mini />
          <p className="mt-2 text-[11px]" style={{ color: "var(--muted2)" }}>
            APS-Cは焦点距離を1.5倍してから計算。詳しくは<Link href="/tools/500-rule" className="underline" style={{ color: "var(--accent)" }}>計算機のページ</Link>へ
          </p>
        </div>
        <p className="mt-3">見落としやすい設定が2つあります：</p>
        <ul className="mt-1.5 space-y-1.5">
          <li>・<strong style={{ color: "var(--text)" }}>手ブレ補正はOFF</strong> — 三脚固定時は補正機構が誤作動してブレの原因になることがあります</li>
          <li>・<strong style={{ color: "var(--text)" }}>「長秒時ノイズ低減」</strong> — ONだと露光と同じ時間の処理待ちが発生します（30秒露光なら30秒待ち）。メーカーで「長秒時NR」など表記が違いますが同じ機能です。待ち時間が気になるならOFFでも構いません</li>
        </ul>
      </Section>

      <Section heading="⑤ ピント合わせ：∞マークを信じない">
        <p>
          暗所ではオートフォーカスは迷うので<strong style={{ color: "var(--text)" }}>マニュアルフォーカス</strong>にします。
          手順は：ライブビューで空の<strong style={{ color: "var(--text)" }}>いちばん明るい星</strong>を探す → 拡大表示（10倍前後） →
          星が<strong style={{ color: "var(--text)" }}>最も小さな点</strong>になる位置までフォーカスリングを微調整。
          レンズの「∞」マークは実際の無限遠とずれていることが多いため、必ず拡大して目で追い込みます。
          一度合ったらリングに触れないこと（パーマセルテープで固定する人もいます）。
        </p>
      </Section>

      <Section heading="⑥ 現地での手順（このループを回す）">
        <p>
          三脚を据えて水平を取る → 構図を決める（地上の風景を1/3ほど入れると写真が締まります） → ピント合わせ →
          ④の設定で1枚 → <strong style={{ color: "var(--text)" }}>背面液晶でなくヒストグラムで確認</strong>（液晶は暗所で明るく見えすぎる）→
          暗ければISOを1段上げ、星が流れていればSSを短く → また1枚。
          このループを2〜3周すると、その空に合った設定に落ち着きます。
        </p>
      </Section>

      <Section heading="⑦ よくある失敗と対処">
        <p>
          ・<strong style={{ color: "var(--text)" }}>星が線に伸びる</strong> → SSが長すぎ。計算機の値以下に<br />
          ・<strong style={{ color: "var(--text)" }}>全体がぼんやり甘い</strong> → ピントが無限遠からずれている。⑤をやり直し。後半のコマだけ甘い場合はレンズの結露を疑う<br />
          ・<strong style={{ color: "var(--text)" }}>ザラザラしている</strong> → ISOの上げすぎ。絞りとSSを先に最大化してからISOで調整<br />
          ・<strong style={{ color: "var(--text)" }}>写真の隅がオレンジに被る</strong> → 自分や同行者のライト・スマホ画面の写り込み。露光中は消灯<br />
          ・<strong style={{ color: "var(--text)" }}>夜中に電源が落ちた</strong> → 低温でのバッテリー消耗。予備を保温
        </p>
      </Section>

      {/* TODO（藤野さん）：実際に撮影に行った体験談＋実写（EXIF付き）をここに挿入する。
          「最初の1枚→失敗→調整→撮れた1枚」の流れで、上の手順と失敗対処に対応させると説得力が出る。 */}

      <Section heading="⑧ 撮れたら：次のステップ">
        <p>
          1枚撮れたら、次はこの順で広がります：
          <strong style={{ color: "var(--text)" }}>ソフトフィルター</strong>で星座を浮かび上がらせる（<Link href="/guide/prosofton-clear" className="underline" style={{ color: "var(--accent)" }}>効果と使い方</Link>）→
          <strong style={{ color: "var(--text)" }}>ポータブル赤道儀</strong>でISOを下げて淡い天の川まで写す（<Link href="/guide/star-tracker" className="underline" style={{ color: "var(--accent)" }}>必要かどうかの判断</Link>）→
          撮るだけでなく<strong style={{ color: "var(--text)" }}>観る</strong>（<Link href="/guide/telescope-beginner" className="underline" style={{ color: "var(--accent)" }}>望遠鏡の選び方</Link>）。
          機材の全体像は<Link href="/gear" className="underline mx-1" style={{ color: "var(--accent)" }}>ギアカタログ</Link>にまとめています。
          撮れた1枚は、ぜひ<Link href="/submit" className="underline mx-1" style={{ color: "var(--accent)" }}>作例として投稿</Link>してください。あなたの設定が次に始める人の道しるべになります。
        </p>
      </Section>

      <p className="text-xs" style={{ color: "var(--muted)", opacity: 0.7 }}>
        ※ 本ページの数値はいずれも「最初の1枚」のための出発点です。機材・空の暗さ・気象条件で最適値は変わります。
      </p>
    </ArticleShell>
  );
}
