"use client";

import { useEffect, useRef } from "react";
import styles from "./Spazio.module.css";

const lines = [
  "Tra l'intuizione e l'esecuzione",
  "esiste uno spazio.",
  "Dove le possibilità trovano struttura.",
];

export function Spazio() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.visible);
          observer.unobserve(el);
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.glow} />
      <div className={styles.content}>
        {lines.map((line, i) => (
          <p
            key={i}
            className={`${styles.line} ${i === lines.length - 1 ? styles.lineAccent : ""}`}
            style={{ transitionDelay: `${i * 0.2}s` }}
          >
            {line}
          </p>
        ))}
        <p className={styles.attribution}>— Il principio fondativo</p>
      </div>
    </section>
  );
}
