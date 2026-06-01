"use client";

import { Reveal, LineReveal } from "./FadeUp";
import styles from "./Citazione.module.css";

export function Citazione() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.open} aria-hidden="true">&ldquo;</span>
          <Reveal as="blockquote">
            <p className={styles.text}>
              Ogni organizzazione contiene<br />
              possibilit&agrave; inespresse.
            </p>
            <p className={`${styles.text} ${styles.textAccent}`}>
              Il nostro lavoro &egrave; creare le condizioni<br />
              perch&eacute; possano emergere.
            </p>
          </Reveal>
          <LineReveal width="2.5rem" className={styles.line} />
          <Reveal delay={3}>
            <span className={styles.attr}>Sintetica</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
