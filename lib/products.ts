// 商品（星空撮影ギア）データモデル。サイトの「核」。
// ※data規律：スペック・価格は捏造しない。verified=true は公式/一次情報で裏取り済み（sourceUrl明記）。
//   verified=false はカテゴリ選び方ガイド（特定モデルを断定しない・代表値）。UI上で「仕様は要確認」を明示する。

import type { IconName } from "@/components/icons";

export type ProductCategory = "赤道儀" | "レンズ" | "三脚" | "カメラ" | "アクセサリ" | "観望";

/** 購入先リンク（url未設定＝アフィリ提携前／募集中。虚偽の在庫・価格表示はしない）。 */
export type PurchaseLink = { label: string; url?: string };

export type Spec = { label: string; value: string };
export type UsageStep = { heading: string; body: string };
export type RelatedGuide = { href: string; label: string };

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  role: "主" | "副"; // 主＝星空撮影が目的のギア／副＝観望系
  tier?: "入門" | "ステップアップ" | "本格"; // カテゴリ内のステップアップ位置（比較ハブで使用）
  icon: IconName; // 線画アイコン（components/icons.tsx・リンクカードやタグで使用）
  illustration?: string; // カード用イラスト（public/img/・トップと同じ円形カードで表示）
  image?: string; // 商品画像パス（未設定＝アイコンプレースホルダ）
  tagline: string; // 一言サマリー
  forWho: string; // こんな人向け
  // ── 買う前情報 ──
  pros: string[];
  cons: string[];
  specs: Spec[];
  // ── 買った後（具体的な使い方）──
  usage: UsageStep[];
  relatedGuides: RelatedGuide[];
  // ── 購入導線 ──
  purchase: PurchaseLink[];
  /** アフィリエイト検索キーワード（設定すると楽天/Yahoo!のもしも経由リンクを自動生成。lib/affiliate.ts 参照） */
  affiliateKeyword?: string;
  verified: boolean; // スペックの公式裏取り済みか
  sourceUrl?: string; // 出典（メーカー公式ページ等）
};

