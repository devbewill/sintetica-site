"use client";

import { Reveal } from "./FadeUp";
import styles from "./Statement.module.css";

type Props = {
  num: string;
  title: string;
  titleAccent?: string;
  text: string;
};

export function Statement({ num, title, titleAccent, text }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.num}>{num}</span>
          <div className={styles.line} />
        </div>
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
