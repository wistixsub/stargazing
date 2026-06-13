// 楽天 新API（openapi.rakuten.co.jp）で各商品の代表画像URLを取得し、
// data/product-images.json（slug → 画像URL）に書き出すジェネレータ。
//
// 実行: node scripts/fetch-rakuten-images.mjs  （.env.local の RAKUTEN_APP_ID / RAKUTEN_ACCESS_KEY を使用）
// 出力URLはホットリンク用。商品が変わった/画像が古くなったら再実行し、git差分でレビューしてからコミットする。
//
// ※ q（検索語）・ng（除外語）は lib/products.ts の各商品と対応。特定モデルを断定しない
//   「選び方ガイド」系（インターバルレリーズ）は画像を付けない方針のためここに含めない。
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const env = Object.fromEntries(
  readFileSync(resolve(root, ".env.local"), "utf8").split(/\r?\n/)
    .filter((l) => l && !l.startsWith("#") && l.includes("="))
    .map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; })
);
const APP_ID = env.RAKUTEN_APP_ID;
const ACCESS_KEY = env.RAKUTEN_ACCESS_KEY;
const ORIGIN = "https://hoshizora-note.com";
const ENDPOINT = "https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20220601";

// slug, 検索語(q), 除外語(ng 任意)
const CONFIG = [
  { slug: "portable-star-tracker", q: "ケンコー スカイメモS" },
  { slug: "polarie-u", q: "ビクセン ポラリエU", ng: "極軸望遠鏡 PF-L 雲台ベース ステップアップキット 中古" },
  { slug: "star-adventurer-gti", q: "スカイウォッチャー スターアドベンチャーGTi", ng: "AZ-GTi 中古" },
  { slug: "wide-fast-lens", q: "SAMYANG 14mm F2.8 ED AS IF UMC", ng: "ホルダー アダプター KANI 中古 アウトレット フィルター" },
  { slug: "sigma-14-24mm-f28", q: "SIGMA 14-24mm F2.8 DG DN" },
  { slug: "sigma-14mm-f14", q: "SIGMA 14mm F1.4 DG DN" },
  { slug: "sturdy-tripod", q: "スリック ライトカーボン E83" },
  { slug: "red-headlamp", q: "ビクセン 天体観測用ライト SG-L02" },
  { slug: "soft-filter", q: "プロソフトン クリア" },
  { slug: "astro-binoculars", q: "ビクセン アスコット ZR10×50WP" },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchImage(q, ng) {
  if (!APP_ID || !ACCESS_KEY) throw new Error(".env.local に RAKUTEN_APP_ID / RAKUTEN_ACCESS_KEY が必要です");
  const qs = new URLSearchParams({ format: "json", applicationId: APP_ID, accessKey: ACCESS_KEY, keyword: q, hits: "1", imageFlag: "1" });
  if (ng) qs.set("NGKeyword", ng);
  const res = await fetch(`${ENDPOINT}?${qs}`, { headers: { Origin: ORIGIN, "User-Agent": "hoshizora-note/1.0" } });
  if (!res.ok) return { error: `HTTP ${res.status}` };
  const json = await res.json();
  const item = json.Items?.[0]?.Item;
  if (!item) return { error: "no item" };
  const raw = item.mediumImageUrls?.[0]?.imageUrl ?? "";
  // 楽天サムネは ?_ex=128x128。表示用に大きめ(500x500)を要求。
  const url = raw.replace(/\?_ex=\d+x\d+$/, "") + "?_ex=500x500";
  return { url, name: item.itemName };
}

const out = {};
for (const { slug, q, ng } of CONFIG) {
  const r = await fetchImage(q, ng);
  if (r.url) {
    out[slug] = r.url;
    console.log(`OK  ${slug}\n    ${r.name.slice(0, 60)}\n    ${r.url}`);
  } else {
    console.log(`SKIP ${slug}: ${r.error}`);
  }
  await sleep(1100); // 1req/sec 制限に配慮
}

mkdirSync(resolve(root, "data"), { recursive: true });
const outPath = resolve(root, "data/product-images.json");
writeFileSync(outPath, JSON.stringify(out, null, 2) + "\n", "utf8");
console.log(`\n→ ${Object.keys(out).length}件を data/product-images.json に書き出しました`);