// 星空撮影を目的としたギアを軸にカタログ化。
// verified=true の6品は公式情報で裏取り済み。レリーズのみカテゴリ選び方ガイド（純正現行のタイマー付きが少なくサードパーティ主流のため、特定モデルを断定しない）。
export const PRODUCTS: Product[] = [
  {
    slug: "portable-star-tracker",
    name: "ケンコー スカイメモS（ポータブル赤道儀）",
    category: "赤道儀",
    role: "主",
    icon: "mount",
    illustration: "/img/gear-eq.png",
    tagline: "搭載5kg・極軸望遠鏡標準装備。星景〜天の川を点像で長秒露光できる定番機。",
    forWho: "三脚＋カメラで星を撮り始め、もっとクリアに・暗部まで撮りたくなった人。",
    pros: [
      "星を追尾するので、長秒露光しても星が流れず点像のまま写る",
      "ISOを下げて長く露光できる＝ノイズの少ない天の川が撮れる",
      "極軸望遠鏡を標準搭載（明視野照明付き）で極軸合わせがしやすい",
      "地上も少し止める「0.5倍速追尾」で星景写真にも対応",
    ],
    cons: [
      "極軸合わせ（北極星への向け合わせ）の習得が必要",
      "搭載5kgまで。重い望遠レンズ＋大型機材には上位機が要る",
    ],
    specs: [
      { label: "搭載可能重量", value: "5kg" },
      { label: "追尾モード", value: "恒星時／0.5倍速（星景）／月" },
      { label: "電源", value: "単3形アルカリ乾電池4本・約72時間連続使用" },
      { label: "極軸望遠鏡", value: "標準搭載（明視野照明付き）" },
    ],
    usage: [
      { heading: "1. 設置と水平出し", body: "頑丈な三脚に固定し、水平を合わせる。雲台のガタは追尾ブレの原因になるため自由雲台はしっかり締める。" },
      { heading: "2. 極軸合わせ", body: "標準の極軸望遠鏡で北極星を導入。明視野照明を使い、撮影地の緯度に合わせるのがコツ。" },
      { heading: "3. モードを選んで露光", body: "星空メインなら恒星時、地上も少し止めたい星景なら0.5倍速。追尾するのでISOを下げて長く露光できる。" },
    ],
    relatedGuides: [
      { href: "/guide/skymemo-s", label: "スカイメモSの使い方・設定ガイド" },
      { href: "/guide/star-tracker", label: "ポータブル赤道儀は必要か" },
      { href: "/guide/settings", label: "星空撮影の設定 完全ガイド" },
    ],
    purchase: [{ label: "購入先（提携準備中）" }],
    affiliateKeyword: "ケンコー スカイメモS",
    verified: true,
    sourceUrl: "https://www.kenko-tokina.co.jp/optics/tele_scope/sky_memo/4961607455159.html",
  },
  {
    slug: "wide-fast-lens",
    name: "SAMYANG 14mm F2.8 ED AS IF UMC（MF超広角）",
    category: "レンズ",
    role: "主",
    tier: "入門",
    icon: "lens",
    illustration: "/img/gear-lens.png",
    tagline: "フルサイズ対応14mm F2.8。星景の定番にして高コスパなマニュアル超広角。",
    forWho: "キットレンズで星を撮ってみて、もっと広く・明るく撮りたいと感じた人。",
    pros: [
      "F2.8の明るさ＋14mmの広い画角で、天の川と地上を一緒に収められる",
      "フルサイズ対応で、星景レンズとして高コスパ",
      "マルチマウント展開（キヤノンEF／ニコンF／ソニー等）",
    ],
    cons: [
      "マニュアルフォーカス（MF）専用。ピントはライブビューで合わせる",
      "周辺のコマ収差・歪曲は個体/設定で出る。絞りで対策",
      "出目金形状でねじ込みフィルター不可（角型ホルダーが必要）",
    ],
    specs: [
      { label: "焦点距離 / 開放F値", value: "14mm / F2.8" },
      { label: "フォーマット", value: "フルサイズ対応" },
      { label: "フォーカス", value: "マニュアル（MF）" },
      { label: "最短撮影距離 / 重量", value: "0.28m / 約570g" },
      { label: "対応マウント", value: "キヤノンEF・ニコンF・ソニー 等" },
    ],
    usage: [
      { heading: "1. ピントは星で合わせる", body: "MF専用。ライブビューで明るい星を拡大し、最小の点になるよう手動でピントを追い込む。" },
      { heading: "2. 絞りは開放〜少し絞る", body: "開放F2.8は明るいが周辺が甘くなりがち。F3.5〜4まで少し絞ると四隅の星像が締まる。" },
      { heading: "3. 14mmからSSを決める", body: "500ルール計算機に14mmを入れ、星が流れない最大シャッタースピードを確認。" },
    ],
    relatedGuides: [
      { href: "/guide/samyang-14mm", label: "SAMYANG 14mm F2.8で星空を撮る設定" },
      { href: "/guide/lens", label: "星空向けレンズの選び方" },
      { href: "/tools/500-rule", label: "500ルール計算機" },
    ],
    purchase: [{ label: "購入先（提携準備中）" }],
    affiliateKeyword: "SAMYANG 14mm F2.8",
    verified: true,
  },
  {
    slug: "sigma-14-24mm-f28",
    name: "SIGMA 14-24mm F2.8 DG DN | Art（AF超広角ズーム）",
    category: "レンズ",
    role: "主",
    tier: "ステップアップ",
    icon: "lens",
    tagline: "F2.8通しの超広角ズーム・795g。AFと「画角を選べる自由」を手に入れるステップアップの定番。",
    forWho: "MF単焦点で星景を覚え、構図の自由度・AF・最新の光学性能が欲しくなった人。",
    pros: [
      "14〜24mmのズームで、天の川アーチ（広く）も部分の切り取り（寄せ）も1本でこなせる",
      "F2.8通しなので、どの焦点距離でも星空向けの明るさを維持できる",
      "ミラーレス専用設計のArtライン。星のような点光源に強い光学性能をうたう設計",
      "超広角F2.8ズームとして795gは軽量。遠征の負担が小さい",
    ],
    cons: [
      "対応はソニーE・ライカLマウントのみ（キヤノンRF・ニコンZでは使えない）",
      "前玉が出た形状（出目金）で、前面のねじ込みフィルターは使えない",
      "単焦点F1.4クラスと比べれば明るさは2段譲る",
    ],
    specs: [
      { label: "焦点距離 / 開放F値", value: "14-24mm / F2.8通し" },
      { label: "対応マウント", value: "ソニーE / ライカL" },
      { label: "重量", value: "795g" },
      { label: "最短撮影距離", value: "28cm" },
      { label: "絞り羽根", value: "11枚（円形絞り）" },
    ],
    usage: [
      { heading: "1. 焦点距離で絵を選ぶ", body: "14mm側は天の川と地上を一緒に収める王道。24mm側は山稜や木立と星空を組み合わせる切り取りに。ズームなら現地で両方試せる。" },
      { heading: "2. 開放F2.8から使う", body: "星空ではまず開放で。四隅の星像が気になる場合だけ1/3〜1/2段絞って様子を見る。" },
      { heading: "3. SSは焦点距離ごとに再計算", body: "14mmと24mmでは星が流れない上限秒数が変わる。ズームした時は500ルール計算機で出し直す。" },
    ],
    relatedGuides: [
      { href: "/gear/lenses", label: "星空レンズのステップアップ診断" },
      { href: "/guide/lens", label: "星空向けレンズの選び方" },
      { href: "/tools/500-rule", label: "500ルール計算機" },
    ],
    purchase: [{ label: "購入先（提携準備中）" }],
    affiliateKeyword: "SIGMA 14-24mm F2.8 DG DN",
    verified: true,
    sourceUrl: "https://www.sigma-global.com/jp/lenses/a019_14_24_28/",
  },
  {
    slug: "sigma-14mm-f14",
    name: "SIGMA 14mm F1.4 DG DN | Art（星景のためのF1.4）",
    category: "レンズ",
    role: "主",
    tier: "本格",
    icon: "lens",
    tagline: "交換レンズで唯一の14mm F1.4（メーカー発表・2023年発売）。星景撮影のために作り込まれたフラッグシップ。",
    forWho: "星景を本気の柱にする人。「ISOを下げる」「露光を短くする」の2段分に投資できる人。",
    pros: [
      "F1.4の集光力はF2.8の2段分。同じ露出ならISOを1/4にでき、ノイズが目に見えて減る",
      "フォーカスリングロック（MFLスイッチ）搭載。夜間の不意のピントずれを物理的に防げる",
      "レンズヒーターリテイナー搭載。結露対策（ヒーター巻き）を前提に設計されている",
      "防塵防滴構造＋撥水撥油コートで夜露の多い現場に強い",
    ],
    cons: [
      "約1.2kgと重い。三脚・雲台にも相応の剛性が必要になる",
      "対応はソニーE・ライカLマウントのみ",
      "前玉が出た形状（出目金）で、前面のねじ込みフィルターは使えない",
      "価格は超広角単焦点として最上級クラス（実勢20万円台・要確認）",
    ],
    specs: [
      { label: "焦点距離 / 開放F値", value: "14mm / F1.4" },
      { label: "対応マウント", value: "ソニーE / ライカL" },
      { label: "重量", value: "1,160g（E）/ 1,170g（L）" },
      { label: "星景支援機能", value: "MFLスイッチ・AFLボタン・レンズヒーターリテイナー" },
      { label: "防塵防滴", value: "対応（前面に撥水撥油コート）" },
    ],
    usage: [
      { heading: "1. ピントを合わせてMFLでロック", body: "ライブビューで星にピントを追い込んだら、MFLスイッチでフォーカスリングをロック。移動や長時間運用でもピントがずれない。" },
      { heading: "2. F1.4は「ISOを下げる」ために使う", body: "F2.8・ISO6400相当の露出が、F1.4ならISO1600で撮れる。明るさでなくノイズの少なさに変換するのがこのレンズの使い方。" },
      { heading: "3. ヒーターを標準装備に", body: "リテイナーがあるのでレンズヒーターを定位置に巻ける。結露で後半のコマを失わない運用が組める。" },
    ],
    relatedGuides: [
      { href: "/gear/lenses", label: "星空レンズのステップアップ診断" },
      { href: "/guide/lens", label: "星空向けレンズの選び方" },
      { href: "/guide/settings", label: "星空撮影の設定 完全ガイド" },
    ],
    purchase: [{ label: "購入先（提携準備中）" }],
    affiliateKeyword: "SIGMA 14mm F1.4 DG DN",
    verified: true,
    sourceUrl: "https://www.sigma-global.com/jp/lenses/a023_14_14/",
  },
  {
    slug: "sturdy-tripod",
    name: "スリック ライトカーボン E83 II（剛性重視の星空三脚）",
    category: "三脚",
    role: "主",
    icon: "tripod",
    illustration: "/img/gear-tripod.png",
    tagline: "28mmカーボン3段・推奨積載5kg。長秒露光のブレを止める、星空写真の歩留まりを決める土台。",
    forWho: "暗所での数十秒露光で写真がブレる・甘くなる悩みを解決したい人。赤道儀の搭載も見据える人。",
    pros: [
      "パイプ径28mm×3段のカーボン脚で剛性が高く、長秒露光でも星がにじみにくい",
      "推奨積載質量5kg＝カメラ＋明るいレンズに加え、スカイメモS級のポータブル赤道儀も視野",
      "カーボンで1,925g。剛性級のアルミより軽く、暗地への遠征が現実的",
      "雲台（SH-706）は分離可能。星向けに自由雲台へ換装もできる",
    ],
    cons: [
      "カーボンゆえ価格は高め（希望小売価格 ¥58,000・税別）",
      "付属は2ハンドル3ウェイ雲台。星空用途では自由雲台に替える人も多い（好みが分かれる）",
    ],
    specs: [
      { label: "パイプ径 / 段数", value: "28mm / 3段" },
      { label: "全高 / EV下げ全高", value: "1,845mm / 1,490mm" },
      { label: "縮長 / 重量", value: "675mm / 1,925g" },
      { label: "推奨積載質量", value: "5kg（脚最大荷重18kg）" },
      { label: "雲台", value: "SH-706（2ハンドル3ウェイ・分離可）" },
      { label: "発売", value: "2024年3月" },
    ],
    usage: [
      { heading: "1. 脚は太い段から伸ばす", body: "細い段（エレベーター含む）はブレやすい。必要な高さは太い脚から出して剛性を確保する。" },
      { heading: "2. 風対策", body: "センターフックにバッグを下げて重心を落とすとブレに強くなる。" },
      { heading: "3. ミラーアップ／電子先幕", body: "シャッターショックを抑える設定で、長秒露光の微ブレを減らす。" },
    ],
    relatedGuides: [
      { href: "/guide/slik-e83ii", label: "星空向け三脚の選び方：本機を実例に" },
      { href: "/guide/settings", label: "星空撮影の設定 完全ガイド" },
      { href: "/guide/star-tracker", label: "ポータブル赤道儀は必要か" },
    ],
    purchase: [{ label: "購入先（提携準備中）" }],
    affiliateKeyword: "スリック ライトカーボン E83",
    verified: true,
    sourceUrl: "https://www.kenko-tokina.co.jp/slik/carbon-series/light/e83ii.html",
  },
  {
    slug: "red-headlamp",
    name: "ビクセン 天体観測用ライト SG-L02",
    category: "アクセサリ",
    role: "主",
    icon: "flashlight",
    illustration: "/img/gear-light.png",
    tagline: "暗順応を壊さず手元を照らす、天体観測のための専用設計ライト。29gの必需品。",
    forWho: "暗闇での機材操作・ノート書き・足元確認を、目を眩ませずに行いたい人。",
    pros: [
      "暗順応に影響しやすい555nm付近の波長を避けた電球色LED＋赤色LEDの2色・無段階調光",
      "赤色LEDは約0.28〜7.62ルーメンまで絞れる＝周囲の撮影者への写り込み迷惑も防げる",
      "本体約29g。付属のストラップでヘッド・ネック・リスト、クリップで帽子にも装着可",
      "IPX4相当の防水で、夜露・結露の多い観測現場でも安心",
    ],
    cons: [
      "充電池内蔵（USB充電）＝現地で電池交換できない。長丁場はモバイルバッテリー持参を",
      "明るさ最大でも控えめ寄り。設営・撤収の作業灯は別途あると楽",
    ],
    specs: [
      { label: "光色 / 明るさ", value: "電球色LED 約3〜42lm／赤色LED 約0.28〜7.62lm（無段階調光）" },
      { label: "連続使用時間", value: "赤色 100%約6時間・10%約120時間／電球色 100%約4時間" },
      { label: "電源", value: "リチウムイオンポリマー充電池600mAh内蔵（USB充電）" },
      { label: "防水 / 重さ", value: "IPX4相当 / 本体約29g" },
      { label: "付属品", value: "ストラップL・S／クリップ／USB充電ケーブル" },
      { label: "希望小売価格", value: "¥7,150（税込）" },
    ],
    usage: [
      { heading: "1. 最初から赤色で点ける", body: "白色で点けると暗順応がリセットされる。現場に着いたら最初から赤色モードで。" },
      { heading: "2. 光量は最小に", body: "手元が見える最小限の明るさに。周囲の撮影者への配慮にもなる。" },
      { heading: "3. 撮影中は消す", body: "長秒露光中は消灯。レンズ前を横切る光はカブリの原因。" },
    ],
    relatedGuides: [
      { href: "/guide/sg-l02", label: "赤色ライトはなぜ必要か：本機のガイド" },
      { href: "/guide/settings", label: "星空撮影の設定 完全ガイド" },
      { href: "/guide/binoculars-vs-telescope", label: "双眼鏡 vs 望遠鏡" },
    ],
    purchase: [{ label: "購入先（提携準備中）" }],
    affiliateKeyword: "ビクセン 天体観測用ライト SG-L02",
    verified: true,
    sourceUrl: "https://www.vixen.co.jp/product/71089_8/",
  },
  {
    slug: "intervalometer-release",
    name: "インターバルタイマー付きリモートレリーズの選び方",
    category: "アクセサリ",
    role: "主",
    icon: "timer",
    tagline: "シャッターブレを防ぎ、タイムラプス・比較明合成を自動化する小さな相棒。",
    forWho: "長秒露光のブレを無くしたい人、星の軌跡（比較明合成）やタイムラプスに挑戦したい人。",
    pros: [
      "シャッターを触らず切れるので、長秒露光のブレを防げる",
      "バルブ＋連続撮影で、星グルグル（比較明合成）やタイムラプスを自動化",
      "カメラ内蔵インターバルが無い機種を補える",
    ],
    cons: [
      "カメラ機種ごとに端子・対応が違う（購入前に要確認）",
      "メーカー純正のタイマー付き有線は生産終了が進み、現行は少数。市場の主流はサードパーティ製",
      "寒冷地ではケーブルが硬化しやすい",
    ],
    specs: [
      { label: "接続", value: "有線（機種別端子）／無線（機種による）" },
      { label: "機能", value: "バルブ・インターバル・連続撮影（機種による）" },
      { label: "電源", value: "ボタン電池／単4（機種による）" },
    ],
    usage: [
      { heading: "0. まずボディ内機能を確認", body: "最近のカメラは本体にインターバル撮影・バルブタイマーを内蔵していることが多い。それで足りればレリーズはシンプルな純正有線（各社「リモートスイッチ」）で十分。" },
      { heading: "1. 端子を確認して選ぶ", body: "同じメーカーでも機種で端子が違うことがある。手持ちカメラの対応を必ず確認。" },
      { heading: "2. 比較明合成の連続撮影", body: "30秒×多数枚を連続で撮り、後で比較明合成すると星の軌跡（日周運動）になる。" },
      { heading: "3. タイムラプス", body: "一定間隔で撮り続け、動画化。天の川が流れる映像が作れる。" },
    ],
    relatedGuides: [
      { href: "/guide/settings", label: "星空撮影の設定 完全ガイド" },
      { href: "/guide/milkyway-season", label: "天の川が見える時期と方角" },
    ],
    purchase: [{ label: "購入先（提携準備中）" }],
    affiliateKeyword: "タイマーリモートスイッチ カメラ",
    verified: false,
  },
  {
    slug: "soft-filter",
    name: "ケンコー PRO1D プロソフトン クリア(W)",
    category: "アクセサリ",
    role: "主",
    icon: "filter",
    tagline: "風景はクリアなまま星座を際立たせる、星景の新定番ソフトフィルター。",
    forWho: "星景写真で「どれが何座か分かる」絵にしたい人、星を印象的に見せたい人。",
    pros: [
      "明るい星ほど大きく滲み、星座の形が分かりやすくなる",
      "プロソフトン(A)の約半分のソフト効果＝風景はにじませず控えめに星座を浮かす",
      "星空用ソフトフィルターの「最初の1枚」に最適",
    ],
    cons: [
      "効果は控えめ方向。しっかり滲ませたい場合は(A)など強めを選ぶ",
      "レンズのフィルター径に合うサイズ選びが必要（出目金レンズは角型ホルダー要）",
    ],
    specs: [
      { label: "効果の強さ", value: "プロソフトン(A)の約半分（控えめ）" },
      { label: "形式", value: "丸型（ねじ込み）" },
      { label: "参考価格", value: "49mm ¥4,800〜／82mm ¥9,200（メーカー希望小売）" },
      { label: "サイズ", value: "レンズのフィルター径に合わせる" },
    ],
    usage: [
      { heading: "1. フィルター径を合わせる", body: "レンズ前面の⌀表記（例 ⌀77mm）に合うサイズを選ぶ。広角の出目金レンズは角型ホルダーが必要。" },
      { heading: "2. 風景はクリア・星は滲む", body: "プロソフトン クリアは風景のにじみを抑えつつ、明るい星だけ程よく滲ませる。星景の構図に効く。" },
      { heading: "3. 構図に星座を入れる", body: "オリオンや夏の大三角など、形が分かる星座を構図に入れると効果が活きる。" },
    ],
    relatedGuides: [
      { href: "/guide/prosofton-clear", label: "プロソフトン クリアの効果と使い方" },
      { href: "/guide/lens", label: "星空向けレンズの選び方" },
      { href: "/guide/tonight-sky", label: "季節別・見える星座と天体" },
    ],
    purchase: [{ label: "購入先（提携準備中）" }],
    affiliateKeyword: "プロソフトン クリア",
    verified: true,
    sourceUrl: "https://www.kenko-tokina.co.jp/imaging/filter/soft/prosofton_clear.html",
  },
  {
    slug: "astro-binoculars",
    name: "ビクセン アスコット ZR10×50WP(W)（観望双眼鏡）",
    category: "観望",
    role: "副",
    icon: "binoculars",
    tagline: "撮ったら次は「観る」。10×50・実視界6.5°で星雲星団を楽しめる防水機。",
    forWho: "撮影で星空に親しみ、肉眼の次のステップとして眼視も楽しみたい人。",
    pros: [
      "10倍×口径50mm・実視界6.5°で、星団や天の川を広く見渡せる",
      "BaK4プリズム＋PFMコート・防水設計で扱いやすい",
      "三脚取付対応（ビノホルダー使用）で手ブレを抑えてじっくり観望できる",
    ],
    cons: [
      "重さ約1,040gで、手持ち長時間はやや疲れる（三脚推奨）",
      "10倍は手ブレが出やすく、固定すると見え味が一変する",
    ],
    specs: [
      { label: "倍率 / 対物径", value: "10倍 / 50mm" },
      { label: "実視界 / 見掛視界", value: "6.5° / 65°" },
      { label: "ひとみ径 / アイレリーフ", value: "5.0mm / 18.0mm" },
      { label: "プリズム / 防水", value: "BaK4・PFMコート / 防水" },
      { label: "重さ", value: "約1,040g" },
    ],
    usage: [
      { heading: "1. まず明るい対象から", body: "月・すばる（プレアデス）・夏の天の川など、明るく大きい対象から導入に慣れる。" },
      { heading: "2. 三脚に載せる", body: "10倍は手ブレが気になる。ビノホルダーで三脚固定すると見え味が一変する。" },
      { heading: "3. 暗順応", body: "目が暗闇に慣れる15〜20分で見える星が増える。赤色ライトで手元を照らす。" },
    ],
    relatedGuides: [
      { href: "/guide/ascot-zr10x50", label: "10×50双眼鏡で星空観望：本機の楽しみ方" },
      { href: "/guide/binoculars-vs-telescope", label: "双眼鏡 vs 望遠鏡" },
      { href: "/guide/telescope-beginner", label: "はじめての天体望遠鏡の選び方" },
    ],
    purchase: [{ label: "購入先（提携準備中）" }],
    affiliateKeyword: "ビクセン アスコット ZR10×50WP",
    verified: true,
    sourceUrl: "https://www.vixen.co.jp/product/1563_06/",
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export const CATEGORY_ORDER: ProductCategory[] = ["赤道儀", "レンズ", "三脚", "カメラ", "アクセサリ", "観望"];
