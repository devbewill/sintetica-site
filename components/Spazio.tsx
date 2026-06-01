"use client";

import { useEffect, useRef } from "react";
import { Reveal, LineReveal } from "./FadeUp";
import styles from "./Spazio.module.css";

export function Spazio() {
  const linesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = linesRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const lines = container.querySelectorAll(`.${styles.quoteLine}`);
          lines.forEach((line, i) => {
            (line as HTMLElement).style.transitionDelay = `${i * 0.15}s`;
            (line as HTMLElement).classList.add(styles["quoteLine--visible"]);
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.spazio}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.number}>01</span>
          <LineReveal width="2rem" className={styles.accentLine} />

          <div ref={linesRef} className={styles.quote}>
            <p className={styles.quoteLine}>Tra l&rsquo;intuizione e l&rsquo;esecuzione</p>
            <p className={styles.quoteLine}>esiste uno spazio.</p>
            <p className={`${styles.quoteLine} ${styles.quoteLineAlt}`}>
              Dove le possibilit&agrave; trovano struttura.
            </p>
          </div>

          <div className={styles.credit}>
            <span className={styles.emDash}>&mdash;</span>
            <span>Il principio fondativo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
