"use client";

import { Reveal } from "./FadeUp";
import styles from "./Contatto.module.css";

export function Contatto() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.line} />
          <Reveal as="p" className={styles.label}>
            Iniziamo una conversazione
          </Reveal>
        </div>
        <Reveal as="h2" delay={1} className={styles.heading}>
          Parliamone<span className={styles.period}>.</span>
        </Reveal>
        <div className={styles.details}>
          <Reveal as="p" delay={2} className={styles.emailWrap}>
            <a href="mailto:hello@sintetica.xyz" className={styles.emailLink}>
              hello@sintetica.xyz
            </a>
          </Reveal>
          <Reveal as="p" delay={3} className={styles.location}>
            Milano, Italia
          </Reveal>
        </div>
      </div>
    </section>
  );
}
