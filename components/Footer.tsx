import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.copy}>&copy; 2026 Sintetica</span>
        <span className={styles.tagline}>Idee &amp; struttura</span>
      </div>
    </footer>
  );
}
