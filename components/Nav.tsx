"use client";

import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoMark}>Sintetica</span>
          <span className={styles.logoDot} />
        </a>
        <a href="mailto:hello@sintetica.xyz" className={styles.cta}>
          Scrivici
        </a>
      </div>
    </nav>
  );
}
