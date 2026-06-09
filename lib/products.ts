// 商品（星空撮影ギア）データモデル。サイトの「核」。
// ※data規律：スペック・価格は捏造しない。現状はテンプレ検証用のデモデータ（verified=false）で、
//   実データは公式情報の裏取り後に差し替える。verified=false の商品はUI上に「仕様は要確認」を明示する。

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
  emoji: string;
  image?: string; // 商品画像パス（未設定＝絵文字プレースホルダ）
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
  verified: boolean; // スペックの公式裏取り済みか
};

// 星空撮影を目的としたギアを軸にカタログ化。スペックは代表値（要検証）。
export const PRODUCTS: Product[] = [
  {
    slug: "portable-star-tracker",
    name: "ポータブル赤道儀（スタンダード機）",
    category: "赤道儀",
    role: "主",
    emoji: "🧭",
    tagline: "星を点像のまま長秒露光できる、星景・天の川撮影の決定打。",
    forWho: "三脚＋カメラで星を撮り始め、もっと写真をクリアに・暗部まで撮りたくなった人。",
    pros: [
      "星を追尾するので、長秒露光しても星が流れず点像のまま写る",
      "ISOを下げて長く露光できる＝ノイズの少ない天の川が撮れる",
      "軽量モデルなら登山・キャンプにも持ち出せる",
    ],
    cons: [
      "極軸合わせ（北極星への向け合わせ）の習得が必要",
      "搭載重量に上限があり、重い望遠レンズには上位機が要る",
      "地上の景色は流れるため、星景は比較明合成などの工夫が要る",
    ],
    specs: [
      { label: "搭載可能重量", value: "約3〜5kg（代表値・要確認）" },
      { label: "追尾モード", value: "恒星時／0.5倍／太陽・月（機種による）" },
      { label: "電源", value: "単3電池 または USB（機種による）" },
      { label: "重量", value: "約1kg前後（軽量機の代表値・要確認）" },
    ],
    usage: [
      { heading: "1. 設置と水平出し", body: "頑丈な三脚に固定し、水平を合わせる。雲台のガタは追尾ブレの原因になるため自由雲台はしっかり締める。" },
      { heading: "2. 極軸合わせ", body: "極軸望遠鏡（または覗き穴）で北極星を導入する。緯度設定を撮影地に合わせるのがコツ。" },
      { heading: "3. 露光設定", body: "追尾するので500ルールの制約から解放される。ISOを下げ、絞りを少し絞って数十秒〜数分の露光が可能に。" },
    ],
    relatedGuides: [
      { href: "/guide/star-tracker", label: "ポータブル赤道儀は必要か" },
      { href: "/guide/settings", label: "星空撮影の設定 完全ガイド" },
    ],
    purchase: [{ label: "購入先（提携準備中）" }],
    verified: false,
  },
  {
    slug: "wide-fast-lens",
    name: "星空向け 広角・大口径レンズ（14mm F2.8 クラス）",
    category: "レンズ",
    role: "主",
    emoji: "🔭",
    tagline: "広い夜空をたっぷり・明るく取り込む、天の川撮影の王道レンズ。",
    forWho: "キットレンズで星を撮ってみて、もっと広く・明るく撮りたいと感じた人。",
    pros: [
      "F2.8前後の明るさで、短時間露光でも天の川が浮かぶ",
      "広い画角で地上の景色と星空を一緒に収められる",
      "焦点距離が短いほど500ルールでシャッタースピードを長く取れる",
    ],
    cons: [
      "周辺のコマ収差（星が鳥のように伸びる）は機種差が大きい",
      "フィルター径が特殊で、ソフトフィルターの装着に工夫が要る場合がある",
    ],
    specs: [
      { label: "焦点距離", value: "14mm前後（広角）" },
      { label: "開放F値", value: "F2.8前後（代表値・要確認）" },
      { label: "対応マウント", value: "各社あり（要確認）" },
    ],
    usage: [
      { heading: "1. ピントは星で合わせる", body: "AFは効きにくい。ライブビューで明るい星を拡大し、最小の点になるよう手動でピントを追い込む。" },
      { heading: "2. 絞りは開放〜少し絞る", body: "開放は明るいが周辺が甘くなりがち。F3.2〜4まで少し絞ると四隅の星像が締まる。" },
      { heading: "3. 焦点距離からSSを決める", body: "500ルール計算機に焦点距離を入れ、星が流れない最大シャッタースピードを確認。" },
    ],
    relatedGuides: [
      { href: "/guide/lens", label: "星空向けレンズの選び方" },
      { href: "/tools/500-rule", label: "500ルール計算機" },
    ],
    purchase: [{ label: "購入先（提携準備中）" }],
    verified: false,
  },
  {
    slug: "sturdy-tripod",
    name: "星空撮影向け 三脚（剛性重視）",
    category: "三脚",
    role: "主",
    emoji: "📐",
    tagline: "長秒露光のブレを止める土台。星空写真の歩留まりを決める縁の下の主役。",
    forWho: "暗所での数十秒露光で写真がブレる・甘くなる悩みを解決したい人。",
    pros: [
      "剛性が高くブレに強い＝長秒露光でも星がにじまない",
      "赤道儀やレンズの重量を支えられる耐荷重",
      "夜露・寒冷下でも扱いやすい（脚ロックの操作性）",
    ],
    cons: [
      "剛性と軽さはトレードオフ。軽さ優先だと風でブレやすい",
      "カーボン製は高価になりがち",
    ],
    specs: [
      { label: "耐荷重", value: "約5kg以上推奨（代表値・要確認）" },
      { label: "素材", value: "カーボン／アルミ" },
      { label: "全高", value: "目線高さが目安（要確認）" },
    ],
    usage: [
      { heading: "1. 脚は太い段から伸ばす", body: "細い段（エレベーター含む）はブレやすい。必要な高さは太い脚から出して剛性を確保する。" },
      { heading: "2. 風対策", body: "センターフックにバッグを下げて重心を落とすとブレに強くなる。" },
      { heading: "3. ミラーアップ／電子先幕", body: "シャッターショックを抑える設定で、長秒露光の微ブレを減らす。" },
    ],
    relatedGuides: [
      { href: "/guide/settings", label: "星空撮影の設定 完全ガイド" },
      { href: "/guide/star-tracker", label: "ポータブル赤道儀は必要か" },
    ],
    purchase: [{ label: "購入先（提携準備中）" }],
    verified: false,
  },
  {
    slug: "red-headlamp",
    name: "赤色ライト（観望・撮影用ヘッドランプ）",
    category: "アクセサリ",
    role: "主",
    emoji: "🔦",
    tagline: "暗順応を壊さず手元を照らす、夜の現場の必需品。安いのに効果絶大。",
    forWho: "暗闇での機材操作・ノート書き・足元確認を、目を眩ませずに行いたい人。",
    pros: [
      "赤色光は暗順応（目が暗闇に慣れた状態）を壊しにくい",
      "周囲の撮影者の写真に白色光が写り込む迷惑を防げる",
      "安価で軽量。1つ持っておくと撮影・観望どちらでも活躍",
    ],
    cons: [
      "明るすぎる赤や白色併用モデルは誤点灯に注意",
      "極寒では電池の持ちが落ちる（予備推奨）",
    ],
    specs: [
      { label: "光色", value: "赤色（白色切替式が多い・要確認）" },
      { label: "電源", value: "単4電池 または USB充電（機種による）" },
      { label: "形式", value: "ヘッドランプ／ハンディ" },
    ],
    usage: [
      { heading: "1. 最初から赤色で点ける", body: "白色で点けると暗順応がリセットされる。現場に着いたら最初から赤色モードで。" },
      { heading: "2. 光量は最小に", body: "手元が見える最小限の明るさに。周囲の撮影者への配慮にもなる。" },
      { heading: "3. 撮影中は消す", body: "長秒露光中は消灯。レンズ前を横切る光はカブリの原因。" },
    ],
    relatedGuides: [
      { href: "/guide/settings", label: "星空撮影の設定 完全ガイド" },
      { href: "/guide/binoculars-vs-telescope", label: "双眼鏡 vs 望遠鏡" },
    ],
    purchase: [{ label: "購入先（提携準備中）" }],
    verified: false,
  },
  {
    slug: "intervalometer-release",
    name: "インターバルタイマー付きリモートレリーズ",
    category: "アクセサリ",
    role: "主",
    emoji: "⏱️",
    tagline: "シャッターブレを防ぎ、タイムラプス・比較明合成を自動化する小さな相棒。",
    forWho: "長秒露光のブレを無くしたい人、星の軌跡（比較明合成）やタイムラプスに挑戦したい人。",
    pros: [
      "シャッターを触らず切れるので、長秒露光のブレを防げる",
      "バルブ＋連続撮影で、星グルグル（比較明合成）やタイムラプスを自動化",
      "カメラ内蔵インターバルが無い機種を補える",
    ],
    cons: [
      "カメラ機種ごとに端子・対応が違う（購入前に要確認）",
      "寒冷地ではケーブルが硬化しやすい",
    ],
    specs: [
      { label: "接続", value: "有線（機種別端子）／無線（機種による）" },
      { label: "機能", value: "バルブ・インターバル・連続撮影（機種による）" },
      { label: "電源", value: "ボタン電池／単4（機種による）" },
    ],
    usage: [
      { heading: "1. 端子を確認して選ぶ", body: "同じメーカーでも機種で端子が違うことがある。手持ちカメラの対応を必ず確認。" },
      { heading: "2. 比較明合成の連続撮影", body: "30秒×多数枚を連続で撮り、後で比較明合成すると星の軌跡（日周運動）になる。" },
      { heading: "3. タイムラプス", body: "一定間隔で撮り続け、動画化。天の川が流れる映像が作れる。" },
    ],
    relatedGuides: [
      { href: "/guide/settings", label: "星空撮影の設定 完全ガイド" },
      { href: "/guide/milkyway-season", label: "天の川が見える時期と方角" },
    ],
    purchase: [{ label: "購入先（提携準備中）" }],
    verified: false,
  },
  {
    slug: "soft-filter",
    name: "ソフトフィルター（星を滲ませて目立たせる）",
    category: "アクセサリ",
    role: "主",
    emoji: "✨",
    tagline: "明るい星をふんわり滲ませ、星座の形を浮かび上がらせる味付けフィルター。",
    forWho: "星景写真で「どれが何座か分かる」絵にしたい人、星を印象的に見せたい人。",
    pros: [
      "明るい星ほど大きく滲み、星座の形が分かりやすくなる",
      "天の川や星景に幻想的な雰囲気を加えられる",
      "つけ外しで表現を切り替えられる",
    ],
    cons: [
      "かけすぎると地上の光源もにじむ。効果の強弱（種類）を選ぶ必要",
      "レンズのフィルター径に合うサイズ選びが必要（出目金レンズは角型ホルダー要）",
    ],
    specs: [
      { label: "形式", value: "丸型（ねじ込み）／角型（ホルダー）" },
      { label: "効果の強さ", value: "弱〜強の種類あり（用途で選ぶ・要確認）" },
      { label: "サイズ", value: "レンズのフィルター径に合わせる" },
    ],
    usage: [
      { heading: "1. フィルター径を合わせる", body: "レンズ前面の⌀表記（例 ⌀77mm）に合うサイズを選ぶ。広角の出目金レンズは角型ホルダーが必要。" },
      { heading: "2. 効果は控えめから", body: "強すぎると不自然。まずは弱めの効果で、星座が分かる程度に。" },
      { heading: "3. 構図に星座を入れる", body: "オリオンや夏の大三角など、形が分かる星座を構図に入れると効果が活きる。" },
    ],
    relatedGuides: [
      { href: "/guide/lens", label: "星空向けレンズの選び方" },
      { href: "/guide/tonight-sky", label: "季節別・見える星座と天体" },
    ],
    purchase: [{ label: "購入先（提携準備中）" }],
    verified: false,
  },
  {
    slug: "astro-binoculars",
    name: "天体観望向け 双眼鏡（10x50 クラス）",
    category: "観望",
    role: "副",
    emoji: "🔭",
    tagline: "撮ったら次は「観る」。手軽に星雲・星団・月を楽しめる入門の一台。",
    forWho: "撮影で星空に親しみ、肉眼の次のステップとして眼視も楽しみたい人。",
    pros: [
      "望遠鏡より手軽・安価で、すぐに星空を流し見できる",
      "広い視野でアンドロメダ銀河やプレアデス星団を導入しやすい",
      "アウトドアや昼の風景にも使える汎用性",
    ],
    cons: [
      "手持ちでは手ブレする。長時間は三脚＋ビノホルダーが快適",
      "倍率が高いほど視野が狭く・暗くなる",
    ],
    specs: [
      { label: "倍率×口径", value: "10×50（代表値）" },
      { label: "実視界", value: "5〜6°前後（要確認）" },
      { label: "ひとみ径", value: "5mm前後（要確認）" },
    ],
    usage: [
      { heading: "1. まず明るい対象から", body: "月・すばる（プレアデス）・夏の天の川など、明るく大きい対象から導入に慣れる。" },
      { heading: "2. 三脚に載せる", body: "10倍以上は手ブレが気になる。ビノホルダーで三脚固定すると見え味が一変する。" },
      { heading: "3. 暗順応", body: "目が暗闇に慣れる15〜20分で見える星が増える。赤色ライトで手元を照らす。" },
    ],
    relatedGuides: [
      { href: "/guide/binoculars-vs-telescope", label: "双眼鏡 vs 望遠鏡" },
      { href: "/guide/telescope-beginner", label: "はじめての天体望遠鏡の選び方" },
    ],
    purchase: [{ label: "購入先（提携準備中）" }],
    verified: false,
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export const CATEGORY_ORDER: ProductCategory[] = ["赤道儀", "レンズ", "三脚", "カメラ", "アクセサリ", "観望"];
