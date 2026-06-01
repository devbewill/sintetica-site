"use client";

import styles from "./Nav.module.css";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.spacer} />
        <a href="mailto:hello@sintetica.xyz" className={styles.cta}>
          Scrivici
        </a>
      </div>
    </nav>
  );
}
