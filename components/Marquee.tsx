import styles from "./Marquee.module.css";

export function Marquee() {
  return (
    <div className={styles.strip}>
      <div className={styles.track}>
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className={styles.inner}>
            Sintetica
            <span className={styles.sep}>◆</span>
            Idee
            <span className={styles.sep}>◆</span>
            Struttura
            <span className={styles.sep}>◆</span>
            Possibilità
            <span className={styles.sep}>◆</span>
            Persone
            <span className={styles.sep}>◆</span>
            Processi
            <span className={styles.sep}>◆</span>
            Adattamento
            <span className={styles.sep}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
