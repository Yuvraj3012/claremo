"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "duplicate" | "error";

interface Props {
  placeholder?: string;
  buttonLabel?: string;
  inputClassName?: string;
  buttonClassName?: string;
  wrapperClassName?: string;
}

export default function WaitlistForm({
  placeholder = "you@company.com",
  buttonLabel = "Get early access",
  inputClassName = "flex-1 border border-gray-200 rounded-full px-5 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent",
  buttonClassName = "bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed",
  wrapperClassName = "flex flex-col sm:flex-row gap-2 max-w-md mx-auto",
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || status === "loading") return;
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const json = await res.json();

      if (res.ok) {
        setStatus("success");
      } else if (json.error === "already_registered") {
        setStatus("duplicate");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium px-6 py-3 rounded-full">
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        You&apos;re on the list! We&apos;ll email you at launch.
      </div>
    );
  }

  if (status === "duplicate") {
    return (
      <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium px-6 py-3 rounded-full">
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        You&apos;re already on the list!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={wrapperClassName}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        disabled={status === "loading"}
        className={inputClassName}
      />
      <button type="submit" disabled={status === "loading"} className={buttonClassName}>
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Joining...
          </span>
        ) : (
          buttonLabel
        )}
      </button>
      {status === "error" && (
        <p className="text-red-500 text-xs mt-1 w-full text-center">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
