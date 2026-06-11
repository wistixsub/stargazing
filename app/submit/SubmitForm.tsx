"use client";

import { useState } from "react";
import { PRODUCTS } from "@/lib/products";
import { WEB3FORMS_KEY } from "@/lib/site";
import { LineIcon } from "@/components/icons";

type Status = "idle" | "sending" | "ok" | "error";

// 入力共通スタイル
const fieldStyle: React.CSSProperties = {
  background: "var(--surface2)",
  borderColor: "var(--border)",
  color: "var(--text)",
};

export default function SubmitForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  // アクセスキー未設定なら「準備中」表示（フォームのバックエンド未接続）
  if (!WEB3FORMS_KEY) {
    return (
      <div className="rounded-xl border p-5" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
        <h2 className="text-sm font-bold mb-2">投稿フォーム</h2>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          現在、投稿フォームを準備中です。公開までしばらくお待ちください。
        </p>
      </div>
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");

    // JSONで送る：multipartだと日本語の項目名がヘッダー側に乗りメールで文字化けするため
    const fd = new FormData(form);
    const payload = {
      access_key: WEB3FORMS_KEY,
      subject: "星空ノート 作例投稿",
      from_name: "星空ノート 作例投稿フォーム",
      botcheck: fd.get("botcheck") ? true : false,
      作品タイトル: fd.get("作品タイトル") || "",
      ニックネーム: fd.get("ニックネーム") || "",
      撮影地: fd.get("撮影地") || "",
      撮影データ: fd.get("撮影データ") || "",
      使用機材: fd.getAll("使用機材").join("、"),
      コメント: fd.get("コメント") || "",
      掲載同意: fd.get("掲載同意") || "",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
        setError(json.message || "送信に失敗しました。時間をおいて再度お試しください。");
      }
    } catch {
      setStatus("error");
      setError("通信エラーが発生しました。時間をおいて再度お試しください。");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-xl border p-5" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
        <h2 className="text-sm font-bold mb-2" style={{ color: "var(--accent)" }}>送信しました 🌌</h2>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          投稿ありがとうございます。内容を確認のうえ、掲載させていただきます（掲載まで数日いただく場合があります）。
        </p>
        <button onClick={() => setStatus("idle")} className="mt-3 text-sm underline" style={{ color: "var(--accent)" }}>
          続けて投稿する
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border p-5 space-y-4" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
      {/* スパム避けハニーポット（非表示） */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div>
        <label className="block text-sm font-medium mb-1">作品タイトル <span style={{ color: "var(--accent2)" }}>*</span></label>
        <input name="作品タイトル" required type="text" placeholder="例：夏の天の川（八ヶ岳）"
          className="w-full rounded-lg border px-3 py-2 text-sm" style={fieldStyle} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">ニックネーム <span style={{ color: "var(--accent2)" }}>*</span></label>
        <input name="ニックネーム" required type="text" placeholder="掲載時に表示されます"
          className="w-full rounded-lg border px-3 py-2 text-sm" style={fieldStyle} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium mb-1">撮影地（任意）</label>
          <input name="撮影地" type="text" placeholder="例：長野県・八ヶ岳"
            className="w-full rounded-lg border px-3 py-2 text-sm" style={fieldStyle} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">撮影データ（任意）</label>
          <input name="撮影データ" type="text" placeholder="例：ISO1600 / F2.8 / 20秒"
            className="w-full rounded-lg border px-3 py-2 text-sm" style={fieldStyle} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">使用機材（当てはまるものを選択）</label>
        <p className="text-[11px] mb-2" style={{ color: "var(--muted)" }}>選んだ機材は作例にタグとして表示され、機材ページに紐づきます。</p>
        <div className="grid gap-1.5 sm:grid-cols-2">
          {PRODUCTS.map((p) => (
            <label key={p.slug} className="flex items-center gap-2 text-sm">
              <input type="checkbox" name="使用機材" value={p.name} />
              <LineIcon name={p.icon} size={16} className="shrink-0" style={{ color: "var(--navy)" }} />
              <span>{p.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="rounded-lg border px-3 py-2.5 text-[12px]" style={{ borderColor: "var(--border)", background: "var(--surface2)", color: "var(--muted)" }}>
        📷 写真本体は、送信後に折り返しのメールでやり取りさせていただきます（まずは上記の情報だけでOKです）。
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">コメント（任意）</label>
        <textarea name="コメント" rows={3} placeholder="撮影時のエピソードなど"
          className="w-full rounded-lg border px-3 py-2 text-sm" style={fieldStyle} />
      </div>

      <label className="flex items-start gap-2 text-sm">
        <input type="checkbox" name="掲載同意" value="同意する" required className="mt-1" />
        <span style={{ color: "var(--muted)" }}>
          自分が撮影した写真であり、<a href="#terms" className="underline" style={{ color: "var(--accent)" }}>投稿ガイドライン</a>に同意します。<span style={{ color: "var(--accent2)" }}>*</span>
        </span>
      </label>

      {status === "error" && (
        <p className="text-sm" style={{ color: "var(--accent2)" }}>{error}</p>
      )}

      <button type="submit" disabled={status === "sending"}
        className="rounded-lg px-5 py-2.5 text-sm font-bold disabled:opacity-60"
        style={{ background: "var(--accent)", color: "#ffffff" }}>
        {status === "sending" ? "送信中…" : "作例を投稿する"}
      </button>
    </form>
  );
}
