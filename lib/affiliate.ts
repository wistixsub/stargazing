// もしもアフィリエイト経由の購入リンク生成。
// a_id等はもしもアカウント固有のID（2026-06-10 提携承認：楽天市場・Yahoo!ショッピング／Amazonは審査待ち）。
// リンク先は商品「検索結果」ページ＝特定店舗の在庫切れ・閉店でリンクが死なない保守ゼロ構成。

const MOSHIMO_CLICK = "https://af.moshimo.com/af/c/click";
const MOSHIMO_IMPRESSION = "https://i.moshimo.com/af/i/impression";

export type AffiliateNetwork = {
  key: "rakuten" | "yahoo" | "amazon";
  label: string;
  a_id: number;
  p_id: number;
  pc_id: number;
  pl_id: number;
  searchUrl: (keyword: string) => string;
};

export const NETWORKS: AffiliateNetwork[] = [
  {
    key: "rakuten",
    label: "楽天市場で見る",
    a_id: 5629316,
    p_id: 54,
    pc_id: 54,
    pl_id: 27059,
    searchUrl: (k) => `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(k)}/`,
  },
  {
    key: "yahoo",
    label: "Yahoo!ショッピングで見る",
    a_id: 5629318,
    p_id: 1225,
    pc_id: 1925,
    pl_id: 27061,
    searchUrl: (k) => `https://shopping.yahoo.co.jp/search?first=1&p=${encodeURIComponent(k)}`,
  },
  // Amazon：もしも経由の提携承認後にここへ追加（a_id等を差し込むだけで全商品ページに反映される）
];

/** もしも経由のクリック計測付きリンク */
export function affiliateClickUrl(n: AffiliateNetwork, keyword: string): string {
  const target = encodeURIComponent(n.searchUrl(keyword));
  return `${MOSHIMO_CLICK}?a_id=${n.a_id}&p_id=${n.p_id}&pc_id=${n.pc_id}&pl_id=${n.pl_id}&url=${target}`;
}

/** もしものインプレッション計測ビーコン（1x1画像） */
export function impressionUrl(n: AffiliateNetwork): string {
  return `${MOSHIMO_IMPRESSION}?a_id=${n.a_id}&p_id=${n.p_id}&pc_id=${n.pc_id}&pl_id=${n.pl_id}`;
}
