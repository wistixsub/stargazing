# 明るいテーマへの全面pivot 引き継ぎメモ（2026-06-11）

## 決定
- **方向確定：サイト全体を「明け方の明るいテーマ」に刷新する**（本人決定 2026-06-11）。
- 目標イメージ＝`docs/design-mock/homepage-light-mockup.png`（ChatGPT生成・全体が明るい完成形）。
- 全面実装は **Claude Design で明日トライ予定**（CSS手起こしより見本に近づけやすい想定）。

## 現状（中途状態）
- ✅ **ヒーローのみ**明け方テーマ実装済（`app/page.tsx` の hero＋`components/DawnSky.tsx`・push済 3aa8ec6）。
- ❌ ヘッダー（`app/layout.tsx`）・カード・作例・ツール・フッター・16記事ページは**まだ暗い（dark）**。
- 基準点tag＝`claude-only-v1`（暗い版の全体）。`git revert`や比較に使える。

## 残タスク（全面pivot）
1. グローバルトークン（`app/globals.css`）を明るい版に：背景 #f4f7ff〜#e8eefc／文字 #1b2545／補助 #5b6a8c／アクセント #1f8fb0・#e0901f／カード白＋淡い影／border #dbe3f5
2. ヘッダー（layout.tsx）を白背景＋濃紺ナビに（見本通り。ナビは アイコン＋ラベル2段）
3. 機材カード・作例・ツールウィジェット・フッターを明るいカード調に
4. **16記事の本文ページ（ArticleShell）も明→暗の統一**＝全ページ明るくが自然（要設計判断）
5. StarField（白い星）は明るい背景で不可視→DawnSky系の濃色装飾に置換 or トークン化
6. 可読性チェック（コントラスト比）・作例ギャラリーの「第1号募集中」空状態は維持

## Claude Designで進める場合の渡し方
- 仕様書＝`docs/design-mock/homepage-light-mockup.png`＋カラーパレット（上記）。
- 文字はHTMLテキスト・データはlib/products等の実データ・作例はAI/ストック禁止（実投稿のみ）の原則は維持。
- 機材イラスト4点はChatGPTでエラー多発のため保留。当面は絵文字 or Claude生成SVGで代替可。

## 注意
- 全面pivotは1コミットにまとめると手戻り最小。push前に `npm run build` 通過確認。
- 公開・git作業は標準フロー（wistixsub/main・[[公開・git作業のデフォルトと確認省略]]）。
