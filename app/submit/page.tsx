import type { Metadata } from "next";
import Link from "next/link";
import SubmitForm from "./SubmitForm";

export const metadata: Metadata = {
  title: "作例を投稿する｜あなたの星空写真を機材とともに",
  description:
    "あなたが撮った星空写真を、使用機材のタグとともに掲載します。投稿の流れと、掲載に関するガイドライン（利用許諾・クレジット・取り下げ）をご案内します。",
};

export default function Submit() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold">作例を投稿する</h1>
      <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        あなたが撮った星空写真を、<span style={{ color: "var(--accent)" }}>使用機材のタグ</span>とともに
        <Link href="/gallery" className="underline mx-1" style={{ color: "var(--accent)" }}>ギャラリー</Link>
        と各機材ページに掲載します。「この機材でこれが撮れる」が次の人の機材選びを助けます。
      </p>

      {/* 投稿の流れ */}
      <section className="mt-8">
        <h2 className="text-lg font-bold mb-3">投稿の流れ</h2>
        <ol className="space-y-3 text-sm" style={{ color: "var(--muted)" }}>
          {[
            ["写真を選ぶ", "あなたが撮影した星空写真（星景・天体・月など）を1枚。"],
            ["撮影データを書く", "使用機材（ボディ・レンズ・赤道儀・三脚など）、撮影地、ISO/F/SSなど分かる範囲で。"],
            ["送る", "下記のフォームから送信（準備中）。"],
            ["掲載", "内容を確認のうえ、許諾を得た写真を掲載します。使用機材はタグ化され、機材ページにも表示されます。"],
          ].map(([t, b], i) => (
            <li key={i} className="flex gap-3">
              <span className="flex-none w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: "var(--accent)", color: "#06121a" }}>{i + 1}</span>
              <span><b style={{ color: "var(--text)" }}>{t}</b>：{b}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* 投稿フォーム（Web3Forms連携・キー未設定時は準備中表示） */}
      <section className="mt-8">
        <SubmitForm />
      </section>

      {/* 投稿ガイドライン（規約ドラフト） */}
      <section id="terms" className="mt-10 pt-6 border-t scroll-mt-20" style={{ borderColor: "var(--border)" }}>
        <h2 className="text-lg font-bold mb-3">投稿ガイドライン（掲載条件）</h2>
        <div className="space-y-4 text-sm" style={{ color: "var(--muted)" }}>
          <div>
            <h3 className="font-bold" style={{ color: "var(--text)" }}>1. 投稿できる写真</h3>
            <p className="mt-1">あなた自身が撮影し、著作権を持つ写真に限ります。第三者の写真・AI生成画像・他サイトからの転載は投稿できません。</p>
          </div>
          <div>
            <h3 className="font-bold" style={{ color: "var(--text)" }}>2. 掲載の許諾</h3>
            <p className="mt-1">投稿いただいた写真は、本サイト（星空ノート）内での掲載・縮小表示・機材ページへの紐づけに使用します。著作権は投稿者に帰属します。本サイト外での二次利用や販売は行いません。</p>
          </div>
          <div>
            <h3 className="font-bold" style={{ color: "var(--text)" }}>3. クレジット表記</h3>
            <p className="mt-1">投稿時のニックネームを作例に表示します。本名・個人を特定する情報の表示は行いません。</p>
          </div>
          <div>
            <h3 className="font-bold" style={{ color: "var(--text)" }}>4. 取り下げ・削除</h3>
            <p className="mt-1">掲載の取り下げはいつでも依頼できます。ご連絡いただき次第、速やかに削除します。</p>
          </div>
          <div>
            <h3 className="font-bold" style={{ color: "var(--text)" }}>5. 掲載しない場合</h3>
            <p className="mt-1">内容の確認の結果、掲載を見送る場合があります（公序良俗・権利侵害の懸念がある場合など）。</p>
          </div>
        </div>
        <p className="mt-4 text-[11px]" style={{ color: "var(--muted)", opacity: 0.8 }}>
          ※本ガイドラインはドラフトです。正式公開時に
          <Link href="/about" className="underline mx-1" style={{ color: "var(--accent)" }}>このサイトについて</Link>
          の規約とあわせて整備します。
        </p>
      </section>
    </div>
  );
}
