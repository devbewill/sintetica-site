"use client";

import { Reveal } from "./FadeUp";
import styles from "./Contatto.module.css";

export function Contatto() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <Reveal as="p" className={styles.label}>
          Iniziamo una conversazione
        </Reveal>
        <Reveal as="h2" delay={1} className={styles.heading}>
          Parliamone<span className={styles.period}>.</span>
        </Reveal>
        <Reveal as="p" delay={2} className={styles.email}>
          <a href="mailto:hello@sintetica.xyz" className={styles.emailLink}>
            hello@sintetica.xyz
          </a>
        </Reveal>
        <Reveal as="p" delay={3} className={styles.location}>
          Milano, Italia
        </Reveal>
      </div>
    </section>
  );
}
