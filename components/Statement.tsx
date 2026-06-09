"use client";

import { Reveal } from "./FadeUp";
import styles from "./Statement.module.css";

type Props = {
  num: string;
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  text: string;
  variant?: "split" | "poster" | "quiet";
};

export function Statement({
  num,
  eyebrow,
  title,
  titleAccent,
  text,
  variant = "split",
}: Props) {
  return (
    <section className={`${styles.section} ${styles[variant]}`} id="manifesto">
      <div className={styles.inner}>
        <Reveal as="span" className={styles.num}>{num}</Reveal>
        <div className={styles.titleBlock}>
          {eyebrow && (
            <Reveal as="p" delay={1} className={styles.eyebrow}>{eyebrow}</Reveal>
          )}
          <Reveal as="h2" delay={2} className={styles.title}>
            {title}{titleAccent && <span className={styles.accent}>{titleAccent}</span>}
          </Reveal>
        </div>
        <Reveal as="p" delay={3} className={styles.text}>{text}</Reveal>
      </div>
    </section>
  );
}
