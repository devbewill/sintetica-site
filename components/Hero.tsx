"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll(`.${styles.r}`).forEach((el, i) => {
        setTimeout(() => el.classList.add(styles.rV), i * 200);
      });
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero} ref={ref}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <p className={`${styles.kicker} ${styles.r}`}>
            Organizzazione · Persone · Struttura
          </p>
        </div>
        <div className={styles.bottom}>
          <h1 className={`${styles.brand} ${styles.r}`}>
            Sintetica<span className={styles.dot}>.</span>
          </h1>
          <div className={styles.right}>
            <div className={styles.rule} />
            <p className={`${styles.tagline} ${styles.r}`}>
              Dare forma al cambiamento<span className={styles.dot}>.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
