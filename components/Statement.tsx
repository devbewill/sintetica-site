"use client";

import { Reveal } from "./FadeUp";
import styles from "./Statement.module.css";

type Props = {
  title: string;
  text: string;
  red?: boolean;
  num?: string;
};

export function Statement({ title, text, red, num }: Props) {
  return (
    <section className={`${styles.section} ${red ? styles.red : ""}`}>
      <div className={styles.inner}>
        {num && <span className={styles.num}>{num}</span>}
        <Reveal as="h2" className={styles.title}>
          {title}
        </Reveal>
        <Reveal as="p" delay={2} className={styles.text}>
          {text}
        </Reveal>
      </div>
    </section>
  );
}
