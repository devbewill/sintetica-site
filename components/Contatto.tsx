"use client";

import { Reveal } from "./FadeUp";
import styles from "./Contatto.module.css";

export function Contatto() {
  return (
    <section className={styles.section} id="contatto">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <Reveal as="p" className={styles.kicker}>
              <span className={styles.kickerLine} />
              Iniziamo da qui
            </Reveal>
            <Reveal as="h2" delay={1} className={styles.headline}>
              Non vendiamo
              <br />
              pacchetti<span className={styles.period}>.</span>
            </Reveal>
            <Reveal as="p" delay={2} className={styles.text}>
              Ogni organizzazione ha la sua complessità. Raccontaci la tua —
              ti rispondiamo con una prospettiva, non con un preventivo.
            </Reveal>
          </div>

          <div className={styles.right}>
            <Reveal delay={3} className={styles.card}>
              <div className={styles.cardCorner} aria-hidden="true" />
              <a href="mailto:hello@sintetica.xyz" className={styles.email}>
                hello@sintetica.xyz
                <span className={styles.emailArrow}>↘</span>
              </a>
              <p className={styles.details}>
                Milano, Italia<br />
                Rispondiamo in 24 ore.
              </p>
              <div className={styles.cardRule} />
              <p className={styles.cardNote}>
                Primo contatto esplorativo, nessun impegno.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
