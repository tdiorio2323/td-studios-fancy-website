"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CTASticky() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      data-testid="cta-sticky"
      aria-hidden={!visible}
      className={`fixed inset-x-0 top-0 z-40 flex justify-center transition-opacity duration-200 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className="mx-auto mt-2 rounded-full px-4 py-2 glass">
        <Link href="/contact" data-testid="cta-sticky-link" className="font-medium">
          Bring Your Vision to Life
        </Link>
      </div>
    </div>
  );
}
