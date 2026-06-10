"use client";

import { useEffect } from "react";
import styles from "./Hero.module.css";

export function Hero() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      document.querySelectorAll(`.${styles.r}`).forEach((el, i) => {
        window.setTimeout(() => el.classList.add(styles.rV), i * 110);
      });
    }, 100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero} aria-label="Sintetica">
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.meta}>
          <div className={`${styles.kicker} ${styles.r}`}>
            <span className={styles.dot} />
            <span>Rimuoviamo la complessità organizzativa</span>
          </div>
          <div className={`${styles.coords} ${styles.r}`}>
            <span>MI — IT</span>
            <span className={styles.coordSep}>/</span>
            <span>2026</span>
          </div>
        </div>

        <div className={styles.stage}>
          <h1 className={`${styles.brand} ${styles.r}`} aria-label="Sintetica.">
            <span className={styles.brandLine} aria-hidden="true">SINTE</span>
            <span className={`${styles.brandLine} ${styles.brandLineBottom}`} aria-hidden="true">
              TICA<span className={styles.period}>.</span>
            </span>
          </h1>
        </div>

        <div className={styles.bottom}>
          <div className={`${styles.tag} ${styles.r}`}>
            <span className={styles.tagNum}>N°&nbsp;01</span>
            <p className={styles.tagText}>
              Portiamo chiarezza dove c&apos;è rumore. Con AI e metodo
              rimuoviamo le <em>sovrastrutture</em> — tecnologiche e organizzative —
              e puntiamo la lente su ciò che rimette energia al lavoro.
            </p>
          </div>

          <div className={`${styles.cta} ${styles.r}`}>
            <a href="#contatto" className={styles.ctaLink}>
              <span>Iniziamo</span>
              <span className={styles.arrow} aria-hidden="true">↘</span>
            </a>
            <p className={styles.payoff}>
              Semplificare<br />
              per crescere<span className={styles.period}>.</span>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.scroll} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </section>
  );
}
