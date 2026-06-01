import styles from "./Contatto.module.css";
import { FadeUp } from "./FadeUp";

export function Contatto() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <FadeUp delay={1}>
          <h2 className={styles.label}>Contatto</h2>
        </FadeUp>
        <FadeUp delay={2}>
          <p className={styles.text}>
            Se credi che la tua organizzazione possa fare di pi&ugrave;<br />
            con ci&ograve; che gi&agrave; ha, scrivici.
          </p>
        </FadeUp>
        <FadeUp delay={3}>
          <a href="mailto:hello@sintetica.xyz" className={styles.email}>
            hello@sintetica.xyz
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
