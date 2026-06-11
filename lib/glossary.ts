// 用語集データ。「ことばの定義」ではなく、その用語が
// ①撮れる写真のどこに現れるか ②機材選び・撮影手順のどこに効くか、の観点で説明する。
// 関連リンク（機材＝Product slug／ガイド・ツール）でサイト内を横断できるようにする。

import type { IconName } from "@/components/icons";

export type GlossaryCategory = "機材のことば" | "撮影のことば" | "空と天体のことば" | "観る（観望）のことば";

export const GLOSSARY_CATEGORIES: GlossaryCategory[] = [
  "機材のことば",
  "撮影のことば",
  "空と天体のことば",
  "観る（観望）のことば",
];

export type GlossaryTerm = {
  id: string; // ページ内アンカー
  term: string;
  kana?: string; // 読み（必要なものだけ）
  icon: IconName;
  category: GlossaryCategory;
  body: string; // 使われ方：写真・機材・手順のどこに効くか
  gear?: string[]; // 関連機材（Product.slug）
  links?: { href: string; label: string }[]; // 関連ガイド・ツール
};

export const GLOSSARY: GlossaryTerm[] = [
  // ── 機材のことば ──
  {
    id: "mount",
    term: "赤道儀",
    kana: "せきどうぎ",
    icon: "mount",
    category: "機材のことば",
    body:
      "星は地球の自転で動き続けるため、長く露光すると線に伸びてしまいます。赤道儀はカメラごと星を自動で追いかけ、長秒露光でも星を「点のまま」写すための機材です。追尾できるぶんISOを下げて長く露光でき、天の川の淡い部分までなめらかに写るようになります。三脚＋カメラで撮り始めた人の、画質の次の一手です。",
    gear: ["portable-star-tracker"],
    links: [
      { href: "/guide/star-tracker", label: "ポータブル赤道儀は必要か" },
      { href: "/guide/skymemo-s", label: "スカイメモSの使い方" },
    ],
  },
  {
    id: "polar-alignment",
    term: "極軸合わせ",
    kana: "きょくじくあわせ",
    icon: "constellation",
    category: "機材のことば",
    body:
      "赤道儀の回転軸を地球の自転軸（ほぼ北極星の方向）に向ける作業です。ここがずれていると、せっかく追尾しても星が少しずつ流れて写ります。赤道儀を使う夜の最初の関門で、極軸望遠鏡を内蔵した機種はこの作業がぐっと楽になります。赤道儀選びで「極軸望遠鏡の有無」を見るのはこのためです。",
    gear: ["portable-star-tracker"],
    links: [{ href: "/guide/skymemo-s", label: "スカイメモSの使い方（極軸合わせ手順）" }],
  },
  {
    id: "wide-lens",
    term: "広角レンズ・焦点距離",
    icon: "lens",
    category: "機材のことば",
    body:
      "焦点距離（mm）が短いほど写る範囲が広い＝広角です。天の川のアーチと地上の風景を1枚に収める星景写真は14〜24mmあたりが主戦場。さらに広角ほど同じ秒数でも星が流れて見えにくいため（500ルールの分母が小さい）、露光時間を長く取れるという実利もあります。「広く写る」と「長く露光できる」の二重の意味で星空向きです。",
    gear: ["wide-fast-lens"],
    links: [
      { href: "/guide/lens", label: "星空向けレンズの選び方" },
      { href: "/tools/500-rule", label: "500ルール計算機" },
    ],
  },
  {
    id: "f-number",
    term: "F値（開放F値）",
    icon: "lens",
    category: "機材のことば",
    body:
      "レンズがどれだけ光を取り込めるかの値で、小さいほど明るいレンズです。かすかな星明かりを限られた秒数で集める星空撮影では、F2.8以下が目安とされます。ただし開放F値のままだと画面の隅で星がにじむことがあり（コマ収差）、半段〜1段絞ると星像が締まる、という使い方がセットで語られます。",
    gear: ["wide-fast-lens"],
    links: [
      { href: "/guide/lens", label: "星空向けレンズの選び方" },
      { href: "/guide/samyang-14mm", label: "SAMYANG 14mm F2.8の設定実例" },
    ],
  },
  {
    id: "tripod",
    term: "三脚（剛性）",
    icon: "tripod",
    category: "機材のことば",
    body:
      "数十秒の露光中にカメラがわずかでも揺れると、写真の星すべてがブレます。三脚は写真の歩留まりをそのまま決める土台で、星空ではパイプ径（太さ）と段数が剛性の目安になります。風の強い撮影地や、将来赤道儀を載せる予定があるなら、剛性に余裕のある脚を選ぶ理由がここにあります。",
    gear: ["sturdy-tripod"],
    links: [{ href: "/guide/slik-e83ii", label: "星空向け三脚の選び方（実例）" }],
  },
  {
    id: "release",
    term: "レリーズ（リモートレリーズ）",
    icon: "timer",
    category: "機材のことば",
    body:
      "シャッターボタンを指で押すと、その振動だけで長秒露光がブレます。レリーズはカメラに触れずにシャッターを切るための道具です。インターバルタイマー付きなら「30秒×100枚」のような連続撮影を自動化でき、星の軌跡（比較明合成）やタイムラプスの撮影が現実的になります。最近はカメラ本体に同機能を内蔵する機種も多く、まず手持ちのカメラを確認するのが先です。",
    gear: ["intervalometer-release"],
    links: [{ href: "/guide/settings", label: "星空撮影の設定 完全ガイド" }],
  },
  {
    id: "red-light",
    term: "赤色ライト",
    icon: "flashlight",
    category: "機材のことば",
    body:
      "目が暗闇に慣れた状態（暗順応）は、白いライトを一瞬見ただけでリセットされます。赤い光は暗順応への影響が比較的小さいため、星の見え方を保ったまま手元の機材操作や足元確認ができます。長秒露光中の他の撮影者のレンズに写り込みにくいという、撮影地でのマナー面の効果も大きい機材です。",
    gear: ["red-headlamp"],
    links: [{ href: "/guide/sg-l02", label: "赤色ライトはなぜ必要か" }],
  },
  {
    id: "soft-filter",
    term: "ソフトフィルター",
    icon: "filter",
    category: "機材のことば",
    body:
      "明るい星ほど大きくにじませるフィルターです。写真の上で1等星と暗い星の差が強調され、オリオン座や夏の大三角など「どれが何座か分かる」星景写真になります。効果には強弱があり、風景までにじむか・星座だけ浮かぶかが選びどころ。星空写真の仕上がりを最も手軽に変えられるアクセサリです。",
    gear: ["soft-filter"],
    links: [{ href: "/guide/prosofton-clear", label: "プロソフトン クリアの効果と使い方" }],
  },

  // ── 撮影のことば ──
  {
    id: "long-exposure",
    term: "長秒露光",
    kana: "ちょうびょうろこう",
    icon: "timer",
    category: "撮影のことば",
    body:
      "シャッターを数秒〜数分開けて光をためる撮り方で、星空撮影の土台です。肉眼で見えない星まで写る代わりに、ブレ（→三脚・レリーズ）と星の流れ（→500ルール・赤道儀）という2つの敵が生まれます。このサイトで紹介する機材の多くは、結局「長秒露光を成立させるための道具」です。",
    gear: ["sturdy-tripod", "intervalometer-release", "portable-star-tracker"],
    links: [{ href: "/guide/settings", label: "星空撮影の設定 完全ガイド" }],
  },
  {
    id: "iso",
    term: "ISO感度",
    icon: "sliders",
    category: "撮影のことば",
    body:
      "センサーが光を増幅する度合いです。上げるほど暗い星まで写りますが、写真のザラつき（ノイズ）も増えます。星空ではISO1600〜6400あたりを出発点に、空の暗さとカメラの世代で調整します。「赤道儀でISOを下げて長く露光する」のは、この増幅に頼らず光そのものを多く集めてノイズを減らす、という関係です。",
    links: [{ href: "/guide/settings", label: "星空撮影の設定 完全ガイド" }],
  },
  {
    id: "rule-500",
    term: "500ルール",
    icon: "sliders",
    category: "撮影のことば",
    body:
      "「500 ÷ 焦点距離 ＝ 星が点に見える最長シャッター秒数」という経験則です。20mmなら25秒、50mmなら10秒。これを超えると星が線に伸び始めます。レンズ選び（広角ほど長く露光できる）と設定決め（SSの上限が一発で決まる）の両方に効く、星空撮影で最初に覚える計算です。",
    links: [
      { href: "/tools/500-rule", label: "500ルール計算機" },
      { href: "/guide/settings", label: "星空撮影の設定 完全ガイド" },
    ],
  },
  {
    id: "diurnal-motion",
    term: "日周運動（星が流れる）",
    kana: "にっしゅううんどう",
    icon: "constellation",
    category: "撮影のことば",
    body:
      "地球の自転によって、星空全体が1時間に約15度動いて見える現象です。長秒露光で星が線に写る原因そのもの。止めたければ露光を短くする（500ルール）か赤道儀で追尾し、逆に活かせば星が円を描く「星の軌跡」写真になります。敵にも主役にもなる、星空撮影の前提条件です。",
    gear: ["portable-star-tracker"],
    links: [{ href: "/tools/500-rule", label: "500ルール計算機" }],
  },
  {
    id: "startrail-composite",
    term: "比較明合成",
    kana: "ひかくめいごうせい",
    icon: "camera",
    category: "撮影のことば",
    body:
      "連続撮影した多数の写真から「各ピクセルの明るい方」だけを残して重ねる合成方法です。30秒×100枚を重ねると、星が夜空にぐるりと弧を描く星の軌跡写真になります。1枚の超長時間露光と違い、途中で飛行機が入ったコマを除外できるのも利点。インターバルタイマー付きレリーズが活躍する撮り方です。",
    gear: ["intervalometer-release"],
  },
  {
    id: "infinity-focus",
    term: "無限遠ピント",
    kana: "むげんえん",
    icon: "lens",
    category: "撮影のことば",
    body:
      "星にピントを合わせること。レンズの「∞」マークは実際の無限遠からずれていることが多く、当てになりません。ライブビューで明るい星を拡大表示し、星が最も小さい点になる位置に手動で合わせるのが確実です。AFが効かない暗さでの作業なので、MF専用レンズが星空で不利にならない理由でもあります。",
    gear: ["wide-fast-lens"],
    links: [{ href: "/guide/settings", label: "星空撮影の設定 完全ガイド" }],
  },
  {
    id: "coma",
    term: "コマ収差",
    kana: "こましゅうさ",
    icon: "filter",
    category: "撮影のことば",
    body:
      "画面の隅で星が点ではなく、羽根や彗星のような形に崩れて写るレンズの癖です。点光源が画面いっぱいに散る星空は、この収差が最も目立つ被写体。開放F値で出やすく、半段〜1段絞ると改善することが多いです。レンズレビューで「四隅の星像」が必ず語られるのはこのためです。",
    gear: ["wide-fast-lens"],
    links: [{ href: "/guide/lens", label: "星空向けレンズの選び方" }],
  },

  // ── 空と天体のことば ──
  {
    id: "moon-age",
    term: "月齢・新月",
    kana: "げつれい",
    icon: "moon",
    category: "空と天体のことば",
    body:
      "新月からの経過日数で月の満ち欠けを表す数字です。月明かりは最大の「自然の光害」で、満月の夜は淡い天の川がほぼ写りません。だから星空撮影の計画は機材より先に「新月前後の夜を選ぶ」ことから始まります。月齢カレンダーで次の新月を確認するのが遠征計画の第一歩です。",
    links: [
      { href: "/tools/moon-calendar", label: "月齢カレンダー" },
      { href: "/guide/moon-phase", label: "月齢と撮影適期の考え方" },
    ],
  },
  {
    id: "milkyway",
    term: "天の川（銀河中心）",
    icon: "milkyway",
    category: "空と天体のことば",
    body:
      "夏の夜空に見える濃く明るい帯は、私たちの銀河系を内側から見た姿で、いて座方向の銀河中心が最も濃く写ります。日本ではおおむね4〜10月頃の南の空が見頃。星景写真の主役になる被写体で、「いつ・どの方角に出るか」を知っているかどうかが構図を決めます。",
    links: [{ href: "/guide/milkyway-season", label: "天の川が見える時期と方角" }],
  },
  {
    id: "light-pollution",
    term: "光害",
    kana: "こうがい",
    icon: "constellation",
    category: "空と天体のことば",
    body:
      "街明かりが夜空を明るくしてしまう現象です。空の暗さは写真のコントラストをそのまま決めるため、同じ機材でも撮影地で仕上がりが激変します。「機材に投資する前に暗い空へ移動する」が星空撮影の鉄則と言われるのはこのため。市街地から1〜2時間離れるだけでも写る星の数が変わります。",
    links: [{ href: "/guide/milkyway-season", label: "天の川が見える時期と方角" }],
  },
  {
    id: "dark-adaptation",
    term: "暗順応",
    kana: "あんじゅんのう",
    icon: "flashlight",
    category: "空と天体のことば",
    body:
      "目が暗さに慣れて、見える星が少しずつ増えていく生理現象です。完全に慣れるまで15〜20分かかる一方、白色光を一瞬見ただけで振り出しに戻ります。撮影地でスマホ画面や白ライトを不用意に点けないのが暗黙のマナーで、赤色ライトが天体観測の必需品になっている理由です。",
    gear: ["red-headlamp"],
    links: [{ href: "/guide/sg-l02", label: "赤色ライトはなぜ必要か" }],
  },

  // ── 観る（観望）のことば ──
  {
    id: "aperture",
    term: "口径",
    kana: "こうけい",
    icon: "telescope",
    category: "観る（観望）のことば",
    body:
      "望遠鏡や双眼鏡の対物レンズ（光を集める側）の直径です。集光力＝どれだけ暗い天体まで見えるかを決める、観望機材で最重要のスペック。倍率は接眼レンズで後から変えられますが、口径は本体そのものなので変えられません。「倍率より先に口径を見る」が望遠鏡選びの合言葉です。",
    gear: ["astro-binoculars"],
    links: [
      { href: "/guide/telescope-aperture", label: "口径別・見える天体の早見" },
      { href: "/guide/telescope-beginner", label: "はじめての天体望遠鏡の選び方" },
    ],
  },
  {
    id: "magnification",
    term: "倍率",
    icon: "telescope",
    category: "観る（観望）のことば",
    body:
      "対象をどれだけ拡大して見るかの数字です。望遠鏡は接眼レンズの交換で倍率が変わるため、「最大◯◯倍！」という宣伝文句はほぼ意味がありません。実用上限は口径mmの約2倍が目安とされ、それ以上は暗くぼやけるだけ。倍率の高さではなく、口径との釣り合いで見るスペックです。",
    links: [{ href: "/guide/telescope-beginner", label: "はじめての天体望遠鏡の選び方" }],
  },
  {
    id: "fov",
    term: "実視界",
    kana: "じっしかい",
    icon: "binoculars",
    category: "観る（観望）のことば",
    body:
      "双眼鏡や望遠鏡で一度に見渡せる空の範囲を角度で表したものです。広いほど星団や天の川を「流し見」する楽しさが増し、目当ての天体を視野に入れる導入も楽になります。10×50クラスの双眼鏡で6.5°前後が一つの目安。倍率を上げるほど狭くなる、トレードオフの関係にあります。",
    gear: ["astro-binoculars"],
    links: [{ href: "/guide/ascot-zr10x50", label: "10×50双眼鏡で星空観望" }],
  },
  {
    id: "exit-pupil",
    term: "ひとみ径",
    kana: "ひとみけい",
    icon: "binoculars",
    category: "観る（観望）のことば",
    body:
      "対物レンズの口径÷倍率で求まる、接眼側から出てくる光の束の太さです。暗い場所では人の瞳孔は最大7mm前後まで開くため、ひとみ径5mm前後あると視野が明るく、星雲や星団が見やすくなります。10×50の双眼鏡（50÷10＝5mm）が天体観望の定番と言われる根拠の一つです。",
    gear: ["astro-binoculars"],
    links: [{ href: "/guide/binoculars-vs-telescope", label: "双眼鏡 vs 望遠鏡" }],
  },
];

export function termsByCategory(cat: GlossaryCategory): GlossaryTerm[] {
  return GLOSSARY.filter((t) => t.category === cat);
}
