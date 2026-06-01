"use client";

import { useEffect, useRef, createElement, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
  as?: "div" | "section" | "article" | "blockquote" | "span";
};

export function FadeUp({
  children,
  className = "",
  delay,
  as = "div",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      el?.classList.add("fade-up--visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("fade-up--visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay ? `stagger-${delay}` : "";

  return createElement(
    as,
    {
      ref,
      className: `fade-up ${delayClass} ${className}`.trim(),
    },
    children
  );
}
