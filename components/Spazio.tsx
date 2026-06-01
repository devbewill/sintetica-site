import styles from "./Spazio.module.css";
import { FadeUp } from "./FadeUp";

export function Spazio() {
  return (
    <section className={styles.spazio}>
      <div className={styles.inner}>
        <FadeUp>
          <div className={styles.content}>
            <span className={styles.mark} aria-hidden="true">&ldquo;</span>
            <p className={styles.text}>
              Tra l&rsquo;intuizione e l&rsquo;esecuzione<br />
              esiste uno spazio.<br />
              Dove le possibilit&agrave; trovano struttura.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
