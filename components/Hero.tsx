"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

const words = ["Dare", "forma", "al", "cambiamento."];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll(`.${styles.word}`).forEach((el, i) => {
        setTimeout(() => el.classList.add(styles.wordVisible), i * 180);
      });
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.inner}>
        <p className={styles.label}>
          <span className="dot" />
          Organizzazione · Persone · Struttura
        </p>

        <h1 className={styles.title}>
          {words.map((word, i) => (
            <span key={i} className={styles.word} style={{ transitionDelay: `${i * 0.12}s` }}>
              {word}
            </span>
          ))}
        </h1>

        <p className={styles.subtitle}>
          Le idee generano possibilità.<br />
          Aiutiamo le organizzazioni a dar loro struttura.
        </p>
      </div>

      <div className={styles.scroll}>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
