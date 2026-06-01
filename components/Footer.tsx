import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.logo}>S<span className={styles.dot}>.</span></span>
          <span className={styles.copy}>© 2026</span>
        </div>
        <p className={styles.tagline}>Idee & struttura</p>
      </div>
    </footer>
  );
}
