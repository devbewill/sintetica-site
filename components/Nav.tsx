"use client";

import { useEffect, useRef } from "react";
import styles from "./Nav.module.css";

export function Nav() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      el.classList.toggle(styles["nav--scrolled"], window.scrollY > 60);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav ref={ref} className={styles.nav}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo}>
          Sintetica
        </a>
        <a href="mailto:hello@sintetica.xyz" className={styles.contact}>
          Contatto
        </a>
      </div>
    </nav>
  );
}
