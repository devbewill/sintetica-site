"use client";

import { Reveal, LineReveal } from "./FadeUp";
import styles from "./Citazione.module.css";

export function Citazione() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Reveal as="blockquote" className={styles.quote}>
          <p className={styles.line1}>
            Non si tratta di prevedere il futuro.
          </p>
          <p className={styles.line2}>
            Si tratta di costruire le condizioni<br />
            per renderlo possibile.
          </p>
        </Reveal>
        <LineReveal
          className={styles.accentLine}
          width="3rem"
        />
        <Reveal as="p" delay={3} className={styles.attr}>
          — Un osservazione condivisa
        </Reveal>
      </div>
    </section>
  );
}
