import styles from "./Citazione.module.css";
import { FadeUp } from "./FadeUp";

export function Citazione() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <FadeUp as="blockquote">
          <p className={styles.text}>
            Ogni organizzazione contiene possibilit&agrave; inespresse.<br />
            Il nostro lavoro &egrave; creare le condizioni<br />
            perch&eacute; possano emergere.
          </p>
        </FadeUp>
        <div className={styles.divider} />
      </div>
    </section>
  );
}
