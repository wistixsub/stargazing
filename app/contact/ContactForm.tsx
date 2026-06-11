"use client";

import { useState } from "react";
import { WEB3FORMS_KEY } from "@/lib/site";

type Status = "idle" | "sending" | "ok" | "error";

const fieldStyle: React.CSSProperties = {
  background: "var(--surface2)",
  borderColor: "var(--border)",
  color: "var(--text)",
};

const TYPES = ["掲載のご相談（メーカー・ショップ様）", "内容の誤り報告", "その他"] as const;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  // アクセスキー未設定なら「準備中」表示（フォームのバックエンド未接続）
  if (!WEB3FORMS_KEY) {
    return (
      <div className="rounded-xl border p-5" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
        <h2 className="text-sm font-bold mb-2">お問い合わせフォーム</h2>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          現在、お問い合わせフォームを準備中です。公開までしばらくお待ちください。
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
    const type = String(fd.get("種別") || "その他");
    const payload = {
      access_key: WEB3FORMS_KEY,
      subject: `星空ノート お問い合わせ【${type}】`,
      from_name: "星空ノート お問い合わせフォーム",
      botcheck: fd.get("botcheck") ? true : false,
      種別: type,
      お名前: fd.get("お名前") || "",
      メールアドレス: fd.get("メールアドレス") || "",
      本文: fd.get("本文") || "",
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
        <h2 className="text-sm font-bold mb-2" style={{ color: "var(--accent)" }}>送信しました</h2>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          お問い合わせありがとうございます。内容を確認のうえ、記入いただいたメールアドレス宛にご連絡します（数日いただく場合があります）。
        </p>
        <button onClick={() => setStatus("idle")} className="mt-3 text-sm underline" style={{ color: "var(--accent)" }}>
          続けて送信する
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border p-5 space-y-4" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
      {/* スパム避けハニーポット（非表示） */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div>
        <label className="block text-sm font-medium mb-1">お問い合わせの種別 <span style={{ color: "var(--accent2)" }}>*</span></label>
        <select name="種別" required className="w-full rounded-lg border px-3 py-2 text-sm" style={fieldStyle} defaultValue={TYPES[0]}>
          {TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium mb-1">お名前（会社名・ご担当者名） <span style={{ color: "var(--accent2)" }}>*</span></label>
          <input name="お名前" required type="text" placeholder="例：株式会社◯◯ 広報部 △△"
            className="w-full rounded-lg border px-3 py-2 text-sm" style={fieldStyle} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">メールアドレス <span style={{ color: "var(--accent2)" }}>*</span></label>
          <input name="メールアドレス" required type="email" placeholder="返信先になります"
            className="w-full rounded-lg border px-3 py-2 text-sm" style={fieldStyle} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">本文 <span style={{ color: "var(--accent2)" }}>*</span></label>
        <textarea name="本文" required rows={6} placeholder="お問い合わせ内容をご記入ください"
          className="w-full rounded-lg border px-3 py-2 text-sm" style={fieldStyle} />
      </div>

      {status === "error" && (
        <p className="text-sm" style={{ color: "var(--accent2)" }}>{error}</p>
      )}

      <button type="submit" disabled={status === "sending"}
        className="rounded-lg px-5 py-2.5 text-sm font-bold disabled:opacity-60"
        style={{ background: "var(--accent)", color: "#ffffff" }}>
        {status === "sending" ? "送信中…" : "送信する"}
      </button>
    </form>
  );
}
