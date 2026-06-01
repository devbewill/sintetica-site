"use client";

import { Reveal } from "./FadeUp";
import styles from "./Statement.module.css";

type Props = {
  title: string;
  titleAccent?: string;
  text: string;
  num?: string;
};

export function Statement({ title, titleAccent, text, num }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {num && <span className={styles.num}>{num}</span>}
        <Reveal as="h2" className={styles.title}>
          {title}{titleAccent && <span className={styles.accent}>{titleAccent}</span>}
        </Reveal>
        <Reveal as="p" delay={2} className={styles.text}>
          {text}
        </Reveal>
      </div>
    </section>
  );
}
