import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.logo}>
            S<span className={styles.accent}>.</span>
          </span>
          <span className={styles.copy}>&copy; 2026</span>
        </div>
        <div className={styles.right}>
          <span className={styles.tagline}>Idee &amp; struttura</span>
          <span className={styles.dot} aria-hidden="true" />
        </div>
      </div>
    </footer>
  );
}
