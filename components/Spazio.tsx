"use client";

import { useEffect, useRef } from "react";
import styles from "./Spazio.module.css";

export function Spazio() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.visible);
          observer.unobserve(el);
        }
      },
      { threshold: 0.18 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <p className={styles.label}>Il punto di sintesi</p>
        <div className={styles.content}>
          <p className={styles.line} style={{ transitionDelay: "0s" }}>
            Tra l&apos;intuizione
          </p>
          <p className={styles.line} style={{ transitionDelay: "0.12s" }}>
            e l&apos;esecuzione
          </p>
          <p className={styles.line} style={{ transitionDelay: "0.24s" }}>
            esiste uno spazio<span className={styles.accent}>.</span>
          </p>
        </div>
        <p className={styles.note} style={{ transitionDelay: "0.42s" }}>
          È lì che Sintetica lavora: dove le possibilità trovano struttura.
        </p>
      </div>
    </section>
  );
}
