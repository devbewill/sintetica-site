"use client";

import { Reveal } from "./FadeUp";
import styles from "./Contatto.module.css";

export function Contatto() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <Reveal>
            <span className={styles.label}>Parliamone</span>
          </Reveal>

          <Reveal delay={2}>
            <p className={styles.text}>
              Se credi che la tua organizzazione<br />
              possa fare di pi&ugrave; con ci&ograve; che gi&agrave; ha.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <a href="mailto:hello@sintetica.xyz" className={styles.email}>
              hello<span className={styles.at}>@</span>sintetica.xyz
            </a>
          </Reveal>

          <Reveal delay={4}>
            <div className={styles.meta}>
              <span> Milano, Italia</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
