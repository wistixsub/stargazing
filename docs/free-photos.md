# フリー素材写真の入れ方（当面しのぎ → 後で実写へ）

サイトの第一印象を上げるための写真運用メモ。いまは hero を **CSSスターフィールド**（`components/StarField.tsx`・外部画像ゼロ）でしのいでいる。
ここに「フリー素材の実写」を足す、あるいは将来「藤野さん／読者の実写作例」に差し替える手順。

## フリー素材の入手先（商用利用OK・登録不要）
- **Unsplash** … https://unsplash.com/s/photos/milky-way （Unsplashライセンス＝商用可・クレジット不要だが推奨）
- **Pexels** … https://www.pexels.com/search/starry%20sky/ （同上）
- いずれも「天の川 / starry sky / night sky / milky way」で検索。**横長・暗部の階調がきれいな1〜2枚**を hero 用に選ぶ。

### 注意（重要な切り分け）
- フリー素材は **hero・記事の世界観ビジュアル専用**。
- **作例ギャラリー（`/gallery`・`lib/samples.ts`）には絶対に使わない**。あそこは「読者が実際にその機材で撮った写真」という建付け。フリー素材を混ぜると嘘になり、堀（UGC・社会的証明）が崩れる。作例は実投稿のみ。

## 入れ方
1. 選んだ画像を `public/photos/` に置く（例：`public/photos/hero-milkyway.jpg`）。横2000px前後・圧縮済みが目安。
2. クレジットを残す場合は `public/photos/CREDITS.md` に「ファイル名 / 撮影者 / 出典URL」を記録。
3. hero に重ねるなら `app/page.tsx` の hero `<section>` の背景を、CSSグラデーション＋画像の二層にする：
   ```tsx
   style={{ backgroundImage: "linear-gradient(rgba(11,16,32,.55), #0b1020), url('/photos/hero-milkyway.jpg')",
            backgroundSize: "cover", backgroundPosition: "center" }}
   ```
   （`<StarField />` は画像の上に薄く重ねても、外しても可。画像が主役なら星は減らす／外す。）

## 将来：本格デザイン刷新（メモリ方針）
- アートディレクション＋実写が最大レバー。ツール候補＝v0（実装）/ Claude Design（方向探索）/ Midjourney（世界観ビジュアルのみ・**作例はAI生成NG**）/ Recraft（ロゴ）。
- スナップショット基準点＝Gitタグ `claude-only-v1`。刷新は after として進める。
