"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll(`.${styles.r}`).forEach((el, i) => {
        setTimeout(() => el.classList.add(styles.rV), i * 150);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero} ref={ref}>
      <div className={styles.inner}>
        <p className={`${styles.kicker} ${styles.r}`}>
          Organizzazione · Persone · Struttura
        </p>
        <h1 className={styles.brand}>
          <span className={styles.r}>Sintetica</span>
          <span className={styles.dot}>.</span>
        </h1>
        <p className={`${styles.tagline} ${styles.r}`}>
          Dare forma al cambiamento<span className={styles.dot}>.</span>
        </p>
      </div>
    </section>
  );
}
