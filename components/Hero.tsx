"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll(`.${styles.reveal}`).forEach((el, i) => {
        setTimeout(() => el.classList.add(styles.visible), i * 180);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.inner}>
        <h1 className={`${styles.brand} ${styles.reveal}`}>
          Sintetica<span className={styles.dot}>.</span>
        </h1>
        <div className={styles.payoff}>
          <p className={`${styles.tagline} ${styles.reveal}`}>
            Dare forma al cambiamento<span className={styles.dot}>.</span>
          </p>
          <p className={`${styles.subtitle} ${styles.reveal}`}>
            Le idee generano possibilità.<br />
            Aiutiamo le organizzazioni a dar loro struttura.
          </p>
        </div>
      </div>
    </section>
  );
}
