"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

const lines = ["Dare forma", "al cambiamento."];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll(`.${styles.line}`).forEach((el, i) => {
        setTimeout(() => el.classList.add(styles.lineVisible), i * 220);
      });
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.inner}>
        <div className={styles.redDot} />
        <h1 className={styles.title}>
          {lines.map((line, i) => (
            <span key={i} className={styles.line}>
              {line}
            </span>
          ))}
        </h1>
        <p className={styles.subtitle}>
          Le idee generano possibilità. Aiutiamo le organizzazioni a dar loro struttura.
        </p>
      </div>
    </section>
  );
}
