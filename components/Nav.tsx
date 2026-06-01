"use client";

import styles from "./Nav.module.css";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          Sintetica<span className={styles.dot}>.</span>
        </a>
        <a href="mailto:hello@sintetica.xyz" className={styles.cta}>
          Scrivici
        </a>
      </div>
    </nav>
  );
}
