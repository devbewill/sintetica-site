import styles from "./Footer.module.css";

const links = [
  { label: "Servizi", href: "#servizi" },
  { label: "Processo", href: "#processo" },
  { label: "FAQ", href: "#faq" },
  { label: "Contatto", href: "#contatto" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>
              <span className={styles.logoMark}>S</span>
              Sintetica<span className={styles.dot}>.</span>
            </span>
            <p className={styles.tagline}>Semplificare per crescere</p>
          </div>

          <div className={styles.cols}>
            <div className={styles.col}>
              <span className={styles.colLabel}>Sezioni</span>
              <ul>
                {links.map((l) => (
                  <li key={l.href}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </div>
            <div className={styles.col}>
              <span className={styles.colLabel}>Contatti</span>
              <ul>
                <li><a href="mailto:hello@sintetica.xyz">hello@sintetica.xyz</a></li>
                <li><span>Milano, Italia</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>© 2026 Sintetica</span>
          <div className={styles.legal}>
            <span>P.IVA in definizione</span>
            <span className={styles.sep}>—</span>
            <span>Design by Sintetica</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
