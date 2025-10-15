"use client";
import { useState } from "react";

export default function ContactPage() {
  const [err, setErr] = useState<string | null>(null);
  return (
    <main>
      <h1>Start Your Project</h1>
      <form data-testid="contact-form" onSubmit={(e) => {
        e.preventDefault();
        const email = new FormData(e.currentTarget).get("email") as string;
        if (!/^\S+@\S+\.\S+$/.test(email)) { setErr("Please enter a valid email"); return; }
        setErr(null);
      }}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" />
        {err && <p role="alert" data-testid="contact-error">{err}</p>}
        <button type="submit" data-testid="contact-submit">Send</button>
      </form>
    </main>
  );
}
