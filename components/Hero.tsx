import styles from "./Hero.module.css";
import { FadeUp } from "./FadeUp";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Dare forma<br />al cambiamento.</h1>
        <div className={styles.divider} />
        <p className={styles.subtitle}>Le idee generano possibilità.</p>
      </div>
    </section>
  );
}
