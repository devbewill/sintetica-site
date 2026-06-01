"use client";

import { useEffect, useRef } from "react";
import styles from "./Spazio.module.css";

const lines = [
  "Tra l'intuizione e l'esecuzione",
  "esiste uno spazio.",
  "Dove le possibilità trovano struttura.",
];

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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.inner}>
        {lines.map((line, i) => (
          <p
            key={i}
            className={`${styles.line} ${i === 2 ? styles.accentLine : ""}`}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            {line}
          </p>
        ))}
        <div className={styles.sep} />
        <p className={styles.attr} style={{ transitionDelay: "0.5s" }}>
          Il principio fondativo
        </p>
      </div>
    </section>
  );
}
