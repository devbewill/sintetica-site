"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    const spans = el.querySelectorAll(`.${styles.word}`);

    // Staggered entrance
    const timer = setTimeout(() => {
      spans.forEach((span, i) => {
        (span as HTMLElement).style.transitionDelay = `${i * 0.12}s`;
        (span as HTMLElement).classList.add(styles["word--visible"]);
      });
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.label}>
          <span className={styles.dot} />
          <span>Organizzazione &middot; Persone &middot; Struttura</span>
        </div>

        <h1 ref={titleRef} className={styles.title}>
          <span className={styles.line}>
            <span className={styles.word}>Dare</span>{" "}
            <span className={styles.word}>forma</span>
          </span>
          <span className={styles.line}>
            <span className={styles.word}>al</span>{" "}
            <span className={styles.word}>cambiamento.</span>
          </span>
        </h1>

        <div className={styles.bottom}>
          <p className={styles.subtitle}>Le idee generano possibilit&agrave;.</p>
          <div className={styles.scrollHint}>
            <div className={styles.scrollLine} />
          </div>
        </div>
      </div>
    </section>
  );
}
