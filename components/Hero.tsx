"use client";

import { useEffect } from "react";
import styles from "./Hero.module.css";

export function Hero() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      document.querySelectorAll(`.${styles.r}`).forEach((el, i) => {
        window.setTimeout(() => el.classList.add(styles.rV), i * 120);
      });
    }, 120);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero} aria-label="Sintetica">
      <div className={styles.inner}>
        <div className={styles.meta}>
          <p className={`${styles.kicker} ${styles.r}`}>Organizzazione · Persone · Struttura</p>
          <p className={`${styles.coord} ${styles.r}`}>Milano / Italia</p>
        </div>

        <div className={styles.field} aria-hidden="true">
          <span className={styles.axis} />
          <span className={styles.axis} />
          <span className={styles.axis} />
          <span className={styles.axis} />
        </div>

        <div className={styles.brandWrap}>
          <span className={`${styles.ghost} ${styles.r}`}>forma</span>
          <h1 className={`${styles.brand} ${styles.r}`}>
            <span>Sin</span>
            <span>te</span>
            <span>tica<span className={styles.dot}>.</span></span>
          </h1>
        </div>

        <div className={styles.bottom}>
          <p className={`${styles.manifesto} ${styles.r}`}>
            Trasformiamo intuizioni in sistemi di lavoro chiari: meno rumore,
            più direzione, più capacità di agire.
          </p>
          <div className={`${styles.payoff} ${styles.r}`}>
            <span className={styles.rule} />
            <p>Dare forma al cambiamento<span className={styles.dot}>.</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
