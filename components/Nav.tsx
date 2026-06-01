"use client";

import { useEffect, useRef } from "react";
import styles from "./Nav.module.css";

export function Nav() {
  const ref = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nav = ref.current;
    const line = lineRef.current;
    if (!nav || !line) return;

    const onScroll = () => {
      const scrolled = window.scrollY > 80;
      nav.classList.toggle(styles["nav--scrolled"], scrolled);
      line.style.transform = scrolled ? "scaleX(1)" : "scaleX(0)";
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav ref={ref} className={styles.nav}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo}>
          S<span className={styles.accent}>.</span>sintetica
        </a>
        <a href="mailto:hello@sintetica.xyz" className={styles.contact}>
          Scrivici
        </a>
      </div>
      <div ref={lineRef} className={styles.line} />
    </nav>
  );
}
