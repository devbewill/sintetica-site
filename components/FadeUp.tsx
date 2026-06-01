"use client";

import { useEffect, useRef, createElement, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4 | 5;
  as?: "div" | "section" | "article" | "blockquote" | "span" | "p";
};

export function Reveal({
  children,
  className = "",
  delay,
  as = "div",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      el?.classList.add("reveal--visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal--visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay ? `delay-${delay}` : "";

  return createElement(
    as,
    {
      ref,
      className: `reveal ${delayClass} ${className}`.trim(),
    },
    children
  );
}

/* ─── Line Reveal ─── */
type LineProps = {
  width?: string;
  className?: string;
};

export function LineReveal({ width = "3rem", className = "" }: LineProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("line-expand--visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`line-expand ${className}`}
      style={{ "--line-width": width } as React.CSSProperties}
    />
  );
}
