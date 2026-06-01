"use client";

import { Reveal } from "./FadeUp";
import styles from "./Statement.module.css";

type Props = {
  title: string;
  text: string;
  accent?: boolean;
  redLine?: boolean;
};

export function Statement({ title, text, accent, redLine }: Props) {
  return (
    <section className={`${styles.section} ${accent ? styles.sectionAlt : ""}`}>
      <div className={styles.inner}>
        <Reveal as="h2" className={styles.title}>
          {redLine && <span className={styles.redBar} />}
          {title}
        </Reveal>
        <Reveal as="p" delay={2} className={styles.text}>
          {text}
        </Reveal>
      </div>
    </section>
  );
}
