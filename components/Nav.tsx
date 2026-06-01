"use client";

import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoMark}>S</span>
          <span className={styles.logoName}>sintetica</span>
        </a>

        <a href="mailto:hello@sintetica.xyz" className={styles.cta}>
          Scrivici
        </a>
      </div>

      <div className={styles.line} />
    </nav>
  );
}
