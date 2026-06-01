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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.line} style={{ transitionDelay: "0s" }}>
            Tra l&apos;intuizione e l&apos;esecuzione
          </p>
          <p className={styles.line} style={{ marginLeft: "8%", transitionDelay: "0.15s" }}>
            esiste uno spazio.
          </p>
          <p className={`${styles.line} ${styles.accent}`} style={{ marginLeft: "16%", transitionDelay: "0.3s" }}>
            Dove le possibilità trovano struttura.
          </p>
          <div className={styles.sep} style={{ transitionDelay: "0.5s" }} />
          <p className={styles.attr} style={{ transitionDelay: "0.6s" }}>
            Il principio fondativo
          </p>
        </div>
      </div>
    </section>
  );
}
