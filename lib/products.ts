// 商品（星空撮影ギア）データモデル。サイトの「核」。
// ※data規律：スペック・価格は捏造しない。verified=true は公式/一次情報で裏取り済み（sourceUrl明記）。
//   verified=false はカテゴリ選び方ガイド（特定モデルを断定しない・代表値）。UI上で「仕様は要確認」を明示する。

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
  sourceUrl?: string; // 出典（メーカー公式ページ等）
};

// 星空撮影を目的としたギアを軸にカタログ化。
// verified=true の4品は公式情報で裏取り済み。残りはカテゴリ選び方ガイド（代表値・要確認）。
export const PRODUCTS: Product[] = [
  {
    slug: "portable-star-tracker",
    name: "ケンコー スカイメモS（ポータブル赤道儀）",
    category: "赤道儀",
    role: "主",
    emoji: "🧭",
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
      { href: "/guide/star-tracker", label: "ポータブル赤道儀は必要か" },
      { href: "/guide/settings", label: "星空撮影の設定 完全ガイド" },
    ],
    purchase: [{ label: "購入先（提携準備中）" }],
    verified: true,
    sourceUrl: "https://www.kenko-tokina.co.jp/optics/tele_scope/sky_memo/4961607455159.html",
  },
  {
    slug: "wide-fast-lens",
    name: "SAMYANG 14mm F2.8 ED AS IF UMC（MF超広角）",
    category: "レンズ",
    role: "主",
    emoji: "🔭",
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
      { href: "/guide/lens", label: "星空向けレンズの選び方" },
      { href: "/tools/500-rule", label: "500ルール計算機" },
    ],
    purchase: [{ label: "購入先（提携準備中）" }],
    verified: true,
  },
  {
    slug: "sturdy-tripod",
    name: "星空撮影向け 三脚（剛性重視）の選び方",
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
      { label: "耐荷重", value: "約5kg以上推奨（機材重量＋赤道儀を見込む）" },
      { label: "素材", value: "カーボン／アルミ" },
      { label: "全高", value: "目線高さが目安" },
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
    name: "赤色ライト（観望・撮影用ヘッドランプ）の選び方",
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
      { label: "光色", value: "赤色（白色切替式が多い）" },
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
    name: "インターバルタイマー付きリモートレリーズの選び方",
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
    name: "ケンコー PRO1D プロソフトン クリア(W)",
    category: "アクセサリ",
    role: "主",
    emoji: "✨",
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
      { href: "/guide/lens", label: "星空向けレンズの選び方" },
      { href: "/guide/tonight-sky", label: "季節別・見える星座と天体" },
    ],
    purchase: [{ label: "購入先（提携準備中）" }],
    verified: true,
    sourceUrl: "https://www.kenko-tokina.co.jp/imaging/filter/soft/prosofton_clear.html",
  },
  {
    slug: "astro-binoculars",
    name: "ビクセン アスコット ZR10×50WP(W)（観望双眼鏡）",
    category: "観望",
    role: "副",
    emoji: "🔭",
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
      { href: "/guide/binoculars-vs-telescope", label: "双眼鏡 vs 望遠鏡" },
      { href: "/guide/telescope-beginner", label: "はじめての天体望遠鏡の選び方" },
    ],
    purchase: [{ label: "購入先（提携準備中）" }],
    verified: true,
    sourceUrl: "https://www.vixen.co.jp/product/1563_06/",
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export const CATEGORY_ORDER: ProductCategory[] = ["赤道儀", "レンズ", "三脚", "カメラ", "アクセサリ", "観望"];
