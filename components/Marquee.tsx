import styles from "./Marquee.module.css";

export function Marquee() {
  const items = "Sintetica  ◆  Idee  ◆  Struttura  ◆  Possibilità  ◆  Adattamento  ◆  Persone  ◆  Cambiamento  ◆  Organizzazione  ◆";

  return (
    <div className={styles.strip}>
      <div className={styles.track}>
        <span className={styles.text}>{items}&nbsp;&nbsp;&nbsp;{items}&nbsp;&nbsp;&nbsp;{items}&nbsp;&nbsp;&nbsp;{items}</span>
      </div>
    </div>
  );
}
