"use client";

import { Reveal } from "./FadeUp";
import styles from "./Statement.module.css";

type Props = {
  num: string;
  title: string;
  titleAccent?: string;
  text: string;
  variant?: "left" | "wide" | "center";
};

export function Statement({ num, title, titleAccent, text, variant = "left" }: Props) {
  return (
    <section className={`${styles.section} ${styles[variant]}`}>
      <div className={styles.inner}>
        <div className={styles.col}>
          <Reveal as="span" className={styles.num}>
            {num}
          </Reveal>
          <Reveal as="h2" delay={1} className={styles.title}>
            {title}{titleAccent && <span className={styles.accent}>{titleAccent}</span>}
          </Reveal>
        </div>
        <div className={styles.col}>
          <Reveal as="p" delay={2} className={styles.text}>
            {text}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
