"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll(`.${styles.line}`).forEach((el, i) => {
        setTimeout(() => el.classList.add(styles.lineVisible), i * 200);
      });
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.inner}>
        <p className={styles.kicker}>Organizzazione · Persone · Struttura</p>
        <h1 className={styles.title}>
          <span className={styles.line}>Dare forma</span>
          <span className={styles.line}>al cambiamento<span className={styles.period}>.</span></span>
        </h1>
        <p className={styles.subtitle}>
          Le idee generano possibilità.<br />
          Aiutiamo le organizzazioni a dar loro struttura.
        </p>
      </div>
    </section>
  );
}
