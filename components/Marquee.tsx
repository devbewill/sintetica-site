import styles from "./Marquee.module.css";

export function Marquee() {
  return (
    <div className={styles.strip}>
      <div className={styles.track}>
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className={styles.inner}>
            Sintetica
            <span className={styles.sep}>◆</span>
            Semplificare
            <span className={styles.sep}>◆</span>
            Rimuovere
            <span className={styles.sep}>◆</span>
            Attivare
            <span className={styles.sep}>◆</span>
            Governance
            <span className={styles.sep}>◆</span>
            AI
            <span className={styles.sep}>◆</span>
            Risultati
            <span className={styles.sep}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
